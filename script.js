function display_value(val){
    if(val=='ac'){
        document.getElementById('dis').value = "";
    }else{
        document.getElementById('dis').value += val
    }
}

function result(result){

    document.getElementById('dis').value = result;
}
