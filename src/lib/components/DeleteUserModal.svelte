<script lang="ts">
  import { Button, Modal } from '$lib';
  import { modalStore } from '$lib/stores/modal';
  import { usersStore } from '$lib/stores/users';
  import type { User } from '$lib/types';

  $: userData = $modalStore.userData as User;

  let deleting = false;
  let error: string | null = null;

  async function handleDelete() {
    try {
      deleting = true;
      error = null;
      await usersStore.deleteUser(userData.id);
      modalStore.close();
    } catch (e) {
      error = e instanceof Error ? e.message : 'An error occurred while deleting the user';
    } finally {
      deleting = false;
    }
  }
</script>

<Modal title="DELETE USER">
  <div class="space-y-4">
    {#if error}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        {error}
      </div>
    {/if}

    <p class="text-gray-700">
      Are you sure you want to delete the user {userData?.firstName} {userData?.lastName}?
      This action cannot be undone.
    </p>

    <div class="flex justify-end gap-4 mt-6">
      <Button
        variant="outline"
        on:click={() => modalStore.close()}
        disabled={deleting}
      >
        CANCEL
      </Button>
      <Button
        type="button"
        variant="solid"
        on:click={handleDelete}
        disabled={deleting}
      >
        {deleting ? 'DELETING...' : 'DELETE'}
      </Button>
    </div>
  </div>
</Modal>

