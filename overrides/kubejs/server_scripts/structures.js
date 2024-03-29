console.info('Loaded Server Script - Structure')

ServerEvents.tags("worldgen/biome", (e) => {
  e.get("paraglider:has_structure/nether_horned_statue").removeAll()
  e.get("paraglider:has_structure/tarrey_town_goddess_statue").removeAll()
  e.get("paraglider:has_structure/underground_horned_statue").removeAll()
})