// function test1() {
//     page.render ( 'google.png');
//     phantom.exit ();
// }

var page = require ( 'webpage'). create (); 
page.open ( 'http://www.google.com', function () { 
    setTimeout (function () { 
        page.render ( 'google.png'); 
        phantom.exit (); 
    }, 200); 
}) ;