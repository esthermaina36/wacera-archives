import "./ArchiveCard.css";
function ArchiveCard(props) {
    return(
        <div className="archive_card">
        <h2>{props.title}</h2>
            <p>{props.description}</p>

            </div>
    );
}
export default ArchiveCard;