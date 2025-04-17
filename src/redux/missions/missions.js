import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3';
const MISSION_URL = `${URL}/missions`;
const GET_MISSIONS = 'missions/GET_MISSIONS';
const JOINED = 'missions/JOINED';

/* eslint-disable default-param-last */
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return [...state, ...action.payload];
    case JOINED: {
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: !mission.joined };
        }
        return mission;
      });
    }
    default:
      return state;
  }
};

export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const response = await axios.get(MISSION_URL);
  return response.data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    joined: false,
  }));
});

export const joinMission = (id) => ({
  type: JOINED,
  payload: id,
});

export default missionsReducer;
