import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/action";
import { fetchPhotos } from "../redux/action"; 
import Loader from "../components/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Photos = () => {
  const dispatch = useDispatch();
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [slidebar, hideSlidebar] = useState(false);
  const [selectUser, setSelectUser] = useState("");

  
  const { photos = [], loading: photosLoading } = useSelector(
    (state) => state.photos
  );
  const { users = [], loading: usersLoading } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchPhotos()); 
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (selectUser) {
      const filtered = photos.filter((item) => item.albumId === selectUser);
      setFilteredPhotos(filtered);
    } else {
      setFilteredPhotos(photos);
    }
  }, [selectUser, photos]);

  const handleUserChange = (e) => {
    setSelectUser(parseInt(e.target.value));
  };

  return (
    <>
      <Dashboard slidebar={slidebar} hideSlidebar={hideSlidebar} />

      <div className="mb-6 photo flex flex-col justify-center items-center ">
        {photosLoading || usersLoading ? (
          <Loader />
        ) : (
          <select
            id="user-select"
            value={selectUser}
            onChange={handleUserChange}
            className="mt-20 ml-52 px-4 py-2 rounded-lg text-center shadow-lg shadow-indigo-600 bg-indigo-700 text-white font-semibold cursor-pointer"
          >
            <option value="" className="cursor-pointer">
              Select a user
            </option>
            {users.map((user) => (
              <option
                key={user.id}
                value={user.id}
                className="bg-white text-black cursor-pointer"
              >
                {user.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="grid grid-cols-4 gap-1 card justify-center">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="w-60 mb-6 ml-72 rounded-lg overflow-hidden shadow-2xl cursor-pointer bg-gradient-to-r from-cyan-500 to-orange-500 text-white"
          >
            <LazyLoadImage
              className="w-60"
              src={photo.thumbnailUrl}
              alt={photo.title}
              loading="lazy"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{photo.title}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Photos;
