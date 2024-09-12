import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchTodos } from "../redux/action";
import Loader from "../components/Loader";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos = [], loading: todosLoading } = useSelector(
    (state) => state.todos
  );
  const { users = [], loading: usersLoading } = useSelector(
    (state) => state.users
  );

  const [slidebar, hideSlidebar] = useState(false);
  const [selectUser, setSelectUser] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchUsers());
  }, [dispatch]);

  const HandleUser = (e) => {
    setSelectUser(e.target.value);
  };

  const FilterTodos = todos.filter((todo) => {
    return (
      selectUser === "" ||
      (todo.userId.toString() === selectUser && !todo.completed)
    );
  });

  return (
    <>
      <Dashboard slidebar={slidebar} hideSlidebar={hideSlidebar} />
      <div className="todo">
        {todosLoading || usersLoading ? (
          <Loader />
        ) : (
          <div className="w-full flex flex-col justify-center items-center mt-24 mb-6">
            <h2 className="font-bold text-2xl italic bg-rose-500 mt-4 px-5 py-2 rounded-md text-white shadow-lg shadow-red-700">
              To-Do List
            </h2>
            <select
              className="mt-10 shadow-md shadow-gray-800 px-3 py-1 rounded "
              id="userSelect"
              value={selectUser}
              onChange={HandleUser}
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <ul className="p-0 mt-2 ">
              {FilterTodos.length > 0 ? (
                FilterTodos.map((todo) => (
                  <li
                    key={todo.id}
                    className="px-2 py-2 flex text-black text-lg justify-center items-center bg-orange-200 mx-3 my-4 rounded-md shadow-lg shadow-orange-400"
                  >
                    {todo.title}
                  </li>
                ))
              ) : (
                <p>No Todos Found</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Todos;
