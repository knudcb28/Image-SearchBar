import Head from "next/head";
import SearchBar from "../components/SearchBar";
import ImageGallery from "../components/ImageGallery";
import { useState, useEffect } from "react";
import { createApi } from "unsplash-js";

const Home = () => {
  // initial state with an empty array - showing no photos to the user
  const [photosGallery, setphotosGallery] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // function that gets a collection of photos from the unsplash API based on query input
  const getPhotos = async () => {
    const unsplash = createApi({
      accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
    });

    const photos = await unsplash.search.getPhotos({
      query: searchValue,
      page: 1,
      perPage: 10,
      orientation: "portrait",
    });

    const photoArray = photos?.response.results;
    return photoArray;
  };

  // onSubmit event handler function, updates state to show animal photos
  const handleSubmit = async (e) => {
    e.preventDefault();
    setphotosGallery(await getPhotos());
  };

  // map through photosGallery array and display photos for user to see from ImageGallery component
  const displayPhotos = photosGallery.map((photo, index) => {
    return <ImageGallery key={index} url={photo.urls["small"]} />;
  });


  return (
    <div className="">
      <Head>
        <title>Image SearchBar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <SearchBar onSubmit={handleSubmit} setSearchValue={setSearchValue} />
      {/* Default view shows nothing to user, but if a user submits a search, then counter is updated and photo's appear  */}
        <div>{photosGallery.length ? <div className="flex flex-wrap justify-center mt-6">{displayPhotos}</div> : null}</div>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
