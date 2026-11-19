/* 智慧农业平台 · 全项目字段与交互说明 · 2026-11-18
   按页面及当前业务视图提供说明。 */
(function(){
  'use strict';
  var BRAND = '#005653';
  var DOCS = {};

  /* ========================== 渲染层（通用） ============================ */
  var CSS = [
    '.mtdev-group{position:fixed;right:24px;bottom:24px;z-index:960;display:flex;gap:8px;width:max-content;cursor:grab;user-select:none;transition:opacity .2s}',
    'body:has(dialog[open]) .mtdev-group,.mtdev-group.mtdev-dim{opacity:0;pointer-events:none}',
    '.mtdev-btn{display:flex;align-items:center;gap:6px;height:38px;padding:0 16px;border-radius:19px;font-size:14px;font-weight:500;white-space:nowrap;border:1px solid transparent;font-family:inherit;cursor:pointer;transition:all .2s}',
    '.mtdev-btn.guide{background:' + BRAND + ';color:#fff;box-shadow:0 4px 12px rgba(0,86,83,.28)}',
    '.mtdev-btn.guide:hover{background:#0a6b66;transform:translateY(-1px)}',
    '.mtdev-btn.field{background:#edf6f2;color:' + BRAND + ';border-color:#c6ddd4;box-shadow:0 4px 12px rgba(0,86,83,.12)}',
    '.mtdev-btn.field:hover{background:#dceee6;transform:translateY(-1px)}',
    '.mtdev-mask{display:none;position:fixed;inset:0;background:rgba(10,30,28,.45);z-index:12000;align-items:center;justify-content:center}',
    '.mtdev-mask.on{display:flex}',
    '.mtdev-drawer{background:#fff;border-radius:8px;width:780px;max-width:92vw;max-height:84vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 12px 40px rgba(6,40,38,.28)}',
    '.mtdev-hd{display:flex;align-items:center;gap:10px;padding:16px 22px;border-bottom:1px solid #dce5e9;background:#f4f8f5;flex-shrink:0}',
    '.mtdev-hd b{font-size:16px;color:#10213a;flex:1;font-weight:600}',
    '.mtdev-hd .p{font-size:12px;color:#526078;white-space:nowrap}',
    '.mtdev-x{font-size:16px;color:#526078;background:none;border:0;cursor:pointer;padding:2px 8px;border-radius:4px;line-height:1.4}',
    '.mtdev-x:hover{color:#10213a;background:#e6efeb}',
    '.mtdev-bd{padding:20px 22px;overflow-y:auto;flex:1;color:#10213a;font-size:13.5px;line-height:1.7}',
    '.mtdev-tabs{display:flex;flex-wrap:wrap;gap:2px;border-bottom:1px solid #dce5e9;margin:-4px 0 16px}',
    '.mtdev-tab{background:none;border:0;font-family:inherit;padding:8px 14px;font-size:13.5px;color:#526078;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px;white-space:nowrap}',
    '.mtdev-tab:hover{color:' + BRAND + '}',
    '.mtdev-tab.on{color:' + BRAND + ';border-bottom-color:' + BRAND + ';font-weight:600}',
    '.mtdev-sec{margin-bottom:22px}', '.mtdev-sec:last-child{margin-bottom:2px}',
    '.mtdev-sec h4{margin:0 0 10px;font-size:14px;color:#10213a;font-weight:600}',
    '.mtdev-intro{background:#f4f8f5;border-left:3px solid ' + BRAND + ';padding:12px 14px;border-radius:0 6px 6px 0;margin-bottom:18px;color:#31445c}',
    '.mtdev-tw{overflow-x:auto;border:1px solid #dce5e9;border-radius:6px}',
    '.mtdev-tw table{width:100%;border-collapse:collapse;font-size:12.5px;table-layout:auto}',
    '.mtdev-tw-fx table{table-layout:fixed}',
    '.mtdev-tw-fx .mtdev-tag{white-space:normal}',
    '.mtdev-tw th,.mtdev-tw td{padding:8px 11px;text-align:left;border-bottom:1px solid #eef3f1;vertical-align:top;white-space:normal;word-break:break-word;overflow-wrap:anywhere}',
    '.mtdev-tw th{background:#f4f8f5;color:#526078;font-weight:600;white-space:nowrap;position:sticky;top:0}',
    '.mtdev-tw tr:last-child td{border-bottom:0}',
    '.mtdev-tw td:first-child{font-weight:600;color:#10213a}',
    '.mtdev-tw td code,.mtdev-code{font-family:ui-monospace,SFMono-Regular,Consolas,monospace;background:#f4f8f5;border:1px solid #e4ecea;border-radius:3px;padding:0 4px;font-size:12px;color:#0a4b48;word-break:break-all;overflow-wrap:anywhere}',
    '.mtdev-note{margin-top:8px;font-size:12px;color:#526078;line-height:1.65}',
    '.mtdev-tag{display:inline-block;padding:1px 6px;border-radius:3px;font-size:11px;font-weight:600;white-space:nowrap}',
    '.mtdev-tag.do{background:#e6f4ec;color:#1a7f5a}',
    '.mtdev-tag.no{background:#fdecea;color:#c0392b}',
    '.mtdev-tag.req{background:#fdecea;color:#c0392b}',
    '.mtdev-tag.mid{background:#eaf0fb;color:#3b6fb6}',
    '.mtdev-tag.info{background:#edf6f2;color:' + BRAND + '}',
    '.mtdev-tag.opt{background:#f0f2f5;color:#526078}',
    '.mtdev-tag.warn{background:#fdf4e3;color:#b7791f}',
    '.mtdev-flow{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:2px 0 14px}',
    '.mtdev-flow i{font-style:normal;background:#edf6f2;color:' + BRAND + ';border:1px solid #c6ddd4;border-radius:14px;padding:3px 10px;font-size:12px}',
    '.mtdev-flow s{text-decoration:none;color:#7d8c9c;font-size:12px}'
  ].join('');

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* 单元格状态标记：以 {{tag}} 开头时渲染为彩色标签
     tag ∈ do 可用·免申请（绿） / mid 需申请（蓝） / opt 不显示·不适用（灰） / warn 注意（黄） / no 禁用（红） / info 品牌色 */
  function cellHTML(c) {
    var s = (c == null ? '' : String(c));
    var m = /^\{\{(\w+)\}\}([\s\S]*)$/.exec(s);
    if (m) return '<span class="mtdev-tag ' + m[1] + '">' + m[2] + '</span>';
    return s;
  }

  function tableHTML(sec) {
    var h = '<div class="mtdev-tw' + (sec.w ? ' mtdev-tw-fx' : '') + '"><table>';
    if (sec.w) {
      h += '<colgroup>';
      sec.w.forEach(function (w) { h += '<col style="width:' + w + '">'; });
      h += '</colgroup>';
    }
    h += '<thead><tr>';
    sec.head.forEach(function (c) { h += '<th>' + c + '</th>'; });
    h += '</tr></thead><tbody>';
    sec.rows.forEach(function (r) {
      h += '<tr>';
      r.forEach(function (c) { h += '<td>' + cellHTML(c) + '</td>'; });
      h += '</tr>';
    });
    return h + '</tbody></table></div>' + (sec.note ? '<p class="mtdev-note">' + sec.note + '</p>' : '');
  }

  function tabBody(tab) {
    var h = '';
    (tab.sections || []).forEach(function (s) {
      h += '<div class="mtdev-sec"><h4>' + s.title + '</h4>' + tableHTML(s) + '</div>';
    });
    return h;
  }

  function drawerHTML(overlayId, bodyId, titleId) {
    return '<div class="mtdev-mask" id="' + overlayId + '">' +
      '<div class="mtdev-drawer" role="dialog" aria-modal="true" aria-labelledby="' + titleId + '">' +
      '<div class="mtdev-hd"><b id="' + titleId + '"></b><span class="p">2026-11-18 更新</span>' +
      '<button class="mtdev-x" type="button" aria-label="关闭说明" title="关闭（Esc）">✕</button></div>' +
      '<div class="mtdev-bd" id="' + bodyId + '"></div></div></div>';
  }

  function renderDrawer(mask, doc, title, tabs, prefix, foot) {
    mask.querySelector('.mtdev-hd b').textContent = title + ' — ' + doc.name;
    var body = mask.querySelector('.mtdev-bd');
    var html = '<div class="mtdev-intro">' + doc.intro + '</div><div class="mtdev-tabs" role="tablist" aria-label="' + title + '">';
    tabs.forEach(function (tab, i) {
      html += '<button type="button" class="mtdev-tab" id="' + prefix + 'Tab' + i + '" role="tab" aria-controls="' + prefix + i + '">' + esc(tab.label) + '</button>';
    });
    html += '</div>';
    tabs.forEach(function (tab, i) {
      html += '<div class="mtdev-tabpane" id="' + prefix + i + '" role="tabpanel" aria-labelledby="' + prefix + 'Tab' + i + '">' + tabBody(tab) + '</div>';
    });
    body.innerHTML = html + (foot || '');
    bindTabs(body);
  }

  function selectTab(body, index) {
    body.querySelectorAll('.mtdev-tab').forEach(function (tab, i) {
      tab.classList.toggle('on', i === index);
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    body.querySelectorAll('.mtdev-tabpane').forEach(function (pane, i) {
      pane.style.display = i === index ? '' : 'none';
    });
  }

  function bindTabs(body) {
    var tabs = Array.from(body.querySelectorAll('.mtdev-tab'));
    tabs.forEach(function (tab, index) {
      tab.onclick = function () { selectTab(body, index); };
      tab.onkeydown = function (event) {
        var next = index;
        if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        else if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        selectTab(body, next);
        tabs[next].focus();
      };
    });
    selectTab(body, 0);
    body.scrollTop = 0;
  }


  /* 悬浮按钮组与抽屉头部可拖拽（拖完抑制一次点击，避免误触） */
  function draggable(el, handle, onMove) {
    handle = handle || el;
    var st = null;
    handle.addEventListener('mousedown', function (e) {
      if (e.button !== 0 || (e.target.closest && e.target.closest('.mtdev-x'))) return;
      var r = el.getBoundingClientRect();
      st = { sx: e.clientX, sy: e.clientY, ox: r.left, oy: r.top, w: r.width, h: r.height, moved: false };
      e.preventDefault();
    });
    document.addEventListener('mousemove', function (e) {
      if (!st) return;
      var dx = e.clientX - st.sx, dy = e.clientY - st.sy;
      if (!st.moved && Math.abs(dx) + Math.abs(dy) > 4) st.moved = true;
      if (!st.moved) return;
      if (el.style.position !== 'fixed') {
        el.style.position = 'fixed'; el.style.margin = '0';
        el.style.left = st.ox + 'px'; el.style.top = st.oy + 'px';
        el.style.right = 'auto'; el.style.bottom = 'auto';
      }
      var mx = Math.max(0, window.innerWidth - st.w), my = Math.max(0, window.innerHeight - st.h);
      el.style.left = Math.min(mx, Math.max(0, st.ox + dx)) + 'px';
      el.style.top = Math.min(my, Math.max(0, st.oy + dy)) + 'px';
      if (onMove) onMove();
    });
    document.addEventListener('mouseup', function () {
      if (!st) return;
      if (st.moved) {
        var sup = function (ev) { ev.preventDefault(); ev.stopPropagation(); document.removeEventListener('click', sup, true); };
        document.addEventListener('click', sup, true);
      }
      st = null;
    });
  }


  DOCS = {
  "__default__": {
    "name": "页面说明",
    "intro": "请选择当前页面的字段说明或交互演示指引。",
    "field": [
      {
        "label": "说明范围",
        "sections": [
          {
            "title": "说明范围",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "当前页面",
                "按本页已有内容",
                "字段与操作以当前页面及所属模块说明为准。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "说明入口",
        "sections": [
          {
            "title": "说明入口",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "打开说明",
                "右下角字段说明 / 交互演示指引",
                "切换页签查看，点击关闭、遮罩或按 Esc 关闭。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "数据中心-数据集列表页.html": {
    "name": "数据中心 · 数据集列表",
    "intro": "公开数据目录只展示已上架数据。筛选与详情使用同一套数据字段。",
    "field": [
      {
        "label": "展示与筛选",
        "sections": [
          {
            "title": "展示与筛选",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "名称、封面、简介",
                "资源展示",
                "管理端为已上架数据提供名称、封面和一句简介。原型目录也提供示例数据。"
              ],
              [
                "研究方向、作物",
                "多选",
                "对应后台数据基本信息的研究方向和作物。"
              ],
              [
                "区域、覆盖年份",
                "区划多选 / 年份多选或范围",
                "区域选择器应用后生效。覆盖年份可选既有年份，或输入 1900–2100 的年份范围。"
              ],
              [
                "更新时间",
                "单选快捷项或日期范围",
                "按记录更新时间过滤。"
              ],
              [
                "专题",
                "专题区块切换",
                "按关联专题过滤数据。"
              ],
              [
                "数据格式、标注情况",
                "多选筛选及卡片标签",
                "根据记录中的文件类型和标注信息展示。"
              ],
              [
                "关键词、排序、每页条数",
                "搜索 / 综合、最近更新、申请次数 / 8、12、24",
                "关键词可匹配资源名称、作物、区域等内容。"
              ],
              [
                "成果数据、提供方",
                "来源标识与提供单位",
                "成果接入记录保留其来源，提供方来自数据集基本信息。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "筛选与浏览",
        "sections": [
          {
            "title": "筛选与浏览",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "组合筛选",
                "勾选左侧选项、专题或选择覆盖区域",
                "更新命中结果、条件标签和数量；支持清空条件。"
              ],
              [
                "年份范围",
                "覆盖年份 → 自定义年份范围 → 应用",
                "至少填写一端。起年晚于止年时提示，使用自定义范围会清除年份多选。"
              ],
              [
                "关键词、排序",
                "搜索 / 排序菜单",
                "按当前条件展示结果；排序不改变资源内容。"
              ],
              [
                "展示方式",
                "卡片 / 列表",
                "切换排列方式，筛选条件保持。"
              ],
              [
                "详情",
                "查看详情",
                "携带资源标识或名称进入对应详情，保留记录对应关系。"
              ],
              [
                "分页",
                "每页条数、上一页 / 下一页",
                "在当前筛选结果中分页。"
              ],
              [
                "取消条件",
                "删除已选条件标签或清空",
                "移除指定条件或恢复默认筛选并刷新结果。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "数据中心-数据集详情.html": {
    "name": "数据中心 · 数据详情",
    "intro": "详情的主要业务入口为申请使用和按条件显示的影像查询。预览用于查看样例。",
    "field": [
      {
        "label": "详情字段",
        "sections": [
          {
            "title": "详情字段",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "数据名称、封面、简介、提供方",
                "数据集基本信息",
                "从列表进入时按同一数据标识读取。"
              ],
              [
                "作物、覆盖区域、覆盖年份、研究方向",
                "数据基本信息",
                "展示当前记录已填写的值。"
              ],
              [
                "文件类型、标注情况",
                "展示标签",
                "按数据管理保存的类型和标注信息展示。"
              ],
              [
                "数据介绍、数据预览",
                "介绍内容与样例",
                "介绍展示概述、适用方向和关键参数；预览使用已保存的样例材料。"
              ],
              [
                "是否包含地理信息数据",
                "是 / 否",
                "后台值为是时显示“影像查询”。样例预览按所提供材料展示。"
              ]
            ]
          }
        ]
      },
      {
        "label": "使用申请",
        "sections": [
          {
            "title": "使用申请",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "数据名称、文件类型、申请时间",
                "自动带出",
                "用于确认本次申请的数据记录。"
              ],
              [
                "授权用途",
                "必选单选",
                "模型训练 · 真值输入、施肥分区研究、核查比对、产量反演验证、生态监测、科研分析（其他）。"
              ],
              [
                "拟用科研开发空间范围（备注）",
                "选填多行文本",
                "填写使用场景及范围。"
              ],
              [
                "数据使用承诺",
                "必勾选",
                "数据在平台科研开发空间内使用。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "详情操作",
        "sections": [
          {
            "title": "详情操作",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "介绍 / 预览",
                "切换数据介绍、数据预览 Tab",
                "分别展示介绍与已保存样例。"
              ],
              [
                "申请使用",
                "科研负责人点击“申请使用”",
                "按功能授权打开申请。已提交审批的入口提示待审批，已有权限时按实际按钮进入使用。"
              ],
              [
                "提交申请",
                "选择用途并勾选承诺 → 提交",
                "提交后可在个人中心“我的数据”的使用申请记录中查看。"
              ],
              [
                "影像查询",
                "地理信息字段为是时点击该入口",
                "带当前数据进入地图查询，支持框选和区划筛选。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "map-engine.html": {
    "name": "数据中心 · 影像查询",
    "intro": "从数据详情打开影像查询。在当前数据下按地图框选或行政区划查询。",
    "field": [
      {
        "label": "查询范围",
        "sections": [
          {
            "title": "查询范围",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "查询数据",
                "来源数据记录",
                "从详情携带，查询结果保持属于当前数据。"
              ],
              [
                "地图框选",
                "由两个角点确定矩形",
                "点选第一个角点后，再点第二个角点。"
              ],
              [
                "区划筛选",
                "省、市、区县级联",
                "选择上级后更新下级选项；可按所选区划范围查询。"
              ],
              [
                "查询结果",
                "结果列表 / 空结果",
                "与本次查询范围对应。"
              ],
              [
                "底图",
                "矢量图 / 影像图",
                "默认显示影像图。切换底图保留已选查询范围。"
              ]
            ]
          }
        ]
      },
      {
        "label": "页面控件取值",
        "sections": [
          {
            "title": "页面控件取值",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "省份",
                "下拉",
                "请选择省份 / 黑龙江省"
              ],
              [
                "城市",
                "下拉",
                "全部城市 / 哈尔滨市 / 佳木斯市 / 双鸭山市 / 牡丹江市 / 鹤岗市 / 黑河市 / 绥化市"
              ],
              [
                "区县",
                "下拉",
                "全部区县"
              ]
            ],
            "note": "仅记录当前页面已有的选项和长度限制；业务必填与联动规则见相应业务页签。"
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "地图查询",
        "sections": [
          {
            "title": "地图查询",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "选择范围",
                "地图框选 → 在地图分别点选两个角点；或切换区划筛选",
                "选定矩形后可查询。区划可按已选省、市或区县查询。"
              ],
              [
                "执行查询",
                "查询",
                "展示命中影像及数量。点击影像条目可在地图定位。"
              ],
              [
                "重置",
                "重置",
                "清空本次范围条件与结果。"
              ],
              [
                "地图操作",
                "缩放、移动、底图切换",
                "沿用地图交互；不新增专题定制查询字段。"
              ],
              [
                "返回数据",
                "返回数据详情",
                "回到进入查询时的数据集。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "模型中心-模型列表页（调整）.html": {
    "name": "模型中心 · 模型列表",
    "intro": "公开目录与后台上架版本联动，筛选和权限按当前模型记录计算。",
    "field": [
      {
        "label": "模型展示字段",
        "sections": [
          {
            "title": "模型展示字段",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "模型名称、编号、版本、封面、简介",
                "来自上架模型版本",
                "列表与详情使用相同资源标识；简介来自后续介绍编辑。"
              ],
              [
                "模型类型",
                "三类模型类型",
                "基础与农业增强模型 / 农业专业模型 / 农业机理模型。"
              ],
              [
                "业务能力、适用作物、技术任务",
                "多选标签",
                "分别对应后台业务分类、作物、技术任务。"
              ],
              [
                "更新时间",
                "更新时间范围",
                "用于列表更新时间筛选。"
              ],
              [
                "模型介绍",
                "模型概述、业务能力、使用说明",
                "输入输出规范与示例分开展示；示例支持文本、文件、图片。"
              ],
              [
                "提供方、来源与权属",
                "文本 / 关联关系",
                "提供单位和权属主体独立；成果关系与来源模型关联保持。"
              ],
              [
                "在线试用、申请使用、对外提供",
                "按服务及账号计算的入口",
                "列表与详情都读取同一权限判定，不因进入详情而绕过按钮限制。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "筛选与收藏",
        "sections": [
          {
            "title": "筛选与收藏",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "筛选",
                "模型类型、业务能力、作物、更新时间、技术任务",
                "组合过滤结果；更新时间为单选，分类标签按当前控件多选。"
              ],
              [
                "关键词",
                "搜索名称或业务问题",
                "与现有筛选共同作用。"
              ],
              [
                "仅我收藏",
                "勾选仅我收藏",
                "按当前账号的收藏记录筛选。"
              ],
              [
                "分页",
                "每页条数 / 页码",
                "切换当前结果页，不改变筛选或权限。"
              ],
              [
                "清除筛选",
                "条件条逐项移除 / 清空",
                "同步更新命中数量和分页。"
              ]
            ]
          }
        ]
      },
      {
        "label": "入口与权限联动",
        "sections": [
          {
            "title": "入口与权限联动",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "查看模型",
                "列表标题 / 详情入口",
                "打开对应模型及版本，不改写资源权限。"
              ],
              [
                "在线试用",
                "当前服务已开启试用时点击",
                "校验登录及试用可用状态后进入运行台。"
              ],
              [
                "申请使用 / 直接使用",
                "按按钮实际显示操作",
                "同时结合角色功能配置、所属范围与具体模型授权；禁止使用不能经详情页绕过。"
              ],
              [
                "申请中的资源",
                "重复进入列表或详情",
                "读取同一申请记录与状态。"
              ],
              [
                "介绍与使用说明",
                "详情模型介绍",
                "展示已编辑内容及规范、输入输出示例；介绍保存与按钮权限各自按原数据维护。"
              ],
              [
                "版本与成果关系",
                "详情底部的版本迭代 / 成果转化",
                "查看对应关联记录，保留模型与版本关系。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "模型中心-模型详情（调整）.html": {
    "name": "模型中心 · 模型详情",
    "intro": "模型介绍、应用案例、对外提供、权属和版本关系来自同一模型记录。",
    "field": [
      {
        "label": "模型展示字段",
        "sections": [
          {
            "title": "模型展示字段",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "模型名称、编号、版本、封面、简介",
                "来自上架模型版本",
                "列表与详情使用相同资源标识；简介来自后续介绍编辑。"
              ],
              [
                "模型类型",
                "三类模型类型",
                "基础与农业增强模型 / 农业专业模型 / 农业机理模型。"
              ],
              [
                "业务能力、适用作物、技术任务",
                "多选标签",
                "分别对应后台业务分类、作物、技术任务。"
              ],
              [
                "更新时间",
                "时间",
                "用于当前更新时间筛选；不以新的业务状态替代。"
              ],
              [
                "模型介绍",
                "模型概述、业务能力、使用说明",
                "输入输出规范与示例分开展示；示例支持文本、文件、图片。"
              ],
              [
                "提供方、来源与权属",
                "文本 / 关联关系",
                "提供单位和权属主体独立；成果关系与来源模型关联保持。"
              ],
              [
                "在线试用、申请使用、对外提供",
                "按服务及账号计算的入口",
                "列表与详情都读取同一权限判定，不因进入详情而绕过按钮限制。"
              ]
            ]
          }
        ]
      },
      {
        "label": "申请和版本",
        "sections": [
          {
            "title": "申请和版本",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "授权用途",
                "必选，可多选",
                "业务分析与应用、科研研究与验证；科研用途按账号权限开放。"
              ],
              [
                "关联课题 / 项目、科研空间、关联数据、算力与存储",
                "选择科研用途后展开",
                "按该场景填写。切回仅业务分析时收起科研字段。"
              ],
              [
                "对外提供",
                "API 调用或订阅服务",
                "开放的当前版本才显示可办入口，申请时填写单位、联系人及使用场景等对应信息。"
              ],
              [
                "版本历史、成果转化",
                "当前及历史版本、来源关系",
                "选中历史版本可查说明，当前版本承接试用与授权。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "入口与权限联动",
        "sections": [
          {
            "title": "入口与权限联动",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "查看模型",
                "列表标题 / 详情入口",
                "打开对应模型及版本，不改写资源权限。"
              ],
              [
                "在线试用",
                "当前服务已开启试用时点击",
                "校验登录及试用可用状态后进入运行台。"
              ],
              [
                "申请使用 / 直接使用",
                "按按钮实际显示操作",
                "同时结合角色功能配置、所属范围与具体模型授权；禁止使用不能经详情页绕过。"
              ],
              [
                "申请中的资源",
                "重复进入列表或详情",
                "读取同一申请记录与状态。"
              ],
              [
                "介绍与使用说明",
                "详情模型介绍",
                "展示已编辑内容及规范、输入输出示例；介绍保存与按钮权限各自按原数据维护。"
              ],
              [
                "版本与成果关系",
                "详情底部的版本迭代 / 成果转化",
                "查看对应关联记录，保留模型与版本关系。"
              ]
            ]
          }
        ]
      },
      {
        "label": "详情其他操作",
        "sections": [
          {
            "title": "详情其他操作",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "应用案例",
                "应用案例 Tab → 查看案例",
                "打开关联案例内容。"
              ],
              [
                "对外提供",
                "对外提供 Tab",
                "查看当前模型可用的服务接入说明；申请动作仍按账号权限判定。"
              ],
              [
                "示例附件",
                "下载示例",
                "下载当前模型介绍中保存的示例文件。"
              ],
              [
                "申请使用模型",
                "页头“申请使用” → 选择用途并提交",
                "登录后按权限办理。科研用途可补充对应资料，申请进度在个人中心查看。"
              ],
              [
                "历史版本",
                "版本历史 → 选择相应版本",
                "展示该版本内容，历史版本仅供查看。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "模型中心-模型运行台.html": {
    "name": "模型运行台",
    "intro": "承接模型试用或已授权使用。当前为运行过程与结果的原型演示。",
    "field": [
      {
        "label": "输入与结果",
        "sections": [
          {
            "title": "输入与结果",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "当前模型",
                "模型选择 / 来源模型",
                "与进入运行台的模型保持对应。"
              ],
              [
                "输入参数",
                "按当前模型显示",
                "示例包含生育期、期数、气象序列、地块编号；不是所有模型通用的固定字段。"
              ],
              [
                "输入文件",
                "提交运行时必填",
                "运行类模型在“必填输入数据”选择文件，具体参数与文件要求由当前模型决定。"
              ],
              [
                "运行记录",
                "任务、时间和状态",
                "结果面板和下载文件跟随当前选中的记录。对话类模型使用对话记录。"
              ],
              [
                "运行结果",
                "图表、返回内容或文件",
                "原型展示演示结果，不代表真实模型已执行。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "运行交互",
        "sections": [
          {
            "title": "运行交互",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "新建运行",
                "新建运行 / 新建对话",
                "按模型类型进入运行参数或对话界面。"
              ],
              [
                "提交",
                "填写参数和文件后提交",
                "先校验登录和模型使用资格，再进入运行演示。"
              ],
              [
                "历史结果",
                "点击运行记录",
                "切换到该次运行对应结果。"
              ],
              [
                "结果下载",
                "选择已完成记录 → 结果文件 / 整包下载",
                "下载本次演示运行提供的结果文件。"
              ],
              [
                "获取进度",
                "查看左侧运行记录",
                "异步演示任务显示处理进度，已完成后显示结果。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "科研开发空间-交互原型(10).html": {
    "name": "科研开发空间 · 空间列表",
    "intro": "科研负责人查看“我负责的”，普通成员查看“我参与的”。创建及记录入口按当前角色和授权显示。",
    "field": [
      {
        "label": "科研空间申请",
        "sections": [
          {
            "title": "科研空间申请",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "空间名称",
                "必填，最多 32 字",
                "列表和空间详情共用。"
              ],
              [
                "所属团队",
                "必选",
                "从当前账号可申请的本人负责团队选择。"
              ],
              [
                "研究用途",
                "必填，最多 500 字",
                "说明拟开展的研究工作。"
              ],
              [
                "预计使用时长",
                "选填，正整数天数",
                "作为申请中的资源安排信息。"
              ],
              [
                "关联模型",
                "选填，选择模型及版本",
                "选择后带出开发镜像与推荐资源。选择“不关联模型”时按当前开发环境默认项配置。"
              ],
              [
                "操作系统、Python 版本、开发框架、CUDA",
                "分别下拉选择",
                "使用当前可选组合；CUDA 可选择不使用。"
              ],
              [
                "开发工具",
                "JupyterLab / VS Code",
                "在空间中进入对应开发环境，IDE 新开页面。"
              ],
              [
                "CPU、内存、GPU、研究存储",
                "数值，按核 / GB / 张 / GB",
                "有默认建议值，允许调整；GPU 为 0 表示不使用。"
              ],
              [
                "单卡显存要求",
                "配置 GPU 时填写，GB",
                "GPU 为 0 时隐藏，配置 GPU 时按选中模型最低要求校验。"
              ],
              [
                "初始数据",
                "数据选择后添加，可移除",
                "只添加当前团队可用数据；显示挂载路径及访问方式。"
              ],
              [
                "申请记录、审批意见",
                "系统记录",
                "申请中或未通过的记录在申请记录中查看。通过后进入空间列表。"
              ]
            ]
          }
        ]
      },
      {
        "label": "账号与功能权限",
        "sections": [
          {
            "title": "账号与功能权限",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "中台菜单权限",
                "控制可见菜单",
                "平台业务按钮另按功能权限及资源范围判断。"
              ],
              [
                "机构默认角色",
                "中台角色 → 平台权限角色映射",
                "中台角色从动态清单获取；每个机构按需添加映射，不固定为两个角色。"
              ],
              [
                "个人角色绑定方式",
                "机构默认 / 单独绑定",
                "单独绑定时选用指定权限角色；机构默认时依据人员所属机构及中台角色匹配。"
              ],
              [
                "数据、模型、科研空间、需求",
                "审批授权 / 直接授权 / 禁止授权",
                "分别对应申请审批、符合业务校验后直接操作、禁止该业务操作。"
              ],
              [
                "机构、负责人、团队、空间成员",
                "实际归属与参与范围",
                "功能权限不扩大可管理的团队、成员和资源范围。"
              ],
              [
                "具体资源授权",
                "模型或数据及用途的授权记录",
                "与角色功能配置一起判断，不按角色名称或页面跳转推断授权。"
              ],
              [
                "预览账号",
                "原型演示控件",
                "切换演示当前账号；正式账号及权限由服务端提供并校验。"
              ]
            ]
          }
        ]
      },
      {
        "label": "页面控件取值",
        "sections": [
          {
            "title": "页面控件取值",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "空间每页条数",
                "下拉",
                "3 条 / 6 条 / 9 条 / 12 条"
              ]
            ],
            "note": "仅记录当前页面已有的选项和长度限制；业务必填与联动规则见相应业务页签。"
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "申请与进入空间",
        "sections": [
          {
            "title": "申请与进入空间",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "列表筛选",
                "名称搜索、已结束的空间、每页条数",
                "在本人负责或本人参与的空间范围内筛选和分页。"
              ],
              [
                "申请",
                "负责人点击“申请科研空间”",
                "选择本人负责的团队，填写申请配置。"
              ],
              [
                "模型 / 环境选择",
                "选择关联模型和各环境下拉",
                "更新推荐资源与环境说明，允许在现有可用范围内调整。"
              ],
              [
                "申请提交",
                "提交申请",
                "在后台“资源申请审批 → 创建科研开发空间”办理。获批后可从空间列表进入。"
              ],
              [
                "申请记录",
                "个人中心 → 我的科研空间 → 申请记录",
                "查看本次配置、审批意见和申请历史。可再次申请时带出上一轮填写信息。"
              ],
              [
                "进入空间",
                "空间卡片进入空间",
                "打开对应空间详情。"
              ],
              [
                "进入开发环境",
                "进入开发环境 / 启动并进入",
                "按实例状态启动后新开 IDE 页面。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "科研开发空间-详情页(9).html": {
    "name": "科研开发空间 · 空间详情",
    "intro": "管理已挂载资源、研究文件、实例、协作成员及成果提交记录。",
    "field": [
      {
        "label": "空间与资源",
        "sections": [
          {
            "title": "空间与资源",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "空间名称、所属团队、研究状态",
                "空间申请与研究记录",
                "按当前账号在该空间中的身份展示可用操作。"
              ],
              [
                "已挂载数据 / 模型",
                "资源名称、描述、挂载状态、访问说明",
                "资源详情仍关联原资源；挂载不改变归属。"
              ],
              [
                "研究文件",
                "共享文件 / 个人工作目录 / 团队成果 / 团队上传",
                "上传文件保留名称、类型、更新人及更新时间。"
              ],
              [
                "开发实例",
                "环境、算力、运行状态",
                "停止实例与结束研究分别处理，不自动生成到期业务。"
              ],
              [
                "协作成员",
                "当前团队内参与该空间的人员",
                "负责人选择成员，保留自身管理关系。"
              ],
              [
                "成果与提交记录",
                "时间、名称、类型、提交方式、提交人",
                "点击查看对应提交内容。"
              ]
            ]
          }
        ]
      },
      {
        "label": "成果材料与提交",
        "sections": [
          {
            "title": "成果材料与提交",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "成果类型",
                "成果模型 / 成果数据",
                "选择后显示对应字段，不共用一套无差别表单。"
              ],
              [
                "关联课题、来源模型",
                "关联选择",
                "科研空间提交带出空间内模型；个人中心按可选模型关联。"
              ],
              [
                "成果模型基本信息",
                "名称、版本、类型、业务分类、任务、作物、提供方、权属等",
                "保持与后台接收字段一致；个人中心按单条成果记录管理。"
              ],
              [
                "成果模型介绍",
                "简介、概述、业务能力、输入输出规范与示例",
                "在成果材料中填写用于验收及后续展示，审批接入时保留。后台本地新建仍先建元数据、再编辑介绍。"
              ],
              [
                "模型文件",
                "当前空间已调试的镜像材料",
                "材料与通过调试记录对应。模型成果从当前空间提交。"
              ],
              [
                "调试记录",
                "输入、输出、日志、通过结果及材料关联",
                "正式提交模型成果前须通过调试；审批中心可查看该记录并核对说明。"
              ],
              [
                "数据文件及说明",
                "数据基本信息、数据介绍、数据预览",
                "沿用同一套数据字段与布局；不要求数据版本号或数据规模。"
              ],
              [
                "提交时间、提交人、成果状态",
                "系统记录",
                "个人中心展示审批进展；空间成果区主要展示提交记录。"
              ]
            ]
          }
        ]
      },
      {
        "label": "数据基本信息",
        "sections": [
          {
            "title": "数据基本信息",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "数据名称",
                "文本，必填",
                "作为列表标题及详情名称；后台数据集 ID 自动生成。"
              ],
              [
                "是否包含地理信息数据",
                "布尔：是 / 否；新建默认否",
                "只判断是否提供地理信息查询功能。门户当前入口名称为“影像查询”；不作为数据分类，也不决定预览方式。"
              ],
              [
                "研究方向",
                "多选，选填",
                "AI 数智基础、作物模型、资源环境、精准感控、智能装备、规模化应用；对应数据中心筛选。"
              ],
              [
                "作物",
                "多选，选填",
                "沿用作物选项，可保留已有记录的作物值。"
              ],
              [
                "覆盖年份",
                "年份，选填",
                "填写时校验四位年份；用于时间筛选。"
              ],
              [
                "覆盖区域",
                "区划选择器，可多选",
                "可跨地区选择；保存区域代码及展示名称；全国（不限）与具体区域选择互斥。"
              ],
              [
                "提供方 / 归属单位、权属归属",
                "文本",
                "分别描述提供单位和权属主体。"
              ],
              [
                "关联专题",
                "下拉选择",
                "用于数据中心专题归类。"
              ],
              [
                "数据格式",
                "按文件识别",
                "文件类型与标注情况构成发布展示的标签。"
              ],
              [
                "标注情况",
                "下拉：有标注 / 无标注 / 未说明",
                "与文件格式共同生成展示标签。标签仅包含这两类内容。"
              ],
              [
                "数据简介",
                "多行文本，最多 1000 字",
                "用于列表的一句简介；数据介绍在后续内容编辑区维护。"
              ],
              [
                "数据封面",
                "图片上传、预览、移除",
                "沿用当前表单支持的图片格式。"
              ],
              [
                "成果文件 / 数据文件",
                "文件列表",
                "保留文件名称及文件内容引用，用于管理、审批和样例选择。"
              ]
            ],
            "note": "当前数据基本信息中没有“数据形态”、数据版本号、数据规模或重复的“数据集元数据卡片”。"
          }
        ]
      },
      {
        "label": "数据介绍与预览",
        "sections": [
          {
            "title": "数据介绍与预览",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "数据概述、适用方向",
                "多行内容",
                "在“数据介绍”中编辑，保存后同步到详情展示。"
              ],
              [
                "关键参数",
                "可增删行：参数名称、参数值、单位",
                "单位选填；保留参数原有含义，不重复生成固定元数据卡片。"
              ],
              [
                "结构文件",
                "从已上传成果文件选择，选填",
                "用于展示字段结构；可与样例文件使用同一文件。"
              ],
              [
                "样例数据文件",
                "从已上传成果文件选择",
                "可解析的表格文件展示字段及样例行。"
              ],
              [
                "预览材料",
                "单独上传文件 / 图片",
                "不能直接表格展示的内容使用额外提交的预览材料。材料与真实成果文件分别保存。"
              ],
              [
                "预览方式、预览说明",
                "结构 / 样例行，或图片、文件、地图",
                "表格样例按可用文件解析，非结构化数据另传预览材料。可识别的经纬度空间样例可用地图方式。"
              ],
              [
                "前台展示",
                "介绍内容 + 保存的样例",
                "审批和后台编辑保留样例内容，前台读取同一数据记录。"
              ]
            ]
          }
        ]
      },
      {
        "label": "账号与功能权限",
        "sections": [
          {
            "title": "账号与功能权限",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "中台菜单权限",
                "控制可见菜单",
                "平台业务按钮另按功能权限及资源范围判断。"
              ],
              [
                "机构默认角色",
                "中台角色 → 平台权限角色映射",
                "中台角色从动态清单获取；每个机构按需添加映射，不固定为两个角色。"
              ],
              [
                "个人角色绑定方式",
                "机构默认 / 单独绑定",
                "单独绑定时选用指定权限角色；机构默认时依据人员所属机构及中台角色匹配。"
              ],
              [
                "数据、模型、科研空间、需求",
                "审批授权 / 直接授权 / 禁止授权",
                "分别对应申请审批、符合业务校验后直接操作、禁止该业务操作。"
              ],
              [
                "机构、负责人、团队、空间成员",
                "实际归属与参与范围",
                "功能权限不扩大可管理的团队、成员和资源范围。"
              ],
              [
                "具体资源授权",
                "模型或数据及用途的授权记录",
                "与角色功能配置一起判断，不按角色名称或页面跳转推断授权。"
              ],
              [
                "预览账号",
                "原型演示控件",
                "切换演示当前账号；正式账号及权限由服务端提供并校验。"
              ]
            ]
          }
        ]
      },
      {
        "label": "页面控件取值",
        "sections": [
          {
            "title": "页面控件取值",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "成果记录每页条数",
                "下拉",
                "5 / 10 / 20"
              ],
              [
                "请求内容类型",
                "下拉",
                "JSON / form-data"
              ]
            ],
            "note": "仅记录当前页面已有的选项和长度限制；业务必填与联动规则见相应业务页签。"
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "资源与研究操作",
        "sections": [
          {
            "title": "资源与研究操作",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "挂载数据",
                "挂载数据 → 选可用资源",
                "向当前空间添加已获准使用的数据。"
              ],
              [
                "文件上传",
                "上传文件 → 选择文件",
                "显示在当前文件区域；上传研究文件不自动提交成果。"
              ],
              [
                "进入 IDE",
                "进入开发环境",
                "新开编辑页，保留空间详情页。"
              ],
              [
                "运行调试",
                "运行调试 → 部署 → 调试",
                "查看部署进度，填写输入并核对输出与日志。"
              ],
              [
                "管理成员",
                "管理成员",
                "从本团队成员中调整空间协作人员。"
              ],
              [
                "停止实例",
                "停止实例 → 确认",
                "影响实例运行状态；研究记录和材料仍保留。"
              ],
              [
                "结束研究",
                "结束研究 → 确认",
                "按当前页面流程结束研究，后续以查看为主；不凭空新增成果归属审批。"
              ],
              [
                "开发环境",
                "启动实例 / 进入开发环境",
                "按实例运行状态操作。进入环境时新开 IDE 页。"
              ]
            ]
          }
        ]
      },
      {
        "label": "成果提交",
        "sections": [
          {
            "title": "成果提交",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "成果模型",
                "运行调试 → 部署 → 填入测试数据并调试 → 提交成果",
                "在当前空间通过调试后提交镜像成果。提交材料包括模型介绍、规范、示例和本次调试结果。"
              ],
              [
                "关联模型",
                "提交成果 → 关联 / 衍生模型",
                "默认带出当前空间关联模型，按表单选项调整。"
              ],
              [
                "成果数据",
                "提交成果 → 选择数据材料 → 填写基本信息、介绍及预览",
                "提交后进入成果验收，模型调试仅用于模型成果。"
              ],
              [
                "查看提交记录",
                "历史成果上传记录 → 查看",
                "按记录核对材料、时间和状态。审批意见在成果详情或个人中心查看。"
              ],
              [
                "验收通过",
                "审批中心通过成果",
                "对应记录进入后台模型管理或数据集管理，后续由后台办理上架。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "科研开发空间-IDE编辑页.html": {
    "name": "科研开发空间 · IDE",
    "intro": "从科研空间新开进入，演示文件、代码、终端与输出交互。",
    "field": [
      {
        "label": "开发环境内容",
        "sections": [
          {
            "title": "开发环境内容",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "开发工具",
                "JupyterLab / VSCode",
                "沿用空间配置，可通过原型选择器预览。"
              ],
              [
                "文件树、文件搜索",
                "目录及文件名",
                "区分研究目录、数据和模型挂载内容。"
              ],
              [
                "代码单元格 / 文件编辑区",
                "可编辑文本",
                "展示当前打开的代码或文件。"
              ],
              [
                "运行输出、终端、问题",
                "输出面板",
                "展示演示运行结果和终端反馈。"
              ],
              [
                "内核状态",
                "示例内核状态",
                "当前原型未连接真实算力。"
              ]
            ]
          }
        ]
      },
      {
        "label": "页面控件取值",
        "sections": [
          {
            "title": "页面控件取值",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "开发工具",
                "下拉",
                "JupyterLab / VSCode"
              ]
            ],
            "note": "仅记录当前页面已有的选项和长度限制；业务必填与联动规则见相应业务页签。"
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "IDE 交互",
        "sections": [
          {
            "title": "IDE 交互",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "打开文件",
                "文件树点击文件",
                "打开或切换对应编辑 Tab。"
              ],
              [
                "编辑 / 新增单元格",
                "在代码区输入 / 添加代码单元格",
                "更新当前编辑内容。"
              ],
              [
                "运行 / 调试",
                "运行全部 / 调试",
                "演示运行与结果，不表示真实模型执行。"
              ],
              [
                "命令搜索",
                "顶部搜索文件或运行命令",
                "按关键词查找入口。"
              ],
              [
                "返回空间",
                "返回空间",
                "回到对应科研空间详情。"
              ],
              [
                "切换工具",
                "开发工具选择器",
                "在 JupyterLab 与 VS Code 的演示界面间切换。"
              ],
              [
                "切换输出",
                "底部终端 / 运行输出 / 问题",
                "查看或清空对应面板内容。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "个人中心-高保真原型.html": {
    "name": "个人中心",
    "intro": "在个人中心查看本人资源、申请、需求与成果。团队内容按科研负责人或普通成员身份展示。",
    "field": [
      {
        "label": "个人模块",
        "sections": [
          {
            "title": "个人模块",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "个人概览",
                "最近访问、最新消息、我的收藏",
                "负责人和成员共用概览结构，内容按各自记录展示。"
              ],
              [
                "我的模型、我的数据",
                "资源及授权 / 申请信息",
                "查看资源、使用入口和申请进展。"
              ],
              [
                "我的科研空间",
                "随当前角色展示",
                "负责人查看负责空间和申请记录，成员查看参与空间。"
              ],
              [
                "我的成果",
                "模型 / 数据的成果记录",
                "上传模型按单条成果记录管理，不在这里新增模型合集管理。"
              ],
              [
                "我的需求、我的课题",
                "本人发布 / 团队关联的记录",
                "课题内容编辑权限独立于团队参与身份。"
              ],
              [
                "基础信息",
                "姓名等个人资料",
                "个人概览编辑基础信息；账号设置处理账号相关事项。"
              ]
            ]
          }
        ]
      },
      {
        "label": "我的团队",
        "sections": [
          {
            "title": "我的团队",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "团队名称、团队简介",
                "必填名称 / 选填简介",
                "名称最多 60 字，简介最多 300 字。"
              ],
              [
                "团队成员",
                "负责人名下已关联成员",
                "负责人维护本人团队，普通成员查看自己参与的团队。关联账号后还需添加到相应团队。"
              ],
              [
                "关联课题、关联需求",
                "可选择已有记录",
                "由当前团队负责人维护，不改变需求发布状态。"
              ],
              [
                "已关联成员",
                "账号级人员清单",
                "负责人可从“我负责的团队”查看人数和清单，成员可加入该负责人名下多个团队。"
              ],
              [
                "所属机构、关联负责人",
                "团队归属信息",
                "查看团队所属机构、负责人和成员；团队卡片按当前账号归属显示。"
              ]
            ]
          }
        ]
      },
      {
        "label": "成果材料与提交",
        "sections": [
          {
            "title": "成果材料与提交",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "成果类型",
                "成果模型 / 成果数据",
                "选择后显示对应字段，不共用一套无差别表单。"
              ],
              [
                "关联课题、来源模型",
                "关联选择",
                "科研空间提交带出空间内模型；个人中心按可选模型关联。"
              ],
              [
                "成果模型基本信息",
                "名称、版本、类型、业务分类、任务、作物、提供方、权属等",
                "保持与后台接收字段一致；个人中心按单条成果记录管理。"
              ],
              [
                "成果模型介绍",
                "简介、概述、业务能力、输入输出规范与示例",
                "在成果材料中填写用于验收及后续展示，审批接入时保留。后台本地新建仍先建元数据、再编辑介绍。"
              ],
              [
                "模型文件",
                "镜像压缩包",
                "个人中心上传模型使用镜像包，上传后在记录行部署、调试、提交。"
              ],
              [
                "调试记录",
                "输入、输出、日志、通过结果及材料关联",
                "正式提交模型成果前须通过调试；审批中心可查看该记录并核对说明。"
              ],
              [
                "数据文件及说明",
                "数据基本信息、数据介绍、数据预览",
                "沿用同一套数据字段与布局；不要求数据版本号或数据规模。"
              ],
              [
                "提交时间、提交人、成果状态",
                "系统记录",
                "个人中心展示审批进展；空间成果区主要展示提交记录。"
              ]
            ]
          }
        ]
      },
      {
        "label": "数据基本信息",
        "sections": [
          {
            "title": "数据基本信息",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "数据名称",
                "文本，必填",
                "作为列表标题及详情名称；后台数据集 ID 自动生成。"
              ],
              [
                "是否包含地理信息数据",
                "布尔：是 / 否；新建默认否",
                "只判断是否提供地理信息查询功能。门户当前入口名称为“影像查询”；不作为数据分类，也不决定预览方式。"
              ],
              [
                "研究方向",
                "多选，选填",
                "AI 数智基础、作物模型、资源环境、精准感控、智能装备、规模化应用；对应数据中心筛选。"
              ],
              [
                "作物",
                "多选，选填",
                "沿用作物选项，可保留已有记录的作物值。"
              ],
              [
                "覆盖年份",
                "年份，选填",
                "填写时校验四位年份；用于时间筛选。"
              ],
              [
                "覆盖区域",
                "区划选择器，可多选",
                "可跨地区选择；保存区域代码及展示名称；全国（不限）与具体区域选择互斥。"
              ],
              [
                "提供方 / 归属单位、权属归属",
                "文本",
                "分别描述提供单位和权属主体。"
              ],
              [
                "关联专题",
                "下拉选择",
                "用于数据中心专题归类。"
              ],
              [
                "数据格式",
                "按文件识别",
                "文件类型与标注情况构成发布展示的标签。"
              ],
              [
                "标注情况",
                "下拉：有标注 / 无标注 / 未说明",
                "与文件格式共同生成展示标签。标签仅包含这两类内容。"
              ],
              [
                "数据简介",
                "多行文本，最多 1000 字",
                "用于列表的一句简介；数据介绍在后续内容编辑区维护。"
              ],
              [
                "数据封面",
                "图片上传、预览、移除",
                "沿用当前表单支持的图片格式。"
              ],
              [
                "成果文件 / 数据文件",
                "文件列表",
                "保留文件名称及文件内容引用，用于管理、审批和样例选择。"
              ]
            ],
            "note": "当前数据基本信息中没有“数据形态”、数据版本号、数据规模或重复的“数据集元数据卡片”。"
          }
        ]
      },
      {
        "label": "数据介绍与预览",
        "sections": [
          {
            "title": "数据介绍与预览",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "数据概述、适用方向",
                "多行内容",
                "在“数据介绍”中编辑，保存后同步到详情展示。"
              ],
              [
                "关键参数",
                "可增删行：参数名称、参数值、单位",
                "单位选填；保留参数原有含义，不重复生成固定元数据卡片。"
              ],
              [
                "结构文件",
                "从已上传成果文件选择，选填",
                "用于展示字段结构；可与样例文件使用同一文件。"
              ],
              [
                "样例数据文件",
                "从已上传成果文件选择",
                "可解析的表格文件展示字段及样例行。"
              ],
              [
                "预览材料",
                "单独上传文件 / 图片",
                "不能直接表格展示的内容使用额外提交的预览材料。材料与真实成果文件分别保存。"
              ],
              [
                "预览方式、预览说明",
                "结构 / 样例行，或图片、文件、地图",
                "表格样例按可用文件解析，非结构化数据另传预览材料。可识别的经纬度空间样例可用地图方式。"
              ],
              [
                "前台展示",
                "介绍内容 + 保存的样例",
                "审批和后台编辑保留样例内容，前台读取同一数据记录。"
              ]
            ]
          }
        ]
      },
      {
        "label": "账号与功能权限",
        "sections": [
          {
            "title": "账号与功能权限",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "中台菜单权限",
                "控制可见菜单",
                "平台业务按钮另按功能权限及资源范围判断。"
              ],
              [
                "机构默认角色",
                "中台角色 → 平台权限角色映射",
                "中台角色从动态清单获取；每个机构按需添加映射，不固定为两个角色。"
              ],
              [
                "个人角色绑定方式",
                "机构默认 / 单独绑定",
                "单独绑定时选用指定权限角色；机构默认时依据人员所属机构及中台角色匹配。"
              ],
              [
                "数据、模型、科研空间、需求",
                "审批授权 / 直接授权 / 禁止授权",
                "分别对应申请审批、符合业务校验后直接操作、禁止该业务操作。"
              ],
              [
                "机构、负责人、团队、空间成员",
                "实际归属与参与范围",
                "功能权限不扩大可管理的团队、成员和资源范围。"
              ],
              [
                "具体资源授权",
                "模型或数据及用途的授权记录",
                "与角色功能配置一起判断，不按角色名称或页面跳转推断授权。"
              ],
              [
                "预览账号",
                "原型演示控件",
                "切换演示当前账号；正式账号及权限由服务端提供并校验。"
              ]
            ]
          }
        ]
      },
      {
        "label": "页面控件取值",
        "sections": [
          {
            "title": "页面控件取值",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "需求标题",
                "文本",
                "最多 40 字"
              ],
              [
                "需求方向",
                "下拉",
                "请选择需求方向 / 调查摸底 / 监测预警 / 分析评估 / 方案咨询 / 技术研发 / 其他需求"
              ],
              [
                "需求概述",
                "多行文本",
                "最多 200 字"
              ],
              [
                "请求内容类型",
                "下拉",
                "JSON / form-data"
              ]
            ],
            "note": "仅记录当前页面已有的选项和长度限制；业务必填与联动规则见相应业务页签。"
          }
        ]
      },
      {
        "label": "我的需求",
        "sections": [
          {
            "title": "我的需求",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "需求字段",
                "与需求中心发布表单共用",
                "标题最多 40 字、概述最多 200 字，电话与邮箱至少填写一项。"
              ],
              [
                "状态与审批意见",
                "未发布 / 待审核 / 未通过 / 发布中 / 已结束",
                "“我的需求”重点展示待审核、未通过、发布中、已结束。详情可查看当前审核意见。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "个人与成员操作",
        "sections": [
          {
            "title": "个人与成员操作",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "切换栏目",
                "左侧导航",
                "打开对应记录列表，支持页面已有筛选、分页和详情。"
              ],
              [
                "团队管理",
                "我的团队 → 创建团队 / 查看团队 / 添加成员",
                "负责人维护本人团队，普通成员查看自己参与的团队。"
              ],
              [
                "移出团队",
                "团队成员 → 移除",
                "只解除当前团队成员关系，保留账号及其他团队关系。"
              ],
              [
                "基础信息 / 账号设置",
                "编辑基础信息 / 账号设置",
                "分别维护资料和账号设置。"
              ],
              [
                "添加成员",
                "我负责的团队 → 团队详情 → 添加成员",
                "从已关联成员中选择。人员账号关联由后台“合作与组织 → 人员管理”维护。"
              ],
              [
                "已关联成员",
                "我的团队 → 已关联成员",
                "查看负责人名下关联账号，即使该成员还未加入团队也可在此看到。"
              ]
            ]
          }
        ]
      },
      {
        "label": "成果上传与验收",
        "sections": [
          {
            "title": "成果上传与验收",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "上传模型",
                "个人中心 → 我的成果 → 上传模型",
                "填写单条成果模型材料并上传镜像，形成成果记录。"
              ],
              [
                "部署与调试",
                "成果记录行 → 部署 → 调试",
                "先部署再调试；记录输入、输出及日志。"
              ],
              [
                "正式提交模型",
                "调试通过后点提交",
                "校验当前材料的调试结果，提交成果验收审批；上传文件本身不等于已提交验收。"
              ],
              [
                "提交数据",
                "提交成果数据 → 填基本信息、介绍、预览及文件",
                "校验当前表单并提交成果验收审批，不增加模型调试步骤。"
              ],
              [
                "查看 / 再次提交",
                "成果记录行操作",
                "查看本次材料与审批结果；按当前状态修订后再次提交。"
              ],
              [
                "验收通过",
                "审批中心通过成果",
                "材料进入对应后台模型 / 数据集管理，继续按编辑和上架流程处理；不自动在门户上架。"
              ]
            ]
          }
        ]
      },
      {
        "label": "申请与需求",
        "sections": [
          {
            "title": "申请与需求",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "资源申请记录",
                "我的模型 / 我的数据 / 我的科研空间 → 申请记录",
                "查看已提交记录和审批意见；出现再次申请入口时可修改后提交。"
              ],
              [
                "发布需求",
                "我的需求 → 发布需求",
                "提交后在“待审核”查看。在后台通过审核后进入发布中。"
              ],
              [
                "需求调整",
                "我的需求 → 查看 / 编辑 / 撤回",
                "待审核和未通过可编辑后重新提交。确认撤回后进入已结束。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "合作咨询.html": {
    "name": "合作咨询",
    "intro": "介绍科研和企业合作支持内容，提交咨询后由后台合作咨询管理跟进。",
    "field": [
      {
        "label": "合作咨询字段",
        "sections": [
          {
            "title": "合作咨询字段",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "合作方向",
                "必选单选",
                "科研合作、企业合作、其他合作。切换方向时查看对应支持内容。"
              ],
              [
                "单位名称",
                "必填，最多 80 字",
                "填写单位全称。"
              ],
              [
                "联系人",
                "必填，最多 30 字",
                "本次咨询联系人。"
              ],
              [
                "联系电话",
                "必填，最多 30 字",
                "支持手机或固定电话。"
              ],
              [
                "电子邮箱",
                "选填，最多 100 字",
                "填写时按邮箱格式校验。"
              ],
              [
                "咨询内容",
                "必填，最多 2000 字",
                "描述合作意向、场景或问题。"
              ],
              [
                "同意联系",
                "必选确认",
                "同意平台就本次咨询使用所填联系方式。"
              ],
              [
                "处理状态",
                "待联系 / 联系中 / 已处理",
                "由后台处理记录维护。"
              ],
              [
                "处理记录",
                "必填，最多 2000 字",
                "记录联系与处理情况，仅供后台查看。"
              ],
              [
                "咨询编号、提交时间、来源",
                "自动记录",
                "提交成功后展示编号，后台详情可据此核对记录。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "咨询提交与处理",
        "sections": [
          {
            "title": "咨询提交与处理",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "填写咨询",
                "选择合作方向、填写单位与联系方式、咨询内容",
                "电话必填、邮箱选填，确认同意联系后提交。"
              ],
              [
                "提交",
                "提交咨询",
                "校验成功后显示提交结果，生成后台可查看的咨询记录。"
              ],
              [
                "继续咨询",
                "提交成功 → 继续咨询",
                "回到咨询表单。"
              ],
              [
                "原型后台预览",
                "顶部“后台管理”",
                "进入后台“合作与组织 → 合作咨询”，可查询、查看并记录处理。"
              ],
              [
                "演示数据",
                "填入示例 / 重置演示",
                "只用于原型试用，不作为业务审批步骤。"
              ],
              [
                "筛选与处理",
                "查询 → 查看详情 → 记录处理",
                "按合作方向、关键词和日期定位记录。选择处理状态并填写记录后保存。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "需求中心-高保真原型 (1).html": {
    "name": "需求中心",
    "intro": "浏览发布中的需求、查看详情与联系方式，并按当前权限提交新需求。",
    "field": [
      {
        "label": "发布需求",
        "sections": [
          {
            "title": "发布需求",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "需求标题、需求概述",
                "必填，分别最多 40 字、200 字",
                "标题用于列表和详情，概述用于列表摘要。"
              ],
              [
                "需求方向",
                "必选单选",
                "调查摸底、监测预警、分析评估、方案咨询、技术研发、其他需求。"
              ],
              [
                "所需服务、涉及作物",
                "服务必选多选 / 作物选填",
                "可勾选多项服务，作物可填写多个名称。"
              ],
              [
                "希望解决的问题、需要完成的工作、预期交付成果",
                "必填",
                "工作可按行填写，详情按条展示。"
              ],
              [
                "已有资料、期望交付时间",
                "选填",
                "用于说明可用材料和希望完成的时间。"
              ],
              [
                "发布单位、联系人、电话、邮箱",
                "单位和联系人必填；电话与邮箱至少一项",
                "邮箱填写时校验格式。登录后可查看公开需求的联系方式。"
              ],
              [
                "同意发布说明",
                "必勾选",
                "确认需求内容和联系方式的展示规则。"
              ],
              [
                "状态",
                "未发布 / 待审核 / 未通过 / 发布中 / 已结束",
                "门户提交进入待审核。通过后在公开列表展示，未通过时在“我的需求”查看。未发布和已结束可在后台查询。"
              ]
            ]
          }
        ]
      },
      {
        "label": "账号与功能权限",
        "sections": [
          {
            "title": "账号与功能权限",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "中台菜单权限",
                "控制可见菜单",
                "平台业务按钮另按功能权限及资源范围判断。"
              ],
              [
                "机构默认角色",
                "中台角色 → 平台权限角色映射",
                "中台角色从动态清单获取；每个机构按需添加映射，不固定为两个角色。"
              ],
              [
                "个人角色绑定方式",
                "机构默认 / 单独绑定",
                "单独绑定时选用指定权限角色；机构默认时依据人员所属机构及中台角色匹配。"
              ],
              [
                "数据、模型、科研空间、需求",
                "审批授权 / 直接授权 / 禁止授权",
                "分别对应申请审批、符合业务校验后直接操作、禁止该业务操作。"
              ],
              [
                "机构、负责人、团队、空间成员",
                "实际归属与参与范围",
                "功能权限不扩大可管理的团队、成员和资源范围。"
              ],
              [
                "具体资源授权",
                "模型或数据及用途的授权记录",
                "与角色功能配置一起判断，不按角色名称或页面跳转推断授权。"
              ],
              [
                "预览账号",
                "原型演示控件",
                "切换演示当前账号；正式账号及权限由服务端提供并校验。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "需求交互",
        "sections": [
          {
            "title": "需求交互",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "筛选 / 搜索",
                "方向、所需服务、关键词、排序和每页条数",
                "组合筛选发布中的需求。选择每页 4、6 或 8 条，对应刷新分页。"
              ],
              [
                "详情",
                "需求标题 / 查看详情",
                "打开需求说明、交付要求与发布方信息。"
              ],
              [
                "联系方式",
                "详情中的联系方式入口",
                "未登录按页面提示登录，登录后按当前规则查看。"
              ],
              [
                "发布需求",
                "发布需求 → 填写内容和联系方式 → 勾选说明 → 提交审核",
                "当前门户演示提交需求发布申请。审核在后台“资源申请审批”办理。"
              ],
              [
                "跟进",
                "个人中心 → 我的需求",
                "查看本人记录、审批意见及当前状态可用的修改、再次提交或撤回操作。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "index.html": {
    "name": "门户首页",
    "intro": "首页展示平台资源与合作入口，运营内容由后台对应模块维护。",
    "field": [
      {
        "label": "首页展示",
        "sections": [
          {
            "title": "首页展示",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "首屏轮播",
                "5 屏图片",
                "图片在后台“门户管理 → 首页内容”按屏配置，标题和按钮使用首页现有内容。"
              ],
              [
                "特色数据集",
                "3 张卡片",
                "每卡选择数据集，可调整首页简介和展示图。点击卡片进入对应数据详情。"
              ],
              [
                "特色模型",
                "1 个模型",
                "后台选择模型并配置首页展示图和字段名、内容。详情仍按模型管理资料展示。"
              ],
              [
                "应用案例",
                "首页所选案例",
                "按配置显示案例与关联模型。"
              ],
              [
                "课题指南",
                "栏目文案和入口图",
                "具体指南内容由课题指南管理维护。"
              ],
              [
                "通知公告",
                "最近 3 条已发布公告",
                "按发布时间显示，在“门户管理 → 通知公告”维护。"
              ],
              [
                "示范基地、合作伙伴",
                "首页展示内容",
                "基地图片、名称及合作伙伴记录在首页内容中维护。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "首页操作",
        "sections": [
          {
            "title": "首页操作",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "浏览轮播",
                "点击圆点或等待自动轮播",
                "切换首屏，栏目按钮定位相应区块或跳往对应业务。"
              ],
              [
                "进入资源",
                "点击特色数据、模型或栏目入口",
                "打开对应资源详情或列表。"
              ],
              [
                "公告",
                "点击公告标题",
                "查看公告正文和可下载附件。"
              ],
              [
                "合作与账号",
                "合作咨询、登录或个人中心",
                "分别进入咨询页或当前账号入口。授权管理员可访问数据看板。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "关于平台-平台介绍.html": {
    "name": "关于平台 · 平台介绍",
    "intro": "展示平台定位、数据与模型服务、科研开发、课题和需求服务。",
    "field": [
      {
        "label": "页面内容",
        "sections": [
          {
            "title": "页面内容",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "平台提供什么",
                "页面图文",
                "介绍现有资源与协同研究服务。"
              ],
              [
                "如何参与",
                "科研团队 / 企业用户",
                "链接到现有合作与资源入口。"
              ],
              [
                "使用须知",
                "说明内容",
                "沿用当前说明，不增加审批或期限规则。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "页面交互",
        "sections": [
          {
            "title": "页面交互",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "内容导航",
                "目录 / 正文入口",
                "滚动到对应内容或进入相关业务模块。"
              ],
              [
                "切换说明页",
                "左侧关于平台导航",
                "打开所选说明，使用帮助内可继续进入数据使用指南。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "关于平台-使用帮助.html": {
    "name": "关于平台 · 使用帮助",
    "intro": "按加入平台、数据、模型、科研空间、课题及需求整理现有操作帮助。",
    "field": [
      {
        "label": "页面内容",
        "sections": [
          {
            "title": "页面内容",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "问题分类",
                "六类帮助内容",
                "与当前业务入口对应。"
              ],
              [
                "问题与答案",
                "可展开条目",
                "说明已有操作路径。"
              ],
              [
                "关键词",
                "搜索文本",
                "输入与当前说明或问答相关的词，结果随输入或提交更新。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "页面交互",
        "sections": [
          {
            "title": "页面交互",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "搜索",
                "输入关键词 → 搜索 / 清空",
                "筛选或定位帮助内容。"
              ],
              [
                "问答展开",
                "点击问题标题",
                "就地展开或收起答案。"
              ],
              [
                "进入业务",
                "点击答案中的链接",
                "跳转到相应页面。"
              ],
              [
                "切换说明页",
                "左侧关于平台导航",
                "打开所选说明，使用帮助内可继续进入数据使用指南。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "关于平台-开发者接入.html": {
    "name": "关于平台 · 开发者接入",
    "intro": "说明模型选择、使用申请、接口文档与联调入口。",
    "field": [
      {
        "label": "页面内容",
        "sections": [
          {
            "title": "页面内容",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "接入步骤",
                "选择模型、申请使用、查阅文档、联调",
                "按实际服务开放情况操作。"
              ],
              [
                "接口文档",
                "服务地址、认证、入参、出参、示例",
                "以当前模型 / 服务对应文档为准。"
              ],
              [
                "接入确认项",
                "页面说明",
                "不在说明页新建接口申请表。"
              ],
              [
                "关键词",
                "搜索文本",
                "输入与当前说明或问答相关的词，结果随输入或提交更新。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "页面交互",
        "sections": [
          {
            "title": "页面交互",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "查阅",
                "目录 / 步骤入口",
                "查看所选说明。"
              ],
              [
                "文档",
                "接口文档相关入口",
                "进入当前模型或接口文档。"
              ],
              [
                "搜索 / 问答",
                "关键词或问题标题",
                "定位内容或展开答案。"
              ],
              [
                "切换说明页",
                "左侧关于平台导航",
                "打开所选说明，使用帮助内可继续进入数据使用指南。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "关于平台-数据使用指南.html": {
    "name": "关于平台 · 数据使用指南",
    "intro": "说明数据查找、预览、申请及在科研空间中的使用。",
    "field": [
      {
        "label": "页面内容",
        "sections": [
          {
            "title": "页面内容",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "查找与预览",
                "数据中心筛选和详情",
                "在列表找到数据集，在详情查看数据介绍及可用样例。"
              ],
              [
                "使用申请",
                "用途、说明和确认",
                "按当前数据申请表及功能权限办理。"
              ],
              [
                "科研空间使用",
                "已获准资源挂载",
                "在当前可用空间范围内使用。"
              ],
              [
                "授权状态",
                "个人中心记录",
                "按账号、团队、用途与资源授权查看。"
              ],
              [
                "关键词",
                "搜索文本",
                "输入与当前说明或问答相关的词，结果随输入或提交更新。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "页面交互",
        "sections": [
          {
            "title": "页面交互",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "目录",
                "点击本文目录",
                "定位对应章节。"
              ],
              [
                "数据中心",
                "正文数据入口",
                "进入数据列表和详情。"
              ],
              [
                "常见问题",
                "点击问题标题",
                "展开答案。"
              ],
              [
                "切换说明页",
                "左侧关于平台导航",
                "打开所选说明，使用帮助内可继续进入数据使用指南。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "关于平台-联系支持.html": {
    "name": "关于平台 · 联系支持",
    "intro": "按使用问题、合作咨询和需求沟通提供现有联系入口。",
    "field": [
      {
        "label": "页面内容",
        "sections": [
          {
            "title": "页面内容",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "使用问题",
                "帮助内容与联系方式",
                "查看使用帮助或联系平台。"
              ],
              [
                "合作咨询",
                "科研 / 企业合作等意向",
                "进入统一咨询表单。"
              ],
              [
                "需求沟通",
                "需求详情联系方式",
                "针对具体需求与发布方联系。"
              ],
              [
                "联系平台",
                "页面现有电话 / 邮箱",
                "以页面展示信息为准。"
              ],
              [
                "关键词",
                "搜索文本",
                "输入与当前说明或问答相关的词，结果随输入或提交更新。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "页面交互",
        "sections": [
          {
            "title": "页面交互",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "使用问题",
                "查看使用帮助",
                "进入按业务整理的说明。"
              ],
              [
                "合作咨询",
                "合作咨询入口",
                "进入统一咨询表单。"
              ],
              [
                "需求沟通",
                "前往需求中心",
                "在具体需求详情中查看可用联系方式。"
              ],
              [
                "常见咨询",
                "点击问题标题",
                "展开或收起答案。"
              ],
              [
                "切换说明页",
                "左侧关于平台导航",
                "打开所选说明。"
              ],
              [
                "查看咨询记录",
                "联系平台 → 查看咨询记录",
                "查看页面中当前浏览器的演示咨询记录。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "关于平台-部署说明.html": {
    "name": "关于平台 · 部署说明",
    "intro": "介绍平台内研究环境、模型服务调用与专项部署咨询。",
    "field": [
      {
        "label": "页面内容",
        "sections": [
          {
            "title": "页面内容",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "科研开发环境",
                "空间及实例",
                "通过空间申请和环境配置使用。"
              ],
              [
                "模型服务调用",
                "模型或接口文档",
                "按当前授权与服务配置调用。"
              ],
              [
                "专项部署咨询",
                "合作咨询入口",
                "填写合作意向，由后续沟通确认内容。"
              ],
              [
                "部署相关说明",
                "平台内使用及专项部署说明",
                "模型部署操作由后台模型管理承接，专项部署意向由合作咨询承接。"
              ],
              [
                "关键词",
                "搜索文本",
                "输入与当前说明或问答相关的词，结果随输入或提交更新。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "页面交互",
        "sections": [
          {
            "title": "页面交互",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "查看说明",
                "目录 / 展开条目",
                "阅读当前部署使用说明。"
              ],
              [
                "咨询",
                "合作咨询相关入口",
                "进入联系或咨询页面。"
              ],
              [
                "搜索",
                "关键词搜索 / 清空",
                "定位本页说明。"
              ],
              [
                "切换说明页",
                "左侧关于平台导航",
                "打开所选说明，使用帮助内可继续进入数据使用指南。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "课题中心-高保真原型.html": {
    "name": "课题中心",
    "intro": "展示开放指南与立项课题，可查看内容和下载已提供材料。",
    "field": [
      {
        "label": "开放课题与立项课题",
        "sections": [
          {
            "title": "开放课题与立项课题",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "指南名称、年度、批次",
                "指南展示",
                "读取后台课题指南管理已发布的内容。"
              ],
              [
                "指南正文、附件、研究方向",
                "只读内容或附件",
                "正文、方向由后台维护，附件按指南提供情况显示。"
              ],
              [
                "课题编号、名称、所属指南",
                "课题基本信息",
                "对应后台课题管理的记录。"
              ],
              [
                "机构、团队负责人、课题类型",
                "课题归属",
                "后台按机构选择对应的团队负责人，课题类型使用当前表单选项。"
              ],
              [
                "课题状态、公示期",
                "状态与公示日期",
                "按当前可公示记录展示。"
              ]
            ]
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "指南与课题浏览",
        "sections": [
          {
            "title": "指南与课题浏览",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "年度筛选",
                "勾选一个或多个年度",
                "刷新相应指南和课题列表。"
              ],
              [
                "指南查看",
                "查看指南",
                "展开对应指南内容。"
              ],
              [
                "下载",
                "下载指南 / 下载课题清单",
                "下载所选指南附件或当前提供的清单。"
              ],
              [
                "课题搜索",
                "关键词、类型、分页",
                "按名称、编号、负责人或单位筛选。"
              ],
              [
                "课题详情",
                "点击课题名称",
                "查看立项课题内容。"
              ]
            ]
          }
        ]
      }
    ]
  },
  "门户-领导数据看板.html": {
    "name": "平台数据看板",
    "intro": "从现有记录汇总协同参与、成果产出、转化、课题进展及资源使用；仅向当前授权管理员开放。",
    "field": [
      {
        "label": "指标与明细",
        "sections": [
          {
            "title": "指标与明细",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "课题年度",
                "全部年度 / 现有年度",
                "按年度过滤对应记录。"
              ],
              [
                "科研团队、机构、在研课题、登记成果",
                "数量汇总",
                "点击卡片查看构成明细。"
              ],
              [
                "纳管模型、数据集、已发布服务、可在线使用",
                "当前目录及服务统计",
                "按实际记录与服务开放状态计数。"
              ],
              [
                "课题成果产出率",
                "产出成果的课题数 / 课题数",
                "分子、分母可查看对应明细；按页面当前统计口径。"
              ],
              [
                "成果上架率、成果应用率",
                "已上架 / 已应用成果数相对登记成果数",
                "随当前记录计算，查看口径和构成。"
              ],
              [
                "课题进展、成果落地、资源活性",
                "明细与使用记录",
                "展示当前范围，不增加年度绩效管理字段。"
              ]
            ]
          }
        ]
      },
      {
        "label": "页面控件取值",
        "sections": [
          {
            "title": "页面控件取值",
            "head": [
              "字段 / 内容",
              "类型 / 取值",
              "规则与用途"
            ],
            "rows": [
              [
                "课题年度",
                "下拉",
                "全部年度 / 2026 年度 / 2025 年度"
              ]
            ],
            "note": "仅记录当前页面已有的选项和长度限制；业务必填与联动规则见相应业务页签。"
          }
        ]
      }
    ],
    "guide": [
      {
        "label": "看板交互",
        "sections": [
          {
            "title": "看板交互",
            "head": [
              "场景",
              "操作入口",
              "结果与限制"
            ],
            "rows": [
              [
                "访问",
                "已授权管理员进入",
                "无权限账号显示访问限制，演示切换不等于生产授权。"
              ],
              [
                "年度切换",
                "课题年度选择",
                "刷新对应统计。"
              ],
              [
                "明细与口径",
                "指标卡、明细、查看口径",
                "打开该指标的计算说明和记录。"
              ],
              [
                "导出",
                "导出汇总 / 明细抽屉导出",
                "下载当前范围的数据。"
              ],
              [
                "返回门户",
                "页头业务导航或个人中心",
                "按当前登录状态返回门户业务页面。"
              ]
            ]
          }
        ]
      }
    ]
  }
};

  var VIEW_DOCS = {};

  function pageDocKey() {
    var file = decodeURIComponent(location.pathname.split('/').pop() || '') || 'index.html';
    var routes = VIEW_DOCS[file];
    if (!routes) return file;
    if (file === '后台-审批中心.html') {
      var approval = document.getElementById('approval-root');
      if (approval && routes[approval.dataset.view]) return routes[approval.dataset.view];
    }
    var view = location.hash.slice(1).split(/[?/=]/)[0];
    return Object.prototype.hasOwnProperty.call(routes, view) ? routes[view] : routes.default;
  }

  function inject() {
    if (document.querySelector('.mtdev-group')) return;

    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var wrap = document.createElement('div');
    wrap.setAttribute('data-devdoc-version', '2026-11-18');
    wrap.innerHTML =
      drawerHTML('mtdevFieldMask', 'mtdevFieldBody', 'mtdevFieldTitle') +
      drawerHTML('mtdevGuideMask', 'mtdevGuideBody', 'mtdevGuideTitle') +
      '<div class="mtdev-group">' +
      '<button class="mtdev-btn field" type="button" aria-haspopup="dialog" aria-controls="mtdevFieldMask">📋 字段说明</button>' +
      '<button class="mtdev-btn guide" type="button" aria-haspopup="dialog" aria-controls="mtdevGuideMask">🧪 交互演示指引</button>' +
      '</div>';
    document.body.appendChild(wrap);
    wrap.addEventListener('click', function (event) { event.stopPropagation(); });

    var group = wrap.querySelector('.mtdev-group');
    var fieldMask = wrap.querySelector('#mtdevFieldMask');
    var guideMask = wrap.querySelector('#mtdevGuideMask');
    var activeMask, opener, activeKey;

    function syncDocs() {
      var next = pageDocKey();
      if (activeKey === next) return;
      activeKey = next;
      wrap.dataset.devdocPage = next;
      var doc = DOCS[next] || DOCS.__default__;
      var foot = '<p class="mtdev-note">表单校验以原型当前操作为准。示例数据、模拟任务及账号切换用于原型演示。</p>';
      renderDrawer(fieldMask, doc, '📋 字段说明', doc.field, 'mtdevF', foot);
      renderDrawer(guideMask, doc, '🧪 交互演示指引', doc.guide, 'mtdevG');
      if (activeMask) activeMask.querySelector('.mtdev-x').focus({ preventScroll: true });
    }

    function close() {
      if (!activeMask) return;
      activeMask.classList.remove('on');
      activeMask = null;
      if (opener && opener.isConnected) opener.focus({ preventScroll: true });
      opener = null;
    }

    function attach(mask, trigger) {
      trigger.onclick = function () {
        syncDocs();
        close();
        opener = trigger;
        activeMask = mask;
        var body = mask.querySelector('.mtdev-bd');
        selectTab(body, 0);
        body.scrollTop = 0;
        mask.classList.add('on');
        mask.querySelector('.mtdev-x').focus({ preventScroll: true });
      };
      mask.querySelector('.mtdev-x').onclick = close;
      mask.onclick = function (event) { if (event.target === mask) close(); };
      mask.onkeydown = function (event) {
        if (event.key !== 'Tab') return;
        var first = mask.querySelector('.mtdev-x');
        var last = mask.querySelector('.mtdev-tab.on');
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      };
      draggable(mask.querySelector('.mtdev-drawer'), mask.querySelector('.mtdev-hd'));
    }

    attach(fieldMask, group.querySelector('.mtdev-btn.field'));
    attach(guideMask, group.querySelector('.mtdev-btn.guide'));
    syncDocs();
    window.addEventListener('hashchange', syncDocs);
    window.addEventListener('popstate', syncDocs);
    window.addEventListener('approval:viewchange', syncDocs);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') close();
    });
    draggable(group);

    /* Avoid covering the host application's full-screen dialog controls. */
    setInterval(function () {
      var overlays = document.querySelectorAll('[class*=mask],[class*=overlay],[class*=backdrop],[class*=modal]');
      var covered = Array.from(overlays).some(function (element) {
        if (/mtdev/.test(element.className || '')) return false;
        var style = window.getComputedStyle(element);
        if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) return false;
        var box = element.getBoundingClientRect();
        return box.width > window.innerWidth * 0.9 && box.height > window.innerHeight * 0.9;
      });
      group.classList.toggle('mtdev-dim', covered);
    }, 250);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
