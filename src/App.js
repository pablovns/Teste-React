import logo from "./logo.svg";
import "./App.css";
import { getImageUrl } from "./js/utils.js";

export function Profile({
  name,
  imageUrl,
  imageSize,
  profession,
  nAwards,
  awards,
  discoverys,
}) {
  return (
    <section className="profile">
      <div class="flex-row">
        <img
          className="avatar"
          src={getImageUrl(imageUrl)}
          alt={name}
          width={100}
          height={100}
          />
        <div className="flex-column-centered-m profile-info">
          <h2>{name}</h2>
          <p className="text-muted profile-profession">{profession}</p>
        </div>
      </div>
      <ul>
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
    </div>
  );
}

export default App;
