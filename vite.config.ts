import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src"),
            },
        },
        plugins: [dts({
            outDir: 'types',
            beforeWriteFile: (filePath, content) => ({
                filePath: filePath.replace('lib/', ''),
                content,
            }),
        })],
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
});
