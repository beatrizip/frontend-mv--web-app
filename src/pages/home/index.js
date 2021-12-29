import React, {useContext, useEffect, useState} from 'react'
import Helmet from 'react-helmet'
import Context from '@s-ui/react-context'
import MoleculePagination from '@s-ui/react-molecule-pagination'
import HeaderSearch from 'frontend-mv--uilib-components-header-search'
import List from 'frontend-mv--uilib-components-content-list'
import Card from 'frontend-mv--uilib-components-content-card'
import MoviePoster from 'frontend-mv--uilib-components-movie-poster'
import MovieInfo from 'frontend-mv--uilib-components-movie-info'

const Home = () => {
  const BASE_CLASS = 'mv-PageHome'
  const MAX_PAGES = 10
  const PREV_BUTTON_TEXT = 'Anterior'
  const NEXT_BUTTON_TEXT = 'Siguiente'

  const {domain} = useContext(Context)

  const [movies, setMovies] = useState([])
  const [criteria, setCriteria] = useState('')
  const [totalSearch, setTotalSearch] = useState(-1)
  // Total search =  0 -> 0 resultados encontrados
  //              =  n -> n resultados encontrados
  //              = -1 -> no hay búsqueda
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    showPopularMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    searchByCriteriaAndPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, criteria])

  const onSelectPage = (_, {page}) => {
    setPage(page)
  }

  const searchMovies = param => {
    if (criteria !== param) setPage(1)
    // Si ha cambiado el criterio de busqueda mostramos la primera pagina
    if (param === '') {
      // Si vacia el campo de busqueda reiniciamos el contador de resultados y mostramos las mas populares
      showPopularMovies()
      setTotalSearch(-1)
    }
    setCriteria(param)
    // Establecemos el nuevo criterio de busqueda
  }

  const showPopularMovies = () => {
    domain
      .get('get_most_popular_movie_list_use_case')
      .execute()
      .then(({results}) => setMovies(results))
      .catch(error =>
        console.log('ERROR (get_most_popular_movie_list_use_case): ', error)
      )
  }

  const searchByCriteriaAndPage = () => {
    domain
      .get('get_movie_list_by_criteria_and_page_use_case')
      .execute({criteria, page})
      .then(
        ({
          results: movieList,
          total_results: totalMovies,
          total_pages: totalPages
        }) => {
          setTotalSearch(totalMovies)
          totalPages < MAX_PAGES
            ? setTotalPages(totalPages)
            : setTotalPages(MAX_PAGES)
          setMovies(movieList)
        }
      )
      .catch(error =>
        console.log(
          'ERROR (get_movie_list_by_criteria_and_page_use_case): ',
          error
        )
      )
  }

  return (
    <>
      <div className="mv-PageHome">
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <HeaderSearch onButtonClick={searchMovies} />

        {totalSearch === 0 && (
          <div className={`${BASE_CLASS}-noResults`}>
            No search results with "{criteria}"
          </div>
        )}

        {totalSearch > 0 && (
          <div className={`${BASE_CLASS}-total`}>{totalSearch} matches</div>
        )}

        {totalSearch < 0 && (
          <div className={`${BASE_CLASS}-new`}>Latest releases</div>
        )}

        <div>
          <List>
            {movies.map(({title, overview, id, poster_path: poster}, index) => {
              return (
                <li key={index}>
                  <Card
                    content={<MovieInfo title={title} text={overview} />}
                    media={<MoviePoster path={poster} />}
                    href={`/movie/${id}`}
                  />
                </li>
              )
            })}
          </List>

          {totalPages > 1 && (
            <div className={`${BASE_CLASS}-pager`}>
              <MoleculePagination
                totalPages={totalPages}
                page={page}
                showPages={totalPages}
                prevButtonText={PREV_BUTTON_TEXT}
                nextButtonText={NEXT_BUTTON_TEXT}
                onSelectNext={onSelectPage}
                onSelectPrev={onSelectPage}
                onSelectPage={onSelectPage}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
