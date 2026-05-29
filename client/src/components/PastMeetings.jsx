import API from "../api";

function PastMeetings({ meetings, setMeetings }) {
  const deleteMeeting = async (id) => {
    await API.delete(`/${id}`);
    setMeetings(meetings.filter((m) => m._id !== id));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Past Meetings</h2>
      <div className="space-y-4">
        {meetings.map((m) => (
          <div
            key={m._id}
            className="bg-white text-black p-4 rounded-lg shadow-md flex justify-between items-center transition hover:scale-102"
          >
            <div>
              <p className="font-semibold">{m.agenda}</p>
              <p className="text-sm text-gray-600">
                Cost: ${m.totalCost.toFixed(2)} | Length: {m.lengthMinutes} mins
              </p>
            </div>
            <button
              onClick={() => deleteMeeting(m._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastMeetings;
