import { useState } from "react";
import "./Photos.css";
import PhotoSection from "../components/PhotoSection";
import { flowers } from "../data/photoData";
import BackButton from "../components/BackButton";

function Photos() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="photos-page">

      <BackButton to="/dashboard">
        Back to Dashboard
      </BackButton>

      <h1>Beauty Through My Eyes</h1>

      <p className="photos-intro">
        Along busy paths, they grow and thrive. In harsh conditions, they
        persevere, and in conducive environments, they flourish. Wherever
        they find themselves, they bloom.
      </p>

      <PhotoSection
        title="🌸 Flowers That Found Me"
        photos={flowers}
        onPhotoClick={setSelectedImage}
      />

      {selectedImage && (
        <div
          className="photo-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Selected memory"
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </main>
  );
}

export default Photos;