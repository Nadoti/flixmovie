import React from 'react'

export function Banner() {
  let api = '&api_key=fe711924d01611d5e183b05b5010b8e7'
  let url = 'https://api.themoviedb.org/3'

  let url_img = 'https://image.tmdb.org/t/p/w500/'

  const [img, setImg] = React.useState([])
  React.useEffect(() => {
    async function teste() {
      await fetch(`${url}/discover/movie?sort_by=popularity.desc${api}`)
        .then(res => res.json())
        .then(json => console.log(json))
    }
    teste()
  }, [])
  return (
    <section >
      <div>

      </div>

      <div>
        <div>

        </div>

        <div></div>
      </div>
    </section>
  )
}
