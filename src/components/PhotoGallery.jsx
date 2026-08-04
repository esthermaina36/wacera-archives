import "./PhotoGallery.css";
function PhotoGallery (props) {
    return (
        <div className="photo-gallery">
            {props.images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Journey photo ${index + 1}`}
                    className="gallery-image"
                    onClick={() => props.setSelectedImage(image)}
                />))}
        </div>

    );
}
export  default PhotoGallery;