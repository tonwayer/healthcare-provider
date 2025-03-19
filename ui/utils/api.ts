export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function apiRequest(endpoint: string, method = "GET", data?: any) {
  const token = "6zV9KR5cTQPzQNpAxMLbi5mh";

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  if (method !== "DELETE") {
    return response.json();
  } else {
    return null
  }
}

export async function deactivateProvider(id: number) {
  return apiRequest(`/providers/${id}`, "DELETE");
}

export async function reactivateProvider(id: number) {
  return apiRequest(`/providers/${id}/reactivate`, "PUT");
}
