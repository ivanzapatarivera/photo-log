function places() {
    
    const places = document.querySelector('#places');
    if(places) {
        console.log('You\'re in places.')
    } else {
        return ('You\'ve not landed JS correctly.')
    }
    
}

export { places }