import { Route, Routes, Navigate } from 'react-router-dom'


const PrivateRoutes = () => {
    // const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))

    return (
        <Routes>
            <Route element={<></>}>
                {/* Redirect to Dashboard after success login/registartion */}
                <Route path='*' element={<Navigate to='/dashboard' />} />
            </Route>
        </Routes>
    )
}

export { PrivateRoutes }
