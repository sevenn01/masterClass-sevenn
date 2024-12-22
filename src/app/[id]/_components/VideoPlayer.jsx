import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer( {url} ) {
  let videoId;
  try {
    videoId = url.includes('dai.ly') 
      ? url.split('/')[3] 
      : url.split('/video/')[1];  // For full dailymotion.com URLs

    if(!videoId){
      throw new Error('Invalid URL format');
    }

  } catch (error) {
    console.log('error extracting slug from URl: ', error.message);
    return <div>Error: Invalid video URL </div>;
  }

  const videoURL = `https://www.dailymotion.com/embed/video/${videoId}`;
  console.log('Constructed form videoPlayer :',videoURL)

  return (
    <div className='w-full mt-5'>
      

      <iframe
        title="Dailymotion Video Player"
        src={`https://www.dailymotion.com/embed/video/${videoId}?queue-enable=false&related=0`}
        frameBorder="0"
        width="100%"
        height="700px"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
{/*       
      <ReactPlayer
        url={`https://www.dailymotion.com/embed/video/${videoId}`}
        controls
        width='100%'
        height={'700px'}
      /> */}

    </div>
  )
}

export default VideoPlayer