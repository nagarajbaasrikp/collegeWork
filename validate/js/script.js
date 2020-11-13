addListeners = () => {
    const uname = document.getElementById('uname');
    uname.addEventListener('invalid', () => alert('Invalid Username'));
    const pwd = document.getElementById('pwd');
    pwd.addEventListener('blur', () => {
        pwd.value.length < 8 ? alert('Password too Short') : null;
    });
}