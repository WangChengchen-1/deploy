import autoImport from 'unplugin-auto-import/vite'

export default function () {
    return autoImport({
        imports: [
            'vue',
            'vue-router',
            'pinia'
        ],
        dts: false
    })
}
