<script lang="ts">
  import { Button, Modal, modalStore } from '$lib';
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
      <Button
        variant="outline"
        on:click={() => modalStore.close()}
      >
        CANCEL
      </Button>
      <Button
        type="button"
        variant="solid"
        on:click={handleDelete}
      >
        DELETE
      </Button>
    </div>
  </div>
</Modal>