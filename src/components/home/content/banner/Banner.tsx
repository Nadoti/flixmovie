import React from 'react'
import imagem1 from '../../../../assets/img1.png'
import imagem2 from '../../../../assets/img2.png'
import imagem3 from '../../../../assets/img3.png'

export function Banner() {
  let url_key = '&api_key=fe711924d01611d5e183b05b5010b8e7'
  let url = 'https://api.themoviedb.org/3'

  let url_img = 'https://image.tmdb.org/t/p/w500/'

  const [listImgBanner, setListImgBanner] = React.useState([])
  const [selectedImgBanner, setSelectedImgBanner] = React.useState({})


  async function takeMoviePolular() {
    await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=fe711924d01611d5e183b05b5010b8e7&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => {
        const takeThree = json.results.slice(0, 3)
        setListImgBanner(takeThree)
        setSelectedImgBanner(takeThree[0])
        //console.log(takeThree)
      })
  }

  React.useEffect(() => {

    takeMoviePolular()
  }, [])

  function handleImgBannerSelect({ target }) {
    const takeObjectSelected = listImgBanner.find(resp => resp.id === Number(target.id))
    setSelectedImgBanner(takeObjectSelected)
  }

  //backdrop_path
  return (
    <section className='w-[58rem] h-[20rem] mt-8 mb-0 mx-auto' >
      <div style={{ backgroundImage: `url(${url_img}${selectedImgBanner?.backdrop_path}` }} className="w-full h-full bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col">
        <div className='flex items-center gap-8 p-12'>
          <span className='text-white bg-zinc-600 py-1 px-2 text-xs rounded-3xl'>40XP</span>
          <div className='flex items-center'>
            <img src={imagem1} className="w-5 h-5 rounded-full" />
            <img src={imagem2} className="w-5 h-5 rounded-full" />
            <img src={imagem3} className="w-5 h-5 rounded-full" />
            <p className='text-xs ml-2 text-white'>+5 friends are watching</p>
          </div>
        </div>

        <div className='flex justify-between w-full'>
          <div className='ml-12 mt-10 w-full'>
            <h1 className='text-white text-4xl font-bold mb-4'>O Poderoso Chefão</h1>
            <span className='text-white text-sm'>98% Match</span>
            <div className='w-full flex items-center justify-between'>
              <div className='flex gap-4'>
                <button className='bg-red-600 text-white py-2 px-4 rounded-lg text-sm '>Watch</button>
                <button className='bg-gray-500 text-white py-1 px-3 rounded-lg text-lg '>+</button>
              </div>
              <div className='flex gap-4 mr-12'>
                {listImgBanner?.map(item => (
                  <button key={item.id} onClick={handleImgBannerSelect}>
                    <img id={item.id} className={`w-24 rounded-lg ${selectedImgBanner.id === item.id ? 'shadow-md shadow-white' : 'shadow-none'}`} src={`${url_img}${item.backdrop_path}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  )
}
