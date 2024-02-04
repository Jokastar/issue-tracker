import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <p className='bg-red-300 text-red-800 rounded p-3 w-2/3 mt-2'>{children}</p>
  )
}

export default ErrorMessage