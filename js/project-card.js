(function () {
    function createProjectCard(project, index) {
        var article = document.createElement('article');
        article.className = 'project-card reveal bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col';
        article.style.transitionDuration = '250ms';

        if (index > 0 && index < 4) {
            article.classList.add('delay-' + (index * 100));
        }

        var tagMarkup = project.tag
            ? '<span class="inline-flex items-center rounded-full bg-slate-100 text-slate-600 px-3 py-1 text-xs font-semibold">' + project.tag + '</span>'
            : '';

        article.innerHTML = [
            '<div class="mb-5">',
            tagMarkup,
            '</div>',
            '<h2 class="text-2xl font-bold font-heading text-slate-900 mb-3">' + project.title + '</h2>',
            '<p class="text-slate-600 leading-relaxed flex-grow mb-6">' + project.description + '</p>',
            '<a href="projects/' + project.slug + '/index.html" class="inline-flex items-center text-primary font-semibold hover:text-purple-700 transition-colors">',
            'View Case Study',
            '<span class="ml-2" aria-hidden="true">&rarr;</span>',
            '</a>'
        ].join('');

        return article;
    }

    window.ProjectCard = {
        createProjectCard: createProjectCard
    };
})();
