import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
