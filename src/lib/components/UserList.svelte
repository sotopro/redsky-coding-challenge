<script lang="ts">
  import { UserRow } from '$lib';
  import type { User, UserActions } from '$lib/types';
  
  export let users: User[]
  export let handleEditUser: UserActions['handleEditUser']
  export let handleDeleteUser: UserActions['handleDeleteUser']
</script>

<div class="text-white font-semibold px-4 py-2 bg-(--color-primary)">
    <h2> 
        USER LIST
    </h2>
</div>

<table class="w-full">
  <thead>
    <tr class="bg-white border-b border-gray-300">
      <th class="text-left px-4 py-5 font-semibold">AVATAR</th>
      <th class="text-left px-4 py-5 font-semibold">FIRST NAME</th>
      <th class="text-left px-4 py-5 font-semibold">LAST NAME</th>
      <th class="text-left px-4 py-5 font-semibold">EMAIL ADDRESS</th>
      <th class="px-4 py-5" colspan="2"></th>
    </tr>
  </thead>
  <tbody>
    {#each users as user (user.id)}
      <UserRow {user} {handleEditUser} {handleDeleteUser} />
    {/each}
  </tbody>
</table>