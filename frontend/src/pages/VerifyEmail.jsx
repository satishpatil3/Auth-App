import React from 'react'

const VerifyEmail = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div className='min-h-screen flex items-center justify-center bg-green-100 px-4'>
        <div className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center'>
            <h2 className='text-2xl font-semibold text-green-700 mb-4'> ✅Check Your Email</h2>
            <p className='text-gray-500 text-sm'>
                We've sent you an email to verify your accounct.Please Check your inbox and click on the verification link
            </p>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail
