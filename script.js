let prices = [5, 10.5, 9.6, 6];
let tot = 0;

const submit_btn = document.querySelector("#submit");
const orders_list = document.querySelector("#orders");

function updateTotal() {
    for(let i=0; i < prices.length; i++) {
        if (document.getElementsByClassName("type")[i]) {
            let type_num = (document.getElementsByClassName("type")[i].value);
            tot += type_num * prices[i];
        }
    }
    tot.toPrecision(2);     //non funziona
    document.getElementById("total-price").innerHTML = "Il totale del tuo ordine è di: " + tot + "€";
}

const takeOrder = e => {
    e.preventDefault();

    let li = document.createElement('li');
    li.textContent =  tot;
    localStorage.setItem('order', JSON.stringify(tot));
    orders_list.appendChild(li);
    tot = 0;
    document.getElementById("total-price").innerHTML = "Il totale del tuo ordine è di: " + tot + "€";
}





submit_btn.addEventListener("click", takeOrder);


