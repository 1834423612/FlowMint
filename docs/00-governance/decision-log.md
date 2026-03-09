# Decision Log

> Record durable architecture or delivery decisions here.

## Template

```md
## Decision YYYY-MM-DD
- Title:
- Status: proposed / accepted / replaced / deprecated
- Context:
- Decision:
- Consequences:
- Related files:
```

## Entries

### Decision 2026-03-09-001
- Title: 采用 Tailwind CSS 4 + CSS 变量深色主题系统
- Status: accepted
- Context: 文档要求深色主题，需要支持未来可能的浅色模式切换。
- Decision: 使用 Tailwind CSS 4 的 @theme inline 语法定义设计令牌，通过 CSS 变量实现主题切换能力，默认启用深色主题。
- Consequences: 统一的设计令牌系统便于维护；未来添加浅色主题只需修改 CSS 变量值。
- Related files: `app/globals.css`, `components/providers.tsx`

### Decision 2026-03-09-002
- Title: 采用 next-intl 作为国际化方案
- Status: accepted
- Context: 需要支持中英文双语，且要易于后期通过 Crowdin 等平台管理翻译。
- Decision: 使用 next-intl 库，翻译文件存储在 messages/ 目录下的 JSON 文件中，通过 cookie 存储用户语言偏好。
- Consequences: 结构化的翻译文件易于管理；符合行业标准的 i18n 方案。
- Related files: `i18n/config.ts`, `i18n/request.ts`, `messages/zh.json`, `messages/en.json`

### Decision 2026-03-09-003
- Title: 工作流编辑器采用 ReactFlow + Zustand 架构
- Status: accepted
- Context: 文档规定使用 ReactFlow 构建可视化编辑器，需要高效的状态管理。
- Decision: ReactFlow 负责画布渲染和交互，Zustand 管理工作流状态（节点、边、选中状态等），自定义节点组件实现各类节点类型。
- Consequences: 清晰的关注点分离；Zustand 的轻量特性适合复杂状态管理；易于扩展新节点类型。
- Related files: `stores/workflow-store.ts`, `components/editor/*.tsx`, `types/workflow.ts`

### Decision 2026-03-09-004
- Title: 节点类型采用分类注册表模式
- Status: accepted
- Context: 文档定义了 6 大类 29 种节点类型，需要可扩展的节点系统。
- Decision: 在 node-library.tsx 中定义节点类型注册表，按类别组织（触发器、浏览器、AI、数据、流程控制、输出），每个节点类型包含 id、label、icon、category、description 等元数据。
- Consequences: 易于添加新节点类型；拖放功能可复用节点元数据；为节点市场预留扩展空间。
- Related files: `components/editor/node-library.tsx`, `components/editor/custom-node.tsx`

### Decision 2026-03-08
- Title: Start as single Next.js app and reserve worker split
- Status: accepted
- Context: MVP speed matters, but browser execution may later need worker isolation and queueing.
- Decision: Keep UI and API in one Next.js app first, but design runtime interfaces so execution can move into a worker later.
- Consequences: Faster initial delivery; future extraction work should be manageable.
- Related files: `02-architecture/architecture.md`, `02-architecture/browser-engine-design.md`
