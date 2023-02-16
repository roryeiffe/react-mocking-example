export type Player = {
    fname: string,
    lname: string,
    bioMetrics: {
        heightInches: number,
        weightLbs: number
    },
    careerStats: {
        rebounds: number,
        shotattempts: number

    }
}


// simple function that returns players using the basketball API:
export async function getPlayers () {
    const query = `
    query getPlayers {
        players {
            fname
            lname
            bioMetrics{
              heightInches
              weightLbs
            }
            careerStats{ 
              rebounds
              shotAttempts
            }
        }
    }
    `

    const requestBody = JSON.stringify({query});

    const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{'Content-Type':"application/json"}});
    const responseBody = await httpResponse.json();
    const players:Player[] = responseBody.data.players;
    return players;

}