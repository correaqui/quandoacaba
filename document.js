document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
    renderCurrencyChart();
});

// Função para buscar notícias utilizando a NewsAPI
async function fetchNews() {
    const apiKey = '4a1b1a864669404bbd3e4bb0bc406c2b';
    const url = `https://newsapi.org/v2/everything?q=geopolítica&language=pt&sortBy=publishedAt&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
    }
}

// Função para exibir as notícias no HTML
function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        const title = document.createElement('h3');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description || 'Sem descrição disponível.';

        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Leia mais';
        link.target = '_blank';

        newsItem.appendChild(title);
        newsItem.appendChild(description);
        newsItem.appendChild(link);

        newsContainer.appendChild(newsItem);
    });
}

// Função para renderizar o gráfico de impacto econômico utilizando o Chart.js
function renderCurrencyChart() {
    const ctx = document.getElementById('currencyChart').getContext('2d');

    const data = {
        labels: ['Hoje', '1 Semana', '2 Semanas', '1 Mês'],
        datasets: [
            {
                label: 'Dólar (USD)',
                data: [5.50, 5.70, 5.90, 6.10],
                borderColor: 'blue',
                fill: false,
            },
            {
                label: 'Euro (EUR)',
                data: [6.00, 6.20, 6.40, 6.60],
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'Real (BRL)',
                data: [1.00, 0.95, 0.90, 0.85],
                borderColor: 'red',
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Valor da Moeda (em BRL)',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        scaleID: 'x',
                        value: '1 Semana',
                        borderColor: 'orange',
                        borderWidth: 2,
                        label: {
                            content: 'Possível ataque',
                            enabled: true,
                            position: 'top',
                        },
                    },
                    {
                        type: 'line',
                        scaleID: 'x',
                        value: '2 Semanas',
                        borderColor: 'red',
                        borderWidth: 2,
                        label: {
                            content: 'Tensão
::contentReference[oaicite:0]{index=0}
 
