// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://ghonk.github.io',
    build: {
        assets: '_astro'
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                    // Ensure .nojekyll is copied to build output
                }
            }
        }
    }
});
