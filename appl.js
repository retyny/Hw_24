

$('#weather').on('click',() => {
    const city = $('#search').val();
    const requestHTTP = 'http://api.openweathermap.org/geo/1.0/direct?q='+ city +'&limit=1&appid=fc41099d3d362eb0a515e21884820e9e'
    $.ajax(requestHTTP, {
        method: 'GET',
        success: (data) => {
            let lat = data[0].lat;
            let lon = data[0].lon;
            const requestHTTPWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat +
                '&lon='+ lon +'&appid=fc41099d3d362eb0a515e21884820e9e'
            $requestHTTPWeather(requestHTTPWeather);
        },
        error: (err) => {
            alert('--------------------------Фатальная Ошибка---------------------------- ' +
                'Для более подробной информации посмотрите в консоль');
        }
    });
});


const $requestHTTPWeather = (requestHTTPWeather) => {
    $.ajax(requestHTTPWeather, {
        method: 'GET',
        success: (dataWeather) => {
            const temp = dataWeather.main.temp - 273.15;
            console.log('temperature: ' + Math. round(temp));
        },
        error: (err) => {
            alert('--------------------------Фатальная Ошибка---------------------------- ' +
                'Для более подробной информации посмотрите в консоль');
        }
    });
}