var d = document

var green = "#00ff38"
var text = d.getElementById("main-text");
var image = d.getElementById("image");

var animationTime = 1;


text.addEventListener("click", () => {
    image.classList.add("active")

    setTimeout(function(){
        var image2 = d.getElementById("image2")
        var mainPage = d.getElementById("main-page")
        mainPage.style.display = "none"
        d.body.style.background = green
        image.style.display = "none"
        image2.style.display = "inline"

        setTimeout(function() {
            d.body.style.background = "white"
            image2.classList.add("active")

            setTimeout(function() {
                var showPage = d.getElementById("show-page")
                var video = d.getElementById("ytb")
                showPage.style.display = "inline"
                video.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&showinfo=0&controls=0&enablejsapihttps://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&showinfo=0&controls=0&enablejsapi"
                
            }, 300)
        }, 100)
        
    }, 1000);


})

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
