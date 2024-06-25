addEventListener('install', event => {
    console.log('hello-sw installing');
})

oninstall = (event) => {
    console.log('hello-sw installed');

};

addEventListener("activate", (event) => {
    console.log('hello-sw activating');

});

onactivate = (event) => {
    console.log('hello-sw activated');
};