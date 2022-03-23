import React, { useContext } from "react";
import { ApiContext } from "./context/ApiContext";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import Search from "./Search";
import Definition from "./Definition";

function createEmoji(definition) {
  return (
    <Entry
      key={definition.name}
      emoji={definition.emoji}
      name={definition.name}
      description={definition.description}
    />
  );
}

function App() {
  const { data, error } = useContext(ApiContext);

  return (
    <div>
      <h1>
        <span>Emoty</span>
      </h1>
      <Search />
      <Definition />
      <dl className="dictionary">
        {data.emoji ? (
          <div className='w-full'>
            <h1 className="history">History</h1>
            <div className="history-map">{emojipedia.map(createEmoji)}</div>
          </div>
        ) : !error ? (
          <Entry
            emoji="😁"
            name="Welcome to Emoty"
            description="Just enter a single emoji and hit search, then wait for the magic to happen"
          />
        ) : (
          <Entry
            emoji="🙁"
            name="No results found"
            description="Please ensure that you have entered only one emoji."
          />
        )}
      </dl>
    </div>
  );
}

export default App;
