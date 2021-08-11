const http = require('http');
const url=  'http://api.weatherstack.com/current?access_key=52e6cbf91e6caa4332cf3be7969299ca&query=16.025,80.067';

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
         data = data + chunk;   
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

})

request.on('error', (error) => {
    console.log('An Error ', Error)
})

request.end();