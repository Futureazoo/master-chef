// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loaded Startup Script')

// Listen to item registry event
StartupEvents.registry('item', e => {
  // Bread
  e.create('dry_mix').displayName('Dry Mix')

  // Cardboard
  e.create('cardboard').displayName('Cardboard')
  
  // Cake
  e.create('frosted_cake').displayName('Frosted Cake').tooltip('§8Not Placeable')
  e.create('chocolate_frosted_cake').displayName('Chocolate Frosted Cake').tooltip('§8Not Placeable')

  e.create('dough_sheet').displayName('Dough Sheet')

  // Cookie
  e.create('cookie_dough').displayName('Cookie Dough').food(food => {
    food.hunger(2).saturation(0.1).effect('hunger', 200, 0, 1).fastToEat()
  })
  e.create('honey_cookie_dough').displayName('Honey Cookie Dough').food(food => {
    food.hunger(2).saturation(0.1).effect('hunger', 200, 0, 1).fastToEat()
  })
  e.create('sweet_berry_cookie_dough').displayName('Sweet Berry Cookie Dough').food(food => {
    food.hunger(2).saturation(0.1).effect('hunger', 200, 0, 1).fastToEat()
  })

  // Meat Cubes
  e.create('cube_of_beef').displayName('Cube of Beef').food(food => {
    food.hunger(8).saturation(0.1).effect('nausea', 200, 0, 1)
  })

  e.create('cube_of_chicken').displayName('Cube of Chicken').food(food => {
    food.hunger(8).saturation(0.1).effect('nausea', 200, 0, 1)
  })

  e.create('cube_of_mutton').displayName('Cube of Mutton').food(food => {
    food.hunger(8).saturation(0.1).effect('nausea', 200, 0, 1)
  })

  e.create('cube_of_pork').displayName('Cube of Pork').food(food => {
    food.hunger(8).saturation(0.1).effect('nausea', 200, 0, 1)
  })
})

StartupEvents.registry('fluid', e => {
  // Liquid Eggs
  e.create('liquid_egg') // ('') contains the fluid id
    .stillTexture('kubejs:block/eggs_still')
    .flowingTexture('kubejs:block/eggs_flow')
    .bucketColor(0xf8f1e9)
    .displayName('Liquid Egg')
})

ItemEvents.modification(e => {
  e.modify('minecraft:cake', item => {
    item.maxStackSize = 64
  })
  e.modify('craftsadditions:chocolate_cake', item => {
    item.maxStackSize = 64
  })
})

