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
        console.log(takeThree)
      })
  }

  React.useEffect(() => {

    takeMoviePolular()
  }, [])

  return (
    <section >
      <div>
        {listImgBanner?.map(item => (
          <img key={item.id} src={`${url_img}${item.backdrop_path}`} alt="" />
        ))}
      </div>

      <div>
        <div>

        </div>

        <div></div>
      </div>
    </section>
  )
}
