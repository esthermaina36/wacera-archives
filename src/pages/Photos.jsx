import "./Photos.css";
import PhotoSection from "../components/PhotoSection";
import { flowers } from "../data/photoData";

function Photos() {
  return (
    <div className="photos-page">
      <h1>Beauty Through My Eyes</h1>

      <p className="photos-intro">
       Along busy paths, they grow and thrive. In harsh conditions, they persevere, and in conducive environments, they flourish. Wherever they find themselves, they bloom.

      </p>

      <PhotoSection
        title="🌸 Flowers That Found Me"
        photos={flowers}
      />
    </div>
  );
}

export default Photos;