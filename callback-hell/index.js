const players = [
    {
        name: 'Opolot',
        score: 200
    },
    {
        name: 'Omoding',
        score: 183
    },
    {
        name: 'Enyetu',
        score: 250
    },
    {
        name: 'Ocen',
        score: 300
    }
]

const getScore = (name, callback) => {
    setTimeout(() => {
        players.forEach((players) => {
            if (players.name == name) {
                callback(players.score)
            }
        })
    }, 1000)
}

let totalScore = 0
const printScore = (score) => {
    console.log('The score is: ', score )
}

getScore('Opolot', (score) => {
    totalScore += score
    getScore('Omoding', (score) => {
        totalScore += score
        getScore('Enyetu', (score) => {
            totalScore += score
            getScore('Ocen', (score) => {
                totalScore += score
                printScore(totalScore)
            })
        })
    })
})