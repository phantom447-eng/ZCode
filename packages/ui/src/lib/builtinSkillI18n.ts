import type { Locale, SkillScope } from "@zcode/shared";

interface SkillDisplayCandidate {
  name: string;
  description: string;
  path: string;
  scope: SkillScope;
  pluginName?: string;
}

const OFFICIAL_BUILTIN_PLUGIN_NAMES = new Set([
  "android-emulator",
  "browser",
  "browser-use",
  "document-skills",
  "documents",
  "pdf",
  "presentations",
  "spreadsheets",
  "ios-simulator",
  "restore-legacy-sessions",
  "skill-creator",
  "plugin-creator",
  "superpowers",
  "zcode-guide",
]);

const OFFICIAL_PLUGIN_PATH_MARKERS = [
  "/zcode-plugins-official/",
  "\\zcode-plugins-official\\",
  "/android-emulator-plugin/",
  "/browser-use-plugin/",
  "/document-skills-plugin/",
  "/documents-plugin/",
  "/pdf-plugin/",
  "/presentations-plugin/",
  "/spreadsheets-plugin/",
  "/ios-simulator-plugin/",
  "/restore-legacy-sessions-plugin/",
  "/skill-creator-plugin/",
  "/plugin-creator-plugin/",
  "/superpowers-plugin/",
  "/zcode-guide-plugin/",
];

const BUILTIN_SKILL_DESCRIPTIONS: Record<string, Record<Locale, string>> = {
  "android-dev": {
    "zh-CN": "通过 android-emulator MCP 工具构建、运行、检查并轻量自动化 Android 应用。",
    "en-US": "Build, run, inspect, and lightly automate Android apps through the android-emulator MCP tools.",
    "ru-RU": "Сборка, запуск, проверка и лёгкая автоматизация Android-приложений через MCP-инструменты android-emulator.",
  },
  "brainstorming": {
    "zh-CN": "在任何创造性工作前使用：创建功能、构建组件、增加能力或修改行为；先探索用户意图、需求和设计。",
    "en-US": "Use before any creative work, including creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements, and design before implementation.",
    "ru-RU": "Используйте перед любой творческой работой: созданием функций, компонентов, добавлением возможностей или изменением поведения. Исследует намерения, требования и дизайн до реализации.",
  },
  "control-browser": {
    "zh-CN": "控制 ZCode 内置浏览器，用于打开、检查、点击、输入、截图或验证网页和本地开发页面。",
    "en-US": "Control ZCode's built-in browser to open, inspect, click, type, screenshot, or verify webpages and local development targets.",
    "ru-RU": "Управление встроенным браузером ZCode: открытие, проверка, клики, ввод, скриншоты и верификация веб-страниц и локальных страниц разработки.",
  },
  "dispatching-parallel-agents": {
    "zh-CN": "面对 2 个以上彼此独立、无共享状态或顺序依赖的任务时使用。",
    "en-US": "Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies.",
    "ru-RU": "Используйте при 2+ независимых задачах, которые можно выполнять без общего состояния и последовательных зависимостей.",
  },
  "docx": {
    "zh-CN": "完整的 DOCX 文档创建、编辑与分析能力，支持修订、批注、格式保持和文本提取。适用于创建新文档、修改内容、处理修订、添加批注或其它专业 Word 文档任务。",
    "en-US": "Create, edit, and analyze DOCX documents with revisions, comments, formatting preservation, and text extraction. Use for new documents, edits, revision handling, comments, and professional Word document work.",
    "ru-RU": "Создание, редактирование и анализ документов DOCX: ревизии, комментарии, сохранение форматирования и извлечение текста. Для новых документов, правок, ревизий, комментариев и профессиональной работы с Word.",
  },
  "docx-viewer": {
    "zh-CN": "在 Word 文档侧栏与用户一起查看和讨论 .docx 文件。适用于打开、阅读、审阅或询问工作区中的 Word 文档，用户提到在查看器中选中或引用的内容，或需要检查刚生成的文档。",
    "en-US": "View and discuss Word (.docx) files with the user in the Documents side panel. Use to open, read, review, or ask about a workspace Word document, when the user refers to a selection or reference in the viewer, or to check a document you just produced.",
    "ru-RU": "Просмотр и обсуждение файлов Word (.docx) с пользователем в боковой панели «Документы». Для открытия, чтения и рецензирования документа workspace, когда пользователь ссылается на выделение в просмотрщике или нужно проверить только что созданный документ.",
  },
  "executing-plans": {
    "zh-CN": "已有书面实现计划，并要在带评审检查点的独立会话中执行时使用。",
    "en-US": "Use when you have a written implementation plan to execute in a separate session with review checkpoints.",
    "ru-RU": "Используйте, когда есть письменный план реализации, который нужно выполнить в отдельной сессии с контрольными точками ревью.",
  },
  "finishing-a-development-branch": {
    "zh-CN": "实现已完成、测试通过、需要决定如何合并、发 PR 或清理分支时使用。",
    "en-US": "Use when implementation is complete, tests pass, and you need to decide how to integrate the work through merge, PR, or cleanup.",
    "ru-RU": "Используйте, когда реализация завершена, тесты проходят и нужно решить, как интегрировать работу: merge, PR или очистка.",
  },
  "ios-dev": {
    "zh-CN": "通过 ios-simulator MCP 工具构建、运行、检查并轻量自动化 iOS 模拟器应用。",
    "en-US": "Build, run, inspect, and lightly automate iOS Simulator apps through the ios-simulator MCP tools.",
    "ru-RU": "Сборка, запуск, проверка и лёгкая автоматизация приложений iOS Simulator через MCP-инструменты ios-simulator.",
  },
  "pdf": {
    "zh-CN": "专业 PDF 工具集，覆盖报告、创意视觉、学术 LaTeX 和现有 PDF 处理四条生产线。可按文档类型自动路由，支持报告、海报、论文、简历、提取、合并、拆分、表单填写和格式转换等任务。",
    "en-US": "Professional PDF toolkit for reports, creative visuals, academic LaTeX, and existing-PDF workflows. Supports reports, posters, papers, resumes, extraction, merge, split, forms, and conversion.",
    "ru-RU": "Профессиональный набор инструментов PDF: отчёты, креативная графика, академический LaTeX и обработка готовых PDF. Поддерживает отчёты, постеры, статьи, резюме, извлечение, слияние, разбиение, формы и конвертацию.",
  },
  "pdf-viewer": {
    "zh-CN": "在 PDF 侧栏与用户一起查看和讨论 PDF 文件。适用于打开、阅读、审阅或询问工作区中的 PDF，用户提到在查看器中选中或引用的内容，或需要检查刚生成的 PDF。",
    "en-US": "View and discuss PDF files with the user in the PDF side panel. Use to open, read, review, or ask about a workspace PDF, when the user refers to a selection or reference in the viewer, or to check a PDF you just produced.",
    "ru-RU": "Просмотр и обсуждение PDF-файлов с пользователем в панели PDF. Для открытия, чтения и рецензирования PDF из workspace, когда пользователь ссылается на выделение в просмотрщике или нужно проверить только что созданный PDF.",
  },
  "pptx": {
    "zh-CN": "检查并窄范围更新从 PPTX 预览区选择的元素。通过完整文件指纹和 OOXML 定位校验 shape 文本或表格单元格，冲突时停止而不猜测。",
    "en-US": "Inspect and narrowly update elements selected in PPTX Preview Pane. Verifies the whole-file fingerprint and OOXML locator for shape or table-cell text, and stops on conflicts instead of guessing.",
    "ru-RU": "Проверка и точечное обновление элементов, выбранных в области предпросмотра PPTX. Проверяет отпечаток целого файла и OOXML-локатор для текста фигур и ячеек таблиц, при конфликтах останавливается вместо угадывания.",
  },
  "pptx-viewer": {
    "zh-CN": "在演示文稿侧栏与用户一起查看和讨论 .pptx 演示文稿。适用于一起打开、审阅或询问工作区中的演示文稿，用户提到在查看器中选中或引用的幻灯片或元素，或需要检查刚生成的演示文稿。",
    "en-US": "View and discuss PowerPoint (.pptx) decks with the user in the Presentations side panel. Use to open, review, or ask about a workspace deck together, when the user refers to a slide or shape selected or referenced in the viewer, or to check a deck you just produced.",
    "ru-RU": "Просмотр и обсуждение презентаций (.pptx) с пользователем в панели «Презентации». Для совместного открытия, рецензирования или вопросов по презентации workspace, когда пользователь ссылается на слайд или фигуру в просмотрщике, или для проверки только что созданной презентации.",
  },
  "receiving-code-review": {
    "zh-CN": "收到代码评审反馈、准备实现建议前使用；尤其当反馈不清楚或技术上可疑时，需要严谨验证而非盲目同意。",
    "en-US": "Use when receiving code review feedback before implementing suggestions, especially when feedback is unclear or technically questionable.",
    "ru-RU": "Используйте при получении замечаний код-ревью перед реализацией правок, особенно если замечания неясны или технически сомнительны.",
  },
  "requesting-code-review": {
    "zh-CN": "完成任务、实现重大功能或合并前，用于请求代码评审以确认满足需求。",
    "en-US": "Use when completing tasks, implementing major features, or before merging to verify work meets requirements.",
    "ru-RU": "Используйте по завершении задач, при крупных функциях или перед merge, чтобы запросить код-ревью и проверить соответствие требованиям.",
  },
  "restore-legacy-sessions": {
    "zh-CN": "检查、规划或执行 ACP 时代 ZCode 旧 session 恢复到新的 ZCode 任务与会话库。",
    "en-US": "Inspect, plan, or restore old ACP-era ZCode sessions into the new ZCode task and session stores.",
    "ru-RU": "Проверка, планирование или восстановление старых сессий ZCode эпохи ACP в новые хранилища задач и сессий ZCode.",
  },
  "plugin-creator": {
    "zh-CN": "创建、校验 ZCode 插件，并指导本地安装与更新。",
    "en-US": "Create and validate ZCode plugins, and guide local installation and updates.",
    "ru-RU": "Создание и валидация плагинов ZCode, сопровождение локальной установки и обновлений.",
  },
  "skill-creator": {
    "zh-CN": "创建新技能、编辑现有技能并迭代措辞。适用于从零编写 SKILL.md、改进已有技能、把重复工作流沉淀为可复用技能，或优化技能描述以提升触发可靠性。",
    "en-US": "Create new skills, edit existing skills, and iterate wording. Use for writing SKILL.md from scratch, improving skills, capturing repeated workflows, or tuning descriptions for reliable triggering.",
    "ru-RU": "Создание новых скиллов, редактирование существующих и доработка формулировок. Для написания SKILL.md с нуля, улучшения скиллов, превращения повторяющихся workflow в переиспользуемые скиллы и настройки описаний для надёжного срабатывания.",
  },
  "subagent-driven-development": {
    "zh-CN": "在当前会话中执行包含独立任务的实现计划时使用。",
    "en-US": "Use when executing implementation plans with independent tasks in the current session.",
    "ru-RU": "Используйте при выполнении планов реализации с независимыми задачами в текущей сессии.",
  },
  "systematic-debugging": {
    "zh-CN": "遇到任何 bug、测试失败或异常行为时，在提出修复前使用。",
    "en-US": "Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes.",
    "ru-RU": "Используйте при любом баге, падении теста или неожиданном поведении — до предложения исправлений.",
  },
  "test-driven-development": {
    "zh-CN": "实现任何功能或 bugfix 时，在编写实现代码前使用。",
    "en-US": "Use when implementing any feature or bugfix, before writing implementation code.",
    "ru-RU": "Используйте при реализации любой функции или багфикса — до написания кода реализации.",
  },
  "using-git-worktrees": {
    "zh-CN": "开始需要隔离的功能工作或执行实现计划前使用，确保存在隔离 workspace，优先使用原生工具，否则回退 git worktree。",
    "en-US": "Use when starting feature work that needs isolation or before executing implementation plans. Ensures an isolated workspace exists via native tools or git worktree fallback.",
    "ru-RU": "Используйте перед началом работы, требующей изоляции, или выполнением планов реализации. Гарантирует изолированное workspace через нативные инструменты с фолбэком на git worktree.",
  },
  "using-superpowers": {
    "zh-CN": "开始任何对话时使用；说明如何查找和使用技能，并要求在任何回复包括澄清问题前调用 Skill 工具。",
    "en-US": "Use when starting any conversation. Establishes how to find and use skills, requiring Skill tool invocation before any response including clarifying questions.",
    "ru-RU": "Используйте в начале любого диалога. Задаёт правила поиска и применения скиллов, требуя вызов инструмента Skill до любого ответа, включая уточняющие вопросы.",
  },
  "verification-before-completion": {
    "zh-CN": "准备声明工作完成、已修复或测试通过前使用；要求先运行验证命令并确认输出，先有证据再下结论。",
    "en-US": "Use before claiming work is complete, fixed, or passing. Requires running verification commands and confirming output before success claims.",
    "ru-RU": "Используйте перед заявлением о завершении работы или прохождении тестов. Требует выполнить проверочные команды и подтвердить вывод: сначала доказательства, потом выводы.",
  },
  "web-gui-tester": {
    "zh-CN": "使用 ZCode Browser Use 对网页和本地 Web 前端执行纯 GUI 黑盒测试，通过真实用户交互、DOM 语义证据和截图验证功能、交互与响应式布局。",
    "en-US": "Run pure GUI black-box tests against websites and local web frontends with ZCode Browser Use, combining real user interactions, semantic DOM evidence, and inspected screenshots.",
    "ru-RU": "Чистое GUI-тестирование методом чёрного ящика сайтов и локальных фронтендов через ZCode Browser Use: реальные действия пользователя, семантические доказательства из DOM и проверенные скриншоты.",
  },
  "writing-plans": {
    "zh-CN": "已有规格或多步骤任务需求，在动代码前用于编写实现计划。",
    "en-US": "Use when you have a spec or requirements for a multi-step task, before touching code.",
    "ru-RU": "Используйте, когда есть спека или требования для многошаговой задачи, — до написания кода.",
  },
  "writing-skills": {
    "zh-CN": "创建新技能、编辑现有技能或在发布前验证技能是否有效时使用。",
    "en-US": "Use when creating new skills, editing existing skills, or verifying skills work before deployment.",
    "ru-RU": "Используйте при создании новых скиллов, редактировании существующих или проверке скиллов перед развёртыванием.",
  },
  "xlsx-viewer": {
    "zh-CN": "在电子表格侧栏与用户一起查看和讨论 .xlsx 工作簿。适用于一起打开、浏览或询问工作区中的工作簿，用户提到在查看器中选中或引用的单元格，或需要检查刚生成的工作簿。",
    "en-US": "View and discuss Excel (.xlsx) workbooks with the user in the Spreadsheets side panel. Use to open, browse, or ask about a workspace workbook together, when the user refers to cells selected or referenced in the viewer, or to check a workbook you just produced.",
    "ru-RU": "Просмотр и обсуждение книг Excel (.xlsx) с пользователем в панели «Таблицы». Для совместного открытия, просмотра или вопросов по книге workspace, когда пользователь ссылается на ячейки в просмотрщике, или для проверки только что созданной книги.",
  },
};

export function resolveSkillSourceLabel(scope: SkillScope, locale?: Locale): string {
  if (locale === "zh-CN") {
    if (scope === "workspace") return "工作区";
    if (scope === "plugin") return "插件";
    return "用户";
  }
  if (locale === "ru-RU") {
    if (scope === "workspace") return "Рабочее пространство";
    if (scope === "plugin") return "Плагин";
    return "Пользователь";
  }
  if (scope === "workspace") return "Workspace";
  if (scope === "plugin") return "Plugin";
  return "User";
}

export function resolveSkillDisplayDescription(
  skill: SkillDisplayCandidate,
  locale?: Locale,
): string {
  const localized = isOfficialBuiltinSkill(skill)
    ? BUILTIN_SKILL_DESCRIPTIONS[skill.name]?.[locale ?? "en-US"]
    : undefined;
  return localized ?? skill.description;
}

function isOfficialBuiltinSkill(skill: SkillDisplayCandidate): boolean {
  if (skill.scope !== "plugin") {
    return false;
  }
  const pluginName = skill.pluginName?.trim();
  if (pluginName && OFFICIAL_BUILTIN_PLUGIN_NAMES.has(pluginName)) {
    return true;
  }
  const normalizedPath = skill.path.replaceAll("\\", "/");
  return OFFICIAL_PLUGIN_PATH_MARKERS.some((marker) => normalizedPath.includes(marker));
}
