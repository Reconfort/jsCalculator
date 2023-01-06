let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerHTML  = '';
                break;
                
            case '←':
                if(display.innerText)
                {
                    display.innerHTML  = display.innerText.slice(0, -1);
                }
                else
                display.innerHTML ='NaN'
                break;
            case '=':
                    try{
                        display.innerHTML  = eval(display.innerText );
                    }
                    catch{
                         display.innerHTML ='Error!'
                    }
                    break;                    
            default:
                display.innerHTML += e.target.innerHTML;
        }
    })
})
