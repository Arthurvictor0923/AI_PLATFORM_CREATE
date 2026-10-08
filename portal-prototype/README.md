# 北大荒智慧农业协同创新平台 · 门户原型

本包包含已修订的19个 HTML 页面、9张原始素材图和参考说明，可作为完整静态网站上传。

## 如何使用

1. 解压压缩包；解压后应直接看到 `index.html`、其他 HTML 和 `assets` 文件夹。
2. 本地查看：双击 `index.html`。保持文件之间的相对位置，图片即可显示。
3. 在线查看：将解压后的全部内容提交到 Git 仓库，将含 `index.html` 的这一层设置为静态网站发布目录。
4. 通过静态网站网址访问；仓库文件浏览页不是原型网站网址。

不要只上传 HTML，也不要仅把 ZIP 文件上传到仓库。

## 文件位置

| 路径 | 用途 |
|---|---|
| `index.html` | 门户首页 |
| 根目录其他 HTML | 各业务原型页面 |
| `assets/images/` | 9张图片，已与页面引用对应 |
| `docs/原始说明/` | 素材包原有的2份设计说明，保留供参考 |
| `.nojekyll` | 保持原生静态文件发布 |

全部站内图片和页面链接使用相对路径，支持发布到域名根目录或仓库子目录。
原首页已改为 `index.html`，各页返回首页的链接已同步更新。

## 图片对应表

| 东北稻田与蜿蜒河流.png | `assets/images/hero-farmland.png` |
| 稻田协作观察.png | `assets/images/hero-field-observation.png` |
| 东北稻田河流俯瞰图.png | `assets/images/dataset-farmland.png` |
| 航拍倒伏水稻田.png | `assets/images/rice-lodging-original.png` |
| 水稻倒伏遥感分割结果.png | `assets/images/rice-lodging-result.png` |
| 东北稻田生长监测图.png | `assets/images/rice-growth-monitoring.png` |
| 示范基地-基地全景.png | `assets/images/base-panorama.png` |
| 示范基地-田间试验.png | `assets/images/base-field-trial.png` |
| 示范基地-观测设施.png | `assets/images/base-observation-facility.png` |

9张图片全部匹配成功，没有缺图。图片保持原始内容与清晰度，仅统一存放位置与文件名。
模型详情中原有的内嵌图片继续保留，不需要另找素材。

## 原型范围

保留上一版的占位修订及交互，不重新设计业务页面。咨询、申请、运行等均为演示。
跨页面记录联动需在同一站点环境下预览；直接双击本地 HTML 时，浏览器可能隔离不同文件的本地存储。
地图查询页沿用原型中的在线地图服务，实际地图加载取决于服务可用性与部署域名配置。本包的9张素材图不依赖第三方图床。

素材包中的原始设计说明可能包含历史路径与旧版本建议；本次发布目录和图片引用以本 README 与 HTML 为准。
