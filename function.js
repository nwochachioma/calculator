function insert(num){
    document.form.screen.value = document.form.screen.value+num;
}

function equal(){
    let exp = document.form.screen.value;
    if (exp){
        document.form.screen.value = eval(exp);
    }
}

function cl(){
    document.form.screen.value = "";
}