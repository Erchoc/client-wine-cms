import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'

import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',                    // 点击时，如果子节点不存在则访问这个path
        component: Home,
        name: '控制面板',
        leaf: true,                   // 无子节点
        iconCls: 'fa fa-dashboard',   // 图标库地址: http://fontawesome.io
        children: [
            { path: '/', component: Dashboard, name: '控制面板'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'fa fa-users',
        children: [
            { path: '/users', component: Dashboard, name: '用户管理'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '分类管理',
        iconCls: 'fa fa-categ',
        children: [
            { path: '/categories', component: Dashboard, name: '分类管理'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '商品管理',
        iconCls: 'fa fa-dashboard',
        children: [
            { path: '/products', component: Dashboard, name: '商品管理'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '订单管理',
        iconCls: 'fa fa-dashboard',
        children: [
            { path: '/orders', component: Dashboard, name: '订单管理'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '企业网站',
        iconCls: 'fa fa-dashboard',
        children: [
            { path: '/web-config', component: Dashboard, name: '配置信息'},
            { path: '/web-news', component: Dashboard, name: '新闻发布'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '公众号运营',
        iconCls: 'fa fa-dashboard',
        children: [
            { path: '/wx-config', component: Dashboard, name: '配置信息'},
            { path: '/wx-news', component: Dashboard, name: '新闻发布'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '示例UI组件',
        iconCls: 'fa fa-dashboard',
        children: [
            { path: '/table',component:Table, name: '表格' },
            { path: '/form', component: Form, name: '表单' },
            { path: '/user', component: user, name: '列表' },
        ]
    },

    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
