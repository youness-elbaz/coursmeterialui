import React from 'react'
import { Outlet } from 'react-router-dom'

const root = () => {
  return (
    <div>
<header>
  <h1>my header</h1>
</header>
<Outlet />



    </div>

  )
}

export default root