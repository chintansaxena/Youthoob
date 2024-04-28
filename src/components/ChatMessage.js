import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex shadow-sm p-1 items-center'>
            <img
                className='w-8 h-8'
                alt='user'
                src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'
            />
            <span className='px-2 font-semibold'>{name} </span>
            <span>{message}</span>
        </div>

    )
}

export default ChatMessage