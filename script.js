const username = 'barrigaverd';
const repoUrl = `https://api.github.com/users/${username}/repos`;

const repositoryList = document.getElementById('repository-list');

fetch(repoUrl)
  .then(response => response.json())
  .then(repositories => {
    repositories.forEach(repo => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = repo.html_url;
      link.textContent = repo.name;
      listItem.appendChild(link);
      repositoryList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar repositórios do GitHub:', error);
  });
