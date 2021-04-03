<script>
  import { store } from '../stores/store'

  console.log($store)
</script>

<main>
  {#each $store as s}
    <p>{s.title}</p>
  {/each}
</main>

