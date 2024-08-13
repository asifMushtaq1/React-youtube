import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube, { baseParams } from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);

  useEffect(() => {
    onTermSubmit("buildings");
  }, []);

  const onTermSubmit = async (term) => {
    youtube
      .get("/search", {
        params: {
          ...baseParams,
          q: term,
        },
      })
      .then((res) => {
        setVideos(res.data.items);
        console.log("API RESPONSE", res);
        setSelectedVideo(res.data.items[0]);
      })
      .catch((err) => console.log(err));
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videosList={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
