<script lang="ts">
  import { toastStore } from '$lib/stores/toast';
  import Toast from './Toast.svelte';
</script>

<div class="fixed bottom-4 right-4 z-50">
  {#each $toastStore as toast (toast.id)}
    <Toast
      type={toast.type}
      message={toast.message}
      onClose={() => toastStore.remove(toast.id)}
    />
  {/each}
</div>

