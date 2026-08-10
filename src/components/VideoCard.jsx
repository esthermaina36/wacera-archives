import "./VideoCard.css";

function VideoCard({ video, title, caption, onClick }) {
  return (
    <article className="video-card">
      <div className="video-wrapper">
        <video
          src={video}
          className="video-player"
          controls
          onClick={onClick}
        >
          Your browser does not support the video element.
        </video>
      </div>

      <div className="video-info">
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
    </article>
  );
}

export default VideoCard;