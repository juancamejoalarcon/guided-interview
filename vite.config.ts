import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    if (mode === 'production') {
        return {
            build: {
                copyPublicDir: false,
                outDir: '.',
                lib: {
                    entry: resolve(__dirname, 'src/lib/GuidedInterview.ts'),
                    name: 'Guided Interview',
                    fileName: (format, entryName) => {
                        if (format === 'umd') {
                            return 'guided-interview.umd.js'
                        } else {
                            return 'guided-interview.js'
                        }
                    },
                },
            // rollupOptions: {},
            },
        }
    }
    return {
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src"),
            },
        },
    }
});
