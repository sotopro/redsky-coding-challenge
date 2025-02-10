<script lang="ts">
  import { Modal, modalStore } from '$lib';
  import type { User } from '$lib/types';

  $: userData = $modalStore.userData as User

  function handleDelete() {
    // Aquí implementarías la lógica para eliminar el usuario
    console.log('Deleting user:', userData)
    modalStore.close()
  }
</script>

<Modal title="DELETE USER">
  <div class="space-y-4">
    <p class="text-gray-700">
      Are you sure you want to delete the user {userData?.firstName} {userData?.lastName}?
      This action cannot be undone.
    </p>

    <div class="flex justify-end gap-4 mt-6">
      <button
        type="button"
        on:click={() => modalStore.close()}
        class="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50"
      >
        CANCEL
      </button>
      <button
        type="button"
        on:click={handleDelete}
        class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        DELETE
      </button>
    </div>
  </div>
</Modal>