function make_album(artistName, albumTitle) {
    var album = {
        artistName: artistName,
        albumTitle: albumTitle
    };
    return album;
}
var album1 = make_album("j.cole", "Dreamville");
console.log(album1);
var album2 = make_album("jay-z", "99 Problems");
console.log(album2);
var album3 = make_album("50cents", "Re-Up");
console.log(album3);
