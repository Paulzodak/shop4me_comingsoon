import { createSlice } from "@reduxjs/toolkit";
export interface Settings {
  settings: {
    accountSummary: boolean;
    createdAt: string;
    email: string;
    newsAndUpdates: boolean;
    reminders: boolean;
    tipsAndTutorial: boolean;
    updatedAt: boolean;
  };
}
// export interface userState {
//   user: User;
// }
const initialState: any = {
  settings: {
    accountSummary: "",
    createdAt: "",
    email: "",
    newsAndUpdates: "",
    reminders: "",
    tipsAndTutorial: "",
    updatedAt: "",
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
    setSettings: (state: any, action: any) => {
      state.settings = action.payload;
    },
  },
});
export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
