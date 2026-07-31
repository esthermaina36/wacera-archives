
import BackButton from "../components/BackButton";
import "./Dashboard.css";
import ArchiveCard from "../components/ArchiveCard";
function Dashboard() {
  return (
    <main className="dashboard">
      
      <h1>Wacera Archives</h1>

      <p>
        Welcome to my beautiful Eden, where every memory bears the fruits of peace, happiness and learning.
      </p>
      <h3>Wanna Begin?</h3>
      <ArchiveCard
      title="🌍 My Exploits"
      description="Every minute I spent in these places, I forgot all the noise in the world and simply allowed my mind to wander."
      to="/my-exploits"
      />
       <ArchiveCard
      title="📚 Books"
      description=" From the first page to the last, these books taught me, challenged me, and educated me. They each stayed with me long after the story ended."
      to="/books"
      />
       <ArchiveCard
      title="🎵 Songs"
      description="Each song I had the privilege of listening to evoked peace, love, and serenity in every part of my mortal existence."
      to="/songs"
      />
       <ArchiveCard
      title="💭 Thoughts"
      description="I write these here because every random thought, every unsaid word, and every emotion may not always be spoken, but I believe they deserve to be expressed. I express myself best through writing."
      to="/thoughts"
      />
    <BackButton to="/">
 Home
</BackButton>
      
    </main>
  );
}

export default Dashboard;


