"use client";

import { useState } from "react";

export default function NotesSection() {
  const [note, setNote] =
    useState("");

  const saveNote = () => {
    localStorage.setItem(
      "matchmaker-note",
      note
    );

    alert("Note Saved");
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        Meeting Notes
      </h2>

      <textarea
        rows={5}
        value={note}
        onChange={(e) =>
          setNote(e.target.value)
        }
        className="border rounded w-full p-3"
        placeholder="Add notes from customer calls..."
      />

      <button
        onClick={saveNote}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Save Note
      </button>
    </div>
  );
}