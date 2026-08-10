import VideoCard from "./VideoCard";
import "./VideoSection.css";

function VideoSection({ title, videos, onVideoClick }) {
  return (
    <section className="video-section">
      <h2>{title}</h2>

      <div className="video-grid">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video.video}
            title={video.title}
            caption={video.caption}
            onClick={() => onVideoClick(video.video)}
          />
        ))}
      </div>
    </section>
  );
}

export default VideoSection;