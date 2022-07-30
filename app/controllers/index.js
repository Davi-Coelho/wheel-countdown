module.exports.wheelCounter = (application, req, res) => {
    const data = req.query.msg
    const channel = req.query.channel

    console.log(data)
    
    if (data[0] === '+' || data[0] === '-') {
        const signal = (data[0] === '+') ? 1 : -1
        const command = signal === 1 ? data.split('+')[1].split(' ') : data.split('-')[1].split(' ')
        let value = command[0] * signal
        
        switch(command[1]) {
            case 'h':
            case 'hora':
            case 'horas':
                value *= 1000 * 60 * 60
                break
            case 'min':
            case 'minuto':
            case 'minutos':
                value *= 1000 * 60
                break
        }

        const ws = Array.from(application.appWs.clients).filter(el => el.id === channel)
        ws.forEach(el => el.send(value))
    }
    res.sendStatus(200)
}
