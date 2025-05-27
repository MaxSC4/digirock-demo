import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: 'digirock-demo/',

    build: {
        rollupOptions: {
        input: {
            main:    resolve(__dirname, 'index.html'),
            tutoriel: resolve(__dirname, 'tutoriel.html'),
            exercices: resolve(__dirname, 'exercices.html'),
        }
        }
    }
})