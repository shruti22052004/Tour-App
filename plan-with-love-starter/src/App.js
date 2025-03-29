import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import data from "./data";
import Tours from "./components/Tours";
import "./index.css";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  return (
    <HashRouter>
      <div>
        {tours.length === 0 ? (
          <div className="refresh">
            <h2>NO Tours Left</h2>
            <button className="btn" onClick={() => setTours(data)}>
              Refresh
            </button>
          </div>
        ) : (
          <Tours tours={tours} removeTour={removeTour} />
        )}
      </div>
    </HashRouter>
  );
};

export default App;
