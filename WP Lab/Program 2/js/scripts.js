setTimeout(() => {
        document.getElementById('ip1').setAttribute('value', "Hello!");
        document.getElementById('ip2').setAttribute('value', "How Are You?");
        document.getElementById('ip3').setAttribute('value', "2020 is annoying.");
        document.getElementById('ip4').setAttribute('value', "But stay strong.");
        document.getElementById('ip5').setAttribute('value', "What will 2021 bring?");
        document.getElementById('ip6').setAttribute('value', "Only time will tell.");
        document.getElementById('ip7').setAttribute('value', "All the Best!");
        let ipTags  = document.getElementsByTagName('input');
        for(let i = 0; i<ipTags.length; i++)
            ipTags[i].value ? ipTags[i].style.border = '1px solid lightgreen' : ipTags[i].style.border = '1px solid red';
        setTimeout(() => alert('Value(s) not given'), 500);
}, 3000);
