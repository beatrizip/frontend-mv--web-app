import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Detail = (_, {i18n}) => (
  <>
    <Helmet>
      <h1>holi pages/home</h1>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
  </>
)

Detail.contextTypes = {i18n: PropTypes.object}

export default Detail
