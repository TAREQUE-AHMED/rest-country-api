const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}
const getCountryHTML = ({name, flags, area, capital, region}) => {
    return `
    <div class="country">
    <h2>${name.common}</h2>
    <p>Area: ${area}</p>
    <p>Region: ${region}</p>
    <img src = "${flags.png}">
    <p>Capital: ${capital}</p>
    
    </div>
    `
}
loadCountries();