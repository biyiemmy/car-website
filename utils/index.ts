export async function fetchcars() {
    const headers = {
        'X-RapidAPI-Key': '5de701399emshd30eb78c0d60e69p122ea5jsn8f0b8cf5ab4a',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    {
        headers: headers
    });

    const result = await response.json()
    // console.log(result)
    return result
}