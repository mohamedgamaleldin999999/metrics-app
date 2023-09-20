import { configureStore } from '@reduxjs/toolkit';
import zonesReducer from './Zones';
import zoneReducer from './Zone';

const store = configureStore({
  reducer: {
    zones: zonesReducer,
    zone: zoneReducer,
  },
});
export default store;
