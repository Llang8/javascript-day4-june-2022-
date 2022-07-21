const mockFetch = function(url, accept) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let apiResponse = {
                colors: ["blue", "red", "green"]
            }
    
            if (accept) {
                resolve(apiResponse)
            } else {
                reject('There was an error in your request.')
            }
        }, 5000)
    })
}

let data = [];
/* mockFetch('https://pokeapi.co/api/v2/pokemon/ditto', true)
    .then((apiResponse) => {
        data = apiResponse;
        console.log(data)
    })
    .catch((err) => console.log(err))
    .finally(() => {
        console.log('Request finished');
    }); */

const makeMockFetch = async () => {
    try {
        console.log('Before await')
        const apiResponse = await mockFetch('https://pokeapi.co/api/v2/pokemon/ditto', true)
        console.log('After await')
    
        console.log(apiResponse)
    } catch (err) {
        console.log(err)
    } finally {
        console.log('Request finished')
    }
}

console.log('Before mock function call')
makeMockFetch()
console.log('After mock function call')