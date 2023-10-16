// import logo from "./logo.svg";
import "./App.css";
import Profile from "./js/components/Profile.js";

function App() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="szV5sdG"
        imageSize={80}
        profession="Physicist and chemist"
        nAwards="4"
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discoverys="polonium (chemical element)."
      ></Profile>
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="YfeOqp2"
        imageSize={80}
        profession="Geochemist"
        nAwards="2"
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discoverys="a method for measuring carbon dioxide in seawater."
      ></Profile>
    </div>
  );
}

export default App;
