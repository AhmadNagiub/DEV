$(document).ready(function(){
    $(".carousel").carousel({
        interval:4000
        });

        //nice scroll
        $("html").niceScroll();

        //show color-option
        $(".gear-check").click(function(){
            $(".color-option").fadeToggle();
        })
        //=======================================================
        //scroll top  .scrollTop=> used to know where is scroll in page be
        $(window).scroll(function(){
            $(this).scrollTop() >= 350 ? $("#scroll-top").fadeIn(1000) : $("#scroll-top").fadeOut(1000);
        })
        //when click on button body aniimate to scroll top 0 in one second
        $("#scroll-top").click(function(){
            $("html,body").animate({scrollTop : 0} , 1000)
        });
        //========================================================
})
//=====================================================================================================
//changin color by js
let changeColor = document.querySelectorAll(".ulColor li");
let localColor = localStorage.getItem("change-color");
if(localColor !== null)
{
    document.documentElement.style.setProperty("--mainColor" , localColor);
    changeColor.forEach(ele =>
        {
            ele.classList.remove("active");
            if(ele.dataset.color == localColor)
            {
                ele.classList.add("active");
            }
        })
}
changeColor.forEach(color =>
    {
        color.addEventListener("click" , function(e){
            
            document.documentElement.style.setProperty("--mainColor" , e.target.dataset.color);
            localStorage.setItem("change-color" , e.target.dataset.color);
            handleActive(e);
        })
    })
    //making function to handle active
    function handleActive(ev)
    {
        ev.target.parentElement.querySelectorAll(".active").forEach(active=>{
            active.classList.remove("active");
        })
        ev.target.classList.add("active")
    }
    //==================================================================================================
//loading screen using CSS3 SPinner
$(".loading-screen .spinner").fadeOut(2000, function(){ //spinner hide
    $("body").css("overflow",'auto'); // bring back scroll bar 
    $(this).parent().fadeOut(2000,function(){ //loading screen hide
        $(this).remove(); // remove section of loading to prevent any one to see it 
    })
});
//=====================================================================================================

















