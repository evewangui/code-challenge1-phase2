import React, { useState } from "react";
import Nav from "./Nav";
import FilterSort from "./FilterSort";
import HogList from "./HogList";
import AddHogForm from "./AddHogForm";
import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortType, setSortType] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const handleToggleGreased = () => setFilterGreased((prev) => !prev);
  const handleSortChange = (type) => setSortType(type);

  const toggleHideHog = (name) => {
    setHiddenHogs((prev) =>
      prev.includes(name) ? prev.filter((hog) => hog !== name) : [...prev, name]
    );
  };

  const addHog = (newHog) => setHogs((prevHogs) => [...prevHogs, newHog]);

  const displayedHogs = hogs
    .filter(
      (hog) => (!filterGreased || hog.greased) && !hiddenHogs.includes(hog.name)
    )
    .sort((a, b) => {
      if (sortType === "name") return a.name.localeCompare(b.name);
      if (sortType === "weight") return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">
      <Nav />
      <FilterSort onToggleGreased={handleToggleGreased} onSortChange={handleSortChange} />
      <HogList hogs={displayedHogs} onToggleHide={toggleHideHog} />
      <AddHogForm onAddHog={addHog} />
    </div>
  );
}

export default App;
