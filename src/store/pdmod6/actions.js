/*
export function someAction (context) {
}
*/
export function loadAssetData () {
    this.$axios.get('https://run.mocky.io/v3/2b4ebd98-9e55-4060-bee8-0d36f44f9c4e')
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