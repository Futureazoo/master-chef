// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loaded Server Script - Recipes')

ServerEvents.recipes(e => {
  let wood_types = ['minecraft:oak', 'minecraft:spruce', 'minecraft:birch', 'minecraft:jungle', 'minecraft:acacia', 'minecraft:dark_oak', 'minecraft:mangrove', 'minecraft:cherry', 'minecraft:crimson', 'minecraft:bamboo', 'minecraft:warped']

  e.custom({
    type: "lychee:block_interacting",
    item_in: {
      item: "minecraft:netherite_ingot"
    },
    block_in: "create:depot",
    post: [
      {
        type: "drop_item",
        item: "minecraft:cobblestone"
      },
      {
        type: "prevent_default"
      },
      {
        type: "custom",
        id: "consume_item_on_depot"
      }
    ],
    "contextual": {
      type: "custom",
      id: "has_item_on_depot",
      ingredient: {
        "item": "minecraft:stone"
      }
    }
  });

  // WIP, doesn't really work as expected
  e.custom({
    type: "lychee:lightning_channeling",
    post: [
      {
        type: 'execute',
        command: 'fill ~-3 ~-3 ~-3 ~3 ~3 ~3 create:industrial_iron_block replace create:basin[facing=down]{DisabledSpoutput:[],Filter:{Count:0b,id:"minecraft:air"},FilterAmount:64,FluidOverflow:[],ForgeCaps:{},InputItems:{Items:[{Count:1b,Slot:0,id:"minecraft:beetroot"}],Size:9},InputTanks:[{Level:{Speed:0.25f,Target:1.0f,Value:1.0f},TankContent:{Amount:1000,FluidName:"minecraft:water"}},{Level:{Speed:0.25f,Target:0.0f,Value:0.0f},TankContent:{Amount:0,FluidName:"minecraft:empty"}}],OutputItems:{Items:[],Size:9},OutputTanks:[{Level:{Speed:0.25f,Target:0.0f,Value:0.0f},TankContent:{Amount:0,FluidName:"minecraft:empty"}},{Level:{Speed:0.25f,Target:0.0f,Value:0.0f},TankContent:{Amount:0,FluidName:"minecraft:empty"}}],Overflow:[],UpTo:1b}'
      },
      {
        type: 'execute',
        command: 'fill ~-3 ~-3 ~-3 ~3 ~3 ~3 create:basin[facing=down]{DisabledSpoutput:[],Filter:{Count:0b,id:"minecraft:air"},FilterAmount:64,FluidOverflow:[],ForgeCaps:{},InputItems:{Items:[],Size:9},InputTanks:[{Level:{Speed:0.25f,Target:1.0f,Value:1.0f},TankContent:{Amount:0,FluidName:"minecraft:empty"}},{Level:{Speed:0.25f,Target:0.0f,Value:0.0f},TankContent:{Amount:0,FluidName:"minecraft:empty"}}],OutputItems:{Items:[],Size:9},OutputTanks:[{Level:{Speed:0.25f,Target:0.0f,Value:0.0f},TankContent:{Amount:1000,FluidName:"kubejs:liquid_pork"}},{Level:{Speed:0.25f,Target:0.0f,Value:0.0f},TankContent:{Amount:0,FluidName:"minecraft:empty"}}],Overflow:[],UpTo:1b} replace create:industrial_iron_block'
      }
    ],
  });


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

  e.custom(addFermenting(
    ["kubejs:cube_of_beef"],
    ["1000mb kubejs:liquid_beef", "1x minecraft:slime_ball"]
  ));

  e.custom(addFermenting(
    ["kubejs:cube_of_chicken"],
    ["1000mb kubejs:liquid_chicken", "1x minecraft:slime_ball"]
  ));

  e.custom(addFermenting(
    ["kubejs:cube_of_mutton"],
    ["1000mb kubejs:liquid_mutton", "1x minecraft:slime_ball"]
  ));

  e.custom(addFermenting(
    ["kubejs:cube_of_pork"],
    ["1000mb kubejs:liquid_pork", "1x minecraft:slime_ball"]
  ));

  e.custom(addDistillation(
    ['100mb thermal:redstone', '100mb thermal:glowstone'],
    ['1000mb minecraft:lava'],
    400,
    'superheated'
  ))

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

  e.remove({ id: 'create:milling/wheat' })
  e.recipes.createMilling(['create:wheat_flour', Item.of('create:wheat_flour').withChance(0.5)], 'minecraft:wheat')
  e.recipes.createCrushing(['2x create:wheat_flour', Item.of('create:wheat_flour').withChance(0.5)], 'minecraft:wheat')

  e.recipes.create.milling(['salt:salt', Item.of('salt:salt').withChance(0.5)], 'salt:raw_rock_salt')
  e.recipes.create.crushing(['2x salt:salt', Item.of('salt:salt').withChance(0.5)], 'salt:raw_rock_salt')
  e.recipes.shapeless('2x kubejs:dry_mix', ['salt:salt', 'create:wheat_flour'])
  e.recipes.createSplashing('farmersdelight:wheat_dough', 'kubejs:dry_mix')

  e.remove({ id: 'architects_palette:bread_block' })
  e.recipes.shapeless('architects_palette:bread_block', '9x minecraft:bread')

  // Cardboard Box Manufacture
  e.recipes.createCompacting(
    ['2x kubejs:cardboard'], 
    [Fluid.water(100), 'thermal:sawdust']
  )
  e.remove({ id: 'wares:cardboard_box' })
  e.recipes.shapeless('wares:cardboard_box', '4x kubejs:cardboard')

  // Liquid Eggs
  e.shapeless('kubejs:liquid_egg_bucket', [
    'minecraft:bucket',
    '4x minecraft:egg'
  ])
  e.shapeless('kubejs:liquid_egg_bucket', [
    'minecraft:bucket',
    '2x minecraft:turtle_egg'
  ])
  e.shapeless('kubejs:liquid_egg_bucket', [
    'minecraft:bucket',
    'minecraft:sniffer_egg'
  ])

  const eggFluidQuantities = {
    'minecraft:egg': 250,
    'minecraft:turtle_egg': 500,
    'minecraft:sniffer_egg': 1000,
    'quark:egg_parrot_red_blue': 100,
    'quark:egg_parrot_blue': 100,
    'quark:egg_parrot_green': 100,
    'quark:egg_parrot_yellow_blue': 100,
    'quark:egg_parrot_grey': 100
  };

  for (const [eggType, fluidQuantity] of Object.entries(eggFluidQuantities)) {
    e.recipes.create.emptying(
      [Fluid.of('kubejs:liquid_egg', fluidQuantity), 'minecraft:bone_meal'],
      eggType
    );
  }

  // Honey to Sugar
  e.shapeless('12x minecraft:sugar', [
    'create:honey_bucket'
  ])


  // Advanced Cake Manufacture
  e.remove([
    { id: 'minecraft:cake' },
    { id: 'create:cake' },
    { id: 'thermal:chocolate_cake' },
    { id: 'farmersdelight:cake_from_milk_bottle' },
    { id: 'createaddition:filling/cake' },
    { id: 'createaddition:filling/chocolate_cake' },
    { id: 'createaddition:filling/honey_cake' }
  ])

  e.recipes.createMixing('createaddition:cake_base', [
    Fluid.of('kubejs:liquid_egg', 100),
    'farmersdelight:wheat_dough'
  ])

  e.recipes.createFilling('createaddition:honey_cake', [
    Fluid.of('create:honey', 250),
    'createaddition:cake_base_baked'
  ])

  let cake_inter = 'kubejs:frosted_cake' 
  e.recipes.create.sequenced_assembly([
    Item.of('cake'), 
  ], 'createaddition:cake_base_baked', [ 
    e.recipes.createFilling(cake_inter, [cake_inter, Fluid.of('milk', 250)]),
    e.recipes.createDeploying(cake_inter, [cake_inter, 'minecraft:sweet_berries']),
  ]).transitionalItem(cake_inter).loops(1)


  let choco_cake_inter = 'kubejs:chocolate_frosted_cake'
  e.recipes.create.sequenced_assembly([
    Item.of('createaddition:chocolate_cake'),
  ], 'createaddition:cake_base_baked', [
    e.recipes.createFilling(choco_cake_inter, [choco_cake_inter, Fluid.of('create:chocolate', 250)]),
    e.recipes.createDeploying(choco_cake_inter, [choco_cake_inter, 'minecraft:sweet_berries']),
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
    { id: 'quark:tweaks/crafting/utility/bent/cookie' },
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
  e.recipes.farmersdelight.cutting(
    "kubejs:dough_sheet",
    "#forge:tools/knives", // tool
    [
      '2x farmersdelight:raw_pasta'
    ],
  );
  createCookingRecipes('supplementaries:pancake', 'kubejs:dough_sheet')

  e.replaceInput({ id: 'farmersdelight:cooking/dumplings' }, '#forge:dough', 'kubejs:dough_sheet') 

  // Remove Create's instance of dough
  e.remove([{ output: 'create:dough' }, { input: 'create:dough' }])
  e.shapeless('minecraft:slime_ball', ['minecraft:lime_dye', 'farmersdelight:wheat_dough'])

  // Sponge Cloning
  e.recipes.createCutting('2x minecraft:sponge', 'minecraft:wet_sponge')

  // Kelp Roll Recipe
  e.remove({ id: 'farmersdelight:kelp_roll' })
  e.shaped('farmersdelight:kelp_roll', [// arg 1: output
    'SSS',
    'KKK'
  ], {
    S: 'minecraft:sponge',
    K: 'minecraft:dried_kelp'
  }
  )

  // Modified Rice Roll Medley
  e.replaceInput({ id: 'farmersdelight:rice_roll_medley_block' }, 'minecraft:bowl', 'farmersdelight:cod_roll') 

  // Meat Milling
  e.recipes.create.milling(['2x farmersdelight:minced_beef', Item.of('farmersdelight:minced_beef').withChance(0.25)], 'minecraft:beef')
  e.recipes.create.crushing(['4x farmersdelight:minced_beef', Item.of('farmersdelight:minced_beef').withChance(0.25)], 'minecraft:beef')

  // Meat Cube Recipes
  e.recipes.create.milling(['6x farmersdelight:minced_beef', Item.of('farmersdelight:minced_beef').withChance(0.50)], 'kubejs:cube_of_beef')
  e.recipes.create.crushing(['8x farmersdelight:minced_beef', Item.of('farmersdelight:minced_beef').withChance(0.50)], 'kubejs:cube_of_beef')
  e.recipes.farmersdelight.cutting(
    "kubejs:cube_of_beef",
    "#forge:tools/knives",
    [
      '6x farmersdelight:minced_beef'
    ],
  );
  e.recipes.farmersdelight.cutting(
    "kubejs:cube_of_chicken",
    "#forge:tools/knives",
    [
      '6x farmersdelight:chicken_cuts'
    ],
  );
  e.recipes.farmersdelight.cutting(
    "kubejs:cube_of_mutton",
    "#forge:tools/knives",
    [
      '6x farmersdelight:mutton_chops'
    ],
  );
  e.recipes.farmersdelight.cutting(
    "kubejs:cube_of_pork",
    "#forge:tools/knives",
    [
      '6x farmersdelight:bacon'
    ],
  );

  e.replaceInput({ id: 'immersive_aircraft:sail' }, 'minecraft:white_carpet', 'create:white_sail')
  e.replaceInput({ id: 'immersive_aircraft:enhanced_propeller' }, 'minecraft:copper_ingot', 'create:brass_ingot')
  e.replaceInput({ id: 'immersive_aircraft:gyroscope' }, 'minecraft:comparator', 'create:electron_tube')
  e.replaceInput({ id: 'immersive_aircraft:improved_landing_gear' }, 'minecraft:coal', 'thermal:cured_rubber')
})

LootJS.modifiers((e) => {
  e.addBlockLootModifier("farmersdelight:rice_roll_medley_block").replaceLoot("minecraft:bowl", "farmersdelight:cod_roll");
});
