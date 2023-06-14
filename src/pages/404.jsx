import React, { useEffect } from 'react'

const ErrorPage = () => {
  useEffect(() => {
    document.title = 'Mail App | 404 Page';
  }, [])
  return (
    <div className='flex flex-col justify-center items-center h-[90vh] w-10/12'>
        <h2>404</h2>
        <p>No Page Found!!</p>
    </div>
  )
}

export default ErrorPage