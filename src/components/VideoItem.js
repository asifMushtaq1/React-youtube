import React from 'react';
import '../css/VideoItem.css';

const VideoItem = (props) => {
  const videoImage = props.video.snippet.thumbnails.medium.url;
  const videoTitle = props.video.snippet.title;
  return (
  <div className = "videoItem item"
       onClick = {() => props.onVideoSelect(props.video)}>
    <img
       className = "ui image"
       alt = {videoTitle}
       src = {videoImage}/>
    <div className = "content">
      <div className = "header">
        {props.video.snippet.title}
      </div>
    </div>
  </div>
  );
}
export default VideoItem;