import React from 'react'

const Button = ({ name }) => {
    return (
        <div className='p-2 m-2 rounded-lg bg-gray-200 hover:bg-gray-300 h-8 text-ellipsis truncate'>
            <button>{name}</button>
        </div>
    )
}

export default Button