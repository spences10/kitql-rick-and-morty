/** @type {import('houdini').ConfigFile} \*/
const config = {
  schemaPath: 'src/lib/graphql/schema.json',
  // apiUrl: 'https://rickandmortyapi.com/graphql',
  sourceGlob: 'src/**/*.{svelte,gql}',
  scalars: {
    // Houdini will help you with this part when you will `generate`
    // No worries 😉
  },
  disableMasking: true,
}

export default config
