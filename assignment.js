
// 1st problem :: Kilometer To Meter 
function kilometerToMeter(meter) {
    if (0 > meter) {
        return " negative number not allow";   // value is negative or positive
    }
    var result = meter * 1000;
    return result;
}
var output = kilometerToMeter(8);
console.log(output);


// ################################################################################


// 2nd problem ::  budgetCalculator

function budgetCalculator(watch, phone, leptop) {

    if (watch < 0 || phone < 0 || leptop < 0) {
        return 'negative value not allow';         // value is negative or positive
    }
    var price = watch * 50 + phone * 100 + leptop * 500;
    return price;
}

var output = budgetCalculator(1, 1, 1);
console.log(output);


// ################################################################################

// 3nd problem ::  hotelCost




function hotelCost(stay) {

    var rentPrice = 0;

    if ( 0 > stay ) {
        return " inter a valid number ... " ; // value is negative or positive

    }else if (stay <= 10) {
        rentPrice = stay * 100                   // 10 days cost

    }else if (stay <= 20) {

        var Tendays = 10 * 100;
        var remainingDays = 20 - stay;
        var remainingCost = remainingDays * 80;
        rentPrice = Tendays + remainingCost;     //  20 days cost 
        
    }else{ 
        
        var Tendays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = stay - 20;
        var remainingCost = remainingDays * 50;
        rentPrice = Tendays + secondTenDays + remainingCost;     // more than 20 days 
    }
    return rentPrice;
}

var output = hotelCost(85);
console.log(output);




// ################################################################################

// 4th problem ::  megaFriend


function megaFriend(friends) {
    var bigName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        element = friends[i];
        if (bigName.length < element.length ) {
            bigName = element;
        }
    }
    return bigName;
}

var output = megaFriend(['baboni ', 'kamal' , 'zubair bin ferdous', 'navjod sing sidu']);
console.log(output);
