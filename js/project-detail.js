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

        function initSceneCarousels(rootEl) {
            if (!rootEl) {
                return;
            }

            var carousels = rootEl.querySelectorAll('[data-scene-carousel]');
            carousels.forEach(function (carouselEl) {
                var slides = carouselEl.querySelectorAll('[data-carousel-slide]');
                if (!slides.length) {
                    return;
                }

                var dots = carouselEl.querySelectorAll('[data-carousel-dot]');
                var captions = carouselEl.querySelectorAll('[data-carousel-caption]');
                var prevButton = carouselEl.querySelector('[data-carousel-prev]');
                var nextButton = carouselEl.querySelector('[data-carousel-next]');
                var currentIndex = 0;

                function renderCarousel() {
                    slides.forEach(function (slide, index) {
                        var isActive = index === currentIndex;
                        slide.classList.toggle('opacity-100', isActive);
                        slide.classList.toggle('opacity-0', !isActive);
                        slide.classList.toggle('pointer-events-auto', isActive);
                        slide.classList.toggle('pointer-events-none', !isActive);
                    });

                    dots.forEach(function (dot, index) {
                        var isActive = index === currentIndex;
                        dot.classList.toggle('bg-primary', isActive);
                        dot.classList.toggle('bg-slate-300', !isActive);
                    });

                    captions.forEach(function (caption, index) {
                        caption.classList.toggle('hidden', index !== currentIndex);
                    });
                }

                if (prevButton) {
                    prevButton.addEventListener('click', function () {
                        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                        renderCarousel();
                    });
                }

                if (nextButton) {
                    nextButton.addEventListener('click', function () {
                        currentIndex = (currentIndex + 1) % slides.length;
                        renderCarousel();
                    });
                }

                dots.forEach(function (dot) {
                    dot.addEventListener('click', function () {
                        var index = Number(dot.getAttribute('data-carousel-dot'));
                        if (!Number.isNaN(index)) {
                            currentIndex = index;
                            renderCarousel();
                        }
                    });
                });

                renderCarousel();
            });
        }

        function initSceneShowcaseCarousels(rootEl) {
            if (!rootEl) {
                return;
            }

            var showcases = rootEl.querySelectorAll('[data-scene-showcase]');
            showcases.forEach(function (showcaseEl) {
                var track = showcaseEl.querySelector('[data-scene-track]');
                var cards = showcaseEl.querySelectorAll('[data-scene-card]');
                if (!track || !cards.length) {
                    return;
                }

                var prevButton = showcaseEl.querySelector('[data-scene-prev]');
                var nextButton = showcaseEl.querySelector('[data-scene-next]');
                var dots = showcaseEl.querySelectorAll('[data-scene-dot]');
                var indexLabel = showcaseEl.querySelector('[data-scene-index]');
                var currentIndex = 0;

                function renderShowcase() {
                    track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

                    dots.forEach(function (dot, dotIndex) {
                        var isActive = dotIndex === currentIndex;
                        dot.classList.toggle('bg-primary', isActive);
                        dot.classList.toggle('bg-slate-300', !isActive);
                    });

                    if (indexLabel) {
                        indexLabel.textContent = (currentIndex + 1) + ' / ' + cards.length;
                    }
                }

                if (prevButton) {
                    prevButton.addEventListener('click', function () {
                        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                        renderShowcase();
                    });
                }

                if (nextButton) {
                    nextButton.addEventListener('click', function () {
                        currentIndex = (currentIndex + 1) % cards.length;
                        renderShowcase();
                    });
                }

                dots.forEach(function (dot) {
                    dot.addEventListener('click', function () {
                        var dotIndex = Number(dot.getAttribute('data-scene-dot'));
                        if (!Number.isNaN(dotIndex)) {
                            currentIndex = dotIndex;
                            renderShowcase();
                        }
                    });
                });

                renderShowcase();
            });
        }

        function initIterationInteractions(rootEl) {
            if (!rootEl) {
                return;
            }

            var feedbackCards = rootEl.querySelectorAll('[data-iteration-feedback]');
            feedbackCards.forEach(function (card) {
                var details = card.querySelector('[data-feedback-details]');
                var toggleDetailsButton = card.querySelector('[data-feedback-toggle]');
                var beforeButton = card.querySelector('[data-feedback-view="before"]');
                var afterButton = card.querySelector('[data-feedback-view="after"]');
                var beforePanel = card.querySelector('[data-feedback-panel="before"]');
                var afterPanel = card.querySelector('[data-feedback-panel="after"]');

                function setExpanded(isExpanded) {
                    if (!details || !toggleDetailsButton) {
                        return;
                    }
                    details.classList.toggle('max-h-0', !isExpanded);
                    details.classList.toggle('max-h-[520px]', isExpanded);
                    details.classList.toggle('opacity-0', !isExpanded);
                    details.classList.toggle('opacity-100', isExpanded);
                    toggleDetailsButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
                    toggleDetailsButton.textContent = isExpanded ? 'Hide Improvement' : 'View Improvement';
                }

                function setView(view) {
                    var showBefore = view === 'before';
                    if (beforePanel && afterPanel) {
                        beforePanel.classList.toggle('hidden', !showBefore);
                        afterPanel.classList.toggle('hidden', showBefore);
                    }
                    if (beforeButton && afterButton) {
                        beforeButton.classList.toggle('bg-primary', showBefore);
                        beforeButton.classList.toggle('text-white', showBefore);
                        beforeButton.classList.toggle('bg-white', !showBefore);
                        beforeButton.classList.toggle('text-slate-600', !showBefore);

                        afterButton.classList.toggle('bg-primary', !showBefore);
                        afterButton.classList.toggle('text-white', !showBefore);
                        afterButton.classList.toggle('bg-white', showBefore);
                        afterButton.classList.toggle('text-slate-600', showBefore);
                    }
                }

                if (toggleDetailsButton) {
                    toggleDetailsButton.addEventListener('click', function () {
                        var isExpanded = toggleDetailsButton.getAttribute('aria-expanded') === 'true';
                        setExpanded(!isExpanded);
                    });
                }

                if (beforeButton) {
                    beforeButton.addEventListener('click', function () {
                        setView('before');
                    });
                }

                if (afterButton) {
                    afterButton.addEventListener('click', function () {
                        setView('after');
                    });
                }

                setExpanded(false);
                setView('before');
            });
        }

        function initEvaluationInteractions(rootEl) {
            if (!rootEl) {
                return;
            }

            var sections = rootEl.querySelectorAll('[data-evaluation-showcase]');
            sections.forEach(function (sectionEl) {
                var metricsTab = sectionEl.querySelector('[data-eval-tab="metrics"]');
                var quotesTab = sectionEl.querySelector('[data-eval-tab="quotes"]');
                var metricsPanel = sectionEl.querySelector('[data-eval-panel="metrics"]');
                var quotesPanel = sectionEl.querySelector('[data-eval-panel="quotes"]');
                var quoteSlides = sectionEl.querySelectorAll('[data-eval-quote]');
                var quoteDots = sectionEl.querySelectorAll('[data-eval-quote-dot]');
                var quotePrev = sectionEl.querySelector('[data-eval-quote-prev]');
                var quoteNext = sectionEl.querySelector('[data-eval-quote-next]');
                var quoteIndexLabel = sectionEl.querySelector('[data-eval-quote-index]');
                var currentQuoteIndex = 0;

                function setTab(tab) {
                    var metricsActive = tab === 'metrics';
                    if (metricsPanel && quotesPanel) {
                        metricsPanel.classList.toggle('hidden', !metricsActive);
                        quotesPanel.classList.toggle('hidden', metricsActive);
                    }
                    if (metricsTab && quotesTab) {
                        metricsTab.classList.toggle('bg-primary', metricsActive);
                        metricsTab.classList.toggle('text-white', metricsActive);
                        metricsTab.classList.toggle('bg-white', !metricsActive);
                        metricsTab.classList.toggle('text-slate-600', !metricsActive);

                        quotesTab.classList.toggle('bg-primary', !metricsActive);
                        quotesTab.classList.toggle('text-white', !metricsActive);
                        quotesTab.classList.toggle('bg-white', metricsActive);
                        quotesTab.classList.toggle('text-slate-600', metricsActive);
                    }
                }

                function renderQuotes() {
                    quoteSlides.forEach(function (slide, index) {
                        slide.classList.toggle('hidden', index !== currentQuoteIndex);
                    });
                    quoteDots.forEach(function (dot, index) {
                        var isActive = index === currentQuoteIndex;
                        dot.classList.toggle('bg-primary', isActive);
                        dot.classList.toggle('bg-slate-300', !isActive);
                    });
                    if (quoteIndexLabel) {
                        quoteIndexLabel.textContent = quoteSlides.length ? (currentQuoteIndex + 1) + ' / ' + quoteSlides.length : '';
                    }
                }

                if (metricsTab) {
                    metricsTab.addEventListener('click', function () {
                        setTab('metrics');
                    });
                }
                if (quotesTab) {
                    quotesTab.addEventListener('click', function () {
                        setTab('quotes');
                    });
                }
                if (quotePrev) {
                    quotePrev.addEventListener('click', function () {
                        if (!quoteSlides.length) {
                            return;
                        }
                        currentQuoteIndex = (currentQuoteIndex - 1 + quoteSlides.length) % quoteSlides.length;
                        renderQuotes();
                    });
                }
                if (quoteNext) {
                    quoteNext.addEventListener('click', function () {
                        if (!quoteSlides.length) {
                            return;
                        }
                        currentQuoteIndex = (currentQuoteIndex + 1) % quoteSlides.length;
                        renderQuotes();
                    });
                }
                quoteDots.forEach(function (dot) {
                    dot.addEventListener('click', function () {
                        var dotIndex = Number(dot.getAttribute('data-eval-quote-dot'));
                        if (!Number.isNaN(dotIndex)) {
                            currentQuoteIndex = dotIndex;
                            renderQuotes();
                        }
                    });
                });

                setTab('metrics');
                renderQuotes();
            });
        }

        function initResearchInteractions(rootEl) {
            if (!rootEl) {
                return;
            }

            var sections = rootEl.querySelectorAll('[data-research-showcase]');
            sections.forEach(function (sectionEl) {
                var findingsTab = sectionEl.querySelector('[data-research-tab="findings"]');
                var goalsTab = sectionEl.querySelector('[data-research-tab="goals"]');
                var findingsPanel = sectionEl.querySelector('[data-research-panel="findings"]');
                var goalsPanel = sectionEl.querySelector('[data-research-panel="goals"]');

                function setTab(tab) {
                    var findingsActive = tab === 'findings';
                    if (findingsPanel && goalsPanel) {
                        findingsPanel.classList.toggle('hidden', !findingsActive);
                        goalsPanel.classList.toggle('hidden', findingsActive);
                    }
                    if (findingsTab && goalsTab) {
                        findingsTab.classList.toggle('bg-primary', findingsActive);
                        findingsTab.classList.toggle('text-white', findingsActive);
                        findingsTab.classList.toggle('bg-white', !findingsActive);
                        findingsTab.classList.toggle('text-slate-600', !findingsActive);

                        goalsTab.classList.toggle('bg-primary', !findingsActive);
                        goalsTab.classList.toggle('text-white', !findingsActive);
                        goalsTab.classList.toggle('bg-white', findingsActive);
                        goalsTab.classList.toggle('text-slate-600', findingsActive);
                    }
                }

                if (findingsTab) {
                    findingsTab.addEventListener('click', function () {
                        setTab('findings');
                    });
                }
                if (goalsTab) {
                    goalsTab.addEventListener('click', function () {
                        setTab('goals');
                    });
                }

                setTab('findings');
            });
        }

        function initReflectionInteractions(rootEl) {
            if (!rootEl) {
                return;
            }

            var items = rootEl.querySelectorAll('[data-reflection-item]');
            items.forEach(function (itemEl) {
                var toggleButton = itemEl.querySelector('[data-reflection-toggle]');
                var details = itemEl.querySelector('[data-reflection-details]');

                if (!toggleButton || !details) {
                    return;
                }

                function setExpanded(expanded) {
                    details.classList.toggle('max-h-0', !expanded);
                    details.classList.toggle('max-h-80', expanded);
                    details.classList.toggle('opacity-0', !expanded);
                    details.classList.toggle('opacity-100', expanded);
                    toggleButton.setAttribute('aria-expanded', expanded ? 'true' : 'false');
                    toggleButton.textContent = expanded ? 'Hide Details' : 'View Details';
                }

                toggleButton.addEventListener('click', function () {
                    var expanded = toggleButton.getAttribute('aria-expanded') === 'true';
                    setExpanded(!expanded);
                });

                setExpanded(false);
            });
        }

        function initHeroImageLightbox(rootEl) {
            if (!rootEl) {
                return;
            }

            var triggers = rootEl.querySelectorAll('[data-hero-lightbox-trigger]');
            if (!triggers.length) {
                return;
            }

            var modal = document.getElementById('project-hero-lightbox');
            if (!modal) {
                modal = document.createElement('div');
                modal.id = 'project-hero-lightbox';
                modal.className = 'hidden fixed inset-0 z-[90] items-center justify-center bg-slate-900/80 p-4 sm:p-6';
                modal.innerHTML = [
                    '<div class="relative max-w-6xl w-full">',
                    '<button type="button" data-hero-lightbox-close class="absolute -top-3 -right-3 sm:top-2 sm:right-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-800 shadow-md hover:bg-slate-100 transition" aria-label="Close image">&times;</button>',
                    '<img data-hero-lightbox-image src="" alt="" class="w-full max-h-[85vh] object-contain rounded-xl bg-white"/>',
                    '</div>'
                ].join('');
                document.body.appendChild(modal);
            }

            var modalImage = modal.querySelector('[data-hero-lightbox-image]');
            var closeButton = modal.querySelector('[data-hero-lightbox-close]');

            function closeModal() {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                if (modalImage) {
                    modalImage.setAttribute('src', '');
                    modalImage.setAttribute('alt', '');
                }
            }

            triggers.forEach(function (trigger) {
                trigger.addEventListener('click', function () {
                    if (!modalImage) {
                        return;
                    }
                    modalImage.setAttribute('src', trigger.getAttribute('data-hero-image-src') || '');
                    modalImage.setAttribute('alt', trigger.getAttribute('data-hero-image-alt') || '');
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                });
            });

            if (closeButton && !closeButton.dataset.bound) {
                closeButton.dataset.bound = 'true';
                closeButton.addEventListener('click', closeModal);
            }

            if (!modal.dataset.overlayBound) {
                modal.dataset.overlayBound = 'true';
                modal.addEventListener('click', function (event) {
                    if (event.target === modal) {
                        closeModal();
                    }
                });
                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
                        closeModal();
                    }
                });
            }
        }

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

                if (Array.isArray(sectionValue.subsections) && sectionValue.subsections.length > 0) {
                    parts.push('<div class="space-y-5">');
                    parts.push(sectionValue.subsections.map(function (item) {
                        var subsectionClassName = item && item.variant === 'highlight'
                            ? 'rounded-xl border border-primary/20 bg-primary/5 p-5'
                            : '';

                        return [
                            '<div' + (subsectionClassName ? ' class="' + subsectionClassName + '"' : '') + '>',
                            '<h3 class="text-sm font-semibold text-slate-900 mb-2">' + (item.title || 'Section') + '</h3>',
                            '<p class="' + (item && item.variant === 'highlight' ? 'text-slate-700 italic leading-relaxed' : 'text-slate-600 leading-relaxed') + '">' + (item.content || '') + '</p>',
                            '</div>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');
                }

                if (Array.isArray(sectionValue.cards) && sectionValue.cards.length > 0) {
                    parts.push('<h3 class="text-sm font-semibold text-slate-900 mb-3">' + (sectionValue.cardsTitle || 'Key Findings') + '</h3>');
                    parts.push('<div class="grid gap-3 sm:grid-cols-2 mb-8">');
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
                    parts.push('<div class="space-y-3 mb-8">');
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

                if (Array.isArray(sectionValue.sceneShowcase) && sectionValue.sceneShowcase.length > 0) {
                    parts.push('<div data-scene-showcase class="w-full max-w-5xl mx-auto overflow-x-hidden box-border px-1 sm:px-0 space-y-4">');
                    parts.push('<div class="w-full flex items-center gap-2 sm:gap-3">');
                    parts.push('<button type="button" data-scene-prev class="flex-shrink-0 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-primary/40 bg-primary text-white shadow-md hover:bg-secondary transition" aria-label="Previous scene">&#8592;</button>');
                    parts.push('<div class="flex-1 min-w-0 overflow-hidden rounded-xl">');
                    parts.push('<div data-scene-track class="flex w-full transition-transform duration-500 ease-in-out will-change-transform">');
                    parts.push(sectionValue.sceneShowcase.map(function (scene, sceneIndex) {
                        var figureItems = Array.isArray(scene.figures) ? scene.figures : [];
                        return [
                            '<div data-scene-card class="w-full min-w-full max-w-full flex-shrink-0 box-border">',
                            '<article class="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">',
                            '<h3 class="text-lg sm:text-xl font-bold font-heading text-slate-900 mb-2">' + (scene.title || 'Scene') + '</h3>',
                            '<p class="text-slate-600 leading-relaxed">' + (scene.description || '') + '</p>',
                            (Array.isArray(scene.bullets) && scene.bullets.length > 0
                                ? '<ul class="list-disc list-outside ml-5 mt-3 space-y-1.5 text-slate-600 leading-relaxed">' + scene.bullets.map(function (item) {
                                    return '<li>' + item + '</li>';
                                }).join('') + '</ul>'
                                : ''),
                            (figureItems.length > 0
                                ? '<div class="mt-5 w-full overflow-x-hidden box-border" data-scene-carousel="' + sceneIndex + '"><div class="relative w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50 aspect-[16/9]">' + figureItems.map(function (figure, figureIndex) {
                                    return '<figure data-carousel-slide="' + figureIndex + '" class="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none"><img src="' + figure.src + '" alt="' + (figure.alt || figure.caption || scene.title || 'Scene figure') + '" class="w-full h-full object-contain"/></figure>';
                                }).join('') + '</div>' + (figureItems.length > 1
                                    ? '<div class="mt-3 flex flex-wrap items-center justify-between gap-2 sm:gap-3"><button type="button" data-carousel-prev class="inline-flex items-center px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition">Previous</button><div class="flex items-center gap-2">' + figureItems.map(function (_, dotIndex) {
                                        return '<button type="button" data-carousel-dot="' + dotIndex + '" class="h-2.5 w-2.5 rounded-full bg-slate-300 transition-colors" aria-label="Go to figure ' + (dotIndex + 1) + '"></button>';
                                    }).join('') + '</div><button type="button" data-carousel-next class="inline-flex items-center px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition">Next</button></div>'
                                    : '') + (figureItems.some(function (figure) { return !!figure.caption; })
                                        ? '<div class="mt-2 min-h-[1.25rem] text-xs sm:text-sm text-slate-500">' + figureItems.map(function (figure, figureIndex) {
                                            return '<p data-carousel-caption="' + figureIndex + '" class="hidden">' + (figure.caption || '') + '</p>';
                                        }).join('') + '</div>'
                                        : '') + '</div>'
                                : ''),
                            '</article>',
                            '</div>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');
                    parts.push('</div>');
                    parts.push('<button type="button" data-scene-next class="flex-shrink-0 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-primary/40 bg-primary text-white shadow-md hover:bg-secondary transition" aria-label="Next scene">&#8594;</button>');
                    parts.push('</div>');
                    parts.push('<div class="w-full flex flex-wrap items-center justify-center gap-3">');
                    parts.push('<div class="flex items-center gap-2">');
                    parts.push(sectionValue.sceneShowcase.map(function (_, sceneIndex) {
                        return '<button type="button" data-scene-dot="' + sceneIndex + '" class="h-2.5 w-2.5 rounded-full bg-slate-300 transition-colors" aria-label="Go to scene ' + (sceneIndex + 1) + '"></button>';
                    }).join(''));
                    parts.push('</div>');
                    parts.push('<p data-scene-index class="text-sm text-slate-500 min-w-12 text-center"></p>');
                    parts.push('</div>');
                    parts.push('</div>');
                }

                if (Array.isArray(sectionValue.iterationFeedback) && sectionValue.iterationFeedback.length > 0) {
                    parts.push('<div class="space-y-4">');
                    parts.push(sectionValue.iterationFeedback.map(function (item, index) {
                        return [
                            '<article data-iteration-feedback class="rounded-xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 transition-all duration-300 hover:shadow-md">',
                            '<div class="flex items-start justify-between gap-4">',
                            '<div>',
                            '<p class="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Feedback ' + (index + 1) + '</p>',
                            '<p class="text-slate-700 leading-relaxed">' + (item.feedback || '') + '</p>',
                            '</div>',
                            '<button type="button" data-feedback-toggle aria-expanded="false" class="inline-flex items-center px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition whitespace-nowrap">View Improvement</button>',
                            '</div>',
                            '<div data-feedback-details class="mt-4 overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out">',
                            '<div class="rounded-lg border border-slate-200 bg-white p-1">',
                            '<div class="inline-flex rounded-md bg-slate-100 p-1 mb-3">',
                            '<button type="button" data-feedback-view="before" class="px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition">Before</button>',
                            '<button type="button" data-feedback-view="after" class="px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition">After</button>',
                            '</div>',
                            '<div class="px-3 pb-3">',
                            '<div data-feedback-panel="before" class="text-sm text-slate-600 leading-relaxed">' + (item.before || '') + '</div>',
                            '<div data-feedback-panel="after" class="hidden text-sm text-slate-600 leading-relaxed"><span class="text-slate-900 font-semibold">Improvement:</span> ' + (item.after || '') + '</div>',
                            '</div>',
                            '</div>',
                            '</div>',
                            '</article>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');
                }

                if (sectionValue.researchShowcase) {
                    var researchFindings = Array.isArray(sectionValue.researchShowcase.findings) ? sectionValue.researchShowcase.findings : [];
                    var researchGoals = Array.isArray(sectionValue.researchShowcase.designGoals) ? sectionValue.researchShowcase.designGoals : [];

                    parts.push('<section data-research-showcase class="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 sm:p-6 space-y-5">');
                    if (sectionValue.researchShowcase.methodTitle || sectionValue.researchShowcase.method) {
                        parts.push('<div class="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">');
                        if (sectionValue.researchShowcase.methodTitle) {
                            parts.push('<p class="text-xs font-semibold uppercase tracking-wider text-primary mb-2">' + sectionValue.researchShowcase.methodTitle + '</p>');
                        }
                        if (sectionValue.researchShowcase.method) {
                            parts.push('<p class="text-slate-700 leading-relaxed">' + sectionValue.researchShowcase.method + '</p>');
                        }
                        parts.push('</div>');
                    }

                    parts.push('<div class="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1">');
                    parts.push('<button type="button" data-research-tab="findings" class="px-3 sm:px-4 py-2 rounded-md text-sm font-semibold transition">Key Findings</button>');
                    parts.push('<button type="button" data-research-tab="goals" class="px-3 sm:px-4 py-2 rounded-md text-sm font-semibold transition">Design Goals</button>');
                    parts.push('</div>');

                    parts.push('<div data-research-panel="findings" class="grid gap-3 sm:grid-cols-2">');
                    parts.push(researchFindings.map(function (item, index) {
                        return [
                            '<article class="rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">',
                            '<p class="text-xs font-semibold text-primary mb-2">' + (index + 1) + '</p>',
                            '<p class="text-sm text-slate-700 leading-relaxed">' + item + '</p>',
                            '</article>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');

                    parts.push('<div data-research-panel="goals" class="hidden space-y-3">');
                    parts.push(researchGoals.map(function (item, index) {
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

                    if (sectionValue.researchShowcase.image) {
                        parts.push('<figure class="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">');
                        parts.push('<div class="overflow-hidden rounded-lg border border-slate-200 bg-slate-50"><img src="' + sectionValue.researchShowcase.image + '" alt="' + (sectionValue.researchShowcase.imageAlt || 'Research figure') + '" class="w-full h-auto object-contain"/></div>');
                        if (sectionValue.researchShowcase.imageCaption) {
                            parts.push('<figcaption class="mt-3 text-sm text-slate-500 text-center">' + sectionValue.researchShowcase.imageCaption + '</figcaption>');
                        }
                        parts.push('</figure>');
                    }

                    parts.push('</section>');
                }

                if (sectionValue.evaluationShowcase) {
                    var metrics = Array.isArray(sectionValue.evaluationShowcase.metrics) ? sectionValue.evaluationShowcase.metrics : [];
                    var quotes = Array.isArray(sectionValue.evaluationShowcase.quotes) ? sectionValue.evaluationShowcase.quotes : [];
                    var links = Array.isArray(sectionValue.evaluationShowcase.links) ? sectionValue.evaluationShowcase.links : [];
                    var highlightMetric = metrics.length > 0 ? metrics[0] : null;

                    parts.push('<section data-evaluation-showcase class="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 sm:p-6 space-y-5">');
                    if (sectionValue.evaluationShowcase.lead) {
                        parts.push('<p class="text-slate-600 leading-relaxed">' + sectionValue.evaluationShowcase.lead + '</p>');
                    }

                    if (highlightMetric) {
                        parts.push('<div class="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">');
                        parts.push('<p class="text-xs font-semibold uppercase tracking-wider text-primary mb-2">' + (highlightMetric.label || 'Metric') + '</p>');
                        parts.push('<p class="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-1">' + (highlightMetric.value || '') + '</p>');
                        if (highlightMetric.description) {
                            parts.push('<p class="text-sm text-slate-600 leading-relaxed">' + highlightMetric.description + '</p>');
                        }
                        parts.push('</div>');
                    }

                    parts.push('<div class="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1">');
                    parts.push('<button type="button" data-eval-tab="metrics" class="px-3 sm:px-4 py-2 rounded-md text-sm font-semibold transition">Key Metrics</button>');
                    parts.push('<button type="button" data-eval-tab="quotes" class="px-3 sm:px-4 py-2 rounded-md text-sm font-semibold transition">Participant Voices</button>');
                    parts.push('</div>');

                    parts.push('<div data-eval-panel="metrics" class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">');
                    parts.push(metrics.slice(1).map(function (item) {
                        return [
                            '<article class="rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">',
                            '<p class="text-xs font-semibold uppercase tracking-wider text-primary mb-2">' + (item.label || 'Metric') + '</p>',
                            '<p class="text-2xl font-bold font-heading text-slate-900 mb-1">' + (item.value || '') + '</p>',
                            (item.description ? '<p class="text-sm text-slate-600 leading-relaxed">' + item.description + '</p>' : ''),
                            '</article>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');

                    parts.push('<div data-eval-panel="quotes" class="hidden space-y-4">');
                    parts.push('<div class="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 min-h-32">');
                    parts.push(quotes.map(function (quote, index) {
                        return '<blockquote data-eval-quote="' + index + '" class="hidden"><p class="text-slate-700 italic leading-relaxed">"' + quote + '"</p></blockquote>';
                    }).join(''));
                    parts.push('</div>');
                    parts.push('<div class="flex items-center justify-between gap-3">');
                    parts.push('<button type="button" data-eval-quote-prev class="inline-flex items-center px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition">Previous</button>');
                    parts.push('<div class="flex items-center gap-2">');
                    parts.push(quotes.map(function (_, index) {
                        return '<button type="button" data-eval-quote-dot="' + index + '" class="h-2.5 w-2.5 rounded-full bg-slate-300 transition-colors" aria-label="Go to quote ' + (index + 1) + '"></button>';
                    }).join(''));
                    parts.push('</div>');
                    parts.push('<div class="flex items-center gap-3">');
                    parts.push('<p data-eval-quote-index class="text-sm text-slate-500"></p>');
                    parts.push('<button type="button" data-eval-quote-next class="inline-flex items-center px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition">Next</button>');
                    parts.push('</div>');
                    parts.push('</div>');
                    parts.push('</div>');

                    if (links.length > 0) {
                        parts.push('<div class="flex flex-wrap gap-3 pt-1">');
                        parts.push(links.map(function (item) {
                            return '<a href="' + (item.url || '#') + '" target="' + ((item.url || '#') === '#' ? '_self' : '_blank') + '" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-secondary transition shadow-sm hover:shadow-md">' + (item.label || 'Open link') + '<span class="ml-2" aria-hidden="true">&rarr;</span></a>';
                        }).join(''));
                        parts.push('</div>');
                    }

                    parts.push('</section>');
                }

                if (sectionValue.reflectionShowcase) {
                    var reflectionItems = Array.isArray(sectionValue.reflectionShowcase.items) ? sectionValue.reflectionShowcase.items : [];
                    parts.push('<section class="space-y-4">');
                    if (sectionValue.reflectionShowcase.lead) {
                        parts.push('<div class="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5"><p class="text-slate-700 leading-relaxed">' + sectionValue.reflectionShowcase.lead + '</p></div>');
                    }

                    parts.push('<div class="space-y-3">');
                    parts.push(reflectionItems.map(function (item, index) {
                        return [
                            '<article data-reflection-item class="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 transition-all duration-300 hover:shadow-md">',
                            '<div class="flex items-start justify-between gap-4">',
                            '<div class="flex items-start gap-3">',
                            '<span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold flex-shrink-0">' + (index + 1) + '</span>',
                            '<div><p class="text-sm font-semibold text-slate-900">' + (item.title || 'Reflection') + '</p></div>',
                            '</div>',
                            '<button type="button" data-reflection-toggle aria-expanded="false" class="inline-flex items-center px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition whitespace-nowrap">View Details</button>',
                            '</div>',
                            '<div data-reflection-details class="mt-3 overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out">',
                            '<p class="text-sm text-slate-600 leading-relaxed">' + (item.detail || '') + '</p>',
                            '</div>',
                            '</article>'
                        ].join('');
                    }).join(''));
                    parts.push('</div>');
                    parts.push('</section>');
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
                    parts.push('<div class="space-y-4 mt-8">');
                    parts.push(sectionValue.placeholderBlocks.map(function (item) {
                        return [
                            '<div class="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">',
                            item.image
                                ? '<figure class="mb-4 overflow-hidden rounded-lg border border-slate-200 bg-white"><img src="' + item.image + '" alt="' + (item.alt || item.title || 'Placeholder image') + '" class="w-full h-auto object-contain"/></figure>'
                                : '',
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
            var hasHeroImage = !!project.heroImage;
            var metaCards = [
                '<div class="bg-slate-50 border border-slate-100 rounded-xl p-4"><p class="text-slate-500 mb-1">Role</p><p class="font-semibold text-slate-900">' + (project.role || 'TBD') + '</p></div>',
                '<div class="bg-slate-50 border border-slate-100 rounded-xl p-4"><p class="text-slate-500 mb-1">Timeline</p><p class="font-semibold text-slate-900">' + (project.timeline || 'TBD') + '</p></div>',
                '<div class="bg-slate-50 border border-slate-100 rounded-xl p-4"><p class="text-slate-500 mb-1">Status</p><p class="font-semibold text-slate-900">' + (project.status || 'TBD') + '</p></div>'
            ];

            hero.innerHTML = [
                '<div class="' + (hasHeroImage ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-6 lg:gap-8 items-start' : '') + '">',
                '<div>',
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
                    : '',
                '</div>',
                hasHeroImage
                    ? '<button type="button" data-hero-lightbox-trigger data-hero-image-src="' + project.heroImage + '" data-hero-image-alt="' + (project.title || 'Project') + ' hero image" class="group relative text-left cursor-zoom-in rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 lg:max-w-[460px] lg:justify-self-end"><img src="' + project.heroImage + '" alt="' + (project.title || 'Project') + ' hero image" class="w-full h-auto object-cover"/><span class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors"></span><span class="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/90 text-slate-700 text-xs font-semibold px-2.5 py-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Zoom</span></button>'
                    : '',
                '</div>'
            ].join('');
            initHeroImageLightbox(hero);
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
            content.classList.add('overflow-x-hidden');
            sectionOrder.forEach(function (section, index) {
                var sectionEl = document.createElement('section');
                sectionEl.id = section.id;
                sectionEl.className = 'reveal rounded-2xl border border-slate-100 bg-white p-7 sm:p-8 overflow-x-hidden box-border';
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
            initSceneCarousels(content);
            initSceneShowcaseCarousels(content);
            initIterationInteractions(content);
            initResearchInteractions(content);
            initEvaluationInteractions(content);
            initReflectionInteractions(content);
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
