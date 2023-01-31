import axios from "axios";
export default class ServisTodo {
  static async getAll(limit = 10, page = 1) {
    if (typeof JSON) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      );
      return response.data;
    } else {
      return alert("error");
    }
  }
}
