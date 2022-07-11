const ws = new WebSocket(`ws:localhost:3002/?channel=`)

ws.onopen = function () {
    ws.send('conectado!')
}

ws.onmessage = function (msg) {
    console.log(msg.data)
    countDownDate += parseFloat(msg.data)
}