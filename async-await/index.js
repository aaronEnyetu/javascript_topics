const findEmuron = () => {
    return {
        name: 'Emuron',
        score: 200
    }
}

const getScoreOfEmuron = async () => {
    const player = await findEmuron();
    return player.score
}

getScoreOfEmuron()
    .then((score) => {
    console.log('The score is:', score)
})