import BackButton from "../components/BackButton";
import ThoughtSection from "../components/ThoughtSection";
import { thoughts } from "../data/thoughtData";
import "./Thoughts.css";

function Thoughts() {
  return (
    <main className="thoughts-page">

      <BackButton to="/dashboard">
        Back to Dashboard
      </BackButton>

      <header className="thoughts-header">
        <h1>Thoughts</h1>

        <p>
          Random things that crossed my mind and decided to stay for a while.
        </p>
      </header>

      <ThoughtSection thoughts={thoughts} />

    </main>
  );
}

export default Thoughts;