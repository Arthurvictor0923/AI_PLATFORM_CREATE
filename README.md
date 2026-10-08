# AI_PLATFORM_CREATE

北大荒智慧农业协同创新平台 —— **门户端**原型演示站（前端）。

> 管理后台端的原型站为独立仓库 `AIPROJECTCREATE`，两者互不合并。

## 目录结构

| 路径 | 说明 |
| --- | --- |
| `index.html` | 站点入口，自动跳转到门户端首页 |
| `portal-prototype/` | **当前门户端原型**，19 个页面 + 图片素材 + 素材包原始说明 |
| `portal-prototype/index.html` | 门户端首页 |
| `legacy/` | 上一代（洛书模型服务平台）原型归档，31 个页面 + 其图片素材；**不参与站点发布**，仅作历史留存 |
| `规范文件/` | 早期设计规范与用户画像文档（非页面） |
| `.nojekyll` | 跳过 Jekyll 处理，保证中文文件名正常访问 |

## 发布产物

站点由 GitHub Pages 托管，通过 `.github/workflows/pages.yml` 发布。
每次推送到 `main` 即触发部署，**只把入口页与 `portal-prototype/` 组装成发布产物**：
`legacy/`、`规范文件/` 等不进入站点。

- 站点地址：`https://arthurvictor0923.github.io/AI_PLATFORM_CREATE/`
- 门户端入口：`https://arthurvictor0923.github.io/AI_PLATFORM_CREATE/portal-prototype/`

## 门户端原型内容

门户端共 19 个页面，按模块划分：

- **首页**：门户首页（轮播 + 案例 + 模型/数据入口）
- **模型中心**：模型列表页、模型详情、模型运行台
- **数据中心**：数据集列表页、数据集详情
- **科研开发空间**：交互原型、详情页、IDE 编辑页
- **课题中心**：课题中心
- **需求中心**：需求中心
- **关于平台**：平台介绍、使用帮助、数据使用指南、开发者接入、部署说明、联系支持
- **个人中心**：个人中心
- **地图引擎**：遥感影像检索 · 地图引擎

## 技术说明

- 纯静态自包含 HTML，内联 CSS/JS，无构建步骤、无 CDN 依赖。
- 页面之间通过**同目录相对路径**互相跳转，可直接以 `file://` 打开，也可放在任意子目录下发布。
- 图片素材位于 `portal-prototype/assets/images/`，文件名与页面引用一一对应。

## 本地查看

直接用浏览器打开 `portal-prototype/index.html` 即可，无需启动任何服务器。

## 更新流程

1. 在 `平台调整后原型/前端门户端-补全版/前端门户端/` 修改原型页面；
2. 同步覆盖到本仓库 `portal-prototype/`；
3. 提交并推送到 `main`，GitHub Actions 自动重新部署。
