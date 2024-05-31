import axios from "axios";

const api = axios.create({
  headers: {
    "x-api-key": process.env.API_KEY_GENERATE_ID
  }
});

export default api;