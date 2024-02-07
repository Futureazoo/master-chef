// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loaded Startup Script')

// Listen to item registry event
StartupEvents.registry('item', e => {
  // Cake Ingredients
  e.create('baked_cake').displayName('Naked Cake').tooltip('§8Not Placeable')
  e.create('raw_cake').displayName('Formed Cake Batter').tooltip('§8Not Placeable')
  e.create('frosted_cake').displayName('Frosted Cake').tooltip('§8Not Placeable')
  e.create('chocolate_frosted_cake').displayName('Chocolate Frosted Cake').tooltip('§8Not Placeable')

  e.create('dough_sheet').displayName('Dough Sheet')

  // Cookie Ingredients
  e.create('cookie_dough').displayName('Cookie Dough').food(food => {
    food.hunger(2).saturation(0.2).effect('hunger', 200, 0, 1).fastToEat()
  })
  e.create('honey_cookie_dough').displayName('Honey Cookie Dough').food(food => {
    food.hunger(2).saturation(0.2).effect('hunger', 200, 0, 1).fastToEat()
  })
  e.create('sweet_berry_cookie_dough').displayName('Sweet Berry Cookie Dough').food(food => {
    food.hunger(2).saturation(0.2).effect('hunger', 200, 0, 1).fastToEat()
  })
})

ItemEvents.modification(e => {
  e.modify('minecraft:cake', item => {
    item.maxStackSize = 64
  })
})

