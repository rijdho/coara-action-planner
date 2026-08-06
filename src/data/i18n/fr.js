// French (fr) translation overlay.
export default {
  ui: {
    // header / nav
    brandApp: "CoARA Action Planner",
    source: "Code",
    sourceTitle: "Voir le code et le calibrage sur GitHub",
    tab_questionnaire: "Questionnaire",
    tab_plan: "Plan",
    tab_results: "Résultats",
    tab_report: "Rapport",
    themeToLight: "Passer en mode clair",
    themeToDark: "Passer en mode sombre",
    langLabel: "Langue",
    nav_steps: "Étapes",
    nav_menu: "Menu",
    footer: "Pour toute question sur l'utilisation des données ou l'attribution :",

    // commitment type
    typeCore: "fondamental",
    typeSupporting: "complémentaire",

    // effort / impact values + labels
    effort_low: "faible",
    effort_medium: "moyen",
    effort_high: "élevé",
    impact_low: "faible",
    impact_medium: "moyen",
    impact_high: "élevé",
    effortLabel: "Effort",
    impactLabel: "Impact",

    // Assessment page
    asmt_title: "Auto-évaluation institutionnelle",
    asmt_intro:
      "Répondez aux questions ci-dessous pour évaluer la maturité de votre établissement sur chaque engagement de la CoARA. Une fois terminé, l'onglet Résultats transforme vos réponses en un profil de maturité et un plan d'action priorisé. Tout est enregistré localement dans votre navigateur.",

    // Start page + perspectives + ambition (added)
    tab_start: "Démarrer",
    start_title: "Avant de commencer",
    start_intro:
      "Cet outil aborde la réforme sous trois angles. Configurez-les ici, puis parcourez les onglets. Tout est enregistré localement dans votre navigateur.",
    start_lensesTitle: "Trois angles",
    start_lens_now: "① Où en sommes-nous",
    start_lens_now_desc:
      "Le questionnaire mesure votre maturité actuelle sur chaque engagement CoARA — l'état des lieux, évalué honnêtement.",
    start_lens_goal: "② Où voulons-nous aller",
    start_lens_goal_desc:
      "Dans l'onglet Plan, vous fixez un niveau de maturité cible par engagement. L'écart entre l'état actuel et la cible est ce que votre plan d'action comble.",
    start_lens_who: "③ Qui fournit cette information",
    start_lens_who_desc:
      "Indiquez qui répond. Ajoutez plusieurs perspectives (p. ex. direction et chercheurs) pour voir où les lectures divergent.",
    start_instTitle: "Établissement",
    start_instHint: "Utilisé dans le rapport et les exports. Facultatif.",
    start_instPlaceholder: "Nom de l'établissement (facultatif)",
    start_perspectivesTitle: "Perspectives",
    start_perspectivesHint:
      "Chaque perspective est le point de vue d'un répondant, associé à son rôle. Tout le monde répond aux mêmes 24 questions — vous les remplissez une fois par perspective, depuis ce point de vue. Les Résultats consolident les perspectives et signalent là où leurs lectures d'une même question divergent (l'écart de perception).",
    start_perspectivesEyebrow: "Ce que cet outil fait et qu\u2019un guide ne fait pas",
    start_perspectivesWhy:
      "Un plan rédigé par un seul service reflète un seul point de vue. Si la direction, le service de la recherche et le personnel chercheur répondent aux mêmes 24 questions, le désaccord devient lui-même une donnée : Résultats signale chaque engagement dont les lectures diffèrent de deux niveaux ou plus, et ce sont ceux-là qu\u2019il faut aligner avant de rédiger quoi que ce soit.",
    start_quickStart: "Configurer une évaluation collective :",
    start_quickStartAdd: "+ {role}",
    start_perspectiveN: "Perspective {n}",
    start_roleLabel: "Rôle du répondant",
    start_active: "active",
    start_setActive: "Activer",
    start_answerAs: "Répondre en tant que →",
    start_remove: "Supprimer la perspective",
    start_completion: "{answered}/{total} répondues",
    start_addPerspective: "+ Ajouter une autre perspective",
    start_multiNote:
      "Plusieurs perspectives sont moyennées en un seul profil ; les divergences de deux niveaux ou plus sont signalées dans les Résultats.",
    start_cta: "Aller au questionnaire →",
    asmt_answeringAs: "Réponses au nom de : {role}",
    asmt_switchPerspective: "Changer →",
    plan_s5_title: "5 · Ambition — où voulez-vous aller ?",
    plan_s5_hint:
      "Fixez un niveau de maturité cible par engagement. Les actions qui comblent l'écart entre votre niveau actuel et la cible remontent ; les engagements déjà à leur cible descendent. Laissez « — » pour classer uniquement selon l'écart jusqu'au niveau maximal.",
    plan_ambition_now: "actuel",
    plan_ambition_current: "niveau actuel",
    plan_ambition_target: "niveau cible",
    plan_ambition_notset: "—",
    plan_ambition_clear: "Effacer toutes les cibles",
    plan_s6_title: "6 · Pondération des perspectives et alignement",
    plan_s6_hint:
      "Pertinent uniquement avec plus d'une perspective. Définissez le poids du point de vue de chaque rôle lors de la combinaison des profils, et l'écart à partir duquel un engagement est signalé pour alignement.",
    plan_weight_aria: "Poids de {role}",
    plan_threshold_label: "Signaler un écart de perception lorsque les perspectives divergent de",
    plan_threshold_suffix: "niveaux",
    plan_weight_reset: "Réinitialiser la pondération par défaut",
    res_respondents: "Répondants : {list}",
    res_ambitionSet: "Ambition définie",
    res_currentVsTarget: "actuel vs cible",
    res_consolidatedNote: "Moyenne pondérée par rôle sur {n} perspectives (les personnes évaluées comptent davantage).",
    res_perceptionGap: "Les perspectives divergent de ≥2 niveaux sur : {list} — priorisées pour l'alignement.",
    print_respondents: "Répondants : {list}",
    radar_target: "Cible",

    asmt_progress: "Progression : {answered}/{total} questions",
    asmt_overall: "Maturité globale :",
    asmt_next: "Suivant : élaborez votre plan →",
    asmt_inPractice: "Ce que cela signifie concrètement",
    asmt_maturityProfile: "Profil de maturité",
    asmt_radarEmpty: "Répondez aux questions pour voir votre graphique radar",

    // Plan page
    plan_emptyTitle: "Plan",
    plan_emptyBody:
      "Répondez d'abord au questionnaire — le plan adapte les actions qui découlent de votre profil de maturité.",
    plan_startQuestionnaire: "Commencer le questionnaire",
    plan_title: "Élaborez votre plan d'action",
    plan_intro:
      "Quatre choix rapides qui ajustent les actions qui apparaissent en premier. Rien n'est obligatoire ici — les valeurs par défaut donnent un plan équilibré, fondé sur les écarts. Votre profil de maturité n'est pas affecté.",
    plan_s1_title: "1 · Horizon et capacité",
    plan_s1_hint: "Quel niveau de changement pouvez-vous entreprendre dès maintenant ?",
    plan_s2_title: "2 · Contexte institutionnel",
    plan_s2_hint: "Renforce les actions particulièrement pertinentes pour votre contexte.",
    plan_s3_title: "3 · Engagements prioritaires",
    plan_s3_hint:
      "Choisissez les engagements de la CoARA que vous souhaitez traiter en premier — leurs actions remontent dans la liste. Laissez vide pour aucun.",
    plan_clear: "Effacer la sélection",
    plan_s4_title: "4 · Actions à fort effort",
    plan_s4_hint: "Les réformes structurelles (nouveaux critères, formation à l'échelle du système) demandent des ressources réelles.",
    plan_includeHigh: "Inclure les actions à fort effort",
    plan_hideHigh: "Masquer les actions à fort effort",
    plan_back: "← Retour au questionnaire",
    plan_view: "Voir les résultats personnalisés →",

    // horizons (label + description)
    horizon_quickwins_label: "Gains rapides d'abord",
    horizon_quickwins_desc:
      "Nous avons peu de temps et de capacité. Privilégier les actions à faible effort que nous pouvons lancer dès maintenant.",
    horizon_balanced_label: "Équilibré",
    horizon_balanced_desc: "Mélange de gains rapides et de changements plus profonds, classés uniquement selon l'écart et l'impact.",
    horizon_structural_label: "Changement structurel",
    horizon_structural_desc:
      "Nous sommes prêts pour une réforme ambitieuse et à fort impact, même si elle demande plus d'effort.",

    // Results page
    res_emptyTitle: "Résultats",
    res_emptyBody: "Répondez d'abord au questionnaire pour générer votre profil de maturité et votre plan d'action.",
    res_title: "Résultats",
    res_forInst: "pour {inst}",
    res_intro:
      "Votre profil de maturité et les actions les plus importantes, priorisées selon l'ampleur de l'écart et l'impact.",
    res_basedOn: "Sur la base de {answered}/{total} questions",
    res_planLabel: "Plan :",
    res_focus: "Priorités : {list}",
    res_highHidden: "Fort effort masqué",
    res_edit: "Modifier",
    res_balancedNote: "Plan équilibré (fondé sur les écarts).",
    res_tuneIt: "Ajuster →",
    res_print: "Imprimer le rapport",
    res_exportJson: "Exporter en JSON",
    res_saveConfig: "Enregistrer config.",
    cfg_title: "Enregistrer / charger la configuration",
    cfg_hint:
      "Enregistrez toutes les données de cette évaluation (réponses, perspectives, ambition et plan) dans un fichier — pour reproduire ce même rapport plus tard, le partager, ou le recharger comme base à modifier.",
    cfg_save: "Enregistrer la configuration",
    cfg_load: "Charger une configuration",
    cfg_loaded: "Configuration chargée.",
    cfg_loadError: "Impossible de charger ce fichier : {msg}",
    reset_button: "Recommencer",
    reset_hint: "Tout est enregistré dans ce navigateur. Recommencer efface toutes les réponses, perspectives, ambitions, le plan et le rapport pour repartir de zéro.",
    reset_confirm: "Cela effacera toutes les réponses, perspectives, ambitions, le plan et le rapport enregistrés dans ce navigateur, et est irréversible. Repartir de zéro ?",
    chart_png: "PNG",
    chart_pngTitle: "Télécharger ce graphique en image PNG",
    res_maturityProfile: "Profil de maturité",
    res_overallShort: "Global :",
    res_byCommitment: "Maturité par engagement",
    res_recommendedOne: "{n} action recommandée",
    res_recommendedMany: "{n} actions recommandées",
    res_filterAll: "Toutes les actions",
    res_filterQuick: "Gains rapides",
    res_filterHigh: "Fort impact",
    res_noMatch: "Aucune action ne correspond à ce filtre. Essayez « Toutes les actions ».",
    res_examples: "Exemples :",
    res_corpus: "{pct} % des {n} plans",
    res_corpusTitle: "Part des {n} plans d'action CoARA publiés dont le texte intégral correspond au thème de cette action (par mots-clés, indicatif)",
    ev_universal: "Quasi universel dans les plans existants",
    ev_common: "Courant dans les plans existants",
    ev_emerging: "Pratique émergente",
    ev_frontier: "Pionnier — peu de plans le font encore ; une occasion de montrer la voie",
    res_ctaNext: "Suivant :",
    res_ctaBody: "transformez ceci en un brouillon de plan d'action CoARA rédigé que vous pouvez modifier et partager.",
    res_generateReport: "Générer le rapport →",

    // Results — print view
    print_title: "Réforme de l'évaluation de la recherche — Rapport de maturité",
    print_meta: "{inst} · {date} · engagements CoARA · sur la base de {answered}/{total} questions",
    print_planPrefix: "Plan :",
    print_overall: "Maturité globale :",
    print_level: "Niveau {n} — {label}",
    print_byCommitment: "Maturité par engagement",
    print_priorityActions: "Actions prioritaires",
    print_footer:
      "Généré avec CoARA Action Planner (DOI 10.5281/zenodo.21492548) · rijdho.github.io/coara-action-planner · cadre : Accord sur la réforme de l'évaluation de la recherche (CoARA).",
    unknownInst: "Établissement",

    // Report page
    rep_emptyTitle: "Rapport",
    rep_emptyBody:
      "Répondez d'abord au questionnaire — le rapport est rédigé à partir de votre profil de maturité et de votre plan.",
    rep_title: "Rapport de plan d'action",
    rep_intro_pre:
      "Un brouillon de plan d'action CoARA pré-structuré, généré à partir de vos réponses et de votre plan. Sa structure suit de vrais plans d'action institutionnels (Introduction → bilan initial → priorités → actions par engagement → ressources → suivi). ",
    rep_intro_strong: "Modifiez-le librement",
    rep_intro_post: " — les [champs] entre crochets sont des espaces à compléter. Enregistré localement au fur et à mesure que vous tapez.",
    rep_copy: "Copier le texte",
    rep_copied: "Copié ✓",
    rep_downloadMd: "Télécharger .md",
    rep_downloadTxt: "Télécharger .txt",
    rep_print: "Imprimer",
    rep_regenerate: "↻ Régénérer",
    rep_regenConfirm: "Régénérer à partir de vos dernières réponses ? Cela écrase vos modifications.",

    // radar tooltip / series
    radar_current: "Actuel",
    radar_previous: "Précédent",
    radar_level: "Niveau {n} — {label}",  },

  report: {
    docTitle: "{inst} — Plan d'action pour la réforme de l'évaluation de la recherche",
    subtitle: "Aligné sur l'Accord sur la réforme de l'évaluation de la recherche (CoARA) · {date}",
    respondentSingle:
      "Cette auto-évaluation a été réalisée du point de vue de {role}, et doit être lue en gardant cet angle à l'esprit.",
    respondentMulti:
      "Cette auto-évaluation consolide {n} perspectives ({roles}). Réunir plusieurs points de vue donne une image plus complète et plus honnête de la situation de l'établissement et des endroits où les lectures du progrès diffèrent.",
    ambitionLine:
      "Dans cet horizon, {inst} vise à faire progresser des engagements précis vers des niveaux de maturité cibles déclarés : {targets}.",
    targetLevelShort: "Niveau {level} ({label})",
    contestedNote:
      "Les lectures internes du progrès divergent le plus sur {contested} ; celles-ci sont priorisées pour un alignement précoce, afin que l'établissement s'accorde sur sa situation réelle avant d'agir.",

    h_intro: "Introduction",
    intro1:
      "En [mois année], {inst} a signé l'Accord sur la réforme de l'évaluation de la recherche (CoARA) et s'engage à réformer la manière dont il évalue la recherche, les chercheurs et les unités menant des activités de recherche. Nous reconnaissons qu'une évaluation responsable est un choix de gouvernance : elle répartit le prestige, les ressources et la légitimité, et elle doit valoriser toute la diversité des contributions scientifiques.",
    intro2:
      "Ce plan s'appuie sur une auto-évaluation structurée portant sur les dix engagements de la CoARA. Il présente notre bilan initial, nos priorités et les actions concrètes que nous mènerons, ainsi que les unités responsables, des échéances indicatives et les jalons à l'aune desquels nous mesurerons les progrès.",

    h_baseline: "1. Bilan initial de l'auto-évaluation",
    overall: "Maturité globale : Niveau {level} — {label}.",
    established: "Établi (Niveau 4–5) :",
    developing: "En développement (Niveau 2–3) :",
    gaps: "Écarts prioritaires (Niveau 0–1) :",
    baselineClose:
      "Ces résultats donnent une image partagée et fondée sur des données probantes de la situation actuelle de {inst} et structurent les priorités ci-dessous. [Ajoutez éventuellement 1 à 2 phrases de contexte local : initiatives récentes, moteurs ou contraintes.]",

    h_priorities: "2. Priorités stratégiques",
    prioritiesFocus: "Au cours de {tf}, {inst} concentrera son effort de réforme sur : {focus}.",
    prioritiesGaps:
      "Au cours de {tf}, {inst} concentrera son effort de réforme sur la résorption des écarts prioritaires identifiés ci-dessus.",

    h_actions: "3. Actions planifiées",
    actionsIntro:
      "Les actions ci-dessous sont priorisées selon l'ampleur de chaque écart et leur impact attendu{focusClause}. Les champs entre crochets sont à compléter par l'unité responsable.",
    actionsFocusClause: ", avec une pondération supplémentaire pour nos engagements prioritaires",
    actionHeading: "C{num}. {title} — Niveau actuel {lvl} ({label})",
    actionLabel: "Action :",
    targetLabel: "Progression :",
    targetValue: "Niveau {from} → {to} · effort {effort} · impact attendu {impact}",
    referenceLabel: "Pratique de référence :",
    responsibleLabel: "Responsable :",
    responsiblePlaceholder: "[p. ex. Groupe de travail CoARA / Vice-recteur à la recherche / service concerné]",
    timeframeLabel: "Échéance :",
    timeframePlaceholder: "[Année 1 / T_ 20__ / en continu]",
    indicatorLabel: "Indicateur / jalon :",
    indicatorPlaceholder: "[production observable, p. ex. critères révisés approuvés]",
    noActions:
      "Aucune action n'a été recommandée — votre maturité est déjà élevée sur les engagements évalués. Concentrez-vous sur les activités d'ancrage et de suivi décrites ci-dessous.",

    h_resources: "4. Ressources (Engagement 5 de la CoARA)",
    resourcesBody:
      "{inst} engagera les ressources nécessaires pour mettre en œuvre ce plan : [ligne budgétaire], [temps de personnel dédié / coordinateur], [formation des comités d'évaluation] et [infrastructure pour le suivi des productions diverses]. Un(e) [comité / service désigné] coordonnera la mise en œuvre.",

    h_awareness: "5. Sensibilisation, accompagnement et échange (Engagements 7–8 de la CoARA)",
    awarenessBody:
      "Nous sensibiliserons en interne et publierons un accompagnement accessible sur les critères réformés et leur utilisation responsable. {inst} échangera des pratiques avec des établissements pairs — à travers [des groupes de travail CoARA / un chapitre national / un forum régional] — en reconnaissant que les organisations en sont à des stades différents.",

    h_monitoring: "6. Suivi, évaluation et communication des progrès (Engagements 9–10 de la CoARA)",
    monitoringBody:
      "Les progrès seront examinés [chaque année], à l'aide d'indicateurs transparents tels que la part des processus d'évaluation réformés, le nombre d'évaluateurs formés et la suppression des indicateurs inappropriés fondés sur les revues et les publications. Nous communiquerons les progrès de manière ouverte, principalement au moyen d'une auto-évaluation partagée publiquement comme le prévoit l'Accord, en fondant l'évaluation sur des données probantes et ouvertes.",

    h_ongoing: "Engagement continu",
    ongoingBody:
      "{inst} considère la réforme de l'évaluation de la recherche comme un processus itératif. Ce plan sera réexaminé [chaque année] et mis à jour à mesure que les critères sont expérimentés, évalués et ancrés dans l'ensemble des processus d'évaluation.",

    footer:
      "Brouillon généré avec CoARA Action Planner (rijdho.github.io/coara-action-planner, DOI 10.5281/zenodo.21492548) à partir d'une auto-évaluation des dix engagements de la CoARA. Modifiez librement avant adoption.",

    // horizon timeframe phrases (fill {tf})
    tf_quickwins: "les 12 prochains mois",
    tf_balanced: "les deux à trois prochaines années",
    tf_structural: "un horizon de trois à cinq ans",

    // horizon sentences
    hs_quickwins:
      "Compte tenu de notre capacité actuelle, nous commençons par des actions à faible effort et à fort levier qui peuvent être lancées immédiatement et créer une dynamique pour des changements plus profonds.",
    hs_balanced:
      "Nous poursuivons un mélange équilibré de gains précoces et de réformes plus substantielles, séquencés selon l'ampleur de chaque écart et son impact attendu.",
    hs_structural:
      "Nous sommes prêts à entreprendre une réforme structurelle ambitieuse — en révisant les critères et les processus à l'échelle du système — même lorsque cela exige un effort et des ressources soutenus.",

    // context sentences (appended to intro1; leading space intentional)
    cs_globalnorth:
      " En tant qu'établissement disposant de ressources importantes et ancré dans des réseaux établis d'évaluation de la recherche, nous entendons montrer l'exemple et publier nos critères réformés de manière ouverte.",
    cs_globalsouth:
      " Nous menons la réforme en tenant compte des réalités de ressources limitées : des outils légers et interopérables, l'engagement avec des forums régionaux (IRAF, AFRA, AOSP) et la protection de la recherche en langue locale.",
    cs_indigenous:
      " Notre approche place au centre les principes CARE et la gouvernance des données par les communautés, en veillant à ce que la réforme de l'évaluation respecte le bénéfice collectif, l'autorité de contrôle et les systèmes de savoirs autochtones.",
    cs_multiregional:
      " Opérant au-delà des frontières, nous privilégions des modèles fédérés et interopérables et restons attentifs aux asymétries internationales lorsque nous réformons l'évaluation de manière unilatérale.",
    cs_funder:
      " En tant qu'organisme de financement de la recherche, nous nous concentrons sur la conception des incitations, les critères des appels et de l'évaluation, l'accompagnement des évaluateurs et l'alignement avec les cadres d'évaluation nationaux et internationaux.",

    // effort / impact words used inside the narrative
    effort_low: "faible",
    effort_medium: "moyen",
    effort_high: "élevé",
    impact_low: "faible",
    impact_medium: "moyen",
    impact_high: "élevé",
    gq_label: "Question directrice CoARA",
    gq_labelPlural: "Questions directrices CoARA",
    gq_intro:
      "Les invites signalées par *Question directrice CoARA* sont citées des *Action Plan Guidelines* (octobre 2023) du Secrétariat de CoARA. Elles constituent une ressource et une suggestion, non un modèle obligatoire — CoARA ne publie aucun modèle pour les plans d\u2019action de ses membres —, mais y répondre section par section est le moyen le plus rapide de vérifier ce brouillon au regard de ce que la Coalition invite ses membres à examiner.",
    gq_quotedInEnglish:
      "Elles sont reproduites dans l\u2019anglais publié, CoARA n\u2019en publiant aucune traduction.",
    gq_source:
      "Questions directrices citées de : CoARA Secretariat, \"Action Plan Guidelines: Support for CoARA signatories in the preparation of action plans\", octobre 2023.",
    noActionsForCommitment:
      "Aucune action n\u2019a été retenue pour cet engagement dans ce brouillon. [Ajouter ici les actions prévues par l\u2019établissement, ou indiquer pourquoi aucune n\u2019est nécessaire.]",
  },

  roles: {
    unspecified: { label: "Non précisé", hint: "Général / préfère ne pas dire." },
    leadership: { label: "Direction", hint: "Rectorat, vice-président à la recherche, conseil de gouvernance." },
    "research-office": { label: "Bureau de la recherche / appui", hint: "Services de recherche, bureau RRA ou science ouverte." },
    "working-group": { label: "Groupe de travail sur la réforme", hint: "Équipe dédiée à CoARA / réforme de l'évaluation." },
    researcher: { label: "Chercheur/se / personnel académique", hint: "Enseignants-chercheurs, postdocs — celles et ceux qui sont évalués." },
    "hr-career": { label: "RH et développement de carrière", hint: "Responsables du recrutement, de la promotion et de l'évaluation." },
    "library-os": { label: "Bibliothèque / Science ouverte", hint: "Dépôt, données FAIR, communication scientifique." },
    "evaluation-committee": { label: "Comité d'évaluation / qualité", hint: "Comités qui mènent les processus d'évaluation." },
    funder: { label: "Financeur / RFO", hint: "Organisme de financement concevant appels et critères." },
    external: { label: "Évaluateur externe / consultant", hint: "Regard extérieur — établissement pair ou auditeur." },
  },

  questions: {
    q1a: {
      text: "Votre établissement reconnaît-il explicitement, dans ses critères d'évaluation, des productions de recherche au-delà des publications (jeux de données, logiciels, brevets, mentorat) ?",
      answers: {
        0: "Nous n'en avons jamais discuté",
        1: "Nous sommes conscients que c'est un enjeu mais nous n'avons pas agi",
        2: "Nous avons un groupe de travail qui explore comment élargir les critères",
        3: "Nous avons rédigé de nouveaux critères incluant des productions diverses",
        4: "De nouveaux critères sont utilisés dans au moins certains processus d'évaluation",
        5: "Tous les processus d'évaluation reconnaissent les productions diverses comme la norme",
      },
    },
    q1b: {
      text: "Des activités comme l'enseignement, l'encadrement, la communication scientifique et l'évaluation par les pairs sont-elles formellement valorisées dans l'évaluation des chercheurs ?",
      answers: {
        0: "Ces activités ne font pas du tout partie de l'évaluation",
        1: "Nous savons qu'elles devraient l'être, mais elles ne sont pas encore incluses",
        2: "Nous recensons les activités qui devraient être incluses",
        3: "Nous avons un plan pour intégrer ces activités dans les critères d'évaluation",
        4: "Certains processus reconnaissent déjà ces activités",
        5: "Tous les processus d'évaluation incluent systématiquement ces activités",
      },
    },
    q1c: {
      text: "Votre établissement reconnaît-il les pratiques de science ouverte (données FAIR, libre accès, préenregistrement, évaluation par les pairs ouverte) comme des critères positifs dans l'évaluation des chercheurs ?",
      answers: {
        0: "La science ouverte ne fait pas partie des critères d'évaluation",
        1: "Nous savons qu'elle devrait l'être mais elle n'est pas incluse",
        2: "Nous étudions comment intégrer la science ouverte dans les critères",
        3: "Nous avons rédigé des critères qui récompensent les pratiques de science ouverte",
        4: "La science ouverte est valorisée dans certains processus d'évaluation",
        5: "Les pratiques de science ouverte sont systématiquement récompensées dans tous les processus",
      },
    },
    q1d: {
      text: "Votre établissement prend-il en compte l'équité, la diversité et l'inclusion (EDI) dans ses processus d'évaluation — p. ex. interruptions de carrière, congé parental, handicap, biais de genre dans les comités d'évaluation ?",
      answers: {
        0: "L'EDI n'est pas prise en compte dans l'évaluation",
        1: "Nous sommes conscients des enjeux d'EDI mais nous n'avons pas agi",
        2: "Nous examinons nos processus pour repérer les lacunes et les biais en matière d'EDI",
        3: "Nous avons rédigé des lignes directrices EDI pour les comités d'évaluation",
        4: "Les lignes directrices EDI sont utilisées (formation aux biais inconscients, ajustements pour interruptions de carrière)",
        5: "L'EDI est ancrée : la formation aux biais est obligatoire, les interruptions de carrière sont normalisées, les comités sont diversifiés",
      },
    },
    q2a: {
      text: "Les comités d'évaluation sont-ils formés à mener une évaluation qualitative plutôt qu'à s'appuyer sur des indicateurs quantitatifs ?",
      answers: {
        0: "Nous n'avons pas envisagé cela",
        1: "Nous reconnaissons le besoin mais n'offrons aucune formation",
        2: "Nous concevons un programme de formation",
        3: "Les supports de formation sont prêts et des pilotes sont prévus",
        4: "La formation est en cours de déploiement auprès des comités d'évaluation",
        5: "Tous les évaluateurs reçoivent une formation régulière à l'évaluation qualitative",
      },
    },
    q2b: {
      text: "Votre établissement utilise-t-il des CV narratifs, des portfolios de recherche ou des déclarations d'impact dans ses processus d'évaluation ?",
      answers: {
        0: "Nous ne savons pas ce qu'est un CV narratif",
        1: "Nous en avons entendu parler mais ne les utilisons pas",
        2: "Nous étudions des modèles de CV narratif d'autres établissements",
        3: "Nous avons conçu un modèle de CV narratif adapté à notre contexte",
        4: "Les CV narratifs sont utilisés dans certains processus d'évaluation",
        5: "Le CV narratif est le format standard dans tous les processus",
      },
    },
    q3a: {
      text: "Vos critères de recrutement, de promotion ou de financement mentionnent-ils explicitement le facteur d'impact des revues (JIF), le h-index ou les quartiles de revues ?",
      answers: {
        0: "Nous ne savons pas ce que disent nos critères",
        1: "Oui, ils mentionnent ces indicateurs et nous savons que c'est problématique",
        2: "Nous avons audité nos critères et identifié où ils apparaissent",
        3: "Nous avons rédigé des critères révisés qui suppriment ces indicateurs",
        4: "La plupart des critères ont été mis à jour pour supprimer ces indicateurs",
        5: "Aucun processus d'évaluation ne fait référence au JIF, au h-index ou aux quartiles",
      },
    },
    q3b: {
      text: "Dans la pratique, les évaluateurs s'appuient-ils encore sur le prestige des revues ou les indicateurs bibliométriques pour évaluer les candidats, même si les critères ne l'exigent pas ?",
      answers: {
        0: "Nous n'avons aucune idée de ce que font réellement les évaluateurs",
        1: "Probablement oui, mais nous n'avons pas enquêté",
        2: "Nous sondons les évaluateurs pour comprendre les pratiques actuelles",
        3: "Nous avons des preuves de l'écart et un plan pour y remédier",
        4: "Nous fournissons des orientations et surveillons les usages abusifs des indicateurs",
        5: "La culture a évolué — les évaluateurs recourent couramment au jugement qualitatif",
      },
    },
    q4a: {
      text: "Votre établissement utilise-t-il les classements universitaires (Shanghai, THE, QS) dans l'évaluation de la recherche ou comme indicateurs indirects de qualité ?",
      answers: {
        0: "Nous n'y avons pas réfléchi",
        1: "Nous le faisons probablement, surtout pour les partenariats internationaux",
        2: "Nous examinons où les classements influencent nos décisions",
        3: "Nous avons une politique pour découpler l'évaluation des classements",
        4: "Les classements ne sont pas utilisés dans l'évaluation mais peuvent apparaître dans les communications",
        5: "Les classements ne jouent aucun rôle dans l'évaluation, les partenariats ou les communications",
      },
    },
    q5b: {
      text: "Votre établissement dispose-t-il d'une structure de gouvernance formelle (comité, groupe de travail, conseil de pilotage) dédiée à la réforme de l'évaluation de la recherche ?",
      answers: {
        0: "Il n'existe aucune structure dédiée",
        1: "Une personne championne existe mais aucune structure formelle",
        2: "Nous constituons un groupe de travail ou une équipe spéciale",
        3: "Un comité formel existe avec un mandat et une composition clairs",
        4: "Le comité est actif, se réunit régulièrement et conduit les changements",
        5: "La gouvernance est ancrée : comité, budget, lignes de reporting et participation des chercheurs",
      },
    },
    q5a: {
      text: "Votre établissement a-t-il alloué un budget, du personnel ou du temps spécifiques à la réforme de l'évaluation de la recherche ?",
      answers: {
        0: "Aucune ressource n'a été envisagée",
        1: "Nous savons que des ressources sont nécessaires mais aucune n'est allouée",
        2: "Nous estimons les ressources requises",
        3: "Un budget et du personnel ont été réservés",
        4: "Les ressources sont déployées (personnel recruté, budget en cours d'utilisation)",
        5: "Un financement pérenne et une équipe dédiée sont en place",
      },
    },
    q6a: {
      text: "Votre établissement a-t-il réalisé un audit systématique de l'ensemble de ses critères et processus d'évaluation actuels ?",
      answers: {
        0: "Nous n'avons jamais audité nos critères",
        1: "Nous savons que nous devrions auditer mais n'avons pas commencé",
        2: "Un audit est en cours ou en cours de conception",
        3: "L'audit est terminé et les lacunes ont été identifiées",
        4: "De nouveaux critères sont mis en œuvre sur la base de l'audit",
        5: "Les critères sont régulièrement examinés et mis à jour selon un cycle",
      },
    },
    q6b: {
      text: "De nouveaux modèles d'évaluation (p. ex. CV narratif, portfolio, déclaration d'impact) ont-ils été élaborés et testés ?",
      answers: {
        0: "Nous n'avons aucun nouveau modèle",
        1: "Nous connaissons les modèles de CV narratif mais n'avons pas créé le nôtre",
        2: "Nous étudions des modèles d'autres établissements",
        3: "Nous avons conçu de nouveaux modèles et les expérimentons",
        4: "Les modèles sont utilisés et affinés sur la base des retours",
        5: "Les modèles sont établis, régulièrement mis à jour et largement utilisés",
      },
    },
    q6c: {
      text: "Vos critères d'évaluation sont-ils différenciés selon l'étape de carrière (doctorat, postdoc, titularisation, senior) et selon le type de processus (recrutement, promotion, financement, évaluation d'unité) ?",
      answers: {
        0: "Nous utilisons les mêmes critères pour tout",
        1: "Nous savons qu'une différenciation est nécessaire mais n'avons pas commencé",
        2: "Nous recensons les processus qui nécessitent des critères distincts",
        3: "Nous avons rédigé des critères différenciés pour les processus clés",
        4: "Des critères différenciés sont utilisés pour la plupart des étapes de carrière et des processus",
        5: "Tous les processus disposent de critères adaptés, régulièrement révisés par étape de carrière",
      },
    },
    q6d: {
      text: "Votre établissement dispose-t-il de l'infrastructure informatique (CRIS, entrepôt, intégration ORCID) nécessaire pour saisir et évaluer la diversité des contributions de recherche ?",
      answers: {
        0: "Nous n'avons aucun système pour suivre les contributions de recherche",
        1: "Nous avons des systèmes de base mais ils ne suivent que les publications",
        2: "Nous explorons des améliorations du CRIS ou de l'entrepôt pour saisir des productions diverses",
        3: "Nous avons planifié des améliorations informatiques (CRIS, ORCID, entrepôt de données)",
        4: "Les systèmes sont en place et saisissent des productions diverses (données, logiciels, mentorat)",
        5: "Une infrastructure intégrée alimente directement les processus d'évaluation",
      },
    },
    q7a: {
      text: "Votre établissement communique-t-il activement sur la réforme de l'évaluation de la recherche auprès de sa communauté de recherche ?",
      answers: {
        0: "Aucune communication n'a eu lieu",
        1: "Seules quelques personnes connaissent la CoARA/DORA",
        2: "Nous planifions des sessions d'information ou des ateliers",
        3: "Une campagne de sensibilisation est conçue et prête à être lancée",
        4: "Des ateliers et des sessions d'information sont en cours",
        5: "La communauté de recherche est bien informée et mobilisée",
      },
    },
    q7b: {
      text: "Votre établissement traite-t-il l'éthique de la recherche, l'intégrité et l'édition prédatrice dans le cadre de sa communication et de sa formation sur la réforme de l'évaluation ?",
      answers: {
        0: "L'éthique et l'intégrité ne sont pas liées à la réforme de l'évaluation",
        1: "Nous savons qu'elles sont liées mais nous ne les avons pas intégrées",
        2: "Nous prévoyons d'inclure l'éthique/l'intégrité dans notre communication sur la réforme",
        3: "Des supports sur l'éthique, l'intégrité et les revues prédatrices sont en cours d'élaboration",
        4: "La formation comprend des modules d'éthique/intégrité parallèlement à la réforme de l'évaluation",
        5: "L'éthique, l'intégrité et l'édition responsable sont pleinement intégrées à la formation à la réforme",
      },
    },
    q8a: {
      text: "Votre établissement participe-t-il à des groupes de travail thématiques ou à des grappes d'action de la CoARA (SSH, EMCRs, Peer Review, RMI, OI4RRA, ERIP, etc.) ?",
      answers: {
        0: "Nous ne participons à aucun groupe thématique",
        1: "Nous connaissons les groupes mais n'y avons pas adhéré",
        2: "Nous explorons les groupes à rejoindre",
        3: "Nous avons adhéré et planifions notre contribution",
        4: "Nous participons et contribuons activement",
        5: "Nous co-dirigeons des groupes thématiques et partageons largement notre expérience",
      },
    },
    q9a: {
      text: "Votre établissement a-t-il publié ou prévu un rapport d'avancement sur son parcours de réforme de l'évaluation ?",
      answers: {
        0: "Nous n'avons pas envisagé de produire de rapport",
        1: "Nous savons que nous devrions rendre compte mais n'avons encore rien à signaler",
        2: "Nous définissons ce qu'il faut mesurer et comment en rendre compte",
        3: "Un cadre de reporting est prêt et la collecte de données a commencé",
        4: "Un rapport d'avancement a été publié ou soumis",
        5: "Des rapports d'avancement réguliers sont publiés selon un cycle défini",
      },
    },
    q10a: {
      text: "Votre établissement contribue-t-il des données ou participe-t-il à des évaluations collectives de l'avancement de la réforme entre signataires ?",
      answers: {
        0: "Nous ne participons pas à l'évaluation collective",
        1: "Nous connaissons les processus collectifs mais n'y participons pas",
        2: "Nous nous préparons à participer au prochain cycle d'examen",
        3: "Nous avons contribué des données pour l'évaluation collective",
        4: "Nous participons activement et partageons des données de référence",
        5: "Nous menons des initiatives d'évaluation collective et publions les résultats ouvertement",
      },
    },
    q1e: {
      text: "Votre évaluation protège-t-elle activement contre la pénalisation des recherches publiées dans des langues locales/non dominantes et sur des sujets d'intérêt local ?",
      answers: {
        0: "La langue n'est pas prise en compte dans l'évaluation",
        1: "Nous savons que les travaux en langue locale sont désavantagés mais nous n'avons pas agi",
        2: "Nous auditons la façon dont le biais linguistique affecte nos critères",
        3: "Des protections sont rédigées (p. ex. pondération pour les productions en langue locale)",
        4: "Des protections sont appliquées dans certains processus d'évaluation",
        5: "La protection du multilinguisme est systématique (alignée sur l'Initiative de Helsinki)",
      },
    },
    q1f: {
      text: "Votre établissement applique-t-il les principes CARE (Bénéfice collectif, Autorité de contrôle, Responsabilité, Éthique) lorsqu'il travaille avec des données autochtones ou détenues par des communautés ?",
      answers: {
        0: "Les principes CARE ne font pas partie de nos politiques de données",
        1: "Nous connaissons CARE mais ne l'appliquons pas",
        2: "Nous recensons les cas où CARE devrait s'appliquer dans nos recherches",
        3: "CARE est intégré dans les documents de gouvernance des données",
        4: "CARE est appliqué dans certains projets et évaluations",
        5: "CARE est ancré aux côtés de FAIR comme politique de données par défaut",
      },
    },
    q8b: {
      text: "Votre établissement s'engage-t-il auprès d'un forum régional ou d'un chapitre national (Chapitres nationaux de la CoARA, IRAF, AFRA, AOSP, etc.) ?",
      answers: {
        0: "Aucun engagement auprès de forums régionaux",
        1: "Nous savons que des forums existent mais n'en sommes pas membres",
        2: "Nous explorons le forum le mieux adapté à notre contexte",
        3: "Nous avons adhéré et contribuons occasionnellement",
        4: "Nous participons activement et partageons notre expérience",
        5: "Nous contribuons à diriger ou à cofonder des forums / chapitres régionaux",
      },
    },
    q10b: {
      text: "Votre établissement documente-t-il les exceptions à l'ouverture selon le principe « aussi ouvert que possible, aussi fermé que nécessaire » (limitées dans le temps et réexaminées) ?",
      answers: {
        0: "Les exceptions à l'ouverture ne sont pas documentées",
        1: "Nous savons que nous devrions documenter les exceptions",
        2: "Nous rédigeons un modèle de documentation",
        3: "La documentation des exceptions est exigée dans les nouveaux projets",
        4: "Les exceptions sont documentées et réexaminées périodiquement",
        5: "Toutes les exceptions sont limitées dans le temps, consignées et auditées",
      },
    },
  },

  commitments: {
    diversity: {
      title: "Reconnaître la diversité des contributions",
      text: "Reconnaître la diversité des activités, des pratiques et des contributions qui maximisent la qualité et l'impact de la recherche — y compris, mais sans s'y limiter : la recherche de qualité (du fondamental au translationnel), l'enseignement, le mentorat, l'encadrement, le leadership, l'entrepreneuriat, la mobilisation des connaissances, la gestion de la recherche, l'innovation, la collaboration public-privé, l'engagement citoyen et les pratiques de science ouverte.",
      inPractice: [
        "Élargir ce qui « compte » dans l'évaluation au-delà des publications",
        "Inclure les jeux de données, les logiciels, les brevets, le mentorat et la médiation dans les critères d'évaluation",
        "Valoriser les contributions d'équipe et les rôles de leadership",
        "Reconnaître les pratiques de science ouverte (partage de données, préenregistrement, évaluation par les pairs ouverte)",
      ],
    },
    qualitative: {
      title: "Fonder l'évaluation sur le jugement qualitatif",
      text: "Fonder l'évaluation de la recherche principalement sur le jugement qualitatif, au cœur duquel se trouve l'évaluation par les pairs, appuyée par un usage responsable des indicateurs quantitatifs. Cela implique d'abandonner les usages inappropriés des indicateurs fondés sur les revues et les publications, en particulier le facteur d'impact des revues (JIF), pour évaluer les chercheurs individuels ou prendre des décisions de recrutement et de financement.",
      inPractice: [
        "Éliminer le JIF, le h-index et les quartiles de revues des critères de recrutement/promotion",
        "Repenser les formulaires d'évaluation pour mettre l'accent sur les preuves narratives et qualitatives",
        "Former les comités d'évaluation à l'usage responsable des indicateurs",
        "Mettre en œuvre des CV narratifs ou une évaluation fondée sur le portfolio",
      ],
    },
    "no-metrics": {
      title: "Abandonner les indicateurs inappropriés fondés sur les revues",
      text: "Cesser d'utiliser les indicateurs fondés sur les revues, tels que le facteur d'impact des revues et le h-index, comme indicateurs indirects de la qualité des productions de recherche individuelles ou des chercheurs individuels, dans les décisions de recrutement, de promotion et de financement.",
      inPractice: [
        "Auditer tous les critères d'évaluation pour repérer les références au JIF, au h-index, aux quartiles",
        "Supprimer les seuils d'indicateurs des offres d'emploi et des lignes directrices de promotion",
        "Remplacer les indicateurs indirects quantitatifs par une évaluation fondée sur le contenu",
        "Communiquer le changement à la communauté de recherche",
      ],
    },
    "no-rankings": {
      title: "Éviter les classements dans l'évaluation de la recherche",
      text: "Éviter l'utilisation des classements des établissements d'enseignement supérieur et de recherche dans les processus d'évaluation de la recherche.",
      inPractice: [
        "Ne pas utiliser les classements Shanghai/THE/QS comme indicateur indirect de qualité pour les chercheurs",
        "Supprimer les références aux classements institutionnels des critères d'évaluation",
        "Évaluer la qualité des collaborations sur le fond, et non sur le prestige du partenaire",
      ],
    },
    resources: {
      title: "Mobiliser des ressources pour la réforme",
      text: "Mobiliser les ressources nécessaires pour réformer les pratiques d'évaluation de la recherche, y compris le financement, la formation, l'infrastructure et le temps de personnel.",
      inPractice: [
        "Allouer un budget à la réforme de l'évaluation (formation, outils, personnel)",
        "Désigner du personnel ou un comité dédié à la coordination de la réforme",
        "Prévoir du temps protégé pour les membres des comités d'évaluation",
        "Investir dans l'infrastructure de suivi des productions diverses",
      ],
    },
    "review-criteria": {
      title: "Réviser et développer les critères, outils et processus d'évaluation",
      text: "Réviser et développer les critères, outils et processus d'évaluation de la recherche, avec la participation des chercheurs, en favorisant l'interopérabilité et des approches adaptées au contexte à toutes les étapes de carrière.",
      subCommitments: {
        "6.1": "Pour les unités et les établissements : développer des critères avec la participation des chercheurs, en favorisant l'interopérabilité entre les systèmes",
        "6.2": "Pour les projets et les chercheurs : créer des approches d'évaluation adaptées au contexte à toutes les étapes de carrière",
      },
      inPractice: [
        "Auditer les critères d'évaluation actuels dans tous les processus",
        "Repenser les grilles pour le recrutement, la promotion, la titularisation et le financement interne",
        "Créer de nouveaux modèles (CV narratif, portfolio, déclaration d'impact)",
        "Associer les chercheurs à la conception des critères (pas uniquement de manière descendante)",
        "Adapter les critères à l'étape de carrière (début de carrière vs senior)",
        "Expérimenter de nouveaux critères et itérer sur la base des retours",
      ],
    },
    awareness: {
      title: "Sensibiliser et fournir des orientations",
      text: "Sensibiliser à la réforme de l'évaluation de la recherche et assurer une communication, des orientations et une formation transparentes sur les critères, les processus d'évaluation et leur usage responsable.",
      inPractice: [
        "Animer des ateliers et des sessions d'information sur l'évaluation réformée",
        "Publier les critères d'évaluation de manière ouverte et accessible",
        "Créer des guides pour les évaluateurs et pour les personnes évaluées",
        "Élaborer des FAQ et des supports de communication",
      ],
    },
    exchange: {
      title: "Échanger des pratiques et des expériences",
      text: "Échanger des pratiques et des expériences pour permettre l'apprentissage mutuel au sein des organisations signataires et entre elles, en reconnaissant que différentes organisations se trouvent à des stades différents.",
      inPractice: [
        "Participer aux grappes d'action et aux groupes de travail de la CoARA",
        "Partager les bonnes pratiques avec des établissements pairs",
        "Participer à ou organiser des ateliers sur la réforme de l'évaluation",
        "Publier des rapports sur l'expérience de mise en œuvre",
      ],
    },
    communicate: {
      title: "Communiquer les progrès",
      text: "Communiquer les progrès accomplis dans l'adhésion aux principes et la mise en œuvre des engagements, principalement au moyen d'auto-évaluations partagées publiquement, dans une démarche fondée sur la confiance.",
      inPractice: [
        "Publier des rapports d'avancement périodiques (tous les 2-3 ans)",
        "Partager publiquement les auto-évaluations et participer à l'apprentissage mutuel avec les autres signataires",
        "Partager des indicateurs d'adoption (% de critères réformés, évaluateurs formés, etc.)",
        "Faire preuve de transparence sur les défis et les revers",
      ],
    },
    "collective-eval": {
      title: "Évaluer sur la base de données probantes et de données ouvertes",
      text: "Utiliser des méthodes rigoureuses pour évaluer si les pratiques réformées atteignent les résultats souhaités. Assurer le contrôle communautaire des données d'évaluation, sur la base de données probantes et de données ouvertes, en maintenant la transparence et la reproductibilité.",
      inPractice: [
        "Contribuer des données pour le suivi des progrès à l'échelle de l'écosystème",
        "Utiliser des données et une infrastructure ouvertes pour l'évaluation (et non des systèmes propriétaires)",
        "Participer à des évaluations collectives avec d'autres signataires",
        "Partager des données d'évaluation anonymisées à des fins de comparaison",
        "Soutenir le développement d'indicateurs fondés sur des données probantes pour mesurer l'avancement de la réforme",
      ],
    },
  },

  actions: [
    {
      title: "Cartographier les types de productions actuellement reconnus",
      description: "Dresser un inventaire de tous les types de productions actuellement reconnus dans vos critères d'évaluation (publications, données, logiciels, brevets, etc.). Identifier les lacunes.",
      planText: "Nous dresserons un inventaire de tous les types de productions actuellement reconnus dans nos critères d'évaluation (publications, données, logiciels, brevets, etc.) et en identifierons les lacunes.",
    },
    {
      title: "Rédiger une typologie élargie des productions",
      description: "Élaborer une typologie complète des contributions de recherche : articles évalués par les pairs, jeux de données, logiciels, code, protocoles, supports pédagogiques, mentorat, notes de politique, médias, science citoyenne, etc.",
      planText: "Nous élaborerons une typologie complète des contributions de recherche — articles évalués par les pairs, jeux de données, logiciels, code, protocoles, supports pédagogiques, mentorat, notes de politique, médias et science citoyenne.",
      examples: ["Programme néerlandais Recognition & Rewards", "Études de cas d'impact du REF britannique"],
    },
    {
      title: "Ancrer les productions diverses dans tous les processus d'évaluation",
      description: "Réviser tous les critères de recrutement, de promotion, de titularisation et de financement pour inclure et pondérer explicitement les types de productions diverses. Veiller à ce que les évaluateurs soient formés à les évaluer.",
      planText: "Nous réviserons tous les critères de recrutement, de promotion, de titularisation et de financement afin d'inclure et de pondérer explicitement les types de productions diverses, et veillerons à ce que les évaluateurs soient formés à les évaluer.",
    },
    {
      title: "Étudier les modèles de CV narratif",
      description: "Examiner les modèles de CV narratif d'établissements qui les ont adoptés : CV narratif de l'UKRI, NWO (Pays-Bas), Fonds national suisse de la recherche scientifique.",
      planText: "Nous examinerons les modèles de CV narratif d'établissements qui les ont adoptés (UKRI, NWO, Fonds national suisse de la recherche scientifique) afin de retenir un modèle adapté à notre contexte.",
      examples: ["UKRI Résumé for Research and Innovation", "Sections narratives du NWO", "Profil académique du FNS suisse"],
    },
    {
      title: "Concevoir et expérimenter un CV narratif",
      description: "Adapter un modèle de CV narratif à votre contexte institutionnel. L'expérimenter sur une ou deux campagnes d'évaluation (p. ex. financements internes, un comité de promotion). Recueillir les retours des évaluateurs et des candidats.",
      planText: "Nous adapterons un modèle de CV narratif à notre contexte institutionnel, l'expérimenterons sur une ou deux campagnes d'évaluation et recueillerons les retours des évaluateurs et des candidats.",
    },
    {
      title: "Former les comités d'évaluation",
      description: "Élaborer et dispenser une formation aux comités d'évaluation sur l'évaluation qualitative, l'usage responsable des indicateurs et les biais implicites. Inclure des exercices pratiques avec des portfolios types.",
      planText: "Nous élaborerons et dispenserons une formation aux comités d'évaluation sur l'évaluation qualitative, l'usage responsable des indicateurs et les biais implicites, avec des exercices pratiques sur des portfolios types.",
    },
    {
      title: "Institutionnaliser l'évaluation qualitative",
      description: "Faire des CV narratifs et de l'évaluation qualitative la norme dans tous les processus. Mettre en place une formation régulière des évaluateurs. Surveiller le retour rampant des indicateurs.",
      planText: "Nous ferons des CV narratifs et de l'évaluation qualitative la norme dans l'ensemble de nos processus, mettrons en place une formation régulière des évaluateurs et surveillerons le retour rampant des indicateurs.",
    },
    {
      title: "Auditer les critères pour repérer les références aux indicateurs",
      description: "Rechercher dans toutes les offres d'emploi, lignes directrices de promotion, appels à financement et politiques internes les références au JIF, au h-index, aux quartiles ou aux « revues à fort impact ». Documenter chaque occurrence.",
      planText: "Nous rechercherons dans toutes les offres d'emploi, lignes directrices de promotion, appels à financement et politiques internes les références au JIF, au h-index, aux quartiles ou aux « revues à fort impact », en documentant chaque occurrence.",
    },
    {
      title: "Supprimer les indicateurs indirects des critères",
      description: "Réviser tous les documents identifiés pour supprimer ou remplacer les critères fondés sur les indicateurs. Remplacer « publier dans des revues Q1 » par « démontrer l'impact à travers des productions diverses ».",
      planText: "Nous réviserons tous les documents identifiés pour supprimer ou remplacer les critères fondés sur les indicateurs, en remplaçant des formules comme « publier dans des revues Q1 » par « démontrer l'impact à travers des productions diverses ».",
    },
    {
      title: "Surveiller le retour rampant des indicateurs",
      description: "Mettre en place un processus de révision périodique pour s'assurer que les indicateurs supprimés ne réapparaissent pas. Sonder les évaluateurs chaque année sur leurs pratiques réelles.",
      planText: "Nous mettrons en place une révision périodique pour nous assurer que les indicateurs supprimés ne réapparaissent pas, en sondant chaque année les évaluateurs sur leurs pratiques réelles.",
    },
    {
      title: "Identifier où les classements sont utilisés",
      description: "Examiner les communications institutionnelles, les critères de partenariat et les processus d'évaluation pour repérer les références à Shanghai, THE, QS ou d'autres classements.",
      planText: "Nous examinerons les communications institutionnelles, les critères de partenariat et les processus d'évaluation pour repérer les références à Shanghai, THE, QS ou d'autres classements.",
    },
    {
      title: "Élaborer une politique de partenariat sans classements",
      description: "Créer des critères de partenariats internationaux fondés sur la qualité de la recherche, l'alignement stratégique et le bénéfice mutuel plutôt que sur les classements institutionnels.",
      planText: "Nous créerons des critères de partenariats internationaux fondés sur la qualité de la recherche, l'alignement stratégique et le bénéfice mutuel plutôt que sur les classements institutionnels.",
    },
    {
      title: "Estimer les besoins en ressources",
      description: "Calculer le budget, les ETP et le temps nécessaires à la réforme de l'évaluation : élaboration de formations, temps de comité, réécriture des politiques, infrastructure, suivi.",
      planText: "Nous calculerons le budget, le temps de personnel et l'infrastructure nécessaires à la réforme de l'évaluation : élaboration de formations, temps de comité, réécriture des politiques et suivi.",
    },
    {
      title: "Garantir un financement et du personnel dédiés",
      description: "Demander une allocation budgétaire à la direction de l'établissement. Désigner un coordinateur ou un comité de réforme disposant de temps protégé et d'un mandat clair.",
      planText: "Nous obtiendrons une allocation budgétaire dédiée et désignerons un coordinateur ou un comité de réforme disposant de temps protégé et d'un mandat clair.",
    },
    {
      title: "Mener un audit complet des critères",
      description: "Examiner systématiquement TOUS les critères d'évaluation : recrutement (tous niveaux), promotion, titularisation, financements internes, congés sabbatiques, prix, évaluations de département. Utiliser une grille standardisée.",
      planText: "Nous examinerons systématiquement tous les critères d'évaluation — recrutement à tous les niveaux, promotion, titularisation, financements internes, congés sabbatiques, prix et évaluations de département — à l'aide d'une grille standardisée.",
    },
    {
      title: "Repenser les grilles d'évaluation",
      description: "Sur la base des résultats de l'audit, créer de nouvelles grilles qui mettent l'accent sur les contributions diverses, les preuves qualitatives et l'alignement avec la mission institutionnelle. Expérimenter et itérer.",
      planText: "Sur la base des résultats de l'audit, nous créerons de nouvelles grilles mettant l'accent sur les contributions diverses, les preuves qualitatives et l'alignement avec notre mission institutionnelle, en expérimentant et en itérant.",
    },
    {
      title: "Mettre en place un cycle de révision périodique des critères",
      description: "Fixer un calendrier régulier (p. ex. tous les 3 ans) pour examiner et mettre à jour tous les critères d'évaluation. Inclure une consultation des parties prenantes à chaque révision.",
      planText: "Nous fixerons un calendrier régulier (p. ex. tous les 3 ans) pour examiner et mettre à jour tous les critères d'évaluation, avec une consultation des parties prenantes à chaque cycle.",
    },
    {
      title: "Créer des supports d'information de base",
      description: "Élaborer une fiche d'une page, une FAQ et une courte vidéo expliquant ce qu'est la CoARA, pourquoi votre établissement a signé et ce qui va changer. Publier sur le site institutionnel.",
      planText: "Nous publierons sur le site institutionnel une fiche d'une page, une FAQ et une courte vidéo expliquant ce qu'est la CoARA, pourquoi nous avons signé et ce qui va changer.",
    },
    {
      title: "Animer des ateliers et des assemblées générales",
      description: "Organiser des ateliers interactifs pour les chercheurs, les évaluateurs et les administrateurs. Inclure des exercices pratiques (p. ex. « évaluez ce candidat sans indicateurs »). Tenir des assemblées de questions-réponses.",
      planText: "Nous organiserons des ateliers interactifs pour les chercheurs, les évaluateurs et les administrateurs — avec des exercices pratiques comme l'évaluation d'un candidat sans indicateurs — complétés par des assemblées ouvertes de questions-réponses.",
    },
    {
      title: "Rejoindre des groupes de travail thématiques et des grappes d'action de la CoARA",
      description: "Signer l'Accord CoARA (s'il n'est pas encore signé) et sélectionner 1 à 2 groupes de travail ou grappes d'action thématiques alignés sur vos priorités (SSH, EMCRs, peer review, RMI, OI4RRA, ERIP, etc.). Pour les forums géographiques (Chapitres nationaux de la CoARA, IRAF, AFRA, AOSP), voir l'action dédiée ci-dessous.",
      planText: "Nous rejoindrons un ou deux groupes de travail ou grappes d'action thématiques de la CoARA alignés sur nos priorités (SSH, EMCRs, peer review, RMI, OI4RRA ou ERIP) et participerons à leurs échanges.",
      examples: ["WG SSH", "WG EMCRs", "WG Peer Review", "WG OI4RRA", "WG ERIP"],
    },
    {
      title: "Co-organiser des activités d'apprentissage entre pairs",
      description: "Vous associer à d'autres signataires pour organiser des ateliers conjoints, des webinaires ou des visites de sites. Partager votre expérience de mise en œuvre — succès comme échecs.",
      planText: "Nous nous associerons à d'autres signataires pour organiser des ateliers conjoints, des webinaires ou des visites de sites, en partageant notre expérience de mise en œuvre — succès comme échecs.",
    },
    {
      title: "Définir des indicateurs de progrès",
      description: "Décider de ce qu'il faut mesurer : % de critères réformés, nombre d'évaluateurs formés, taux d'adoption du CV narratif, satisfaction des parties prenantes, etc.",
      planText: "Nous définirons les indicateurs que nous suivrons : part des critères réformés, nombre d'évaluateurs formés, taux d'adoption du CV narratif et satisfaction des parties prenantes.",
    },
    {
      title: "Publier un rapport d'avancement",
      description: "Rédiger et publier votre premier rapport d'avancement. Inclure : situation de départ, actions menées, indicateurs de changement, défis rencontrés, prochaines étapes. Le partager publiquement.",
      planText: "Nous rédigerons et partagerons publiquement notre premier rapport d'avancement, couvrant la situation de départ, les actions menées, les indicateurs de changement, les défis rencontrés et les prochaines étapes.",
    },
    {
      title: "Préparer l'auto-évaluation publique",
      description: "Vous familiariser avec le suivi fondé sur la confiance de la CoARA : les progrès sont communiqués principalement au moyen d'auto-évaluations partagées publiquement, avec un plan d'action attendu dans l'année suivant la signature et un point d'étape à cinq ans. Rassembler les données nécessaires : plan d'action, indicateurs de progrès, résultats de l'auto-évaluation.",
      planText: "Nous préparerons notre auto-évaluation publique conformément au suivi fondé sur la confiance de la CoARA, en rassemblant le plan d'action, les indicateurs de progrès et les données d'auto-évaluation qu'il requiert.",
    },
    {
      title: "Diriger ou contribuer à des études de référence",
      description: "Partager des données d'évaluation anonymisées avec des établissements pairs. Participer à ou initier des études comparatives de l'avancement de la réforme entre signataires.",
      planText: "Nous partagerons des données d'évaluation anonymisées avec des établissements pairs et participerons à — ou initierons — des études comparatives de l'avancement de la réforme entre signataires.",
    },
    {
      title: "Examiner les processus d'évaluation pour repérer les lacunes en matière d'EDI",
      description: "Auditer les critères d'évaluation et la composition des comités pour repérer les biais de genre, le traitement des interruptions de carrière (congé parental, maladie, handicap) et la diversité. Identifier où les biais peuvent affecter les résultats.",
      planText: "Nous auditerons les critères d'évaluation et la composition des comités pour repérer les biais de genre, le traitement des interruptions de carrière (congé parental, maladie, handicap) et la diversité, en identifiant où les biais peuvent affecter les résultats.",
      examples: ["Modules de formation aux biais inconscients du FRQ", "Plan d'égalité des genres de la SDU", "GEDIP 2024-2027 de l'UCLouvain"],
    },
    {
      title: "Mettre en œuvre des lignes directrices EDI pour les comités d'évaluation",
      description: "Élaborer et faire appliquer des lignes directrices : formation obligatoire aux biais inconscients pour les évaluateurs, normalisation des ajustements pour interruptions de carrière, garantie d'une composition diversifiée des comités, intégration de questionnaires d'auto-évaluation EDI.",
      planText: "Nous adopterons et ferons appliquer des lignes directrices EDI pour les comités d'évaluation : formation obligatoire aux biais inconscients, normalisation des ajustements pour interruptions de carrière, composition diversifiée des comités et questionnaires d'auto-évaluation EDI.",
      examples: ["Module obligatoire du FRQ sur les biais pour tous les membres des comités", "Programme Mentoring for Change de la SDU"],
    },
    {
      title: "Cartographier comment la science ouverte pourrait être valorisée dans l'évaluation",
      description: "Identifier quelles pratiques de science ouverte (données FAIR, libre accès, préenregistrement, évaluation par les pairs ouverte, code ouvert) sont pertinentes pour votre établissement et comment elles pourraient être reconnues dans les critères d'évaluation.",
      planText: "Nous identifierons quelles pratiques de science ouverte (données FAIR, libre accès, préenregistrement, évaluation par les pairs ouverte, code ouvert) sont pertinentes pour notre établissement et comment elles peuvent être reconnues dans les critères d'évaluation.",
      examples: ["Open Science Awards de la SDU", "Indicateurs de qualité FAIR de Helmholtz pour les données et les logiciels"],
    },
    {
      title: "Intégrer la science ouverte dans les critères d'évaluation",
      description: "Ajouter les pratiques de science ouverte comme critères positifs : partage de données, disponibilité du code, préenregistrement, publication en libre accès. Récompenser la reproductibilité et la transparence, et non le seul volume de productions.",
      planText: "Nous ajouterons les pratiques de science ouverte comme critères positifs d'évaluation — partage de données, disponibilité du code, préenregistrement, publication en libre accès — en récompensant la reproductibilité et la transparence plutôt que le seul volume de productions.",
      examples: ["Action A23 d'AQU Catalunya", "Module d'évaluation par les pairs ouverte de l'UCM dans l'entrepôt", "Indicateur OADO de la SDU"],
    },
    {
      title: "Établir une structure de gouvernance dédiée à la réforme",
      description: "Créer un comité ou groupe de travail formel doté d'un mandat clair, d'une composition multidisciplinaire, d'une représentation des chercheurs et de lignes de reporting vers la direction de l'établissement. C'est l'action fondatrice qui rend possibles toutes les autres.",
      planText: "Nous établirons un comité ou groupe de travail formel de réforme doté d'un mandat clair, d'une composition multidisciplinaire, d'une représentation des chercheurs et de lignes de reporting directes vers la direction de l'établissement.",
      examples: ["Groupe de travail CoARA de l'UCM", "Open Research Steering Group de la DCU", "Scientific Quality Analysis Group de Pannonia"],
    },
    {
      title: "Évaluer la maturité informatique pour la saisie de productions diverses",
      description: "Vérifier si votre CRIS (système d'information sur la recherche), votre entrepôt ou vos systèmes RH peuvent saisir des productions diverses (jeux de données, logiciels, brevets, mentorat, médiation). Identifier les lacunes.",
      planText: "Nous vérifierons si notre CRIS, notre entrepôt et nos systèmes RH peuvent saisir des productions diverses (jeux de données, logiciels, brevets, mentorat, médiation) et en identifierons les lacunes.",
      examples: ["Système DRAC de l'UPC avec 35 indicateurs", "Pure CRIS + Dataverse de la SDU", "Entrepôt DOCTA de l'UCM"],
    },
    {
      title: "Moderniser l'infrastructure pour soutenir une évaluation réformée",
      description: "Mettre en place ou moderniser un CRIS, intégrer ORCID, déployer des entrepôts de données, connecter les systèmes aux flux d'évaluation. Veiller à ce que l'infrastructure saisisse ce qu'exigent les nouveaux critères.",
      planText: "Nous mettrons en place ou moderniserons notre infrastructure d'information sur la recherche — CRIS, intégration ORCID, entrepôts de données — et la connecterons aux flux d'évaluation afin qu'elle saisisse ce qu'exigent les nouveaux critères.",
      examples: ["DRAC de l'UPC alimentant l'évaluation du Programa Càtedres", "Pipelines automatisés d'indicateurs de qualité de Helmholtz"],
    },
    {
      title: "Différencier les critères selon l'étape de carrière et le processus",
      description: "Élaborer des critères d'évaluation distincts pour les postes de doctorat, postdoc, titularisation et senior. Distinguer également recrutement, promotion, financements internes et évaluation d'unité. Des critères uniformes désavantagent les chercheurs en début de carrière.",
      planText: "Nous élaborerons des critères d'évaluation distincts pour les postes de doctorat, postdoc, titularisation et senior, et distinguerons recrutement, promotion, financements internes et évaluation d'unité, afin que des critères uniformes ne désavantagent plus les chercheurs en début de carrière.",
      examples: ["UB : examen différencié par type d'appel (predoc, postdoc, Serra Hunter, cátedras)", "Correspondance Eurodoc R1/R2/R3"],
    },
    {
      title: "Mettre en place des programmes de mentorat pour les chercheurs en début de carrière",
      description: "Créer un mentorat structuré qui aide les chercheurs en début de carrière à s'orienter dans une évaluation réformée : comment construire un portfolio, rédiger un CV narratif, démontrer des contributions diverses. Inclure des chercheurs seniors comme mentors.",
      planText: "Nous créerons un mentorat structuré, avec des chercheurs seniors comme mentors, pour aider les chercheurs en début de carrière à s'orienter dans une évaluation réformée : construire un portfolio, rédiger un CV narratif et démontrer des contributions diverses.",
      examples: ["Mentoring for Change de la SDU (130 doctorants/an)", "Initiative de mentorat de l'OGS", "Group of Young Scientists de Pannonia"],
    },
    {
      title: "Lier l'intégrité de la recherche à la réforme de l'évaluation",
      description: "Élaborer des orientations sur les revues prédatrices, l'éthique de la recherche et la conduite responsable dans le cadre de la communication sur la réforme de l'évaluation. La qualité des pratiques de recherche doit être valorisée, et pas seulement les productions.",
      planText: "Nous lierons l'intégrité de la recherche à la réforme de l'évaluation en élaborant des orientations sur les revues prédatrices, l'éthique de la recherche et la conduite responsable, afin que la qualité des pratiques de recherche soit valorisée au même titre que les productions.",
      examples: ["Comité d'éthique de la recherche de Pannonia", "Principes de Hong Kong", "Ethics & Diversity Hub de LBG"],
    },
    {
      title: "Mener une enquête interne sur la perception de l'évaluation",
      description: "Sonder votre communauté de recherche : quels critères pensent-ils être utilisés vs ceux qui devraient l'être selon eux ? Cette base de données probantes est précieuse pour calibrer la réforme. Publier les résultats ouvertement.",
      planText: "Nous sonderons notre communauté de recherche sur les critères qu'elle croit utilisés et ceux qu'elle estime souhaitables, et publierons les résultats ouvertement comme base de données probantes pour calibrer la réforme.",
      examples: ["Enquête de Helmholtz auprès de 1 145 chercheurs", "34 entretiens de l'UCLouvain avec les comités d'évaluation", "Enquêtes périodiques planifiées par l'UCM"],
    },
    {
      title: "Étendre la réforme à l'évaluation des unités et de l'établissement",
      description: "La réforme ne s'arrête pas à l'évaluation individuelle. Examiner comment les départements, instituts et groupes de recherche sont évalués — ces processus reposent eux aussi sur les indicateurs de publication et les classements. Élaborer des alternatives qualitatives.",
      planText: "Nous étendrons la réforme au-delà de l'évaluation individuelle, en examinant comment les départements, instituts et groupes de recherche sont évalués et en élaborant des alternatives qualitatives aux indicateurs de publication et aux classements.",
      examples: ["Révision des KPI au niveau des centres de Helmholtz", "Évaluation périodique des instituts de LBG par 3 experts", "Évaluation de la qualité institutionnelle d'AQU"],
    },
    {
      title: "Adopter CARE + FAIR comme principes appariés de gouvernance des données",
      description: "FAIR seul peut extraire les données communautaires vers des systèmes ouverts sans consentement. Associer FAIR à CARE (Bénéfice collectif, Autorité de contrôle, Responsabilité, Éthique) dans la politique de données institutionnelle et les critères d'évaluation. Particulièrement déterminant lorsque la recherche implique des peuples autochtones ou des données détenues par des communautés.",
      planText: "Nous associerons FAIR aux principes CARE (Bénéfice collectif, Autorité de contrôle, Responsabilité, Éthique) dans notre politique de données et nos critères d'évaluation, afin que l'ouverture ne prime jamais sur le consentement des communautés et le bénéfice collectif.",
      examples: ["Principes CARE de la GIDA", "HGP2 GWAS fédérée en Jordanie", "Fréquence allélique dans des cohortes des Caraïbes via BioVault"],
    },
    {
      title: "Auditer le biais linguistique (Initiative de Helsinki sur le multilinguisme)",
      description: "Veiller à ce que la recherche en langues locales ou non dominantes ne soit pas pénalisée. Examiner les critères, la composition des comités et les bases de données consultées pour repérer un biais implicite en faveur de l'anglais. L'Initiative de Helsinki fournit le cadre de référence.",
      planText: "Nous examinerons les critères, la composition des comités et les bases de données que nous consultons pour repérer un biais implicite en faveur de l'anglais, en suivant l'Initiative de Helsinki sur le multilinguisme, afin que la recherche en langues locales ou non dominantes ne soit pas pénalisée.",
      examples: ["AQU Catalunya — adoption de l'Initiative de Helsinki", "FRQ : plus de 60 revues francophones financées", "Manifeste de Leyde, principe 3"],
    },
    {
      title: "Rejoindre un forum régional ou un chapitre national",
      description: "S'aligner avec un forum régional (IRAF Inde, AFRA Afrique/AOSP, Chapitre national de la CoARA) plutôt que de réformer de manière isolée. Une réforme unilatérale dans un écosystème piloté par les indicateurs risque de désavantager vos chercheurs ; la coordination régionale les protège.",
      planText: "Nous nous alignerons avec un forum régional ou un chapitre national de la CoARA plutôt que de réformer de manière isolée, en protégeant nos chercheurs par la coordination régionale.",
      examples: ["Inauguration de l'IRAF (Dre Gitanjali Yadav)", "Conseil de gouvernance de l'AOSP", "CoARA Espagne (CRUE/CSIC)"],
    },
    {
      title: "Appliquer les principes TRUST lors du choix ou de la modernisation des entrepôts",
      description: "Utiliser les principes TRUST pour les entrepôts numériques (Transparence, Responsabilité, orientation Utilisateur, Pérennité, Technologie) pour auditer l'infrastructure qui soutient vos preuves d'évaluation. Associer à FAIR pour couvrir la couche des données.",
      planText: "Nous appliquerons les principes TRUST pour les entrepôts numériques (Transparence, Responsabilité, orientation Utilisateur, Pérennité, Technologie) pour auditer l'infrastructure qui soutient nos preuves d'évaluation, en les associant à FAIR pour la couche des données.",
      examples: ["Principes TRUST (Lin et al. 2020)", "OI4RRA Tier 1 Publishing"],
    },
    {
      title: "Documenter les exceptions à l'ouverture (« aussi ouvert que possible, aussi fermé que nécessaire »)",
      description: "L'ouverture est la règle par défaut ; les exceptions doivent être documentées, limitées dans le temps, soumises à une surveillance et réexaminées périodiquement. Ce principe (issu du Livre blanc CoARA-ERIP et de la Déclaration de Barcelone) fait des données fermées l'exception auditable plutôt que la norme silencieuse.",
      planText: "Nous ferons de l'ouverture la règle par défaut et documenterons chaque exception — limitée dans le temps, soumise à une surveillance et réexaminée périodiquement — afin que les données fermées soient l'exception auditable plutôt que la norme silencieuse.",
      examples: ["Livre blanc CoARA-ERIP (2025)", "Recommandation de l'UNESCO sur la science ouverte"],
    },
    {
      title: "Cartographier votre dispositif d'évaluation par rapport à l'architecture à 4 niveaux d'OI4RRA",
      description: "Le WG OI4RRA de la CoARA définit une architecture à 4 niveaux : Niveau 0 Fondation (PID, ORCID, ROR, DOI), Niveau 1 Publication, Niveau 2 Agrégateurs de métadonnées (OpenAIRE, ORKG), Niveau 3 Soutien à l'évaluation (analytique, générateurs de CV narratif). Cartographier ce dont vous disposez vs ce qui manque à chaque niveau ; investir en conséquence.",
      planText: "Nous cartographierons notre infrastructure d'évaluation par rapport à l'architecture à quatre niveaux d'OI4RRA — des identifiants pérennes aux outils de soutien à l'évaluation — et investirons là où des niveaux font défaut.",
      examples: ["OI4RRA Framework & Principles (Manola et al. 2025)", "Notes de politique OI4RRA pour les RPO/RFO"],
    },
    {
      title: "Adopter une taxonomie de contributeurs (CRediT / CASRAI / TaDiRAH)",
      description: "Dépasser les listes d'auteurs au profit de déclarations de contribution structurées. CRediT convient aux STEM ; TaDiRAH le complète pour les sciences humaines ; CASRAI couvre l'administration de la recherche. C'est un prérequis pour reconnaître la diversité des contributions à grande échelle.",
      planText: "Nous dépasserons les listes d'auteurs au profit de déclarations de contribution structurées, en adoptant une taxonomie de contributeurs (CRediT, complétée par TaDiRAH pour les sciences humaines et CASRAI pour l'administration de la recherche) comme base de la reconnaissance des contributions diverses à grande échelle.",
      examples: ["Taxonomie CRediT", "TaDiRAH (sciences humaines)", "Normes CASRAI", "OpenVIVO Contributor Roles"],
    },
    {
      title: "Ancrer la réforme dans un cadre établi (DORA / Leiden / SCOPE)",
      description: "Ne partez pas d'une page blanche. Adoptez formellement un ancrage existant : signez DORA, soutenez le Manifeste de Leiden ou utilisez le modèle SCOPE comme colonne vertébrale de votre démarche. Environ 43 % des plans d'action CoARA publiés en citent au moins un — cela apporte légitimité, vocabulaire commun et repères que les évaluateurs reconnaissent déjà.",
      planText: "Nous ancrerons notre réforme dans un cadre établi — en signant DORA, en soutenant le Manifeste de Leiden ou en adoptant le modèle SCOPE comme colonne vertébrale de notre démarche — pour lui donner légitimité, vocabulaire commun et repères que les évaluateurs reconnaissent déjà.",
    },
    {
      title: "Faire approuver formellement le plan par vos instances de gouvernance",
      description: "Soumettez le plan d'action à votre sénat, rectorat, conseil d'administration ou conseil de gouvernance pour approbation formelle, et consignez la décision. Un plan jamais adopté n'a aucun mandat : il ne peut revendiquer de budget, il ne peut obliger une faculté à modifier ses critères, et il devient discrètement le projet personnel de celle ou celui qui l'a rédigé.",
      planText: "Nous soumettrons le plan d'action à l'approbation formelle de nos instances de gouvernance et consignerons la décision, afin que la réforme repose sur un mandat institutionnel plutôt que sur la bonne volonté de ses auteurs.",
    },
    {
      title: "Publier et déposer le plan d'action",
      description: "Placez le plan là où d'autres peuvent le trouver, le lire et le citer : votre propre site et une archive délivrant un identifiant pérenne (la plupart des signataires de CoARA utilisent Zenodo). Cela ne coûte presque rien, cela permet aux institutions pairs de réutiliser vos formulations au lieu de partir d'une page blanche, et c'est ce qui a rendu possible le corpus sur lequel repose cet outil.",
      planText: "Nous publierons notre plan d'action sur notre propre site et le déposerons dans une archive ouverte avec un identifiant pérenne, afin que les institutions pairs puissent le trouver, le citer et s'appuyer dessus.",
    },
  ],

  contexts: {
    all: {
      label: "Non précisé / général",
      description: "Utiliser l'ensemble complet des actions sans repondération selon le contexte.",
    },
    "global-north": {
      label: "Nord global / riche en ressources",
      description: "CRIS établi, soutien financé à la réforme, participation aux réseaux de la CoARA.",
    },
    "global-south": {
      label: "Sud global / ressources limitées",
      description: "Outils légers, forums régionaux (IRAF, AFRA, AOSP), protection de l'édition en langue locale.",
    },
    "indigenous-serving": {
      label: "Au service des Autochtones / à gouvernance communautaire",
      description: "Les principes CARE et la souveraineté des données communautaires sont déterminants.",
    },
    "multi-regional": {
      label: "Multirégional / transfrontalier",
      description: "Modèles de visite des données et modèles fédérés ; exposition à l'asymétrie internationale.",
    },
    funder: {
      label: "Organisme de financement de la recherche (RFO)",
      description: "Conception des incitations, critères des appels, politique d'IA pour les évaluateurs, alignement des cadres.",
    },
  },

  maturity: [
    {
      label: "Non sensibilisé",
      description: "L'établissement n'a aucune connaissance de cet engagement ni de ses implications.",
    },
    {
      label: "Sensibilisé",
      description: "L'engagement est connu mais aucune action concrète n'a été entreprise.",
    },
    {
      label: "Exploration",
      description: "Discussions internes, groupes de travail constitués, cartographie des pratiques existantes.",
    },
    {
      label: "Planification",
      description: "Plan d'action élaboré, ressources affectées, pilotes conçus.",
    },
    {
      label: "Mise en œuvre",
      description: "Changements activement engagés, nouveaux critères utilisés, formation en cours.",
    },
    {
      label: "Ancré",
      description: "Les nouvelles pratiques sont la norme, le suivi est actif, l'amélioration continue.",
    },
  ],
};
