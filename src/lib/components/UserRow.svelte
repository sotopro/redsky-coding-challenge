<script lang="ts">
  import type { User, UserActions } from '$lib/types'
  
  export let user: User
  export let handleEditUser: UserActions['handleEditUser']
  export let handleDeleteUser: UserActions['handleDeleteUser']
</script>

<tr class="border-b border-gray-300 hover:bg-gray-50">
  <td class="px-4 py-2.5">
    <img
      src={user.avatar || "/placeholder.svg"}
      alt={`${user.firstName} ${user.lastName}`}
      class="w-12 h-12 object-cover"
    />
  </td>
  <td class="p-4">{user.firstName}</td>
  <td class="p-4">{user.lastName}</td>
  <td class="p-4">{user.email}</td>
  <td class="p-4">
    <button
      on:click={() => handleEditUser(user.id)}
      class="bg-red-600 text-white px-2 py-2.5 hover:bg-red-700 transition-colors"
    >
      EDIT
    </button>
  </td>
  <td class="p-4">
    <button
      on:click={() => handleDeleteUser(user.id)}
      class="bg-red-600 text-white px-2 py-2.5 hover:bg-red-700 transition-colors"
    >
      DELETE
    </button>
  </td>
</tr>