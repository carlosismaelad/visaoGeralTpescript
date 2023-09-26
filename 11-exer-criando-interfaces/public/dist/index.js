const users = [];
async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    if (user.message) {
        console.log("Usuário não encontrado.");
    }
    else {
        users.push(user);
        console.log(`O usuário ${user.login} foi salvo.` +
            `\nid: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`);
    }
}
async function showUser(username) {
    const user = users.find(user => user.login === username);
    if (typeof user === "undefined") {
        console.log("Usuário não encontrado.");
    }
    else {
        const response = await fetch(user.repos_url);
        const repos = await response.json();
        let message = `id: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`;
        repos.forEach(repo => {
            message += `\nNome: ${repo.name}` +
                `\nDesrição: ${repo.description}` +
                `\nEstrelas: ${repo.stargazers_count}` +
                `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`;
        });
        console.log(message);
    }
}
function showAllUSers() {
    let message = 'Usuários:\n';
    users.forEach(user => {
        message += `\n- ${user.login}`;
    });
    console.log(message);
}
function showReposTotal() {
    const reposTotal = users.reduce((accumulator, user) => accumulator += user.public_repos, 0);
    console.log(`O grupo possui um total de ${reposTotal} repositórios públicos.`);
}
function showTopFiveUsers() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5);
    let message = 'Top 5 usuários com mais repositórios públicos:\n';
    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`;
    });
    console.log(message);
}
async function callingAllFunctions() {
    await fetchUser('carlosismaelad');
    await fetchUser('julianaconde');
    await fetchUser('pcaldass');
    await fetchUser('isaacpontes');
    await fetchUser('lucasqueirogaa');
    await fetchUser('frans203');
    await fetchUser('LeDragoX');
    showUser('carlosismaelad');
    showUser('julianaconde');
    showAllUSers();
    showReposTotal();
    showTopFiveUsers();
}
/*
Chamar a função abaixo no devtools
callingAllFunctions()
*/ 
