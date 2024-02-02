// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loaded Server Script')

ServerEvents.tags('item', event => {

  event.add('create:upright_on_belt', 'kubejs:baked_cake')
  event.add('create:upright_on_belt', 'kubejs:raw_cake')
  event.add('create:upright_on_belt', 'kubejs:frosted_cake')

})

ServerEvents.recipes(e => {

  // Remove Simple Hats Hat Stand
  e.remove({ output: 'simplehats:hatsdisplay'})

  // Remove Create's instance of dough
  e.remove([{ output: 'create:dough' }, { input: 'create:dough' }])

  // Custom dough manufacture
  e.remove({ output: 'farmersdelight:wheat_dough' })
  e.recipes.createMixing('farmersdelight:wheat_dough', [
    Fluid.of('water', 500),
    'create:wheat_flour'
  ])

  // Advanced Cake Manufacture
  e.remove([
    { id: 'minecraft:cake' },
    { id: 'farmersdelight:cake_from_milk_bottle' }
  ])

  e.recipes.createCompacting('kubejs:raw_cake', 'farmersdelight:wheat_dough')
  e.recipes.smoking('kubejs:baked_cake', 'kubejs:raw_cake')

  let cake_inter = 'kubejs:frosted_cake' 
  e.recipes.create.sequenced_assembly([
    Item.of('cake'), 
  ], 'kubejs:baked_cake', [ 
    e.recipes.createFilling(cake_inter, [cake_inter, Fluid.of('milk', 250)]),
    e.recipes.createDeploying(cake_inter, [cake_inter, 'minecraft:sweet_berries']),
  ]).transitionalItem(cake_inter).loops(1)
})


