function status() {
    console.log('You\'re in status.js');
    const status = document.querySelector('#statusText');
    const statusAPI = "/photologstatus";

    if(status) {
        fetch(statusAPI)
        .then((res) => res.json(statusAPI))
        .then((d) => {
            console.log(d);
            var dL = d.length - 1;
            console.log(dL);
            var URL = d[dL].statusUpdate;
            console.log(URL);
            var update = `<p class="text-left">${URL}</p>`
            status.insertAdjacentHTML("afterbegin", update);
        })
    }
}

export { status }