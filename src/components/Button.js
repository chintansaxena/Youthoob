import React from 'react'

const Button = ({ name }) => {
    return (
        <div className='p-2 mx-2 my-6 rounded-lg font-semibold bg-gray-200 hover:bg-gray-300 active:bg-black active:text-white h-8 text-ellipsis truncate'>
            <button>{name}</button>
        </div>
    )
}

export default Button