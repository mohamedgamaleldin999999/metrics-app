import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchZone } from './Fetch';

const GET_ZONE = 'Dragons/Dragons/GET_ZONE';

const zoneReducer = (state = { zone: [], zones: [] }, action) => {
  switch (action.type) {
    case `${GET_ZONE}/fulfilled`:
      return {
        ...state,
        zone: action.payload,
      };
    default:
      return state;
  }
};

export const getZone = createAsyncThunk(GET_ZONE, ({ lat, lon }) => fetchZone({ lat, lon }));

export default zoneReducer;
