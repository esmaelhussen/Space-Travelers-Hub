import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3';
const ROCKET_URL = ` ${URL}/rockets `;
const GET_ROCKETS = 'rockets/GET_ROCKETS';
const RESERVED = 'rockets/RESERVED';

/* eslint-disable default-param-last */
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return [...state, ...action.payload];
    case RESERVED: {
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
    }
    default:
      return state;
  }
};

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const response = await axios.get(ROCKET_URL);
  return response.data.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    image: rocket.flickr_images[0],
    description: rocket.description,
    reserved: false,
  }));
});

export const reserveRocket = (id) => ({
  type: RESERVED,
  payload: id,
});

export default rocketsReducer;
