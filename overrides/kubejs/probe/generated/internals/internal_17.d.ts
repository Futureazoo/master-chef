/// <reference path="./internal_*.d.ts" />
declare namespace com.starfish_studios.another_furniture.item {
    class HammerItem extends Internal.Item {
        constructor(properties: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
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
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
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
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
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
    type HammerItem_ = HammerItem;
}
declare namespace Internal {
    abstract class Stages {
        constructor(p: Internal.Player_)
        static overrideCreation(event: Internal.Consumer_<Internal.StageCreationEvent>): void;
        static create(player: Internal.Player_): Internal.Stages;
        replace(stages: Internal.Collection_<string>): void;
        static removed(event: Internal.Consumer_<Internal.StageChangeEvent>): void;
        abstract getAll(): Internal.Collection<string>;
        static added(event: Internal.Consumer_<Internal.StageChangeEvent>): void;
        add(stage: string): boolean;
        abstract addNoUpdate(arg0: string): boolean;
        static invokeAdded(stages: Internal.Stages_, stage: string): void;
        abstract removeNoUpdate(arg0: string): boolean;
        has(stage: string): boolean;
        static get(player: Internal.Player_): Internal.Stages;
        static invokeRemoved(stages: Internal.Stages_, stage: string): void;
        set(stage: string, enabled: boolean): boolean;
        toggle(stage: string): boolean;
        remove(stage: string): boolean;
        sync(): void;
        clear(): boolean;
        get all(): Internal.Collection<string>
        readonly player: Internal.Player;
    }
    type Stages_ = Stages;
    class GlassBlock extends Internal.AbstractGlassBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type GlassBlock_ = GlassBlock;
    interface AccessorStructureTemplatePool {
        abstract bookshelf$setRawTemplates(arg0: Internal.List_<Internal.Pair<Internal.StructurePoolElement, number>>): void;
        abstract bookshelf$setTemplates(arg0: Internal.ObjectArrayList_<Internal.StructurePoolElement>): void;
        abstract bookshelf$getTemplates(): Internal.ObjectArrayList<Internal.StructurePoolElement>;
        abstract bookshelf$getRawTemplates(): Internal.List<Internal.Pair<Internal.StructurePoolElement, number>>;
    }
    type AccessorStructureTemplatePool_ = AccessorStructureTemplatePool;
    class RavenousClawsItem extends Internal.LivingClawsItem implements Internal.ItemCharge, Internal.GeoItem, Internal.AttackReachIndicator {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: number, arg4: Internal.Item$Properties_)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getChargePct(arg0: Internal.ItemStack_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        getTick(arg0: any): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        getTooltipKey(arg0: Internal.ItemStack_): string;
        isPerspectiveAware(): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        consumeNutrients(arg0: Internal.ItemStack_, arg1: number): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getLivingToolActions(arg0: Internal.ItemStack_): Internal.Set<Internal.ToolAction>;
        insertNutrients(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        getLivingToolMaxActionCost(arg0: Internal.ItemStack_, arg1: Internal.LivingToolState_): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        hasCharge(arg0: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getTooltipStyle(): Internal.ColorStyles$ITooltipStyle;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handleOverrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        getLivingToolActionCost(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): number;
        getNutrientsPct(arg0: Internal.ItemStack_): number;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        setNutrients(arg0: Internal.ItemStack_, arg1: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        isValidEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        static getId(arg0: Internal.ItemStack_): number;
        setArmorToughness(armorToughness: number): void;
        getNutrients(arg0: Internal.ItemStack_): number;
        createItemStackForCreativeTab(): Internal.ItemStack;
        getTooltipColor(arg0: Internal.ItemStack_): number;
        onChargeChanged(arg0: Internal.ItemStack_, arg1: number, arg2: number): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        handleOverrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        getTooltipText(arg0: Internal.ItemStack_): Internal.MutableComponent;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        isValidNutrientFuel(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        static onReceiveKeybindingPacket(arg0: Internal.ServerLevel_, arg1: Internal.ServerPlayer_, arg2: number, arg3: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        setLivingToolState(arg0: Internal.ItemStack_, arg1: Internal.LivingToolState_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getTooltipColorWithAlpha(arg0: Internal.ItemStack_): number;
        static getEquipmentSlotTypeFrom(arg0: number): Internal.EquipmentSlot;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        addCharge(arg0: Internal.ItemStack_, arg1: number): boolean;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getBoneResetTime(): number;
        getDamage(arg0: Internal.ItemStack_): number;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLivingToolState(arg0: Internal.ItemStack_): Internal.LivingToolState;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        consumeCharge(arg0: Internal.ItemStack_, arg1: number): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        getMaxCharge(arg0: Internal.ItemStack_): number;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        setCharge(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        addNutrients(arg0: Internal.ItemStack_, arg1: number): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getCharge(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        get perspectiveAware(): boolean
        get creativeTab(): string
        get tooltipStyle(): Internal.ColorStyles$ITooltipStyle
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set armorKnockbackResistance(knockbackResistance: number)
        get boneResetTime(): number
        get mod(): string
        set armorProtection(armorProtection: number)
    }
    type RavenousClawsItem_ = RavenousClawsItem;
    class Pillager extends Internal.AbstractIllager implements Internal.InventoryCarrier, Internal.CrossbowAttackMob {
        constructor(arg0: Internal.EntityType_<Internal.Pillager>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getInventory(): Internal.SimpleContainer;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
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
        setChargingCrossbow(arg0: boolean): void;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isChargingCrossbow(): boolean;
        getTotalMovementSpeed(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        getProjectileShotVector(arg0: Internal.LivingEntity_, arg1: Vec3d_, arg2: number): Vec3f;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        static pickUpItem(arg0: Internal.Mob_, arg1: Internal.InventoryCarrier_, arg2: Internal.ItemEntity_): void;
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
        readInventoryFromTag(arg0: Internal.CompoundTag_): void;
        self(): Internal.LivingEntity;
        writeInventoryToTag(arg0: Internal.CompoundTag_): void;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        shootCrossbowProjectile(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: Internal.Projectile_, arg3: number): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): net.minecraft.network.chat.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        shootCrossbowProjectile(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_, arg2: Internal.Projectile_, arg3: number, arg4: number): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        performCrossbowAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        onCrossbowAttackPerformed(): void;
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
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
        tell(message: net.minecraft.network.chat.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        get inventory(): Internal.SimpleContainer
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set chargingCrossbow(arg0: boolean)
        set y(y: number)
        get living(): boolean
        get chargingCrossbow(): boolean
        get totalMovementSpeed(): number
        get displayName(): net.minecraft.network.chat.Component
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
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
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
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type Pillager_ = Pillager;
    interface ExtraModelData$Builder {
        abstract build(): Internal.ExtraModelData;
        abstract "with"<A>(arg0: Internal.ModelDataKey_<A>, arg1: A): this;
    }
    type ExtraModelData$Builder_ = ExtraModelData$Builder;
    class TinyMap <K, V> extends Internal.Record {
        constructor(map: Internal.TinyMap_<K, V>)
        constructor(entries: any_<K, V>[])
        constructor(collection: Internal.Collection_<any>)
        entries(): any[];
        isEmpty(): boolean;
        static ofMap<K, V>(map: Internal.Map_<K, V>): Internal.TinyMap<K, V>;
        get empty(): boolean
    }
    type TinyMap_<K, V> = TinyMap<K, V>;
    class LoggerContext extends Internal.AbstractLifeCycle implements Internal.ConfigurationListener, Internal.LoggerContextShutdownEnabled, org.apache.logging.log4j.spi.LoggerContext, Internal.AutoCloseable, Internal.Terminable {
        constructor(name: string, externalContext: any, configLocn: Internal.URI_)
        constructor(name: string, externalContext: any, configLocn: string)
        constructor(name: string, externalContext: any)
        constructor(name: string)
        getLoggerRegistry(): Internal.LoggerRegistry<Internal.Logger>;
        removeFilter(filter: Internal.Filter_): void;
        hasLogger(name: string): boolean;
        getConfiguration(): org.apache.logging.log4j.core.config.Configuration;
        putObject(key: string, value: any): any;
        terminate(): void;
        getLogger(cls: typeof any, messageFactory: Internal.MessageFactory_): Internal.ExtendedLogger;
        getLogger(name: string, messageFactory: Internal.MessageFactory_): Internal.Logger;
        removeObject(key: string, value: any): boolean;
        static getContext(currentContext: boolean): Internal.LoggerContext;
        setName(name: string): void;
        getName(): string;
        setExternalContext(context: any): void;
        setConfigLocation(configLocation: Internal.URI_): void;
        addFilter(filter: Internal.Filter_): void;
        getRootLogger(): Internal.Logger;
        getLoggers(): Internal.Collection<Internal.Logger>;
        static getContext(): Internal.LoggerContext;
        reconfigure(): void;
        getLogger(cls: typeof any): Internal.ExtendedLogger;
        static getContext(loader: Internal.ClassLoader_, currentContext: boolean, configLocation: Internal.URI_): Internal.LoggerContext;
        setConfiguration(config: org.apache.logging.log4j.core.config.Configuration_): org.apache.logging.log4j.core.config.Configuration;
        getLogger(name: string): Internal.Logger;
        putObjectIfAbsent(key: string, value: any): any;
        getConfigLocation(): Internal.URI;
        hasLogger(name: string, messageFactoryClass: typeof Internal.MessageFactory): boolean;
        getExternalContext(): any;
        addShutdownListener(listener: Internal.LoggerContextShutdownAware_): void;
        reconfigure(configuration: org.apache.logging.log4j.core.config.Configuration_): void;
        hasLogger(name: string, messageFactory: Internal.MessageFactory_): boolean;
        getListeners(): Internal.List<Internal.LoggerContextShutdownAware>;
        updateLoggers(config: org.apache.logging.log4j.core.config.Configuration_): void;
        removePropertyChangeListener(listener: Internal.PropertyChangeListener_): void;
        getObject(key: string): any;
        start(config: org.apache.logging.log4j.core.config.Configuration_): void;
        updateLoggers(): void;
        close(): void;
        onChange(reconfigurable: Internal.Reconfigurable_): void;
        addPropertyChangeListener(listener: Internal.PropertyChangeListener_): void;
        removeObject(key: string): any;
        get loggerRegistry(): Internal.LoggerRegistry<Internal.Logger>
        get configuration(): org.apache.logging.log4j.core.config.Configuration
        set name(name: string)
        get name(): string
        set externalContext(context: any)
        set configLocation(configLocation: Internal.URI_)
        get rootLogger(): Internal.Logger
        get loggers(): Internal.Collection<Internal.Logger>
        get context(): Internal.LoggerContext
        set configuration(config: org.apache.logging.log4j.core.config.Configuration_)
        get configLocation(): Internal.URI
        get externalContext(): any
        get listeners(): Internal.List<Internal.LoggerContextShutdownAware>
        static readonly PROPERTY_CONFIG: "config";
    }
    type LoggerContext_ = LoggerContext;
    interface GameRendererAccessor {
        abstract create$callGetFov(arg0: Internal.Camera_, arg1: number, arg2: boolean): number;
        (arg0: Internal.Camera, arg1: number, arg2: boolean): number;
    }
    type GameRendererAccessor_ = GameRendererAccessor;
    class Of2 <A, B> {
    }
    type Of2_<A, B> = [A, B] | [B, A];
    class SpriteContents$FrameInfo {
        readonly index: number;
        readonly time: number;
    }
    type SpriteContents$FrameInfo_ = SpriteContents$FrameInfo;
    interface OutputReplacement {
        replaceOutput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, original: Internal.OutputReplacement_): any;
        transform(transformer: Internal.OutputReplacementTransformer_): Internal.OutputReplacementTransformer$Replacement;
        of(o: any): this;
    }
    type OutputReplacement_ = OutputItem_ | OutputReplacement;
    class FlowerBlock extends Internal.BushBlock implements Internal.SuspiciousEffectHolder {
        constructor(arg0: Internal.MobEffect_, arg1: number, arg2: Internal.BlockBehaviour$Properties_)
        constructor(arg0: Internal.Supplier_<Internal.MobEffect>, arg1: number, arg2: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getSuspiciousEffect(): Internal.MobEffect;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        static tryGet(arg0: Internal.ItemLike_): Internal.SuspiciousEffectHolder;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getEffectDuration(): number;
        static getAllEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get suspiciousEffect(): Internal.MobEffect
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get effectDuration(): number
        get allEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>
    }
    type FlowerBlock_ = FlowerBlock;
    abstract class SimpleJsonResourceReloadListener extends Internal.SimplePreparableReloadListener<Internal.Map<ResourceLocation, Internal.JsonElement>> {
        constructor(arg0: Internal.Gson_, arg1: string)
        static scanDirectory(arg0: Internal.ResourceManager_, arg1: string, arg2: Internal.Gson_, arg3: Internal.Map_<ResourceLocation, Internal.JsonElement>): void;
        getName(): string;
        get name(): string
    }
    type SimpleJsonResourceReloadListener_ = SimpleJsonResourceReloadListener;
    abstract class DisplaySource extends Internal.DisplayBehaviour {
        constructor()
        onSignalReset(arg0: Internal.DisplayLinkContext_): void;
        getName(): net.minecraft.network.chat.Component;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_): void;
        initConfigurationWidgets(arg0: Internal.DisplayLinkContext_, arg1: Internal.ModularGuiLineBuilder_, arg2: boolean): void;
        shouldPassiveReset(): boolean;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_, arg3: number): void;
        abstract provideText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.MutableComponent>;
        getPassiveRefreshTicks(): number;
        provideFlapDisplayText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.List<Internal.MutableComponent>>;
        populateData(arg0: Internal.DisplayLinkContext_): void;
        transferData(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTarget_, arg2: number): void;
        get name(): net.minecraft.network.chat.Component
        get passiveRefreshTicks(): number
        static readonly EMPTY: [Internal.MutableComponent];
        static readonly EMPTY_LINE: Internal.MutableComponent;
        static readonly WHITESPACE: Internal.MutableComponent;
    }
    type DisplaySource_ = DisplaySource;
    class LangBuilder {
        constructor(arg0: string)
        text(arg0: string): this;
        json(): string;
        forGoggles(arg0: Internal.List_<Internal.MutableComponent>, arg1: number): void;
        component(): Internal.MutableComponent;
        addTo(arg0: Internal.List_<Internal.MutableComponent>): void;
        add(arg0: Internal.MutableComponent_): this;
        string(): string;
        sendStatus(arg0: Internal.Player_): void;
        add(arg0: Internal.LangBuilder_): this;
        sendChat(arg0: Internal.Player_): void;
        text(arg0: number, arg1: string): this;
        forGoggles(arg0: Internal.List_<Internal.MutableComponent>): void;
        text(arg0: Internal.ChatFormatting_, arg1: string): this;
        space(): this;
        style(arg0: Internal.ChatFormatting_): this;
        newLine(): this;
        translate(arg0: string, ...arg1: any[]): this;
        color(arg0: number): this;
    }
    type LangBuilder_ = LangBuilder;
    class EdgePointType <T extends Internal.TrackEdgePoint> {
        constructor(arg0: ResourceLocation_, arg1: Internal.Supplier_<T>)
        getId(): ResourceLocation;
        static register<T extends Internal.TrackEdgePoint>(arg0: ResourceLocation_, arg1: Internal.Supplier_<T>): Internal.EdgePointType<T>;
        create(): T;
        static read(arg0: Internal.FriendlyByteBuf_, arg1: Internal.DimensionPalette_): Internal.TrackEdgePoint;
        get id(): ResourceLocation
        static readonly OBSERVER: Internal.EdgePointType<Internal.TrackObserver>;
        static readonly TYPES: {[key: ResourceLocation]: Internal.EdgePointType<any>, [key: ResourceLocation]: Internal.EdgePointType<any>, [key: ResourceLocation]: Internal.EdgePointType<any>, [key: ResourceLocation]: Internal.EdgePointType<any>, [key: ResourceLocation]: Internal.EdgePointType<any>};
        static readonly STATION: Internal.EdgePointType<Internal.GlobalStation>;
        static readonly SIGNAL: Internal.EdgePointType<Internal.SignalBoundary>;
    }
    type EdgePointType_<T extends Internal.TrackEdgePoint> = EdgePointType<T>;
    class ComfortEffect extends Internal.MobEffect {
        constructor()
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type ComfortEffect_ = ComfortEffect;
    class StoolBlock extends com.starfish_studios.another_furniture.block.SeatBlock implements Internal.SimpleWaterloggedBlock, Internal.HammerableBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getUseSound(): Internal.SoundEvent;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        tryHammerBlock(property: Internal.Property_<any>, state: Internal.BlockState_, level: Internal.LevelAccessor_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        updateAfterCycle(state: Internal.BlockState_, level: Internal.LevelAccessor_, pos: BlockPos_): Internal.BlockState;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get useSound(): Internal.SoundEvent
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly LOW: Internal.BooleanProperty;
    }
    type StoolBlock_ = StoolBlock;
    class MemoryStatus extends Internal.Enum<Internal.MemoryStatus> {
        static valueOf(arg0: string): Internal.MemoryStatus;
        static values(): Internal.MemoryStatus[];
        static readonly VALUE_PRESENT: Internal.MemoryStatus;
        static readonly VALUE_ABSENT: Internal.MemoryStatus;
        static readonly REGISTERED: Internal.MemoryStatus;
    }
    type MemoryStatus_ = "value_present" | MemoryStatus | "value_absent" | "registered";
    class WardenEntitySensor extends Internal.NearestLivingEntitySensor<Internal.Warden> {
        constructor()
    }
    type WardenEntitySensor_ = WardenEntitySensor;
    class FluidCollisionEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.FluidState_)
        getFluid(): Internal.FluidState;
        get fluid(): Internal.FluidState
    }
    type FluidCollisionEvent_ = FluidCollisionEvent;
    abstract class ItemStackRenderer extends Internal.BlockEntityWithoutLevelRenderer {
        getName(): string;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get name(): string
    }
    type ItemStackRenderer_ = ItemStackRenderer;
    class TeslaCoilBlockEntity extends Internal.BaseElectricBlockEntity implements Internal.IHaveGoggleInformation {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        isPoweredState(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        tickAudio(): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getConsumption(): number;
        getModelData(): Internal.ModelData;
        addToGoggleTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean): boolean;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        find(arg0: Internal.RecipeWrapper_, arg1: Internal.Level_): Internal.Optional<Internal.ChargingRecipe>;
        get poweredState(): boolean
        get consumption(): number
        get modelData(): Internal.ModelData
        processingBehaviour: Internal.BeltProcessingBehaviour;
    }
    type TeslaCoilBlockEntity_ = TeslaCoilBlockEntity;
    class ServerboundSetCreativeModeSlotPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: Internal.ItemStack_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getItem(): Internal.ItemStack;
        getSlotNum(): number;
        isSkippable(): boolean;
        get item(): Internal.ItemStack
        get slotNum(): number
        get skippable(): boolean
    }
    type ServerboundSetCreativeModeSlotPacket_ = ServerboundSetCreativeModeSlotPacket;
    class FluidState extends Internal.StateHolder<Internal.Fluid, Internal.FluidState> implements Internal.IForgeFluidState {
        constructor(arg0: Internal.Fluid_, arg1: Internal.ImmutableMap_<Internal.Property<any>, Internal.Comparable<any>>, arg2: Internal.MapCodec_<Internal.FluidState>)
        getType(): Internal.Fluid;
        isSource(): boolean;
        getShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        move(arg0: Internal.LivingEntity_, arg1: Vec3d_, arg2: number): boolean;
        canConvertToSource(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: boolean): Internal.BlockPathTypes;
        getHeight(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        isEmpty(): boolean;
        getFluidType(): Internal.FluidType;
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_): Vec3d;
        createLegacyBlock(): Internal.BlockState;
        holder(): Internal.Holder<Internal.Fluid>;
        isSourceOfType(arg0: Internal.Fluid_): boolean;
        getTags(): Internal.Stream<Internal.TagKey<Internal.Fluid>>;
        getAmount(): number;
        isRandomlyTicking(): boolean;
        getOwnHeight(): number;
        tick(arg0: Internal.Level_, arg1: BlockPos_): void;
        is(arg0: Internal.HolderSet_<Internal.Fluid>): boolean;
        getDripParticle(): Internal.ParticleOptions;
        canExtinguish(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        shouldRenderBackwardUpFace(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        is(arg0: Internal.Fluid_): boolean;
        canBeReplacedWith(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Fluid_, arg3: Internal.Direction_): boolean;
        canHydrate(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: BlockPos_): boolean;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        randomTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        animateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        get type(): Internal.Fluid
        get source(): boolean
        get empty(): boolean
        get fluidType(): Internal.FluidType
        get tags(): Internal.Stream<Internal.TagKey<Internal.Fluid>>
        get amount(): number
        get randomlyTicking(): boolean
        get ownHeight(): number
        get dripParticle(): Internal.ParticleOptions
        /**
         * @deprecated
        */
        get explosionResistance(): number
        static readonly AMOUNT_FULL: 8;
        static readonly AMOUNT_MAX: 9;
        static readonly CODEC: Internal.Codec<Internal.FluidState>;
    }
    type FluidState_ = FluidState;
    class ChunkAccess$TicksToSave extends Internal.Record {
        constructor(blocks: Internal.SerializableTickContainer_<Internal.Block>, fluids: Internal.SerializableTickContainer_<Internal.Fluid>)
        fluids(): Internal.SerializableTickContainer<Internal.Fluid>;
        blocks(): Internal.SerializableTickContainer<Internal.Block>;
    }
    type ChunkAccess$TicksToSave_ = ChunkAccess$TicksToSave;
    abstract class GeneratingKineticBlockEntity extends Internal.KineticBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        updateGeneratedRotation(): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        applyNewSpeed(arg0: number, arg1: number): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        createNetworkId(): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
        reActivateSource: boolean;
    }
    type GeneratingKineticBlockEntity_ = GeneratingKineticBlockEntity;
    class SoundSource extends Internal.Enum<Internal.SoundSource> {
        static valueOf(arg0: string): Internal.SoundSource;
        static values(): Internal.SoundSource[];
        getName(): string;
        get name(): string
        static readonly HOSTILE: Internal.SoundSource;
        static readonly MUSIC: Internal.SoundSource;
        static readonly RECORDS: Internal.SoundSource;
        static readonly NEUTRAL: Internal.SoundSource;
        static readonly MASTER: Internal.SoundSource;
        static readonly BLOCKS: Internal.SoundSource;
        static readonly PLAYERS: Internal.SoundSource;
        static readonly WEATHER: Internal.SoundSource;
        static readonly AMBIENT: Internal.SoundSource;
        static readonly VOICE: Internal.SoundSource;
    }
    type SoundSource_ = SoundSource | "records" | "weather" | "neutral" | "music" | "players" | "blocks" | "ambient" | "master" | "voice" | "hostile";
    class MeteoriteCompassItem extends Internal.AEBaseItem {
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
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
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
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
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
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
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
    type MeteoriteCompassItem_ = MeteoriteCompassItem;
    class Frustum {
        constructor(arg0: Internal.Frustum_)
        constructor(arg0: Matrix4f_, arg1: Matrix4f_)
        prepare(arg0: number, arg1: number, arg2: number): void;
        isVisible(arg0: Internal.AABB_): boolean;
        offsetToFullyIncludeCameraCube(arg0: number): this;
        static readonly OFFSET_STEP: 4;
    }
    type Frustum_ = Frustum;
    class DiscoveredPath {
        constructor(arg0: number, arg1: number, arg2: Internal.List_<Internal.Couple<Internal.TrackNode>>, arg3: Internal.GlobalStation_)
        path: Internal.List<Internal.Couple<Internal.TrackNode>>;
        destination: Internal.GlobalStation;
        cost: number;
        distance: number;
    }
    type DiscoveredPath_ = DiscoveredPath;
    class ChunkDataEvent extends Internal.ChunkEvent {
        constructor()
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.CompoundTag_)
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.LevelAccessor_, arg2: Internal.CompoundTag_)
        getData(): Internal.CompoundTag;
        get data(): Internal.CompoundTag
    }
    type ChunkDataEvent_ = ChunkDataEvent;
    class KeyModifiers {
        constructor(m: number)
        start(): boolean;
        numLock(): boolean;
        alt(): boolean;
        control(): boolean;
        capsLock(): boolean;
        onlyControl(): boolean;
        shift(): boolean;
        static readonly NONE: Internal.KeyModifiers;
        readonly modifiers: number;
    }
    type KeyModifiers_ = KeyModifiers;
    abstract class AgeableMob extends Internal.PathfinderMob implements Internal.AgeableMobAccessor {
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
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
        getAge(): number;
        getTotalMovementSpeed(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        ageUp(arg0: number, arg1: boolean): void;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        setAge(arg0: number): void;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        abstract getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): this;
        biomancy$getForcedAge(): number;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        biomancy$setForcedAge(arg0: number): void;
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
        getName(): net.minecraft.network.chat.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
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
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        canBreed(): boolean;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        ageUp(arg0: number): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
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
        get age(): number
        get totalMovementSpeed(): number
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        set age(arg0: number)
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
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
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
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        static readonly BABY_START_AGE: -24000;
    }
    type AgeableMob_ = AgeableMob;
    interface Instance {
        abstract getWorldPosition(): BlockPos;
        get worldPosition(): BlockPos
        (): BlockPos_;
    }
    type Instance_ = Instance;
    class ClientLevel extends Internal.Level implements Internal.ClientLevelKJS, Internal.ClientLevelExtension {
        constructor(arg0: Internal.ClientPacketListener_, arg1: Internal.ClientLevel$ClientLevelData_, arg2: Internal.ResourceKey_<Internal.Level>, arg3: Internal.Holder_<Internal.DimensionType>, arg4: number, arg5: number, arg6: Internal.Supplier_<Internal.ProfilerFiller>, arg7: Internal.LevelRenderer_, arg8: boolean, arg9: number)
        tickNonPassenger(arg0: Internal.Entity_): void;
        effects(): Internal.DimensionSpecialEffects;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        dayTime(): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getMaxSection(): number;
        setDefaultSpawnPos(arg0: BlockPos_, arg1: number): void;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        unload(arg0: Internal.LevelChunk_): void;
        getSectionYFromSectionIndex(arg0: number): number;
        tick(arg0: Internal.BooleanSupplier_): void;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        playSound(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_): void;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getTimeOfDay(arg0: number): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        blockUpdated(arg0: BlockPos_, arg1: Internal.Block_): void;
        runCommandSilent(command: string): number;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_): Internal.List<T>;
        getEntityCount(): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        setDayTime(arg0: number): void;
        handleBlockChangedAck(arg0: number): void;
        getMinBuildHeight(): number;
        clearTintCaches(): void;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        setGameTime(arg0: number): void;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        queueLightUpdate(arg0: Internal.Runnable_): void;
        calculateBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        getLevelData(): Internal.ClientLevel$ClientLevelData;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: number, arg2: number, arg3: number): Internal.Player;
        getMaxBuildHeight(): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number): void;
        getChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        addFreshEntity(arg0: Internal.Entity_): boolean;
        putNonPlayerEntity(arg0: number, arg1: Internal.Entity_): void;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getSkyFlashTime(): number;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        entitiesForRendering(): Internal.Iterable<Internal.Entity>;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        getHeight(): number;
        getSkyDarken(arg0: number): number;
        animateTick(arg0: number, arg1: number, arg2: number): void;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number, arg3: Internal.TickPriority_): void;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        tickEntities(): void;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Internal.Player;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getMinSection(): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getChunkSource(): Internal.ClientChunkCache;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        flywheel$getAllLoadedEntities(): Internal.Iterable<any>;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Internal.Player;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        setScoreboard(arg0: Internal.Scoreboard_): void;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getDimension(): ResourceLocation;
        getName(): net.minecraft.network.chat.Component;
        getDifficulty(): Internal.Difficulty;
        canSeeSky(arg0: BlockPos_): boolean;
        getCloudColor(arg0: number): Vec3d;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        getPlayerByUUID(arg0: Internal.UUID_): Internal.Player;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        getSectionsCount(): number;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Internal.Player>;
        getSectionIndexFromSectionY(arg0: number): number;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        self(): Internal.Level;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        getBestNeighborSignal(arg0: BlockPos_): number;
        doAnimateTick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.RandomSource_, arg5: Internal.Block_, arg6: Internal.BlockPos$MutableBlockPos_): void;
        static cast(arg0: Internal.ClientLevel_): Internal.ClientLevelExtension;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        getSkyColor(arg0: Vec3d_, arg1: number): Vec3d;
        getMoonBrightness(): number;
        noCollision(arg0: Internal.AABB_): boolean;
        setServerSimulationDistance(arg0: number): void;
        isWaterAt(arg0: BlockPos_): boolean;
        isLightUpdateQueueEmpty(): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        getSide(): Internal.ScriptType;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        removeEntity(arg0: number, arg1: Internal.Entity$RemovalReason_): void;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        isOutsideBuildHeight(arg0: number): boolean;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        overrideMapData(arg0: string, arg1: Internal.MapItemSavedData_): void;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        setServerVerifiedBlockState(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number): void;
        pollLightUpdates(): void;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        getServerSimulationDistance(): number;
        onChunkLoaded(arg0: Internal.ChunkPos_): void;
        addPlayer(arg0: number, arg1: Internal.AbstractClientPlayer_): void;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: BlockPos_): void;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        syncBlockState(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Vec3d_): void;
        getMaxLightLevel(): number;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        isOverworld(): boolean;
        runCommand(command: string): number;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        getStarBrightness(arg0: number): number;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get maxSection(): number
        get entityCount(): number
        set dayTime(arg0: number)
        get minBuildHeight(): number
        set gameTime(arg0: number)
        get displayName(): net.minecraft.network.chat.Component
        get levelData(): Internal.ClientLevel$ClientLevelData
        get maxBuildHeight(): number
        get skyFlashTime(): number
        get height(): number
        get minSection(): number
        get chunkSource(): Internal.ClientChunkCache
        set scoreboard(arg0: Internal.Scoreboard_)
        get dimension(): ResourceLocation
        get name(): net.minecraft.network.chat.Component
        get difficulty(): Internal.Difficulty
        get moonPhase(): number
        get sectionsCount(): number
        get moonBrightness(): number
        set serverSimulationDistance(arg0: number)
        get lightUpdateQueueEmpty(): boolean
        get side(): Internal.ScriptType
        get entities(): Internal.EntityArrayList
        get serverSimulationDistance(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get players(): Internal.EntityArrayList
        get maxLightLevel(): number
        get overworld(): boolean
    }
    type ClientLevel_ = ClientLevel;
    class EnderHandItem extends Internal.RelicItem {
        constructor()
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setExperience(arg0: Internal.ItemStack_, arg1: number): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canSync(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setAbilitiesTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getStatData(arg0: string, arg1: string): Internal.StatData;
        getAbilityQuality(arg0: Internal.ItemStack_, arg1: string): number;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canUseAbility(arg0: Internal.ItemStack_, arg1: string): boolean;
        getRelicQuality(arg0: Internal.ItemStack_): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canUnequip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): void;
        getExperienceLeftForLevel(arg0: Internal.ItemStack_, arg1: number): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setLevel(arg0: Internal.ItemStack_, arg1: number): void;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getSlotModifiers(arg0: Internal.ItemStack_): Internal.RelicSlotModifier;
        curioTick(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getLevelFromExperience(arg0: Internal.ItemStack_, arg1: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getLootingBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        tickActiveAbilitySelection(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: string): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAbilityPoints(arg0: Internal.ItemStack_, arg1: string): number;
        getItem(): Internal.Item;
        addAbilityPoints(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        showAttributesTooltip(arg0: string, arg1: Internal.ItemStack_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setAbilityTicking(arg0: Internal.ItemStack_, arg1: string, arg2: boolean): void;
        addExperience(arg0: Internal.ItemStack_, arg1: number): boolean;
        onEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        canUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        testAbilityCastPredicates(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        writeSyncData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        readSyncData(arg0: Internal.CompoundTag_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canSync(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): boolean;
        setAbilityPoints(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        setPoints(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFortuneBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        getExperienceBetweenLevels(arg0: Internal.ItemStack_, arg1: number, arg2: number): number;
        mayUpgrade(arg0: Internal.ItemStack_, arg1: string): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        mayPlayerReroll(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onEquip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getRelicData(): Internal.RelicData;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isAbilityTicking(arg0: Internal.ItemStack_, arg1: string): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioTick(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getExchanges(arg0: Internal.ItemStack_): number;
        setDigSpeed(speed: number): void;
        isAbilityMaxLevel(arg0: Internal.ItemStack_, arg1: string): boolean;
        setAttackSpeed(attackSpeed: number): void;
        isEnderMask(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getLevel(arg0: Internal.ItemStack_): number;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getStatQuality(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getEquipSound(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.ICurio$SoundInfo;
        canPlayerUseActiveAbility(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        setRelicData(arg0: Internal.RelicData_): void;
        getAbilityCastPredicates(arg0: string): Internal.CastPredicate;
        isMaxLevel(arg0: Internal.ItemStack_): boolean;
        addExchanges(arg0: Internal.ItemStack_, arg1: number): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        curioBreak(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        addAbilityCooldown(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        addPoints(arg0: Internal.ItemStack_, arg1: number): void;
        getStatByQuality(arg0: string, arg1: string, arg2: number): number;
        mayPlayerUpgrade(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        getRerollRequiredExperience(arg0: string): number;
        arch$registryName(): ResourceLocation;
        getAbilitiesTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        getDropRule(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: number, arg3: boolean, arg4: Internal.ItemStack_): Internal.ICurio$DropRule;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        randomizeStat(arg0: Internal.ItemStack_, arg1: string, arg2: string): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAbilityCooldown(arg0: Internal.ItemStack_, arg1: string): number;
        getMaxQuality(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onUnequip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        setAbilityTag(arg0: Internal.ItemStack_, arg1: string, arg2: Internal.CompoundTag_): void;
        getExperience(arg0: Internal.ItemStack_): number;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDropRule(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): Internal.ICurio$DropRule;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        playRightClickEquipSound(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): void;
        setAbilityTempTag(arg0: Internal.ItemStack_, arg1: string, arg2: Internal.CompoundTag_): void;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        hasCurioCapability(arg0: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getLevelingTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        isExchangeAvailable(arg0: Internal.Player_, arg1: Internal.ItemStack_): boolean;
        getAttributeModifiers(arg0: Internal.ItemStack_): Internal.RelicAttributeModifier;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getAbilityCooldownCap(arg0: Internal.ItemStack_, arg1: string): number;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        testAbilityCastPredicate(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string, arg3: string): boolean;
        mayPlayerReset(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        mayReroll(arg0: Internal.ItemStack_, arg1: string): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        getAbilityCastPredicate(arg0: string, arg1: string): Internal.PredicateEntry;
        getAbilityData(arg0: string): Internal.AbilityData;
        setAbilityCooldownCap(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getAbilityTempTag(arg0: Internal.ItemStack_, arg1: string): Internal.CompoundTag;
        getExchangeCost(arg0: Internal.ItemStack_): number;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLootData(): Internal.LootData;
        getPoints(arg0: Internal.ItemStack_): number;
        appendConfig(arg0: Internal.ConfigContext_): void;
        isItemResearched(arg0: Internal.Player_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioBreak(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getResetRequiredExperience(arg0: Internal.ItemStack_, arg1: string): number;
        setArmorToughness(armorToughness: number): void;
        setItemResearched(arg0: Internal.Player_, arg1: boolean): void;
        setAbilityCooldown(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getUpgradeRequiredExperience(arg0: Internal.ItemStack_, arg1: string): number;
        dropAllocableExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAbilityInitialValues(arg0: Internal.ItemStack_, arg1: string): Internal.Map<string, number>;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getAbilityInitialValue(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioAnimate(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getConfig(): Internal.OctoConfig;
        readSyncData(arg0: Internal.SlotContext_, arg1: Internal.CompoundTag_, arg2: Internal.ItemStack_): void;
        writeSyncData(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.CompoundTag;
        getLootingLevel(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.ItemStack_): number;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        dropExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: number): void;
        dropAllocableExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number, arg4: number): void;
        getFortuneLevel(arg0: Internal.SlotContext_, arg1: Internal.LootContext_, arg2: Internal.ItemStack_): number;
        getAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        dropExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        addExperience(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: number): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        onUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        addAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): void;
        addLevel(arg0: Internal.ItemStack_, arg1: number): void;
        setLevelingTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getDamage(arg0: Internal.ItemStack_): number;
        getSlotsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        randomizeStats(arg0: Internal.ItemStack_, arg1: string): void;
        getLevelingData(): Internal.LevelingData;
        setExchanges(arg0: Internal.ItemStack_, arg1: number): void;
        getMod(): string;
        makesPiglinsNeutral(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getTotalExperienceForLevel(arg0: Internal.ItemStack_, arg1: number): number;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        mayReset(arg0: Internal.ItemStack_, arg1: string): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributeModifiers(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getAbilityTag(arg0: Internal.ItemStack_, arg1: string): Internal.CompoundTag;
        isAbilityOnCooldown(arg0: Internal.ItemStack_, arg1: string): boolean;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get item(): Internal.Item
        get relicData(): Internal.RelicData
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set relicData(arg0: Internal.RelicData_)
        set armorKnockbackResistance(knockbackResistance: number)
        get maxQuality(): number
        get creativeTab(): string
        get lootData(): Internal.LootData
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get config(): Internal.OctoConfig
        get levelingData(): Internal.LevelingData
        get mod(): string
        set armorProtection(armorProtection: number)
    }
    type EnderHandItem_ = EnderHandItem;
    class PermissionNode <T> {
        constructor(arg0: ResourceLocation_, arg1: Internal.PermissionType_<T>, arg2: Internal.PermissionNode$PermissionResolver_<T>, ...arg3: any_<any>[])
        constructor(arg0: string, arg1: string, arg2: Internal.PermissionType_<T>, arg3: Internal.PermissionNode$PermissionResolver_<T>, ...arg4: any_<any>[])
        getDefaultResolver(): Internal.PermissionNode$PermissionResolver<T>;
        getReadableName(): net.minecraft.network.chat.Component;
        setInformation(arg0: net.minecraft.network.chat.Component_, arg1: net.minecraft.network.chat.Component_): Internal.PermissionNode<any>;
        getType(): Internal.PermissionType<T>;
        getDynamics(): any[];
        getNodeName(): string;
        getDescription(): net.minecraft.network.chat.Component;
        get defaultResolver(): Internal.PermissionNode$PermissionResolver<T>
        get readableName(): net.minecraft.network.chat.Component
        get type(): Internal.PermissionType<T>
        get dynamics(): any[]
        get nodeName(): string
        get description(): net.minecraft.network.chat.Component
    }
    type PermissionNode_<T> = PermissionNode<T>;
    class CertusQuartzClusterBlock extends Internal.AEBaseBlock implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: number, arg1: number, arg2: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getOrientation(arg0: Internal.BlockState_): Internal.BlockOrientation;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type CertusQuartzClusterBlock_ = CertusQuartzClusterBlock;
    class DeserializationContext {
        constructor(arg0: ResourceLocation_, arg1: Internal.LootDataManager_)
        deserializeConditions(arg0: Internal.JsonArray_, arg1: string, arg2: Internal.LootContextParamSet_): Internal.LootItemCondition[];
        getAdvancementId(): ResourceLocation;
        get advancementId(): ResourceLocation
    }
    type DeserializationContext_ = DeserializationContext;
    class ClientChatEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: string)
        getMessage(): string;
        setMessage(arg0: string): void;
        getOriginalMessage(): string;
        get message(): string
        set message(arg0: string)
        get originalMessage(): string
    }
    type ClientChatEvent_ = ClientChatEvent;
    interface JarMetadata {
        abstract name(): string;
        abstract version(): string;
        from(arg0: Internal.SecureJar_, ...arg1: Internal.Path_[]): this;
        abstract descriptor(): Internal.ModuleDescriptor;
        fromFileName(arg0: Internal.Path_, arg1: Internal.Set_<string>, arg2: Internal.List_<Internal.SecureJar$Provider>): Internal.SimpleJarMetadata;
        readonly LEADING_DOTS: Internal.Pattern;
        readonly NUMBERLIKE_PARTS: Internal.Pattern;
        readonly MODULE_VERSION: Internal.Pattern;
        readonly KEYWORD_PARTS: Internal.Pattern;
        readonly TRAILING_DOTS: Internal.Pattern;
        readonly ILLEGAL_KEYWORDS: ["abstract", "continue", "for", "new", "switch", "assert", "default", "goto", "package", "synchronized", "boolean", "do", "if", "private", "this", "break", "double", "implements", "protected", "throw", "byte", "else", "import", "public", "throws", "case", "enum", "instanceof", "return", "transient", "catch", "extends", "int", "short", "try", "char", "final", "interface", "static", "void", "class", "finally", "long", "strictfp", "volatile", "const", "float", "native", "super", "while"];
        readonly DASH_VERSION: Internal.Pattern;
        readonly NON_ALPHANUM: Internal.Pattern;
        readonly REPEATING_DOTS: Internal.Pattern;
    }
    type JarMetadata_ = JarMetadata;
    class ForbiddenSymlinkInfo extends Internal.Record {
        constructor(arg0: Internal.Path_, arg1: Internal.Path_)
        link(): Internal.Path;
        target(): Internal.Path;
    }
    type ForbiddenSymlinkInfo_ = ForbiddenSymlinkInfo;
    class CreativeCrateBlockEntity extends Internal.CrateBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        createFilter(): Internal.FilteringBehaviour;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
    }
    type CreativeCrateBlockEntity_ = CreativeCrateBlockEntity;
    interface MenuLocator {
        abstract locate<T>(arg0: Internal.Player_, arg1: T): T;
        (arg0: Internal.Player, arg1: T): T;
    }
    type MenuLocator_ = MenuLocator;
    interface SmithingRecipe extends Internal.Recipe<net.minecraft.world.Container> {
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        abstract isBaseIngredient(arg0: Internal.ItemStack_): boolean;
        abstract assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        abstract getId(): ResourceLocation;
        abstract matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        abstract getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        abstract isTemplateIngredient(arg0: Internal.ItemStack_): boolean;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        abstract isAdditionIngredient(arg0: Internal.ItemStack_): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type SmithingRecipe_ = SmithingRecipe;
    interface OwnableEntityBlock extends Internal.EntityBlock {
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        appendUserListToTooltip(arg0: Internal.CompoundTag_, arg1: Internal.List_<net.minecraft.network.chat.Component>): void;
        abstract newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        dropForCreativePlayer(arg0: Internal.Level_, arg1: Internal.Block_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        appendUserListToTooltip(arg0: Internal.ItemStack_, arg1: Internal.List_<net.minecraft.network.chat.Component>): void;
        setupBlockEntityOwner(arg0: Internal.Level_, arg1: Internal.Ownable_, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        (arg0: BlockPos, arg1: Internal.BlockState): Internal.BlockEntity_;
        readonly NBT_KEY_USER: "UserUUID";
        readonly NBT_KEY_USER_LIST: "UserList";
        readonly NBT_KEY_OWNER: "OwnerUUID";
    }
    type OwnableEntityBlock_ = OwnableEntityBlock;
    class MapItemSavedData$HoldingPlayer implements Internal.IHoldingPlayerExtension {
        handler$big000$lockData(x: number, z: number, ci: Internal.CallbackInfo_): void;
        moonlight$setCustomDataDirty(type: Internal.CustomMapData$Type_<any>, dirtySetter: Internal.Consumer_<any>): void;
        moonlight$setCustomMarkersDirty(): void;
        handler$big000$sanityCheck(x: number, z: number, ci: Internal.CallbackInfo_): void;
        modifyReturnValue$big000$addExtraPacketData(packet: Internal.Packet_<any>, mapId: number): Internal.Packet<any>;
        handler$big000$checkLocked(mapId: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$big000$initializeDirty(mapItemSavedData: Internal.MapItemSavedData_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        readonly player: Internal.Player;
        step: number;
    }
    type MapItemSavedData$HoldingPlayer_ = MapItemSavedData$HoldingPlayer;
    class Sniffer extends Internal.Animal {
        constructor(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getBrain(): Internal.Brain<Internal.Sniffer>;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        onDiggingComplete(arg0: boolean): this;
        isTempted(): boolean;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        transitionTo(arg0: Internal.Sniffer$State_): this;
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
        getTotalMovementSpeed(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        canSniff(): boolean;
        getDisplayName(): net.minecraft.network.chat.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        canPlayDiggingSound(): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        isPanicking(): boolean;
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
        static createAttributes(): Internal.AttributeSupplier$Builder;
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
        getName(): net.minecraft.network.chat.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isSearching(): boolean;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
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
        tell(message: net.minecraft.network.chat.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        get brain(): Internal.Brain<Internal.Sniffer>
        set defaultMovementSpeedMultiplier(speed: number)
        get tempted(): boolean
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get panicking(): boolean
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
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get searching(): boolean
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
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        readonly diggingAnimationState: Internal.AnimationState;
        readonly risingAnimationState: Internal.AnimationState;
        readonly scentingAnimationState: Internal.AnimationState;
        readonly feelingHappyAnimationState: Internal.AnimationState;
        readonly sniffingAnimationState: Internal.AnimationState;
    }
    type Sniffer_ = Sniffer;
    interface OwnableEntity {
        abstract level(): Internal.EntityGetter;
        abstract getOwnerUUID(): Internal.UUID;
        getOwner(): Internal.LivingEntity;
        get ownerUUID(): Internal.UUID
        get owner(): Internal.LivingEntity
    }
    type OwnableEntity_ = OwnableEntity;
    abstract class BlockBehaviour implements Internal.BlockKJS, Internal.FeatureElement {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        setDestroySpeed(v: number): void;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        abstract asItem(): Internal.Item;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        getMaxVerticalOffset(): number;
        setIsRandomlyTicking(arg0: boolean): void;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        defaultMapColor(): Internal.MapColor;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setNameKey(key: string): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        setRequiresTool(v: boolean): void;
        setSpeedFactor(arg0: number): void;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getMod(): string;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        setExplosionResistance(arg0: number): void;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        requiredFeatures(): Internal.FeatureFlagSet;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setHasCollision(arg0: boolean): void;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set destroySpeed(v: number)
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get maxHorizontalOffset(): number
        get maxVerticalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set blockBuilder(b: Internal.BlockBuilder_)
        set nameKey(key: string)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set speedFactor(arg0: number)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get mod(): string
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        set soundType(arg0: SoundType_)
        set hasCollision(arg0: boolean)
        isRandomlyTicking: boolean;
        readonly properties: Internal.BlockBehaviour$Properties;
    }
    type BlockBehaviour_ = BlockBehaviour;
    class AnimatableManager <T extends Internal.GeoAnimatable> {
        constructor(arg0: Internal.GeoAnimatable_)
        tryTriggerAnimation(arg0: string, arg1: string): void;
        getFirstTickTime(): number;
        updatedAt(arg0: number): void;
        getLastUpdateTime(): number;
        getAnimationControllers(): Internal.Map<string, Internal.AnimationController<T>>;
        isFirstTick(): boolean;
        getData<D>(arg0: Internal.DataTicket_<D>): D;
        startedAt(arg0: number): void;
        clearSnapshotCache(): void;
        addController(arg0: Internal.AnimationController_<any>): void;
        removeController(arg0: string): void;
        setData<D>(arg0: Internal.DataTicket_<D>, arg1: D): void;
        getBoneSnapshotCollection(): Internal.Map<string, Internal.BoneSnapshot>;
        tryTriggerAnimation(arg0: string): void;
        get firstTickTime(): number
        get lastUpdateTime(): number
        get animationControllers(): Internal.Map<string, Internal.AnimationController<T>>
        get firstTick(): boolean
        get boneSnapshotCollection(): Internal.Map<string, Internal.BoneSnapshot>
    }
    type AnimatableManager_<T extends Internal.GeoAnimatable> = AnimatableManager<T>;
    class VillagerProfessionBuilder extends Internal.BuilderBase<Internal.VillagerProfession> {
        constructor(i: ResourceLocation_)
        workSound(t: Internal.SoundEvent_): this;
        poiTypeTag(t: ResourceLocation_): this;
        poiType(t: ResourceLocation_): this;
        createObject(): any;
        requestedItems(t: Internal.Item_[]): this;
        secondaryPoi(t: Internal.Block_[]): this;
    }
    type VillagerProfessionBuilder_ = VillagerProfessionBuilder;
    interface DoubleStream$DoubleMapMultiConsumer {
        abstract accept(arg0: number, arg1: Internal.DoubleConsumer_): void;
        (arg0: number, arg1: Internal.DoubleConsumer): void;
    }
    type DoubleStream$DoubleMapMultiConsumer_ = DoubleStream$DoubleMapMultiConsumer;
    abstract class AbstractGolem extends Internal.PathfinderMob {
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
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
        getTotalMovementSpeed(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
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
        getName(): net.minecraft.network.chat.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
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
        serializeNBT(): Internal.Tag;
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
        tell(message: net.minecraft.network.chat.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
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
        get displayName(): net.minecraft.network.chat.Component
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
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
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
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type AbstractGolem_ = AbstractGolem;
    class Tadpole extends Internal.AbstractFish implements Internal.TadpoleAccessor {
        constructor(arg0: Internal.EntityType_<Internal.AbstractFish>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
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
        getTotalMovementSpeed(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        static loadDefaultDataFromBucketTag(arg0: Internal.Mob_, arg1: Internal.CompoundTag_): void;
        damageHeldItem(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
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
        getBrain(): Internal.Brain<Internal.Tadpole>;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        setAge(arg0: number): void;
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
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): InteractionResult;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
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
        getName(): net.minecraft.network.chat.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        biomancy$AgeUp(): void;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        /**
         * @deprecated
        */
        static saveDefaultDataToBucketTag(arg0: Internal.Mob_, arg1: Internal.ItemStack_): void;
        getScriptType(): Internal.ScriptType;
        static bucketMobPickup<T extends Internal.LivingEntity & Internal.Bucketable>(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: T): Internal.Optional<InteractionResult>;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
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
        tell(message: net.minecraft.network.chat.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
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
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get brain(): Internal.Brain<Internal.Tadpole>
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        set age(arg0: number)
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
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
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
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        static HITBOX_WIDTH: 0.4;
        static ticksToBeFrog: 24000;
        static HITBOX_HEIGHT: 0.3;
    }
    type Tadpole_ = Tadpole;
    class TridentModel extends Internal.Model {
        constructor(arg0: Internal.ModelPart_)
        static createLayer(): Internal.LayerDefinition;
        static readonly TEXTURE: ResourceLocation;
    }
    type TridentModel_ = TridentModel;
    class QuickPlayLog$Type extends Internal.Enum<Internal.QuickPlayLog$Type> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.QuickPlayLog$Type;
        getSerializedName(): string;
        static values(): Internal.QuickPlayLog$Type[];
        get serializedName(): string
        static readonly MULTIPLAYER: Internal.QuickPlayLog$Type;
        static readonly SINGLEPLAYER: Internal.QuickPlayLog$Type;
        static readonly REALMS: Internal.QuickPlayLog$Type;
    }
    type QuickPlayLog$Type_ = QuickPlayLog$Type | "multiplayer" | "realms" | "singleplayer";
    class DynamoFuelSerializer <T extends Internal.ThermalFuel> implements Internal.RecipeSerializer<T> {
        constructor(arg0: any_<T>, arg1: number, arg2: number, arg3: number)
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): T;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): T;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): T;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type DynamoFuelSerializer_<T extends Internal.ThermalFuel> = DynamoFuelSerializer<T>;
    class ForgeEventWrapper extends Internal.Record {
        constructor(name: string, eventBus: Internal.IEventBus_)
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent$Chat", handler: (event: Internal.CustomizeGuiOverlayEvent$Chat) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$Key", handler: (event: Internal.InputEvent$Key) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.CommandEvent", handler: (event: Internal.CommandEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityTeleportEvent$EnderPearl", handler: (event: Internal.EntityTeleportEvent$EnderPearl) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Tick", handler: (event: Internal.LivingEntityUseItemEvent$Tick) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStoppedEvent", handler: (event: Internal.ServerStoppedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent", handler: (event: Internal.ContainerScreenEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.NoteBlockEvent$Play", handler: (event: Internal.NoteBlockEvent$Play) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.client.event.RenderLivingEvent$Post", generic: Special.JavaClass, handler: (event: Internal.RenderLivingEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStartedEvent", handler: (event: Internal.ServerStartedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent", handler: (event: Internal.MobEffectEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemCraftedEvent", handler: (event: Internal.PlayerEvent$ItemCraftedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingConversionEvent$Post", handler: (event: Internal.LivingConversionEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged", handler: (event: Internal.ScreenEvent$MouseDragged) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$RegisterLayerDefinitions", handler: (event: Internal.EntityRenderersEvent$RegisterLayerDefinitions) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderPlayerEvent$Post", handler: (event: Internal.RenderPlayerEvent$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed", handler: (event: Internal.PlayerEvent$BreakSpeed) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged$Pre", handler: (event: Internal.ScreenEvent$MouseDragged$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkWatchEvent$Watch", handler: (event: Internal.ChunkWatchEvent$Watch) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent", handler: (event: Internal.ViewportEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent", handler: (event: Internal.ParallelDispatchEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkWatchEvent", handler: (event: Internal.ChunkWatchEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientChatReceivedEvent", handler: (event: Internal.ClientChatReceivedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased", handler: (event: Internal.ScreenEvent$MouseButtonReleased) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init$Post", handler: (event: Internal.ScreenEvent$Init$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterParticleProvidersEvent", handler: (event: Internal.RegisterParticleProvidersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent", handler: (event: Internal.RegisterColorHandlersEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased$Pre", handler: (event: Internal.ScreenEvent$MouseButtonReleased$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent", handler: (event: Internal.ModConfigEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$BakingCompleted", handler: (event: Internal.ModelEvent$BakingCompleted) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggingOut", handler: (event: Internal.ClientPlayerNetworkEvent$LoggingOut) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityAttributeModificationEvent", handler: (event: Internal.EntityAttributeModificationEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$ModifyBakingResult", handler: (event: Internal.ModelEvent$ModifyBakingResult) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "commoble.useitemonblockevent.api.UseItemOnBlockEvent", handler: (event: Internal.UseItemOnBlockEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$RegisterGeometryLoaders", handler: (event: Internal.ModelEvent$RegisterGeometryLoaders) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Opening", handler: (event: Internal.ScreenEvent$Opening) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemSmeltedEvent", handler: (event: Internal.PlayerEvent$ItemSmeltedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityJoinLevelEvent", handler: (event: Internal.EntityJoinLevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TagsUpdatedEvent", handler: (event: Internal.TagsUpdatedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.server.permission.events.PermissionGatherEvent", handler: (event: Internal.PermissionGatherEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.simibubi.create.content.kinetics.deployer.DeployerRecipeSearchEvent", handler: (event: Internal.DeployerRecipeSearchEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobSpawnEvent", handler: (event: Internal.MobSpawnEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent", handler: (event: Internal.PlayerInteractEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render", handler: (event: Internal.ScreenEvent$Render) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$FarmlandTrampleEvent", handler: (event: Internal.BlockEvent$FarmlandTrampleEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.AnimalTameEvent", handler: (event: Internal.AnimalTameEvent) => void): any;
        eventBus(): Internal.IEventBus;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiEvent", handler: (event: Internal.RenderGuiEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.AnvilUpdateEvent", handler: (event: Internal.AnvilUpdateEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$EntityPlaceEvent", handler: (event: Internal.BlockEvent$EntityPlaceEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickEmpty", handler: (event: Internal.PlayerInteractEvent$RightClickEmpty) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent", handler: (event: Internal.RenderGuiOverlayEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled", handler: (event: Internal.ScreenEvent$MouseScrolled) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled$Post", handler: (event: Internal.ScreenEvent$MouseScrolled$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Close", handler: (event: Internal.PlayerContainerEvent$Close) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "org.violetmoon.quark.api.event.UsageTickerEvent$GetCount", handler: (event: Internal.UsageTickerEvent$GetCount) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent", handler: (event: Internal.ScreenEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$RenderInventoryMobEffects", handler: (event: Internal.ScreenEvent$RenderInventoryMobEffects) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed", handler: (event: Internal.ScreenEvent$MouseButtonPressed) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent", handler: (event: Internal.LivingEntityUseItemEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent$DebugText", handler: (event: Internal.CustomizeGuiOverlayEvent$DebugText) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent$Reloading", handler: (event: Internal.ModConfigEvent$Reloading) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "plus.dragons.createdragonlib.init.FillCreateItemGroupEvent", handler: (event: Internal.FillCreateItemGroupEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteract", handler: (event: Internal.PlayerInteractEvent$EntityInteract) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggingIn", handler: (event: Internal.ClientPlayerNetworkEvent$LoggingIn) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$RegisterAdditional", handler: (event: Internal.ModelEvent$RegisterAdditional) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingGetProjectileEvent", handler: (event: Internal.LivingGetProjectileEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent", handler: (event: Internal.FurnaceFuelBurnTimeEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "squeek.appleskin.api.event.TooltipOverlayEvent", handler: (event: Internal.TooltipOverlayEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent$Loading", handler: (event: Internal.ModConfigEvent$Loading) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemPickupEvent", handler: (event: Internal.PlayerEvent$ItemPickupEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.SpawnPlacementRegisterEvent", handler: (event: Internal.SpawnPlacementRegisterEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$BreakEvent", handler: (event: Internal.BlockEvent$BreakEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLConstructModEvent", handler: (event: Internal.FMLConstructModEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterItemDecorationsEvent", handler: (event: Internal.RegisterItemDecorationsEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.ArrowLooseEvent", handler: (event: Internal.ArrowLooseEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.MissingMappingsEvent", handler: (event: Internal.MissingMappingsEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "it.hurts.sskirillss.relics.api.events.leveling.ExperienceAddEvent", handler: (event: Internal.ExperienceAddEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent", handler: (event: Internal.ModLifecycleEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$FluidPlaceBlockEvent", handler: (event: Internal.BlockEvent$FluidPlaceBlockEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$Color", handler: (event: Internal.RenderTooltipEvent$Color) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped$Pre", handler: (event: Internal.ScreenEvent$CharacterTyped$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerXpEvent$XpChange", handler: (event: Internal.PlayerXpEvent$XpChange) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.EntityItemPickupEvent", handler: (event: Internal.EntityItemPickupEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$CropGrowEvent", handler: (event: Internal.BlockEvent$CropGrowEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "it.hurts.sskirillss.relics.api.events.common.FluidCollisionEvent", handler: (event: Internal.FluidCollisionEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedOutEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedOutEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenshotEvent", handler: (event: Internal.ScreenshotEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "top.theillusivec4.caelus.api.RenderCapeEvent", handler: (event: Internal.RenderCapeEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.ShieldBlockEvent", handler: (event: Internal.ShieldBlockEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerXpEvent$PickupXp", handler: (event: Internal.PlayerXpEvent$PickupXp) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent", handler: (event: Internal.PlayerEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseScrollingEvent", handler: (event: Internal.InputEvent$MouseScrollingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.jesz.createdieselgenerators.other.EntityTickEvent", handler: (event: Internal.EntityTickEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.ServerChatEvent", handler: (event: Internal.ServerChatEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed$Pre", handler: (event: Internal.ScreenEvent$MouseButtonPressed$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent", handler: (event: Internal.NetworkEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStoppingEvent", handler: (event: Internal.ServerStoppingEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickItem", handler: (event: Internal.PlayerInteractEvent$RightClickItem) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.client.event.RenderLivingEvent", generic: Special.JavaClass, handler: (event: Internal.RenderLivingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStartingEvent", handler: (event: Internal.ServerStartingEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled$Pre", handler: (event: Internal.ScreenEvent$MouseScrolled$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.DataPackRegistryEvent", handler: (event: Internal.DataPackRegistryEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerLifecycleEvent", handler: (event: Internal.ServerLifecycleEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderHighlightEvent$Block", handler: (event: Internal.RenderHighlightEvent$Block) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDamageEvent", handler: (event: Internal.LivingDamageEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityEvent", handler: (event: Internal.EntityEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerAboutToStartEvent", handler: (event: Internal.ServerAboutToStartEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent$Expired", handler: (event: Internal.MobEffectEvent$Expired) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ComputeFovModifierEvent", handler: (event: Internal.ComputeFovModifierEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent", handler: (event: Internal.FMLClientSetupEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerXpEvent", handler: (event: Internal.PlayerXpEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.CriticalHitEvent", handler: (event: Internal.CriticalHitEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.jozufozu.flywheel.event.GatherContextEvent", handler: (event: Internal.GatherContextEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Unload", handler: (event: Internal.LevelEvent$Unload) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerDestroyItemEvent", handler: (event: Internal.PlayerDestroyItemEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$RegisterRenderers", handler: (event: Internal.EntityRenderersEvent$RegisterRenderers) => void): any;
        name(): string;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent", handler: (event: Internal.LivingEvent$LivingTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.village.WandererTradesEvent", handler: (event: Internal.WandererTradesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$ServerTickEvent", handler: (event: Internal.TickEvent$ServerTickEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$Pre", handler: (event: Internal.RenderTooltipEvent$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderHandEvent", handler: (event: Internal.RenderHandEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientChatEvent", handler: (event: Internal.ClientChatEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent$ComputeFogColor", handler: (event: Internal.ViewportEvent$ComputeFogColor) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientTooltipComponentFactoriesEvent", handler: (event: Internal.RegisterClientTooltipComponentFactoriesEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent$Pre", handler: (event: Internal.RenderGuiOverlayEvent$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityStruckByLightningEvent", handler: (event: Internal.EntityStruckByLightningEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityTeleportEvent$EnderEntity", handler: (event: Internal.EntityTeleportEvent$EnderEntity) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.BonemealEvent", handler: (event: Internal.BonemealEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.RegisterGameTestsEvent", handler: (event: Internal.RegisterGameTestsEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.client.event.RenderLivingEvent$Pre", generic: Special.JavaClass, handler: (event: Internal.RenderLivingEvent$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$ClientTickEvent", handler: (event: Internal.TickEvent$ClientTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiEvent$Post", handler: (event: Internal.RenderGuiEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingConversionEvent", handler: (event: Internal.LivingConversionEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent$Start", handler: (event: Internal.ExplosionEvent$Start) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Nodes", handler: (event: Internal.PermissionGatherEvent$Nodes) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent$Applicable", handler: (event: Internal.MobEffectEvent$Applicable) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent", handler: (event: Internal.LivingEquipmentChangeEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.RegisterEvent", handler: (event: Internal.RegisterEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.BuildCreativeModeTabContentsEvent", handler: (event: Internal.BuildCreativeModeTabContentsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "squeek.appleskin.api.event.FoodValuesEvent", handler: (event: Internal.FoodValuesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkEvent", handler: (event: Internal.ChunkEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.TextureStitchEvent", handler: (event: Internal.TextureStitchEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent", handler: (event: Internal.RenderTooltipEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderArmEvent", handler: (event: Internal.RenderArmEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.NewRegistryEvent", handler: (event: Internal.NewRegistryEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$BlockToolModificationEvent", handler: (event: Internal.BlockEvent$BlockToolModificationEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed$Post", handler: (event: Internal.ScreenEvent$MouseButtonPressed$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.ItemTooltipEvent", handler: (event: Internal.ItemTooltipEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent", handler: (event: Internal.PlayerContainerEvent) => void): any;
        onGenericEvent(eventClass: any, genericClass: any, consumer: Internal.GenericForgeEventConsumer_): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent", handler: (event: Internal.EntityRenderersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.AddPackFindersEvent", handler: (event: Internal.AddPackFindersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent", handler: (event: Internal.BlockEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton$Pre", handler: (event: Internal.InputEvent$MouseButton$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent", handler: (event: Internal.LevelEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingChangeTargetEvent", handler: (event: Internal.LivingChangeTargetEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingHealEvent", handler: (event: Internal.LivingHealEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterEntitySpectatorShadersEvent", handler: (event: Internal.RegisterEntitySpectatorShadersEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingAttackEvent", handler: (event: Internal.LivingAttackEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEvent$LivingVisibilityEvent", handler: (event: Internal.LivingEvent$LivingVisibilityEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.EnderManAngerEvent", handler: (event: Internal.EnderManAngerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedInEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent", handler: (event: Internal.ExplosionEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent$Post", handler: (event: Internal.RenderGuiOverlayEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.simibubi.create.api.event.PipeCollisionEvent$Flow", handler: (event: Internal.PipeCollisionEvent$Flow) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobSpawnEvent$FinalizeSpawn", handler: (event: Internal.MobSpawnEvent$FinalizeSpawn) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingConversionEvent$Pre", handler: (event: Internal.LivingConversionEvent$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingKnockBackEvent", handler: (event: Internal.LivingKnockBackEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingExperienceDropEvent", handler: (event: Internal.LivingExperienceDropEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render", handler: (event: Internal.ContainerScreenEvent$Render) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased$Post", handler: (event: Internal.ScreenEvent$MouseButtonReleased$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased$Pre", handler: (event: Internal.ScreenEvent$KeyReleased$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityTeleportEvent", handler: (event: Internal.EntityTeleportEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickBlock", handler: (event: Internal.PlayerInteractEvent$RightClickBlock) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$GatherComponents", handler: (event: Internal.RenderTooltipEvent$GatherComponents) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$ClientCustomPayloadEvent", handler: (event: Internal.NetworkEvent$ClientCustomPayloadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$LevelTickEvent", handler: (event: Internal.TickEvent$LevelTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.ArrowNockEvent", handler: (event: Internal.ArrowNockEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$Clone", handler: (event: Internal.PlayerEvent$Clone) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.sound.SoundEvent", handler: (event: net.minecraftforge.client.event.sound.SoundEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$BackgroundRendered", handler: (event: Internal.ScreenEvent$BackgroundRendered) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish", handler: (event: Internal.LivingEntityUseItemEvent$Finish) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterGuiOverlaysEvent", handler: (event: Internal.RegisterGuiOverlaysEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientCommandsEvent", handler: (event: Internal.RegisterClientCommandsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.simibubi.create.api.event.PipeCollisionEvent$Spill", handler: (event: Internal.PipeCollisionEvent$Spill) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickBlock", handler: (event: Internal.PlayerInteractEvent$LeftClickBlock) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.data.event.GatherDataEvent", handler: (event: Internal.GatherDataEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.InterModEnqueueEvent", handler: (event: Internal.InterModEnqueueEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterKeyMappingsEvent", handler: (event: Internal.RegisterKeyMappingsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent$ComputeCameraAngles", handler: (event: Internal.ViewportEvent$ComputeCameraAngles) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDeathEvent", handler: (event: Internal.LivingDeathEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterRecipeBookCategoriesEvent", handler: (event: Internal.RegisterRecipeBookCategoriesEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.BabyEntitySpawnEvent", handler: (event: Internal.BabyEntitySpawnEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.VanillaGameEvent", handler: (event: Internal.VanillaGameEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$CreateSkullModels", handler: (event: Internal.EntityRenderersEvent$CreateSkullModels) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.ProjectileImpactEvent", handler: (event: Internal.ProjectileImpactEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent$Remove", handler: (event: Internal.MobEffectEvent$Remove) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.RegisterCommandsEvent", handler: (event: Internal.RegisterCommandsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$Clone", handler: (event: Internal.ClientPlayerNetworkEvent$Clone) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityLeaveLevelEvent", handler: (event: Internal.EntityLeaveLevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent", handler: (event: Internal.AdvancementEvent$AdvancementEarnEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterDimensionSpecialEffectsEvent", handler: (event: Internal.RegisterDimensionSpecialEffectsEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.item.ItemTossEvent", handler: (event: Internal.ItemTossEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityMountEvent", handler: (event: Internal.EntityMountEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render$Post", handler: (event: Internal.ScreenEvent$Render$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.SleepingLocationCheckEvent", handler: (event: Internal.SleepingLocationCheckEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "it.hurts.sskirillss.relics.api.events.common.LivingSlippingEvent", handler: (event: Internal.LivingSlippingEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.FillBucketEvent", handler: (event: Internal.FillBucketEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "it.hurts.sskirillss.relics.api.events.common.EntityBlockSpeedFactorEvent", handler: (event: Internal.EntityBlockSpeedFactorEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent$Load", handler: (event: Internal.ChunkDataEvent$Load) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$StartTracking", handler: (event: Internal.PlayerEvent$StartTracking) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent$Item", handler: (event: Internal.RegisterColorHandlersEvent$Item) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "it.hurts.sskirillss.octolib.config.api.events.ConfigConstructEvent", handler: (event: Internal.ConfigConstructEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "software.bernie.geckolib.event.GeoRenderEvent$Block", handler: (event: Internal.GeoRenderEvent$Block) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Start", handler: (event: Internal.LivingEntityUseItemEvent$Start) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.ItemAttributeModifierEvent", handler: (event: Internal.ItemAttributeModifierEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped", handler: (event: Internal.ScreenEvent$CharacterTyped) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "it.hurts.sskirillss.relics.api.events.common.ContainerSlotClickEvent", handler: (event: Internal.ContainerSlotClickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "it.hurts.sskirillss.relics.api.events.base.RelicEvent", handler: (event: Internal.RelicEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent", handler: (event: Internal.ClientPlayerNetworkEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.NoteBlockEvent", handler: (event: Internal.NoteBlockEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.TextureStitchEvent$Post", handler: (event: Internal.TextureStitchEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent", handler: (event: Internal.TickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render$Foreground", handler: (event: Internal.ContainerScreenEvent$Render$Foreground) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.mehvahdjukaar.moonlight.api.events.forge.VillagerBrainEvent", handler: (event: Internal.VillagerBrainEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingFallEvent", handler: (event: Internal.LivingFallEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent$Block", handler: (event: Internal.RegisterColorHandlersEvent$Block) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.OnDatapackSyncEvent", handler: (event: Internal.OnDatapackSyncEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init$Pre", handler: (event: Internal.ScreenEvent$Init$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.jozufozu.flywheel.event.BeginFrameEvent", handler: (event: Internal.BeginFrameEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityTeleportEvent$ChorusFruit", handler: (event: Internal.EntityTeleportEvent$ChorusFruit) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyInput", handler: (event: Internal.ScreenEvent$KeyInput) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterShadersEvent", handler: (event: Internal.RegisterShadersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.DataPackRegistryEvent$NewRegistry", handler: (event: Internal.DataPackRegistryEvent$NewRegistry) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkEvent$Unload", handler: (event: Internal.ChunkEvent$Unload) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$InteractionKeyMappingTriggered", handler: (event: Internal.InputEvent$InteractionKeyMappingTriggered) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.eventbus.api.GenericEvent", generic: Special.JavaClass, handler: (event: Internal.GenericEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent$Detonate", handler: (event: Internal.ExplosionEvent$Detonate) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.event.AttachCapabilitiesEvent", generic: Special.JavaClass, handler: (event: Internal.AttachCapabilitiesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.mehvahdjukaar.moonlight.api.events.forge.FireConsumeBlockEvent", handler: (event: Internal.FireConsumeBlockEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$ServerCustomPayloadEvent", handler: (event: Internal.NetworkEvent$ServerCustomPayloadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent$Added", handler: (event: Internal.MobEffectEvent$Added) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Save", handler: (event: Internal.LevelEvent$Save) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init", handler: (event: Internal.ScreenEvent$Init) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped$Post", handler: (event: Internal.ScreenEvent$CharacterTyped$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton$Post", handler: (event: Internal.InputEvent$MouseButton$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLLoadCompleteEvent", handler: (event: Internal.FMLLoadCompleteEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$NeighborNotifyEvent", handler: (event: Internal.BlockEvent$NeighborNotifyEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "plus.dragons.createenchantmentindustry.api.PrintEntryRegisterEvent", handler: (event: Internal.PrintEntryRegisterEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.MovementInputUpdateEvent", handler: (event: Internal.MovementInputUpdateEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.IdMappingEvent", handler: (event: Internal.IdMappingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingBreatheEvent", handler: (event: Internal.LivingBreatheEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased$Post", handler: (event: Internal.ScreenEvent$KeyReleased$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent$RenderFog", handler: (event: Internal.ViewportEvent$RenderFog) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Load", handler: (event: Internal.LevelEvent$Load) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$AddLayers", handler: (event: Internal.EntityRenderersEvent$AddLayers) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed", handler: (event: Internal.ScreenEvent$KeyPressed) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent", handler: (event: Internal.ModelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged$Post", handler: (event: Internal.ScreenEvent$MouseDragged$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerWakeUpEvent", handler: (event: Internal.PlayerWakeUpEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.common.capabilities.RegisterCapabilitiesEvent", handler: (event: Internal.RegisterCapabilitiesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent", handler: (event: Internal.CustomizeGuiOverlayEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseInput", handler: (event: Internal.ScreenEvent$MouseInput) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityAttributeCreationEvent", handler: (event: Internal.EntityAttributeCreationEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$RenderTickEvent", handler: (event: Internal.TickEvent$RenderTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LootingLevelEvent", handler: (event: Internal.LootingLevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.InterModProcessEvent", handler: (event: Internal.InterModProcessEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific", handler: (event: Internal.PlayerInteractEvent$EntityInteractSpecific) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed$Post", handler: (event: Internal.ScreenEvent$KeyPressed$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render$Pre", handler: (event: Internal.ScreenEvent$Render$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AttackEntityEvent", handler: (event: Internal.AttackEntityEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RecipesUpdatedEvent", handler: (event: Internal.RecipesUpdatedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDropsEvent", handler: (event: Internal.LivingDropsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render$Background", handler: (event: Internal.ContainerScreenEvent$Render$Background) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent", handler: (event: Internal.ChunkDataEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterNamedRenderTypesEvent", handler: (event: Internal.RegisterNamedRenderTypesEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.ItemFishedEvent", handler: (event: Internal.ItemFishedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AdvancementEvent", handler: (event: Internal.AdvancementEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderHighlightEvent", handler: (event: Internal.RenderHighlightEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityEvent$EnteringSection", handler: (event: Internal.EntityEvent$EnteringSection) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementProgressEvent", handler: (event: Internal.AdvancementEvent$AdvancementProgressEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityEvent$EntityConstructing", handler: (event: Internal.EntityEvent$EntityConstructing) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.simibubi.create.api.event.PipeCollisionEvent", handler: (event: Internal.PipeCollisionEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingHurtEvent", handler: (event: Internal.LivingHurtEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.AddReloadListenerEvent", handler: (event: Internal.AddReloadListenerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent", handler: (event: Internal.FMLCommonSetupEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "org.violetmoon.quark.api.event.UsageTickerEvent", handler: (event: Internal.UsageTickerEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.LootTableLoadEvent", handler: (event: Internal.LootTableLoadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderLevelStageEvent", handler: (event: Internal.RenderLevelStageEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEvent", handler: (event: Internal.LivingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.sound.SoundEvent$SoundSourceEvent", handler: (event: Internal.SoundEvent$SoundSourceEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AnvilRepairEvent", handler: (event: Internal.AnvilRepairEvent) => void): any;
        onEvent(eventClass: any, consumer: Internal.ForgeEventConsumer_): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.PotionColorCalculationEvent", handler: (event: Internal.PotionColorCalculationEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityMobGriefingEvent", handler: (event: Internal.EntityMobGriefingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Open", handler: (event: Internal.PlayerContainerEvent$Open) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent$Save", handler: (event: Internal.ChunkDataEvent$Save) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$PlayerTickEvent", handler: (event: Internal.TickEvent$PlayerTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.SaplingGrowTreeEvent", handler: (event: Internal.SaplingGrowTreeEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed$Pre", handler: (event: Internal.ScreenEvent$KeyPressed$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickEmpty", handler: (event: Internal.PlayerInteractEvent$LeftClickEmpty) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", handler: (event: Internal.PlayerEvent$PlayerChangedDimensionEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderPlayerEvent$Pre", handler: (event: Internal.RenderPlayerEvent$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.PlayLevelSoundEvent", handler: (event: Internal.PlayLevelSoundEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.item.ItemEvent", handler: (event: Internal.ItemEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderPlayerEvent", handler: (event: Internal.RenderPlayerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased", handler: (event: Internal.ScreenEvent$KeyReleased) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Stop", handler: (event: Internal.LivingEntityUseItemEvent$Stop) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.jozufozu.flywheel.event.ReloadRenderersEvent", handler: (event: Internal.ReloadRenderersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerRespawnEvent", handler: (event: Internal.PlayerEvent$PlayerRespawnEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent", handler: (event: net.minecraftforge.client.event.InputEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$GatherLoginPayloadsEvent", handler: (event: Internal.NetworkEvent$GatherLoginPayloadsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.village.VillagerTradesEvent", handler: (event: Internal.VillagerTradesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.jozufozu.flywheel.event.RenderLayerEvent", handler: (event: Internal.RenderLayerEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "squeek.appleskin.api.event.HUDOverlayEvent", handler: (event: Internal.HUDOverlayEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientReloadListenersEvent", handler: (event: Internal.RegisterClientReloadListenersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityEvent$Size", handler: (event: Internal.EntityEvent$Size) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton", handler: (event: Internal.InputEvent$MouseButton) => void): any;
    }
    type ForgeEventWrapper_ = ForgeEventWrapper;
    interface IForgePackResources {
        isHidden(): boolean;
        getChildren(): Internal.Collection<Internal.PackResources>;
        get hidden(): boolean
        get children(): Internal.Collection<Internal.PackResources>
    }
    type IForgePackResources_ = IForgePackResources;
    interface ChestMenuClickCallback {
        abstract onClick(arg0: Internal.ChestMenuClickEvent_): void;
        (arg0: Internal.ChestMenuClickEvent): void;
    }
    type ChestMenuClickCallback_ = ChestMenuClickCallback;
    interface DoubleToLongFunction {
        abstract applyAsLong(arg0: number): number;
        (arg0: number): number;
    }
    type DoubleToLongFunction_ = DoubleToLongFunction;
    class PoweredLatchBlock extends Internal.ToggleLatchBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static POWERED_SIDE: Internal.BooleanProperty;
    }
    type PoweredLatchBlock_ = PoweredLatchBlock;
    class RuleBasedBlockStateProvider$Rule extends Internal.Record {
        constructor(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: Internal.BlockStateProvider_)
        ifTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        then(): Internal.BlockStateProvider;
        static readonly CODEC: Internal.Codec<Internal.RuleBasedBlockStateProvider$Rule>;
    }
    type RuleBasedBlockStateProvider$Rule_ = RuleBasedBlockStateProvider$Rule;
    class SchematicannonBlock extends Internal.Block implements Internal.IBE<Internal.SchematicannonBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.SchematicannonBlockEntity;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        getBlockEntityClass(): typeof Internal.SchematicannonBlockEntity;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.SchematicannonBlockEntity, InteractionResult>): InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getBlockEntityType(): Internal.BlockEntityType<Internal.SchematicannonBlockEntity>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
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
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.SchematicannonBlockEntity>;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.SchematicannonBlockEntity>): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockEntityClass(): typeof Internal.SchematicannonBlockEntity
        get blockEntityType(): Internal.BlockEntityType<Internal.SchematicannonBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type SchematicannonBlock_ = SchematicannonBlock;
    interface LevelTimeAccess extends Internal.LevelReader {
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        abstract dayTime(): number;
        abstract getShade(arg0: Internal.Direction_, arg1: boolean): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getMaxSection(): number;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getSectionYFromSectionIndex(arg0: number): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        abstract getBiomeManager(): Internal.BiomeManager;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getTimeOfDay(arg0: number): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        canSeeSky(arg0: BlockPos_): boolean;
        abstract isClientSide(): boolean;
        abstract enabledFeatures(): Internal.FeatureFlagSet;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        abstract getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        abstract dimensionType(): Internal.DimensionType;
        abstract getSkyDarken(): number;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        abstract getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getMinBuildHeight(): number;
        getSectionsCount(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
        */
        abstract getSeaLevel(): number;
        getBestNeighborSignal(arg0: BlockPos_): number;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        abstract hasChunk(arg0: number, arg1: number): boolean;
        getMaxBuildHeight(): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        getMoonBrightness(): number;
        getChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        abstract getLightEngine(): Internal.LevelLightEngine;
        abstract getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getHeight(): number;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        abstract getWorldBorder(): Internal.WorldBorder;
        isOutsideBuildHeight(arg0: number): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        abstract getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_, arg3: boolean): Internal.ChunkAccess;
        abstract registryAccess(): Internal.RegistryAccess;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        getMaxLightLevel(): number;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get biomeManager(): Internal.BiomeManager
        get clientSide(): boolean
        get moonPhase(): number
        get skyDarken(): number
        get minBuildHeight(): number
        get sectionsCount(): number
        /**
         * @deprecated
        */
        get seaLevel(): number
        get maxBuildHeight(): number
        get moonBrightness(): number
        get lightEngine(): Internal.LevelLightEngine
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get worldBorder(): Internal.WorldBorder
        get maxLightLevel(): number
    }
    type LevelTimeAccess_ = LevelTimeAccess;
    class IRotate$SpeedLevel extends Internal.Enum<Internal.IRotate$SpeedLevel> {
        static getFormattedSpeedText(arg0: number, arg1: boolean): Internal.LangBuilder;
        getColor(): number;
        getTextColor(): Internal.ChatFormatting;
        static of(arg0: number): Internal.IRotate$SpeedLevel;
        static valueOf(arg0: string): Internal.IRotate$SpeedLevel;
        getParticleSpeed(): number;
        static values(): Internal.IRotate$SpeedLevel[];
        getSpeedValue(): number;
        get color(): number
        get textColor(): Internal.ChatFormatting
        get particleSpeed(): number
        get speedValue(): number
        static readonly MEDIUM: Internal.IRotate$SpeedLevel;
        static readonly NONE: Internal.IRotate$SpeedLevel;
        static readonly SLOW: Internal.IRotate$SpeedLevel;
        static readonly FAST: Internal.IRotate$SpeedLevel;
    }
    type IRotate$SpeedLevel_ = "medium" | "slow" | IRotate$SpeedLevel | "fast" | "none";
    class SimpleKineticBlockEntity extends Internal.KineticBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
    }
    type SimpleKineticBlockEntity_ = SimpleKineticBlockEntity;
    class DyeablesRegistry {
        constructor()
        applyDye(arg0: Internal.ItemStack_, arg1: number): void;
        register(arg0: Internal.Item_, arg1: Internal.ZetaModule_): void;
        register(arg0: Internal.ZRegister_): void;
        dyeItem(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.DyeItem>): Internal.ItemStack;
        isDyeable(arg0: Internal.ItemStack_): boolean;
        isDyed(arg0: Internal.ItemStack_): boolean;
        getDye(arg0: Internal.ItemStack_): number;
        register(arg0: Internal.Item_): void;
        registerPost(arg0: Internal.ZRegister$Post_): void;
        getColor(arg0: Internal.ItemStack_): number;
        register(arg0: Internal.Item_, arg1: Internal.BooleanSupplier_): void;
        readonly dyeableConditions: Internal.Map<Internal.Item, Internal.BooleanSupplier>;
        readonly SURROGATE: Internal.DyeableLeatherItem;
    }
    type DyeablesRegistry_ = DyeablesRegistry;
    class DecimalFormatSymbols implements Internal.Cloneable, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Locale_)
        clone(): any;
        getDecimalSeparator(): string;
        setDecimalSeparator(arg0: string): void;
        setInternationalCurrencySymbol(arg0: string): void;
        getInternationalCurrencySymbol(): string;
        static getAvailableLocales(): Internal.Locale[];
        getNaN(): string;
        getMinusSign(): string;
        getMonetaryDecimalSeparator(): string;
        getCurrency(): Internal.Currency;
        setCurrency(arg0: Internal.Currency_): void;
        getPercent(): string;
        getPerMill(): string;
        setPerMill(arg0: string): void;
        setPercent(arg0: string): void;
        getDigit(): string;
        setMonetaryDecimalSeparator(arg0: string): void;
        setMonetaryGroupingSeparator(arg0: string): void;
        static getInstance(): Internal.DecimalFormatSymbols;
        setMinusSign(arg0: string): void;
        getGroupingSeparator(): string;
        static getInstance(arg0: Internal.Locale_): Internal.DecimalFormatSymbols;
        getCurrencySymbol(): string;
        getPatternSeparator(): string;
        getZeroDigit(): string;
        setNaN(arg0: string): void;
        getExponentSeparator(): string;
        setCurrencySymbol(arg0: string): void;
        setGroupingSeparator(arg0: string): void;
        setZeroDigit(arg0: string): void;
        setDigit(arg0: string): void;
        setPatternSeparator(arg0: string): void;
        setExponentSeparator(arg0: string): void;
        getMonetaryGroupingSeparator(): string;
        getInfinity(): string;
        setInfinity(arg0: string): void;
        get decimalSeparator(): string
        set decimalSeparator(arg0: string)
        set internationalCurrencySymbol(arg0: string)
        get internationalCurrencySymbol(): string
        get availableLocales(): Internal.Locale[]
        get naN(): string
        get minusSign(): string
        get monetaryDecimalSeparator(): string
        get currency(): Internal.Currency
        set currency(arg0: Internal.Currency_)
        get percent(): string
        get perMill(): string
        set perMill(arg0: string)
        set percent(arg0: string)
        get digit(): string
        set monetaryDecimalSeparator(arg0: string)
        set monetaryGroupingSeparator(arg0: string)
        get instance(): Internal.DecimalFormatSymbols
        set minusSign(arg0: string)
        get groupingSeparator(): string
        get currencySymbol(): string
        get patternSeparator(): string
        get zeroDigit(): string
        set naN(arg0: string)
        get exponentSeparator(): string
        set currencySymbol(arg0: string)
        set groupingSeparator(arg0: string)
        set zeroDigit(arg0: string)
        set digit(arg0: string)
        set patternSeparator(arg0: string)
        set exponentSeparator(arg0: string)
        get monetaryGroupingSeparator(): string
        get infinity(): string
        set infinity(arg0: string)
    }
    type DecimalFormatSymbols_ = DecimalFormatSymbols;
    interface EntityTypeTest <B, T extends B> {
        abstract tryCast(arg0: B): T;
        abstract getBaseClass(): B;
        forClass<B, T extends B>(arg0: T): this;
        get baseClass(): B
    }
    type EntityTypeTest_<B, T extends B> = EntityTypeTest<B, T>;
    interface ISaltBlock {
        growCluster(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.ServerLevel_): void;
        maybeGrowCluster(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.ServerLevel_): void;
        onSaltRandomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): boolean;
        canGrowCluster(arg0: BlockPos_, arg1: Internal.ServerLevel_): boolean;
        getFluidDrippingOn(arg0: Internal.ServerLevel_, arg1: BlockPos_): Internal.Fluid;
        onSaltAnimateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        abstract getDissolvedState(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.Fluid_): Internal.BlockState;
        (arg0: Internal.BlockState, arg1: Internal.ServerLevel, arg2: BlockPos, arg3: Internal.Fluid): Internal.BlockState_;
    }
    type ISaltBlock_ = ISaltBlock;
    interface ChunkMapAccessor {
        abstract getEntityMap(): Internal.Int2ObjectMap<Internal.ChunkMap$TrackedEntity>;
        get entityMap(): Internal.Int2ObjectMap<Internal.ChunkMap$TrackedEntity>
        (): Internal.Int2ObjectMap_<Internal.ChunkMap$TrackedEntity>;
    }
    type ChunkMapAccessor_ = ChunkMapAccessor;
    class DragonSittingFlamingPhase extends Internal.AbstractDragonSittingPhase {
        constructor(arg0: Internal.EnderDragon_)
        resetFlameCount(): void;
        getPhase(): Internal.EnderDragonPhase<Internal.DragonSittingFlamingPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonSittingFlamingPhase>
    }
    type DragonSittingFlamingPhase_ = DragonSittingFlamingPhase;
    class WaterFluid$Flowing extends Internal.WaterFluid {
        constructor()
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
    type WaterFluid$Flowing_ = WaterFluid$Flowing;
    class GrindstoneBlock extends Internal.FaceAttachedHorizontalDirectionalBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly WALL_EAST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_RIGHT_POST: Internal.ArrayVoxelShape;
    }
    type GrindstoneBlock_ = GrindstoneBlock;
    interface Function10 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function3<T8, T9, T10, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function8<T3, T4, T5, T6, T7, T8, T9, T10, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function<T10, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function5<T6, T7, T8, T9, T10, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.BiFunction<T9, T10, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function7<T4, T5, T6, T7, T8, T9, T10, R>>;
        curry(): Internal.Function<T1, Internal.Function9<T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function6<T5, T6, T7, T8, T9, T10, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function4<T7, T8, T9, T10, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R;
    }
    type Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>;
    class LockCode {
        constructor(arg0: string)
        static fromTag(arg0: Internal.CompoundTag_): Internal.LockCode;
        unlocksWith(arg0: Internal.ItemStack_): boolean;
        addToTag(arg0: Internal.CompoundTag_): void;
        static readonly NO_LOCK: Internal.LockCode;
        static readonly TAG_LOCK: "Lock";
    }
    type LockCode_ = LockCode;
    class BaseCoralPlantBlock extends Internal.BaseCoralPlantTypeBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type BaseCoralPlantBlock_ = BaseCoralPlantBlock;
    class BlockCrushingRecipe extends Internal.LycheeRecipe<Internal.BlockCrushingContext> implements Internal.BlockKeyRecipe<Internal.BlockCrushingRecipe> {
        constructor(arg0: ResourceLocation_)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        showingActionsCount(): number;
        getSchema(): Internal.RecipeSchema;
        getBlockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>;
        matchesFallingBlock(arg0: Internal.BlockState_, arg1: Internal.CompoundTag_): boolean;
        getBlock(): net.minecraft.advancements.critereon.BlockPredicate;
        compareTo(arg0: any): number;
        getRemainingItems(arg0: Internal.BlockCrushingContext_): Internal.NonNullList<Internal.ItemStack>;
        matches(arg0: Internal.BlockCrushingContext_, arg1: Internal.Level_): boolean;
        getMod(): string;
        isActionPath(arg0: Internal.JsonPointer_): boolean;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        defaultItemPointer(): Internal.JsonPointer;
        getAllActions(): Internal.Stream<Internal.PostAction>;
        static filterHidden(arg0: Internal.Stream_<Internal.PostAction>): Internal.Stream<Internal.PostAction>;
        static processActionGroup(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonPointer_, arg2: Internal.List_<Internal.PostAction>, arg3: Internal.JsonObject_): Internal.JsonElement;
        lychee$getId(): ResourceLocation;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        compareTo(arg0: Internal.BlockCrushingRecipe_): number;
        applyPostActions(arg0: Internal.LycheeContext_, arg1: number): void;
        static processActions(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonObject_): void;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        getLandingBlock(): net.minecraft.advancements.critereon.BlockPredicate;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getItemIndexes(arg0: LycheeReference_): Internal.IntList;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get blockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>
        get block(): net.minecraft.advancements.critereon.BlockPredicate
        get mod(): string
        get special(): boolean
        get allActions(): Internal.Stream<Internal.PostAction>
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get landingBlock(): net.minecraft.advancements.critereon.BlockPredicate
        get incomplete(): boolean
        static readonly ANVIL: net.minecraft.advancements.critereon.BlockPredicate;
    }
    type BlockCrushingRecipe_ = BlockCrushingRecipe;
    class HorizontalDirectionalBlockBuilder extends Internal.BlockBuilder {
        constructor(i: ResourceLocation_)
        createObject(): Internal.Block;
        textureAll(tex: string): this;
    }
    type HorizontalDirectionalBlockBuilder_ = HorizontalDirectionalBlockBuilder;
    class HugeDieselEngineBlockEntity extends Internal.SmartBlockEntity implements Internal.IHaveGoggleInformation {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getShaft(): Internal.PoweredEngineShaftBlockEntity;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        addToGoggleTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean): boolean;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getTargetAngle(): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get shaft(): Internal.PoweredEngineShaftBlockEntity
        get modelData(): Internal.ModelData
        get targetAngle(): number
        tank: Internal.SmartFluidTankBehaviour;
        target: Internal.WeakReference<Internal.PoweredEngineShaftBlockEntity>;
        movementDirection: Internal.ScrollOptionBehaviour<Internal.WindmillBearingBlockEntity$RotationDirection>;
        computerBehaviour: Internal.AbstractComputerBehaviour;
    }
    type HugeDieselEngineBlockEntity_ = HugeDieselEngineBlockEntity;
    interface AccessorWeightedRandomList <E> {
        abstract bookshelf$getEntries(): Internal.ImmutableList<E>;
        abstract bookshelf$getTotalWeight(): number;
    }
    type AccessorWeightedRandomList_<E> = AccessorWeightedRandomList<E>;
    class ClientboundRemoveEntitiesPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(...arg0: number[])
        constructor(arg0: Internal.IntList_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        getEntityIds(): Internal.IntList;
        get skippable(): boolean
        get entityIds(): Internal.IntList
    }
    type ClientboundRemoveEntitiesPacket_ = ClientboundRemoveEntitiesPacket;
    class ChatComponent {
        constructor(arg0: Internal.Minecraft_)
        addMessage(arg0: net.minecraft.network.chat.Component_): void;
        handleChatQueueClicked(arg0: number, arg1: number): boolean;
        getWidth(): number;
        static defaultUnfocusedPct(): number;
        rescaleChat(): void;
        getMessageTagAt(arg0: number, arg1: number): Internal.GuiMessageTag;
        addRecentChat(arg0: string): void;
        getScale(): number;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        tick(): void;
        getLinesPerPage(): number;
        scrollChat(arg0: number): void;
        getClickedComponentStyleAt(arg0: number, arg1: number): Internal.Style;
        static getHeight(arg0: number): number;
        deleteMessage(arg0: Internal.MessageSignature_): void;
        getRecentChat(): Internal.List<string>;
        addMessage(arg0: net.minecraft.network.chat.Component_, arg1: Internal.MessageSignature_, arg2: number, arg3: Internal.GuiMessageTag_, arg4: boolean): void;
        addMessage(arg0: net.minecraft.network.chat.Component_, arg1: Internal.MessageSignature_, arg2: Internal.GuiMessageTag_): void;
        getHeight(): number;
        resetChatScroll(): void;
        static getWidth(arg0: number): number;
        clearMessages(arg0: boolean): void;
        get width(): number
        get scale(): number
        get linesPerPage(): number
        get recentChat(): Internal.List<string>
        get height(): number
    }
    type ChatComponent_ = ChatComponent;
    class MagmaWalkerItem extends Internal.RelicItem implements Internal.IRenderableCurio {
        constructor()
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setExperience(arg0: Internal.ItemStack_, arg1: number): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canSync(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        static onLivingAttack(arg0: Internal.LivingAttackEvent_): void;
        setAbilitiesTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getStatData(arg0: string, arg1: string): Internal.StatData;
        getAbilityQuality(arg0: Internal.ItemStack_, arg1: string): number;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canUseAbility(arg0: Internal.ItemStack_, arg1: string): boolean;
        getRelicQuality(arg0: Internal.ItemStack_): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canUnequip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): void;
        getExperienceLeftForLevel(arg0: Internal.ItemStack_, arg1: number): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setLevel(arg0: Internal.ItemStack_, arg1: number): void;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getSlotModifiers(arg0: Internal.ItemStack_): Internal.RelicSlotModifier;
        curioTick(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getLevelFromExperience(arg0: Internal.ItemStack_, arg1: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getLootingBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        tickActiveAbilitySelection(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: string): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAbilityPoints(arg0: Internal.ItemStack_, arg1: string): number;
        getItem(): Internal.Item;
        addAbilityPoints(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        showAttributesTooltip(arg0: string, arg1: Internal.ItemStack_): boolean;
        static onFluidCollide(arg0: Internal.FluidCollisionEvent_): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setAbilityTicking(arg0: Internal.ItemStack_, arg1: string, arg2: boolean): void;
        addExperience(arg0: Internal.ItemStack_, arg1: number): boolean;
        onEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        canUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        testAbilityCastPredicates(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        writeSyncData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        readSyncData(arg0: Internal.CompoundTag_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canSync(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): boolean;
        setAbilityPoints(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        setPoints(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFortuneBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        getExperienceBetweenLevels(arg0: Internal.ItemStack_, arg1: number, arg2: number): number;
        mayUpgrade(arg0: Internal.ItemStack_, arg1: string): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        mayPlayerReroll(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onEquip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getRelicData(): Internal.RelicData;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isAbilityTicking(arg0: Internal.ItemStack_, arg1: string): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioTick(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getExchanges(arg0: Internal.ItemStack_): number;
        setDigSpeed(speed: number): void;
        constructLayerDefinition(): Internal.LayerDefinition;
        isAbilityMaxLevel(arg0: Internal.ItemStack_, arg1: string): boolean;
        setAttackSpeed(attackSpeed: number): void;
        isEnderMask(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getLevel(arg0: Internal.ItemStack_): number;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getStatQuality(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getEquipSound(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.ICurio$SoundInfo;
        canPlayerUseActiveAbility(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bodyParts(): Internal.List<string>;
        setRelicData(arg0: Internal.RelicData_): void;
        getAbilityCastPredicates(arg0: string): Internal.CastPredicate;
        isMaxLevel(arg0: Internal.ItemStack_): boolean;
        addExchanges(arg0: Internal.ItemStack_, arg1: number): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        curioBreak(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        addAbilityCooldown(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        addPoints(arg0: Internal.ItemStack_, arg1: number): void;
        getStatByQuality(arg0: string, arg1: string, arg2: number): number;
        mayPlayerUpgrade(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        getRerollRequiredExperience(arg0: string): number;
        arch$registryName(): ResourceLocation;
        getAbilitiesTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        getDropRule(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: number, arg3: boolean, arg4: Internal.ItemStack_): Internal.ICurio$DropRule;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        randomizeStat(arg0: Internal.ItemStack_, arg1: string, arg2: string): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAbilityCooldown(arg0: Internal.ItemStack_, arg1: string): number;
        getMaxQuality(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onUnequip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        setAbilityTag(arg0: Internal.ItemStack_, arg1: string, arg2: Internal.CompoundTag_): void;
        getExperience(arg0: Internal.ItemStack_): number;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDropRule(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): Internal.ICurio$DropRule;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        playRightClickEquipSound(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): void;
        setAbilityTempTag(arg0: Internal.ItemStack_, arg1: string, arg2: Internal.CompoundTag_): void;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        hasCurioCapability(arg0: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getModel(arg0: Internal.ItemStack_): Internal.CurioModel;
        getLevelingTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        isExchangeAvailable(arg0: Internal.Player_, arg1: Internal.ItemStack_): boolean;
        getAttributeModifiers(arg0: Internal.ItemStack_): Internal.RelicAttributeModifier;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getAbilityCooldownCap(arg0: Internal.ItemStack_, arg1: string): number;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        testAbilityCastPredicate(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string, arg3: string): boolean;
        mayPlayerReset(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        mayReroll(arg0: Internal.ItemStack_, arg1: string): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        getAbilityCastPredicate(arg0: string, arg1: string): Internal.PredicateEntry;
        getAbilityData(arg0: string): Internal.AbilityData;
        setAbilityCooldownCap(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getAbilityTempTag(arg0: Internal.ItemStack_, arg1: string): Internal.CompoundTag;
        getExchangeCost(arg0: Internal.ItemStack_): number;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLootData(): Internal.LootData;
        getPoints(arg0: Internal.ItemStack_): number;
        appendConfig(arg0: Internal.ConfigContext_): void;
        isItemResearched(arg0: Internal.Player_): boolean;
        setAttackDamage(attackDamage: number): void;
        castActiveAbility(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: string, arg3: Internal.CastType_, arg4: Internal.CastStage_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioBreak(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getResetRequiredExperience(arg0: Internal.ItemStack_, arg1: string): number;
        setArmorToughness(armorToughness: number): void;
        setItemResearched(arg0: Internal.Player_, arg1: boolean): void;
        headParts(): Internal.List<string>;
        setAbilityCooldown(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getUpgradeRequiredExperience(arg0: Internal.ItemStack_, arg1: string): number;
        dropAllocableExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAbilityInitialValues(arg0: Internal.ItemStack_, arg1: string): Internal.Map<string, number>;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getAbilityInitialValue(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioAnimate(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getConfig(): Internal.OctoConfig;
        readSyncData(arg0: Internal.SlotContext_, arg1: Internal.CompoundTag_, arg2: Internal.ItemStack_): void;
        writeSyncData(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.CompoundTag;
        getLootingLevel(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.ItemStack_): number;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        dropExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: number): void;
        dropAllocableExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number, arg4: number): void;
        getTexture(arg0: Internal.ItemStack_): ResourceLocation;
        getFortuneLevel(arg0: Internal.SlotContext_, arg1: Internal.LootContext_, arg2: Internal.ItemStack_): number;
        getAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        dropExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number): void;
        render<T extends Internal.LivingEntity, M extends Internal.EntityModel<T>>(arg0: Internal.ItemStack_, arg1: Internal.SlotContext_, arg2: Internal.PoseStack_, arg3: Internal.RenderLayerParent_<T, M>, arg4: Internal.MultiBufferSource_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        addExperience(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: number): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        onUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        addAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): void;
        addLevel(arg0: Internal.ItemStack_, arg1: number): void;
        setLevelingTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getDamage(arg0: Internal.ItemStack_): number;
        getSlotsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        randomizeStats(arg0: Internal.ItemStack_, arg1: string): void;
        getLevelingData(): Internal.LevelingData;
        setExchanges(arg0: Internal.ItemStack_, arg1: number): void;
        getMod(): string;
        makesPiglinsNeutral(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getTotalExperienceForLevel(arg0: Internal.ItemStack_, arg1: number): number;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        mayReset(arg0: Internal.ItemStack_, arg1: string): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributeModifiers(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getAbilityTag(arg0: Internal.ItemStack_, arg1: string): Internal.CompoundTag;
        isAbilityOnCooldown(arg0: Internal.ItemStack_, arg1: string): boolean;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get item(): Internal.Item
        get relicData(): Internal.RelicData
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set relicData(arg0: Internal.RelicData_)
        set armorKnockbackResistance(knockbackResistance: number)
        get maxQuality(): number
        get creativeTab(): string
        get lootData(): Internal.LootData
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get config(): Internal.OctoConfig
        get levelingData(): Internal.LevelingData
        get mod(): string
        set armorProtection(armorProtection: number)
        static readonly TAG_HEAT: "heat";
    }
    type MagmaWalkerItem_ = MagmaWalkerItem;
    class ResourceKeyArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.ResourceKeyArgument<T>> {
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        type(): Internal.ArgumentTypeInfo<Internal.ResourceKeyArgument<T>, any>;
    }
    type ResourceKeyArgument$Info$Template_ = ResourceKeyArgument$Info$Template;
    interface Function15 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> {
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function11<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function9<T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.Function3<T13, T14, T15, R>>;
        curry(): Internal.Function<T1, Internal.Function14<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function10<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function5<T11, T12, T13, T14, T15, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function8<T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry13(): Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Internal.BiFunction<T14, T15, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function12<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function13<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function4<T12, T13, T14, T15, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function6<T10, T11, T12, T13, T14, T15, R>>;
        curry14(): Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, Internal.Function<T15, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function7<T9, T10, T11, T12, T13, T14, T15, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R;
    }
    type Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>;
    interface InventoryCarrier {
        abstract getInventory(): Internal.SimpleContainer;
        readInventoryFromTag(arg0: Internal.CompoundTag_): void;
        writeInventoryToTag(arg0: Internal.CompoundTag_): void;
        pickUpItem(arg0: Internal.Mob_, arg1: Internal.InventoryCarrier_, arg2: Internal.ItemEntity_): void;
        get inventory(): Internal.SimpleContainer
        (): Internal.SimpleContainer_;
        readonly TAG_INVENTORY: "Inventory";
    }
    type InventoryCarrier_ = InventoryCarrier;
    interface Function16 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> {
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function8<T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry(): Internal.Function<T1, Internal.Function15<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function11<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry15(): Internal.Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, Internal.Function<T16, R>>;
        curry13(): Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Internal.Function3<T14, T15, T16, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function12<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.Function4<T13, T14, T15, T16, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function5<T12, T13, T14, T15, T16, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function7<T10, T11, T12, T13, T14, T15, T16, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function14<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function9<T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function6<T11, T12, T13, T14, T15, T16, R>>;
        curry14(): Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, Internal.BiFunction<T15, T16, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function13<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function10<T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R;
    }
    type Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>;
    class ClientboundCooldownPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Item_, arg1: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getItem(): Internal.Item;
        isSkippable(): boolean;
        getDuration(): number;
        get item(): Internal.Item
        get skippable(): boolean
        get duration(): number
    }
    type ClientboundCooldownPacket_ = ClientboundCooldownPacket;
    interface PrivilegedAction <T> {
        abstract run(): T;
        (): T;
    }
    type PrivilegedAction_<T> = PrivilegedAction<T>;
    interface Function13 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> {
        curry2(): Internal.BiFunction<T1, T2, Internal.Function11<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function8<T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.Function<T13, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function7<T7, T8, T9, T10, T11, T12, T13, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function5<T9, T10, T11, T12, T13, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.BiFunction<T12, T13, R>>;
        curry(): Internal.Function<T1, Internal.Function12<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function10<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function9<T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function6<T8, T9, T10, T11, T12, T13, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function3<T11, T12, T13, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function4<T10, T11, T12, T13, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R;
    }
    type Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>;
    interface Function14 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> {
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function7<T8, T9, T10, T11, T12, T13, T14, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function6<T9, T10, T11, T12, T13, T14, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function4<T11, T12, T13, T14, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function11<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function10<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function8<T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry13(): Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Internal.Function<T14, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function5<T10, T11, T12, T13, T14, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function3<T12, T13, T14, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.BiFunction<T13, T14, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function9<T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry(): Internal.Function<T1, Internal.Function13<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function12<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R;
    }
    type Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>;
    interface Function11 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> {
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function7<T5, T6, T7, T8, T9, T10, T11, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function3<T9, T10, T11, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function8<T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function5<T7, T8, T9, T10, T11, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function9<T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.BiFunction<T10, T11, R>>;
        curry(): Internal.Function<T1, Internal.Function10<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function6<T6, T7, T8, T9, T10, T11, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function4<T8, T9, T10, T11, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function<T11, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R;
    }
    type Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>;
    interface Function12 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> {
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function3<T10, T11, T12, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function6<T7, T8, T9, T10, T11, T12, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.BiFunction<T11, T12, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function<T12, R>>;
        curry(): Internal.Function<T1, Internal.Function11<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function8<T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function7<T6, T7, T8, T9, T10, T11, T12, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function9<T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function4<T9, T10, T11, T12, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function10<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function5<T8, T9, T10, T11, T12, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R;
    }
    type Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>;
    class MetalScaffoldingBlockItem extends Internal.ScaffoldingBlockItem {
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
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
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
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
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
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
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
    type MetalScaffoldingBlockItem_ = MetalScaffoldingBlockItem;
    class StructureTemplateManager {
        constructor(arg0: Internal.ResourceManager_, arg1: Internal.LevelStorageSource$LevelStorageAccess_, arg2: Internal.DataFixer_, arg3: Internal.HolderGetter_<Internal.Block>)
        listTemplates(): Internal.Stream<ResourceLocation>;
        save(arg0: ResourceLocation_): boolean;
        remove(arg0: ResourceLocation_): void;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        readStructure(arg0: Internal.CompoundTag_): Internal.StructureTemplate;
        getOrCreate(arg0: ResourceLocation_): Internal.StructureTemplate;
        get(arg0: ResourceLocation_): Internal.Optional<Internal.StructureTemplate>;
        static createPathToStructure(arg0: Internal.Path_, arg1: ResourceLocation_, arg2: string): Internal.Path;
        getPathToGeneratedStructure(arg0: ResourceLocation_, arg1: string): Internal.Path;
    }
    type StructureTemplateManager_ = StructureTemplateManager;
    class PoweredEngineShaftBlockEntity extends Internal.GeneratingKineticBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        canBePoweredBy(arg0: BlockPos_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        update(arg0: BlockPos_, arg1: number, arg2: number, arg3: number): void;
        getModelData(): Internal.ModelData;
        removeGenerator(arg0: BlockPos_): void;
        isEngineForConnectorDisplay(arg0: BlockPos_): boolean;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
        engines: Internal.Map<BlockPos, Internal.Couple<number>>;
    }
    type PoweredEngineShaftBlockEntity_ = PoweredEngineShaftBlockEntity;
    abstract class Goal {
        constructor()
        isInterruptable(): boolean;
        start(): void;
        getFlags(): Internal.EnumSet<Internal.Goal$Flag>;
        setFlags(arg0: Internal.EnumSet_<Internal.Goal$Flag>): void;
        stop(): void;
        abstract canUse(): boolean;
        requiresUpdateEveryTick(): boolean;
        canContinueToUse(): boolean;
        tick(): void;
        get interruptable(): boolean
        get flags(): Internal.EnumSet<Internal.Goal$Flag>
        set flags(arg0: Internal.EnumSet_<Internal.Goal$Flag>)
    }
    type Goal_ = Goal;
    class ImmutableList$Builder <E> extends Internal.ImmutableCollection$Builder<E> {
        constructor()
        add(arg0: any[]): Internal.ImmutableCollection$Builder<any>;
        addAll(arg0: Internal.Iterable_<any>): Internal.ImmutableCollection$Builder<any>;
        addAll(arg0: Internal.Iterator_<E>): this;
        build(): Internal.ImmutableCollection<any>;
        add(arg0: any): Internal.ImmutableCollection$Builder<any>;
    }
    type ImmutableList$Builder_<E> = ImmutableList$Builder<E>;
    class STBTTFontinfo extends Internal.Struct implements Internal.NativeResource {
        constructor(arg0: Internal.ByteBuffer_)
        static create(arg0: number): Internal.STBTTFontinfo$Buffer;
        static malloc(arg0: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static mallocStack(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        static create(): Internal.STBTTFontinfo;
        static malloc(): Internal.STBTTFontinfo;
        static malloc(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static callocStack(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        /**
         * @deprecated
        */
        static callocStack(arg0: number): Internal.STBTTFontinfo$Buffer;
        static calloc(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static mallocStack(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        /**
         * @deprecated
        */
        static mallocStack(): Internal.STBTTFontinfo;
        static calloc(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        static calloc(): Internal.STBTTFontinfo;
        static createSafe(arg0: number, arg1: number): Internal.STBTTFontinfo$Buffer;
        static createSafe(arg0: number): Internal.STBTTFontinfo;
        close(): void;
        static malloc(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        /**
         * @deprecated
        */
        static mallocStack(arg0: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static callocStack(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        static create(arg0: number): Internal.STBTTFontinfo;
        static create(arg0: number, arg1: number): Internal.STBTTFontinfo$Buffer;
        static calloc(arg0: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static callocStack(): Internal.STBTTFontinfo;
        static readonly ALIGNOF: 8;
        static readonly SIZEOF: 160;
    }
    type STBTTFontinfo_ = STBTTFontinfo;
    interface DebugRenderer$SimpleDebugRenderer {
        abstract render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        (arg0: Internal.PoseStack, arg1: Internal.MultiBufferSource, arg2: number, arg3: number, arg4: number): void;
    }
    type DebugRenderer$SimpleDebugRenderer_ = DebugRenderer$SimpleDebugRenderer;
    class EnchantedBookItem extends Internal.Item {
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
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        static getEnchantments(arg0: Internal.ItemStack_): Internal.ListTag;
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
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
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
        static addEnchantment(arg0: Internal.ItemStack_, arg1: Internal.EnchantmentInstance_): void;
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
        static createForEnchantment(arg0: Internal.EnchantmentInstance_): Internal.ItemStack;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
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
        static readonly TAG_STORED_ENCHANTMENTS: "StoredEnchantments";
    }
    type EnchantedBookItem_ = EnchantedBookItem;
    interface LongBinaryOperator {
        abstract applyAsLong(arg0: number, arg1: number): number;
        (arg0: number, arg1: number): number;
    }
    type LongBinaryOperator_ = LongBinaryOperator;
    class UsageTickerEvent$Pass extends Internal.Enum<Internal.UsageTickerEvent$Pass> {
        static valueOf(arg0: string): Internal.UsageTickerEvent$Pass;
        static values(): Internal.UsageTickerEvent$Pass[];
        static readonly RENDERING: Internal.UsageTickerEvent$Pass;
        static readonly LOGICAL: Internal.UsageTickerEvent$Pass;
    }
    type UsageTickerEvent$Pass_ = UsageTickerEvent$Pass | "logical" | "rendering";
    interface ICookingUpgradeItem {
        abstract getCookingUpgradeConfig(): Internal.CookingUpgradeConfig;
        get cookingUpgradeConfig(): Internal.CookingUpgradeConfig
        (): Internal.CookingUpgradeConfig_;
    }
    type ICookingUpgradeItem_ = ICookingUpgradeItem;
    class ForgeGui extends Internal.Gui {
        constructor(arg0: Internal.Minecraft_)
        setupOverlayRenderState(arg0: boolean, arg1: boolean): void;
        shouldDrawSurvivalElements(): boolean;
        getMinecraft(): Internal.Minecraft;
        renderHealth(arg0: number, arg1: number, arg2: Internal.GuiGraphics_): void;
        renderFood(arg0: number, arg1: number, arg2: Internal.GuiGraphics_): void;
        get minecraft(): Internal.Minecraft
        rightHeight: number;
        static rayTraceDistance: 20.0;
        leftHeight: number;
    }
    type ForgeGui_ = ForgeGui;
    abstract class CachedRenderBBBlockEntity extends Internal.SyncedBlockEntity {
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
    type CachedRenderBBBlockEntity_ = CachedRenderBBBlockEntity;
    abstract class ShortBuffer extends Internal.Buffer implements Internal.Comparable<Internal.ShortBuffer> {
        mismatch(arg0: Internal.ShortBuffer_): number;
        abstract put(arg0: number): this;
        abstract asReadOnlyBuffer(): this;
        put(arg0: number[]): this;
        put(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        abstract get(): number;
        compareTo(arg0: any): number;
        position(arg0: number): this;
        limit(arg0: number): this;
        abstract order(): Internal.ByteOrder;
        abstract get(arg0: number): number;
        get(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        static allocate(arg0: number): Internal.ShortBuffer;
        get(arg0: number[]): this;
        static wrap(arg0: number[], arg1: number, arg2: number): Internal.ShortBuffer;
        put(arg0: Internal.ShortBuffer_): this;
        abstract put(arg0: number, arg1: number): this;
        put(arg0: number, arg1: number[]): this;
        abstract duplicate(): this;
        get(arg0: number, arg1: number[]): this;
        get(arg0: number[], arg1: number, arg2: number): this;
        static wrap(arg0: number[]): Internal.ShortBuffer;
        compareTo(arg0: Internal.ShortBuffer_): number;
        array(): number[];
        put(arg0: number[], arg1: number, arg2: number): this;
        abstract compact(): this;
        put(arg0: number, arg1: Internal.ShortBuffer_, arg2: number, arg3: number): this;
    }
    type ShortBuffer_ = ShortBuffer;
    class ModStairBlock extends Internal.StairBlock {
        constructor(baseBlock: Internal.Supplier_<Internal.Block>, settings: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type ModStairBlock_ = ModStairBlock;
    class GenericStackInv$Mode extends Internal.Enum<Internal.GenericStackInv$Mode> {
        static valueOf(arg0: string): Internal.GenericStackInv$Mode;
        static values(): Internal.GenericStackInv$Mode[];
        static readonly CONFIG_STACKS: Internal.GenericStackInv$Mode;
        static readonly STORAGE: Internal.GenericStackInv$Mode;
        static readonly CONFIG_TYPES: Internal.GenericStackInv$Mode;
    }
    type GenericStackInv$Mode_ = "config_stacks" | "storage" | "config_types" | GenericStackInv$Mode;
    class LiquidBurningRecipe implements Internal.Recipe<Internal.FluidRecipeWrapper> {
        constructor(arg0: ResourceLocation_, arg1: Internal.FluidIngredient_, arg2: number, arg3: boolean)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        matches(arg0: Internal.FluidRecipeWrapper_, arg1: Internal.Level_): boolean;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        getBurnTime(): number;
        isSuperheated(): boolean;
        assemble(arg0: Internal.FluidRecipeWrapper_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        getRemainingItems(arg0: Internal.FluidRecipeWrapper_): Internal.NonNullList<Internal.ItemStack>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        getFluidIngredient(): Internal.FluidIngredient;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get burnTime(): number
        get superheated(): boolean
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get fluidIngredient(): Internal.FluidIngredient
        get incomplete(): boolean
    }
    type LiquidBurningRecipe_ = LiquidBurningRecipe;
    class MechanicalCraftingRecipe$Serializer extends Internal.ShapedRecipe$Serializer {
        constructor()
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ShapedRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type MechanicalCraftingRecipe$Serializer_ = MechanicalCraftingRecipe$Serializer;
    class Ingredient implements Internal.Predicate<Internal.ItemStack>, Internal.IngredientKJS {
        constructor(arg0: Internal.Stream_<Internal.Ingredient$Value>)
        getDisplayStacks(): Internal.ItemStackSet;
        isVanilla(): boolean;
        static invalidateAll(): void;
        static of(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        isSimple(): boolean;
        static valueFromJson(arg0: Internal.JsonObject_): Internal.Ingredient$Value;
        getItemIds(): Internal.Set<string>;
        isEmpty(): boolean;
        asStack(): InputItem;
        toJson(): Internal.JsonElement;
        or(ingredient: Internal.Ingredient_): this;
        static fromValues(arg0: Internal.Stream_<Internal.Ingredient$Value>): Internal.Ingredient;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        isWildcard(): boolean;
        static of(): Internal.Ingredient;
        test(arg0: any): boolean;
        canBeUsedForMatching(): boolean;
        handler$cbd000$blah(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getItemTypes(): Internal.Set<Internal.Item>;
        static of(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        static merge(arg0: Internal.Collection_<Internal.Ingredient>): Internal.Ingredient;
        and(ingredient: Internal.Ingredient_): this;
        negate(): Internal.Predicate<Internal.ItemStack>;
        subtract(subtracted: Internal.Ingredient_): this;
        testItem(item: Internal.Item_): boolean;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.Ingredient;
        checkInvalidation(): boolean;
        static of(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        static of(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        self(): this;
        toNetwork(arg0: Internal.FriendlyByteBuf_): void;
        static fromJson(arg0: Internal.JsonElement_, arg1: boolean): Internal.Ingredient;
        withCount(count: number): InputItem;
        getStacks(): Internal.ItemStackSet;
        getStackingIds(): Internal.IntList;
        or(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        test(arg0: Internal.ItemStack_): boolean;
        getSerializer(): Internal.IIngredientSerializer<Internal.Ingredient>;
        getFirst(): Internal.ItemStack;
        static fromJson(arg0: Internal.JsonElement_): Internal.Ingredient;
        asIngredient(): this;
        and(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        get displayStacks(): Internal.ItemStackSet
        get vanilla(): boolean
        get simple(): boolean
        get itemIds(): Internal.Set<string>
        get empty(): boolean
        get wildcard(): boolean
        get itemTypes(): Internal.Set<Internal.Item>
        get stacks(): Internal.ItemStackSet
        get stackingIds(): Internal.IntList
        get serializer(): Internal.IIngredientSerializer<Internal.Ingredient>
        get first(): Internal.ItemStack
        static readonly INVALIDATION_COUNTER: 1;
        static readonly EMPTY: Internal.Ingredient;
        values: Internal.Ingredient$Value[];
        itemStacks: Internal.ItemStack[];
        stackingIds: Internal.IntList;
        readonly isVanilla: boolean;
        invalidationCounter: number;
    }
    type Ingredient_ = `%${Special.CreativeModeTab}` | {count?: number, item: Internal.ItemStack_} | {ingredient: object} | Internal.ItemStack_ | RegExp | Internal.Ingredient_[] | `@${Special.Mod}` | `%${string}` | Ingredient | Internal.FluidStackJS_ | {fluid: Internal.FluidStackJS_} | `#${Special.ItemTag}` | "*" | {value: object} | {type: Special.Ingredient};
    interface LongIterable extends Internal.Iterable<number> {
        forEach(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        iterator(): Internal.Iterator<any>;
        spliterator(): Internal.Spliterator<any>;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        longIterator(): Internal.LongIterator;
        longSpliterator(): Internal.LongSpliterator;
        forEach(arg0: Internal.LongConsumer_): void;
    }
    type LongIterable_ = LongIterable;
    class FMLCommonSetupEvent extends Internal.ParallelDispatchEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.ModLoadingStage_)
    }
    type FMLCommonSetupEvent_ = FMLCommonSetupEvent;
    interface ItemLike {
        abstract asItem(): Internal.Item;
        (): Internal.Item_;
    }
    type ItemLike_ = Internal.Item_ | ItemLike;
    class WhistleExtenderBlock$WhistleExtenderShape extends Internal.Enum<Internal.WhistleExtenderBlock$WhistleExtenderShape> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.WhistleExtenderBlock$WhistleExtenderShape[];
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.WhistleExtenderBlock$WhistleExtenderShape;
        get serializedName(): string
        static readonly DOUBLE_CONNECTED: Internal.WhistleExtenderBlock$WhistleExtenderShape;
        static readonly SINGLE: Internal.WhistleExtenderBlock$WhistleExtenderShape;
        static readonly DOUBLE: Internal.WhistleExtenderBlock$WhistleExtenderShape;
    }
    type WhistleExtenderBlock$WhistleExtenderShape_ = "double" | "single" | WhistleExtenderBlock$WhistleExtenderShape | "double_connected";
    class BiomeGenerationSettingsBuilder extends Internal.BiomeGenerationSettings$PlainBuilder {
        constructor(arg0: Internal.BiomeGenerationSettings_)
        getFeatures(arg0: Internal.GenerationStep$Decoration_): Internal.List<Internal.Holder<Internal.PlacedFeature>>;
        getCarvers(arg0: Internal.GenerationStep$Carving_): Internal.List<Internal.Holder<Internal.ConfiguredWorldCarver<any>>>;
    }
    type BiomeGenerationSettingsBuilder_ = BiomeGenerationSettingsBuilder;
    class TridentLoyaltyEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type TridentLoyaltyEnchantment_ = TridentLoyaltyEnchantment;
    class ArmorItemBuilder$Leggings extends Internal.ArmorItemBuilder {
        constructor(i: ResourceLocation_)
        createObject(): any;
    }
    type ArmorItemBuilder$Leggings_ = ArmorItemBuilder$Leggings;
}
declare namespace net.mehvahdjukaar.supplementaries.common.items {
    abstract class InstrumentItem extends Internal.Item {
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        spawnNoteParticle(level: Internal.Level_, entity: Internal.LivingEntity_, note: number): void;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
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
        getVolume(): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getSound(): Internal.SoundEvent;
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
        getPitch(note: number): number;
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
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        get volume(): number
        set armorKnockbackResistance(knockbackResistance: number)
        get sound(): Internal.SoundEvent
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type InstrumentItem_ = InstrumentItem;
}
declare namespace it.unimi.dsi.fastutil.longs {
    interface LongPredicate extends Internal.Predicate<number>, Internal.LongPredicate {
        /**
         * @deprecated
        */
        test(arg0: any): boolean;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        or(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): this;
        negate(): Internal.LongPredicate;
        and(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): this;
        abstract test(arg0: number): boolean;
        /**
         * @deprecated
        */
        and(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        or(arg0: Internal.LongPredicate_): this;
        /**
         * @deprecated
        */
        or(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        and(arg0: Internal.LongPredicate_): Internal.LongPredicate;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        (arg0: number): boolean;
    }
    type LongPredicate_ = LongPredicate;
}
declare namespace com.mojang.realmsclient.dto {
    class PlayerInfo extends Internal.ValueObject implements Internal.ReflectionBasedSerialization {
        constructor()
        setOnline(arg0: boolean): void;
        getOnline(): boolean;
        setAccepted(arg0: boolean): void;
        setOperator(arg0: boolean): void;
        getAccepted(): boolean;
        setName(arg0: string): void;
        getName(): string;
        setUuid(arg0: string): void;
        isOperator(): boolean;
        getUuid(): string;
        set online(arg0: boolean)
        get online(): boolean
        set accepted(arg0: boolean)
        set operator(arg0: boolean)
        get accepted(): boolean
        set name(arg0: string)
        get name(): string
        set uuid(arg0: string)
        get operator(): boolean
        get uuid(): string
    }
    type PlayerInfo_ = PlayerInfo;
}
