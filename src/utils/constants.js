//export const YOUTUBE_VIDEOS_API =
//    "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&chart=mostPopular&regionCode=es&videoCategoryId=17";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 32;