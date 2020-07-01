function openNav() {
    document.getElementById("open").style.display = "block";
    document.getElementById("nav").style.width = "100%";
}
function closeNav() {
    
    document.getElementById("nav").style.width = "0";
    document.getElementById("open").style.display = "block";
}

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
targets: '.ml3 .letter',
opacity: [0,1],
easing: "easeInOutQuad",
duration: 2250,
delay: (el, i) => 150 * (i+1)
}).add({
targets: '.ml3',
opacity: 0,
duration: 1000,
easing: "easeOutExpo",
delay: 1000
});

