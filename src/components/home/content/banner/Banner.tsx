import React from 'react'

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
        console.log(takeThree)
      })
  }

  React.useEffect(() => {

    takeMoviePolular()
  }, [])
  console.log(selectedImgBanner)
  //backdrop_path
  return (
    <section className='w-[58rem] h-[20rem] mt-8 mb-0 mx-auto' >
      <div style={{ backgroundImage: `url(${url_img}${selectedImgBanner?.backdrop_path}` }} className="w-full h-full bg-no-repeat bg-center bg-cover rounded-3xl">
        <div>
          a
        </div>

        <div>
          <div>

          </div>

          <div></div>
        </div>
      </div>
    </section>
  )
}
