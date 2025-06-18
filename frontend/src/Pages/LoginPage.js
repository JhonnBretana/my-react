import React from 'react'

function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-500'>
        <div className='flex flex-col items-center border-2 border-white/30 w-96 h-96 bg-white shadow-lg rounded-lg px-10 py-3
            bg-white/30 backdrop-blur-md'>

               <h1 className='text-4xl text-white font-bold mb-4'>
                Login
                </h1>

                <div className=' mt-10 ' >

                  <label className='text-sm font-semibold mb-2 text-white'>Username</label>
                  <input type="text" className='w-full p-2 mb-4 border border-gray-300 rounded' placeholder='Enter your username' />
                    
                  <label className='text-sm font-semibold mb-2 text-white'>Password</label>
                  <input type="password" className='w-full p-2 mb-4 border border-gray-300 rounded' placeholder='Enter your password' />


                </div>


                <button
                className='mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                  Login
                </button>


             


        </div>

    </div>
    
  )
}

export default LoginPage