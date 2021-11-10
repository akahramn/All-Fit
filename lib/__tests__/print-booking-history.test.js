const printBookingHistory = require("../print-booking-history")


test('print customer bookings', () => {
    const customer = {
        name: "Abdullah",
        phoneNum: "03849324",
        age: "34",
        mail: "a.kahramnn@gmail.com",
        bookings: [{
            Customer: {
                name: "Abdullah",
                phoneNum: "03849324",
                age: "34",
                mail: "a.kahramnn@gmail.com",
            },
            FitnessCenter: {
                name: "MCFIT"
            }
        }]

    }

    const rv = printBookingHistory(customer)

    expect(rv).toBe("Abdullah was sport in MCFIT");
});