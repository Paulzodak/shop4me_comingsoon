import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "@/utils/global";
import { APIURL } from "@/utils/global";
interface JobSliceState {
  jobs: any | [];
  loading: boolean | any;
  resultCount: string | number;
}
const initialState: JobSliceState = {
  jobs: undefined,
  loading: true,
  resultCount: "",
};
export const getJobs: any = createAsyncThunk(
  "jobs/getJobs",
  async (props: any) => {
    // console.log(props);
    let pages = 10;
    const results: any = [];

    try {
      // NEEDS REFACTORING
      const response = await axios.get(
        `https://api.adzuna.com/v1/api/jobs/gb/search/${
          props.currentPage
        }?app_id=${"1370ff3d"}&app_key=${"15cf60f1ca877ddb402d6f4e01fdceba"}${"&results_per_page=20"}${
          props.what && "&title_only=" + props.what
        }${props.salary_min && "&salary_min=" + props.salary_min}${
          props.salary_max && "&salary_max=" + props.salary_max
        }&sort_by=${props.sort_by.toLowerCase()}${
          props.type && "&" + props.type + "=1"
        }${
          props.locationInput && "&where=" + props.locationInput.toLowerCase()
        }`
      );

      // console.log(response);
      // console.log(r);

      // const response = await axios.get(APIURL, {
      //   params: {
      //     page: 1,
      //     descending: true,
      //     category: "Software Engineering",
      //   },
      // });
      // console.log(results);

      if (response?.data?.results)
        return { result: response.data.results, count: response.data.count };
    } catch (error) {}
    // return axios
    //   .post(`${BASEURL}/user/fetchUser`, {
    //     email: email,
    //   })
    //   .then((res) => {
    //     console.log(res.data.user._doc);
    //     return { ...res.data.user._doc };
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // return axios
    //   .get(APIURL, {
    //     params: {
    //       page: 1,
    //       descending: false,
    //       category: "Software Engineering",
    //     },
    //   })
    // .then((res) => {
    //   console.log("i rannnnnn");
    //   const result = res.data.results.filter((job: any) =>
    //     job.categories.some(
    //       (items: any) =>
    //         items.name.toLowerCase().includes("tech") ||
    //         items.name.toLowerCase().includes("software") ||
    //         items.name.toLowerCase() == "it"
    //     )
    //   );
    //   return res.data.results;
    // })

    // .catch((err) => {
    //   console.log(err);
    // });
  }
);
export const jobSlice: any = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state: any, action: any) => {
      state.jobs = action.payload;
    },
    setLoading: (state: any, action: any) => {
      state.jobs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        // console.log("i ran");
        state.loading = true;
        // state.error = null;
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        // console.log(action.payload);
        // state.loading = false;
        if (action?.payload?.result) {
          state.jobs = action.payload.result;
          state.resultCount = action.payload.count;
          state.loading = false;
        }
        // console.log("i ran");
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message;
        // console.log("i ran");
      });
  },
});
export const { setJobs, setLoading } = jobSlice.actions;
export default jobSlice.reducer;
