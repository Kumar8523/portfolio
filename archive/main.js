// Load projects from JSON
document.addEventListener('DOMContentLoaded', function() {
    fetch('./assets/data/projects.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('projects-container');
            container.innerHTML = '';
            
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project-card bg-white rounded-lg overflow-hidden shadow-md';
                projectElement.innerHTML = `
                    <img src="./assets/images/projects/${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                        <p class="text-gray-600 mb-4">${project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.tags.map(tag => `<span class="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">${tag}</span>`).join('')}
                        </div>
                        <a href="${project.link}" target="_blank" class="text-primary font-medium hover:underline">প্রকল্প দেখুন</a>
                    </div>
                `;
                container.appendChild(projectElement);
            });
        });

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.md\\:flex');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        mobileMenu.classList.toggle('flex-col');
        mobileMenu.classList.toggle('absolute');
        mobileMenu.classList.toggle('bg-white');
        mobileMenu.classList.toggle('w-full');
        mobileMenu.classList.toggle('left-0');
        mobileMenu.classList.toggle('px-6');
        mobileMenu.classList.toggle('py-4');
        mobileMenu.classList.toggle('space-y-4');
        mobileMenu.classList.toggle('space-x-8');
        mobileMenu.classList.toggle('shadow-md');
    });
});
