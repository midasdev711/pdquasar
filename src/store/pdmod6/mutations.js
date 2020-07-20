/*
export function someMutation (state) {
}
*/
import Vue from 'vue'

export function updateAssets (state, assets) {
    console.log('current assets data', state.assetsData)
    console.log('api response:', assets)
    //newAssets = JSON.parse(assets)
    state.assetsData = [...assets]
}

export function loadFromCache (state, cached) {
    if (cached) {
        Object.keys(cached).forEach((key) => {
            state[key] = Object.assign({}, state[key], cached[key]);
        });
    }

    state.initialized = true;
}

export function setIsLoadingAssetData (state, isLoading) {
    state.isLoadingAssetData = isLoading;
}