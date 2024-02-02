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


  // Mechanical Slicing
  let sliceable = [
    'cake', 
    'sweet_berry_cheesecake', 
    'chocolate_pie', 
    'apple_pie', 
    'pumpkin', 
    'melon', 
    'brown_mushroom_colony', 
    'red_mushroom_colony'
  ].map( e => 'farmersdelight:cutting/' + e)
  
  // Code snippet adapted from enigmaquip on Discord
  sliceable.forEach(recipeId => {
    e.forEachRecipe({ id: recipeId }, recipe => {
      let recipeJson = recipe.json
      let recipeIngredients = recipeJson.getAsJsonArray('ingredients')
      if (recipeIngredients.size() > 1) { return; }
      let item = Ingredient.of(recipeIngredients.get(0))
      let tool = Ingredient.of(recipeJson.get('tool'))
      let reciperesults = recipeJson.get('result')
      if (reciperesults.size() > 4) { return; }
      e.custom({
        type: 'create:deploying',
        ingredients: [item.toJson(), tool.toJson()],
        results: reciperesults
      })
    })
  })
  

  // Mechanical Slicing with Bonus
  e.recipes.createDeploying('4x farmersdelight:cod_slice', ['minecraft:cod', '#forge:tools/knives'])
  e.recipes.createDeploying('6x farmersdelight:salmon_slice', ['minecraft:salmon', '#forge:tools/knives'])
  e.recipes.createDeploying('6x farmersdelight:kelp_roll_slice', ['farmersdelight:kelp_roll', '#forge:tools/knives'])
  e.recipes.createDeploying('4x farmersdelight:bacon', ['minecraft:porkchop', '#forge:tools/knives'])
  e.recipes.createDeploying('4x farmersdelight:mutton_chops', ['minecraft:mutton', '#forge:tools/knives'])
  e.recipes.createDeploying('4x farmersdelight:cooked_mutton_chops', ['minecraft:cooked_mutton', '#forge:tools/knives'])
  e.recipes.createDeploying('4x farmersdelight:chicken_cuts', ['minecraft:chicken', '#forge:tools/knives'])
  e.recipes.createDeploying('4x farmersdelight:cooked_chicken_cuts', ['minecraft:cooked_chicken', '#forge:tools/knives'])
  e.recipes.createDeploying(['2x farmersdelight:bacon', '4x minecraft:porkchop', '1x minecraft:bone'], ['farmersdelight:ham', '#forge:tools/knives'])
  e.recipes.createDeploying(['2x farmersdelight:cooked_bacon', '4x minecraft:cooked_porkchop', '1x minecraft:bone'], ['farmersdelight:smoked_ham', '#forge:tools/knives'])

  e.remove({ id: 'farmersdelight:cabbage_from_leaves' })
  e.remove({ id: 'farmersdelight:integration/create/mixing/cabbage_slice_from_mixing' })
  e.recipes.createMixing('4x farmersdelight:cabbage_leaf', 'farmersdelight:cabbage')

  e.recipes.create.milling(['2x farmersdelight:minced_beef', Item.of('farmersdelight:minced_beef').withChance(0.5)], 'minecraft:beef')
  e.recipes.create.crushing(['4x farmersdelight:minced_beef', Item.of('farmersdelight:minced_beef').withChance(0.25)], 'minecraft:beef')
})
