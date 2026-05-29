function MeetingSummary({ totalCost, recommendation }) {
  return (
    <div className="mt-4 p-4 bg-indigo-100 rounded-lg shadow-md transition hover:scale-102">
      <h2 className="text-xl font-bold text-indigo-700">
        Total Cost: ${totalCost.toFixed(2)}
      </h2>
      <p className="mt-2 text-lg">{recommendation}</p>
    </div>
  );
}

export default MeetingSummary;
