import "./HeroImage.css";
function HeroImage (props) {
    return( 
        <>    
      { props.image && (
      <img src={props.image} alt={props.alt}
      className="hero-image" />)}
      </>         

    );
}
export default HeroImage;