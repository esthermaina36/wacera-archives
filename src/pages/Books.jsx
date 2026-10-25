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
        about=""
      />

      <Bookscard
        title="Broken"
        author="Fatima Bala"
        about=""
      />

      <Bookscard
        title="Verity"
        author="Colleen Hoover"
        about=""
      />

      <Bookscard
        title="Reminders of Him"
        author="Colleen Hoover"
        about="This is a sad yet a very interesting story of a young lady named Kenna. She lost her first love-Scott- in a car accident. She gets blamed for the accident and sent to jail. In jail she realizes she was pregnant for scott. She keeps a diary where she writes everything as if she was talking to Scott.
        Years later she is released from prison and she decideds to go to the town where her child lives. She meets Scott's best friend who has been like a father to her daughter. They fall in love and even though there are some obstacles, they get married have a boy, names him Scott and they family of 4 is born "
      />

      <Bookscard
        title="The Score"
        author="Elle Kennedy"
        about="This is a romantic story of Allie and Dean. Dean is well known as a man whore by everyone in their campus. Other than a whore, he is also a very sharp student and scores very good grades. Allie is an art student who want to be an actress. They meet at a dance floor where Dean is completely infatuated by her.
        Allie in a moment of uncertainity or should I just say weakeness, booty calls Dean after a bad break up with her boyfriend. From so many nights of booty calls a love  grows and that is how they are in love."
      />

      <Bookscard
        title="The Silent Patient"
        author="Alex Michaelides"
        about="Alicia Berenson is believed to have killed her husband-Gabriel- who was an artist like her. After the incidence she never spoke a word to anyone for over 6 years, so instead of going to prison, she was taken to a physchiatric hospital. 
        Then came Theo Faber a pyscotherapist who instited on being the therapist responsible for the Alicia situation. Later we find out that Alicia did not kill her husband, it was the mysterious Theo who had committed the murder."
      />

      <Bookscard
        title="Gone Girl"
        author="Gillian Flynn"
        about=""
      />

      <Bookscard
        title="The Goal"
        author="Elle Kennedy"
        about="This is a love story between Sabrina and Tucker. Sabrina is an ambitious young lady who wants to be a lawyer and got admission to Harvard University. Tucker is a hockey player who wants to be a bussiness man. A night that was only meant to be a one night stand leaves Tucker and Sabrina in deep thought. They both agree to try the dating thing only to find out a few months later that Sabrina is pregnant. They both agree to live together, and raise their child. Tucker becomes a very successful bar owner and he even plans to open more branches. Sabrina goes to school and she is good at her studies."
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
        Towards, the end of the book, he says he now knows and believe he is enough. [As a big fun of Chandler Bing, am glad he died knowing he was loved, and enough. I also feel slightly sorry he never got to be a father as he so much desired to be."
      />
      <Bookscard
        title="Adanna"
        author="Adesuwa O'man Nwokedi"
        about="A nigerian girl named Adanna lost her dad due to stroke after having been unable to pay a debt he owed. Her sister had her kidneys failing and she was on her dying bed. Left with no way out, she was forced to marry a tycon chief from their village at the age of 16. Upon arrival to her husband's house her stay was nothing short of terrible. She was raped, humiliated and beaten by the elder son of the chief, Akanna.
      As a teenager she was in love with the youngest son of the chief-Anayo, who later went to study abroad. 20+ years passed and the chief died by poisoning. I turns out that his longest serving cook poisoned him for having an affair with her daughter who also happened to be his daughter. Adanna later relocated to the states, remarried to the love of her life Nateo and had children with him. After 20 years, 4 abortions, 3 near death experiences, humiliation and rape, she at leat got her happy ever after. "
      />
      <
        Bookscard
        title="Fathers of Nation"
        author="Paul B. Vitta"
        about="Let me begin by saying that this is not only the most boring book I have ever read but it is also very useless.
        It is supposed to show how African countries can incooperate either Path Alpga or Omega for its betterment. However, it does not only not show the what Omega and Alpha entails but also does not give a clear connection of the characters in it."
      />

      <BackButton to="/dashboard">
        Dashboard
      </BackButton>

    </main>
  );
}

export default Books;