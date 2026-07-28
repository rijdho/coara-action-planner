// German (de) translation overlay.
export default {
  ui: {
    // header / nav
    brandApp: "CoARA Action Planner",
    source: "Quellcode",
    sourceTitle: "Quellcode und Kalibrierung auf GitHub ansehen",
    tab_questionnaire: "Fragebogen",
    tab_plan: "Plan",
    tab_results: "Ergebnisse",
    tab_report: "Bericht",
    themeToLight: "Zum hellen Modus wechseln",
    themeToDark: "Zum dunklen Modus wechseln",
    langLabel: "Sprache",
    nav_steps: "Schritte",
    nav_menu: "Menü",
    footer: "Bei Fragen zur Datennutzung oder Quellenangabe:",

    // commitment type
    typeCore: "Kern",
    typeSupporting: "unterstützend",

    // effort / impact values + labels
    effort_low: "gering",
    effort_medium: "mittel",
    effort_high: "hoch",
    impact_low: "gering",
    impact_medium: "mittel",
    impact_high: "hoch",
    effortLabel: "Aufwand",
    impactLabel: "Wirkung",

    // Assessment page
    asmt_title: "Institutionelle Selbsteinschätzung",
    asmt_intro:
      "Beantworten Sie die folgenden Fragen, um den Reifegrad Ihrer Einrichtung bei jeder CoARA-Verpflichtung zu ermitteln. Wenn Sie fertig sind, verwandelt der Reiter „Ergebnisse“ Ihre Antworten in ein Reifegradprofil und einen priorisierten Aktionsplan. Alles wird lokal in Ihrem Browser gespeichert.",

    // Start page + perspectives + ambition (added)
    tab_start: "Start",
    start_title: "Bevor Sie beginnen",
    start_intro:
      "Dieses Tool betrachtet die Reform aus drei Blickwinkeln. Richten Sie sie hier ein und gehen Sie dann die Tabs durch. Alles wird lokal in Ihrem Browser gespeichert.",
    start_lensesTitle: "Drei Blickwinkel",
    start_lens_now: "① Wo wir heute stehen",
    start_lens_now_desc:
      "Der Fragebogen misst Ihre aktuelle Reife bei jeder CoARA-Verpflichtung — den Ist-Zustand, ehrlich eingeschätzt.",
    start_lens_goal: "② Wohin wir wollen",
    start_lens_goal_desc:
      "Im Tab Plan legen Sie ein Reife-Ziel pro Verpflichtung fest. Die Lücke zwischen Ist und Ziel schließt Ihr Aktionsplan.",
    start_lens_who: "③ Wer diese Information liefert",
    start_lens_who_desc:
      "Geben Sie an, wer antwortet. Fügen Sie mehrere Perspektiven hinzu (z. B. Leitung und Forschende), um zu sehen, wo die Einschätzungen auseinandergehen.",
    start_instTitle: "Einrichtung",
    start_instHint: "Wird im Bericht und in den Exporten verwendet. Optional.",
    start_instPlaceholder: "Name der Einrichtung (optional)",
    start_perspectivesTitle: "Perspektiven",
    start_perspectivesHint:
      "Jede Perspektive ist die Sicht einer antwortenden Person, versehen mit ihrer Rolle. Alle beantworten dieselben 24 Fragen — Sie füllen sie einmal pro Perspektive aus, aus diesem Blickwinkel. Die Ergebnisse führen die Perspektiven zusammen und markieren, wo deren Einschätzungen derselben Frage voneinander abweichen (die Wahrnehmungslücke).",
    start_perspectiveN: "Perspektive {n}",
    start_roleLabel: "Rolle der antwortenden Person",
    start_active: "aktiv",
    start_setActive: "Aktivieren",
    start_answerAs: "Als diese antworten →",
    start_remove: "Perspektive entfernen",
    start_completion: "{answered}/{total} beantwortet",
    start_addPerspective: "+ Weitere Perspektive hinzufügen",
    start_multiNote:
      "Mehrere Perspektiven werden zu einem Profil gemittelt; Abweichungen von zwei oder mehr Stufen werden in den Ergebnissen markiert.",
    start_cta: "Zum Fragebogen →",
    asmt_answeringAs: "Antwort als: {role}",
    asmt_switchPerspective: "Wechseln →",
    plan_s5_title: "5 · Ambition — wohin wollen Sie?",
    plan_s5_hint:
      "Legen Sie ein Reife-Ziel pro Verpflichtung fest. Maßnahmen, die die Lücke zwischen Ihrer aktuellen Stufe und dem Ziel schließen, steigen nach oben; Verpflichtungen, die ihr Ziel bereits erreicht haben, sinken. Lassen Sie „—“, um nur nach der Lücke bis zur höchsten Stufe zu ordnen.",
    plan_ambition_now: "jetzt",
    plan_ambition_current: "aktuelle Stufe",
    plan_ambition_target: "Zielstufe",
    plan_ambition_notset: "—",
    plan_ambition_clear: "Alle Ziele löschen",
    plan_s6_title: "6 · Perspektivengewichtung & Abstimmung",
    plan_s6_hint:
      "Nur relevant bei mehr als einer Perspektive. Legen Sie fest, wie stark die Sicht jeder Rolle beim Zusammenführen der Profile zählt und ab welcher Abweichung eine Verpflichtung zur Abstimmung markiert wird.",
    plan_weight_aria: "Gewicht für {role}",
    plan_threshold_label: "Wahrnehmungslücke markieren, wenn Perspektiven abweichen um",
    plan_threshold_suffix: "Stufen",
    plan_weight_reset: "Gewichtung auf Standard zurücksetzen",
    res_respondents: "Antwortende: {list}",
    res_ambitionSet: "Ambition festgelegt",
    res_currentVsTarget: "aktuell vs Ziel",
    res_consolidatedNote: "Rollengewichteter Durchschnitt über {n} Perspektiven (die Bewerteten zählen mehr).",
    res_perceptionGap: "Perspektiven weichen um ≥2 Stufen ab bei: {list} — zur Abstimmung priorisiert.",
    print_respondents: "Antwortende: {list}",
    radar_target: "Ziel",

    asmt_progress: "Fortschritt: {answered}/{total} Fragen",
    asmt_overall: "Gesamtreifegrad:",
    asmt_next: "Weiter: Ihren Plan gestalten →",
    asmt_inPractice: "Was das in der Praxis bedeutet",
    asmt_maturityProfile: "Reifegradprofil",
    asmt_radarEmpty: "Beantworten Sie Fragen, um Ihr Radardiagramm zu sehen",

    // Plan page
    plan_emptyTitle: "Plan",
    plan_emptyBody:
      "Beantworten Sie zuerst den Fragebogen — der Plan stimmt die Maßnahmen ab, die sich aus Ihrem Reifegradprofil ergeben.",
    plan_startQuestionnaire: "Fragebogen starten",
    plan_title: "Ihren Aktionsplan gestalten",
    plan_intro:
      "Vier schnelle Entscheidungen, die festlegen, welche Maßnahmen zuerst erscheinen. Nichts davon ist erforderlich — die Standardeinstellungen ergeben einen ausgewogenen, lückenorientierten Plan. Ihr Reifegradprofil bleibt unverändert.",
    plan_s1_title: "1 · Zeithorizont & Kapazität",
    plan_s1_hint: "Wie viel Veränderung können Sie derzeit bewältigen?",
    plan_s2_title: "2 · Institutioneller Kontext",
    plan_s2_hint: "Hebt Maßnahmen hervor, die für Ihre Situation besonders relevant sind.",
    plan_s3_title: "3 · Prioritäre Verpflichtungen",
    plan_s3_hint:
      "Wählen Sie die CoARA-Verpflichtungen, die Sie zuerst angehen möchten — ihre Maßnahmen rücken in der Liste nach oben. Leer lassen für keine.",
    plan_clear: "Auswahl löschen",
    plan_s4_title: "4 · Aufwändige Maßnahmen",
    plan_s4_hint: "Strukturelle Reformen (neue Kriterien, systemweite Schulungen) erfordern erhebliche Ressourcen.",
    plan_includeHigh: "Aufwändige Maßnahmen einbeziehen",
    plan_hideHigh: "Aufwändige Maßnahmen ausblenden",
    plan_back: "← Zurück zum Fragebogen",
    plan_view: "Maßgeschneiderte Ergebnisse ansehen →",

    // horizons (label + description)
    horizon_quickwins_label: "Schnelle Erfolge zuerst",
    horizon_quickwins_desc:
      "Wir haben begrenzte Zeit und Kapazität. Bevorzugen Sie aufwandsarme Maßnahmen, die wir sofort beginnen können.",
    horizon_balanced_label: "Ausgewogen",
    horizon_balanced_desc: "Mischung aus schnellen Erfolgen und tiefgreifenderen Veränderungen, rein nach Lücke und Wirkung geordnet.",
    horizon_structural_label: "Struktureller Wandel",
    horizon_structural_desc:
      "Wir sind bereit für ehrgeizige, wirkungsvolle Reformen, auch wenn sie mehr Aufwand erfordern.",

    // Results page
    res_emptyTitle: "Ergebnisse",
    res_emptyBody: "Beantworten Sie zuerst den Fragebogen, um Ihr Reifegradprofil und Ihren Aktionsplan zu erstellen.",
    res_title: "Ergebnisse",
    res_forInst: "für {inst}",
    res_intro:
      "Ihr Reifegradprofil und die wichtigsten Maßnahmen, priorisiert nach Lückengröße und Wirkung.",
    res_basedOn: "Basierend auf {answered}/{total} Fragen",
    res_planLabel: "Plan:",
    res_focus: "Schwerpunkt: {list}",
    res_highHidden: "Aufwändige ausgeblendet",
    res_edit: "Bearbeiten",
    res_balancedNote: "Ausgewogener Plan (lückenorientiert).",
    res_tuneIt: "Anpassen →",
    res_print: "Bericht drucken",
    res_exportJson: "JSON exportieren",
    res_saveConfig: "Konfig. speichern",
    cfg_title: "Konfiguration speichern / laden",
    cfg_hint:
      "Speichern Sie alle Eingaben dieser Bewertung (Antworten, Perspektiven, Zielniveau und Plan) in einer Datei — um genau diesen Bericht später zu reproduzieren, zu teilen oder als Basis zum Ändern neu zu laden.",
    cfg_save: "Konfiguration speichern",
    cfg_load: "Konfiguration laden",
    cfg_loaded: "Konfiguration geladen.",
    cfg_loadError: "Datei konnte nicht geladen werden: {msg}",
    reset_button: "Neu beginnen",
    reset_hint: "Alles wird in diesem Browser gespeichert. Neu beginnen löscht alle Antworten, Perspektiven, Ziele, den Plan und den Bericht, um von vorne anzufangen.",
    reset_confirm: "Dies löscht alle in diesem Browser gespeicherten Antworten, Perspektiven, Ziele, den Plan und den Bericht und kann nicht rückgängig gemacht werden. Von vorne beginnen?",
    chart_png: "PNG",
    chart_pngTitle: "Dieses Diagramm als PNG-Bild herunterladen",
    res_maturityProfile: "Reifegradprofil",
    res_overallShort: "Gesamt:",
    res_byCommitment: "Reifegrad nach Verpflichtung",
    res_recommendedOne: "{n} empfohlene Maßnahme",
    res_recommendedMany: "{n} empfohlene Maßnahmen",
    res_filterAll: "Alle Maßnahmen",
    res_filterQuick: "Schnelle Erfolge",
    res_filterHigh: "Hohe Wirkung",
    res_noMatch: "Keine Maßnahmen entsprechen diesem Filter. Versuchen Sie „Alle Maßnahmen“.",
    res_examples: "Beispiele:",
    res_corpus: "{pct} % von {n} Plänen",
    res_corpusTitle: "Anteil der 314 veröffentlichten CoARA-Aktionspläne, deren Volltext dem Thema dieser Maßnahme entspricht (stichwortbasiert, orientierend)",
    ev_universal: "Nahezu universell in bestehenden Plänen",
    ev_common: "Verbreitet in bestehenden Plänen",
    ev_emerging: "Aufkommende Praxis",
    ev_frontier: "Neuland — bislang von wenigen Plänen umgesetzt; eine Chance, voranzugehen",
    res_ctaNext: "Weiter:",
    res_ctaBody: "verwandeln Sie dies in einen schriftlichen CoARA-Aktionsplan-Entwurf, den Sie bearbeiten und teilen können.",
    res_generateReport: "Bericht erstellen →",

    // Results — print view
    print_title: "Reform der Forschungsbewertung — Reifegradbericht",
    print_meta: "{inst} · {date} · CoARA-Verpflichtungen · basierend auf {answered}/{total} Fragen",
    print_planPrefix: "Plan:",
    print_overall: "Gesamtreifegrad:",
    print_level: "Stufe {n} — {label}",
    print_byCommitment: "Reifegrad nach Verpflichtung",
    print_priorityActions: "Prioritäre Maßnahmen",
    print_footer:
      "Erstellt mit dem CoARA Action Planner (DOI 10.5281/zenodo.21492548) · rijdho.github.io/coara-action-planner · Rahmenwerk: CoARA-Vereinbarung zur Reform der Forschungsbewertung.",
    unknownInst: "Einrichtung",

    // Report page
    rep_emptyTitle: "Bericht",
    rep_emptyBody:
      "Beantworten Sie zuerst den Fragebogen — der Bericht wird aus Ihrem Reifegradprofil und Ihrem Plan entworfen.",
    rep_title: "Aktionsplan-Bericht",
    rep_intro_pre:
      "Ein vorstrukturierter CoARA-Aktionsplan-Entwurf, erstellt aus Ihren Antworten und Ihrem Plan. Seine Struktur folgt echten institutionellen Aktionsplänen (Einleitung → Ausgangslage → Prioritäten → Maßnahmen je Verpflichtung → Ressourcen → Monitoring). ",
    rep_intro_strong: "Bearbeiten Sie ihn frei",
    rep_intro_post: " — eingeklammerte [Felder] sind auszufüllende Lücken. Wird beim Tippen lokal gespeichert.",
    rep_copy: "Text kopieren",
    rep_copied: "Kopiert ✓",
    rep_downloadMd: ".md herunterladen",
    rep_downloadTxt: ".txt herunterladen",
    rep_print: "Drucken",
    rep_regenerate: "↻ Neu erstellen",
    rep_regenConfirm: "Aus Ihren neuesten Antworten neu erstellen? Dies überschreibt Ihre Änderungen.",

    // radar tooltip / series
    radar_current: "Aktuell",
    radar_previous: "Vorher",
    radar_level: "Stufe {n} — {label}",  },

  report: {
    docTitle: "{inst} — Aktionsplan zur Reform der Forschungsbewertung",
    subtitle: "Im Einklang mit der CoARA-Vereinbarung zur Reform der Forschungsbewertung · {date}",
    respondentSingle:
      "Diese Selbsteinschätzung wurde aus der Perspektive von {role} erstellt und sollte mit diesem Blickwinkel im Hinterkopf gelesen werden.",
    respondentMulti:
      "Diese Selbsteinschätzung führt {n} Perspektiven zusammen ({roles}). Mehrere Blickwinkel zu vereinen ergibt ein vollständigeres, ehrlicheres Bild davon, wo die Einrichtung steht und wo sich die Einschätzungen des Fortschritts unterscheiden.",
    ambitionLine:
      "Innerhalb dieses Horizonts strebt {inst} an, bestimmte Verpflichtungen auf erklärte Reife-Zielstufen voranzubringen: {targets}.",
    targetLevelShort: "Stufe {level} ({label})",
    contestedNote:
      "Die internen Einschätzungen des Fortschritts gehen am stärksten auseinander bei {contested}; diese werden zur frühen Abstimmung priorisiert, damit sich die Einrichtung einig wird, wo sie wirklich steht, bevor sie handelt.",

    h_intro: "Einleitung",
    intro1:
      "Im [Monat Jahr] hat {inst} die Vereinbarung zur Reform der Forschungsbewertung (CoARA) unterzeichnet und verpflichtet sich, die Art und Weise zu reformieren, wie Forschung, Forschende und forschende Einheiten bewertet werden. Wir erkennen an, dass verantwortungsvolle Bewertung eine Governance-Entscheidung ist: Sie verteilt Prestige, Ressourcen und Legitimität und muss die gesamte Vielfalt wissenschaftlicher Beiträge honorieren.",
    intro2:
      "Dieser Plan stützt sich auf eine strukturierte Selbsteinschätzung über die zehn CoARA-Verpflichtungen hinweg. Er beschreibt unsere aktuelle Ausgangslage, unsere Prioritäten und die konkreten Maßnahmen, die wir ergreifen werden, zusammen mit den verantwortlichen Einheiten, indikativen Zeitrahmen und den Meilensteinen, an denen wir den Fortschritt messen werden.",

    h_baseline: "1. Selbsteinschätzung der Ausgangslage",
    overall: "Gesamtreifegrad: Stufe {level} — {label}.",
    established: "Etabliert (Stufe 4–5):",
    developing: "In Entwicklung (Stufe 2–3):",
    gaps: "Prioritäre Lücken (Stufe 0–1):",
    baselineClose:
      "Diese Ergebnisse vermitteln ein gemeinsames, evidenzbasiertes Bild davon, wo {inst} heute steht, und rahmen die folgenden Prioritäten ein. [Optional 1–2 Sätze lokaler Erzählung ergänzen: jüngste Initiativen, Treiber oder Einschränkungen.]",

    h_priorities: "2. Strategische Prioritäten",
    prioritiesFocus: "Über {tf} wird {inst} seine Reformbemühungen konzentrieren auf: {focus}.",
    prioritiesGaps:
      "Über {tf} wird {inst} seine Reformbemühungen auf das Schließen der oben identifizierten prioritären Lücken konzentrieren.",

    h_actions: "3. Geplante Maßnahmen",
    actionsIntro:
      "Die folgenden Maßnahmen sind nach der Größe jeder Lücke und ihrer erwarteten Wirkung priorisiert{focusClause}. Eingeklammerte Felder sind von der verantwortlichen Einheit auszufüllen.",
    actionsFocusClause: ", mit zusätzlichem Gewicht auf unseren prioritären Verpflichtungen",
    actionHeading: "C{num}. {title} — aktuell Stufe {lvl} ({label})",
    actionLabel: "Maßnahme:",
    targetLabel: "Fortschritt:",
    targetValue: "Stufe {from} → {to} · Aufwand {effort} · erwartete Wirkung {impact}",
    referenceLabel: "Referenzpraxis:",
    responsibleLabel: "Verantwortlich:",
    responsiblePlaceholder: "[z. B. CoARA-Arbeitsgruppe / Vizerektorat für Forschung / zuständige Stelle]",
    timeframeLabel: "Zeitrahmen:",
    timeframePlaceholder: "[Jahr 1 / Q_ 20__ / laufend]",
    indicatorLabel: "Indikator / Meilenstein:",
    indicatorPlaceholder: "[beobachtbares Ergebnis, z. B. überarbeitete Kriterien genehmigt]",
    noActions:
      "Es wurden keine Maßnahmen empfohlen — Ihr Reifegrad ist über die bewerteten Verpflichtungen hinweg bereits hoch. Konzentrieren Sie sich auf die unten beschriebenen Verankerungs- und Monitoring-Aktivitäten.",

    h_resources: "4. Ressourcen (CoARA-Verpflichtung 5)",
    resourcesBody:
      "{inst} wird die für die Umsetzung dieses Plans erforderlichen Ressourcen bereitstellen: [Budgetposten], [zugewiesene Personalzeit / Koordination], [Schulung für Bewertungsausschüsse] und [Infrastruktur zur Erfassung vielfältiger Forschungsleistungen]. Ein [benannter Ausschuss / benannte Stelle] wird die Umsetzung koordinieren.",

    h_awareness: "5. Sensibilisierung, Anleitung & Austausch (CoARA-Verpflichtungen 7–8)",
    awarenessBody:
      "Wir werden intern sensibilisieren und zugängliche Leitlinien zu den reformierten Kriterien und ihrer verantwortungsvollen Nutzung veröffentlichen. {inst} wird Praktiken mit Partnereinrichtungen austauschen — über [CoARA-Arbeitsgruppen / nationales Kapitel / regionales Forum] — und dabei anerkennen, dass Organisationen sich an unterschiedlichen Punkten des Weges befinden.",

    h_monitoring: "6. Monitoring, Evaluation & Kommunikation des Fortschritts (CoARA-Verpflichtungen 9–10)",
    monitoringBody:
      "Der Fortschritt wird [jährlich] überprüft, anhand transparenter Indikatoren wie dem Anteil der reformierten Bewertungsverfahren, der Zahl der geschulten Bewertenden und der Abschaffung unangemessener zeitschriften- und publikationsbasierter Kennzahlen. Wir werden den Fortschritt offen kommunizieren, in erster Linie durch eine öffentlich geteilte Selbsteinschätzung, wie es die Vereinbarung vorsieht, wobei wir die Bewertung auf Evidenz und offene Daten stützen.",

    h_ongoing: "Fortlaufende Verpflichtung",
    ongoingBody:
      "{inst} betrachtet die Reform der Forschungsbewertung als iterativen Prozess. Dieser Plan wird [jährlich] überprüft und aktualisiert, während Kriterien erprobt, evaluiert und in allen Bewertungsverfahren verankert werden.",

    footer:
      "Entwurf erstellt mit dem CoARA Action Planner (rijdho.github.io/coara-action-planner, DOI 10.5281/zenodo.21492548) aus einer Selbsteinschätzung der zehn CoARA-Verpflichtungen. Vor der Verabschiedung frei bearbeitbar.",

    // horizon timeframe phrases (fill {tf})
    tf_quickwins: "die kommenden 12 Monate",
    tf_balanced: "die nächsten zwei bis drei Jahre",
    tf_structural: "einen Horizont von drei bis fünf Jahren",

    // horizon sentences
    hs_quickwins:
      "Angesichts der aktuellen Kapazität beginnen wir mit aufwandsarmen, wirkungsstarken Maßnahmen, die sich sofort einleiten lassen und Schwung für tiefgreifendere Veränderungen aufbauen.",
    hs_balanced:
      "Wir verfolgen eine ausgewogene Mischung aus frühen Erfolgen und umfangreicheren Reformen, geordnet nach der Größe jeder Lücke und ihrer erwarteten Wirkung.",
    hs_structural:
      "Wir sind bereit, ehrgeizige, strukturelle Reformen anzugehen — Kriterien und Verfahren systemweit zu überarbeiten — auch wo dies anhaltenden Aufwand und Ressourcen erfordert.",

    // context sentences (appended to intro1; leading space intentional)
    cs_globalnorth:
      " Als ressourcenstarke Einrichtung, eingebettet in etablierte Netzwerke der Forschungsbewertung, wollen wir mit gutem Beispiel vorangehen und unsere reformierten Kriterien offen veröffentlichen.",
    cs_globalsouth:
      " Wir verfolgen die Reform mit Blick auf ressourcenbeschränkte Gegebenheiten: schlanke und interoperable Werkzeuge, Engagement in regionalen Foren (IRAF, AFRA, AOSP) und den Schutz von Wissenschaft in lokalen Sprachen.",
    cs_indigenous:
      " Unser Ansatz stellt die CARE-Prinzipien und die gemeinschaftliche Daten-Governance in den Mittelpunkt und stellt sicher, dass die Bewertungsreform den kollektiven Nutzen, die Kontrollhoheit und indigene Wissenssysteme respektiert.",
    cs_multiregional:
      " Da wir grenzüberschreitend tätig sind, bevorzugen wir föderierte und interoperable Modelle und bleiben aufmerksam gegenüber internationalen Asymmetrien, wenn wir die Bewertung einseitig reformieren.",
    cs_funder:
      " Als Forschungsförderorganisation konzentrieren wir uns auf die Gestaltung von Anreizen, Ausschreibungs- und Begutachtungskriterien, Leitlinien für Gutachtende und die Abstimmung mit nationalen und internationalen Bewertungsrahmen.",

    // effort / impact words used inside the narrative
    effort_low: "gering",
    effort_medium: "mittel",
    effort_high: "hoch",
    impact_low: "gering",
    impact_medium: "mittel",
    impact_high: "hoch",
  },

  roles: {
    unspecified: { label: "Nicht angegeben", hint: "Allgemein / keine Angabe." },
    leadership: { label: "Hochschulleitung", hint: "Rektorat, Vizerektorat für Forschung, Leitungsgremium." },
    "research-office": { label: "Forschungsservice / Unterstützung", hint: "Forschungsservice, RRA- oder Open-Science-Büro." },
    "working-group": { label: "Reform-Arbeitsgruppe", hint: "Eigene CoARA- / Bewertungsreform-Arbeitsgruppe." },
    researcher: { label: "Forschende / akademisches Personal", hint: "Lehrende, Postdocs — die Bewerteten." },
    "hr-career": { label: "Personal & Karriereentwicklung", hint: "Verantwortliche für Einstellung, Beförderung und Beurteilung." },
    "library-os": { label: "Bibliothek / Open Science", hint: "Repositorium, FAIRe Daten, Wissenschaftskommunikation." },
    "evaluation-committee": { label: "Bewertungs- / Qualitätsausschuss", hint: "Gremien, die Bewertungsprozesse durchführen." },
    funder: { label: "Förderer / RFO", hint: "Förderorganisation, die Ausschreibungen und Kriterien gestaltet." },
    external: { label: "Externe Gutachter/in oder Berater/in", hint: "Außenblick — Partnereinrichtung oder Auditor." },
  },

  questions: {
    q1a: {
      text: "Erkennt Ihre Einrichtung in ihren Bewertungskriterien ausdrücklich Forschungsleistungen über Publikationen hinaus an (Datensätze, Software, Patente, Mentoring)?",
      answers: {
        0: "Wir haben dies nie besprochen",
        1: "Uns ist bewusst, dass dies ein Thema ist, aber wir haben nicht gehandelt",
        2: "Wir haben eine Arbeitsgruppe, die untersucht, wie die Kriterien erweitert werden können",
        3: "Wir haben neue Kriterien entworfen, die vielfältige Forschungsleistungen einbeziehen",
        4: "Neue Kriterien werden in mindestens einigen Bewertungsverfahren verwendet",
        5: "Alle Bewertungsverfahren erkennen vielfältige Forschungsleistungen standardmäßig an",
      },
    },
    q1b: {
      text: "Werden Tätigkeiten wie Lehre, Betreuung, Wissenschaftskommunikation und Peer Review bei der Bewertung von Forschenden formal gewürdigt?",
      answers: {
        0: "Diese Tätigkeiten sind überhaupt nicht Teil der Bewertung",
        1: "Wir wissen, dass sie es sein sollten, aber sie sind noch nicht einbezogen",
        2: "Wir erfassen, welche Tätigkeiten einbezogen werden sollten",
        3: "Wir haben einen Plan, diese in die Bewertungskriterien aufzunehmen",
        4: "Einige Verfahren würdigen diese Tätigkeiten bereits",
        5: "Alle Bewertungsverfahren beziehen diese Tätigkeiten systematisch ein",
      },
    },
    q1c: {
      text: "Erkennt Ihre Einrichtung Open-Science-Praktiken (FAIR-Daten, Open Access, Präregistrierung, offenes Peer Review) als positive Kriterien bei der Bewertung von Forschenden an?",
      answers: {
        0: "Open Science ist nicht Teil der Bewertungskriterien",
        1: "Uns ist bewusst, dass es einbezogen werden sollte, aber es ist nicht enthalten",
        2: "Wir erfassen, wie Open Science in die Kriterien integriert werden kann",
        3: "Wir haben Kriterien entworfen, die Open-Science-Praktiken honorieren",
        4: "Open Science wird in einigen Bewertungsverfahren gewürdigt",
        5: "Open-Science-Praktiken werden systematisch über alle Verfahren hinweg honoriert",
      },
    },
    q1d: {
      text: "Berücksichtigt Ihre Einrichtung Gleichstellung, Vielfalt und Inklusion (EDI) in ihren Bewertungsverfahren — z. B. Karriereunterbrechungen, Elternzeit, Behinderung, Geschlechterverzerrung in Bewertungsausschüssen?",
      answers: {
        0: "EDI wird in der Bewertung nicht berücksichtigt",
        1: "Uns sind EDI-Themen bewusst, aber wir haben nicht gehandelt",
        2: "Wir überprüfen unsere Verfahren auf EDI-Lücken und Verzerrungen",
        3: "Wir haben EDI-Leitlinien für Bewertungsausschüsse entworfen",
        4: "EDI-Leitlinien werden angewendet (Schulung zu unbewussten Vorurteilen, Anpassungen bei Karriereunterbrechungen)",
        5: "EDI ist verankert: Vorurteilsschulungen sind verpflichtend, Karriereunterbrechungen sind normalisiert, Ausschüsse sind divers",
      },
    },
    q2a: {
      text: "Sind Bewertungsausschüsse darin geschult, qualitative Beurteilungen vorzunehmen, statt sich auf quantitative Kennzahlen zu verlassen?",
      answers: {
        0: "Wir haben dies nicht in Betracht gezogen",
        1: "Wir erkennen den Bedarf, bieten aber keine Schulung an",
        2: "Wir konzipieren ein Schulungsprogramm",
        3: "Schulungsmaterialien liegen bereit und Pilotprojekte sind geplant",
        4: "Die Schulung wird in den Bewertungsausschüssen ausgerollt",
        5: "Alle Bewertenden erhalten regelmäßig Schulungen zur qualitativen Bewertung",
      },
    },
    q2b: {
      text: "Verwendet Ihre Einrichtung narrative Lebensläufe, Forschungsportfolios oder Wirkungsberichte in ihren Bewertungsverfahren?",
      answers: {
        0: "Wir wissen nicht, was narrative Lebensläufe sind",
        1: "Wir haben davon gehört, verwenden sie aber nicht",
        2: "Wir untersuchen Modelle narrativer Lebensläufe anderer Einrichtungen",
        3: "Wir haben eine Vorlage für narrative Lebensläufe für unseren Kontext entworfen",
        4: "Narrative Lebensläufe werden in einigen Bewertungsverfahren verwendet",
        5: "Narrative Lebensläufe sind das Standardformat in allen Verfahren",
      },
    },
    q3a: {
      text: "Erwähnen Ihre Kriterien für Einstellung, Beförderung oder Förderung ausdrücklich den Journal Impact Factor (JIF), den h-index oder Zeitschriften-Quartile?",
      answers: {
        0: "Wir wissen nicht, was in unseren Kriterien steht",
        1: "Ja, sie erwähnen diese Kennzahlen und wir wissen, dass das problematisch ist",
        2: "Wir haben unsere Kriterien geprüft und identifiziert, wo diese auftauchen",
        3: "Wir haben überarbeitete Kriterien entworfen, die diese Kennzahlen entfernen",
        4: "Die meisten Kriterien wurden aktualisiert, um diese Kennzahlen zu entfernen",
        5: "Kein Bewertungsverfahren verweist auf JIF, h-index oder Quartile",
      },
    },
    q3b: {
      text: "Verlassen sich Bewertende in der Praxis weiterhin auf das Prestige von Zeitschriften oder bibliometrische Indikatoren, wenn sie Kandidatinnen und Kandidaten beurteilen, selbst wenn die Kriterien dies nicht verlangen?",
      answers: {
        0: "Wir haben keine Ahnung, was Bewertende tatsächlich tun",
        1: "Wahrscheinlich ja, aber wir haben es nicht untersucht",
        2: "Wir befragen Bewertende, um die aktuelle Praxis zu verstehen",
        3: "Wir haben Belege für die Lücke und einen Plan, sie anzugehen",
        4: "Wir bieten Anleitung und überwachen den Missbrauch von Kennzahlen",
        5: "Die Kultur hat sich gewandelt — Bewertende nutzen routinemäßig qualitative Beurteilung",
      },
    },
    q4a: {
      text: "Verwendet Ihre Einrichtung Hochschul-Rankings (Shanghai, THE, QS) in der Forschungsbewertung oder als Qualitätssurrogate?",
      answers: {
        0: "Wir haben darüber nicht nachgedacht",
        1: "Wahrscheinlich tun wir das, insbesondere bei internationalen Partnerschaften",
        2: "Wir überprüfen, wo Rankings unsere Entscheidungen beeinflussen",
        3: "Wir haben eine Richtlinie, die Bewertung von Rankings zu entkoppeln",
        4: "Rankings werden in der Bewertung nicht verwendet, können aber in der Kommunikation auftauchen",
        5: "Rankings spielen keine Rolle bei Bewertung, Partnerschaften oder Kommunikation",
      },
    },
    q5b: {
      text: "Verfügt Ihre Einrichtung über eine formale Governance-Struktur (Ausschuss, Arbeitsgruppe, Lenkungsgremium), die der Reform der Forschungsbewertung gewidmet ist?",
      answers: {
        0: "Es gibt keine eigens dafür vorgesehene Struktur",
        1: "Es gibt eine einzelne treibende Person, aber keine formale Struktur",
        2: "Wir bilden eine Arbeitsgruppe oder Task Force",
        3: "Es besteht ein formaler Ausschuss mit klarem Mandat und Mitgliedschaft",
        4: "Der Ausschuss ist aktiv, tagt regelmäßig und treibt Veränderungen voran",
        5: "Governance ist verankert: Ausschuss, Budget, Berichtswege und Beteiligung der Forschenden",
      },
    },
    q5a: {
      text: "Hat Ihre Einrichtung konkrete Mittel, Personal oder Zeit für die Reform der Forschungsbewertung bereitgestellt?",
      answers: {
        0: "Es wurden keine Ressourcen in Betracht gezogen",
        1: "Wir wissen, dass Ressourcen nötig sind, aber es sind keine zugewiesen",
        2: "Wir schätzen die benötigten Ressourcen ab",
        3: "Budget und Personal wurden vorgemerkt",
        4: "Ressourcen werden eingesetzt (Personal eingestellt, Budget in Verwendung)",
        5: "Dauerhafte Finanzierung und ein eigenes Team sind vorhanden",
      },
    },
    q6a: {
      text: "Hat Ihre Einrichtung eine systematische Prüfung aller ihrer aktuellen Bewertungskriterien und -verfahren durchgeführt?",
      answers: {
        0: "Wir haben unsere Kriterien nie geprüft",
        1: "Wir wissen, dass wir prüfen sollten, haben aber nicht begonnen",
        2: "Eine Prüfung ist im Gange oder wird konzipiert",
        3: "Die Prüfung ist abgeschlossen und Lücken wurden identifiziert",
        4: "Neue Kriterien werden auf Grundlage der Prüfung umgesetzt",
        5: "Die Kriterien werden regelmäßig und zyklisch überprüft und aktualisiert",
      },
    },
    q6b: {
      text: "Wurden neue Bewertungsvorlagen (z. B. narrativer Lebenslauf, Portfolio, Wirkungsbericht) entwickelt und erprobt?",
      answers: {
        0: "Wir haben keine neuen Vorlagen",
        1: "Uns sind Modelle narrativer Lebensläufe bekannt, aber wir haben keine eigenen erstellt",
        2: "Wir untersuchen Vorlagen anderer Einrichtungen",
        3: "Wir haben neue Vorlagen entworfen und erproben sie",
        4: "Vorlagen werden verwendet und auf Grundlage von Rückmeldungen verfeinert",
        5: "Vorlagen sind etabliert, werden regelmäßig aktualisiert und breit genutzt",
      },
    },
    q6c: {
      text: "Sind Ihre Bewertungskriterien nach Karrierestufe (Promotion, Postdoc, Tenure-Track, Senior) und nach Verfahrenstyp (Einstellung, Beförderung, Förderung, Einheitsbewertung) differenziert?",
      answers: {
        0: "Wir verwenden für alles dieselben Kriterien",
        1: "Wir wissen, dass Differenzierung nötig ist, haben aber nicht begonnen",
        2: "Wir erfassen, welche Verfahren eigene Kriterien benötigen",
        3: "Wir haben differenzierte Kriterien für zentrale Verfahren entworfen",
        4: "Differenzierte Kriterien werden für die meisten Karrierestufen und Verfahren verwendet",
        5: "Alle Verfahren haben maßgeschneiderte Kriterien, die je Karrierestufe regelmäßig überprüft werden",
      },
    },
    q6d: {
      text: "Verfügt Ihre Einrichtung über die IT-Infrastruktur (CRIS, Repositorium, ORCID-Integration), die nötig ist, um vielfältige Forschungsbeiträge zu erfassen und zu bewerten?",
      answers: {
        0: "Wir haben keine Systeme zur Erfassung von Forschungsbeiträgen",
        1: "Wir haben grundlegende Systeme, die aber nur Publikationen erfassen",
        2: "Wir prüfen CRIS- oder Repositoriums-Upgrades, um vielfältige Forschungsleistungen zu erfassen",
        3: "Wir haben IT-Upgrades geplant (CRIS, ORCID, Datenrepositorium)",
        4: "Systeme sind vorhanden und erfassen vielfältige Forschungsleistungen (Daten, Software, Mentoring)",
        5: "Integrierte Infrastruktur fließt direkt in die Bewertungsverfahren ein",
      },
    },
    q7a: {
      text: "Kommuniziert Ihre Einrichtung aktiv über die Reform der Forschungsbewertung gegenüber ihrer Forschungsgemeinschaft?",
      answers: {
        0: "Es hat keine Kommunikation stattgefunden",
        1: "Nur wenige Personen wissen von CoARA/DORA",
        2: "Wir planen Informationsveranstaltungen oder Workshops",
        3: "Eine Sensibilisierungskampagne ist konzipiert und startbereit",
        4: "Workshops und Infoveranstaltungen werden durchgeführt",
        5: "Die Forschungsgemeinschaft ist gut informiert und engagiert",
      },
    },
    q7b: {
      text: "Behandelt Ihre Einrichtung Forschungsethik, Integrität und Predatory Publishing als Teil ihrer Kommunikation und Schulung zur Bewertungsreform?",
      answers: {
        0: "Ethik und Integrität sind nicht mit der Bewertungsreform verknüpft",
        1: "Wir wissen, dass sie zusammenhängen, haben sie aber nicht integriert",
        2: "Wir planen, Ethik/Integrität in unsere Reformkommunikation aufzunehmen",
        3: "Materialien zu Ethik, Integrität und Predatory Journals werden entwickelt",
        4: "Die Schulung umfasst Module zu Ethik/Integrität neben der Bewertungsreform",
        5: "Ethik, Integrität und verantwortungsvolles Publizieren sind vollständig in die Reformschulung integriert",
      },
    },
    q8a: {
      text: "Beteiligt sich Ihre Einrichtung an thematischen CoARA-Arbeitsgruppen oder Action Clusters (SSH, EMCRs, Peer Review, RMI, OI4RRA, ERIP usw.)?",
      answers: {
        0: "Wir sind in keiner thematischen Gruppe beteiligt",
        1: "Wir kennen die Gruppen, sind aber nicht beigetreten",
        2: "Wir prüfen, welchen Gruppen wir beitreten sollen",
        3: "Wir sind beigetreten und planen unseren Beitrag",
        4: "Wir beteiligen uns aktiv und tragen bei",
        5: "Wir leiten thematische Gruppen mit und teilen unsere Erfahrung umfassend",
      },
    },
    q9a: {
      text: "Hat Ihre Einrichtung einen Fortschrittsbericht über ihren Weg der Bewertungsreform veröffentlicht oder geplant?",
      answers: {
        0: "Wir haben eine Berichterstattung nicht in Betracht gezogen",
        1: "Wir wissen, dass wir berichten sollten, haben aber noch nichts zu berichten",
        2: "Wir legen fest, was zu messen und wie zu berichten ist",
        3: "Ein Berichtsrahmen liegt bereit und die Datenerhebung hat begonnen",
        4: "Ein Fortschrittsbericht wurde veröffentlicht oder eingereicht",
        5: "Regelmäßige Fortschrittsberichte werden in einem festgelegten Zyklus veröffentlicht",
      },
    },
    q10a: {
      text: "Trägt Ihre Einrichtung Daten bei oder beteiligt sich an kollektiven Bewertungen des Reformfortschritts über die Unterzeichnenden hinweg?",
      answers: {
        0: "Wir haben uns nicht an kollektiver Bewertung beteiligt",
        1: "Wir kennen kollektive Verfahren, beteiligen uns aber nicht",
        2: "Wir bereiten uns auf die Teilnahme am nächsten Überprüfungszyklus vor",
        3: "Wir haben Daten für die kollektive Bewertung beigetragen",
        4: "Wir beteiligen uns aktiv und teilen Benchmarking-Daten",
        5: "Wir leiten Initiativen zur kollektiven Bewertung und veröffentlichen die Ergebnisse offen",
      },
    },
    q1e: {
      text: "Schützt Ihre Bewertung aktiv Forschung, die in lokalen/nicht-dominanten Sprachen und zu lokal relevanten Themen veröffentlicht wird, vor Benachteiligung?",
      answers: {
        0: "Sprache wird in der Bewertung nicht berücksichtigt",
        1: "Wir wissen, dass Arbeiten in lokalen Sprachen benachteiligt werden, haben aber nicht gehandelt",
        2: "Wir prüfen, wie Sprachverzerrung unsere Kriterien beeinflusst",
        3: "Schutzmaßnahmen sind entworfen (z. B. Gewichtung für Forschungsleistungen in lokalen Sprachen)",
        4: "Schutzmaßnahmen werden in einigen Bewertungsverfahren angewendet",
        5: "Mehrsprachiger Schutz ist systematisch (im Einklang mit der Helsinki Initiative)",
      },
    },
    q1f: {
      text: "Wendet Ihre Einrichtung die CARE-Prinzipien (Collective benefit, Authority to control, Responsibility, Ethics) an, wenn sie mit indigenen oder gemeinschaftlich verwalteten Daten arbeitet?",
      answers: {
        0: "Die CARE-Prinzipien sind nicht Teil unserer Datenrichtlinien",
        1: "Uns ist CARE bekannt, aber wir wenden es nicht an",
        2: "Wir erfassen, wo CARE in unserer Forschung anzuwenden ist",
        3: "CARE ist in Daten-Governance-Dokumente eingearbeitet",
        4: "CARE wird in einigen Projekten und Bewertungen angewendet",
        5: "CARE ist neben FAIR als Standard-Datenrichtlinie verankert",
      },
    },
    q8b: {
      text: "Engagiert sich Ihre Einrichtung in einem regionalen Forum oder einem nationalen Kapitel (CoARA National Chapters, IRAF, AFRA, AOSP usw.)?",
      answers: {
        0: "Kein Engagement in regionalen Foren",
        1: "Uns ist bekannt, dass Foren existieren, wir sind aber keine Mitglieder",
        2: "Wir prüfen, welches Forum am besten zu unserem Kontext passt",
        3: "Wir sind beigetreten und tragen gelegentlich bei",
        4: "Wir beteiligen uns aktiv und teilen unsere Erfahrung",
        5: "Wir helfen, regionale Foren / Kapitel zu leiten oder mitzubegründen",
      },
    },
    q10b: {
      text: "Dokumentiert Ihre Einrichtung Ausnahmen von der Offenheit nach dem Grundsatz „so offen wie möglich, so geschlossen wie nötig“ (zeitlich begrenzt und überprüft)?",
      answers: {
        0: "Ausnahmen von der Offenheit werden nicht dokumentiert",
        1: "Wir wissen, dass wir Ausnahmen dokumentieren sollten",
        2: "Wir entwerfen eine Dokumentationsvorlage",
        3: "Die Dokumentation von Ausnahmen ist in neuen Projekten erforderlich",
        4: "Ausnahmen werden dokumentiert und periodisch überprüft",
        5: "Alle Ausnahmen sind zeitlich begrenzt, protokolliert und geprüft",
      },
    },
  },

  commitments: {
    diversity: {
      title: "Vielfalt der Beiträge anerkennen",
      text: "Die Vielfalt der Tätigkeiten, Praktiken und Beiträge anerkennen, die Qualität und Wirkung von Forschung maximieren — einschließlich, aber nicht beschränkt auf: hochwertige Forschung (von der Grundlagen- bis zur translationalen Forschung), Lehre, Mentoring, Betreuung, Leitung, Unternehmertum, Wissensmobilisierung, Forschungsmanagement, Innovation, öffentlich-private Zusammenarbeit, Bürgerbeteiligung und Open-Science-Praktiken.",
      inPractice: [
        "Erweitern, was in der Bewertung „zählt“, über Publikationen hinaus",
        "Datensätze, Software, Patente, Mentoring, Öffentlichkeitsarbeit in Bewertungskriterien einbeziehen",
        "Teambeiträge und Leitungsrollen wertschätzen",
        "Open-Science-Praktiken anerkennen (Datenteilung, Präregistrierung, offenes Peer Review)",
      ],
    },
    qualitative: {
      title: "Bewertung auf qualitative Beurteilung stützen",
      text: "Die Bewertung von Forschung in erster Linie auf qualitative Beurteilung stützen, für die das Peer Review zentral ist, unterstützt durch einen verantwortungsvollen Einsatz quantitativer Indikatoren. Dies bedeutet, unangemessene Verwendungen zeitschriften- und publikationsbasierter Kennzahlen aufzugeben, insbesondere des Journal Impact Factor (JIF), um einzelne Forschende zu bewerten oder Einstellungs- und Förderentscheidungen zu treffen.",
      inPractice: [
        "JIF, h-index und Zeitschriften-Quartile aus Einstellungs-/Beförderungskriterien streichen",
        "Bewertungsformulare neu gestalten, um narrative und qualitative Belege hervorzuheben",
        "Bewertungsausschüsse im verantwortungsvollen Umgang mit Kennzahlen schulen",
        "Narrative Lebensläufe oder portfoliobasierte Bewertung einführen",
      ],
    },
    "no-metrics": {
      title: "Unangemessene zeitschriftenbasierte Kennzahlen aufgeben",
      text: "Aufhören, zeitschriftenbasierte Kennzahlen wie den Journal Impact Factor und den h-index als Surrogatindikatoren für die Qualität einzelner Forschungsleistungen oder einzelner Forschender bei Einstellungs-, Beförderungs- und Förderentscheidungen zu verwenden.",
      inPractice: [
        "Alle Bewertungskriterien auf Verweise auf JIF, h-index, Quartile prüfen",
        "Kennzahlen-Schwellenwerte aus Stellenausschreibungen und Beförderungsrichtlinien entfernen",
        "Quantitative Surrogate durch inhaltsbasierte Bewertung ersetzen",
        "Die Änderung der Forschungsgemeinschaft kommunizieren",
      ],
    },
    "no-rankings": {
      title: "Rankings in der Forschungsbewertung vermeiden",
      text: "Die Verwendung von Rankings von Hochschulen und Forschungseinrichtungen in Verfahren der Forschungsbewertung vermeiden.",
      inPractice: [
        "Keine Shanghai-/THE-/QS-Rankings als Qualitätssurrogat für Forschende verwenden",
        "Verweise auf institutionelle Rankings aus den Bewertungskriterien entfernen",
        "Die Qualität von Zusammenarbeit nach Inhalt bewerten, nicht nach dem Prestige der Partner",
      ],
    },
    resources: {
      title: "Ressourcen für die Reform bereitstellen",
      text: "Die für die Reform der Forschungsbewertungspraktiken erforderlichen Ressourcen bereitstellen, einschließlich Finanzierung, Schulung, Infrastruktur und Personalzeit.",
      inPractice: [
        "Budget für die Bewertungsreform bereitstellen (Schulung, Werkzeuge, Personal)",
        "Eigenes Personal oder einen Ausschuss zur Reformkoordination benennen",
        "Geschützte Zeit für Mitglieder von Bewertungsausschüssen vorsehen",
        "In Infrastruktur zur Erfassung vielfältiger Forschungsleistungen investieren",
      ],
    },
    "review-criteria": {
      title: "Bewertungskriterien, -werkzeuge und -verfahren überprüfen und weiterentwickeln",
      text: "Kriterien, Werkzeuge und Verfahren für die Forschungsbewertung unter Einbindung der Forschenden überprüfen und weiterentwickeln und dabei Interoperabilität sowie kontextangepasste Ansätze auf allen Karrierestufen fördern.",
      subCommitments: {
        "6.1": "Für Einheiten und Einrichtungen: Kriterien unter Einbindung der Forschenden entwickeln und die Interoperabilität zwischen Systemen fördern",
        "6.2": "Für Projekte und Forschende: kontextangepasste Bewertungsansätze auf allen Karrierestufen schaffen",
      },
      inPractice: [
        "Aktuelle Bewertungskriterien über alle Verfahren hinweg prüfen",
        "Bewertungsrubriken für Einstellung, Beförderung, Tenure und interne Förderung neu gestalten",
        "Neue Vorlagen erstellen (narrativer Lebenslauf, Portfolio, Wirkungsbericht)",
        "Forschende in die Gestaltung der Kriterien einbinden (nicht nur top-down)",
        "Kriterien an die Karrierestufe anpassen (Early-Career vs. Senior)",
        "Neue Kriterien erproben und auf Grundlage von Rückmeldungen anpassen",
      ],
    },
    awareness: {
      title: "Sensibilisieren und Anleitung bieten",
      text: "Für die Reform der Forschungsbewertung sensibilisieren und transparente Kommunikation, Anleitung und Schulung zu Bewertungskriterien, -verfahren und deren verantwortungsvoller Nutzung bereitstellen.",
      inPractice: [
        "Workshops und Infoveranstaltungen zur reformierten Bewertung durchführen",
        "Bewertungskriterien offen und zugänglich veröffentlichen",
        "Leitfäden für Bewertende und Bewertete erstellen",
        "FAQs und Kommunikationsmaterialien entwickeln",
      ],
    },
    exchange: {
      title: "Praktiken und Erfahrungen austauschen",
      text: "Praktiken und Erfahrungen austauschen, um gegenseitiges Lernen innerhalb von und zwischen unterzeichnenden Organisationen zu ermöglichen, und dabei anerkennen, dass verschiedene Organisationen an unterschiedlichen Punkten des Weges stehen.",
      inPractice: [
        "An CoARA Action Clusters und Arbeitsgruppen teilnehmen",
        "Gute Praktiken mit Partnereinrichtungen teilen",
        "Workshops zur Bewertungsreform besuchen oder ausrichten",
        "Berichte über Umsetzungserfahrungen veröffentlichen",
      ],
    },
    communicate: {
      title: "Fortschritt kommunizieren",
      text: "Den Fortschritt bei der Einhaltung der Prinzipien und der Umsetzung der Verpflichtungen kommunizieren, in erster Linie durch öffentlich geteilte Selbsteinschätzungen auf Vertrauensbasis.",
      inPractice: [
        "Regelmäßige Fortschrittsberichte veröffentlichen (alle 2–3 Jahre)",
        "Selbsteinschätzungen öffentlich teilen und sich am gegenseitigen Lernen mit anderen Unterzeichnenden beteiligen",
        "Kennzahlen zur Umsetzung teilen (% reformierter Kriterien, geschulte Bewertende usw.)",
        "Transparent über Herausforderungen und Rückschläge sein",
      ],
    },
    "collective-eval": {
      title: "Auf Grundlage von Evidenz und offenen Daten bewerten",
      text: "Rigorose Methoden anwenden, um zu beurteilen, ob reformierte Praktiken die gewünschten Ergebnisse erzielen. Die gemeinschaftliche Kontrolle über Bewertungsdaten sicherstellen, gestützt auf Evidenz und offene Daten, unter Wahrung von Transparenz und Reproduzierbarkeit.",
      inPractice: [
        "Daten für die ökosystemweite Fortschrittsbeobachtung beitragen",
        "Offene Daten und Infrastruktur für die Bewertung nutzen (keine proprietären Systeme)",
        "An kollektiven Bewertungen mit anderen Unterzeichnenden teilnehmen",
        "Anonymisierte Bewertungsdaten für Benchmarking teilen",
        "Die Entwicklung evidenzbasierter Indikatoren des Reformfortschritts unterstützen",
      ],
    },
  },

  actions: [
    {
      title: "Aktuell anerkannte Leistungstypen erfassen",
      description: "Erstellen Sie ein Verzeichnis aller Leistungstypen, die derzeit in Ihren Bewertungskriterien anerkannt werden (Publikationen, Daten, Software, Patente usw.). Identifizieren Sie Lücken.",
      planText: "Wir werden ein Verzeichnis aller Leistungstypen erstellen, die derzeit in unseren Bewertungskriterien anerkannt werden (Publikationen, Daten, Software, Patente usw.), und Lücken identifizieren.",
    },
    {
      title: "Erweiterte Leistungstypologie entwerfen",
      description: "Entwickeln Sie eine umfassende Typologie von Forschungsbeiträgen: begutachtete Artikel, Datensätze, Software, Code, Protokolle, Lehrmaterialien, Mentoring, Policy Briefs, Medien, Citizen Science usw.",
      planText: "Wir werden eine umfassende Typologie von Forschungsbeiträgen entwickeln — begutachtete Artikel, Datensätze, Software, Code, Protokolle, Lehrmaterialien, Mentoring, Policy Briefs, Medien und Citizen Science.",
      examples: ["Netherlands Recognition & Rewards programme", "UK REF impact case studies"],
    },
    {
      title: "Vielfältige Forschungsleistungen in allen Bewertungsverfahren verankern",
      description: "Überarbeiten Sie alle Kriterien für Einstellung, Beförderung, Tenure und Förderung, um vielfältige Leistungstypen ausdrücklich einzubeziehen und zu gewichten. Stellen Sie sicher, dass Bewertende darin geschult sind, sie zu beurteilen.",
      planText: "Wir werden alle Kriterien für Einstellung, Beförderung, Tenure und Förderung überarbeiten, um vielfältige Leistungstypen ausdrücklich einzubeziehen und zu gewichten, und sicherstellen, dass Bewertende darin geschult sind, sie zu beurteilen.",
    },
    {
      title: "Modelle narrativer Lebensläufe untersuchen",
      description: "Sichten Sie Vorlagen für narrative Lebensläufe von Einrichtungen, die sie übernommen haben: UKRI Narrative CV, NWO (Niederlande), Schweizerischer Nationalfonds.",
      planText: "Wir werden Vorlagen für narrative Lebensläufe von Einrichtungen sichten, die sie übernommen haben (UKRI, NWO, Schweizerischer Nationalfonds), um ein für unseren Kontext geeignetes Modell auszuwählen.",
      examples: ["UKRI Résumé for Research and Innovation", "NWO narrative sections", "Swiss NSF academic profile"],
    },
    {
      title: "Einen narrativen Lebenslauf entwerfen und erproben",
      description: "Passen Sie eine Vorlage für narrative Lebensläufe an Ihren institutionellen Kontext an. Erproben Sie sie in ein oder zwei Bewertungsrunden (z. B. interne Förderungen, ein Beförderungsausschuss). Sammeln Sie Rückmeldungen von Bewertenden und Kandidatinnen und Kandidaten.",
      planText: "Wir werden eine Vorlage für narrative Lebensläufe an unseren institutionellen Kontext anpassen, sie in ein oder zwei Bewertungsrunden erproben und Rückmeldungen von Bewertenden sowie Kandidatinnen und Kandidaten sammeln.",
    },
    {
      title: "Bewertungsausschüsse schulen",
      description: "Entwickeln und liefern Sie Schulungen für Bewertungsausschüsse zu qualitativer Bewertung, verantwortungsvollem Umgang mit Kennzahlen und impliziten Vorurteilen. Beziehen Sie praktische Übungen mit Beispielportfolios ein.",
      planText: "Wir werden Schulungen für Bewertungsausschüsse zu qualitativer Bewertung, verantwortungsvollem Umgang mit Kennzahlen und impliziten Vorurteilen entwickeln und durchführen, einschließlich praktischer Übungen mit Beispielportfolios.",
    },
    {
      title: "Qualitative Bewertung institutionalisieren",
      description: "Machen Sie narrative Lebensläufe und qualitative Bewertung zum Standard über alle Verfahren hinweg. Etablieren Sie regelmäßige Schulungen für Bewertende. Überwachen Sie das schleichende Wiederauftauchen von Kennzahlen.",
      planText: "Wir werden narrative Lebensläufe und qualitative Bewertung zum Standard über alle unsere Verfahren hinweg machen, regelmäßige Schulungen für Bewertende etablieren und das schleichende Wiederauftauchen von Kennzahlen überwachen.",
    },
    {
      title: "Kriterien auf Kennzahlen-Verweise prüfen",
      description: "Durchsuchen Sie alle Stellenausschreibungen, Beförderungsrichtlinien, Förderausschreibungen und internen Richtlinien nach Verweisen auf JIF, h-index, Quartile oder „High-Impact-Journals“. Dokumentieren Sie jeden Fall.",
      planText: "Wir werden alle Stellenausschreibungen, Beförderungsrichtlinien, Förderausschreibungen und internen Richtlinien nach Verweisen auf JIF, h-index, Quartile oder „High-Impact-Journals“ durchsuchen und jeden Fall dokumentieren.",
    },
    {
      title: "Kennzahlen-Surrogate aus den Kriterien entfernen",
      description: "Überarbeiten Sie alle identifizierten Dokumente, um kennzahlenbasierte Kriterien zu entfernen oder zu ersetzen. Ersetzen Sie „in Q1-Journals publizieren“ durch „Wirkung anhand vielfältiger Forschungsleistungen nachweisen“.",
      planText: "Wir werden alle identifizierten Dokumente überarbeiten, um kennzahlenbasierte Kriterien zu entfernen oder zu ersetzen, und Formulierungen wie „in Q1-Journals publizieren“ durch „Wirkung anhand vielfältiger Forschungsleistungen nachweisen“ ersetzen.",
    },
    {
      title: "Schleichendes Wiederauftauchen von Kennzahlen überwachen",
      description: "Etablieren Sie ein periodisches Überprüfungsverfahren, um sicherzustellen, dass entfernte Kennzahlen nicht wieder einfließen. Befragen Sie Bewertende jährlich zu ihrer tatsächlichen Praxis.",
      planText: "Wir werden eine periodische Überprüfung etablieren, um sicherzustellen, dass entfernte Kennzahlen nicht wieder einfließen, und Bewertende jährlich zu ihrer tatsächlichen Praxis befragen.",
    },
    {
      title: "Identifizieren, wo Rankings verwendet werden",
      description: "Sichten Sie institutionelle Kommunikation, Partnerschaftskriterien und Bewertungsverfahren auf Verweise auf Shanghai, THE, QS oder andere Rankings.",
      planText: "Wir werden institutionelle Kommunikation, Partnerschaftskriterien und Bewertungsverfahren auf Verweise auf Shanghai, THE, QS oder andere Rankings sichten.",
    },
    {
      title: "Eine rankingfreie Partnerschaftsrichtlinie entwickeln",
      description: "Erstellen Sie Kriterien für internationale Partnerschaften auf Grundlage von Forschungsqualität, strategischer Passung und gegenseitigem Nutzen statt institutioneller Rankings.",
      planText: "Wir werden Kriterien für internationale Partnerschaften erstellen, die auf Forschungsqualität, strategischer Passung und gegenseitigem Nutzen statt auf institutionellen Rankings beruhen.",
    },
    {
      title: "Ressourcenbedarf abschätzen",
      description: "Berechnen Sie das Budget, die VZÄ und die Zeit, die für die Bewertungsreform erforderlich sind: Schulungsentwicklung, Ausschusszeit, Überarbeitung von Richtlinien, Infrastruktur, Monitoring.",
      planText: "Wir werden das Budget, den Personalaufwand und die Infrastruktur berechnen, die für die Bewertungsreform erforderlich sind: Schulungsentwicklung, Ausschusszeit, Überarbeitung von Richtlinien und Monitoring.",
    },
    {
      title: "Eigene Finanzierung und Personal sichern",
      description: "Beantragen Sie eine Budgetzuweisung bei der institutionellen Leitung. Benennen Sie eine Reformkoordination oder einen Ausschuss mit geschützter Zeit und klarem Mandat.",
      planText: "Wir werden eine eigene Budgetzuweisung sichern und eine Reformkoordination oder einen Ausschuss mit geschützter Zeit und klarem Mandat benennen.",
    },
    {
      title: "Umfassende Kriterienprüfung durchführen",
      description: "Überprüfen Sie systematisch ALLE Bewertungskriterien: Einstellung (alle Ebenen), Beförderung, Tenure, interne Förderungen, Sabbaticals, Auszeichnungen, Fachbereichsbewertungen. Verwenden Sie eine standardisierte Checkliste.",
      planText: "Wir werden systematisch alle Bewertungskriterien überprüfen — Einstellung auf allen Ebenen, Beförderung, Tenure, interne Förderungen, Sabbaticals, Auszeichnungen und Fachbereichsbewertungen — anhand einer standardisierten Checkliste.",
    },
    {
      title: "Bewertungsrubriken neu gestalten",
      description: "Erstellen Sie auf Grundlage der Prüfungsergebnisse neue Rubriken, die vielfältige Beiträge, qualitative Belege und die Ausrichtung am Auftrag der Einrichtung betonen. Erproben und anpassen.",
      planText: "Auf Grundlage der Prüfungsergebnisse werden wir neue Rubriken erstellen, die vielfältige Beiträge, qualitative Belege und die Ausrichtung an unserem institutionellen Auftrag betonen, und sie schrittweise erproben und anpassen.",
    },
    {
      title: "Periodischen Zyklus zur Kriterienüberprüfung etablieren",
      description: "Legen Sie einen festen Zeitplan fest (z. B. alle 3 Jahre) zur Überprüfung und Aktualisierung aller Bewertungskriterien. Beziehen Sie in jede Überprüfung eine Konsultation der Interessengruppen ein.",
      planText: "Wir werden einen festen Zeitplan (z. B. alle 3 Jahre) für die Überprüfung und Aktualisierung aller Bewertungskriterien festlegen, mit einer Konsultation der Interessengruppen in jedem Zyklus.",
    },
    {
      title: "Grundlegende Informationsmaterialien erstellen",
      description: "Entwickeln Sie ein einseitiges Informationsblatt, eine FAQ und ein kurzes Video, das erklärt, was CoARA ist, warum Ihre Einrichtung unterzeichnet hat und was sich ändern wird. Auf der institutionellen Website veröffentlichen.",
      planText: "Wir werden ein einseitiges Informationsblatt, eine FAQ und ein kurzes Video auf der institutionellen Website veröffentlichen, die erklären, was CoARA ist, warum wir unterzeichnet haben und was sich ändern wird.",
    },
    {
      title: "Workshops und Town Halls durchführen",
      description: "Organisieren Sie interaktive Workshops für Forschende, Bewertende und Verwaltung. Beziehen Sie praktische Übungen ein (z. B. „Bewerten Sie diese Kandidatin ohne Kennzahlen“). Halten Sie Q&A-Town-Halls ab.",
      planText: "Wir werden interaktive Workshops für Forschende, Bewertende und Verwaltung organisieren — einschließlich praktischer Übungen wie der kennzahlenfreien Bewertung von Kandidatinnen und Kandidaten — ergänzt durch offene Q&A-Town-Halls.",
    },
    {
      title: "Thematischen CoARA-Arbeitsgruppen und Action Clusters beitreten",
      description: "Unterzeichnen Sie die CoARA-Vereinbarung (falls noch nicht geschehen) und wählen Sie 1–2 thematische Arbeitsgruppen oder Action Clusters, die zu Ihren Prioritäten passen (SSH, EMCRs, Peer Review, RMI, OI4RRA, ERIP usw.). Für geografische Foren (CoARA National Chapters, IRAF, AFRA, AOSP) siehe die eigene Maßnahme unten.",
      planText: "Wir werden ein oder zwei thematischen CoARA-Arbeitsgruppen oder Action Clusters beitreten, die zu unseren Prioritäten passen (etwa SSH, EMCRs, Peer Review, RMI, OI4RRA oder ERIP), und uns an ihrem Austausch beteiligen.",
      examples: ["WG SSH", "WG EMCRs", "WG Peer Review", "WG OI4RRA", "WG ERIP"],
    },
    {
      title: "Peer-Learning-Aktivitäten mitorganisieren",
      description: "Schließen Sie sich mit anderen Unterzeichnenden zusammen, um gemeinsame Workshops, Webinare oder Besuche vor Ort zu organisieren. Teilen Sie Ihre Umsetzungserfahrung — sowohl Erfolge als auch Misserfolge.",
      planText: "Wir werden uns mit anderen Unterzeichnenden zusammenschließen, um gemeinsame Workshops, Webinare oder Besuche vor Ort zu organisieren, und unsere Umsetzungserfahrung teilen — Erfolge wie Misserfolge.",
    },
    {
      title: "Fortschrittsindikatoren definieren",
      description: "Entscheiden Sie, was gemessen werden soll: % der reformierten Kriterien, Zahl der geschulten Bewertenden, Übernahmequote narrativer Lebensläufe, Zufriedenheit der Interessengruppen usw.",
      planText: "Wir werden die Indikatoren definieren, die wir verfolgen: den Anteil reformierter Kriterien, die Zahl der geschulten Bewertenden, die Übernahmequote narrativer Lebensläufe und die Zufriedenheit der Interessengruppen.",
    },
    {
      title: "Einen Fortschrittsbericht veröffentlichen",
      description: "Schreiben und veröffentlichen Sie Ihren ersten Fortschrittsbericht. Beziehen Sie ein: Ausgangslage, ergriffene Maßnahmen, Indikatoren für Veränderung, bewältigte Herausforderungen, nächste Schritte. Öffentlich teilen.",
      planText: "Wir werden unseren ersten Fortschrittsbericht schreiben und öffentlich teilen; er umfasst Ausgangslage, ergriffene Maßnahmen, Indikatoren für Veränderung, bewältigte Herausforderungen und nächste Schritte.",
    },
    {
      title: "Die öffentliche Selbsteinschätzung vorbereiten",
      description: "Machen Sie sich mit dem vertrauensbasierten Follow-up von CoARA vertraut: Fortschritte werden in erster Linie durch öffentlich geteilte Selbsteinschätzungen kommuniziert, mit einem Aktionsplan innerhalb eines Jahres nach der Unterzeichnung und einem Zwischenpunkt nach fünf Jahren. Sammeln Sie die benötigten Daten: Aktionsplan, Fortschrittsindikatoren, Ergebnisse der Selbsteinschätzung.",
      planText: "Wir werden unsere öffentliche Selbsteinschätzung im Einklang mit dem vertrauensbasierten Follow-up von CoARA vorbereiten und die dafür erforderlichen Daten sammeln: Aktionsplan, Fortschrittsindikatoren und Ergebnisse der Selbsteinschätzung.",
    },
    {
      title: "Benchmarking-Studien leiten oder zu ihnen beitragen",
      description: "Teilen Sie anonymisierte Bewertungsdaten mit Partnereinrichtungen. Beteiligen Sie sich an vergleichenden Studien zum Reformfortschritt über die Unterzeichnenden hinweg oder initiieren Sie solche.",
      planText: "Wir werden anonymisierte Bewertungsdaten mit Partnereinrichtungen teilen und uns an vergleichenden Studien zum Reformfortschritt über die Unterzeichnenden hinweg beteiligen — oder solche initiieren.",
    },
    {
      title: "Bewertungsverfahren auf EDI-Lücken prüfen",
      description: "Prüfen Sie Bewertungskriterien und die Zusammensetzung von Ausschüssen auf Geschlechterverzerrung, den Umgang mit Karriereunterbrechungen (Elternzeit, Krankheit, Behinderung) und Vielfalt. Identifizieren Sie, wo Verzerrungen die Ergebnisse beeinflussen können.",
      planText: "Wir werden Bewertungskriterien und die Zusammensetzung von Ausschüssen auf Geschlechterverzerrung, den Umgang mit Karriereunterbrechungen (Elternzeit, Krankheit, Behinderung) und Vielfalt prüfen und identifizieren, wo Verzerrungen die Ergebnisse beeinflussen können.",
      examples: ["FRQ unconscious bias training modules", "SDU Gender Equality Plan", "UCLouvain GEDIP 2024-2027"],
    },
    {
      title: "EDI-Leitlinien für Bewertungsausschüsse umsetzen",
      description: "Entwickeln und durchsetzen Sie Leitlinien: verpflichtende Schulung zu unbewussten Vorurteilen für Bewertende, Normalisierung von Anpassungen bei Karriereunterbrechungen, Sicherstellung einer diversen Ausschusszusammensetzung, Einbeziehung von EDI-Selbsteinschätzungsfragebögen.",
      planText: "Wir werden EDI-Leitlinien für Bewertungsausschüsse einführen und durchsetzen: verpflichtende Schulung zu unbewussten Vorurteilen, normalisierte Anpassungen bei Karriereunterbrechungen, diverse Ausschusszusammensetzung und EDI-Selbsteinschätzungsfragebögen.",
      examples: ["FRQ mandatory bias module for all committee members", "SDU Mentoring for Change Programme"],
    },
    {
      title: "Erfassen, wie Open Science in der Bewertung gewürdigt werden könnte",
      description: "Identifizieren Sie, welche Open-Science-Praktiken (FAIR-Daten, Open Access, Präregistrierung, offenes Peer Review, offener Code) für Ihre Einrichtung relevant sind und wie sie in den Bewertungskriterien anerkannt werden könnten.",
      planText: "Wir werden identifizieren, welche Open-Science-Praktiken (FAIR-Daten, Open Access, Präregistrierung, offenes Peer Review, offener Code) für unsere Einrichtung relevant sind und wie sie in den Bewertungskriterien anerkannt werden können.",
      examples: ["SDU Open Science Awards", "Helmholtz FAIR Quality Indicators for data and software"],
    },
    {
      title: "Open Science in die Bewertungskriterien integrieren",
      description: "Fügen Sie Open-Science-Praktiken als positive Kriterien hinzu: Datenteilung, Verfügbarkeit von Code, Präregistrierung, Open-Access-Publizieren. Honorieren Sie Reproduzierbarkeit und Transparenz, nicht nur das Volumen an Forschungsleistungen.",
      planText: "Wir werden Open-Science-Praktiken als positive Bewertungskriterien hinzufügen — Datenteilung, Verfügbarkeit von Code, Präregistrierung, Open-Access-Publizieren — und Reproduzierbarkeit und Transparenz honorieren statt allein das Volumen an Forschungsleistungen.",
      examples: ["AQU Catalunya action A23", "UCM open peer review module in repository", "SDU OADO indicator"],
    },
    {
      title: "Eine eigene Governance-Struktur für die Reform etablieren",
      description: "Schaffen Sie einen formalen Ausschuss oder eine Arbeitsgruppe mit klarem Mandat, multidisziplinärer Mitgliedschaft, Vertretung der Forschenden und Berichtswegen zur institutionellen Leitung. Dies ist die grundlegende Maßnahme, die alle anderen ermöglicht.",
      planText: "Wir werden einen formalen Reformausschuss oder eine Arbeitsgruppe mit klarem Mandat, multidisziplinärer Mitgliedschaft, Vertretung der Forschenden und direkten Berichtswegen zur institutionellen Leitung etablieren.",
      examples: ["UCM CoARA Working Group", "DCU Open Research Steering Group", "Pannonia Scientific Quality Analysis Group"],
    },
    {
      title: "IT-Bereitschaft zur Erfassung vielfältiger Forschungsleistungen bewerten",
      description: "Überprüfen Sie, ob Ihr CRIS (Current Research Information System), Ihr Repositorium oder Ihre HR-Systeme vielfältige Forschungsleistungen erfassen können (Datensätze, Software, Patente, Mentoring, Öffentlichkeitsarbeit). Identifizieren Sie Lücken.",
      planText: "Wir werden überprüfen, ob unser CRIS, unser Repositorium und unsere HR-Systeme vielfältige Forschungsleistungen erfassen können (Datensätze, Software, Patente, Mentoring, Öffentlichkeitsarbeit), und die Lücken identifizieren.",
      examples: ["UPC DRAC system with 35 indicators", "SDU Pure CRIS + Dataverse", "UCM DOCTA repository"],
    },
    {
      title: "Infrastruktur ausbauen, um die reformierte Bewertung zu unterstützen",
      description: "Implementieren oder erweitern Sie ein CRIS, integrieren Sie ORCID, setzen Sie Datenrepositorien ein, verbinden Sie Systeme mit den Bewertungsabläufen. Stellen Sie sicher, dass die Infrastruktur erfasst, was die neuen Kriterien erfordern.",
      planText: "Wir werden unsere Forschungsinformationsinfrastruktur implementieren oder ausbauen — CRIS, ORCID-Integration, Datenrepositorien — und sie mit den Bewertungsabläufen verbinden, damit sie erfasst, was die neuen Kriterien erfordern.",
      examples: ["UPC DRAC feeding into Programa Càtedres evaluation", "Helmholtz automated quality indicator pipelines"],
    },
    {
      title: "Kriterien nach Karrierestufe und Verfahren differenzieren",
      description: "Entwickeln Sie eigene Bewertungskriterien für Promotions-, Postdoc-, Tenure-Track- und Senior-Positionen. Unterscheiden Sie außerdem zwischen Einstellung, Beförderung, internen Förderungen und Einheitsbewertung. Einheitskriterien für alle benachteiligen Early-Career-Forschende.",
      planText: "Wir werden eigene Bewertungskriterien für Promotions-, Postdoc-, Tenure-Track- und Senior-Positionen entwickeln und zwischen Einstellung, Beförderung, internen Förderungen und Einheitsbewertung unterscheiden, damit einheitliche Kriterien Early-Career-Forschende nicht länger benachteiligen.",
      examples: ["UB differentiated review per call type (predoc, postdoc, Serra Hunter, cátedras)", "Eurodoc R1/R2/R3 mapping"],
    },
    {
      title: "Mentoring-Programme für Early-Career-Forschende einrichten",
      description: "Schaffen Sie ein strukturiertes Mentoring, das Early-Career-Forschenden hilft, sich in der reformierten Bewertung zurechtzufinden: wie man ein Portfolio aufbaut, einen narrativen Lebenslauf schreibt, vielfältige Beiträge nachweist. Binden Sie erfahrene Forschende als Mentorinnen und Mentoren ein.",
      planText: "Wir werden ein strukturiertes Mentoring mit erfahrenen Forschenden als Mentorinnen und Mentoren schaffen, das Early-Career-Forschenden hilft, sich in der reformierten Bewertung zurechtzufinden: ein Portfolio aufbauen, einen narrativen Lebenslauf schreiben und vielfältige Beiträge nachweisen.",
      examples: ["SDU Mentoring for Change (130 PhDs/year)", "OGS mentoring initiative", "Pannonia Group of Young Scientists"],
    },
    {
      title: "Forschungsintegrität mit der Bewertungsreform verknüpfen",
      description: "Entwickeln Sie Anleitung zu Predatory Journals, Forschungsethik und verantwortungsvollem Verhalten als Teil der Kommunikation zur Bewertungsreform. Die Qualität der Forschungspraxis sollte gewürdigt werden, nicht nur die Forschungsleistungen.",
      planText: "Wir werden Forschungsintegrität mit der Bewertungsreform verknüpfen und Anleitung zu Predatory Journals, Forschungsethik und verantwortungsvollem Verhalten entwickeln, damit die Qualität der Forschungspraxis neben den Forschungsleistungen gewürdigt wird.",
      examples: ["Pannonia Committee on Research Ethics", "Hong Kong Principles", "LBG Ethics & Diversity Hub"],
    },
    {
      title: "Interne Umfrage zur Wahrnehmung der Bewertung durchführen",
      description: "Befragen Sie Ihre Forschungsgemeinschaft: Welche Kriterien werden ihrer Ansicht nach verwendet vs. welche sollten verwendet werden? Diese Evidenzbasis ist von unschätzbarem Wert, um die Reform zu kalibrieren. Veröffentlichen Sie die Ergebnisse offen.",
      planText: "Wir werden unsere Forschungsgemeinschaft dazu befragen, welche Kriterien ihrer Ansicht nach verwendet werden und welche verwendet werden sollten, und die Ergebnisse offen veröffentlichen — als Evidenzbasis zur Kalibrierung der Reform.",
      examples: ["Helmholtz survey of 1,145 researchers", "UCLouvain 34 interviews with evaluation committees", "UCM planned periodic surveys"],
    },
    {
      title: "Reform auf die Einheits- und Institutionsbewertung ausweiten",
      description: "Die Reform endet nicht bei der individuellen Bewertung. Überprüfen Sie, wie Fachbereiche, Institute und Forschungsgruppen bewertet werden — auch diese Verfahren stützen sich auf Publikationskennzahlen und Rankings. Entwickeln Sie qualitative Alternativen.",
      planText: "Wir werden die Reform über die individuelle Bewertung hinaus ausweiten, überprüfen, wie Fachbereiche, Institute und Forschungsgruppen bewertet werden, und qualitative Alternativen zu Publikationskennzahlen und Rankings entwickeln.",
      examples: ["Helmholtz centre-level KPI review", "LBG periodic institute evaluation by 3 experts", "AQU institutional quality assessment"],
    },
    {
      title: "CARE + FAIR als gepaarte Grundsätze der Daten-Governance übernehmen",
      description: "FAIR allein kann Gemeinschaftsdaten ohne Einwilligung in offene Systeme extrahieren. Paaren Sie FAIR mit CARE (Collective benefit, Authority to control, Responsibility, Ethics) in der institutionellen Datenrichtlinie und den Bewertungskriterien. Besonders tragend, wenn Forschung indigene Völker oder gemeinschaftlich verwaltete Daten betrifft.",
      planText: "Wir werden FAIR mit den CARE-Prinzipien (Collective benefit, Authority to control, Responsibility, Ethics) in unserer Datenrichtlinie und unseren Bewertungskriterien paaren, damit Offenheit niemals die Einwilligung und den kollektiven Nutzen der Gemeinschaften übergeht.",
      examples: ["GIDA CARE Principles", "HGP2 federated GWAS in Jordan", "Allele frequency across Caribbean cohorts via BioVault"],
    },
    {
      title: "Auf Sprachverzerrung prüfen (Helsinki Initiative on Multilingualism)",
      description: "Stellen Sie sicher, dass Forschung in lokalen oder nicht-dominanten Sprachen nicht benachteiligt wird. Überprüfen Sie Kriterien, Ausschusszusammensetzung und konsultierte Datenbanken auf implizite Bevorzugung der englischen Sprache. Die Helsinki Initiative bietet den maßgeblichen Rahmen.",
      planText: "Wir werden Kriterien, Ausschusszusammensetzung und die von uns konsultierten Datenbanken auf implizite Bevorzugung der englischen Sprache überprüfen — im Einklang mit der Helsinki Initiative on Multilingualism —, damit Forschung in lokalen oder nicht-dominanten Sprachen nicht benachteiligt wird.",
      examples: ["AQU Catalunya — Helsinki Initiative adoption", "FRQ 60+ francophone journals funded", "Leiden Manifesto principle 3"],
    },
    {
      title: "Einem regionalen Forum oder nationalen Kapitel beitreten",
      description: "Stimmen Sie sich mit einem regionalen Forum ab (IRAF Indien, AFRA Afrika/AOSP, CoARA National Chapter), statt isoliert zu reformieren. Einseitige Reform in einem kennzahlengetriebenen Ökosystem riskiert, Ihre Forschenden zu benachteiligen; regionale Koordination schützt sie.",
      planText: "Wir werden uns mit einem regionalen Forum oder einem CoARA National Chapter abstimmen, statt isoliert zu reformieren, und unsere Forschenden durch regionale Koordination schützen.",
      examples: ["IRAF inauguration (Dr. Gitanjali Yadav)", "AOSP Governing Council", "CoARA Spain (CRUE/CSIC)"],
    },
    {
      title: "TRUST-Prinzipien bei der Wahl oder dem Ausbau von Repositorien anwenden",
      description: "Nutzen Sie die TRUST-Prinzipien für digitale Repositorien (Transparency, Responsibility, User focus, Sustainability, Technology), um die Infrastruktur zu prüfen, die Ihre Bewertungsbelege trägt. Paaren Sie sie mit FAIR für die Abdeckung der Datenebene.",
      planText: "Wir werden die TRUST-Prinzipien für digitale Repositorien (Transparency, Responsibility, User focus, Sustainability, Technology) anwenden, um die Infrastruktur zu prüfen, die unsere Bewertungsbelege trägt, und sie auf der Datenebene mit FAIR paaren.",
      examples: ["TRUST Principles (Lin et al. 2020)", "OI4RRA Tier 1 Publishing"],
    },
    {
      title: "Ausnahmen von der Offenheit dokumentieren („so offen wie möglich, so geschlossen wie nötig“)",
      description: "Offenheit ist der Standard; Ausnahmen müssen dokumentiert, zeitlich begrenzt, einer Aufsicht unterworfen und periodisch erneut geprüft werden. Dieses Prinzip (aus dem CoARA-ERIP Whitepaper und der Barcelona Declaration) macht geschlossene Daten zur überprüfbaren Ausnahme statt zur stillen Norm.",
      planText: "Wir werden Offenheit zum Standard machen und jede Ausnahme dokumentieren — zeitlich begrenzt, einer Aufsicht unterworfen und periodisch erneut geprüft —, damit geschlossene Daten die überprüfbare Ausnahme statt der stillen Norm sind.",
      examples: ["CoARA-ERIP Whitepaper (2025)", "UNESCO Recommendation on Open Science"],
    },
    {
      title: "Ihren Bewertungs-Stack an der 4-Schichten-Architektur von OI4RRA ausrichten",
      description: "Die OI4RRA-Arbeitsgruppe von CoARA definiert eine 4-Schichten-Architektur: Tier 0 Foundation (PIDs, ORCID, ROR, DOI), Tier 1 Publishing, Tier 2 Metadaten-Aggregatoren (OpenAIRE, ORKG), Tier 3 Bewertungsunterstützung (Analytik, narrative-CV-Generatoren). Bilden Sie ab, was Sie haben vs. was auf jeder Schicht fehlt; investieren Sie entsprechend.",
      planText: "Wir werden unsere Bewertungsinfrastruktur an der 4-Schichten-Architektur von OI4RRA ausrichten — von persistenten Identifikatoren bis zu Werkzeugen der Bewertungsunterstützung — und dort investieren, wo Schichten fehlen.",
      examples: ["OI4RRA Framework & Principles (Manola et al. 2025)", "OI4RRA Policy Briefs for RPOs/RFOs"],
    },
    {
      title: "Eine Beitragstaxonomie übernehmen (CRediT / CASRAI / TaDiRAH)",
      description: "Gehen Sie über Autorenlisten hinaus zu strukturierten Beitragsangaben. CRediT funktioniert für die MINT-Fächer; TaDiRAH ergänzt für die Geisteswissenschaften; CASRAI deckt die Forschungsadministration ab. Dies ist eine Voraussetzung, um vielfältige Beiträge im großen Maßstab anzuerkennen.",
      planText: "Wir werden über Autorenlisten hinaus zu strukturierten Beitragsangaben übergehen und eine Beitragstaxonomie (CRediT, ergänzt durch TaDiRAH für die Geisteswissenschaften und CASRAI für die Forschungsadministration) als Grundlage übernehmen, um vielfältige Beiträge im großen Maßstab anzuerkennen.",
      examples: ["CRediT taxonomy", "TaDiRAH (Geisteswissenschaften)", "CASRAI standards", "OpenVIVO Contributor Roles"],
    },
    {
      title: "Die Reform in einem etablierten Rahmenwerk verankern (DORA / Leiden / SCOPE)",
      description: "Beginnen Sie nicht bei null. Übernehmen Sie formell einen bestehenden Anker: Unterzeichnen Sie DORA, unterstützen Sie das Leiden-Manifest oder nutzen Sie das SCOPE-Modell als Rückgrat Ihres Vorgehens. Rund 43 % der veröffentlichten CoARA-Aktionspläne berufen sich auf mindestens eines davon — das verleiht Legitimität, ein gemeinsames Vokabular und Orientierung, die Bewertende bereits kennen.",
      planText: "Wir werden unsere Reform in einem etablierten Rahmenwerk verankern — durch Unterzeichnung von DORA, Unterstützung des Leiden-Manifests oder Nutzung des SCOPE-Modells als Rückgrat unseres Vorgehens — und ihr damit Legitimität, ein gemeinsames Vokabular und Orientierung geben, die Bewertende bereits kennen.",
    },
    {
      title: "Den Plan von den Leitungsgremien formal genehmigen lassen",
      description: "Legen Sie den Aktionsplan Ihrem Senat, Rektorat, Vorstand oder Hochschulrat zur formalen Genehmigung vor und halten Sie den Beschluss fest. Ein nie verabschiedeter Plan hat kein Mandat: Er kann kein Budget beanspruchen, keine Fakultät zur Änderung ihrer Kriterien verpflichten, und wird still zum persönlichen Projekt derjenigen, die ihn verfasst haben.",
      planText: "Wir werden den Aktionsplan unseren Leitungsgremien zur formalen Genehmigung vorlegen und den Beschluss festhalten, damit die Reform auf einem institutionellen Mandat beruht und nicht auf dem guten Willen ihrer Verfasserinnen und Verfasser.",
    },
    {
      title: "Den Aktionsplan veröffentlichen und archivieren",
      description: "Stellen Sie den Plan dorthin, wo andere ihn finden, lesen und zitieren können: auf die eigene Website und in ein Archiv, das einen persistenten Identifikator vergibt (die meisten CoARA-Unterzeichnenden nutzen Zenodo). Das kostet fast nichts, erlaubt vergleichbaren Einrichtungen, Ihre Formulierungen zu übernehmen statt bei null anzufangen, und hat das Korpus hinter diesem Werkzeug überhaupt erst möglich gemacht.",
      planText: "Wir werden unseren Aktionsplan auf unserer eigenen Website veröffentlichen und ihn in einem offenen Archiv mit persistentem Identifikator hinterlegen, damit vergleichbare Einrichtungen ihn finden, zitieren und darauf aufbauen können.",
    },
  ],

  contexts: {
    all: {
      label: "Nicht spezifiziert / allgemein",
      description: "Den vollständigen Satz an Maßnahmen ohne kontextbasierte Neugewichtung verwenden.",
    },
    "global-north": {
      label: "Globaler Norden / ressourcenstark",
      description: "Etabliertes CRIS, finanzierte Unterstützung für die Reform, Teilnahme an CoARA-Netzwerken.",
    },
    "global-south": {
      label: "Globaler Süden / ressourcenbeschränkt",
      description: "Schlanke Werkzeuge, regionale Foren (IRAF, AFRA, AOSP), Schutz des Publizierens in lokalen Sprachen.",
    },
    "indigenous-serving": {
      label: "Indigene Gemeinschaften betreuend / gemeinschaftlich verwaltet",
      description: "CARE-Prinzipien und gemeinschaftliche Datensouveränität sind tragend.",
    },
    "multi-regional": {
      label: "Multiregional / grenzüberschreitend",
      description: "Daten-Visitation und föderierte Modelle; Exposition gegenüber internationaler Asymmetrie.",
    },
    funder: {
      label: "Forschungsförderorganisation (RFO)",
      description: "Anreizgestaltung, Ausschreibungskriterien, KI-Richtlinie für Gutachtende, Abstimmung mit Rahmenwerken.",
    },
  },

  maturity: [
    {
      label: "Nicht bewusst",
      description: "Die Einrichtung hat keine Kenntnis von dieser Verpflichtung oder ihren Implikationen.",
    },
    {
      label: "Bewusst",
      description: "Die Verpflichtung ist bekannt, aber es wurde keine konkrete Maßnahme ergriffen.",
    },
    {
      label: "Erkundend",
      description: "Interne Diskussionen, gebildete Arbeitsgruppen, Erfassung bestehender Praktiken.",
    },
    {
      label: "Planend",
      description: "Aktionsplan entwickelt, Ressourcen zugewiesen, Pilotprojekte konzipiert.",
    },
    {
      label: "Umsetzend",
      description: "Veränderungen werden aktiv vorgenommen, neue Kriterien in Verwendung, Schulungen im Gange.",
    },
    {
      label: "Verankert",
      description: "Neue Praktiken sind die Norm, Monitoring aktiv, kontinuierliche Verbesserung.",
    },
  ],
};
