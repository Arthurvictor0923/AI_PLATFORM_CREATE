# CLAUDE.md — Luoshu AI Model Service Platform

> **Project:** 洛书·模型服务平台 (Luoshu AI Model Service Platform)
> **Stack:** Ant Design 5 Pro + bdh-micro component library + Qiankun micro-frontend
> **Language:** zh-CN (UI), EN (code & docs)
>
> This file is the **entry point** for all project rules. Claude reads it on every session
> in this directory. It links to specialized specification files — keep each spec focused
> and load only what a task needs.

---

## Specification Index

| # | Spec File | Scope | Load When |
|---|-----------|-------|-----------|
| 0 | `.claude/handoff-summary.md` | 综合交接文档（自动维护） | 每次会话开始时恢复上下文 |
| 1 | [`规范文件/DESIGN_SYSTEM.md`](规范文件/DESIGN_SYSTEM.md) | Visual design tokens, component specs, layout templates, page atmosphere & color scheme, interaction patterns, CSS architecture | Generating ANY HTML/CSS/UI prototype or component |
| 2 | `规范文件/DATA_RULES.md` *(TBD)* | Data field definitions, validation rules, type schemas, API payload shapes, enum values | Working with forms, tables, API contracts, or data models |
| 3 | `规范文件/BUSINESS_RULES.md` *(TBD)* | Workflow states, permission models, approval chains, domain logic, status transitions | Implementing business logic, user flows, or permission checks |
| 4 | `规范文件/API_CONVENTIONS.md` *(TBD)* | Endpoint naming, request/response formats, error codes, pagination conventions, auth patterns | Writing or consuming API calls |
| 5 | `规范文件/design_role/` *(HTML snapshots)* | Full-page visual reference for all 7 modules | Verifying visual accuracy of generated output |
| 6 | [`规范文件/USER_PERSONAS.md`](规范文件/USER_PERSONAS.md) | User personas (7 business profiles), system roles (5 RBAC roles), permission matrix, data isolation levels, user journey mapping | Designing RBAC, assigning features to roles, making scope or priority decisions |

---

## Project Metadata

| Attribute | Value |
|-----------|-------|
| **System Name (CN)** | 洛书·模型服务平台 |
| **System Name (EN)** | Luoshu AI Model Service Platform |
| **Base URL** | `http://10.11.14.211:30879/ai-model` |
| **UI Framework** | Ant Design 5 (antd) |
| **Layout Framework** | Ant Design Pro (ProLayout, ProCard) |
| **Component Prefix** | `bdh-micro-main-*` (branded fork of antd) |
| **Micro-Frontend** | Qiankun 2.10.x, `data-qiankun="83--ai-model"` |
| **CSS-in-JS** | Emotion + Ant Design cssinjs (rc-util/cssinjs) |
| **Code Editor** | Monaco Editor 0.50.0 |
| **Rich Text** | WangEditor (Quill-based) |
| **Graph/Flow Editor** | X6 (AntV) |
| **Color Mode** | Light (default), Dark (`data-prefers-color="dark"`) |
| **Page Modules** | 7 — Model Marketplace, Data Management, Resource Overview, Model Deployment, Online Development, Knowledge Base, Documentation Center |

---

## Quick Rules (Always Apply)

These are the highest-frequency rules. For full details, load the relevant spec file.

### Design (see DESIGN_SYSTEM.md for full spec)
- **Primary color:** `#2f54eb` (not antd default `#1677ff`). Hover `#597ef7`, active `#1d39c4`.
- **Accent teal:** `#23ada4` — used in system selector, special highlights only.
- **Base font:** `14px` system stack. **Interactive height:** `32px`. **Border radius:** `6px` default.
- **Text:** `rgba(0,0,0,0.88)` primary, `rgba(0,0,0,0.65)` secondary, `rgba(0,0,0,0.45)` tertiary, `rgba(0,0,0,0.25)` disabled.
- **Card titles** get a `2px × 14px` `#2f54eb` left accent bar with `border-radius: 1px`, `margin-right: 8px`.
- **Status chips:** `56px × 20px`, `border-radius: 4px`, `font-size: 12px`. Green `#52c41a`/`#d9f7be` (success/built), Blue `#2f54eb`/`#d6e4ff` (building), Gray `rgba(0,0,0,0.65)`/`#f0f0f0` (unbuilt), Red `#ff4d4f`/`#fff2f0` (failed), Teal `#23ada4`/`#e6fffb` (published).
- **Image lifecycle:** 保存 → 未构建 → 构建中 → 构建成功/构建失败 → 已发布. Build & publish happen on detail page, NOT on create page.

### Page Modules (8)
1. **模型广场** (Model Marketplace) — model cards in responsive grid, category tabs, search filters
2. **案例中心** (Case Center) — industry vertical menu, filter tags, case card grid with pagination, 16 real enterprise agricultural AI cases
3. **数据管理** (Data Management) — stepper form, file upload, tree selects
4. **资源总览** (Resource Overview) — dashboard cards, no-bordered tables, node status badges
5. **模型部署** (Model Deployment) — data table with status chips, action buttons, floating help
6. **在线开发** (Online Development) — task creation form, code editor (Monaco), SSH toggle
7. **知识库** (Knowledge Base) — document management, rich text editor (WangEditor)
8. **镜像管理** (Image Management) — image list (card grid), create/edit (split-panel), detail (split-panel with build/publish)

### Architecture Rules
- All components use `bdh-micro-main-*` prefix in shell, `ant-*` inside Qiankun sub-apps.
- CSS scoping: `:where(.css-{hash})` for shell, `:where(div[data-qiankun="83--ai_model"])` for sub-app.
- Standard page layout: Transparent ProCard → White inner `ant-card` → Content. Header `60px` fixed + Sidebar `200px` fixed.
- Buttons follow antd 5 convention: `ant-btn ant-btn-color-{color} ant-btn-variant-{variant}`, where variant ∈ {solid, outlined, text, link, dashed, filled}.

### Auto-Handoff（上下文满时自动交接）

**触发条件：** 当 Claude 收到系统警告上下文即将用尽（≥95%），或用户说 "handoff" / "交接" / "总结进度" 时，自动执行以下流程。

**执行步骤：**

1. **更新 `handoff-summary.md`**（综合摘要，每次覆盖）：
   - 原型完成状态表（文件名 / 模块 / 行数 / 状态）
   - 本次会话的关键决策和变更
   - 数据模型 / CSS 命名 / 交互模式的增量变更
   - 待开发列表（按优先级）
   - 细微修复清单
   - 参考文件索引

2. **创建 `handoff-YYYY-MM-DD.md`**（当日快照，同一天覆盖）：
   - 当前所有原型的详细状态
   - 本次会话完成的具体工作
   - 下次起点（明确给出一条可执行的指令）

3. **更新 `prototypes.json`**：
   - 确保所有已完成原型均已注册
   - `_updated` 字段打上当天日期

**模板路径：** 参考 `.claude/handoff-summary.md` 和 `.claude/handoff-2026-07-24.md` 的格式。

**注意：** handoff 文档应精简、结构化，让下一个 Claude 会话能在 30 秒内恢复上下文。不要长篇叙事——用表格、列表、代码片段。

### Confirmation Dialogs (Popconfirm)
- Simple confirmations (deploy/sync/offline/redeploy/delete) MUST use Popconfirm bubble attached to trigger button — no dark overlay, no centered Modal.
- Only complex dialogs with selection lists (e.g., "新增推理服务") may use `.dialog-overlay` centered with dark mask.
- Never use native `confirm()` in prototypes. Full spec: `规范文件/DESIGN_SYSTEM.md` §9.27.

### Deployment Patterns
- Container deploy steps: **Pod 调度 → 容器启动** (NO image pulling — image is pre-built).
- Table button: 「记录」(not "日志"/"详情"/"结果"/"进度"). Click = one request fetching current state. No polling, no auto-refresh.
- Drawer footer: Refresh button visible only during deploying; Download log + Redeploy only after success/fail.
- Deploy trigger does NOT auto-open drawer; user clicks「记录」to view.

---

## How to Use This File

0. **每次会话开始** — Claude 应自动读取 `.claude/handoff-summary.md` 恢复上次上下文，无需用户手动提示。
1. **For UI/prototype tasks** — Claude should read `DESIGN_SYSTEM.md` §1–§9 and §12 and §15–§16 before writing any code.
2. **For data/form tasks** — Claude should read `DATA_RULES.md` (when created) alongside `DESIGN_SYSTEM.md` §9.2–§9.5.
3. **For business logic tasks** — Claude should read `BUSINESS_RULES.md` (when created).
4. **For simple fixes** — The Quick Rules section above is sufficient; no need to load full specs.
5. **When adding new rules** — Create or update the appropriate spec file, then update this index. Do NOT inline everything into this file.

---

## Prototype Registry

The project maintains interactive HTML prototypes for each module.

**Registry file:** [`.claude/prototypes.json`](.claude/prototypes.json) — single source of truth for all prototype metadata.

**Current prototypes (22):**

| Prototype | File | Module |
|-----------|------|--------|
| 门户首页 | `portal.html` | 首页 |
| 登录 | `login.html` | 首页 |
| 工作台 | `workbench.html` | 首页 |
| 模型广场 | `model-marketplace.html` | 模型广场 |
| 案例中心 | `case-center.html` | 案例中心 |
| 案例详情 | `case-detail.html` | 案例中心 |
| 数据管理 | `dataset-management.html` | 数据管理 |
| 资源总览 | `resource-overview.html` | 首页 |
| 模型部署 | `model-deployment.html` | 模型管理 |
| 镜像管理 | `image-custom-list.html` | 开发中心 |
| 镜像详情 | `image-custom-detail.html` | 开发中心 |
| 镜像创建/编辑 | `image-custom-create.html` | 开发中心 |
| 在线开发 | `online-dev.html` | 开发中心 |
| 在线 IDE | `notebook-ide.html` | 开发中心 |
| 需求大厅 | `demand-hall.html` | 需求市场 |
| 需求详情 | `demand-detail.html` | 需求市场 |
| 我的需求 | `demand-my.html` | 首页 |
| 需求工作台 | `demand-workspace.html` | 首页 |
| 应用中心 | `app-center.html` | 应用中心 |
| 应用详情 | `app-detail.html` | 应用中心 |
| 知识库 | `knowledge-base.html` | 智能应用 |
| 文档中心 | `doc-center.html` | 文档中心 |

> **推理服务已移除独立页面**，发布功能整合至 `workbench.html`「我的模型→发布」抽屉中（7段：模型元数据→版本→镜像→服务类型→使用说明→推理配置→资源启动配置）。

### When creating a new prototype:
1. **Name** the file in English kebab-case (e.g., `resource-overview.html`)
2. **Sidebar** — only show the current top-nav module's menu items. Navigation between modules is via the top nav bar (模型广场 / 数据管理 / 模型管理 / 开发中心 / 智能应用), which switches the sidebar content
3. **Register** — append an entry to `.claude/prototypes.json` under `"prototypes"` and update `_updated` date
4. **Follow** DESIGN_SYSTEM.md for all visual and interaction patterns

### Sidebar convention (per top-nav module):
```
模型管理              智能应用
  ├─ 资源总览           ├─ Agent应用
  └─ 模型部署           └─ 知识库

工作台（首页）         需求市场
  ├─ 快速导航            ├─ 需求大厅
  │   ├─ 我的模型       └─ 需求详情
  │   ├─ 资源总览
  │   ├─ 我的数据集     应用中心（已隐藏）
  │   ├─ 我的需求         ├─ 应用中心
  │   ├─ 我的任务         └─ 应用详情
  │   └─ 我的应用
  └─ 开发中心（原独立顶导模块，已整合进工作台）
      ├─ 镜像管理
      ├─ 在线开发
      └─ 工作流
```
> 推理服务已从开发中心侧边栏移除，发布功能整合至工作台「我的模型」→「发布」按钮。

---

## Adding New Specifications

When you create a new spec file (e.g., `DATA_RULES.md`):

1. Write it in **English** for highest AI accuracy.
2. Follow the same structure as `DESIGN_SYSTEM.md`: section-numbered, table-driven, with explicit "do this / don't do that" rules.
3. Add a row to the **Specification Index** table above.
4. Add relevant "quick rules" to the Quick Rules section if they apply frequently.
5. Keep each spec file focused on ONE domain — don't mix design rules with data rules.
