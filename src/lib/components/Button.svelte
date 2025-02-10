<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let type: "button" | "submit" | "reset" = "button";
  export let variant: "solid" | "outline" = "solid";
  export let size: "sm" | "md" | "lg" = "md";
  export let disabled = false;
  export let fullWidth = false;
  
  const dispatch = createEventDispatcher();
  
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  const variantClasses = {
    solid: "bg-red-600 text-white hover:bg-red-700",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-50"
  };
  
  $: classes = [
    "inline-flex items-center justify-center rounded transition-colors duration-200 px-4 py-2 font-semibold",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed" : "",
    $$props.class ?? ""
  ].join(" ");

  function handleClick(event: MouseEvent) {
    dispatch('click', event);
  }
</script>

<button
  {type}
  {disabled}
  class={classes}
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
</button>