(function () {
    function createProjectCard(project, index) {
        var article = document.createElement('article');
        var hasBackgroundImage = !!project.cardBackgroundImage;
        article.className = 'project-card reveal rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative';
        if (hasBackgroundImage) {
            article.classList.add('border-slate-200');
        } else {
            article.classList.add('bg-white', 'border-slate-100');
        }
        article.style.transitionDuration = '250ms';

        if (index > 0 && index < 4) {
            article.classList.add('delay-' + (index * 100));
        }

        var tagMarkup = project.tag
            ? '<span class="inline-flex items-center rounded-full ' + (hasBackgroundImage ? 'bg-white/15 text-white border border-white/20 backdrop-blur-sm' : 'bg-slate-100 text-slate-600') + ' px-3 py-1 text-xs font-semibold">' + project.tag + '</span>'
            : '';

        article.innerHTML = hasBackgroundImage ? [
            '<div class="absolute inset-0 bg-cover bg-center" style="background-image: url(\'' + project.cardBackgroundImage + '\');"></div>',
            '<div class="absolute inset-0 bg-slate-900/50"></div>',
            '<div class="relative p-6 sm:p-7 min-h-[280px] flex flex-col">',
            tagMarkup,
            '<div class="mt-5"></div>',
            '<h2 class="text-2xl font-bold font-heading text-white mb-3">' + project.title + '</h2>',
            '<p class="text-slate-100 leading-relaxed flex-grow mb-6 max-w-sm">' + project.description + '</p>',
            '<a href="projects/' + project.slug + '/index.html" class="inline-flex items-center text-white font-semibold hover:text-secondary transition-colors">',
            'View Case Study',
            '<span class="ml-2" aria-hidden="true">&rarr;</span>',
            '</a>',
            '</div>'
        ].join('') : [
            '<div class="p-6 flex flex-col h-full">',
            '<div class="mb-5">',
            tagMarkup,
            '</div>',
            '<h2 class="text-2xl font-bold font-heading text-slate-900 mb-3">' + project.title + '</h2>',
            '<p class="text-slate-600 leading-relaxed flex-grow mb-6">' + project.description + '</p>',
            '<a href="projects/' + project.slug + '/index.html" class="inline-flex items-center text-primary font-semibold hover:text-purple-700 transition-colors">',
            'View Case Study',
            '<span class="ml-2" aria-hidden="true">&rarr;</span>',
            '</a>',
            '</div>'
        ].join('');

        return article;
    }

    window.ProjectCard = {
        createProjectCard: createProjectCard
    };
})();
