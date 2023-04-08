import * as components from '@element-plus/icons-vue'

export default {
    install: (app) => {
        // app 当前vue根实例
        for (const key in components) {
            const componentConfig = components[key];
            app.component(componentConfig.name, componentConfig);
        }
    },
};
