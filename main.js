/*
 * Language switching + command palette.
 *
 * Both are progressive enhancement. index.html ships the complete English
 * page, and every section is reachable by ordinary anchor links, so with
 * JavaScript disabled the site loses the French toggle and the palette and
 * nothing else.
 */
(function () {
	'use strict';

	var STORAGE_KEY = 'preferredLanguage';
	var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	var bootTimer;

	function finishBoot() {
		document.documentElement.classList.remove('is-booting');
		if (bootTimer) {
			window.clearTimeout(bootTimer);
			bootTimer = null;
		}
	}

	// Deep links must be usable immediately. The boot sequence is only an
	// enhancement for a normal top-level page opening.
	if (!reduceMotion.matches && !window.location.hash) {
		document.documentElement.classList.add('is-booting');
		bootTimer = window.setTimeout(finishBoot, 1600);
		window.addEventListener('hashchange', finishBoot, { once: true });
	}

	/* ------------------------------------------------------------ i18n */

	var currentLang = 'en';

	function applyTranslations(lang) {
		var dict = translations[lang] || translations.en;

		document.querySelectorAll('[data-i18n]').forEach(function (node) {
			var v = dict[node.dataset.i18n];
			if (typeof v === 'string') { node.textContent = v; }
		});

		document.querySelectorAll('[data-i18n-list]').forEach(function (node) {
			var list = dict[node.dataset.i18nList];
			if (!Array.isArray(list)) { return; }
			node.innerHTML = '';
			list.forEach(function (item) {
				var li = document.createElement('li');
				li.textContent = item;
				node.appendChild(li);
			});
		});

		document.querySelectorAll('[data-i18n-label]').forEach(function (node) {
			var v = dict[node.dataset.i18nLabel];
			if (v) { node.setAttribute('aria-label', v); }
		});

		document.querySelectorAll('[data-i18n-title]').forEach(function (node) {
			var v = dict[node.dataset.i18nTitle];
			if (v) { node.setAttribute('title', v); }
		});

		document.querySelectorAll('[data-i18n-placeholder]').forEach(function (node) {
			var v = dict[node.dataset.i18nPlaceholder];
			if (v) { node.setAttribute('placeholder', v); }
		});

		if (dict.docTitle) { document.title = dict.docTitle; }
		var meta = document.querySelector('meta[name="description"]');
		if (meta && dict.docDescription) { meta.setAttribute('content', dict.docDescription); }

		document.documentElement.lang = lang;
		currentLang = lang;
	}

	function setLanguage(lang, opts) {
		if (!translations[lang]) { return; }

		document.querySelectorAll('.lang-btn').forEach(function (btn) {
			var on = btn.dataset.lang === lang;
			btn.classList.toggle('selected', on);
			btn.setAttribute('aria-pressed', String(on));
		});

		try { localStorage.setItem(STORAGE_KEY, lang); } catch (err) { /* private mode */ }

		// The English copy is already in the markup, so on the very first call
		// there is nothing to rewrite. Any later switch back does need the pass.
		if (!(opts && opts.initial && lang === 'en')) {
			applyTranslations(lang);
		} else {
			currentLang = lang;
		}

		if (paletteIsOpen()) { renderCommands(input.value); }
	}

	function storedLanguage() {
		try {
			var v = localStorage.getItem(STORAGE_KEY);
			return translations[v] ? v : 'en';
		} catch (err) { return 'en'; }
	}

	/* -------------------------------------------------- command palette */

	var palette = document.getElementById('palette');
	var input = document.getElementById('palette-input');
	var list = document.getElementById('palette-list');
	var empty = document.getElementById('palette-empty');
	var openBtn = document.getElementById('palette-open');
	var lastFocus = null;
	var matches = [];
	var active = 0;

	function goto(id) {
		var el = document.getElementById(id);
		if (!el) { return; }
		el.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
		history.replaceState(null, '', '#' + id);
	}

	// `desc` is a translation key, resolved at render time so the list follows
	// the current language.
	var COMMANDS = [
		{ name: 'about',       desc: 'aboutTitle',              run: function () { goto('about'); } },
		{ name: 'projects',    desc: 'projectsTitle',          run: function () { goto('projects'); } },
		{ name: 'technifutur', desc: 'technifuturProjectsTitle', run: function () { goto('technifutur'); } },
		{ name: 'university',  desc: 'universityProjectsTitle', run: function () { goto('university'); } },
		{ name: 'college',     desc: 'collegeProjectsTitle',    run: function () { goto('college'); } },
		{ name: 'skills',      desc: 'pipelineTitle',           run: function () { goto('skills'); } },
		{ name: 'network',     desc: 'pipelineSection2Title',   run: function () { goto('network'); } },
		{ name: 'experience',  desc: 'experienceTitle',         run: function () { goto('experience'); } },
		{ name: 'education',   desc: 'educationTitle',          run: function () { goto('education'); } },
		{ name: 'contact',     desc: 'contactTitle',            run: function () { goto('contact'); } },
		{ name: 'mail',        desc: 'contactEmail',            run: function () { location.href = 'mailto:olexmel@olexhm.dev'; } },
		{ name: 'github',      desc: 'contactGithub',           run: function () { window.open('https://github.com/olexhm', '_blank', 'noreferrer'); } },
		{ name: 'linkedin',    desc: 'contactLinkedIn',         run: function () { window.open('https://www.linkedin.com/in/olexhm', '_blank', 'noreferrer'); } },
		{ name: 'lang en',     desc: 'cmdLang',                 run: function () { setLanguage('en'); }, keep: true },
		{ name: 'lang fr',     desc: 'cmdLang',                 run: function () { setLanguage('fr'); }, keep: true },
		{ name: 'fetch',       desc: 'fetchTitle',               run: function () { window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' }); } },
		{ name: 'top',         desc: 'cmdTop',                  run: function () { window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' }); } },
		{ name: 'help',        desc: 'cmdHelp',                 run: function () { input.value = ''; renderCommands(''); }, keep: true },
		{ name: 'exit',        desc: 'cmdClose',                run: function () { closePalette(); } }
	];

	function renderCommands(query) {
		var dict = translations[currentLang] || translations.en;
		var q = (query || '').trim().toLowerCase();

		matches = COMMANDS.filter(function (c) {
			if (!q) { return true; }
			return c.name.indexOf(q) !== -1 || String(dict[c.desc] || '').toLowerCase().indexOf(q) !== -1;
		});

		if (active >= matches.length) { active = 0; }

		list.innerHTML = '';
		matches.forEach(function (c, i) {
			var li = document.createElement('li');
			li.id = 'cmd-' + i;
			li.setAttribute('role', 'option');
			li.setAttribute('aria-selected', String(i === active));

			var n = document.createElement('span');
			n.className = 'cmd-name';
			n.textContent = c.name;

			var d = document.createElement('span');
			d.className = 'cmd-desc';
			d.textContent = dict[c.desc] || '';

			li.appendChild(n);
			li.appendChild(d);
			li.addEventListener('mousedown', function (ev) { ev.preventDefault(); run(i); });
			list.appendChild(li);
		});

		empty.hidden = matches.length !== 0;
		if (matches.length) { input.setAttribute('aria-activedescendant', 'cmd-' + active); }
		else { input.removeAttribute('aria-activedescendant'); }
	}

	function move(delta) {
		if (!matches.length) { return; }
		active = (active + delta + matches.length) % matches.length;
		renderCommands(input.value);
		var el = document.getElementById('cmd-' + active);
		if (el) { el.scrollIntoView({ block: 'nearest' }); }
	}

	function run(i) {
		var cmd = matches[i];
		if (!cmd) { return; }
		// `keep` commands (help, lang) leave the palette open so you can chain them.
		if (!cmd.keep) { closePalette(); }
		cmd.run();
	}

	function paletteIsOpen() { return palette && !palette.hidden; }

	function openPalette() {
		if (paletteIsOpen()) { return; }
		lastFocus = document.activeElement;
		palette.hidden = false;
		input.setAttribute('aria-expanded', 'true');
		input.value = '';
		active = 0;
		renderCommands('');
		input.focus();
	}

	function closePalette() {
		if (!paletteIsOpen()) { return; }
		palette.hidden = true;
		input.setAttribute('aria-expanded', 'false');
		if (lastFocus && typeof lastFocus.focus === 'function') { lastFocus.focus(); }
		lastFocus = null;
	}

	/* ------------------------------------------------ current section */

	// The nav lists the six top-level sections. Project sub-sections mark their
	// parent, so [projects] stays lit all the way through projects/college.
	var NAV_PARENT = {
		university: 'projects',
		college: 'projects'
	};

	function trackCurrentSection() {
		var links = {};
		document.querySelectorAll('.nav a[href^="#"]').forEach(function (a) {
			links[a.getAttribute('href').slice(1)] = a;
		});

		var sections = document.querySelectorAll('main section[id]');
		if (!sections.length) { return; }

		function mark(id) {
			var target = id ? (NAV_PARENT[id] || id) : null;
			Object.keys(links).forEach(function (key) {
				var on = key === target;
				// `.selected` is the same inverted cell the language buttons use.
				links[key].classList.toggle('selected', on);
				if (on) { links[key].setAttribute('aria-current', 'location'); }
				else { links[key].removeAttribute('aria-current'); }
			});
		}

		function current() {
			// Reaching the bottom marks the last section. #contact is short enough
			// that its top never climbs to the line below, so without this it is
			// the one nav item that could never light up.
			if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
				return sections[sections.length - 1].id;
			}
			// Otherwise: the last section to have crossed a line near the top of
			// the viewport. Marking the first section merely *on screen* instead
			// would keep marking one the reader has already scrolled past, since
			// two sections share the screen for most of any scroll.
			var line = window.innerHeight * 0.15;
			var id = null;
			for (var i = 0; i < sections.length; i++) {
				if (sections[i].getBoundingClientRect().top <= line) { id = sections[i].id; }
			}
			return id;   // null above #about - the header is not a section
		}

		// Coalesced to one read per frame. An IntersectionObserver would spare
		// the listener, but a band thin enough to be accurate can miss a fast
		// scroll entirely, and no band fires on reaching the bottom of the page.
		var queued = false;
		function update() {
			if (queued) { return; }
			queued = true;
			requestAnimationFrame(function () { queued = false; mark(current()); });
		}

		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update, { passive: true });
		update();
	}

	/* --------------------------------------------------------- wiring */

	function isTyping(el) {
		if (!el) { return false; }
		var t = el.tagName;
		return t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT' || el.isContentEditable;
	}

	document.addEventListener('keydown', function (ev) {
		if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === 'k') {
			ev.preventDefault();
			paletteIsOpen() ? closePalette() : openPalette();
			return;
		}
		if (ev.key === ':' && !paletteIsOpen() && !isTyping(document.activeElement)) {
			ev.preventDefault();
			openPalette();
		}
	});

	if (palette) {
		palette.addEventListener('keydown', function (ev) {
			if (ev.key === 'Escape') { ev.preventDefault(); closePalette(); }
			else if (ev.key === 'ArrowDown') { ev.preventDefault(); move(1); }
			else if (ev.key === 'ArrowUp') { ev.preventDefault(); move(-1); }
			else if (ev.key === 'Enter') { ev.preventDefault(); run(active); }
			// The box holds one focusable element, so trapping is just this.
			else if (ev.key === 'Tab') { ev.preventDefault(); }
		});

		palette.addEventListener('mousedown', function (ev) {
			if (ev.target === palette) { closePalette(); }
		});

		input.addEventListener('input', function () { active = 0; renderCommands(input.value); });
	}

	if (openBtn) {
		openBtn.hidden = false;   // only useful with JS, so the markup hides it
		openBtn.addEventListener('click', openPalette);
	}

	document.querySelectorAll('.lang-btn').forEach(function (btn) {
		btn.addEventListener('click', function () { setLanguage(btn.dataset.lang); });
	});

	setLanguage(storedLanguage(), { initial: true });
	trackCurrentSection();
})();
