var pd = document.getElementById("pd")
        var nature = document.getElementById("evenOrOdd")
        var defau = nature.innerHTML
        var dfpd = pd.innerHTML
        var n = 1;
        function btn(){
            nature.innerHTML = defau
            pd.innerHTML = n
            if (n%2 == 0){
            nature.innerHTML  += "<b>even</b>"

            }
            else{
            nature.innerHTML += "<b>odd</b>"
            }
            n++
        }
        function reset(){
            n = 1
            pd.innerHTML = dfpd
            nature.innerHTML = defau
        }
