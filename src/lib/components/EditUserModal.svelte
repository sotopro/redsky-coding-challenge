<script lang="ts">
  import { Modal, modalStore } from '$lib';
  import type { User } from '$lib/types';

  $: userData = $modalStore.userData as User
  $: formData = {
    firstName: userData?.firstName || '',
    lastName: userData?.lastName || '',
    email: userData?.email || '',
    avatarUrl: userData?.avatar || ''
  }

  function handleSubmit() {
    // Aquí implementarías la lógica para editar el usuario
    const updatedUser: Partial<User> = {
      ...userData,
      ...formData,
      avatar: formData.avatarUrl
    }
    console.log('Updating user:', updatedUser)
    modalStore.close()
  }
</script>

<Modal title="EDIT USER">
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <div>
      <label for="firstName" class="block text-sm font-semibold text-gray-700">FIRST NAME</label>
      <input
        type="text"
        id="firstName"
        bind:value={formData.firstName}
        class="mt-1.5 h-9 border block w-full rounded border-gray-300 focus:border-red-500 focus:ring-red-500 p-2"
        required
      />
    </div>

    <div>
      <label for="lastName" class="block text-sm font-semibold text-gray-700">LAST NAME</label>
      <input
        type="text"
        id="lastName"
        bind:value={formData.lastName}
        class="mt-1.5 h-9 border block w-full rounded border-gray-300 focus:border-red-500 focus:ring-red-500 p-2"
        required
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-semibold text-gray-700">EMAIL ADDRESS</label>
      <input
        type="email"
        id="email"
        bind:value={formData.email}
        class="mt-1.5 h-9 border block w-full rounded border-gray-300 focus:border-red-500 focus:ring-red-500 p-2"
        required
      />
    </div>

    <div>
      <label for="avatarUrl" class="block text-sm font-semibold text-gray-700">AVATAR IMAGE LINK</label>
      <input
        type="url"
        id="avatarUrl"
        bind:value={formData.avatarUrl}
        class="mt-1.5 h-9 border block w-full rounded border-gray-300 focus:border-red-500 focus:ring-red-500 p-2"
        required
      />
    </div>

    <div class="flex justify-end gap-4 mt-6">
      <button
        type="button"
        on:click={() => modalStore.close()}
        class="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50"
      >
        CANCEL
      </button>
      <button
        type="submit"
        class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        SAVE
      </button>
    </div>
  </form>
</Modal>