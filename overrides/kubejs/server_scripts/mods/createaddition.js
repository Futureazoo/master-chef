// Code adapted from createaddition_delight_compat by Rimevel (https://github.com/Rimevel/createaddition_delight_compat/tree/main)

const $CakeBlock = Java.loadClass('net.minecraft.world.level.block.CakeBlock');
const $Vec3 = Java.loadClass(`net.minecraft.world.phys.Vec3`)

/**
 * Slice a cake into slices.
 * @param {Internal.BlockRightClickedEventJS} event
 * @param {Internal.ItemStack_} original
 * @param {Internal.ItemStack_} replacement
 * @param {Internal.ItemStack_} slice
 */
function sliceCake(event, original, replacement, slice) {
  if (!event.entity.isPlayer()) {
    return false;
  }

  /** @type {Internal.Player} */
  const player = event.entity;
  const toolStack = player.getItemInHand(event.hand);

  if (!toolStack.hasTag('farmersdelight:tools/knives')) {
    return false;
  }

  const level = event.level;
  const block = event.block;
  const pos = block.pos;
  const state = block.blockState;

  const bites = state.getValue($CakeBlock.BITES);

  /** @type {Internal.ItemEntity} */
  let itemEntity = level.createEntity('item');
  itemEntity.x = pos.x + (bites * 0.1);
  itemEntity.y = pos.y + 0.2;
  itemEntity.z = pos.z + 0.5;
  itemEntity.setDeltaMovement(new $Vec3(-0.05, 0, 0));
  itemEntity.item = slice;
  itemEntity.item.count = 1;
  itemEntity.spawn();

  event.server.runCommandSilent(`playsound minecraft:block.wool.break player @a ${pos.x} ${pos.y} ${pos.z} 5`);

  if (bites < 6) {
    block.set(original, { bites: `${bites + 1}` });
  } else {
    block.set(replacement);
  }

  return true;
}

BlockEvents.rightClicked('createaddition:chocolate_cake', event => {
  if (sliceCake(event, 'createaddition:chocolate_cake', 'minecraft:air', 'create_central_kitchen:chocolate_cake_slice')) {
    event.success();
  }
});

BlockEvents.rightClicked('amendments:createaddition/double_chocolate_cake', event => {
  if (sliceCake(event, 'amendments:createaddition/double_chocolate_cake', 'createaddition:chocolate_cake', 'create_central_kitchen:chocolate_cake_slice')) {
    event.success();
  }
});

BlockEvents.rightClicked('createaddition:honey_cake', event => {
  if (sliceCake(event, 'createaddition:honey_cake', 'minecraft:air', 'create_central_kitchen:honey_cake_slice')) {
    event.success();
  }
});

BlockEvents.rightClicked('amendments:createaddition/double_honey_cake', event => {
  if (sliceCake(event, 'amendments:createaddition/double_honey_cake', 'createaddition:honey_cake', 'create_central_kitchen:honey_cake_slice')) {
    event.success();
  }
});

