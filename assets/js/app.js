const btn = document.getElementById('log-image')

logImage();

function logImage() {
    btn.addEventListener('click', (e) => {
        fetch('/logs', {
            method: 'post',
            header: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: document.getElementById('title'),
                location: document.getElementById('location'),
                created: Date.now()
            })
        })
        .then(res => res.json());
    })
}