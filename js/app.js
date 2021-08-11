particlesJS.load('particles-js', 'config/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
$("#antonstech").one("mouseover", function() {
    setTimeout(function (){
        $("#antonstech").addClass('text-after-hover')
        $("#antonstech").removeClass('text');

    }, 1000);
});