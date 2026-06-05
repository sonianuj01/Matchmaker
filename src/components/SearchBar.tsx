"use client";

interface Props {
  search: string;
  setSearch: (
    value: string
  ) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <input
      className="border p-3 rounded w-full"
      placeholder="Search Customer..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}