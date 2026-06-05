interface Props {
  score: number;
}

export default function MatchScore({
  score,
}: Props) {
  return (
    <div className="w-full">
      <div className="h-3 bg-gray-200 rounded">
        <div
          className="h-3 bg-green-500 rounded"
          style={{
            width: `${score}%`,
          }}
        />
      </div>

      <p className="mt-2 text-sm font-medium">
        Compatibility Score:
        {" "}
        {score}%
      </p>
    </div>
  );
}