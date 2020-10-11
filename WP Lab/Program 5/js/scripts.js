sum = () => {
    document.getElementById('terms').addEventListener('input', () => {
        let n = parseInt(document.getElementById('terms').value);
        let sum = 0;
        for(let i = 1; i<=n; i++)
            sum += i;
        document.getElementById('sum').setAttribute('value', parseInt(sum));
    });
}