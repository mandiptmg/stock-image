import Images from "./components/Images";
import Header from "./components/Header";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";
import { createContext, useContext, useState } from "react";

//create context 
 const ImageContext = createContext(); 
const App = () => {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=office&client_id=5AnUxvk_GPhC-GgUKip30mMU5sMAYnwVVEqgUaNx3s4`
  )
 
  return (
    <ImageContext.Provider
      value={{
        response,
        isLoading,
        error,
        fetchData,
        searchImage,
        setSearchImage,
      }}
    >
      <Header>
        <SearchField />
      </Header>
      <Images />
    </ImageContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(ImageContext)
}

export default App