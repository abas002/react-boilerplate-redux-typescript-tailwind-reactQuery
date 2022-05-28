import { FC } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import App from '../App'
import PublicRoutes from './PublicRoutes'
// import { AuthPage } from 'pages/auth/AuthPage'
// import { ErrorsPage } from '../modules/errors/ErrorsPage'
// import { Logout, AuthPage, useAuth } from '../modules/auth'

const { PUBLIC_URL } = process.env

const AppRoutes: FC = () => {
  // const { currentUser } = useAuth()
  const currentUser = undefined
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          {/* <Route path='error/*' element={<ErrorsPage />} /> */}
          {/* <Route path='logout' element={<Logout />} /> */}
          {currentUser ? (
            <>
              <Route path='app/*' element={<PrivateRoutes />} />
            </>
          ) : (
            <>
              {/* <Route path='auth/*' element={<AuthPage />} /> */}
              <Route path='auth/*' element={<></>} />
            </>
          )}
          <Route path='/*' element={<PublicRoutes />} />
          {/* Page Not Found */}
          <Route path='*' element={<Navigate to='/error/404' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
