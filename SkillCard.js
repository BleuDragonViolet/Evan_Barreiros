$(document).ready(function(){
    var skillClass = $(".skill-card");

    skillClass.mouseenter(function(){
        var divToShow = document.getElementById($(this).data('description'));
        divToShow.classList.add('active');
    });

    skillClass.mouseleave(function(){
        var divToHide = document.getElementById($(this).data('description'));
        divToHide.classList.remove('active');
    });
});
