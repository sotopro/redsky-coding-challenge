<script lang="ts">
  import { AlertTriangle, Check, X } from 'lucide-svelte';
  import { fly } from 'svelte/transition';

  export let type: 'success' | 'error' = 'success';
  export let message: string;
  export let onClose: () => void;

  const icons = {
    success: Check,
    error: AlertTriangle
  };

  const Icon = icons[type];
</script>

<div
  class="fixed bottom-4 right-4 flex items-center p-4 mb-4 text-white rounded-lg shadow"
  class:bg-green-500={type === 'success'}
  class:bg-red-500={type === 'error'}
  role="alert"
  transition:fly={{ y: 200, duration: 300 }}
>
  <Icon class="w-5 h-5 mr-2" />
  <span class="sr-only">{type === 'success' ? 'Success' : 'Error'}:</span>
  <div class="text-sm font-normal">{message}</div>
  <button
    type="button"
    class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8 text-white hover:bg-green-600"
    data-dismiss-target="#toast-success"
    aria-label="Close"
    on:click={onClose}
  >
    <span class="sr-only">Close</span>
    <X class="w-5 h-5" />
  </button>
</div>

