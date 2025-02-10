import type { User } from "$lib/types";
import { writable } from "svelte/store";

type ModalType = "create" | "edit" | "delete" | null;
type ModalState = {
  isOpen: boolean;
  type: ModalType;
  userData?: User;
};

const initialState: ModalState = {
  isOpen: false,
  type: null,
  userData: undefined,
};

function createModalStore() {
  const { subscribe, set, update } = writable<ModalState>(initialState);

  return {
    subscribe,
    open: (type: ModalType, userData?: User) =>
      update((state) => ({
        isOpen: true,
        type,
        userData,
      })),
    close: () => set(initialState),
  };
}

export const modalStore = createModalStore();
