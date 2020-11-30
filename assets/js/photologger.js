function photoLogger() {
    const logNewPhoto = document.querySelector('#logNewPhoto');
    if(logNewPhoto) {
        readForm();
    }

    function readForm() {
        console.log(`You're in readForm().`)
    }
}

export { photoLogger }