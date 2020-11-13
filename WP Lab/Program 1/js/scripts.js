var sum = 0;
var input = 0;
var label = 0;
var opt = 0;
var optgr = 0;
var select = 0;
count = () => {
    form = document.getElementById('form');
    input += form.getElementsByTagName('input').length;
    label += form.getElementsByTagName('label').length;
    opt += form.getElementsByTagName('option').length;
    optgr += form.getElementsByTagName('optgroup').length;
    select += form.getElementsByTagName('select').length;
    sum += input + label + opt + optgr + select;
    console.log('Total: ' + sum, 'Input Tags: ' + input, 'Label: ' + label, 'Option: ' + opt, 'Option Group: ' + optgr, 'Select: ' + select);
}