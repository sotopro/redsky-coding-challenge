import * as api from "$lib/services/api";
import type { User } from "$lib/types";
import { writable } from "svelte/store";

type UsersState = {
  users: User[];
  loading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

function createUsersStore() {
  const { subscribe, set, update } = writable<UsersState>(initialState);

  return {
    subscribe,
    async fetchUsers() {
      update((state) => ({ ...state, loading: true, error: null }));
      try {
        const users = await api.fetchUsers();
        update((state) => ({ ...state, users, loading: false }));
      } catch (error) {
        update((state) => ({
          ...state,
          loading: false,
          error: error instanceof Error ? error.message : "Unknown error",
        }));
      }
    },
    async createUser(userData: Omit<User, "id">) {
      update((state) => ({ ...state, loading: true, error: null }));
      try {
        const newUser = await api.createUser(userData);
        update((state) => ({
          ...state,
          users: [...state.users, newUser],
          loading: false,
        }));
        return newUser;
      } catch (error) {
        update((state) => ({
          ...state,
          loading: false,
          error: error instanceof Error ? error.message : "Unknown error",
        }));
        throw error;
      }
    },
    async updateUser(id: number, userData: Partial<User>) {
      update((state) => ({ ...state, loading: true, error: null }));
      try {
        const updatedUser = await api.updateUser(id, userData);
        update((state) => ({
          ...state,
          users: state.users.map((user) =>
            user.id === id ? updatedUser : user
          ),
          loading: false,
        }));
        return updatedUser;
      } catch (error) {
        update((state) => ({
          ...state,
          loading: false,
          error: error instanceof Error ? error.message : "Unknown error",
        }));
        throw error;
      }
    },
    async deleteUser(id: number) {
      update((state) => ({ ...state, loading: true, error: null }));
      try {
        await api.deleteUser(id);
        update((state) => ({
          ...state,
          users: state.users.filter((user) => user.id !== id),
          loading: false,
        }));
      } catch (error) {
        update((state) => ({
          ...state,
          loading: false,
          error: error instanceof Error ? error.message : "Unknown error",
        }));
        throw error;
      }
    },
    reset() {
      set(initialState);
    },
  };
}

export const usersStore = createUsersStore();
