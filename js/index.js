const btnSearch = document.getElementById('btnBuscar')
const inputCity = document.getElementById('searchCity')

btnSearch.addEventListener('click', ()=>{
    if (inputCity.value.trim().length >0){
        console.log('@@ input value => ', inputCity.value)
        buscarCiudad(inputCity.value)
    }
})

const buscarCiudad =  async (ciudad) => {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places_prefix?text=${ciudad}&language=es`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3f2803c9c2msh60916547cb73854p12bb2bjsn37316b9e62f8',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}

}