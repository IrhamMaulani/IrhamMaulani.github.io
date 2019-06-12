document.getElementById('header').addEventListener('click', function () {
    document.querySelector('#head').scrollIntoView({
        behavior: 'smooth'
    });
})


$(".image").waypoint(function () {
    $(".txt-perkenalan").css('visibility', 'visible');
    $(".text-programmer-1").addClass("fadeInLeftBig delay-1s");
    $(".container-media-tex").addClass("animated fadeInLeftBig delay-3s");
    $(".container-about-text").addClass("animated bounceInDown delay-2s");
    /*   $("#txt-ket-programmer").addClass("animated bounceInDown delay-2s"); */
    $("#tada").addClass("fadeInRightBig delay-5s");
});

$(document).ready(function () {
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    let scrollStart = 0;
    const startchange = $('.img-header');
    const offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scrollStart = $(this).scrollTop();
            if (scrollStart > offset.top) {
                $(".navbar").css('background-color', '#bae1ff');
            } else {
                $('.navbar').css('background-color', 'transparent');
            }
        });
    }
});

function handleChange(checkbox) {

    if (checkbox.checked == true) {
        /*  alert('hello'); */
        $("#txt-ready").addClass("animated flash ");
        $("#txt-ready").html('Anda Telah Mengklik Tombol Ini.Bersiap');
        /*   for (let i = 3; i >= 0; i--) {
               $("#txt-ready").html(i);
            setTimeout(() => {
                     $("#txt-ready").html("aa" + i);
              console.log(i);
               }, 1000 + 500);
          } */
        checkbox.disabled = true;
        setTimeout(() => {
            $("#txt-ready").html(3);

        }, 1200);
        setTimeout(() => {
            $("#txt-ready").html(2);

        }, 1900);
        setTimeout(() => {
            $("#txt-ready").html(1);

        }, 2600);
        setTimeout(() => {
            $("#txt-ready").html(0);

        }, 3200);

        setTimeout(() => {
            $("html").addClass("animated bounceOut");

        }, 3200);
        setTimeout(() => {
            window.location.href = 'skill_programmer.html';
        }, 4000);
    }
}
console.log("Developed By Irham Maulani")