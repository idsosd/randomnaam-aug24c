const namen=[
    "Noah", 
    "Angela", 
    "Alivina", 
    "Pascal",
    "Dinand",
    "Marnick",
    "Ahmad",
    "Taha",
    "Martijn",
    "Lars",
    "Brendan",
    "Dylan",
    "Nick",
    "Ids",
    "Michiel",
    "Ismail",
    "Janine",
    "Junior" 
];
//voorb: namen[0] = "Noah"; namen[7]="Taha"; namen[13]="Ids"; namen[14]="undefined"
//als we dus een random getal tussen 0 en 13 genereren, kunnen we met dat getal
//de random naam pakken

function randomname()
{
    let random_nmbr = Math.floor(Math.random() * namen.length);
    //alert("De gekozen naam is: " + namen[random_nmbr]);
    document.getElementById("naam").innerText = namen[random_nmbr];
}

function random2names()
{
    let random_nmbr = Math.floor(Math.random() * namen.length);
    let random_nmbr2 = Math.floor(Math.random() * namen.length);
    while(random_nmbr == random_nmbr2){
        random_nmbr2 = Math.floor(Math.random() * namen.length);
    }
    //alert("De gekozen naam is: " + namen[random_nmbr]);
    document.getElementById("naam").innerText = namen[random_nmbr] + " en " + namen[random_nmbr2];
}