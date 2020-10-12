
export async function getArticles(){
    let response = await fetch("http://ola.alesiaqn.beget.tech/getArticles");
    let articles = await response.json();
    return articles;
}

