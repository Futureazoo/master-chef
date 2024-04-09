console.info('Loaded Server Script - Feature: SimpleHats')

// Remove all Simplehats Recipes
ServerEvents.recipes(e => { 
  e.remove({ mod: 'simplehats' })
})

// Remove hatbag drops from Loot Tables
LootJS.modifiers((e) => {
  e.removeGlobalModifier("@simplehats");
})