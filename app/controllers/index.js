module.exports.index = (application, req, res) => {
    res.render('index')
}

module.exports.wheelCounter = (application, req, res) => {
    const data = req.query.msg
    const command = data.split(' ')
    let value = parseFloat(command[1])
    console.log(data)

    switch (command[2].toLowerCase()) {
        case 'h':
            value *= 1000 * 60 * 60
            break
        case 'min':
            value *= 1000 * 60
            break
    }

    value = command[0].toLowerCase() === 'adicionar' ? value : value * (-1)

    const ws = Array.from(application.appWs.clients).filter(el => el.id === 'lisannasu')

    ws.forEach(el => el.send(value))
    res.sendStatus(200)
}
