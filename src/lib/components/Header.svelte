<script lang="ts">
  export let onCreateUser: () => void;
</script>

<header class="flex flex-col pt-32">
    <h1 class="text-5xl tracking-wider weight-400">
    REDSKY CODING CHALLENGE
    </h1>
    <div class="border-b border-gray-200 pt-2"></div>
    <div class="flex flex-row justify-end pt-10 pb-6">
    <button
        on:click={onCreateUser}
        class="bg-red-600 text-white px-6 py-2 rounded float-right mb-4 hover:bg-red-700 transition-colors"
    >
        CREATE NEW USER
    </button>
    </div>
</header>