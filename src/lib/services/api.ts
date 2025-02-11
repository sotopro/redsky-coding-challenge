import type { User } from "$lib/types";

const API_URL = "http://localhost:3000/api";

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) throw new Error("Error fetching users");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function createUser(userData: Omit<User, "id">): Promise<User> {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error("Error creating user");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function updateUser(
  id: number,
  userData: Partial<User>
): Promise<User> {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error("Error updating user");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function deleteUser(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error deleting user");
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
