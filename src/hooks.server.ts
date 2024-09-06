import { sequence } from "@sveltejs/kit/hooks";
import { handleErrorWithSentry, sentryHandle } from "@sentry/sveltekit";
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://f852534f4c7d39ab0f27dabe5502c625@o4507248775659520.ingest.de.sentry.io/4507248779395152',

  tracesSampleRate: 1.0,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: import.meta.env.DEV,
});

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(sentryHandle());

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
