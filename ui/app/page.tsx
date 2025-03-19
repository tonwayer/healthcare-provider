"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiRequest } from "@/utils/api";

interface Provider {
  id: number;
  name: string;
  specialty: string;
  location: string;
  credentials: string;
}

export default function Home() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [search, setSearch] = useState<string>("");
  const [specialty, setSpecialty] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    apiRequest("/providers")
      .then((data) => {
        setProviders(data);
        setFilteredProviders(data);
      })
      .catch((err) => console.error("Error fetching providers", err));
  }, []);

  useEffect(() => {
    let filtered = providers;

    if (search) filtered = filtered.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    if (specialty) filtered = filtered.filter((p) => p.specialty.toLowerCase().includes(specialty.toLowerCase()));
    if (location) filtered = filtered.filter((p) => p.location.toLowerCase().includes(location.toLowerCase()));

    setFilteredProviders(filtered);
  }, [search, specialty, location, providers]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Healthcare Providers</h1>
      <Link href="/providers/new" className="bg-green-500 text-white p-2 rounded inline-block mt-4">
        Add New Provider
      </Link>

      <div className="flex gap-4 mt-4">
        <input type="text" placeholder="Search by name" className="border p-2 w-full rounded" value={search} onChange={(e) => setSearch(e.target.value)} />
        <input type="text" placeholder="Filter by specialty" className="border p-2 w-full rounded" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
        <input type="text" placeholder="Filter by location" className="border p-2 w-full rounded" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>

      <ul className="mt-4 space-y-2">
        {filteredProviders.map((provider) => (
          <li key={provider.id} className="border p-3 rounded-lg shadow-sm">
            <Link href={`/providers/${provider.id}`}>
              <strong>{provider.name}</strong> - {provider.specialty} ({provider.location})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
