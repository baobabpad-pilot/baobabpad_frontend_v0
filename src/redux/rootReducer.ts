import { combineReducers } from '@reduxjs/toolkit';
import formDataReducer from '../redux/slices/formDataSlice';

const rootReducer = combineReducers({
  formData: formDataReducer,
  // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;