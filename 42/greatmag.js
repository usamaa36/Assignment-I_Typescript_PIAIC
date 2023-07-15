var magicians = ['ali', 'on', 'off', 'yo'];
function make_great() {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = 'the Great ' + magicians[i];
    }
}
function show_magicians() {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
make_great();
show_magicians();
