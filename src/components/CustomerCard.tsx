import Link from "next/link";

interface Props {
  customer: any;
}

export default function CustomerCard({
  customer,
}: Props) {
  return (
    <Link
      href={`/dashboard/customer/${customer.id}`}
    >
      <div className="border rounded-xl p-5 hover:shadow-lg transition cursor-pointer bg-white">
        <div className="flex justify-between">
          <h2 className="font-bold text-lg">
            {customer.firstName}{" "}
            {customer.lastName}
          </h2>

          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
            Active
          </span>
        </div>

        <div className="mt-3 space-y-1">
          <p>
            Age: {customer.age}
          </p>

          <p>
            City: {customer.city}
          </p>

          <p>
            Status:
            {" "}
            {customer.maritalStatus}
          </p>
        </div>
      </div>
    </Link>
  );
}