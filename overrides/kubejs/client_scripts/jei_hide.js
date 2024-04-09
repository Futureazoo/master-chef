// priority: 0

console.info('Loaded Client Scripts')

JEIEvents.hideItems(event => {
  event.hide('@simplehats')
  event.hide('@artifacts')
  event.hide(/.*spawn_egg/)
  event.hide('ae2:facade')
})

JEIEvents.addItems(event => {
  event.add('thermal:saw_blade')
  event.add('thermal:drill_head')
})