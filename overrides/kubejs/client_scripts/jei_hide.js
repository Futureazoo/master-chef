// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loaded Client Scripts')

JEIEvents.hideItems(event => {
  event.hide('@simplehats')
  event.hide('@artifacts')
  event.hide(/.*spawn_egg/)
  event.hide(/.*_coin/)
})

JEIEvents.addItems(event => {
  event.add('thermal:saw_blade')
  event.add('thermal:drill_head')
  event.add('thermal:phytosoil')
})