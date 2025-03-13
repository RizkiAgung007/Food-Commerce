import React from 'react'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollTop';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <div>
      <Home />
      <ToastContainer />
      <ScrollToTop />
    </div>
  )
}

export default App