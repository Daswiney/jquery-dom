$(document).ready(function(){
    $("#myForm").submit(function(event){
        event.preventDefault();
        let title = $("#titleInput").val();
        let rating = $("#ratingInput").val();

        if (title.length < 2) { // Check if title has less than 2 characters
            alert("Title must have at least 2 characters");
            return false;
        }

        if (rating < 0 || rating > 10) { // Check if rating is outside of 0-10 range
            alert("Rating must be between 0 and 10");
            return false;
        }

        let itemHtml = '<div class="item">' +
                            '<span class="title">' + title + ' ' + '</span>' +
                            '<span class="rating">' + rating + '</span>' +
                            '<button class="removeBtn">X</button>' +
                       '</div>';
        $("#myList").append(itemHtml);

        $("#titleInput").val('');
        $("#ratingInput").val('');
    });

    $(document).on('click', '.removeBtn', function(){
        $(this).parent().remove();
    });
});