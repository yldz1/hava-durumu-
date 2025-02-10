//hava durumu projesidir
const url = 'https://api.openweathermap.org/data/3.0/';
const key = 'f386a1aefe7b3444be2b1cce46828e11';


const setQuery = () => {
    if (e.keyCode == '13')
        getResult(searchBar.value)

}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query),
    .then(weather => {
        return weather.json()


    })
            .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innettext = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innertext = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.min.temp_min)}°C / ${Math.round(result.min.temp_max)}°C `

}

const searchBar = document.getElementById('searcBar');
searchBar.addEventListener('keypress', setQuery);
