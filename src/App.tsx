import { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = () => {
    setNotes([...notes, note]);
    setNote("");
  };

  return (
    <div>
      <h1>Second Brain App</h1>

      {/* INPUT */}
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter a note"
      />

      <button onClick={addNote}>Add</button>

      {/* OUTPUT */}
      <ul>
        {notes.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;