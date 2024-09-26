import React from 'react'

const ErrorField = (props: any) => {
  return (
    <div className='px-1 py-1 bg-red-200 text-red-600 tracking-wider font-semibold text-sm rounded-lg'>
        <div className='text-center'>{"X ".concat(props.message)}</div>
    </div>
  )
}

export default ErrorField