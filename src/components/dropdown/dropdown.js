function dropdown_room (btn_id,sign) {
    var count=$("#dropdown-room__text-" + btn_id).text();
    var text_x= "";
    var text_y= "";
    if (sign==true)
        {
            $("#dropdown-room__text-" + btn_id).html(+$("#dropdown-room__text-" + btn_id).html()+1);
            $("#dropdown-room__btn-" + btn_id + "_minus").attr("class", "dropdown-btn");
        }
    else
        {
            if (count>1)
                $("#dropdown-room__text-" + btn_id).html(+$("#dropdown-room__text-" + btn_id).html()-1);
            else
                if (count==1)
                {
                    $("#dropdown-room__text-" + btn_id).html(+$("#dropdown-room__text-" + btn_id).html()-1);
                    $("#dropdown-room__btn-" + btn_id + "_minus").attr("class", "dropdown-btn dropdown-btn_disabled");
                }  
        }
    var x=$("#dropdown-room__text-" + 0).text();
    var y=$("#dropdown-room__text-" + 1).text();

    if (x==0 || x>4)
        text_x=" спален, ";
    else
        {
            if (x==1)
                text_x=" спальня, ";
            else
                text_x=" спальни, ";
        }
    
        if (y==0 || y>4)
        text_y=" кроватей...";
    else
        {
            if (y==1)
                text_y=" кровать...";
            else
                text_y=" кровати...";
        }

    $(".dropdown__field__total-text").html(x + text_x + y + text_y)
}

function dropdown_hide (id) {
    $(id).toggleClass('disappeared');
    $('.dropdown-room').toggleClass('box-shadow_none')
}

function dropdown_appear (id) {
    $(id).toggleClass('disappeared');
    $('.dropdown-room').toggleClass('box-shadow')
}