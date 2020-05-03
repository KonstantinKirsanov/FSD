function rate_button (group_id,value) {
    for(var i=0; i<5; i++)
        if (value>=i)
            $("#star-" + group_id + "-" + i)[0].checked = true;
        else
            $("#star-" + group_id + "-" + i)[0].checked = false;        
}       
