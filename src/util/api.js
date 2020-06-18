import axios from "axios";

export default {
  search: function () {
    return axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => this.setState({ users: res.data }));
  },
};
