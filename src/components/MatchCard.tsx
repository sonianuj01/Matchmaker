import MatchScore from "./MatchScore";
import SendMatchDialog from "./SendMatchDialog";

interface Props {
  match: any;
}

export default function MatchCard({
  match,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex justify-between">
        <h3 className="font-bold text-lg">
          {match.firstName}
          {" "}
          {match.lastName}
        </h3>

        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
          High Potential
        </span>
      </div>

      <div className="mt-3 space-y-1">
        <p>
          Age:
          {" "}
          {match.age}
        </p>

        <p>
          City:
          {" "}
          {match.city}
        </p>

        <p>
          Income:
          ₹
          {match.income}
        </p>

        <p>
          Company:
          {" "}
          {match.company}
        </p>
      </div>

      <div className="mt-4">
        <MatchScore
          score={match.score}
        />
      </div>

      <div className="mt-4">
        <SendMatchDialog
          match={match}
        />
      </div>
    </div>
  );
}