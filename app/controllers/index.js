module.exports.wheelCounter = (application, req, res) => {
    const data = req.query.msg
    const channel = req.query.channel
    const command = data.split(' ')
    console.log(data)

    if (command.length === 3) {
        let value = parseFloat(command[1])
        let isCommand = true
    
        switch (command[2].toLowerCase()) {
            case 'h':
                value *= 1000 * 60 * 60
                break
            case 'min':
                value *= 1000 * 60
                break
            default: 
                isCommand = false
                break
        }

        if (isCommand) {
            value = command[0].toLowerCase() === 'adicionar' ? value : value * (-1)
            const ws = Array.from(application.appWs.clients).filter(el => el.id === channel)
            ws.forEach(el => el.send(value))
        }
    }
    res.sendStatus(200)
}
