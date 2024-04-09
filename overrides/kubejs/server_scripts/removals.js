console.info('Loaded Server Script - Removals')

ServerEvents.recipes(e => {
  function recipeDelete(item, replacement) {
    if (replacement != undefined) {
      e.replaceInput({ input: item }, item, replacement)
    } else {
      e.remove([{ output: item }, { input: item }])
    }
  }

  // Thermal Removals
  e.remove({ id: /thermal:lightning_charge\/.*/ })
  e.remove({ id: /thermal:earth_charge\/.*/ })
  e.remove({ id: /thermal:ice_charge\/.*/ })

  e.remove({ id: 'thermal:machine_press' })
  e.remove({ type: 'thermal:press' })

  e.remove({ id: 'thermal:machine_crafter' })

  // Potions are apparently hardocded :/
  // e.remove({ id: 'thermal:machine_brewer' })
  // e.remove({ type: 'thermal:brewer' })

  recipeDelete('thermal:apple_block')
  recipeDelete('thermal:carrot_block')
  recipeDelete('thermal:potato_block')
  recipeDelete('thermal:beetroot_block')
  recipeDelete('thermal:bamboo_block')
  recipeDelete('thermal:sugar_cane_block')

  e.remove({ id: 'thermal:device_fisher' })
  e.remove({ id: 'thermal:junk_net' })
  e.remove({ id: 'thermal:aquachow_4' })
  e.remove({ id: 'thermal:deep_aquachow_4' })

  recipeDelete('thermal:ruby_gear')
  recipeDelete('thermal:sapphire_gear')
  recipeDelete('thermal:steel_gear')
  recipeDelete('thermal:emerald_gear')
  recipeDelete('thermal:diamond_gear')
  recipeDelete('thermal:netherite_gear')
  recipeDelete('thermal:quartz_gear')
  recipeDelete('thermal:rose_gold_gear')
  recipeDelete('thermal:enderium_gear')

  e.remove({ id: 'thermal:tools/satchel' })

  e.remove({ id: 'thermal:storage/copper_ingot_from_nuggets' })
  recipeDelete('thermal:copper_nugget', 'create:copper_nugget')
  recipeDelete('thermal:iron_plate', 'create:iron_sheet')
  recipeDelete('thermal:gold_plate', 'create:golden_sheet')
  recipeDelete('thermal:copper_plate', 'create:copper_sheet')

  e.remove({ id: 'thermal:machines/crucible/crucible_cobblestone_to_lava' })
  e.remove({ id: 'thermal:machines/crucible/crucible_stone_to_lava' })
  e.remove({ id: 'thermal:machines/crucible/crucible_obsidian_to_lava' })
  e.remove({ id: 'thermal:machines/crucible/crucible_netherrack_to_lava' })
  e.remove({ id: 'thermal:machines/crucible/crucible_magma_block_to_lava' })
})