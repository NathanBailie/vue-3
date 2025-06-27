import { resolve } from 'path';

import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                'pinia',
                'vue-router',
                {
                    axios: [['default', 'axios']],
                },
            ],
            dts: './auto-imports.d.ts',
            vueTemplate: true,
        }),
        Components({
            dirs: ['src/shared', 'src/features', 'src/entities', 'src/widgets'],
            extensions: ['vue'],
            deep: true,
            dts: 'src/app/types/components.d.ts',
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
