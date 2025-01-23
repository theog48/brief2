document.getElementById("downloadCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "assets/CV_2023-04-22_Théo_GRASSET.pdf";
    link.download = "CV_2023-04-22_Théo_GRASSET.pdf";
    link.click();
});


    document.getElementById('add-projects-button').addEventListener('click', function() {
        fetch('projects.json')
            .then(response => response.json())
            .then(data => {
                const projectsContainer = document.getElementById('additional-projects');
                
                // Ajouter de l'espacement en bas du dernier projet existant
                const lastExistingProject = document.querySelector('#projets .space-y-4 > div:last-child');
                if (lastExistingProject) {
                    lastExistingProject.classList.add('mb-8');
                }
                
                data.forEach(project => {
                    const projectDiv = document.createElement('div');
                    projectDiv.classList.add('bg-gray-800', 'p-6', 'rounded-lg', 'shadow', 'mb-4'); // Ajout d'un espacement en bas
                    
                    const projectTitle = document.createElement('h3');
                    projectTitle.classList.add('text-xl', 'font-bold');
                    projectTitle.textContent = project.title;
                    
                    const projectDescription = document.createElement('p');
                    projectDescription.textContent = project.description;
                    
                    const projectImageDiv = document.createElement('div');
                    projectImageDiv.classList.add('w-full', 'h-48', 'bg-gray-700', 'rounded-lg', 'overflow-hidden');
                    
                    const projectImage = document.createElement('img');
                    projectImage.src = project.image;
                    projectImage.alt = `Image ${project.title}`;
                    projectImage.classList.add('w-full', 'h-full', 'object-cover');
                    
                    projectImageDiv.appendChild(projectImage);
                    
                    const projectLink = document.createElement('a');
                    projectLink.href = project.link;
                    projectLink.target = '_blank';
                    projectLink.appendChild(projectImageDiv);
                    
                    projectDiv.appendChild(projectTitle);
                    projectDiv.appendChild(projectDescription);
                    projectDiv.appendChild(projectLink);
                    
                    projectsContainer.appendChild(projectDiv);
                });

                // Désactiver le bouton et afficher un message
                const button = document.getElementById('add-projects-button');
                button.disabled = true;
                button.textContent = 'Tous les projets sont affichés';
                button.classList.add('bg-gray-500', 'cursor-not-allowed');
            })
            .catch(error => console.error('Erreur lors du chargement des projets :', error));
    });


