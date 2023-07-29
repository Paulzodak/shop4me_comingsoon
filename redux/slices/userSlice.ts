import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "../../utils/global";
import Cookies from "js-cookie";
// export interface User {
//   fullname?: string;
//   id?: number;
//   email?: string;
//   imageUrl?: string;
// }
// export interface userState {
//   user: User;
// }
const initialState: any = {
  user: undefined,
};

export const getUser: any = createAsyncThunk(
  "user/getUser",
  async (email: any, thunkAPI) => {
    try {
      const response = await axios.post(`${BASEURL}/user/fetchUser`, {
        email: email,
      });
      return response.data.user._doc;
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
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
    logout: (state: any) => {
      // state.user = undefined;
      Cookies.remove("JobsonLoggedIn");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        console.log("i ran");
        // state.loading = true;
        // state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        // state.loading = false;
        state.user = action.payload;
        console.log("i ran");
      })
      .addCase(getUser.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.error.message;
        console.log("i ran");
      });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
