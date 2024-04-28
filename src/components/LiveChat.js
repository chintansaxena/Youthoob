import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames, makeRandomString } from '../utils/extra';

const LiveChat = () => {
    const dispatch = useDispatch();

    const [addLiveMessage, setAddLiveMessage] = useState("");

    const liveMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            //API Polling - make an API call and convert data to JSON

            dispatch(addMessage({
                name: generateRandomNames(),
                message: makeRandomString(20)
            }))
        }, 500)

        return () => clearInterval(i);
    }, []);

    return (
        <>
            <div className='w-full h-[444px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {//DISCLAIMER: Don't use index as keys
                        liveMessages.map((c, index) => (
                            <ChatMessage key={index} name={c.name} message={c.message} />
                        ))
                    }
                </div>
            </div>
            <form className='w-full p-2 m-2 bg-slate-100 border border-black'
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <input
                    className='w-80 border border-black px-2'
                    type='text'
                    value={addLiveMessage}
                    onChange={(e) => {
                        setAddLiveMessage(e.target.value)
                    }}
                />
                <button className='border border-black px-1 mx-1'
                    onClick={(e) => {
                        dispatch(addMessage({
                            name: generateRandomNames(),
                            message: addLiveMessage
                        })
                        )
                        setAddLiveMessage("");
                    }}
                >
                    Send ✈️
                </button>
            </form>
        </>
    );
};

export default LiveChat