import Head from "next/head";
import SearchBar from "../components/SearchBar";
import ImageGallery from "../components/ImageGallery";
import { useState } from "react";
import { createApi } from "unsplash-js";

const Home = () => {
  // initial state with an empty array - showing no photos to the user
  const [animalPhotosGallery, setAnimalPhotosGallery] = useState([]);
  const [counter, setCounter] = useState(0);

  // function that gets a collection of photos from the unsplash API based on query input
  const getAnimalPhotos = async () => {
    const unsplash = createApi({
      accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
    });

    const photos = await unsplash.search.getPhotos({
      query: "cars",
      page: 1,
      perPage: 10,
      color: "green",
      orientation: "portrait",
    });

    const animalPhotos = photos?.response.results;
    console.log(animalPhotos);
    console.log(animalPhotos[0].urls["small"]);

    return animalPhotos;
  };

  // onSubmit event handler function, updates state to show animal photos
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAnimalPhotosGallery(await getAnimalPhotos());
    setCounter(1);
  };

  // map through animalPhotosGallery array and display photos for user to see from ImageGallery component
const displayPhotos = animalPhotosGallery.map((photo) => {
  return <ImageGallery url={photo.urls["small"]}/>
})
  

  return (
    <div className="">
      <Head>
        <title>Image SearchBar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <SearchBar onSubmit={handleSubmit} />

        <div>
          {counter === 1 ? (
            <div>
            {displayPhotos}
            </div>
          ) : null}
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
