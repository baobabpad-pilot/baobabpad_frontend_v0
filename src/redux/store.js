import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./slices/Auth-api"; // Import your RTK Query API slice

const store = configureStore({
  reducer: {
    ...rootReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
setupListeners(store.dispatch);

export default store;
