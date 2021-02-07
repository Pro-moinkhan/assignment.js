// kilometerToMeter
function kilometerToMeter(value){
    let checkSign = Math.sign(value);
    let checkType = typeof(value);
    let result = 0;
    if(checkSign == -1){
        return ("distance cannot be negative");
    }
    else if(checkType != "number"){
        return ("please input a number");
    }
    else{
        result = value * 1000;
    }
    return result;
}
var valueadded = kilometerToMeter("string"); /** if input type is string, haveto add a " " manually */
console.log(valueadded);



// budgetCalculator
function budgetCalculator(watch, mobile, laptop){
    let checkSign = Math.sign(watch, mobile, laptop);
    let checkType1 = typeof(watch);
    let checkType2 = typeof(mobile);
    let checkType3 = typeof(laptop);
    let total = 0;
    if(checkSign == -1){
        return ("Input cannot be negative");
    }
    else if(checkType1 != "number"){
        return ("please input a value in 'Number' for watch!");
    }
    else if(checkType2 != "number"){
        return ("please input a value in 'Number' for mobile!");
    }
    else if(checkType3 != "number"){
        return ("please input a value in 'Number' for laptop!");
    }
    else{
        total = (watch * 50) + (mobile * 100) + (laptop * 500);
    }
    return total;
}
var inputs = budgetCalculator(1, 2, 6);  /** ঐ */
console.log(inputs);



// hotelCost
function hotelCost(days){
    let totalMoney = 0;
    let checkSign = Math.sign(days);
    let checkType = typeof(days);
    if(checkSign == -1){
        return ("days cannot be negative");
    }
    else if(checkType != "number"){
        return ("input a 'Number' value of days")
    }    
    else if(days <= 10){
        let moneyD1_10 = days * 100;
        totalMoney = moneyD1_10;
    }
    else if(days <= 20){
        let money1st = 10 * 100;
        let money2nd = (days - 10) * 80;
        let moneyD10_20 = money1st + money2nd;
        totalMoney = moneyD10_20;
    }
    else if(days > 20){
        let money1st = 10 * 100;
        let money2nd = 10 * 80;
        let money3rd = (days - 20) * 50;
        let moneyD20_lifeTime = money1st + money2nd + money3rd;
        totalMoney = moneyD20_lifeTime;
    }
    return totalMoney;
}
var livingDasy = hotelCost(21);     /** ঐ */
console.log(livingDasy);



// megaFriend
function megaFriend(names){
    let largestName = "";
    if(names.length == 0){
        return ("please input a valid information!")
    }
    else{
        for(i = 0; i < names.length; i++){
            let nameElement = names[i];
            if(largestName.length < nameElement.length){
                largestName = nameElement;
            }
        }
    }
    return largestName;
}
const frndsName = megaFriend(["moin", "rifat", "neyamul", "nazmul", "mahir", "minhaj"]);
console.log(frndsName);