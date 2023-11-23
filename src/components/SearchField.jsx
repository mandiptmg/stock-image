import { useState } from "react"
import { useGlobalContext } from "../App";


const SearchField = () => {
 const [searchValue, setSearchValue] = useState('');
 const {fetchData,setSearchImage} = useGlobalContext();
 const handelEnterSearch = (e) =>{
  if( e.key === 'Enter'){
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=5AnUxvk_GPhC-GgUKip30mMU5sMAYnwVVEqgUaNx3s4`
    )
    setSearchValue('');
    setSearchImage(searchValue);
  }
 }
  return (
    <div className='flex '>
      <input
        className='bg-gray-50 border border-gray-300 text-small w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl '
        type='search'
        placeholder='Search Anything...'
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
        onKeyDown={handelEnterSearch}
      />
      <button
      onClick={()=> 
       {
        fetchData(
          `search/photos?page=1&query=${searchValue}&client_id=5AnUxvk_GPhC-GgUKip30mMU5sMAYnwVVEqgUaNx3s4`
        )
        setSearchValue('')}}
      disabled = {!searchValue}
      className='text-white bg-blue-600 hover:bg-blue-600 rounded-tr rounded-br py-1 px-3 capitalize  border disabled:bg-gray-200 focus:ring-blue-300 '>
        search
      </button>
    </div>
  )
}

export default SearchField