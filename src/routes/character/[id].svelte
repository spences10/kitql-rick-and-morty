<script context="module" lang="ts">
  import { browser } from '$app/env'
  import { GQL_GetCharacter, type GetCharacter$input } from '$houdini'
  import type { LoadEvent } from '@sveltejs/kit'

  export async function load(event: LoadEvent) {
    const variables = { id: event.params.id }

    await GQL_GetCharacter.fetch({ event, variables })

    return { props: { variables } }
  }
</script>

<script lang="ts">
  export let variables: GetCharacter$input
  $: browser && GQL_GetCharacter.fetch({ variables })
  $: ({
    name,
    image,
    status,
    species,
    location,
    episode: episodes,
  } = $GQL_GetCharacter.data?.character || {
    name: null,
    image: null,
    status: null,
    species: null,
    location: null,
    episode: [],
  })
</script>

<section>
  <img src={image} alt={name} />
  <h2>{name}</h2>
  <p>{status}</p>
  <p>{species}</p>
  <p>
    <span>{location?.name}</span> - <span>{location?.type}</span>
  </p>
  <br />
  <b>Appeared in :</b>
  <ul>
    {#each episodes as ep}
      <li>{ep?.name}</li>
    {/each}
  </ul>
</section>

<style>
</style>
