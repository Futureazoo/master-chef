// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loaded Client Scripts')

JEIEvents.hideItems(event => {
  event.hide(/.*spawn_egg/)
  event.hide(/.*_coin/)
})