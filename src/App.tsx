import React from 'react';
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <Outlet />
      <ToastContainer
        position={`bottom-center`}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={`colored`}
      />
    </>
  );
}

export default App;

