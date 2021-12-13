import PropTypes from 'prop-types'

const App = ({children}) => {
  return <div className="App">{children}</div>
}

export default App

App.propTypes = {
  children: PropTypes.children
}
