<script lang="ts">
  import { Button, Modal, modalStore } from '$lib';
  import type { User } from '$lib/types';

  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    avatarUrl: ''
  }

  function handleSubmit() {
    // Aquí implementarías la lógica para crear el usuario
    const newUser: Partial<User> = {
      ...formData,
      avatar: formData.avatarUrl
    }
    console.log('Creating user:', newUser)
    modalStore.close()
  }
</script>

<Modal title="CREATE NEW USER">
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <div>
      <label for="firstName" class="block text-sm font-semibold text-gray-700">FIRST NAME</label>
      <input
        type="text"
        id="firstName"
        bind:value={formData.firstName}
        class="mt-1.5 h-9 block w-full rounded border border-gray-300 focus:border-red-500 focus:ring-red-500 p-2"
        required
      />
    </div>

    <div>
      <label for="lastName" class="block text-sm font-semibold text-gray-700">LAST NAME</label>
      <input
        type="text"
        id="lastName"
        bind:value={formData.lastName}
        class="mt-1.5 h-9 block w-full rounded border border-gray-300 focus:border-red-500 focus:ring-red-500 p-2"
        required
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-semibold text-gray-700">EMAIL ADDRESS</label>
      <input
        type="email"
        id="email"
        bind:value={formData.email}
        class="mt-1.5 h-9 block w-full rounded border border-gray-300 focus:border-red-500 focus:ring-red-500 p-2"
        required
      />
    </div>

    <div>
      <label for="avatarUrl" class="block text-sm font-semibold text-gray-700">AVATAR IMAGE LINK</label>
      <input
        type="url"
        id="avatarUrl"
        bind:value={formData.avatarUrl}
        class="mt-1.5 h-9 block w-full rounded border border-gray-300 focus:border-red-500 focus:ring-red-500 p-2"
        required
      />
    </div>

    <div class="flex justify-end gap-4 mt-6">
      <Button
        variant="outline"
        on:click={() => modalStore.close()}
      >
        CANCEL
      </Button>
      <Button
        type="submit"
        variant="solid"
      >
        CREATE
      </Button>
    </div>
  </form>
</Modal>