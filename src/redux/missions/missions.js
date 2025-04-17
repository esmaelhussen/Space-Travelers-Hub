import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.spacexdata.com/v3";
const mission = `{${API_URL}}/missions`;
const GET_MISSIONS = "missions/GET_MISSIONS";
const ToGGLE_MISSION = "missions/ToGGLE_MISSION";

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
        return [...state, ...action.payload]; 
    case ToGGLE_MISSION:{
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
}

export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const response = await axios.get(mission);
  return response.data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    joined: false,
  }));
});

export const toggle_mission = (id) => ({
type: ToGGLE_MISSION,
payload: id,
});

export default missionsReducer;