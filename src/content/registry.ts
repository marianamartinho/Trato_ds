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
export const statusLabel: Record<Status, string> = { ready: "Listo", beta: "Beta", planned: "Pendiente" };

export interface NavEntry {
  slug: string;
  title: string;
  description: string;
  status: Status;
  figma?: string;
  /** Instancias aproximadas en el archivo de Figma (inventario). */
  usage?: number;
  keywords?: string[];
}

export const foundations: NavEntry[] = [
  { slug: "colors", title: "Color", description: "Paletas primitivas y tokens semánticos en claro y oscuro.", status: "ready", keywords: ["paleta", "tokens", "indigo", "brand"] },
  { slug: "typography", title: "Tipografía", description: "Inter, escala tipográfica y pesos.", status: "ready", keywords: ["fuente", "inter", "texto"] },
  { slug: "spacing", title: "Espaciado y radios", description: "Escala de espaciado, radios de borde y layout.", status: "ready", keywords: ["padding", "gap", "radius", "grid"] },
  { slug: "elevation", title: "Elevación", description: "Sombras, bordes y superficies.", status: "ready", keywords: ["shadow", "sombra"] },
  { slug: "icons", title: "Iconografía", description: "Set de íconos, tamaños y los íconos más usados.", status: "ready", keywords: ["lucide", "icon"] },
  { slug: "voice", title: "Voz y microcopy", description: "Tono, ayudas, tooltips y textos de estado.", status: "beta", keywords: ["copy", "textos", "ayudas"] },
];

export const components: NavEntry[] = [
  { slug: "button", title: "Button", description: "Acciones primarias, secundarias, IA y destructivas.", status: "ready", usage: 2045, figma: "2272:8506", keywords: ["botón", "cta"] },
  { slug: "badge", title: "Badge", description: "Estados, contadores, días y etiquetas.", status: "ready", usage: 1880, keywords: ["pill", "tag", "estado"] },
  { slug: "input", title: "Input", description: "Campos de texto, label, ayuda y error.", status: "ready", usage: 195, keywords: ["campo", "form", "textarea"] },
  { slug: "search", title: "Search", description: "Búsqueda con selector de alcance.", status: "ready", figma: "2272:8486", keywords: ["buscar"] },
  { slug: "select", title: "Select y filtros", description: "Selección simple y filtros \"Filtrar: Activos\".", status: "ready", usage: 160, keywords: ["dropdown", "filtro"] },
  { slug: "checkbox-switch", title: "Checkbox y Toggle", description: "Selección múltiple y opciones on/off.", status: "ready", usage: 450, keywords: ["toggle", "switch", "check"] },
  { slug: "tabs", title: "Tabs", description: "Segmented control y pestañas con subrayado.", status: "ready", usage: 82, keywords: ["pestañas", "segmented"] },
  { slug: "avatar", title: "Avatar", description: "Participantes, usuarios y grupos.", status: "ready", usage: 400, keywords: ["usuario", "participante"] },
  { slug: "tooltip", title: "Tooltip", description: "Ayudas contextuales.", status: "ready", usage: 40, keywords: ["ayuda", "hint"] },
  { slug: "alert", title: "Banner y Alert", description: "Avisos inline y barras de estado.", status: "ready", figma: "559:5538", keywords: ["banner", "aviso", "notificación"] },
  { slug: "dialog", title: "Modal", description: "Confirmaciones y flujos cortos.", status: "ready", usage: 58, figma: "551:5063", keywords: ["modal", "dialog"] },
  { slug: "menu", title: "Menú de acciones", description: "Menús contextuales de documento y carpeta.", status: "ready", usage: 40, figma: "2272:8915", keywords: ["dropdown", "kebab"] },
  { slug: "table", title: "Table", description: "Tablas de documentos, contratos y workflows.", status: "ready", usage: 5550, figma: "2272:8362", keywords: ["tabla", "lista"] },
  { slug: "card-stat", title: "Card y KPI", description: "Contenedores y métricas del dashboard.", status: "ready", figma: "2213:30245", keywords: ["kpi", "métrica", "dashboard"] },
  { slug: "empty-state", title: "Empty state", description: "Estados vacíos con acción.", status: "ready", figma: "551:5060", keywords: ["vacío"] },
  { slug: "progress", title: "Progress", description: "Barras de progreso y ciclo de vida.", status: "ready", keywords: ["barra", "lifecycle"] },
  { slug: "chip", title: "Chip y Quick action", description: "Contexto del chat IA y accesos rápidos.", status: "ready", usage: 50, figma: "2116:40972", keywords: ["chip", "contexto"] },
  { slug: "navigation", title: "Navegación", description: "Rail lateral de íconos de la plataforma.", status: "ready", usage: 1840, figma: "888:4089", keywords: ["sidebar", "nav"] },
  { slug: "breadcrumbs", title: "Breadcrumbs", description: "Ruta dentro de carpetas y expedientes.", status: "planned", usage: 7 },
  { slug: "drawer", title: "Drawer / Panel lateral", description: "Panel derecho (chat IA, configuración).", status: "planned", usage: 52 },
  { slug: "editor-toolbar", title: "Toolbar del editor", description: "Formato de texto del Document Editor.", status: "planned", usage: 128 },
  { slug: "charts", title: "Gráficos", description: "Línea, donut, barras del dashboard.", status: "planned", usage: 114 },
  { slug: "date-picker", title: "Date picker", description: "Selección de fechas y vencimientos.", status: "planned" },
  { slug: "toast", title: "Toast", description: "Confirmaciones efímeras.", status: "planned" },
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
