import React, { useEffect, useState } from "react";
import axios from "axios";

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

        {/* Introduction and API purpose */}
        <div className="mb-8 text-gray-700">
          <p className="text-lg">
            This application tracks and displays data about the oldest person
            currently alive and the oldest person ever recorded. The data is
            managed and stored locally, giving full control over updates and the
            ability to set constraints like birth date limits or country of
            origin.
          </p>
          <p className="mt-4 text-lg">
            The application fetches data from two API endpoints:
          </p>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>
              <strong>/oldest-living-person:</strong> Provides data about the
              oldest person alive.
            </li>
            <li>
              <strong>/oldest-person-ever:</strong> Provides data about the
              oldest person to ever live.
            </li>
          </ul>
        </div>

        {/* Oldest living person */}
        <div className="mb-10 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">
            Currently the oldest person alive:
          </h2>
          <p className="mt-2">
            <span className="font-semibold">Name:</span>{" "}
            {oldestLivingPerson.name}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {oldestLivingPerson.age}
          </p>
          <p>
            <span className="font-semibold">Country:</span>{" "}
            {oldestLivingPerson.country}
          </p>
        </div>

        {/* Oldest person ever */}
        <div className="p-6 bg-gradient-to-r from-teal-500 via-green-500 to-emerald-500 text-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Oldest person ever:</h2>
          <p className="mt-2">
            <span className="font-semibold">Name:</span> {oldestPersonEver.name}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {oldestPersonEver.age}
          </p>
          <p>
            <span className="font-semibold">Country:</span>{" "}
            {oldestPersonEver.country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
