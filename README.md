**在线演示网址**: [erchoc.github.io/vue-admin](https://erchoc.github.io/vue-admin)

# 如何使用

- 需要配合[后端API](https://github.com/Erchoc/tp5-wine-api)和[客户端小程序](https://github.com/Erchoc/client-wine-cms)作界面显示。

- 该项目使用基于vue官方脚手架, 请先使用npm安装 [vue-cli](https://github.com/vuejs/vue-cli)

``` bash
# 安装依赖包
npm install

# 开启热加载本地测试
npm run dev

# 上线前压缩构建
npm run build
```

# 技术栈和第三方组件

- "element-ui": "^1.2.8",
- "font-awesome": "^4.7.0",
- "nprogress": "^0.2.0",
- "vue": "^2.2.2",
- "vue-router": "^2.3.0",
- "axios": "^0.15.3",
- "vuex": "^2.0.0-rc.6"

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


# License
