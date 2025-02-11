<script lang="ts">
  import { Button, Modal } from '$lib';
  import { modalStore } from '$lib/stores/modal';
  import { usersStore } from '$lib/stores/users';
  import { z } from 'zod';

  // Definir el esquema de validación
  const userSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    avatarUrl: z.string().url("Invalid URL").optional().or(z.literal(''))
  })

  type FormData = z.infer<typeof userSchema>

  let formData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    avatarUrl: ''
  }

  let errors: Partial<Record<keyof FormData, string>> = {}
  let submitting = false
  let submitError: string | null = null

  async function handleSubmit() {
    try {
      submitting = true
      submitError = null
      errors = {}
      
      const validatedData = userSchema.parse(formData)
      await usersStore.createUser({
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        avatar: validatedData.avatarUrl ? validatedData.avatarUrl : ''
      })
      
      modalStore.close()
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach(err => {
          errors[err.path[0] as keyof FormData] = err.message
        })
      } else {
        submitError = e instanceof Error ? e.message : 'Error creating user'
      }
    } finally {
      submitting = false
    }
  }
</script>

<Modal title="CREATE NEW USER">
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    {#if submitError}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        {submitError}
      </div>
    {/if}

    <div>
      <label for="firstName" class="block text-sm font-medium text-gray-700">FIRST NAME</label>
      <input
        type="text"
        id="firstName"
        bind:value={formData.firstName}
        class="mt-1.5 h-9 border p-2 block w-full rounded border-gray-300 focus:border-red-500 focus:ring-red-500"
        required
      />
      {#if errors.firstName}
        <p class="mt-1.5 h-9 border p-2 text-sm text-red-600">{errors.firstName}</p>
      {/if}
    </div>

    <div>
      <label for="lastName" class="block text-sm font-medium text-gray-700">LAST NAME</label>
      <input
        type="text"
        id="lastName"
        bind:value={formData.lastName}
        class="mt-1.5 h-9 border p-2 block w-full rounded border-gray-300 focus:border-red-500 focus:ring-red-500"
        required
      />
      {#if errors.lastName}
        <p class="mt-1.5 h-9 border p-2 text-sm text-red-600">{errors.lastName}</p>
      {/if}
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">EMAIL ADDRESS</label>
      <input
        type="email"
        id="email"
        bind:value={formData.email}
        class="mt-1.5 h-9 border p-2 block w-full rounded border-gray-300 focus:border-red-500 focus:ring-red-500"
        required
      />
      {#if errors.email}
        <p class="mt-1.5 h-9 border p-2 text-sm text-red-600">{errors.email}</p>
      {/if}
    </div>

    <div>
      <label for="avatarUrl" class="block text-sm font-medium text-gray-700">AVATAR IMAGE LINK</label>
      <input
        type="url"
        id="avatarUrl"
        bind:value={formData.avatarUrl}
        class="mt-1.5 h-9 border p-2 block w-full rounded border-gray-300 focus:border-red-500 focus:ring-red-500"
      />
      {#if errors.avatarUrl}
        <p class="mt-1.5 h-9 border p-2 text-sm text-red-600">{errors.avatarUrl}</p>
      {/if}
    </div>

    <div class="flex justify-end gap-4 mt-6">
      <Button
        variant="outline"
        on:click={() => modalStore.close()}
        disabled={submitting}
      >
        CANCEL
      </Button>
      <Button
        type="submit"
        variant="solid"
        disabled={submitting}
      >
        {submitting ? 'CREATING...' : 'CREATE'}
      </Button>
    </div>
  </form>
</Modal>

