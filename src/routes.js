import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'

import Dashboard from './views/Dashboard.vue'
import Users from './views/users/users.vue'
import Categories from './views/categories/categories.vue'
import Products from './views/products/products.vue'
import Orders from './views/orders/orders.vue'
import Website from './views/website/website.vue'
import Wechat from './views/wechat/wechat.vue'

import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import User from './views/nav1/user.vue'



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
            { path: '/users', component: Users, name: '用户管理'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '分类管理',
        iconCls: 'fa fa-folder-open',
        children: [
            { path: '/categories', component: Categories, name: '分类管理'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '商品管理',
        iconCls: 'fa fa-cubes',
        children: [
            { path: '/products', component: Products, name: '商品管理'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '订单管理',
        iconCls: 'fa fa-list',
        children: [
            { path: '/orders', component: Orders, name: '订单管理'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '企业网站',
        iconCls: 'fa fa-globe',
        children: [
            { path: '/web-config', component: Website, name: '配置信息'},
            { path: '/web-news', component: Website, name: '新闻发布'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '公众号运营',
        iconCls: 'fa fa-wechat',
        children: [
            { path: '/wx-config', component: Wechat, name: '配置信息'},
            { path: '/wx-news', component: Wechat, name: '新闻发布'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '示例UI组件',
        iconCls: '',
        children: [
            { path: '/table',component:Table, name: '表格' },
            { path: '/form', component: Form, name: '表单' },
            { path: '/user', component: User, name: '列表' },
        ]
    },

    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
