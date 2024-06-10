import Jumbotron from "./components/Jumbotron";
import SearchField from "./components/SearchField";
import Images from "./components/Images";
import useAxios from "./hooks/useAxios";
import { createContext, useState } from "react";

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");

  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=dogs&client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`
  );
  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
