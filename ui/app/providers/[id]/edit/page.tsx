"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { apiRequest } from "@/utils/api";

export default function EditProvider() {
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", specialty: "", npi: "", location: "", credentials: "" });

  useEffect(() => {
    apiRequest(`/providers/${id}`)
      .then((data) => setFormData(data))
      .catch((err) => console.error("Error fetching provider", err));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await apiRequest(`/providers/${id}`, "PUT", { provider: formData });
      router.push(`/providers/${id}`);
    } catch (err) {
      console.error("Error updating provider", err);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Edit Provider</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" className="border p-2 w-full rounded" value={formData.name} onChange={handleChange} required />
        <button type="submit" className="bg-yellow-500 text-white p-2 rounded w-full">Update Provider</button>
      </form>
    </main>
  );
}
