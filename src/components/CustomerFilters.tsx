"use client";

interface Props {
  city: string;
  setCity: (city: string) => void;
}

export default function CustomerFilters({
  city,
  setCity,
}: Props) {
  return (
    <select
      value={city}
      onChange={(e) =>
        setCity(e.target.value)
      }
      className="border rounded p-3"
    >
      <option value="">
        All Cities
      </option>

      <option value="Delhi">
        Delhi
      </option>

      <option value="Mumbai">
        Mumbai
      </option>

      <option value="Bangalore">
        Bangalore
      </option>

      <option value="Pune">
        Pune
      </option>
    </select>
  );
}