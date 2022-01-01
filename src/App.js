import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const info = data;
  const [people, setPeople] = useState(data);

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} people Birthday</h3>
          <List people={people} info={info} />
          <button
            onClick={() => {
              setPeople([]);
            }}
          >
            Clear All
          </button>

          <button
            onClick={() => {
              setPeople(info);
            }}
          >
            Get All
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
