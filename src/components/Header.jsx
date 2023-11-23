
const Header = ({children}) => {
  return (
    <div className="bg-[url('https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg')] bg-center bg-no-repeat bg-cover  flex items-center py-10 ">
      <div className='max-w-md mx-auto w-full'>
        <h1 className='capitalize text-white text-2xl font-bold mb-5 text-center'>
          find image
        </h1>
        {children}
      </div>
    </div>
  )
}

export default Header