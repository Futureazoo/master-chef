// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loaded Server Script')

ServerEvents.tags('item', e => {
  e.add('create:upright_on_belt', 'kubejs:baked_cake')
  e.add('create:upright_on_belt', 'kubejs:raw_cake')
  e.add('create:upright_on_belt', 'kubejs:frosted_cake')
  e.add('create:upright_on_belt', 'kubejs:chocolate_frosted_cake')
  e.add('create:upright_on_belt', 'thermal:chocolate_cake')
})

ServerEvents.tags('block', event => {
  event.add('minecraft:signs', 'salt:salt_cluster')
})

ServerEvents.recipes(e => {
  let wood_types = ['minecraft:oak', 'minecraft:spruce', 'minecraft:birch', 'minecraft:jungle', 'minecraft:acacia', 'minecraft:dark_oak', 'minecraft:mangrove', 'minecraft:cherry', 'minecraft:crimson', 'minecraft:bamboo', 'minecraft:warped']

  function recipeDelete(item, replacement) {
    if (replacement != undefined) {
      e.replaceInput({ input: item }, item, replacement)
    } else {
      e.remove([{ output: item }, { input: item }])
    }
  }

  // Item Removals
  e.remove({ output: 'simplehats:hatdisplay' })
  // Redundant Thermal Item Removals

  // Sub Farmer's Delight Rice
  recipeDelete('thermal:rice_block')
  recipeDelete('thermal:rice', 'farmersdelight:rice')
  recipeDelete('thermal:rice_seeds')

  // Sub Farmer's Delight Tomato
  recipeDelete('thermal:tomato_block')
  recipeDelete('thermal:tomato', 'farmersdelight:tomato')
  recipeDelete('thermal:tomato_seeds')

  // Sub Farmer's Delight Onion
  recipeDelete('thermal:onion_block')
  recipeDelete('thermal:onion', 'farmersdelight:onion')
  recipeDelete('thermal:onion_seeds')
  
  // Sub Supplementaries Flax
  recipeDelete('thermal:flax_block')
  recipeDelete('thermal:flax', 'supplementaries:flax')
  recipeDelete('thermal:flax_seeds')

  recipeDelete('thermal:hops_block')
  recipeDelete('thermal:hops')
  recipeDelete('thermal:hops_seeds')

  // Sub Wheat
  recipeDelete('thermal:barley_block')
  recipeDelete('thermal:barley', 'minecraft:wheat')
  recipeDelete('thermal:barley_seeds')

  // Sub Beetroot
  recipeDelete('thermal:radish_block')
  recipeDelete('thermal:radish', 'minecraft:beetroot')
  recipeDelete('thermal:radish_seeds')

  recipeDelete('thermal:sadiroot_block')
  recipeDelete('thermal:sadiroot')
  recipeDelete('thermal:sadiroot_seeds')

  recipeDelete('thermal:carrot_block')
  recipeDelete('thermal:potato_block')
  recipeDelete('thermal:beetroot_block')
  recipeDelete('thermal:bamboo_block')

  recipeDelete('thermal:sushi_maki')

  // Sub Create Honey
  e.replaceOutput({ id: 'thermal:machines/centrifuge/centrifuge_honey_bottle' }, Fluid.of('cofh_core:honey', 250), Fluid.of('create:honey', 250))
  e.replaceOutput({ id: 'thermal:machines/centrifuge/centrifuge_honeycomb' }, Fluid.of('cofh_core:honey', 100), Fluid.of('create:honey', 100))
  e.replaceOutput({ id: 'thermal:machines/crucible/crucible_honey_block_to_honey' }, Fluid.of('cofh_core:honey', 1000), Fluid.of('create:honey', 1000))
  e.replaceInput({ id: 'thermal:machines/chiller/chiller_honey_to_honey_block' }, Fluid.of('cofh_core:honey', 1000), Fluid.of('create:honey', 1000))
  e.remove('thermal:devices/hive_extractor')
  e.custom({
    "type": "thermal:hive_extractor",
    "hive": "minecraft:beehive",
    "item": "minecraft:honeycomb",
    "fluid": "create:honey"
  });
  e.custom({
    "type": "thermal:hive_extractor",
    "hive": "minecraft:bee_nest",
    "item": "minecraft:honeycomb",
    "fluid": "create:honey"
  });

  // Adds a recipe to smoking & cooking like ordinary minecraft food
  function createCookingRecipes(output, input) {
    e.recipes.smoking(output, input)
    e.recipes.campfireCooking(output, input)
  }

  // Slab Sawing  
  wood_types.forEach(wood => {
    e.recipes.createCutting('2x ' + wood + '_slab', wood + '_planks')
  })

  // Bowl Crafting
  e.recipes.createCutting('minecraft:bowl', '#minecraft:wooden_slabs')

  // Custom dough manufacture
  e.remove({ id: 'minecraft:bread' })
  e.recipes.campfireCooking('minecraft:bread', 'farmersdelight:wheat_dough')
  e.remove({ output: 'farmersdelight:wheat_dough' })

  e.recipes.create.milling(['salt:salt', Item.of('salt:salt').withChance(0.5)], 'salt:raw_rock_salt')
  e.recipes.create.crushing(['2x salt:salt', Item.of('salt:salt').withChance(0.5)], 'salt:raw_rock_salt')
  e.recipes.shapeless('2x kubejs:dry_mix', ['salt:salt', 'create:wheat_flour'])
  e.recipes.createSplashing('farmersdelight:wheat_dough', 'kubejs:dry_mix')

  e.remove({ id: 'architects_palette:bread_block' })
  e.recipes.shapeless('architects_palette:bread_block', '9x minecraft:bread')

  // Advanced Cake Manufacture
  e.remove([
    { id: 'minecraft:cake' },
    { id: 'create:cake' },
    { id: 'thermal:chocolate_cake' },
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

  let choco_cake_inter = 'kubejs:chocolate_frosted_cake'
  e.recipes.create.sequenced_assembly([
    Item.of('thermal:chocolate_cake'),
  ], 'kubejs:baked_cake', [
    e.recipes.createFilling(choco_cake_inter, [choco_cake_inter, Fluid.of('create:chocolate', 250)]),
    e.recipes.createDeploying(choco_cake_inter, [choco_cake_inter, 'thermal:strawberry']),
  ]).transitionalItem(choco_cake_inter).loops(1)

  e.recipes.farmersdelight.cutting(
    "thermal:chocolate_cake",
    "#forge:tools/knives", // tool
    [ 
      '7x kubejs:chocolate_cake_slice'
    ],
  );

  // Advanced Cookie Manufacture
  e.remove([
    { id: 'minecraft:cookie' },
    { id: 'farmersdelight:honey_cookie' },
    { id: 'farmersdelight:sweet_berry_cookie' }
  ])

  e.recipes.createMixing('8x kubejs:cookie_dough', [
    'create:bar_of_chocolate',
    'farmersdelight:wheat_dough'
  ])
  e.recipes.createMixing('8x kubejs:honey_cookie_dough', [
    Fluid.of('create:honey', 250),
    'farmersdelight:wheat_dough'
  ])
  e.recipes.createMixing('8x kubejs:sweet_berry_cookie_dough', [
    'minecraft:sweet_berries',
    'farmersdelight:wheat_dough'
  ])

  createCookingRecipes('minecraft:cookie', 'kubejs:cookie_dough');
  createCookingRecipes('farmersdelight:honey_cookie', 'kubejs:honey_cookie_dough');
  createCookingRecipes('farmersdelight:sweet_berry_cookie', 'kubejs:sweet_berry_cookie_dough');

  // Dough Sheets (Pancakes, Dumplings, Pasta)
  e.recipes.create.pressing('kubejs:dough_sheet', 'farmersdelight:wheat_dough')
  e.recipes.createDeploying('2x farmersdelight:raw_pasta', ['kubejs:dough_sheet', '#forge:tools/knives'])
  createCookingRecipes('supplementaries:pancake', 'kubejs:dough_sheet')

  e.replaceInput({ id: 'farmersdelight:cooking/dumplings' }, '#forge:dough', 'kubejs:dough_sheet') 

  // Remove Create's instance of dough
  e.remove([{ output: 'create:dough' }, { input: 'create:dough' }])
  e.shapeless('minecraft:slime_ball', ['minecraft:lime_dye', 'farmersdelight:wheat_dough'])

  // Vanilla Farmer's Delight Mechanical Slicing: code snippet adapted from enigmaquip on Discord
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

  // Other Mechanical Slicing
  e.recipes.createDeploying('7x kubejs:chocolate_cake_slice', ['thermal:chocolate_cake', '#forge:tools/knives'])

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

  e.recipes.create.milling(['2x farmersdelight:minced_beef', Item.of('farmersdelight:minced_beef').withChance(0.25)], 'minecraft:beef')
  e.recipes.create.crushing(['4x farmersdelight:minced_beef', Item.of('farmersdelight:minced_beef').withChance(0.25)], 'minecraft:beef')

  // Thermal Removals
  e.remove({ input: '#forge:coins' })
  e.remove({ id: /thermal:lightning_charge\/.*/ })
  e.remove({ id: /thermal:earth_charge\/.*/ })
  e.remove({ id: /thermal:ice_charge\/.*/ })
  e.remove({ type: 'thermal:press' })
  e.remove({ id: /thermal:press*/ })
  recipeDelete('thermal:ruby_gear')
  recipeDelete('thermal:sapphire_gear')
  recipeDelete('thermal:steel_gear')
  recipeDelete('thermal:emerald_gear')
  recipeDelete('thermal:diamond_gear')
  recipeDelete('thermal:netherite_gear')
  recipeDelete('thermal:quartz_gear')
  recipeDelete('thermal:rose_gold_gear')
  recipeDelete('thermal:enderium_gear')

  e.remove({ id: 'thermal:storage/copper_ingot_from_nuggets'})
  recipeDelete('thermal:copper_nugget', 'create:copper_nugget')
  recipeDelete('thermal:iron_plate', 'create:iron_sheet')
  recipeDelete('thermal:gold_plate', 'create:golden_sheet')
  recipeDelete('thermal:copper_plate', 'create:copper_sheet')

  // Paraglider Removals
  recipeDelete('paraglider:goddess_statue')

  // Immersive Aircraft recipe changes
  recipeDelete('immersive_aircraft:propeller', 'create:propeller')
  e.replaceInput({ id: 'immersive_aircraft:sail' }, 'minecraft:white_carpet', 'create:white_sail')
  e.replaceInput({ id: 'immersive_aircraft:enhanced_propeller' }, 'minecraft:copper_ingot', 'create:brass_ingot')
  e.replaceInput({ id: 'immersive_aircraft:gyroscope' }, 'minecraft:comparator', 'create:electron_tube')
  e.replaceInput({ id: 'immersive_aircraft:improved_landing_gear' }, 'minecraft:coal', 'thermal:cured_rubber')
})
