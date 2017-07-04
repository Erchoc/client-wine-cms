**在线演示网址**: [taylorchen709.github.io/vue-admin](https://taylorchen709.github.io/vue-admin)

# 如何使用

该项目使用基于脚手架 [vue-cli](https://github.com/vuejs/vue-cli)

``` bash
# 安装依赖包
npm install

# 开启热加载本地测试
npm run dev

# 上线前压缩构建
npm run build
```

# 目录结构说明
* build - webpack config files
* config - webpack config files
* dist - build
* src -your app
    * api
    * assets
    * common
    * components - your vue components
    * mock
    * styles
    * views - your pages
    * vuex
    * App.vue
    * main.js - main file
    * routes.js
* static - static assets

# 主题样式修改
1. 下载主题包 [elementui.github.io/theme-preview](https://elementui.github.io/theme-preview)
2. 将主题包放在此目录下 src/assets/theme/
3. 编辑修改 src/main.js 
``` bash
   import 'element-ui/lib/theme-default/index.css'
   改为
   import './assets/theme/your-theme/index.css'
```
4. 编辑修改 src/styles/vars.scss

![theme-blue](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/rec-demo.gif)
![theme-green](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/theme-green.png)


# License
