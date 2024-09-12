import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/action";
import Loader from "../components/Loader";

const User = () => {
  const [slidebar, hideSlidebar] = useState(false);
  const dispatch = useDispatch();

  const {
    users = [],
    loading: usersLoading,
    error,
  } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Dashboard slidebar={slidebar} hideSlidebar={hideSlidebar} />
      <div className="table_class">
        {usersLoading ? (
          <Loader />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className=" mb-3 ml-12 ">
            <h1 className="text-center font-bold text-3xl mt-24 text-sky-600 heading shadow-md shadow-sky-400 rounded-md">
              Users Data Table
            </h1>
            <table className="ml-64 mt-7">
              <thead>
                <tr className="items-center w-screen mt-8 font-semibold font-serif text-xl">
                  <th>Id</th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody className="font-semibold rounded-md text-black text-center ">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.address.street}, {user.address.suite},{" "}
                      {user.address.city}, {user.address.zipcode}
                    </td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>
                      {user.company.name},{user.company.catchPhrase}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default User;
