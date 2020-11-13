let salary, hra, da, grossSal, pf, tax, deductions, netSal;

calc = () => {
    salary = parseInt(document.getElementById('salary').value);
    document.getElementById('hra').value = .4 * salary;
    document.getElementById('da').value = .6 *salary;    
    document.getElementById('grossSal').value = parseInt(salary + hra + da);
    document.getElementById('pf').value = .13 * salary;
    document.getElementById('tax').value = 2 * grossSal;
    document.getElementById('deductions').value = pf + tax;
    document.getElementById('netSal').value = grossSal - deductions;
}