import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MovieDetail from 'frontend-mv--uilib-components-movie-detail'

const Detail = ({movie}) => {
  return (
    <div className="mv-PageDetail">
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>

      <MovieDetail movie={movie} />
    </div>
  )
}

Detail.getInitialProps = async ({context, routeInfo}) => {
  const {id} = routeInfo.params

  const movie = await context.domain
    .get('get_movie_detail_use_case')
    .execute({id})

  return {movie}
}

Detail.propTypes = {
  movie: PropTypes.object.isRequired
}

export default Detail
