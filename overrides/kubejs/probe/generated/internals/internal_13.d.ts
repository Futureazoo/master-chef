/// <reference path="./internal_*.d.ts" />
declare namespace dev.architectury.event {
    class EventResult {
        static interrupt(value: boolean): dev.architectury.event.EventResult;
        isPresent(): boolean;
        isTrue(): boolean;
        static interruptDefault(): dev.architectury.event.EventResult;
        asMinecraft(): Internal.InteractionResult;
        interruptsFurtherEvaluation(): boolean;
        static interruptTrue(): dev.architectury.event.EventResult;
        isFalse(): boolean;
        value(): boolean;
        static pass(): dev.architectury.event.EventResult;
        isEmpty(): boolean;
        static interruptFalse(): dev.architectury.event.EventResult;
        get present(): boolean
        get "true"(): boolean
        get "false"(): boolean
        get empty(): boolean
    }
    type EventResult_ = EventResult;
}
declare namespace org.slf4j {
    interface Marker extends Internal.Serializable {
        /**
         * @deprecated
        */
        abstract hasChildren(): boolean;
        abstract hashCode(): number;
        abstract remove(arg0: org.slf4j.Marker_): boolean;
        abstract getName(): string;
        abstract add(arg0: org.slf4j.Marker_): void;
        abstract iterator(): Internal.Iterator<org.slf4j.Marker>;
        abstract equals(arg0: any): boolean;
        abstract hasReferences(): boolean;
        abstract contains(arg0: org.slf4j.Marker_): boolean;
        abstract contains(arg0: string): boolean;
        get name(): string
        readonly ANY_NON_NULL_MARKER: "+";
        readonly ANY_MARKER: "*";
    }
    type Marker_ = Marker;
}
declare namespace Internal {
    interface SpawnPlacements$SpawnPredicate <T extends Internal.Entity> {
        abstract test(arg0: Internal.EntityType_<T>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        (arg0: Internal.EntityType<T>, arg1: Internal.ServerLevelAccessor, arg2: Internal.MobSpawnType, arg3: BlockPos, arg4: Internal.RandomSource): boolean;
    }
    type SpawnPlacements$SpawnPredicate_<T extends Internal.Entity> = SpawnPlacements$SpawnPredicate<T>;
    class BooleanProperty extends Internal.Property<boolean> {
        getName(arg0: boolean): string;
        static create(arg0: string): Internal.BooleanProperty;
        getPossibleValues(): Internal.Collection<boolean>;
        getValue(arg0: string): Internal.Optional<boolean>;
        get possibleValues(): Internal.Collection<boolean>
    }
    type BooleanProperty_ = BooleanProperty;
    class EntityJoinLevelEvent extends Internal.EntityEvent {
        constructor()
        constructor(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: boolean)
        constructor(arg0: Internal.Entity_, arg1: Internal.Level_)
        getLevel(): Internal.Level;
        loadedFromDisk(): boolean;
        get level(): Internal.Level
    }
    type EntityJoinLevelEvent_ = EntityJoinLevelEvent;
    class ForkingTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        static readonly CODEC: Internal.Codec<Internal.ForkingTrunkPlacer>;
    }
    type ForkingTrunkPlacer_ = ForkingTrunkPlacer;
    class RenderHandEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.InteractionHand_, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.ItemStack_)
        getPoseStack(): Internal.PoseStack;
        getPartialTick(): number;
        getEquipProgress(): number;
        getHand(): Internal.InteractionHand;
        getInterpolatedPitch(): number;
        getPackedLight(): number;
        getMultiBufferSource(): Internal.MultiBufferSource;
        getItemStack(): Internal.ItemStack;
        getSwingProgress(): number;
        get poseStack(): Internal.PoseStack
        get partialTick(): number
        get equipProgress(): number
        get hand(): Internal.InteractionHand
        get interpolatedPitch(): number
        get packedLight(): number
        get multiBufferSource(): Internal.MultiBufferSource
        get itemStack(): Internal.ItemStack
        get swingProgress(): number
    }
    type RenderHandEvent_ = RenderHandEvent;
    class SpeedControllerBlock extends Internal.HorizontalAxisKineticBlock implements Internal.IBE<Internal.SpeedControllerBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.SpeedControllerBlockEntity>): void;
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
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.SpeedControllerBlockEntity>;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        hideStressImpact(): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getBlockEntityClass(): typeof Internal.SpeedControllerBlockEntity;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.SpeedControllerBlockEntity;
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
        showCapacityWithAnnotation(): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.SpeedControllerBlockEntity>;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.SpeedControllerBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityClass(): typeof Internal.SpeedControllerBlockEntity
        get mod(): string
        get blockEntityType(): Internal.BlockEntityType<Internal.SpeedControllerBlockEntity>
    }
    type SpeedControllerBlock_ = SpeedControllerBlock;
    interface Watchable {
        abstract register(arg0: Internal.WatchService_, ...arg1: Internal.WatchEvent$Kind_<any>[]): Internal.WatchKey;
        abstract register(arg0: Internal.WatchService_, arg1: Internal.WatchEvent$Kind_<any>[], ...arg2: any_[]): Internal.WatchKey;
    }
    type Watchable_ = Watchable;
    interface IRecipeLayoutDrawable <R> {
        abstract getRecipeCategory(): Internal.IRecipeCategory<R>;
        abstract getRecipe(): R;
        abstract getRecipeSlotUnderMouse(arg0: number, arg1: number): Internal.Optional<Internal.IRecipeSlotDrawable>;
        abstract setPosition(arg0: number, arg1: number): void;
        abstract getIngredientUnderMouse<T>(arg0: number, arg1: number, arg2: Internal.IIngredientType_<T>): Internal.Optional<T>;
        abstract drawOverlays(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        abstract drawRecipe(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        abstract getRecipeTransferButtonArea(): Internal.Rect2i;
        abstract getRecipeSlotsView(): Internal.IRecipeSlotsView;
        abstract getRect(): Internal.Rect2i;
        getItemStackUnderMouse(arg0: number, arg1: number): Internal.Optional<Internal.ItemStack>;
        abstract isMouseOver(arg0: number, arg1: number): boolean;
        get recipeCategory(): Internal.IRecipeCategory<R>
        get recipe(): R
        get recipeTransferButtonArea(): Internal.Rect2i
        get recipeSlotsView(): Internal.IRecipeSlotsView
        get rect(): Internal.Rect2i
    }
    type IRecipeLayoutDrawable_<R> = IRecipeLayoutDrawable<R>;
    class ChuteItem extends Internal.BlockItem {
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
    type ChuteItem_ = ChuteItem;
    class Cat extends Internal.TamableAnimal implements Internal.VariantHolder<Internal.CatVariant> {
        constructor(arg0: Internal.EntityType_<Internal.Cat>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getLieDownAmount(arg0: number): number;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getOwner(): Internal.LivingEntity;
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
        isRelaxStateOne(): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        customServerAiStep(): void;
        setCollarColor(arg0: Internal.DyeColor_): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        setVariant(arg0: Internal.CatVariant_): void;
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
        getCollarColor(): Internal.DyeColor;
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
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getVariant(): Internal.CatVariant;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setRelaxStateOne(arg0: boolean): void;
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
        hiss(): void;
        getRelaxStateOneAmount(arg0: number): number;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        isLying(): boolean;
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
        getResourceLocation(): ResourceLocation;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDistanceSq(pos: BlockPos_): number;
        getProfile(): Internal.GameProfile;
        getLieDownAmountTail(arg0: number): number;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        setVariant(arg0: any): void;
        runCommand(command: string): number;
        setLying(arg0: boolean): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get owner(): Internal.LivingEntity
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get relaxStateOne(): boolean
        get displayName(): Internal.Component
        set collarColor(arg0: Internal.DyeColor_)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        set variant(arg0: Internal.CatVariant_)
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
        get collarColor(): Internal.DyeColor
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
        get variant(): Internal.CatVariant
        set relaxStateOne(arg0: boolean)
        get feetArmorItem(): Internal.ItemStack
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get lying(): boolean
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        get resourceLocation(): ResourceLocation
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        set variant(arg0: any)
        set lying(arg0: boolean)
        static readonly TEMPT_SPEED_MOD: 0.6;
        static readonly SPRINT_SPEED_MOD: 1.33;
        static readonly WALK_SPEED_MOD: 0.8;
    }
    type Cat_ = Cat;
    class ShapelessKubeJSRecipe$SerializerKJS implements Internal.RecipeSerializer<Internal.ShapelessKubeJSRecipe> {
        constructor()
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ShapelessKubeJSRecipe;
        fromNetwork(id: ResourceLocation_, buf: Internal.FriendlyByteBuf_): Internal.ShapelessKubeJSRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromJson(id: ResourceLocation_, json: Internal.JsonObject_): Internal.ShapelessKubeJSRecipe;
        toNetwork(buf: Internal.FriendlyByteBuf_, r: Internal.ShapelessKubeJSRecipe_): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type ShapelessKubeJSRecipe$SerializerKJS_ = ShapelessKubeJSRecipe$SerializerKJS;
    interface BlockBuilderProvider {
        getBlockBuilder(): Internal.BlockBuilder;
        get blockBuilder(): Internal.BlockBuilder
    }
    type BlockBuilderProvider_ = BlockBuilderProvider;
    class ShelfBlock extends Internal.HorizontalDirectionalBlock implements Internal.EntityBlock, Internal.Hammerable {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
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
        newBlockEntity(pos: BlockPos_, state: Internal.BlockState_): Internal.BlockEntity;
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
        onHammer(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, side: Internal.Direction_, user: Internal.Player_, hitPos: Vec3d_): void;
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
        static readonly SHAPE: Internal.EnumProperty<Internal.DirectionalBlockProperty>;
        static readonly TYPE: Internal.IntegerProperty;
    }
    type ShelfBlock_ = ShelfBlock;
    interface TooltipComponent {
    }
    type TooltipComponent_ = TooltipComponent;
    class FullChunkStatus extends Internal.Enum<Internal.FullChunkStatus> {
        static valueOf(arg0: string): Internal.FullChunkStatus;
        isOrAfter(arg0: Internal.FullChunkStatus_): boolean;
        static values(): Internal.FullChunkStatus[];
        static readonly BLOCK_TICKING: Internal.FullChunkStatus;
        static readonly INACCESSIBLE: Internal.FullChunkStatus;
        static readonly ENTITY_TICKING: Internal.FullChunkStatus;
        static readonly FULL: Internal.FullChunkStatus;
    }
    type FullChunkStatus_ = "inaccessible" | "entity_ticking" | "full" | FullChunkStatus | "block_ticking";
    class BeltInventory {
        constructor(arg0: Internal.BeltBlockEntity_)
        write(): Internal.CompoundTag;
        applyToEachWithin(arg0: number, arg1: number, arg2: Internal.Function_<Internal.TransportedItemStack, Internal.TransportedItemStackHandlerBehaviour$TransportedResult>): void;
        read(arg0: Internal.CompoundTag_): void;
        addItem(arg0: Internal.TransportedItemStack_): void;
        getStackAtOffset(arg0: number): Internal.TransportedItemStack;
        getTransportedItems(): Internal.List<Internal.TransportedItemStack>;
        canInsertAtFromSide(arg0: number, arg1: Internal.Direction_): boolean;
        canInsertAt(arg0: number): boolean;
        tick(): void;
        ejectAll(): void;
        eject(arg0: Internal.TransportedItemStack_): void;
        get transportedItems(): Internal.List<Internal.TransportedItemStack>
    }
    type BeltInventory_ = BeltInventory;
    class Biome$Precipitation extends Internal.Enum<Internal.Biome$Precipitation> {
        static valueOf(arg0: string): Internal.Biome$Precipitation;
        static values(): Internal.Biome$Precipitation[];
        static readonly RAIN: Internal.Biome$Precipitation;
        static readonly NONE: Internal.Biome$Precipitation;
        static readonly SNOW: Internal.Biome$Precipitation;
    }
    type Biome$Precipitation_ = "snow" | "rain" | Biome$Precipitation | "none";
    class BeltTunnelBlock extends Internal.Block implements Internal.IWrenchable, Internal.IBE<Internal.BeltTunnelBlockEntity> {
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
        static isJunction(arg0: Internal.BlockState_): boolean;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        static hasWindow(arg0: Internal.BlockState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.BeltTunnelBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BeltTunnelBlockEntity;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isValidPositionForPlacement(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getBlockEntityType(): Internal.BlockEntityType<Internal.BeltTunnelBlockEntity>;
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
        updateTunnel(arg0: Internal.LevelAccessor_, arg1: BlockPos_): void;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static isStraight(arg0: Internal.BlockState_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.BeltTunnelBlockEntity>): void;
        getBlockEntityClass(): typeof Internal.BeltTunnelBlockEntity;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.BeltTunnelBlockEntity>;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        get blockEntityType(): Internal.BlockEntityType<Internal.BeltTunnelBlockEntity>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityClass(): typeof Internal.BeltTunnelBlockEntity
        static readonly SHAPE: Internal.Property<Internal.BeltTunnelBlock$Shape>;
        static readonly HORIZONTAL_AXIS: Internal.Property<Internal.Direction$Axis>;
    }
    type BeltTunnelBlock_ = BeltTunnelBlock;
    class EnderpearlItem extends Internal.Item {
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
    type EnderpearlItem_ = EnderpearlItem;
    class MarkerManager$Log4jMarker implements Internal.StringBuilderFormattable, org.apache.logging.log4j.Marker {
        constructor(name: string)
        formatTo(sb: Internal.StringBuilder_): void;
        getParents(): org.apache.logging.log4j.Marker[];
        hasParents(): boolean;
        addParents(...parentMarkers: org.apache.logging.log4j.Marker_[]): org.apache.logging.log4j.Marker;
        isInstanceOf(markerName: string): boolean;
        getName(): string;
        isInstanceOf(marker: org.apache.logging.log4j.Marker_): boolean;
        setParents(...markers: org.apache.logging.log4j.Marker_[]): org.apache.logging.log4j.Marker;
        remove(parent: org.apache.logging.log4j.Marker_): boolean;
        get parents(): org.apache.logging.log4j.Marker[]
        get name(): string
        set parents(...markers: org.apache.logging.log4j.Marker_[])
    }
    type MarkerManager$Log4jMarker_ = MarkerManager$Log4jMarker;
    class LogicalSide extends Internal.Enum<Internal.LogicalSide> {
        isClient(): boolean;
        isServer(): boolean;
        static valueOf(arg0: string): Internal.LogicalSide;
        static values(): Internal.LogicalSide[];
        get client(): boolean
        get server(): boolean
        static readonly CLIENT: Internal.LogicalSide;
        static readonly SERVER: Internal.LogicalSide;
    }
    type LogicalSide_ = "server" | "client" | LogicalSide;
    class ExplosionDamageCalculator {
        constructor()
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_): Internal.Optional<number>;
    }
    type ExplosionDamageCalculator_ = ExplosionDamageCalculator;
    interface IJetpack {
        abstract acceleration(arg0: Internal.IJetpack$Context_): number;
        abstract verticalSpeed(arg0: Internal.IJetpack$Context_): number;
        abstract hoverHorizontalSpeed(arg0: Internal.IJetpack$Context_): number;
        abstract isHovering(arg0: Internal.IJetpack$Context_): boolean;
        abstract hoverSpeed(arg0: Internal.IJetpack$Context_): number;
        abstract hoverVerticalSpeed(arg0: Internal.IJetpack$Context_): number;
        abstract createParticles(): Internal.ParticleOptions;
        abstract isUsable(arg0: Internal.IJetpack$Context_): boolean;
        abstract isThrusting(arg0: Internal.IJetpack$Context_): boolean;
        abstract hoverType(arg0: Internal.IJetpack$Context_): Internal.ControlType;
        abstract isValid(arg0: Internal.IJetpack$Context_): boolean;
        abstract horizontalSpeed(arg0: Internal.IJetpack$Context_): number;
        abstract activeType(arg0: Internal.IJetpack$Context_): Internal.ControlType;
        abstract getThrusters(arg0: Internal.IJetpack$Context_): Internal.List<Vec3d>;
        abstract boostsElytra(): boolean;
        abstract swimModifier(arg0: Internal.IJetpack$Context_): number;
        abstract onUse(arg0: Internal.IJetpack$Context_): void;
    }
    type IJetpack_ = IJetpack;
    class SnorkelItem extends Internal.MobEffectItem {
        constructor()
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
    type SnorkelItem_ = SnorkelItem;
    abstract class ValueObject {
        constructor()
    }
    type ValueObject_ = ValueObject;
    class EnumMap <K extends Internal.Enum<K>, V> extends Internal.AbstractMap<K, V> implements Internal.Cloneable, Internal.Serializable {
        constructor(arg0: Internal.Map_<K, V>)
        constructor(arg0: K)
        constructor(arg0: Internal.EnumMap_<K, V>)
        clone(): any;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        replace(arg0: K, arg1: V): V;
        static of<K, V>(): Internal.Map<K, V>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        getOrDefault(arg0: any, arg1: V): V;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: K, arg1: V): V;
        get(arg0: any): V;
        put(arg0: any, arg1: any): any;
        remove(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        keySet(): Internal.Set<K>;
        putIfAbsent(arg0: K, arg1: V): V;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        values(): Internal.Collection<V>;
        entrySet(): Internal.Set<Internal.Map$Entry<K, V>>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
    }
    type EnumMap_<K extends Internal.Enum<K>, V> = EnumMap<K, V>;
    class WeighedSoundEvents implements Internal.Weighted<Internal.Sound> {
        constructor(arg0: ResourceLocation_, arg1: string)
        getSound(arg0: Internal.RandomSource_): any;
        addSound(arg0: Internal.Weighted_<Internal.Sound>): void;
        getWeight(): number;
        preloadIfRequired(arg0: Internal.SoundEngine_): void;
        getSubtitle(): Internal.Component;
        get weight(): number
        get subtitle(): Internal.Component
    }
    type WeighedSoundEvents_ = WeighedSoundEvents;
    class BehaviourType <T extends Internal.BlockEntityBehaviour> {
        constructor()
        constructor(arg0: string)
        getName(): string;
        get name(): string
    }
    type BehaviourType_<T extends Internal.BlockEntityBehaviour> = BehaviourType<T>;
    interface AnnotatedType extends Internal.AnnotatedElement {
        getAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        getDeclaredAnnotation<T extends Internal.Annotation>(arg0: T): T;
        getAnnotatedOwnerType(): this;
        getDeclaredAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        abstract getAnnotation<T extends Internal.Annotation>(arg0: T): T;
        abstract getAnnotations(): Internal.Annotation[];
        abstract getDeclaredAnnotations(): Internal.Annotation[];
        abstract getType(): Internal.Type;
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        get annotatedOwnerType(): Internal.AnnotatedType
        get annotations(): Internal.Annotation[]
        get declaredAnnotations(): Internal.Annotation[]
        get type(): Internal.Type
    }
    type AnnotatedType_ = AnnotatedType;
    class StainedGlassBlock extends Internal.AbstractGlassBlock implements Internal.BeaconBeamBlock {
        constructor(arg0: Internal.DyeColor_, arg1: Internal.BlockBehaviour$Properties_)
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
        getColor(): Internal.DyeColor;
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
        get color(): Internal.DyeColor
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type StainedGlassBlock_ = StainedGlassBlock;
    abstract class AbstractObject2ObjectFunction <K, V> implements Internal.Object2ObjectFunction<K, V>, Internal.Serializable {
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2ObjectFunction<V>;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2ObjectFunction<V>;
        containsKey(arg0: any): boolean;
        put(arg0: K, arg1: V): V;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Object2FloatFunction<K>;
        abstract get(arg0: any): V;
        remove(arg0: any): V;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2ObjectFunction<V>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Object2LongFunction<K>;
        apply(arg0: K): V;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Object2ReferenceFunction<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2ObjectFunction<V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Object2ShortFunction<K>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Object2DoubleFunction<K>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Object2IntFunction<K>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2ObjectFunction<V>;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2ObjectFunction<T, V>;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2ObjectFunction<V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Object2ByteFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2ObjectFunction<T, V>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2ObjectFunction<V>;
        size(): number;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Object2CharFunction<K>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        clear(): void;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Object2ObjectFunction<K, T>;
        defaultReturnValue(): V;
        static identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
    }
    type AbstractObject2ObjectFunction_<K, V> = AbstractObject2ObjectFunction<K, V>;
    class WrapFactory {
        constructor()
        isJavaPrimitiveWrap(): boolean;
        setJavaPrimitiveWrap(value: boolean): void;
        wrap(cx: Internal.Context_, scope: Internal.Scriptable_, obj: any, staticType: typeof any): any;
        wrapJavaClass(cx: Internal.Context_, scope: Internal.Scriptable_, javaClass: typeof any): Internal.Scriptable;
        wrapAsJavaObject(cx: Internal.Context_, scope: Internal.Scriptable_, javaObject: any, staticType: typeof any): Internal.Scriptable;
        wrapNewObject(scope: Internal.Scriptable_, obj: any, cx: Internal.Context_): Internal.Scriptable;
        get javaPrimitiveWrap(): boolean
        set javaPrimitiveWrap(value: boolean)
    }
    type WrapFactory_ = WrapFactory;
    interface FocusNavigationEvent {
        abstract getVerticalDirectionForInitialFocus(): Internal.ScreenDirection;
        get verticalDirectionForInitialFocus(): Internal.ScreenDirection
        (): Internal.ScreenDirection_;
    }
    type FocusNavigationEvent_ = FocusNavigationEvent;
    class FluteItem extends net.mehvahdjukaar.supplementaries.common.items.InstrumentItem implements Internal.IThirdPersonAnimationProvider, Internal.IThirdPersonSpecialItemRenderer, Internal.IFirstPersonAnimationProvider {
        constructor(properties: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        poseRightArm<T extends Internal.LivingEntity>(stack: Internal.ItemStack_, model: Internal.HumanoidModel_<T>, entity: T, mainHand: Internal.HumanoidArm_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        static interactWithPet(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_, hand: Internal.InteractionHand_): boolean;
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
        poseLeftArm<T extends Internal.LivingEntity>(stack: Internal.ItemStack_, model: Internal.HumanoidModel_<T>, entity: T, mainHand: Internal.HumanoidArm_): boolean;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        static attachToItem(target: Internal.Item_, object: Internal.IThirdPersonAnimationProvider_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static attachToItem(target: Internal.Item_, object: Internal.IThirdPersonSpecialItemRenderer_): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        static attachToItem(target: Internal.Item_, object: Internal.IFirstPersonAnimationProvider_): void;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        renderThirdPersonItem<T extends Internal.Player, M extends Internal.EntityModel<T> & Internal.ArmedModel & Internal.HeadedModel>(parentModel: M, entity: Internal.LivingEntity_, stack: Internal.ItemStack_, humanoidArm: Internal.HumanoidArm_, poseStack: Internal.PoseStack_, bufferSource: Internal.MultiBufferSource_, light: number): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        isTwoHanded(): boolean;
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
        static get(target: Internal.Item_): Internal.IThirdPersonAnimationProvider;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        animateItemFirstPerson(entity: Internal.LivingEntity_, stack: Internal.ItemStack_, hand: Internal.InteractionHand_, matrixStack: Internal.PoseStack_, partialTicks: number, pitch: number, attackAnim: number, handHeight: number): void;
        static getMaxHeadXRot(xRot: number): number;
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
        get twoHanded(): boolean
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type FluteItem_ = FluteItem;
    interface Chronology extends Internal.Comparable<Internal.Chronology> {
        dateNow(arg0: Internal.ZoneId_): Internal.ChronoLocalDate;
        abstract eras(): Internal.List<Internal.Era>;
        from(arg0: Internal.TemporalAccessor_): this;
        zonedDateTime(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.ChronoZonedDateTime<Internal.ChronoLocalDate>;
        localDateTime(arg0: Internal.TemporalAccessor_): Internal.ChronoLocalDateTime<Internal.ChronoLocalDate>;
        compareTo(arg0: any): number;
        abstract resolveDate(arg0: Internal.Map_<Internal.TemporalField, number>, arg1: Internal.ResolverStyle_): Internal.ChronoLocalDate;
        dateNow(arg0: Internal.Clock_): Internal.ChronoLocalDate;
        abstract getCalendarType(): string;
        abstract compareTo(arg0: Internal.Chronology_): number;
        of(arg0: string): this;
        abstract range(arg0: Internal.ChronoField_): Internal.ValueRange;
        abstract date(arg0: number, arg1: number, arg2: number): Internal.ChronoLocalDate;
        abstract prolepticYear(arg0: Internal.Era_, arg1: number): number;
        abstract toString(): string;
        abstract eraOf(arg0: number): Internal.Era;
        period(arg0: number, arg1: number, arg2: number): Internal.ChronoPeriod;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.ZoneOffset_): number;
        getAvailableChronologies(): Internal.Set<Internal.Chronology>;
        abstract getId(): string;
        abstract isLeapYear(arg0: number): boolean;
        dateYearDay(arg0: Internal.Era_, arg1: number, arg2: number): Internal.ChronoLocalDate;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        zonedDateTime(arg0: Internal.TemporalAccessor_): Internal.ChronoZonedDateTime<Internal.ChronoLocalDate>;
        abstract date(arg0: Internal.TemporalAccessor_): Internal.ChronoLocalDate;
        abstract hashCode(): number;
        abstract dateEpochDay(arg0: number): Internal.ChronoLocalDate;
        abstract dateYearDay(arg0: number, arg1: number): Internal.ChronoLocalDate;
        date(arg0: Internal.Era_, arg1: number, arg2: number, arg3: number): Internal.ChronoLocalDate;
        abstract equals(arg0: any): boolean;
        epochSecond(arg0: Internal.Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.ZoneOffset_): number;
        ofLocale(arg0: Internal.Locale_): this;
        dateNow(): Internal.ChronoLocalDate;
        get calendarType(): string
        get availableChronologies(): Internal.Set<Internal.Chronology>
        get id(): string
    }
    type Chronology_ = Chronology;
    class HotCocoaItem extends Internal.DrinkableItem {
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
    type HotCocoaItem_ = HotCocoaItem;
    class ClientboundPlayerInfoUpdatePacket$Action extends Internal.Enum<Internal.ClientboundPlayerInfoUpdatePacket$Action> {
        static values(): Internal.ClientboundPlayerInfoUpdatePacket$Action[];
        static valueOf(arg0: string): Internal.ClientboundPlayerInfoUpdatePacket$Action;
        static readonly UPDATE_DISPLAY_NAME: Internal.ClientboundPlayerInfoUpdatePacket$Action;
        static readonly INITIALIZE_CHAT: Internal.ClientboundPlayerInfoUpdatePacket$Action;
        static readonly UPDATE_LISTED: Internal.ClientboundPlayerInfoUpdatePacket$Action;
        static readonly UPDATE_GAME_MODE: Internal.ClientboundPlayerInfoUpdatePacket$Action;
        static readonly ADD_PLAYER: Internal.ClientboundPlayerInfoUpdatePacket$Action;
        static readonly UPDATE_LATENCY: Internal.ClientboundPlayerInfoUpdatePacket$Action;
    }
    type ClientboundPlayerInfoUpdatePacket$Action_ = "update_game_mode" | "update_display_name" | ClientboundPlayerInfoUpdatePacket$Action | "update_latency" | "initialize_chat" | "update_listed" | "add_player";
    interface Mutable <T> {
        abstract setValue(arg0: T): void;
        abstract getValue(): T;
        set value(arg0: T)
        get value(): T
    }
    type Mutable_<T> = Mutable<T>;
    class InputConstants$Type extends Internal.Enum<Internal.InputConstants$Type> {
        getOrCreate(arg0: number): Internal.InputConstants$Key;
        static valueOf(arg0: string): Internal.InputConstants$Type;
        static values(): Internal.InputConstants$Type[];
        static readonly KEYSYM: Internal.InputConstants$Type;
        static readonly MOUSE: Internal.InputConstants$Type;
        static readonly SCANCODE: Internal.InputConstants$Type;
    }
    type InputConstants$Type_ = "keysym" | "mouse" | InputConstants$Type | "scancode";
    class ViewportEvent$ComputeFogColor extends Internal.ViewportEvent {
        constructor()
        constructor(arg0: Internal.Camera_, arg1: number, arg2: number, arg3: number, arg4: number)
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        setBlue(arg0: number): void;
        get red(): number
        get green(): number
        get blue(): number
        set red(arg0: number)
        set green(arg0: number)
        set blue(arg0: number)
    }
    type ViewportEvent$ComputeFogColor_ = ViewportEvent$ComputeFogColor;
    interface VillagerTrades$ItemListing {
        abstract getOffer(arg0: Internal.Entity_, arg1: Internal.RandomSource_): Internal.MerchantOffer;
        (arg0: Internal.Entity, arg1: Internal.RandomSource): Internal.MerchantOffer_;
    }
    type VillagerTrades$ItemListing_ = VillagerTrades$ItemListing;
    class TrimPattern extends Internal.Record {
        constructor(arg0: ResourceLocation_, arg1: Internal.Holder_<Internal.Item>, arg2: Internal.Component_)
        description(): Internal.Component;
        assetId(): ResourceLocation;
        templateItem(): Internal.Holder<Internal.Item>;
        copyWithStyle(arg0: Internal.Holder_<Internal.TrimMaterial>): Internal.Component;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.TrimPattern>>;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.TrimPattern>;
    }
    type TrimPattern_ = Special.TrimPattern | TrimPattern;
    class BigDripleafBlock extends Internal.HorizontalDirectionalBlock implements Internal.SimpleWaterloggedBlock, Internal.BonemealableBlock {
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
        static placeWithRandomHeight(arg0: Internal.LevelAccessor_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.Direction_): void;
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
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type BigDripleafBlock_ = BigDripleafBlock;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    class CeilingBannerBlock extends Internal.AbstractBannerBlock {
        constructor(color: Internal.DyeColor_, properties: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
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
        static readonly ATTACHED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type CeilingBannerBlock_ = CeilingBannerBlock;
    interface AccessorMob {
        abstract bookshelf$getAmbientSound(): Internal.SoundEvent;
        (): Internal.SoundEvent_;
    }
    type AccessorMob_ = AccessorMob;
    class ChorusPlantBlock extends Internal.PipeBlock {
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
        getStateForPlacement(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type ChorusPlantBlock_ = ChorusPlantBlock;
    interface IntCollection extends Internal.IntIterable, Internal.Collection<number> {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        abstract isEmpty(): boolean;
        abstract contains(arg0: number): boolean;
        abstract toIntArray(): number[];
        forEach(arg0: Internal.IntConsumer_): void;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract toArray(arg0: number[]): number[];
        intParallelStream(): Internal.IntStream;
        abstract removeAll(arg0: Internal.IntCollection_): boolean;
        intIterator(): Internal.IntIterator;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        abstract iterator(): Internal.IntIterator;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        abstract addAll(arg0: Internal.IntCollection_): boolean;
        abstract retainAll(arg0: Internal.IntCollection_): boolean;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        abstract add(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        abstract containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        abstract hashCode(): number;
        abstract size(): number;
        spliterator(): Internal.Spliterator<any>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract rem(arg0: number): boolean;
        abstract clear(): void;
        abstract equals(arg0: any): boolean;
        get empty(): boolean
    }
    type IntCollection_ = IntCollection;
    class ShapedDurabilityRecipe$Serializer implements Internal.RecipeSerializer<Internal.ShapedDurabilityRecipe> {
        constructor()
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.ShapedDurabilityRecipe;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ShapedDurabilityRecipe_): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ShapedDurabilityRecipe;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ShapedDurabilityRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type ShapedDurabilityRecipe$Serializer_ = ShapedDurabilityRecipe$Serializer;
    interface IoSupplier <T> {
        create(arg0: Internal.Path_): Internal.IoSupplier<Internal.InputStream>;
        abstract get(): T;
        create(arg0: Internal.ZipFile_, arg1: Internal.ZipEntry_): Internal.IoSupplier<Internal.InputStream>;
        (): T;
    }
    type IoSupplier_<T> = IoSupplier<T>;
    class AddLakeProperties {
        constructor()
        setInner(p: BlockStatePredicate_): void;
        setOuter(p: BlockStatePredicate_): void;
        set inner(p: BlockStatePredicate_)
        set outer(p: BlockStatePredicate_)
        retrogen: number;
        barrier: BlockStatePredicate;
        worldgenLayer: Internal.GenerationStep$Decoration;
        chance: number;
        biomes: Internal.BiomeFilter;
        id: ResourceLocation;
        fluid: BlockStatePredicate;
    }
    type AddLakeProperties_ = AddLakeProperties;
    class BlastFurnaceBlockEntity extends Internal.AbstractFurnaceBlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Internal.Player_): void;
        count(ingredient: Internal.Ingredient_): number;
        static tryClear(arg0: any): void;
        count(): number;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        countItem(arg0: Internal.Item_): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        startOpen(arg0: Internal.Player_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        setChanged(): void;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        setRecipeUsed(arg0: Internal.Level_, arg1: Internal.ServerPlayer_, arg2: Internal.Recipe_<any>): boolean;
        kjs$self(): Internal.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        hasCustomName(): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        get empty(): boolean
        get slots(): number
        get height(): number
        get width(): number
        get maxStackSize(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get modelData(): Internal.ModelData
        get mutable(): boolean
        get renderBoundingBox(): Internal.AABB
    }
    type BlastFurnaceBlockEntity_ = BlastFurnaceBlockEntity;
    class TagKey <T> extends Internal.Record {
        constructor(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: ResourceLocation_)
        static create<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: ResourceLocation_): Internal.TagKey<T>;
        location(): ResourceLocation;
        static codec<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Codec<Internal.TagKey<T>>;
        registry(): Internal.ResourceKey<Internal.Registry<T>>;
        cast<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Optional<Internal.TagKey<E>>;
        static hashedCodec<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Codec<Internal.TagKey<T>>;
        isFor(arg0: Internal.ResourceKey_<Internal.Registry<any>>): boolean;
    }
    type TagKey_<T> = TagKey<T>;
    class MechanicalPressBlockEntity extends Internal.BasinOperatingBlockEntity implements Internal.PressingBehaviour$PressingBehaviourSpecifics {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        tryProcessInBasin(arg0: boolean): boolean;
        static canCompress<C extends Internal.Container>(arg0: Internal.Recipe_<C>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getKineticSpeed(): number;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        onItemPressed(arg0: Internal.ItemStack_): void;
        tryProcessInWorld(arg0: Internal.ItemEntity_, arg1: boolean): boolean;
        getRecipe(arg0: Internal.ItemStack_): Internal.Optional<Internal.PressingRecipe>;
        tryProcessOnBelt(arg0: Internal.TransportedItemStack_, arg1: Internal.List_<Internal.ItemStack>, arg2: boolean): boolean;
        getPressingBehaviour(): Internal.PressingBehaviour;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        onPressingCompleted(): void;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getParticleAmount(): number;
        canProcessInBulk(): boolean;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get kineticSpeed(): number
        get pressingBehaviour(): Internal.PressingBehaviour
        get modelData(): Internal.ModelData
        get particleAmount(): number
        pressingBehaviour: Internal.PressingBehaviour;
    }
    type MechanicalPressBlockEntity_ = MechanicalPressBlockEntity;
    class BlobFoliagePlacer extends Internal.FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_, arg2: number)
        static readonly CODEC: Internal.Codec<Internal.BlobFoliagePlacer>;
    }
    type BlobFoliagePlacer_ = BlobFoliagePlacer;
    class ClockworkBearingBlock extends Internal.BearingBlock implements Internal.IBE<Internal.ClockworkBearingBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        getBlockEntityType(): Internal.BlockEntityType<Internal.ClockworkBearingBlockEntity>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.ClockworkBearingBlockEntity>;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.ClockworkBearingBlockEntity>): void;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockEntityClass(): typeof Internal.ClockworkBearingBlockEntity;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ClockworkBearingBlockEntity;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        hideStressImpact(): boolean;
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.ClockworkBearingBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get blockEntityType(): Internal.BlockEntityType<Internal.ClockworkBearingBlockEntity>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockEntityClass(): typeof Internal.ClockworkBearingBlockEntity
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type ClockworkBearingBlock_ = ClockworkBearingBlock;
    class ScreenEvent$KeyPressed$Pre extends Internal.ScreenEvent$KeyPressed {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
    }
    type ScreenEvent$KeyPressed$Pre_ = ScreenEvent$KeyPressed$Pre;
    interface IntIterator extends Internal.PrimitiveIterator$OfInt {
        forEachRemaining(arg0: any): void;
        remove(): void;
        /**
         * @deprecated
        */
        next(): any;
        skip(arg0: number): number;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        abstract hasNext(): boolean;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        abstract nextInt(): number;
    }
    type IntIterator_ = IntIterator;
    class KitchenHoodPipeBlock extends Internal.SimpleBlock implements Internal.Hammerable {
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
        onHammer(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, side: Internal.Direction_, user: Internal.Player_, hitPos: Vec3d_): void;
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
        static readonly CORNER: Internal.BooleanProperty;
        static readonly EAST_SHAPE: Internal.ArrayVoxelShape;
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly SOUTH_SHAPE: Internal.ArrayVoxelShape;
        static readonly WEST_SHAPE: Internal.ArrayVoxelShape;
        static readonly NORTH_SHAPE: Internal.ArrayVoxelShape;
    }
    type KitchenHoodPipeBlock_ = KitchenHoodPipeBlock;
    class GearshiftBlock extends Internal.AbstractEncasedShaftBlock implements Internal.IBE<Internal.SplitShaftBlockEntity> {
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
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.SplitShaftBlockEntity>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.SplitShaftBlockEntity>;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        detachKinetics(arg0: Internal.Level_, arg1: BlockPos_, arg2: boolean): void;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        hideStressImpact(): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.SplitShaftBlockEntity>): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.SplitShaftBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.SplitShaftBlockEntity;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBlockEntityClass(): typeof Internal.SplitShaftBlockEntity;
        showCapacityWithAnnotation(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.SplitShaftBlockEntity>
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityClass(): typeof Internal.SplitShaftBlockEntity
        static readonly POWERED: Internal.BooleanProperty;
    }
    type GearshiftBlock_ = GearshiftBlock;
    class InputEvent$Key extends Internal.InputEvent {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getModifiers(): number;
        getKey(): number;
        getScanCode(): number;
        getAction(): number;
        get modifiers(): number
        get key(): number
        get scanCode(): number
        get action(): number
    }
    type InputEvent$Key_ = InputEvent$Key;
    class BeltBlockEntity$BeltLighter implements Internal.LightListener {
        constructor(arg0: Internal.BeltBlockEntity_)
        getVolume(): Internal.ImmutableBox;
        onLightPacket(arg0: number, arg1: number): void;
        onLightUpdate(arg0: Internal.LightLayer_, arg1: Internal.ImmutableBox_): void;
        isListenerInvalid(): boolean;
        getPackedLight(arg0: number): number;
        lightSegments(): number;
        get volume(): Internal.ImmutableBox
        get listenerInvalid(): boolean
    }
    type BeltBlockEntity$BeltLighter_ = BeltBlockEntity$BeltLighter;
    class TypeWrappers {
        constructor()
        registerSimple<T>(target: T, factory: Internal.TypeWrapperFactory$Simple_<T>): void;
        register<T>(target: T, validator: Internal.Predicate_<any>, factory: Internal.TypeWrapperFactory_<T>): void;
        register<T>(target: T, factory: Internal.TypeWrapperFactory_<T>): void;
        getWrapperFactory(target: typeof any, from: any): Internal.TypeWrapperFactory<any>;
        registerSimple<T>(target: T, validator: Internal.Predicate_<any>, factory: Internal.TypeWrapperFactory$Simple_<T>): void;
    }
    type TypeWrappers_ = TypeWrappers;
    class AxolotlAttackablesSensor extends Internal.NearestVisibleLivingEntitySensor {
        constructor()
        static readonly TARGET_DETECTION_DISTANCE: 8.0;
    }
    type AxolotlAttackablesSensor_ = AxolotlAttackablesSensor;
    class FeastBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Supplier_<Internal.Item>, arg2: boolean)
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
        getServingItem(arg0: Internal.BlockState_): Internal.ItemStack;
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
        getMaxServings(): number;
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
        getServingsProperty(): Internal.IntegerProperty;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get maxServings(): number
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get servingsProperty(): Internal.IntegerProperty
        readonly servingItem: Internal.Supplier<Internal.Item>;
        readonly hasLeftovers: boolean;
        static readonly FACING: Internal.DirectionProperty;
        static readonly SERVINGS: Internal.IntegerProperty;
    }
    type FeastBlock_ = FeastBlock;
    class PlayerDestroyItemEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.InteractionHand_)
        getEntity(): Internal.LivingEntity;
        getOriginal(): Internal.ItemStack;
        getHand(): Internal.InteractionHand;
        get entity(): Internal.LivingEntity
        get original(): Internal.ItemStack
        get hand(): Internal.InteractionHand
    }
    type PlayerDestroyItemEvent_ = PlayerDestroyItemEvent;
    class DataResult <R> implements Internal.App<Internal.DataResult$Mu, R> {
        get(): Internal.Either<R, Internal.DataResult$PartialResult<R>>;
        static success<R>(arg0: R): Internal.DataResult<R>;
        addLifecycle(arg0: Internal.Lifecycle_): this;
        error(): Internal.Optional<Internal.DataResult$PartialResult<R>>;
        static instance(): Internal.DataResult$Instance;
        static error<R>(arg0: Internal.Supplier_<string>): Internal.DataResult<R>;
        setPartial(arg0: Internal.Supplier_<R>): this;
        result(): Internal.Optional<R>;
        static partialGet<K, V>(arg0: Internal.Function_<K, V>, arg1: Internal.Supplier_<string>): Internal.Function<K, Internal.DataResult<V>>;
        static unbox<R>(arg0: Internal.App_<Internal.DataResult$Mu, R>): Internal.DataResult<R>;
        apply2stable<R2, S>(arg0: Internal.BiFunction_<R, R2, S>, arg1: Internal.DataResult_<R2>): Internal.DataResult<S>;
        static error<R>(arg0: Internal.Supplier_<string>, arg1: Internal.Lifecycle_): Internal.DataResult<R>;
        ap<R2>(arg0: Internal.DataResult_<Internal.Function<R, R2>>): Internal.DataResult<R2>;
        static error<R>(arg0: Internal.Supplier_<string>, arg1: R, arg2: Internal.Lifecycle_): Internal.DataResult<R>;
        static success<R>(arg0: R, arg1: Internal.Lifecycle_): Internal.DataResult<R>;
        mapError(arg0: Internal.UnaryOperator_<string>): this;
        lifecycle(): Internal.Lifecycle;
        setPartial(arg0: R): this;
        setLifecycle(arg0: Internal.Lifecycle_): this;
        resultOrPartial(arg0: Internal.Consumer_<string>): Internal.Optional<R>;
        apply3<R2, R3, S>(arg0: Internal.Function3_<R, R2, R3, S>, arg1: Internal.DataResult_<R2>, arg2: Internal.DataResult_<R3>): Internal.DataResult<S>;
        map<T>(arg0: Internal.Function_<R, T>): Internal.DataResult<T>;
        static error<R>(arg0: Internal.Supplier_<string>, arg1: R): Internal.DataResult<R>;
        flatMap<R2>(arg0: Internal.Function_<R, Internal.DataResult<R2>>): Internal.DataResult<R2>;
        apply2<R2, S>(arg0: Internal.BiFunction_<R, R2, S>, arg1: Internal.DataResult_<R2>): Internal.DataResult<S>;
        getOrThrow(arg0: boolean, arg1: Internal.Consumer_<string>): R;
        promotePartial(arg0: Internal.Consumer_<string>): this;
        set partial(arg0: Internal.Supplier_<R>)
        set partial(arg0: R)
        set lifecycle(arg0: Internal.Lifecycle_)
    }
    type DataResult_<R> = DataResult<R>;
    class SurfaceRelativeThresholdFilter extends Internal.PlacementFilter {
        static of(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): Internal.SurfaceRelativeThresholdFilter;
        static readonly CODEC: Internal.Codec<Internal.SurfaceRelativeThresholdFilter>;
    }
    type SurfaceRelativeThresholdFilter_ = SurfaceRelativeThresholdFilter;
    interface FileConfig extends Internal.AutoCloseable, Internal.Config {
        abstract add(arg0: Internal.List_<string>, arg1: any): boolean;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getInt(arg0: Internal.List_<string>): number;
        getByteOrElse(arg0: string, arg1: number): number;
        getShortOrElse(arg0: string, arg1: number): number;
        concurrentCopy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.ConfigFormat_<any>): Internal.Config;
        getShortOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getIntOrElse(arg0: Internal.List_<string>, arg1: number): number;
        abstract getRaw<T>(arg0: Internal.List_<string>): T;
        ofConcurrent(arg0: string, arg1: Internal.ConfigFormat_<any>): this;
        update(arg0: Internal.List_<string>, arg1: any): void;
        builder(arg0: Internal.File_, arg1: Internal.ConfigFormat_<any>): Internal.FileConfigBuilder;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.ConfigFormat_<any>): Internal.Config;
        wrap(arg0: Internal.Map_<string, any>, arg1: Internal.ConfigFormat_<any>): Internal.Config;
        getOptionalLong(arg0: string): Internal.OptionalLong;
        remove<T>(arg0: string): T;
        of(arg0: Internal.ConfigFormat_<Internal.Config>): Internal.Config;
        putAll(arg0: Internal.UnmodifiableConfig_): void;
        abstract createSubConfig(): Internal.Config;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        inMemory(): Internal.Config;
        add(arg0: string, arg1: any): boolean;
        abstract getNioPath(): Internal.Path;
        ofConcurrent(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<any>): this;
        builder(arg0: string): Internal.FileConfigBuilder;
        getOptionalLong(arg0: Internal.List_<string>): Internal.OptionalLong;
        get<T>(arg0: string): T;
        abstract contains(arg0: Internal.List_<string>): boolean;
        getLong(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        apply<T>(arg0: Internal.List_<string>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getInt(arg0: string): number;
        inMemoryConcurrent(): Internal.Config;
        inMemoryUniversal(): Internal.Config;
        ofConcurrent(arg0: Internal.ConfigFormat_<Internal.Config>): Internal.Config;
        getRaw<T>(arg0: string): T;
        getIntOrElse(arg0: string, arg1: Internal.IntSupplier_): number;
        abstract load(): void;
        isNull(arg0: string): boolean;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>): Internal.Config;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): Internal.Optional<T>;
        ofConcurrent(arg0: Internal.Path_): this;
        of(arg0: Internal.Path_): this;
        ofConcurrent(arg0: Internal.File_): this;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getLongOrElse(arg0: string, arg1: number): number;
        getByteOrElse(arg0: Internal.List_<string>, arg1: number): number;
        of(arg0: Internal.File_, arg1: Internal.ConfigFormat_<Internal.Config>): this;
        getOptionalInt(arg0: string): Internal.OptionalInt;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        unmodifiable(): Internal.UnmodifiableConfig;
        concurrentCopy(arg0: Internal.UnmodifiableConfig_): Internal.Config;
        getIntOrElse(arg0: string, arg1: number): number;
        abstract save(): void;
        checked(): Internal.Config;
        getOptionalInt(arg0: Internal.List_<string>): Internal.OptionalInt;
        update(arg0: string, arg1: any): void;
        abstract size(): number;
        abstract entrySet(): Internal.Set<Internal.Config$Entry>;
        abstract clear(): void;
        abstract valueMap(): Internal.Map<string, any>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        of(arg0: Internal.Supplier_<Internal.Map<string, any>>, arg1: Internal.ConfigFormat_<any>): Internal.Config;
        apply<T>(arg0: string): T;
        getOrElse<T>(arg0: string, arg1: T): T;
        getLong(arg0: string): number;
        of(arg0: string): this;
        get<T>(arg0: Internal.List_<string>): T;
        getCharOrElse(arg0: string, arg1: string): string;
        abstract set<T>(arg0: Internal.List_<string>, arg1: any): T;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>, arg2: Internal.ConfigFormat_<any>): Internal.Config;
        inMemoryUniversalConcurrent(): Internal.Config;
        contains(arg0: string): boolean;
        set<T>(arg0: string, arg1: any): T;
        builder(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<any>): Internal.FileConfigBuilder;
        getShort(arg0: Internal.List_<string>): number;
        isNull(arg0: Internal.List_<string>): boolean;
        removeAll(arg0: Internal.UnmodifiableConfig_): void;
        setInsertionOrderPreserved(arg0: boolean): void;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): Internal.Supplier<Internal.Map<string, T>>;
        ofConcurrent(arg0: Internal.File_, arg1: Internal.ConfigFormat_<any>): this;
        getOptional<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        abstract remove<T>(arg0: Internal.List_<string>): T;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        isInsertionOrderPreserved(): boolean;
        getOptional<T>(arg0: string): Internal.Optional<T>;
        of(arg0: Internal.File_): this;
        of(arg0: string, arg1: Internal.ConfigFormat_<any>): this;
        getShort(arg0: string): number;
        getOrElse<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        abstract getFile(): Internal.File;
        copy(arg0: Internal.UnmodifiableConfig_): Internal.Config;
        addAll(arg0: Internal.UnmodifiableConfig_): void;
        getChar(arg0: string): string;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: T): T;
        builder(arg0: string, arg1: Internal.ConfigFormat_<any>): Internal.FileConfigBuilder;
        getChar(arg0: Internal.List_<string>): string;
        ofConcurrent(arg0: string): this;
        builder(arg0: Internal.File_): Internal.FileConfigBuilder;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: number): number;
        isEmpty(): boolean;
        getIntOrElse(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
        getDefaultMapCreator<T>(arg0: boolean): Internal.Supplier<Internal.Map<string, T>>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getCharOrElse(arg0: Internal.List_<string>, arg1: string): string;
        getByte(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.Optional<T>;
        getLongOrElse(arg0: string, arg1: Internal.LongSupplier_): number;
        getByte(arg0: string): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract configFormat(): Internal.ConfigFormat<any>;
        of(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<Internal.Config>): this;
        abstract close(): void;
        builder(arg0: Internal.Path_): Internal.FileConfigBuilder;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        get nioPath(): Internal.Path
        set insertionOrderPreserved(arg0: boolean)
        get insertionOrderPreserved(): boolean
        get file(): Internal.File
        get empty(): boolean
    }
    type FileConfig_ = FileConfig;
    class ShulkerBoxBlockEntity$AnimationStatus extends Internal.Enum<Internal.ShulkerBoxBlockEntity$AnimationStatus> {
        static valueOf(arg0: string): Internal.ShulkerBoxBlockEntity$AnimationStatus;
        static values(): Internal.ShulkerBoxBlockEntity$AnimationStatus[];
        static readonly OPENING: Internal.ShulkerBoxBlockEntity$AnimationStatus;
        static readonly CLOSED: Internal.ShulkerBoxBlockEntity$AnimationStatus;
        static readonly CLOSING: Internal.ShulkerBoxBlockEntity$AnimationStatus;
        static readonly OPENED: Internal.ShulkerBoxBlockEntity$AnimationStatus;
    }
    type ShulkerBoxBlockEntity$AnimationStatus_ = "opening" | ShulkerBoxBlockEntity$AnimationStatus | "closing" | "closed" | "opened";
    class LinkedHashSet <E> extends Internal.HashSet<E> implements Internal.Cloneable, Internal.Set<E>, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Collection_<E>)
        constructor(arg0: number)
        constructor(arg0: number, arg1: number)
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        parallelStream(): Internal.Stream<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract iterator(): Internal.Iterator<E>;
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
    type LinkedHashSet_<E> = LinkedHashSet<E>;
    class EntityRenderersEvent$RegisterLayerDefinitions extends Internal.EntityRenderersEvent {
        constructor()
        registerLayerDefinition(arg0: Internal.ModelLayerLocation_, arg1: Internal.Supplier_<Internal.LayerDefinition>): void;
    }
    type EntityRenderersEvent$RegisterLayerDefinitions_ = EntityRenderersEvent$RegisterLayerDefinitions;
    class ByteProcessor$IndexOfProcessor implements Internal.ByteProcessor {
        constructor(arg0: number)
        process(arg0: number): boolean;
    }
    type ByteProcessor$IndexOfProcessor_ = ByteProcessor$IndexOfProcessor;
    class MessageSignature$Packed extends Internal.Record {
        constructor(arg0: number, arg1: Internal.MessageSignature_)
        constructor(arg0: number)
        constructor(arg0: Internal.MessageSignature_)
        id(): number;
        static read(arg0: Internal.FriendlyByteBuf_): Internal.MessageSignature$Packed;
        unpack(arg0: Internal.MessageSignatureCache_): Internal.Optional<Internal.MessageSignature>;
        static write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.MessageSignature$Packed_): void;
        fullSignature(): Internal.MessageSignature;
        static readonly FULL_SIGNATURE: -1;
    }
    type MessageSignature$Packed_ = MessageSignature$Packed;
    class ConstantInt extends Internal.IntProvider {
        static of(arg0: number): Internal.ConstantInt;
        getValue(): number;
        get value(): number
        static readonly ZERO: Internal.ConstantInt;
        static readonly CODEC: Internal.Codec<Internal.ConstantInt>;
    }
    type ConstantInt_ = ConstantInt;
    interface HeightProviderType <P extends Internal.HeightProvider> {
        abstract codec(): Internal.Codec<P>;
        (): Internal.Codec_<P>;
        readonly UNIFORM: Internal.HeightProviderType<Internal.UniformHeight>;
        readonly CONSTANT: Internal.HeightProviderType<Internal.ConstantHeight>;
        readonly WEIGHTED_LIST: Internal.HeightProviderType<Internal.WeightedListHeight>;
        readonly VERY_BIASED_TO_BOTTOM: Internal.HeightProviderType<Internal.VeryBiasedToBottomHeight>;
        readonly TRAPEZOID: Internal.HeightProviderType<Internal.TrapezoidHeight>;
        readonly BIASED_TO_BOTTOM: Internal.HeightProviderType<Internal.BiasedToBottomHeight>;
    }
    type HeightProviderType_<P extends Internal.HeightProvider> = Special.HeightProviderType | HeightProviderType<P>;
    interface IDrawableStatic extends Internal.IDrawable {
        abstract draw(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        abstract draw(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        abstract getWidth(): number;
        abstract getHeight(): number;
        draw(arg0: Internal.GuiGraphics_): void;
        get width(): number
        get height(): number
    }
    type IDrawableStatic_ = IDrawableStatic;
    class EndDragonFight$Data extends Internal.Record {
        constructor(needsStateScanning: boolean, dragonKilled: boolean, previouslyKilled: boolean, isRespawning: boolean, dragonUUID: Internal.Optional_<Internal.UUID>, exitPortalLocation: Internal.Optional_<BlockPos>, gateways: Internal.Optional_<Internal.List<number>>)
        dragonUUID(): Internal.Optional<Internal.UUID>;
        dragonKilled(): boolean;
        previouslyKilled(): boolean;
        exitPortalLocation(): Internal.Optional<BlockPos>;
        gateways(): Internal.Optional<Internal.List<number>>;
        needsStateScanning(): boolean;
        isRespawning(): boolean;
        get respawning(): boolean
        static readonly CODEC: Internal.Codec<Internal.EndDragonFight$Data>;
        static readonly DEFAULT: Internal.EndDragonFight$Data;
    }
    type EndDragonFight$Data_ = EndDragonFight$Data;
    class ModBlockProperties$PostType extends Internal.Enum<Internal.ModBlockProperties$PostType> implements Internal.StringRepresentable {
        static values(): Internal.ModBlockProperties$PostType[];
        static get(state: Internal.BlockState_, needsFullHeight: boolean): Internal.ModBlockProperties$PostType;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getWidth(): number;
        static valueOf(name: string): Internal.ModBlockProperties$PostType;
        getSerializedName(): string;
        getName(): string;
        static get(state: Internal.BlockState_): Internal.ModBlockProperties$PostType;
        getOffset(): number;
        get width(): number
        get serializedName(): string
        get name(): string
        get offset(): number
        static readonly BEAM: Internal.ModBlockProperties$PostType;
        static readonly POST: Internal.ModBlockProperties$PostType;
        static readonly PALISADE: Internal.ModBlockProperties$PostType;
        static readonly WALL: Internal.ModBlockProperties$PostType;
    }
    type ModBlockProperties$PostType_ = "palisade" | "post" | ModBlockProperties$PostType | "beam" | "wall";
    class MinecartTNT extends Internal.AbstractMinecart {
        constructor(arg0: Internal.EntityType_<Internal.MinecartTNT>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        setMotionY(y: number): void;
        isPoweredCart(): boolean;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        getMaxCartSpeedOnRail(): number;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        getSlopeAdjustment(): number;
        isOnScoreboardTeam(teamId: string): boolean;
        canBeRidden(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
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
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        getComparatorLevel(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        getDisplayName(): Internal.Component;
        setMotionX(x: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        getCurrentRailPosition(): BlockPos;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getLevel(): Internal.Level;
        getFacing(): Internal.Direction;
        getScriptType(): Internal.ScriptType;
        shouldDoRailFunctions(): boolean;
        isMultipartEntity(): boolean;
        shouldRiderSit(): boolean;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: Internal.Component_): void;
        primeFuse(): void;
        isPrimed(): boolean;
        getFuse(): number;
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
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        get poweredCart(): boolean
        get peacefulCreature(): boolean
        get maxCartSpeedOnRail(): number
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get slopeAdjustment(): number
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get comparatorLevel(): number
        get server(): Internal.MinecraftServer
        get displayName(): Internal.Component
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get currentRailPosition(): BlockPos
        get teamId(): string
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get facing(): Internal.Direction
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionX(): number
        get waterCreature(): boolean
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        get primed(): boolean
        get fuse(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
    }
    type MinecartTNT_ = MinecartTNT;
    class RuleBasedBlockStateProvider extends Internal.Record {
        constructor(arg0: Internal.BlockStateProvider_, arg1: Internal.List_<Internal.RuleBasedBlockStateProvider$Rule>)
        getState(arg0: Internal.WorldGenLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_): Internal.BlockState;
        static simple(arg0: Internal.Block_): Internal.RuleBasedBlockStateProvider;
        fallback(): Internal.BlockStateProvider;
        rules(): Internal.List<Internal.RuleBasedBlockStateProvider$Rule>;
        static simple(arg0: Internal.BlockStateProvider_): Internal.RuleBasedBlockStateProvider;
        static readonly CODEC: Internal.Codec<Internal.RuleBasedBlockStateProvider>;
    }
    type RuleBasedBlockStateProvider_ = RuleBasedBlockStateProvider;
    abstract class FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_)
        createFoliage(arg0: Internal.LevelSimulatedReader_, arg1: Internal.FoliagePlacer$FoliageSetter_, arg2: Internal.RandomSource_, arg3: Internal.TreeConfiguration_, arg4: number, arg5: Internal.FoliagePlacer$FoliageAttachment_, arg6: number, arg7: number): void;
        abstract foliageHeight(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.TreeConfiguration_): number;
        foliageRadius(arg0: Internal.RandomSource_, arg1: number): number;
        static readonly CODEC: Internal.Codec<Internal.FoliagePlacer>;
    }
    type FoliagePlacer_ = FoliagePlacer;
    interface ProperWaterloggedBlock extends Internal.SimpleWaterloggedBlock {
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        withWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type ProperWaterloggedBlock_ = ProperWaterloggedBlock;
    interface AmbiguityConsumer <S> {
        abstract ambiguous(arg0: Internal.CommandNode_<S>, arg1: Internal.CommandNode_<S>, arg2: Internal.CommandNode_<S>, arg3: Internal.Collection_<string>): void;
        (arg0: Internal.CommandNode<S>, arg1: Internal.CommandNode<S>, arg2: Internal.CommandNode<S>, arg3: Internal.Collection<string>): void;
    }
    type AmbiguityConsumer_<S> = AmbiguityConsumer<S>;
    interface TimerCallback <T> {
        abstract handle(arg0: T, arg1: Internal.TimerQueue_<T>, arg2: number): void;
        (arg0: T, arg1: Internal.TimerQueue<T>, arg2: number): void;
    }
    type TimerCallback_<T> = TimerCallback<T>;
    class TrackEdgeIntersection {
        constructor()
        write(arg0: Internal.DimensionPalette_): Internal.CompoundTag;
        targets(arg0: Internal.TrackNodeLocation_, arg1: Internal.TrackNodeLocation_): boolean;
        static read(arg0: Internal.CompoundTag_, arg1: Internal.DimensionPalette_): Internal.TrackEdgeIntersection;
        isNear(arg0: number): boolean;
        id: Internal.UUID;
        location: number;
        target: Internal.Couple<Internal.TrackNodeLocation>;
        targetLocation: number;
        groupId: Internal.UUID;
    }
    type TrackEdgeIntersection_ = TrackEdgeIntersection;
    interface ItemColor {
        abstract getColor(arg0: Internal.ItemStack_, arg1: number): number;
        (arg0: Internal.ItemStack, arg1: number): number;
    }
    type ItemColor_ = ItemColor;
    abstract class StructurePoolElement {
        static legacy(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        abstract getBoundingBox(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BoundingBox;
        abstract getType(): Internal.StructurePoolElementType<any>;
        abstract getShuffledJigsawBlocks(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.RandomSource_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        static single(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        handleDataMarker(arg0: Internal.LevelAccessor_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: BlockPos_, arg3: Internal.Rotation_, arg4: Internal.RandomSource_, arg5: Internal.BoundingBox_): void;
        abstract getSize(arg0: Internal.StructureTemplateManager_, arg1: Internal.Rotation_): Vec3i;
        getGroundLevelDelta(): number;
        abstract place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean): boolean;
        setProjection(arg0: Internal.StructureTemplatePool$Projection_): this;
        static legacy(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        getProjection(): Internal.StructureTemplatePool$Projection;
        static empty(): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.EmptyPoolElement>;
        static list(arg0: Internal.List_<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.ListPoolElement>;
        static single(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        static feature(arg0: Internal.Holder_<Internal.PlacedFeature>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.FeaturePoolElement>;
        get type(): Internal.StructurePoolElementType<any>
        get groundLevelDelta(): number
        set projection(arg0: Internal.StructureTemplatePool$Projection_)
        get projection(): Internal.StructureTemplatePool$Projection
        static readonly CODEC: Internal.Codec<Internal.StructurePoolElement>;
    }
    type StructurePoolElement_ = StructurePoolElement;
    interface IExtendedPistonTile {
        abstract tickMovedBlock(arg0: Internal.Level_, arg1: BlockPos_): void;
        (arg0: Internal.Level, arg1: BlockPos): void;
    }
    type IExtendedPistonTile_ = IExtendedPistonTile;
    class RuinedPortalStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: any_)
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.List_<any>)
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly CODEC: Internal.Codec<Internal.RuinedPortalStructure>;
    }
    type RuinedPortalStructure_ = RuinedPortalStructure;
    interface ScheduledFuture <V> extends Internal.Delayed, Internal.Future<V> {
        abstract get(): V;
        abstract getDelay(arg0: Internal.TimeUnit_): number;
        abstract compareTo(arg0: Internal.Delayed_): number;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): V;
        abstract isDone(): boolean;
        abstract cancel(arg0: boolean): boolean;
        abstract isCancelled(): boolean;
        get done(): boolean
        get cancelled(): boolean
    }
    type ScheduledFuture_<V> = ScheduledFuture<V>;
    class Matrix4x3d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix4x3dc {
        constructor()
        constructor(arg0: Internal.Matrix3fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number)
        constructor(arg0: Internal.Matrix4x3dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix4x3fc_)
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3dc_): this;
        mapnYXnZ(arg0: Internal.Matrix4x3d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapXZnY(arg0: Internal.Matrix4x3d_): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): this;
        translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        mapnYnZnX(): this;
        get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        mapYZnX(): this;
        transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        mapnZXY(arg0: Internal.Matrix4x3d_): this;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        origin(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotationX(arg0: number): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number): this;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translateLocal(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): this;
        transformDirection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        setLookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        translation(arg0: number, arg1: number, arg2: number): this;
        normal(arg0: Internal.Matrix4x3d_): this;
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        mapYnZnX(): this;
        normal(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        mapYXnZ(arg0: Internal.Matrix4x3d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): this;
        mapYnXnZ(arg0: Internal.Matrix4x3d_): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        normalize3x3(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        mulTranslation(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): this;
        mapZnYX(): this;
        set3x3(arg0: Internal.Matrix4x3dc_): this;
        normalize3x3(arg0: Internal.Matrix4x3d_): this;
        fma(arg0: Internal.Matrix4x3dc_, arg1: number): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): this;
        rotationY(arg0: number): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        mapnYnXnZ(arg0: Internal.Matrix4x3d_): this;
        set(arg0: Internal.Matrix3fc_): this;
        set(arg0: number[], arg1: number): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4x3d_): this;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapZXY(arg0: Internal.Matrix4x3d_): this;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        set3x3(arg0: Internal.Matrix3fc_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): this;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4x3d_): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): this;
        transformAab(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        get(arg0: Internal.Matrix4x3d_): this;
        get4x4(arg0: number[]): number[];
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        mapYnXZ(arg0: Internal.Matrix4x3d_): this;
        add(arg0: Internal.Matrix4x3fc_): this;
        cofactor3x3(arg0: Internal.Matrix4x3d_): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): this;
        transpose3x3(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        isFinite(): boolean;
        mapXnZnY(arg0: Internal.Matrix4x3d_): this;
        m30(arg0: number): this;
        mapnYnXnZ(): this;
        transpose3x3(): this;
        getToAddress(arg0: number): Internal.Matrix4x3dc;
        setOrtho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapZYnX(): this;
        cofactor3x3(): this;
        obliqueZ(arg0: number, arg1: number): this;
        lerp(arg0: Internal.Matrix4x3dc_, arg1: number, arg2: Internal.Matrix4x3d_): this;
        mapnYZnX(arg0: Internal.Matrix4x3d_): this;
        scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4x3d_): this;
        mapnXnZnY(arg0: Internal.Matrix4x3d_): this;
        translate(arg0: number, arg1: number, arg2: number): this;
        setColumn(arg0: number, arg1: Internal.Vector3dc_): this;
        mapnZYX(arg0: Internal.Matrix4x3d_): this;
        mapnZnYX(): this;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mapnXZnY(arg0: Internal.Matrix4x3d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        mapnYXZ(arg0: Internal.Matrix4x3d_): this;
        get(arg0: number[], arg1: number): number[];
        set(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Vector3dc_): this;
        reflection(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        rotateTranslation(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): this;
        mapYnXnZ(): this;
        m31(arg0: number): this;
        m02(): number;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapZXnY(): this;
        zero(): this;
        setRotationXYZ(arg0: number, arg1: number, arg2: number): this;
        mapZnXY(): this;
        set3x3(arg0: Internal.Matrix3dc_): this;
        invertOrtho(arg0: Internal.Matrix4x3d_): this;
        translate(arg0: Internal.Vector3fc_): this;
        mapnYZnX(): this;
        sub(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): this;
        shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4x3dc_, arg2: Internal.Matrix4x3d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3d_): this;
        mapnXYnZ(arg0: Internal.Matrix4x3d_): this;
        scaleXY(arg0: number, arg1: number): this;
        mapYnZnX(arg0: Internal.Matrix4x3d_): this;
        mapnZnYX(arg0: Internal.Matrix4x3d_): this;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        mapnXnYnZ(arg0: Internal.Matrix4x3d_): this;
        translation(arg0: Internal.Vector3fc_): this;
        set(arg0: Internal.Matrix4x3fc_): this;
        mapnYnZnX(arg0: Internal.Matrix4x3d_): this;
        add(arg0: Internal.Matrix4x3dc_): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        assume(arg0: number): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        mapZXnY(arg0: Internal.Matrix4x3d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3dc_, arg5: Internal.Matrix4x3d_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mapXZnY(): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapYZnX(arg0: Internal.Matrix4x3d_): this;
        mapnZXnY(arg0: Internal.Matrix4x3d_): this;
        get(arg0: number[], arg1: number): number[];
        translationRotateInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        setFromAddress(arg0: number): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        scaling(arg0: Internal.Vector3dc_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        translationRotate(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_): this;
        translationRotateMul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.Matrix4x3dc_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnXnZnY(): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        setLookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mulComponentWise(arg0: Internal.Matrix4x3dc_): this;
        translateLocal(arg0: Internal.Vector3dc_): this;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapnYXnZ(): this;
        translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3d_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnXZnY(): this;
        translation(arg0: Internal.Vector3dc_): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        cofactor3x3(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        set(arg0: Internal.Matrix4x3dc_): this;
        setTranslation(arg0: number, arg1: number, arg2: number): this;
        mapXnZnY(): this;
        getRow(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        translationRotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        mapYXZ(arg0: Internal.Matrix4x3d_): this;
        rotateZYX(arg0: Internal.Vector3d_): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotationZ(arg0: number): this;
        rotationAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        mapYnXZ(): this;
        mapZnXnY(arg0: Internal.Matrix4x3d_): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        readExternal(arg0: Internal.ObjectInput_): void;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        sub(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        billboardCylindrical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        translate(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): this;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4x3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        mapnYZX(): this;
        mapnXZY(): this;
        mapnXnZY(): this;
        mapnYnXZ(arg0: Internal.Matrix4x3d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapYnZX(arg0: Internal.Matrix4x3d_): this;
        mulOrtho(arg0: Internal.Matrix4x3dc_): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number): this;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        mapnZnXY(): this;
        mapnZYnX(arg0: Internal.Matrix4x3d_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4x3d_): this;
        set(arg0: Internal.FloatBuffer_): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        normalize3x3(): this;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        transformPosition(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        fma(arg0: Internal.Matrix4x3fc_, arg1: number, arg2: Internal.Matrix4x3d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        mapZYX(arg0: Internal.Matrix4x3d_): this;
        mapnZnXnY(arg0: Internal.Matrix4x3d_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        rotateXYZ(arg0: Internal.Vector3d_): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        get4x4(arg0: number[]): number[];
        scale(arg0: number, arg1: number, arg2: number): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3d_): this;
        scaling(arg0: number): this;
        determineProperties(): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        mapZnYnX(arg0: Internal.Matrix4x3d_): this;
        swap(arg0: Internal.Matrix4x3d_): this;
        rotateY(arg0: number): this;
        m20(): number;
        rotateLocalX(arg0: number): this;
        negateY(arg0: Internal.Matrix4x3d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        fma(arg0: Internal.Matrix4x3dc_, arg1: number, arg2: Internal.Matrix4x3d_): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        rotate(arg0: Internal.AxisAngle4d_): this;
        mapnZnYnX(arg0: Internal.Matrix4x3d_): this;
        translateLocal(arg0: number, arg1: number, arg2: number): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapnXZY(arg0: Internal.Matrix4x3d_): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        invert(): this;
        m01(arg0: number): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        mapnYnZX(): this;
        m31(): number;
        getTranslation(arg0: Internal.Vector3d_): Internal.Vector3d;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        set(arg0: Internal.ByteBuffer_): this;
        translationRotateScaleMul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.Matrix4x3dc_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3d_): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): this;
        mul(arg0: Internal.Matrix4x3fc_): this;
        rotateX(arg0: number): this;
        get4x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateX(arg0: number, arg1: Internal.Matrix4x3d_): this;
        get4x4(arg0: number[], arg1: number): number[];
        set(arg0: Internal.Quaterniondc_): this;
        set(arg0: number[], arg1: number): this;
        mapYnZX(): this;
        rotateLocalY(arg0: number): this;
        negateZ(arg0: Internal.Matrix4x3d_): this;
        lerp(arg0: Internal.Matrix4x3dc_, arg1: number): this;
        setLookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapnXnYZ(): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        set(arg0: Internal.AxisAngle4d_): this;
        m02(arg0: number): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        m30(): number;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapXnYnZ(): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        mapnXnZY(arg0: Internal.Matrix4x3d_): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        scale(arg0: number): this;
        mapXnZY(): this;
        rotateLocalZ(arg0: number): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        scaling(arg0: number, arg1: number, arg2: number): this;
        mapnXYnZ(): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        mapnZYX(): this;
        mapXnZY(arg0: Internal.Matrix4x3d_): this;
        rotateY(arg0: number, arg1: Internal.Matrix4x3d_): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number): this;
        add(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        mapYZX(arg0: Internal.Matrix4x3d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        mapYXZ(): this;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapZnXY(arg0: Internal.Matrix4x3d_): this;
        mapnXnYnZ(): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotateMul(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaternionfc_, arg4: Internal.Matrix4x3dc_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setRow(arg0: number, arg1: Internal.Vector4dc_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        negateX(arg0: Internal.Matrix4x3d_): this;
        translationRotateInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateZ(arg0: number, arg1: Internal.Matrix4x3d_): this;
        set(arg0: number[]): this;
        set(arg0: Internal.Quaternionfc_): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        get4x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4x3d_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        transformPosition(arg0: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3fc_): this;
        mapZYnX(arg0: Internal.Matrix4x3d_): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        get4x4(arg0: number[], arg1: number): number[];
        mapXZY(arg0: Internal.Matrix4x3d_): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        negateY(): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): this;
        normal(): this;
        scale(arg0: number, arg1: Internal.Matrix4x3d_): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix4x3d_): this;
        invertOrtho(): this;
        get4x4(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnYnZX(arg0: Internal.Matrix4x3d_): this;
        rotate(arg0: Internal.Quaternionfc_): this;
        setOrtho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapZnYnX(): this;
        m32(arg0: number): this;
        m01(): number;
        mapnZnXY(arg0: Internal.Matrix4x3d_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapZXY(): this;
        fma(arg0: Internal.Matrix4x3fc_, arg1: number): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3d_): this;
        get(arg0: number[]): number[];
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): this;
        mapnZXY(): this;
        rotation(arg0: Internal.Quaterniondc_): this;
        mapXnYnZ(arg0: Internal.Matrix4x3d_): this;
        toString(arg0: Internal.NumberFormat_): string;
        m12(): number;
        m20(arg0: number): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnZnXnY(): this;
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapXZY(): this;
        clone(): any;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3d_): this;
        setRotationZYX(arg0: number, arg1: number, arg2: number): this;
        negateX(): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniondc_): this;
        rotation(arg0: Internal.AxisAngle4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setTranslation(arg0: Internal.Vector3dc_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        identity(): this;
        m10(arg0: number): this;
        m00(): number;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): this;
        equals(arg0: Internal.Matrix4x3dc_, arg1: number): boolean;
        translationRotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        get(arg0: number[]): number[];
        determinant(): number;
        properties(): number;
        translate(arg0: Internal.Vector3dc_): this;
        invert(arg0: Internal.Matrix4x3d_): this;
        translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3d_): this;
        mapnZnYnX(): this;
        getTransposed(arg0: number[], arg1: number): number[];
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        mapYZX(): this;
        m21(arg0: number): this;
        mapnYnXZ(): this;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        transformDirection(arg0: Internal.Vector3d_): Internal.Vector3d;
        translationRotateScaleMul(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4x3dc_): this;
        m11(): number;
        get4x4(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mapnYXZ(): this;
        sub(arg0: Internal.Matrix4x3fc_): this;
        mapZnXnY(): this;
        mulOrtho(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        getTransposed(arg0: number[]): number[];
        shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4x3dc_): this;
        mapnYZX(arg0: Internal.Matrix4x3d_): this;
        transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Vector3d_, arg7: Internal.Vector3d_): this;
        rotateLocalX(arg0: number, arg1: Internal.Matrix4x3d_): this;
        set(arg0: Internal.Matrix4dc_): this;
        transpose3x3(arg0: Internal.Matrix4x3d_): this;
        mulTranslation(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        setRotationYXZ(arg0: number, arg1: number, arg2: number): this;
        m11(arg0: number): this;
        m22(): number;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4x3d_): this;
        m22(arg0: number): this;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4x3d_): this;
        set(arg0: Internal.AxisAngle4f_): this;
        m10(): number;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapYXnZ(): this;
        mapZYX(): this;
        scale(arg0: Internal.Vector3dc_): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        negateZ(): this;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        set(arg0: number[]): this;
        rotateLocalY(arg0: number, arg1: Internal.Matrix4x3d_): this;
        mapnZYnX(): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): this;
        mul(arg0: Internal.Matrix4x3dc_): this;
        m12(arg0: number): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        m21(): number;
        frustumPlane(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapZnYX(arg0: Internal.Matrix4x3d_): this;
        add(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnXnYZ(arg0: Internal.Matrix4x3d_): this;
        set(arg0: Internal.Matrix3dc_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4x3d_): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        setFloats(arg0: Internal.ByteBuffer_): this;
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        m00(arg0: number): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m32(): number;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapnZXnY(): this;
        reflection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        sub(arg0: Internal.Matrix4x3dc_): this;
        get finite(): boolean
        set fromAddress(arg0: number)
        set translation(arg0: Internal.Vector3dc_)
        set floats(arg0: Internal.ByteBuffer_)
    }
    type Matrix4x3d_ = Matrix4x3d;
    class ClientboundSetChunkCacheCenterPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getX(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getZ(): number;
        isSkippable(): boolean;
        get x(): number
        get z(): number
        get skippable(): boolean
    }
    type ClientboundSetChunkCacheCenterPacket_ = ClientboundSetChunkCacheCenterPacket;
    class ListCodec <A> implements Internal.Codec<Internal.List<A>> {
        constructor(arg0: Internal.Codec_<A>)
        optionalFieldOf(arg0: string, arg1: Internal.List_<A>): Internal.MapCodec<Internal.List<A>>;
        dispatchMap<E>(arg0: Internal.Function_<E, Internal.List<A>>, arg1: Internal.Function_<Internal.List<A>, Internal.Codec<E>>): Internal.MapCodec<E>;
        static empty<A>(): Internal.MapEncoder<A>;
        static error<A>(arg0: string): Internal.Encoder<A>;
        static unit<A>(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        parse<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<Internal.List<A>>;
        orElse(arg0: Internal.UnaryOperator_<string>, arg1: Internal.List_<A>): Internal.Codec<Internal.List<A>>;
        static floatRange(arg0: number, arg1: number): Internal.Codec<number>;
        comap<B>(arg0: Internal.Function_<B, Internal.List<A>>): Internal.Encoder<B>;
        withLifecycle(arg0: Internal.Lifecycle_): Internal.Codec<Internal.List<A>>;
        decode<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.List<A>, T>>;
        stable(): Internal.Codec<Internal.List<A>>;
        partialDispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.DataResult<Internal.List<A>>>, arg2: Internal.Function_<Internal.List<A>, Internal.DataResult<Internal.Codec<E>>>): Internal.Codec<E>;
        static ofBoxed<A>(arg0: Internal.Decoder$Boxed_<A>): Internal.Decoder<A>;
        dispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.List<A>>, arg2: Internal.Function_<Internal.List<A>, Internal.Codec<E>>): Internal.Codec<E>;
        encode<T>(arg0: Internal.List_<A>, arg1: Internal.DynamicOps_<T>, arg2: T): Internal.DataResult<T>;
        orElseGet(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<Internal.List<A>>): Internal.Codec<Internal.List<A>>;
        optionalFieldOf(arg0: string, arg1: Internal.List_<A>, arg2: Internal.Lifecycle_): Internal.MapCodec<Internal.List<A>>;
        map<B>(arg0: Internal.Function_<Internal.List<A>, B>): Internal.Decoder<B>;
        terminal(): Internal.Decoder$Terminal<Internal.List<A>>;
        flatMap<B>(arg0: Internal.Function_<Internal.List<A>, Internal.DataResult<B>>): Internal.Decoder<B>;
        static unit<A>(arg0: A): Internal.Codec<A>;
        static intRange(arg0: number, arg1: number): Internal.Codec<number>;
        comapFlatMap<S>(arg0: Internal.Function_<Internal.List<A>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.List<A>>): Internal.Codec<S>;
        encodeStart<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.List_<A>): Internal.DataResult<T>;
        simple(): Internal.Decoder$Simple<Internal.List<A>>;
        static pair<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<com.mojang.datafixers.util.Pair<F, S>>;
        static either<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<Internal.Either<F, S>>;
        static checkRange<N extends number & Internal.Comparable<N>>(arg0: N, arg1: N): Internal.Function<N, Internal.DataResult<N>>;
        fieldOf(arg0: string): Internal.MapCodec<Internal.List<A>>;
        flatComapMap<S>(arg0: Internal.Function_<Internal.List<A>, S>, arg1: Internal.Function_<S, Internal.DataResult<Internal.List<A>>>): Internal.Codec<S>;
        flatXmap<S>(arg0: Internal.Function_<Internal.List<A>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.DataResult<Internal.List<A>>>): Internal.Codec<S>;
        static unboundedMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.UnboundedMapCodec<K, V>;
        optionalFieldOf(arg0: string): Internal.MapCodec<Internal.Optional<Internal.List<A>>>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>, arg2: string): Internal.Codec<A>;
        mapResult(arg0: Internal.Codec$ResultFunction_<Internal.List<A>>): Internal.Codec<Internal.List<A>>;
        parse<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<Internal.List<A>>;
        dispatch<E>(arg0: Internal.Function_<E, Internal.List<A>>, arg1: Internal.Function_<Internal.List<A>, Internal.Codec<E>>): Internal.Codec<E>;
        orElse(arg0: Internal.List_<A>): Internal.Codec<Internal.List<A>>;
        static ofSimple<A>(arg0: Internal.Decoder$Simple_<A>): Internal.Decoder<A>;
        optionalFieldOf(arg0: string, arg1: Internal.Lifecycle_, arg2: Internal.List_<A>, arg3: Internal.Lifecycle_): Internal.MapCodec<Internal.List<A>>;
        static mapEither<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<Internal.Either<F, S>>;
        static doubleRange(arg0: number, arg1: number): Internal.Codec<number>;
        static optionalField<F>(arg0: string, arg1: Internal.Codec_<F>): Internal.MapCodec<Internal.Optional<F>>;
        static simpleMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_): Internal.SimpleMapCodec<K, V>;
        static ofTerminal<A>(arg0: Internal.Decoder$Terminal_<A>): Internal.Decoder<A>;
        encode(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: any): Internal.DataResult<any>;
        deprecated(arg0: number): Internal.Codec<Internal.List<A>>;
        static list<E>(arg0: Internal.Codec_<E>): Internal.Codec<Internal.List<E>>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<Internal.List<A>>>): Internal.Encoder<B>;
        dispatchMap<E>(arg0: string, arg1: Internal.Function_<E, Internal.List<A>>, arg2: Internal.Function_<Internal.List<A>, Internal.Codec<E>>): Internal.MapCodec<E>;
        boxed(): Internal.Decoder$Boxed<Internal.List<A>>;
        promotePartial(arg0: Internal.Consumer_<any>): Internal.Decoder<any>;
        orElseGet(arg0: Internal.Supplier_<Internal.List<A>>): Internal.Codec<Internal.List<A>>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        orElseGet(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<Internal.List<A>>): Internal.Codec<Internal.List<A>>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>): Internal.Codec<A>;
        listOf(): Internal.Codec<Internal.List<Internal.List<A>>>;
        orElse(arg0: Internal.Consumer_<string>, arg1: Internal.List_<A>): Internal.Codec<Internal.List<A>>;
        xmap<S>(arg0: Internal.Function_<Internal.List<A>, S>, arg1: Internal.Function_<S, Internal.List<A>>): Internal.Codec<S>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        static compoundList<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.Codec<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.List<A>, T>>;
        dispatchStable<E>(arg0: Internal.Function_<E, Internal.List<A>>, arg1: Internal.Function_<Internal.List<A>, Internal.Codec<E>>): Internal.Codec<E>;
        static mapPair<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<com.mojang.datafixers.util.Pair<F, S>>;
    }
    type ListCodec_<A> = ListCodec<A>;
    class NetworkEvent$ClientCustomPayloadEvent extends Internal.NetworkEvent {
        constructor()
    }
    type NetworkEvent$ClientCustomPayloadEvent_ = NetworkEvent$ClientCustomPayloadEvent;
    class BeaconBlock extends Internal.BaseEntityBlock implements Internal.BeaconBeamBlock {
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getColor(): Internal.DyeColor;
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
        get color(): Internal.DyeColor
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type BeaconBlock_ = BeaconBlock;
    class StructureTempBlock extends Internal.Block implements Internal.EntityBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getTicker<T extends Internal.BlockEntity>(pLevel: Internal.Level_, pState: Internal.BlockState_, pBlockEntityType: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(pPos: BlockPos_, pState: Internal.BlockState_): Internal.BlockEntity;
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
    type StructureTempBlock_ = StructureTempBlock;
    class Matrix4x3f implements Internal.Matrix4x3fc, Internal.Cloneable, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Matrix3fc_)
        constructor(arg0: Internal.FloatBuffer_)
        constructor(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Internal.Vector3fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number)
        constructor(arg0: Internal.Matrix4x3fc_)
        mapYXnZ(arg0: Internal.Matrix4x3f_): this;
        set(arg0: Internal.Matrix4fc_): this;
        billboardSpherical(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        mapnYnXZ(arg0: Internal.Matrix4x3f_): this;
        rotationZ(arg0: number): this;
        mapYnXnZ(arg0: Internal.Matrix4x3f_): this;
        reflection(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        rotateLocalY(arg0: number, arg1: Internal.Matrix4x3f_): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnYnZnX(): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4x3f_): this;
        get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        lookAlong(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapYZnX(): this;
        m31(arg0: number): this;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        lookAt(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4x3f_): this;
        mapnYnXnZ(arg0: Internal.Matrix4x3f_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        lookAt(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        m31(): number;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        fma(arg0: Internal.Matrix4x3fc_, arg1: number, arg2: Internal.Matrix4x3f_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3f_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3f_): this;
        m20(arg0: number): this;
        mapYnZnX(): this;
        mapnZnYX(arg0: Internal.Matrix4x3f_): this;
        setColumn(arg0: number, arg1: Internal.Vector3fc_): this;
        setLookAlong(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        rotateZ(arg0: number, arg1: Internal.Matrix4x3f_): this;
        cofactor3x3(arg0: Internal.Matrix4x3f_): this;
        rotationY(arg0: number): this;
        cofactor3x3(arg0: Matrix3f_): Matrix3f;
        arcball(arg0: number, arg1: Internal.Vector3fc_, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        mapZnYX(): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix4x3f_): this;
        m20(): number;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4x3f_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3fc_, arg5: Internal.Matrix4x3f_): this;
        get(arg0: Matrix4f_): Matrix4f;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        transform(arg0: Vec4f_): Vec4f;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m32(arg0: number): this;
        set(arg0: Internal.Matrix3fc_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4x3f_): this;
        mapnYZnX(arg0: Internal.Matrix4x3f_): this;
        translationRotateInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        m32(): number;
        getScale(arg0: Vec3f_): Vec3f;
        rotateYXZ(arg0: Vec3f_): this;
        set3x3(arg0: Internal.Matrix3fc_): this;
        rotateY(arg0: number, arg1: Internal.Matrix4x3f_): this;
        normal(arg0: Internal.Matrix4x3f_): this;
        setRotationXYZ(arg0: number, arg1: number, arg2: number): this;
        m21(arg0: number): this;
        mulOrtho(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        normal(arg0: Matrix3f_): Matrix3f;
        get(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        add(arg0: Internal.Matrix4x3fc_): this;
        mapnXZnY(arg0: Internal.Matrix4x3f_): this;
        getRotation(arg0: Internal.AxisAngle4d_): Internal.AxisAngle4d;
        mapnYXZ(arg0: Internal.Matrix4x3f_): this;
        mulTranslation(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        m21(): number;
        normalize3x3(arg0: Internal.Matrix4x3f_): this;
        cofactor3x3(): this;
        mapnYnXnZ(): this;
        isFinite(): boolean;
        reflect(arg0: Internal.Quaternionfc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): this;
        mapZYnX(): this;
        shadow(arg0: Internal.Vector4fc_, arg1: Internal.Matrix4x3fc_, arg2: Internal.Matrix4x3f_): this;
        transpose3x3(): this;
        m10(arg0: number): this;
        translationRotateMul(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaternionfc_, arg4: Internal.Matrix4x3fc_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        m10(): number;
        mulComponentWise(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        invertOrtho(arg0: Internal.Matrix4x3f_): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        sub(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        rotateX(arg0: number, arg1: Internal.Matrix4x3f_): this;
        withLookAtUp(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): this;
        setTranslation(arg0: number, arg1: number, arg2: number): this;
        m22(arg0: number): this;
        translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): this;
        mapYnZnX(arg0: Internal.Matrix4x3f_): this;
        mapnZnYX(): this;
        get(arg0: Internal.Matrix4x3f_): this;
        mapYnXZ(arg0: Internal.Matrix4x3f_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        rotateAround(arg0: Internal.Quaternionfc_, arg1: number, arg2: number, arg3: number): this;
        scale(arg0: number, arg1: Internal.Matrix4x3f_): this;
        transpose3x3(arg0: Matrix3f_): Matrix3f;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        m22(): number;
        getToAddress(arg0: number): Internal.Matrix4x3fc;
        mapXnZnY(arg0: Internal.Matrix4x3f_): this;
        m11(arg0: number): this;
        mapnZXY(arg0: Internal.Matrix4x3f_): this;
        zero(): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): this;
        mapZXnY(): this;
        mapYnXnZ(): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m11(): number;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mulComponentWise(arg0: Internal.Matrix4x3fc_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        mapZnXY(): this;
        mapnXnZnY(arg0: Internal.Matrix4x3f_): this;
        translate(arg0: Internal.Vector3fc_): this;
        mapnYZnX(): this;
        setLookAt(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        translationRotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        m00(arg0: number): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translation(arg0: Internal.Vector3fc_): this;
        translationRotateScaleMul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.Matrix4x3f_): this;
        shadow(arg0: Internal.Vector4fc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4x3f_): this;
        m00(): number;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setLookAtLH(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        mapYnZX(arg0: Internal.Matrix4x3f_): this;
        lerp(arg0: Internal.Matrix4x3fc_, arg1: number): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        assume(arg0: number): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3f_): this;
        transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Vec3f_, arg7: Vec3f_): this;
        set(arg0: Internal.Matrix4x3fc_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnZYnX(arg0: Internal.Matrix4x3f_): this;
        translationRotate(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_): this;
        m12(): number;
        get3x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        normalizedPositiveX(arg0: Vec3f_): Vec3f;
        transformDirection(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        mapXZnY(): this;
        mapZYnX(arg0: Internal.Matrix4x3f_): this;
        getColumn(arg0: number, arg1: Vec3f_): Vec3f;
        get(arg0: number[], arg1: number): number[];
        translateLocal(arg0: number, arg1: number, arg2: number): this;
        mapnXYnZ(arg0: Internal.Matrix4x3f_): this;
        mapZYX(arg0: Internal.Matrix4x3f_): this;
        mapnXnYnZ(arg0: Internal.Matrix4x3f_): this;
        m01(): number;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        setFromAddress(arg0: number): this;
        mapnYnZnX(arg0: Internal.Matrix4x3f_): this;
        translation(arg0: number, arg1: number, arg2: number): this;
        getRow(arg0: number, arg1: Vec4f_): Vec4f;
        mapZXnY(arg0: Internal.Matrix4x3f_): this;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        scaling(arg0: number, arg1: number, arg2: number): this;
        normalizedPositiveY(arg0: Vec3f_): Vec3f;
        billboardCylindrical(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        transform(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        mapnXnZnY(): this;
        lookAtLH(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4x3f_): this;
        mapYZnX(arg0: Internal.Matrix4x3f_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        mapnZXnY(arg0: Internal.Matrix4x3f_): this;
        mapnYXnZ(): this;
        translationRotateInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_): this;
        mapnXZnY(): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3f_): this;
        mapXnZnY(): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4x3f_): this;
        rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        m02(): number;
        mapYnXZ(): this;
        normalizedPositiveZ(arg0: Vec3f_): Vec3f;
        mapZXY(arg0: Internal.Matrix4x3f_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        getEulerAnglesZYX(arg0: Vec3f_): Vec3f;
        positiveX(arg0: Vec3f_): Vec3f;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapnZnXnY(arg0: Internal.Matrix4x3f_): this;
        mulOrtho(arg0: Internal.Matrix4x3fc_): this;
        mapnYZX(): this;
        rotateXYZ(arg0: Vec3f_): this;
        mapnXZY(): this;
        mapnXnZY(): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        rotateLocalX(arg0: number, arg1: Internal.Matrix4x3f_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        mapZnYnX(arg0: Internal.Matrix4x3f_): this;
        mapYXZ(arg0: Internal.Matrix4x3f_): this;
        m30(arg0: number): this;
        rotateZYX(arg0: Vec3f_): this;
        mapnZnXY(): this;
        rotationAround(arg0: Internal.Quaternionfc_, arg1: number, arg2: number, arg3: number): this;
        mapZnXnY(arg0: Internal.Matrix4x3f_): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        normalize3x3(): this;
        set(arg0: Internal.FloatBuffer_): this;
        mapnZnYnX(arg0: Internal.Matrix4x3f_): this;
        positiveY(arg0: Vec3f_): Vec3f;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): this;
        get4x4(arg0: number[]): number[];
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        getEulerAnglesXYZ(arg0: Vec3f_): Vec3f;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3f_): this;
        determineProperties(): this;
        transformPosition(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        negateZ(arg0: Internal.Matrix4x3f_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        lookAlong(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        rotateLocalZ(arg0: number): this;
        scale(arg0: number): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapXZY(arg0: Internal.Matrix4x3f_): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        mapnYnZX(): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaternionfc_): this;
        invert(): this;
        positiveZ(arg0: Vec3f_): Vec3f;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        mapnXnZY(arg0: Internal.Matrix4x3f_): this;
        setRow(arg0: number, arg1: Internal.Vector4fc_): this;
        scale(arg0: Internal.Vector3fc_): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3f_): this;
        mapnYZX(arg0: Internal.Matrix4x3f_): this;
        setOrtho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        mul(arg0: Internal.Matrix4x3fc_): this;
        mapXnZY(arg0: Internal.Matrix4x3f_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        get4x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        get4x4(arg0: number[], arg1: number): number[];
        set(arg0: number[], arg1: number): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3f_): this;
        set(arg0: Internal.Quaterniondc_): this;
        mapYnZX(): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnXnYZ(): this;
        rotateLocalY(arg0: number): this;
        withLookAtUp(arg0: Internal.Vector3fc_): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        reflect(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        mapnXZY(arg0: Internal.Matrix4x3f_): this;
        mapXnYnZ(): this;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3f_): this;
        getTransposed(arg0: number[]): number[];
        set(arg0: Internal.AxisAngle4d_): this;
        mapXnZY(): this;
        equals(arg0: Internal.Matrix4x3fc_, arg1: number): boolean;
        rotation(arg0: Internal.AxisAngle4f_): this;
        mapnZYX(): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): this;
        mapnXYnZ(): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        negateX(arg0: Internal.Matrix4x3f_): this;
        get3x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateY(arg0: number): this;
        invert(arg0: Internal.Matrix4x3f_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3f_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        set(arg0: Internal.Quaternionfc_): this;
        mapYXZ(): this;
        set(arg0: number[]): this;
        rotateLocalX(arg0: number): this;
        scaleXY(arg0: number, arg1: number): this;
        transformPosition(arg0: Vec3f_): Vec3f;
        reflect(arg0: Internal.Quaternionfc_, arg1: Internal.Vector3fc_): this;
        transformDirection(arg0: Vec3f_): Vec3f;
        lerp(arg0: Internal.Matrix4x3fc_, arg1: number, arg2: Internal.Matrix4x3f_): this;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapnXnYnZ(): this;
        get3x4(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        withLookAtUp(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Internal.Vector3fc_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): this;
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        rotateZ(arg0: number): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        swap(arg0: Internal.Matrix4x3f_): this;
        scaling(arg0: Internal.Vector3fc_): this;
        scaling(arg0: number): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        negateY(arg0: Internal.Matrix4x3f_): this;
        translateLocal(arg0: Internal.Vector3fc_): this;
        get4x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        translationRotateScaleMul(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4x3f_): this;
        mapYZX(arg0: Internal.Matrix4x3f_): this;
        mapXnYnZ(arg0: Internal.Matrix4x3f_): this;
        getTransposed(arg0: number[], arg1: number): number[];
        setOrtho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        scale(arg0: number, arg1: number, arg2: number): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        obliqueZ(arg0: number, arg1: number): this;
        billboardSpherical(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        rotate(arg0: Internal.Quaternionfc_): this;
        mapZnYnX(): this;
        normal(): this;
        invertOrtho(): this;
        get3x4(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        negateY(): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        reflection(arg0: Internal.Quaternionfc_, arg1: Internal.Vector3fc_): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m12(arg0: number): this;
        frustumPlane(arg0: number, arg1: Vec4f_): Vec4f;
        translationRotateMul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.Matrix4x3fc_): this;
        mapZXY(): this;
        mapXZY(): this;
        translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): this;
        get(arg0: number[]): number[];
        mapnZXY(): this;
        get4x4(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        toString(arg0: Internal.NumberFormat_): string;
        arcball(arg0: number, arg1: Internal.Vector3fc_, arg2: number, arg3: number): this;
        rotateAround(arg0: Internal.Quaternionfc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        m01(arg0: number): this;
        mapnZnXnY(): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        clone(): any;
        negateX(): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        invert(arg0: Matrix4f_): Matrix4f;
        getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        setRotationYXZ(arg0: number, arg1: number, arg2: number): this;
        mapnYnZX(arg0: Internal.Matrix4x3f_): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        identity(): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        mapnZnXY(arg0: Internal.Matrix4x3f_): this;
        rotateX(arg0: number): this;
        scale(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): this;
        properties(): number;
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapnZnYnX(): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        lookAtLH(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        mapYZX(): this;
        m02(arg0: number): this;
        mapZnXnY(): this;
        mapnYnXZ(): this;
        mapnYXZ(): this;
        mapnZYX(arg0: Internal.Matrix4x3f_): this;
        mapZnXY(arg0: Internal.Matrix4x3f_): this;
        sub(arg0: Internal.Matrix4x3fc_): this;
        translationRotateTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        fma(arg0: Internal.Matrix4x3fc_, arg1: number): this;
        normalize3x3(arg0: Matrix3f_): Matrix3f;
        rotationX(arg0: number): this;
        translate(arg0: number, arg1: number, arg2: number): this;
        setRotationZYX(arg0: number, arg1: number, arg2: number): this;
        get4x4(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapZnYX(arg0: Internal.Matrix4x3f_): this;
        shadow(arg0: Internal.Vector4fc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        add(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        mapnXnYZ(arg0: Internal.Matrix4x3f_): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4x3f_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        mapYXnZ(): this;
        set(arg0: Internal.AxisAngle4f_): this;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        determinant(): number;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        mapZYX(): this;
        setLookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        setTranslation(arg0: Internal.Vector3fc_): this;
        set3x3(arg0: Internal.Matrix4x3fc_): this;
        rotateTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): this;
        mapnYXnZ(arg0: Internal.Matrix4x3f_): this;
        mapXZnY(arg0: Internal.Matrix4x3f_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        negateZ(): this;
        reflect(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        shadow(arg0: Internal.Vector4fc_, arg1: Internal.Matrix4x3fc_): this;
        transpose3x3(arg0: Internal.Matrix4x3f_): this;
        rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3f_): this;
        mapnZYnX(): this;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        origin(arg0: Vec3f_): Vec3f;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnZXnY(): this;
        m30(): number;
        transformAab(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Vec3f_, arg3: Vec3f_): this;
        rotationTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        getTranslation(arg0: Vec3f_): Vec3f;
        get finite(): boolean
        set fromAddress(arg0: number)
        set translation(arg0: Internal.Vector3fc_)
    }
    type Matrix4x3f_ = Matrix4x3f;
    class GenerateClientAssetsEventJS extends Internal.EventJS {
        constructor(gen: Internal.AssetJsonGenerator_)
        addMultipartBlockState(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.MultipartBlockStateGenerator>): void;
        add(location: ResourceLocation_, json: Internal.JsonElement_): void;
        defaultItemModel(id: ResourceLocation_): void;
        addLang(key: string, value: string): void;
        addBlockState(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.VariantBlockStateGenerator>): void;
        stencil(target: ResourceLocation_, stencil: string, colors: Internal.JsonObject_): void;
        defaultHandheldItemModel(id: ResourceLocation_): void;
        addModel(type: string, id: ResourceLocation_, consumer: Internal.Consumer_<Internal.ModelGenerator>): void;
        readonly generator: Internal.AssetJsonGenerator;
    }
    type GenerateClientAssetsEventJS_ = GenerateClientAssetsEventJS;
    class Inventory implements Internal.Container, Internal.Nameable {
        constructor(arg0: Internal.Player_)
        stopOpen(arg0: Internal.Player_): void;
        getSlotWithRemainingSpace(arg0: Internal.ItemStack_): number;
        removeFromSelected(arg0: boolean): Internal.ItemStack;
        add(arg0: number, arg1: Internal.ItemStack_): boolean;
        static tryClear(arg0: any): void;
        handler$zik000$restoreNotDropped(ci: Internal.CallbackInfo_, var1: Internal.Iterator_<any>, list: Internal.List_<any>, i: number): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        static getSelectionSize(): number;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        add(arg0: Internal.ItemStack_): boolean;
        dropAll(): void;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        placeItemBackInInventory(arg0: Internal.ItemStack_): void;
        setChanged(): void;
        contains(arg0: Internal.TagKey_<Internal.Item>): boolean;
        setPickedItem(arg0: Internal.ItemStack_): void;
        getContainerSize(): number;
        swapPaint(arg0: number): void;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        replaceWith(arg0: Internal.Inventory_): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getName(): Internal.Component;
        getSuitableHotbarSlot(): number;
        kjs$self(): Internal.Container;
        findSlotMatchingItem(arg0: Internal.ItemStack_): number;
        load(arg0: Internal.ListTag_): void;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getArmor(arg0: number): Internal.ItemStack;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        getDestroySpeed(arg0: Internal.BlockState_): number;
        hasCustomName(): boolean;
        tick(): void;
        removeItem(arg0: Internal.ItemStack_): void;
        getItem(arg0: number): Internal.ItemStack;
        getSelected(): Internal.ItemStack;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getCustomName(): Internal.Component;
        getDisplayName(): Internal.Component;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        handler$zik000$fireDropEvent(ci: Internal.CallbackInfo_, var1: Internal.Iterator_<any>, list: Internal.List_<any>, i: number): void;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        clearOrCountMatchingItems(arg0: Internal.Predicate_<Internal.ItemStack>, arg1: number, arg2: Internal.Container_): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number, arg2: number[]): void;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        save(arg0: Internal.ListTag_): Internal.ListTag;
        getAllItems(): Internal.List<Internal.ItemStack>;
        fillStackedContents(arg0: Internal.StackedContents_): void;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        stillValid(arg0: Internal.Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        getTimesChanged(): number;
        static isHotbarSlot(arg0: number): boolean;
        placeItemBackInInventory(arg0: Internal.ItemStack_, arg1: boolean): void;
        contains(arg0: Internal.ItemStack_): boolean;
        pickSlot(arg0: number): void;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        clearContent(): void;
        findSlotMatchingUnusedItem(arg0: Internal.ItemStack_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        getFreeSlot(): number;
        get selectionSize(): number
        get slots(): number
        set pickedItem(arg0: Internal.ItemStack_)
        get containerSize(): number
        get name(): Internal.Component
        get suitableHotbarSlot(): number
        get width(): number
        get maxStackSize(): number
        get selected(): Internal.ItemStack
        get customName(): Internal.Component
        get displayName(): Internal.Component
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get timesChanged(): number
        get mutable(): boolean
        get freeSlot(): number
        readonly armor: Internal.NonNullList<Internal.ItemStack>;
        readonly player: Internal.Player;
        static readonly INVENTORY_SIZE: 36;
        static readonly SLOT_OFFHAND: 40;
        readonly offhand: Internal.NonNullList<Internal.ItemStack>;
        static readonly NOT_FOUND_INDEX: -1;
        static readonly ALL_ARMOR_SLOTS: number[];
        static readonly HELMET_SLOT_ONLY: number[];
        selected: number;
        static readonly POP_TIME_DURATION: 5;
        readonly items: Internal.NonNullList<Internal.ItemStack>;
    }
    type Inventory_ = Inventory;
    class RecipeComponentValue <T> implements Internal.Map$Entry<Internal.RecipeKey<T>, T>, Internal.WrappedJS {
        constructor(key: Internal.RecipeKey_<T>, index: number)
        getKey(): any;
        static comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        shouldWrite(): boolean;
        replaceInput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        isOutput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_): boolean;
        isInput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_): boolean;
        getIndex(): number;
        copy(): this;
        checkEmpty(): string;
        static comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        write(): void;
        static copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        replaceOutput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getValue(): T;
        static comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        static comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        setValue(newValue: T): T;
        get key(): any
        get index(): number
        get value(): T
        set value(newValue: T)
        readonly index: number;
        value: T;
        readonly key: Internal.RecipeKey<T>;
        static readonly EMPTY_ARRAY: Internal.RecipeComponentValue<any>[];
        write: boolean;
    }
    type RecipeComponentValue_<T> = RecipeComponentValue<T>;
    class CeilingHangingCanvasSignBlock extends Internal.CeilingHangingSignBlock implements Internal.CanvasSign {
        constructor(arg0: Internal.DyeColor_)
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
    type CeilingHangingCanvasSignBlock_ = CeilingHangingCanvasSignBlock;
    abstract class AbstractCandleBlock extends Internal.Block {
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
        static extinguish(arg0: Internal.Player_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): void;
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
        static isLit(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly LIGHT_PER_CANDLE: 3;
        static readonly LIT: Internal.BooleanProperty;
    }
    type AbstractCandleBlock_ = AbstractCandleBlock;
    class JarItem extends Internal.AbstractMobContainerItem implements Internal.ICustomItemRendererProvider {
        constructor(blockIn: Internal.Block_, properties: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        isBoat(e: Internal.Entity_): boolean;
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
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        registerFabricRenderer(): void;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getRendererFactory(): Internal.Supplier<Internal.ItemStackRenderer>;
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
        get rendererFactory(): Internal.Supplier<Internal.ItemStackRenderer>
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type JarItem_ = JarItem;
    class ChorusFruitItem extends Internal.Item {
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
    type ChorusFruitItem_ = ChorusFruitItem;
    class Player$BedSleepingProblem extends Internal.Enum<Internal.Player$BedSleepingProblem> {
        static values(): Internal.Player$BedSleepingProblem[];
        getMessage(): Internal.Component;
        static valueOf(arg0: string): Internal.Player$BedSleepingProblem;
        get message(): Internal.Component
        static readonly NOT_POSSIBLE_HERE: Internal.Player$BedSleepingProblem;
        static readonly OTHER_PROBLEM: Internal.Player$BedSleepingProblem;
        static readonly NOT_SAFE: Internal.Player$BedSleepingProblem;
        static readonly NOT_POSSIBLE_NOW: Internal.Player$BedSleepingProblem;
        static readonly OBSTRUCTED: Internal.Player$BedSleepingProblem;
        static readonly TOO_FAR_AWAY: Internal.Player$BedSleepingProblem;
    }
    type Player$BedSleepingProblem_ = "obstructed" | "too_far_away" | Player$BedSleepingProblem | "not_possible_here" | "not_possible_now" | "not_safe" | "other_problem";
    interface IVillagerBrainEvent extends Internal.SimpleEvent {
        abstract getInternal(): Internal.VillagerBrainEventInternal;
        abstract addOrReplaceActivity(arg0: Internal.Activity_, arg1: Internal.ImmutableList_<com.mojang.datafixers.util.Pair<number, Internal.BehaviorControl<Internal.Villager>>>): void;
        abstract addSensor(arg0: Internal.SensorType_<Internal.Sensor<Internal.Villager>>): void;
        abstract getVillager(): Internal.Villager;
        abstract scheduleActivity(arg0: Internal.Activity_, arg1: number, arg2: number): void;
        abstract getMemories(): Internal.Map<Internal.MemoryModuleType<any>, Internal.Optional<Internal.ExpirableValue<any>>>;
        abstract addTaskToActivity<P extends com.mojang.datafixers.util.Pair<number, Internal.Behavior<Internal.Villager>>>(arg0: Internal.Activity_, arg1: P): boolean;
        get internal(): Internal.VillagerBrainEventInternal
        get villager(): Internal.Villager
        get memories(): Internal.Map<Internal.MemoryModuleType<any>, Internal.Optional<Internal.ExpirableValue<any>>>
    }
    type IVillagerBrainEvent_ = IVillagerBrainEvent;
    class WindBellBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
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
        chime(arg0: Internal.Level_, arg1: BlockPos_): boolean;
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
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type WindBellBlock_ = WindBellBlock;
    class AbstractContraptionEntity$ContraptionRotationState {
        constructor()
        asMatrix(): Internal.Matrix3d;
        hasVerticalRotation(): boolean;
        getYawOffset(): number;
        get yawOffset(): number
        static readonly NONE: Internal.AbstractContraptionEntity$ContraptionRotationState;
    }
    type AbstractContraptionEntity$ContraptionRotationState_ = AbstractContraptionEntity$ContraptionRotationState;
    class RealmsWorldOptions extends Internal.ValueObject {
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: number, arg5: boolean, arg6: number, arg7: number, arg8: boolean, arg9: string)
        getSlotName(arg0: number): string;
        static createDefaults(): Internal.RealmsWorldOptions;
        clone(): this;
        getDefaultSlotName(arg0: number): string;
        setEmpty(arg0: boolean): void;
        static createEmptyDefaults(): Internal.RealmsWorldOptions;
        toJson(): string;
        static parse(arg0: Internal.JsonObject_): Internal.RealmsWorldOptions;
        set empty(arg0: boolean)
        readonly difficulty: number;
        readonly commandBlocks: boolean;
        empty: boolean;
        templateImage: string;
        readonly gameMode: number;
        readonly spawnMonsters: boolean;
        readonly forceGameMode: boolean;
        templateId: number;
        readonly spawnAnimals: boolean;
        readonly spawnNPCs: boolean;
        readonly spawnProtection: number;
        readonly pvp: boolean;
    }
    type RealmsWorldOptions_ = RealmsWorldOptions;
    class RegisterClientReloadListenersEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: any_)
        registerReloadListener(arg0: Internal.PreparableReloadListener_): void;
    }
    type RegisterClientReloadListenersEvent_ = RegisterClientReloadListenersEvent;
    class BlockPlacerItem extends Internal.BlockItem {
        constructor(pBlock: Internal.Block_, pProperties: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        static get(): Internal.BlockPlacerItem;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        m_40610_(pContext: Internal.BlockPlaceContext_, pState: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        mimicGetPlacementState(pContext: Internal.BlockPlaceContext_, toPlace: Internal.Block_): Internal.BlockState;
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
        mimicPlace(pContext: Internal.BlockPlaceContext_, toPlace: Internal.Block_, overrideSound: SoundType_): Internal.InteractionResult;
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
        mimicUseOn(pContext: Internal.UseOnContext_, toPlace: Internal.Block_, foodProperties: Internal.FoodProperties_): Internal.InteractionResult;
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
    type BlockPlacerItem_ = BlockPlacerItem;
    class BendingTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.IntProvider_)
        static readonly CODEC: Internal.Codec<Internal.BendingTrunkPlacer>;
    }
    type BendingTrunkPlacer_ = BendingTrunkPlacer;
    interface UnitVariables {
        abstract getVariables(): Internal.VariableSet;
        get variables(): Internal.VariableSet
        (): Internal.VariableSet_;
    }
    type UnitVariables_ = UnitVariables;
    class DifficultyInstance {
        constructor(arg0: Internal.Difficulty_, arg1: number, arg2: number, arg3: number)
        getDifficulty(): Internal.Difficulty;
        isHard(): boolean;
        getEffectiveDifficulty(): number;
        isHarderThan(arg0: number): boolean;
        getSpecialMultiplier(): number;
        get difficulty(): Internal.Difficulty
        get hard(): boolean
        get effectiveDifficulty(): number
        get specialMultiplier(): number
    }
    type DifficultyInstance_ = DifficultyInstance;
    class OffsetTime implements Internal.Comparable<Internal.OffsetTime>, Internal.Temporal, Internal.TemporalAdjuster, Internal.Serializable {
        getHour(): number;
        minusHours(arg0: number): this;
        toLocalTime(): Internal.LocalTime;
        plus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        plusHours(arg0: number): this;
        isBefore(arg0: Internal.OffsetTime_): boolean;
        compareTo(arg0: any): number;
        getMinute(): number;
        isEqual(arg0: Internal.OffsetTime_): boolean;
        minusMinutes(arg0: number): this;
        compareTo(arg0: Internal.OffsetTime_): number;
        static now(arg0: Internal.Clock_): Internal.OffsetTime;
        static parse(arg0: Internal.CharSequence_, arg1: Internal.DateTimeFormatter_): Internal.OffsetTime;
        "with"(arg0: Internal.TemporalField_, arg1: number): this;
        toEpochSecond(arg0: Internal.LocalDate_): number;
        plusNanos(arg0: number): this;
        minusSeconds(arg0: number): this;
        isSupported(arg0: Internal.TemporalField_): boolean;
        format(arg0: Internal.DateTimeFormatter_): string;
        withMinute(arg0: number): this;
        static of(arg0: Internal.LocalTime_, arg1: Internal.ZoneOffset_): Internal.OffsetTime;
        static from(arg0: Internal.TemporalAccessor_): Internal.OffsetTime;
        "with"(arg0: Internal.TemporalAdjuster_): this;
        static parse(arg0: Internal.CharSequence_): Internal.OffsetTime;
        atDate(arg0: Internal.LocalDate_): Internal.OffsetDateTime;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        withNano(arg0: number): this;
        get(arg0: Internal.TemporalField_): number;
        static ofInstant(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.OffsetTime;
        withOffsetSameInstant(arg0: Internal.ZoneOffset_): this;
        plusMinutes(arg0: number): this;
        plusSeconds(arg0: number): this;
        withHour(arg0: number): this;
        withSecond(arg0: number): this;
        getLong(arg0: Internal.TemporalField_): number;
        static now(arg0: Internal.ZoneId_): Internal.OffsetTime;
        withOffsetSameLocal(arg0: Internal.ZoneOffset_): this;
        getOffset(): Internal.ZoneOffset;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.ZoneOffset_): Internal.OffsetTime;
        isAfter(arg0: Internal.OffsetTime_): boolean;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        getSecond(): number;
        getNano(): number;
        static now(): Internal.OffsetTime;
        plus(arg0: Internal.TemporalAmount_): this;
        minus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        minusNanos(arg0: number): this;
        get hour(): number
        get minute(): number
        get offset(): Internal.ZoneOffset
        get second(): number
        get nano(): number
        static readonly MAX: Internal.OffsetTime;
        static readonly MIN: Internal.OffsetTime;
    }
    type OffsetTime_ = OffsetTime;
    class UnboundedMapCodec <K, V> implements Internal.BaseMapCodec<K, V>, Internal.Codec<Internal.Map<K, V>> {
        constructor(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>)
        keyCodec(): Internal.Codec<K>;
        orElseGet(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.Codec<Internal.Map<K, V>>;
        dispatchStable<E>(arg0: Internal.Function_<E, Internal.Map<K, V>>, arg1: Internal.Function_<Internal.Map<K, V>, Internal.Codec<E>>): Internal.Codec<E>;
        optionalFieldOf(arg0: string, arg1: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        static empty<A>(): Internal.MapEncoder<A>;
        static error<A>(arg0: string): Internal.Encoder<A>;
        static unit<A>(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        deprecated(arg0: number): Internal.Codec<Internal.Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: Internal.Map_<K, V>, arg2: Internal.Lifecycle_): Internal.MapCodec<Internal.Map<K, V>>;
        static floatRange(arg0: number, arg1: number): Internal.Codec<number>;
        dispatchMap<E>(arg0: Internal.Function_<E, Internal.Map<K, V>>, arg1: Internal.Function_<Internal.Map<K, V>, Internal.Codec<E>>): Internal.MapCodec<E>;
        encode<T>(arg0: Internal.Map_<K, V>, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        partialDispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.DataResult<Internal.Map<K, V>>>, arg2: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<Internal.Codec<E>>>): Internal.Codec<E>;
        static ofBoxed<A>(arg0: Internal.Decoder$Boxed_<A>): Internal.Decoder<A>;
        dispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.Map<K, V>>, arg2: Internal.Function_<Internal.Map<K, V>, Internal.Codec<E>>): Internal.Codec<E>;
        parse<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<Internal.Map<K, V>>;
        map<B>(arg0: Internal.Function_<Internal.Map<K, V>, B>): Internal.Decoder<B>;
        static unit<A>(arg0: A): Internal.Codec<A>;
        static intRange(arg0: number, arg1: number): Internal.Codec<number>;
        dispatchMap<E>(arg0: string, arg1: Internal.Function_<E, Internal.Map<K, V>>, arg2: Internal.Function_<Internal.Map<K, V>, Internal.Codec<E>>): Internal.MapCodec<E>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<Internal.Map<K, V>>>): Internal.Encoder<B>;
        decode<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Map<K, V>, T>>;
        static pair<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<com.mojang.datafixers.util.Pair<F, S>>;
        elementCodec(): Internal.Codec<V>;
        static either<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<Internal.Either<F, S>>;
        static checkRange<N extends number & Internal.Comparable<N>>(arg0: N, arg1: N): Internal.Function<N, Internal.DataResult<N>>;
        boxed(): Internal.Decoder$Boxed<Internal.Map<K, V>>;
        static unboundedMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.UnboundedMapCodec<K, V>;
        optionalFieldOf(arg0: string): Internal.MapCodec<Internal.Optional<Internal.Map<K, V>>>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>, arg2: string): Internal.Codec<A>;
        encode<T>(arg0: Internal.Map_<K, V>, arg1: Internal.DynamicOps_<T>, arg2: T): Internal.DataResult<T>;
        orElse(arg0: Internal.Map_<K, V>): Internal.Codec<Internal.Map<K, V>>;
        static ofSimple<A>(arg0: Internal.Decoder$Simple_<A>): Internal.Decoder<A>;
        static mapEither<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<Internal.Either<F, S>>;
        static doubleRange(arg0: number, arg1: number): Internal.Codec<number>;
        static optionalField<F>(arg0: string, arg1: Internal.Codec_<F>): Internal.MapCodec<Internal.Optional<F>>;
        listOf(): Internal.Codec<Internal.List<Internal.Map<K, V>>>;
        xmap<S>(arg0: Internal.Function_<Internal.Map<K, V>, S>, arg1: Internal.Function_<S, Internal.Map<K, V>>): Internal.Codec<S>;
        fieldOf(arg0: string): Internal.MapCodec<Internal.Map<K, V>>;
        static simpleMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_): Internal.SimpleMapCodec<K, V>;
        parse<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<Internal.Map<K, V>>;
        orElseGet(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.Codec<Internal.Map<K, V>>;
        stable(): Internal.Codec<Internal.Map<K, V>>;
        flatComapMap<S>(arg0: Internal.Function_<Internal.Map<K, V>, S>, arg1: Internal.Function_<S, Internal.DataResult<Internal.Map<K, V>>>): Internal.Codec<S>;
        simple(): Internal.Decoder$Simple<Internal.Map<K, V>>;
        static ofTerminal<A>(arg0: Internal.Decoder$Terminal_<A>): Internal.Decoder<A>;
        encode(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: any): Internal.DataResult<any>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.MapLike_<T>): Internal.DataResult<Internal.Map<K, V>>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Map<K, V>, T>>;
        static list<E>(arg0: Internal.Codec_<E>): Internal.Codec<Internal.List<E>>;
        orElse(arg0: Internal.Consumer_<string>, arg1: Internal.Map_<K, V>): Internal.Codec<Internal.Map<K, V>>;
        comapFlatMap<S>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.Map<K, V>>): Internal.Codec<S>;
        comap<B>(arg0: Internal.Function_<B, Internal.Map<K, V>>): Internal.Encoder<B>;
        flatMap<B>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<B>>): Internal.Decoder<B>;
        promotePartial(arg0: Internal.Consumer_<any>): Internal.Decoder<any>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        mapResult(arg0: Internal.Codec$ResultFunction_<Internal.Map<K, V>>): Internal.Codec<Internal.Map<K, V>>;
        dispatch<E>(arg0: Internal.Function_<E, Internal.Map<K, V>>, arg1: Internal.Function_<Internal.Map<K, V>, Internal.Codec<E>>): Internal.Codec<E>;
        encodeStart<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.Map_<K, V>): Internal.DataResult<T>;
        terminal(): Internal.Decoder$Terminal<Internal.Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: Internal.Lifecycle_, arg2: Internal.Map_<K, V>, arg3: Internal.Lifecycle_): Internal.MapCodec<Internal.Map<K, V>>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>): Internal.Codec<A>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        withLifecycle(arg0: Internal.Lifecycle_): Internal.Codec<Internal.Map<K, V>>;
        static compoundList<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.Codec<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        orElseGet(arg0: Internal.Supplier_<Internal.Map<K, V>>): Internal.Codec<Internal.Map<K, V>>;
        orElse(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Map_<K, V>): Internal.Codec<Internal.Map<K, V>>;
        flatXmap<S>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.DataResult<Internal.Map<K, V>>>): Internal.Codec<S>;
        static mapPair<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<com.mojang.datafixers.util.Pair<F, S>>;
    }
    type UnboundedMapCodec_<K, V> = UnboundedMapCodec<K, V>;
    abstract class AbstractFunnelBlock extends Internal.Block implements Internal.ProperWaterloggedBlock, Internal.IBE<Internal.FunnelBlockEntity>, Internal.IWrenchable {
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.FunnelBlockEntity>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        static isFunnel(arg0: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        static getFunnelFacing(arg0: Internal.BlockState_): Internal.Direction;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.FunnelBlockEntity;
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
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        static tryInsert(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: boolean): Internal.ItemStack;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.FunnelBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
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
        getBlockEntityType(): Internal.BlockEntityType<Internal.FunnelBlockEntity>;
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
        getBlockEntityClass(): typeof Internal.FunnelBlockEntity;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.FunnelBlockEntity>;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityType(): Internal.BlockEntityType<Internal.FunnelBlockEntity>
        get mod(): string
        get blockEntityClass(): typeof Internal.FunnelBlockEntity
        static readonly POWERED: Internal.BooleanProperty;
    }
    type AbstractFunnelBlock_ = AbstractFunnelBlock;
    class User {
        constructor(arg0: string, arg1: string, arg2: string, arg3: Internal.Optional_<string>, arg4: Internal.Optional_<string>, arg5: Internal.User$Type_)
        getGameProfile(): Internal.GameProfile;
        getClientId(): Internal.Optional<string>;
        getSessionId(): string;
        getName(): string;
        hasCachedProperties(): boolean;
        getXuid(): Internal.Optional<string>;
        setProperties(arg0: Internal.PropertyMap_): void;
        getUuid(): string;
        getType(): Internal.User$Type;
        getAccessToken(): string;
        getProfileId(): Internal.UUID;
        get gameProfile(): Internal.GameProfile
        get clientId(): Internal.Optional<string>
        get sessionId(): string
        get name(): string
        get xuid(): Internal.Optional<string>
        set properties(arg0: Internal.PropertyMap_)
        get uuid(): string
        get type(): Internal.User$Type
        get accessToken(): string
        get profileId(): Internal.UUID
    }
    type User_ = User;
    class Suggestions {
        constructor(arg0: Internal.StringRange_, arg1: Internal.List_<Internal.Suggestion>)
        static create(arg0: string, arg1: Internal.Collection_<Internal.Suggestion>): Internal.Suggestions;
        static merge(arg0: string, arg1: Internal.Collection_<Internal.Suggestions>): Internal.Suggestions;
        getList(): Internal.List<Internal.Suggestion>;
        static empty(): Internal.CompletableFuture<Internal.Suggestions>;
        isEmpty(): boolean;
        getRange(): Internal.StringRange;
        get list(): Internal.List<Internal.Suggestion>
        get empty(): boolean
        get range(): Internal.StringRange
    }
    type Suggestions_ = Suggestions;
    class WindowBlock extends Internal.ConnectedGlassBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: boolean)
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
        isTranslucent(): boolean;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
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
        get translucent(): boolean
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type WindowBlock_ = WindowBlock;
    class ExtendoGripItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        static attacksByExtendoGripHaveMoreKnockback(arg0: Internal.LivingKnockBackEvent_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static dontMissEntitiesWhenYouHaveHighReachDistance(arg0: Internal.InputEvent$InteractionKeyMappingTriggered_): void;
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
        static isHoldingExtendoGrip(arg0: Internal.Player_): boolean;
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
        static bufferLivingAttackEvent(arg0: Internal.LivingAttackEvent_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static notifyServerOfLongRangeSpecificInteractions(arg0: Internal.PlayerInteractEvent$EntityInteractSpecific_): void;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        static notifyServerOfLongRangeAttacks(arg0: Internal.AttackEntityEvent_): void;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        static notifyServerOfLongRangeInteractions(arg0: Internal.PlayerInteractEvent$EntityInteract_): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setArmorToughness(armorToughness: number): void;
        static consumeDurabilityOnPlace(arg0: Internal.BlockEvent$EntityPlaceEvent_): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static addReachToJoiningPlayersHoldingExtendo(arg0: Internal.PlayerEvent$PlayerLoggedInEvent_): void;
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
        static consumeDurabilityOnBlockBreak(arg0: Internal.BlockEvent$BreakEvent_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        static holdingExtendoGripIncreasesRange(arg0: Internal.LivingEvent$LivingTickEvent_): void;
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
        static readonly MAX_DAMAGE: 200;
        static readonly singleRangeAttributeModifier: Internal.AttributeModifier;
        static readonly DUAL_EXTENDO_MARKER: "createDualExtendo";
        static readonly doubleRangeAttributeModifier: Internal.AttributeModifier;
        static readonly EXTENDO_MARKER: "createExtendo";
    }
    type ExtendoGripItem_ = ExtendoGripItem;
    class SimpleRandomFeatureConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.HolderSet_<Internal.PlacedFeature>)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.SimpleRandomFeatureConfiguration>;
        readonly features: Internal.HolderSet<Internal.PlacedFeature>;
    }
    type SimpleRandomFeatureConfiguration_ = SimpleRandomFeatureConfiguration;
    abstract class CharBuffer extends Internal.Buffer implements Internal.Comparable<Internal.CharBuffer>, Internal.CharSequence, Internal.Appendable, Internal.Readable {
        static wrap(arg0: string[], arg1: number, arg2: number): Internal.CharBuffer;
        abstract get(): string;
        static wrap(arg0: Internal.CharSequence_): Internal.CharBuffer;
        array(): string[];
        put(arg0: string): this;
        isEmpty(): boolean;
        clear(): this;
        flip(): this;
        compareTo(arg0: any): number;
        subSequence(arg0: number, arg1: number): Internal.CharSequence;
        read(arg0: Internal.CharBuffer_): number;
        abstract asReadOnlyBuffer(): this;
        get(arg0: number, arg1: string[], arg2: number, arg3: number): this;
        abstract order(): Internal.ByteOrder;
        reset(): this;
        put(arg0: number, arg1: string[]): this;
        charAt(arg0: number): string;
        abstract put(arg0: number, arg1: string): this;
        get(arg0: number, arg1: string[]): this;
        put(arg0: Internal.CharBuffer_): this;
        length(): number;
        put(arg0: number, arg1: string[], arg2: number, arg3: number): this;
        abstract compact(): this;
        put(arg0: number, arg1: Internal.CharBuffer_, arg2: number, arg3: number): this;
        limit(arg0: number): this;
        abstract get(arg0: number): string;
        append(arg0: Internal.CharSequence_): Internal.Appendable;
        get(arg0: string[]): this;
        static allocate(arg0: number): Internal.CharBuffer;
        abstract put(arg0: string): this;
        put(arg0: string, arg1: number, arg2: number): this;
        put(arg0: string[]): this;
        append(arg0: string): this;
        static wrap(arg0: Internal.CharSequence_, arg1: number, arg2: number): Internal.CharBuffer;
        abstract slice(): this;
        static wrap(arg0: string[]): Internal.CharBuffer;
        static compare(arg0: Internal.CharSequence_, arg1: Internal.CharSequence_): number;
        append(arg0: Internal.CharSequence_, arg1: number, arg2: number): this;
        mismatch(arg0: Internal.CharBuffer_): number;
        compareTo(arg0: Internal.CharBuffer_): number;
        chars(): Internal.IntStream;
        get(arg0: string[], arg1: number, arg2: number): this;
        put(arg0: string[], arg1: number, arg2: number): this;
        abstract slice(arg0: number, arg1: number): this;
        abstract duplicate(): this;
        codePoints(): Internal.IntStream;
        get empty(): boolean
    }
    type CharBuffer_ = CharBuffer;
    class TelemetryProperty <T> extends Internal.Record {
        constructor(arg0: string, arg1: string, arg2: Internal.Codec_<T>, arg3: Internal.TelemetryProperty$Exporter_<T>)
        static gameLoadMeasurement(arg0: string, arg1: string): Internal.TelemetryProperty<Internal.GameLoadTimesEvent$Measurement>;
        static longSamples(arg0: string, arg1: string): Internal.TelemetryProperty<Internal.LongList>;
        static uuid(arg0: string, arg1: string): Internal.TelemetryProperty<Internal.UUID>;
        static makeLong(arg0: string, arg1: string): Internal.TelemetryProperty<number>;
        export(arg0: Internal.TelemetryPropertyMap_, arg1: Internal.TelemetryPropertyContainer_): void;
        exportKey(): string;
        id(): string;
        static bool(arg0: string, arg1: string): Internal.TelemetryProperty<boolean>;
        exporter(): Internal.TelemetryProperty$Exporter<T>;
        codec(): Internal.Codec<T>;
        static integer(arg0: string, arg1: string): Internal.TelemetryProperty<number>;
        title(): Internal.MutableComponent;
        static string(arg0: string, arg1: string): Internal.TelemetryProperty<string>;
        static create<T>(arg0: string, arg1: string, arg2: Internal.Codec_<T>, arg3: Internal.TelemetryProperty$Exporter_<T>): Internal.TelemetryProperty<T>;
        static readonly GAME_MODE: Internal.TelemetryProperty<Internal.TelemetryProperty$GameMode>;
        static readonly NUMBER_OF_SAMPLES: Internal.TelemetryProperty<number>;
        static readonly EVENT_TIMESTAMP_UTC: Internal.TelemetryProperty<Internal.Instant>;
        static readonly SERVER_MODDED: Internal.TelemetryProperty<boolean>;
        static readonly OPT_IN: Internal.TelemetryProperty<boolean>;
        static readonly NEW_WORLD: Internal.TelemetryProperty<boolean>;
        static readonly MINECRAFT_SESSION_ID: Internal.TelemetryProperty<Internal.UUID>;
        static readonly WORLD_LOAD_TIME_MS: Internal.TelemetryProperty<number>;
        static readonly ADVANCEMENT_ID: Internal.TelemetryProperty<string>;
        static readonly LOAD_TIME_BOOTSTRAP_MS: Internal.TelemetryProperty<Internal.GameLoadTimesEvent$Measurement>;
        static readonly DEDICATED_MEMORY_KB: Internal.TelemetryProperty<number>;
        static readonly CLIENT_ID: Internal.TelemetryProperty<string>;
        static readonly SECONDS_SINCE_LOAD: Internal.TelemetryProperty<number>;
        static readonly CLIENT_MODDED: Internal.TelemetryProperty<boolean>;
        static readonly FRAME_RATE_SAMPLES: Internal.TelemetryProperty<Internal.LongList>;
        static readonly GAME_VERSION: Internal.TelemetryProperty<string>;
        static readonly REALMS_MAP_CONTENT: Internal.TelemetryProperty<string>;
        static readonly OPERATING_SYSTEM: Internal.TelemetryProperty<string>;
        static readonly PLATFORM: Internal.TelemetryProperty<string>;
        static readonly RENDER_TIME_SAMPLES: Internal.TelemetryProperty<Internal.LongList>;
        static readonly LOAD_TIME_TOTAL_TIME_MS: Internal.TelemetryProperty<Internal.GameLoadTimesEvent$Measurement>;
        static readonly LOAD_TIME_PRE_WINDOW_MS: Internal.TelemetryProperty<Internal.GameLoadTimesEvent$Measurement>;
        static readonly LAUNCHER_NAME: Internal.TelemetryProperty<string>;
        static readonly RENDER_DISTANCE: Internal.TelemetryProperty<number>;
        static readonly WORLD_SESSION_ID: Internal.TelemetryProperty<Internal.UUID>;
        static readonly USER_ID: Internal.TelemetryProperty<string>;
        static readonly SERVER_TYPE: Internal.TelemetryProperty<Internal.TelemetryProperty$ServerType>;
        static readonly USED_MEMORY_SAMPLES: Internal.TelemetryProperty<Internal.LongList>;
        static readonly TICKS_SINCE_LOAD: Internal.TelemetryProperty<number>;
        static readonly ADVANCEMENT_GAME_TIME: Internal.TelemetryProperty<number>;
        static readonly LOAD_TIME_LOADING_OVERLAY_MS: Internal.TelemetryProperty<Internal.GameLoadTimesEvent$Measurement>;
    }
    type TelemetryProperty_<T> = TelemetryProperty<T>;
}
declare namespace com.jozufozu.flywheel.api {
    interface Material <D extends Internal.InstanceData> {
        getModel(arg0: Internal.PartialModel_, arg1: Internal.BlockState_): Internal.Instancer<D>;
        getModel(arg0: Internal.PartialModel_, arg1: Internal.BlockState_, arg2: Internal.Direction_, arg3: Internal.Supplier_<Internal.PoseStack>): Internal.Instancer<D>;
        getModel(arg0: Internal.BlockState_): Internal.Instancer<D>;
        abstract model(arg0: any, arg1: Internal.Supplier_<com.jozufozu.flywheel.core.model.Model>): Internal.Instancer<D>;
        getModel(arg0: Internal.PartialModel_): Internal.Instancer<D>;
        getModel(arg0: Internal.PartialModel_, arg1: Internal.BlockState_, arg2: Internal.Direction_): Internal.Instancer<D>;
        (arg0: any, arg1: Internal.Supplier<com.jozufozu.flywheel.core.model.Model>): Internal.Instancer_<D>;
    }
    type Material_<D extends Internal.InstanceData> = Material<D>;
}
declare namespace it.unimi.dsi.fastutil.longs {
    interface LongConsumer extends Internal.LongConsumer, Internal.Consumer<number> {
        andThen(arg0: Internal.LongConsumer_): Internal.LongConsumer;
        andThen(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): this;
        /**
         * @deprecated
        */
        accept(arg0: any): void;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        /**
         * @deprecated
        */
        andThen(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        abstract accept(arg0: number): void;
        (arg0: number): void;
    }
    type LongConsumer_ = LongConsumer;
}
