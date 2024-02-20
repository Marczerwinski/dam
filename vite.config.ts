import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: './src/Test/index.ts',
            name: 'Dam',
            // the proper extensions will be added
            fileName: 'dam',
            types: 'src/index.d.ts',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    'react': 'react',
                    'react-dom': 'react-dom',
                },
            }
        },
    },
})
