console.info('Loaded Server Script - Tags')

ServerEvents.tags('item', e => {
  e.add('create:upright_on_belt', 'kubejs:frosted_cake')
  e.add('create:upright_on_belt', 'kubejs:chocolate_frosted_cake')

  e.add('create:blaze_burner_fuel/special', 'farmersdelight:rice_roll_medley_block')
})