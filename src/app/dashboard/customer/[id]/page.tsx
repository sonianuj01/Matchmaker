import customers from "@/data/customer.json";

import CustomerDetails from "@/components/CustomerDetails";
import MatchCard from "@/components/MatchCard";

import {
  calculateMatches,
} from "@/lib/matchAlgorithm";

import matchPool from "@/data/matchPool.json";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CustomerPage({
  params,
}: Props) {
  const { id } =
    await params;

  const customer =
    customers.find(
      (item) =>
        item.id === id
    );

  if (!customer) {
    return (
      <div className="p-8">
        Customer Not Found
      </div>
    );
  }

  const matches =
    calculateMatches(
      customer,
      matchPool
    );

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <CustomerDetails
        customer={customer}
      />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-5">
          Suggested Matches
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {matches.map(
            (match: any) => (
              <MatchCard
                key={match.id}
                match={match}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}