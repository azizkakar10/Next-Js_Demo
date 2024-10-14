'use client' // Error components must be Client Components


 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-5 '>
      <h2 className= "text-3xl text-bold">{error.message}!</h2>
      <button className='bg-purple-400 border rounded p-3 text-bold text-shadow text-white hover:bg-purple-600'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}