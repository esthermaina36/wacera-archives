function JourneyHeader (props) {
    return(
        <>
        <h1>{props.title}</h1>
        <p className="journey-meta">📍{props.location}</p>
        <p className="journey-meta">📅 {props.date}</p>
        </>

    );
}
export default JourneyHeader;