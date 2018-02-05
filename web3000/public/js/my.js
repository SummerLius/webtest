$(document).ready(function(){
    // console.log('[document]', document);
    // console.log('[document]', document);
    // console.log('[document]', document);
    // console.log('[document]', document);
    // console.log('[document]', document);

    var i = 0;
    setInterval(function(){
        (i++) % 2 === 0 
            ? $('p').hide() 
            : $('p').show();
    }, 1000);
});