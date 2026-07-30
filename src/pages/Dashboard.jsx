import "./Dashboard.css";
import ArchiveCard from "../components/ArchiveCard";
function Dashboard() {
  return (
    <main className="dashboard">
      <h1>Wacera Archive</h1>

      <p>
        Welcome to my beautiful Eden, where every memory bears the fruits of peace, happiness and learning.
      </p>
      <h3>Wanna Begin?</h3>
      <ArchiveCard
      title="🌍 My Exploits"
      description="Every minute I spent in these places, I forgot all the noise in the world and simply allowed my mind to wander."
      />
       <ArchiveCard
      title="📚 Books"
      description="xxx"
      />
       <ArchiveCard
      title="🎵 Songs"
      description="xxx"
      />
       <ArchiveCard
      title="💭 Thoughts"
      description="xxx"
      />
    
      
    </main>
  );
}

export default Dashboard;


