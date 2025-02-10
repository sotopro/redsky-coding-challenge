<script lang="ts">
  import { UserRow } from '$lib';
  import type { User, UserActions } from '$lib/types';
  
  export let users: User[]
  export let handleEditUser: UserActions['handleEditUser']
  export let handleDeleteUser: UserActions['handleDeleteUser']
</script>

<div class="bg-red-600 text-white px-4 py-2">
    <h2> 
        USER LIST
    </h2>
</div>

<table class="w-full border border-red-600">
  <thead>
    <tr class="bg-white border-b border-gray-300">
      <th class="text-left px-4 py-5">AVATAR</th>
      <th class="text-left px-4 py-5">FIRST NAME</th>
      <th class="text-left px-4 py-5">LAST NAME</th>
      <th class="text-left px-4 py-5">EMAIL ADDRESS</th>
      <th class="px-4 py-5" colspan="2"></th>
    </tr>
  </thead>
  <tbody>
    {#each users as user (user.id)}
      <UserRow {user} {handleEditUser} {handleDeleteUser} />
    {/each}
  </tbody>
</table>