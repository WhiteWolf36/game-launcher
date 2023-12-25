import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "84453346ffc54260acc6910769467e07",
  },
});
