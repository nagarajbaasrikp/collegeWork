moveImage = () => {
    let imgNode = document.getElementById('img').style;
    imgNode.top = document.getElementById('x').value + 'px';
    imgNode.left = document.getElementById('y').value + 'px';
}