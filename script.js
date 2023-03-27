let prices = [5, 10.5, 9.6, 6];

        function updateTotal() {
            let tot = 0;
            for(let i=0; i < prices.length; i++) {
                if (document.getElementsByClassName("type")[i]) {
                    let type_num = (document.getElementsByClassName("type")[i].value);
                    tot += type_num * prices[i];
                }
            }
            document.getElementById("total-price").innerHTML = "Il totale del tuo ordine è di: " + tot + "€";
        }