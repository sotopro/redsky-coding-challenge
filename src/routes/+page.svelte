<script lang="ts">
  import { CreateUserModal, DeleteUserModal, EditUserModal, Header, modalStore, UserList } from "$lib";


  type User = {
    id: number
    avatar: string
    firstName: string
    lastName: string
    email: string
  }

  let users: User[] = [
    {
      id: 1,
      avatar: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
      firstName: "Rianna",
      lastName: "Wells",
      email: "R_Wells022@hotmail.com"
    },
    {
      id: 2,
      avatar: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
      firstName: "Harpreet",
      lastName: "Gardner",
      email: "harpheart5@gmail.com"
    },
    {
      id: 3,
      avatar: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
      firstName: "Alec",
      lastName: "Kirk",
      email: "lordaleck@gmail.com"
    },
    {
      id: 4,
      avatar: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
      firstName: "Elissa",
      lastName: "Schmitt",
      email: "ES05868@yahoo.com"
    }
  ]

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
  <UserList {users} {handleEditUser} {handleDeleteUser} />
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