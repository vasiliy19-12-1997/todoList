import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ITodo, IUser } from "../../types/types";
type TodoIdPageParams = {
  id: string;
};
const TodoIdPage = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const params = useParams<TodoIdPageParams>();
  const navigate = useNavigate();
  useEffect(() => {
    fetchTodo();
  }, []);
  const fetchTodo = async (limit = 10, page = 2) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/" + params.id,
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      );
      setTodo(response.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      {todo?.id} {todo?.title} {todo?.userId} {todo?.completed}
    </div>
  );
};

export default TodoIdPage;
