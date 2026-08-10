import "./ThoughtCard.css";

function ThoughtCard({ thought }) {
  return (
    <article className="thought-card">
      <p>{thought}</p>
    </article>
  );
}

export default ThoughtCard;