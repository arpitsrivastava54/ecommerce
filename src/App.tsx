import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Suspense } from 'react';

import Footer from './components/Footer'
import NavBar from './components/NavBar'
import websiteRoutes from './routes/websiteRoutes'
import HomePage from './pages/HomePage'
import adminRoutes from './routes/adminRoutes'
import websiteUrlPathName from './utils/websiteUrlPathName'
import adminUrlPathname from './utils/adminUrlPathname'
import Loader from './components/ui/Loader';
import { Toaster } from 'react-hot-toast';


function App() {
  const location = useLocation();
 

  return (
    <>
      <Toaster position='top-center'/>
      {location.pathname.includes('admin') ?
        <>
          <nav className='fixed top-0 left-0 z-50 w-full'>
            <NavBar navItems={adminUrlPathname} />
          </nav>
          <section className='min-h-screen relative top-[78px] p-5'>
            <Routes>
              {
                adminRoutes.map(({ path, element: Element }) =>
                  <Route path={path} element={<Element />} key={path} />
                )
              }
            </Routes>
          </section>
          <br></br>
          <Footer />
        </>
        // main website routes
        : <>
          <nav className='fixed top-0 left-0 z-50 w-full'>
            <NavBar navItems={websiteUrlPathName} />
          </nav>
          <section className='relative top-[78px] p-5 min-h-screen mb-5'>

            <Routes>
              {
                websiteRoutes.map(({ path, element: Element }) =>
                  <Route path={path} element={
                    <Suspense fallback={<Loader />
                    }>
                      <Element />
                    </Suspense>
                  } key={path} />
                )
              }
              <Route path='*' element={<HomePage />} />
            </Routes>
          </section>
          <br></br>
          <Footer />
        </>}
    </>
  )
}

export default App
