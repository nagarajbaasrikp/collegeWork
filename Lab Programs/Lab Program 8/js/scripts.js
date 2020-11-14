let salary, hra, da, grossSal, pf, tax, deductions, netSal;

calc = () => {
    salary = parseInt(document.getElementById('salary').value);
    hra = document.getElementById('hra').value = .4 * salary;
    da = document.getElementById('da').value = .6 *salary;    
    grossSal = document.getElementById('grossSal').value = salary + hra + da;
    pf = document.getElementById('pf').value = .13 * salary;
    tax = document.getElementById('tax').value = .2 * grossSal;
    deductions = document.getElementById('deductions').value = pf + tax;
    netSal = document.getElementById('netSal').value = grossSal - deductions;
}