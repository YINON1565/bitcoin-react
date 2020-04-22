function load(key) {
    var val = localStorage.getItem(key)
    return (val)? JSON.parse(val) : null;
}

function store(key, val) {
    localStorage[key] = JSON.stringify(val);
    // return JSON.parse(val)
}


export const StorageService = {
    load,
    store

}