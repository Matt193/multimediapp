// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { supabase } from "src/app/services/supabase.service";

export const environment = {
  production: false,

  firebaseConfig: {
  apiKey: "AIzaSyAz1uj6RSimbB-VzKgRiJI0M-jnA16lcG8",
  authDomain: "multimediaapp-9a468.firebaseapp.com",
  projectId: "multimediaapp-9a468",
  storageBucket: "multimediaapp-9a468.firebasestorage.app",
  messagingSenderId: "840306985616",
  appId: "1:840306985616:web:330d7befae718a0fa96615",
  measurementId: "G-KJDXPFQ7WW"
  },
   supabaseUrl: 'https://upfenwerhmrbnqffmcam.supabase.co',
   supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZmVud2VyaG1yYm5xZmZtY2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMDYwNzMsImV4cCI6MjA2MjY4MjA3M30.rP-_-zxxaIH6cRsGXgKvSkEHj39PJ7S6UVGnULUGxrs'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
