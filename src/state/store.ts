import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import companySlice from "./companies/companySlice.ts";
import authSlice from "./auth/authSlice.ts";
import vehicleSlice from "./vehicles/vehicleSlice.ts";
import dashboardSlice from "./dashboard/dashboardSlice.ts";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["errors"],
};

const rootReducers = combineReducers({
  authSlice,
  companySlice,
  vehicleSlice,
  dashboardSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
