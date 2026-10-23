/* Renders the page from content.js. No framework, no build step. */
(function () {
  "use strict";
  var root = document.documentElement;
  var lang = "en";
  var mapState = { flow: 0, step: 0 };

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  var t = function (o) { return o && typeof o === "object" ? o[lang] : o; };
  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };
  var chips = function (arr) { return arr && arr.length ? '<ul class="chips">' + arr.map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul>" : ""; };
  var bullets = function (arr) { return '<ul class="bullets">' + arr.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("") + "</ul>"; };
  var ext = ' target="_blank" rel="noopener"';
  /* Numbers: "6,281" and "3.4x" in English become "6.281" and "3,4x" in Vietnamese */
  var num = function (v) { return lang === "vi" ? String(v).replace(/[.,]/g, function (c) { return c === "." ? "," : "."; }) : v; };

  /* ---------- sections ---------- */
  function renderNav() {
    $("#navLinks").innerHTML = UI.nav.map(function (n) { return '<a href="#' + n.id + '">' + t(n.label) + "</a>"; }).join("");
    var cta = $("#navCta");
    cta.textContent = t(UI.cta);
    cta.href = "mailto:" + PROFILE.email;
    var lb = $("#lang");
    lb.textContent = t(UI.langBtn);
    lb.setAttribute("aria-label", t(UI.langLabel));
    $("#theme").setAttribute("aria-label", t(UI.themeLabel));
    var cv = $("#navCv");
    cv.href = lang === "vi" ? PROFILE.cvVi : PROFILE.cvEn;
    cv.innerHTML = '<i class="ph ph-download-simple" aria-hidden="true"></i> ' + t(UI.cvNav);
    cv.setAttribute("aria-label", t(UI.cvNavLabel));
    cv.title = t(UI.cvNavLabel);
  }

  function renderHero() {
    $("#hero").innerHTML =
      '<div class="hero-in">' +
        '<figure class="avatar"><img src="' + PROFILE.portrait + '" width="640" height="640" alt="' + t(UI.portraitAlt) + '" fetchpriority="high"></figure>' +
        '<p class="eyebrow">' + PROFILE.name + ", " + t(HERO.eyebrow) + "</p>" +
        "<h1>" + t(HERO.title) + "</h1>" +
        '<p class="sub">' + t(HERO.sub) + "</p>" +
        '<div class="cta">' +
          '<a class="btn primary" href="mailto:' + PROFILE.email + '">' + t(UI.cta) + ' <i class="ph ph-arrow-right" aria-hidden="true"></i></a>' +
          '<a class="btn" href="#work">' + t(UI.seeWork) + "</a>" +
        "</div>" +
      "</div>" ;
  }

  function ledger(rows, raw) {
    return '<ul class="ledger">' + rows.map(function (r) {
      return '<li><span class="lab">' + t(r.label) + '</span><span class="dots" aria-hidden="true"></span><span class="val">' + (raw ? r.value : num(r.value)) + "</span></li>";
    }).join("") + "</ul>";
  }

  function renderResults() {
    $("#results .wrap").innerHTML =
      '<h2 class="rv">' + t(RESULTS.title) + "</h2>" +
      '<div class="ledger-groups">' + RESULTS.groups.map(function (g, i) {
        return '<div class="rv" style="--d:' + i * 0.1 + 's"><h3>' + t(g.title) + "</h3>" + ledger(g.rows) + "</div>";
      }).join("") + "</div>";
  }

  function renderAbout() {
    $("#about .wrap").innerHTML =
      '<h2 class="about-pull rv">' + t(ABOUT.pull) + "</h2>" +
      '<div class="about-copy rv">' + ABOUT.paras.map(function (p) { return "<p>" + t(p) + "</p>"; }).join("") + "</div>";
    $("#band .wrap").innerHTML =
      '<div class="band-grid">' +
        '<h2 class="rv">' + t(ABOUT.doTitle) + "</h2>" +
        '<ul class="does">' + ABOUT.does.map(function (d, i) {
          return '<li class="rv" style="--d:' + i * 0.08 + 's"><h3>' + t(d.title) + "</h3><p>" + t(d.body) + "</p></li>";
        }).join("") + "</ul>" +
      "</div>";
  }

  function mapHtml() {
    var m = WORK.map;
    return '<div class="map rv">' +
      "<h3>" + t(m.title) + "</h3>" +
      '<p class="hint">' + t(m.hint) + "</p>" +
      '<div class="tabs" role="tablist">' + m.flows.map(function (f, i) {
        return '<button class="tab" role="tab" id="tab-' + f.id + '" data-flow="' + i + '">' + t(f.tab) + "</button>";
      }).join("") + "</div>" +
      '<div class="steps" id="steps"></div>' +
      '<div class="detail" id="detail" aria-live="polite"></div>' +
    "</div>";
  }

  function updateMap() {
    var flow = WORK.map.flows[mapState.flow];
    $$(".tab").forEach(function (b, i) {
      b.setAttribute("aria-selected", i === mapState.flow ? "true" : "false");
      b.tabIndex = i === mapState.flow ? 0 : -1;
    });
    $("#steps").innerHTML = flow.steps.map(function (s, i) {
      var cls = i === mapState.step ? "active" : i < mapState.step ? "passed" : "";
      return '<div class="step ' + cls + '"><button type="button" data-step="' + i + '" aria-pressed="' + (i === mapState.step) + '">' +
        '<span class="n">' + (i + 1) + "</span>" + t(s.name) + "</button></div>";
    }).join("");
    var cur = flow.steps[mapState.step];
    $("#detail").innerHTML = "<h4>" + t(cur.name) + "</h4><p>" + t(cur.body) + "</p>";
  }

  function bindMap() {
    var map = $(".map");
    if (!map) return;
    map.addEventListener("click", function (e) {
      var tab = e.target.closest(".tab");
      var step = e.target.closest("[data-step]");
      if (tab) { mapState.flow = +tab.dataset.flow; mapState.step = 0; updateMap(); }
      else if (step) { mapState.step = +step.dataset.step; updateMap(); var again = $('[data-step="' + mapState.step + '"]'); if (again) again.focus(); }
    });
    map.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var tab = e.target.closest(".tab");
      if (!tab) return;
      var n = WORK.map.flows.length;
      mapState.flow = (mapState.flow + (e.key === "ArrowRight" ? 1 : n - 1)) % n;
      mapState.step = 0; updateMap(); $(".tab[aria-selected='true']").focus();
    });
    updateMap();
  }

  function renderWork() {
    var w = WORK, im = w.imysm, br = w.brown;
    $("#work .wrap").innerHTML =
      '<h2 class="rv">' + t(w.title) + "</h2>" +
      '<article class="case">' +
        '<div class="case-head rv">' +
          "<h3>" + im.name + "</h3>" +
          '<p class="role">' + t(im.role) + "</p>" +
          "<p>" + t(im.summary) + "</p>" +
          chips(im.stack) +
          '<a class="link-arrow"' + ext + ' href="' + im.url + '">' + im.urlLabel + ' <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>' +
          '<p class="note">' + t(UI.privateNote) + "</p>" +
        "</div>" +
        '<div class="case-body rv">' +
          "<div><h4>" + t(im.labels.problem) + "</h4><p>" + t(im.problem) + "</p></div>" +
          "<div><h4>" + t(im.labels.built) + "</h4>" + bullets(im.built) + "</div>" +
          '<div class="outcome"><h4>' + t(im.labels.outcome) + "</h4><p>" + t(im.outcome) + "</p></div>" +
        "</div>" +
      "</article>" +
      mapHtml() +
      '<article class="brown rv">' +
        "<div>" +
          "<h3>" + br.name + "</h3>" +
          '<p class="role">' + t(br.role) + "</p>" +
          '<div class="figures">' + br.figures.map(function (f) { return "<div><b>" + num(f.value) + "</b><span>" + t(f.label) + "</span></div>"; }).join("") + "</div>" +
        "</div>" +
        "<div>" +
          "<p>" + t(br.summary) + "</p>" +
          bullets(br.points) +
          chips(br.stack) +
          '<a class="link-arrow"' + ext + ' href="' + br.url + '">' + br.urlLabel + ' <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>' +
        "</div>" +
      "</article>";
    bindMap();
  }

  function renderExperience() {
    $("#experience .wrap").innerHTML =
      '<h2 class="rv">' + t(EXPERIENCE.title) + "</h2>" +
      '<div class="rail">' + EXPERIENCE.items.map(function (e, i) {
        var sub = e.sub
          ? '<details><summary>' + t(e.sub.title) + '<i class="ph ph-plus" aria-hidden="true"></i></summary>' + bullets(e.sub.items) + "</details>"
          : "";
        return '<div class="entry rv' + (i === 0 || i === 2 ? " major" : "") + '">' +
          '<p class="entry-date">' + (lang === "vi" ? e.dateVi : e.date) + "</p>" +
          "<h3>" + t(e.role) + "</h3>" +
          '<p class="meta">' + t(e.meta) + "</p>" +
          bullets(e.body) + sub + "</div>";
      }).join("") + "</div>";
  }

  function renderUniversity() {
    var u = UNIVERSITY;
    var gh = function (url) { return '<a class="link-arrow"' + ext + ' href="' + url + '">' + t(UI.github) + ' <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>'; };
    $("#university .wrap").innerHTML =
      '<h2 class="rv">' + t(u.title) + "</h2>" +
      '<div class="bento">' +
        (u.thesis ? '<article class="cell thesis rv"><span class="date">' + t(u.thesis.date) + "</span><h3>" + t(u.thesis.name) + '</h3><p class="cs">' + t(u.thesis.sub) + "</p><p>" + t(u.thesis.body) + "</p>" + chips(u.thesis.stack) + "</article>" : "") +
        '<article class="cell voucher rv" style="--d:.06s"><span class="date">' + u.voucher.date + "</span><h3>" + t(u.voucher.name) + '</h3><p class="cs">' + t(u.voucher.sub) + "</p><p>" + t(u.voucher.body) + "</p>" + chips(u.voucher.stack) + '<div class="cell-links"><a class="link-arrow"' + ext + ' href="' + u.voucher.demo + '">' + t(UI.demo) + ' <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>' + gh(u.voucher.url) + "</div></article>" +
        '<article class="cell homestay rv" style="--d:.08s"><span class="date">' + u.homestay.date + "</span><h3>" + u.homestay.name + '</h3><p class="cs">' + t(u.homestay.sub) + "</p><p>" + t(u.homestay.body) + "</p>" + chips(u.homestay.stack) + gh(u.homestay.url) + "</article>" +
        '<article class="cell hospital rv" style="--d:.16s"><span class="date">' + u.hospital.date + "</span><h3>" + t(u.hospital.name) + '</h3><p class="cs">' + t(u.hospital.sub) + "</p><p>" + t(u.hospital.body) + "</p>" + chips(u.hospital.stack) + gh(u.hospital.url) + "</article>" +
      "</div>";
  }

  function renderSkills() {
    var s = SKILLS, n = s.layers.length;
    $("#skills .wrap").innerHTML =
      '<h2 class="rv">' + t(s.title) + "</h2>" +
      '<p class="skills-intro rv">' + t(s.intro) + "</p>" +
      '<div class="strata">' + s.layers.map(function (l, i) {
        return '<div class="layer rv' + (l.edge ? " edge" : "") + '" style="--step:' + (n - 1 - i) + ';--d:' + i * 0.05 + 's"><h3>' + t(l.name) + "</h3>" + chips(l.items) + "</div>";
      }).join("") + "</div>" +
      (s.business ? '<div class="business rv"><h3>' + t(s.business.name) + "</h3>" + chips(s.business.items) + "</div>" : "");
  }

  function renderEducation() {
    var e = EDU;
    $("#education .wrap").innerHTML =
      '<h2 class="rv">' + t(e.title) + "</h2>" +
      '<div class="edu">' +
        '<div class="rv"><h3>' + t(e.school.name) + '</h3><p class="meta">' + t(e.school.meta) + "</p>" + ledger(e.school.rows.map(function (r) { return { label: r.label, value: t(r.value) }; }), true) + "</div>" +
        '<div class="rv"><h3 class="cols-title">' + t(e.certsTitle) + "</h3>" + e.certs.map(function (g) {
          return '<div class="cert-group"><h4>' + t(g.group) + "</h4><ul>" + g.rows.map(function (r) {
            return '<li><a' + ext + ' href="' + r.url + '">' + r.name + '</a><span class="dots" aria-hidden="true"></span><span class="by">' + r.by + ", " + r.date + "</span></li>";
          }).join("") + "</ul></div>";
        }).join("") + "</div>" +
      "</div>";
  }

  function renderContact() {
    var c = CONTACT;
    $("#contact .wrap").innerHTML =
      '<h2 class="rv">' + t(c.title) + "</h2>" +
      '<p class="rv">' + t(c.body) + "</p>" +
      '<div class="rv"><a class="btn primary" href="mailto:' + PROFILE.email + '">' + t(UI.cta) + ' <i class="ph ph-arrow-right" aria-hidden="true"></i></a></div>' +
      '<div class="contact-links rv">' +
        '<a href="mailto:' + PROFILE.email + '"><i class="ph ph-envelope-simple" aria-hidden="true"></i>' + PROFILE.email + "</a>" +
        '<a' + ext + ' href="' + PROFILE.github + '"><i class="ph ph-github-logo" aria-hidden="true"></i>GitHub</a>' +
        '<a' + ext + ' href="' + PROFILE.linkedin + '"><i class="ph ph-linkedin-logo" aria-hidden="true"></i>LinkedIn</a>' +
        '<a' + ext + ' href="' + PROFILE.cvEn + '"><i class="ph ph-download-simple" aria-hidden="true"></i>' + t(c.cvEn) + "</a>" +
        '<a' + ext + ' href="' + PROFILE.cvVi + '"><i class="ph ph-download-simple" aria-hidden="true"></i>' + t(c.cvVi) + "</a>" +
      "</div>";
    $("#footer").textContent = "© 2026 " + PROFILE.name + ". " + t(UI.footer);
  }

  /* ---------- behaviour ---------- */
  var io;
  function reveal(instant) {
    var els = $$(".rv");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    if (io) io.disconnect();
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (e) { if (instant) e.classList.add("in"); else io.observe(e); });
  }

  var navIo;
  function trackNav() {
    if (!("IntersectionObserver" in window)) return;
    if (navIo) navIo.disconnect();
    var links = $$("#navLinks a");
    navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("href") === "#" + en.target.id ? "true" : "false"); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    UI.nav.forEach(function (n) { var s = document.getElementById(n.id); if (s) navIo.observe(s); });
  }

  function renderAll(instant) {
    root.lang = lang;
    renderNav(); renderHero(); renderResults(); renderAbout(); renderWork();
    renderExperience(); renderUniversity(); renderSkills(); renderEducation(); renderContact();
    reveal(instant); trackNav();
  }

  $("#lang").addEventListener("click", function () {
    lang = lang === "en" ? "vi" : "en";
    store("lang", lang);
    renderAll(true);
  });

  function isDark() {
    var a = root.getAttribute("data-theme");
    return a ? a === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function syncThemeIcon() {
    $("#theme i").className = "ph " + (isDark() ? "ph-sun" : "ph-moon");
  }
  $("#theme").addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next); store("theme", next); syncThemeIcon();
  });

  var saved = load("lang");
  if (saved === "vi" || saved === "en") lang = saved;
  else if ((navigator.language || "").toLowerCase().indexOf("vi") === 0) lang = "vi";
  renderAll(false);
  syncThemeIcon();
})();
