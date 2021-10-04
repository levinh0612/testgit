setTimeout(function(){
    var v = document.getElementById("intro-btn")
    v.style.transition='all 1.4s'
    v.style.display = 'block'
    setTimeout(function() {
        var t = document.getElementById("intro-btn")
        t.style.top = '40%'
    }, 1000);
}, 4000);

