import { useState } from "react";
import VideoSection from "../components/VideoSection";
import BackButton from "../components/BackButton";
import { videos } from "../data/videoData";
import "./Videos.css";

function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <main className="videos-page">

      <BackButton to="/dashboard">
        Back to Dashboard
      </BackButton>

      <header className="videos-header">
        <h1>Videos</h1>

        <p>
          Little pieces I wanted to keep.
        </p>
      </header>

      <VideoSection
        title="Moments Worth Remembering"
        videos={videos}
        onVideoClick={setSelectedVideo}
      />

      {selectedVideo && (
        <div
          className="video-lightbox"
          onClick={() => setSelectedVideo(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setSelectedVideo(null)}
            aria-label="Close video"
          >
            ×
          </button>

          <video
            src={selectedVideo}
            className="lightbox-video"
            controls
            autoPlay
            onClick={(event) => event.stopPropagation()}
          >
            Your browser does not support the video element.
          </video>

        </div>
      )}

    </main>
  );
}

export default Videos;