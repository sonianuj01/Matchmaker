"use client";

import { useEffect, useState } from "react";

interface Props {
  customer: any;
  match: any;
}

export default function AICompatibility({
  customer,
  match,
}: Props) {
  const [reason, setReason] =
    useState("");

  useEffect(() => {
    const generate =
      async () => {
        try {
          const res =
            await fetch(
              "/api/ai-intro",
              {
                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json",
                },

                body: JSON.stringify({
                  customer,
                  match,
                }),
              }
            );

          const data =
            await res.json();

          setReason(
            data.explanation
          );
        } catch (err) {
          console.error(err);
        }
      };

    generate();
  }, [customer, match]);

  return (
    <div className="bg-purple-50 p-4 rounded-xl mt-4">
      <h3 className="font-semibold mb-2">
        AI Compatibility Insight
      </h3>

      <p className="text-sm">
        {reason ||
          "Generating..."}
      </p>
    </div>
  );
}