// place files you want to import through the `$lib` alias in this folder.
// src/lib/index.ts
export type { User, UserActions } from "$lib/types";

export { default as Header } from "$lib/components/Header.svelte";
export { default as UserList } from "$lib/components/UserList.svelte";
export { default as UserRow } from "$lib/components/UserRow.svelte";
