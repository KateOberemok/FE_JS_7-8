function simple_tooltip(target_items, name){
$(target_items).each(function(i){
$("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
var my_tooltip = $("#"+name+i);

$(this).removeAttr("title").mouseover(function(){
my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(300);
}).mousemove(function(kmouse){
my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});
}).mouseout(function(){
my_tooltip.fadeOut(100);
});
});
}



function checkParams() {
    var fn = $('#firstname').val();
    var sn = $('#secondname').val();
    var ad = $('#address').val();
    
    if(fn.length != 0 && sn.length != 0 && ad.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }

}




$(document).ready(function(){
simple_tooltip("input.select","tooltip");
checkParams();

});



