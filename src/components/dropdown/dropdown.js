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

function dropdown_hide (id,qw) {
    $(id).toggleClass('disappeared');
    $(qw).toggleClass('box-shadow_none')
}

function dropdown_appear (id,qw) {
    $(id).toggleClass('disappeared');
    $(qw).toggleClass('box-shadow')
}


function dropdown_guest (btn_id,sign) {
    var count=$("#dropdown-room__text-" + btn_id).text();
    $("#dropdown_guest_clear_btn").attr("class", "button-3 button-3_grey")
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
}

function dropdown_guest_aply () {
    var x=+$("#dropdown-room__text-" + 3).html();
    var y=+$("#dropdown-room__text-" + 4).html();
    var z=+$("#dropdown-room__text-" + 5).html();
    var text= "";
    var total_count=x+y+z;
    if (total_count>0)
        {
            if (total_count==0 || total_count>4)
                text=" гостей";
            else
            {
                if (total_count==1)
                    text=" гость";
                else
                    text=" гостя";
            }   
            $("#dropdown-guests__total-count").html(total_count + text);
        }
    
    
}

function dropdown_guest_clear () {
    $("#dropdown-guests__total-count").html("Сколько гостей") ;
    $("#dropdown_guest_clear_btn").attr("class", "hidden");
    $("#dropdown-room__text-" + 3).html("0");
    $("#dropdown-room__text-" + 4).html("0");
    $("#dropdown-room__text-" + 5).html("0");
    $("#dropdown-room__btn-" + 3 + "_minus").attr("class", "dropdown-btn dropdown-btn_disabled");
    $("#dropdown-room__btn-" + 4 + "_minus").attr("class", "dropdown-btn dropdown-btn_disabled");
    $("#dropdown-room__btn-" + 5 + "_minus").attr("class", "dropdown-btn dropdown-btn_disabled");
}