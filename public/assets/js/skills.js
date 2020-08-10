$(document).ready(function () {
    let descriptionElt = $('#description');
    let clicked = false;
    $(document.body).on('click', '.skill', function (e) {
        let descriptionElt = $('#description');
        let description = $(this).data('description');
        let name = $(this).data('name');
        $(descriptionElt).empty().text(name);
        if (clicked === false) {
            $(descriptionElt).addClass('blackToWhite');
            clicked = true;
        }
    });
});