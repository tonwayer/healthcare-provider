"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/utils/api";

export default function NewProvider() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", specialty: "", npi: "", location: "", credentials: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await apiRequest("/providers", "POST", { provider: formData });
      router.push("/");
    } catch (err) {
      setError("Error adding provider");
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Add New Provider</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" className="border p-2 w-full rounded" value={formData.name} onChange={handleChange} required />
        <input type="text" name="specialty" placeholder="Specialty" className="border p-2 w-full rounded" value={formData.specialty} onChange={handleChange} required />
        <input type="text" name="npi" placeholder="NPI Number" className="border p-2 w-full rounded" value={formData.npi} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" className="border p-2 w-full rounded" value={formData.location} onChange={handleChange} required />
        <input type="text" name="credentials" placeholder="Credentials" className="border p-2 w-full rounded" value={formData.credentials} onChange={handleChange} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Add Provider</button>
      </form>
    </main>
  );
}
