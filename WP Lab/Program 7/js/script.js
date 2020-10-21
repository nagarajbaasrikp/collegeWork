calculate = () => {
    let wp = Number(document.getElementById('wp').value);
    let se = Number(document.getElementById('se').value);
    let oops = Number(document.getElementById('oops').value);
    let dbms = Number(document.getElementById('dbms').value);
    const total = wp + se + oops + dbms;
    const avg = total / 4;
    let grade;
    if(grade<35)
        grade = 'f';
    else if(avg <= 35)
        grade = 'd';
    else if(avg <= 50)
        grade = 'c';
    else if(avg <= 75)
        grade = 'b';
    else
        grade = 'a';
    document.getElementById('total').innerHTML += total;
    document.getElementById('avg').innerHTML += avg;
    document.getElementById('grade').innerHTML += grade;
    document.getElementById('calc').remove();
}