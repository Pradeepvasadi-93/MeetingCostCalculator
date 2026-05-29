function PersonForm({ participants, setParticipants }) {
  const addPerson = () =>
    setParticipants([...participants, { name: "", hourlyRate: 0 }]);

  const removePerson = (i) =>
    setParticipants(participants.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-4">
      {participants.map((p, i) => (
        <div
          key={i}
          className="flex gap-4 items-center bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:shadow-lg"
        >
          <div className="flex flex-col flex-1">
            <label
              htmlFor={`name-${i}`}
              className="text-sm font-semibold text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id={`name-${i}`}
              type="text"
              value={p.name}
              onChange={(e) => {
                const updated = [...participants];
                updated[i].name = e.target.value;
                setParticipants(updated);
              }}
              placeholder="Enter participant name"
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col w-40">
            <label
              htmlFor={`hourlyRate-${i}`}
              className="text-sm font-semibold text-gray-700 mb-1"
            >
              Hourly Rate
            </label>
            <input
              id={`hourlyRate-${i}`}
              type="number"
              value={p.hourlyRate}
              onChange={(e) => {
                const updated = [...participants];
                updated[i].hourlyRate = Number(e.target.value);
                setParticipants(updated);
              }}
              placeholder="Rate"
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <button
            onClick={() => removePerson(i)}
            className="bg-red-500 text-white px-3 py-2 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-103"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        onClick={addPerson}
        className="w-[12%] bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-md"
      >
        + Add Person
      </button>
    </div>
  );
}

export default PersonForm;
