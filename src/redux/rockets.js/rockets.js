import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.spacexdata.com/v4";
const rocket = `{${API_URL}}/rockets`;
const GET_ROCKETS = "rockets/GET_ROCKETS";
const ToGGLE_RESERVED = "missions/ToGGLE_RESERVED";

const rocketsReducer = (state = [], action) => {
    switch (action.type) {
      case `${GET_ROCKETS}/fulfilled`:
          return [...state, ...action.payload]; 
      case ToGGLE_RESERVED:{
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
  }

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

export const toggle_rocket = (id) => ({
type: ToGGLE_RESERVED,
payload: id,
});

export default rocketsReducer;