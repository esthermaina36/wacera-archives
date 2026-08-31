import BackButton from "../components/BackButton";
import Bookscard from "../components/Bookscard";
import "./Books.css";

function Books() {
  return (
    <main className="books">

      <h1>📚 Books</h1>

      <p>
        From the first page to the last, these books taught me, challenged me,
        and educated me. They each stayed with me long after the story ended.
      </p>

      <Bookscard
        title="Unbowed: A Memoir"
        author="Wangari Maathai"
        about="This is a book about a woman named Wangari Muta Maathai. She won a Nobel Prize in the year 2004. She fought for the environment and founded the Green Belt Movement. In 2003 she was appointed as the assistant minister for the environment."
      />

      <Bookscard
        title="The Alchemist"
        author="Paulo Coelho"
        about="This is a book about a shepherd boy named Santiago. He leaves that life behind in pursuit of treasure."
      />

      <Bookscard
        title="Dead Certain"
        author="Adam Mitzner"
        about="March, 2026"
      />

      <Bookscard
        title="Broken"
        author="Fatima Bala"
        about="April, 2026"
      />

      <Bookscard
        title="Verity"
        author="Colleen Hoover"
        about="May, 2026"
      />

      <Bookscard
        title="Reminders of Him"
        author="Colleen Hoover"
        about="May, 2026"
      />

      <Bookscard
        title="The Score"
        author="Elle Kennedy"
        about="June, 2026"
      />

      <Bookscard
        title="The Silent Patient"
        author="Alex Michaelides"
        about="June, 2026"
      />

      <Bookscard
        title="Gone Girl"
        author="Gillian Flynn"
        about="July, 2026"
      />

      <Bookscard
        title="The Goal"
        author="Elle Kennedy"
        about="July, 2026"
      />
      <Bookscard
        title="I will marry when I want"
        author="Ngugi wa Thiong'o"
        about="Set in post independence Kenya, the play follows Gĩcaamba and Wangeci, a hardworking couple whose small piece of land represents more than just property. it is their home, their dignity and the little security they have managed to build for themselves. On the other side are Kĩguũnda and Jezebel, who have gained wealth by participating in the exploitation of Kenya's resources. What initially appears to be a simple disagreement over a church wedding slowly exposes the much bigger inequalities surrounding the characters.
What struck me was how easily the desire to appear successful can pull people into a system that eventually destroys them. Gĩcaamba and Wangeci borrow money for a wedding because they are made to feel that their marriage is somehow incomplete without the blessing and approval of the church. But the wedding never happens. Their daughter's pregnancy becomes the turning point, and what follows is the loss of their land, Gĩcaamba's job, his dignity and eventually his sense of direction.
I found Gĩcaamba's downfall particularly painful because it shows that exploitation does not only take away money or land. It can take away a person's hope. His drinking, his wife's misery and their daughter's decision to leave home all feel like consequences that extend far beyond the original conflict.
But perhaps what I will remember most is the final song. There are two sides of a struggle, the side of the oppressed and the side of the exploiters. To which side will you belong?"
      />
       <Bookscard
        title="Friends, Lovers and The Big Terrible Thing"
        author="Matthew Perry a.k.a Chandler Bing"
        about="This is a life story of the great actor and writter Matthew who is famous for the role he played in a sitcom named friends as Chandler Bing. He writes about his struggle as 'lonely kid', who has a mind determined to kill him.
        His journey as a drug addict, addiction warrior and his passion of helping those who walked a similar path. Having survived 14 surgeries-he said he cried after each of them- he says those scars are evidence of a life worth fighting for. 
        Towards, the end of the book, he says he now knows and believe he is enough. [As a big fun of Chandler Bing, am glad he died knowing he was loved, and enough. I also feel slightly sorry he never got to be a father as he so much desired to be.]"
      />

      <BackButton to="/dashboard">
        Dashboard
      </BackButton>

    </main>
  );
}

export default Books;