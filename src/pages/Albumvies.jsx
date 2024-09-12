import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../redux/action";
import Loader from "../components/Loader";

const Albumvies = () => {
  const { photos = [], loading: photosLoading } = useSelector(
    (state) => state.photos
  );
  const [slidebar, hideSlidebar] = useState(false);
  const { albumId } = useParams();
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (photos.length === 0) {
      dispatch(fetchPhotos());
    }
  }, [dispatch, photos.length]);

  useEffect(() => {
    if (albumId && photos.length > 0) {
      const albumPhotos = photos.filter(
        (photo) => photo.albumId === parseInt(albumId)
      );
      setFilteredPhotos(albumPhotos);
    }
  }, [albumId, photos]);

  return (
    <>
      <Dashboard slidebar={slidebar} hideSlidebar={hideSlidebar} />
      <div className="h-screen flex justify-center items-center w-screen">
        {photosLoading ? (
          <Loader />
        ) : (
          <div className="max-w-lg">
            <Carousel>
              {filteredPhotos.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.url}
                  alt={photo.title}
                  className="rounded-md"
                />
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </>
  );
};

export default Albumvies;
