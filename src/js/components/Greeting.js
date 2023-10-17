export default function Greeting() {
  function handleClick() {
    const name = prompt("What is your name?");
    alert(`Hello, ${name}!`);
  }
  // A state variable is only necessary to keep information between re-renders of a component.
  // Within a single event handler, a regular variable will do fine.
  // Don’t introduce state variables when a regular variable works well.

  return <button onClick={handleClick}>Greet</button>;
}
