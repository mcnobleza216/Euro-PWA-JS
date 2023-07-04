if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("REGISTERED");
        console.log(registration);
    }).catch(error => {
        console.log("NOT REGISTERED");
        console.log(error);
    });
}