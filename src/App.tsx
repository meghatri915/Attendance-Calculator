import { useMemo, useState } from "react";

const PASS_THRESHOLD = 80;

function App() {
  const [totalDays, setTotalDays] = useState("");
  const [presentDays, setPresentDays] = useState("");

  const result = useMemo(() => {
    const total = Number(totalDays);
    const present = Number(presentDays);

    if (!totalDays || !presentDays || Number.isNaN(total) || Number.isNaN(present)) {
      return null;
    }
    if (total <= 0) {
      return { error: "Total working days must be greater than 0." };
    }
    if (present < 0 || present > total) {
      return { error: "Present days must be between 0 and total working days." };
    }

    const percentage = (present / total) * 100;
    return {
      percentage,
      isGood: percentage >= PASS_THRESHOLD,
    };
  }, [totalDays, presentDays]);

  return (
    <div className="container">
      <h1>Attendance Calculator</h1>

      <div className="field">
        <label htmlFor="total-days">Total Working Days</label>
        <input
          id="total-days"
          type="number"
          min="0"
          inputMode="numeric"
          value={totalDays}
          onChange={(e) => setTotalDays(e.target.value)}
          placeholder="e.g. 20"
        />
      </div>

      <div className="field">
        <label htmlFor="present-days">Present Days</label>
        <input
          id="present-days"
          type="number"
          min="0"
          inputMode="numeric"
          value={presentDays}
          onChange={(e) => setPresentDays(e.target.value)}
          placeholder="e.g. 17"
        />
      </div>

      {result && "error" in result && <div className="message error">{result.error}</div>}

      {result && "percentage" in result && (
        <div className={`message ${result.isGood ? "good" : "bad"}`}>
          Attendance: {result.percentage.toFixed(2)}%{" "}
          {result.isGood ? "— Good standing" : "— Below required attendance"}
        </div>
      )}
    </div>
  );
}

export default App;
