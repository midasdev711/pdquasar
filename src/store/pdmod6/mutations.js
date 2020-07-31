/*
export function someMutation (state) {
}
*/
import Vue from 'vue'

export function updateAssets (state, assets) {
    state.assetsData = [...assets._embedded.mod6Masters]
}

export function updateCalibrations (state, calibrations) {
    console.log(calibrations);
    state.calibrationsData = [...calibrations._embedded.mod6Cals]
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