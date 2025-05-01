import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className='flex'>
      <div className='w-screen nd:w-[60vw] px-12 pt-8 pb-12'>
        <h2 className='text-lg font-medium text-black'>WorkHub</h2>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
