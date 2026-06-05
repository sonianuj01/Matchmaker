"use client";

import { useState } from "react";

interface Props {
  match: any;
}

export default function SendMatchDialog({
  match,
}: Props) {
  const [sent, setSent] =
    useState(false);

  return (
    <div>
      <button
        onClick={() =>
          setSent(true)
        }
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send Match
      </button>

      {sent && (
        <div className="mt-3 p-3 bg-green-100 rounded">
          Match sent successfully to
          customer.
        </div>
      )}
    </div>
  );
}