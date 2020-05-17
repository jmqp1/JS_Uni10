$(document).ready(function(){
    var divmenu =$("div.menu_punto");
    var pmenu =$("p.menu_capitulo");
    console.log(divmenu[1]);
    console.log(pmenu[0]);
    $("div.menu_punto").hide();
    $("p.menu_capitulo").click(function(){
        $(this).next("div.menu_punto").slideDown(300)
        .siblings("div.menu_punto").slideUp("slow");
    });
});