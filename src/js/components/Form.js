import { useState } from "react";

export default function Form() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        {
          (firstName || lastName) && // não exibe nada caso ambos os campos estejam vazios
          `Hi, ${firstName} ${lastName && `${lastName}`}` // adiciona espaço antes do segundo nome somente se ele estiver preenchido
        }
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
