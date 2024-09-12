import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbum } from "../redux/action";
import { fetchUsers } from "../redux/action";

const Album = () => {
  const dispatch = useDispatch();
  const [selectUser, setSelectUser] = useState();
  const [filterAlbum, setFilterAlbum] = useState([]);
  const [slidebar, hideSlidebar] = useState(false);

  const { albums = [], loading: albumLoading } = useSelector(
    (state) => state.albums
  );
  const { users = [], loading: userLoading } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchAlbum());
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (selectUser) {
      const filtered = albums.filter((item) => item.userId === selectUser);
      setFilterAlbum(filtered);
    } else {
      setFilterAlbum(albums);
    }
  }, [selectUser, albums]);

  const handleUserChange = (e) => {
    setSelectUser(parseInt(e.target.value));
  };

  return (
    <>
      <Dashboard slidebar={slidebar} hideSlidebar={hideSlidebar} />
      <div className="Album">
        {albumLoading || userLoading ? (
          <Loader />
        ) : (
          <div>
            <h2 className="mt-20 font-bold text-2xl text-center">Album</h2>
            <div className="flex items-center justify-center">
              <select
                className="px-5 cursor-pointer py-2 mt-7 rounded-lg shadow-lg shadow-slate-700"
                onChange={handleUserChange}
              >
                <option value="selectUser">Select User</option>
                {users.map((user) => (
                  <option
                    key={user.id}
                    value={user.id}
                    className="cursor-pointer"
                  >
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="ml-72 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
              {filterAlbum.map((album) => (
                <Link to={`/album/${album.id}`} key={album.id}>
                  <div
                    key={album.id}
                    className="bg-white shadow-md rounded-lg p-3 cursor-pointer"
                  >
                    <h3 className="font-bold text-lg mb-2">{album.title}</h3>
                    <p className="text-gray-600">Album ID: {album.id}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Album;
