function printRates(rate){
    console.log(`User Comment: 
                Customer Name: ${rate.customer.name} 
                Fitness Center Name: ${rate.fitnessCenter.name}
                Location : ${rate.fitnessCenter.location}
                Point: ${rate.point}
                Comment: ${rate.comment}`)


}

function printRateHistory(fitnessCenter){
    const rates = fitnessCenter.ratings

    rates.forEach(printRates)
    
    

}

module.exports = printRateHistory