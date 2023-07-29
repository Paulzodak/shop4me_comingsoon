import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import utilitySlice from "./slices/utilitySlice";
import jobSlice from "./slices/jobSlice";
import notificationSlice from "./slices/notificationSlice";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, PreloadedState } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import localStorage from "redux-persist/es/storage";
import session from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import settingsSlice from "./slices/settingsSlice";
const isClient = typeof window == "undefined";

const persistConfig = {
  key: "shop4me1234",
  storage,
  // whitelist: ["user"],
};
const rootPersistConfig = {
  key: "root1234",
  session,
  // whitelist: ["user"],
};
const rReducer = combineReducers({
  user: userSlice,
  utilities: utilitySlice,
  jobs: jobSlice,
  notifications: notificationSlice,
  settings: settingsSlice,
});
export const rootReducer = (state: any, action: any) => {
  if (action.type === "user/logout") {
    state.user = undefined;
    state.notifications = undefined;
  }
  return rReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore: any = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    console.log("server rendering");
    const store = configureStore({
      reducer: rootReducer,
      // devTools: process.env.NODE_ENV !== "production",
      middleware: [thunk],
    });
    return store;
  } else {
    console.log("client rendering");
    const store: any = configureStore({
      reducer: persistedReducer,
      // devTools: process.env.NODE_ENV !== "production",
      middleware: [thunk],
    });
    const persistor = persistStore(store, null, () => {
      // persistor.flush();
      // persistor.purge();
    });
    store.__persistor = persistStore(store); // Nasty hac
    return store;
  }
};

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
export const wrapper = createWrapper(makeStore);
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
