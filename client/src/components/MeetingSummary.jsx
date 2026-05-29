function MeetingSummary({ totalCost, recommendation, limit }) {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <p>Total Cost: ₹{totalCost.toFixed(2)}</p>
      <p>Limit: ₹{limit}</p>
      <p>{recommendation}</p>
    </div>
  );
}

export default MeetingSummary;
