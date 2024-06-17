import { Provider } from 'react-redux'
import Body from './components/Body'
import appStore from './components/appStore'
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  

  return (
    <>
    <StyledEngineProvider injectFirst>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </StyledEngineProvider>

    </>
  )
}

export default App
