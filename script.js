/* ---------- data ---------- */
const skillGroups = [
  {
    title: "IA générative & agents", icon: "fa-robot",
    items: ["LLM", "RAG (recherche hybride, reranking)", "LangChain", "LangGraph", "n8n", "Agents IA & tool use", "Systèmes multi-agents", "Streamlit", "Ollama", "HuggingFace", "FAISS", "BM25", "Embeddings", "Prompt engineering", "Évaluation LLM/RAG", "Guardrails"]
  },
  {
    title: "Développement", icon: "fa-code",
    items: ["Python", "FastAPI", "API REST", "SQL", "Next.js", "SSE", "Git"]
  },
  {
    title: "MLOps & Cloud", icon: "fa-cloud",
    items: ["Docker", "Kubernetes", "GitLab CI/CD", "Prometheus", "Grafana", "AWS", "Déploiement on-premise"]
  },
  {
    title: "Data & ML", icon: "fa-database",
    items: ["Pipelines ETL temps réel", "Elasticsearch", "Logstash", "Kibana", "Spark", "Airflow", "scikit-learn", "Séries temporelles", "Détection d'anomalies", "Power BI"]
  }
];

const marqueeItems = ["LLM", "RAG", "LangChain", "LangGraph", "n8n", "Agents IA", "Python", "FastAPI", "Docker", "Kubernetes", "Elasticsearch", "Spark", "Airflow", "MLOps"];

const roles = ["AI Engineer", "LLM · RAG · Agents IA", "Data Engineer", "Automatisations n8n", "MLOps"];

// "code" : lien du repo GitHub, à renseigner.
// "image" : maquette d'interface (ui-*.svg) ; remplace-la par une vraie capture d'écran quand tu l'as.
const IMG = "./assets/images/projects/";
const projects = [
  {
    name: "Agents IA n8n pour boutique en ligne",
    desc: "Système d'agents IA construit avec n8n pour une boutique en ligne : les agents répondent aux clients, prennent les commandes et automatisent le suivi.",
    tags: ["n8n", "Agents IA", "LLM", "Automatisation"],
    icon: "fa-project-diagram", cover: "linear-gradient(135deg,#7a3b8f,#f4a3c4)", featured: "Projet perso", code: "", image: IMG + "ui-n8n.svg"
  },
  {
    name: "Assistant RAG d'entreprise",
    desc: "Utilisé par 80 experts sur 10 000+ documents. Recall porté de 23 % à 82 % grâce à la recherche hybride FAISS + BM25 et au reranking.",
    tags: ["LangChain", "LangGraph", "FastAPI", "Next.js", "Docker"],
    icon: "fa-comments", cover: "linear-gradient(135deg,#3f1f50,#7a3b8f)", featured: "En production", code: "", image: IMG + "ui-rag.svg"
  },
  {
    name: "Pipeline de données temps réel",
    desc: "Pipeline ELK de 2 M d'événements/jour avec détection d'anomalies sur séries temporelles : -70 % de délai de diagnostic des incidents.",
    tags: ["Elasticsearch", "Logstash", "Kibana", "Python"],
    icon: "fa-stream", cover: "linear-gradient(135deg,#572a6b,#c06aa8)", featured: "", code: "", image: IMG + "ui-pipeline.svg"
  },
  {
    name: "Four Days That Shook the World",
    desc: "Analyse NLP de 4,57 M de tweets de la Coupe du monde : sentiment multilingue, topic modeling BERTopic, moments viraux et narration par LLM, présentée comme un documentaire façon Netflix.",
    tags: ["NLP", "BERTopic", "LLM", "Data viz"],
    icon: "fa-film", cover: "linear-gradient(135deg,#b20710,#221f1f)", featured: "", code: "", image: IMG + "ui-netflix.svg"
  },
  {
    name: "Prédiction du churn bancaire",
    desc: "Application web Flask : on saisit les données d'un client et elle renvoie sa probabilité de départ. Modèle ensembliste sur 10 000+ transactions rééquilibrées par SMOTE : 85 % de précision, 1 200 clients à risque ciblés par mois.",
    tags: ["Flask", "Random Forest", "Gradient Boosting", "MLP", "SMOTE"],
    icon: "fa-user-minus", cover: "linear-gradient(135deg,#2c1639,#7a3b8f)", featured: "", code: "", image: IMG + "ui-churn-app.svg"
  },
  {
    name: "Data warehouse & ETL notes de frais",
    desc: "Data warehouse centralisé et ETL intégré à l'ERP financier, avec dashboards Power BI : -60 % de temps de traitement, -25 % de coûts.",
    tags: ["ETL", "Data warehouse", "Power BI", "ERP"],
    icon: "fa-warehouse", cover: "linear-gradient(135deg,#8a4a7a,#ffc9a8)", featured: "", code: "", image: IMG + "ui-warehouse.svg"
  },
  {
    name: "Multi-Persona AI Chat · Conseil des Sages",
    desc: "Application Streamlit où l'on discute avec 10 experts IA (CEO, CTO, Tech Lead…). En mode « Conseil des Sages », plusieurs agents débattent puis le président synthétise un plan d'action. Fonctionne en local avec Ollama ou dans le cloud via HuggingFace.",
    tags: ["Streamlit", "LangChain", "Ollama", "HuggingFace", "Multi-agents"],
    icon: "fa-users", cover: "linear-gradient(135deg,#572a6b,#f4a3c4)", featured: "Projet UTT", code: "", image: IMG + "ui-conseil.svg"
  }
];

/* ---------- render ---------- */
const escapeHtml = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

document.getElementById("skills-grid").innerHTML = skillGroups.map(g => `
  <div class="skill-card reveal">
    <h3><i class="fas ${g.icon}"></i>${escapeHtml(g.title)}</h3>
    <div class="chips">${g.items.map(i => `<span class="chip">${escapeHtml(i)}</span>`).join("")}</div>
  </div>`).join("");

document.getElementById("projects-grid").innerHTML = projects.map((p, i) => `
  <article class="project reveal">
    <div class="p-cover${p.image ? " has-img" : ""}" style="--cover:${p.cover}">
      ${p.image ? `<img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy">` : `<i class="fas ${p.icon}"></i>`}
      ${p.featured ? `<span class="p-feat">${escapeHtml(p.featured)}</span>` : ""}
      <span class="p-num">${String(i + 1).padStart(2, "0")}</span>
    </div>
    <div class="p-body">
      <h3>${escapeHtml(p.name)}</h3>
      <p>${escapeHtml(p.desc)}</p>
      <div class="p-tags">${p.tags.map(t => `<span>${escapeHtml(t)}</span>`).join("")}</div>
      ${p.code ? `<a class="p-link" href="${p.code}" target="_blank" rel="noopener">Voir le code <i class="fas fa-arrow-right"></i></a>` : ""}
    </div>
  </article>`).join("");

// la liste est dupliquée pour que la boucle du bandeau soit continue
const marqueeHtml = marqueeItems.map(t => `<span>${t}</span>`).join("");
document.getElementById("marquee").innerHTML = marqueeHtml + marqueeHtml;

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- typed role ---------- */
(function typeRoles() {
  const el = document.getElementById("typed");
  let r = 0, c = 0, deleting = false;
  const step = () => {
    const word = roles[r];
    c += deleting ? -1 : 1;
    el.textContent = word.slice(0, c);
    let delay = deleting ? 35 : 75;
    if (!deleting && c === word.length) { deleting = true; delay = 1600; }
    else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
    setTimeout(step, delay);
  };
  step();
})();

/* ---------- mobile menu ---------- */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", e => { if (e.target.closest("a")) navLinks.classList.remove("open"); });

/* ---------- scroll: progress bar, sticky nav, timeline fill ---------- */
const progress = document.getElementById("progress");
const nav = document.getElementById("nav");
const timeline = document.getElementById("timeline");
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
  nav.classList.toggle("scrolled", scrollY > 40);
  const box = timeline.getBoundingClientRect();
  const k = (innerHeight * 0.6 - box.top) / box.height;
  timeline.style.setProperty("--tl", Math.min(Math.max(k, 0), 1).toFixed(3));
}
addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", onScroll);
onScroll();

/* ---------- reveal on scroll (apparition échelonnée) ---------- */
document.querySelectorAll(".skills-grid, .projects-grid, .edu-grid, .stats, .timeline, .about-grid").forEach(group => {
  group.querySelectorAll(":scope > .reveal").forEach((el, i) => el.style.setProperty("--d", `${i * 0.09}s`));
});
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- active nav link ---------- */
const links = [...document.querySelectorAll(".nav-links a:not(.nav-cta)")];
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

/* ---------- count-up on key figures ---------- */
const countIo = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target.querySelector("b");
    const end = +el.dataset.count, suffix = el.dataset.suffix || "";
    const t0 = performance.now(), dur = 1500;
    const tick = now => {
      const k = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString("fr-FR") + suffix;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIo.unobserve(e.target);
  });
}, { threshold: 0.5 });
document.querySelectorAll(".stat").forEach(s => countIo.observe(s));

/* ---------- hero: les halos suivent légèrement la souris ---------- */
const hero = document.getElementById("accueil");
const orbs = hero.querySelectorAll(".orb");
if (matchMedia("(pointer: fine)").matches) {
  hero.addEventListener("mousemove", e => {
    const x = (e.clientX / innerWidth - 0.5) * 2, y = (e.clientY / innerHeight - 0.5) * 2;
    orbs.forEach((o, i) => { o.style.translate = `${x * (i + 1) * -22}px ${y * (i + 1) * -16}px`; });
  });
}
