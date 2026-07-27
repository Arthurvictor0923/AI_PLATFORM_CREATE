# Luoshu AI Model Service Platform — Design System Specification

> **Role:** This document is the authoritative design-system reference for the "洛书·模型服务平台" (Luoshu AI Model Service Platform). All prototype generation, UI implementation, and component creation MUST conform to the rules defined herein. When generating HTML/CSS for this platform, treat every section below as a hard constraint.

---

## 1. BRAND IDENTITY

| Token | Value |
|-------|-------|
| **System name (CN)** | 洛书·模型服务平台 |
| **System name (EN)** | Luoshu AI Model Service Platform |
| **Logo gradient** | `#7566FF` → `#2F54EB` (purple-to-blue, 6-stop linear gradient) |
| **National brand logo** | Included, min-height 22px, image height forced to 32px |

---

## 2. COLOR SYSTEM

### 2.1 Primary Brand Palette

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Primary** | `#2f54eb` | `rgb(47,84,235)` | Selected states, active menu items, primary buttons, tab underlines, left-border accent bars |
| **Primary Hover** | `#597ef7` | `rgb(89,126,247)` | Button hover, link hover, border hover |
| **Primary Active** | `#1d39c4` | `rgb(29,57,196)` | Button pressed, link active |
| **Primary Bg Light** | `#f0f5ff` | — | Selected/hover background for menu items, light primary background |
| **Primary Bg** | `#d6e4ff` | — | Selected dropdown item, active chip background |
| **Primary Bg (translucent)** | `rgba(47,84,235,0.2)` | — | Sidebar selected menu item background |
| **Focus Ring** | `#adc6ff` | — | 4px solid focus-visible outline |
| **Focus Ring (inner)** | `rgba(47,84,235,0.1)` | — | 2px inner box-shadow for form focus |
| **Focus Ring (3px)** | `rgba(47,84,235,0.3)` | — | 3px solid outline with 1px offset |

### 2.2 Accent Color — Teal

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Accent Teal** | `#23ada4` | `rgb(35,173,164)` | System-selector active state, list-item hover text, search input hover border |
| **Accent Teal Bg** | `rgba(35,173,164,0.2)` | — | System-selector tag background, sidebar list-item hover background |
| **Teal Scale (light→dark)** | `#e6fffb`, `#b5f5ec`, `#87e8de`, `#36cfc9`, `#23ada4`, `#08979c` | — | Full teal spectrum |

### 2.3 Semantic / Status Colors

| Status | Hex Text | Hex Background | When to use |
|--------|----------|----------------|-------------|
| **Success / Built** | `rgb(82,196,26)` / `#52c41a` | `rgb(217,247,190)` / `#d9f7be` | Build success, published chips, done state |
| **Pending / Building** | `rgb(47,84,235)` / `#2f54eb` | `rgb(214,228,255)` / `#d6e4ff` | Build in progress, pending chips |
| **Unbuilt / Default** | `rgba(0,0,0,0.65)` | `#f0f0f0` | Unbuilt state (just saved, not yet built) |
| **Published** | `#23ada4` | `#e6fffb` | Published to marketplace (accent teal, final state) |
| **Error / Build Failed** | `#ff4d4f` | `#fff2f0` | Build failed, required field markers, error states |
| **Danger Hover** | `#ff7875` | — | Danger button/link hover |
| **Danger Active** | `#d9363e` | — | Danger button pressed |
| **Danger Border Hover** | `#ffa39e` | — | Outlined danger button hover border |
| **Online Dot** | — | `ant-badge-status-success` (green) | Status dot for online nodes |
| **Offline Dot** | — | `ant-badge-status-default` (gray) | Status dot for offline nodes |

### 2.4 Neutral Colors

| Role | Value | Usage |
|------|-------|-------|
| **Text Primary** | `rgba(0,0,0,0.88)` | Body text, headings, active menu items |
| **Text Secondary** | `rgba(0,0,0,0.65)` | Secondary info, card metadata |
| **Text Tertiary** | `rgba(0,0,0,0.45)` | Captions, sidebar footer, less important text |
| **Text Disabled** | `rgba(0,0,0,0.25)` | Disabled text, placeholder |
| **White Text** | `#ffffff` / `#fff` | Text on primary/dark backgrounds |
| **Border Default** | `#d9d9d9` | Default border, disabled border |
| **Border Light** | `#f0f0f0` / `rgba(5,5,5,0.06)` | Light separators, tab borders, table borders |
| **Background White** | `#ffffff` | Card backgrounds, content areas |
| **Background Page** | `#F7F9FD` | Layout / page background |
| **Background Hover (subtle)** | `rgba(0,0,0,0.02)` to `rgba(0,0,0,0.04)` | Hover, disabled bg, row hover |
| **Background Hover (medium)** | `rgba(0,0,0,0.06)` | Button text hover, action item hover, menu horizontal hover border |
| **Background Active/Pressed** | `rgba(0,0,0,0.15)` | Button text active, sider menu active |
| **Tooltip Background** | `rgba(0,0,0,0.85)` | Tooltip bg, popover arrow bg |
| **Dark Sidebar** | `#001529` | Dark theme sidebar background |
| **Dark Mode Bg** | `rgb(28,30,33)` / `#1c1e21` | Dark mode background |

### 2.5 Custom Button Override Colors (in-card context)

| Context | Border / Text Color | Background |
|---------|---------------------|------------|
| **Primary outline (card)** | `rgb(66,153,255)` | `rgba(66,153,255,0.05)` |
| **Danger/Warning (card)** | `rgb(250,159,14)` | `rgba(255,136,0,0.05)` |
| **Disabled (card)** | `rgb(231,231,231)` | `rgba(217,217,217,0.03)` |

---

## 3. TYPOGRAPHY

### 3.1 Font Family

**Primary stack (system native):**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
  Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol", "Noto Color Emoji";
```

**Alternative stack (body):**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
```

**Required-mark font:** `SimSun, sans-serif` (for the `*` required indicator, Chinese serif asterisk).
**Font smoothing:** `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`

### 3.2 Type Scale

| Level | Size | Weight | Line-Height | Usage |
|-------|------|--------|-------------|-------|
| **Display** | `32px` | 600 | — | Large hero/display headings |
| **H1** | `24px` | 600 | — | Page-level headings |
| **H2** | `22px` | 600 | — | Logo text, card section headings |
| **H3** | `20px` | 600 | — | System name, sub-section headings |
| **H4** | `18px` | 600 | — | Medium headings |
| **H5** | `16px` | 600 | — | Small headings |
| **Body** | **`14px`** | 400 | `1.5714285714285714` (~22px) | **Default — buttons, inputs, table cells, menu items, forms, tabs** |
| **Small** | `12px` | 400 | — | Tags, captions, chip text, secondary metadata |
| **Tiny** | `10px` | 400 | — | Badge counts |

**Rule:** The base font-size for ALL interactive components is **14px**. Never use a different size for buttons, inputs, selects, or menu items unless explicitly specified.

### 3.3 Font Weights

| Weight | Usage |
|--------|-------|
| `400` (normal) | Default body, buttons, inputs, tables, menus |
| `600` (semibold) | Selected menu items, system name title, headings, bold emphasis |

---

## 4. SPACING & LAYOUT

### 4.1 Header

| Property | Value |
|----------|-------|
| Height | `60px` (inline style), `64px` (CSS token `--bdh-micro-main-base-header-height`) |
| Line-height | `60px` |
| Position | Fixed, z-index `19` |
| Background | Transparent (light), with `backdrop-filter: blur(8px)` |
| Bottom border | `1px solid rgba(5,5,5,0.06)` |
| Horizontal padding | `0 50px` |
| Right content width | `326px` (variable via `--bdh-micro-main-pro-global-header-right-content-width`) |

**Header internal structure (top-nav-header):**
```
┌─ Header (60px) ──────────────────────────────────────────┐
│  ┌─ top-nav-header-main (height:40px, margin:12px 0) ──┐ │
│  │ [Logo 32px] [SystemName 20px] [──Top Menu──] [Btns] │ │
│  └──────────────────────────────────────────────────────┘ │
│  ─── border-bottom: 1px solid rgba(5,5,5,0.06) (menu) ── │
└──────────────────────────────────────────────────────────┘
```
- `bdh-micro-main-pro-top-nav-header-main`: `display: flex; padding-inline-start: 16px; margin: 12px 0; height: 40px`
- The `<ul>` horizontal menu has its own `border-bottom: 1px solid rgba(5,5,5,0.06)` across full width
- **Logo SVG**: `32×32px` inline SVG, 6-stop linear gradient `#7566FF` → `#2F54EB`
- **System name**: `font-size: 20px; font-weight: 600` next to logo
- **Logo container**: `min-height: 22px`, first child `font-size: 22px` |

### 4.2 Sidebar

| Property | Value |
|----------|-------|
| Width | `200px` |
| Position | Fixed, starts at `60px` from top |
| Height | `calc(100% - 60px)` |
| Theme | Light (transparent bg), dark variant available (`#001529`) |
| Children padding-inline | `8px` |
| Menu padding-top | `16px` |
| Collapse button | `10px × 28px`, positioned `right:8px; top:calc(50% - 14px)`, opacity `0.15` (hover: `0.45`), z-index `101` |

### 4.3 Content Area

| Property | Value |
|----------|-------|
| Background | `#F7F9FD` |
| Default padding | `32px` block, `40px` inline |
| Page-specific override | `padding: 0` (full-bleed content) |

### 4.4 Grid System

| Property | Value |
|----------|-------|
| System | 24-column Ant Design grid |
| Row | `margin: -8px; row-gap: 16px` |
| Column | `padding: 8px` |
| Common fractions | `ant-col-6` (25%), `ant-col-8` (33.3%), `ant-col-12` (50%), `ant-col-24` (100%) |

### 4.5 Responsive Breakpoints (for card grids)

| Max Width | Columns | Flex |
|-----------|---------|------|
| `< 1070px` | 1 | `0 0 100%` |
| `1070px – 1270px` | 2 | `0 0 50%` |
| `1270px – 1570px` | 3 | `0 0 33.3333%` |
| `1570px – 1970px` | 4 | `0 0 25%` |

### 4.6 Form Layout

| Property | Value |
|----------|-------|
| Layout direction | Horizontal (`ant-form-horizontal`) |
| Label column | `ant-col-4` (16.7%), `ant-col-8` (33.3%), or `ant-col-12` (50%) |
| Control column | Remaining width |
| Label height | `32px` |
| Label font-size | `14px` |
| Colon after label | `:` with `margin-inline-start: 2px; margin-inline-end: 8px` |
| Required mark | `*` in `#ff4d4f`, `margin-inline-end: 4px`, font-family `SimSun` |
| Form item margin-bottom | `24px` |
| Control min-height | `32px` |

**Form field annotation (field-hint):**
Every form field SHOULD include a `.field-hint` description below the control, following Axure annotation style:
- Font-size: `12px`, color: `rgba(0,0,0,0.45)`
- Content format: `<控件类型>，<是否必填>，<校验规则/限制说明>`
- Inline code references use `<code>` tags styled: `background: #f0f0f0; padding: 1px 4px; border-radius: 3px; font-family: monospace; font-size: 11px; color: #c7254e`
- Example: `"输入框，必填项，由小写字母、数字及连字符组成，限制50字符"`
- Example: `"下拉框单选，默认为空，必选项，选择镜像所属业务分类"`

---

## 5. BORDER RADIUS

| Value | Usage |
|-------|-------|
| **`6px`** | **Default — buttons, inputs, cards, header action items, menu items (default)** |
| `4px` | Menu horizontal items (light theme), submenu popup, dropdown items, sider selected menu item, chip/status badge |
| `2px` | Subtle elements, input focus bottom |
| `1px` | Left-border accent decoration |
| `8px` | Scrollbar thumb, system-selector cards (`SysItem`) |
| `20px` | Header avatar action wrapper |
| `50%` | **Circle — avatars, radio buttons, checkboxes** |
| `99px` | Pills |

---

## 6. SHADOWS

| Usage | Value |
|-------|-------|
| **Default button** | `0 2px 0 rgba(0,0,0,0.02)` |
| **Primary button** | `0 2px 0 rgba(47,84,235,0.1)` |
| **Form focus (inner)** | `0 0 0 2px rgba(47,84,235,0.1)` |
| **Error focus** | `0 0 0 2px rgba(255,77,79,0.1)` |
| **Warning focus** | `0 0 0 2px rgba(255,215,5,0.1)` |
| **Input focus** | `0 0 0 2px rgba(5,88,255,0.06)` |
| **Dropdown / Popover** | `0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)` |
| **Modal** | `0 1px 2px -2px rgba(0,0,0,0.16), 0 3px 6px 0 rgba(0,0,0,0.12), 0 5px 12px 4px rgba(0,0,0,0.09)` |
| **Drawer** | `6px 0 16px 0 rgba(0,0,0,0.08), 3px 0 6px -4px rgba(0,0,0,0.12), 9px 0 28px 8px rgba(0,0,0,0.05)` |
| **Light card** | `2px 2px 5px rgba(0,0,0,0.05)` |
| **Tooltip arrow** | `2px 2px 5px rgba(0,0,0,0.05)` |
| **Table scroll shadow (right)** | `inset 10px 0 8px -8px rgba(5,5,5,0.06)` |
| **Table scroll shadow (left)** | `inset -10px 0 8px -8px rgba(5,5,5,0.06)` |
| **Tabs overflow shadow** | `inset 10px 0 8px -8px rgba(0,0,0,0.08)` |
| **Disabled / plain / menu** | `none` |

---

## 7. TRANSITIONS

| Target | Duration | Easing |
|--------|----------|--------|
| **Button (all)** | `0.2s` | `cubic-bezier(0.645, 0.045, 0.355, 1)` |
| **Link color** | `0.3s` | default |
| **Menu (width)** | `0.3s` | `cubic-bezier(0.2, 0, 0, 1)` |
| **Menu (color, bg, border)** | `0.3s` | `cubic-bezier(0.645, 0.045, 0.355, 1)` |
| **Menu (padding, font-size, margin)** | `0.2s` | `cubic-bezier(0.215, 0.61, 0.355, 1)` |
| **Popover / Tooltip** | `0.2s` | `cubic-bezier(0.645, 0.045, 0.355, 1)` |
| **Expand / Collapse** | `0.3s` | `cubic-bezier(0.78, 0.14, 0.15, 0.86)` |
| **Fade** | `0.1s` | `cubic-bezier(0.71, -0.46, 0.88, 0.6)` |
| **Background color** | `0.2s` | default |
| **Box shadow** | `0.3s` | default |
| **Border color** | `0.3s` | default |
| **Spin opacity** | `0.3s` | default |
| **Header background** | `0.3s` | `cubic-bezier(0.645, 0.045, 0.355, 1)` |
| **Focus outline** | `0s` | Instant |

### Keyframe Animations

- `loadingCircle` — 360deg rotation, 1s infinite linear (spinner)
- `antZoomBigIn/Out` — scale 0.8↔1, opacity 0↔1
- `antSlideDownIn/Out` — scaleY 0.8↔1, origin 100% 100%
- `antSlideUpIn/Out` — scaleY 0.8↔1, origin 0% 0%
- `antMoveDownIn/Out` — translate3d Y 100%↔0
- `antMoveUpIn/Out` — translate3d Y -100%↔0
- `antFadeIn/Out` — opacity 0↔1
- `antZoomIn/Out` — scale 0.2↔1
- `antRotate` — rotate to 405deg

---

## 8. SCROLLBAR

| Mode | Width | Thumb Color | Thumb Hover | Track | Border Radius |
|------|-------|-------------|-------------|-------|---------------|
| **Light (default)** | `8px` | `rgba(0,0,0,0.25)` | `rgba(0,0,0,0.5)` | Transparent | `8px` |
| **Dark** | `8px` | `rgba(255,255,255,0.25)` | `rgba(255,255,255,0.5)` | Transparent | `8px` |
| **Custom (qiankun)** | `4px` | `#1c1e21` | `#1c1e21` | `display:none` | `4px` |
| Thumb border | `2px solid transparent` | — | — | — | — |

---

## 9. COMPONENT SPECIFICATIONS

### 9.1 Button

**Base rules:**
- Height: `32px`, font-size: `14px`, font-weight: `400`
- Padding: `4px 15px`, border-radius: `6px`
- Border: `1px solid transparent`
- Transition: `all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)`
- Focus-visible: `4px solid #adc6ff` outline, `1px` offset
- Icon-only: `32px × 32px`, `padding-inline: 0`, icon font-size `16px`

**Variants:**

| Variant | Default | Hover | Active | Disabled |
|---------|---------|-------|--------|----------|
| **Primary (solid)** | bg `#2f54eb`, color `#fff`, shadow `0 2px 0 rgba(47,84,235,0.1)` | bg `#597ef7`, color `#fff` | bg `#1d39c4`, color `#fff` | bg `rgba(0,0,0,0.04)`, color `rgba(0,0,0,0.25)`, border `#d9d9d9`, shadow `none`, cursor `not-allowed` |
| **Default (outlined)** | bg `transparent`, color `rgba(0,0,0,0.88)`, shadow `0 2px 0 rgba(0,0,0,0.02)` | color `#597ef7`, border `#597ef7` | color `#1d39c4`, border `#1d39c4` | same as primary disabled pattern |
| **Text** | bg `transparent`, color `rgba(0,0,0,0.88)` | bg `rgba(0,0,0,0.06)` | bg `rgba(0,0,0,0.15)` | color `rgba(0,0,0,0.25)`, cursor `not-allowed` |
| **Link** | color `#1677ff` | color `#69b1ff` | color `#0958d9` | color `rgba(0,0,0,0.25)` |
| **Dashed** | Same as default but with dashed border | — | — | — |
| **Danger (primary)** | bg `#ff4d4f`, color `#fff` | bg `#ff7875` | bg `#d9363e` | — |
| **Danger (outlined)** | border `#ff4d4f`, color `#ff4d4f` | border `#ffa39e`, color `#ff7875` | border `#d9363e`, color `#d9363e` | — |

**Class naming convention (Ant Design 5):**
- Root: `ant-btn`
- Color: `ant-btn-color-primary`, `ant-btn-color-default`, `ant-btn-color-dangerous`
- Variant: `ant-btn-variant-solid`, `ant-btn-variant-outlined`, `ant-btn-variant-text`, `ant-btn-variant-link`, `ant-btn-variant-dashed`, `ant-btn-variant-filled`
- Shape: `ant-btn-icon-only`, `ant-btn-circle`

### 9.2 Form Input

**Base rules:**
- Height: `32px`, font-size: `14px`
- Border: `1px solid #d9d9d9`, border-radius: `6px`
- Placeholder: `rgba(0,0,0,0.25)`

**States:**
| State | Border | Box Shadow |
|-------|--------|------------|
| Default | `#d9d9d9` | `none` |
| Hover | `#597ef7` | — |
| Focus | `#2f54eb` | `0 0 0 2px rgba(47,84,235,0.1)` |
| Error | `#ff4d4f` | `0 0 0 2px rgba(255,77,79,0.1)` |
| Warning | — | `0 0 0 2px rgba(255,215,5,0.1)` |
| Disabled | `#d9d9d9` | text `rgba(0,0,0,0.25)`, bg `rgba(0,0,0,0.04)` |

**Variants:** `ant-input-outlined`, `ant-input-filled`, `ant-input-underlined`, `ant-input-borderless`

**Add-ons:** Prefix/suffix icon wrappers (`ant-input-affix-wrapper`), character count (`ant-input-show-count`), search (`ant-input-search`), password toggle, clear icon.

### 9.3 Select

**Base rules:** Same 32px height, 14px font as input. Arrow icon: `anticon-down` in right suffix.
**Features:** Searchable (`ant-select-show-search`), clearable (`ant-select-allow-clear`), placeholder support.
**Placeholder color:** `rgba(0,0,0,0.25)`.
**Tag mode:** Multiple selection renders as `ant-select-selection-item` chips inside the selector.

### 9.4 Radio / Radio Button

**Radio:** Circle `ant-radio-inner` + label. Checked: inner dot fill `#2f54eb`.
**Radio Group (outline):** `ant-radio-group-outline` — standard vertical/horizontal radio list.
**Radio Button Group (solid):** `ant-radio-group-solid` — pill-shaped toggle buttons. Checked: bg `#2f54eb`, color `#fff`.

### 9.5 Switch

Toggle switch with `ant-switch` root. Checked state: background `#2f54eb`.
Inner checked/unchecked text support (`ant-switch-inner-checked`, `ant-switch-inner-unchecked`).

### 9.6 Table

**Standard table:** `ant-table-wrapper` → `ant-table` → `ant-table-container` → `ant-table-header` + `ant-table-body`.

**Variants:**
- `ant-table-small` — compact
- `ant-table-bordered` — bordered cells
- `ant-table-fixed-header` — sticky header
- `ant-table-cell-ellipsis` — text truncation on cell

**Features:**
- Fixed columns: `ant-table-cell-fix-left` / `ant-table-cell-fix-right`
- Sortable: `ant-table-column-sorters`
- Filterable: `ant-table-filter-trigger`
- Expandable rows: `ant-table-row-expand-icon`, `ant-table-expanded-row`
- Row selection: `ant-table-selection-column`
- Sticky scroll bar: `ant-table-sticky-scroll`
- Summary footer: `ant-table-summary`
- Empty state: `ant-table-placeholder`

**Custom Table Variant — `.no-bordered-table`:**
```css
.no-bordered-table .ant-table-thead > tr > th {
  border-bottom: none;
  font-weight: 400;
}
.no-bordered-table .ant-table-cell {
  padding: 12px 8px !important;
}
.no-bordered-table .ant-table-wrapper .ant-table-tbody > tr > td {
  opacity: 0.8;
  border-bottom: none;
}
```
**Table header bg:** `rgba(0,0,0,0.04)`.

### 9.7 Card

**Standard card:** `ant-card` with `ant-card-head` (title area, padding `0px 16px`, no bottom border) + `ant-card-body` (content).

**Pro Card:** `ant-pro-card` (Ant Design Pro). Transparent background wrapper, body has `padding-right: 24px` and `min-height: calc(100vh - var(--bdh-micro-main-base-top-nav-height))`.

**Card accent bar (page-specific):** Left-border accent decoration:
```css
width: 2px; height: 14px;
background-color: rgb(47,84,235);
border-radius: 1px;
margin-right: 8px;
```
This blue bar appears before card titles to indicate the card's primary topic.

**System-selector card (`SysItem`):**
- `border-radius: 8px`, internal padding `24px`
- Has a decorative `.SysBgMask` element: absolutely positioned at `right:-62px; top:1px`, 160×160px, containing an image with `opacity:0.1; filter:blur(24px)` — a blurred-icon background decoration.

### 9.8 Tabs

`ant-tabs` with `ant-tabs-nav` containing tab items. Active tab has `ant-tabs-tab-active` + animated ink bar (`ant-tabs-ink-bar`).

**Variants:** `ant-tabs-top`, `ant-tabs-card`.
**Nav separator:** `border-bottom: 1px solid #f0f0f0`.
**Overflow shadows:** 32px-wide gradient shadows on nav wrap edges.

### 9.9 Navigation / Menu

**Top Navigation (Horizontal):**
- Class: `bdh-micro-main-menu-horizontal` + `bdh-micro-main-menu-light`
- Items: `padding: 0 16px; height: 40px`, gap: `8px` between sibling items
- Font-size: `14px`, color: `rgba(0,0,0,0.65)`
- Hover: color `#2f54eb`
- Menu row has `border-bottom: 1px solid rgba(5,5,5,0.06)` across full width
- **Selected state:** `color: rgb(47,84,235) !important; font-weight: 600; background-color: transparent !important`
- **Selected underline:** `::after` pseudo-element — `position: absolute; left: 0; bottom: 0; width: 100%; height: 10px; background: url(data:image/png;base64,...) center center / 100% 100% no-repeat` (10px tall base64 PNG, 1339 bytes, blue gradient underline image)

**Sidebar (Inline):**
- Class: `bdh-micro-main-menu-inline` + `bdh-micro-main-menu-light`
- Item: `40px` height/line-height, padding-inline `16px`, margin `0 16px 4px`, width `calc(100% - 32px)`
- Selected: color `rgb(47,84,235)`, bg `rgba(47,84,235,0.2)`, border-radius `4px!important`, font-weight `600`
- Icon-text gap: `8px`
- Submenu title hover: `background-color: transparent !important; color: rgb(47,84,235) !important`
- Group labels: `font-size: 12px; color: rgba(0,0,0,0.45); padding: 8px 24px 4px`
- Sidebar inner wrapper: `padding: 16px 8px`

**Menu theme variants:**
- Light: hover `rgba(0,0,0,0.03)`, active `rgba(0,0,0,0.15)`
- Dark: bg `#001529`, selected color `#2f54eb`, danger hover bg `#ff4d4f`
- Focus-visible: `4px solid #adc6ff` outline

**Submenu:** Popup offset `-7px`, border-radius `4px`, arrow `6px × 1.5px`, arrow border-radius `6px`.

### 9.9a Navigation Structure (Page Hierarchy)

> **Source:** Extracted from all design_role HTML snapshots. Defines which sidebar menu items appear
> under each top-level navigation item.

| Top Nav Item | Sidebar Menu Items |
|-------------|-------------------|
| **模型广场** (Model Square) | 洛书·模型服务平台, 模型广场, 数据管理, 模型管理, 开发中心, 智能应用 |
| **数据管理** (Data Management) | 洛书·模型服务平台, 模型广场, 数据管理, 模型管理, 开发中心, 智能应用 |
| **模型管理** (Model Management) | 资源总览, 模型部署 |
| **开发中心** (Dev Center) | 镜像管理, 在线开发, 工作流 |
| **智能应用** (Smart Apps) | Agent应用, 知识库 |

**Top nav menu bar specifics:**
- Wrapper: `bdh-micro-main-pro-top-nav-header-main` — `display: flex; padding-inline-start: 16px; margin: 12px 0; height: 40px` (inside 60px header)
- The `<ul>` horizontal menu has `border-bottom: 1px solid rgba(5,5,5,0.06)` across its full width
- Active item: `border-bottom: 1px solid rgb(47,84,235); font-weight: 600; color: rgb(47,84,235) !important`
- Items: `padding: 0 16px; height: 40px; gap: 8px` between sibling items

**Logo area:**
- SVG logo: `32×32px` with 6-stop linear gradient (`#7566FF` → `#2F54EB`)
- System name: `font-size: 20px; font-weight: 600` next to logo
- Logo img forced to `height: 32px !important`

**Sidebar specifics:**
- `padding: 16px 8px` on the sidebar inner wrapper
- Group labels: `font-size: 12px; color: rgba(0,0,0,0.45); padding: 8px 24px 4px`
- Menu items: `margin: 0 16px 4px` (not `8px` as previously noted — last item gets `4px` bottom)

### 9.10 Steps (Stepper)

`ant-steps` with step items. **Variants:** `ant-steps-horizontal` / `ant-steps-vertical`, `ant-steps-default` / `ant-steps-small` / `ant-steps-dot` / `ant-steps-navigation`, `ant-steps-label-vertical`.

**Step states:** `ant-steps-item-wait`, `ant-steps-item-process` (active), `ant-steps-item-finish`, `ant-steps-item-error`.

### 9.11 Tags / Chips

**Standard tag:** `ant-tag`, font-size `12px`.
**Checkable tag:** `ant-tag-checkable` with `ant-tag-checkable-checked` state.
**Color variants:** All Ant Design semantic colors available plus custom `ant-tag-has-color`.

**Custom status chip (page-specific):**
```css
.chip-base {
  display: block; width: 56px; height: 20px;
  line-height: 20px; text-align: center;
  border-radius: 4px; font-size: 12px;
}
/* Success / Built */  color: rgb(82,196,26);  background: rgb(217,247,190);
/* Pending / Building */  color: rgb(47,84,235);  background: rgb(214,228,255);
/* Unbuilt / Default */  color: rgba(0,0,0,0.65);  background: #f0f0f0;
/* Build Failed */  color: #ff4d4f;  background: #fff2f0;
/* Published */  color: #23ada4;  background: #e6fffb;
```

**Status lifecycle (image management):**
```
未构建 (unbuilt) → 构建中 (building) → 构建成功 (success) → 已发布 (published)
                                      ↘ 构建失败 (failed)
```
- **未构建:** Gray default chip — image saved but not yet built. Action: enter detail page → click "构建".
- **构建中:** Blue pending chip — build in progress, spinner shown. Action: wait, view build log.
- **构建成功:** Green success chip — build complete, ready to publish. Action: click "发布" in detail page.
- **构建失败:** Red error chip — build error occurred. Action: view log, fix Dockerfile, re-build.
- **已发布:** Teal published chip — final state, available in marketplace. No further action.

### 9.12 Badge

`ant-badge` with count or status dot. **Status dot variants:** `ant-badge-status-success` (green), `ant-badge-status-default` (gray).
Badge count font-size: `10px`.

### 9.13 Pagination

`ant-pagination` with active item color `#2f54eb`, active border `rgba(89,126,247,1)`.
Variants: `ant-pagination-mini`, `ant-pagination-simple`, `ant-pagination-end`.

### 9.14 Dropdown / Popover / Tooltip

- **Dropdown:** `bdh-micro-main-dropdown`, z-index `1050`. Menu item hover `rgba(0,0,0,0.04)`, selected `#d6e4ff`, danger `#ff4d4f` bg on hover.
- **Tooltip:** `bdh-micro-main-tooltip`, z-index `1070`, max-width `250px`, font-size `14px`, color `rgba(0,0,0,0.88)`. Arrow background: `var(--antd-arrow-background-color)` = `rgba(0,0,0,0.85)`.
- **Popover:** `ant-popover` with `ant-popover-arrow`.

### 9.15 Modal / Drawer

- **Modal:** `bdh-micro-main-modal` / `ant-modal`, close button hover bg `rgba(0,0,0,0.06)`, active `rgba(0,0,0,0.15)`.
- **Drawer:** `bdh-micro-main-drawer`, close button same pattern.

### 9.16 Spin / Loading

`bdh-micro-main-spin-nested-loading` wrapping a container. Blur state: overlay with bg `#ffffff`, opacity `0.4`. Spinner animation: `loadingCircle` (360deg rotation).

### 9.17 Avatar

`bdh-micro-main-avatar bdh-micro-main-avatar-circle bdh-micro-main-avatar-image`.
Size: `28px` (header), `32px` (logo). Border: `1px solid transparent`, border-radius `50%`.

### 9.18 Empty State

`ant-empty` — displayed in tables with no data, empty containers.

### 9.19 Divider

`ant-divider` with variants: `ant-divider-dashed`, `ant-divider-dotted`, `ant-divider-with-text` (with text alignment).

### 9.20 Upload & Progress Bar

**Upload Zone (before file selection):**
- Border: `1.5px dashed #d9d9d9`, border-radius: `8px`, padding: `40px`
- Background: `rgba(0,0,0,0.01)`, text-align: center, cursor: pointer
- Hover: border-color `#2f54eb`, background `#f0f5ff`
- Icon: 40px, color `rgba(0,0,0,0.45)`, margin-bottom 12px
- Primary text: `14px`, color `rgba(0,0,0,0.65)`
- Hint text: `12px`, color `rgba(0,0,0,0.45)`, line-height `1.8`
- Format specs inside `<code>` tags: `background: #f0f0f0; padding: 1px 5px; border-radius: 3px; font-family: monospace; font-size: 11px; color: #c7254e`
- Supported formats displayed: `.tar.gz`, `.tgz`
- Size limit: single file ≤ 10GB
- Name rules: Chinese, letters, numbers, common special characters

**Progress Bar (during upload):**
- Container: `margin-top: 10px`
- Status row: flex space-between — label (`12px`, `rgba(0,0,0,0.65)`) + percentage (`12px`, `#2f54eb`, `font-weight: 600`)
- Track: `height: 6px; background: #f0f0f0; border-radius: 3px; overflow: hidden`
- Fill: `height: 100%; background: linear-gradient(90deg, #2f54eb, #597ef7); border-radius: 3px; transition: width 0.3s ease`
- Fill uses **striped animation** overlay:
  ```css
  background: repeating-linear-gradient(
    -45deg,
    transparent, transparent 8px,
    rgba(255,255,255,0.25) 8px, rgba(255,255,255,0.25) 16px
  );
  animation: progressStripe 0.8s linear infinite;
  ```
- Bottom row: upload speed (`11px`, `rgba(0,0,0,0.45)`) + cancel link (`11px`, pointer)
- Speed format: `{size}/s` (computed from elapsed time × percentage)

**Three Upload States:**

| State | Card Border | Card Background | Display |
|-------|------------|-----------------|---------|
| **Uploading** | `#d9d9d9` (default) | `rgba(0,0,0,0.01)` | Progress bar + percentage + speed + cancel button |
| **Done** | `#b7eb8f` | `#f6ffed` | Green checkmark + "上传完成" + "文件已就绪，点击'创建镜像'按钮提交" |
| **Failed** | `#ffccc7` | `#fff2f0` | Red X + "上传失败" + "请检查网络连接后重新上传..." |

**File card (after selection):**
- Border: `1px solid #d9d9d9`, border-radius: `8px`, padding: `12px 14px`
- File row: flex, gap 8px — icon (18px) + name (`13px`, `font-weight: 500`, ellipsis) + size (`12px`, `rgba(0,0,0,0.45)`) + remove button
- Remove button: `14px`, `rgba(0,0,0,0.45)`, hover: `#ff4d4f` with `#fff2f0` background

### 9.21 Tree / TreeSelect

`ant-tree` with `ant-tree-treenode`, checkbox, switcher, and `ant-tree-node-content-wrapper`. Also `ant-select-tree` for tree-as-select pattern.

### 9.22 Typography

`ant-typography` with `ant-typography-ellipsis` (single-line via `ant-typography-ellipsis-single-line`, multi-line), `ant-typography-copy`, `ant-typography-edit`.

### 9.23 Skeleton

`bdh-micro-main-skeleton` with gradient loading animation keyframe.

### 9.24 Float Button (page-specific)

Class `_6f4cf9b9a271901cfff0`: `position: fixed; z-index: 1000; font-size: 20px; padding: 8px`. Positioned relative to CSS custom properties for top-nav height and right-content width. Contains SVG info-circle icon.

### 9.25 PRD Field Description Panel (toggleable)

> **Purpose:** Display business-level PRD explanations for form fields via a toggle button.
> This separates PRD documentation from development implementation notes, keeping the form
> clean by default while providing contextual help on demand.

**Toggle Button (`.prd-toggle-btn`):**
- Inline after section title: `📋 字段说明`
- Height: `28px`, padding: `0 8px`, font-size: `13px`
- Default: `color: rgba(0,0,0,0.45)`
- Hover: `color: #2f54eb; background: rgba(47,84,235,0.06)`
- Active (when panels are visible): `color: #2f54eb; background: rgba(47,84,235,0.1)`
- Icon rotates 180° on active

**PRD Panel (`.prd-panel`):**
- Default: `display: none` (hidden — clean form)
- Visible: `display: block` when `.visible` class added
- Style: `padding: 10px 14px; background: #fafbff; border-left: 3px solid #2f54eb; border-radius: 0 6px 6px 0`
- Font: `13px`, `color: rgba(0,0,0,0.65)`, `line-height: 1.7`
- Panel label: `11px`, `font-weight: 600`, `color: #2f54eb`, uppercase, letter-spacing `0.5px`, margin-bottom `4px`
- Inline code: `background: rgba(47,84,235,0.08); padding: 1px 5px; border-radius: 3px; font-family: "SF Mono"; font-size: 12px; color: #2f54eb`
- Content style: **PRD business language** — describes purpose, use cases, examples, and business rules. NEVER use implementation terminology like "输入框", "必填项", "下拉框单选".

**Rules:**
| Rule | Description |
|------|-------------|
| Default state | All PRD panels hidden. Form is clean. |
| Toggle ALL panels | One button toggles all panels on the page simultaneously. Multiple buttons (one per section) all sync to the same state. |
| PRD language | Write in business terms, not implementation terms. Explain WHY and WHAT, not HOW. |
| Panel placement | Directly below the form field, above the next form-item. |

### 9.26 Form Validation Error States

**Error Input (`.has-error`):**
- Border: `#ff4d4f !important`
- Focus ring: `box-shadow: 0 0 0 2px rgba(255,77,79,0.1) !important`

**Error Message (`.field-error-msg`):**
- Default: `display: none`
- Visible: `display: flex` when `.visible` class added
- Style: `align-items: center; gap: 4px; font-size: 12px; color: #ff4d4f; margin-top: 4px; line-height: 1.4`
- Icon prefix: `⚠️` warning emoji

**Validation Behavior:**
| Event | Action |
|-------|--------|
| **onblur** | Validate individual field. Show inline error if invalid. Clear error if valid. |
| **onsubmit** | Validate ALL fields. Show all inline errors. Scroll to first error. Show toast: "请修正表单中的错误后再提交". |
| **oninput** | Do NOT clear error on input — only clear on blur or after correcting. |

**Validation Rules Per Field Type:**
| Field | Required | Pattern | Extras |
|-------|----------|---------|--------|
| 镜像名称 | Yes | `/^[a-z][a-z0-9-]*$/`, max 50 chars | Duplicate name check (async) |
| 镜像分类 | Yes | — | Must select from dropdown |
| 功能标识 | Yes | `/^[a-z0-9][a-z0-9-]*$/`, max 30 chars | — |
| 版本号 (each segment) | Yes | `/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/` | All three segments required |

### 9.27 Popconfirm (Bubble Confirmation)

> **Rule:** For simple confirmation dialogs (deploy, sync, offline, redeploy, delete), use Popconfirm — a bubble-style popover attached to the trigger button. Do NOT use a centered Modal overlay. The only exception is complex dialogs with selection lists (e.g., "新增推理服务").

**Design Reference:** Extracted from production antd Popconfirm at `http://10.11.14.211:30879/ai-model/deploy`.

**Shield (`.popconfirm-shield`):**
- `display: none; position: fixed; inset: 0; z-index: 1059`
- Transparent — catches outside clicks to dismiss. No dark mask.
- `display: block` when `.visible`

**Wrap (`.popconfirm-wrap`):**
- `display: none; position: fixed; z-index: 1060`
- Positioned **above** the trigger button via JS (`getBoundingClientRect` + `translateY(-100%)`)
- Clamped to viewport edges (8px margin)
- `display: block` when `.visible`

**Box (`.popconfirm-box`):**
- `background: #ffffff; border-radius: 8px; padding: 12px; min-width: 240px; max-width: 300px`
- Shadow: `0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)`

**Arrow (`.popconfirm-arrow`):**
- Bottom-center triangle pointing down to trigger: `border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid #ffffff`
- `position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%)`

**Body (`.popconfirm-body`):**
```
┌──────────────────────────────────────────────┐
│ ⚠️  是否确定部署该服务？                      │
│     (icon 16px #faad14, title 14px 600)      │
│     容器部署 + 接口校验，预计 3–15 分钟        │  ← optional desc (11px, rgba(0,0,0,0.35))
│                                              │
│                    [取 消]  [确 定]            │  ← btn-sm (24px height)
└──────────────────────────────────────────────┘
```
- Icon: `exclamation-circle` SVG, `font-size: 16px`, `color: #faad14`
- Title: `font-size: 14px; font-weight: 600; color: rgba(0,0,0,0.88)`
- Description (optional): `font-size: 11px; color: rgba(0,0,0,0.35); line-height: 1.4; margin-top: 2px`

**Buttons (`.popconfirm-btn`):**
- `height: 24px; padding: 0 7px; font-size: 14px; border-radius: 6px`
- Cancel: `border: 1px solid #d9d9d9; background: #ffffff; color: rgba(0,0,0,0.88)` (outlined default)
- Confirm: `background: #2f54eb; color: #fff; border-color: #2f54eb` (primary solid, add `.primary` class)
- Hover: Cancel border → `#597ef7`, Confirm bg → `#597ef7`

**JS API:**
```js
openPopconfirm(title, description, onOkCallback, triggerElement)
// description: null for simple confirmations (sync/offline)
// triggerElement: the button DOM node for positioning
closePopconfirm() // hides shield + wrap
```

**Use Cases & Wording:**

| Action | Title | Description |
|--------|-------|-------------|
| 部署 | 是否确定部署该服务？ | 容器部署（Pod 调度 + 容器启动）及接口健康校验，预计 3–15 分钟 |
| 重新部署 | 是否确定重新部署该服务？ | 将终止当前部署并释放资源，已有记录和校验结果将被清空 |
| 同步 | 是否确定同步该服务至模型广场？ | 同步后将在模型广场公开展示 |
| 下线 | 是否确定下线该服务？ | 服务将停止，状态恢复为待部署 |
| 撤回 | (no confirmation needed) | — |

**Anti-patterns (do NOT do):**
- ❌ Full-page dark overlay for simple confirmation
- ❌ Modal with header/close button for deploy/sync/offline
- ❌ Native `confirm()` browser dialog
- ❌ Long description text (keep ≤1 line, ≤40 chars)

### 9.27a Centered Dialog (Complex Dialogs Only)

> Use `.dialog-overlay` / `.dialog-box` for dialogs that contain selection lists, forms, or multi-step content (e.g., "新增推理服务"). Same structure as the old Modal but with updated class names.

**Overlay (`.dialog-overlay`):** `position: fixed; inset: 0; background: rgba(0,0,0,0.45); z-index: 1000`

**Box (`.dialog-box`):** Same as old `.modal-box` — `background: #ffffff; border-radius: 8px; max-width: 90vw; overflow: hidden`

**Structure:** `.dialog-header` (title + close) → `.dialog-body` (content) → `.dialog-footer` (buttons)

### 9.28 Toast Notification

**Toast (`.toast`):**
- `position: fixed; top: 76px; right: 24px; z-index: 2000`
- `padding: 10px 16px; border-radius: 6px; font-size: 14px`
- Animation: `toastIn` — slide from right, 0.3s cubic-bezier
- Auto-dismiss after 4 seconds

**Variants:**
| Type | Background | Border | Text Color | Icon |
|------|-----------|--------|------------|------|
| **success** | `#f6ffed` | `#b7eb8f` | `#52c41a` | ✅ |
| **error** | `#fff2f0` | `#ffccc7` | `#ff4d4f` | ❌ |
| **info** | `#f0f5ff` | `#d6e4ff` | `#2f54eb` | ℹ️ |

### 9.29 Image Card Component

> Used on the 镜像管理 (Image Management) list page. Cards display custom image metadata
> in a responsive grid layout.

**Card (`.image-card`):**
- `background: #ffffff; border: 1px solid #f0f0f0; border-radius: 8px; padding: 20px`
- Hover: `border-color: #d9d9d9; box-shadow: 0 2px 8px rgba(0,0,0,0.08)`
- Cursor: pointer (click to view detail — PRD note: detail page TBD)
- Flex column with `gap: 12px`

**Card Structure:**
```
┌─────────────────────────────────────────┐
│ [Icon 40×40]  Name (15px, 600)  [状态] │ ← card-top-row
│               registry.../name:version   │
│ ─────────────────────────────────────── │
│ 分类: sensing  功能: obj-detector        │ ← card-meta (flex-wrap)
│ 版本: 1.0.0    GPU: 需要  大小: 3.2 GB  │
│ ─────────────────────────────────────── │
│ 创建于 2026-07-08     [✏️ 编辑] [🗑️ 删除]│ ← card-footer
└─────────────────────────────────────────┘
```

**Card Icon (`.card-icon`):**
- `width: 40px; height: 40px; border-radius: 8px`
- `background: linear-gradient(135deg, rgba(47,84,235,0.1), rgba(117,102,255,0.1))`
- Category-based emoji: 👁️ sensing, 🧠 decision, 🌐 simulation, 🤖 llm

**Card Status Chip:** Same as §9.4 status chips: `56px × 20px, border-radius: 4px, font-size: 12px`

**Card Actions:**
- Edit button: `.btn-text.btn-sm`, color `rgba(0,0,0,0.65)`, hover `rgba(0,0,0,0.06)`
- Delete button: `.btn-danger-text.btn-sm`, color `rgba(0,0,0,0.65)`, hover `#ff4d4f` with `#fff2f0` bg
- Action clicks use `event.stopPropagation()` to prevent card click

### 9.30 Image Card Grid & Toolbar

**Toolbar (`.toolbar`):**
- `display: flex; align-items: center; gap: 12px`
- `padding-bottom: 20px; border-bottom: 1px solid #f0f0f0; margin-bottom: 20px`
- Contains: search input → category filter → status filter → spacer → count → "创建镜像" button

**Search Input:**
- `max-width: 320px; height: 32px; padding-left: 34px` (room for 🔍 icon)
- Icon positioned absolutely at `left: 11px`

**Filter Selects:**
- `height: 32px; padding: 4px 28px 4px 11px; border-radius: 6px`
- Custom dropdown arrow via `::after` pseudo-element

**Card Grid (`.image-card-grid`):**
- `display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 16px`
- Responsive: → `minmax(280px, 1fr)` at < 1200px, → `1fr` at < 768px

**Empty State:**
- `text-align: center; padding: 80px 20px`
- Icon: `64px`, opacity `0.3`
- Title: `14px`, `color: rgba(0,0,0,0.65)`
- Description: `13px`, `color: rgba(0,0,0,0.45)`, with line-height `1.6`
- "创建第一个镜像" button below

**Pagination:**
- Layout: `display: flex; justify-content: space-between; padding-top: 20px; margin-top: 8px`
- Left: page size selector (`.page-size-select`) — dropdown with options 10 / 20 / 50 / 100 条/页
- Right: page buttons (`.pagination-controls`) — `display: flex; gap: 8px`
- Page buttons: `min-width: 32px; height: 32px; border-radius: 6px`
- Active page: `color: #fff; background: #2f54eb; border-color: #2f54eb; font-weight: 600`
- Ellipsis for large page counts (> 7 pages)
- Page info text: `font-size: 13px; color: rgba(0,0,0,0.45)`
- Changing page size resets to page 1

### 9.31 Loading State on Submit Button

**Loading (`.btn.loading`):**
- `pointer-events: none; opacity: 0.65`
- Spinner: `14px × 14px`, `border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%`
- Animation: `btnSpin` — `transform: rotate(360deg)` at 0.6s linear infinite
- Text changes to "提交中..."

**Submit Flow:**
```
[Click "创建镜像"]
  → Validate form
    → Error? Show inline errors + toast "请修正表单中的错误后再提交"
    → Valid? Show confirmation modal
      → [确认提交] → Loading state on button → API call → Toast result
      → [返回修改] → Close modal
```

### 9.32 Field Format Hint (always-visible input guide)

> **Distinct from PRD panels (§9.25):** format hints are always visible, lightweight, and describe
> input syntax — not business purpose. They sit directly below the field, above the error message.

**Format Hint (`.field-format-hint`):**
- `font-size: 12px; color: rgba(0,0,0,0.45); margin-top: 4px; line-height: 1.5`
- Always visible — never hidden by PRD toggle
- Content: pure syntax/format guidance, e.g. "小写字母开头，支持字母、数字、短横线（-），语义化描述算子功能"
- Placement: between input and `.field-error-msg`

**Rule:** Use `.field-format-hint` for HOW to format the input; use `.prd-panel` for WHY the field exists.

### 9.33 Edit Mode Pattern (pre-fill + field locking)

> **Purpose:** When navigating from a list page to a create/edit page, pre-fill form data and lock
> non-editable fields. Triggered by URL parameter `?edit=<id>`.

**Entry Point:**
- List page action button → `window.location.href = 'create-page.html?edit=' + id`
- Create page `initEditMode()` parses `new URLSearchParams(window.location.search).get('edit')`

**Field Locking — Three Approaches:**

| Lock Type | CSS | Use Case |
|-----------|-----|----------|
| **Disabled select** | `.form-select[disabled]` — `background: #f5f5f5; color: rgba(0,0,0,0.45); cursor: not-allowed; pointer-events: none` | Dropdown fields |
| **Readonly input** | `.form-input[readonly]` — same disabled styling | Text inputs that must submit their value |
| **Locked toggle** | `.toggle-switch.locked` — `pointer-events: none; opacity: 0.5` | Switch toggles |

**Visual Indicators:**
- Card header: yellow edit badge — `.edit-badge` — `background: #fffbe6; border: 1px solid #ffe58f; border-radius: 4px; font-size: 12px; color: #d48806`
- Badge text: "✏️ 编辑模式 — 仅可修改镜像名称与 Dockerfile"
- Submit button text changes: "✨ 创建镜像" → "💾 构建"

**Confirm Modal in Edit Mode:**
- Locked fields annotated with "（不可修改）" in gray
- Info box text changes to: "💡 编辑模式仅更新镜像名称和 Dockerfile，其他字段不可修改。保存后修改将在下次构建时生效。"

**Data Flow:**
```
List Page                          Create/Edit Page
─────────                          ────────────────
[editImage(id)]                     initEditMode()
  → location.href                    → parse ?edit=id
    = 'create.html?edit='+id         → find MOCK_IMAGES[id]
                                     → pre-fill editable fields
                                     → lock non-editable fields
                                     → captureInitialState()
```

### 9.34 Dockerfile Text File Upload

> **Purpose:** A compact upload component for text-based files (Dockerfile, .txt) that reads content
> into the code editor. Visually matches the tarball upload zone (§9.20) for consistency.

**Upload Zone:**
- Reuses `.upload-zone` class — same `1.5px dashed #d9d9d9`, `border-radius: 8px`, hover styles
- Compact padding: `28px` (vs `40px` for tarball)
- Icon: 📄 (vs 📤 for tarball)
- Primary text: "点击上传 Dockerfile 文本文件"
- Hint: "上传后内容填入右侧编辑区，仍可手动修改（≤10M）"
- **No format list** — single line of hint text only

**File Card (after selection):**
- Reuses `.upload-file-card` — same green border/bg when done
- Shows: 📄 icon + file name + ✕ remove button
- Done state: "✓ 上传完成 — 内容已填入右侧编辑区"

**Behavior:**
```
[Select file]
  → Validate size ≤ 10MB
  → FileReader.readAsText()
  → Fill codeEditor.value
  → Hide upload zone, show file card
  → Toast: "文件「xxx」已上传，内容已填入编辑区，可继续手动修改"

[Click ✕ clear]
  → Reset file input
  → Show upload zone, hide file card
  → Clear codeEditor
  → Toast: "已清除上传的文件内容"
```

**Placement:** Inside the left form column, above the "描述" field. Only visible in Dockerfile mode (§9.36).

### 9.35 Interaction Guide System

> **Purpose:** A floating help system added to PRD prototypes so reviewers can discover and trigger
> every interactive state (validation errors, modals, toasts, edge cases) without guessing.

**Trigger Button (`.guide-trigger`):**
- `position: fixed; bottom: 24px; right: 24px; z-index: 100`
- `height: 40px; padding: 0 16px; background: #2f54eb; color: #fff; border-radius: 20px`
- `font-size: 14px; font-weight: 500; box-shadow: 0 4px 12px rgba(47,84,235,0.35)`
- Hover: `background: #597ef7; transform: translateY(-1px)`
- Text: "🧪 交互演示指引"

**Overlay (`.guide-overlay`):**
- `position: fixed; inset: 0; background: rgba(0,0,0,0.45); z-index: 2000`
- Click overlay background to close

**Drawer (`.guide-drawer`):**
- `width: 680px; max-width: 90vw; max-height: 80vh; overflow-y: auto`
- `background: #ffffff; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15)`
- Sticky header with title + close button
- Body: organized in `.guide-section` blocks

**Guide Table (`.guide-table`):**
- Three columns: 交互场景 | 触发方式 | 预期效果
- Header: `background: rgba(0,0,0,0.02); font-weight: 600; color: rgba(0,0,0,0.65)`
- Rows: `border-bottom: 1px solid #f0f0f0`
- Code values in `<code>` tags
- Status tags: `.guide-tag.do` (green), `.guide-tag.error` (red), `.guide-tag.modal` (blue)

**Guide Content Organization:**
| Section | Content |
|---------|---------|
| PRD 字段说明 | How to toggle PRD panels, format hints |
| 字段校验 & 错误状态 | Every validation trigger + expected error message |
| Modal 弹窗场景 | Submit confirm, unsaved leave, cancel |
| Toast 反馈 & 加载态 | Success/error/info toasts, spinner timing |
| 模式切换 & 上传 | Dockerfile ↔ tarball, upload progress states, GPU switch |
| 编辑模式 | Navigate from list, locked fields, edit submit |

**Rule:** Every PRD prototype page MUST include this system. It transforms a static prototype into
an interactive demo that non-technical reviewers can fully explore.

### 9.36 Mode-dependent Field Visibility

> **Purpose:** Form fields or sections that are only relevant in one mode (e.g., Dockerfile text upload
> only in Dockerfile mode, tarball upload only in tarball mode).

**Implementation:**
- Wrap field in a container with unique `id`
- In `switchMode()` function: `document.getElementById('fieldId').style.display = mode === 'targetMode' ? '' : 'none'`

**Standard Visibility Rules (image creation page):**

| Component | Dockerfile Mode | Tarball Mode |
|-----------|----------------|--------------|
| Dockerfile text upload (§9.34) | ✅ Visible | ❌ Hidden |
| Tarball upload zone (§9.20) | ❌ Hidden | ✅ Visible |
| Code editor panel | ✅ Visible | ❌ Hidden |
| Upload guide panel | ❌ Hidden | ✅ Visible |

### 9.37 Card Action & Status Permission Rules

> **Purpose:** On list/card pages, card actions and detail page operations are determined by
> the image's workflow status. The core principle: **"已发布" is a terminal state — fully locked
> against edit and delete.** All other statuses allow delete; edit is only allowed for
> `unbuilt` and `failed`.

---

#### Status Lifecycle (by Creation Method)

**Dockerfile 方式：**
```
保存 → 未构建 → 构建中 → 构建成功 → 已发布
              ↘ 构建失败 ↗ (重新构建)
```

**Tar 包方式（无"未构建"状态）：**
```
保存 → 构建中 → 构建成功 → 已发布
       ↘ 构建失败 ↗ (重新构建)
```

> Tar 包方式保存后直接进入"构建中"，不存在"未构建"态。只有 Dockerfile 方式才会出现"未构建"。

---

#### Card-by-Card Button Reference (列表页 — 前端 & 测试对照)

以下按状态逐个列出卡片上可见的按钮、触发行为、删除确认文案：

##### 1. 未构建 `unbuilt`（仅 Dockerfile 方式）

```
┌────────────────────────────────────────────┐
│  👁️  sim-env-v2                   未构建   │
│  registry.example.com/simulation/...       │
│  分类: simulation  功能: env-simulator      │
│  创建于 2026-07-06 16:45:00                │
│  [📋 详情]  [✏️ 编辑]  [🗑️ 删除]          │
└────────────────────────────────────────────┘
```

| 按钮 | 可见 | 行为 |
|------|:--:|------|
| 📋 详情 | ✅ | → `image-custom-detail.html?id=n` |
| ✏️ 编辑 | ✅ | → `image-custom-create.html?edit=n`（仅镜像名称 + Dockerfile 可编辑） |
| 🗑️ 删除 | ✅ | 标准确认弹窗："确定要删除镜像 **xxx** 吗？删除后不可恢复…" |

##### 2. 构建中 `building`

```
┌────────────────────────────────────────────┐
│  🤖  llm-inference                构建中   │
│  registry.example.com/llm/llm-inference    │
│  分类: llm  功能: text-generator            │
│  创建于 2026-07-07 09:15:00                │
│  [📋 详情]  [🗑️ 删除]                      │
└────────────────────────────────────────────┘
```

| 按钮 | 可见 | 行为 |
|------|:--:|------|
| 📋 详情 | ✅ | → 详情页（只读，查看构建日志） |
| ✏️ 编辑 | ❌ | 构建进行中，禁止编辑 |
| 🗑️ 删除 | ✅ | ⚠️ 特殊确认："系统将先**取消正在进行的构建**，再删除该镜像。此操作不可恢复。" |

##### 3. 构建成功 `success`

```
┌────────────────────────────────────────────┐
│  👁️  image-classifier             构建成功 │
│  registry.example.com/sensing/image-class. │
│  分类: sensing  功能: image-classifier      │
│  创建于 2026-07-09 08:00:00                │
│  [📋 详情]  [🗑️ 删除]                      │
└────────────────────────────────────────────┘
```

| 按钮 | 可见 | 行为 |
|------|:--:|------|
| 📋 详情 | ✅ | → 详情页，可点击「📤 发布到镜像市场」 |
| ✏️ 编辑 | ❌ | 有成功构建产物，编辑会导致状态不一致 |
| 🗑️ 删除 | ✅ | 标准确认弹窗 |

##### 4. 构建失败 `failed`

```
┌────────────────────────────────────────────┐
│  🧠  decision-planner             构建失败 │
│  registry.example.com/decision/decision... │
│  分类: decision  功能: path-planner         │
│  创建于 2026-07-05 11:20:00                │
│  [📋 详情]  [✏️ 编辑]  [🗑️ 删除]          │
└────────────────────────────────────────────┘
```

| 按钮 | 可见 | 行为 |
|------|:--:|------|
| 📋 详情 | ✅ | → 详情页，查看日志 +「🔨 重新构建」 |
| ✏️ 编辑 | ✅ | → `image-custom-create.html?edit=n`（仅镜像名称 + Dockerfile 可编辑） |
| 🗑️ 删除 | ✅ | 标准确认弹窗 |

##### 5. 已发布 `published`

```
┌────────────────────────────────────────────┐
│  👁️  pytorch-training             已发布   │
│  registry.example.com/sensing/pytorch-tra. │
│  分类: sensing  功能: object-detector       │
│  创建于 2026-07-08 14:30:00                │
│  [📋 详情]                                  │
└────────────────────────────────────────────┘
```

| 按钮 | 可见 | 行为 |
|------|:--:|------|
| 📋 详情 | ✅ | → 详情页（只读），显示「✅ 已发布到镜像市场」 |
| ✏️ 编辑 | ❌ | 终态，不可编辑 |
| 🗑️ 删除 | ❌ | 终态，不可删除 |

---

#### Summary Matrix

| Status | 📋 详情 | ✏️ 编辑 | 🗑️ 删除 | 删除确认类型 | 出现条件 |
|--------|:--:|:--:|:--:|------|------|
| 未构建 (unbuilt) | ✅ | ✅ | ✅ | 标准确认 | 仅 Dockerfile 方式 |
| 构建中 (building) | ✅ | ❌ | ✅ | 取消构建警告 | Dockerfile / Tar |
| 构建成功 (success) | ✅ | ❌ | ✅ | 标准确认 | Dockerfile / Tar |
| 构建失败 (failed) | ✅ | ✅ | ✅ | 标准确认 | Dockerfile / Tar |
| 已发布 (published) | ✅ | ❌ | ❌ | — | Dockerfile / Tar |

---

#### Mock Data Reference (image-custom-list.html)

| id | name | method | status | 编辑 | 删除 |
|----|------|--------|--------|:--:|:--:|
| 1 | pytorch-training | dockerfile | published | ❌ | ❌ |
| 2 | llm-inference | dockerfile | building | ❌ | ✅ |
| 3 | sim-env-v2 | dockerfile | unbuilt | ✅ | ✅ |
| 4 | decision-planner | dockerfile | failed | ✅ | ✅ |
| 5 | image-classifier | dockerfile | success | ❌ | ✅ |
| 6 | yolov8-detector | tarball | building | ❌ | ✅ |
| 7 | bert-embedding | tarball | success | ❌ | ✅ |
| 8 | speech-recognizer | tarball | failed | ✅ | ✅ |
| 9 | resnet-classifier | tarball | published | ❌ | ❌ |

---

#### Detail Page Operations (per status)

| Status | Available Operation |
|--------|-------------------|
| **未构建** (unbuilt) | 🔨 构建镜像, ✏️ 编辑 |
| **构建中** (building) | View build log only (spinner, no buttons) |
| **构建成功** (success) | 📤 发布到镜像市场 |
| **构建失败** (failed) | 🔨 重新构建, ✏️ 编辑 |
| **已发布** (published) | None (terminal state indicator) |

**Rule summary:**
- ALL cards show "📋 详情" → detail page (`image-custom-detail.html?id=n`).
- Edit (✏️) is only available for `unbuilt` and `failed` statuses → create page in edit mode (`?edit=<id>`).
- Delete (🗑️) is available for all statuses EXCEPT `published`. Only `building` status shows a special warning ("cancel build first").
- The detail page is the central hub for build and publish operations.
- Tar 包方式跳过了"未构建"状态：保存后直接进入"构建中"。

### 9.38 Image Detail Page

> **Purpose:** The central hub for viewing image metadata, Dockerfile content, build logs, and executing
> build/publish operations. Uses the same split-panel layout as the create page (§11.5).

**Page Layout:**
```
┌─ Card Header (title + accent bar + status chip + 📋 字段说明) ─┐
├─ Left (460px, border-right) ───┬─ Right (flex:1) ──────────────┤
│  ▌ Status Banner               │  ▌ Dockerfile / 构建内容       │
│  [icon + title + description]  │  ┌──────────────────────────┐ │
│                                │  │ 行号 │ 代码内容 (只读)    │ │
│  ▌ 基础信息                    │  │  1   │ FROM ...           │ │
│  镜像名称      pytorch-train   │  │  2   │ WORKDIR ...        │ │
│  镜像分类      👁️ sensing      │  └──────────────────────────┘ │
│  功能          object-detector │                              │
│  版本号        1.0.0           │  ▌ 构建日志                   │
│  GPU 资源      需要            │  ┌──────────────────────────┐ │
│  镜像大小      3.2 GB          │  │ [log lines...]            │ │
│  镜像地址      registry...     │  └──────────────────────────┘ │
│  创建方式      Dockerfile      │                              │
│  创建时间      2026-07-08      │                              │
│  当前状态      [构建成功]      │                              │
│  描述          ...             │                              │
│                                │                              │
│  ▌ 操作                        │                              │
│  [← 返回列表] [✏️ 编辑]        │                              │
│  [🔨 构建镜像] / [📤 发布]     │                              │
└────────────────────────────────┴──────────────────────────────┘
```

**Key Components:**

| Component | Location | Description |
|-----------|----------|-------------|
| **Status Banner** | Left top | Color-coded banner showing current status + description. 5 variants: unbuilt (gray), building (blue+spinner), success (green), failed (red), published (teal). |
| **Info List** | Left | Single-column label:value rows for all metadata. Labels `72px` fixed width, values weight `500`. Description row spans full width with top border separator. |
| **Code Viewer** | Right | Read-only dark-themed viewer (`#1e1e2e` bg). Line numbers column (`48px`, `#252535` bg) + scrollable code content. Font: "SF Mono" 13px, color `#cdd6f4`, tab-size 2. |
| **Tarball Placeholder** | Right (alt) | When `buildMethod === 'tarball'`: centered icon, filename, size, orange warning note explaining tarball content cannot be reverse-parsed to Dockerfile text. |
| **Build Log** | Right bottom | Terminal-style log viewer (`#1e1e2e` bg, max-height `200px`). Lines color-coded: gray (info), green (success), orange (warn), red (error). Auto-scrolls to bottom. |
| **Action Bar** | Left bottom | Context-sensitive buttons based on status (see §9.37). Uses flex-wrap for responsive. |
| **PRD Panel** | Left (below section title) | Toggleable via `📋 字段说明` button in card header. Explains each info field in business terms. |

**Build Simulation:**
- Click "🔨 构建镜像" → confirmation modal → status becomes "构建中"
- Build log appears line-by-line in right panel (600ms interval per line)
- 90% probability success → status "构建成功", 10% probability failure → status "构建失败"
- Progress bar with striped animation shown during build

**Publish Flow:**
- Only available when status is "构建成功"
- Click "📤 发布到镜像市场" → confirmation modal → status becomes "已发布" → green toast

**Page URL:** `image-custom-detail.html?id=<imageId>`

**PRD Toggle:** Same pattern as create page (§9.25) — single `📋 字段说明` button in card header toggles all `.prd-panel` elements.

---

## 10. ICON SYSTEM

**Primary icon set:** Ant Design Icons (`anticon` base class).
**Rendering:** Inline SVG, `viewBox="0 0 16 16"` or `viewBox="0 0 1024 1024"`, `width: 1em; height: 1em`.
**Fill colors:** `fill: rgba(0,0,0,0.88)` (primary), `fill: #000; fill-opacity: 0.45` (secondary).
**Spinning:** `anticon-spin` with `loadingCircle` animation.

**Commonly used icons (observed across pages):**
`anticon-plus`, `anticon-close`, `anticon-close-circle`, `anticon-down`, `anticon-left`, `anticon-right`, `anticon-double-right`, `anticon-delete`, `anticon-eye`, `anticon-download`, `anticon-ellipsis`, `anticon-caret-down`, `anticon-appstore`, `anticon-bars`, `anticon-check`, `anticon-spin`

**Custom icons (bdh-micro-main- prefix):** `icon-caret-down`, `icon-cell`, `icon-collapsed`, `icon-dot`, `icon-ellipsis`, `icon-find-selection`, `icon-hidden`, `icon-label`, `icon-modifier-spin`, `icon-plus-sign`, `icon-remove-sign`.

---

## 11. LAYOUT TEMPLATES

### 11.1 Standard Page Layout

```
┌──────────────────────────────────────────────────┐
│ HEADER (fixed, 60px)                              │
│ [Logo] [SystemName] [──Top Nav Menu──] [Actions]  │
├────────┬─────────────────────────────────────────┤
│ SIDER  │ CONTENT AREA (#F7F9FD bg)               │
│ 200px  │ ┌─────────────────────────────────────┐ │
│ fixed  │ │ ProCard (transparent)                │ │
│ start  │ │  ┌─────────────────────────────────┐ │ │
│ 60px   │ │  │ White Card / Content             │ │ │
│ from   │ │  │ (padding: 16px–24px)             │ │ │
│ top    │ │  └─────────────────────────────────┘ │ │
│        │ └─────────────────────────────────────┘ │
├────────┴─────────────────────────────────────────┤
│ SIDER FOOTER (collapse button)                    │
└──────────────────────────────────────────────────┘
```

### 11.2 Full-Bleed Content Layout

Same as above but content area has `padding: 0` (used in development center, deploy pages). Card fills entire viewport height minus top-nav: `height: calc(100vh - 24px - var(--bdh-micro-main-base-top-nav-height))`.

### 11.3 System Selector Drawer

Opens from left. Header with search input (teal `#23ada4` hover/accent), category anchor pills (same teal accent), system cards in responsive grid with blurred-icon decorative background.

### 11.4 Page Action Pattern

**Form submission pages use the following action placement rules:**

| Rule | Description |
|------|-------------|
| **Card header** | Title + accent bar ONLY. Do NOT place "返回" or action buttons in the card header. |
| **Form actions** | At the bottom of the content area, after all form fields. Two buttons only: primary action + "取消". |
| **Button order** | Primary action button first (left), cancel button second (right). |
| **No breadcrumb** | Production pages do NOT have breadcrumb navigation. |
| **No reset button** | "重置" buttons are not used in production forms. |

**Standard form action bar:**
```
[✨ 提交 / 创建 / 保存]  [取消]
```
- Primary button: `btn-primary btn-lg` (40px height)
- Cancel button: `btn-default btn-lg`, calls `history.back()`
- Separated from content by `border-top: 1px solid #f0f0f0; padding-top: 16px`

### 11.5 Split-Panel Layout (Create & Detail Pages)

Used for creation/edit pages (form + editor) and detail pages (info + code viewer):

```
┌─ Card Header (title + accent bar) ──────────────────────┐
├─ Left (460px, border-right) ─┬─ Right (flex:1) ─────────┤
│  ▌ 创建方式                    │  ▌ Dockerfile 编辑        │
│  [Dockerfile] | [上传.tar.gz]  │  ┌─────────────────────┐ │
│                               │  │ 行号 │ 代码编辑区    │ │
│  ▌ 基础信息                    │  │  1   │ FROM ...      │ │
│  镜像名称*  [____________]    │  │  2   │ WORKDIR ...   │ │
│  镜像分类*  [▼ 请选择...]     │  │  ...  │ ...           │ │
│  功能*      [____________]    │  └─────────────────────┘ │
│  GPU 开关   [○──●]           │                          │
│  版本号     [1].[0].[0]      │                          │
│  描述       [____________]    │                          │
│  (上传模式→文件上传区+进度条)  │                          │
│                               │  [✨ 创建镜像]  [取消]   │
└───────────────────────────────┴──────────────────────────┘
```
- Left column: `width: 460px; flex-shrink: 0; border-right: 1px solid #f0f0f0; padding: 24px; overflow-y: auto`
- Right column: `flex: 1; padding: 24px; display: flex; flex-direction: column; min-width: 0`
- Mode toggle at top of left column, BEFORE "基础信息" section — because mode selection determines the entire creation flow
- At responsive breakpoint < 1200px, columns stack vertically

**Detail page variant** (image-custom-detail.html) — same CSS layout, different content:
- Left: Status banner → Info list (read-only) → Action bar
- Right: Code viewer (read-only) or tarball placeholder → Build log
- See §9.38 for full detail page specification.

### 11.3 Deployment Detail Drawer — "记录" (Record) Pattern

> Applies to: 模型部署 (Model Deployment) page. The drawer that opens when user clicks the "记录" button.

**Naming Convention:**
| Element | Name | Rationale |
|---------|------|-----------|
| Table button | 「记录」 | Permanent record of a deployment, available after deploy starts |
| Drawer title | 「部署详情 — {model} {version}」 | Full context |
| Timeline section | 「部署进度」 | Live progress indicators |
| Health check section | 「接口健康校验」 | Required vs optional split |
| Log viewer | 「部署日志」 | Terminal-style raw log output |
| Download button | 「下载完整日志」 | User can download the raw log |
| Refresh button | 「🔄 刷新」 | Manual re-fetch (visible only during deploying) |

**Interaction Model (Result-Only, No Polling):**
1. Click 「部署」→ Confirm popconfirm → Deploy starts → Table status changes to "部署中"
2. Drawer does **NOT** auto-open. Click 「记录」to open it manually.
3. Each click of 「记录」= one API request fetching current state (no auto-refresh, no polling)
4. While drawer is open during deployment: click 「🔄 刷新」to re-fetch latest status
5. After deployment completes (success/fail): click 「记录」to view the permanent record

**Button Availability:**

| Row Status | 「记录」Button | Tooltip |
|------------|--------------|---------|
| 未发布 | Disabled | 请先部署 |
| 待部署 | Disabled | 请先部署 |
| 部署中 | **Enabled** | — |
| 部署成功 | **Enabled** | — |
| 部署失败 | **Enabled** | — |

**Container Deployment Steps** (no image pulling):
- Pod 调度 (Pod scheduling) → 容器启动 (Container starting)
- Image is pre-built; there is NO image pull step during deployment
- Health check: 6 interfaces (3 required + 3 optional), parallel with retry

**Deploy Simulation Timing:**
| Phase | Duration |
|-------|----------|
| Trigger deploy | Instant |
| Container deploy | 2–8 min (Pod schedule + GPU allocate + container start) |
| Health checks | 0.5–2 min (6 interfaces parallel) |
| Total | 3–15 min (15 min timeout) |

**Hint Bar** (above table):
```
💡 提示：部署过程中可点击「记录」查看当前状态（手动刷新），部署完成后可查看完整流程与校验结果。预计耗时 3–15 分钟。
```

---

## 12. PAGE ATMOSPHERE & COLOR SCHEME

> **Source:** Extracted from 14 design_role HTML snapshots across all 6 modules.
> This section defines the **page-level** visual atmosphere — the "look and feel" that sits above
> individual component specs. Every page in the platform, including portal/landing pages, MUST
> conform to this atmosphere so the system reads as one coherent product.

### 12.1 Core Aesthetic: "White Cards on Light Gray"

The fundamental visual pattern across all pages:

```
┌────────────────────────────────────────────────────┐
│  BG-LIST (fixed, z-index: 0)                        │
│  ┌──────────────────────────────────────────────┐  │
│  │ Decorative image + bottom-left overlay       │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
│  HEADER (transparent + blur, z-index: 100)          │
│                                                     │
│  CONTENT AREA (transparent bg, z-index: 1)          │
│  ┌──────────────────────────────────────────────┐  │
│  │ ProCard (transparent wrapper)                 │  │
│  │  ┌──────────────────────────────────────────┐ │  │
│  │  │ White Card (#ffffff, radius: 8px)         │ │  │
│  │  │ Content...                                │ │  │
│  │  └──────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
│  SIDEBAR (transparent, 200px fixed)                 │
│  FOOTER (portal only: #001529)                      │
└────────────────────────────────────────────────────┘
```

### 12.2 Page-Level Color Map

| Layer | Color | Notes |
|-------|-------|-------|
| **Page background** (behind everything) | `#F7F9FD` | Content area bg; visible between cards |
| **Decorative bg-list** | `--sf-img-0` (base64 PNG) | Fixed, full-viewport, `z-index: 0`, `center/cover` |
| **bg-list ::after overlay** | 640×800px PNG, bottom-left | Subtle decorative glow/blur |
| **Header** | `transparent` + `backdrop-filter: blur(8px)` | Glass-like, NOT dark `#001529` |
| **Header bottom border** | `1px solid rgba(5,5,5,0.06)` | Extremely subtle separator |
| **Header padding** | `0 50px` | Matches content area padding |
| **Sidebar** | `transparent` | Glass-like, same as header |
| **ProCard (outer)** | `transparent` | Wrapper — lets page bg show through |
| **Card / Surface** | `#ffffff` | Content container |
| **Card border** | `1px solid #f0f0f0` or `rgba(5,5,5,0.06)` | Light separator |
| **Card shadow** | `0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px 0 rgba(0,0,0,0.02)` | Very subtle layered shadow |
| **Card border-radius** | `8px` | ant-card default |
| **Footer (portal)** | `#001529` | Matches dark sidebar theme |

### 12.3 Color Temperature

**Overall: Cool / Blue-dominant.** The platform reads as clean, professional, and data-focused.

| Aspect | Value |
|--------|-------|
| Dominant hue | Blue (`#2f54eb` family) |
| Secondary accent | Teal (`#23ada4`) |
| Warmth exceptions | Overview page has amber/gold gradient stat cards |
| White space | Generous — cards float on `#F7F9FD` with breathing room |

### 12.4 Section Background Alternation (Portal / Landing Pages)

Portal pages use alternating section backgrounds to create visual rhythm without breaking the cool atmosphere:

| Section Type | Background | Use Case |
|-------------|-----------|----------|
| **Hero / Banner** | `linear-gradient(170deg, #f0f5ff 0%, #f5f5f5 45%, rgba(35,173,164,0.06) 80%, #ffffff 100%)` | Top-of-page introduction |
| **Dark highlight** | `linear-gradient(135deg, #1d39c4, #2f54eb)` | Announcement bar only |
| **White sections** | `#ffffff` + `border-top: 1px solid rgba(5,5,5,0.06)` | Featured content (hot resources, demands) |
| **Gray sections** | `#F7F9FD` (page default) | General content, partners, cases |
| **Dashboard hero** | `linear-gradient(170deg, #f0f5ff 0%, #f5f5f5 50%, #ffffff 100%)` | Logged-in welcome area |

**Rule:** Portal hero gradients MUST stay within the `#f0f5ff → #f5f5f5 → #ffffff` range. Never use dark/saturated hero backgrounds — they will clash with the transparent header and the internal pages' cool atmosphere.

### 12.5 Hero Decorative Elements

Large hero areas may include subtle decorative elements (analogous to the bg-list on internal pages):

- **Radial gradient blobs**: `radial-gradient(circle, rgba(47,84,235,0.04) 0%, transparent 70%)` — positioned off-screen, very low opacity
- **Teal accent blob**: `radial-gradient(circle, rgba(35,173,164,0.05) 0%, transparent 70%)` — positioned opposite corner
- **Purpose**: Add depth without distracting from content
- **Constraint**: Opacity MUST stay ≤ 0.05 for primary, ≤ 0.06 for teal

### 12.6 Overall Palette Distribution

```
Primary actions, links, selected states  →  #2f54eb / #597ef7 / #1d39c4
Accent highlights, system selector       →  #23ada4
Success / online / done                  →  #52c41a
Warning / unpublished                    →  #ff9113
Danger / error / required                →  #ff4d4f
Text (primary → disabled)               →  rgba(0,0,0,0.88 → 0.25)
Borders (default → light)               →  #d9d9d9 → #f0f0f0
Surfaces (cards → page)                 →  #ffffff → #F7F9FD
Dark surfaces (footer, dark sider)      →  #001529
```

---

## 13. DARK MODE

- Trigger: `data-prefers-color="dark"` on `<html>`.
- Not currently active in provided pages (all use `data-prefers-color="light"`).
- Dark mode assets exist: background `rgb(28,30,33)`, scrollbar `rgba(255,255,255,0.25)`, sidebar dark `#001529`, `&lt;meta name="theme-color" content="#000000"&gt;`.
- When generating dark-mode-compatible HTML, include both `:where([data-prefers-color="light"])` and `:where([data-prefers-color="dark"])` scoped rules.

---

## 14. CSS ARCHITECTURE

### 13.1 Scoping Layers

| Layer | Prefix | Purpose |
|-------|--------|---------|
| **Main shell** | `bdh-micro-main-*` | Custom branded component library (Ant Design fork) |
| **Pro Layout** | `bdh-micro-main-pro-*` | Ant Design Pro layout components |
| **Ant Design (shell)** | `css-1e40c9g`, `css-17k5gbq`, `css-1a364jj` | CSS-in-JS hash scopes for shell |
| **Micro-app** | `ant-*` (scoped by `data-qiankun`) | Standard Ant Design inside Qiankun |
| **Micro-app CSS** | `css-x1t4g7`, `css-1cpzcje`, etc. | CSS-in-JS hash scopes for micro-app |
| **Page CSS Modules** | Hash-based: `_6e2364b...`, `a65b15c8...`, etc. | Page-specific component styles |
| **CSS Modules (named)** | `Container-_8736e8b...`, `LogoContainer-_6b4ad9...`, `MenuItem-_8736e8b...` | App-level named components |

### 13.2 Technology Stack

| Technology | Usage |
|------------|-------|
| **UI Framework** | Ant Design 5 + Ant Design Pro (ProLayout, ProCard) |
| **CSS-in-JS** | Emotion (`@emotion/css`) + Ant Design `cssinjs` (rc-util/cssinjs) |
| **Micro-Frontend** | Qiankun 2.10.x (`data-qiankun`, `experimentalStyleIsolation: true`) |
| **Code Editor** | Monaco Editor 0.50.0 |
| **Rich Text** | WangEditor (Quill-based) |
| **Graph Editor** | X6 (AntV) for workflow/graph visualizations |
| **Font** | System native font stack |

---

## 15. CODE GENERATION RULES

When generating HTML/CSS prototypes for this platform, follow these rules in order:

1. **Always use the system font stack.** Never import Google Fonts or use custom web fonts unless explicitly instructed.

2. **Default everything to 14px / 6px radius / 32px height.** Every interactive element starts here. Deviate only with explicit justification.

3. **Use `#2f54eb` as THE primary color.** This, not Ant Design's default `#1677ff`, is the brand blue. Use `#23ada4` for accent/highlight moments (system selector, special hover states).

4. **All text colors use `rgba(0,0,0,X)` notation** — `0.88` primary, `0.65` secondary, `0.45` tertiary, `0.25` disabled. Never use solid hex for text on white backgrounds.

5. **Card titles get a left accent bar** — a `2px × 14px` `#2f54eb` rectangle with `border-radius: 1px` and `margin-right: 8px` before the title text.

6. **Tables default to no-bordered style** — use `.no-bordered-table` pattern: no borders on header-bottom or cell-bottom, `12px 8px` cell padding, `font-weight: 400` header.

7. **Status chips are `56px × 20px`, `border-radius: 4px`, `font-size: 12px`** — use the three-chip palette: green (success), blue (pending), orange (unpublished/warning).

8. **Form layout is horizontal** with `ant-col-8` or `ant-col-12` labels, `24px` margin-bottom per form item, required mark in `#ff4d4f` with SimSun font.

9. **Header is `60px` fixed, sidebar is `200px` fixed starting at `60px`** — use mix/top-nav layout variant.

10. **Transitions are `0.2s→0.3s` with `cubic-bezier(0.645, 0.045, 0.355, 1)`** — this is the standard Ant Design motion curve.

11. **Break cards at 1070px (1-col), 1270px (2-col), 1570px (3-col), 1970px (4-col)** for responsive grid layouts.

12. **Include both light and dark mode** — scope with `[data-prefers-color="light"]` / `[data-prefers-color="dark"]`. Dark mode uses `rgb(28,30,33)` background.

13. **Buttons follow Ant Design 5 class convention:** `ant-btn ant-btn-color-{color} ant-btn-variant-{variant}` — where variant is `solid`/`outlined`/`text`/`link`/`dashed`/`filled` and color is `primary`/`default`/`dangerous`.

14. **Icons are 1em inline SVGs** from Ant Design Icons set, with `fill: rgba(0,0,0,0.88)` for primary and `fill-opacity: 0.45` for secondary.

15. **Page content wraps in a transparent ProCard** → white inner card → actual content. This is the standard nesting pattern.

16. **Do NOT add breadcrumb navigation** — the production environment does not use breadcrumbs on internal pages.

17. **Card headers contain ONLY the title + accent bar** — do not add action buttons (like "返回") to card headers.

18. **Form action buttons go at the bottom** of the content area, in a `border-top` separated bar: primary action + "取消" only. No "重置" button.

19. **PRD field descriptions use `.prd-panel` (NOT `.field-hint`)** — hidden by default, toggled via "📋 字段说明" button. Content MUST be business-language PRD descriptions (purpose, use cases, examples), NEVER implementation notes like "输入框，必填项". See §9.25.

20. **Upload progress bars use three distinct visual states** — uploading (striped animated blue bar + speed + cancel), done (green border/bg + checkmark), failed (red border/bg + error message).

21. **Mode toggles belong at the TOP-LEFT** of the form flow, before the fields they control, not in the top-right corner. When a toggle switches the entire page content, it acts as the first decision in the form hierarchy.

22. **Label fields using the API field names** from the prototype — do not invent alternate names. E.g., `function` → "功能" (not "功能标识"), `description` → "描述" (not "镜像描述").

23. **The decorative bg-list** (base64 PNG, `--sf-img-0`) is a fixed full-viewport background layer at `z-index: 0`. Include it on all internal pages.

24. **Form validation is inline + on-blur** — show `.field-error-msg` (12px, #ff4d4f) below the field. Validate on blur. On submit, validate ALL fields, scroll to first error, and show error toast. See §9.26.

25. **Use confirmation modals before destructive or finalizing actions** — submit, delete, and unsaved-changes-warning all use `.modal-overlay` + `.modal-box` (420px wide). See §9.27.

26. **Show toast notifications for async results** — success (#f6ffed), error (#fff2f0), info (#f0f5ff). Auto-dismiss after 4s. Position: fixed, top: 76px, right: 24px. See §9.28.

27. **Submit button shows loading state** — spinner + "提交中..." text, `pointer-events: none; opacity: 0.65`. Simulate 1.5s API call. See §9.31.

28. **Detect unsaved changes** — compare form state to initial state on "取消" click and `beforeunload`. Show warning modal with "放弃并离开" (danger style) and "继续编辑" options.

29. **Image management uses card grid layout** — `.image-card-grid` with `repeat(auto-fill, minmax(340px, 1fr))`. Each card shows: icon (category emoji), name, address, status chip, metadata, creation time, edit/delete actions. See §9.29.

30. **Card list pages include a toolbar** — search input (max 320px) + category filter + status filter + result count + "创建" button. All filters trigger instant re-filtering. See §9.30.

31. **Version number fields accept alphanumeric text** (NOT `type="number"`) — support semantic versioning with pre-release tags like `1.0.3-beta`. Pattern: `/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/`.

32. **Use `.field-format-hint` for always-visible input syntax guides** — `12px`, `rgba(0,0,0,0.45)`, placed between the input and error message. Content is formatting syntax only (HOW), never business purpose (WHY). See §9.32.

33. **Edit mode uses `?edit=<id>` URL parameter** — list page navigates to create page with the ID. Create page pre-fills editable fields, locks non-editable ones with `[readonly]`/`[disabled]`/`.locked`, and shows an `.edit-badge` in the card header. See §9.33.

34. **Text file upload reuses `.upload-zone` styling** — same dashed border, hover, and file card as tarball upload (§9.20). After upload, read file via `FileReader.readAsText()` and fill the code editor. Compact padding (`28px` vs `40px`). See §9.34.

35. **Every PRD prototype page MUST include the interaction guide system** — floating "🧪 交互演示指引" button at bottom-right + overlay drawer with tables documenting every interactive state, trigger method, and expected result. See §9.35.

36. **Mode-dependent fields toggle visibility in `switchMode()`** — fields relevant only to one mode must show/hide with the mode switch. Use `element.style.display = mode === 'target' ? '' : 'none'`. See §9.36.

37. **Card edit buttons follow status-based permission rules** — only `warning` (未发布) and `error` (构建失败) status cards show "✏️ 编辑". `success` and `pending` cards show "👁️ 查看" instead. See §9.37.

## 16. QUICK-REFERENCE CHEAT SHEET

| Property | Value |
|----------|-------|
| Base font-size | `14px` |
| Border-radius | `6px` |
| Interactive height | `32px` |
| Header height | `60px` / `64px` |
| Top-nav inner bar | `40px` height, `margin: 12px 0` |
| Sidebar width | `200px` |
| Primary blue | `#2f54eb` |
| Accent teal | `#23ada4` |
| Text primary | `rgba(0,0,0,0.88)` |
| Text secondary | `rgba(0,0,0,0.65)` |
| Border color | `#d9d9d9` |
| Page background | `#F7F9FD` |
| Focus outline | `4px solid #adc6ff` |
| Transition | `0.2s–0.3s cubic-bezier(0.645, 0.045, 0.355, 1)` |
| Button padding | `4px 15px` |
| Form item gap | `24px` |
| Table cell padding | `12px 8px` |
| Status chip size | `56px × 20px`, `border-radius: 4px` |
| Card accent bar | `2px × 14px`, `#2f54eb`, `border-radius: 1px` |
| Scrollbar width | `8px` (default) / `4px` (custom) |
| Progress bar height | `6px`, border-radius `3px` |
| Progress bar fill | `linear-gradient(90deg, #2f54eb, #597ef7)` + striped overlay |
| Upload zone border | `1.5px dashed #d9d9d9`, border-radius `8px` |
| Toggle switch | `44px × 22px`, pill `99px` radius |
| Field error message | `12px`, `#ff4d4f`, `display: flex` when `.visible` |
| Error input border | `#ff4d4f !important`, focus ring `rgba(255,77,79,0.1)` |
| Modal width | `420px`, max `90vw` |
| Modal overlay | `rgba(0,0,0,0.45)`, z-index `1000` |
| Toast top/right | `top: 76px; right: 24px`, z-index `2000` |
| Toast auto-dismiss | `4s` |
| PRD toggle btn height | `28px`, font-size `13px` |
| PRD panel bg | `#fafbff`, left border `3px solid #2f54eb` |
| PRD panel font | `13px`, `rgba(0,0,0,0.65)`, `line-height: 1.7` |
| Image card min-width | `340px`, gap `16px` |
| Image card icon size | `40px × 40px`, border-radius `8px` |
| Image card icon bg | `linear-gradient(135deg, rgba(47,84,235,0.1), rgba(117,102,255,0.1))` |
| Image card hover shadow | `0 2px 8px rgba(0,0,0,0.08)` |
| Empty state icon | `64px`, opacity `0.3` |
| Page button min-width | `32px × 32px`, border-radius `6px` |
| Btn loading spinner | `14px × 14px`, 2px border, spin 0.6s |
| Version input pattern | `/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/` (alphanumeric, NOT number-only) |
| Field format hint | `12px`, `rgba(0,0,0,0.45)`, always visible, syntax-only |
| Edit mode badge | `#fffbe6` bg, `#ffe58f` border, `#d48806` text, `12px` |
| Edit mode locked field | `background: #f5f5f5; color: rgba(0,0,0,0.45); cursor: not-allowed` |
| Text file upload padding | `28px` (vs `40px` for tarball) |
| Text file upload size limit | ≤10MB |
| Guide trigger button | `bottom: 24px; right: 24px; border-radius: 20px; height: 40px` |
| Guide drawer width | `680px`, max `90vw`, max-height `80vh`, border-radius `12px` |
| Guide drawer z-index | `2000` |
| Card actions | All cards → 📋 详情 (detail page); `unbuilt` + `failed` also → ✏️ 编辑 (create page edit mode) |
| Detail page URL pattern | `image-custom-detail.html?id=<id>` |
| Edit mode URL pattern | `image-custom-create.html?edit=<id>` |
| Image name validation | `/^[a-z][a-z0-9-]*$/`, max 20 chars |
| Status lifecycle | 未构建 → 构建中 → 构建成功/构建失败 → 已发布 |
| Detail page layout | Left 460px (info + actions), Right flex:1 (code viewer + build log) |
| Detail build simulation | 600ms/step log output, 90% success / 10% failure |
| Published chip color | `#23ada4` text, `#e6fffb` background |
| Unbuilt chip color | `rgba(0,0,0,0.65)` text, `#f0f0f0` background |
| Function name validation | `/^[a-z0-9][a-z0-9-]*$/`, max 30 chars |
| Field hint font | `12px`, `rgba(0,0,0,0.45)` |
| Form actions | `border-top: 1px solid #f0f0f0; padding-top: 16px` |
| Create left column | `460px`, right `flex: 1` |
| Code editor bg | `#1e1e2e` (body), `#252535` (line numbers) |
| Menu selected underline | 10px tall base64 PNG, `center/100% 100% no-repeat` |
| Logo gradient | `#7566FF` → `#2F54EB`, 6 stops |
| System name | `font-size: 20px; font-weight: 600` |
| Button padding | `4px 15px` |
| Form item gap | `24px` |
| Table cell padding | `12px 8px` |
| Status chip size | `56px × 20px`, `border-radius: 4px` |
| Card accent bar | `2px × 14px`, `#2f54eb`, `border-radius: 1px` |
| Scrollbar width | `8px` (default) / `4px` (custom) |

---
