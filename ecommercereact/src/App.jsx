import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Router from './Router'
import { ContextProvider } from './contexts/ContextProvider'

function App() {

  return (
    <div className='App'>
      <ContextProvider> 
        <RouterProvider router={Router} />
      </ContextProvider>
    </div>
  )
}

export default App
