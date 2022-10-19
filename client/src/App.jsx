import React, { useContext, useState } from 'react'
import PrivateRoutes from './routes/private.routes';
import PublicRoutes from './routes/public.routes';
import { AuthContext } from './Context/AuthContext';

function App() {
  const {auth} = useContext(AuthContext)
  console.log(auth)
  return auth ? <PrivateRoutes/> : <PublicRoutes/>
}

export default App
