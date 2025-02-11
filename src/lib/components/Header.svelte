<script lang="ts">
  import { Button } from "$lib";

  export let onCreateUser: () => void;
</script>

<header class="flex flex-col pt-20">
    <h1 class="text-5xl tracking-wider weight-400">
    REDSKY CODING CHALLENGE
    </h1>
    <div class="border-b border-gray-200 pt-2"></div>
    <div class="flex flex-row justify-end pt-10 pb-6">
    <Button
        on:click={onCreateUser}
        variant="solid"
        size="sm"
    >
        CREATE NEW USER
    </Button>
    </div>
</header>