import axios from "axios";
export default axios.create({
  params: {
    key: "56d6290d47ba43ff80524da7ca479788",
  },
  baseURL: "https://api.rawg.io/api/",
});
