import "./App.css";
import Profile from "./js/components/Profile.js";
import Avatar from "./js/components/Avatar.js";
import Card from "./js/components/Card.js";
import Form from "./js/components/Form.js";
import FeedbackForm from "./js/components/FeedbackForm.js";

function App() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="szV5sdG"
        profession="Physicist and chemist"
        nAwards="4"
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discoverys="polonium (chemical element)."
      ></Profile>
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="YfeOqp2"
        profession="Geochemist"
        nAwards="2"
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discoverys="a method for measuring carbon dioxide in seawater."
      ></Profile>
      <Avatar
        name="Maria Skłodowska-Curie"
        imageUrl="szV5sdG"
        imageSize={90}
        profession="Physicist and chemist"
      ></Avatar>
      <Avatar
        name="Katsuko Saruhashi"
        imageUrl="YfeOqp2"
        imageSize={90}
        profession="Geochemist"
      ></Avatar>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card>
       <h1>About</h1>
       <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
      <Form></Form>
      <FeedbackForm></FeedbackForm>
    </div>
  );
}

export default App;
