/* /* Consegna: */

/* Scrivi un programma che stampi in console i numeri da 1 a 100, */

const listEl = document.querySelector("ul")
for (let numberList = 1; numberList < 101; numberList++){
    console.log(numberList);

    /* Creaiamo un list item utilizzando document.createElement */

    const li = document.createElement("li");
    
    /* Appendo al list item la variabile i  */
    li.append(numberList);

    //const li = `<li class="abc">${numberList}</li>`;

    /* Appendo il list item all' listEl */
    listEl.append(li);


    if (numberList % 15 == 0) {
        li.innerHTML = ("FizzBuzz")
        li.className = "FizzBuzz"
        li.style.background = 'red'
      console.log("FizzBuzz");  
    } else if (numberList % 3 == 0) {
        li.innerHTML = ("Fizz")
        li.className = "Fizz"
        li.style.background = 'lightgreen'
      console.log("Fizz");  
    } else if (numberList % 5 == 0) {
        li.innerHTML = ("Buzz")
        li.className = "Buzz"
        li.style.background = 'yellow'
      console.log("Buzz");  
    } else {
        li.innerHTML = numberList
        li.className = "number"
        li.style.background = 'lightblue'
        console.log(numberList);
    }





}


/* ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”. */

/* for (let numberList = 1; numberList < 101; numberList++){

    if (numberList % 15 == 0) {
        li.innerHTML = ("")
      console.log("FizzBuzz");  
    } else if (numberList % 3 == 0) {
      console.log("Fizz");  
    } else if (numberList % 5 == 0) {
      console.log("Buzz");  
    } else {
        console.log(numberList);
    }

} */


/* Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

/* for (let numberList = 1; numberList < 101; numberList++){

    if (numberList % 15 == 0) console.log("FizzBuzz");

    else if (numberList % 3 == 0) console.log("Fizz");

    else if (numberList % 5 == 0) console.log("Buzz");

    else console.log(numberList);
}
 */



/* Prima di partire a scrivere codice poniamoci qualche domanda:
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
La condizione non funziona? controlliamo il loro ordine. */