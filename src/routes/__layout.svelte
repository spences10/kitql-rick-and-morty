<script context="module" lang="ts">
  import '../global.css'
  import { houdiniClient } from '$graphql/client'

  houdiniClient.init()
</script>

<main>
  <slot />
</main>
