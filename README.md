# SvelteKit + Node Adapter + Sentry Errors

This repo demonstrates a failure with SvelteKit, Sentry, and the `adapter-node` build target.

While the Sentry Wizard will install `@sentry/sveltekit` to `dependencies`, we want our build to be completely hermetic and have attempted to install it to `devDependencies`. This does not seem to be supported, as we get the following error: 

```
error during build:
RollupError: Unexpected character '�'
    at getRollupError (file:///Users/damon/Workspace/svelte-install-check/node_modules/rollup/dist/es/shared/parseAst.js:392:41)
    at ParseError.initialise (file:///Users/damon/Workspace/svelte-install-check/node_modules/rollup/dist/es/shared/node-entry.js:11494:28)
    at convertNode (file:///Users/damon/Workspace/svelte-install-check/node_modules/rollup/dist/es/shared/node-entry.js:13192:10)
    at convertProgram (file:///Users/damon/Workspace/svelte-install-check/node_modules/rollup/dist/es/shared/node-entry.js:12536:12)
    at Module.setSource (file:///Users/damon/Workspace/svelte-install-check/node_modules/rollup/dist/es/shared/node-entry.js:14355:24)
    at async ModuleLoader.addModuleSource (file:///Users/damon/Workspace/svelte-install-check/node_modules/rollup/dist/es/shared/node-entry.js:19046:13)
```

