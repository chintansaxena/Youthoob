import React from 'react'

const VideoCards = ({ matter = {} }) => {
    // console.log(matter);

    const { snippet, statistics } = matter;
    //const { title, channelTitle, publishedAt, thumbnails } = snippet;

    return (
        <div className='ml-8 flex flex-wrap'>
            <div className='flex flex-col rounded-lg gap-2 w-96 shadow-lg hover:bg-gray-200'>
                <img
                    className='rounded-lg'
                    alt='video thumbnail'
                    src={snippet?.thumbnails?.medium?.url}
                />
                <ul className='flex flex-col '>
                    <li className='font-semibold py-1 font-sans'>{snippet?.title}</li>
                    <li className='font-medium'>{snippet?.channelTitle}</li>
                    <li>{statistics?.viewCount} views</li>
                    <li>{snippet?.publishedAt}</li>
                </ul>
            </div>
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