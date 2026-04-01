'use strict';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // React Native dependencies path aliases
      'react-native': 'react-native-web',
      'react-native-svg': 'react-native-svg/lib/commonjs',
      // Add any other alias you wish to configure
    },
  },
  server: {
    port: 5000,
  },
});
