/*
export function someAction (context) {
}
*/
import axios from 'axios';

var login = function () {
    return axios.post('https://run.mocky.io/v3/8b4e861b-6267-4671-97ee-671764f313d9')
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error))
}

var loadAssetData = function () {
    return axios.get('https://run.mocky.io/v3/2b4ebd98-9e55-4060-bee8-0d36f44f9c4e')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.log(error))
}

self.onmessage = e => {
    if (e.data === 'loadAssetData') {
        const assetData = loadAssetData()
    }
}

export {login, loadAssetData}