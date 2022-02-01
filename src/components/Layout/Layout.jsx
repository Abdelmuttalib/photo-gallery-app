import React from 'react'

function Layout({ children }) {
  return (
    <div className="max-w-lg w-full flex flex-col justify-center items-center px-6 sm:px-32 lg:px-56">
      {children}
    </div>
  )
}

export default Layout
