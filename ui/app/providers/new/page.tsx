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

      <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="form-heading">
        <h2 id="form-heading" className="text-xl font-bold">Add New Provider</h2>

        <label htmlFor="name" className="block">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border p-2 w-full rounded"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="specialty" className="block">Specialty</label>
        <input
          type="text"
          id="specialty"
          name="specialty"
          className="border p-2 w-full rounded"
          required
          value={formData.specialty}
          onChange={handleChange}
        />

        <label htmlFor="npi" className="block">NPI Number</label>
        <input
          type="text"
          id="npi"
          name="npi"
          className="border p-2 w-full rounded"
          required
          aria-describedby="npi-info"
          value={formData.npi}
          onChange={handleChange}
        />
        <p id="npi-info" className="text-gray-500 text-sm">Your 10-digit National Provider Identifier</p>
        <label htmlFor="location" className="block">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="border p-2 w-full rounded"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <label htmlFor="credentials" className="block">Credentials</label>
        <input
          type="text"
          name="credentials"
          placeholder="Credentials"
          className="border p-2 w-full rounded"
          value={formData.credentials}
          onChange={handleChange}
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Add Provider
        </button>
      </form>
    </main>
  );
}
