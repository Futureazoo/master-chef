// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loaded Startup Script')

let $LevelPlatformHelper = Java.loadClass('dev.latvian.mods.kubejs.platform.LevelPlatformHelper')

LycheeEvents.customAction('consume_item_on_depot', event => {
  event.action.applyFunc = (recipe, ctx, times) => {
    let be = ctx.getParam('block_entity')
    let inv = $LevelPlatformHelper.get().getInventoryFromBlockEntity(be, 'up')
    inv.extractItem(0, 1, false)
  }
})

LycheeEvents.customCondition('has_item_on_depot', event => {
  let ingredient = Ingredient.of(event.data.ingredient)
  event.condition.testFunc = (recipe, ctx, times) => {
    let be = ctx.getParam('block_entity')
    let inv = $LevelPlatformHelper.get().getInventoryFromBlockEntity(be, 'up')
    return ingredient.test(inv.getStackInSlot(0)) ? times : 0
  }
})

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
    food.hunger(6).saturation(0.2).effect('nausea', 200, 0, 1)
  })

  e.create('cube_of_chicken').displayName('Cube of Chicken').food(food => {
    food.hunger(4).saturation(0.1).effect('nausea', 200, 0, 1)
  })

  e.create('cube_of_mutton').displayName('Cube of Mutton').food(food => {
    food.hunger(6).saturation(0.2).effect('nausea', 200, 0, 1)
  })

  e.create('cube_of_pork').displayName('Cube of Pork').food(food => {
    food.hunger(6).saturation(0.2).effect('nausea', 200, 0, 1)
  })
})

StartupEvents.registry('fluid', e => {
  // Liquid Eggs
  e.create('liquid_egg')
    .stillTexture('kubejs:block/eggs_still')
    .flowingTexture('kubejs:block/eggs_flow')
    .bucketColor(0xf8f1e9)
    .displayName('Liquid Egg')

  e.create('liquid_chicken')
    .stillTexture('kubejs:block/liquid_chicken_still')
    .flowingTexture('kubejs:block/liquid_chicken_flow')
    .bucketColor(0xefbcac)
    .displayName('Liquid Chicken')

  e.create('liquid_beef')
    .stillTexture('kubejs:block/liquid_beef_still')
    .flowingTexture('kubejs:block/liquid_beef_flow')
    .bucketColor(0xe03e35)
    .displayName('Liquid Beef')

  e.create('liquid_mutton')
    .stillTexture('kubejs:block/liquid_mutton_still')
    .flowingTexture('kubejs:block/liquid_mutton_flow')
    .bucketColor(0xd12e26)
    .displayName('Liquid Mutton')

  e.create('liquid_pork')
    .stillTexture('kubejs:block/liquid_pork_still')
    .flowingTexture('kubejs:block/liquid_pork_flow')
    .bucketColor(0xff7777)
    .displayName('Liquid Pork')
})

ItemEvents.modification(e => {
  e.modify('minecraft:cake', item => {
    item.maxStackSize = 64
  })
  e.modify('craftsadditions:chocolate_cake', item => {
    item.maxStackSize = 64
  })
  e.modify('craftsadditions:honey_cake', item => {
    item.maxStackSize = 64
  })
  e.modify('farmersdelight:rice_roll_medley_block', item => {
    item.maxStackSize = 64
  })
})
