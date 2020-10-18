function logger() {

const div = document.getElementById('logger');
const form = `<div class="row p-1">
<div class="col-12 col-md-6 card mx-auto">
    <div class="card-body">
        <h5 class="text-center">Log your Photo!</h5>
        <form action="/log" method="post">
            <label for="title">Title</label><br>
            <input type="text" name="title" id="title" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;How would you like to name this picture?"><br>
            <label for="URL">Web Address</label><br>
            <input type="text" name="URL" id="URL" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;What's the URL where this picture is located?"><br>
            <label for="location">Location</label><br>
            <input type="text" name="location" id="location" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Where was this picture taken?"><br>
            <label for="description">Description</label><br>
            <textarea type="text" name="description" id="description" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Would you like to say something about this picture?"></textarea><br>
            <button class="button btn btn-primary">Log</button>
        </form>
    </div>
</div>
</div>`;



}

export { logger }