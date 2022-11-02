import { defineConfig } from "cypress";
import cucumber from 'cypress-cucumber-preprocessor'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
  },

  component: {
    devServer: {
      framework: "svelte",
      bundler: "vite",
    },
  },
});
