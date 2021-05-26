const scheduler = require('node-schedule')

// sg min hour day mon weekday
// */ ele repede como intevalo 
const tarefa1 = scheduler.scheduleJob('*/5 * 8 * * 3', function ()
{
  console.log('Executando Tarefa 1 ', new Date().getSeconds())
})

setTimeout(function ()
{
  tarefa1.cancel()
  console.log('Cancelamento Tarefa 1 ...')
}, 20000)

const regra = new scheduler.RecurrenceRule()
// executa de seg a sexta
regra.dayOfWeek = [new scheduler.Range(1, 5)]
regra.hour = 8
regra.second = 30


const tarefa2 = scheduler.scheduleJob(regra, function ()
{
  console.log('Executando tarefa 2', new Date().getSeconds())
})