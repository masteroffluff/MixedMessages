
document.addEventListener('readystatechange', event => { 
   // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 

    if (event.target.readyState === "complete") {
        message=document.getElementById('message');
        button=document.getElementById('button');

        button.addEventListener('click', generate);

        let change=5;
        let shadow=1;

        setInterval(function () 
            {    
            button.style.backgroundColor = "rgb("+shadow+", 0, 0)";
            shadow+=change;
            if ((shadow > 255) || (shadow < 1)) {change=-change}
        },0.5);

    }

});

