/**
 * Registro central del sitio: menú, estados y vínculos a Figma.
 * Para agregar un componente: crear su doc en src/content/components/<slug>.tsx
 * y registrarlo aquí.
 */
export const FIGMA_FILE = "k9llQiGMDSuQn9zWXeUo6r";
export const FIGMA_NAME = "Platform-Designs";
export const figmaUrl = (nodeId?: string) =>
  `https://www.figma.com/design/${FIGMA_FILE}/${FIGMA_NAME}${nodeId ? `?node-id=${nodeId.replace(":", "-")}` : ""}`;

export type Status = "ready" | "beta" | "planned";
export const statusLabel: Record<Status, string> = { ready: "Listo", beta: "Beta", planned: "Mapeado" };

export interface NavEntry {
  slug: string;
  title: string;
  description: string;
  status: Status;
  figma?: string;
  /** Instancias aproximadas en el archivo de Figma (inventario). */
  usage?: number;
  keywords?: string[];
  /** Nivel en el sistema. */
  level?: "atom" | "molecule" | "organism";
  /** Nombre del componente en Figma (librería Untitled UI o local). */
  figmaName?: string;
  /** "Untitled UI" si viene de la librería, "Local" si está armado en el archivo de Trato. */
  origin?: "Untitled UI" | "Local";
  /** Variantes que realmente se usan en los diseños, por propiedad. */
  variants?: Record<string, string[]>;
  /** Páginas de Figma donde aparece. */
  pages?: string[];
  /** Pantallas de ejemplo en Figma. */
  examples?: { name: string; node: string }[];
}

export const levelLabel = { atom: "Átomos", molecule: "Moléculas", organism: "Organismos" } as const;

export const foundations: NavEntry[] = [
  { slug: "colors", title: "Color", description: "Paletas primitivas y tokens semánticos en claro y oscuro.", status: "ready", keywords: ["paleta", "tokens", "indigo", "brand"] },
  { slug: "typography", title: "Tipografía", description: "Inter, escala tipográfica y pesos.", status: "ready", keywords: ["fuente", "inter", "texto"] },
  { slug: "spacing", title: "Espaciado y radios", description: "Escala de espaciado, radios de borde y layout.", status: "ready", keywords: ["padding", "gap", "radius", "grid"] },
  { slug: "elevation", title: "Elevación", description: "Sombras, bordes y superficies.", status: "ready", keywords: ["shadow", "sombra"] },
  { slug: "icons", title: "Iconografía", description: "Set de íconos, tamaños y los íconos más usados.", status: "ready", keywords: ["lucide", "icon"] },
  { slug: "voice", title: "Voz y microcopy", description: "Tono, ayudas, tooltips y textos de estado.", status: "beta", keywords: ["copy", "textos", "ayudas"] },
];

export const components: NavEntry[] = [
  // ── Átomos ──────────────────────────────────────────────
  { slug: "button", title: "Button", level: "atom", description: "Acciones primarias, secundarias, IA y destructivas.", status: "ready", usage: 1220, figma: "267:15166", figmaName: "Buttons/Button", origin: "Untitled UI", keywords: ["botón", "cta"],
    variants: { Size: ["sm", "md", "lg"], Hierarchy: ["Primary", "Secondary", "Tertiary", "Link color", "Link gray"], State: ["Default", "Disabled", "Loading"], "Icon only": ["True", "False"] } },
  { slug: "badge", title: "Badge", level: "atom", description: "Estados, contadores, días y etiquetas.", status: "ready", usage: 2029, figma: "232:10909", figmaName: "Badge", origin: "Untitled UI", keywords: ["pill", "tag", "estado"],
    variants: { Size: ["sm", "md", "lg"], Type: ["Badge color", "Pill color", "Badge modern"], Icon: ["False", "Dot", "X close", "Icon leading", "Icon trailing", "Country"], Color: ["Gray", "Blue gray", "Gray blue", "Blue", "Blue light", "Success", "Warning", "Error", "Orange", "Purple"] } },
  { slug: "avatar", title: "Avatar", level: "atom", description: "Participantes, usuarios y grupos.", status: "ready", usage: 580, figma: "471:48933", figmaName: "Avatar · Avatar group", origin: "Untitled UI", keywords: ["usuario", "participante"],
    variants: { Size: ["xs", "sm", "md", "xl"], Text: ["True", "False"], "Status icon": ["False", "Online indicator"] } },
  { slug: "checkbox-switch", title: "Checkbox, Radio y Toggle", level: "atom", description: "Selección múltiple, única y opciones on/off.", status: "ready", usage: 448, figma: "267:15960", figmaName: "Checkbox · Toggle", origin: "Untitled UI", keywords: ["toggle", "switch", "check", "radio"],
    variants: { Size: ["sm", "md"], Type: ["Checkbox", "Radio"], Checked: ["True", "False"], State: ["Default", "Disabled", "Selected"], "Toggle · Pressed": ["True", "False"] } },
  { slug: "tooltip", title: "Tooltip", level: "atom", description: "Ayudas contextuales.", status: "ready", usage: 59, figma: "661:6420", figmaName: "Tooltip · Help icon", origin: "Untitled UI", keywords: ["ayuda", "hint"],
    variants: { "Supporting text": ["True", "False"], Arrow: ["None", "Left", "Right", "Bottom center"] } },
  { slug: "dot", title: "Dot", level: "atom", description: "Indicador de estado dentro de badges y listas.", status: "planned", usage: 208, figmaName: "_Dot", origin: "Untitled UI", pages: ["Vista participante", "Document Editor", "Clause Pulse", "New Dashboard", "New UI (Oscar)"],
    variants: { Size: ["sm"], Outline: ["False"] } },
  { slug: "featured-icon", title: "Featured icon", level: "atom", description: "Ícono destacado en modales, avisos y estados vacíos.", status: "planned", usage: 3, figmaName: "Featured icon outline", origin: "Untitled UI", pages: ["Document Editor", "Vista de solicitante"],
    variants: { Color: ["Success"], Size: ["md", "lg"] } },
  { slug: "map-marker", title: "Marcador de mapa", level: "atom", description: "Punto de ubicación en el mapa de jurisdicciones.", status: "planned", usage: 42, figmaName: "_Map location marker", origin: "Untitled UI", pages: ["Clause Pulse", "New Dashboard", "NEW AI Chat"], examples: [{ name: "Dashboard", node: "1839:55769" }] },
  { slug: "logomark", title: "Logomark", level: "atom", description: "Marca de Trato en la navegación.", status: "planned", usage: 5, figmaName: "Logomark", origin: "Local", pages: ["New UI (Oscar)"], examples: [{ name: "New UI (Oscar)", node: "1992:31387" }] },

  // ── Moléculas ───────────────────────────────────────────
  { slug: "input", title: "Input", level: "molecule", description: "Campos de texto, label, ayuda y error.", status: "ready", usage: 108, figma: "661:6264", figmaName: "Input field", origin: "Untitled UI", keywords: ["campo", "form", "textarea"],
    variants: { Size: ["sm"], Type: ["Default", "Trailing dropdown"], State: ["Placeholder", "Filled"], Destructive: ["False"] } },
  { slug: "search", title: "Search", level: "molecule", description: "Búsqueda con selector de alcance.", status: "ready", usage: 38, figma: "2272:8486", figmaName: "Text Input · search (armado)", origin: "Local", keywords: ["buscar"] },
  { slug: "select", title: "Select y filtros", level: "molecule", description: "Selección simple y filtros \"Filtrar: Activos\".", status: "ready", usage: 160, figma: "550:16609", figmaName: "Select · Dropdown / filter", origin: "Untitled UI", keywords: ["dropdown", "filtro"],
    variants: { Size: ["sm"], Type: ["Search"], State: ["Placeholder"] } },
  { slug: "menu", title: "Menú de acciones", level: "molecule", description: "Menús contextuales de documento y carpeta.", status: "ready", usage: 51, figma: "471:49388", figmaName: "Dropdown · Dropdown item", origin: "Untitled UI", keywords: ["dropdown", "kebab"],
    variants: { Type: ["Normal", "Icon"], State: ["Default", "Active", "Filled"] } },
  { slug: "tabs", title: "Tabs", level: "molecule", description: "Segmented control y pestañas con subrayado.", status: "ready", usage: 72, figma: "471:48950", figmaName: "Horizontal tabs", origin: "Untitled UI", keywords: ["pestañas", "segmented"],
    variants: { Type: ["Button brand"], Size: ["sm", "md"], Breakpoint: ["Desktop"] } },
  { slug: "alert", title: "Banner y Alert", level: "molecule", description: "Avisos inline y barras de estado.", status: "ready", usage: 3, figma: "559:5538", figmaName: "Alert · Notification", origin: "Untitled UI", keywords: ["banner", "aviso", "notificación"] },
  { slug: "card-stat", title: "Card y KPI", level: "molecule", description: "Contenedores y métricas del dashboard.", status: "ready", usage: 300, figma: "2213:30245", figmaName: "Card (armado)", origin: "Local", keywords: ["kpi", "métrica", "dashboard"] },
  { slug: "empty-state", title: "Empty state", level: "molecule", description: "Estados vacíos con acción.", status: "ready", figma: "551:5060", figmaName: "Empty state (armado)", origin: "Local", keywords: ["vacío"] },
  { slug: "progress", title: "Progress", level: "molecule", description: "Barras de progreso y ciclo de vida.", status: "ready", figma: "2213:30245", figmaName: "Lifecycle · AI usage (armado)", origin: "Local", keywords: ["barra", "lifecycle"] },
  { slug: "chip", title: "Chip y Quick action", level: "molecule", description: "Contexto del chat IA y accesos rápidos.", status: "ready", usage: 150, figma: "1839:52487", figmaName: "Quick Action Item", origin: "Local", keywords: ["chip", "contexto"] },
  { slug: "breadcrumbs", title: "Breadcrumbs", level: "molecule", description: "Ruta dentro de carpetas y expedientes.", status: "planned", usage: 7, figmaName: "Breadcrumbs", origin: "Untitled UI", pages: ["Document Editor", "Clause Pulse"],
    variants: { Divider: ["Chevron"], Type: ["Button"] }, examples: [{ name: "Document Editor", node: "878:16031" }] },
  { slug: "pagination", title: "Paginación", level: "molecule", description: "Paginado de tablas.", status: "planned", usage: 43, figmaName: "Pagination (armado)", origin: "Local", pages: ["Workflows", "Vista de solicitante", "AI Contract"], examples: [{ name: "Workflow", node: "471:49073" }] },
  { slug: "filters-bar", title: "Barra de filtros", level: "molecule", description: "Filtros sobre tablas y listados.", status: "planned", usage: 43, figmaName: "Filters bar (armado)", origin: "Local", pages: ["Workflows", "Vista de solicitante", "AI Contract"], examples: [{ name: "Workflow", node: "471:48812" }] },
  { slug: "section-header", title: "Section header", level: "molecule", description: "Título de sección con acciones.", status: "planned", usage: 7, figmaName: "Section header", origin: "Untitled UI", pages: ["New Dashboard"],
    variants: { Type: ["Button group", "Buttons"], Tabs: ["False"] }, examples: [{ name: "New Dashboard", node: "1801:23342" }] },
  { slug: "page-header-component", title: "Page header", level: "molecule", description: "Encabezado de página con avatar.", status: "planned", usage: 1, figmaName: "Page header", origin: "Untitled UI", pages: ["New Dashboard"],
    variants: { Style: ["Avatar"], Breakpoint: ["Desktop"] }, examples: [{ name: "New Dashboard", node: "1801:23210" }] },
  { slug: "toast", title: "Notificación (toast)", level: "molecule", description: "Confirmaciones flotantes.", status: "planned", usage: 2, figmaName: "Notification", origin: "Untitled UI", pages: ["Document Editor", "Vista de solicitante"],
    variants: { Icon: ["Success"], Type: ["Floating"] }, examples: [{ name: "Document Editor", node: "278:3417" }] },
  { slug: "message", title: "Mensaje de chat", level: "molecule", description: "Burbuja de mensaje enviado y recibido.", status: "planned", usage: 54, figmaName: "Message", origin: "Local", pages: ["LetsLaw Integration", "AI Contract", "New Dashboard"],
    variants: { Type: ["Message"], Sent: ["True", "False"], "Actions panel": ["False"] }, examples: [{ name: "LetsLaw", node: "1287:2933" }] },
  { slug: "contact", title: "Contacto", level: "molecule", description: "Persona o grupo de personas con datos de contacto.", status: "planned", usage: 5, figmaName: "_Contact", origin: "Untitled UI", pages: ["Vista participante"],
    variants: { People: ["1", "2"] }, examples: [{ name: "Vista participante", node: "247:18592" }] },
  { slug: "upload-field", title: "Carga de archivos", level: "molecule", description: "Zona para subir anexos y documentos.", status: "planned", usage: 32, figmaName: "Upload Field (armado)", origin: "Local", pages: ["Vista participante"], examples: [{ name: "Vista participante", node: "232:11958" }] },
  { slug: "contracts-filter", title: "Filtro de contratos", level: "molecule", description: "Filtro por jurisdicción y tipo en el dashboard.", status: "planned", usage: 6, figmaName: "Contracts", origin: "Local", pages: ["New Dashboard"],
    variants: { Filter: ["Juris", "Type"] }, examples: [{ name: "New Dashboard", node: "1957:17786" }] },
  { slug: "calendar", title: "Calendario", level: "molecule", description: "Celdas y eventos de calendario.", status: "planned", usage: 88, figmaName: "_Calendar cell · _Calendar event", origin: "Untitled UI", pages: ["New Dashboard"],
    variants: { Breakpoint: ["Mobile"] }, examples: [{ name: "New Dashboard", node: "1839:42459" }] },

  // ── Organismos ──────────────────────────────────────────
  { slug: "table", title: "Table", level: "organism", description: "Tablas de documentos, contratos y workflows.", status: "ready", usage: 5552, figma: "471:48955", figmaName: "Table cell · Table header cell", origin: "Untitled UI", keywords: ["tabla", "lista"],
    variants: { "Cell · Style": ["Text", "Lead text", "Action icons", "Badge", "Avatar", "Lead checkbox", "Avatar group"], "Header · Arrow": ["False", "Chevron selector"] } },
  { slug: "navigation", title: "Navegación", level: "organism", description: "Rail lateral de íconos de la plataforma.", status: "ready", usage: 1828, figma: "471:48916", figmaName: "_Nav item button · Sidebar", origin: "Untitled UI", keywords: ["sidebar", "nav"],
    variants: { Current: ["False", "True"], Size: ["md"], State: ["Default"] } },
  { slug: "dialog", title: "Modal", level: "organism", description: "Confirmaciones y flujos cortos.", status: "ready", usage: 50, figma: "471:49369", figmaName: "Modal · Bottom (armado)", origin: "Local", keywords: ["modal", "dialog"] },
  { slug: "header-bar", title: "Header de la app", level: "organism", description: "Barra superior con título del documento y acciones.", status: "planned", figmaName: "Header (armado)", origin: "Local", pages: ["Document Editor", "Workflows", "Vista de solicitante"], examples: [{ name: "Documento IA 1", node: "267:15157" }] },
  { slug: "drawer", title: "Panel lateral", level: "organism", description: "Panel derecho: análisis con IA, configuración, chat.", status: "planned", figmaName: "Sidebar (armado)", origin: "Local", pages: ["Document Editor", "Clause Pulse", "NEW AI Chat"], examples: [{ name: "Documento IA 1", node: "267:14867" }] },
  { slug: "editor-toolbar", title: "Toolbar del editor", level: "organism", description: "Formato de texto del Document Editor.", status: "planned", usage: 120, figmaName: "Tools (armado)", origin: "Local", pages: ["Document Editor"], examples: [{ name: "Documento IA 1", node: "267:15195" }] },
  { slug: "chat-panel", title: "Panel de chat", level: "organism", description: "Conversación, contexto y composer del chat.", status: "planned", usage: 140, figmaName: "Chat Bubble (armado)", origin: "Local", pages: ["Document Editor", "LetsLaw Integration", "NEW AI Chat"], examples: [{ name: "Document Editor", node: "267:17611" }] },
  { slug: "charts", title: "Gráficos", level: "organism", description: "Línea, barras y mapa del dashboard.", status: "planned", usage: 299, figmaName: "_X-axis · _Y-axis · Chart marker", origin: "Untitled UI", pages: ["New Dashboard", "NEW AI Chat"],
    variants: { Data: ["12 months"], Type: ["Line"] }, examples: [{ name: "New Dashboard", node: "1839:52379" }] },
  { slug: "video-player", title: "Reproductor de video", level: "organism", description: "Video con barra de acciones.", status: "planned", usage: 1, figmaName: "Video player 16:9", origin: "Untitled UI", pages: ["Lefebvre Integration"],
    variants: { Size: ["sm"] }, examples: [{ name: "Lefebvre", node: "1121:6828" }] },
];

export const patterns: NavEntry[] = [
  { slug: "page-header", title: "Header de página", description: "Título + búsqueda + acciones primarias.", status: "ready", figma: "2272:8362" },
  { slug: "documents-table", title: "Lista de documentos", description: "Tabla de documentos con carpetas, estados y acciones.", status: "ready", figma: "2272:8362" },
  { slug: "dashboard", title: "Dashboard", description: "KPIs, overview operativo y ciclo de vida.", status: "ready", figma: "2213:30245" },
  { slug: "ai-chat", title: "Chat IA", description: "Panel del asistente, composer y contexto.", status: "beta", figma: "2116:30886" },
];

/** Inventario de páginas del archivo de Figma. */
export interface FigmaPage {
  id: string;
  name: string;
  status: "done" | "wip" | "explore";
  area: string;
  summary: string;
  hero: { name: string; node: string };
  screens: { name: string; node: string }[];
}

export const figmaPages: FigmaPage[] = [
  { id: "1801:15648", name: "New Dashboard", status: "explore", area: "Home", summary: "Rediseño del home: Operational Overview, hitos, reportes, chat IA desde el dashboard y empty states por etapa.", hero: { name: "Dashboard - Operational Overview 1", node: "2213:30245" }, screens: [
    { name: "Overview · Filtro", node: "2213:52962" }, { name: "Overview · Abierto", node: "2213:46349" }, { name: "Milestones V2", node: "1953:10746" }, { name: "Reportes", node: "1919:12123" }, { name: "Empty state · etapa 0", node: "2557:32434" }, { name: "Empty state · etapa 1", node: "2557:32701" }, { name: "Empty state · etapa 2", node: "2557:32981" } ] },
  { id: "2272:8357", name: "Expedientes (carpetas)", status: "explore", area: "Documentos", summary: "Carpetas de documentos: lista, menús, selección múltiple, drag & drop, mover, compartir y miembros.", hero: { name: "11.1 Lista con carpetas", node: "2272:8362" }, screens: [
    { name: "11.2 Menú de documento", node: "2272:8915" }, { name: "11.3 Menú de carpeta", node: "2272:9495" }, { name: "11.4 Selección múltiple", node: "2272:10083" }, { name: "11.5 Drag & drop", node: "2272:10661" }, { name: "11.7 Mover a carpeta", node: "2272:11789" }, { name: "11.9 Dentro de una carpeta", node: "2272:12412" }, { name: "11.10 Carpeta vacía", node: "2272:12754" }, { name: "11.12 Compartir carpeta", node: "2272:13460" } ] },
  { id: "2116:27002", name: "NEW AI Chat", status: "explore", area: "IA", summary: "Spec del asistente: chat sobre la biblioteca y sobre un contrato, extracción de PDF, comparación, historial y créditos de IA.", hero: { name: "3.2 Answer with Privacy mode", node: "2116:30886" }, screens: [
    { name: "1.1 Home — Dashboard", node: "2116:45535" }, { name: "2.1 Empty state + sugerencias", node: "2116:28100" }, { name: "2.3 Respuesta — cláusulas", node: "2116:29002" }, { name: "4.3 Extrayendo", node: "2116:34028" }, { name: "5.1 Error de extracción", node: "2116:35883" }, { name: "6.6 Comparación", node: "2116:37716" }, { name: "7.1 Conversaciones", node: "2116:40063" }, { name: "8.2 Créditos agotados", node: "2116:41439" } ] },
  { id: "262:6724", name: "Document Editor", status: "done", area: "Editor", summary: "Editor de documentos con IA: aplicar o rechazar cambios, PDF, resumen, salud del documento y aprobación por elementos.", hero: { name: "Documento IA 1", node: "267:14783" }, screens: [
    { name: "Documento IA 2", node: "267:15235" }, { name: "Rechazar cambio", node: "285:2504" }, { name: "Vista PDF", node: "267:18508" }, { name: "Resumen", node: "267:16766" }, { name: "Salud del documento", node: "282:12798" }, { name: "Empty state", node: "267:13515" }, { name: "Enviar a aprobación", node: "492:3639" } ] },
  { id: "232:10252", name: "Vista participante", status: "done", area: "Firma", summary: "Vista del firmante o contraparte: negociación, firma, completar datos, validación de identidad y compartir.", hero: { name: "Negociación 1", node: "232:10899" }, screens: [
    { name: "Aceptar versión", node: "241:10951" }, { name: "Firma sin anexos", node: "232:11970" }, { name: "Con anexo", node: "232:12940" }, { name: "Completar info", node: "232:13189" }, { name: "Validación de identidad", node: "232:15389" }, { name: "Propuestas", node: "246:11440" }, { name: "Share", node: "248:19052" } ] },
  { id: "471:40558", name: "Workflows", status: "done", area: "Aprobaciones", summary: "Creación y gestión de workflows de aprobación: editar, duplicar, filtrar, desactivar.", hero: { name: "Workflow", node: "471:48812" }, screens: [
    { name: "Seleccionar grupo", node: "471:50068" }, { name: "Workflow desde documento", node: "471:66138" }, { name: "Editar / ver", node: "540:7011" }, { name: "Duplicar", node: "541:9619" }, { name: "Filtrar", node: "551:17762" }, { name: "Desactivar", node: "540:8226" } ] },
  { id: "1649:6", name: "Mailing Sign-in", status: "done", area: "Email", summary: "Email de alta en EN, ES y DE, desktop y mobile.", hero: { name: "Mailing Trato - Desktop (EN)", node: "1649:7" }, screens: [
    { name: "Mobile (EN)", node: "1649:34" }, { name: "Desktop (ES)", node: "1663:4" }, { name: "Desktop (DE)", node: "1663:539" } ] },
  { id: "700:11529", name: "Vista de solicitante", status: "wip", area: "Solicitudes", summary: "Solicitante: nueva solicitud, contratos solicitados, plantillas y contratos por vencer.", hero: { name: "Contratos solicitados", node: "803:19186" }, screens: [
    { name: "Nueva solicitud", node: "725:10216" }, { name: "Añadir participantes", node: "708:8475" }, { name: "Gestionar plantillas", node: "803:21172" }, { name: "Por vencer", node: "809:36975" }, { name: "Carga desde Excel", node: "712:30396" } ] },
  { id: "906:47701", name: "Clause Pulse", status: "wip", area: "IA", summary: "Chequeo de cláusulas con IA: conflictos, cláusulas faltantes, detalle de ley y dashboards.", hero: { name: "Clause Pulse", node: "906:52074" }, screens: [
    { name: "Cláusula en conflicto", node: "906:51425" }, { name: "Detalle del conflicto", node: "906:56691" }, { name: "Detalle de ley", node: "906:63328" }, { name: "Dashboard del contrato", node: "906:56963" }, { name: "Cláusula faltante", node: "906:57575" }, { name: "Chat IA — Guía", node: "906:50342" } ] },
  { id: "551:5051", name: "Auditoría Ayudas", status: "wip", area: "UX writing", summary: "Auditoría de ayudas: descripciones, helper text, tooltips, empty states, modales y banners.", hero: { name: "Configuración standard", node: "661:5990" }, screens: [
    { name: "Descripciones", node: "551:5062" }, { name: "Helper text + Tooltips", node: "560:11675" }, { name: "Empty states", node: "551:5060" }, { name: "Modal", node: "551:5063" }, { name: "Banner · badge", node: "559:5538" } ] },
  { id: "997:15245", name: "Lefebvre Integration", status: "wip", area: "Integraciones", summary: "Contenido legal de Lefebvre dentro del chat IA: sugerencias, errores, tooltips y modal premium.", hero: { name: "AI Chat - sugerencias free", node: "1121:5489" }, screens: [
    { name: "Error", node: "1058:5987" }, { name: "Tooltips", node: "1058:6247" }, { name: "Modal premium", node: "1756:29000" } ] },
  { id: "1204:26471", name: "LetsLaw Integration", status: "wip", area: "Integraciones", summary: "Chat y videollamada con abogados de LetsLaw.", hero: { name: "Letslaw 12", node: "1287:2307" }, screens: [
    { name: "Letslaw 10", node: "1286:24282" }, { name: "Empty", node: "1588:2366" }, { name: "Detalle de ley", node: "1286:22863" }, { name: "Videollamada", node: "1265:271" } ] },
  { id: "1663:595", name: "AI Contract", status: "explore", area: "Solicitudes", summary: "Flujo de contrato con IA: solicitudes, aprobador, pendientes y conflictos.", hero: { name: "Contratos solicitados", node: "1764:20177" }, screens: [
    { name: "Workflow", node: "1743:13213" }, { name: "Nueva solicitud", node: "1748:5546" }, { name: "Aprobador", node: "1749:27875" }, { name: "Pendientes", node: "1749:28303" }, { name: "Conflicting", node: "1749:28874" } ] },
  { id: "1992:27326", name: "New UI (Oscar)", status: "explore", area: "Editor", summary: "Nueva navegación del editor y lógica de botones para editor y visualizador.", hero: { name: "Propuestas", node: "1992:28160" }, screens: [
    { name: "Usuario 1 - Editor", node: "1992:27328" }, { name: "Usuario 2 - Visualizador", node: "1992:27963" }, { name: "Modales", node: "1992:31140" } ] },
];
