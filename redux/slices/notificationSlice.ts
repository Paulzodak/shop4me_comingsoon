import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { socket } from "@/utils/global";
export interface NotificationState {
  notifications: any;
}
const initialState: any = {
  notifications: [],
};
// export const getNotifications: any = createAsyncThunk(
//   "notifications/getNotifications",
//   async (id: string) => {
//     // console.log("i ran");
//     // console.log(id);

//     // socket.emit("fetchNotification", id);
//     return await new Promise((resolve) => {
//       socket.on("connect", () => {
//         console.log("socketio connected");
//         socket.emit("fetchNotificationFromClient", id);
//         socket.on("fetchNotificationToClient", (result) => {
//           // console.log(result);
//           result && resolve(result);
//         });
//       });
//     });
//     // return socket.on("fetchNotification", (data) => {
//     //   // console.log(data);
//     //   return data;
//     // });
//   }
// );
export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotification: (state: any, action: any) => {
      console.log(action.payload);
      state.notifications = action.payload;
      // state.notifications = [];
      //   action?.payload?.notifications?.length > 1 &&
      //     action.payload.notifications.map((item: any) =>
      //       state.notifications.push(item)
      //     );
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getNotifications.pending, () => {});
  //   builder.addCase(getNotifications.fulfilled, (state, action) => {
  //     state.notifications = action.payload;
  //   });
  //   builder.addCase(getNotifications.rejected, () => {});
  // },
});
export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
