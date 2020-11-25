const key = '0e31b5839a4b10fe945b80608ef09c34'
const formEl = document.querySelector('form');
const details = document.querySelector('.details');

formEl.addEventListener('submit', (e) =>{
    e.preventDefault();
    details.innerHTML = '<h1>Loading...</h1>';
    const location  = e.target.location.value;
    weatherApp(location);
});

async function weatherApp(location){
    const data = await fetchAPI(location);
    generateHTML(data);
}


async function fetchAPI(location){
    const baseURL = `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=${key}&query=${location}`;
    const res = await fetch(baseURL);
    const data = await res.json(); 
    console.log(data);
    return data;

}

function generateHTML(data){
    const html = `
    <h3 class="temp grey-text text-lighten-2">${data.current.temperature}&deg;c</h3>
                <h3 class="status grey-text text-lighten-2">${data.current.weather_descriptions.map(item => item).join(" ")}</h3>
                <div class="query">${data.request.query}</div>
                
    `;
    details.innerHTML = html;
}








