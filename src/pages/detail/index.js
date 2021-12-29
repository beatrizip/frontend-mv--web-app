import React, {useContext, useEffect, useState} from 'react'
import Context from '@s-ui/react-context'
import Helmet from 'react-helmet'
import MovieDetail from 'frontend-mv--uilib-components-movie-detail'
import {useParams} from '@s-ui/react-router'

const Detail = () => {
  const {id} = useParams()
  const {domain} = useContext(Context)
  const [movie, setMovie] = useState()

  useEffect(() => {
    domain
      .get('get_movie_detail_use_case')
      .execute({id})
      .then(movie => setMovie(movie))
      .catch(error =>
        console.log('ERROR (get_movie_details_use_case): ', error)
      )
  }, [domain, id])

  if (!movie) return null

  return (
    <div className="mv-PageDetail">
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>

      <MovieDetail movie={movie} />
    </div>
  )
}

export default Detail
