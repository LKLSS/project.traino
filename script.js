   document.querySelector('.ig').addEventListener("click", function() {
window.location.href= "https://www.instagram.com/niqabadzelukaa/"
});
document.querySelector('.fb').addEventListener("click", function() {
    window.location.href="https://www.facebook.com/profile.php?id=100087386742196"
});
document.querySelector('.github').addEventListener("click", function() {
    window.location.href="https://github.com/LKLSS"
});
document.addEventListener("DOMContentLoaded", function() {
    cardSlide();
});

function cardSlide() {
    let card = document.querySelector('.middlecont');
    card.style.right = "0";

    setTimeout(function() {
        card.style.left = '0'; 
    }, 100);
}
document.addEventListener("DOMContentLoaded", function() {
    imgSlide(); 
});
function imgSlide() { 
    let img = document.querySelector('.imgcont');
    img.style.right = "0";
    setTimeout(function() {
        img.style.right = '0'; 
    }, 100);
}
document.querySelector('.btn').addEventListener("click", function() {
    window.location.href="index2.html";
}); 


