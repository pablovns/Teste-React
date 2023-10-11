import logo from "./logo.svg";
import "./App.css";
import { getImageUrl } from "./js/utils.js";

export function Profile({
  name,
  imageUrl,
  profession,
  nAwards,
  awards,
  discoverys,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageUrl)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {nAwards} </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discoverys}
        </li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="szV5sdG"
        profession="physicist and chemist"
        nAwards="4"
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discoverys="polonium (chemical element)"
      ></Profile>
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="YfeOqp2"
        profession="geochemist"
        nAwards="2"
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discoverys="a method for measuring carbon dioxide in seawater"
      ></Profile>
    </div>
  );
}

export default App;
