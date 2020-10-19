import React from 'react'
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const List = props.videosList.map(video => {
    return <VideoItem 
              key = {video.id.videoId} 
              video = {video}
              onVideoSelect={props.onVideoSelect}/>;
    });
  return (
    <div className = "ui relaxed divided list">
       {List}
    </div>
  );
}
export default VideoList;
