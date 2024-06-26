## 项目简介

小兔鲜儿项目包含从首页浏览商品，商品详情，微信登录，加入购物车，提交订单，微信支付，订单管理等功能。

当前仓库为小兔鲜儿的**项目模板**。

### 技术栈

- 前端框架：[uni-app](https://uniapp.dcloud.net.cn/) (Vue3 + TS + Setup)
- 状态管理：[pinia](https://pinia.vuejs.org/zh/)
- 组件库：[uni-ui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)

### 项目截图
<table>
  <tr>
    <td>首页</td>
    <td>商品分类</td>
    <td>购物车</td>
  </tr>
  <tr>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/home.jpg" alt=""></td>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/category.jpg" alt=""></td>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/cart.jpg" alt=""></td>
  </tr>
  <tr>
    <td>个人中心</td>
    <td>商品详情</td>
    <td>商品SKU</td>
  </tr>
  <tr>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/my.jpg" alt=""></td>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/goods.jpg" alt=""></td>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/sku.jpg" alt=""></td>
  </tr>
  <tr>
    <td>填写订单</td>
    <td>地址管理</td>
    <td>新建地址</td>
  </tr>
  <tr>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/create.jpg" alt=""></td>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/address.jpg" alt=""></td>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/address-form.jpg" alt=""></td>
  </tr>
  <tr>
    <td>订单详情</td>
    <td>订单列表</td>
    <td>城市选择</td>
  </tr>
  <tr>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/detail.jpg" alt=""></td>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/list.jpg" alt=""></td>
    <td><img src="https://github.com/lvxiaobu5/images/blob/main/rabbit-shop/city.jpg" alt=""></td>
  </tr>
</table>

## 运行程序

1. 安装依赖

```shell
# npm
npm i --registry=https://registry.npmmirror.com

# pnpm
pnpm i --registry=https://registry.npmmirror.com
```

2. 运行程序

```shell
# 微信小程序端
npm run dev:mp-weixin

# H5端
npm run dev:h5

# APP端
需 HbuilderX 工具，运行 - 运行到手机或模拟器
```

3. 微信开发者工具导入 `/dist/dev/mp-weixin` 目录

## 工程结构解析

```
├── .husky                     # Git Hooks
├── .vscode                    # VS Code 插件 + 设置
├── dist                       # 打包文件夹（可删除重新打包）
├── src                        # 源代码
│   ├── components             # 全局组件
│   ├── composables            # 组合式函数
│   ├── pages                  # 主包页面
│       ├── index               # 首页
│       ├── category            # 分类页
│       ├── cart                # 购物车
│       ├── my                  # 我的
│       └── login               # 登录页
│   ├── services               # 所有请求
│   ├── static                 # 存放应用引用的本地静态资源的目录
│       ├── images              # 普通图片
│       └── tabs                # tabBar 图片
│   ├── stores                 # 全局 pinia store
│       ├── modules             # 模块
│       └── index.ts            # store 入口
│   ├── styles                 # 全局样式
│       └── fonts.scss          # 字体图标
│   ├── types                  # 类型声明文件
│       └── component.d.ts      # 全局组件类型声明
│   ├── utils                  # 全局方法
│   ├── App.vue                # 入口页面
│   ├── main.ts                # Vue初始化入口文件
│   ├── pages.json             # 配置页面路由等页面类信息
│   ├── manifest.json          # 配置appid等打包信息
│   └── uni.scss               # uni-app 内置的常用样式变量
├── .editorconfig              # editorconfig 配置
├── .eslintrc.cjs              # eslint 配置
├── .prettierrc.json           # prettier 配置
├── .gitignore                 # git 忽略文件
├── index.html                 # H5 端首页
├── package.json               # package.json 依赖
├── tsconfig.json              # typescript 配置
└── vite.config.ts             # vite 配置
```

## 打包程序
```shell
# 微信小程序端
npm run build:mp-weixin

# H5端
npm run build:h5

# APP端
需 HbuilderX 工具
```
