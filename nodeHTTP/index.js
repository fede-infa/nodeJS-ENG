const http = require('https');
const axios = require('axios');


/* (() =>{
    console.time('request');
    //If axios requests are not related, it can be done executing all the promises together and when they're finished returns the value


    // First way
    const res1 = axios.get('http://pokeapi.co/api/v2/ability/1');
    const res2 = axios.get('http://pokeapi.co/api/v2/ability/1');
    const res3 = axios.get('http://pokeapi.co/api/v2/ability/1');

    // Expect to all petitions to be a valid one, if one of them goes bad then all the promises gives an error.
    const response = Promise.all([res1, res2, res3, res4]);

    // Second way
    const list = [
        'http://pokeapi.co/api/v2/ability/1',
        'http://pokeapi.co/api/v2/ability/1',
        'http://pokeapi.co/api/v2/ability/1'
    ]
    const promises = list.map( async(item) => axios.get(item));

    // Third way
    const promises2 = [];
    for (const item of list) {
        promises2.push(axios.get(item));       
    }

    console.timeEnd('request');

})() */


/**To solve the issue with Promises.all() */

const list = [
        'http://pokeapi.co/api/v2/ability/1',
        'http://pokeapi.co/api/v2/ability/1',
        'http://pokeapi.co/api/v2/ab22ility/1'
    ];

const requestFunction = async (item) =>{
    try{
        const response = await axios.get(item);
        return response.data.effect_changes;

    } catch(error) {
        return Promise.resolve(null)
    }
}

(async () =>{
    const promises = list.map(async (item) => requestFunction(item));
    Promise.all(promises)
        .then( (res) =>{
            console.log('With a function', res);
        })
        .catch( (err) =>{
            console.log('400 request', err)
        })
})();

// With promises settled

(() =>{
    const promises = list.map( async(item) => axios.get(item));
    Promise.allSettled(promises) // Node > v14.0
        .then( (res) =>{
            console.log('With Promises.allSettled', res)
        })
        .catch( (err) =>{
            console.log('400 request', res)
        })

})();

// High order functions for arrays --> It returns everything EXCEPT promises
// The next function does nothing, to do iterative promises for, for of is needed
(() =>{
    let results = [];
    const promises = list.map( async(item) => {
        const response = axios.get(item)
        results.push(response);
        return response;
    });
    console.log('Result1 ', results)
    console.log('Promises ', promises)
    console.log('Result2 ', results)
})();