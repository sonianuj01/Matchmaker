import { NextResponse } from "next/server";

import customers from "@/data/customer.json";
import matchPool from "@/data/matchPool.json";

import {
  calculateMatches,
} from "@/lib/matchAlgorithm";

export async function GET() {
  const customer =
    customers[0];

  const matches =
    calculateMatches(
      customer,
      matchPool
    );

  return NextResponse.json(
    matches
  );
}