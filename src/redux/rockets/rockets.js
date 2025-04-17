import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v4';
const rocket = ` ${API_URL}/rockets `;
const GET_ROCKETS = 'rockets/GET_ROCKETS';
const TOGGLE_RESERVED = 'missions/TOGGLE_RESERVED';

/* eslint-disable default-param-last */
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return [...state, ...action.payload];
    case TOGGLE_RESERVED: {
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
  const response = await axios.get(rocket);
  return response.data.map((rocket) => ({
    id: rocket.rocket,
    image: rocket.flickr_images[0],
    name: rocket.rocket_name,
    description: rocket.description,
    reserved: false,
  }));
});

export const toggleRocket = (id) => ({
  type: TOGGLE_RESERVED,
  payload: id,
});

export default rocketsReducer;
