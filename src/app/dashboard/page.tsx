"use client";

import { useState } from "react";

import customers from "@/data/customer.json";

import DashboardHeader from "@/components/DashboardHeader";
import SearchBar from "@/components/SearchBar";
import CustomerFilters from "@/components/CustomerFilters";
import CustomerCard from "@/components/CustomerCard";

export default function Dashboard() {
  const [search, setSearch] =
    useState("");

  const [city, setCity] =
    useState("");

  const filteredCustomers =
    customers.filter((customer) => {
      const nameMatch =
        `${customer.firstName} ${customer.lastName}`
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const cityMatch =
        city === "" ||
        customer.city === city;

      return (
        nameMatch && cityMatch
      );
    });

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <DashboardHeader />

      <div className="flex gap-4 mb-8">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CustomerFilters
          city={city}
          setCity={setCity}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {filteredCustomers.map(
          (customer) => (
            <CustomerCard
              key={customer.id}
              customer={customer}
            />
          )
        )}
      </div>
    </div>
  );
}