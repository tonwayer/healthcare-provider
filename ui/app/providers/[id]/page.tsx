"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { apiRequest, deactivateProvider, reactivateProvider } from "@/utils/api";
import Link from "next/link";

interface Provider {
  id: number;
  name: string;
  specialty: string;
  location: string;
  credentials: string;
  deactivated: boolean;
}

export default function ProviderDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [provider, setProvider] = useState<Provider | null>(null);

  useEffect(() => {
    apiRequest(`/providers/${id}`)
      .then((data) => setProvider(data))
      .catch((err) => console.error("Error fetching provider", err));
  }, [id]);

  const handleDeactivate = async () => {
    await deactivateProvider(provider!.id);
    setProvider({ ...provider!, deactivated: true });
  };

  const handleReactivate = async () => {
    await reactivateProvider(provider!.id);
    setProvider({ ...provider!, deactivated: false });
  };

  if (!provider) return <p>Loading...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{provider.name}</h1>
      <p><strong>Specialty:</strong> {provider.specialty}</p>
      <p><strong>Location:</strong> {provider.location}</p>
      <p><strong>Credentials:</strong> {provider.credentials}</p>
      <p><strong>Status:</strong> {provider.deactivated ? "Inactive" : "Active"}</p>
      <Link href={`/providers/${provider.id}/edit`} className="bg-yellow-500 text-white p-3 rounded mr-2">
        Edit Provider
      </Link>
      {provider.deactivated ? (
        <button onClick={handleReactivate} className="bg-green-500 text-white p-2 rounded mt-4">
          Reactivate Provider
        </button>
      ) : (
        <button onClick={handleDeactivate} className="bg-red-500 text-white p-2 rounded mt-4">
          Deactivate Provider
        </button>
      )}
    </main>
  );
}
