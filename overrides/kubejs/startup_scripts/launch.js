// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loaded Startup Script')

// Listen to item registry event
StartupEvents.registry('item', e => {
  e.create('baked_cake').displayName('Naked Cake')
  e.create('raw_cake').displayName('Formed Cake Batter')
  e.create('frosted_cake').displayName('Frosted Cake')
})

ItemEvents.modification(e => {
  e.modify('minecraft:cake', item => {
    item.maxStackSize = 64
  })
})

