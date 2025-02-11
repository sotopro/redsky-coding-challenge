import { writable } from "svelte/store";

type ToastType = "success" | "error";

type Toast = {
  id: number;
  type: ToastType;
  message: string;
};

function createToastStore() {
  const { subscribe, update } = writable<Toast[]>([]);

  let nextId = 1;

  return {
    subscribe,
    add: (message: string, type: ToastType = "success") => {
      const id = nextId++;
      update((toasts) => [...toasts, { id, type, message }]);
      setTimeout(() => {
        update((toasts) => toasts.filter((t) => t.id !== id));
      }, 5000);
    },
    remove: (id: number) => {
      update((toasts) => toasts.filter((t) => t.id !== id));
    },
  };
}

export const toastStore = createToastStore();
