// mock the get players function and just return an array with one person:
export async function getPlayers () {
    return [
        {fname: "Mocked Billy",
            lname: "Mocked ",
            bioMetrics: {
                heightInches: 123,
                weightLbs: 123
            },
            careerStats: {
                rebounds: 100,
                shotattempts: 100
        
            }}
    ]

}