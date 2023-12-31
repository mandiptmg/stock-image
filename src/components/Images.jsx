import { useGlobalContext } from "../App"
import Image from "./Image";
import Skeletion from "./Skeletion";

const Images = () => {
 const {response, isLoading, searchImage } = useGlobalContext();
  return (
    <>
      <h1 className='text-center mt-6 underline text-2xl first-letter:capitalize '>
        results for { searchImage|| 'Cats'}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 mx-w-7xl mx-auto px-4">
      { isLoading ? <Skeletion item={10}/> : response.map((data, index)=><Image key={index} data={data}/>)}
      </div>
    </>
  )
}

export default Images