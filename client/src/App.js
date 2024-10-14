import React, { useEffect, useState } from "react";
import axios from "axios";
import OldestPersonDetails from "./components/OldestPersonDetails";
import Introduction from "./components/Introduction";

function App() {
  const [oldestPersonEver, setOldestPersonEver] = useState(null);
  const [oldestLivingPerson, setOldestLivingPerson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://whoistheoldest.com/api/oldest-person-ever")
      .then((response) => setOldestPersonEver(response.data))
      .catch((error) => {
        console.error("Error:", error);
        setError("Could not fetch the data for the oldest person ever");
      });

    axios
      .get("https://whoistheoldest.com/api/oldest-living-person")
      .then((response) => setOldestLivingPerson(response.data))
      .catch((error) => {
        console.error("Error:", error);
        setError("Could not fetch the data for the oldest living person");
      });
  }, []);

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  if (!oldestPersonEver || !oldestLivingPerson) {
    return <p className="text-gray-500 text-center mt-4">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Oldest People Records API
        </h1>

        {/* Introduction */}
        <Introduction />

        {/* Flex container for the two cards, stacked on top of each other */}
        <div className="space-y-6">
          {/* Oldest living person */}
          <OldestPersonDetails
            title="Currently the oldest person alive:"
            person={oldestLivingPerson}
            gradientClass="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />

          {/* Oldest person ever */}
          <OldestPersonDetails
            title="Oldest person ever:"
            person={oldestPersonEver}
            gradientClass="bg-gradient-to-r from-teal-500 via-green-500 to-emerald-500"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
