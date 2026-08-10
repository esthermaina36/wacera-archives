import VideoSection from "../components/VideoSection";
import BackButton from "../components/BackButton";
import { videos } from "../data/videoData";
import "./Videos.css";

function Videos() {
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
      />

    </main>
  );
}

export default Videos;