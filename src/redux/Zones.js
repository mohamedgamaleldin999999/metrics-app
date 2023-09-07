import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchZones } from './Fetch';

const GET_ZONES = 'Dragons/Dragons/GET_ZONES';

const zonesReducer = (state = { zone: [], zones: [] }, action) => {
  switch (action.type) {
    case `${GET_ZONES}/fulfilled`:
      return {
        ...state,
        zones: action.payload,
      };
    default:
      return state;
  }
};

export const getZones = createAsyncThunk(GET_ZONES, (city) => fetchZones(city));

export default zonesReducer;
