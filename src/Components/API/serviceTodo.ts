import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../../types/types";

export default class ServiceTodo {
  static async getTodos(limit = 10, page = 1) {
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
  static async getTodosId(id: string) {
    if (typeof JSON) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/" + id
      );
      return response.data;
    } else {
      return alert("error");
    }
  }
}
