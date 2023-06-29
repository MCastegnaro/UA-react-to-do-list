import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      import('@cypress/code-coverage/task').then((module) => {
        module.default(on, config);
      });

      return config
    },
  },
});