calc = () => {
    //math = new Math();
    var exp = document.getElementById('exp').value;
    document.getElementById('res').setAttribute('value', eval(exp));
}