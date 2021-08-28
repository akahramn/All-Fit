const fitnessCenterRateHistory = require("../fitnessCenterRateHistory")


test.only('print fitness center rate history', () => {

    const fitnessCenter = {
        name: 'MCFIT',
        location: 'Ankara',
        ratings: [{
            customer: {
                name: "Abdullah",
                phoneNum: "03849324",
                age: "34",
                mail: "a.kahramnn@gmail.com",
            },
            fitnessCenter: {
                name: 'MCFIT'

            },
            point: 9,
            comment: 'cok iyi bir yer'
        }]
    }

    const consoleSpy = jest.spyOn(console, 'log')

    const rv = fitnessCenterRateHistory(fitnessCenter)
    expect(consoleSpy).toHaveBeenCalledWith("User Comment: Customer Name: Abdullah Fitness Center Name: MCFIT  Location : undefined Point: 9 Comment: cok iyi bir yer")

    consoleSpy.mockRestore();
});