# Instruction

## Purpose

This repository is building a **general-purpose AI browser automation platform**. It is not meant to be a throwaway single-site script. The system should support reusable workflows, a visual editor, AI-assisted browser action planning, execution logs, screenshots, provider abstraction, and future SaaS-style extensibility.

## Non-negotiable working rules

1. `/docs` is the source of truth.
2. Do not silently change stack, architecture, or core design direction.
3. UI must stay consistent across all pages, flows, and future modules.
4. Default user-facing AI explanations and progress text should be **Chinese**, unless a technical reason makes another language more suitable.
5. Code, type names, schema names, and technical documents may use English when it is more efficient.
6. All interface text must be i18n-ready. No hard-coded UI text.
7. Every completed task must be checked in `project-checklist.md`.
8. Every completed task must be summarized in `agent-log.md`.
9. Significant architecture changes or tradeoffs must be recorded in `decision-log.md`.
10. Every major implementation should be reviewed by another model or another pass using `review-board.md`.

## What AI tools should do first

Before generating code or making changes:

1. Read `/docs/README.md`
2. Read `/docs/00-governance/engineering-rules.md`
3. Read `/docs/00-governance/project-checklist.md`
4. Read the specific product and architecture docs related to the assigned task
5. Determine whether the task belongs to:
   - UI/layout/design system
   - backend/API
   - workflow engine
   - data/database
   - security
   - i18n
6. Work only on the current target scope
7. Update logs and checklist after finishing

## Initial build principle

- Start as a **Next.js monorepo-style single app** for speed.
- Keep execution engine modular so it can later move into a separate worker service.
- Queue system is optional in MVP, but architecture must reserve queue compatibility.
- MySQL 8.4 is the main database.
- Cloudflare R2 is the binary/object storage.
- Authentication must reserve room for email/password plus SSO binding.
- AI providers must be abstracted and support both major vendors and OpenRouter.
- Icon system should use **Iconify**.
- Visual workflow editor should be designed to evolve without destructive rewrites.

## Raw user source notes (preserved for fidelity)

### Raw note set A

> 前端next.js，后端还是这个nextjs（react）项目，执行器和你说的一样就按Playwright和Stagehand这俩，队列真的需要吗？因为服务器目前来说部署有点麻烦（但可以设计为非必须的可选冗余方案，另外消息队列这个bullmq和rabbitmq的区别是什么？），数据库能否使用MySQL8.4统一一下？存储使用cloudflare r2。登录注册设计出sso冗余（兼容字段允许其他sso绑定起来如casdoor方便一些）。可以接入大厂商ai同时加入openrouter接入选项。
>
> 目前想的是如果只为了一个网站去做这个项目有点太浪费了（不值得因为一个网站就耗费大量精力做出一个“日抛/用完即弃的项目），想的是做出一个通用的类似SaaS（没有多租户，就是大概允许高度定制自动化设计那种）可以允许用户自行创建设计这些自动化任务，这个网站提供一个平台，用户可以自己在上面操作设置自动化流程（类似coze、飞书这种设计和交互等操作），有设计页面类似coze那种拖拽流程图，当然还有根据执行器设计的允许用户通过大语言模型定制浏览器网站操作路径或者是自行编程/连线等操作进行创建。
>
> 我将完全使用v0.dev（用的是最高级的Claude opus 4.6[避免用到傻模型费时废力改bug]首先进行项目创建和一系列react页面等操作设计），还有codex gpt-5.4（也是最高级模型）帮我互换着共同开发编写这个项目。而我只是起到提示和灵感指引，不会自己写代码，但我会进行查看的适当的引导作用。

### Raw note set B

> 我觉得还需要再增加的东西：
> 技术栈再加一个iconify图标，然后给一个check list，让所有agent每做完一个功能或东西就打个勾确认一下再继续下一个。同时可以加一个类似日志的东西，要求他们用ai自己能秒懂的方法记录下来他们干的事情，同时确保不同厂商的大语言模型读了他们这个日志能够知道啥已经完成了啥还没完成或者是需要着重处理修复的。同时还要加上模型间互相审查的内容，确保彼此给对方差错确保代码没有问题或漏洞。

### Raw note set C

> 上面这些启动提示还有ai协作流程都给我创建一个对应的.md文档存储，这样方便直接丢给ai指示其跟随步骤。同时加一个我先前忘了提但是很重要的一步：留出专业SaaS等企业的i18n国际化语言适配（可以暂时只做2个语言：中文和英文）的地方，确保界面里面关于文本的地方不要写死语言文本，而是应当放到一个易于管理的语言文件里面归类存放便于后期他人修改（就比如别人可以直接用现在很火许多开源项目都用它进行国际化适配的那个易于编辑文案的那个网站工具进行国际化文案提交改进）；然后确保默认ai输出的提示文本是中文即可（让我看懂），但是代码或其他文档之类的不一定非得是中文，按照他们ai觉得最合适且最高效的语言就行（中文也可以，如果他们这么认为）。

### Raw note set D

> 目前上面你给的那新增 9 个 docs 文档无法下载，请重新检查，如果没有就重新写这几个需要的文档。确保你上面说的这些要求和限制都已经补充或加到了这些需要的文档里面。
>
> 可以，请你帮我设计下面这三个内容，但是不要定死，只是一个框架和大概，后续会不断完善并能够允许随时插入而不会造成破坏性内容。这些设计可以还是使用markdown写下来作为项目的白皮书或者开发文档加以支持，然后再在先前的项目说明里面补充一点就是确保每次设计数据库的部分时分别给出数据库建表.sql文件和示例数据的插入/更新.sql代码内容。同时确保最终所有建表内容都合并到一个scheme sql文件里面方便开始初始化时直接使用，同时允许一些示例表数据条作为启动时的默认值。
>
> “1️⃣ 完整数据库 schema（Prisma）
> 2️⃣ Workflow 编辑器架构（ReactFlow版）
> 3️⃣ Browser automation AI planning system（核心 AI 架构）”
