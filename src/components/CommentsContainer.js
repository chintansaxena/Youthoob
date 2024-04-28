import React from 'react'

const commentsData = [
    {
        name: "Adam",
        text: "Wow! what an experience 😮 ",
        replies: [

        ]
    },
    {
        name: "Adam",
        text: "Wow! what an experience 😮 ",
        replies: [

        ]
    },
    {
        name: "Adam",
        text: "Wow! what an experience 😮 ",
        replies: [

        ]
    },
    {
        name: "Adam",
        text: "Wow! what an experience 😮 ",
        replies: [
            {
                name: "Adam",
                text: "Wow! what an experience 😮 ",
                replies: [
                    {
                        name: "Adam",
                        text: "Wow! what an experience 😮 ",
                        replies: [
                            {
                                name: "Adam",
                                text: "Wow! what an experience 😮 ",
                                replies: [
                                    {
                                        name: "Adam",
                                        text: "Wow! what an experience 😮 ",
                                        replies: [
                                            {
                                                name: "Adam",
                                                text: "Wow! what an experience 😮 ",
                                                replies: [

                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
];
const Comment = ({ data }) => {

    const { name, text } = data;
    return (
        <div className='flex rounded-lg shadow-sm bg-gray-100 my-2'>
            <img
                className='w-8 h-8'
                alt='user'
                src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'
            />
            <div className='px-3'>
                <p className='font-semibold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({ comments }) => {
    //DISCLAIMER: Don't use index as key
    return comments.map((comment, index) => (
        <div key={index} >
            <Comment data={comment} />
            <div className='pl-5 border border-l-4 ml-5'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ));
};

const CommentsContainer = () => {
    return (
        <div className='p-2 mx-5 my-1'>
            <h1 className='font-bold text-xl'> Comments - </h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer;