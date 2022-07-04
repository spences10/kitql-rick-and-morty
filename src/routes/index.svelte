<script context="module" lang="ts">
  import { browser } from '$app/env'
  import { GQL_AllCharacters } from '$houdini'
  import type { LoadEvent } from '@sveltejs/kit'

  export async function load(event: LoadEvent) {
    await GQL_AllCharacters.fetch({ event })

    return {}
  }
</script>

<script>
  $: browser && GQL_AllCharacters.fetch()
  let characters = $GQL_AllCharacters.data?.characters?.results || []
</script>

<h1>The World of Rick and Morty</h1>
<div class="wrapper">
  {#each characters as character}
    <section>
      <a href={`/character/${character?.id}`}>
        <img src={character?.image} alt={character?.name} />
        <h2>{character?.name}</h2>
      </a>
    </section>
  {/each}
</div>

<style>
  h1 {
    font-size: 3em;
    text-align: center;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  section {
    width: 200px;
    margin: 0 10px;
  }
  img {
    width: 100%;
  }
  h2 {
    margin: 0;
  }
</style>
