import React from 'react'

function SampleUpload() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-500'>
        <div className='flex flex-col items-center border-2 border-white/30 w-96 h-96 bg-white shadow-lg rounded-lg p-4
            bg-white/30 backdrop-blur-md'>
                <h1>Upload Profile</h1>

                <div className='rounded-full border border-4 border-black  ' >
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                    alt="Profile Icon" 
                    className='w-24 h-24 ' />


                </div>


             


        </div>

    </div>
    
  )
}

export default SampleUpload