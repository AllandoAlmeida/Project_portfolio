const baseUrl = 'https://api.github.com/users';
const getUser = 'AllandoAlmeida';


export async function searchUser() {
  const response = await fetch(`${baseUrl}/${getUser}`, {
    method: "GET"
  });

  if (response.ok) {
    const userName = await response.json();
    console.log(userName)
    const user = {
      name: userName.name,
      username: userName.login,
      bio: userName.bio,
      avatar_url: userName.avatar_url,
      html_url: userName.html_url
    };
    console.log('Função searchUser:', user);
    return user
  }
}

export async function searchRepos() {
  const response = await fetch(`${baseUrl}/${getUser}/repos`, {
    method: "GET"
  });

  if (response.ok) {
    const repositories = await response.json();
    console.log(repositories)
    const projects = repositories.map(repo => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage
    }));

    console.log('Função searchRepos:', projects);
    return projects;
  }
}