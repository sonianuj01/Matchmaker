"use client";

import { useEffect, useState } from "react";

export default function useMatches() {
  const [matches, setMatches] =
    useState<any[]>([]);

  useEffect(() => {
    fetch("/api/matches")
      .then((res) => res.json())
      .then((data) =>
        setMatches(data)
      );
  }, []);

  return matches;
}