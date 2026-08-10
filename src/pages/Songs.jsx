import BackButton from "../components/BackButton";
import "./Songs.css";

import SongSection from "../components/SongSection";
import { songs } from "../data/songData";

function Songs() {
  return (
    <main className="songs-page">

      <BackButton to="/dashboard">
        Back to Dashboard
      </BackButton>

      <header className="songs-header">
        <h1>Songs</h1>

        <p>
          Each song I had the privilege of listening to evoked peace, love,
          and serenity in every part of my mortal existence.
        </p>
      </header>

      <SongSection
        title="Songs That Soundtracked My Year"
        songs={songs}
      />

    </main>
  );
}

export default Songs;