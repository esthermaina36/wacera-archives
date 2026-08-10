import ThoughtCard from "./ThoughtCard";
import "./ThoughtSection.css";

function ThoughtSection({ thoughts }) {
  return (
    <section className="thought-section">
      <div className="thought-grid">
        {thoughts.map((thought, index) => (
          <ThoughtCard
            key={index}
            thought={thought.thought}
          />
        ))}
      </div>
    </section>
  );
}

export default ThoughtSection;