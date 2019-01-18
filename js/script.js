/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ['123234', '12132123', '12312123', '23123123'];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = ['<iframe width="60" height="60" src="https://www.youtube.com/embed/hHW1oY26kxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="60" height="60" src="https://www.youtube.com/embed/hHW1oY26kxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="60" height="60" src="https://www.youtube.com/embed/hHW1oY26kxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="60" height="60" src="https://www.youtube.com/embed/hHW1oY26kxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'];
var artists = ['123234', '12132123', '12312123', '23123123'];
var song_lengths = ['123234sfadasdfsadfsadfsadfsadfsajkdfhjkashdfkjsahdfkjhsadkjfhsakjdfhks', '123234sfadasdfsadfsadfsadfsadfsajkdfhjkashdfkjsahdfkjhsadkjfhsakjdfhks', '123234sfadasdfsadfsadfsadfsadfsajkdfhjkashdfkjsahdfkjhsadkjfhsakjdfhks', '123234sfadasdfsadfsadfsadfsadfsajkdfhjkashdfkjsahdfkjhsadkjfhsakjdfhks'];

var images = ['http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg', 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg', 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg', 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg'];

images.forEach((val) => {
  $("#images").append('<img class="item" src=' + val + '>');
});

songs.forEach((val) => {
  $("#songs").append('<div class="item">' + val + '</div>');
});

images_links.forEach((val) => {
  $("#links").append(val);
});

artists.forEach((val) => {
  $("#lengths").append('<div class="item">' + val + '</div>');
});

song_lengths.forEach((val) => {
  $("#artists").append('<div class="item">' + val + '</div>');
});

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div


function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    // displaySongInfo();
});

displaySongInfo();
