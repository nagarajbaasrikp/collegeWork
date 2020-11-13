toggle = () => {
    let div = document.getElementById('container');
    let img = document.getElementById('img');
    div.addEventListener('mouseover', () => img.setAttribute('src', '../images/img2.jpeg'));
    div.addEventListener('mouseout', () => img.setAttribute('src', '../images/img1.png')); 
}

