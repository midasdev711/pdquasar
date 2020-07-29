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

var loadAssetData = function ({commit}) {
    return axios.get('https://run.mocky.io/v3/0c938f7a-f230-4638-85be-84345a4776de')
        .then((response) => {
            console.log(response);
            commit("updateAssets", response.data);
        })
        .catch((error) => console.log(error))
}

self.onmessage = e => {
    if (e.data === 'loadAssetData') {
        const assetData = loadAssetData()
    }
}

export {login, loadAssetData}