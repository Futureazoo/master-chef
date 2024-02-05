/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class LongArgumentInfo$Template implements Internal.ArgumentTypeInfo$Template<Internal.LongArgumentType> {
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        type(): Internal.ArgumentTypeInfo<Internal.LongArgumentType, any>;
    }
    type LongArgumentInfo$Template_ = LongArgumentInfo$Template;
    class BlankSailBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setArmorToughness(armorToughness: number): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type BlankSailBlockItem_ = BlankSailBlockItem;
    class FluidStack {
        constructor(arg0: Internal.Fluid_, arg1: number)
        constructor(arg0: Internal.FluidStack_, arg1: number)
        constructor(arg0: Internal.Fluid_, arg1: number, arg2: Internal.CompoundTag_)
        getDisplayName(): Internal.Component;
        setTag(arg0: Internal.CompoundTag_): void;
        getRawFluid(): Internal.Fluid;
        getOrCreateChildTag(arg0: string): Internal.CompoundTag;
        setAmount(arg0: number): void;
        static readFromPacket(arg0: Internal.FriendlyByteBuf_): Internal.FluidStack;
        removeChildTag(arg0: string): void;
        isEmpty(): boolean;
        writeToNBT(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        shrink(arg0: number): void;
        getAmount(): number;
        static loadFluidStackFromNBT(arg0: Internal.CompoundTag_): Internal.FluidStack;
        static areFluidStackTagsEqual(arg0: Internal.FluidStack_, arg1: Internal.FluidStack_): boolean;
        isFluidEqual(arg0: Internal.FluidStack_): boolean;
        getTranslationKey(): string;
        copy(): this;
        isFluidEqual(arg0: Internal.ItemStack_): boolean;
        getOrCreateTag(): Internal.CompoundTag;
        getChildTag(arg0: string): Internal.CompoundTag;
        hasTag(): boolean;
        getTag(): Internal.CompoundTag;
        getFluid(): Internal.Fluid;
        isFluidStackIdentical(arg0: Internal.FluidStack_): boolean;
        writeToPacket(arg0: Internal.FriendlyByteBuf_): void;
        containsFluid(arg0: Internal.FluidStack_): boolean;
        grow(arg0: number): void;
        get displayName(): Internal.Component
        set tag(arg0: Internal.CompoundTag_)
        get rawFluid(): Internal.Fluid
        set amount(arg0: number)
        get empty(): boolean
        get amount(): number
        get translationKey(): string
        get orCreateTag(): Internal.CompoundTag
        get tag(): Internal.CompoundTag
        get fluid(): Internal.Fluid
        static readonly EMPTY: Internal.FluidStack;
        static readonly CODEC: Internal.Codec<Internal.FluidStack>;
    }
    type FluidStack_ = FluidStack;
    class KelpBlock extends Internal.GrowingPlantHeadBlock implements Internal.LiquidBlockContainer {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type KelpBlock_ = KelpBlock;
    class NetherFortressStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly FORTRESS_ENEMIES: Internal.WeightedRandomList<Internal.MobSpawnSettings$SpawnerData>;
        static readonly CODEC: Internal.Codec<Internal.NetherFortressStructure>;
    }
    type NetherFortressStructure_ = NetherFortressStructure;
    abstract class AbstractReferenceCountedByteBuf extends Internal.AbstractByteBuf {
        touch(arg0: any): Internal.ReferenceCounted;
        retain(): Internal.ReferenceCounted;
        touch(): Internal.ReferenceCounted;
    }
    type AbstractReferenceCountedByteBuf_ = AbstractReferenceCountedByteBuf;
    abstract class HorizontalDirectionalBlock extends Internal.Block {
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly FACING: Internal.DirectionProperty;
    }
    type HorizontalDirectionalBlock_ = HorizontalDirectionalBlock;
    abstract class Biome$TemperatureModifier extends Internal.Enum<Internal.Biome$TemperatureModifier> implements Internal.StringRepresentable {
        abstract modifyTemperature(arg0: BlockPos_, arg1: number): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.Biome$TemperatureModifier;
        getSerializedName(): string;
        getName(): string;
        static values(): Internal.Biome$TemperatureModifier[];
        get serializedName(): string
        get name(): string
        static readonly FROZEN: Internal.Biome$TemperatureModifier;
        static readonly NONE: Internal.Biome$TemperatureModifier;
        static readonly CODEC: Internal.Codec<Internal.Biome$TemperatureModifier>;
    }
    type Biome$TemperatureModifier_ = "frozen" | Biome$TemperatureModifier | "none";
    class FlowerBoxBlock extends Internal.WaterBlock implements Internal.EntityBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(pPos: BlockPos_, pState: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly LIGHT_LEVEL: Internal.IntegerProperty;
        static readonly FLOOR: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type FlowerBoxBlock_ = FlowerBoxBlock;
    class StructureStart {
        constructor(arg0: Internal.Structure_, arg1: Internal.ChunkPos_, arg2: number, arg3: Internal.PiecesContainer_)
        canBeReferenced(): boolean;
        isValid(): boolean;
        getChunkPos(): Internal.ChunkPos;
        getPieces(): Internal.List<Internal.StructurePiece>;
        getStructure(): Internal.Structure;
        getReferences(): number;
        placeInChunk(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_): void;
        getBoundingBox(): Internal.BoundingBox;
        addReference(): void;
        createTag(arg0: Internal.StructurePieceSerializationContext_, arg1: Internal.ChunkPos_): Internal.CompoundTag;
        static loadStaticStart(arg0: Internal.StructurePieceSerializationContext_, arg1: Internal.CompoundTag_, arg2: number): Internal.StructureStart;
        get valid(): boolean
        get chunkPos(): Internal.ChunkPos
        get pieces(): Internal.List<Internal.StructurePiece>
        get structure(): Internal.Structure
        get references(): number
        get boundingBox(): Internal.BoundingBox
        static readonly INVALID_START_ID: "INVALID";
        static readonly INVALID_START: Internal.StructureStart;
    }
    type StructureStart_ = StructureStart;
    interface ItemColorsForgeAccessor {
        abstract puzzleslib$getItemColors(): Internal.Map<Internal.Holder$Reference<Internal.Item>, Internal.ItemColor>;
        (): Internal.Map_<Internal.Holder$Reference<Internal.Item>, Internal.ItemColor>;
    }
    type ItemColorsForgeAccessor_ = ItemColorsForgeAccessor;
    class Resource {
        constructor(arg0: Internal.PackResources_, arg1: Internal.IoSupplier_<Internal.InputStream>, arg2: Internal.IoSupplier_<Internal.ResourceMetadata>)
        constructor(arg0: Internal.PackResources_, arg1: Internal.IoSupplier_<Internal.InputStream>)
        open(): Internal.InputStream;
        openAsReader(): Internal.BufferedReader;
        metadata(): Internal.ResourceMetadata;
        isBuiltin(): boolean;
        sourcePackId(): string;
        source(): Internal.PackResources;
        get builtin(): boolean
    }
    type Resource_ = Resource;
    class ServerboundUseItemPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.InteractionHand_, arg1: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getSequence(): number;
        getHand(): Internal.InteractionHand;
        isSkippable(): boolean;
        get sequence(): number
        get hand(): Internal.InteractionHand
        get skippable(): boolean
    }
    type ServerboundUseItemPacket_ = ServerboundUseItemPacket;
    interface IIngredientSerializer <T extends Internal.Ingredient> {
        abstract parse(arg0: Internal.JsonObject_): T;
        abstract parse(arg0: Internal.FriendlyByteBuf_): T;
        abstract write(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
    }
    type IIngredientSerializer_<T extends Internal.Ingredient> = IIngredientSerializer<T>;
    class ConsoleLine {
        constructor(buf: Internal.FriendlyByteBuf_)
        constructor(console: Internal.ConsoleJS_, timestamp: number, message: string)
        withSourceLine(source: string, line: number): this;
        getText(): string;
        static writeToNet(buf: Internal.FriendlyByteBuf_, line: Internal.ConsoleLine_): void;
        withExternalFile(path: Internal.Path_): this;
        get text(): string
        type: Internal.LogType;
        externalFile: Internal.Path;
        readonly console: Internal.ConsoleJS;
        readonly timestamp: number;
        group: string;
        sourceLines: Internal.Collection<Internal.ConsoleLine$SourceLine>;
        static readonly EMPTY_ARRAY: Internal.ConsoleLine[];
        message: string;
        stackTrace: Internal.List<string>;
    }
    type ConsoleLine_ = ConsoleLine;
    class ServerboundChangeDifficultyPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.Difficulty_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getDifficulty(): Internal.Difficulty;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        isSkippable(): boolean;
        get difficulty(): Internal.Difficulty
        get skippable(): boolean
    }
    type ServerboundChangeDifficultyPacket_ = ServerboundChangeDifficultyPacket;
    interface RecipeFilterParseEvent {
        abstract parse(arg0: Internal.Context_, arg1: Internal.List_<Internal.RecipeFilter>, arg2: Internal.Map_<any, any>): void;
        (arg0: Internal.Context, arg1: Internal.List<Internal.RecipeFilter>, arg2: Internal.Map<any, any>): void;
    }
    type RecipeFilterParseEvent_ = RecipeFilterParseEvent;
    abstract class RootPlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.BlockStateProvider_, arg2: Internal.Optional_<any>)
        getTrunkOrigin(arg0: BlockPos_, arg1: Internal.RandomSource_): BlockPos;
        abstract placeRoots(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        static readonly CODEC: Internal.Codec<Internal.RootPlacer>;
    }
    type RootPlacer_ = RootPlacer;
    interface CustomArmPoseItem {
        abstract getArmPose(arg0: Internal.ItemStack_, arg1: Internal.AbstractClientPlayer_, arg2: Internal.InteractionHand_): Internal.HumanoidModel$ArmPose;
        (arg0: Internal.ItemStack, arg1: Internal.AbstractClientPlayer, arg2: Internal.InteractionHand): Internal.HumanoidModel$ArmPose_;
    }
    type CustomArmPoseItem_ = CustomArmPoseItem;
    class ScheduleRuntime {
        constructor(arg0: Internal.Train_)
        write(): Internal.CompoundTag;
        tick(arg0: Internal.Level_): void;
        transitInterrupted(): void;
        tickConditions(arg0: Internal.Level_): void;
        getSchedule(): com.simibubi.create.content.trains.schedule.Schedule;
        destinationReached(): void;
        setSchedule(arg0: com.simibubi.create.content.trains.schedule.Schedule_, arg1: boolean): void;
        startCurrentInstruction(): Internal.DiscoveredPath;
        getWaitingStatus(arg0: Internal.Level_): Internal.MutableComponent;
        read(arg0: Internal.CompoundTag_): void;
        setSchedulePresentClientside(arg0: boolean): void;
        returnSchedule(): Internal.ItemStack;
        discardSchedule(): void;
        submitPredictions(): Internal.Collection<Internal.GlobalTrainDisplayData$TrainDeparturePrediction>;
        get schedule(): com.simibubi.create.content.trains.schedule.Schedule
        set schedulePresentClientside(arg0: boolean)
        completed: boolean;
        currentEntry: number;
        paused: boolean;
        displayLinkUpdateRequested: boolean;
        isAutoSchedule: boolean;
        state: Internal.ScheduleRuntime$State;
    }
    type ScheduleRuntime_ = ScheduleRuntime;
    class WitherSkeleton extends Internal.AbstractSkeleton {
        constructor(arg0: Internal.EntityType_<Internal.WitherSkeleton>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setDefaultMovementSpeed(speed: number): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        serializeNBT(): Internal.CompoundTag;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDistanceSq(pos: BlockPos_): number;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type WitherSkeleton_ = WitherSkeleton;
    class ToggleLatchBlock extends Internal.AbstractDiodeBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static POWERING: Internal.BooleanProperty;
    }
    type ToggleLatchBlock_ = ToggleLatchBlock;
    abstract class HandheldItemBuilder extends Internal.ItemBuilder {
        constructor(i: ResourceLocation_, d: number, s: number)
        /**
         * Sets the attack speed of the tool.
        */
        speed(f: number): this;
        /**
         * Sets the base attack damage of the tool. Different tools have different baselines.
         * 
         * For example, a sword has a baseline of 3, while an axe has a baseline of 6.
         * 
         * The actual damage is the sum of the baseline and the attackDamageBonus from tier.
        */
        attackDamageBaseline(f: number): this;
        /**
         * Sets the base attack speed of the tool. Different tools have different baselines.
         * 
         * For example, a sword has a baseline of -2.4, while an axe has a baseline of -3.1.
         * 
         * The actual speed is the sum of the baseline and the speed from tier + 4 (bare hand).
        */
        speedBaseline(f: number): this;
        /**
         * Modifies the tool tier.
        */
        modifyTier(callback: Internal.Consumer_<Internal.MutableToolTier>): this;
        /**
         * Sets the attack damage bonus of the tool.
        */
        attackDamageBonus(f: number): this;
        tier(t: Internal.Tier_): this;
    }
    type HandheldItemBuilder_ = HandheldItemBuilder;
    class Explosion$BlockInteraction extends Internal.Enum<Internal.Explosion$BlockInteraction> {
        static valueOf(arg0: string): Internal.Explosion$BlockInteraction;
        static values(): Internal.Explosion$BlockInteraction[];
        static readonly KEEP: Internal.Explosion$BlockInteraction;
        static readonly DESTROY: Internal.Explosion$BlockInteraction;
        static readonly DESTROY_WITH_DECAY: Internal.Explosion$BlockInteraction;
    }
    type Explosion$BlockInteraction_ = "keep" | "destroy_with_decay" | Explosion$BlockInteraction | "destroy";
    interface Long2CharFunction extends it.unimi.dsi.fastutil.Function<number, string>, Internal.LongToIntFunction {
        abstract get(arg0: number): string;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2CharFunction;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Long2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Long2ByteFunction;
        defaultReturnValue(): string;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        getOrDefault(arg0: number, arg1: string): string;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Long2ShortFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2CharFunction;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Long2LongFunction;
        defaultReturnValue(arg0: string): void;
        remove(arg0: number): string;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        applyAsInt(arg0: number): number;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2CharFunction;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2CharFunction;
        composeLong(arg0: Internal.Long2LongFunction_): this;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Long2ObjectFunction<T>;
        containsKey(arg0: number): boolean;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Long2DoubleFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2CharFunction<T>;
        apply(arg0: number): string;
        size(): number;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Long2IntFunction;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2CharFunction<T>;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2CharFunction;
        clear(): void;
        put(arg0: number, arg1: string): string;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Long2FloatFunction;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2CharFunction;
        identity<T>(): Internal.Function<T, T>;
        (arg0: number): string;
    }
    type Long2CharFunction_ = Long2CharFunction;
    interface GenericForgeEventConsumer extends Internal.Consumer<Internal.GenericEvent<any>> {
        abstract accept(arg0: Internal.GenericEvent_<any>): void;
        andThen(arg0: Internal.Consumer_<Internal.GenericEvent<any>>): Internal.Consumer<Internal.GenericEvent<any>>;
        (arg0: Internal.GenericEvent<any>): void;
    }
    type GenericForgeEventConsumer_ = GenericForgeEventConsumer;
    abstract class UnmodifiableListIterator <E> extends Internal.UnmodifiableIterator<E> implements Internal.ListIterator<E> {
        abstract nextIndex(): number;
        abstract hasPrevious(): boolean;
        forEachRemaining(arg0: Internal.Consumer_<E>): void;
        abstract next(): E;
        abstract previous(): E;
        /**
         * @deprecated
        */
        add(arg0: E): void;
        /**
         * @deprecated
        */
        set(arg0: E): void;
        abstract previousIndex(): number;
    }
    type UnmodifiableListIterator_<E> = UnmodifiableListIterator<E>;
    class BlastFurnaceMenu extends Internal.AbstractFurnaceMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Container_, arg3: any_)
        constructor(arg0: number, arg1: Internal.Inventory_)
    }
    type BlastFurnaceMenu_ = BlastFurnaceMenu;
    class BrushableBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        setLootTable(arg0: ResourceLocation_, arg1: number): void;
        brush(arg0: number, arg1: Internal.Player_, arg2: Internal.Direction_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        checkReset(): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getItem(): Internal.ItemStack;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        unpackLootTable(arg0: Internal.Player_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getUpdatePacket(): Internal.Packet<any>;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getHitDirection(): Internal.Direction;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        get item(): Internal.ItemStack
        get updatePacket(): Internal.Packet<any>
        get modelData(): Internal.ModelData
        get hitDirection(): Internal.Direction
        get renderBoundingBox(): Internal.AABB
    }
    type BrushableBlockEntity_ = BrushableBlockEntity;
    class RootedDirtBlock extends Internal.Block implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type RootedDirtBlock_ = RootedDirtBlock;
    interface SuggestionProvider <S> {
        abstract getSuggestions(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        (arg0: Internal.CommandContext<S>, arg1: Internal.SuggestionsBuilder): Internal.CompletableFuture_<Internal.Suggestions>;
    }
    type SuggestionProvider_<S> = SuggestionProvider<S>;
    interface IEventBusInvokeDispatcher {
        abstract invoke(arg0: Internal.IEventListener_, arg1: Internal.Event_): void;
        (arg0: Internal.IEventListener, arg1: Internal.Event): void;
    }
    type IEventBusInvokeDispatcher_ = IEventBusInvokeDispatcher;
    class PropelplantBlock extends Internal.BushBlock implements Internal.IPlantable, Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly EXPLOSION_LEVEL: 1.0;
        static readonly PEARL: Internal.BooleanProperty;
    }
    type PropelplantBlock_ = PropelplantBlock;
    class GameRenderer implements Internal.GameRendererAccessor, Internal.AutoCloseable {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.ItemInHandRenderer_, arg2: Internal.ResourceManager_, arg3: Internal.RenderBuffers_)
        static getRendertypeEntityCutoutShader(): Internal.ShaderInstance;
        static getRendertypeTextBackgroundSeeThroughShader(): Internal.ShaderInstance;
        renderZoomed(arg0: number, arg1: number, arg2: number): void;
        static getRendertypeTextBackgroundShader(): Internal.ShaderInstance;
        static getRendertypeGuiTextHighlightShader(): Internal.ShaderInstance;
        getMinecraft(): Internal.Minecraft;
        static getRendertypeTextIntensityShader(): Internal.ShaderInstance;
        shutdownEffect(): void;
        cycleEffect(): void;
        static getRendertypeEndPortalShader(): Internal.ShaderInstance;
        static getRendertypeTripwireShader(): Internal.ShaderInstance;
        resetData(): void;
        static getRendertypeEntityShadowShader(): Internal.ShaderInstance;
        loadEffect(arg0: ResourceLocation_): void;
        static getRendertypeCutoutShader(): Internal.ShaderInstance;
        static getRendertypeEyesShader(): Internal.ShaderInstance;
        static getPositionColorShader(): Internal.ShaderInstance;
        currentEffect(): Internal.PostChain;
        static getRendertypeTextSeeThroughShader(): Internal.ShaderInstance;
        static getPositionTexColorNormalShader(): Internal.ShaderInstance;
        create$callGetFov(arg0: Internal.Camera_, arg1: number, arg2: boolean): number;
        static getRendertypeBeaconBeamShader(): Internal.ShaderInstance;
        static getRendertypeTextIntensitySeeThroughShader(): Internal.ShaderInstance;
        static getRendertypeLightningShader(): Internal.ShaderInstance;
        checkEntityPostEffect(arg0: Internal.Entity_): void;
        static getRendertypeItemEntityTranslucentCullShader(): Internal.ShaderInstance;
        preloadUiShader(arg0: Internal.ResourceProvider_): void;
        static getRendertypeEntitySmoothCutoutShader(): Internal.ShaderInstance;
        overlayTexture(): Internal.OverlayTexture;
        static getRendertypeGuiOverlayShader(): Internal.ShaderInstance;
        isPanoramicMode(): boolean;
        setRenderBlockOutline(arg0: boolean): void;
        static getRendertypeLeashShader(): Internal.ShaderInstance;
        static getRendertypeEntityTranslucentCullShader(): Internal.ShaderInstance;
        static getPositionColorTexLightmapShader(): Internal.ShaderInstance;
        lightTexture(): Internal.LightTexture;
        togglePostEffect(): void;
        static getRendertypeArmorCutoutNoCullShader(): Internal.ShaderInstance;
        tick(): void;
        static getRendertypeGuiGhostRecipeOverlayShader(): Internal.ShaderInstance;
        static getRendertypeArmorEntityGlintShader(): Internal.ShaderInstance;
        static getRendertypeGuiShader(): Internal.ShaderInstance;
        setPanoramicMode(arg0: boolean): void;
        static getRendertypeTranslucentShader(): Internal.ShaderInstance;
        static getRendertypeEntityCutoutNoCullShader(): Internal.ShaderInstance;
        static getRendertypeEntityTranslucentShader(): Internal.ShaderInstance;
        displayItemActivation(arg0: Internal.ItemStack_): void;
        static getRendertypeEntityDecalShader(): Internal.ShaderInstance;
        resize(arg0: number, arg1: number): void;
        static getRendertypeTextShader(): Internal.ShaderInstance;
        render(arg0: number, arg1: number, arg2: boolean): void;
        getRenderDistance(): number;
        static getParticleShader(): Internal.ShaderInstance;
        getProjectionMatrix(arg0: number): Matrix4f;
        static getRendertypeSolidShader(): Internal.ShaderInstance;
        static getRendertypeEntityNoOutlineShader(): Internal.ShaderInstance;
        static getPositionTexShader(): Internal.ShaderInstance;
        static getRendertypeWaterMaskShader(): Internal.ShaderInstance;
        static getRendertypeOutlineShader(): Internal.ShaderInstance;
        static getNightVisionScale(arg0: Internal.LivingEntity_, arg1: number): number;
        static getPositionTexColorShader(): Internal.ShaderInstance;
        static getRendertypeGlintTranslucentShader(): Internal.ShaderInstance;
        renderLevel(arg0: number, arg1: number, arg2: Internal.PoseStack_): void;
        getDepthFar(): number;
        getDarkenWorldAmount(arg0: number): number;
        static getRendertypeLinesShader(): Internal.ShaderInstance;
        static getRendertypeEntityCutoutNoCullZOffsetShader(): Internal.ShaderInstance;
        static getRendertypeEntityGlintShader(): Internal.ShaderInstance;
        pick(arg0: number): void;
        static getRendertypeCutoutMippedShader(): Internal.ShaderInstance;
        static getPositionColorLightmapShader(): Internal.ShaderInstance;
        static getRendertypeArmorGlintShader(): Internal.ShaderInstance;
        createReloadListener(): Internal.PreparableReloadListener;
        static getRendertypeCrumblingShader(): Internal.ShaderInstance;
        static getRendertypeEntityTranslucentEmissiveShader(): Internal.ShaderInstance;
        static getRendertypeEndGatewayShader(): Internal.ShaderInstance;
        static getPositionColorTexShader(): Internal.ShaderInstance;
        static getRendertypeEntityAlphaShader(): Internal.ShaderInstance;
        static getRendertypeGlintDirectShader(): Internal.ShaderInstance;
        getShader(arg0: string): Internal.ShaderInstance;
        static getRendertypeEntitySolidShader(): Internal.ShaderInstance;
        getMainCamera(): Internal.Camera;
        static getRendertypeTranslucentNoCrumblingShader(): Internal.ShaderInstance;
        static getRendertypeEntityGlintDirectShader(): Internal.ShaderInstance;
        getMapRenderer(): Internal.MapRenderer;
        static getPositionTexLightmapColorShader(): Internal.ShaderInstance;
        static getRendertypeEnergySwirlShader(): Internal.ShaderInstance;
        close(): void;
        static getPositionShader(): Internal.ShaderInstance;
        static getRendertypeGlintShader(): Internal.ShaderInstance;
        static getRendertypeTranslucentMovingBlockShader(): Internal.ShaderInstance;
        setRenderHand(arg0: boolean): void;
        resetProjectionMatrix(arg0: Matrix4f_): void;
        get rendertypeEntityCutoutShader(): Internal.ShaderInstance
        get rendertypeTextBackgroundSeeThroughShader(): Internal.ShaderInstance
        get rendertypeTextBackgroundShader(): Internal.ShaderInstance
        get rendertypeGuiTextHighlightShader(): Internal.ShaderInstance
        get minecraft(): Internal.Minecraft
        get rendertypeTextIntensityShader(): Internal.ShaderInstance
        get rendertypeEndPortalShader(): Internal.ShaderInstance
        get rendertypeTripwireShader(): Internal.ShaderInstance
        get rendertypeEntityShadowShader(): Internal.ShaderInstance
        get rendertypeCutoutShader(): Internal.ShaderInstance
        get rendertypeEyesShader(): Internal.ShaderInstance
        get positionColorShader(): Internal.ShaderInstance
        get rendertypeTextSeeThroughShader(): Internal.ShaderInstance
        get positionTexColorNormalShader(): Internal.ShaderInstance
        get rendertypeBeaconBeamShader(): Internal.ShaderInstance
        get rendertypeTextIntensitySeeThroughShader(): Internal.ShaderInstance
        get rendertypeLightningShader(): Internal.ShaderInstance
        get rendertypeItemEntityTranslucentCullShader(): Internal.ShaderInstance
        get rendertypeEntitySmoothCutoutShader(): Internal.ShaderInstance
        get rendertypeGuiOverlayShader(): Internal.ShaderInstance
        get panoramicMode(): boolean
        set renderBlockOutline(arg0: boolean)
        get rendertypeLeashShader(): Internal.ShaderInstance
        get rendertypeEntityTranslucentCullShader(): Internal.ShaderInstance
        get positionColorTexLightmapShader(): Internal.ShaderInstance
        get rendertypeArmorCutoutNoCullShader(): Internal.ShaderInstance
        get rendertypeGuiGhostRecipeOverlayShader(): Internal.ShaderInstance
        get rendertypeArmorEntityGlintShader(): Internal.ShaderInstance
        get rendertypeGuiShader(): Internal.ShaderInstance
        set panoramicMode(arg0: boolean)
        get rendertypeTranslucentShader(): Internal.ShaderInstance
        get rendertypeEntityCutoutNoCullShader(): Internal.ShaderInstance
        get rendertypeEntityTranslucentShader(): Internal.ShaderInstance
        get rendertypeEntityDecalShader(): Internal.ShaderInstance
        get rendertypeTextShader(): Internal.ShaderInstance
        get renderDistance(): number
        get particleShader(): Internal.ShaderInstance
        get rendertypeSolidShader(): Internal.ShaderInstance
        get rendertypeEntityNoOutlineShader(): Internal.ShaderInstance
        get positionTexShader(): Internal.ShaderInstance
        get rendertypeWaterMaskShader(): Internal.ShaderInstance
        get rendertypeOutlineShader(): Internal.ShaderInstance
        get positionTexColorShader(): Internal.ShaderInstance
        get rendertypeGlintTranslucentShader(): Internal.ShaderInstance
        get depthFar(): number
        get rendertypeLinesShader(): Internal.ShaderInstance
        get rendertypeEntityCutoutNoCullZOffsetShader(): Internal.ShaderInstance
        get rendertypeEntityGlintShader(): Internal.ShaderInstance
        get rendertypeCutoutMippedShader(): Internal.ShaderInstance
        get positionColorLightmapShader(): Internal.ShaderInstance
        get rendertypeArmorGlintShader(): Internal.ShaderInstance
        get rendertypeCrumblingShader(): Internal.ShaderInstance
        get rendertypeEntityTranslucentEmissiveShader(): Internal.ShaderInstance
        get rendertypeEndGatewayShader(): Internal.ShaderInstance
        get positionColorTexShader(): Internal.ShaderInstance
        get rendertypeEntityAlphaShader(): Internal.ShaderInstance
        get rendertypeGlintDirectShader(): Internal.ShaderInstance
        get rendertypeEntitySolidShader(): Internal.ShaderInstance
        get mainCamera(): Internal.Camera
        get rendertypeTranslucentNoCrumblingShader(): Internal.ShaderInstance
        get rendertypeEntityGlintDirectShader(): Internal.ShaderInstance
        get mapRenderer(): Internal.MapRenderer
        get positionTexLightmapColorShader(): Internal.ShaderInstance
        get rendertypeEnergySwirlShader(): Internal.ShaderInstance
        get positionShader(): Internal.ShaderInstance
        get rendertypeGlintShader(): Internal.ShaderInstance
        get rendertypeTranslucentMovingBlockShader(): Internal.ShaderInstance
        set renderHand(arg0: boolean)
        static readonly PROJECTION_Z_NEAR: 0.05;
        postEffect: Internal.PostChain;
        static readonly EFFECT_NONE: 24;
        static readonly ITEM_ACTIVATION_ANIMATION_LENGTH: 40;
        blitShader: Internal.ShaderInstance;
        readonly itemInHandRenderer: Internal.ItemInHandRenderer;
    }
    type GameRenderer_ = GameRenderer;
    class NoiseBasedCountPlacement extends Internal.RepeatingPlacement {
        static of(arg0: number, arg1: number, arg2: number): Internal.NoiseBasedCountPlacement;
        static readonly CODEC: Internal.Codec<Internal.NoiseBasedCountPlacement>;
    }
    type NoiseBasedCountPlacement_ = NoiseBasedCountPlacement;
    class AlterGroundDecorator extends Internal.TreeDecorator {
        constructor(arg0: Internal.BlockStateProvider_)
        static readonly CODEC: Internal.Codec<Internal.AlterGroundDecorator>;
    }
    type AlterGroundDecorator_ = AlterGroundDecorator;
    abstract class RegisterColorHandlersEvent extends Internal.Event implements Internal.IModBusEvent {
    }
    type RegisterColorHandlersEvent_ = RegisterColorHandlersEvent;
    class ValueSettingsFormatter {
        constructor(arg0: Internal.Function_<Internal.ValueSettingsBehaviour$ValueSettings, Internal.MutableComponent>)
        format(arg0: Internal.ValueSettingsBehaviour$ValueSettings_): Internal.MutableComponent;
    }
    type ValueSettingsFormatter_ = ValueSettingsFormatter;
    abstract class DisplayTarget extends Internal.DisplayBehaviour {
        constructor()
        isReserved(arg0: number, arg1: Internal.BlockEntity_, arg2: Internal.DisplayLinkContext_): boolean;
        getLineOptionText(arg0: number): Internal.Component;
        abstract acceptText(arg0: number, arg1: Internal.List_<Internal.MutableComponent>, arg2: Internal.DisplayLinkContext_): void;
        abstract provideStats(arg0: Internal.DisplayLinkContext_): Internal.DisplayTargetStats;
        static reserve(arg0: number, arg1: Internal.BlockEntity_, arg2: Internal.DisplayLinkContext_): void;
        getMultiblockBounds(arg0: Internal.LevelAccessor_, arg1: BlockPos_): Internal.AABB;
    }
    type DisplayTarget_ = DisplayTarget;
    class ModelGenerator$Element {
        constructor()
        box(b: Internal.AABB_): this;
        face(direction: Internal.Direction_, consumer: Internal.Consumer_<Internal.ModelGenerator$Face>): void;
        toJson(): Internal.JsonObject;
    }
    type ModelGenerator$Element_ = ModelGenerator$Element;
    class Field extends Internal.AccessibleObject implements Internal.Member {
        getModifiers(): number;
        set(arg0: any, arg1: any): void;
        setShort(arg0: any, arg1: number): void;
        getType(): typeof any;
        getChar(arg0: any): string;
        getInt(arg0: any): number;
        getName(): string;
        getLong(arg0: any): number;
        setDouble(arg0: any, arg1: number): void;
        getAnnotatedType(): Internal.AnnotatedType;
        getGenericType(): Internal.Type;
        getShort(arg0: any): number;
        isEnumConstant(): boolean;
        getAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        setInt(arg0: any, arg1: number): void;
        getFloat(arg0: any): number;
        getBoolean(arg0: any): boolean;
        isSynthetic(): boolean;
        getAnnotation<T extends Internal.Annotation>(arg0: T): T;
        setByte(arg0: any, arg1: number): void;
        setBoolean(arg0: any, arg1: boolean): void;
        setFloat(arg0: any, arg1: number): void;
        getDeclaringClass(): typeof any;
        getByte(arg0: any): number;
        toGenericString(): string;
        setChar(arg0: any, arg1: string): void;
        getDouble(arg0: any): number;
        get(arg0: any): any;
        setLong(arg0: any, arg1: number): void;
        get modifiers(): number
        get type(): typeof any
        get name(): string
        get annotatedType(): Internal.AnnotatedType
        get genericType(): Internal.Type
        get enumConstant(): boolean
        get synthetic(): boolean
        get declaringClass(): typeof any
    }
    type Field_ = Field;
    interface ReferenceCounted {
        abstract touch(arg0: any): this;
        abstract retain(): this;
        abstract release(arg0: number): boolean;
        abstract touch(): this;
        abstract refCnt(): number;
        abstract release(): boolean;
        abstract retain(arg0: number): this;
    }
    type ReferenceCounted_ = ReferenceCounted;
    class ItemRenderer implements Internal.ResourceManagerReloadListener {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.TextureManager_, arg2: Internal.ModelManager_, arg3: Internal.ItemColors_, arg4: Internal.BlockEntityWithoutLevelRenderer_)
        static getArmorFoilBuffer(arg0: Internal.MultiBufferSource_, arg1: Internal.RenderType_, arg2: boolean, arg3: boolean): Internal.VertexConsumer;
        renderModelLists(arg0: Internal.BakedModel_, arg1: Internal.ItemStack_, arg2: number, arg3: number, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_): void;
        static getFoilBuffer(arg0: Internal.MultiBufferSource_, arg1: Internal.RenderType_, arg2: boolean, arg3: boolean): Internal.VertexConsumer;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        renderStatic(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: Internal.ItemDisplayContext_, arg3: boolean, arg4: Internal.PoseStack_, arg5: Internal.MultiBufferSource_, arg6: Internal.Level_, arg7: number, arg8: number, arg9: number): void;
        getBlockEntityRenderer(): Internal.BlockEntityWithoutLevelRenderer;
        static getFoilBufferDirect(arg0: Internal.MultiBufferSource_, arg1: Internal.RenderType_, arg2: boolean, arg3: boolean): Internal.VertexConsumer;
        renderStatic(arg0: Internal.ItemStack_, arg1: Internal.ItemDisplayContext_, arg2: number, arg3: number, arg4: Internal.PoseStack_, arg5: Internal.MultiBufferSource_, arg6: Internal.Level_, arg7: number): void;
        getModel(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): Internal.BakedModel;
        renderQuadList(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: Internal.List_<Internal.BakedQuad>, arg3: Internal.ItemStack_, arg4: number, arg5: number): void;
        getName(): string;
        static getCompassFoilBufferDirect(arg0: Internal.MultiBufferSource_, arg1: Internal.RenderType_, arg2: Internal.PoseStack$Pose_): Internal.VertexConsumer;
        render(arg0: Internal.ItemStack_, arg1: Internal.ItemDisplayContext_, arg2: boolean, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number, arg6: number, arg7: Internal.BakedModel_): void;
        static getCompassFoilBuffer(arg0: Internal.MultiBufferSource_, arg1: Internal.RenderType_, arg2: Internal.PoseStack$Pose_): Internal.VertexConsumer;
        getItemModelShaper(): Internal.ItemModelShaper;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get blockEntityRenderer(): Internal.BlockEntityWithoutLevelRenderer
        get name(): string
        get itemModelShaper(): Internal.ItemModelShaper
        static readonly COMPASS_FOIL_UI_SCALE: 0.5;
        static readonly COMPASS_FOIL_TEXTURE_SCALE: 0.0078125;
        static readonly ENCHANTED_GLINT_ENTITY: ResourceLocation;
        readonly textureManager: Internal.TextureManager;
        static readonly COMPASS_FOIL_FIRST_PERSON_SCALE: 0.75;
        static readonly ENCHANTED_GLINT_ITEM: ResourceLocation;
        static readonly ITEM_COUNT_BLIT_OFFSET: 200;
        static readonly TRIDENT_IN_HAND_MODEL: Internal.ModelResourceLocation;
        static readonly GUI_SLOT_CENTER_Y: 8;
        static readonly SPYGLASS_IN_HAND_MODEL: Internal.ModelResourceLocation;
        static readonly GUI_SLOT_CENTER_X: 8;
    }
    type ItemRenderer_ = ItemRenderer;
    class MissingMappingsEvent$Mapping <T> implements Internal.Comparable<Internal.MissingMappingsEvent$Mapping<T>> {
        constructor(arg0: Internal.IForgeRegistry_<T>, arg1: Internal.IForgeRegistry_<T>, arg2: ResourceLocation_, arg3: number)
        fail(): void;
        warn(): void;
        getRegistry(): Internal.IForgeRegistry<T>;
        ignore(): void;
        getKey(): ResourceLocation;
        compareTo(arg0: any): number;
        compareTo(arg0: Internal.MissingMappingsEvent$Mapping_<T>): number;
        getId(): number;
        remap(arg0: T): void;
        get registry(): Internal.IForgeRegistry<T>
        get key(): ResourceLocation
        get id(): number
    }
    type MissingMappingsEvent$Mapping_<T> = MissingMappingsEvent$Mapping<T>;
    class StructureTemplate$Palette {
        blocks(): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        blocks(arg0: Internal.Block_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
    }
    type StructureTemplate$Palette_ = StructureTemplate$Palette;
    interface Long2ReferenceFunction <V> extends it.unimi.dsi.fastutil.Function<number, V>, Internal.LongFunction<V> {
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Long2ShortFunction;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2ReferenceFunction<V>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2ReferenceFunction<T, V>;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Long2ByteFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Long2LongFunction;
        remove(arg0: number): V;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Long2DoubleFunction;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Long2CharFunction;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Long2ObjectFunction<T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2ReferenceFunction<V>;
        put(arg0: number, arg1: V): V;
        apply(arg0: number): V;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2ReferenceFunction<V>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2ReferenceFunction<V>;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2ReferenceFunction<T, V>;
        apply(arg0: number): V;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2ReferenceFunction<V>;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Long2ReferenceFunction<T>;
        containsKey(arg0: number): boolean;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Long2IntFunction;
        composeLong(arg0: Internal.Long2LongFunction_): this;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Long2FloatFunction;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2ReferenceFunction<V>;
        abstract get(arg0: number): V;
        size(): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        clear(): void;
        defaultReturnValue(): V;
        getOrDefault(arg0: number, arg1: V): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        (arg0: number): V;
    }
    type Long2ReferenceFunction_<V> = Long2ReferenceFunction<V>;
    interface IntList extends Internal.List<number>, Internal.Comparable<Internal.List<number>>, Internal.IntCollection {
        abstract addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        /**
         * @deprecated
        */
        get(arg0: number): number;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        abstract contains(arg0: number): boolean;
        /**
         * @deprecated
        */
        add(arg0: number, arg1: any): void;
        of<E>(arg0: E): Internal.List<E>;
        unstableSort(arg0: Internal.IntComparator_): void;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        of(): this;
        abstract addAll(arg0: number, arg1: Internal.Collection_<number>): boolean;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        intParallelStream(): Internal.IntStream;
        abstract removeAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        set(arg0: number, arg1: number): number;
        intIterator(): Internal.IntIterator;
        listIterator(): Internal.ListIterator<any>;
        abstract size(arg0: number): void;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        of(arg0: number, arg1: number): this;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        abstract addAll(arg0: Internal.IntCollection_): boolean;
        abstract retainAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        indexOf(arg0: any): number;
        abstract indexOf(arg0: number): number;
        abstract getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        of(arg0: number, arg1: number, arg2: number): this;
        abstract addElements(arg0: number, arg1: number[]): void;
        abstract add(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        abstract containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        of(arg0: number): this;
        /**
         * @deprecated
        */
        replaceAll(arg0: Internal.UnaryOperator_<number>): void;
        abstract lastIndexOf(arg0: number): number;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        /**
         * @deprecated
        */
        unstableSort(arg0: Internal.Comparator_<number>): void;
        abstract addAll(arg0: number, arg1: Internal.IntCollection_): boolean;
        of<E>(arg0: E, arg1: E): Internal.List<E>;
        spliterator(): Internal.Spliterator<any>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        sort(arg0: Internal.Comparator_<number>): void;
        abstract compareTo(arg0: Internal.List_<number>): number;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        abstract set(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        set(arg0: number, arg1: any): any;
        /**
         * @deprecated
        */
        lastIndexOf(arg0: any): number;
        addAll(arg0: Internal.IntList_): boolean;
        abstract removeElements(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        remove(arg0: number): any;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        abstract isEmpty(): boolean;
        sort(arg0: Internal.IntComparator_): void;
        abstract toIntArray(): number[];
        forEach(arg0: Internal.IntConsumer_): void;
        of<E>(...arg0: E[]): Internal.List<E>;
        addAll(arg0: number, arg1: Internal.IntList_): boolean;
        listIterator(arg0: number): Internal.ListIterator<any>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        setElements(arg0: number, arg1: number[]): void;
        abstract toArray(arg0: number[]): number[];
        /**
         * @deprecated
        */
        add(arg0: number, arg1: number): void;
        abstract getInt(arg0: number): number;
        abstract removeInt(arg0: number): number;
        abstract add(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        iterator(): Internal.IntIterator;
        setElements(arg0: number[]): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        replaceAll(arg0: Internal.IntUnaryOperator_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        replaceAll(arg0: it.unimi.dsi.fastutil.ints.IntUnaryOperator_): void;
        of(...arg0: number[]): this;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        abstract toArray(): any[];
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        intSpliterator(): Internal.IntSpliterator;
        subList(arg0: number, arg1: number): Internal.List<any>;
        abstract hashCode(): number;
        abstract size(): number;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        abstract clear(): void;
        abstract rem(arg0: number): boolean;
        abstract equals(arg0: any): boolean;
        get empty(): boolean
        set elements(arg0: number[])
    }
    type IntList_ = IntList;
    interface Palette$Factory {
        abstract create<A>(arg0: number, arg1: Internal.IdMap_<A>, arg2: Internal.PaletteResize_<A>, arg3: Internal.List_<A>): Internal.Palette<A>;
        (arg0: number, arg1: Internal.IdMap<A>, arg2: Internal.PaletteResize<A>, arg3: Internal.List<A>): Internal.Palette_<A>;
    }
    type Palette$Factory_ = Palette$Factory;
    class BasinInventory extends Internal.SmartInventory {
        constructor(arg0: number, arg1: Internal.BasinBlockEntity_)
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        static tryClear(arg0: any): void;
        countItem(arg0: Internal.Item_): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        extractItem(i: number, i1: number, b: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        kjs$self(): Internal.IItemHandler;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(i: number): Internal.ItemStack;
        getHeight(): number;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        getWidth(): number;
        getSlotLimit(i: number): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(i: number, itemStack: Internal.ItemStack_, b: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(i: number, itemStack: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get height(): number
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type BasinInventory_ = BasinInventory;
    abstract class SignBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getSignHitboxCenterPosition(arg0: Internal.BlockState_): Vec3d;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        static getWoodType(arg0: Internal.Block_): Internal.WoodType;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        abstract getYRotationDegrees(arg0: Internal.BlockState_): number;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        openTextEdit(arg0: Internal.Player_, arg1: Internal.SignBlockEntity_, arg2: boolean): void;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        type(): Internal.WoodType;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type SignBlock_ = SignBlock;
    class HangingEntityItem extends Internal.Item {
        constructor(arg0: Internal.EntityType_<Internal.HangingEntity>, arg1: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setArmorToughness(armorToughness: number): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getTooltipImage(stack: Internal.ItemStack_): Internal.Optional<any>;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type HangingEntityItem_ = HangingEntityItem;
    interface BlockTintFunction {
        of(cx: Internal.Context_, o: any): this;
        abstract getColor(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: number): Internal.Color;
        (arg0: Internal.BlockState, arg1: Internal.BlockAndTintGetter, arg2: BlockPos, arg3: number): Internal.Color_;
        readonly BIRCH_FOLIAGE: Internal.BlockTintFunction$Fixed;
        readonly EVERGREEN_FOLIAGE: Internal.BlockTintFunction$Fixed;
        readonly WATER: Internal.BlockTintFunction;
        readonly REDSTONE: Internal.BlockTintFunction;
        readonly FOLIAGE: Internal.BlockTintFunction;
        readonly GRASS: Internal.BlockTintFunction;
        readonly DEFAULT_FOLIAGE_COLOR: Internal.SimpleColor;
        readonly MANGROVE_FOLIAGE: Internal.BlockTintFunction$Fixed;
        readonly REDSTONE_COLORS: Internal.Color[];
    }
    type BlockTintFunction_ = BlockTintFunction;
    class DoubleArgumentInfo implements Internal.ArgumentTypeInfo<Internal.DoubleArgumentType, Internal.DoubleArgumentInfo$Template> {
        constructor()
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.DoubleArgumentType_): Internal.DoubleArgumentInfo$Template;
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        serializeToJson(arg0: Internal.DoubleArgumentInfo$Template_, arg1: Internal.JsonObject_): void;
        serializeToNetwork(arg0: Internal.DoubleArgumentInfo$Template_, arg1: Internal.FriendlyByteBuf_): void;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
    }
    type DoubleArgumentInfo_ = DoubleArgumentInfo;
    class BagItem extends Internal.Item {
        constructor(arg0: Internal.Rarity_)
        constructor(arg0: Internal.HatEntry$HatSeason_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        static getUnwrapFinishSound(): Internal.SoundEvent;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setArmorToughness(armorToughness: number): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        get unwrapFinishSound(): Internal.SoundEvent
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type BagItem_ = BagItem;
    class PlayerAdvancements {
        constructor(arg0: Internal.DataFixer_, arg1: Internal.PlayerList_, arg2: Internal.ServerAdvancementManager_, arg3: Internal.Path_, arg4: Internal.ServerPlayer_)
        setPlayer(arg0: Internal.ServerPlayer_): void;
        revoke(arg0: Internal.Advancement_, arg1: string): boolean;
        getOrStartProgress(arg0: Internal.Advancement_): Internal.AdvancementProgress;
        setSelectedTab(arg0: Internal.Advancement_): void;
        award(arg0: Internal.Advancement_, arg1: string): boolean;
        stopListening(): void;
        flushDirty(arg0: Internal.ServerPlayer_): void;
        save(): void;
        reload(arg0: Internal.ServerAdvancementManager_): void;
        set player(arg0: Internal.ServerPlayer_)
        set selectedTab(arg0: Internal.Advancement_)
    }
    type PlayerAdvancements_ = PlayerAdvancements;
    class PressurePlateBlock extends Internal.BasePressurePlateBlock {
        constructor(arg0: any_, arg1: Internal.BlockBehaviour$Properties_, arg2: Internal.BlockSetType_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly POWERED: Internal.BooleanProperty;
    }
    type PressurePlateBlock_ = PressurePlateBlock;
    class ClientboundBossEventPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        static createAddPacket(arg0: Internal.BossEvent_): Internal.ClientboundBossEventPacket;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        dispatch(arg0: Internal.ClientboundBossEventPacket$Handler_): void;
        static createUpdatePropertiesPacket(arg0: Internal.BossEvent_): Internal.ClientboundBossEventPacket;
        static createUpdateProgressPacket(arg0: Internal.BossEvent_): Internal.ClientboundBossEventPacket;
        static createUpdateStylePacket(arg0: Internal.BossEvent_): Internal.ClientboundBossEventPacket;
        static createUpdateNamePacket(arg0: Internal.BossEvent_): Internal.ClientboundBossEventPacket;
        static createRemovePacket(arg0: Internal.UUID_): Internal.ClientboundBossEventPacket;
        isSkippable(): boolean;
        get skippable(): boolean
    }
    type ClientboundBossEventPacket_ = ClientboundBossEventPacket;
    interface Runnable {
        abstract run(): void;
        (): void;
    }
    type Runnable_ = Runnable;
    abstract class SimplePreparableReloadListener <T> implements Internal.PreparableReloadListener {
        constructor()
        getName(): string;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get name(): string
    }
    type SimplePreparableReloadListener_<T> = SimplePreparableReloadListener<T>;
    class IntArrayTag extends Internal.CollectionTag<Internal.IntTag> {
        constructor(arg0: Internal.List_<number>)
        constructor(arg0: number[])
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        add(arg0: number, arg1: Internal.IntTag_): void;
        set(arg0: number, arg1: Internal.Tag_): Internal.Tag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        forEach(arg0: Internal.Consumer_<Internal.IntTag>): void;
        spliterator(): Internal.Spliterator<Internal.IntTag>;
        removeIf(arg0: Internal.Predicate_<Internal.IntTag>): boolean;
        getAsIntArray(): number[];
        replaceAll(arg0: Internal.UnaryOperator_<Internal.IntTag>): void;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        sort(arg0: Internal.Comparator_<Internal.IntTag>): void;
        set(arg0: number, arg1: Internal.IntTag_): Internal.IntTag;
        stream(): Internal.Stream<Internal.IntTag>;
        getType(): Internal.TagType<Internal.IntArrayTag>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        abstract toArray<T>(arg0: T[]): T[];
        remove(arg0: number): Internal.Tag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        get(arg0: number): any;
        getAsString(): string;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        parallelStream(): Internal.Stream<Internal.IntTag>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        get asIntArray(): number[]
        get type(): Internal.TagType<Internal.IntArrayTag>
        get asString(): string
        static readonly TYPE: Internal.TagType<Internal.IntArrayTag>;
    }
    type IntArrayTag_ = IntArrayTag;
    class MagmaBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type MagmaBlock_ = MagmaBlock;
    class SpikeFeature$EndSpike {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean)
        isCenterWithinChunk(arg0: BlockPos_): boolean;
        getRadius(): number;
        getCenterX(): number;
        getTopBoundingBox(): Internal.AABB;
        getCenterZ(): number;
        getHeight(): number;
        isGuarded(): boolean;
        get radius(): number
        get centerX(): number
        get topBoundingBox(): Internal.AABB
        get centerZ(): number
        get height(): number
        get guarded(): boolean
        static readonly CODEC: Internal.Codec<Internal.SpikeFeature$EndSpike>;
    }
    type SpikeFeature$EndSpike_ = SpikeFeature$EndSpike;
    class ModifiableBiomeInfo$BiomeInfo extends Internal.Record {
        constructor(climateSettings: Internal.Biome$ClimateSettings_, effects: Internal.BiomeSpecialEffects_, generationSettings: Internal.BiomeGenerationSettings_, mobSpawnSettings: Internal.MobSpawnSettings_)
        mobSpawnSettings(): Internal.MobSpawnSettings;
        effects(): Internal.BiomeSpecialEffects;
        climateSettings(): Internal.Biome$ClimateSettings;
        generationSettings(): Internal.BiomeGenerationSettings;
    }
    type ModifiableBiomeInfo$BiomeInfo_ = ModifiableBiomeInfo$BiomeInfo;
    class BlueprintItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        static assignCompleteRecipe(arg0: Internal.Level_, arg1: Internal.ItemStackHandler_, arg2: Internal.Recipe_<any>): void;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setArmorToughness(armorToughness: number): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type BlueprintItem_ = BlueprintItem;
    class WallCanvasSignBlock extends Internal.WallSignBlock implements Internal.CanvasSign {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.DyeColor_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        isDarkBackground(): boolean;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBackgroundColor(): Internal.DyeColor;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get darkBackground(): boolean
        get mod(): string
        get backgroundColor(): Internal.DyeColor
    }
    type WallCanvasSignBlock_ = WallCanvasSignBlock;
    interface Object2FloatMap <K> extends Internal.Map<K, number>, Internal.Object2FloatFunction<K> {
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Object2CharFunction<K>;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        abstract values(): Internal.FloatCollection;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2FloatFunction;
        mergeFloat(arg0: K, arg1: number, arg2: Internal.FloatBinaryOperator_): number;
        removeFloat(arg0: any): number;
        abstract defaultReturnValue(arg0: number): void;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        getOrDefault(arg0: any, arg1: number): number;
        apply(arg0: K): number;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        mergeFloat(arg0: K, arg1: number, arg2: Internal.DoubleBinaryOperator_): number;
        keySet(): Internal.Set<any>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        computeIfAbsent(arg0: K, arg1: Internal.ToDoubleFunction_<K>): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: K, arg1: number): number;
        put(arg0: K, arg1: number): number;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2FloatFunction;
        abstract containsValue(arg0: number): boolean;
        abstract getFloat(arg0: any): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        computeIfAbsent(arg0: K, arg1: Internal.Object2FloatFunction_<K>): number;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2FloatFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2FloatFunction;
        remove(arg0: any, arg1: number): boolean;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2FloatFunction;
        abstract object2FloatEntrySet(): Internal.ObjectSet<Internal.Object2FloatMap$Entry<K>>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        computeFloat(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        abstract putAll(arg0: Internal.Map_<K, number>): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        forEach(arg0: Internal.BiConsumer_<K, number>): void;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        computeFloatIfAbsent(arg0: K, arg1: Internal.ToDoubleFunction_<K>): number;
        abstract isEmpty(): boolean;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Object2ShortFunction<K>;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Object2ByteFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2FloatFunction<T>;
        computeFloatIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<K, number>>;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        abstract containsKey(arg0: any): boolean;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2FloatFunction;
        compute(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        computeFloatIfAbsentPartial(arg0: K, arg1: Internal.Object2FloatFunction_<K>): number;
        applyAsDouble(arg0: K): number;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number): number;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2FloatFunction;
        abstract defaultReturnValue(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        /**
         * @deprecated
        */
        mergeFloat(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        replaceAll(arg0: Internal.BiFunction_<K, number, number>): void;
        abstract size(): number;
        abstract hashCode(): number;
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2FloatFunction;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Object2LongFunction<K>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        abstract equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        putIfAbsent(arg0: K, arg1: number): number;
        andThenFloat(arg0: Internal.Float2FloatFunction_): Internal.Object2FloatFunction<K>;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Object2IntFunction<K>;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, number>): number;
        get empty(): boolean
    }
    type Object2FloatMap_<K> = Object2FloatMap<K>;
    class Locale implements Internal.Cloneable, Internal.Serializable {
        constructor(arg0: string, arg1: string, arg2: string)
        constructor(arg0: string, arg1: string)
        constructor(arg0: string)
        clone(): any;
        getUnicodeLocaleKeys(): Internal.Set<string>;
        static filterTags(arg0: Internal.List_<Internal.Locale$LanguageRange>, arg1: Internal.Collection_<string>, arg2: Internal.Locale$FilteringMode_): Internal.List<string>;
        static getISOLanguages(): string[];
        getExtension(arg0: string): string;
        getUnicodeLocaleType(arg0: string): string;
        getISO3Language(): string;
        getDisplayCountry(): string;
        static getAvailableLocales(): Internal.Locale[];
        static setDefault(arg0: Internal.Locale$Category_, arg1: Internal.Locale_): void;
        getScript(): string;
        getISO3Country(): string;
        getExtensionKeys(): Internal.Set<string>;
        toLanguageTag(): string;
        getDisplayCountry(arg0: Internal.Locale_): string;
        getVariant(): string;
        getDisplayScript(arg0: Internal.Locale_): string;
        getDisplayName(): string;
        static setDefault(arg0: Internal.Locale_): void;
        static filterTags(arg0: Internal.List_<Internal.Locale$LanguageRange>, arg1: Internal.Collection_<string>): Internal.List<string>;
        getDisplayScript(): string;
        getDisplayLanguage(arg0: Internal.Locale_): string;
        static getDefault(arg0: Internal.Locale$Category_): Internal.Locale;
        getDisplayName(arg0: Internal.Locale_): string;
        static lookup(arg0: Internal.List_<Internal.Locale$LanguageRange>, arg1: Internal.Collection_<Internal.Locale>): Internal.Locale;
        getCountry(): string;
        static lookupTag(arg0: Internal.List_<Internal.Locale$LanguageRange>, arg1: Internal.Collection_<string>): string;
        getLanguage(): string;
        static forLanguageTag(arg0: string): Internal.Locale;
        static getISOCountries(): string[];
        getDisplayLanguage(): string;
        getUnicodeLocaleAttributes(): Internal.Set<string>;
        static getISOCountries(arg0: Internal.Locale$IsoCountryCode_): Internal.Set<string>;
        static getDefault(): Internal.Locale;
        hasExtensions(): boolean;
        static filter(arg0: Internal.List_<Internal.Locale$LanguageRange>, arg1: Internal.Collection_<Internal.Locale>): Internal.List<Internal.Locale>;
        static filter(arg0: Internal.List_<Internal.Locale$LanguageRange>, arg1: Internal.Collection_<Internal.Locale>, arg2: Internal.Locale$FilteringMode_): Internal.List<Internal.Locale>;
        stripExtensions(): this;
        getDisplayVariant(): string;
        getDisplayVariant(arg0: Internal.Locale_): string;
        get unicodeLocaleKeys(): Internal.Set<string>
        get ISOLanguages(): string[]
        get ISO3Language(): string
        get displayCountry(): string
        get availableLocales(): Internal.Locale[]
        get script(): string
        get ISO3Country(): string
        get extensionKeys(): Internal.Set<string>
        get variant(): string
        get displayName(): string
        set "default"(arg0: Internal.Locale_)
        get displayScript(): string
        get country(): string
        get language(): string
        get ISOCountries(): string[]
        get displayLanguage(): string
        get unicodeLocaleAttributes(): Internal.Set<string>
        get "default"(): Internal.Locale
        get displayVariant(): string
        static readonly UNICODE_LOCALE_EXTENSION: "u";
        static readonly JAPANESE: Internal.Locale;
        static readonly KOREAN: Internal.Locale;
        static readonly PRIVATE_USE_EXTENSION: "x";
        static readonly PRC: Internal.Locale;
        static readonly UK: Internal.Locale;
        static readonly ITALY: Internal.Locale;
        static readonly ROOT: Internal.Locale;
        static readonly CANADA: Internal.Locale;
        static readonly GERMANY: Internal.Locale;
        static readonly US: Internal.Locale;
        static readonly SIMPLIFIED_CHINESE: Internal.Locale;
        static readonly ITALIAN: Internal.Locale;
        static readonly CHINESE: Internal.Locale;
        static readonly ENGLISH: Internal.Locale;
        static readonly KOREA: Internal.Locale;
        static readonly GERMAN: Internal.Locale;
        static readonly JAPAN: Internal.Locale;
        static readonly FRANCE: Internal.Locale;
        static readonly CHINA: Internal.Locale;
        static readonly TRADITIONAL_CHINESE: Internal.Locale;
        static readonly CANADA_FRENCH: Internal.Locale;
        static readonly TAIWAN: Internal.Locale;
        static readonly FRENCH: Internal.Locale;
    }
    type Locale_ = Locale;
    class RenderRegionCache {
        constructor()
        createRegion(arg0: Internal.Level_, arg1: BlockPos_, arg2: BlockPos_, arg3: number): Internal.RenderChunkRegion;
    }
    type RenderRegionCache_ = RenderRegionCache;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    class FloorCandleSkullBlock extends Internal.AbstractCandleSkullBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        constructor(properties: Internal.BlockBehaviour$Properties_, particle: Internal.Supplier_<Internal.ParticleType<Internal.ParticleOptions>>)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        extinguish(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): boolean;
        lightUp(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_, fireSourceType: Internal.ILightable$FireSourceType_): boolean;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        interactWithPlayer(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_): Internal.InteractionResult;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        playLightUpSound(world: Internal.LevelAccessor_, pos: BlockPos_, type: Internal.ILightable$FireSourceType_): void;
        interactWithProjectile(level: Internal.Level_, state: Internal.BlockState_, projectile: Internal.Projectile_, pos: BlockPos_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly ROTATION: Internal.IntegerProperty;
    }
    type FloorCandleSkullBlock_ = FloorCandleSkullBlock;
    interface CreativeTabContentSupplier {
        abstract getContent(arg0: boolean): Internal.ItemStack[];
        (arg0: boolean): Internal.ItemStack_[];
        readonly DEFAULT: Internal.CreativeTabContentSupplier;
    }
    type CreativeTabContentSupplier_ = CreativeTabContentSupplier;
    class ArrowItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        isInfinite(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Player_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setArmorToughness(armorToughness: number): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        createArrow(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_): Internal.AbstractArrow;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type ArrowItem_ = ArrowItem;
    interface PrimitiveIterator$OfInt extends Internal.PrimitiveIterator<number, Internal.IntConsumer> {
        forEachRemaining(arg0: any): void;
        remove(): void;
        next(): any;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        abstract hasNext(): boolean;
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        abstract nextInt(): number;
    }
    type PrimitiveIterator$OfInt_ = PrimitiveIterator$OfInt;
    class OrientedContraptionEntity extends Internal.AbstractContraptionEntity {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        setMotionY(y: number): void;
        setCouplingId(arg0: Internal.UUID_): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isOnScoreboardTeam(teamId: string): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        startAtInitialYaw(): void;
        getBlock(): Internal.BlockContainerJS;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
        getCoupledCartsIfPresent(): Internal.Couple<Internal.MinecartController>;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        isLiving(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        static handleRelocationPacket(arg0: Internal.ContraptionRelocationPacket_): void;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        static createAtYaw(arg0: Internal.Level_, arg1: Internal.Contraption_, arg2: Internal.Direction_, arg3: number): Internal.OrientedContraptionEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        getDisplayName(): Internal.Component;
        setInitialOrientation(arg0: Internal.Direction_): void;
        setMotionX(x: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        getInitialYaw(): number;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getLevel(): Internal.Level;
        getFacing(): Internal.Direction;
        getScriptType(): Internal.ScriptType;
        isMultipartEntity(): boolean;
        getCouplingId(): Internal.UUID;
        startAtYaw(arg0: number): void;
        shouldRiderSit(): boolean;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        static create(arg0: Internal.Level_, arg1: Internal.Contraption_, arg2: Internal.Direction_): Internal.OrientedContraptionEntity;
        isWaterCreature(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: Internal.Component_): void;
        getInitialOrientation(): Internal.Direction;
        serializeNBT(): Internal.CompoundTag;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDistanceSq(pos: BlockPos_): number;
        isFrame(): boolean;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        isInitialOrientationPresent(): boolean;
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        set couplingId(arg0: Internal.UUID_)
        get peacefulCreature(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get coupledCartsIfPresent(): Internal.Couple<Internal.MinecartController>
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get server(): Internal.MinecraftServer
        get displayName(): Internal.Component
        set initialOrientation(arg0: Internal.Direction_)
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get initialYaw(): number
        get teamId(): string
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get facing(): Internal.Direction
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get couplingId(): Internal.UUID
        get parts(): Internal.PartEntity<any>[]
        get motionX(): number
        get waterCreature(): boolean
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        get initialOrientation(): Internal.Direction
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
        get initialOrientationPresent(): boolean
        pitch: number;
        nonDamageTicks: number;
        yaw: number;
        prevYaw: number;
        targetYaw: number;
        prevPitch: number;
    }
    type OrientedContraptionEntity_ = OrientedContraptionEntity;
    interface SystemReportAccessor {
        abstract getEntries(): Internal.Map<string, string>;
        getOPERATING_SYSTEM(): string;
        getJAVA_VERSION(): string;
        get entries(): Internal.Map<string, string>
        get OPERATING_SYSTEM(): string
        get JAVA_VERSION(): string
        (): Internal.Map_<string, string>;
    }
    type SystemReportAccessor_ = SystemReportAccessor;
    class RegExp {
        constructor()
        wrapRegExp(cx: Internal.Context_, scope: Internal.Scriptable_, compiled: any): Internal.Scriptable;
        action(cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[], actionType: number): any;
        js_split(cx: Internal.Context_, scope: Internal.Scriptable_, target: string, args: any[]): any;
        isRegExp(obj: Internal.Scriptable_): boolean;
        compileRegExp(cx: Internal.Context_, source: string, flags: string): any;
        find_split(cx: Internal.Context_, scope: Internal.Scriptable_, target: string, separator: string, reObj: Internal.Scriptable_, ip: number[], matchlen: number[], matched: boolean[], parensp: string[][]): number;
        static readonly RA_SEARCH: 3;
        static readonly RA_MATCH: 1;
        static readonly RA_REPLACE: 2;
    }
    type RegExp_ = RegExp;
    abstract class ImmutableSet <E> extends Internal.ImmutableCollection<E> implements Internal.Set<E> {
        static of<E>(): Internal.ImmutableSet<E>;
        static of<E>(arg0: E): Internal.ImmutableSet<E>;
        static builderWithExpectedSize<E>(arg0: number): Internal.ImmutableSet$Builder<E>;
        parallelStream(): Internal.Stream<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        static copyOf<E>(arg0: Internal.Iterable_<E>): Internal.ImmutableSet<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.ImmutableSet<E>;
        static copyOf<E>(arg0: E[]): Internal.ImmutableSet<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static toImmutableSet<E>(): Internal.Collector<E, any, Internal.ImmutableSet<E>>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E): Internal.ImmutableSet<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.ImmutableSet<E>;
        forEach(arg0: Internal.Consumer_<E>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.ImmutableSet<E>;
        abstract toArray<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.ImmutableSet<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, ...arg6: E[]): Internal.ImmutableSet<E>;
        static builder<E>(): Internal.ImmutableSet$Builder<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        stream(): Internal.Stream<E>;
        spliterator(): Internal.Spliterator<E>;
        static copyOf<E>(arg0: Internal.Iterator_<E>): Internal.ImmutableSet<E>;
    }
    type ImmutableSet_<E> = ImmutableSet<E>;
    interface Decoder$Boxed <A> {
        abstract decode<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<A, T>>;
        decoder(): Internal.Decoder<A>;
        (arg0: Internal.Dynamic<T>): Internal.DataResult_<com.mojang.datafixers.util.Pair<A, T>>;
    }
    type Decoder$Boxed_<A> = Decoder$Boxed<A>;
    interface IMinecartCollisionHandler {
        abstract getMinecartCollisionBox(arg0: Internal.AbstractMinecart_): Internal.AABB;
        abstract getCollisionBox(arg0: Internal.AbstractMinecart_, arg1: Internal.Entity_): Internal.AABB;
        abstract onEntityCollision(arg0: Internal.AbstractMinecart_, arg1: Internal.Entity_): void;
        abstract getBoundingBox(arg0: Internal.AbstractMinecart_): Internal.AABB;
    }
    type IMinecartCollisionHandler_ = IMinecartCollisionHandler;
    interface VisualityParticleEngine {
        abstract registerVisuality<O extends Internal.ParticleOptions, T extends Internal.ParticleType<O>>(arg0: Internal.RegistryObject_<T>, arg1: Internal.ParticleProvider_<O>): void;
        abstract registerVisuality<O extends Internal.ParticleOptions, T extends Internal.ParticleType<O>>(arg0: Internal.RegistryObject_<T>, arg1: Internal.ParticleEngine$SpriteParticleRegistration_<O>): void;
    }
    type VisualityParticleEngine_ = VisualityParticleEngine;
    class AdultSensor extends Internal.Sensor<Internal.AgeableMob> {
        constructor()
    }
    type AdultSensor_ = AdultSensor;
    interface InventoryKJS {
        countNonEmpty(): number;
        count(ingredient: Internal.Ingredient_): number;
        asContainer(): Internal.Container;
        count(): number;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        find(): number;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        setChanged(): void;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get empty(): boolean
        get slots(): number
        get mutable(): boolean
        get height(): number
    }
    type InventoryKJS_ = InventoryKJS;
    class PlayLevelSoundEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Level_, arg1: Internal.Holder_<Internal.SoundEvent>, arg2: Internal.SoundSource_, arg3: number, arg4: number)
        getLevel(): Internal.Level;
        setNewPitch(arg0: number): void;
        getNewVolume(): number;
        getSound(): Internal.Holder<Internal.SoundEvent>;
        getOriginalVolume(): number;
        getNewPitch(): number;
        getSource(): Internal.SoundSource;
        setSound(arg0: Internal.Holder_<Internal.SoundEvent>): void;
        setSource(arg0: Internal.SoundSource_): void;
        getOriginalPitch(): number;
        setNewVolume(arg0: number): void;
        get level(): Internal.Level
        set newPitch(arg0: number)
        get newVolume(): number
        get sound(): Internal.Holder<Internal.SoundEvent>
        get originalVolume(): number
        get newPitch(): number
        get source(): Internal.SoundSource
        set sound(arg0: Internal.Holder_<Internal.SoundEvent>)
        set source(arg0: Internal.SoundSource_)
        get originalPitch(): number
        set newVolume(arg0: number)
    }
    type PlayLevelSoundEvent_ = PlayLevelSoundEvent;
    class NoteBlockEvent extends Internal.BlockEvent {
        constructor()
        getNote(): Internal.NoteBlockEvent$Note;
        setNote(arg0: Internal.NoteBlockEvent$Note_, arg1: Internal.NoteBlockEvent$Octave_): void;
        getVanillaNoteId(): number;
        getOctave(): Internal.NoteBlockEvent$Octave;
        get note(): Internal.NoteBlockEvent$Note
        get vanillaNoteId(): number
        get octave(): Internal.NoteBlockEvent$Octave
    }
    type NoteBlockEvent_ = NoteBlockEvent;
    class Configuration {
        resolveAndBind(arg0: Internal.ModuleFinder_, arg1: Internal.ModuleFinder_, arg2: Internal.Collection_<string>): this;
        static resolve(arg0: Internal.ModuleFinder_, arg1: Internal.List_<Internal.Configuration>, arg2: Internal.ModuleFinder_, arg3: Internal.Collection_<string>): Internal.Configuration;
        parents(): Internal.List<Internal.Configuration>;
        modules(): Internal.Set<Internal.ResolvedModule>;
        resolve(arg0: Internal.ModuleFinder_, arg1: Internal.ModuleFinder_, arg2: Internal.Collection_<string>): this;
        static resolveAndBind(arg0: Internal.ModuleFinder_, arg1: Internal.List_<Internal.Configuration>, arg2: Internal.ModuleFinder_, arg3: Internal.Collection_<string>): Internal.Configuration;
        static empty(): Internal.Configuration;
        findModule(arg0: string): Internal.Optional<Internal.ResolvedModule>;
    }
    type Configuration_ = Configuration;
    interface OutputReplacementTransformer {
        abstract transform(arg0: Internal.RecipeKJS_, arg1: Internal.ReplacementMatch_, arg2: Internal.OutputReplacement_, arg3: Internal.OutputReplacement_): any;
        (arg0: Internal.RecipeKJS, arg1: Internal.ReplacementMatch, arg2: Internal.OutputReplacement, arg3: Internal.OutputReplacement): any;
    }
    type OutputReplacementTransformer_ = OutputReplacementTransformer;
    class ConfigBase$ConfigFloat extends Internal.ConfigBase$CValue<number, Internal.ForgeConfigSpec$DoubleValue> {
        constructor(arg0: Internal.ConfigBase_, arg1: string, arg2: number, arg3: number, arg4: number, ...arg5: string[])
        getF(): number;
        get f(): number
    }
    type ConfigBase$ConfigFloat_ = ConfigBase$ConfigFloat;
    class StraightPipeBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
    }
    type StraightPipeBlockEntity_ = StraightPipeBlockEntity;
    interface IForgeBucketPickup {
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
    }
    type IForgeBucketPickup_ = IForgeBucketPickup;
    class ShearsItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        handler$zje000$getDestroySpeed(stack: Internal.ItemStack_, state: Internal.BlockState_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        handler$zje000$mineBlock(stack: Internal.ItemStack_, level: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_, miningEntity: Internal.LivingEntity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setArmorToughness(armorToughness: number): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        handler$zje000$isCorrectToolForDrops(state: Internal.BlockState_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type ShearsItem_ = ShearsItem;
    /**
     * Invoked right after an explosion happens.
    */
    class ExplosionEventJS$After extends Internal.ExplosionEventJS {
        constructor(level: Internal.Level_, explosion: Internal.Explosion_, affectedEntities: Internal.List_<Internal.Entity>)
        /**
         * Gets a list of all blocks affected by the explosion.
        */
        getAffectedBlocks(): Internal.List<Internal.BlockContainerJS>;
        /**
         * Remove all entities from the list of affected entities.
        */
        removeAllAffectedEntities(): void;
        /**
         * Remove an entity from the list of affected entities.
        */
        removeAffectedEntity(entity: Internal.Entity_): void;
        /**
         * Remove all blocks from the list of affected blocks.
        */
        removeAllAffectedBlocks(): void;
        /**
         * Remove a block from the list of affected blocks.
        */
        removeAffectedBlock(block: Internal.BlockContainerJS_): void;
        /**
         * Remove all knockback from all affected *players*.
        */
        removeKnockback(): void;
        /**
         * Gets a list of all entities affected by the explosion.
        */
        getAffectedEntities(): Internal.EntityArrayList;
        /**
         * Gets a list of all blocks affected by the explosion.
        */
        get affectedBlocks(): Internal.List<Internal.BlockContainerJS>
        /**
         * Gets a list of all entities affected by the explosion.
        */
        get affectedEntities(): Internal.EntityArrayList
    }
    type ExplosionEventJS$After_ = ExplosionEventJS$After;
    class VariableSet implements Internal.UnitVariables {
        constructor()
        setMutable(name: string, initialValue: number): Internal.MutableNumberUnit;
        createSubset(): this;
        get(entry: string): Internal.Unit;
        set(name: string, value: Internal.Unit_): this;
        getVariables(): this;
        set(name: string, value: number): this;
        get variables(): Internal.VariableSet
    }
    type VariableSet_ = VariableSet;
    class TypedOptic <S, T, A, B> extends Internal.Record {
        constructor(bounds: Internal.Set_<Internal.TypeToken<Internal.K1>>, elements: Internal.List_<Internal.TypedOptic$Element<any, any, any, any>>)
        constructor(arg0: Internal.Set_<Internal.TypeToken<Internal.K1>>, arg1: com.mojang.datafixers.types.Type_<S>, arg2: com.mojang.datafixers.types.Type_<T>, arg3: com.mojang.datafixers.types.Type_<A>, arg4: com.mojang.datafixers.types.Type_<B>, arg5: Internal.Optic_<any, S, T, A, B>)
        constructor(arg0: Internal.TypeToken_<Internal.K1>, arg1: com.mojang.datafixers.types.Type_<S>, arg2: com.mojang.datafixers.types.Type_<T>, arg3: com.mojang.datafixers.types.Type_<A>, arg4: com.mojang.datafixers.types.Type_<B>, arg5: Internal.Optic_<any, S, T, A, B>)
        static tagged<K, A, B>(arg0: Internal.TaggedChoice$TaggedChoiceType_<K>, arg1: K, arg2: com.mojang.datafixers.types.Type_<A>, arg3: com.mojang.datafixers.types.Type_<B>): Internal.TypedOptic<com.mojang.datafixers.util.Pair<K, any>, com.mojang.datafixers.util.Pair<K, any>, A, B>;
        aType(): com.mojang.datafixers.types.Type<A>;
        bounds(): Internal.Set<Internal.TypeToken<Internal.K1>>;
        static compoundListKeys<K, V, K2>(arg0: com.mojang.datafixers.types.Type_<K>, arg1: com.mojang.datafixers.types.Type_<K2>, arg2: com.mojang.datafixers.types.Type_<V>): Internal.TypedOptic<Internal.List<com.mojang.datafixers.util.Pair<K, V>>, Internal.List<com.mojang.datafixers.util.Pair<K2, V>>, K, K2>;
        static inj2<F, G, G2>(arg0: com.mojang.datafixers.types.Type_<F>, arg1: com.mojang.datafixers.types.Type_<G>, arg2: com.mojang.datafixers.types.Type_<G2>): Internal.TypedOptic<Internal.Either<F, G>, Internal.Either<F, G2>, G, G2>;
        tType(): com.mojang.datafixers.types.Type<T>;
        compose<A1, B1>(arg0: Internal.TypedOptic_<A, B, A1, B1>): Internal.TypedOptic<S, T, A1, B1>;
        static instanceOf<Proof2 extends Internal.K1>(arg0: Internal.Collection_<Internal.TypeToken<Internal.K1>>, arg1: Internal.TypeToken_<Proof2>): boolean;
        static proj2<F, G, G2>(arg0: com.mojang.datafixers.types.Type_<F>, arg1: com.mojang.datafixers.types.Type_<G>, arg2: com.mojang.datafixers.types.Type_<G2>): Internal.TypedOptic<com.mojang.datafixers.util.Pair<F, G>, com.mojang.datafixers.util.Pair<F, G2>, G, G2>;
        apply<P extends Internal.K2, Proof2 extends Internal.K1>(arg0: Internal.TypeToken_<Proof2>, arg1: Internal.App_<Proof2, P>, arg2: Internal.App2_<P, A, B>): Internal.App2<P, S, T>;
        sType(): com.mojang.datafixers.types.Type<S>;
        elements(): Internal.List<Internal.TypedOptic$Element<any, any, any, any>>;
        static proj1<F, G, F2>(arg0: com.mojang.datafixers.types.Type_<F>, arg1: com.mojang.datafixers.types.Type_<G>, arg2: com.mojang.datafixers.types.Type_<F2>): Internal.TypedOptic<com.mojang.datafixers.util.Pair<F, G>, com.mojang.datafixers.util.Pair<F2, G>, F, F2>;
        outermost(): Internal.Optic<any, S, T, any, any>;
        static adapter<S, T>(arg0: com.mojang.datafixers.types.Type_<S>, arg1: com.mojang.datafixers.types.Type_<T>): Internal.TypedOptic<S, T, S, T>;
        static compoundListElements<K, V, V2>(arg0: com.mojang.datafixers.types.Type_<K>, arg1: com.mojang.datafixers.types.Type_<V>, arg2: com.mojang.datafixers.types.Type_<V2>): Internal.TypedOptic<Internal.List<com.mojang.datafixers.util.Pair<K, V>>, Internal.List<com.mojang.datafixers.util.Pair<K, V2>>, V, V2>;
        castOuterUnchecked<S2, T2>(arg0: com.mojang.datafixers.types.Type_<S2>, arg1: com.mojang.datafixers.types.Type_<T2>): Internal.TypedOptic<S2, T2, A, B>;
        bType(): com.mojang.datafixers.types.Type<B>;
        innermost(): Internal.Optic<any, any, any, A, B>;
        castOuter(arg0: com.mojang.datafixers.types.Type_<S>, arg1: com.mojang.datafixers.types.Type_<T>): this;
        static list<A, B>(arg0: com.mojang.datafixers.types.Type_<A>, arg1: com.mojang.datafixers.types.Type_<B>): Internal.TypedOptic<Internal.List<A>, Internal.List<B>, A, B>;
        static inj1<F, G, F2>(arg0: com.mojang.datafixers.types.Type_<F>, arg1: com.mojang.datafixers.types.Type_<G>, arg2: com.mojang.datafixers.types.Type_<F2>): Internal.TypedOptic<Internal.Either<F, G>, Internal.Either<F2, G>, F, F2>;
        upCast<Proof2 extends Internal.K1>(arg0: Internal.TypeToken_<Proof2>): Internal.Optional<Internal.Optic<Proof2, S, T, A, B>>;
    }
    type TypedOptic_<S, T, A, B> = TypedOptic<S, T, A, B>;
    class ItemEntity extends Internal.Entity implements Internal.TraceableEntity, Internal.ItemEntityKJS {
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.ItemStack_)
        constructor(arg0: Internal.EntityType_<Internal.ItemEntity>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.ItemStack_, arg5: number, arg6: number, arg7: number)
        setExtendedLifetime(): void;
        getDistance(pos: BlockPos_): number;
        copy(): this;
        getTicksUntilDespawn(): number;
        setNoPickUpDelay(): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        static merge(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: number): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        setItem(arg0: Internal.ItemStack_): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        canStartSwimming(): boolean;
        makeFakeItem(): void;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        getAge(): number;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        getOwner(): Internal.Entity;
        getLifespan(): number;
        getDisplayName(): Internal.Component;
        setNeverPickUp(): void;
        setInfinitePickUpDelay(): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        setPickUpDelay(arg0: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getSpin(arg0: number): number;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        shouldRiderSit(): boolean;
        setThrower(arg0: Internal.UUID_): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        hasPickUpDelay(): boolean;
        getMotionX(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        isWaterCreature(): boolean;
        setNoDespawn(): void;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        isFrame(): boolean;
        playSound(id: Internal.SoundEvent_): void;
        getDistance(x: number, y: number, z: number): number;
        static areMergable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        setRotation(yaw: number, pitch: number): void;
        isAmbientCreature(): boolean;
        getStepHeight(): number;
        setTicksUntilDespawn(ticks: number): void;
        isMonster(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTarget(arg0: Internal.UUID_): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        handler$zcf000$onHurt(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        setDefaultPickUpDelay(): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        isMultipartEntity(): boolean;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        serializeNBT(): Internal.CompoundTag;
        setLifespan(lifespan: number): void;
        setStatusMessage(message: Internal.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        getClassification(arg0: boolean): Internal.MobCategory;
        setUnlimitedLifetime(): void;
        runCommand(command: string): number;
        get ticksUntilDespawn(): number
        set item(arg0: Internal.ItemStack_)
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get age(): number
        get owner(): Internal.Entity
        get lifespan(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        set pickUpDelay(arg0: number)
        get teamId(): string
        get facing(): Internal.Direction
        set thrower(arg0: Internal.UUID_)
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get frame(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        get ambientCreature(): boolean
        get stepHeight(): number
        set ticksUntilDespawn(ticks: number)
        get monster(): boolean
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set target(arg0: Internal.UUID_)
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        set z(z: number)
        set lifespan(lifespan: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        lifespan: number;
        readonly bobOffs: number;
        static readonly LIFETIME: 6000;
        age: number;
    }
    type ItemEntity_ = ItemEntity;
    class PlacementContext extends Internal.WorldGenerationContext {
        constructor(arg0: Internal.WorldGenLevel_, arg1: Internal.ChunkGenerator_, arg2: Internal.Optional_<Internal.PlacedFeature>)
        generator(): Internal.ChunkGenerator;
        getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getMinBuildHeight(): number;
        topFeature(): Internal.Optional<Internal.PlacedFeature>;
        getBlockState(arg0: BlockPos_): Internal.BlockState;
        getLevel(): Internal.WorldGenLevel;
        getCarvingMask(arg0: Internal.ChunkPos_, arg1: Internal.GenerationStep$Carving_): Internal.CarvingMask;
        get minBuildHeight(): number
        get level(): Internal.WorldGenLevel
    }
    type PlacementContext_ = PlacementContext;
    abstract class NodeEvaluator {
        constructor()
        canOpenDoors(): boolean;
        setCanWalkOverFences(arg0: boolean): void;
        canPassDoors(): boolean;
        canWalkOverFences(): boolean;
        canFloat(): boolean;
        setCanOpenDoors(arg0: boolean): void;
        abstract getBlockPathType(arg0: Internal.BlockGetter_, arg1: number, arg2: number, arg3: number, arg4: Internal.Mob_): Internal.BlockPathTypes;
        abstract getNeighbors(arg0: Internal.Node_[], arg1: Internal.Node_): number;
        setCanFloat(arg0: boolean): void;
        prepare(arg0: Internal.PathNavigationRegion_, arg1: Internal.Mob_): void;
        setCanPassDoors(arg0: boolean): void;
        abstract getGoal(arg0: number, arg1: number, arg2: number): Internal.Target;
        abstract getBlockPathType(arg0: Internal.BlockGetter_, arg1: number, arg2: number, arg3: number): Internal.BlockPathTypes;
        abstract getStart(): Internal.Node;
        done(): void;
        set canWalkOverFences(arg0: boolean)
        set canOpenDoors(arg0: boolean)
        set canFloat(arg0: boolean)
        set canPassDoors(arg0: boolean)
        get start(): Internal.Node
    }
    type NodeEvaluator_ = NodeEvaluator;
    class RenderStateShard$EmptyTextureStateShard extends Internal.RenderStateShard {
        constructor(arg0: Internal.Runnable_, arg1: Internal.Runnable_)
    }
    type RenderStateShard$EmptyTextureStateShard_ = RenderStateShard$EmptyTextureStateShard;
    class RenderType$CompositeState {
        static builder(): Internal.RenderType$CompositeState$CompositeStateBuilder;
    }
    type RenderType$CompositeState_ = RenderType$CompositeState;
    class RecordCodecBuilder <O, F> implements Internal.App<Internal.RecordCodecBuilder$Mu<O>, F> {
        static unbox<O, F>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, F>): Internal.RecordCodecBuilder<O, F>;
        static stable<O, F>(arg0: F): Internal.RecordCodecBuilder<O, F>;
        static of<O, F>(arg0: Internal.Function_<O, F>, arg1: string, arg2: Internal.Codec_<F>): Internal.RecordCodecBuilder<O, F>;
        static deprecated<O, F>(arg0: F, arg1: number): Internal.RecordCodecBuilder<O, F>;
        static build<O>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, O>): Internal.MapCodec<O>;
        static mapCodec<O>(arg0: Internal.Function_<Internal.RecordCodecBuilder$Instance<O>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, O>>): Internal.MapCodec<O>;
        static instance<O>(): Internal.RecordCodecBuilder$Instance<O>;
        static point<O, F>(arg0: F, arg1: Internal.Lifecycle_): Internal.RecordCodecBuilder<O, F>;
        dependent<E>(arg0: Internal.Function_<O, E>, arg1: Internal.MapEncoder_<E>, arg2: Internal.Function_<F, Internal.MapDecoder<E>>): Internal.RecordCodecBuilder<O, E>;
        static of<O, F>(arg0: Internal.Function_<O, F>, arg1: Internal.MapCodec_<F>): Internal.RecordCodecBuilder<O, F>;
        static create<O>(arg0: Internal.Function_<Internal.RecordCodecBuilder$Instance<O>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, O>>): Internal.Codec<O>;
        static point<O, F>(arg0: F): Internal.RecordCodecBuilder<O, F>;
    }
    type RecordCodecBuilder_<O, F> = RecordCodecBuilder<O, F>;
    class StructureSpawnOverride$BoundingBoxType extends Internal.Enum<Internal.StructureSpawnOverride$BoundingBoxType> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.StructureSpawnOverride$BoundingBoxType[];
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.StructureSpawnOverride$BoundingBoxType;
        get serializedName(): string
        static readonly STRUCTURE: Internal.StructureSpawnOverride$BoundingBoxType;
        static readonly CODEC: Internal.Codec<Internal.StructureSpawnOverride$BoundingBoxType>;
        static readonly PIECE: Internal.StructureSpawnOverride$BoundingBoxType;
    }
    type StructureSpawnOverride$BoundingBoxType_ = StructureSpawnOverride$BoundingBoxType | "structure" | "piece";
    class WorldDimensions extends Internal.Record {
        constructor(arg0: Internal.Registry_<Internal.LevelStem>)
        static withOverworld(arg0: Internal.Registry_<Internal.DimensionType>, arg1: Internal.Registry_<Internal.LevelStem>, arg2: Internal.ChunkGenerator_): Internal.Registry<Internal.LevelStem>;
        static withOverworld(arg0: Internal.Registry_<Internal.LevelStem>, arg1: Internal.Holder_<Internal.DimensionType>, arg2: Internal.ChunkGenerator_): Internal.Registry<Internal.LevelStem>;
        static keysInOrder(arg0: Internal.Stream_<Internal.ResourceKey<Internal.LevelStem>>): Internal.Stream<Internal.ResourceKey<Internal.LevelStem>>;
        get(arg0: Internal.ResourceKey_<Internal.LevelStem>): Internal.Optional<Internal.LevelStem>;
        bake(arg0: Internal.Registry_<Internal.LevelStem>): Internal.WorldDimensions$Complete;
        replaceOverworldGenerator(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_): this;
        levels(): Internal.ImmutableSet<Internal.ResourceKey<Internal.Level>>;
        overworld(): Internal.ChunkGenerator;
        dimensions(): Internal.Registry<Internal.LevelStem>;
        isDebug(): boolean;
        get debug(): boolean
        static readonly CODEC: Internal.MapCodec<Internal.WorldDimensions>;
    }
    type WorldDimensions_ = WorldDimensions;
    class Skeleton extends Internal.AbstractSkeleton implements Internal.IQuiverEntity {
        constructor(arg0: Internal.EntityType_<Internal.Skeleton>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        handler$zfe001$addAdditionalSaveData(compound: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        handler$zfe001$readAdditionalSaveData(compound: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        supplementaries$getQuiver(): Internal.ItemStack;
        setFreezeConverting(arg0: boolean): void;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        supplementaries$hasQuiver(): boolean;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        isFreezeConverting(): boolean;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setDefaultMovementSpeed(speed: number): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        serializeNBT(): Internal.CompoundTag;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        supplementaries$setQuiver(quiver: Internal.ItemStack_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDistanceSq(pos: BlockPos_): number;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set freezeConverting(arg0: boolean)
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get freezeConverting(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        static readonly CONVERSION_TAG: "StrayConversionTime";
    }
    type Skeleton_ = Skeleton;
    interface DoubleComparator extends Internal.Comparator<number> {
        reversed(): this;
        comparing<T, U extends Internal.Comparable<any>>(arg0: Internal.Function_<T, U>): Internal.Comparator<T>;
        reverseOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        thenComparingLong(arg0: Internal.ToLongFunction_<number>): Internal.Comparator<number>;
        thenComparing<U extends Internal.Comparable<any>>(arg0: Internal.Function_<number, U>): Internal.Comparator<number>;
        thenComparingDouble(arg0: Internal.ToDoubleFunction_<number>): Internal.Comparator<number>;
        naturalOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        thenComparing<U>(arg0: Internal.Function_<number, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<number>;
        comparingInt<T>(arg0: Internal.ToIntFunction_<T>): Internal.Comparator<T>;
        nullsFirst<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        comparingLong<T>(arg0: Internal.ToLongFunction_<T>): Internal.Comparator<T>;
        comparingDouble<T>(arg0: Internal.ToDoubleFunction_<T>): Internal.Comparator<T>;
        nullsLast<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        /**
         * @deprecated
        */
        compare(arg0: any, arg1: any): number;
        thenComparingInt(arg0: Internal.ToIntFunction_<number>): Internal.Comparator<number>;
        thenComparing(arg0: Internal.DoubleComparator_): this;
        /**
         * @deprecated
        */
        compare(arg0: number, arg1: number): number;
        abstract equals(arg0: any): boolean;
        comparing<T, U>(arg0: Internal.Function_<T, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<T>;
        thenComparing(arg0: Internal.Comparator_<number>): Internal.Comparator<number>;
        abstract compare(arg0: number, arg1: number): number;
    }
    type DoubleComparator_ = DoubleComparator;
    class UserWhiteList extends Internal.StoredUserList<Internal.GameProfile, any> {
        constructor(arg0: Internal.File_)
        isWhiteListed(arg0: Internal.GameProfile_): boolean;
    }
    type UserWhiteList_ = UserWhiteList;
    interface Position {
        abstract z(): number;
        abstract y(): number;
        abstract x(): number;
    }
    type Position_ = Position;
    class OptionalInt {
        static of(arg0: number): Internal.OptionalInt;
        static empty(): Internal.OptionalInt;
        getAsInt(): number;
        isPresent(): boolean;
        orElseThrow(): number;
        ifPresentOrElse(arg0: Internal.IntConsumer_, arg1: Internal.Runnable_): void;
        orElseGet(arg0: Internal.IntSupplier_): number;
        isEmpty(): boolean;
        orElseThrow<X extends Internal.Throwable>(arg0: Internal.Supplier_<X>): number;
        stream(): Internal.IntStream;
        orElse(arg0: number): number;
        ifPresent(arg0: Internal.IntConsumer_): void;
        get asInt(): number
        get present(): boolean
        get empty(): boolean
    }
    type OptionalInt_ = OptionalInt;
    class HashSet <E> extends Internal.AbstractSet<E> implements Internal.Cloneable, Internal.Set<E>, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Collection_<E>)
        constructor(arg0: number)
        constructor(arg0: number, arg1: number)
        clone(): any;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        forEach(arg0: Internal.Consumer_<E>): void;
        toArray<T>(arg0: T[]): T[];
        parallelStream(): Internal.Stream<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        iterator(): Internal.Iterator<E>;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        static of<E>(): Internal.Set<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        stream(): Internal.Stream<E>;
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
    }
    type HashSet_<E> = HashSet<E>;
    interface IRecipeSlotView {
        abstract getDisplayedIngredient<T>(arg0: Internal.IIngredientType_<T>): Internal.Optional<T>;
        abstract getSlotName(): Internal.Optional<string>;
        abstract getDisplayedIngredient(): Internal.Optional<Internal.ITypedIngredient<any>>;
        abstract getIngredients<T>(arg0: Internal.IIngredientType_<T>): Internal.Stream<T>;
        abstract drawHighlight(arg0: Internal.GuiGraphics_, arg1: number): void;
        getItemStacks(): Internal.Stream<Internal.ItemStack>;
        abstract isEmpty(): boolean;
        abstract getAllIngredients(): Internal.Stream<Internal.ITypedIngredient<any>>;
        getDisplayedItemStack(): Internal.Optional<Internal.ItemStack>;
        abstract getRole(): Internal.RecipeIngredientRole;
        get slotName(): Internal.Optional<string>
        get displayedIngredient(): Internal.Optional<Internal.ITypedIngredient<any>>
        get itemStacks(): Internal.Stream<Internal.ItemStack>
        get empty(): boolean
        get allIngredients(): Internal.Stream<Internal.ITypedIngredient<any>>
        get displayedItemStack(): Internal.Optional<Internal.ItemStack>
        get role(): Internal.RecipeIngredientRole
    }
    type IRecipeSlotView_ = IRecipeSlotView;
    class OverencumberedEffect extends Internal.MobEffect {
        constructor()
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type OverencumberedEffect_ = OverencumberedEffect;
    class StringArgumentType implements Internal.ArgumentType<string> {
        getType(): Internal.StringArgumentType$StringType;
        static string(): Internal.StringArgumentType;
        getExamples(): Internal.Collection<string>;
        static word(): Internal.StringArgumentType;
        static greedyString(): Internal.StringArgumentType;
        static escapeIfRequired(arg0: string): string;
        parse(arg0: Internal.StringReader_): string;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        static getString(arg0: Internal.CommandContext_<any>, arg1: string): string;
        get type(): Internal.StringArgumentType$StringType
        get examples(): Internal.Collection<string>
    }
    type StringArgumentType_ = StringArgumentType;
    class ForgeThatchFluid$Flowing extends Internal.ThatchFluid$Flowing {
        constructor(arg0: Internal.ThatchFluid$FluidReferenceHolder_)
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        arch$registryName(): ResourceLocation;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
    }
    type ForgeThatchFluid$Flowing_ = ForgeThatchFluid$Flowing;
    class HarvesterBlock extends Internal.AttachedActorBlock implements Internal.IBE<Internal.HarvesterBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getBlockEntityClass(): typeof Internal.HarvesterBlockEntity;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.HarvesterBlockEntity>;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        getBlockEntityType(): Internal.BlockEntityType<Internal.HarvesterBlockEntity>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.HarvesterBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.HarvesterBlockEntity>): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        static withWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.BlockState;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.HarvesterBlockEntity;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get blockEntityClass(): typeof Internal.HarvesterBlockEntity
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.HarvesterBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type HarvesterBlock_ = HarvesterBlock;
    abstract class WaterAnimal extends Internal.PathfinderMob {
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        static checkSurfaceWaterAnimalSpawnRules(arg0: Internal.EntityType_<Internal.WaterAnimal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setDefaultMovementSpeed(speed: number): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        serializeNBT(): Internal.CompoundTag;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDistanceSq(pos: BlockPos_): number;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type WaterAnimal_ = WaterAnimal;
    class DensityFunctions$Ap2 extends Internal.Record implements Internal.DensityFunctions$TwoArgumentSimpleFunction {
        abs(): Internal.DensityFunction;
        halfNegative(): Internal.DensityFunction;
        maxValue(): number;
        codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        square(): Internal.DensityFunction;
        mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        static create(arg0: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type_, arg1: Internal.DensityFunction_, arg2: Internal.DensityFunction_): Internal.DensityFunctions$TwoArgumentSimpleFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        argument1(): Internal.DensityFunction;
        type(): Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
        quarterNegative(): Internal.DensityFunction;
        cube(): Internal.DensityFunction;
        fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        minValue(): number;
        argument2(): Internal.DensityFunction;
    }
    type DensityFunctions$Ap2_ = DensityFunctions$Ap2;
    class CountPlacement extends Internal.RepeatingPlacement {
        static of(arg0: Internal.IntProvider_): Internal.CountPlacement;
        static of(arg0: number): Internal.CountPlacement;
        static readonly CODEC: Internal.Codec<Internal.CountPlacement>;
    }
    type CountPlacement_ = CountPlacement;
    interface LoggingEventBuilder {
        abstract addKeyValue(arg0: string, arg1: Internal.Supplier_<any>): this;
        abstract addMarker(arg0: org.slf4j.Marker_): this;
        abstract setMessage(arg0: Internal.Supplier_<string>): this;
        abstract log(arg0: string, ...arg1: any[]): void;
        abstract log(): void;
        abstract log(arg0: string, arg1: any): void;
        abstract addArgument(arg0: Internal.Supplier_<any>): this;
        abstract log(arg0: string, arg1: any, arg2: any): void;
        abstract setMessage(arg0: string): this;
        abstract addKeyValue(arg0: string, arg1: any): this;
        abstract log(arg0: string): void;
        abstract setCause(arg0: Internal.Throwable_): this;
        abstract log(arg0: Internal.Supplier_<string>): void;
        abstract addArgument(arg0: any): this;
        set message(arg0: Internal.Supplier_<string>)
        set message(arg0: string)
        set cause(arg0: Internal.Throwable_)
    }
    type LoggingEventBuilder_ = LoggingEventBuilder;
    class NoteBlockInstrument extends Internal.Enum<Internal.NoteBlockInstrument> implements Internal.StringRepresentable {
        isTunable(): boolean;
        static values(): Internal.NoteBlockInstrument[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.NoteBlockInstrument;
        getSerializedName(): string;
        hasCustomSound(): boolean;
        worksAboveNoteBlock(): boolean;
        getSoundEvent(): Internal.Holder<Internal.SoundEvent>;
        get tunable(): boolean
        get serializedName(): string
        get soundEvent(): Internal.Holder<Internal.SoundEvent>
        static readonly XYLOPHONE: Internal.NoteBlockInstrument;
        static readonly COW_BELL: Internal.NoteBlockInstrument;
        static readonly WITHER_SKELETON: Internal.NoteBlockInstrument;
        static readonly HAT: Internal.NoteBlockInstrument;
        static readonly GUITAR: Internal.NoteBlockInstrument;
        static readonly DRAGON: Internal.NoteBlockInstrument;
        static readonly CUSTOM_HEAD: Internal.NoteBlockInstrument;
        static readonly CREEPER: Internal.NoteBlockInstrument;
        static readonly PLING: Internal.NoteBlockInstrument;
        static readonly SKELETON: Internal.NoteBlockInstrument;
        static readonly PIGLIN: Internal.NoteBlockInstrument;
        static readonly FLUTE: Internal.NoteBlockInstrument;
        static readonly CHIME: Internal.NoteBlockInstrument;
        static readonly BIT: Internal.NoteBlockInstrument;
        static readonly SNARE: Internal.NoteBlockInstrument;
        static readonly BANJO: Internal.NoteBlockInstrument;
        static readonly IRON_XYLOPHONE: Internal.NoteBlockInstrument;
        static readonly ZOMBIE: Internal.NoteBlockInstrument;
        static readonly BASEDRUM: Internal.NoteBlockInstrument;
        static readonly BASS: Internal.NoteBlockInstrument;
        static readonly DIDGERIDOO: Internal.NoteBlockInstrument;
        static readonly HARP: Internal.NoteBlockInstrument;
        static readonly BELL: Internal.NoteBlockInstrument;
    }
    type NoteBlockInstrument_ = "zombie" | "bell" | "iron_xylophone" | "harp" | "snare" | "hat" | "didgeridoo" | "chime" | NoteBlockInstrument | "banjo" | "dragon" | "pling" | "basedrum" | "wither_skeleton" | "flute" | "skeleton" | "piglin" | "bass" | "custom_head" | "guitar" | "creeper" | "cow_bell" | "bit" | "xylophone";
    class ForgeFlowingFluid$Flowing extends Internal.ForgeFlowingFluid {
        constructor(arg0: any_)
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        arch$registryName(): ResourceLocation;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
    }
    type ForgeFlowingFluid$Flowing_ = ForgeFlowingFluid$Flowing;
    class NativeImage implements Internal.AutoCloseable, Internal.NativeImageAccessor {
        constructor(arg0: Internal.NativeImage$Format_, arg1: number, arg2: number, arg3: boolean)
        constructor(arg0: number, arg1: number, arg2: boolean)
        applyToAllPixels(arg0: Internal.IntUnaryOperator_): void;
        getPixelRGBA(arg0: number, arg1: number): number;
        getPixelsRGBA(): number[];
        copyFrom(arg0: Internal.NativeImage_): void;
        copyRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean): void;
        flipY(): void;
        static read(arg0: Internal.InputStream_): Internal.NativeImage;
        downloadTexture(arg0: number, arg1: boolean): void;
        copyRect(arg0: Internal.NativeImage_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        setPixelLuminance(arg0: number, arg1: number, arg2: number): void;
        writeToFile(arg0: Internal.Path_): void;
        static read(arg0: number[]): Internal.NativeImage;
        static read(arg0: Internal.NativeImage$Format_, arg1: Internal.InputStream_): Internal.NativeImage;
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean): void;
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        writeToFile(arg0: Internal.File_): void;
        getHeight(): number;
        resizeSubRectTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.NativeImage_): void;
        fillRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        untrack(): void;
        static read(arg0: Internal.NativeImage$Format_, arg1: Internal.ByteBuffer_): Internal.NativeImage;
        getGreenOrLuminance(arg0: number, arg1: number): number;
        getWidth(): number;
        downloadDepthBuffer(arg0: number): void;
        copyFromFont(arg0: Internal.STBTTFontinfo_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blendPixel(arg0: number, arg1: number, arg2: number): void;
        drawPixels(): void;
        getLuminanceOrAlpha(arg0: number, arg1: number): number;
        getRedOrLuminance(arg0: number, arg1: number): number;
        mappedCopy(arg0: Internal.IntUnaryOperator_): this;
        getBlueOrLuminance(arg0: number, arg1: number): number;
        format(): Internal.NativeImage$Format;
        upload(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        close(): void;
        setPixelRGBA(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
        */
        makePixelArray(): number[];
        getPixels(): number;
        asByteArray(): number[];
        static read(arg0: Internal.ByteBuffer_): Internal.NativeImage;
        get pixelsRGBA(): number[]
        get height(): number
        get width(): number
        get pixels(): number
    }
    type NativeImage_ = NativeImage;
    interface VibrationSystem {
        abstract getVibrationUser(): Internal.VibrationSystem$User;
        getGameEventFrequency(arg0: Internal.GameEvent_): number;
        abstract getVibrationData(): Internal.VibrationSystem$Data;
        getRedstoneStrengthForDistance(arg0: number, arg1: number): number;
        getResonanceEventByFrequency(arg0: number): Internal.GameEvent;
        get vibrationUser(): Internal.VibrationSystem$User
        get vibrationData(): Internal.VibrationSystem$Data
        readonly VIBRATION_FREQUENCY_FOR_EVENT: {[key: Internal.GameEvent]: 13, [key: Internal.GameEvent]: 5, [key: Internal.GameEvent]: 4, [key: Internal.GameEvent]: 14, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 3, [key: Internal.GameEvent]: 7, [key: Internal.GameEvent]: 9, [key: Internal.GameEvent]: 15, [key: Internal.GameEvent]: 4, [key: Internal.GameEvent]: 6, [key: Internal.GameEvent]: 6, [key: Internal.GameEvent]: 4, [key: Internal.GameEvent]: 12, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 8, [key: Internal.GameEvent]: 9, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 1, [key: Internal.GameEvent]: 8, [key: Internal.GameEvent]: 8, [key: Internal.GameEvent]: 5, [key: Internal.GameEvent]: 1, [key: Internal.GameEvent]: 1, [key: Internal.GameEvent]: 14, [key: Internal.GameEvent]: 6, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 15, [key: Internal.GameEvent]: 4, [key: Internal.GameEvent]: 9, [key: Internal.GameEvent]: 1, [key: Internal.GameEvent]: 9, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 13, [key: Internal.GameEvent]: 2, [key: Internal.GameEvent]: 2, [key: Internal.GameEvent]: 15, [key: Internal.GameEvent]: 14, [key: Internal.GameEvent]: 2, [key: Internal.GameEvent]: 3, [key: Internal.GameEvent]: 3, [key: Internal.GameEvent]: 11, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 12, [key: Internal.GameEvent]: 5, [key: Internal.GameEvent]: 6, [key: Internal.GameEvent]: 7, [key: Internal.GameEvent]: 14, [key: Internal.GameEvent]: 11, [key: Internal.GameEvent]: 2, [key: Internal.GameEvent]: 12, [key: Internal.GameEvent]: 3, [key: Internal.GameEvent]: 9, [key: Internal.GameEvent]: 13};
        readonly RESONANCE_EVENTS: Internal.GameEvent[];
    }
    type VibrationSystem_ = VibrationSystem;
    interface ExecutorService extends Internal.Executor {
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): T;
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): Internal.List<Internal.Future<T>>;
        abstract isShutdown(): boolean;
        abstract submit<T>(arg0: Internal.Callable_<T>): Internal.Future<T>;
        abstract shutdownNow(): Internal.List<Internal.Runnable>;
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>): Internal.List<Internal.Future<T>>;
        abstract shutdown(): void;
        abstract awaitTermination(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract submit<T>(arg0: Internal.Runnable_, arg1: T): Internal.Future<T>;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>): T;
        abstract submit(arg0: Internal.Runnable_): Internal.Future<any>;
        abstract execute(arg0: Internal.Runnable_): void;
        abstract isTerminated(): boolean;
        get shutdown(): boolean
        get terminated(): boolean
    }
    type ExecutorService_ = ExecutorService;
    class ZoneOffsetTransitionRule$TimeDefinition extends Internal.Enum<Internal.ZoneOffsetTransitionRule$TimeDefinition> {
        static valueOf(arg0: string): Internal.ZoneOffsetTransitionRule$TimeDefinition;
        createDateTime(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneOffset_, arg2: Internal.ZoneOffset_): Internal.LocalDateTime;
        static values(): Internal.ZoneOffsetTransitionRule$TimeDefinition[];
        static readonly UTC: Internal.ZoneOffsetTransitionRule$TimeDefinition;
        static readonly WALL: Internal.ZoneOffsetTransitionRule$TimeDefinition;
        static readonly STANDARD: Internal.ZoneOffsetTransitionRule$TimeDefinition;
    }
    type ZoneOffsetTransitionRule$TimeDefinition_ = "standard" | ZoneOffsetTransitionRule$TimeDefinition | "utc" | "wall";
    abstract class TamableAnimal extends Internal.Animal implements Internal.OwnableEntity {
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isOrderedToSit(): boolean;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getOwner(): Internal.LivingEntity;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        isInSittingPose(): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        setTame(arg0: boolean): void;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        tame(arg0: Internal.Player_): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        setInSittingPose(arg0: boolean): void;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        setOwnerUUID(arg0: Internal.UUID_): void;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        setOrderedToSit(arg0: boolean): void;
        self(): Internal.LivingEntity;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        getOwnerUUID(): Internal.UUID;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isTame(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setDefaultMovementSpeed(speed: number): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isOwnedBy(arg0: Internal.LivingEntity_): boolean;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        serializeNBT(): Internal.CompoundTag;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDistanceSq(pos: BlockPos_): number;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        wantsToAttack(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        set defaultMovementSpeedMultiplier(speed: number)
        get orderedToSit(): boolean
        get offHandItem(): Internal.ItemStack
        get owner(): Internal.LivingEntity
        get inSittingPose(): boolean
        set tame(arg0: boolean)
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set inSittingPose(arg0: boolean)
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        set ownerUUID(arg0: Internal.UUID_)
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set orderedToSit(arg0: boolean)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get ownerUUID(): Internal.UUID
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get tame(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type TamableAnimal_ = TamableAnimal;
    class RootPlacerType <P extends Internal.RootPlacer> {
        constructor(arg0: Internal.Codec_<P>)
        codec(): Internal.Codec<P>;
        static readonly MANGROVE_ROOT_PLACER: Internal.RootPlacerType<Internal.MangroveRootPlacer>;
    }
    type RootPlacerType_<P extends Internal.RootPlacer> = RootPlacerType<P> | Special.RootPlacerType;
    interface ChannelProgressivePromise extends Internal.ChannelProgressiveFuture, Internal.ChannelPromise, Internal.ProgressivePromise<void> {
        abstract awaitUninterruptibly(): this;
        abstract isSuccess(): boolean;
        abstract sync(): this;
        abstract addListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>[]): this;
        abstract await(): this;
        abstract trySuccess(): boolean;
        abstract tryFailure(arg0: Internal.Throwable_): boolean;
        abstract awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract getNow(): void;
        abstract cause(): Internal.Throwable;
        abstract isVoid(): boolean;
        abstract await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract await(arg0: number): boolean;
        abstract setUncancellable(): boolean;
        abstract addListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>): this;
        abstract awaitUninterruptibly(arg0: number): boolean;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): void;
        abstract isCancelled(): boolean;
        abstract trySuccess(arg0: void): boolean;
        abstract removeListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>[]): this;
        abstract setProgress(arg0: number, arg1: number): this;
        abstract setSuccess(arg0: void): this;
        abstract setSuccess(): this;
        abstract unvoid(): this;
        abstract setFailure(arg0: Internal.Throwable_): this;
        abstract isDone(): boolean;
        abstract syncUninterruptibly(): this;
        abstract cancel(arg0: boolean): boolean;
        abstract channel(): io.netty.channel.Channel;
        abstract setSuccess(arg0: void): Internal.ProgressivePromise<void>;
        abstract removeListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>): this;
        abstract isCancellable(): boolean;
        abstract tryProgress(arg0: number, arg1: number): boolean;
        abstract get(): void;
        get success(): boolean
        get now(): void
        get "void"(): boolean
        get cancelled(): boolean
        set success(arg0: void)
        set failure(arg0: Internal.Throwable_)
        get done(): boolean
        set success(arg0: void)
        get cancellable(): boolean
    }
    type ChannelProgressivePromise_ = ChannelProgressivePromise;
    class ItemModelPropertiesEventJS extends Internal.StartupEventJS {
        constructor()
        /**
         * Register a model property for an item. Model properties are used to change the appearance of an item in the world.
         * 
         * More about model properties: https://minecraft.fandom.com/wiki/Model#Item_predicates
        */
        register(ingredient: Internal.Ingredient_, overwriteId: string, callback: Internal.ClampedItemPropertyFunction_): void;
        /**
         * Register a model property for all items.
        */
        registerAll(overwriteId: string, callback: Internal.ClampedItemPropertyFunction_): void;
    }
    type ItemModelPropertiesEventJS_ = ItemModelPropertiesEventJS;
    class FontManager implements Internal.AccessorFontManager, Internal.PreparableReloadListener, Internal.AutoCloseable {
        constructor(arg0: Internal.TextureManager_)
        setRenames(arg0: Internal.Map_<ResourceLocation, ResourceLocation>): void;
        close(): void;
        getName(): string;
        bookshelf$getFonts(): Internal.Map<any, any>;
        createFontFilterFishy(): Internal.Font;
        createFont(): Internal.Font;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        set renames(arg0: Internal.Map_<ResourceLocation, ResourceLocation>)
        get name(): string
        static readonly MISSING_FONT: ResourceLocation;
    }
    type FontManager_ = FontManager;
    class TickEvent$LevelTickEvent extends Internal.TickEvent {
        constructor()
        constructor(arg0: Internal.LogicalSide_, arg1: Internal.TickEvent$Phase_, arg2: Internal.Level_, arg3: Internal.BooleanSupplier_)
        haveTime(): boolean;
        readonly level: Internal.Level;
    }
    type TickEvent$LevelTickEvent_ = TickEvent$LevelTickEvent;
    class PortalInfo {
        constructor(arg0: Vec3d_, arg1: Vec3d_, arg2: number, arg3: number)
        readonly pos: Vec3d;
        readonly speed: Vec3d;
        readonly yRot: number;
        readonly xRot: number;
    }
    type PortalInfo_ = PortalInfo;
}
