import React from 'react'

const VideoCards = ({ matter = {} }) => {
    // console.log(matter);

    const { snippet, statistics } = matter;
    //const { title, channelTitle, publishedAt, thumbnails } = snippet;

    return (
        <div className='p-2 m-2 w-72 shadow-lg hover:bg-gray-200'>
            <img
                className='rounded-lg'
                alt='video thumbnail'
                src={snippet?.thumbnails?.medium?.url}
            />
            <ul>
                <li className='font-semibold py-2 font-sans'>{snippet?.title}</li>
                <li>{snippet?.channelTitle}</li>
                <li>{statistics?.viewCount} views</li>
                <li>{snippet?.publishedAt}</li>
            </ul>
        </div>
    );
};

export const AdVideoCard = ({ matter }) => {
    return (
        <div className='border border-violet-800'>
            <VideoCards matter={matter} />
        </div>
    );
};

export default VideoCards;