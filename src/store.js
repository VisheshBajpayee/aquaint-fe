import { configureStore } from "@reduxjs/toolkit";
import registerFormFeature from "./redux/features/registerFormFeature";
const store = configureStore({
  reducer: {
    registerFormState: registerFormFeature,
  },
});

export default store;
