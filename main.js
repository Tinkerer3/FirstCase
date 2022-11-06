function oddishOrEvenish(Int){

    let arrayFunc = num => Number(num); // verilen sayıyının basamaklarındaki rakamları ayırıp diziye aktarır
    var intArr = Array.from(String(Int), arrayFunc); // üst satırdaki fonksiyonu kullanır
    if(intArr.length == "1"){
        if(Int%2==0){
            console.log("Even");
        } // eğer sayı tek rakamlıysa o rakamın iki ile bölümünü alıp tek ya da çift olmasını kontrol eder
        else if(Int%2==1){
            console.log("Odd");
        }
    }
    else if(intArr.length != "1"){
        Int = intArr.reduce((partialSum, a) => partialSum + a, 0); // eğer sayı birden fazla rakam içeriyorsa rakamları tek tek toplayıp Int değerini ona çevirir.
        if(Int%2==0){
            console.log("Even");
        }
        else if(Int%2==1){
            console.log("Odd");
        }
    }
}

oddishOrEvenish(43)
oddishOrEvenish(373)
oddishOrEvenish(4433)
