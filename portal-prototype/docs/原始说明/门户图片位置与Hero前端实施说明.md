# 门户图片位置与 Hero 前端实施说明

版本：V1.0 · 2026-09-14

适用页面：北大荒智慧农业协同创新平台，最新“双案例静态卡片＋单一指南说明”门户首页。本文补充《农业门户原型说明与设计规范》，重点规定6张独立图片的使用位置与实现方式。

**核心要求：Hero 是“农田背景图＋左侧浅色渐变遮罩＋HTML文案按钮＋右下田间观测卡片”组成的一个完整区块。不是把两张照片左右平铺，也不是把门户截图作为整页背景。**

图片均为本次重新生成的独立素材，已核实尺寸均为1536×1024px、3:2、PNG。它们与门户图保持场景和风格对应，不是对门户图的逐像素切片。下面的尺寸和定位是建议开发值，需在实际视口中核对裁切；不是从设计源文件中导出的精确坐标。

## 1. 六张图片与页面位置

| 编号 | 素材名称／建议项目文件名 | 使用位置 | 桌面展示形式 | 是否重复使用 |
| --- | --- | --- | --- | --- |
| 01 | 农田航拍／hero-farmland.png | 顶部导航下方的Hero首屏 | 右侧大幅照片，向左融入浅色文案区 | 本页仅用于Hero |
| 02 | 田间观测／hero-field-observation.png | Hero右下角 | 独立白底小图卡，叠在航拍图上 | 本页仅用于Hero小图卡 |
| 03 | 数据集农田底图／dataset-farmland.png | “特色数据集”区左侧 | 宽幅遥感图，前端叠加样点 | 本页仅用于数据集区 |
| 04 | 倒伏原始影像／rice-lodging-original.png | “特色模型”区右侧的左图 | 方形裁切，下方“原始影像” | 与05成对 |
| 05 | 倒伏识别结果／rice-lodging-result.png | “特色模型”区右侧的右图；“应用案例”区左卡封面 | 模型区方形；案例区3:1宽图 | 两处使用同一文件 |
| 06 | 长势分布／rice-growth-result.png | “应用案例”区右卡封面 | 3:1宽幅裁切 | 本页仅用于长势案例 |

页面顺序：单行导航 → Hero（01＋02）→ 页内定位条 → 特色数据集（03）→ 特色模型（04＋05）→ 应用案例（05＋06）→ 课题指南 → 通知公告 → 参与合作 → 页脚。

指南、公告及参与合作区不再加入这6张照片。其图标使用前端统一图标库。

## 2. 素材文件对应表

以下项目文件名是建议命名。前端下载后按此命名放入项目资源目录；HTML和CSS示例使用这些项目路径。下面的原图链接用于获取交付文件，不应直接作为生产环境资源地址。

| 编号 | 原图下载 | 下载后建议名称 |
| --- | --- | --- |
| 01 | [农田航拍原图](sandbox:/workspace/scratch/c6b312b38f3e/generated_images/exec-0b2dc3ef-7f23-4567-bf63-6cac2cacc3ae.png) | hero-farmland.png |
| 02 | [田间观测原图](sandbox:/workspace/scratch/c6b312b38f3e/generated_images/exec-564363e0-d0dd-48d3-8155-32b0254617de.png) | hero-field-observation.png |
| 03 | [数据集农田原图](sandbox:/workspace/scratch/c6b312b38f3e/generated_images/exec-72401ae8-a3ed-4197-a56d-4ecd35755d9c.png) | dataset-farmland.png |
| 04 | [倒伏原始影像](sandbox:/workspace/scratch/c6b312b38f3e/generated_images/exec-4d60dd19-bd66-4fa8-9370-05e23eb97f4c.png) | rice-lodging-original.png |
| 05 | [倒伏识别结果](sandbox:/workspace/scratch/c6b312b38f3e/generated_images/exec-001a59df-8ce9-4ff4-a60c-b54f938e535b.png) | rice-lodging-result.png |
| 06 | [长势分布图](sandbox:/workspace/scratch/c6b312b38f3e/generated_images/exec-21942454-cc3b-4b8b-9747-cfc92fdf94f0.png) | rice-growth-result.png |

## 3. Hero区：整体设计与位置

### 3.1 它在页面中的范围

Hero从白色单行导航的下边缘开始，到“特色数据集／特色模型／课题指南”页内定位条上方结束。导航、Hero、页内定位条是三个独立组件。Hero中不再放第二套导航。

在1440px桌面视口下，建议Hero高480px，内部内容宽1280px、居中，左右各80px。高度采用min-height，文案换行或用户放大文字时允许撑高；不用100vh，避免首屏过高。

### 3.2 四层组合

| 层级 | 元素 | 具体处理 |
| --- | --- | --- |
| 基底 | 浅米白背景 | #FAFBF8，铺满Hero，即使图片暂未加载也保持文案可读 |
| z-index:0 | 01航拍图 | 从Hero约32%横向位置开始铺到右边，填满高度；右侧约68%为照片承载范围 |
| z-index:1 | 横向渐变遮罩 | 铺满Hero；左侧不透明米白，中部逐步变透明，右侧清晰显图；pointer-events:none |
| z-index:2 | 文案与操作 | 放在居中内容容器的左侧，与下方区块左边界对齐 |
| z-index:3 | 02田间观测小图卡 | 放在居中内容容器右侧靠下，叠在航拍图之上，位于浅色渐变之外 |

同一区块内使用isolation:isolate，局部层级不干扰页头和弹层。固定页头仍按公共规范位于更高层级。

### 3.3 01航拍背景怎样裁切

原图是3:2，不能直接拉伸成整个1440×480条幅。采用img元素绝对定位，或等价背景图实现，保持原始比例，以cover裁切。

推荐初始值：left:32%、width:68%、height:100%、object-fit:cover、object-position:60% 56%。在1440px宽时照片容器约979×480px；画面主要裁去上下部分。河流、稻田和田块道路应成为主要视觉，天空和远山只保留少量。

裁切验收顺序：首先保证右半区河流可辨认，其次保留前景田块纹理，再检查小图卡是否遮住河流主体。如果需要微调，先在object-position的纵向50%—65%范围内调整。不要为露出全部天空而缩小图片产生空边。

图上无需增加深绿色滤镜。通过浅色遮罩保证左侧文字可读，不把整张图调暗或整体降低透明度。

### 3.4 左侧渐变与文案

遮罩建议：0%—35%维持#FAFBF8；到44%约96%不透明；到54%约48%；到65%完全透明。渐变位置按整个Hero宽度计算，不能只按照片宽度计算。

文案最大宽度约580px，桌面上下padding各64px。标签、标题、说明、按钮按正常文档流排列。

| 文案元素 | 内容与样式 |
| --- | --- |
| 小标签 | “全国重点实验室特色资源”；14px，低饱和金色；正式资质文案沿用项目审核结果 |
| 标题第一行 | 面向农业研究与生产的 |
| 标题第二行 | 数据、模型与开放课题 |
| 标题样式 | 深墨绿#123B35，48px/62px，沿用首页展示字体，粗体；标签下16px |
| 介绍 | 依托北大荒生产场景，汇集特色数据与农业模型，发布实验室开放课题，支持科研协作与企业应用。 |
| 介绍样式 | 18px/30px，#5F6F6B，宽度不超过520px，标题下20px |
| 主按钮 | 探索数据与模型；深绿底白字，滚动至特色数据集区 |
| 次按钮 | 查看课题指南；白底或透明浅底，细描边，进入当前指南 |
| 按钮排列 | 介绍下24px，按钮间16px，高44px；文字放大后允许换行 |

标题使用两个span表达推荐两行，窄屏允许span内部自然换行；不要给标题设white-space:nowrap。照片中的天空和亮色稻田不直接承担深色正文背景。

### 3.5 02田间观测小图卡

小图卡表达“平台资源来自实际田间观测”。它与航拍图是远景和近景的关系，不是另一张首屏横幅。

桌面建议宽240px，距内容容器右边0px、距Hero底边32px。1440px视口下，卡片右边约位于1360px，离屏幕右侧80px，与下方内容右边界一致。

卡片白底，padding 8px，圆角8px，轻阴影。内部02图片按原3:2比例展示，object-position:center，不用1:1裁切，确保两名观测人员及其手中的稻穗保留。底部增加HTML文字“田间观测与生产场景”，13px/20px，文字区域顶部8px。总高约194px，随内容自然变化。

该卡片没有链接，不显示手形鼠标，不设置点击弹窗。图片与文字为一个figure/figcaption。不要把标题烘焙到照片中，也不要加播放图标或视频按钮。

### 3.6 Hero响应式

| 视口 | 实现方式 |
| --- | --- |
| ≥1280px | 使用480px最小高度与左右叠层布局；图片右侧68%，文案左侧，小图卡右下 |
| 768—1279px | 为保证文字与小图不拥挤，改为“上方文案＋下方360px视觉区”；视觉区展示完整宽幅航拍，小图卡宽220px，右下24px |
| <768px | 上方浅底文案，下方280px视觉区；文案左右16px、标题32px/44px；小图卡宽176px，右下16px；两名人员仍保留；按钮可换行 |

窄屏视觉区可使用从顶部浅米白到透明的短渐变，取消桌面的横向大遮罩。田间卡始终在视觉区内，不跨到文案或下一模块。移动端不是自动轮播，也不将两图变成可滑动图片组。

## 4. Hero参考结构与样式

以下是供前端套入项目组件的参考片段，未绑定框架，也未代替公司公共按钮/字体组件。图片路径为建议项目路径，下载后需实际放入对应目录。1280px容器、颜色、按钮等优先复用已有主题变量。

```html
<section class="portal-hero" aria-labelledby="portal-hero-title">
  <div class="hero-content">
    <div class="hero-copy">
      <p class="hero-eyebrow">全国重点实验室特色资源</p>
      <h1 id="portal-hero-title">
        <span>面向农业研究与生产的</span>
        <span>数据、模型与开放课题</span>
      </h1>
      <p class="hero-intro">依托北大荒生产场景，汇集特色数据与农业模型，发布实验室开放课题，支持科研协作与企业应用。</p>
      <div class="hero-actions">
        <a class="button button-primary" href="#featured-data">探索数据与模型</a>
        <a class="button button-secondary" href="/topics">查看课题指南</a>
      </div>
    </div>
  </div>
  <div class="hero-visual">
    <img class="hero-landscape" src="/assets/portal/hero-farmland.png"
         width="1536" height="1024" alt="" fetchpriority="high" />
    <div class="hero-fade" aria-hidden="true"></div>
    <figure class="hero-observation">
      <img src="/assets/portal/hero-field-observation.png"
           width="1536" height="1024"
           alt="两名农业观测人员在稻田中检查稻穗，AI场景示意" />
      <figcaption>田间观测与生产场景</figcaption>
    </figure>
  </div>
</section>
```

```css
.portal-hero {
  position: relative;
  isolation: isolate;
  min-height: 480px;
  background: #fafbf8;
}
.hero-content {
  position: relative;
  z-index: 2;
  width: min(1280px, calc(100% - 80px));
  margin-inline: auto;
  padding-block: 64px;
  pointer-events: none;
}
.hero-copy { max-width: 580px; pointer-events: auto; }
.hero-eyebrow { margin: 0 0 16px; color: #927021; font-size: 14px; }
.hero-copy h1 {
  margin: 0;
  color: #123b35;
  font-family: var(--font-display, "Noto Serif SC", "Songti SC", serif);
  font-size: 48px;
  line-height: 62px;
  font-weight: 700;
}
.hero-copy h1 span { display: block; }
.hero-intro {
  max-width: 520px;
  margin: 20px 0 0;
  color: #5f6f6b;
  font-size: 18px;
  line-height: 30px;
}
.hero-actions { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 24px; }
/* button类复用项目统一44px按钮规格。 */
.hero-visual { position: absolute; inset: 0; }
.hero-landscape {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 32%;
  width: 68%;
  height: 100%;
  object-fit: cover;
  object-position: 60% 56%;
}
.hero-fade {
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(90deg,
    #fafbf8 0%, #fafbf8 35%,
    rgba(250,251,248,.96) 44%,
    rgba(250,251,248,.48) 54%,
    rgba(250,251,248,0) 65%);
}
.hero-observation {
  position: absolute;
  z-index: 3;
  width: 240px;
  right: max(40px, calc((100% - 1280px) / 2));
  bottom: 32px;
  margin: 0;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(6,76,67,.12);
}
.hero-observation img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
}
.hero-observation figcaption {
  margin-top: 8px;
  color: #5f6f6b;
  font-size: 13px;
  line-height: 20px;
}
@media (max-width: 1279px) {
  .portal-hero { min-height: 0; }
  .hero-content { width: calc(100% - 48px); padding-block: 40px 24px; }
  .hero-copy { max-width: 720px; }
  .hero-copy h1 { font-size: 40px; line-height: 54px; }
  .hero-visual { position: relative; height: 360px; }
  .hero-landscape { left: 0; width: 100%; object-position: 60% 56%; }
  .hero-fade {
    background: linear-gradient(180deg, #fafbf8 0%, rgba(250,251,248,0) 30%);
  }
  .hero-observation { width: 220px; right: 24px; bottom: 24px; }
}
@media (max-width: 767px) {
  .hero-content { width: calc(100% - 32px); padding-block: 32px 20px; }
  .hero-copy h1 { font-size: 32px; line-height: 44px; }
  .hero-intro { font-size: 16px; line-height: 26px; }
  .hero-visual { height: 280px; }
  .hero-observation { width: 176px; right: 16px; bottom: 16px; }
}
```

Hero主图作为装饰背景用空alt，信息由HTML介绍表达。田间图具有独立内容，用描述性alt。不要对Hero主图使用loading="lazy"；下方图片可以懒加载。上述CSS中的层级依赖hero-visual本身不创建额外隔离层，避免后续为它随意添加transform或z-index使遮罩盖住文案。

## 5. 下方各模块如何使用图片

### 5.1 03数据集农田底图

位置：“从连续观测中，找到研究依据”标题下方的左列。右列是“寒地水稻全生育期观测数据集”的说明和预览入口。图不是整个区块背景，不延伸到右侧文字底下。

桌面左右近似等宽，间距40px。左图容器建议5:2（例如620×248px），object-fit:cover，object-position:50% 55%，圆角4px。保留河流弯道与两侧农田，让数据来源场景可读。平板/手机图文上下排列，图片可改为3:2以多保留田块。

原图没有样点文字，这是为方便前端维护。若还原门户中的“样点A/B/C”，使用DOM/SVG标记叠加到照片上，而不是修改照片。A、B用浅色，C可用金色；文字必须有足够对比度和轻微背景托底。所有点位是视觉示意，不能当作真实经纬度。纯展示标记不使用按钮样式。

建议基于原1536×1024图设置归一化示意锚点：A=(0.20,0.47)、B=(0.43,0.67)、C=(0.76,0.28)。这些是建议初始点位，必须在成图中核对是否落在田块上。

cover裁切后不要直接把这些坐标当作容器百分比。转换方式：s=max(容器宽/1536,容器高/1024)；以object-position:50% 55%为例，偏移x=(容器宽−1536s)×0.5，偏移y=(容器高−1024s)×0.55；屏幕点=(归一化x×1536s＋偏移x，归一化y×1024s＋偏移y)。容器变化时重新计算，或使用统一缩放的图片与覆盖层。若没有点位交互需求，使用静态示意标签即可。

### 5.2 04＋05模型原图与结果图

位置：“把农业数据，变成可用的判断”区块右列。左边放04，右边放05，中间仅有表示处理方向的箭头。

右列内部结构：原图figure／24px箭头位／结果figure；两张图片等宽、等高。桌面建议各1:1方形，object-fit:cover，object-position:50% 50%；下方分别用HTML标注“原始影像”“识别结果”，14px次级文字、上间距8px。两张图必须使用完全相同裁切和焦点，不能一张放大一张缩小。

04与05采用同一底图生成。05已包含黄色覆盖区域，前端不要再画一套黄色遮罩，也不要给04套黄色滤镜。这里用于静态效果对照，不做轮播，不增加前后切换按钮。若未来需要精确叠图滑块，须先验证两图逐像素配准；本次生成图只承诺视觉配对，不作为精确算法输出。

窄屏时先让整个模型右列移动到文字下方，内部仍保留两图并排，保证可以比较。若页面需要看清全部田块，可在更宽的专用详情区用原3:2比例展示两图；首页按当前方图布局。

### 5.3 05灾后核查案例封面

位置：“让模型走进真实的生产工作”下方，左侧“水稻倒伏灾后核查”卡片顶部。复用05，不重新生成或下载另一张相同图。

容器比例3:1，object-fit:cover，object-position:50% 50%，圆角4px。以桌面卡片宽628px、内边距16px估算，图片约596×199px。重点保留黄色倒伏斑块，使用户在卡片级尺寸也能识别其用途。

图片下方依次是场景标签“灾后核查”、示例案例标识、标题、应用说明、结果条、关联模型、查看案例入口。这些都由前端排版，不写进图片。图片不承载可交互图例和面积数字。

### 5.4 06长势监测案例封面

位置：案例区右侧“水稻生长季长势监测”卡片顶部。尺寸、圆角、裁切方式与左卡一致：3:1、cover、50% 50%。

保留多块绿色田块及右侧道路结构，表达地块间长势差异。绿色覆盖和细线已在图片内，不需要前端重复绘制。不要再加会与图片冲突的红黄蓝图例或虚拟指数。

移动端两张案例上下排；图片可统一改为16:9，以提升可读面积。不能只修改其中一张比例。案例展示保持静态，无轮播圆点和滑动箭头。

## 6. 裁切与叠加统一表

| 素材/位置 | 容器比例 | object-fit | 初始object-position | 前端另外添加 |
| --- | --- | --- | --- | --- |
| 01 Hero航拍 | 随右侧视觉区域 | cover | 60% 56% | 浅色渐变，独立文字层 |
| 02 Hero观测卡 | 3:2 | cover | 50% 50% | 白底、8px内边距、图注 |
| 03 数据集 | 桌面5:2；窄屏3:2 | cover | 50% 55% | 样点示意标记与文字 |
| 04 模型原图 | 1:1 | cover | 50% 50% | 图片下方“原始影像” |
| 05 模型结果 | 1:1 | cover | 50% 50% | 图片下方“识别结果” |
| 05 案例左卡 | 桌面3:1；手机16:9 | cover | 50% 50% | 卡片正文、标签、入口 |
| 06 案例右卡 | 桌面3:1；手机16:9 | cover | 50% 50% | 卡片正文、标签、入口 |

统一禁止：object-fit:fill拉伸、图片内烘焙网页按钮、把白色边框烧进素材、同组图片不同高度、额外高饱和滤镜、把AI示意图标注成真实监测实绩。

## 7. 资源接入与交付要求

1. 建议资源目录为/public/assets/portal/，用第2节的语义名称管理。不要把本次随机生成文件名或会话下载地址写入页面业务逻辑。
2. 项目可以从原PNG导出WebP/AVIF等网页版本，并保留PNG原稿。衍生图需要检查稻田细线和黄色分割边缘，避免压缩导致糊边。本文不假定已提供压缩版。
3. 01优先加载，02正常首屏加载；03—06使用loading="lazy"、decoding="async"。img写明原始width/height，显示尺寸由CSS aspect-ratio控制，减少布局跳动。
4. 05两处引用同一资源地址，复用缓存。不同展示比例由容器控制，不下载两份相同原图。
5. 01和02的首屏图层使用独立组件；下方采用DatasetImage、ModelComparison、CaseCover等可复用组件。比例与焦点写在配置中，不每页临时修改。
6. 照片本身不包含网站标题、按钮、样点名称和统计值。图文分离，便于响应式、无障碍、文案维护和后续换图。
7. 这些图片是AI生成的场景及结果示意。对外展示模型效果时，在案例标签或附近说明中保留“示例案例／效果示意”，不把生成区域当作真实模型测算数据。

## 8. 前端验收清单

- Hero仅位于单行导航与页内定位条之间；桌面首屏没有100vh导致的大面积空白。
- 左侧文案背景足够浅，右侧河流与农田清楚可见，遮罩没有形成生硬白色竖边。
- 田间观测卡位于右下，未遮住标题、按钮或主要河流，未溢出Hero。
- 1440px及以上视口保持左文右景；窄屏按规定切换为上下结构。
- 标题、按钮和图片说明是HTML文字，未嵌入图片。
- 数据集样点叠加后位于田块上；改变裁切比例后点位未漂移到河流或页面外。
- 模型原图与结果图同尺寸、同裁切、同焦点；箭头表达处理方向，不作为轮播按钮。
- 结果图在模型区和案例区复用同一文件；两个案例封面比例一致。
- 页面无横向溢出，图片未变形，图片加载前容器空间已预留。
- 在1440、1280、1024、768、390px宽度及文字放大情况下人工检查；全部可点击操作仍可见。

最终还原以最新版门户的结构为准，本文规定素材如何进入组件。可因新生成图片的取景差异微调object-position，不因此改变导航、模块顺序、案例数量或指南交互。
