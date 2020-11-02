function pictures() {
    // console.log('You\'re in pictures.')
    
    const event = document.querySelector('#picturesWall');
    const API = ('/log')
    if (event) {
        fetch(API)
        .then((res) => res.json(API))
        .then((d) => {
            // console.log(d);
            d.map((d) => {
                const title = d.title;
                const URL = d.URL;
                var card = `<div class="card cards text-center">
                            <p class="cardTitle mt-4">${title}<p>
                            <img src=${URL} class="cardImage" />
                            </div>`
                event.insertAdjacentHTML("afterbegin", card);
            })
        })
    }
}

export { pictures };