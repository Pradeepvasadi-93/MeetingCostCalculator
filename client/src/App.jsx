import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import MeetingSummary from "./components/MeetingSummary";
import PastMeetings from "./components/PastMeetings";
import API from "./api";

function App() {
  const [participants, setParticipants] = useState([]);
  const [lengthMinutes, setLengthMinutes] = useState(30);
  const [agenda, setAgenda] = useState("");
  const [meetings, setMeetings] = useState([]);

  const totalCost = participants.reduce(
    (sum, p) => sum + (p.hourlyRate * lengthMinutes) / 60,
    0
  );

  const recommendation =
    totalCost > 100 ? "⚠️ Too expensive — reconsider" : "✅ Worth it — proceed";

  // Fetch past meetings
  useEffect(() => {
    API.get("/").then(res => setMeetings(res.data));
  }, []);

  // Save meeting
  const saveMeeting = async () => {
    const res = await API.post("/", {
      agenda,
      participants,
      lengthMinutes,
    });
    setMeetings([res.data, ...meetings]);
    setAgenda("");
    setParticipants([]);
    setLengthMinutes(30);
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 text-white">
      <h1 className="text-4xl font-extrabold mb-6 animate-pulse">
        Meeting Cost Calculator
      </h1>

      <div className="bg-white text-black rounded-lg shadow-lg p-6 mb-6 transition-transform">
        <PersonForm participants={participants} setParticipants={setParticipants} />

        <input
          type="number"
          value={lengthMinutes}
          onChange={e => setLengthMinutes(Number(e.target.value))}
          placeholder="Meeting length (minutes)"
          className="border p-2 rounded w-full mt-4 focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="text"
          value={agenda}
          onChange={e => setAgenda(e.target.value)}
          placeholder="Agenda"
          className="border p-2 rounded w-full mt-4 focus:ring-2 focus:ring-indigo-400"
        />

        <MeetingSummary totalCost={totalCost} recommendation={recommendation} />

        <button
          onClick={saveMeeting}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
        >
          Save Meeting
        </button>
      </div>

      <PastMeetings meetings={meetings} setMeetings={setMeetings} />
    </div>
  );
}

export default App;
