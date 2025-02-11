<script lang="ts">
  import { CreateUserModal, DeleteUserModal, EditUserModal, Header, modalStore, ToastContainer, UserList } from "$lib";
  import { usersStore } from '$lib/stores/users';
  import { onMount } from 'svelte';

  $: users = $usersStore.users
  $: loading = $usersStore.loading
  $: error = $usersStore.error

  onMount(() => {
    usersStore.fetchUsers()
  })

  function handleCreateUser() {
    modalStore.open('create')
  }

  function handleEditUser(id: number) {
    const user = users.find(u => u.id === id)
    if (user) {
      modalStore.open('edit', user)
    }
  }

  function handleDeleteUser(id: number) {
    const user = users.find(u => u.id === id)
    if (user) {
      modalStore.open('delete', user)
    }
  }
</script>

<div class="container mx-auto px-4 py-8 max-w-6xl">
  <Header onCreateUser={handleCreateUser} />
  {#if error}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
      {error}
    </div>
  {/if}
  {#if loading}
    <div class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
    </div>
  {:else}
    <UserList {users} {handleEditUser} {handleDeleteUser} />
  {/if}
</div>

{#if $modalStore.isOpen}
  {#if $modalStore.type === 'create'}
    <CreateUserModal />
  {:else if $modalStore.type === 'edit'}
    <EditUserModal />
  {:else if $modalStore.type === 'delete'}
    <DeleteUserModal />
  {/if}
{/if}

<ToastContainer />