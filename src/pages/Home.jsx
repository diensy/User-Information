import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/action";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";

const Home = () => {
  const [slidebar, hideSlidebar] = useState(false);
  const dispatch = useDispatch();
  const { users = [], loading: usersLoading, error: usersError } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Dashboard slidebar={slidebar} hideSlidebar={hideSlidebar} />
      <div className="home">
        {usersLoading ? (
          <Loader />
        ) : usersError ? (
          <div className="error-message">Error: {usersError}</div>
        ) : (
          <div className="mt-20 ml-72 grid grid-cols-4 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="shadow-md rounded-md shadow-gray-400 px-3 py-3 font-semibold"
              >
                <p>UserId: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>UserName: {user.username}</p>
                <p>Email: {user.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
