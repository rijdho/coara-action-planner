// German (de) translation overlay.
export default {
  ui: {
    // header / nav
    brandApp: "Research Assessment Reform Planner",
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
    rail_by: "Von",
    rail_license_code: "Code unter Apache-2.0",
    rail_license_data: "Daten unter CC BY 4.0",
    rail_source: "Quellcode auf GitHub",
    rail_family: "Teil von",
    rail_cite: "Dieses Werkzeug zitieren",

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
      "Beantworten Sie die folgenden Fragen, um den Reifegrad Ihrer Einrichtung bei jeder CoARA-Verpflichtung zu ermitteln. Wenn Sie fertig sind, verwandelt der Tab „Ergebnisse“ Ihre Antworten in ein Reifegradprofil und einen priorisierten Aktionsplan. Alles wird lokal in Ihrem Browser gespeichert.",

    // Start page + perspectives + ambition (added)
    tab_start: "Start",
    start_title: "Bevor Sie beginnen",
    start_intro:
      "Dieses Tool betrachtet die Reform aus drei Blickwinkeln. Richten Sie sie hier ein und gehen Sie dann die Tabs durch. Alles wird lokal in Ihrem Browser gespeichert.",
    start_lensesTitle: "Drei Blickwinkel",
    start_lens_now: "① Wo wir heute stehen",
    start_lens_now_desc:
      "Der Fragebogen misst Ihre aktuelle Reife bei jeder CoARA-Verpflichtung: den Ist-Zustand, ehrlich eingeschätzt.",
    start_lens_goal: "② Wohin wir wollen",
    start_lens_goal_desc:
      "Im Tab Plan legen Sie einen Ziel-Reifegrad pro Verpflichtung fest. Die Lücke zwischen Ist und Ziel schließt Ihr Aktionsplan.",
    start_lens_who: "③ Wer diese Information liefert",
    start_lens_who_desc:
      "Geben Sie an, wer antwortet. Fügen Sie mehrere Perspektiven hinzu (z. B. Leitung und Forschende), um zu sehen, wo die Einschätzungen auseinandergehen.",
    start_instTitle: "Einrichtung",
    start_instHint: "Wird im Bericht und in den Exporten verwendet. Optional.",
    start_instPlaceholder: "Name der Einrichtung (optional)",
    start_perspectivesTitle: "Perspektiven",
    start_perspectivesHint:
      "Jede Perspektive ist die Sicht einer antwortenden Person, versehen mit ihrer Rolle. Alle beantworten dieselben 25 Fragen; Sie füllen sie einmal pro Perspektive aus, aus diesem Blickwinkel. Die Ergebnisse führen die Perspektiven zusammen und markieren, wo deren Einschätzungen derselben Frage voneinander abweichen (die Wahrnehmungslücke).",
    start_perspectivesEyebrow: "Was dieses Werkzeug kann und ein Leitfaden nicht",
    start_perspectivesWhy:
      "Ein Plan, den eine einzelne Stelle schreibt, gibt eine einzige Sichtweise wieder. Beantworten Leitung, Forschungsservice und Forschende dieselben 25 Fragen, wird die Uneinigkeit selbst zum Befund: Ergebnisse markiert jede Verpflichtung, deren Einschätzungen um zwei Stufen oder mehr auseinandergehen, und genau dort lohnt die Verständigung, bevor irgendetwas geschrieben wird.",
    start_quickStart: "Gemeinsame Bestandsaufnahme einrichten:",
    start_quickStartAdd: "+ {role}",
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
    asmt_answeringAs: "Sie antworten als: {role}",
    asmt_switchPerspective: "Wechseln →",
    plan_s5_title: "5 · Ambition: wohin wollen Sie?",
    plan_s5_hint:
      "Legen Sie einen Ziel-Reifegrad pro Verpflichtung fest. Maßnahmen, die die Lücke zwischen Ihrer aktuellen Stufe und dem Ziel schließen, steigen nach oben; Verpflichtungen, die ihr Ziel bereits erreicht haben, sinken. Lassen Sie „–“, um nur nach der Lücke bis zur höchsten Stufe zu ordnen.",
    plan_ambition_now: "jetzt",
    plan_ambition_current: "aktuelle Stufe",
    plan_ambition_target: "Zielstufe",
    plan_ambition_notset: "–",
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
    res_perceptionGap: "Perspektiven weichen um ≥2 Stufen ab bei: {list}. Zur Abstimmung priorisiert.",
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
      "Beantworten Sie zuerst den Fragebogen: Der Plan stimmt die Maßnahmen ab, die sich aus Ihrem Reifegradprofil ergeben.",
    plan_startQuestionnaire: "Fragebogen starten",
    plan_title: "Ihren Aktionsplan gestalten",
    plan_intro:
      "Vier schnelle Entscheidungen, die festlegen, welche Maßnahmen zuerst erscheinen. Nichts davon ist erforderlich; die Standardeinstellungen ergeben einen ausgewogenen, lückenorientierten Plan. Ihr Reifegradprofil bleibt unverändert.",
    plan_s1_title: "1 · Zeithorizont & Kapazität",
    plan_s1_hint: "Wie viel Veränderung können Sie derzeit bewältigen?",
    plan_s2_title: "2 · Institutioneller Kontext",
    plan_s2_hint: "Hebt Maßnahmen hervor, die für Ihre Situation besonders relevant sind.",
    plan_s3_title: "3 · Prioritäre Verpflichtungen",
    plan_s3_hint:
      "Wählen Sie die CoARA-Verpflichtungen, die Sie zuerst angehen möchten; ihre Maßnahmen rücken in der Liste nach oben. Leer lassen für keine.",
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
      "Wir haben begrenzte Zeit und Kapazität. Aufwandsarme Maßnahmen bevorzugen, die wir sofort beginnen können.",
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
      "Speichern Sie alle Eingaben dieser Bewertung (Antworten, Perspektiven, Zielniveau und Plan) in einer Datei, um genau diesen Bericht später zu reproduzieren, zu teilen oder als Basis zum Ändern neu zu laden.",
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
    about_nav: "Über dieses Werkzeug",
    start_aboutLink: "Wie dieses Werkzeug entstanden ist, und woraus",
    about_title: "Über dieses Werkzeug",
    about_lede: "Der Research Assessment Reform Planner hilft einer Einrichtung, ihren Stand bei den zehn Verpflichtungen der Vereinbarung zur Reform der Forschungsbewertung (CoARA, 2022) zu bestimmen und ihren Aktionsplan zu entwerfen. Er orientiert; er zertifiziert nicht.",
    about_h_sources: "Woher es stammt",
    about_sources_1: "Die ersten Fragen und Maßnahmen wurden anhand von 15 veröffentlichten CoARA-Aktionsplänen kalibriert, die von Hand gelesen wurden.",
    about_sources_2: "Das Korpus umfasst die CoARA-Aktionspläne, die auf Zenodo über Textsuche und in der Community der CoARA-Aktionspläne gefunden wurden: erstmals erhoben am 17. April 2026 und aktualisiert am 6. August 2026, insgesamt {plans} Pläne. Alle sind frei zugänglich; {ccby} stehen unter CC BY 4.0, die übrigen unter anderen Creative-Commons-Lizenzen oder ohne Lizenz. Ihr Text wurde aus den hinterlegten PDF- und DOCX-Dateien extrahiert. Die Pläne werden über ihre DOIs zitiert und nicht weiterverbreitet.",
    about_sources_3: "Im September 2026 lasen Sprachmodelle jeden Plan vollständig, nach einem dokumentierten Verfahren: Jede Maßnahme, zu der sich ein Plan verpflichtet, wurde mit einem wörtlichen Zitat erfasst, jedes Zitat per Skript am Text des Plans geprüft, und unabhängige Durchgänge versuchten, jeden Eintrag zu widerlegen, und entschieden strittige Zuordnungen. {extracted} Einträge wurden erfasst, {kept} bestanden die Prüfungen, und {matched} wurden einer Maßnahme des Katalogs zugeordnet.",
    about_h_output: "Was daraus entstand",
    about_output: "{questions} Fragen, die jede Verpflichtung auf einer sechsstufigen Reifeskala einordnen, von 0 (nicht bewusst) bis 5 (verankert); {actions} Maßnahmen, jede mit den Stufen, für die sie gilt, ihrem Aufwand und ihrer Wirkung, realen Beispielen, soweit bekannt, und, wo zutreffend, den Elementen von DORA, Leiden-Manifest oder SCOPE, die sie umsetzt; und für jede Maßnahme der Anteil der {plans} Pläne, die sie vorsehen. Der Bericht zitiert die 19 Leitfragen der Action Plan Guidelines des CoARA-Sekretariats (Oktober 2023).",
    about_h_limits: "Grenzen",
    about_limits: "Die Anteile sind Untergrenzen und zählen, wozu sich Pläne verpflichten, nicht was erreicht wurde. Die Lektüre wurde nicht von Menschen kodiert; ihre Verlässlichkeit beruht auf der mechanischen Prüfung der Zitate und den unabhängigen Prüfdurchgängen. Stufen und Reihenfolgen sind ein strukturierter Anstoß zur Reflexion, keine Bewertung und keine Zertifizierung, und das Werkzeug wird von CoARA weder unterstützt noch empfohlen.",
    about_h_more: "Methode, Daten und Zitation",
    about_more: "Die Methode, die Liste der Pläne mit ihren Zenodo-Einträgen und die Zahlen je Maßnahme sind im Quellrepositorium veröffentlicht. Zitiert wird das Werkzeug über seinen Konzept-DOI, der stets auf die neueste Version verweist.",
    about_link_method: "Methode und Daten (corpus/)",
    res_examples: "Beispiele:",
    res_frameworks: "Setzt um:",
    res_corpus: "{pct} % von {n} Plänen",
    res_readingTitle: "Anteil der {n} veröffentlichten CoARA-Aktionspläne, die diese Maßnahme vorsehen, aus einer vollständigen Lektüre jedes Plans, in der jede Maßnahme durch ein wörtliches Zitat und eine unabhängige Prüfung belegt ist. Eine Untergrenze.",
    res_corpusTitle: "Anteil der {n} veröffentlichten CoARA-Aktionspläne, deren Volltext dem Thema dieser Maßnahme entspricht (stichwortbasiert, orientierend)",
    ev_universal: "Nahezu universell in bestehenden Plänen",
    ev_common: "Verbreitet in bestehenden Plänen",
    ev_emerging: "Aufkommende Praxis",
    ev_frontier: "Neuland: bislang von wenigen Plänen umgesetzt",
    res_ctaNext: "Weiter:",
    res_ctaBody: "verwandeln Sie dies in einen schriftlichen CoARA-Aktionsplan-Entwurf, den Sie bearbeiten und teilen können.",
    res_generateReport: "Bericht erstellen →",

    // Results: print view
    print_title: "Reform der Forschungsbewertung: Reifegradbericht",
    print_meta: "{inst} · {date} · CoARA-Verpflichtungen · basierend auf {answered}/{total} Fragen",
    print_planPrefix: "Plan:",
    print_overall: "Gesamtreifegrad:",
    print_level: "Stufe {n} · {label}",
    print_byCommitment: "Reifegrad nach Verpflichtung",
    print_priorityActions: "Prioritäre Maßnahmen",
    print_footer:
      "Erstellt mit dem Research Assessment Reform Planner (DOI 10.5281/zenodo.21492548) · rijdho.github.io/coara-action-planner · Rahmenwerk: CoARA-Vereinbarung zur Reform der Forschungsbewertung.",
    unknownInst: "Einrichtung",

    // Report page
    rep_emptyTitle: "Bericht",
    rep_emptyBody:
      "Beantworten Sie zuerst den Fragebogen: Der Bericht wird aus Ihrem Reifegradprofil und Ihrem Plan entworfen.",
    rep_title: "Aktionsplan-Bericht",
    rep_intro_pre:
      "Ein vorstrukturierter CoARA-Aktionsplan-Entwurf, erstellt aus Ihren Antworten und Ihrem Plan. Seine Struktur folgt echten institutionellen Aktionsplänen (Einleitung → Ausgangslage → Prioritäten → Maßnahmen je Verpflichtung → Ressourcen → Monitoring). ",
    rep_intro_strong: "Bearbeiten Sie ihn frei",
    rep_intro_post: ". Eingeklammerte [Felder] sind auszufüllende Lücken. Wird beim Tippen lokal gespeichert.",
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
    radar_level: "Stufe {n} · {label}",  },

  report: {
    docTitle: "{inst}: Aktionsplan zur Reform der Forschungsbewertung",
    subtitle: "Im Einklang mit der CoARA-Vereinbarung zur Reform der Forschungsbewertung · {date}",
    respondentSingle:
      "Diese Selbsteinschätzung wurde aus der Perspektive von {role} erstellt und sollte mit diesem Blickwinkel im Hinterkopf gelesen werden.",
    respondentMulti:
      "Diese Selbsteinschätzung führt {n} Perspektiven zusammen ({roles}). Mehrere Blickwinkel zu vereinen ergibt ein vollständigeres, ehrlicheres Bild davon, wo die Einrichtung steht und wo sich die Einschätzungen des Fortschritts unterscheiden.",
    ambitionLine:
      "Innerhalb dieses Horizonts strebt {inst} an, bestimmte Verpflichtungen auf erklärte Ziel-Reifegrade voranzubringen: {targets}.",
    targetLevelShort: "Stufe {level} ({label})",
    contestedNote:
      "Die internen Einschätzungen des Fortschritts gehen am stärksten auseinander bei {contested}; diese werden zur frühen Abstimmung priorisiert, damit sich die Einrichtung einig wird, wo sie wirklich steht, bevor sie handelt.",

    h_intro: "Einleitung",
    intro1:
      "Im [Monat Jahr] hat {inst} die Vereinbarung zur Reform der Forschungsbewertung (CoARA) unterzeichnet und verpflichtet sich, die Art und Weise zu reformieren, wie Forschung, Forschende und forschende Einheiten bewertet werden. Wir erkennen an, dass verantwortungsvolle Bewertung eine Governance-Entscheidung ist: Sie verteilt Prestige, Ressourcen und Legitimität und muss die gesamte Vielfalt wissenschaftlicher Beiträge honorieren.",
    intro2:
      "Dieser Plan stützt sich auf eine strukturierte Selbsteinschätzung über die zehn CoARA-Verpflichtungen hinweg. Er beschreibt unsere aktuelle Ausgangslage, unsere Prioritäten und die konkreten Maßnahmen, die wir ergreifen werden, zusammen mit den verantwortlichen Einheiten, indikativen Zeitrahmen und den Meilensteinen, an denen wir den Fortschritt messen werden.",

    h_baseline: "1. Selbsteinschätzung der Ausgangslage",
    overall: "Gesamtreifegrad: Stufe {level} ({label}).",
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
    actionHeading: "C{num}. {title}: aktuell Stufe {lvl} ({label})",
    actionLabel: "Maßnahme:",
    targetLabel: "Fortschritt:",
    targetValue: "Stufe {from} → {to} · Aufwand {effort} · erwartete Wirkung {impact}",
    referenceLabel: "Referenzpraxis:",
    frameworksLabel: "Umgesetzte Rahmenwerke:",
    responsibleLabel: "Verantwortlich:",
    responsiblePlaceholder: "[z. B. CoARA-Arbeitsgruppe / Vizerektorat für Forschung / zuständige Stelle]",
    timeframeLabel: "Zeitrahmen:",
    timeframePlaceholder: "[Jahr 1 / Q_ 20__ / laufend]",
    indicatorLabel: "Indikator / Meilenstein:",
    indicatorPlaceholder: "[beobachtbares Ergebnis, z. B. überarbeitete Kriterien genehmigt]",
    noActions:
      "Es wurden keine Maßnahmen empfohlen: Ihr Reifegrad ist über die bewerteten Verpflichtungen hinweg bereits hoch. Konzentrieren Sie sich auf die unten beschriebenen Verankerungs- und Monitoring-Aktivitäten.",

    h_resources: "4. Ressourcen (CoARA-Verpflichtung 5)",
    resourcesBody:
      "{inst} wird die für die Umsetzung dieses Plans erforderlichen Ressourcen bereitstellen: [Budgetposten], [zugewiesene Personalzeit / Koordination], [Schulung für Bewertungsausschüsse] und [Infrastruktur zur Erfassung vielfältiger Forschungsleistungen]. Ein [benannter Ausschuss / benannte Stelle] wird die Umsetzung koordinieren.",

    h_awareness: "5. Sensibilisierung, Anleitung & Austausch (CoARA-Verpflichtungen 7–8)",
    awarenessBody:
      "Wir werden intern sensibilisieren und zugängliche Leitlinien zu den reformierten Kriterien und ihrer verantwortungsvollen Nutzung veröffentlichen. {inst} wird Praktiken mit Partnereinrichtungen austauschen (über [CoARA-Arbeitsgruppen / nationales Kapitel / regionales Forum]) und dabei anerkennen, dass Organisationen sich an unterschiedlichen Punkten des Weges befinden.",

    h_monitoring: "6. Monitoring, Evaluation & Kommunikation des Fortschritts (CoARA-Verpflichtungen 9–10)",
    monitoringBody:
      "Der Fortschritt wird [jährlich] überprüft, anhand transparenter Indikatoren wie dem Anteil der reformierten Bewertungsverfahren, der Zahl der geschulten Bewertenden und der Abschaffung unangemessener zeitschriften- und publikationsbasierter Kennzahlen. Wir werden den Fortschritt offen kommunizieren, in erster Linie durch eine öffentlich geteilte Selbsteinschätzung, wie es die Vereinbarung vorsieht, wobei wir die Bewertung auf Evidenz und offene Daten stützen.",

    h_ongoing: "Fortlaufende Verpflichtung",
    ongoingBody:
      "{inst} betrachtet die Reform der Forschungsbewertung als iterativen Prozess. Dieser Plan wird [jährlich] überprüft und aktualisiert, während Kriterien erprobt, evaluiert und in allen Bewertungsverfahren verankert werden.",

    footer:
      "Entwurf erstellt mit dem Research Assessment Reform Planner (rijdho.github.io/coara-action-planner, DOI 10.5281/zenodo.21492548) aus einer Selbsteinschätzung der zehn CoARA-Verpflichtungen. Vor der Verabschiedung frei bearbeitbar.",

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
      "Wir sind bereit, ehrgeizige, strukturelle Reformen anzugehen, Kriterien und Verfahren systemweit zu überarbeiten, auch wo dies anhaltenden Aufwand und Ressourcen erfordert.",

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
    gq_label: "CoARA-Leitfrage",
    gq_labelPlural: "CoARA-Leitfragen",
    gq_intro:
      "Die mit *CoARA-Leitfrage* gekennzeichneten Impulse sind den *Action Plan Guidelines* (Oktober 2023) des CoARA-Sekretariats entnommen. Sie sind eine Anregung und Hilfestellung, keine verbindliche Vorlage (CoARA veröffentlicht keine Vorlage für die Aktionspläne seiner Mitglieder), doch sie Abschnitt für Abschnitt zu beantworten ist der schnellste Weg, diesen Entwurf daran zu prüfen, worüber die Koalition ihre Mitglieder zum Nachdenken auffordert.",
    gq_quotedInEnglish:
      "Sie werden im veröffentlichten Englisch wiedergegeben, da CoARA keine Übersetzung herausgibt.",
    gq_source:
      "Leitfragen zitiert nach: CoARA Secretariat, \"Action Plan Guidelines: Support for CoARA signatories in the preparation of action plans\", Oktober 2023.",
    noActionsForCommitment:
      "Für diese Verpflichtung wurden in diesem Entwurf keine Maßnahmen ausgewählt. [Hier die geplanten Maßnahmen der Einrichtung ergänzen oder begründen, warum keine erforderlich sind.]",
  },

  roles: {
    unspecified: { label: "Nicht angegeben", hint: "Allgemein / keine Angabe." },
    leadership: { label: "Hochschulleitung", hint: "Rektorat, Vizerektorat für Forschung, Leitungsgremium." },
    "research-office": { label: "Forschungsservice / Unterstützung", hint: "Forschungsservice, RRA- oder Open-Science-Büro." },
    "working-group": { label: "Reform-Arbeitsgruppe", hint: "Eigene CoARA- / Bewertungsreform-Arbeitsgruppe." },
    researcher: { label: "Forschende / akademisches Personal", hint: "Lehrende, Postdocs: die Bewerteten." },
    "hr-career": { label: "Personal & Karriereentwicklung", hint: "Verantwortliche für Einstellung, Beförderung und Beurteilung." },
    "library-os": { label: "Bibliothek / Open Science", hint: "Repositorium, FAIRe Daten, Wissenschaftskommunikation." },
    "evaluation-committee": { label: "Bewertungs- / Qualitätsausschuss", hint: "Gremien, die Bewertungsprozesse durchführen." },
    funder: { label: "Förderer / RFO", hint: "Förderorganisation, die Ausschreibungen und Kriterien gestaltet." },
    external: { label: "Externe Gutachter/in oder Berater/in", hint: "Außenblick: Partnereinrichtung oder Auditor." },
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
      text: "Berücksichtigt Ihre Einrichtung Chancengerechtigkeit, Vielfalt und Inklusion (EDI) in ihren Bewertungsverfahren, z. B. Karriereunterbrechungen, Elternzeit, Behinderung, Geschlechterverzerrung in Bewertungsausschüssen?",
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
      text: "Erwähnen Ihre Kriterien für Einstellung, Beförderung oder Förderung ausdrücklich den Journal Impact Factor (JIF), den h-Index oder Zeitschriften-Quartile?",
      answers: {
        0: "Wir wissen nicht, was in unseren Kriterien steht",
        1: "Ja, sie erwähnen diese Kennzahlen und wir wissen, dass das problematisch ist",
        2: "Wir haben unsere Kriterien geprüft und identifiziert, wo diese auftauchen",
        3: "Wir haben überarbeitete Kriterien entworfen, die diese Kennzahlen entfernen",
        4: "Die meisten Kriterien wurden aktualisiert, um diese Kennzahlen zu entfernen",
        5: "Kein Bewertungsverfahren verweist auf JIF, h-Index oder Quartile",
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
        5: "Die Kultur hat sich gewandelt: Bewertende nutzen routinemäßig qualitative Beurteilung",
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
      text: "Sind Ihre Bewertungskriterien nach Karrierestufe (Promotion, Postdoc, Tenure-Track, Senior) und nach Verfahrenstyp (Einstellung, Beförderung, Förderung, Bewertung von Organisationseinheiten) differenziert?",
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
        0: "Wir sind an keiner thematischen Gruppe beteiligt",
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
    q9b: {
      text: "Wie hält Ihre Einrichtung ihre Beschäftigten und Leitungsgremien über die Reform auf dem Laufenden?",
      answers: {
        0: "Wir haben die Reform intern nicht kommuniziert",
        1: "Die Reform wurde erwähnt, eine geplante interne Kommunikation gibt es nicht",
        2: "Die Reform wurde der Leitung oder den Leitungsgremien mindestens einmal vorgestellt",
        3: "Ein Kommunikationsplan legt Zielgruppen, Kanäle und Verantwortliche fest",
        4: "Beschäftigte und Leitungsgremien erhalten Updates in festem Rhythmus",
        5: "Regelmäßige Updates werden archiviert, Beschäftigte können Rückmeldung geben, und die Leitungsgremien prüfen den Fortschritt in einem festen Zyklus",
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
      text: "Die Vielfalt der Tätigkeiten, Praktiken und Beiträge anerkennen, die Qualität und Wirkung von Forschung maximieren, einschließlich, aber nicht beschränkt auf: hochwertige Forschung (von der Grundlagen- bis zur translationalen Forschung), Lehre, Mentoring, Betreuung, Leitung, Unternehmertum, Wissensmobilisierung, Forschungsmanagement, Innovation, öffentlich-private Zusammenarbeit, Bürgerbeteiligung und Open-Science-Praktiken.",
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
        "JIF, h-Index und Zeitschriften-Quartile aus Einstellungs-/Beförderungskriterien streichen",
        "Bewertungsformulare neu gestalten, um narrative und qualitative Belege hervorzuheben",
        "Bewertungsausschüsse im verantwortungsvollen Umgang mit Kennzahlen schulen",
        "Narrative Lebensläufe oder portfoliobasierte Bewertung einführen",
      ],
    },
    "no-metrics": {
      title: "Unangemessene zeitschriftenbasierte Kennzahlen aufgeben",
      text: "Aufhören, zeitschriftenbasierte Kennzahlen wie den Journal Impact Factor und den h-Index als Surrogatindikatoren für die Qualität einzelner Forschungsleistungen oder einzelner Forschender bei Einstellungs-, Beförderungs- und Förderentscheidungen zu verwenden.",
      inPractice: [
        "Alle Bewertungskriterien auf Verweise auf JIF, h-Index, Quartile prüfen",
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
      title: "Anerkannte Leistungen erfassen und eine erweiterte Typologie entwerfen",
      description: "Erfassen Sie zuerst, welche Leistungstypen Ihre Kriterien heute anerkennen und wo Lücken sind. Entwickeln Sie dann eine umfassende Typologie von Forschungsbeiträgen: begutachtete Artikel, Datensätze, Software, Code, Protokolle, Lehrmaterialien, Mentoring, Policy Briefs, Medien, Citizen Science usw.",
      planText: "Wir werden erfassen, welche Leistungstypen unsere Kriterien heute anerkennen, und eine umfassende Typologie von Forschungsbeiträgen entwickeln: begutachtete Artikel, Datensätze, Software, Code, Protokolle, Lehrmaterialien, Mentoring, Policy Briefs, Medien und Citizen Science.",
      examples: ["Netherlands Recognition & Rewards programme", "UK REF impact case studies"],
    },
    {
      title: "Vielfältige Forschungsleistungen in allen Bewertungsverfahren verankern",
      description: "Überarbeiten Sie alle Kriterien für Einstellung, Beförderung, Tenure und Förderung, um vielfältige Leistungstypen ausdrücklich einzubeziehen und zu gewichten und Team-, Gremien- und Begutachtungsarbeit (Gutachten, Gremientätigkeit) neben individuellen Leistungen anzuerkennen. Stellen Sie sicher, dass Bewertende darin geschult sind, sie zu beurteilen.",
      planText: "Wir werden alle Kriterien für Einstellung, Beförderung, Tenure und Förderung überarbeiten, um vielfältige Leistungstypen ausdrücklich einzubeziehen und zu gewichten und Team-, Gremien- und Begutachtungsarbeit neben individuellen Leistungen anzuerkennen, und sicherstellen, dass Bewertende darin geschult sind, sie zu beurteilen.",
    },
    {
      title: "Einen narrativen Lebenslauf entwerfen und erproben",
      description: "Sichten Sie bestehende Modelle narrativer Lebensläufe (Résumé for Researchers, R4RI von UKRI, nationale Vorlagen) und passen Sie eines an Ihren institutionellen Kontext an. Erproben Sie es in ein oder zwei Bewertungsrunden (z. B. interne Förderungen, ein Beförderungsausschuss). Sammeln Sie Rückmeldungen von Bewertenden und Kandidatinnen und Kandidaten.",
      planText: "Wir werden bestehende Modelle narrativer Lebensläufe sichten, eines an unseren institutionellen Kontext anpassen, es in ein oder zwei Bewertungsrunden erproben und Rückmeldungen von Bewertenden sowie Kandidatinnen und Kandidaten sammeln.",
    },
    {
      title: "Bewertungsausschüsse schulen",
      description: "Entwickeln Sie Schulungen für Bewertungsausschüsse zu qualitativer Bewertung, verantwortungsvollem Umgang mit Kennzahlen und impliziten Vorurteilen, und führen Sie sie durch. Beziehen Sie praktische Übungen mit Beispielportfolios ein.",
      planText: "Wir werden Schulungen für Bewertungsausschüsse zu qualitativer Bewertung, verantwortungsvollem Umgang mit Kennzahlen und impliziten Vorurteilen entwickeln und durchführen, einschließlich praktischer Übungen mit Beispielportfolios.",
    },
    {
      title: "Qualitative Bewertung institutionalisieren",
      description: "Machen Sie narrative Lebensläufe und qualitative Bewertung zum Standard über alle Verfahren hinweg. Etablieren Sie regelmäßige Schulungen für Bewertende. Überwachen Sie das schleichende Wiederauftauchen von Kennzahlen.",
      planText: "Wir werden narrative Lebensläufe und qualitative Bewertung zum Standard über alle unsere Verfahren hinweg machen, regelmäßige Schulungen für Bewertende etablieren und das schleichende Wiederauftauchen von Kennzahlen überwachen.",
    },
    {
      title: "Kriterien auf Kennzahlen-Verweise prüfen",
      description: "Durchsuchen Sie alle Stellenausschreibungen, Beförderungsrichtlinien, Förderausschreibungen und internen Richtlinien nach Verweisen auf JIF, h-Index, Quartile oder „High-Impact-Journals“. Dokumentieren Sie jeden Fall.",
      planText: "Wir werden alle Stellenausschreibungen, Beförderungsrichtlinien, Förderausschreibungen und internen Richtlinien nach Verweisen auf JIF, h-Index, Quartile oder „High-Impact-Journals“ durchsuchen und jeden Fall dokumentieren.",
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
      title: "Eine Position zu Rankings veröffentlichen und sie aus internen Entscheidungen heraushalten",
      description: "Öffentlich darlegen, wie die Einrichtung Hochschulrankings sieht und wofür sie sie nicht verwendet (etwa mit einer INORMS-Erklärung More Than Our Rank), ihre Grenzen der eigenen Gemeinschaft erklären und sie aus Entscheidungen über Einstellung, Beförderung, Förderung und Partnerschaften heraushalten. Manche Einrichtungen gehen weiter und liefern kommerziellen Rankings keine Daten mehr.",
      planText: "Wir werden unsere Position zu Hochschulrankings veröffentlichen, ihre Grenzen unserer Gemeinschaft erklären und sie aus Entscheidungen über Einstellung, Beförderung, Förderung und Partnerschaften heraushalten.",
    },
    {
      title: "Eigene Finanzierung und Personal sichern",
      description: "Schätzen Sie ab, was die Reform braucht (Personalzeit, Systeme, Schulungen, Kommunikation), und beantragen Sie dann eine Budgetzuweisung bei der institutionellen Leitung. Benennen Sie eine Reformkoordination oder einen Ausschuss mit geschützter Zeit und klarem Mandat.",
      planText: "Wir werden den Ressourcenbedarf der Reform abschätzen, eine eigene Budgetzuweisung sichern und eine Reformkoordination oder einen Ausschuss mit geschützter Zeit und klarem Mandat benennen.",
    },
    {
      title: "Umfassende Kriterienprüfung durchführen",
      description: "Überprüfen Sie systematisch ALLE Bewertungskriterien: Einstellung (alle Ebenen), Beförderung, Tenure, interne Förderungen, Sabbaticals, Auszeichnungen, Fachbereichsbewertungen. Verwenden Sie eine standardisierte Checkliste.",
      planText: "Wir werden systematisch alle Bewertungskriterien überprüfen (Einstellung auf allen Ebenen, Beförderung, Tenure, interne Förderungen, Sabbaticals, Auszeichnungen und Fachbereichsbewertungen) anhand einer standardisierten Checkliste.",
    },
    {
      title: "Bewertungsrubriken neu gestalten",
      description: "Erstellen Sie auf Grundlage der Prüfungsergebnisse neue Rubriken, die vielfältige Beiträge, qualitative Belege und die Ausrichtung am Auftrag der Einrichtung betonen. Wo eine nationale oder vergleichbare Karrierebewertungsmatrix existiert (NOR-CAM, FIN-CAM), passen Sie diese an, statt bei null zu beginnen. Erproben Sie die Rubriken, passen Sie sie an und übertragen Sie sie dann in das, was Bewerbende tatsächlich sehen: Ausschreibungstexte, Formulare und Ausschreibungsbedingungen.",
      planText: "Auf Grundlage der Prüfungsergebnisse werden wir neue Rubriken erstellen, die vielfältige Beiträge, qualitative Belege und die Ausrichtung an unserem institutionellen Auftrag betonen, dabei, wo vorhanden, eine nationale Matrix anpassen, sie schrittweise erproben und anpassen und in Ausschreibungstexte, Formulare und Ausschreibungsbedingungen übertragen.",
    },
    {
      title: "Periodischen Zyklus zur Kriterienüberprüfung etablieren",
      description: "Legen Sie einen festen Zeitplan fest (z. B. alle 3 Jahre) zur Überprüfung und Aktualisierung aller Bewertungskriterien. Beziehen Sie in jede Überprüfung eine Konsultation der Interessengruppen ein.",
      planText: "Wir werden einen festen Zeitplan (z. B. alle 3 Jahre) für die Überprüfung und Aktualisierung aller Bewertungskriterien festlegen, mit einer Konsultation der Interessengruppen in jedem Zyklus.",
    },
    {
      title: "Grundlegende Informationsmaterialien erstellen",
      description: "Entwickeln Sie ein einseitiges Informationsblatt, eine FAQ und ein kurzes Video, die erklären, was CoARA ist, warum Ihre Einrichtung unterzeichnet hat und was sich ändern wird. Veröffentlichen Sie sie auf der Website Ihrer Einrichtung.",
      planText: "Wir werden ein einseitiges Informationsblatt, eine FAQ und ein kurzes Video auf der institutionellen Website veröffentlichen, die erklären, was CoARA ist, warum wir unterzeichnet haben und was sich ändern wird.",
    },
    {
      title: "Workshops und Town Halls durchführen",
      description: "Organisieren Sie interaktive Workshops für Forschende, Bewertende und Verwaltung. Beziehen Sie praktische Übungen ein (z. B. „Bewerten Sie diese Kandidatin ohne Kennzahlen“). Halten Sie Q&A-Town-Halls ab.",
      planText: "Wir werden interaktive Workshops für Forschende, Bewertende und Verwaltung organisieren, einschließlich praktischer Übungen wie der kennzahlenfreien Bewertung von Kandidatinnen und Kandidaten, ergänzt durch offene Q&A-Town-Halls.",
    },
    {
      title: "Thematischen CoARA-Arbeitsgruppen und Action Clusters beitreten",
      description: "Unterzeichnen Sie die CoARA-Vereinbarung (falls noch nicht geschehen) und wählen Sie 1–2 thematische Arbeitsgruppen oder Action Clusters, die zu Ihren Prioritäten passen (SSH, EMCRs, Peer Review, RMI, OI4RRA, ERIP usw.). Auch kooperative Reformprojekte zählen: ein von CoARA oder der EU gefördertes Projekt oder eine Arbeitsgruppe einer Initiative außerhalb der Koalition. Für geografische Foren (CoARA National Chapters, IRAF, AFRA, AOSP) siehe die eigene Maßnahme unten.",
      planText: "Wir werden ein oder zwei thematischen CoARA-Arbeitsgruppen oder Action Clusters beitreten, die zu unseren Prioritäten passen (etwa SSH, EMCRs, Peer Review, RMI, OI4RRA oder ERIP) oder einem kooperativen Reformprojekt beitreten und uns an ihrem Austausch beteiligen.",
      examples: ["WG SSH", "WG EMCRs", "WG Peer Review", "WG OI4RRA", "WG ERIP"],
    },
    {
      title: "Peer-Learning-Aktivitäten mitorganisieren",
      description: "Schließen Sie sich mit anderen Unterzeichnenden zusammen, um gemeinsame Workshops, Webinare oder Besuche vor Ort zu organisieren. Gehören Sie einer Europäischen Hochschulallianz oder einem internationalen Netzwerk an, bringen Sie die Bewertungsreform auch dort auf die Tagesordnung. Teilen Sie Ihre Umsetzungserfahrung, sowohl Erfolge als auch Misserfolge.",
      planText: "Wir werden uns mit anderen Unterzeichnenden sowie mit den Hochschulallianzen und Netzwerken, denen wir angehören, zusammenschließen, um gemeinsame Workshops, Webinare oder Besuche vor Ort zu organisieren, und unsere Umsetzungserfahrung teilen, Erfolge wie Misserfolge.",
    },
    {
      title: "Fortschrittsindikatoren definieren",
      description: "Entscheiden Sie, was gemessen werden soll: % der reformierten Kriterien, Zahl der geschulten Bewertenden, Übernahmequote narrativer Lebensläufe, Zufriedenheit der Interessengruppen usw.",
      planText: "Wir werden die Indikatoren definieren, die wir verfolgen: den Anteil reformierter Kriterien, die Zahl der geschulten Bewertenden, die Übernahmequote narrativer Lebensläufe und die Zufriedenheit der Interessengruppen.",
    },
    {
      title: "Einen Fortschrittsbericht veröffentlichen",
      description: "Schreiben und veröffentlichen Sie Ihren ersten Fortschrittsbericht. Er sollte enthalten: Ausgangslage, ergriffene Maßnahmen, Indikatoren für Veränderung, aufgetretene Herausforderungen, nächste Schritte. Machen Sie ihn öffentlich zugänglich.",
      planText: "Wir werden unseren ersten Fortschrittsbericht schreiben und öffentlich teilen; er umfasst Ausgangslage, ergriffene Maßnahmen, Indikatoren für Veränderung, aufgetretene Herausforderungen und nächste Schritte.",
    },
    {
      title: "Die öffentliche Selbsteinschätzung vorbereiten",
      description: "Machen Sie sich mit dem vertrauensbasierten Follow-up von CoARA vertraut: Fortschritte werden in erster Linie durch öffentlich geteilte Selbsteinschätzungen kommuniziert, mit einem Aktionsplan innerhalb eines Jahres nach der Unterzeichnung und einem Zwischenpunkt nach fünf Jahren. Sammeln Sie die benötigten Daten: Aktionsplan, Fortschrittsindikatoren, Ergebnisse der Selbsteinschätzung.",
      planText: "Wir werden unsere öffentliche Selbsteinschätzung im Einklang mit dem vertrauensbasierten Follow-up von CoARA vorbereiten und die dafür erforderlichen Daten sammeln: Aktionsplan, Fortschrittsindikatoren und Ergebnisse der Selbsteinschätzung.",
    },
    {
      title: "Benchmarking-Studien leiten oder zu ihnen beitragen",
      description: "Teilen Sie anonymisierte Bewertungsdaten und, wo sinnvoll, Ihre Methoden und Werkzeuge mit Partnereinrichtungen. Beteiligen Sie sich an vergleichenden Studien zum Reformfortschritt über die Unterzeichnenden hinweg oder initiieren Sie solche, und stützen Sie sich auf Wissenschaftsforschung: Beziehen Sie die Forschenden Ihrer Einrichtung ein, die Bewertung untersuchen.",
      planText: "Wir werden anonymisierte Bewertungsdaten und, wo sinnvoll, unsere Methoden und Werkzeuge mit Partnereinrichtungen teilen, uns an vergleichenden Studien zum Reformfortschritt über die Unterzeichnenden hinweg beteiligen oder solche initiieren und uns auf Wissenschaftsforschung stützen, auch auf die unserer eigenen Forschenden.",
    },
    {
      title: "Bewertungsverfahren auf EDI-Lücken prüfen",
      description: "Prüfen Sie Bewertungskriterien und die Zusammensetzung von Ausschüssen auf Geschlechterverzerrung, den Umgang mit Karriereunterbrechungen (Elternzeit, Krankheit, Behinderung) und Vielfalt. Identifizieren Sie, wo Verzerrungen die Ergebnisse beeinflussen können.",
      planText: "Wir werden Bewertungskriterien und die Zusammensetzung von Ausschüssen auf Geschlechterverzerrung, den Umgang mit Karriereunterbrechungen (Elternzeit, Krankheit, Behinderung) und Vielfalt prüfen und identifizieren, wo Verzerrungen die Ergebnisse beeinflussen können.",
      examples: ["FRQ unconscious bias training modules", "SDU Gender Equality Plan", "UCLouvain GEDIP 2024-2027"],
    },
    {
      title: "EDI-Leitlinien für Bewertungsausschüsse umsetzen",
      description: "Entwickeln Sie Leitlinien und setzen Sie sie durch: verpflichtende Schulung zu unbewussten Vorurteilen für Bewertende, Anpassungen bei Karriereunterbrechungen als Regelfall, Sicherstellung einer diversen Ausschusszusammensetzung, Einbeziehung von EDI-Selbsteinschätzungsfragebögen.",
      planText: "Wir werden EDI-Leitlinien für Bewertungsausschüsse einführen und durchsetzen: verpflichtende Schulung zu unbewussten Vorurteilen, Anpassungen bei Karriereunterbrechungen als Regelfall, diverse Ausschusszusammensetzung und EDI-Selbsteinschätzungsfragebögen.",
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
      planText: "Wir werden Open-Science-Praktiken als positive Bewertungskriterien hinzufügen (Datenteilung, Verfügbarkeit von Code, Präregistrierung, Open-Access-Publizieren) und Reproduzierbarkeit und Transparenz honorieren statt allein das Volumen an Forschungsleistungen.",
      examples: ["AQU Catalunya action A23", "UCM open peer review module in repository", "SDU OADO indicator"],
    },
    {
      title: "Eine eigene Governance-Struktur für die Reform etablieren",
      description: "Schaffen Sie einen formalen Ausschuss oder eine Arbeitsgruppe mit klarem Mandat, multidisziplinärer Mitgliedschaft, Vertretung der Forschenden und Berichtswegen zur institutionellen Leitung. Die meisten anderen Maßnahmen hängen davon ab.",
      planText: "Wir werden einen formalen Reformausschuss oder eine Arbeitsgruppe mit klarem Mandat, multidisziplinärer Mitgliedschaft, Vertretung der Forschenden und direkten Berichtswegen zur institutionellen Leitung etablieren.",
      examples: ["UCM CoARA Working Group", "DCU Open Research Steering Group", "Pannonia Scientific Quality Analysis Group"],
    },
    {
      title: "Infrastruktur ausbauen, um die reformierte Bewertung zu unterstützen",
      description: "Prüfen Sie zuerst, ob Ihre Systeme vielfältige Leistungen überhaupt erfassen können. Implementieren oder erweitern Sie dann ein CRIS, integrieren Sie ORCID, setzen Sie Datenrepositorien ein, verbinden Sie Systeme mit den Bewertungsabläufen und statten Sie die unterstützenden Dienste personell aus (ein Open-Access-Team, Data Stewards). Stellen Sie sicher, dass die Infrastruktur erfasst, was die neuen Kriterien erfordern. Rahmenwerke wie OI4RRA (die Schichten von Identifikatoren bis zu Bewertungswerkzeugen) und die TRUST-Prinzipien für Repositorien helfen bei der Entscheidung, wo investiert wird.",
      planText: "Wir werden unsere Forschungsinformationsinfrastruktur implementieren oder ausbauen (CRIS, ORCID-Integration, Datenrepositorien), die unterstützenden Dienste personell ausstatten und sie mit den Bewertungsabläufen verbinden, damit sie erfasst, was die neuen Kriterien erfordern.",
      examples: ["UPC DRAC feeding into Programa Càtedres evaluation", "Helmholtz automated quality indicator pipelines"],
    },
    {
      title: "Kriterien nach Karrierestufe, Verfahren und Fach differenzieren",
      description: "Entwickeln Sie eigene Bewertungskriterien für Promotions-, Postdoc-, Tenure-Track- und Senior-Positionen und lassen Sie jedes Fach selbst bestimmen, was als Qualität gilt (Bücher in den Geisteswissenschaften, Konferenzbeiträge in der Informatik). Unterscheiden Sie außerdem zwischen Einstellung, Beförderung, internen Förderungen und Bewertung von Organisationseinheiten. Einheitskriterien für alle benachteiligen Early-Career-Forschende.",
      planText: "Wir werden eigene Bewertungskriterien für Promotions-, Postdoc-, Tenure-Track- und Senior-Positionen entwickeln, jedes Fach selbst bestimmen lassen, was als Qualität gilt, und zwischen Einstellung, Beförderung, internen Förderungen und Bewertung von Organisationseinheiten unterscheiden, damit einheitliche Kriterien Early-Career-Forschende nicht länger benachteiligen.",
      examples: ["UB differentiated review per call type (predoc, postdoc, Serra Hunter, cátedras)", "Eurodoc R1/R2/R3 mapping"],
    },
    {
      title: "Mentoring-Programme für Early-Career-Forschende einrichten",
      description: "Schaffen Sie strukturiertes Mentoring und Schulungen, die Early-Career-Forschenden helfen, sich in der reformierten Bewertung zurechtzufinden: wie man ein Portfolio aufbaut, einen narrativen Lebenslauf schreibt, vielfältige Beiträge nachweist. Binden Sie erfahrene Forschende als Mentorinnen und Mentoren ein.",
      planText: "Wir werden strukturiertes Mentoring und Schulungen mit erfahrenen Forschenden als Mentorinnen und Mentoren schaffen, die Early-Career-Forschenden helfen, sich in der reformierten Bewertung zurechtzufinden: ein Portfolio aufbauen, einen narrativen Lebenslauf schreiben und vielfältige Beiträge nachweisen.",
      examples: ["SDU Mentoring for Change (130 PhDs/year)", "OGS mentoring initiative", "Pannonia Group of Young Scientists"],
    },
    {
      title: "Forschungsintegrität mit der Bewertungsreform verknüpfen",
      description: "Entwickeln Sie Leitfäden zu Predatory Journals, Forschungsethik und verantwortungsvollem Verhalten als Teil der Kommunikation zur Bewertungsreform. Die Qualität der Forschungspraxis sollte gewürdigt werden, nicht nur die Forschungsleistungen.",
      planText: "Wir werden Forschungsintegrität mit der Bewertungsreform verknüpfen und Leitfäden zu Predatory Journals, Forschungsethik und verantwortungsvollem Verhalten entwickeln, damit die Qualität der Forschungspraxis neben den Forschungsleistungen gewürdigt wird.",
      examples: ["Pannonia Committee on Research Ethics", "Hong Kong Principles", "LBG Ethics & Diversity Hub"],
    },
    {
      title: "Interne Umfrage zur Wahrnehmung der Bewertung durchführen",
      description: "Befragen Sie Ihre Forschungsgemeinschaft: Welche Kriterien werden ihrer Ansicht nach verwendet vs. welche sollten verwendet werden? Die Ergebnisse helfen, die Reform zu kalibrieren. Veröffentlichen Sie die Ergebnisse offen.",
      planText: "Wir werden unsere Forschungsgemeinschaft dazu befragen, welche Kriterien ihrer Ansicht nach verwendet werden und welche verwendet werden sollten, und die Ergebnisse offen veröffentlichen, als Evidenzbasis zur Kalibrierung der Reform.",
      examples: ["Helmholtz survey of 1,145 researchers", "UCLouvain 34 interviews with evaluation committees", "UCM planned periodic surveys"],
    },
    {
      title: "Reform auf die Bewertung von Organisationseinheiten und der Einrichtung ausweiten",
      description: "Die Reform endet nicht bei der individuellen Bewertung. Überprüfen Sie, wie Fachbereiche, Institute und Forschungsgruppen bewertet werden: Auch diese Verfahren stützen sich auf Publikationskennzahlen und Rankings. Entwickeln Sie qualitative Alternativen.",
      planText: "Wir werden die Reform über die individuelle Bewertung hinaus ausweiten, überprüfen, wie Fachbereiche, Institute und Forschungsgruppen bewertet werden, und qualitative Alternativen zu Publikationskennzahlen und Rankings entwickeln.",
      examples: ["Helmholtz centre-level KPI review", "LBG periodic institute evaluation by 3 experts", "AQU institutional quality assessment"],
    },
    {
      title: "Auf Sprachverzerrung prüfen (Helsinki Initiative on Multilingualism)",
      description: "Stellen Sie sicher, dass Forschung in lokalen oder nicht-dominanten Sprachen nicht benachteiligt wird. Überprüfen Sie Kriterien, Ausschusszusammensetzung und konsultierte Datenbanken auf implizite Bevorzugung der englischen Sprache. Die Helsinki Initiative on Multilingualism ist die übliche Referenz.",
      planText: "Wir werden Kriterien, Ausschusszusammensetzung und die von uns konsultierten Datenbanken auf implizite Bevorzugung der englischen Sprache überprüfen (im Einklang mit der Helsinki Initiative on Multilingualism), damit Forschung in lokalen oder nicht-dominanten Sprachen nicht benachteiligt wird.",
      examples: ["AQU Catalunya: Helsinki Initiative adoption", "FRQ 60+ francophone journals funded", "Leiden Manifesto principle 3"],
    },
    {
      title: "Einem regionalen Forum oder einem nationalen CoARA-Chapter beitreten",
      description: "Stimmen Sie sich mit einem regionalen Forum ab (IRAF Indien, AFRA Afrika/AOSP, CoARA National Chapter), statt isoliert zu reformieren. Einseitige Reform in einem kennzahlengetriebenen Ökosystem birgt das Risiko, Ihre Forschenden zu benachteiligen; regionale Koordination schützt sie.",
      planText: "Wir werden uns mit einem regionalen Forum oder einem CoARA National Chapter abstimmen, statt isoliert zu reformieren, und unsere Forschenden durch regionale Koordination schützen.",
      examples: ["IRAF inauguration (Dr. Gitanjali Yadav)", "AOSP Governing Council", "CoARA Spain (CRUE/CSIC)"],
    },
    {
      title: "Eine Beitragstaxonomie übernehmen (CRediT / CASRAI / TaDiRAH)",
      description: "Gehen Sie über Autorenlisten hinaus zu strukturierten Beitragsangaben. CRediT funktioniert für die MINT-Fächer; TaDiRAH ergänzt für die Geisteswissenschaften; CASRAI deckt die Forschungsadministration ab. Dies ist eine Voraussetzung, um vielfältige Beiträge im großen Maßstab anzuerkennen.",
      planText: "Wir werden über Autorenlisten hinaus zu strukturierten Beitragsangaben übergehen und eine Beitragstaxonomie (CRediT, ergänzt durch TaDiRAH für die Geisteswissenschaften und CASRAI für die Forschungsadministration) als Grundlage übernehmen, um vielfältige Beiträge im großen Maßstab anzuerkennen.",
      examples: ["CRediT taxonomy", "TaDiRAH (Geisteswissenschaften)", "CASRAI standards", "OpenVIVO Contributor Roles"],
    },
    {
      title: "Die Reform in einem etablierten Rahmenwerk verankern (DORA / Leiden / SCOPE)",
      description: "Beginnen Sie nicht bei null. Übernehmen Sie formell einen bestehenden Anker: Unterzeichnen Sie DORA, unterstützen Sie das Leiden-Manifest oder nutzen Sie das SCOPE-Modell als Rückgrat Ihres Vorgehens. Rund 43 % der veröffentlichten CoARA-Aktionspläne berufen sich auf mindestens eines davon; das verleiht Legitimität, ein gemeinsames Vokabular und Orientierung, die Bewertende bereits kennen.",
      planText: "Wir werden unsere Reform in einem etablierten Rahmenwerk verankern (durch Unterzeichnung von DORA, Unterstützung des Leiden-Manifests oder Nutzung des SCOPE-Modells als Rückgrat unseres Vorgehens) und ihr damit Legitimität, ein gemeinsames Vokabular und Orientierung geben, die Bewertende bereits kennen.",
    },
    {
      title: "Den Plan von den Leitungsgremien formal genehmigen lassen",
      description: "Legen Sie den Aktionsplan Ihrem Senat, Rektorat, Vorstand oder Hochschulrat zur formalen Genehmigung vor und halten Sie den Beschluss fest. Ein nie verabschiedeter Plan hat kein Mandat: Er kann kein Budget beanspruchen, keine Fakultät zur Änderung ihrer Kriterien verpflichten und wird stillschweigend zum persönlichen Projekt derjenigen, die ihn verfasst haben.",
      planText: "Wir werden den Aktionsplan unseren Leitungsgremien zur formalen Genehmigung vorlegen und den Beschluss festhalten, damit die Reform auf einem institutionellen Mandat beruht und nicht auf dem guten Willen ihrer Verfasserinnen und Verfasser.",
    },
    {
      title: "Den Aktionsplan veröffentlichen und archivieren",
      description: "Stellen Sie den Plan dorthin, wo andere ihn finden, lesen und zitieren können: auf die eigene Website und in ein Archiv, das einen persistenten Identifikator vergibt (die meisten CoARA-Unterzeichnenden nutzen Zenodo). Das kostet fast nichts, erlaubt vergleichbaren Einrichtungen, Ihre Formulierungen zu übernehmen statt bei null anzufangen, und hat das Korpus hinter diesem Werkzeug überhaupt erst möglich gemacht.",
      planText: "Wir werden unseren Aktionsplan auf unserer eigenen Website veröffentlichen und ihn in einem offenen Archiv mit persistentem Identifikator hinterlegen, damit vergleichbare Einrichtungen ihn finden, zitieren und darauf aufbauen können.",
    },
    {
      title: "Die Reform auf der Tagesordnung der Leitungsgremien halten",
      description: "Den Aktionsplan auf die Tagesordnung der Gremien setzen, die die Einrichtung führen (Leitungsteam, Senat, Hochschulrat, Forschungskommission, Dekanerunde), und in festen Abständen mit einem kurzen Fortschrittsbericht zurückkommen. Die formale Genehmigung gibt dem Plan einmal ein Mandat; ein fester Tagesordnungspunkt hält diejenigen informiert und in der Verantwortung, die Budgets vergeben und Kriterien festlegen.",
      planText: "Wir werden den Aktionsplan unseren Leitungsgremien vorstellen und ihnen in festen Abständen kurz über den Fortschritt berichten, damit diejenigen, die Budgets vergeben und Kriterien festlegen, informiert und in der Verantwortung bleiben.",
    },
    {
      title: "Schriftliche Leitfäden für Bewertende und externe Gutachtende herausgeben",
      description: "Leitfäden für den Moment der Bewertung: wie ein narrativer Lebenslauf zu lesen ist, wie vielfältige Beiträge zu gewichten sind, was nicht verwendet werden darf (Impact-Faktor, h-Index, Quartile, Rankings) und wie verbleibende Zahlen das Urteil stützen können, ohne es zu ersetzen. Sie gehen mit jedem Verfahren hinaus, auch an externe Gutachtende, die nie an einer Schulung teilnehmen, und werden bei jeder Änderung der Kriterien aktualisiert.",
      planText: "Wir werden Leitfäden für Bewertende und externe Gutachtende zur Bewertung nach den reformierten Kriterien und zu nicht zulässigen Indikatoren verfassen, sie jedem Verfahren beilegen und bei Änderungen der Kriterien aktualisieren.",
    },
    {
      title: "Bewertungskriterien veröffentlichen und den Bewerteten Rückmeldung geben",
      description: "Kriterien, Indikatoren und Verfahren für Einstellung, Beförderung und interne Bewertung werden dort veröffentlicht, wo Bewerbende und Beschäftigte sie vor der Bewertung lesen können: auf der Website für Berufungen und Einstellungen, im Intranet für interne Verfahren. Nach jeder Entscheidung erfahren die Bewerteten, im Rahmen der Vertraulichkeit, welche Kriterien angewandt wurden und mit welchem Ergebnis. Ein Kriterium, das niemand einsehen kann, lässt sich nicht einfordern.",
      planText: "Wir werden die Kriterien, Indikatoren und Verfahren für Einstellung, Beförderung und interne Bewertung veröffentlichen, bevor jemand danach bewertet wird, und Bewerbenden wie Beschäftigten Rückmeldung zu ihrer Anwendung geben.",
    },
    {
      title: "Einen Kommunikationsplan mit regelmäßigem internem Update erstellen",
      description: "Festlegen, wer was erfahren muss (Forschende, Bewertende, Verwaltung, Leitung, Partner), über welche Kanäle, wie oft und in wessen Verantwortung. Dazu ein fester Rhythmus, etwa eine vierteljährliche Intranet-Zusammenfassung der Änderungen an Kriterien und Verfahren, archiviert auf der CoARA-Seite, und ein Rückweg, über den Beschäftigte die Arbeitsgruppe erreichen.",
      planText: "Wir werden einen Kommunikationsplan für die Reform mit Zielgruppen, Kanälen und Verantwortlichen erstellen und die Beschäftigten über ein regelmäßiges internes Update informieren, das auf unserer CoARA-Seite archiviert wird.",
    },
    {
      title: "Eigene Karrierewege für alle Rollen in der Forschung schaffen",
      description: "Aufstieg über mehr als einen Weg ermöglichen: formale Laufbahnen neben der klassischen (lehrorientiert, forschungsorientiert, Innovation oder gesellschaftliche Wirkung) und ein veröffentlichter Karriererahmen für alle Rollen, einschließlich wissenschaftsunterstützenden Personals. Jede Laufbahn braucht eigene Kriterien für das Vorankommen. Vielfältigere Kriterien helfen nur, wenn es die Karrieren gibt, zu denen sie führen.",
      planText: "Wir werden eigene Karrierewege für Lehre, Forschung und gesellschaftliche Wirkung schaffen, festgehalten in einem veröffentlichten Karriererahmen für alle Rollen, jeweils mit eigenen Kriterien für das Vorankommen.",
    },
    {
      title: "Einen ständigen Kanal für Beteiligung und Rückmeldung der Forschenden unterhalten",
      description: "Forschenden eine dauerhafte Stimme in der Reform geben statt einer einmaligen Befragung zu Beginn: ein Forum oder Gremium über Karrierestufen und Disziplinen hinweg, eine Konsultationsrunde zu jeder Maßnahme vor ihrer Einführung und ein Weg von dort zur Steuerungsgruppe. Der Kreis schließt sich, wenn veröffentlicht wird, was gehört wurde und was sich dadurch geändert hat.",
      planText: "Wir werden ein ständiges Forum für die Beteiligung von Forschenden aller Karrierestufen und Disziplinen unterhalten, es vor der Einführung jeder Maßnahme konsultieren und veröffentlichen, was wir gehört und was wir daraufhin geändert haben.",
    },
    {
      title: "Die Wirkung reformierter Verfahren evaluieren",
      description: "Sobald ein neues Kriterium, ein neues Lebenslaufformat oder ein neues Karrieremodell im Einsatz ist, wird es evaluiert: Rückmeldungen von Bewerbenden, Bewertenden und Kommissionen sowie Folgen für Arbeitsaufwand, Konsistenz, Entscheidungsqualität und Chancengerechtigkeit. Wo ein gemeinsamer Evaluationsrahmen existiert, macht er die Ergebnisse vergleichbar; die Befunde fließen in die nächste Fassung ein. Eine Reform, die nie evaluiert wird, kann einen Erfolg nicht von einer neuen Last unterscheiden.",
      planText: "Wir werden jedes reformierte Verfahren nach seiner Einführung evaluieren, gestützt auf Rückmeldungen von Bewerbenden, Bewertenden und Kommissionen und auf seine Folgen für Arbeitsaufwand, Konsistenz, Entscheidungsqualität und Chancengerechtigkeit, und es auf dieser Grundlage überarbeiten.",
    },
    {
      title: "Neue Kriterien gemeinsam mit den Bewerteten entwickeln",
      description: "Bevor neue Kriterien oder Leitfäden feststehen: Fokusgruppen oder Co-Design-Runden mit Forschenden verschiedener Disziplinen, Karrierestufen und Rollen, die den Umfang klären, Texte entwerfen und Entwürfe kommentieren, und zum Schluss eine Bestätigungsrunde. Die Beteiligten gestalten den Text mit, statt erst hinterher davon zu erfahren; blinde Flecken zeigen sich früh, und die Umsetzung fällt deutlich leichter.",
      planText: "Wir werden neue Kriterien und Leitfäden gemeinsam mit Forschenden verschiedener Disziplinen, Karrierestufen und Rollen entwickeln, von der Klärung des Umfangs bis zu einer abschließenden Bestätigungsrunde, bevor sie verabschiedet werden.",
    },
    {
      title: "Forschende bei der Erfüllung von Open-Science-Kriterien unterstützen",
      description: "Offene Praktiken in der Bewertung zu honorieren ist nur fair, wenn sie sich umsetzen lassen. Dazu gehören eine Open-Access- und Forschungsdaten-Policy, regelmäßige Schulungen zu Open Access, Datenmanagement und FAIR sowie aktuelle Hilfen (Vorlagen für Datenmanagementpläne, eine Entscheidungshilfe, wie offen etwas sein sollte). Dieselben Hilfen stehen auch den Bewertenden zur Verfügung, damit alle vom gleichen Verständnis ausgehen. Ausnahmen von der Offenheit werden dokumentiert (so offen wie möglich, so geschlossen wie nötig), und wo indigene oder gemeinschaftliche Daten betroffen sind, wird FAIR mit den CARE-Prinzipien verbunden.",
      planText: "Wir werden eine Open-Access- und Forschungsdaten-Policy verabschieden und ihre Umsetzung durch regelmäßige Schulungen und aktuelle Hilfen unterstützen, die auch den Bewertenden zur Verfügung stehen.",
    },
    {
      title: "Eine eigene Policy für verantwortungsvolle Bewertung einschließlich Metriken verabschieden",
      description: "Aus einer Unterzeichnung Regeln machen, denen Kommissionen folgen: eigene Grundsätze verantwortungsvoller Bewertung, die auch festlegen, wann quantitative Indikatoren verwendet werden dürfen und wann nicht (zur Stützung des Expertenurteils, nie als Ersatz; keine zeitschriftenbasierten Kennzahlen für Personen; stets mit Kontext). Sie werden vom zuständigen Gremium genehmigt und veröffentlicht, und Rubriken und Ausschreibungen werden an dieser einen Referenz ausgerichtet.",
      planText: "Wir werden eine eigene Policy für verantwortungsvolle Bewertung mit Regeln zur Verwendung quantitativer Indikatoren verabschieden und veröffentlichen, vom für die Bewertung zuständigen Gremium genehmigt, und unsere Rubriken und Ausschreibungen daran ausrichten.",
    },
    {
      title: "Die Bewerteten vorbereiten",
      description: "Bewerbenden und Beschäftigten helfen, den neuen Kriterien gerecht zu werden: Leitfäden zu jeder Ausschreibung (einen narrativen Lebenslauf verfassen, welche Belege ein Portfolio enthalten sollte, sich selbst einschätzen) und ein fester Baustein zu verantwortungsvoller Bewertung in der Promotionsausbildung und beim Onboarding neuer Beschäftigter, damit jeder Jahrgang die Erwartungen von Anfang an kennt.",
      planText: "Wir werden Leitfäden für Bewerbende zu jeder Ausschreibung veröffentlichen und einen festen Baustein zu verantwortungsvoller Bewertung in die Promotionsausbildung und das Onboarding aufnehmen, damit die Bewerteten verstehen, was die reformierten Kriterien verlangen.",
    },
    {
      title: "Die Reform in die Entwicklungsgespräche tragen",
      description: "Das regelmäßige Entwicklungs- oder Mitarbeitendengespräch am reformierten Rahmen ausrichten: Selbsteinschätzung anhand der neuen Kriterien, Anerkennung der ganzen Breite von Beiträgen, individuelle Karriereziele. Das ist die Bewertung, der Beschäftigte am häufigsten begegnen, und eine Reform, die bei Einstellung und Beförderung stehen bleibt, erreicht sie nie.",
      planText: "Wir werden unsere regelmäßigen Entwicklungsgespräche am reformierten Rahmen ausrichten, einschließlich einer Selbsteinschätzung anhand der neuen Kriterien und der Anerkennung der ganzen Breite von Beiträgen.",
    },
    {
      title: "Forschende die Daten prüfen lassen, nach denen sie bewertet werden",
      description: "Bevor ein Datensatz aus dem Forschungsinformationssystem in eine Bewertung eingeht, kann die bewertete Person ihn einsehen und korrigieren: welche Leistungen gezählt, wie sie eingeordnet, welche Indikatoren daraus abgeleitet wurden. Das tun bisher wenige Pläne, aber es ist der fünfte Grundsatz des Leiden-Manifests und verhindert Entscheidungen auf Grundlage ungeprüfter Daten.",
      planText: "Wir werden Forschenden ermöglichen, die Daten über ihre Arbeit, die unsere Informationssysteme in Bewertungen einspeisen, vor der Verwendung einzusehen und zu korrigieren.",
    },
    {
      title: "Nur bewerten, wo es nötig ist",
      description: "Für jede wiederkehrende Bewertung fragen, ob es sie braucht und in welcher Tiefe. Bewertungen, die keine Entscheidung verändern, streichen oder zusammenlegen, und eine Praxis lieber ermöglichen als messen. Sonst häufen neue Dimensionen (Open Science, Kollegialität, Integrität) nur mehr Bewertung auf dieselben Menschen.",
      planText: "Wir werden unsere wiederkehrenden Bewertungen überprüfen, nur die beibehalten, die eine Entscheidung stützen, und ihre Tiefe entsprechend festlegen, damit die Reform keinen zusätzlichen Bewertungsaufwand erzeugt.",
    },
    {
      title: "Die nationale und europäische Bewertungspolitik mitgestalten",
      description: "Vieles, woran Forschende gemessen werden, wird außerhalb der Einrichtung festgelegt: von nationalen Evaluations- und Akkreditierungsagenturen, Berufungs- und Beförderungsgremien, Förderern, Rektorenkonferenzen. Dort mitwirken, wo diese Kriterien entstehen (Konsultationen, nationale CoARA-Chapter, Arbeitsgruppen der Agenturen), Widersprüche zu den reformierten Kriterien benennen und auf Angleichung drängen. Sonst kann eine Reform, die national nicht anerkannt wird, gerade denen schaden, die ihr folgen.",
      planText: "Wir werden an der Gestaltung der nationalen und europäischen Bewertungspolitik mitwirken, über Konsultationen, nationale Chapter und Arbeitsgruppen der Agenturen, und uns für Kriterien einsetzen, die mit unseren reformierten übereinstimmen.",
    },
    {
      title: "Die Reform in den HRS4R-Plan und bestehende Strategiezyklen schreiben",
      description: "CoARA nicht als eigenes Projekt führen. Den HRS4R-Aktionsplan (HR Excellence in Research) mit den zehn Verpflichtungen abgleichen, um zu sehen, was schon läuft, die neuen Kriterien in die Rekrutierungspolitik (OTM-R) und die nächste HRS4R-Erneuerung schreiben und Ziele der Bewertungsreform in die Pläne aufnehmen, die ohnehin verfolgt werden: Strategieplan, Qualitätssicherung, Gleichstellungsplan. So wird die Reform in Zyklen überprüft, die es ohnehin gibt.",
      planText: "Wir werden unseren HRS4R-Aktionsplan mit den CoARA-Verpflichtungen abgleichen, die reformierten Kriterien in unsere Rekrutierungspolitik und die nächste HRS4R-Erneuerung schreiben und Ziele der Bewertungsreform in unseren Strategieplan und den Qualitätssicherungszyklus aufnehmen.",
    },
    {
      title: "Neu regeln, wie Bewertende und Kommissionen ausgewählt werden",
      description: "Qualitative Urteile sind nur so gut wie die Menschen, die sie fällen. Regeln festlegen, wer in Kommissionen sitzt und wer begutachtet: ein Gleichgewicht von Karrierestufen, Fächern, Geschlechtern und Sektoren, internationale oder externe Mitglieder, wo sinnvoll, offengelegte Interessenkonflikte und Bewertende, die die reformierten Kriterien kennen. Die Besetzung rotieren, damit nicht immer dieselben wenigen entscheiden.",
      planText: "Wir werden Regeln für die Auswahl von Bewertenden und die Besetzung von Kommissionen festlegen, die ein Gleichgewicht von Karrierestufen, Fächern, Geschlechtern und Sektoren, Interessenkonflikte und die Kenntnis der reformierten Kriterien abdecken, und die Besetzung rotieren.",
    },
    {
      title: "Einen Dienst für verantwortungsvolle Bibliometrie anbieten",
      description: "Wenn Zahlen verwendet werden, sollten sie von Menschen kommen, die ihre Grenzen kennen. Ein Dienst (oft in der Bibliothek oder im Forschungsservice), der Bewertende und Forschende berät, welcher Indikator zu welcher Frage passt, fachnormalisierte Zahlen mit Kontext statt roher Zählungen liefert und Kennzahlenkompetenz vermittelt. Er beantwortet zudem die Frage, die Kommissionen ohnehin stellen, damit sie nicht zum Impact-Faktor greifen.",
      planText: "Wir werden einen Dienst für verantwortungsvolle Bibliometrie anbieten, der Bewertende und Forschende zu geeigneten Indikatoren berät, kontextualisierte Zahlen liefert und Kennzahlenkompetenz aufbaut.",
    },
    {
      title: "Einen Rahmen zur Anerkennung gesellschaftlicher Wirkung aufbauen",
      description: "Gemeinsam mit denen, die sie erleben (regionale Partner, Wirtschaft, Verwaltung, Zivilgesellschaft), festlegen, was gesellschaftliche Wirkung für die Einrichtung bedeutet und wie sie belegt wird: Wirkungsnarrative, qualitative Fallbeschreibungen, wenige Indikatoren. In einer Bewertungsrunde erproben und qualitativ halten, damit daraus keine neue Kennzahl wird.",
      planText: "Wir werden gemeinsam mit externen Akteuren einen Rahmen zur Anerkennung gesellschaftlicher Wirkung in der Bewertung entwickeln, ihn in einer Bewertungsrunde erproben und qualitativ halten.",
    },
    {
      title: "Preise für Beiträge schaffen, die die Kriterien übersehen",
      description: "Preise sind ein schneller, sichtbarer Weg zu zeigen, was die Einrichtung schätzt: Open Science, Mentoring, Teamarbeit, Wissenschaftskommunikation, Forschungsunterstützung. Preise für Beiträge schaffen, die die Kriterien bisher übersehen haben, mit Nominierungs- und Auswahlkriterien, die ebenfalls der Reform folgen.",
      planText: "Wir werden Preise für Beiträge schaffen, die unsere Kriterien bisher übersehen haben, etwa Open Science, Mentoring, Teamarbeit und Wissenschaftskommunikation, mit Nominierungs- und Auswahlkriterien im Sinne der Reform.",
    },
    {
      title: "Wenige ausgewählte Leistungen verlangen, jede begründet",
      description: "Lange Publikationslisten durch eine kurze Auswahl ersetzen (oft drei bis zehn Leistungen beliebiger Art), die die bewerbende Person selbst trifft, jede mit einigen Zeilen dazu, warum sie wichtig ist und was die Person beigetragen hat. So wird die Arbeit gelesen und beurteilt statt gezählt.",
      planText: "Wir werden vollständige Publikationslisten in Anträgen durch eine kurze, von der bewerbenden Person getroffene Auswahl von Leistungen ersetzen, jede mit einer Begründung ihrer Bedeutung und des eigenen Beitrags.",
    },
    {
      title: "Bewertungsdaten auf offene Forschungsinformationen stützen",
      description: "Eine Bewertung, die auf proprietären Datenbanken beruht, können die Bewerteten nicht überprüfen. Die Daten hinter Bewertung und Monitoring auf offene Quellen umstellen (OpenAlex, OpenAIRE, Crossref, ORCID, das eigene Repositorium) und die Unterzeichnung der Barcelona-Erklärung zu offenen Forschungsinformationen erwägen.",
      planText: "Wir werden die Daten unserer Bewertung und unseres Monitorings auf offene Quellen für Forschungsinformationen stützen und die Unterzeichnung der Barcelona-Erklärung zu offenen Forschungsinformationen erwägen.",
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
