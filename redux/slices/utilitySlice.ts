import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
export interface UtilityState {
  utilitySearch: string | any;
  showSearch: boolean;
  saveRoute: string | any;
  showPhoneModal: boolean;
  jobDetails: boolean;
  savedJobs: [] | any;
  themeModes: any;
  theme: any;
  systemTheme: string;
}
const initialState = {
  utilitySearch: "",
  showSearch: false,
  saveRoute: undefined,
  showPhoneModal: false,
  jobDetails: false,
  savedJobs: [],
  themeModes: [
    { name: "Light", active: false, class: "light" },
    { name: "Dark", active: false, class: "dark" },
    {
      name: "System",
      active: true,
      class: "system",
    },
  ],
  theme: Cookies.get("theme") ? Cookies.get("theme") : "light",
  systemTheme: "light",
};
export const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    setUtilitySearch: (state: any, action: any) => {
      state.utilitySearch = action.payload;
    },
    // setShowSearch:
    setSaveRoute: (state: any, action) => {
      state.saveRoute = action.payload;
    },
    clearSavedRoute: (state: any) => {
      state.saveRoute = "";
    },
    setShowPhoneModal: (state: any, action) => {
      state.showPhoneModal = action.payload;
    },
    setJobDetails: (state: any, action: any) => {
      state.jobDetails = action.payload;
    },
    closeJobDetails: (state: any) => {
      state.jobDetails = undefined;
    },
    setSavedJobs: (state: any, action: any) => {
      state.savedJobs = action.payload;
    },
    setThemeMode: (state: any, action: any) => {
      state.themeModes.map((item: any) => {
        if (item.name == action.payload) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    },
    setSystemTheme: (state: any, action) => {
      state.systemTheme = action.payload;
    },
    setTheme: (state: any, action: any) => {
      state.theme = action.payload;
    },
  },
});
export const {
  setUtilitySearch,
  setSaveRoute,
  clearSavedRoute,
  setShowPhoneModal,
  setJobDetails,
  closeJobDetails,
  setSavedJobs,
  setThemeMode,
  setSystemTheme,
  setTheme,
} = utilitySlice.actions;
export const selectTheme = (state: any) => state.utilities.theme;
export const selectSystemTheme = (state: any) => state.utilities.systemTheme;
export default utilitySlice.reducer;
