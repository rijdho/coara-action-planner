/**
 * Spanish (es) translation overlay for reform-assessment-lite.
 * Overlays the English reference sets (ui.en.js, report.en.js) and the data
 * files (questions.js, commitments.js, actions.js, context.js). Any missing key
 * falls back to English. `{placeholders}` and [bracketed] blanks preserved.
 */
export default {
  ui: {
    // header / nav
    brandApp: "Research Assessment Reform Planner",
    source: "Código",
    sourceTitle: "Ver el código y la calibración en GitHub",
    tab_questionnaire: "Cuestionario",
    tab_plan: "Plan",
    tab_results: "Resultados",
    tab_report: "Informe",
    themeToLight: "Cambiar a modo claro",
    themeToDark: "Cambiar a modo oscuro",
    langLabel: "Idioma",
    nav_steps: "Pasos",
    nav_menu: "Menú",
    rail_by: "Por",
    rail_license_code: "Código bajo Apache-2.0",
    rail_license_data: "datos bajo CC BY 4.0",
    rail_source: "Código en GitHub",
    rail_family: "Parte de",
    rail_cite: "Citar esta herramienta",

    // commitment type
    typeCore: "central",
    typeSupporting: "de apoyo",

    // effort / impact values + labels
    effort_low: "bajo",
    effort_medium: "medio",
    effort_high: "alto",
    impact_low: "bajo",
    impact_medium: "medio",
    impact_high: "alto",
    effortLabel: "Esfuerzo",
    impactLabel: "Impacto",

    // Assessment page
    asmt_title: "Autoevaluación institucional",
    asmt_intro:
      "Responde las preguntas a continuación para medir la madurez de tu institución en cada compromiso de CoARA. Cuando termines, la pestaña Resultados convierte tus respuestas en un perfil de madurez y un plan de acción priorizado. Todo se guarda localmente en tu navegador.",

    // Start page + perspectives + ambition (added)
    tab_start: "Inicio",
    start_title: "Antes de empezar",
    start_intro:
      "Esta herramienta mira la reforma desde tres ángulos. Configúralos aquí y luego avanza por las pestañas. Todo se guarda localmente en tu navegador.",
    start_lensesTitle: "Tres miradas",
    start_lens_now: "① Dónde estamos hoy",
    start_lens_now_desc:
      "El cuestionario mide tu madurez actual en cada compromiso de CoARA: el estado actual, evaluado con honestidad.",
    start_lens_goal: "② A dónde queremos llegar",
    start_lens_goal_desc:
      "En la pestaña Plan defines un nivel de madurez objetivo por compromiso. La brecha entre el ahora y el objetivo es lo que cierra tu plan de acción.",
    start_lens_who: "③ Quién aporta esta información",
    start_lens_who_desc:
      "Indica quién responde. Agrega más de una perspectiva (p. ej. liderazgo e investigadores) para ver dónde difieren las lecturas.",
    start_instTitle: "Institución",
    start_instHint: "Se usa en el informe y las exportaciones. Opcional.",
    start_instPlaceholder: "Nombre de la institución (opcional)",
    start_perspectivesTitle: "Perspectivas",
    start_perspectivesHint:
      "Cada perspectiva es la mirada de un participante, etiquetada con su rol. Todas responden las mismas 25 preguntas; las completas una vez por perspectiva, desde ese punto de vista. Resultados consolida las perspectivas y señala dónde difieren sus lecturas de una misma pregunta (la brecha de percepción).",
    start_perspectivesEyebrow: "Lo que esta herramienta hace y una guía no",
    start_perspectivesWhy:
      "Un plan redactado por una sola oficina refleja un solo punto de vista. Si la dirección, la oficina de investigación y el personal investigador responden las mismas 25 preguntas, el desacuerdo mismo se convierte en evidencia: Resultados señala cada compromiso cuya lectura difiere en dos niveles o más, y son esos los que conviene alinear antes de redactar nada.",
    start_quickStart: "Configurar una evaluación colectiva:",
    start_quickStartAdd: "+ {role}",
    start_perspectiveN: "Perspectiva {n}",
    start_roleLabel: "Rol del participante",
    start_active: "activa",
    start_setActive: "Activar",
    start_answerAs: "Responder como esta →",
    start_remove: "Eliminar perspectiva",
    start_completion: "{answered}/{total} respondidas",
    start_addPerspective: "+ Agregar otra perspectiva",
    start_multiNote:
      "Varias perspectivas se promedian en un solo perfil; las divergencias de dos o más niveles se señalan en Resultados.",
    start_cta: "Ir al cuestionario →",
    asmt_answeringAs: "Respondiendo como: {role}",
    asmt_switchPerspective: "Cambiar →",
    plan_s5_title: "5 · Ambición: ¿a dónde quieres llegar?",
    plan_s5_hint:
      "Define un nivel de madurez objetivo por compromiso. Las acciones que cierran la brecha entre tu nivel actual y el objetivo suben; los compromisos que ya están en su objetivo bajan. Deja «–» para ordenar solo por la brecha hasta el nivel máximo.",
    plan_ambition_now: "ahora",
    plan_ambition_current: "nivel actual",
    plan_ambition_target: "nivel objetivo",
    plan_ambition_notset: "–",
    plan_ambition_clear: "Borrar todos los objetivos",
    plan_s6_title: "6 · Ponderación de perspectivas y alineación",
    plan_s6_hint:
      "Solo relevante con más de una perspectiva. Define cuánto cuenta la mirada de cada rol al combinar los perfiles, y cuánto deben diferir las perspectivas antes de marcar un compromiso para alinear.",
    plan_weight_aria: "Peso de {role}",
    plan_threshold_label: "Marcar brecha de percepción cuando las perspectivas difieran en",
    plan_threshold_suffix: "niveles",
    plan_weight_reset: "Restablecer ponderación por defecto",
    res_respondents: "Participantes: {list}",
    res_ambitionSet: "Ambición definida",
    res_currentVsTarget: "actual vs objetivo",
    res_consolidatedNote: "Promedio ponderado por rol entre {n} perspectivas (quienes son evaluados pesan más).",
    res_perceptionGap: "Las perspectivas difieren en ≥2 niveles en: {list}. Priorizadas para alinear.",
    print_respondents: "Participantes: {list}",
    radar_target: "Objetivo",

    asmt_progress: "Progreso: {answered}/{total} preguntas",
    asmt_overall: "Madurez general:",
    asmt_next: "Siguiente: define tu plan →",
    asmt_inPractice: "Qué significa en la práctica",
    asmt_maturityProfile: "Perfil de madurez",
    asmt_radarEmpty: "Responde las preguntas para ver tu gráfico de radar",

    // Plan page
    plan_emptyTitle: "Plan",
    plan_emptyBody:
      "Responde primero el cuestionario: el plan ajusta las acciones que surgen de tu perfil de madurez.",
    plan_startQuestionnaire: "Comenzar el cuestionario",
    plan_title: "Define tu plan de acción",
    plan_intro:
      "Cuatro decisiones rápidas que ajustan qué acciones aparecen primero. Nada aquí es obligatorio; los valores por defecto dan un plan equilibrado, guiado por las brechas. Tu perfil de madurez no se ve afectado.",
    plan_s1_title: "1 · Horizonte y capacidad",
    plan_s1_hint: "¿Cuánto cambio puedes asumir ahora mismo?",
    plan_s2_title: "2 · Contexto institucional",
    plan_s2_hint: "Potencia las acciones especialmente relevantes para tu contexto.",
    plan_s3_title: "3 · Compromisos prioritarios",
    plan_s3_hint:
      "Elige los compromisos de CoARA que quieres abordar primero, y sus acciones suben en la lista. Déjalo vacío para ninguno.",
    plan_clear: "Borrar selección",
    plan_s4_title: "4 · Acciones de alto esfuerzo",
    plan_s4_hint: "Las reformas estructurales (nuevos criterios, formación a nivel de todo el sistema) requieren recursos reales.",
    plan_includeHigh: "Incluir acciones de alto esfuerzo",
    plan_hideHigh: "Ocultar acciones de alto esfuerzo",
    plan_back: "← Volver al cuestionario",
    plan_view: "Ver resultados ajustados →",

    // horizons (label + description)
    horizon_quickwins_label: "Logros rápidos primero",
    horizon_quickwins_desc:
      "Tenemos tiempo y capacidad limitados. Favorecer acciones de bajo esfuerzo que podamos empezar ahora.",
    horizon_balanced_label: "Equilibrado",
    horizon_balanced_desc: "Mezcla de logros rápidos y cambios más profundos, ordenados puramente por brecha e impacto.",
    horizon_structural_label: "Cambio estructural",
    horizon_structural_desc:
      "Estamos listos para una reforma ambiciosa y de alto impacto, aunque requiera más esfuerzo.",

    // Results page
    res_emptyTitle: "Resultados",
    res_emptyBody: "Responde primero el cuestionario para generar tu perfil de madurez y plan de acción.",
    res_title: "Resultados",
    res_forInst: "para {inst}",
    res_intro:
      "Tu perfil de madurez y las acciones que más importan, priorizadas por el tamaño de la brecha y el impacto.",
    res_basedOn: "Basado en {answered}/{total} preguntas",
    res_planLabel: "Plan:",
    res_focus: "Enfoque: {list}",
    res_highHidden: "Alto esfuerzo oculto",
    res_edit: "Editar",
    res_balancedNote: "Plan equilibrado (guiado por brechas).",
    res_tuneIt: "Ajustar →",
    res_print: "Imprimir informe",
    res_exportJson: "Exportar JSON",
    res_saveConfig: "Guardar config.",
    cfg_title: "Guardar / cargar configuración",
    cfg_hint:
      "Guarda todos los datos de esta evaluación (respuestas, perspectivas, ambición y plan) en un archivo, para reproducir este mismo informe después, compartirlo, o volver a cargarlo como base y modificarlo.",
    cfg_save: "Guardar configuración",
    cfg_load: "Cargar configuración",
    cfg_loaded: "Configuración cargada.",
    cfg_loadError: "No se pudo cargar el archivo: {msg}",
    reset_button: "Empezar de cero",
    reset_hint: "Todo se guarda en este navegador. Empezar de cero borra todas las respuestas, perspectivas, ambición, plan e informe para arrancar desde cero.",
    reset_confirm: "Esto borrará todas las respuestas, perspectivas, ambición, plan e informe guardados en este navegador, y no se puede deshacer. ¿Empezar de cero?",
    chart_png: "PNG",
    chart_pngTitle: "Descargar este gráfico como imagen PNG",
    res_maturityProfile: "Perfil de madurez",
    res_overallShort: "General:",
    res_byCommitment: "Madurez por compromiso",
    res_recommendedOne: "{n} acción recomendada",
    res_recommendedMany: "{n} acciones recomendadas",
    res_filterAll: "Todas las acciones",
    res_filterQuick: "Logros rápidos",
    res_filterHigh: "Alto impacto",
    res_noMatch: 'Ninguna acción coincide con este filtro. Prueba con "Todas las acciones".',
    res_examples: "Ejemplos:",
    res_frameworks: "Aplica:",
    res_corpus: "{pct}% de {n} planes",
    res_readingTitle: "Proporción de los {n} planes de acción de CoARA publicados que toman esta acción, según una lectura completa de cada plan en la que cada acción está respaldada por una cita textual y una verificación independiente. Es un mínimo.",
    res_corpusTitle: "Proporción de los {n} planes de acción CoARA publicados cuyo texto completo coincide con el tema de esta acción (por palabras clave, orientativo)",
    ev_universal: "Casi universal en los planes existentes",
    ev_common: "Frecuente en los planes existentes",
    ev_emerging: "Práctica emergente",
    ev_frontier: "Frontera: pocos planes lo hacen aún, una oportunidad para liderar",
    res_ctaNext: "Siguiente:",
    res_ctaBody: "convierte esto en un borrador escrito de plan de acción CoARA que puedes editar y compartir.",
    res_generateReport: "Generar informe →",

    // Results: print view
    print_title: "Reforma de la Evaluación de la Investigación: Informe de Madurez",
    print_meta: "{inst} · {date} · compromisos de CoARA · basado en {answered}/{total} preguntas",
    print_planPrefix: "Plan:",
    print_overall: "Madurez general:",
    print_level: "Nivel {n} · {label}",
    print_byCommitment: "Madurez por compromiso",
    print_priorityActions: "Acciones prioritarias",
    print_footer:
      "Generado con Research Assessment Reform Planner (DOI 10.5281/zenodo.21492548) · rijdho.github.io/coara-action-planner · marco: Acuerdo CoARA sobre la Reforma de la Evaluación de la Investigación.",
    unknownInst: "Institución",

    // Report page
    rep_emptyTitle: "Informe",
    rep_emptyBody:
      "Responde primero el cuestionario: el informe se redacta a partir de tu perfil de madurez y tu plan.",
    rep_title: "Informe del plan de acción",
    rep_intro_pre:
      "Un borrador preestructurado de plan de acción CoARA, generado a partir de tus respuestas y tu plan. Su estructura sigue planes de acción institucionales reales (Introducción → línea base → prioridades → acciones por compromiso → recursos → seguimiento). ",
    rep_intro_strong: "Edítalo libremente",
    rep_intro_post: ". Los [campos] entre corchetes son espacios para completar. Se guarda localmente a medida que escribes.",
    rep_copy: "Copiar texto",
    rep_copied: "Copiado ✓",
    rep_downloadMd: "Descargar .md",
    rep_downloadTxt: "Descargar .txt",
    rep_print: "Imprimir",
    rep_regenerate: "↻ Regenerar",
    rep_regenConfirm: "¿Regenerar a partir de tus últimas respuestas? Esto sobrescribe tus ediciones.",

    // radar tooltip / series
    radar_current: "Actual",
    radar_previous: "Anterior",
    radar_level: "Nivel {n} · {label}",  },

  report: {
    docTitle: "{inst}: Plan de Acción para la Reforma de la Evaluación de la Investigación",
    subtitle: "Alineado con el Acuerdo CoARA sobre la Reforma de la Evaluación de la Investigación · {date}",
    respondentSingle:
      "Esta autoevaluación se completó desde la perspectiva de {role}, y debe leerse teniendo presente ese punto de vista.",
    respondentMulti:
      "Esta autoevaluación consolida {n} perspectivas ({roles}). Reunir varios puntos de vista da una imagen más completa y honesta de dónde está la institución y de dónde difieren las lecturas del progreso.",
    ambitionLine:
      "Dentro de este horizonte, {inst} busca avanzar compromisos específicos hasta niveles de madurez objetivo declarados: {targets}.",
    targetLevelShort: "Nivel {level} ({label})",
    contestedNote:
      "Las lecturas internas del progreso difieren más en {contested}; estas se priorizan para alinear primero, de modo que la institución acuerde dónde está realmente antes de actuar.",

    h_intro: "Introducción",
    intro1:
      "En [mes año], {inst} firmó el Acuerdo sobre la Reforma de la Evaluación de la Investigación (CoARA) y se compromete a reformar la manera en que evalúa la investigación, a las personas investigadoras y a las unidades que la realizan. Reconocemos que una evaluación responsable es una decisión de gobernanza: asigna prestigio, recursos y legitimidad, y debe reconocer toda la diversidad de contribuciones académicas.",
    intro2:
      "Este plan se nutre de una autoevaluación estructurada a lo largo de los diez compromisos de CoARA. Establece nuestra línea base actual, nuestras prioridades y las acciones concretas que llevaremos a cabo, junto con las unidades responsables, los plazos indicativos y los hitos con los que mediremos el progreso.",

    h_baseline: "1. Autoevaluación de línea base",
    overall: "Madurez general: Nivel {level} ({label}).",
    established: "Consolidado (Nivel 4–5):",
    developing: "En desarrollo (Nivel 2–3):",
    gaps: "Brechas prioritarias (Nivel 0–1):",
    baselineClose:
      "Estos resultados ofrecen una imagen compartida y basada en evidencia de dónde se encuentra {inst} hoy y enmarcan las prioridades que siguen. [Opcionalmente añade 1–2 frases de narrativa local: iniciativas recientes, impulsores o limitaciones.]",

    h_priorities: "2. Prioridades estratégicas",
    prioritiesFocus: "Durante {tf}, {inst} concentrará su esfuerzo de reforma en: {focus}.",
    prioritiesGaps:
      "Durante {tf}, {inst} concentrará su esfuerzo de reforma en cerrar las brechas prioritarias identificadas anteriormente.",

    h_actions: "3. Acciones planificadas",
    actionsIntro:
      "Las acciones a continuación se priorizan según el tamaño de cada brecha y su impacto esperado{focusClause}. Los campos entre corchetes son para que la unidad responsable los complete.",
    actionsFocusClause: ", con un peso adicional en nuestros compromisos prioritarios",
    actionHeading: "C{num}. {title}: Nivel actual {lvl} ({label})",
    actionLabel: "Acción:",
    targetLabel: "Progresión:",
    targetValue: "Nivel {from} → {to} · esfuerzo {effort} · impacto esperado {impact}",
    referenceLabel: "Práctica de referencia:",
    frameworksLabel: "Marcos que aplica:",
    responsibleLabel: "Responsable:",
    responsiblePlaceholder: "[p. ej. Grupo de Trabajo CoARA / Vicerrectorado de Investigación / oficina pertinente]",
    timeframeLabel: "Plazo:",
    timeframePlaceholder: "[Año 1 / T_ 20__ / continuo]",
    indicatorLabel: "Indicador / hito:",
    indicatorPlaceholder: "[producto observable, p. ej. criterios revisados aprobados]",
    noActions:
      "No se recomendaron acciones: tu madurez ya es alta en los compromisos evaluados. Concéntrate en las actividades de consolidación y seguimiento descritas más abajo.",

    h_resources: "4. Recursos (Compromiso 5 de CoARA)",
    resourcesBody:
      "{inst} comprometerá los recursos necesarios para ejecutar este plan: [partida presupuestaria], [tiempo de personal dedicado / coordinación], [formación para los comités de evaluación] e [infraestructura para el seguimiento de productos diversos]. Un [comité / oficina designado] coordinará la implementación.",

    h_awareness: "5. Sensibilización, orientación e intercambio (Compromisos 7–8 de CoARA)",
    awarenessBody:
      "Aumentaremos la sensibilización internamente y publicaremos orientación accesible sobre los criterios reformados y su uso responsable. {inst} intercambiará prácticas con instituciones pares (a través de [Grupos de Trabajo CoARA / capítulo nacional / foro regional]), reconociendo que las organizaciones se encuentran en distintos puntos del camino.",

    h_monitoring: "6. Seguimiento, evaluación y comunicación del progreso (Compromisos 9–10 de CoARA)",
    monitoringBody:
      "El progreso se revisará [anualmente], usando indicadores transparentes como la proporción de procesos de evaluación reformados, el número de personas evaluadoras formadas y la eliminación de métricas inapropiadas basadas en revistas y publicaciones. Comunicaremos el progreso de forma abierta, principalmente mediante una autoevaluación compartida públicamente como prevé el Acuerdo, basando la evaluación en evidencia y datos abiertos.",

    h_ongoing: "Compromiso continuo",
    ongoingBody:
      "{inst} entiende la reforma de la evaluación de la investigación como un proceso iterativo. Este plan se revisará [anualmente] y se actualizará a medida que los criterios se pilotan, se evalúan y se integran en todos los procesos de evaluación.",

    footer:
      "Borrador generado con Research Assessment Reform Planner (rijdho.github.io/coara-action-planner, DOI 10.5281/zenodo.21492548) a partir de una autoevaluación de los diez compromisos de CoARA. Edítalo libremente antes de su adopción.",

    // horizon timeframe phrases (fill {tf})
    tf_quickwins: "los próximos 12 meses",
    tf_balanced: "los próximos dos a tres años",
    tf_structural: "un horizonte de tres a cinco años",

    // horizon sentences
    hs_quickwins:
      "Dada la capacidad actual, comenzamos con acciones de bajo esfuerzo y alto apalancamiento que pueden iniciarse de inmediato y generar impulso para un cambio más profundo.",
    hs_balanced:
      "Buscamos una mezcla equilibrada de logros tempranos y reformas más sustanciales, secuenciadas según el tamaño de cada brecha y su impacto esperado.",
    hs_structural:
      "Estamos preparados para emprender una reforma ambiciosa y estructural, revisando criterios y procesos en todo el sistema, incluso cuando ello requiera esfuerzo y recursos sostenidos.",

    // context sentences (appended to intro1; leading space intentional)
    cs_globalnorth:
      " Como institución con recursos sólidos e integrada en redes consolidadas de evaluación de la investigación, aspiramos a liderar con el ejemplo y a publicar nuestros criterios reformados de forma abierta.",
    cs_globalsouth:
      " Impulsamos la reforma atendiendo a realidades con recursos limitados: herramientas ligeras e interoperables, participación en foros regionales (IRAF, AFRA, AOSP) y la protección de la producción académica en lenguas locales.",
    cs_indigenous:
      " Nuestro enfoque sitúa en el centro los principios CARE y la gobernanza comunitaria de los datos, asegurando que la reforma de la evaluación respete el beneficio colectivo, la autoridad para controlar y los sistemas de conocimiento indígena.",
    cs_multiregional:
      " Operando a través de fronteras, favorecemos modelos federados e interoperables y permanecemos atentos a las asimetrías internacionales al reformar la evaluación de forma unilateral.",
    cs_funder:
      " Como organización de financiamiento de la investigación, nos concentramos en el diseño de incentivos, los criterios de las convocatorias y de revisión, la orientación a las personas revisoras y la alineación con los marcos de evaluación nacionales e internacionales.",

    // effort / impact words used inside the narrative
    effort_low: "bajo",
    effort_medium: "medio",
    effort_high: "alto",
    impact_low: "bajo",
    impact_medium: "medio",
    impact_high: "alto",
    gq_label: "Pregunta orientadora de CoARA",
    gq_labelPlural: "Preguntas orientadoras de CoARA",
    gq_intro:
      "Las indicaciones marcadas como *Pregunta orientadora de CoARA* proceden de las *Action Plan Guidelines* (octubre de 2023) del Secretariado de CoARA. Son un recurso y una sugerencia, no una plantilla obligatoria (CoARA no publica ninguna plantilla para los planes de acción de sus miembros), pero responderlas sección por sección es la forma más rápida de contrastar este borrador con aquello sobre lo que la Coalición pide reflexionar.",
    gq_quotedInEnglish:
      "Se reproducen en el inglés publicado, dado que CoARA no publica traducción.",
    gq_source:
      "Preguntas orientadoras citadas de: CoARA Secretariat, \"Action Plan Guidelines: Support for CoARA signatories in the preparation of action plans\", octubre de 2023.",
    noActionsForCommitment:
      "En este borrador no se seleccionó ninguna acción para este compromiso. [Añadir aquí las acciones previstas por la institución, o indicar por qué no se requiere ninguna.]",
  },

  roles: {
    unspecified: { label: "Sin especificar", hint: "General / prefiere no decirlo." },
    leadership: { label: "Alta dirección", hint: "Rectorado, vicerrectorado de investigación, órgano de gobierno." },
    "research-office": { label: "Oficina de investigación / apoyo", hint: "Servicios de investigación, oficina de RRA o ciencia abierta." },
    "working-group": { label: "Grupo de trabajo de reforma", hint: "Equipo dedicado a CoARA / reforma de la evaluación." },
    researcher: { label: "Investigador/a / personal académico", hint: "Profesorado, posdocs: quienes son evaluados." },
    "hr-career": { label: "RR. HH. y desarrollo de carrera", hint: "Responsables de contratación, promoción y evaluación del desempeño." },
    "library-os": { label: "Biblioteca / Ciencia Abierta", hint: "Repositorio, datos FAIR, comunicación científica." },
    "evaluation-committee": { label: "Comité de evaluación / calidad", hint: "Comités que ejecutan los procesos de evaluación." },
    funder: { label: "Financiador / RFO", hint: "Organización financiadora que diseña convocatorias y criterios." },
    external: { label: "Revisor/a externo/a o consultor/a", hint: "Mirada externa: institución par o auditor." },
  },

  questions: {
    q1a: {
      text: "¿Tu institución reconoce explícitamente productos de investigación más allá de las publicaciones (conjuntos de datos, software, patentes, mentoría) en sus criterios de evaluación?",
      answers: {
        0: "Nunca lo hemos discutido",
        1: "Sabemos que es un tema, pero no hemos actuado",
        2: "Tenemos un grupo de trabajo explorando cómo ampliar los criterios",
        3: "Hemos redactado nuevos criterios que incluyen productos diversos",
        4: "Los nuevos criterios se usan en al menos algunos procesos de evaluación",
        5: "Todos los procesos de evaluación reconocen los productos diversos como norma",
      },
    },
    q1b: {
      text: "¿Actividades como la docencia, la supervisión, la comunicación científica y la revisión por pares se valoran formalmente en la evaluación de las personas investigadoras?",
      answers: {
        0: "Estas actividades no forman parte de la evaluación en absoluto",
        1: "Sabemos que deberían estar, pero aún no se incluyen",
        2: "Estamos mapeando qué actividades deberían incluirse",
        3: "Tenemos un plan para incorporarlas a los criterios de evaluación",
        4: "Algunos procesos ya reconocen estas actividades",
        5: "Todos los procesos de evaluación incluyen sistemáticamente estas actividades",
      },
    },
    q1c: {
      text: "¿Tu institución reconoce las prácticas de ciencia abierta (datos FAIR, acceso abierto, preregistro, revisión por pares abierta) como criterios positivos en la evaluación de las personas investigadoras?",
      answers: {
        0: "La ciencia abierta no forma parte de los criterios de evaluación",
        1: "Sabemos que debería estar, pero no se incluye",
        2: "Estamos mapeando cómo integrar la ciencia abierta en los criterios",
        3: "Hemos redactado criterios que premian las prácticas de ciencia abierta",
        4: "La ciencia abierta se valora en algunos procesos de evaluación",
        5: "Las prácticas de ciencia abierta se premian sistemáticamente en todos los procesos",
      },
    },
    q1d: {
      text: "¿Tu institución considera la equidad, la diversidad y la inclusión (EDI) en sus procesos de evaluación, p. ej., interrupciones de carrera, licencias parentales, discapacidad, sesgo de género en los comités de evaluación?",
      answers: {
        0: "La EDI no se considera en la evaluación",
        1: "Somos conscientes de los temas de EDI, pero no hemos actuado",
        2: "Estamos revisando nuestros procesos para detectar brechas y sesgos de EDI",
        3: "Hemos redactado directrices de EDI para los comités de evaluación",
        4: "Las directrices de EDI están en uso (formación en sesgos inconscientes, ajustes por interrupciones de carrera)",
        5: "La EDI está integrada: la formación en sesgos es obligatoria, las interrupciones de carrera se normalizan, los comités son diversos",
      },
    },
    q2a: {
      text: "¿Los comités de evaluación están formados para realizar una evaluación cualitativa en lugar de basarse en métricas cuantitativas?",
      answers: {
        0: "No lo hemos considerado",
        1: "Reconocemos la necesidad pero no ofrecemos formación",
        2: "Estamos diseñando un programa de formación",
        3: "Los materiales de formación están listos y se planifican pilotos",
        4: "La formación se está desplegando en los comités de evaluación",
        5: "Todas las personas evaluadoras reciben formación periódica en evaluación cualitativa",
      },
    },
    q2b: {
      text: "¿Tu institución usa CV narrativos, portafolios de investigación o declaraciones de impacto en sus procesos de evaluación?",
      answers: {
        0: "No sabemos qué son los CV narrativos",
        1: "Hemos oído hablar de ellos pero no los usamos",
        2: "Estamos estudiando modelos de CV narrativo de otras instituciones",
        3: "Hemos diseñado una plantilla de CV narrativo para nuestro contexto",
        4: "Los CV narrativos se usan en algunos procesos de evaluación",
        5: "Los CV narrativos son el formato estándar en todos los procesos",
      },
    },
    q3a: {
      text: "¿Tus criterios de contratación, promoción o financiamiento mencionan explícitamente el Factor de Impacto de la Revista (JIF), el índice h o los cuartiles de revistas?",
      answers: {
        0: "No sabemos qué dicen nuestros criterios",
        1: "Sí, mencionan estas métricas y sabemos que es problemático",
        2: "Hemos auditado nuestros criterios e identificado dónde aparecen",
        3: "Hemos redactado criterios revisados que eliminan estas métricas",
        4: "La mayoría de los criterios se han actualizado para eliminar estas métricas",
        5: "Ningún proceso de evaluación hace referencia al JIF, el índice h o los cuartiles",
      },
    },
    q3b: {
      text: "En la práctica, ¿las personas evaluadoras siguen basándose en el prestigio de la revista o en indicadores bibliométricos al evaluar candidaturas, aunque los criterios no lo exijan?",
      answers: {
        0: "No tenemos idea de lo que hacen realmente las personas evaluadoras",
        1: "Probablemente sí, pero no lo hemos investigado",
        2: "Estamos encuestando a las personas evaluadoras para entender las prácticas actuales",
        3: "Tenemos evidencia de la brecha y un plan para abordarla",
        4: "Ofrecemos orientación y monitoreamos el mal uso de métricas",
        5: "La cultura ha cambiado: las personas evaluadoras usan habitualmente el juicio cualitativo",
      },
    },
    q4a: {
      text: "¿Tu institución usa rankings universitarios (Shanghai, THE, QS) en la evaluación de la investigación o como indicadores indirectos de calidad?",
      answers: {
        0: "No lo hemos pensado",
        1: "Probablemente sí, especialmente para alianzas internacionales",
        2: "Estamos revisando dónde los rankings influyen en nuestras decisiones",
        3: "Tenemos una política para desvincular la evaluación de los rankings",
        4: "Los rankings no se usan en la evaluación pero pueden aparecer en comunicaciones",
        5: "Los rankings no juegan ningún papel en la evaluación, las alianzas ni las comunicaciones",
      },
    },
    q5b: {
      text: "¿Tu institución cuenta con una estructura formal de gobernanza (comité, grupo de trabajo, junta directiva) dedicada a la reforma de la evaluación de la investigación?",
      answers: {
        0: "No existe una estructura dedicada",
        1: "Existe una persona impulsora individual pero ninguna estructura formal",
        2: "Estamos formando un grupo de trabajo o un equipo especializado",
        3: "Existe un comité formal con mandato y membresía claros",
        4: "El comité está activo, se reúne con regularidad e impulsa los cambios",
        5: "La gobernanza está integrada: comité, presupuesto, líneas de reporte y participación de las personas investigadoras",
      },
    },
    q5a: {
      text: "¿Tu institución ha asignado presupuesto, personal o tiempo específicos para la reforma de la evaluación de la investigación?",
      answers: {
        0: "No se han considerado recursos",
        1: "Sabemos que se necesitan recursos pero no se asigna ninguno",
        2: "Estamos estimando los recursos necesarios",
        3: "Se han reservado presupuesto y personal",
        4: "Los recursos se están desplegando (personal contratado, presupuesto en uso)",
        5: "Hay financiamiento sostenido y un equipo dedicado en funcionamiento",
      },
    },
    q6a: {
      text: "¿Tu institución ha realizado una auditoría sistemática de todos sus criterios y procesos de evaluación actuales?",
      answers: {
        0: "Nunca hemos auditado nuestros criterios",
        1: "Sabemos que deberíamos auditar pero no hemos empezado",
        2: "Una auditoría está en marcha o en diseño",
        3: "La auditoría está completa y se han identificado las brechas",
        4: "Se están implementando nuevos criterios a partir de la auditoría",
        5: "Los criterios se revisan y actualizan periódicamente en un ciclo",
      },
    },
    q6b: {
      text: "¿Se han desarrollado y probado nuevas plantillas de evaluación (p. ej., CV narrativo, portafolio, declaración de impacto)?",
      answers: {
        0: "No tenemos nuevas plantillas",
        1: "Conocemos modelos de CV narrativo pero no hemos creado el nuestro",
        2: "Estamos estudiando plantillas de otras instituciones",
        3: "Hemos diseñado y estamos pilotando nuevas plantillas",
        4: "Las plantillas están en uso y se refinan según la retroalimentación",
        5: "Las plantillas están establecidas, se actualizan periódicamente y se usan ampliamente",
      },
    },
    q6c: {
      text: "¿Tus criterios de evaluación están diferenciados por etapa de carrera (doctorado, postdoctorado, vía de titularidad, sénior) y por tipo de proceso (contratación, promoción, financiamiento, evaluación de unidades)?",
      answers: {
        0: "Usamos los mismos criterios para todo",
        1: "Sabemos que se necesita diferenciación pero no hemos empezado",
        2: "Estamos mapeando qué procesos necesitan criterios distintos",
        3: "Hemos redactado criterios diferenciados para procesos clave",
        4: "Los criterios diferenciados se usan en la mayoría de las etapas de carrera y procesos",
        5: "Todos los procesos tienen criterios adaptados, revisados periódicamente por etapa de carrera",
      },
    },
    q6d: {
      text: "¿Tu institución cuenta con la infraestructura de TI (CRIS, repositorio, integración con ORCID) necesaria para registrar y evaluar contribuciones de investigación diversas?",
      answers: {
        0: "No tenemos sistemas para el seguimiento de las contribuciones de investigación",
        1: "Tenemos sistemas básicos pero solo rastrean publicaciones",
        2: "Estamos explorando mejoras de CRIS o repositorio para registrar productos diversos",
        3: "Hemos planificado mejoras de TI (CRIS, ORCID, repositorio de datos)",
        4: "Los sistemas están en funcionamiento y registran productos diversos (datos, software, mentoría)",
        5: "Una infraestructura integrada alimenta directamente los procesos de evaluación",
      },
    },
    q7a: {
      text: "¿Tu institución comunica activamente a su comunidad investigadora sobre la reforma de la evaluación de la investigación?",
      answers: {
        0: "No ha habido comunicación",
        1: "Solo unas pocas personas conocen CoARA/DORA",
        2: "Estamos planificando sesiones informativas o talleres",
        3: "Una campaña de sensibilización está diseñada y lista para lanzarse",
        4: "Se están impartiendo talleres y sesiones informativas",
        5: "La comunidad investigadora está bien informada e involucrada",
      },
    },
    q7b: {
      text: "¿Tu institución aborda la ética de la investigación, la integridad y las publicaciones depredadoras como parte de su comunicación y formación sobre la reforma de la evaluación?",
      answers: {
        0: "La ética y la integridad no están vinculadas a la reforma de la evaluación",
        1: "Sabemos que están conectadas pero no las hemos integrado",
        2: "Estamos planeando incluir ética/integridad en nuestra comunicación de la reforma",
        3: "Se están desarrollando materiales sobre ética, integridad y revistas depredadoras",
        4: "La formación incluye módulos de ética/integridad junto a la reforma de la evaluación",
        5: "La ética, la integridad y la publicación responsable están plenamente integradas en la formación de la reforma",
      },
    },
    q8a: {
      text: "¿Tu institución participa en Grupos de Trabajo temáticos o Action Clusters de CoARA (SSH, EMCRs, Peer Review, RMI, OI4RRA, ERIP, etc.)?",
      answers: {
        0: "No participamos en ningún grupo temático",
        1: "Conocemos los grupos pero no nos hemos unido",
        2: "Estamos explorando a qué grupos unirnos",
        3: "Nos hemos unido y estamos planificando nuestra contribución",
        4: "Participamos y contribuimos activamente",
        5: "Co-lideramos grupos temáticos y compartimos nuestra experiencia ampliamente",
      },
    },
    q9a: {
      text: "¿Tu institución ha publicado o planificado un informe de progreso sobre su trayectoria de reforma de la evaluación?",
      answers: {
        0: "No hemos considerado reportar",
        1: "Sabemos que deberíamos reportar pero aún no tenemos nada que reportar",
        2: "Estamos definiendo qué medir y cómo reportar",
        3: "Un marco de reporte está listo y la recolección de datos ha comenzado",
        4: "Se ha publicado o presentado un informe de progreso",
        5: "Se publican informes de progreso periódicos en un ciclo definido",
      },
    },
    q9b: {
      text: "¿Cómo mantiene tu institución informados sobre la reforma a su personal y a sus órganos de gobierno?",
      answers: {
        0: "No hemos comunicado la reforma internamente",
        1: "Se ha mencionado la reforma, pero no hay una comunicación interna planificada",
        2: "La reforma se ha presentado al menos una vez a la dirección o a los órganos de gobierno",
        3: "Un plan de comunicación define públicos, canales y responsables",
        4: "El personal y los órganos de gobierno reciben actualizaciones con una periodicidad fija",
        5: "Las actualizaciones periódicas se archivan, el personal puede responder y los órganos de gobierno revisan el avance en un ciclo fijo",
      },
    },
    q10a: {
      text: "¿Tu institución aporta datos o participa en evaluaciones colectivas del progreso de la reforma entre las entidades firmantes?",
      answers: {
        0: "No hemos participado en la evaluación colectiva",
        1: "Conocemos los procesos colectivos pero no participamos",
        2: "Nos estamos preparando para participar en el próximo ciclo de revisión",
        3: "Hemos aportado datos para la evaluación colectiva",
        4: "Participamos activamente y compartimos datos de benchmarking",
        5: "Lideramos iniciativas de evaluación colectiva y publicamos los resultados de forma abierta",
      },
    },
    q1e: {
      text: "¿Tu evaluación protege activamente de la penalización la investigación publicada en lenguas locales/no dominantes y sobre temas de relevancia local?",
      answers: {
        0: "El idioma no se considera en la evaluación",
        1: "Sabemos que el trabajo en lengua local está en desventaja pero no hemos actuado",
        2: "Estamos auditando cómo el sesgo lingüístico afecta nuestros criterios",
        3: "Las protecciones están redactadas (p. ej., ponderación para productos en lengua local)",
        4: "Las protecciones se aplican en algunos procesos de evaluación",
        5: "La protección multilingüe es sistemática (alineada con la Helsinki Initiative)",
      },
    },
    q1f: {
      text: "¿Tu institución aplica los principios CARE (beneficio colectivo, autoridad para controlar, responsabilidad, ética) al trabajar con datos indígenas o de propiedad comunitaria?",
      answers: {
        0: "Los principios CARE no forman parte de nuestras políticas de datos",
        1: "Conocemos CARE pero no lo aplicamos",
        2: "Estamos mapeando dónde debería aplicarse CARE en nuestra investigación",
        3: "CARE está incorporado en los documentos de gobernanza de datos",
        4: "CARE se aplica en algunos proyectos y evaluaciones",
        5: "CARE está integrado junto a FAIR como política de datos por defecto",
      },
    },
    q8b: {
      text: "¿Tu institución se vincula con un foro regional o un capítulo nacional (CoARA National Chapters, IRAF, AFRA, AOSP, etc.)?",
      answers: {
        0: "Sin vinculación con foros regionales",
        1: "Sabemos que existen foros pero no somos miembros",
        2: "Estamos explorando qué foro se ajusta mejor a nuestro contexto",
        3: "Nos hemos unido y contribuimos ocasionalmente",
        4: "Participamos activamente y compartimos nuestra experiencia",
        5: "Ayudamos a liderar o cofundar foros regionales / capítulos",
      },
    },
    q10b: {
      text: "¿Tu institución documenta las excepciones a la apertura siguiendo el principio 'tan abierto como sea posible, tan cerrado como sea necesario' (con plazo limitado y revisado)?",
      answers: {
        0: "Las excepciones a la apertura no se documentan",
        1: "Sabemos que deberíamos documentar las excepciones",
        2: "Estamos redactando una plantilla de documentación",
        3: "La documentación de excepciones es obligatoria en los nuevos proyectos",
        4: "Las excepciones se documentan y se revisan periódicamente",
        5: "Todas las excepciones tienen plazo limitado, se registran y se auditan",
      },
    },
  },

  commitments: {
    diversity: {
      title: "Reconocer la diversidad de contribuciones",
      text: "Reconocer la diversidad de actividades, prácticas y contribuciones que maximizan la calidad y el impacto de la investigación, incluyendo, entre otras, la investigación de calidad (de la fundamental a la traslacional), la docencia, la mentoría, la supervisión, el liderazgo, el emprendimiento, la movilización del conocimiento, la gestión de la investigación, la innovación, la colaboración público-privada, la participación ciudadana y las prácticas de ciencia abierta.",
      inPractice: [
        "Ampliar lo que 'cuenta' en la evaluación más allá de las publicaciones",
        "Incluir conjuntos de datos, software, patentes, mentoría y divulgación en los criterios de evaluación",
        "Valorar las contribuciones en equipo y los roles de liderazgo",
        "Reconocer las prácticas de ciencia abierta (compartir datos, preregistro, revisión por pares abierta)",
      ],
    },
    qualitative: {
      title: "Basar la evaluación en el juicio cualitativo",
      text: "Basar la evaluación de la investigación principalmente en el juicio cualitativo, para el cual la revisión por pares es central, respaldado por un uso responsable de los indicadores cuantitativos. Esto implica abandonar los usos inapropiados de las métricas basadas en revistas y publicaciones, especialmente el Factor de Impacto de la Revista (JIF), para evaluar a personas investigadoras individuales o tomar decisiones de contratación y financiamiento.",
      inPractice: [
        "Eliminar el JIF, el índice h y los cuartiles de revistas de los criterios de contratación/promoción",
        "Rediseñar los formularios de evaluación para enfatizar la evidencia narrativa y cualitativa",
        "Formar a los comités de evaluación en el uso responsable de métricas",
        "Implementar CV narrativos o evaluación basada en portafolios",
      ],
    },
    "no-metrics": {
      title: "Abandonar las métricas inapropiadas basadas en revistas",
      text: "Dejar de usar métricas basadas en revistas, como el Factor de Impacto de la Revista y el índice h, como indicadores indirectos de la calidad de productos de investigación individuales o de personas investigadoras individuales, en las decisiones de contratación, promoción y financiamiento.",
      inPractice: [
        "Auditar todos los criterios de evaluación en busca de referencias al JIF, el índice h y los cuartiles",
        "Eliminar los umbrales de métricas de las ofertas de empleo y las directrices de promoción",
        "Reemplazar los indicadores indirectos cuantitativos por una evaluación basada en el contenido",
        "Comunicar el cambio a la comunidad investigadora",
      ],
    },
    "no-rankings": {
      title: "Evitar los rankings en la evaluación de la investigación",
      text: "Evitar el uso de rankings de instituciones de educación superior y de investigación en los procesos de evaluación de la investigación.",
      inPractice: [
        "No usar los rankings Shanghai/THE/QS como indicador indirecto de calidad para las personas investigadoras",
        "Eliminar las referencias a rankings institucionales de los criterios de evaluación",
        "Evaluar la calidad de la colaboración según el contenido, no el prestigio del socio",
      ],
    },
    resources: {
      title: "Comprometer recursos para la reforma",
      text: "Comprometer los recursos necesarios para reformar las prácticas de evaluación de la investigación, incluyendo financiamiento, formación, infraestructura y tiempo del personal.",
      inPractice: [
        "Asignar presupuesto para la reforma de la evaluación (formación, herramientas, personal)",
        "Designar personal o comité dedicado a la coordinación de la reforma",
        "Proporcionar tiempo protegido a los miembros de los comités de evaluación",
        "Invertir en infraestructura para el seguimiento de productos diversos",
      ],
    },
    "review-criteria": {
      title: "Revisar y desarrollar criterios, herramientas y procesos de evaluación",
      text: "Revisar y desarrollar criterios, herramientas y procesos para la evaluación de la investigación, con la participación de las personas investigadoras, promoviendo la interoperabilidad y enfoques adaptados al contexto en todas las etapas de carrera.",
      subCommitments: {
        "6.1": "Para unidades e instituciones: desarrollar criterios con la participación de las personas investigadoras, promoviendo la interoperabilidad entre sistemas",
        "6.2": "Para proyectos y personas investigadoras: crear enfoques de evaluación adaptados al contexto en todas las etapas de carrera",
      },
      inPractice: [
        "Auditar los criterios de evaluación actuales en todos los procesos",
        "Rediseñar las rúbricas para contratación, promoción, titularidad y financiamiento interno",
        "Crear nuevas plantillas (CV narrativo, portafolio, declaración de impacto)",
        "Involucrar a las personas investigadoras en el diseño de criterios (no solo de arriba hacia abajo)",
        "Adaptar los criterios a la etapa de carrera (inicio de carrera frente a sénior)",
        "Pilotar nuevos criterios e iterar según la retroalimentación",
      ],
    },
    awareness: {
      title: "Sensibilizar y ofrecer orientación",
      text: "Sensibilizar sobre la reforma de la evaluación de la investigación y proporcionar comunicación transparente, orientación y formación sobre los criterios, los procesos de evaluación y su uso responsable.",
      inPractice: [
        "Realizar talleres y sesiones informativas sobre la evaluación reformada",
        "Publicar los criterios de evaluación de forma abierta y accesible",
        "Crear guías para las personas evaluadoras y las evaluadas",
        "Desarrollar preguntas frecuentes y materiales de comunicación",
      ],
    },
    exchange: {
      title: "Intercambiar prácticas y experiencias",
      text: "Intercambiar prácticas y experiencias para permitir el aprendizaje mutuo dentro y entre las organizaciones firmantes, reconociendo que distintas organizaciones se encuentran en distintos puntos del camino.",
      inPractice: [
        "Participar en los Action Clusters y grupos de trabajo de CoARA",
        "Compartir buenas prácticas con instituciones pares",
        "Asistir a talleres sobre la reforma de la evaluación o ser anfitrión de ellos",
        "Publicar informes sobre la experiencia de implementación",
      ],
    },
    communicate: {
      title: "Comunicar el progreso",
      text: "Comunicar el progreso realizado en la adhesión a los principios y la implementación de los compromisos, principalmente mediante autoevaluaciones compartidas públicamente, sobre una base de confianza.",
      inPractice: [
        "Publicar informes de progreso periódicos (cada 2-3 años)",
        "Compartir públicamente las autoevaluaciones y participar en el aprendizaje mutuo con otras organizaciones firmantes",
        "Compartir métricas sobre la adopción (% de criterios reformados, personas evaluadoras formadas, etc.)",
        "Ser transparente sobre los desafíos y los retrocesos",
      ],
    },
    "collective-eval": {
      title: "Evaluar con base en la evidencia y los datos abiertos",
      text: "Usar métodos rigurosos para evaluar si las prácticas reformadas logran los resultados deseados. Asegurar el control comunitario de los datos de evaluación, con base en la evidencia y los datos abiertos, manteniendo la transparencia y la reproducibilidad.",
      inPractice: [
        "Aportar datos para el seguimiento del progreso de todo el ecosistema",
        "Usar datos abiertos e infraestructura para la evaluación (no sistemas propietarios)",
        "Participar en evaluaciones colectivas con otras entidades firmantes",
        "Compartir datos de evaluación anonimizados para benchmarking",
        "Apoyar el desarrollo de indicadores basados en evidencia del progreso de la reforma",
      ],
    },
  },

  actions: [
    {
      title: "Mapear los productos reconocidos y redactar una tipología ampliada",
      description: "Parte de un inventario de los tipos de productos que reconocen hoy tus criterios y de sus brechas. Luego desarrolla una tipología completa de contribuciones de investigación: artículos revisados por pares, conjuntos de datos, software, código, protocolos, materiales docentes, mentoría, informes de políticas, medios, ciencia ciudadana, etc.",
      planText: "Haremos un inventario de los tipos de productos que reconocen hoy nuestros criterios y desarrollaremos una tipología completa de contribuciones de investigación: artículos revisados por pares, conjuntos de datos, software, código, protocolos, materiales docentes, mentoría, informes de políticas, medios y ciencia ciudadana.",
      examples: ["Netherlands Recognition & Rewards programme", "UK REF impact case studies"],
    },
    {
      title: "Integrar productos diversos en todos los procesos de evaluación",
      description: "Revisa todos los criterios de contratación, promoción, titularidad y financiamiento para incluir y ponderar explícitamente los tipos de productos diversos y reconocer el trabajo en equipo, colegiado y de evaluación junto a los logros individuales. Asegura que las personas evaluadoras estén formadas para evaluarlos.",
      planText: "Revisaremos todos los criterios de contratación, promoción, titularidad y financiamiento para incluir y ponderar explícitamente los tipos de productos diversos y reconocer el trabajo en equipo, colegiado y de evaluación junto a los logros individuales, y aseguraremos que las personas evaluadoras estén formadas para evaluarlos.",
    },
    {
      title: "Diseñar y pilotar un CV narrativo",
      description: "Revisa los modelos de CV narrativo existentes (Résumé for Researchers, R4RI de UKRI, plantillas nacionales) y adapta uno a tu contexto institucional. Pilotéala en una o dos rondas de evaluación (p. ej., convocatorias internas, un comité de promoción). Recoge retroalimentación de las personas evaluadoras y las candidaturas.",
      planText: "Revisaremos los modelos de CV narrativo existentes, adaptaremos uno a nuestro contexto institucional, la pilotaremos en una o dos rondas de evaluación y recogeremos retroalimentación de las personas evaluadoras y las candidaturas.",
    },
    {
      title: "Formar a los comités de evaluación",
      description: "Desarrolla e imparte formación para los comités de evaluación sobre evaluación cualitativa, uso responsable de métricas y sesgo implícito. Incluye ejercicios prácticos con portafolios de ejemplo.",
      planText: "Desarrollaremos e impartiremos formación para los comités de evaluación sobre evaluación cualitativa, uso responsable de métricas y sesgo implícito, con ejercicios prácticos basados en portafolios de ejemplo.",
    },
    {
      title: "Institucionalizar la evaluación cualitativa",
      description: "Convierte los CV narrativos y la evaluación cualitativa en el estándar por defecto en todos los procesos. Establece formación periódica para las personas evaluadoras. Monitorea el retorno gradual de las métricas.",
      planText: "Convertiremos los CV narrativos y la evaluación cualitativa en el estándar por defecto en todos nuestros procesos, estableceremos formación periódica para las personas evaluadoras y monitorearemos el retorno gradual de las métricas.",
    },
    {
      title: "Auditar los criterios en busca de referencias a métricas",
      description: "Busca en todas las ofertas de empleo, directrices de promoción, convocatorias de financiamiento y políticas internas referencias al JIF, el índice h, los cuartiles o las 'revistas de alto impacto'. Documenta cada caso.",
      planText: "Buscaremos en todas las ofertas de empleo, directrices de promoción, convocatorias de financiamiento y políticas internas referencias al JIF, el índice h, los cuartiles o las 'revistas de alto impacto', documentando cada caso.",
    },
    {
      title: "Eliminar los indicadores indirectos métricos de los criterios",
      description: "Revisa todos los documentos identificados para eliminar o reemplazar los criterios basados en métricas. Reemplaza 'publicar en revistas Q1' por 'demostrar impacto a través de productos diversos'.",
      planText: "Revisaremos todos los documentos identificados para eliminar o reemplazar los criterios basados en métricas, sustituyendo fórmulas como 'publicar en revistas Q1' por 'demostrar impacto a través de productos diversos'.",
    },
    {
      title: "Monitorear el retorno gradual de las métricas",
      description: "Establece un proceso de revisión periódica para asegurar que las métricas eliminadas no vuelvan a colarse. Encuesta a las personas evaluadoras anualmente sobre sus prácticas reales.",
      planText: "Estableceremos una revisión periódica para asegurar que las métricas eliminadas no vuelvan a colarse, encuestando anualmente a las personas evaluadoras sobre sus prácticas reales.",
    },
    {
      title: "Identificar dónde se usan los rankings",
      description: "Revisa las comunicaciones institucionales, los criterios de alianzas y los procesos de evaluación en busca de referencias a Shanghai, THE, QS u otros rankings.",
      planText: "Revisaremos las comunicaciones institucionales, los criterios de alianzas y los procesos de evaluación en busca de referencias a Shanghai, THE, QS u otros rankings.",
    },
    {
      title: "Publicar la postura sobre los rankings y dejarlos fuera de las decisiones internas",
      description: "Declarar públicamente cómo ve la institución los rankings universitarios y para qué no los usará (por ejemplo, con una declaración More Than Our Rank de INORMS), explicar sus límites a la propia comunidad y excluirlos de las decisiones de contratación, promoción, financiamiento y alianzas. Algunas instituciones van más allá y dejan de enviar datos a los rankings comerciales.",
      planText: "Publicaremos nuestra postura sobre los rankings universitarios, explicaremos sus límites a nuestra comunidad y los dejaremos fuera de las decisiones de contratación, promoción, financiamiento y alianzas.",
    },
    {
      title: "Asegurar financiamiento y personal dedicados",
      description: "Estima lo que necesita la reforma (tiempo del personal, sistemas, formación, comunicación) y luego solicita la asignación de presupuesto a la dirección institucional. Designa una persona coordinadora de la reforma o un comité con tiempo protegido y mandato claro.",
      planText: "Estimaremos los recursos que necesita la reforma, aseguraremos una asignación presupuestaria dedicada y designaremos una persona coordinadora de la reforma o un comité con tiempo protegido y mandato claro.",
    },
    {
      title: "Realizar una auditoría exhaustiva de criterios",
      description: "Revisa sistemáticamente TODOS los criterios de evaluación: contratación (todos los niveles), promoción, titularidad, convocatorias internas, años sabáticos, premios, evaluaciones de departamento. Usa una lista de verificación estandarizada.",
      planText: "Revisaremos sistemáticamente todos los criterios de evaluación (contratación en todos los niveles, promoción, titularidad, convocatorias internas, años sabáticos, premios y evaluaciones de departamento) con una lista de verificación estandarizada.",
    },
    {
      title: "Rediseñar las rúbricas de evaluación",
      description: "Con base en los resultados de la auditoría, crea nuevas rúbricas que enfaticen las contribuciones diversas, la evidencia cualitativa y la alineación con la misión institucional. Donde exista una matriz nacional o de pares (NOR-CAM, FIN-CAM), adáptala en lugar de empezar de cero. Pilota e itera, y lleva las rúbricas a lo que ven las candidaturas: anuncios de plazas, formularios y bases de las convocatorias.",
      planText: "Con base en los resultados de la auditoría, crearemos nuevas rúbricas que enfaticen las contribuciones diversas, la evidencia cualitativa y la alineación con nuestra misión institucional, adaptando una matriz nacional donde exista, pilotando e iterando sobre la marcha, y trasladándolas a los anuncios de plazas, los formularios y las bases de las convocatorias.",
    },
    {
      title: "Establecer un ciclo periódico de revisión de criterios",
      description: "Fija un calendario establecido (p. ej., cada 3 años) para revisar y actualizar todos los criterios de evaluación. Incluye la consulta a las partes interesadas en cada revisión.",
      planText: "Fijaremos un calendario establecido (p. ej., cada 3 años) para revisar y actualizar todos los criterios de evaluación, con consulta a las partes interesadas en cada ciclo.",
    },
    {
      title: "Crear materiales informativos básicos",
      description: "Desarrolla una ficha de una página, preguntas frecuentes y un video breve que expliquen qué es CoARA, por qué tu institución firmó y qué cambiará. Publícalos en el sitio web institucional.",
      planText: "Publicaremos en el sitio web institucional una ficha de una página, preguntas frecuentes y un video breve que expliquen qué es CoARA, por qué firmamos y qué cambiará.",
    },
    {
      title: "Realizar talleres y asambleas abiertas",
      description: "Organiza talleres interactivos para personas investigadoras, evaluadoras y administrativas. Incluye ejercicios prácticos (p. ej., 'evalúa a esta candidatura sin métricas'). Realiza asambleas abiertas de preguntas y respuestas.",
      planText: "Organizaremos talleres interactivos para personas investigadoras, evaluadoras y administrativas, con ejercicios prácticos como la evaluación de candidaturas sin métricas, complementados con asambleas abiertas de preguntas y respuestas.",
    },
    {
      title: "Unirse a Grupos de Trabajo temáticos y Action Clusters de CoARA",
      description: "Firma el Acuerdo CoARA (si aún no lo has firmado) y selecciona 1-2 Grupos de Trabajo temáticos o Action Clusters alineados con tus prioridades (SSH, EMCRs, peer review, RMI, OI4RRA, ERIP, etc.). También cuentan los proyectos colaborativos de reforma: un proyecto financiado por CoARA o por la UE, o un grupo de trabajo de una iniciativa externa a la Coalición. Para foros geográficos (CoARA National Chapters, IRAF, AFRA, AOSP) consulta la acción dedicada más abajo.",
      planText: "Nos uniremos a uno o dos Grupos de Trabajo temáticos o Action Clusters de CoARA alineados con nuestras prioridades (como SSH, EMCRs, peer review, RMI, OI4RRA o ERIP), o a un proyecto colaborativo de reforma, y participaremos en sus intercambios.",
      examples: ["WG SSH", "WG EMCRs", "WG Peer Review", "WG OI4RRA", "WG ERIP"],
    },
    {
      title: "Co-organizar actividades de aprendizaje entre pares",
      description: "Asóciate con otras entidades firmantes para organizar talleres, seminarios web o visitas conjuntas. Si perteneces a una Alianza de Universidades Europeas o a una red internacional, lleva también allí la reforma de la evaluación. Comparte tu experiencia de implementación, tanto los éxitos como los fracasos.",
      planText: "Nos asociaremos con otras entidades firmantes, y con las alianzas y redes universitarias de las que formamos parte, para organizar talleres, seminarios web o visitas conjuntas, compartiendo nuestra experiencia de implementación, tanto los éxitos como los fracasos.",
    },
    {
      title: "Definir indicadores de progreso",
      description: "Decide qué medir: % de criterios reformados, número de personas evaluadoras formadas, tasa de adopción del CV narrativo, satisfacción de las partes interesadas, etc.",
      planText: "Definiremos los indicadores que seguiremos: el porcentaje de criterios reformados, el número de personas evaluadoras formadas, la adopción del CV narrativo y la satisfacción de las partes interesadas.",
    },
    {
      title: "Publicar un informe de progreso",
      description: "Redacta y publica tu primer informe de progreso. Incluye: estado de línea base, acciones realizadas, indicadores de cambio, desafíos enfrentados, próximos pasos. Compártelo públicamente.",
      planText: "Redactaremos y compartiremos públicamente nuestro primer informe de progreso, cubriendo el estado de línea base, las acciones realizadas, los indicadores de cambio, los desafíos enfrentados y los próximos pasos.",
    },
    {
      title: "Preparar la autoevaluación pública",
      description: "Familiarízate con el seguimiento basado en la confianza de CoARA: el progreso se comunica principalmente mediante autoevaluaciones compartidas públicamente, con un plan de acción previsto dentro del año siguiente a la firma y un punto de contacto a los cinco años. Reúne los datos que necesitarás: plan de acción, indicadores de progreso, resultados de la autoevaluación.",
      planText: "Prepararemos nuestra autoevaluación pública conforme al seguimiento basado en la confianza de CoARA, reuniendo el plan de acción, los indicadores de progreso y los datos de autoevaluación que requiere.",
    },
    {
      title: "Liderar o contribuir a estudios de benchmarking",
      description: "Comparte datos de evaluación anonimizados, y cuando proceda tus métodos y herramientas, con instituciones pares. Participa en estudios comparativos del progreso de la reforma entre entidades firmantes o inícialos, y apóyate en la investigación sobre la investigación: involucra a quienes estudian la evaluación en tu propia institución.",
      planText: "Compartiremos datos de evaluación anonimizados, y cuando proceda nuestros métodos y herramientas, con instituciones pares, participaremos en estudios comparativos del progreso de la reforma entre entidades firmantes, o los iniciaremos, y nos apoyaremos en la investigación sobre la investigación, incluida la de nuestro propio personal.",
    },
    {
      title: "Revisar los procesos de evaluación en busca de brechas de EDI",
      description: "Audita los criterios de evaluación y la composición de los comités en busca de sesgo de género, tratamiento de interrupciones de carrera (licencia parental, enfermedad, discapacidad) y diversidad. Identifica dónde los sesgos pueden afectar los resultados.",
      planText: "Auditaremos los criterios de evaluación y la composición de los comités en busca de sesgo de género, tratamiento de interrupciones de carrera (licencia parental, enfermedad, discapacidad) y diversidad, identificando dónde los sesgos pueden afectar los resultados.",
      examples: ["FRQ unconscious bias training modules", "SDU Gender Equality Plan", "UCLouvain GEDIP 2024-2027"],
    },
    {
      title: "Implementar directrices de EDI para los comités de evaluación",
      description: "Desarrolla y aplica directrices: formación obligatoria en sesgos inconscientes para las personas evaluadoras, normalizar los ajustes por interrupciones de carrera, asegurar la diversidad en la composición de los comités, incluir cuestionarios de autoevaluación de EDI.",
      planText: "Adoptaremos y aplicaremos directrices de EDI para los comités de evaluación: formación obligatoria en sesgos inconscientes, ajustes normalizados por interrupciones de carrera, composición diversa de los comités y cuestionarios de autoevaluación de EDI.",
      examples: ["FRQ mandatory bias module for all committee members", "SDU Mentoring for Change Programme"],
    },
    {
      title: "Mapear cómo podría valorarse la ciencia abierta en la evaluación",
      description: "Identifica qué prácticas de ciencia abierta (datos FAIR, acceso abierto, preregistro, revisión por pares abierta, código abierto) son relevantes para tu institución y cómo podrían reconocerse en los criterios de evaluación.",
      planText: "Identificaremos qué prácticas de ciencia abierta (datos FAIR, acceso abierto, preregistro, revisión por pares abierta, código abierto) son relevantes para nuestra institución y cómo pueden reconocerse en los criterios de evaluación.",
      examples: ["SDU Open Science Awards", "Helmholtz FAIR Quality Indicators for data and software"],
    },
    {
      title: "Integrar la ciencia abierta en los criterios de evaluación",
      description: "Añade las prácticas de ciencia abierta como criterios positivos: compartir datos, disponibilidad del código, preregistro, publicación en acceso abierto. Premia la reproducibilidad y la transparencia, no solo el volumen de productos.",
      planText: "Añadiremos las prácticas de ciencia abierta como criterios positivos de evaluación (compartir datos, disponibilidad del código, preregistro, publicación en acceso abierto), premiando la reproducibilidad y la transparencia y no solo el volumen de productos.",
      examples: ["AQU Catalunya action A23", "UCM open peer review module in repository", "SDU OADO indicator"],
    },
    {
      title: "Establecer una estructura de gobernanza dedicada a la reforma",
      description: "Crea un comité o grupo de trabajo formal con mandato claro, membresía multidisciplinaria, representación de las personas investigadoras y líneas de reporte a la dirección institucional. Esta es la acción fundacional que habilita todas las demás.",
      planText: "Estableceremos un comité o grupo de trabajo formal de la reforma con mandato claro, membresía multidisciplinaria, representación de las personas investigadoras y líneas de reporte directas a la dirección institucional.",
      examples: ["UCM CoARA Working Group", "DCU Open Research Steering Group", "Pannonia Scientific Quality Analysis Group"],
    },
    {
      title: "Mejorar la infraestructura para apoyar la evaluación reformada",
      description: "Comprueba primero si tus sistemas pueden registrar productos diversos. Luego implementa o mejora el CRIS, integra ORCID, despliega repositorios de datos, conecta los sistemas con los flujos de trabajo de evaluación y dota de personal el apoyo que los rodea (un equipo de acceso abierto, una persona gestora de datos). Asegura que la infraestructura registre lo que requieren los nuevos criterios. Marcos como OI4RRA (las capas que van de los identificadores a las herramientas de evaluación) y los principios TRUST para repositorios ayudan a decidir dónde invertir.",
      planText: "Implementaremos o mejoraremos nuestra infraestructura de información de investigación (CRIS, integración con ORCID, repositorios de datos), dotaremos de personal los servicios de apoyo que la rodean y la conectaremos con los flujos de trabajo de evaluación para que registre lo que requieren los nuevos criterios.",
      examples: ["UPC DRAC feeding into Programa Càtedres evaluation", "Helmholtz automated quality indicator pipelines"],
    },
    {
      title: "Diferenciar los criterios por etapa de carrera, proceso y disciplina",
      description: "Desarrolla criterios de evaluación distintos para puestos de doctorado, postdoctorado, vía de titularidad y sénior, y deja que cada disciplina defina qué cuenta como calidad en sus propios términos (libros en humanidades, ponencias en informática). Distingue también entre contratación, promoción, convocatorias internas y evaluación de unidades. Los criterios uniformes desfavorecen a las personas investigadoras en inicio de carrera.",
      planText: "Desarrollaremos criterios de evaluación distintos para puestos de doctorado, postdoctorado, vía de titularidad y sénior, dejaremos que cada disciplina defina qué cuenta como calidad en sus propios términos, y distinguiremos entre contratación, promoción, convocatorias internas y evaluación de unidades, para que los criterios uniformes dejen de desfavorecer a las personas investigadoras en inicio de carrera.",
      examples: ["UB differentiated review per call type (predoc, postdoc, Serra Hunter, cátedras)", "Eurodoc R1/R2/R3 mapping"],
    },
    {
      title: "Establecer programas de mentoría para personas investigadoras en inicio de carrera",
      description: "Crea una mentoría y una formación estructuradas que ayuden a las personas en inicio de carrera (ECR) a navegar la evaluación reformada: cómo construir un portafolio, escribir un CV narrativo, demostrar contribuciones diversas. Incluye a personas investigadoras sénior como mentoras.",
      planText: "Crearemos una mentoría y una formación estructuradas, con personas investigadoras sénior como mentoras, que ayuden a quienes inician su carrera a navegar la evaluación reformada: construir un portafolio, escribir un CV narrativo y demostrar contribuciones diversas.",
      examples: ["SDU Mentoring for Change (130 PhDs/year)", "OGS mentoring initiative", "Pannonia Group of Young Scientists"],
    },
    {
      title: "Vincular la integridad de la investigación con la reforma de la evaluación",
      description: "Desarrolla orientación sobre revistas depredadoras, ética de la investigación y conducta responsable como parte de la comunicación de la reforma de la evaluación. Debe valorarse la calidad de las prácticas de investigación, no solo los productos.",
      planText: "Vincularemos la integridad de la investigación con la reforma de la evaluación, desarrollando orientación sobre revistas depredadoras, ética de la investigación y conducta responsable, de modo que la calidad de las prácticas de investigación se valore junto con los productos.",
      examples: ["Pannonia Committee on Research Ethics", "Hong Kong Principles", "LBG Ethics & Diversity Hub"],
    },
    {
      title: "Realizar una encuesta interna sobre las percepciones de la evaluación",
      description: "Encuesta a tu comunidad investigadora: ¿qué criterios creen que se usan frente a los que creen que deberían usarse? Esta base de evidencia es invaluable para calibrar la reforma. Publica los resultados de forma abierta.",
      planText: "Encuestaremos a nuestra comunidad investigadora sobre qué criterios cree que se usan frente a los que cree que deberían usarse, y publicaremos los resultados de forma abierta como base de evidencia para calibrar la reforma.",
      examples: ["Helmholtz survey of 1,145 researchers", "UCLouvain 34 interviews with evaluation committees", "UCM planned periodic surveys"],
    },
    {
      title: "Extender la reforma a la evaluación de unidades e instituciones",
      description: "La reforma no se detiene en la evaluación individual. Revisa cómo se evalúan los departamentos, institutos y grupos de investigación: estos procesos también dependen de métricas de publicación y rankings. Desarrolla alternativas cualitativas.",
      planText: "Extenderemos la reforma más allá de la evaluación individual, revisando cómo se evalúan los departamentos, institutos y grupos de investigación y desarrollando alternativas cualitativas a las métricas de publicación y los rankings.",
      examples: ["Helmholtz centre-level KPI review", "LBG periodic institute evaluation by 3 experts", "AQU institutional quality assessment"],
    },
    {
      title: "Auditar el sesgo lingüístico (Helsinki Initiative on Multilingualism)",
      description: "Asegura que la investigación en lenguas locales o no dominantes no sea penalizada. Revisa los criterios, la composición de los comités y las bases de datos consultadas en busca de sesgo implícito hacia el inglés. La Helsinki Initiative ofrece el marco canónico.",
      planText: "Revisaremos los criterios, la composición de los comités y las bases de datos que consultamos en busca de sesgo implícito hacia el inglés, siguiendo la Helsinki Initiative on Multilingualism, para que la investigación en lenguas locales o no dominantes no sea penalizada.",
      examples: ["AQU Catalunya: Helsinki Initiative adoption", "FRQ 60+ francophone journals funded", "Leiden Manifesto principle 3"],
    },
    {
      title: "Unirse a un foro regional o capítulo nacional",
      description: "Alinéate con un foro regional (IRAF India, AFRA África/AOSP, CoARA National Chapter) en lugar de reformar de forma aislada. La reforma unilateral en un ecosistema guiado por métricas corre el riesgo de desfavorecer a tus personas investigadoras; la coordinación regional las protege.",
      planText: "Nos alinearemos con un foro regional o un CoARA National Chapter en lugar de reformar de forma aislada, protegiendo a nuestras personas investigadoras mediante la coordinación regional.",
      examples: ["IRAF inauguration (Dr. Gitanjali Yadav)", "AOSP Governing Council", "CoARA Spain (CRUE/CSIC)"],
    },
    {
      title: "Adoptar una taxonomía de contribuciones (CRediT / CASRAI / TaDiRAH)",
      description: "Ve más allá de las listas de autoría hacia declaraciones de contribución estructuradas. CRediT funciona para STEM; TaDiRAH complementa para humanidades; CASRAI cubre la administración de la investigación. Esto es un prerrequisito para reconocer contribuciones diversas a escala.",
      planText: "Iremos más allá de las listas de autoría hacia declaraciones de contribución estructuradas, adoptando una taxonomía de contribuciones (CRediT, complementada con TaDiRAH para humanidades y CASRAI para la administración de la investigación) como base para reconocer contribuciones diversas a escala.",
      examples: ["CRediT taxonomy", "TaDiRAH (humanities)", "CASRAI standards", "OpenVIVO Contributor Roles"],
    },
    {
      title: "Anclar la reforma en un marco establecido (DORA / Leiden / SCOPE)",
      description: "No partas de una página en blanco. Adopta formalmente un ancla existente: firma DORA, respalda el Manifiesto de Leiden o usa el modelo SCOPE como espina dorsal de tu proceso. Aproximadamente el 43% de los planes de acción CoARA publicados citan al menos uno, que aporta legitimidad, un vocabulario compartido y orientaciones que las personas evaluadoras ya reconocen.",
      planText: "Anclaremos nuestra reforma en un marco establecido (firmando DORA, respaldando el Manifiesto de Leiden o adoptando el modelo SCOPE como espina dorsal de nuestro proceso), dotándola de legitimidad, un vocabulario compartido y orientaciones que las personas evaluadoras ya reconocen.",
    },
    {
      title: "Lograr la aprobación formal del plan por los órganos de gobierno",
      description: "Lleva el plan de acción a tu claustro, rectorado, consejo de dirección o consejo de gobierno para su aprobación formal, y deja constancia de la decisión. Un plan que nunca se adoptó no tiene mandato: no puede reclamar presupuesto, no puede obligar a una facultad a cambiar sus criterios y acaba siendo, calladamente, el proyecto personal de quien lo redactó.",
      planText: "Someteremos el plan de acción a la aprobación formal de nuestros órganos de gobierno y dejaremos constancia de la decisión, de modo que la reforma cuente con un mandato institucional y no dependa de la buena voluntad de quienes la redactaron.",
    },
    {
      title: "Publicar y depositar el plan de acción",
      description: "Pon el plan donde otras personas puedan encontrarlo, leerlo y citarlo: tu propio sitio web y un archivo que emita un identificador persistente (la mayoría de las entidades firmantes de CoARA usan Zenodo). Cuesta casi nada, permite que instituciones pares reutilicen tu redacción en vez de partir de cero, y es lo que hizo posible el corpus que sustenta esta herramienta.",
      planText: "Publicaremos nuestro plan de acción en nuestro propio sitio y lo depositaremos en un archivo abierto con un identificador persistente, para que otras instituciones puedan encontrarlo, citarlo y construir sobre él.",
    },
    {
      title: "Mantener la reforma en la agenda de los órganos de gobierno",
      description: "Llevar el plan de acción a los órganos que dirigen la institución (equipo de dirección, claustro, consejo de gobierno, comisión de investigación, reuniones de decanatos) y volver a ellos cada cierto tiempo con un breve informe de avance. La aprobación formal da mandato al plan una sola vez; un punto fijo en el orden del día mantiene informadas, y con responsabilidades, a las personas que asignan presupuesto y fijan criterios.",
      planText: "Presentaremos el plan de acción a nuestros órganos de gobierno y volveremos a ellos a intervalos fijos con un breve informe de avance, para que quienes asignan presupuesto y fijan criterios sigan informados y asuman su parte.",
    },
    {
      title: "Redactar guías escritas para personas evaluadoras y revisoras externas",
      description: "Guías pensadas para el momento de evaluar: cómo leer un CV narrativo, cómo ponderar contribuciones diversas, qué no debe usarse (factor de impacto, índice h, cuartiles, rankings) y cómo las cifras que queden pueden apoyar el juicio sin sustituirlo. Se envían con cada caso, también a quienes revisan desde fuera y nunca asisten a la formación, y se actualizan cada vez que cambian los criterios.",
      planText: "Redactaremos guías para personas evaluadoras y revisoras externas sobre cómo evaluar con los criterios reformados y qué indicadores no deben usarse, las enviaremos con cada caso y las actualizaremos cuando cambien los criterios.",
    },
    {
      title: "Publicar los criterios de evaluación y dar retroalimentación a quienes se evalúa",
      description: "Los criterios, indicadores y procedimientos de contratación, promoción y evaluación interna se publican donde candidaturas y personal puedan leerlos antes de ser evaluados: la web para la contratación, la intranet para los procesos internos. Tras cada decisión, se explica qué criterios se aplicaron y con qué resultado, dentro de los límites de la confidencialidad. Un criterio que nadie puede ver no se puede exigir.",
      planText: "Publicaremos los criterios, indicadores y procedimientos de contratación, promoción y evaluación interna antes de que nadie sea evaluado con ellos, y daremos retroalimentación a candidaturas y personal sobre cómo se aplicaron.",
    },
    {
      title: "Elaborar un plan de comunicación con una actualización interna periódica",
      description: "Definir quién necesita saber qué (personal investigador, personas evaluadoras, personal de gestión, dirección, socios), por qué canales, con qué frecuencia y con qué responsable. Fijar un ritmo, por ejemplo un resumen trimestral en la intranet de lo que ha cambiado en criterios y procesos, archivado en la página de CoARA, y abrir también el camino inverso: que el personal pueda dirigirse al grupo de trabajo.",
      planText: "Elaboraremos un plan de comunicación para la reforma, con públicos, canales y responsables, y mantendremos informado al personal mediante una actualización interna periódica archivada en nuestra página de CoARA.",
    },
    {
      title: "Crear trayectorias de carrera distintas para todos los perfiles de investigación",
      description: "Que se pueda avanzar por más de una vía: trayectorias formales junto a la tradicional (docente, investigadora, de innovación o de impacto social) y un marco de carrera publicado que abarque todos los perfiles, incluido el personal técnico y de apoyo. Cada trayectoria necesita sus propios criterios de progresión. Diversificar los criterios solo sirve si existen las carreras a las que conducen.",
      planText: "Crearemos trayectorias de carrera diferenciadas para la docencia, la investigación y el impacto social, recogidas en un marco de carrera publicado que abarque todos los perfiles, cada una con sus propios criterios de progresión.",
    },
    {
      title: "Mantener un canal permanente de participación y retroalimentación del personal investigador",
      description: "Dar al personal investigador una voz duradera en la reforma y no una única consulta al principio: un foro o comité que abarque etapas de carrera y disciplinas, una ronda de consulta sobre cada acción antes de ponerla en marcha y una vía directa hacia el grupo de dirección. El ciclo se cierra publicando lo que se escuchó y lo que cambió gracias a ello.",
      planText: "Mantendremos un foro permanente de participación del personal investigador, de todas las etapas de carrera y disciplinas, lo consultaremos sobre cada acción antes de ponerla en marcha y publicaremos lo que escuchamos y lo que cambió como resultado.",
    },
    {
      title: "Evaluar los efectos de los procedimientos reformados",
      description: "Cuando un criterio, un formato de CV o un esquema de carrera nuevo ya está en uso, se evalúa: opiniones de candidaturas, personas evaluadoras y comisiones, y efectos sobre la carga de trabajo, la coherencia, la calidad de las decisiones y la equidad. Donde exista un marco de evaluación compartido, conviene usarlo para poder comparar, y los hallazgos alimentan la siguiente versión. Una reforma que nunca se evalúa no distingue un acierto de una carga nueva.",
      planText: "Evaluaremos cada procedimiento reformado una vez en uso, a partir de la opinión de candidaturas, personas evaluadoras y comisiones y de sus efectos sobre la carga de trabajo, la coherencia, la calidad de las decisiones y la equidad, y usaremos los resultados para revisarlo.",
    },
    {
      title: "Codiseñar los nuevos criterios con las personas a quienes se evaluará",
      description: "Antes de fijar criterios o guías nuevos, grupos focales o sesiones de codiseño con personal investigador de distintas disciplinas, etapas de carrera y perfiles para delimitar el cambio, redactar el texto y comentar los borradores, y una ronda final de confirmación. Quienes participan dan forma al texto en lugar de conocerlo después, lo que saca a la luz los puntos ciegos a tiempo y facilita mucho la adopción.",
      planText: "Codiseñaremos los nuevos criterios y guías con personal investigador de distintas disciplinas, etapas de carrera y perfiles, desde la delimitación hasta una ronda final de confirmación, antes de adoptarlos.",
    },
    {
      title: "Apoyar al personal investigador para cumplir los criterios de ciencia abierta",
      description: "Premiar las prácticas abiertas en la evaluación solo es justo si se pueden llevar a cabo. Hace falta una política de acceso abierto y de datos de investigación, formación periódica en acceso abierto, gestión de datos y FAIR, y orientaciones al día (plantillas de plan de gestión de datos, una guía para decidir cuán abierto ser). Las mismas orientaciones sirven a quienes evalúan, para que quien aplica los criterios y quien los cumple compartan un mismo entendimiento. Las excepciones a la apertura se documentan (tan abierto como sea posible, tan cerrado como sea necesario) y, cuando hay datos indígenas o comunitarios, FAIR va acompañado de los principios CARE.",
      planText: "Adoptaremos una política de acceso abierto y de datos de investigación y apoyaremos su cumplimiento con formación periódica y orientaciones actualizadas, compartidas también con quienes evalúan.",
    },
    {
      title: "Adoptar una política propia de evaluación responsable, incluido el uso de métricas",
      description: "Convertir una adhesión en reglas que las comisiones siguen: principios propios de evaluación responsable que digan también cuándo pueden y cuándo no pueden usarse indicadores cuantitativos (como apoyo al juicio experto, nunca como sustituto; sin indicadores basados en revistas para personas; siempre con su contexto). Se aprueban en el órgano responsable de la evaluación, se publican, y rúbricas y convocatorias se revisan contra esa única referencia.",
      planText: "Adoptaremos y publicaremos una política propia de evaluación responsable, con reglas sobre el uso de indicadores cuantitativos, aprobada por el órgano responsable de la evaluación, y revisaremos nuestras rúbricas y convocatorias de acuerdo con ella.",
    },
    {
      title: "Preparar a las personas que serán evaluadas",
      description: "Ayudar a candidaturas y personal a responder a los nuevos criterios: guías publicadas con cada convocatoria (cómo redactar un CV narrativo, qué evidencias debe llevar un portafolio, cómo autoevaluarse) y un módulo estable sobre evaluación responsable en la formación doctoral y la acogida de personal nuevo, para que cada cohorte conozca desde el principio lo que se espera.",
      planText: "Publicaremos guías para candidaturas con cada convocatoria e incorporaremos un módulo estable sobre evaluación responsable en la formación doctoral y en la acogida del personal, para que quienes serán evaluados entiendan lo que piden los criterios reformados.",
    },
    {
      title: "Llevar la reforma a las conversaciones de desarrollo del personal",
      description: "Rediseñar la conversación periódica de desarrollo o evaluación del desempeño en torno al marco reformado: autoevaluación con los nuevos criterios, reconocimiento de toda la gama de contribuciones, objetivos de carrera individuales. Es la evaluación con la que el personal se encuentra más a menudo, y una reforma que se queda en la contratación y la promoción nunca llega a ella.",
      planText: "Rediseñaremos las conversaciones periódicas de desarrollo del personal en torno al marco reformado, con autoevaluación según los nuevos criterios y reconocimiento de toda la gama de contribuciones.",
    },
    {
      title: "Permitir que el personal investigador verifique los datos con que se le evalúa",
      description: "Antes de que un registro del sistema de información de investigación entre en una evaluación, la persona evaluada puede verlo y corregirlo: qué productos se contaron, cómo se clasificaron, qué indicadores se derivaron. Pocos planes lo hacen todavía, pero es el quinto principio del Manifiesto de Leiden, y evita decisiones basadas en datos que nadie revisó.",
      planText: "Permitiremos que el personal investigador vea y corrija, antes de su uso, los datos sobre su trabajo que nuestros sistemas de información trasladan a la evaluación.",
    },
    {
      title: "Evaluar solo cuando es necesario",
      description: "Para cada evaluación periódica, preguntarse si hace falta y con qué profundidad. Suprimir o fusionar las que no cambian ninguna decisión, y preferir facilitar una práctica a medirla. Si no, sumar dimensiones nuevas a la evaluación (ciencia abierta, colegialidad, integridad) acumula más evaluación sobre las mismas personas.",
      planText: "Revisaremos nuestras evaluaciones periódicas, mantendremos solo las que informan una decisión y ajustaremos su profundidad, para que la reforma no añada carga de evaluación.",
    },
    {
      title: "Contribuir a la política de evaluación nacional y europea",
      description: "Buena parte de lo que se exige al personal investigador se decide fuera de la institución: agencias nacionales de evaluación y acreditación, comisiones de promoción, financiadores, conferencias de rectores. Participar donde se escriben esos criterios (consultas, capítulos nacionales de CoARA, grupos de trabajo de las agencias), señalar dónde chocan con los criterios reformados y empujar para alinearlos. Si no, una reforma que el nivel nacional no reconoce puede perjudicar a quienes la siguen.",
      planText: "Participaremos en la definición de la política de evaluación nacional y europea, mediante consultas, capítulos nacionales y grupos de trabajo de las agencias, e impulsaremos criterios alineados con los nuestros ya reformados.",
    },
    {
      title: "Integrar la reforma en el plan HRS4R y en los ciclos estratégicos existentes",
      description: "No llevar CoARA como un proyecto aparte. Contrastar el plan de acción HRS4R (HR Excellence in Research) con los diez compromisos para ver qué ya está en marcha, incorporar los nuevos criterios a la política de contratación (OTM-R) y a la próxima renovación HRS4R, y añadir objetivos de reforma de la evaluación a los planes que ya se siguen: el plan estratégico, el aseguramiento de la calidad, el plan de igualdad. Así la reforma se revisa en ciclos que existen de todos modos.",
      planText: "Contrastaremos nuestro plan HRS4R con los compromisos de CoARA, incorporaremos los criterios reformados a nuestra política de contratación y a la próxima renovación HRS4R, y añadiremos objetivos de reforma de la evaluación a nuestro plan estratégico y al ciclo de aseguramiento de la calidad.",
    },
    {
      title: "Reformar cómo se eligen las personas evaluadoras y los paneles",
      description: "El juicio cualitativo vale lo que valen quienes lo emiten. Fijar reglas sobre quién integra los paneles y quién revisa: equilibrio de etapas de carrera, disciplinas, géneros y sectores, miembros internacionales o externos cuando convenga, conflictos de interés declarados y personas evaluadoras que conozcan los criterios reformados. Rotar la composición para que no decidan siempre las mismas personas.",
      planText: "Fijaremos reglas para seleccionar a las personas evaluadoras y componer los paneles, que cubran el equilibrio de etapas de carrera, disciplinas, géneros y sectores, los conflictos de interés y el conocimiento de los criterios reformados, y rotaremos su composición.",
    },
    {
      title: "Ofrecer un servicio de bibliometría responsable",
      description: "Cuando se usan cifras, conviene que las aporte quien conoce sus límites. Un servicio (a menudo en la biblioteca o la oficina de investigación) que asesore a evaluadores e investigadores sobre qué indicador sirve para qué pregunta, que entregue cifras normalizadas por disciplina y con contexto en lugar de recuentos brutos, y que forme en alfabetización métrica. Responde además la pregunta que los paneles harán de todos modos, para que no recurran al factor de impacto.",
      planText: "Ofreceremos un servicio de bibliometría responsable que asesore a personas evaluadoras e investigadoras sobre los indicadores adecuados, aporte cifras contextualizadas y forme en alfabetización métrica.",
    },
    {
      title: "Construir un marco para reconocer el impacto social",
      description: "Decidir, con quienes lo viven (socios regionales, industria, administración, sociedad civil), qué significa el impacto social para la institución y cómo se acredita: relatos de impacto, descripciones cualitativas de casos, un conjunto reducido de indicadores. Pilotarlo en una ronda de evaluación y mantenerlo cualitativo para que no se convierta en una métrica más.",
      planText: "Desarrollaremos, con actores externos, un marco para reconocer el impacto social en la evaluación, lo pilotaremos en una ronda de evaluación y lo mantendremos cualitativo.",
    },
    {
      title: "Crear premios para las contribuciones que los criterios pasan por alto",
      description: "Los premios son una forma rápida y visible de decir qué valora la institución: ciencia abierta, mentoría, trabajo en equipo, divulgación, apoyo a la investigación. Crear premios para las contribuciones que los criterios han pasado por alto, con criterios de nominación y selección que también sigan la reforma.",
      planText: "Crearemos premios para las contribuciones que nuestros criterios han pasado por alto, como la ciencia abierta, la mentoría, el trabajo en equipo y la divulgación, con criterios de nominación y selección acordes con la reforma.",
    },
    {
      title: "Pedir unos pocos productos seleccionados, cada uno justificado",
      description: "Sustituir las largas listas de publicaciones por una selección breve (a menudo entre tres y diez productos de cualquier tipo) elegida por la persona candidata, cada uno con unas líneas sobre por qué importa y cuál fue su aportación. Así se lee y se juzga el trabajo en lugar de contarlo.",
      planText: "Sustituiremos las listas completas de publicaciones en las solicitudes por una selección breve de productos elegida por la persona candidata, cada uno con una justificación de su relevancia y de su aportación.",
    },
    {
      title: "Basar los datos de evaluación en información abierta sobre la investigación",
      description: "Una evaluación que descansa en bases de datos propietarias no puede ser comprobada por quienes son evaluados. Trasladar los datos que sustentan la evaluación y el seguimiento a fuentes abiertas (OpenAlex, OpenAIRE, Crossref, ORCID, el repositorio propio) y considerar la adhesión a la Declaración de Barcelona sobre Información Abierta de Investigación.",
      planText: "Basaremos los datos de nuestra evaluación y seguimiento en fuentes abiertas de información sobre la investigación y consideraremos adherirnos a la Declaración de Barcelona sobre Información Abierta de Investigación.",
    },
  ],

  contexts: {
    all: {
      label: "Sin especificar / general",
      description: "Usa el conjunto completo de acciones sin reponderación basada en el contexto.",
    },
    "global-north": {
      label: "Norte Global / con recursos sólidos",
      description: "CRIS consolidado, apoyo financiado para la reforma, participación en redes de CoARA.",
    },
    "global-south": {
      label: "Sur Global / con recursos limitados",
      description: "Herramientas ligeras, foros regionales (IRAF, AFRA, AOSP), protección de la publicación en lenguas locales.",
    },
    "indigenous-serving": {
      label: "Al servicio de pueblos indígenas / con gobernanza comunitaria",
      description: "Los principios CARE y la soberanía comunitaria de los datos son determinantes.",
    },
    "multi-regional": {
      label: "Multirregional / transfronteriza",
      description: "Modelos de visita a los datos y federados; exposición a la asimetría internacional.",
    },
    funder: {
      label: "Organización de Financiamiento de la Investigación (RFO)",
      description: "Diseño de incentivos, criterios de convocatorias, política de IA para revisores, alineación de marcos.",
    },
  },

  maturity: [
    {
      label: "Sin conocimiento",
      description: "La institución no tiene conocimiento de este compromiso ni de sus implicaciones.",
    },
    {
      label: "Consciente",
      description: "El compromiso se conoce pero no se ha tomado ninguna acción concreta.",
    },
    {
      label: "Explorando",
      description: "Discusiones internas, grupos de trabajo formados, mapeo de las prácticas existentes.",
    },
    {
      label: "Planificando",
      description: "Plan de acción desarrollado, recursos asignados, pilotos diseñados.",
    },
    {
      label: "Implementando",
      description: "Los cambios se realizan activamente, nuevos criterios en uso, formación en marcha.",
    },
    {
      label: "Integrado",
      description: "Las nuevas prácticas son la norma, el seguimiento está activo, mejora continua.",
    },
  ],
};
