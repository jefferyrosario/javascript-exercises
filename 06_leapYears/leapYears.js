const leapYears = function(year) {

    
    // Years that are divisible by 4
    if(year % 4 == 0){

        if( year % 400 == 0){
            return true
        }
        if(year % 100 == 0){
            return false
        }
        
        return true
    } else {
        return false
    }
    // Unless the year is divisble by 100

    // unless they are divisble by 400


};

// Do not edit below this line
module.exports = leapYears;
