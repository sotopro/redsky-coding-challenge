<script lang="ts">
  import { modalStore } from "$lib";
  import { onMount } from "svelte";
  import { fade, scale } from "svelte/transition";

  export let title: string;

  let modalElement: HTMLDivElement;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      modalStore.close();
    }
  }

  function handleOverlayClick(event: MouseEvent) {
    // Solo cerrar si se hace clic en el overlay, no en el contenido
    if (event.target === event.currentTarget) {
      modalStore.close();
    }
  }

  onMount(() => {
    // Enfocar el modal cuando se abre
    modalElement?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
</script>

{#if $modalStore.isOpen}
  <div
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    transition:fade
  >
    <!-- Botón overlay -->
    <button
      class="absolute inset-0 w-full h-full bg-transparent"
      on:click={handleOverlayClick}
      on:keydown={handleKeydown}
      aria-label="Close modal"
    ></button>
    
    <!-- Modal content -->
    <div 
      bind:this={modalElement}
      class="bg-white rounded-lg w-full max-w-2xl mx-4 relative z-10"
      transition:scale
      tabindex="-1"
    >
      <div class="bg-red-600 text-white px-6 py-4 rounded-t-lg">
        <h2 id="modal-title" class="text-xl font-semibold">{title}</h2>
      </div>
      <div class="p-6">
        <slot />
      </div>
    </div>
  </div>
{/if}