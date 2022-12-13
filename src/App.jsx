import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const INIT_ANIMAL = [];

  const [animal, setAnimal] = useState(INIT_ANIMAL);
  const [newAnimal, setNewAnimal] = useState("");

  const addAnimal = (e) => {
    e.preventDefault();
    setAnimal((prevAnimals) => [
      ...prevAnimals,
      { id: nanoid(), type: newAnimal, journeysNo: 0, isHere: false },
    ]);
    setNewAnimal("");
  };

  const isHereToggle = (id, e) => {
    setAnimal((animal) =>
      animal.map((item) =>
        item.id === id ? { ...item, isHere: !item.isHere } : item
      )
    );
  };

  return (
    <div className="App">
      <h1>Arya's App</h1>
      <div>
        {animal.map(({ id, type, journeysNo, isHere }) => {
          return isHere ? (
            <div key={id}>
              <p>Type: {type}</p>
              <p>JourneysNo: {journeysNo}</p>
              <button onClick={(e) => isHereToggle(id, e)}>
                {isHere ? "Go on a Journey" : "Return from the Journey "}
              </button>
            </div>
          ) : (
            <div key={id}>
              <button onClick={(e) => isHereToggle(id, e)}>
                {isHere ? "Go on a Journey" : "Return from the Journey "}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <form onSubmit={addAnimal}>
          <input
            type="text"
            value={newAnimal}
            placeholder="Enter th type of Animal..."
            onChange={(e) => setNewAnimal(e.target.value)}
          />
          <button type="submit">Add the Animal</button>
        </form>
      </div>
    </div>
  );
}

export default App;
