(function () {
    function getProjects() {
        return window.PORTFOLIO_PROJECTS || [];
    }

    function renderProjectsList(containerId) {
        var container = document.getElementById(containerId);
        if (!container || !window.ProjectCard) {
            return;
        }

        getProjects().forEach(function (project, index) {
            var card = window.ProjectCard.createProjectCard(project, index);
            container.appendChild(card);
            // Cards are rendered after the global reveal observer initializes,
            // so we activate them manually to prevent hidden content.
            window.setTimeout(function () {
                card.classList.add('active');
            }, 50 + (index * 70));
        });
    }

    function renderProjectDetail(options) {
        var project = getProjects().find(function (item) {
            return item.slug === options.slug;
        });

        if (!project) {
            return;
        }

        var hero = document.getElementById(options.heroId || 'project-hero');
        var tldr = document.getElementById(options.tldrId || 'project-tldr');
        var content = document.getElementById(options.contentId || 'project-content');
        var sideNav = document.getElementById(options.sideNavId || 'project-sections-nav');

        function renderSectionBody(sectionValue) {
            if (Array.isArray(sectionValue)) {
                return [
                    '<ul class="list-disc list-outside ml-5 space-y-2 text-slate-600 leading-relaxed">',
                    sectionValue.map(function (item) {
                        return '<li>' + item + '</li>';
                    }).join(''),
                    '</ul>'
                ].join('');
            }

            if (sectionValue && typeof sectionValue === 'object') {
                var parts = [];

                if (sectionValue.lead) {
                    parts.push('<p class="text-slate-600 leading-relaxed mb-4">' + sectionValue.lead + '</p>');
                }

                if (Array.isArray(sectionValue.cards) && sectionValue.cards.length > 0) {
                    parts.push('<h3 class="text-sm font-semibold text-slate-900 mb-3">' + (sectionValue.cardsTitle || 'Key Findings') + '</h3>');
                    parts.push('<div class="grid gap-3 sm:grid-cols-2">');
                    parts.push(sectionValue.cards.map(function (card, index) {
                        return [
                            '<article class="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">',
                            '<p class="text-xs font-semibold text-primary mb-2">' + (index + 1) + '</p>',
                            '<p class="text-sm text-slate-600 leading-relaxed">' + card + '</p>',
                            '</article>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');
                }

                if (Array.isArray(sectionValue.featureBlocks) && sectionValue.featureBlocks.length > 0) {
                    parts.push('<div class="space-y-3">');
                    parts.push(sectionValue.featureBlocks.map(function (item, index) {
                        return [
                            '<article class="group rounded-xl border border-slate-200 bg-white p-4 sm:p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md">',
                            '<div class="flex items-start gap-3">',
                            '<div class="mt-0.5 h-7 w-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">' + (index + 1) + '</div>',
                            '<p class="text-sm sm:text-[15px] text-slate-700 leading-relaxed">' + item + '</p>',
                            '</div>',
                            '</article>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');
                }

                if (Array.isArray(sectionValue.metricCards) && sectionValue.metricCards.length > 0) {
                    parts.push('<div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">');
                    parts.push(sectionValue.metricCards.map(function (item) {
                        return [
                            '<article class="rounded-xl border border-slate-200 bg-slate-50 p-4">',
                            '<p class="text-xs font-semibold uppercase tracking-wider text-primary mb-2">' + (item.label || 'Metric') + '</p>',
                            '<p class="text-2xl font-bold font-heading text-slate-900 mb-1">' + (item.value || '') + '</p>',
                            (item.description ? '<p class="text-sm text-slate-600 leading-relaxed">' + item.description + '</p>' : ''),
                            '</article>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');
                }

                if (Array.isArray(sectionValue.quoteBlocks) && sectionValue.quoteBlocks.length > 0) {
                    parts.push('<div class="space-y-3">');
                    parts.push(sectionValue.quoteBlocks.map(function (item) {
                        return [
                            '<blockquote class="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">',
                            '<p class="text-slate-700 italic leading-relaxed">"' + item + '"</p>',
                            '</blockquote>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');
                }

                if (Array.isArray(sectionValue.placeholderBlocks) && sectionValue.placeholderBlocks.length > 0) {
                    parts.push('<div class="space-y-4">');
                    parts.push(sectionValue.placeholderBlocks.map(function (item) {
                        return [
                            '<div class="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">',
                            '<p class="text-sm font-semibold text-slate-700 mb-1">' + (item.title || 'Placeholder') + '</p>',
                            '<p class="text-xs text-slate-500">' + (item.description || '') + '</p>',
                            '</div>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');
                }

                if (Array.isArray(sectionValue.linkButtons) && sectionValue.linkButtons.length > 0) {
                    parts.push('<div class="flex flex-wrap gap-3">');
                    parts.push(sectionValue.linkButtons.map(function (item) {
                        return '<a href="' + (item.url || '#') + '" target="' + ((item.url || '#') === '#' ? '_self' : '_blank') + '" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-secondary transition shadow-sm hover:shadow-md">' + (item.label || 'Open link') + '<span class="ml-2" aria-hidden="true">&rarr;</span></a>';
                    }).join(''));
                    parts.push('</div>');
                }

                if (sectionValue.changeShowcase && Array.isArray(sectionValue.changeShowcase.changes)) {
                    var intro = sectionValue.changeShowcase.intro || '';
                    if (intro) {
                        parts.push('<p class="text-slate-600 leading-relaxed mb-4">' + intro + '</p>');
                    }

                    if (sectionValue.changeShowcase.reportLink) {
                        parts.push(
                            '<div class="mb-4"><a href="' + sectionValue.changeShowcase.reportLink.url + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-secondary transition shadow-sm hover:shadow-md">' + (sectionValue.changeShowcase.reportLink.label || 'View Evaluation Report') + '<span class="ml-2" aria-hidden="true">&rarr;</span></a></div>'
                        );
                    }

                    parts.push('<div class="space-y-4">');
                    parts.push(sectionValue.changeShowcase.changes.map(function (item, index) {
                        var changeText = item;
                        var changeImage = null;
                        var changeAlt = 'Iteration change ' + (index + 1);

                        if (item && typeof item === 'object') {
                            changeText = item.text || '';
                            changeImage = item.image || null;
                            changeAlt = item.alt || changeAlt;
                        }

                        return [
                            '<article class="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">',
                            '<div class="flex items-center gap-2 mb-3">',
                            '<span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">' + (index + 1) + '</span>',
                            '<p class="text-sm font-semibold text-slate-900">Change Made</p>',
                            '</div>',
                            '<p class="text-sm text-slate-700 leading-relaxed mb-3">' + changeText + '</p>',
                            changeImage
                                ? '<figure class="rounded-lg border border-slate-200 bg-white overflow-hidden"><img src="' + changeImage + '" alt="' + changeAlt + '" class="w-full h-auto object-contain"/></figure>'
                                : '<div class="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center text-xs text-slate-500">Image placeholder: show this iteration update</div>',
                            '</article>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');
                }

                if (Array.isArray(sectionValue.prototypeShowcase) && sectionValue.prototypeShowcase.length > 0) {
                    parts.push('<div class="space-y-6">');
                    parts.push(sectionValue.prototypeShowcase.map(function (item) {
                        return [
                            '<article class="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">',
                            '<div class="lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">',
                            item.image
                                ? '<figure class="bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200"><img src="' + item.image + '" alt="' + (item.alt || item.title || 'Prototype screenshot') + '" class="w-full h-full object-cover"/></figure>'
                                : '<div class="bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 min-h-48"></div>',
                            '<div class="p-5 sm:p-6 flex flex-col justify-center">',
                            '<p class="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Prototype</p>',
                            '<h3 class="text-xl font-bold font-heading text-slate-900 mb-3">' + (item.title || 'Prototype') + '</h3>',
                            (item.description ? '<p class="text-slate-600 leading-relaxed mb-5">' + item.description + '</p>' : ''),
                            item.link
                                ? '<div><a href="' + item.link + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-secondary transition shadow-sm hover:shadow-md">View ' + (item.buttonLabel || item.title || 'Prototype') + '<span class="ml-2" aria-hidden="true">&rarr;</span></a></div>'
                                : '',
                            '</div>',
                            '</div>',
                            '</article>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');
                }

                if (Array.isArray(sectionValue.bullets) && sectionValue.bullets.length > 0) {
                    parts.push([
                        '<ul class="list-disc list-outside ml-5 mt-4 space-y-2 text-slate-600 leading-relaxed">',
                        sectionValue.bullets.map(function (item) {
                            return '<li>' + item + '</li>';
                        }).join(''),
                        '</ul>'
                    ].join(''));
                }

                return parts.join('');
            }

            return '<p class="text-slate-600 leading-relaxed">' + sectionValue + '</p>';
        }

        if (hero) {
            var metaCards = [
                '<div class="bg-slate-50 border border-slate-100 rounded-xl p-4"><p class="text-slate-500 mb-1">Role</p><p class="font-semibold text-slate-900">' + (project.role || 'TBD') + '</p></div>',
                '<div class="bg-slate-50 border border-slate-100 rounded-xl p-4"><p class="text-slate-500 mb-1">Timeline</p><p class="font-semibold text-slate-900">' + (project.timeline || 'TBD') + '</p></div>',
                '<div class="bg-slate-50 border border-slate-100 rounded-xl p-4"><p class="text-slate-500 mb-1">Status</p><p class="font-semibold text-slate-900">' + (project.status || 'TBD') + '</p></div>'
            ];

            hero.innerHTML = [
                '<p class="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Case Study</p>',
                '<h1 class="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 mb-4">' + project.title + '</h1>',
                '<p class="text-lg text-slate-600 mb-8 max-w-3xl">' + (project.summary || project.description || '') + '</p>',
                '<div class="grid sm:grid-cols-3 gap-4 text-sm mb-4">',
                metaCards.join(''),
                '</div>',
                project.heroLinks && project.heroLinks.length
                    ? '<div class="flex flex-wrap gap-3 mb-4">' + project.heroLinks.map(function (item) {
                        return '<a href="' + (item.url || '#') + '" target="' + ((item.url || '#') === '#' ? '_self' : '_blank') + '" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-secondary transition shadow-sm hover:shadow-md">' + (item.label || 'Open link') + '<span class="ml-2" aria-hidden="true">&rarr;</span></a>';
                    }).join('') + '</div>'
                    : '',
                project.website
                    ? '<div class="rounded-2xl border border-primary/20 bg-primary/5 p-5"><p class="text-sm font-semibold text-slate-900 mb-2">More project details and process</p><a href="' + project.website.url + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-secondary transition shadow-sm hover:shadow-md">' + (project.website.label || 'View site') + '<span class="ml-2" aria-hidden="true">&rarr;</span></a><p class="text-sm text-slate-600 mt-3">' + (project.website.description || '') + '</p></div>'
                    : ''
            ].join('');
        }

        if (tldr) {
            tldr.innerHTML = '<p class="text-slate-700 leading-relaxed">' + (project.tldr || 'This case study will be expanded with final outcomes, design rationale, and measurable impact.') + '</p>';
        }

        var sectionOrder = project.sectionOrder || [
            { id: 'problem', title: 'Problem' },
            { id: 'research', title: 'Research' },
            { id: 'define', title: 'Define' },
            { id: 'solution', title: 'Solution' },
            { id: 'design', title: 'Design' },
            { id: 'iteration', title: 'Iteration' },
            { id: 'impact', title: 'Impact' },
            { id: 'reflection', title: 'Reflection' }
        ];

        if (content) {
            content.innerHTML = '';
            sectionOrder.forEach(function (section, index) {
                var sectionEl = document.createElement('section');
                sectionEl.id = section.id;
                sectionEl.className = 'reveal rounded-2xl border border-slate-100 bg-white p-7 sm:p-8';
                if (index > 0 && index < 4) {
                    sectionEl.classList.add('delay-' + (index * 100));
                }
                sectionEl.innerHTML = [
                    '<h2 class="text-2xl font-bold font-heading text-slate-900 mb-4">' + section.title + '</h2>',
                    renderSectionBody(
                        project.sections && project.sections[section.id]
                            ? project.sections[section.id]
                            : 'Placeholder content for the ' + section.title + ' section. Replace this with specific case study details when ready.'
                    )
                ].join('');
                content.appendChild(sectionEl);
                // Dynamically injected reveal blocks need manual activation.
                window.setTimeout(function () {
                    sectionEl.classList.add('active');
                }, 60 + (index * 80));
            });
        }

        if (sideNav) {
            sideNav.innerHTML = sectionOrder
                .map(function (section) {
                    return '<a href="#' + section.id + '" data-section-link="' + section.id + '" class="block py-1.5 text-sm text-slate-500 hover:text-primary transition-colors">' + section.title + '</a>';
                })
                .join('');

            var navLinks = sideNav.querySelectorAll('[data-section-link]');
            var sectionObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) {
                        return;
                    }
                    navLinks.forEach(function (link) {
                        var isActive = link.getAttribute('data-section-link') === entry.target.id;
                        link.classList.toggle('text-primary', isActive);
                        link.classList.toggle('font-semibold', isActive);
                        link.classList.toggle('text-slate-500', !isActive);
                    });
                });
            }, {
                root: null,
                threshold: 0.45
            });

            sectionOrder.forEach(function (section) {
                var target = document.getElementById(section.id);
                if (target) {
                    sectionObserver.observe(target);
                }
            });
        }
    }

    window.ProjectPages = {
        renderProjectsList: renderProjectsList,
        renderProjectDetail: renderProjectDetail
    };
})();
