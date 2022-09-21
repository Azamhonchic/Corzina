let span = document.querySelector('.korzina')
let btn = document.querySelector('.btn')
let count = 0


btn.onclick = () => {
    if(count === 0 ) {

        count++;
        span.innerHTML = `в корзине ${count} товар`;
        
    }
}   