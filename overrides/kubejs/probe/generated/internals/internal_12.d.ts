/// <reference path="./internal_*.d.ts" />
declare namespace com.google.common.base {
    interface Supplier <T> extends Internal.Supplier<T> {
        abstract get(): T;
        (): T;
    }
    type Supplier_<T> = Supplier<T>;
}
declare namespace Internal {
    class TextStyle extends Internal.Enum<Internal.TextStyle> {
        isStandalone(): boolean;
        asNormal(): this;
        asStandalone(): this;
        static values(): Internal.TextStyle[];
        static valueOf(arg0: string): Internal.TextStyle;
        get standalone(): boolean
        static readonly SHORT: Internal.TextStyle;
        static readonly NARROW: Internal.TextStyle;
        static readonly SHORT_STANDALONE: Internal.TextStyle;
        static readonly FULL: Internal.TextStyle;
        static readonly NARROW_STANDALONE: Internal.TextStyle;
        static readonly FULL_STANDALONE: Internal.TextStyle;
    }
    type TextStyle_ = "narrow" | TextStyle | "short" | "full_standalone" | "short_standalone" | "full" | "narrow_standalone";
    class ComplexItem extends Internal.Item {
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
        getUpdatePacket(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): Internal.Packet<any>;
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
    type ComplexItem_ = ComplexItem;
    interface Long2ObjectFunction <V> extends it.unimi.dsi.fastutil.Function<number, V>, Internal.LongFunction<V> {
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2ObjectFunction<V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2ObjectFunction<V>;
        remove(arg0: number): V;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Long2ByteFunction;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2ObjectFunction<V>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        put(arg0: number, arg1: V): V;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Long2ObjectFunction<T>;
        apply(arg0: number): V;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2ObjectFunction<V>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Long2LongFunction;
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
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Long2IntFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Long2FloatFunction;
        composeLong(arg0: Internal.Long2LongFunction_): this;
        apply(arg0: number): V;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Long2ShortFunction;
        containsKey(arg0: number): boolean;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Long2DoubleFunction;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        abstract get(arg0: number): V;
        size(): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2ObjectFunction<V>;
        clear(): void;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2ObjectFunction<V>;
        defaultReturnValue(): V;
        getOrDefault(arg0: number, arg1: V): V;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Long2CharFunction;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Long2ReferenceFunction<T>;
        (arg0: number): V;
    }
    type Long2ObjectFunction_<V> = Long2ObjectFunction<V>;
    abstract class AbstractMinecart extends Internal.Entity implements Internal.IForgeAbstractMinecart {
        getDistance(pos: BlockPos_): number;
        activateMinecart(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getMaxCartSpeedOnRail(): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getPos(arg0: number, arg1: number, arg2: number): Vec3d;
        setCustomDisplay(arg0: boolean): void;
        getSlopeAdjustment(): number;
        setHurtTime(arg0: number): void;
        setDamage(arg0: number): void;
        getDisplayOffset(): number;
        isOnScoreboardTeam(teamId: string): boolean;
        canBeRidden(): boolean;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setCanUseRail(arg0: boolean): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static registerCollisionHandler(arg0: Internal.IMinecartCollisionHandler_): void;
        isLiving(): boolean;
        abstract getMinecartType(): Internal.AbstractMinecart$Type;
        moveMinecartOnRail(arg0: BlockPos_): void;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        getComparatorLevel(): number;
        getDisplayName(): Internal.Component;
        setMaxSpeedAirLateral(arg0: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        abstract getDropItem(): Internal.Item;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        shouldDoRailFunctions(): boolean;
        destroy(arg0: DamageSource_): void;
        hasCustomDisplay(): boolean;
        shouldRiderSit(): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setDisplayOffset(arg0: number): void;
        setMaxSpeedAirVertical(arg0: number): void;
        isFrame(): boolean;
        playSound(id: Internal.SoundEvent_): void;
        getDamage(): number;
        getPosOffs(arg0: number, arg1: number, arg2: number, arg3: number): Vec3d;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        isPoweredCart(): boolean;
        isPeacefulCreature(): boolean;
        getDragAir(): number;
        setRotation(yaw: number, pitch: number): void;
        setCurrentCartSpeedCapOnRail(arg0: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        getDisplayBlockState(): Internal.BlockState;
        getDefaultDisplayOffset(): number;
        getMaxSpeedAirVertical(): number;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getDefaultDisplayBlockState(): Internal.BlockState;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        getHurtTime(): number;
        getCollisionHandler(): Internal.IMinecartCollisionHandler;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        canUseRail(): boolean;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        getCurrentRailPosition(): BlockPos;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setHurtDir(arg0: number): void;
        getCurrentCartSpeedCapOnRail(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        static createMinecart(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.AbstractMinecart$Type_): Internal.AbstractMinecart;
        isMultipartEntity(): boolean;
        getHurtDir(): number;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getMaxSpeedAirLateral(): number;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        serializeNBT(): Internal.CompoundTag;
        setZ(z: number): void;
        setDragAir(arg0: number): void;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDistanceSq(pos: BlockPos_): number;
        getProfile(): Internal.GameProfile;
        getClassification(arg0: boolean): Internal.MobCategory;
        getMaxSpeedWithRail(): number;
        runCommand(command: string): number;
        setDisplayBlockState(arg0: Internal.BlockState_): void;
        get maxCartSpeedOnRail(): number
        set customDisplay(arg0: boolean)
        get slopeAdjustment(): number
        set hurtTime(arg0: number)
        set damage(arg0: number)
        get displayOffset(): number
        set canUseRail(arg0: boolean)
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get minecartType(): Internal.AbstractMinecart$Type
        get comparatorLevel(): number
        get displayName(): Internal.Component
        set maxSpeedAirLateral(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get dropItem(): Internal.Item
        get teamId(): string
        get facing(): Internal.Direction
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        set displayOffset(arg0: number)
        set maxSpeedAirVertical(arg0: number)
        get frame(): boolean
        get damage(): number
        set motionY(y: number)
        get poweredCart(): boolean
        get peacefulCreature(): boolean
        get dragAir(): number
        set currentCartSpeedCapOnRail(arg0: number)
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get displayBlockState(): Internal.BlockState
        get defaultDisplayOffset(): number
        get maxSpeedAirVertical(): number
        get type(): string
        get block(): Internal.BlockContainerJS
        get defaultDisplayBlockState(): Internal.BlockState
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get hurtTime(): number
        get collisionHandler(): Internal.IMinecartCollisionHandler
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get currentRailPosition(): BlockPos
        set hurtDir(arg0: number)
        get currentCartSpeedCapOnRail(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get hurtDir(): number
        get parts(): Internal.PartEntity<any>[]
        get maxSpeedAirLateral(): number
        get motionZ(): number
        set z(z: number)
        set dragAir(arg0: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        get maxSpeedWithRail(): number
        set displayBlockState(arg0: Internal.BlockState_)
    }
    type AbstractMinecart_ = AbstractMinecart;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    class WallLanternBlock extends Internal.WaterBlock implements Internal.EntityBlock {
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
        placeOn(lantern: Internal.BlockState_, onPos: BlockPos_, face: Internal.Direction_, world: Internal.Level_): void;
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
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        static isValidBlock(b: Internal.Block_): boolean;
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
        static getConnectedState(state: Internal.BlockState_, facingState: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, dir: Internal.Direction_): Internal.BlockState;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SHAPE_NORTH: Internal.ArrayVoxelShape;
        static readonly SHAPE_SOUTH: Internal.ArrayVoxelShape;
        static readonly SHAPE_WEST: Internal.ArrayVoxelShape;
        static readonly LIGHT_LEVEL: Internal.IntegerProperty;
        static readonly SHAPE_EAST: Internal.ArrayVoxelShape;
        static readonly ATTACHMENT: Internal.EnumProperty<Internal.ModBlockProperties$BlockAttachment>;
        static readonly FACING: Internal.DirectionProperty;
        static readonly LIT: Internal.BooleanProperty;
    }
    type WallLanternBlock_ = WallLanternBlock;
    class Warden extends Internal.Monster implements Internal.VibrationSystem {
        constructor(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        clearAnger(arg0: Internal.Entity_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        increaseAngerAt(arg0: Internal.Entity_): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getAngerLevel(): Internal.AngerLevel;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        static getResonanceEventByFrequency(arg0: number): Internal.GameEvent;
        getTendrilAnimation(arg0: number): number;
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
        static getRedstoneStrengthForDistance(arg0: number, arg1: number): number;
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
        getHeartAnimation(arg0: number): number;
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
        getAngerManagement(): Internal.AngerManagement;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getClientAngerLevel(): number;
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
        canTargetEntity(arg0: Internal.Entity_): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        getBrain(): Internal.Brain<Internal.Warden>;
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
        setAttackTarget(arg0: Internal.LivingEntity_): void;
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
        static getGameEventFrequency(arg0: Internal.GameEvent_): number;
        getEntityAngryAt(): Internal.Optional<Internal.LivingEntity>;
        static applyDarknessAround(arg0: Internal.ServerLevel_, arg1: Vec3d_, arg2: Internal.Entity_, arg3: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        getVibrationUser(): Internal.VibrationSystem$User;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        increaseAngerAt(arg0: Internal.Entity_, arg1: number, arg2: boolean): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        getVibrationData(): Internal.VibrationSystem$Data;
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
        get angerLevel(): Internal.AngerLevel
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
        get angerManagement(): Internal.AngerManagement
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get clientAngerLevel(): number
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        get brain(): Internal.Brain<Internal.Warden>
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        set attackTarget(arg0: Internal.LivingEntity_)
        get feetArmorItem(): Internal.ItemStack
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get entityAngryAt(): Internal.Optional<Internal.LivingEntity>
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get vibrationUser(): Internal.VibrationSystem$User
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get vibrationData(): Internal.VibrationSystem$Data
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        diggingAnimationState: Internal.AnimationState;
        sonicBoomAnimationState: Internal.AnimationState;
        attackAnimationState: Internal.AnimationState;
        roarAnimationState: Internal.AnimationState;
        emergeAnimationState: Internal.AnimationState;
        sniffAnimationState: Internal.AnimationState;
    }
    type Warden_ = Warden;
    interface CreativeModeTabKJS {
        abstract kjs$setIcon(arg0: Internal.ItemStack_): void;
        abstract kjs$setDisplayName(arg0: Internal.Component_): void;
    }
    type CreativeModeTabKJS_ = CreativeModeTabKJS;
    class WaterWorkerEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type WaterWorkerEnchantment_ = WaterWorkerEnchantment;
    interface JEISubtypesEventJS$Interpreter extends Internal.Function<Internal.ItemStack, any> {
        compose<V>(arg0: Internal.Function_<V, Internal.ItemStack>): Internal.Function<V, any>;
        abstract apply(arg0: Internal.ItemStack_): any;
        identity<T>(): Internal.Function<T, T>;
        andThen<V>(arg0: Internal.Function_<any, V>): Internal.Function<Internal.ItemStack, V>;
        (arg0: Internal.ItemStack): any;
    }
    type JEISubtypesEventJS$Interpreter_ = JEISubtypesEventJS$Interpreter;
    interface CommentedConfig extends Internal.UnmodifiableCommentedConfig, Internal.Config {
        abstract add(arg0: Internal.List_<string>, arg1: any): boolean;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        of(arg0: Internal.Supplier_<Internal.Map<string, any>>, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getInt(arg0: Internal.List_<string>): number;
        getByteOrElse(arg0: string, arg1: number): number;
        getShortOrElse(arg0: string, arg1: number): number;
        abstract getComment(arg0: Internal.List_<string>): string;
        abstract commentMap(): Internal.Map<string, string>;
        getShortOrElse(arg0: Internal.List_<string>, arg1: number): number;
        abstract containsComment(arg0: Internal.List_<string>): boolean;
        getIntOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getOptionalComment(arg0: Internal.List_<string>): Internal.Optional<string>;
        abstract getRaw<T>(arg0: Internal.List_<string>): T;
        update(arg0: Internal.List_<string>, arg1: any): void;
        getOptionalLong(arg0: string): Internal.OptionalLong;
        remove<T>(arg0: string): T;
        putAll(arg0: Internal.UnmodifiableConfig_): void;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        add(arg0: string, arg1: any): boolean;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>): this;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.ConfigFormat_<any>): this;
        getComments(arg0: Internal.Map_<string, Internal.UnmodifiableCommentedConfig$CommentNode>): void;
        concurrentCopy(arg0: Internal.UnmodifiableConfig_): this;
        fake(arg0: Internal.Config_): this;
        copy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>, arg2: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        getOptionalLong(arg0: Internal.List_<string>): Internal.OptionalLong;
        get<T>(arg0: string): T;
        abstract contains(arg0: Internal.List_<string>): boolean;
        getLong(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        apply<T>(arg0: Internal.List_<string>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getInt(arg0: string): number;
        copy(arg0: Internal.UnmodifiableConfig_): this;
        getComment(arg0: string): string;
        containsComment(arg0: string): boolean;
        inMemoryUniversal(): Internal.Config;
        getRaw<T>(arg0: string): T;
        getIntOrElse(arg0: string, arg1: Internal.IntSupplier_): number;
        removeComment(arg0: string): string;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>, arg2: Internal.ConfigFormat_<any>): this;
        concurrentCopy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.ConfigFormat_<any>): this;
        isNull(arg0: string): boolean;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): Internal.Optional<T>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getLongOrElse(arg0: string, arg1: number): number;
        getByteOrElse(arg0: Internal.List_<string>, arg1: number): number;
        abstract setComment(arg0: Internal.List_<string>, arg1: string): string;
        getOptionalInt(arg0: string): Internal.OptionalInt;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        unmodifiable(): Internal.UnmodifiableConfig;
        getIntOrElse(arg0: string, arg1: number): number;
        abstract removeComment(arg0: Internal.List_<string>): string;
        copy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>): this;
        getOptionalInt(arg0: Internal.List_<string>): Internal.OptionalInt;
        abstract createSubConfig(): this;
        update(arg0: string, arg1: any): void;
        abstract size(): number;
        copy(arg0: Internal.UnmodifiableCommentedConfig_): this;
        abstract clear(): void;
        abstract valueMap(): Internal.Map<string, any>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        inMemoryConcurrent(): this;
        inMemory(): this;
        apply<T>(arg0: string): T;
        getOrElse<T>(arg0: string, arg1: T): T;
        getLong(arg0: string): number;
        get<T>(arg0: Internal.List_<string>): T;
        getCharOrElse(arg0: string, arg1: string): string;
        abstract set<T>(arg0: Internal.List_<string>, arg1: any): T;
        inMemoryUniversalConcurrent(): Internal.Config;
        contains(arg0: string): boolean;
        set<T>(arg0: string, arg1: any): T;
        getShort(arg0: Internal.List_<string>): number;
        isNull(arg0: Internal.List_<string>): boolean;
        removeAll(arg0: Internal.UnmodifiableConfig_): void;
        setInsertionOrderPreserved(arg0: boolean): void;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): Internal.Supplier<Internal.Map<string, T>>;
        getOptional<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        abstract remove<T>(arg0: Internal.List_<string>): T;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        isInsertionOrderPreserved(): boolean;
        getOptional<T>(arg0: string): Internal.Optional<T>;
        getShort(arg0: string): number;
        getOrElse<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        putAllComments(arg0: Internal.UnmodifiableCommentedConfig_): void;
        abstract clearComments(): void;
        getComments(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>;
        addAll(arg0: Internal.UnmodifiableConfig_): void;
        getChar(arg0: string): string;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: T): T;
        checked(): this;
        concurrentCopy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.ConfigFormat_<any>): this;
        getChar(arg0: Internal.List_<string>): string;
        setComment(arg0: string, arg1: string): string;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: number): number;
        concurrentCopy(arg0: Internal.UnmodifiableCommentedConfig_): this;
        isEmpty(): boolean;
        putAllComments(arg0: Internal.Map_<string, Internal.UnmodifiableCommentedConfig$CommentNode>): void;
        getIntOrElse(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
        fake(arg0: Internal.UnmodifiableConfig_): Internal.UnmodifiableCommentedConfig;
        wrap(arg0: Internal.Map_<string, any>, arg1: Internal.ConfigFormat_<any>): this;
        getDefaultMapCreator<T>(arg0: boolean): Internal.Supplier<Internal.Map<string, T>>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract entrySet(): Internal.Set<Internal.CommentedConfig$Entry>;
        getOptionalComment(arg0: string): Internal.Optional<string>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getCharOrElse(arg0: Internal.List_<string>, arg1: string): string;
        getByte(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.Optional<T>;
        ofConcurrent(arg0: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        of(arg0: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        getLongOrElse(arg0: string, arg1: Internal.LongSupplier_): number;
        getByte(arg0: string): number;
        copy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.ConfigFormat_<any>): this;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract configFormat(): Internal.ConfigFormat<any>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        set insertionOrderPreserved(arg0: boolean)
        get insertionOrderPreserved(): boolean
        get comments(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>
        get empty(): boolean
    }
    type CommentedConfig_ = CommentedConfig;
    class ThornsEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        static shouldHit(arg0: number, arg1: Internal.RandomSource_): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        static getDamage(arg0: number, arg1: Internal.RandomSource_): number;
    }
    type ThornsEnchantment_ = ThornsEnchantment;
    class FunnelBlockEntity$Mode extends Internal.Enum<Internal.FunnelBlockEntity$Mode> {
        static valueOf(arg0: string): Internal.FunnelBlockEntity$Mode;
        static values(): Internal.FunnelBlockEntity$Mode[];
        static readonly TAKING_FROM_BELT: Internal.FunnelBlockEntity$Mode;
        static readonly PUSHING_TO_BELT: Internal.FunnelBlockEntity$Mode;
        static readonly PAUSED: Internal.FunnelBlockEntity$Mode;
        static readonly COLLECT: Internal.FunnelBlockEntity$Mode;
        static readonly INVALID: Internal.FunnelBlockEntity$Mode;
        static readonly EXTRACT: Internal.FunnelBlockEntity$Mode;
    }
    type FunnelBlockEntity$Mode_ = "collect" | "pushing_to_belt" | "invalid" | FunnelBlockEntity$Mode | "paused" | "extract" | "taking_from_belt";
    class ChatLog {
        constructor(arg0: number)
        lookup(arg0: number): Internal.LoggedChatEvent;
        start(): number;
        end(): number;
        push(arg0: Internal.LoggedChatEvent_): void;
        static codec(arg0: number): Internal.Codec<Internal.ChatLog>;
    }
    type ChatLog_ = ChatLog;
    interface EffectsProperties {
        abstract getWaterColor(): number;
        abstract getAmbientLoopSound(): Internal.Optional<Internal.Holder<Internal.SoundEvent>>;
        abstract getGrassColorModifier(): Internal.BiomeSpecialEffects$GrassColorModifier;
        abstract getAmbientAdditionsSound(): Internal.Optional<Internal.AmbientAdditionsSettings>;
        abstract getBackgroundMusic(): Internal.Optional<Internal.Music>;
        abstract getFoliageColorOverride(): Internal.OptionalInt;
        abstract getAmbientMoodSound(): Internal.Optional<Internal.AmbientMoodSettings>;
        abstract getWaterFogColor(): number;
        abstract getAmbientParticle(): Internal.Optional<Internal.AmbientParticleSettings>;
        abstract getFogColor(): number;
        abstract getSkyColor(): number;
        abstract getGrassColorOverride(): Internal.OptionalInt;
        get waterColor(): number
        get ambientLoopSound(): Internal.Optional<Internal.Holder<Internal.SoundEvent>>
        get grassColorModifier(): Internal.BiomeSpecialEffects$GrassColorModifier
        get ambientAdditionsSound(): Internal.Optional<Internal.AmbientAdditionsSettings>
        get backgroundMusic(): Internal.Optional<Internal.Music>
        get foliageColorOverride(): Internal.OptionalInt
        get ambientMoodSound(): Internal.Optional<Internal.AmbientMoodSettings>
        get waterFogColor(): number
        get ambientParticle(): Internal.Optional<Internal.AmbientParticleSettings>
        get fogColor(): number
        get skyColor(): number
        get grassColorOverride(): Internal.OptionalInt
    }
    type EffectsProperties_ = EffectsProperties;
    interface WorldCreationContext$OptionsModifier extends Internal.UnaryOperator<Internal.WorldOptions> {
        identity<T>(): Internal.UnaryOperator<T>;
        abstract apply(arg0: Internal.WorldOptions_): Internal.WorldOptions;
        andThen<V>(arg0: Internal.Function_<Internal.WorldOptions, V>): Internal.Function<Internal.WorldOptions, V>;
        compose<V>(arg0: Internal.Function_<V, Internal.WorldOptions>): Internal.Function<V, Internal.WorldOptions>;
        (arg0: Internal.WorldOptions): Internal.WorldOptions_;
    }
    type WorldCreationContext$OptionsModifier_ = WorldCreationContext$OptionsModifier;
    class Weight {
        static of(arg0: number): Internal.Weight;
        asInt(): number;
        static readonly CODEC: Internal.Codec<Internal.Weight>;
    }
    type Weight_ = Weight;
    class ForgeConfigSpec$EnumValue <T extends Internal.Enum<T>> extends Internal.ForgeConfigSpec$ConfigValue<T> {
    }
    type ForgeConfigSpec$EnumValue_<T extends Internal.Enum<T>> = ForgeConfigSpec$EnumValue<T>;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    class DoubleSkullBlock extends Internal.SkullBlock implements Internal.IRotatable {
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
        getTicker<T extends Internal.BlockEntity>(level: Internal.Level_, state: Internal.BlockState_, type: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getEquipSound(): Internal.SoundEvent;
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
        getRotatedState(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rotation: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): Internal.Optional<Internal.BlockState>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
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
        rotateOverAxis(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rot: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): Internal.Optional<Internal.Direction>;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        onRotated(newState: Internal.BlockState_, oldState: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rotation: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): void;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        get equipSound(): Internal.SoundEvent
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type DoubleSkullBlock_ = DoubleSkullBlock;
    class PulleyBlock extends Internal.HorizontalAxisKineticBlock implements Internal.IBE<Internal.PulleyBlockEntity> {
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.PulleyBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
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
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PulleyBlockEntity;
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
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockEntityType(): Internal.BlockEntityType<Internal.PulleyBlockEntity>;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.PulleyBlockEntity>): void;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBlockEntityClass(): typeof Internal.PulleyBlockEntity;
        showCapacityWithAnnotation(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.PulleyBlockEntity>;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityType(): Internal.BlockEntityType<Internal.PulleyBlockEntity>
        get mod(): string
        get blockEntityClass(): typeof Internal.PulleyBlockEntity
    }
    type PulleyBlock_ = PulleyBlock;
    class PlayerInteractEvent$EntityInteract extends Internal.PlayerInteractEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.Entity_)
        getTarget(): Internal.Entity;
        getEntity(): Internal.LivingEntity;
        get target(): Internal.Entity
        get entity(): Internal.LivingEntity
    }
    type PlayerInteractEvent$EntityInteract_ = PlayerInteractEvent$EntityInteract;
    interface WorldlyContainerHolder {
        abstract getContainer(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.WorldlyContainer;
        (arg0: Internal.BlockState, arg1: Internal.LevelAccessor, arg2: BlockPos): Internal.WorldlyContainer_;
    }
    type WorldlyContainerHolder_ = WorldlyContainerHolder;
    interface TagType <T extends Internal.Tag> {
        abstract getPrettyName(): string;
        abstract skip(arg0: Internal.DataInput_, arg1: number): void;
        parseRoot(arg0: Internal.DataInput_, arg1: Internal.StreamTagVisitor_): void;
        abstract getName(): string;
        isValue(): boolean;
        abstract load(arg0: Internal.DataInput_, arg1: number, arg2: Internal.NbtAccounter_): T;
        abstract parse(arg0: Internal.DataInput_, arg1: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        createInvalid(arg0: number): Internal.TagType<Internal.EndTag>;
        abstract skip(arg0: Internal.DataInput_): void;
        get prettyName(): string
        get name(): string
        get value(): boolean
    }
    type TagType_<T extends Internal.Tag> = TagType<T>;
    interface IBookmarkOverlay {
        abstract getIngredientUnderMouse<T>(arg0: Internal.IIngredientType_<T>): T;
        getItemStackUnderMouse(): Internal.ItemStack;
        abstract getIngredientUnderMouse(): Internal.Optional<Internal.ITypedIngredient<any>>;
        get itemStackUnderMouse(): Internal.ItemStack
        get ingredientUnderMouse(): Internal.Optional<Internal.ITypedIngredient<any>>
    }
    type IBookmarkOverlay_ = IBookmarkOverlay;
    class TreeDecoratorType <P extends Internal.TreeDecorator> {
        constructor(arg0: Internal.Codec_<P>)
        codec(): Internal.Codec<P>;
        static readonly BEEHIVE: Internal.TreeDecoratorType<Internal.BeehiveDecorator>;
        static readonly LEAVE_VINE: Internal.TreeDecoratorType<Internal.LeaveVineDecorator>;
        static readonly COCOA: Internal.TreeDecoratorType<Internal.CocoaDecorator>;
        static readonly TRUNK_VINE: Internal.TreeDecoratorType<Internal.TrunkVineDecorator>;
        static readonly ALTER_GROUND: Internal.TreeDecoratorType<Internal.AlterGroundDecorator>;
        static readonly ATTACHED_TO_LEAVES: Internal.TreeDecoratorType<Internal.AttachedToLeavesDecorator>;
    }
    type TreeDecoratorType_<P extends Internal.TreeDecorator> = TreeDecoratorType<P> | Special.TreeDecoratorType;
    abstract class AbstractFurnaceMenu extends Internal.RecipeBookMenu<Internal.Container> {
        isLit(): boolean;
        getBurnProgress(): number;
        getLitProgress(): number;
        get lit(): boolean
        get burnProgress(): number
        get litProgress(): number
        static readonly FUEL_SLOT: 1;
        static readonly RESULT_SLOT: 2;
        static readonly DATA_COUNT: 4;
        static readonly SLOT_COUNT: 3;
        static readonly INGREDIENT_SLOT: 0;
    }
    type AbstractFurnaceMenu_ = AbstractFurnaceMenu;
    abstract class MultithreadEventLoopGroup extends Internal.MultithreadEventExecutorGroup implements Internal.EventLoopGroup {
        register(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract schedule<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        abstract submit<T>(arg0: Internal.Runnable_, arg1: T): io.netty.util.concurrent.Future<T>;
        register(arg0: io.netty.channel.Channel_): Internal.ChannelFuture;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        /**
         * @deprecated
        */
        register(arg0: io.netty.channel.Channel_, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract submit<T>(arg0: Internal.Callable_<T>): io.netty.util.concurrent.Future<T>;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        next(): Internal.EventLoop;
    }
    type MultithreadEventLoopGroup_ = MultithreadEventLoopGroup;
    interface InstantSource {
        tick(arg0: Internal.InstantSource_, arg1: Duration_): this;
        offset(arg0: Internal.InstantSource_, arg1: Duration_): this;
        fixed(arg0: Internal.Instant_): this;
        abstract instant(): Internal.Instant;
        system(): this;
        withZone(arg0: Internal.ZoneId_): Internal.Clock;
        millis(): number;
        (): Internal.Instant_;
    }
    type InstantSource_ = InstantSource;
    class SmallFireball extends Internal.Fireball {
        constructor(arg0: Internal.EntityType_<Internal.SmallFireball>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number)
        setMotionY(y: number): void;
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
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        getDisplayName(): Internal.Component;
        setMotionX(x: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
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
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get server(): Internal.MinecraftServer
        get displayName(): Internal.Component
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
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
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
    }
    type SmallFireball_ = SmallFireball;
    class ImmutableEnumMap <K extends Internal.Enum<K>, V> extends Internal.ImmutableMap$IteratorBasedImmutableMap<K, V> {
        get(arg0: any): V;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
    }
    type ImmutableEnumMap_<K extends Internal.Enum<K>, V> = ImmutableEnumMap<K, V>;
    class TarreyTownGoddessStatue extends Internal.Structure {
        constructor(structureSettings: Internal.Structure$StructureSettings_)
        static pieceType(): Internal.StructurePieceType$StructureTemplateType;
        m_214086_(ctx: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly CODEC: Internal.Codec<Internal.TarreyTownGoddessStatue>;
    }
    type TarreyTownGoddessStatue_ = TarreyTownGoddessStatue;
    class Pack$Info extends Internal.Record {
        constructor(arg0: Internal.Component_, arg1: number, arg2: Internal.FeatureFlagSet_)
        constructor(description: Internal.Component_, dataFormat: number, resourceFormat: number, requestedFeatures: Internal.FeatureFlagSet_, hidden: boolean)
        description(): Internal.Component;
        requestedFeatures(): Internal.FeatureFlagSet;
        dataFormat(): number;
        resourceFormat(): number;
        hidden(): boolean;
        compatibility(arg0: Internal.PackType_): Internal.PackCompatibility;
        getFormat(arg0: Internal.PackType_): number;
    }
    type Pack$Info_ = Pack$Info;
    interface MinecraftServerKJS extends Internal.DataSenderKJS, Internal.MinecraftEnvironmentKJS, Internal.WithPersistentData, Internal.WithAttachedData<Internal.MinecraftServer> {
        getDisplayName(): Internal.Component;
        getPersistentData(): Internal.CompoundTag;
        scheduleInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        getName(): Internal.Component;
        getPlayer(selector: Internal.PlayerSelector_): Internal.ServerPlayer;
        runCommandSilent(command: string): number;
        getEntities(): Internal.EntityArrayList;
        self(): Internal.MinecraftServer;
        scheduleRepeatingInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        sendData(channel: string): void;
        abstract getScheduledEvents(): Internal.ScheduledEvents;
        tell(message: Internal.Component_): void;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        schedule(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        getAdvancement(id: ResourceLocation_): Internal.AdvancementJS;
        setStatusMessage(message: Internal.Component_): void;
        abstract getData(): Internal.AttachedData<Internal.MinecraftServer>;
        getPlayers(): Internal.EntityArrayList;
        scheduleRepeating(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        runCommand(command: string): number;
        abstract getReloadableResources(): Internal.MinecraftServer$ReloadableResources;
        getLevel(dimension: ResourceLocation_): Internal.ServerLevel;
        abstract getOverworld(): Internal.ServerLevel;
        get displayName(): Internal.Component
        get persistentData(): Internal.CompoundTag
        get name(): Internal.Component
        get entities(): Internal.EntityArrayList
        get scheduledEvents(): Internal.ScheduledEvents
        set statusMessage(message: Internal.Component_)
        get data(): Internal.AttachedData<Internal.MinecraftServer>
        get players(): Internal.EntityArrayList
        get reloadableResources(): Internal.MinecraftServer$ReloadableResources
        get overworld(): Internal.ServerLevel
    }
    type MinecraftServerKJS_ = MinecraftServerKJS;
    class GameRules$Category extends Internal.Enum<Internal.GameRules$Category> {
        static valueOf(arg0: string): Internal.GameRules$Category;
        static values(): Internal.GameRules$Category[];
        getDescriptionId(): string;
        get descriptionId(): string
        static readonly CHAT: Internal.GameRules$Category;
        static readonly MISC: Internal.GameRules$Category;
        static readonly DROPS: Internal.GameRules$Category;
        static readonly UPDATES: Internal.GameRules$Category;
        static readonly PLAYER: Internal.GameRules$Category;
        static readonly MOBS: Internal.GameRules$Category;
        static readonly SPAWNING: Internal.GameRules$Category;
    }
    type GameRules$Category_ = "chat" | "updates" | "misc" | "drops" | "player" | "mobs" | "spawning" | GameRules$Category;
    class ClipBlockStateContext {
        constructor(arg0: Vec3d_, arg1: Vec3d_, arg2: Internal.Predicate_<Internal.BlockState>)
        getFrom(): Vec3d;
        getTo(): Vec3d;
        isTargetBlock(): Internal.Predicate<Internal.BlockState>;
        get from(): Vec3d
        get to(): Vec3d
    }
    type ClipBlockStateContext_ = ClipBlockStateContext;
    class UniversalAttractorItem extends Internal.WearableArtifactItem {
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
    type UniversalAttractorItem_ = UniversalAttractorItem;
    interface PlacementModifierType <P extends Internal.PlacementModifier> {
        abstract codec(): Internal.Codec<P>;
        (): Internal.Codec_<P>;
        readonly SURFACE_RELATIVE_THRESHOLD_FILTER: Internal.PlacementModifierType<Internal.SurfaceRelativeThresholdFilter>;
        readonly IN_SQUARE: Internal.PlacementModifierType<Internal.InSquarePlacement>;
        readonly HEIGHTMAP: Internal.PlacementModifierType<Internal.HeightmapPlacement>;
        readonly HEIGHT_RANGE: Internal.PlacementModifierType<Internal.HeightRangePlacement>;
        readonly BIOME_FILTER: Internal.PlacementModifierType<net.minecraft.world.level.levelgen.placement.BiomeFilter>;
        readonly RANDOM_OFFSET: Internal.PlacementModifierType<Internal.RandomOffsetPlacement>;
        readonly BLOCK_PREDICATE_FILTER: Internal.PlacementModifierType<Internal.BlockPredicateFilter>;
        readonly CARVING_MASK_PLACEMENT: Internal.PlacementModifierType<Internal.CarvingMaskPlacement>;
        readonly NOISE_BASED_COUNT: Internal.PlacementModifierType<Internal.NoiseBasedCountPlacement>;
        readonly ENVIRONMENT_SCAN: Internal.PlacementModifierType<Internal.EnvironmentScanPlacement>;
        readonly SURFACE_WATER_DEPTH_FILTER: Internal.PlacementModifierType<Internal.SurfaceWaterDepthFilter>;
        readonly COUNT_ON_EVERY_LAYER: Internal.PlacementModifierType<Internal.CountOnEveryLayerPlacement>;
        readonly COUNT: Internal.PlacementModifierType<Internal.CountPlacement>;
        readonly NOISE_THRESHOLD_COUNT: Internal.PlacementModifierType<Internal.NoiseThresholdCountPlacement>;
        readonly RARITY_FILTER: Internal.PlacementModifierType<Internal.RarityFilter>;
    }
    type PlacementModifierType_<P extends Internal.PlacementModifier> = PlacementModifierType<P> | Special.PlacementModifierType;
    class ForgeParagliderItem extends Internal.ParagliderItem {
        constructor(defaultColor: number)
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
        hasCustomColor(arg0: Internal.ItemStack_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        static dyeArmor(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.DyeItem>): Internal.ItemStack;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setColor(arg0: Internal.ItemStack_, arg1: number): void;
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
        clearColor(arg0: Internal.ItemStack_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
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
    type ForgeParagliderItem_ = ForgeParagliderItem;
    class ICustomParticleData$1 extends Internal.ParticleType<T> {
        codec(): Internal.Codec<T>;
    }
    type ICustomParticleData$1_ = ICustomParticleData$1;
    class FoodProvider {
        consume(player: Internal.Player_, world: Internal.Level_, nbtApplier: Internal.Consumer_<Internal.ItemStack>): boolean;
        static create(item: Internal.Item_, divider: number): Internal.FoodProvider;
        isEmpty(): boolean;
        getFood(): Internal.Item;
        getDivider(): number;
        get empty(): boolean
        get food(): Internal.Item
        get divider(): number
        static readonly CUSTOM_PROVIDERS: {[key: Internal.ExperienceBottleItem]: any, [key: Internal.MilkBucketItem]: any, [key: Internal.SuspiciousStewItem]: any, [key: Internal.AirItem]: Internal.FoodProvider};
        static readonly CODEC: Internal.Codec<Internal.FoodProvider>;
        static readonly EMPTY: Internal.FoodProvider;
    }
    type FoodProvider_ = FoodProvider;
    interface MapEncoder <A> extends Internal.Keyable {
        abstract compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<A>>): Internal.MapEncoder<B>;
        abstract encode<T>(arg0: A, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        compressedBuilder<T>(arg0: Internal.DynamicOps_<T>): Internal.RecordBuilder<T>;
        comap<B>(arg0: Internal.Function_<B, A>): Internal.MapEncoder<B>;
        encoder(): Internal.Encoder<A>;
        makeCompressedBuilder<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.KeyCompressor_<T>): Internal.RecordBuilder<T>;
        withLifecycle(arg0: Internal.Lifecycle_): this;
        abstract keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
    }
    type MapEncoder_<A> = MapEncoder<A>;
    class TrappedPresentBlock extends Internal.AbstractPresentBlock {
        constructor(color: Internal.DyeColor_, properties: Internal.BlockBehaviour$Properties_)
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
        static registerBehavior(pItem: Internal.ItemLike_, pBehavior: Internal.IPresentItemBehavior_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        static getPresentBehavior(pStack: Internal.ItemStack_): Internal.IPresentItemBehavior;
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
        supportsBlankColor(): boolean;
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
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        changeItemColor(color: Internal.DyeColor_): Internal.Item;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly FACING: Internal.DirectionProperty;
        static readonly ON_COOLDOWN: Internal.BooleanProperty;
    }
    type TrappedPresentBlock_ = TrappedPresentBlock;
    class ConfigFileTypeHandler {
        constructor()
        static backUpConfig(arg0: Internal.CommentedFileConfig_, arg1: number): void;
        unload(arg0: Internal.Path_, arg1: Internal.ModConfig_): void;
        reader(arg0: Internal.Path_): Internal.Function<Internal.ModConfig, Internal.CommentedFileConfig>;
        static backUpConfig(arg0: Internal.CommentedFileConfig_): void;
    }
    type ConfigFileTypeHandler_ = ConfigFileTypeHandler;
    class DeployerFakePlayer extends Internal.FakePlayer {
        constructor(arg0: Internal.ServerLevel_, arg1: Internal.UUID_)
        getDistance(pos: BlockPos_): number;
        isFake(): boolean;
        static deployerCollectsDropsFromKilledEntities(arg0: Internal.LivingDropsEvent_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        getStats(): Internal.PlayerStatsJS;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getSpawnLocation(): Internal.BlockContainerJS;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        addFood(f: number, m: number): void;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        setSpawnLocation(c: Internal.BlockContainerJS_): void;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getEntityReach(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        canStartSwimming(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getXpLevel(): number;
        canReach(arg0: BlockPos_, arg1: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        openGUI(gui: Internal.Consumer_<Internal.KubeJSGUI>): void;
        setSelectedSlot(index: number): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        jumpInFluid(arg0: Internal.FluidType_): void;
        isOp(): boolean;
        kick(): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        paint(renderer: Internal.CompoundTag_): void;
        getBlockReach(): number;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFoodLevel(): number;
        openChestGUI(title: Internal.Component_, rows: number, gui: Internal.Consumer_<Internal.ChestMenuData>): void;
        notify(title: Internal.Component_, text: Internal.Component_): void;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        setXpLevel(l: number): void;
        setFoodLevel(foodLevel: number): void;
        setSaturation(saturation: number): void;
        addXPLevels(l: number): void;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        canReach(arg0: Internal.Entity_, arg1: number): boolean;
        getReachDistance(): number;
        getMotionX(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        isWaterCreature(): boolean;
        sendData(channel: string): void;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        getSelectedSlot(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getOpenInventory(): Internal.AbstractContainerMenu;
        getXp(): number;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        setXp(xp: number): void;
        self(): Internal.LivingEntity;
        setCreativeMode(mode: boolean): void;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        isMiningBlock(): boolean;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        isAmbientCreature(): boolean;
        getStepHeight(): number;
        notify(builder: Notification_): void;
        isMonster(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        getName(): Internal.Component;
        static entitiesDontRetaliate(arg0: Internal.LivingChangeTargetEvent_): void;
        boostElytraFlight(): void;
        addExhaustion(exhaustion: number): void;
        getPassengers(): Internal.EntityArrayList;
        self(): Internal.ServerPlayer;
        giveInHand(item: Internal.ItemStack_): void;
        setMouseItem(item: Internal.ItemStack_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        ban(banner: string, reason: string, expiresInMillis: number): void;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        addXP(xp: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        give(item: Internal.ItemStack_): void;
        revokeAdvancement(id: ResourceLocation_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setDefaultMovementSpeed(speed: number): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        getMainHandItem(): Internal.ItemStack;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        static deployerKillsDoNotSpawnXP(arg0: Internal.LivingExperienceDropEvent_): void;
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
        kick(reason: Internal.Component_): void;
        canReach(arg0: Vec3d_, arg1: number): boolean;
        isAdvancementDone(id: ResourceLocation_): boolean;
        sendInventoryUpdate(): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        static deployerHasEyesOnHisFeet(arg0: Internal.EntityEvent$Size_): void;
        unlockAdvancement(id: ResourceLocation_): void;
        getMouseItem(): Internal.ItemStack;
        setZ(z: number): void;
        serializeNBT(): Internal.CompoundTag;
        setStatusMessage(message: Internal.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        openInventoryGUI(inventory: Internal.InventoryKJS_, title: Internal.Component_): void;
        getProfile(): Internal.GameProfile;
        getSaturation(): number;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        addItemCooldown(item: Internal.Item_, ticks: number): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        get fake(): boolean
        get stats(): Internal.PlayerStatsJS
        set defaultMovementSpeedMultiplier(speed: number)
        get spawnLocation(): Internal.BlockContainerJS
        get offHandItem(): Internal.ItemStack
        set spawnLocation(c: Internal.BlockContainerJS_)
        get entityReach(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get xpLevel(): number
        set selectedSlot(index: number)
        get living(): boolean
        get op(): boolean
        get totalMovementSpeed(): number
        get blockReach(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get foodLevel(): number
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set xpLevel(l: number)
        set foodLevel(foodLevel: number)
        set saturation(saturation: number)
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get selectedSlot(): number
        get potionEffects(): Internal.EntityPotionEffectsJS
        get openInventory(): Internal.AbstractContainerMenu
        get xp(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set xp(xp: number)
        set creativeMode(mode: boolean)
        get defaultMovementSpeed(): number
        get miningBlock(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get ambientCreature(): boolean
        get stepHeight(): number
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set mouseItem(item: Internal.ItemStack_)
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
        get mouseItem(): Internal.ItemStack
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        get saturation(): number
        set headArmorItem(item: Internal.ItemStack_)
        static readonly fallbackID: Internal.UUID;
        onMinecartContraption: boolean;
        placedTracks: boolean;
    }
    type DeployerFakePlayer_ = DeployerFakePlayer;
    interface LongToDoubleFunction {
        abstract applyAsDouble(arg0: number): number;
        (arg0: number): number;
    }
    type LongToDoubleFunction_ = LongToDoubleFunction;
    interface TravellingPoint$IPortalListener extends Internal.Predicate<Internal.Couple<Internal.TrackNodeLocation>> {
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        abstract test(arg0: Internal.Couple_<Internal.TrackNodeLocation>): boolean;
        and(arg0: Internal.Predicate_<Internal.Couple<Internal.TrackNodeLocation>>): Internal.Predicate<Internal.Couple<Internal.TrackNodeLocation>>;
        negate(): Internal.Predicate<Internal.Couple<Internal.TrackNodeLocation>>;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        or(arg0: Internal.Predicate_<Internal.Couple<Internal.TrackNodeLocation>>): Internal.Predicate<Internal.Couple<Internal.TrackNodeLocation>>;
        (arg0: Internal.Couple<Internal.TrackNodeLocation>): boolean;
    }
    type TravellingPoint$IPortalListener_ = TravellingPoint$IPortalListener;
    interface Object2FloatMap$Entry <K> extends Internal.Map$Entry<K, number> {
        abstract getKey(): K;
        abstract setValue(arg0: number): number;
        /**
         * @deprecated
        */
        setValue(arg0: number): number;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        /**
         * @deprecated
        */
        getValue(): number;
        /**
         * @deprecated
        */
        setValue(arg0: any): any;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract equals(arg0: any): boolean;
        abstract getFloatValue(): number;
        get key(): K
        set value(arg0: number)
        /**
         * @deprecated
        */
        set value(arg0: number)
        /**
         * @deprecated
        */
        get value(): number
        /**
         * @deprecated
        */
        set value(arg0: any)
        get floatValue(): number
    }
    type Object2FloatMap$Entry_<K> = Object2FloatMap$Entry<K>;
    class StringArgumentSerializer implements Internal.ArgumentTypeInfo<Internal.StringArgumentType, Internal.StringArgumentSerializer$Template> {
        constructor()
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.StringArgumentType_): Internal.StringArgumentSerializer$Template;
        serializeToNetwork(arg0: Internal.StringArgumentSerializer$Template_, arg1: Internal.FriendlyByteBuf_): void;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToJson(arg0: Internal.StringArgumentSerializer$Template_, arg1: Internal.JsonObject_): void;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
    }
    type StringArgumentSerializer_ = StringArgumentSerializer;
    class ModBlockProperties$Rune extends Internal.Enum<Internal.ModBlockProperties$Rune> implements Internal.StringRepresentable {
        static valueOf(name: string): Internal.ModBlockProperties$Rune;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.ModBlockProperties$Rune[];
        getSerializedName(): string;
        get serializedName(): string
        static readonly B: Internal.ModBlockProperties$Rune;
        static readonly Y: Internal.ModBlockProperties$Rune;
        static readonly W: Internal.ModBlockProperties$Rune;
        static readonly U: Internal.ModBlockProperties$Rune;
        static readonly R: Internal.ModBlockProperties$Rune;
        static readonly P: Internal.ModBlockProperties$Rune;
        static readonly N: Internal.ModBlockProperties$Rune;
        static readonly L: Internal.ModBlockProperties$Rune;
        static readonly J: Internal.ModBlockProperties$Rune;
        static readonly H: Internal.ModBlockProperties$Rune;
        static readonly F: Internal.ModBlockProperties$Rune;
        static readonly D: Internal.ModBlockProperties$Rune;
        static readonly C: Internal.ModBlockProperties$Rune;
        static readonly A: Internal.ModBlockProperties$Rune;
        static readonly Z: Internal.ModBlockProperties$Rune;
        static readonly X: Internal.ModBlockProperties$Rune;
        static readonly V: Internal.ModBlockProperties$Rune;
        static readonly T: Internal.ModBlockProperties$Rune;
        static readonly S: Internal.ModBlockProperties$Rune;
        static readonly Q: Internal.ModBlockProperties$Rune;
        static readonly O: Internal.ModBlockProperties$Rune;
        static readonly M: Internal.ModBlockProperties$Rune;
        static readonly K: Internal.ModBlockProperties$Rune;
        static readonly I: Internal.ModBlockProperties$Rune;
        static readonly G: Internal.ModBlockProperties$Rune;
        static readonly E: Internal.ModBlockProperties$Rune;
    }
    type ModBlockProperties$Rune_ = "c" | "a" | "z" | "x" | "v" | "t" | "r" | "p" | "n" | "l" | "j" | "h" | "f" | "d" | "b" | ModBlockProperties$Rune | "y" | "w" | "u" | "s" | "q" | "o" | "m" | "k" | "i" | "g" | "e";
    class CrankBlock extends Internal.WaterBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        activate(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, ccw: boolean): void;
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
        static readonly POWER: Internal.IntegerProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type CrankBlock_ = CrankBlock;
    class ClimateSettingsBuilder {
        static create(arg0: boolean, arg1: number, arg2: Internal.Biome$TemperatureModifier_, arg3: number): Internal.ClimateSettingsBuilder;
        getTemperatureModifier(): Internal.Biome$TemperatureModifier;
        getDownfall(): number;
        setTemperatureModifier(arg0: Internal.Biome$TemperatureModifier_): void;
        build(): Internal.Biome$ClimateSettings;
        setDownfall(arg0: number): void;
        getTemperature(): number;
        setTemperature(arg0: number): void;
        setHasPrecipitation(arg0: boolean): void;
        static copyOf(arg0: Internal.Biome$ClimateSettings_): Internal.ClimateSettingsBuilder;
        hasPrecipitation(): boolean;
        get temperatureModifier(): Internal.Biome$TemperatureModifier
        get downfall(): number
        set temperatureModifier(arg0: Internal.Biome$TemperatureModifier_)
        set downfall(arg0: number)
        get temperature(): number
        set temperature(arg0: number)
        set hasPrecipitation(arg0: boolean)
    }
    type ClimateSettingsBuilder_ = ClimateSettingsBuilder;
    class Holder$Reference$Type extends Internal.Enum<Internal.Holder$Reference$Type> {
        static values(): Internal.Holder$Reference$Type[];
        static valueOf(arg0: string): Internal.Holder$Reference$Type;
        static readonly STAND_ALONE: Internal.Holder$Reference$Type;
        static readonly INTRUSIVE: Internal.Holder$Reference$Type;
    }
    type Holder$Reference$Type_ = "stand_alone" | Holder$Reference$Type | "intrusive";
    class HolderSet$Direct <T> extends Internal.HolderSet$ListBacked<T> {
        unwrap(): Internal.Either<Internal.TagKey<T>, Internal.List<Internal.Holder<T>>>;
        static direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, ...arg1: E[]): Internal.HolderSet$Direct<T>;
        static direct<T>(...arg0: Internal.Holder_<T>[]): Internal.HolderSet$Direct<T>;
        forEach(arg0: Internal.Consumer_<Internal.Holder<T>>): void;
        serializationType(): Internal.IForgeHolderSet$SerializationType;
        static direct<T>(arg0: Internal.List_<Internal.Holder<T>>): Internal.HolderSet$Direct<T>;
        addInvalidationListener(arg0: Internal.Runnable_): void;
        unwrapKey(): Internal.Optional<Internal.TagKey<T>>;
        /**
         * @deprecated
        */
        static emptyNamed<T>(arg0: Internal.HolderOwner_<T>, arg1: Internal.TagKey_<T>): Internal.HolderSet$Named<T>;
        static direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, arg1: Internal.List_<E>): Internal.HolderSet$Direct<T>;
    }
    type HolderSet$Direct_<T> = HolderSet$Direct<T>;
    abstract class SmartBlockEntity extends Internal.CachedRenderBBBlockEntity implements Internal.IPartialSafeNBT, Internal.IInteractionChecker, Internal.ISpecialBlockEntityItemRequirement {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        requestModelDataUpdate(): void;
        destroy(): void;
        abstract addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        isVirtual(): boolean;
        isChunkUnloaded(): boolean;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        remove(): void;
        award(arg0: Internal.CreateAdvancement_): void;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        setLazyTickRate(arg0: number): void;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        initialize(): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        markVirtual(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        invalidate(): void;
        writeSafe(arg0: Internal.CompoundTag_): void;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        lazyTick(): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        m_183515_(arg0: Internal.CompoundTag_): void;
        refreshBlockState(): void;
        get virtual(): boolean
        get chunkUnloaded(): boolean
        set lazyTickRate(arg0: number)
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get modelData(): Internal.ModelData
    }
    type SmartBlockEntity_ = SmartBlockEntity;
    interface RecipeHolder {
        abstract getRecipeUsed(): Internal.Recipe<any>;
        setRecipeUsed(arg0: Internal.Level_, arg1: Internal.ServerPlayer_, arg2: Internal.Recipe_<any>): boolean;
        abstract setRecipeUsed(arg0: Internal.Recipe_<any>): void;
        awardUsedRecipes(arg0: Internal.Player_, arg1: Internal.List_<Internal.ItemStack>): void;
        get recipeUsed(): Internal.Recipe<any>
        set recipeUsed(arg0: Internal.Recipe_<any>)
    }
    type RecipeHolder_ = RecipeHolder;
    class CageBlock extends Internal.WaterBlock implements Internal.EntityBlock {
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
        getCageItem(te: Internal.CageBlockTile_): Internal.ItemStack;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly LIGHT_LEVEL: Internal.IntegerProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type CageBlock_ = CageBlock;
    class UnderwaterMagmaConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: number, arg2: number)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly floorSearchRange: number;
        readonly placementRadiusAroundFloor: number;
        static readonly CODEC: Internal.Codec<Internal.UnderwaterMagmaConfiguration>;
        readonly placementProbabilityPerValidPosition: number;
    }
    type UnderwaterMagmaConfiguration_ = UnderwaterMagmaConfiguration;
    interface ClientboundBossEventPacket$Handler {
        updateStyle(arg0: Internal.UUID_, arg1: Internal.BossEvent$BossBarColor_, arg2: Internal.BossEvent$BossBarOverlay_): void;
        remove(arg0: Internal.UUID_): void;
        updateProgress(arg0: Internal.UUID_, arg1: number): void;
        updateProperties(arg0: Internal.UUID_, arg1: boolean, arg2: boolean, arg3: boolean): void;
        add(arg0: Internal.UUID_, arg1: Internal.Component_, arg2: number, arg3: Internal.BossEvent$BossBarColor_, arg4: Internal.BossEvent$BossBarOverlay_, arg5: boolean, arg6: boolean, arg7: boolean): void;
        updateName(arg0: Internal.UUID_, arg1: Internal.Component_): void;
    }
    type ClientboundBossEventPacket$Handler_ = ClientboundBossEventPacket$Handler;
    class ProcessingRecipeBuilder$ProcessingRecipeParams {
        keepHeldItem: boolean;
    }
    type ProcessingRecipeBuilder$ProcessingRecipeParams_ = ProcessingRecipeBuilder$ProcessingRecipeParams;
    class ClientboundMerchantOffersPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: Internal.MerchantOffers_, arg2: number, arg3: number, arg4: boolean, arg5: boolean)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        showProgress(): boolean;
        getVillagerLevel(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        canRestock(): boolean;
        getOffers(): Internal.MerchantOffers;
        getContainerId(): number;
        getVillagerXp(): number;
        isSkippable(): boolean;
        get villagerLevel(): number
        get offers(): Internal.MerchantOffers
        get containerId(): number
        get villagerXp(): number
        get skippable(): boolean
    }
    type ClientboundMerchantOffersPacket_ = ClientboundMerchantOffersPacket;
    class AdvancementList {
        constructor()
        getAllAdvancements(): Internal.Collection<Internal.Advancement>;
        remove(arg0: Internal.Set_<ResourceLocation>): void;
        setListener(arg0: Internal.AdvancementList$Listener_): void;
        getRoots(): Internal.Iterable<Internal.Advancement>;
        clear(): void;
        add(arg0: Internal.Map_<ResourceLocation, Internal.Advancement$Builder>): void;
        get(arg0: ResourceLocation_): Internal.Advancement;
        get allAdvancements(): Internal.Collection<Internal.Advancement>
        set listener(arg0: Internal.AdvancementList$Listener_)
        get roots(): Internal.Iterable<Internal.Advancement>
    }
    type AdvancementList_ = AdvancementList;
    class SmokingRecipe extends Internal.AbstractCookingRecipe {
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.CookingBookCategory_, arg3: Internal.Ingredient_, arg4: Internal.ItemStack_, arg5: number, arg6: number)
        isSpecial(): boolean;
        getGroup(): string;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<Internal.ItemStack>;
        get special(): boolean
        get group(): string
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type SmokingRecipe_ = SmokingRecipe;
    interface RefreshableSearchTree <T> extends Internal.SearchTree<T> {
        empty<T>(): this;
        abstract search(arg0: string): Internal.List<T>;
        refresh(): void;
        (arg0: string): Internal.List_<T>;
    }
    type RefreshableSearchTree_<T> = RefreshableSearchTree<T>;
    abstract class CharsetEncoder {
        replaceWith(arg0: number[]): this;
        averageBytesPerChar(): number;
        canEncode(arg0: Internal.CharSequence_): boolean;
        charset(): Internal.Charset;
        onUnmappableCharacter(arg0: Internal.CodingErrorAction_): this;
        unmappableCharacterAction(): Internal.CodingErrorAction;
        onMalformedInput(arg0: Internal.CodingErrorAction_): this;
        replacement(): number[];
        reset(): this;
        isLegalReplacement(arg0: number[]): boolean;
        maxBytesPerChar(): number;
        encode(arg0: Internal.CharBuffer_, arg1: Internal.ByteBuffer_, arg2: boolean): Internal.CoderResult;
        encode(arg0: Internal.CharBuffer_): Internal.ByteBuffer;
        flush(arg0: Internal.ByteBuffer_): Internal.CoderResult;
        malformedInputAction(): Internal.CodingErrorAction;
        canEncode(arg0: string): boolean;
    }
    type CharsetEncoder_ = CharsetEncoder;
    abstract class Invokable <T, R> implements Internal.Member, Internal.AnnotatedElement {
        isFinal(): boolean;
        abstract isVarArgs(): boolean;
        getOwnerType(): Internal.TypeToken<T>;
        getModifiers(): number;
        getDeclaredAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        getDeclaringClass(): T;
        getAnnotation<A extends Internal.Annotation>(arg0: A): A;
        abstract getAnnotatedReturnType(): Internal.AnnotatedType;
        abstract isOverridable(): boolean;
        returning<R1 extends R>(arg0: Internal.TypeToken_<R1>): Internal.Invokable<T, R1>;
        isPublic(): boolean;
        getName(): string;
        trySetAccessible(): boolean;
        isPrivate(): boolean;
        getParameters(): Internal.ImmutableList<Internal.Parameter>;
        isStatic(): boolean;
        getDeclaredAnnotations(): Internal.Annotation[];
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        static from(arg0: Internal.Method_): Internal.Invokable<any, any>;
        setAccessible(arg0: boolean): void;
        getAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        isPackagePrivate(): boolean;
        getDeclaredAnnotation<T extends Internal.Annotation>(arg0: T): T;
        isAbstract(): boolean;
        isNative(): boolean;
        isSynthetic(): boolean;
        static from<T>(arg0: Internal.Constructor_<T>): Internal.Invokable<T, T>;
        isSynchronized(): boolean;
        getExceptionTypes(): Internal.ImmutableList<Internal.TypeToken<Internal.Throwable>>;
        invoke(arg0: T, ...arg1: any[]): R;
        getReturnType(): Internal.TypeToken<R>;
        isProtected(): boolean;
        getAnnotations(): Internal.Annotation[];
        abstract getTypeParameters(): any[];
        returning<R1 extends R>(arg0: R1): Internal.Invokable<T, R1>;
        isAccessible(): boolean;
        get "final"(): boolean
        get varArgs(): boolean
        get ownerType(): Internal.TypeToken<T>
        get modifiers(): number
        get declaringClass(): T
        get annotatedReturnType(): Internal.AnnotatedType
        get overridable(): boolean
        get "public"(): boolean
        get name(): string
        get "private"(): boolean
        get parameters(): Internal.ImmutableList<Internal.Parameter>
        get "static"(): boolean
        get declaredAnnotations(): Internal.Annotation[]
        set accessible(arg0: boolean)
        get packagePrivate(): boolean
        get "abstract"(): boolean
        get "native"(): boolean
        get synthetic(): boolean
        get "synchronized"(): boolean
        get exceptionTypes(): Internal.ImmutableList<Internal.TypeToken<Internal.Throwable>>
        get returnType(): Internal.TypeToken<R>
        get "protected"(): boolean
        get annotations(): Internal.Annotation[]
        get typeParameters(): any[]
        get accessible(): boolean
    }
    type Invokable_<T, R> = Invokable<T, R>;
    class NamedGuiOverlay extends Internal.Record {
        constructor(id: ResourceLocation_, overlay: Internal.IGuiOverlay_)
        overlay(): Internal.IGuiOverlay;
        id(): ResourceLocation;
    }
    type NamedGuiOverlay_ = NamedGuiOverlay;
    class SimpleFoiledItem extends Internal.Item {
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
    type SimpleFoiledItem_ = SimpleFoiledItem;
    class ReplaceSphereConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.IntProvider_)
        radius(): Internal.IntProvider;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.ReplaceSphereConfiguration>;
        readonly targetState: Internal.BlockState;
        readonly replaceState: Internal.BlockState;
    }
    type ReplaceSphereConfiguration_ = ReplaceSphereConfiguration;
    class MechanicalPistonBlockEntity extends Internal.LinearActuatorBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        addExceptionToTooltip(arg0: Internal.List_<Internal.Component>): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        assemble(): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
    }
    type MechanicalPistonBlockEntity_ = MechanicalPistonBlockEntity;
    class TooltipBlockItem extends Internal.BlockItem {
        constructor(block: Internal.Block_, tooltip: Internal.Component_, properties: Internal.Item$Properties_)
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
    type TooltipBlockItem_ = TooltipBlockItem;
    class VariantBlockStateGenerator {
        constructor()
        variant(key: string, consumer: Internal.Consumer_<Internal.VariantBlockStateGenerator$Variant>): void;
        simpleVariant(key: string, model: string): void;
        toJson(): Internal.JsonObject;
    }
    type VariantBlockStateGenerator_ = VariantBlockStateGenerator;
    class ExperienceFluid extends Internal.VirtualFluid {
        constructor(arg0: any_)
        constructor(arg0: number, arg1: any_)
        convertToOrb(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: number): Internal.ExperienceOrb;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        applyAdditionalEffects(arg0: Internal.LivingEntity_, arg1: number): void;
        getXpRatio(): number;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        drop(arg0: Internal.ServerLevel_, arg1: Vec3d_, arg2: number): void;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        awardOrDrop(arg0: Internal.Player_, arg1: Internal.ServerLevel_, arg2: Vec3d_, arg3: Vec3d_, arg4: number): void;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        arch$registryName(): ResourceLocation;
        get xpRatio(): number
    }
    type ExperienceFluid_ = ExperienceFluid;
    class ClientboundSetScorePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.ServerScoreboard$Method_, arg1: string, arg2: string, arg3: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getOwner(): string;
        getScore(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        getObjectiveName(): string;
        getMethod(): Internal.ServerScoreboard$Method;
        get owner(): string
        get score(): number
        get skippable(): boolean
        get objectiveName(): string
        get method(): Internal.ServerScoreboard$Method
    }
    type ClientboundSetScorePacket_ = ClientboundSetScorePacket;
    class RenderChunkRegion implements Internal.BlockAndTintGetter {
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        getShade(arg0: Internal.Direction_, arg1: boolean): number;
        getBlockState(arg0: BlockPos_): Internal.BlockState;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        getMaxBuildHeight(): number;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getSectionYFromSectionIndex(arg0: number): number;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        getLightEngine(): Internal.LevelLightEngine;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        getHeight(): number;
        getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getModelDataManager(): Internal.ModelDataManager;
        canSeeSky(arg0: BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        getFluidState(arg0: BlockPos_): Internal.FluidState;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getMinBuildHeight(): number;
        getSectionsCount(): number;
        getMaxLightLevel(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get maxBuildHeight(): number
        get lightEngine(): Internal.LevelLightEngine
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get minBuildHeight(): number
        get sectionsCount(): number
        get maxLightLevel(): number
    }
    type RenderChunkRegion_ = RenderChunkRegion;
    interface ColorResolver {
        abstract getColor(arg0: Internal.Biome_, arg1: number, arg2: number): number;
        (arg0: Internal.Biome, arg1: number, arg2: number): number;
    }
    type ColorResolver_ = ColorResolver;
    interface IForgeBlockState {
        getFlammability(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        onBlockExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        isPortalFrame(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getSoundType(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Entity_): SoundType;
        canRedstoneConnectTo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        isBed(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.LivingEntity_): boolean;
        getExpDrop(arg0: Internal.LevelReader_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: number, arg4: number): number;
        isConduitFrame(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): boolean;
        canHarvestBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        setBedOccupied(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.LivingEntity_, arg3: boolean): void;
        canBeHydrated(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: BlockPos_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Vec3d_): Internal.BlockState;
        isLadder(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.LivingEntity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        getToolModifiedState(arg0: Internal.UseOnContext_, arg1: Internal.ToolAction_, arg2: boolean): Internal.BlockState;
        getBedDirection(arg0: Internal.LevelReader_, arg1: BlockPos_): Internal.Direction;
        isSlimeBlock(): boolean;
        canSustainPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.IPlantable_): boolean;
        getBeaconColorMultiplier(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): number[];
        canStickTo(arg0: Internal.BlockState_): boolean;
        addLandingEffects(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: number): boolean;
        isFlammable(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        shouldCheckWeakPower(arg0: Internal.SignalGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        isFertile(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.LivingEntity_): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        canDropFromExplosion(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): boolean;
        supportsExternalFaceHiding(): boolean;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_): Internal.BlockPathTypes;
        isScaffolding(arg0: Internal.LivingEntity_): boolean;
        getAppearance(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.BlockState_, arg4: BlockPos_): Internal.BlockState;
        rotate(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.LevelReader_, arg1: BlockPos_): number;
        onNeighborChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): void;
        isValidSpawn(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.SpawnPlacements$Type_, arg3: Internal.EntityType_<any>): boolean;
        canEntityDestroy(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        isBurning(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getRespawnPosition(arg0: Internal.EntityType_<any>, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: number, arg4: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        getWeakChanges(arg0: Internal.LevelReader_, arg1: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        onTreeGrow(arg0: Internal.LevelReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_): boolean;
        isFireSource(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getLightEmission(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        getFriction(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Entity_): number;
        isStickyBlock(): boolean;
        getCloneItemStack(arg0: Internal.HitResult_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: boolean, arg4: Internal.FluidState_): boolean;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        getFireSpreadSpeed(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        get slimeBlock(): boolean
        get stickyBlock(): boolean
    }
    type IForgeBlockState_ = IForgeBlockState;
    class TrunkVineDecorator extends Internal.TreeDecorator {
        constructor()
        static readonly CODEC: Internal.Codec<Internal.TrunkVineDecorator>;
        static readonly INSTANCE: Internal.TrunkVineDecorator;
    }
    type TrunkVineDecorator_ = TrunkVineDecorator;
    interface ChannelHandlerContext extends Internal.ChannelOutboundInvoker, io.netty.util.AttributeMap, Internal.ChannelInboundInvoker {
        abstract connect(arg0: Internal.SocketAddress_, arg1: Internal.SocketAddress_, arg2: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract pipeline(): Internal.ChannelPipeline;
        abstract deregister(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract executor(): Internal.EventExecutor;
        abstract fireChannelReadComplete(): this;
        /**
         * @deprecated
        */
        abstract attr<T>(arg0: Internal.AttributeKey_<T>): io.netty.util.Attribute<T>;
        abstract write(arg0: any): Internal.ChannelFuture;
        abstract writeAndFlush(arg0: any): Internal.ChannelFuture;
        abstract disconnect(): Internal.ChannelFuture;
        abstract isRemoved(): boolean;
        abstract close(): Internal.ChannelFuture;
        abstract write(arg0: any, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract connect(arg0: Internal.SocketAddress_): Internal.ChannelFuture;
        abstract connect(arg0: Internal.SocketAddress_, arg1: Internal.SocketAddress_): Internal.ChannelFuture;
        abstract deregister(): Internal.ChannelFuture;
        abstract fireChannelRegistered(): this;
        abstract fireChannelInactive(): this;
        abstract disconnect(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract read(): this;
        abstract handler(): Internal.ChannelHandler;
        abstract newFailedFuture(arg0: Internal.Throwable_): Internal.ChannelFuture;
        abstract alloc(): Internal.ByteBufAllocator;
        abstract close(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract newSucceededFuture(): Internal.ChannelFuture;
        abstract fireExceptionCaught(arg0: Internal.Throwable_): this;
        abstract newProgressivePromise(): Internal.ChannelProgressivePromise;
        abstract flush(): this;
        abstract fireChannelUnregistered(): this;
        abstract name(): string;
        abstract channel(): io.netty.channel.Channel;
        abstract bind(arg0: Internal.SocketAddress_, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract writeAndFlush(arg0: any, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract bind(arg0: Internal.SocketAddress_): Internal.ChannelFuture;
        abstract fireChannelRead(arg0: any): this;
        abstract connect(arg0: Internal.SocketAddress_, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract fireUserEventTriggered(arg0: any): this;
        abstract fireChannelWritabilityChanged(): this;
        /**
         * @deprecated
        */
        abstract hasAttr<T>(arg0: Internal.AttributeKey_<T>): boolean;
        abstract voidPromise(): Internal.ChannelPromise;
        abstract fireChannelActive(): this;
        abstract newPromise(): Internal.ChannelPromise;
        get removed(): boolean
    }
    type ChannelHandlerContext_ = ChannelHandlerContext;
    class MovementContext {
        constructor(arg0: Internal.Level_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: Internal.Contraption_)
        getAnimationSpeed(): number;
        static readNBT(arg0: Internal.Level_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: Internal.CompoundTag_, arg3: Internal.Contraption_): Internal.MovementContext;
        getFilterFromBE(): Internal.FilterItemStack;
        writeToNBT(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        get animationSpeed(): number
        get filterFromBE(): Internal.FilterItemStack
        stall: boolean;
        localPos: BlockPos;
        temporaryData: any;
        world: Internal.Level;
        state: Internal.BlockState;
        motion: Vec3d;
        data: Internal.CompoundTag;
        relativeMotion: Vec3d;
        disabled: boolean;
        blockEntityData: Internal.CompoundTag;
        contraption: Internal.Contraption;
        position: Vec3d;
        rotation: Internal.UnaryOperator<Vec3d>;
        firstMovement: boolean;
    }
    type MovementContext_ = MovementContext;
    abstract class ContraptionLighter <C extends Internal.Contraption> implements Internal.LightListener {
        getVolume(): Internal.ImmutableBox;
        onLightPacket(arg0: number, arg1: number): void;
        onLightUpdate(arg0: Internal.LightLayer_, arg1: Internal.ImmutableBox_): void;
        isListenerInvalid(): boolean;
        abstract getContraptionBounds(): Internal.GridAlignedBB;
        "delete"(): void;
        get volume(): Internal.ImmutableBox
        get listenerInvalid(): boolean
        get contraptionBounds(): Internal.GridAlignedBB
        readonly lightVolume: Internal.GPULightVolume;
    }
    type ContraptionLighter_<C extends Internal.Contraption> = ContraptionLighter<C>;
    interface PositionTracker {
        abstract isVisibleBy(arg0: Internal.LivingEntity_): boolean;
        abstract currentBlockPosition(): BlockPos;
        abstract currentPosition(): Vec3d;
    }
    type PositionTracker_ = PositionTracker;
    class VillagerBrainEventInternal {
        constructor(brain: Internal.Brain_<Internal.Villager>, villager: Internal.Villager_)
        addOrReplaceActivity(activity: Internal.Activity_, activityPackage: Internal.ImmutableList_<com.mojang.datafixers.util.Pair<number, Internal.BehaviorControl<Internal.Villager>>>): void;
        addSensor(newSensor: Internal.SensorType_<Internal.Sensor<Internal.Villager>>): void;
        getVillager(): Internal.Villager;
        scheduleActivity(activity: Internal.Activity_, startTime: number, endTime: number): void;
        getMemories(): Internal.Map<Internal.MemoryModuleType<any>, Internal.Optional<Internal.ExpirableValue<any>>>;
        addTaskToActivity<P extends com.mojang.datafixers.util.Pair<number, Internal.Behavior<Internal.Villager>>>(activity: Internal.Activity_, task: P): boolean;
        get villager(): Internal.Villager
        get memories(): Internal.Map<Internal.MemoryModuleType<any>, Internal.Optional<Internal.ExpirableValue<any>>>
    }
    type VillagerBrainEventInternal_ = VillagerBrainEventInternal;
    class BlockElementFace {
        constructor(arg0: Internal.Direction_, arg1: number, arg2: string, arg3: Internal.BlockFaceUV_, arg4: Internal.ForgeFaceData_)
        constructor(arg0: Internal.Direction_, arg1: number, arg2: string, arg3: Internal.BlockFaceUV_)
        getFaceData(): Internal.ForgeFaceData;
        get faceData(): Internal.ForgeFaceData
        readonly texture: string;
        readonly tintIndex: number;
        readonly uv: Internal.BlockFaceUV;
        readonly cullForDirection: Internal.Direction;
        static readonly NO_TINT: -1;
    }
    type BlockElementFace_ = BlockElementFace;
    class Bargain$NoInventory implements Internal.Container {
        stopOpen(arg0: Internal.Player_): void;
        count(ingredient: Internal.Ingredient_): number;
        static tryClear(arg0: any): void;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(index: number, count: number): Internal.ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        setChanged(): void;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getContainerSize(): number;
        getStackInSlot(slot: number): Internal.ItemStack;
        setItem(index: number, stack: Internal.ItemStack_): void;
        getHeight(): number;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        static get(): Internal.Bargain$NoInventory;
        removeItemNoUpdate(index: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        stillValid(player: Internal.Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        getItem(index: number): Internal.ItemStack;
        find(ingredient: Internal.Ingredient_): number;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get containerSize(): number
        get height(): number
        get width(): number
        get maxStackSize(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type Bargain$NoInventory_ = Bargain$NoInventory;
    class SectionStorage <R> implements Internal.AutoCloseable {
        constructor(arg0: Internal.Path_, arg1: Internal.Function_<Internal.Runnable, Internal.Codec<R>>, arg2: Internal.Function_<Internal.Runnable, R>, arg3: Internal.DataFixer_, arg4: any_, arg5: boolean, arg6: Internal.RegistryAccess_, arg7: Internal.LevelHeightAccessor_)
        close(): void;
        flush(arg0: Internal.ChunkPos_): void;
        hasWork(): boolean;
    }
    type SectionStorage_<R> = SectionStorage<R>;
    class TextColor implements Internal.Color {
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getArgbJS(): number;
        specialEquals(o: any, shallow: boolean): boolean;
        static fromRgb(arg0: number): Internal.TextColor;
        getRgbJS(): number;
        getSerializeJS(): string;
        serialize(): string;
        static parseColor(arg0: string): Internal.TextColor;
        static fromLegacyFormat(arg0: Internal.ChatFormatting_): Internal.TextColor;
        createTextColorJS(): this;
        getValue(): number;
        getHexJS(): string;
        getFireworkColorJS(): number;
        get argbJS(): number
        get rgbJS(): number
        get serializeJS(): string
        get value(): number
        get hexJS(): string
        get fireworkColorJS(): number
        static readonly CODEC: Internal.Codec<Internal.TextColor>;
    }
    type TextColor_ = TextColor;
    class SoulSandBlock extends Internal.Block {
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
    type SoulSandBlock_ = SoulSandBlock;
    class DisplayLinkBlockItem extends Internal.BlockItem {
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
        static gathererItemAlwaysPlacesWhenUsed(arg0: Internal.PlayerInteractEvent$RightClickBlock_): void;
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
        static clientTick(): void;
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
    type DisplayLinkBlockItem_ = DisplayLinkBlockItem;
    class BlackstoneBlastFurnaceBlock extends Internal.AbstractFurnaceBlock {
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
    }
    type BlackstoneBlastFurnaceBlock_ = BlackstoneBlastFurnaceBlock;
    class RegisterColorHandlersEvent$Block extends Internal.RegisterColorHandlersEvent {
        constructor()
        constructor(arg0: Internal.BlockColors_)
        register(arg0: Internal.BlockColor_, ...arg1: Internal.Block_[]): void;
        getBlockColors(): Internal.BlockColors;
        get blockColors(): Internal.BlockColors
    }
    type RegisterColorHandlersEvent$Block_ = RegisterColorHandlersEvent$Block;
    class Locale$Category extends Internal.Enum<Internal.Locale$Category> {
        static valueOf(arg0: string): Internal.Locale$Category;
        static values(): Internal.Locale$Category[];
        static readonly FORMAT: Internal.Locale$Category;
        static readonly DISPLAY: Internal.Locale$Category;
    }
    type Locale$Category_ = Locale$Category | "display" | "format";
    class RenderLevelStageEvent$Stage {
        static fromRenderType(arg0: Internal.RenderType_): Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_WEATHER: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_TRIPWIRE_BLOCKS: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_ENTITIES: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_CUTOUT_MIPPED_BLOCKS_BLOCKS: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_CUTOUT_BLOCKS: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_BLOCK_ENTITIES: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_LEVEL: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_SOLID_BLOCKS: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_TRANSLUCENT_BLOCKS: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_PARTICLES: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_SKY: Internal.RenderLevelStageEvent$Stage;
    }
    type RenderLevelStageEvent$Stage_ = RenderLevelStageEvent$Stage;
    class PlayerModelPart extends Internal.Enum<Internal.PlayerModelPart> {
        static valueOf(arg0: string): Internal.PlayerModelPart;
        getName(): Internal.Component;
        getBit(): number;
        static values(): Internal.PlayerModelPart[];
        getMask(): number;
        getId(): string;
        get name(): Internal.Component
        get bit(): number
        get mask(): number
        get id(): string
        static readonly CAPE: Internal.PlayerModelPart;
        static readonly LEFT_SLEEVE: Internal.PlayerModelPart;
        static readonly RIGHT_PANTS_LEG: Internal.PlayerModelPart;
        static readonly LEFT_PANTS_LEG: Internal.PlayerModelPart;
        static readonly RIGHT_SLEEVE: Internal.PlayerModelPart;
        static readonly JACKET: Internal.PlayerModelPart;
        static readonly HAT: Internal.PlayerModelPart;
    }
    type PlayerModelPart_ = "jacket" | "hat" | "right_sleeve" | "cape" | "right_pants_leg" | "left_sleeve" | "left_pants_leg" | PlayerModelPart;
    class CustomBossEvent extends Internal.ServerBossEvent {
        constructor(arg0: ResourceLocation_, arg1: Internal.Component_)
        getDisplayName(): Internal.Component;
        setValue(arg0: number): void;
        onPlayerConnect(arg0: Internal.ServerPlayer_): void;
        save(): Internal.CompoundTag;
        setPlayers(arg0: Internal.Collection_<Internal.ServerPlayer>): boolean;
        static load(arg0: Internal.CompoundTag_, arg1: ResourceLocation_): Internal.CustomBossEvent;
        addOfflinePlayer(arg0: Internal.UUID_): void;
        getMax(): number;
        getTextId(): ResourceLocation;
        getValue(): number;
        setMax(arg0: number): void;
        onPlayerDisconnect(arg0: Internal.ServerPlayer_): void;
        get displayName(): Internal.Component
        set value(arg0: number)
        set players(arg0: Internal.Collection_<Internal.ServerPlayer>)
        get max(): number
        get textId(): ResourceLocation
        get value(): number
        set max(arg0: number)
    }
    type CustomBossEvent_ = CustomBossEvent;
    class ProbabilityFeatureConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly probability: number;
        static readonly CODEC: Internal.Codec<Internal.ProbabilityFeatureConfiguration>;
    }
    type ProbabilityFeatureConfiguration_ = ProbabilityFeatureConfiguration;
    class WitherSkullBlock extends Internal.SkullBlock {
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
        getEquipSound(): Internal.SoundEvent;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        static checkSpawn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.SkullBlockEntity_): void;
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
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
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
        static canSpawnMob(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        get equipSound(): Internal.SoundEvent
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type WitherSkullBlock_ = WitherSkullBlock;
    class Package extends Internal.NamedPackage implements Internal.AnnotatedElement {
        getSpecificationVendor(): string;
        getSpecificationVersion(): string;
        /**
         * @deprecated
        */
        static getPackage(arg0: string): Internal.Package;
        static getPackages(): Internal.Package[];
        isCompatibleWith(arg0: string): boolean;
        getAnnotation<A extends Internal.Annotation>(arg0: A): A;
        getImplementationVersion(): string;
        getImplementationVendor(): string;
        getName(): string;
        isSealed(arg0: Internal.URL_): boolean;
        getAnnotations(): Internal.Annotation[];
        getDeclaredAnnotation<A extends Internal.Annotation>(arg0: A): A;
        getAnnotationsByType<A extends Internal.Annotation>(arg0: A): A[];
        getSpecificationTitle(): string;
        isSealed(): boolean;
        getDeclaredAnnotations(): Internal.Annotation[];
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        getDeclaredAnnotationsByType<A extends Internal.Annotation>(arg0: A): A[];
        getImplementationTitle(): string;
        get specificationVendor(): string
        get specificationVersion(): string
        get packages(): Internal.Package[]
        get implementationVersion(): string
        get implementationVendor(): string
        get name(): string
        get annotations(): Internal.Annotation[]
        get specificationTitle(): string
        get sealed(): boolean
        get declaredAnnotations(): Internal.Annotation[]
        get implementationTitle(): string
    }
    type Package_ = Package;
    interface Float2LongFunction extends Internal.DoubleToLongFunction, it.unimi.dsi.fastutil.Function<number, number> {
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Float2ShortFunction;
        put(arg0: number, arg1: number): number;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2LongFunction;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2LongFunction;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Float2ByteFunction;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2LongFunction;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Float2DoubleFunction;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2LongFunction<T>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        containsKey(arg0: number): boolean;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2LongFunction;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Float2CharFunction;
        defaultReturnValue(): number;
        getOrDefault(arg0: number, arg1: number): number;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2LongFunction<T>;
        /**
         * @deprecated
        */
        applyAsLong(arg0: number): number;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Float2IntFunction;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2LongFunction;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Float2FloatFunction;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        size(): number;
        remove(arg0: number): number;
        abstract get(arg0: number): number;
        clear(): void;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        defaultReturnValue(arg0: number): void;
        (arg0: number): number;
    }
    type Float2LongFunction_ = Float2LongFunction;
    class BuildersTeaItem extends Internal.Item {
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
    type BuildersTeaItem_ = BuildersTeaItem;
    class WorldDimensions$Complete extends Internal.Record {
        constructor(arg0: Internal.Registry_<Internal.LevelStem>, arg1: Internal.PrimaryLevelData$SpecialWorldProperty_)
        lifecycle(): Internal.Lifecycle;
        dimensionsRegistryAccess(): Internal.RegistryAccess$Frozen;
        specialWorldProperty(): Internal.PrimaryLevelData$SpecialWorldProperty;
        dimensions(): Internal.Registry<Internal.LevelStem>;
    }
    type WorldDimensions$Complete_ = WorldDimensions$Complete;
    class FeatherBlock extends Internal.Block {
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
    type FeatherBlock_ = FeatherBlock;
    class EntityHitResult extends Internal.HitResult {
        constructor(arg0: Internal.Entity_, arg1: Vec3d_)
        constructor(arg0: Internal.Entity_)
        getEntity(): Internal.Entity;
        get entity(): Internal.Entity
    }
    type EntityHitResult_ = EntityHitResult;
    class ClientboundHurtAnimationPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.LivingEntity_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        id(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        yaw(): number;
        get skippable(): boolean
    }
    type ClientboundHurtAnimationPacket_ = ClientboundHurtAnimationPacket;
    abstract class PlayerEventJS extends Internal.LivingEntityEventJS {
        constructor()
        /**
         * Removes the specified game stage from the player
        */
        removeGameStage(stage: string): void;
        /**
         * Checks if the player has the specified game stage
        */
        hasGameStage(stage: string): boolean;
        /**
         * Adds the specified game stage to the player
        */
        addGameStage(stage: string): void;
    }
    type PlayerEventJS_ = PlayerEventJS;
    class ClientboundAnimatePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_, arg1: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getAction(): number;
        isSkippable(): boolean;
        getId(): number;
        get action(): number
        get skippable(): boolean
        get id(): number
        static readonly WAKE_UP: 2;
        static readonly SWING_OFF_HAND: 3;
        static readonly MAGIC_CRITICAL_HIT: 5;
        static readonly SWING_MAIN_HAND: 0;
        static readonly CRITICAL_HIT: 4;
    }
    type ClientboundAnimatePacket_ = ClientboundAnimatePacket;
    interface LocalIntRef {
        abstract set(arg0: number): void;
        abstract get(): number;
    }
    type LocalIntRef_ = LocalIntRef;
    class ChairBlock extends Internal.HorizontalDirectionalBlock implements Internal.SittableBlock, Internal.SimpleWaterloggedBlock {
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
        sitOn(level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, dir: Internal.Direction_): boolean;
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
        getSeatSize(state: Internal.BlockState_): Internal.AABB;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly COLOR: Internal.EnumProperty<Internal.OptionalColorProperty>;
        static readonly SEAT: Internal.AABB;
        static readonly VOXEL_SHAPE: Internal.CubeVoxelShape;
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type ChairBlock_ = ChairBlock;
    interface Consumer <T> {
        andThen(arg0: Internal.Consumer_<T>): this;
        abstract accept(arg0: T): void;
        (arg0: T): void;
    }
    type Consumer_<T> = Consumer<T>;
    class BlockStateModifyCallbackJS {
        constructor(state: Internal.BlockState_)
        /**
         * Checks if this block has the specified property
        */
        hasProperty<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): boolean;
        /**
         * Mirror the block using the specified Mirror
        */
        mirror(mirror: Internal.Mirror_): this;
        /**
         * Get a map of this blocks properties to it's value
        */
        getValues(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>;
        /**
         * Gets the value of the pased in property
        */
        get<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): T;
        /**
         * Gets the value of the passed in property
        */
        getValue<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): T;
        /**
         * Sets the value of the specified property
        */
        setValue<T extends Internal.Comparable<T>, V extends T>(property: Internal.Property_<T>, comparable: V): this;
        /**
         * Sets the value of the specified boolean property
        */
        set(property: Internal.BooleanProperty_, value: boolean): this;
        populateNeighbours(map: Internal.Map_<Internal.Map<Internal.Property<any>, Internal.Comparable<any>>, Internal.BlockState>): this;
        /**
         * Sets the value of the specified enum property
        */
        set<T extends Internal.Enum<T> & Internal.StringRepresentable>(property: Internal.EnumProperty_<T>, value: string): this;
        /**
         * Cycles the property
        */
        cycle<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): this;
        /**
         * Get the properties this block has that can be changed
        */
        getProperties(): Internal.Collection<Internal.Property<any>>;
        /**
         * Rotate the block using the specified Rotation
        */
        rotate(rotation: Internal.Rotation_): this;
        /**
         * Sets the value of the specified integer property
        */
        set(property: Internal.IntegerProperty_, value: number): this;
        /**
         * Updates the shape of this block. Mostly used in waterloggable blocks to update the water flow
        */
        updateShape(direction: Internal.Direction_, blockState: Internal.BlockState_, levelAccessor: Internal.LevelAccessor_, blockPos: BlockPos_, blockPos2: BlockPos_): this;
        /**
         * Gets the state. If it has been modified, gets the new state
        */
        getState(): Internal.BlockState;
        /**
         * Gets the value of the passed in property as an Optional. If the property does not exist in this block the Optional will be empty
        */
        getOptionalValue<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): Internal.Optional<T>;
        /**
         * Get a map of this blocks properties to it's value
        */
        get values(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>
        /**
         * Get the properties this block has that can be changed
        */
        get properties(): Internal.Collection<Internal.Property<any>>
        /**
         * Gets the state. If it has been modified, gets the new state
        */
        get state(): Internal.BlockState
    }
    type BlockStateModifyCallbackJS_ = BlockStateModifyCallbackJS;
    class DropperBlockEntity extends Internal.DispenserBlockEntity {
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
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
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
    type DropperBlockEntity_ = DropperBlockEntity;
    interface IIngredientTypeWithSubtypes <B, I> extends Internal.IIngredientType<I> {
        abstract getIngredientClass(): I;
        abstract getIngredientBaseClass(): B;
        castIngredient(arg0: any): Internal.Optional<I>;
        abstract getBase(arg0: I): B;
        get ingredientClass(): I
        get ingredientBaseClass(): B
    }
    type IIngredientTypeWithSubtypes_<B, I> = IIngredientTypeWithSubtypes<B, I>;
    class DateTimeFormatter {
        static ofPattern(arg0: string, arg1: Internal.Locale_): Internal.DateTimeFormatter;
        withChronology(arg0: Internal.Chronology_): this;
        parse(arg0: Internal.CharSequence_): Internal.TemporalAccessor;
        static parsedExcessDays(): Internal.TemporalQuery<Internal.Period>;
        parse<T>(arg0: Internal.CharSequence_, arg1: Internal.TemporalQuery_<T>): T;
        parse(arg0: Internal.CharSequence_, arg1: Internal.ParsePosition_): Internal.TemporalAccessor;
        localizedBy(arg0: Internal.Locale_): this;
        getZone(): Internal.ZoneId;
        withResolverStyle(arg0: Internal.ResolverStyle_): this;
        parseBest(arg0: Internal.CharSequence_, ...arg1: Internal.TemporalQuery_<any>[]): Internal.TemporalAccessor;
        toFormat(arg0: Internal.TemporalQuery_<any>): Internal.Format;
        static ofLocalizedDate(arg0: Internal.FormatStyle_): Internal.DateTimeFormatter;
        static parsedLeapSecond(): Internal.TemporalQuery<boolean>;
        formatTo(arg0: Internal.TemporalAccessor_, arg1: Internal.Appendable_): void;
        static ofLocalizedDateTime(arg0: Internal.FormatStyle_, arg1: Internal.FormatStyle_): Internal.DateTimeFormatter;
        withResolverFields(...arg0: Internal.TemporalField_[]): this;
        withDecimalStyle(arg0: Internal.DecimalStyle_): this;
        getChronology(): Internal.Chronology;
        toFormat(): Internal.Format;
        withResolverFields(arg0: Internal.Set_<Internal.TemporalField>): this;
        withLocale(arg0: Internal.Locale_): this;
        getResolverStyle(): Internal.ResolverStyle;
        static ofPattern(arg0: string): Internal.DateTimeFormatter;
        static ofLocalizedDateTime(arg0: Internal.FormatStyle_): Internal.DateTimeFormatter;
        parseUnresolved(arg0: Internal.CharSequence_, arg1: Internal.ParsePosition_): Internal.TemporalAccessor;
        getResolverFields(): Internal.Set<Internal.TemporalField>;
        format(arg0: Internal.TemporalAccessor_): string;
        withZone(arg0: Internal.ZoneId_): this;
        getLocale(): Internal.Locale;
        getDecimalStyle(): Internal.DecimalStyle;
        static ofLocalizedTime(arg0: Internal.FormatStyle_): Internal.DateTimeFormatter;
        get zone(): Internal.ZoneId
        get chronology(): Internal.Chronology
        get resolverStyle(): Internal.ResolverStyle
        get resolverFields(): Internal.Set<Internal.TemporalField>
        get locale(): Internal.Locale
        get decimalStyle(): Internal.DecimalStyle
        static readonly ISO_DATE: Internal.DateTimeFormatter;
        static readonly ISO_WEEK_DATE: Internal.DateTimeFormatter;
        static readonly ISO_OFFSET_DATE_TIME: Internal.DateTimeFormatter;
        static readonly ISO_TIME: Internal.DateTimeFormatter;
        static readonly ISO_ORDINAL_DATE: Internal.DateTimeFormatter;
        static readonly ISO_OFFSET_TIME: Internal.DateTimeFormatter;
        static readonly ISO_LOCAL_DATE_TIME: Internal.DateTimeFormatter;
        static readonly ISO_OFFSET_DATE: Internal.DateTimeFormatter;
        static readonly BASIC_ISO_DATE: Internal.DateTimeFormatter;
        static readonly ISO_INSTANT: Internal.DateTimeFormatter;
        static readonly ISO_LOCAL_DATE: Internal.DateTimeFormatter;
        static readonly RFC_1123_DATE_TIME: Internal.DateTimeFormatter;
        static readonly ISO_LOCAL_TIME: Internal.DateTimeFormatter;
        static readonly ISO_DATE_TIME: Internal.DateTimeFormatter;
        static readonly ISO_ZONED_DATE_TIME: Internal.DateTimeFormatter;
    }
    type DateTimeFormatter_ = DateTimeFormatter;
    class DirectionProperty extends Internal.EnumProperty<Internal.Direction> {
        static create(arg0: string, arg1: Internal.Collection_<Internal.Direction>): Internal.DirectionProperty;
        static create(arg0: string, arg1: Internal.Predicate_<Internal.Direction>): Internal.DirectionProperty;
        static create(arg0: string): Internal.DirectionProperty;
        static create(arg0: string, ...arg1: Internal.Direction_[]): Internal.DirectionProperty;
    }
    type DirectionProperty_ = DirectionProperty;
    class SignalBoundary extends Internal.TrackEdgePoint {
        constructor()
        getGroup(arg0: Internal.TrackNode_): Internal.UUID;
        getOverlayFor(arg0: BlockPos_): Internal.SignalBlockEntity$OverlayState;
        setGroup(arg0: boolean, arg1: Internal.UUID_): void;
        queueUpdate(arg0: Internal.TrackNode_): void;
        cycleSignalType(arg0: BlockPos_): void;
        isForcedRed(arg0: Internal.TrackNode_): boolean;
        getTypeFor(arg0: BlockPos_): Internal.SignalBlock$SignalType;
        isForcedRed(arg0: boolean): boolean;
        getStateFor(arg0: BlockPos_): Internal.SignalBlockEntity$SignalState;
        setGroupAndUpdate(arg0: Internal.TrackNode_, arg1: Internal.UUID_): void;
        updateBlockEntityPower(arg0: Internal.SignalBlockEntity_): void;
        groups: Internal.Couple<Internal.UUID>;
        cachedStates: Internal.Couple<Internal.SignalBlockEntity$SignalState>;
        blockEntities: Internal.Couple<Internal.Map<BlockPos, boolean>>;
        sidesToUpdate: Internal.Couple<boolean>;
        types: Internal.Couple<Internal.SignalBlock$SignalType>;
    }
    type SignalBoundary_ = SignalBoundary;
    interface ReplacementMatch {
        of(o: any): this;
        readonly NONE: Internal.ReplacementMatch;
    }
    type ReplacementMatch_ = ReplacementMatch | Internal.Ingredient_;
    interface BonemealableBlock {
        abstract isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        abstract performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        abstract isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
    }
    type BonemealableBlock_ = BonemealableBlock;
    class SuperGlueItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        static glueItemAlwaysPlacesWhenUsed(arg0: Internal.PlayerInteractEvent$RightClickBlock_): void;
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
        static spawnParticles(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: boolean): void;
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
        static onBroken(arg0: Internal.Player_): void;
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
    type SuperGlueItem_ = SuperGlueItem;
    class KeyPair implements Internal.Serializable {
        constructor(arg0: Internal.PublicKey_, arg1: Internal.PrivateKey_)
        getPublic(): Internal.PublicKey;
        getPrivate(): Internal.PrivateKey;
        get "public"(): Internal.PublicKey
        get "private"(): Internal.PrivateKey
    }
    type KeyPair_ = KeyPair;
    /**
     * Invoked when a player crafts an item.
    */
    class ItemCraftedEventJS extends Internal.PlayerEventJS {
        constructor(player: Internal.Player_, crafted: Internal.ItemStack_, container: Internal.Container_)
        /**
         * The inventory that the item was crafted in.
        */
        getInventory(): Internal.InventoryKJS;
        /**
         * The player that crafted the item.
        */
        getEntity(): Internal.LivingEntity;
        /**
         * The item that was crafted.
        */
        getItem(): Internal.ItemStack;
        /**
         * The inventory that the item was crafted in.
        */
        get inventory(): Internal.InventoryKJS
        /**
         * The player that crafted the item.
        */
        get entity(): Internal.LivingEntity
        /**
         * The item that was crafted.
        */
        get item(): Internal.ItemStack
    }
    type ItemCraftedEventJS_ = ItemCraftedEventJS;
    interface PressingBehaviour$PressingBehaviourSpecifics {
        abstract tryProcessInBasin(arg0: boolean): boolean;
        abstract tryProcessOnBelt(arg0: Internal.TransportedItemStack_, arg1: Internal.List_<Internal.ItemStack>, arg2: boolean): boolean;
        abstract getKineticSpeed(): number;
        abstract onPressingCompleted(): void;
        abstract getParticleAmount(): number;
        abstract tryProcessInWorld(arg0: Internal.ItemEntity_, arg1: boolean): boolean;
        abstract canProcessInBulk(): boolean;
        get kineticSpeed(): number
        get particleAmount(): number
    }
    type PressingBehaviour$PressingBehaviourSpecifics_ = PressingBehaviour$PressingBehaviourSpecifics;
    class RenderGuiEvent$Post extends Internal.RenderGuiEvent {
        constructor()
        constructor(arg0: Internal.Window_, arg1: Internal.GuiGraphics_, arg2: number)
    }
    type RenderGuiEvent$Post_ = RenderGuiEvent$Post;
    class RegisterGuiOverlaysEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<ResourceLocation, Internal.IGuiOverlay>, arg1: Internal.List_<ResourceLocation>)
        registerBelow(arg0: ResourceLocation_, arg1: string, arg2: Internal.IGuiOverlay_): void;
        registerAboveAll(arg0: string, arg1: Internal.IGuiOverlay_): void;
        registerBelowAll(arg0: string, arg1: Internal.IGuiOverlay_): void;
        registerAbove(arg0: ResourceLocation_, arg1: string, arg2: Internal.IGuiOverlay_): void;
    }
    type RegisterGuiOverlaysEvent_ = RegisterGuiOverlaysEvent;
    class UidContext extends Internal.Enum<Internal.UidContext> {
        static valueOf(arg0: string): Internal.UidContext;
        static values(): Internal.UidContext[];
        static readonly Ingredient: Internal.UidContext;
        static readonly Recipe: Internal.UidContext;
    }
    type UidContext_ = UidContext | "ingredient" | "recipe";
    interface TypeWrapperFactory$Simple <T> extends Internal.TypeWrapperFactory<T> {
        wrap(cx: Internal.Context_, o: any): T;
        abstract wrapSimple(arg0: any): T;
        (arg0: any): T;
    }
    type TypeWrapperFactory$Simple_<T> = TypeWrapperFactory$Simple<T>;
    class Vex extends Internal.Monster implements Internal.TraceableEntity {
        constructor(arg0: Internal.EntityType_<Internal.Vex>, arg1: Internal.Level_)
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
        setBoundOrigin(arg0: BlockPos_): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        getBoundOrigin(): BlockPos;
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
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        setLimitedLife(arg0: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        setIsCharging(arg0: boolean): void;
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
        getOwner(): Internal.Mob;
        isFlapping(): boolean;
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
        isCharging(): boolean;
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
        setOwner(arg0: Internal.Mob_): void;
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
        set boundOrigin(arg0: BlockPos_)
        get living(): boolean
        get boundOrigin(): BlockPos
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
        set limitedLife(arg0: number)
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        set isCharging(arg0: boolean)
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get owner(): Internal.Mob
        get flapping(): boolean
        get feetArmorItem(): Internal.ItemStack
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get charging(): boolean
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
        set owner(arg0: Internal.Mob_)
        set headArmorItem(item: Internal.ItemStack_)
        static readonly TICKS_PER_FLAP: 4;
        static readonly FLAP_DEGREES_PER_TICK: 45.836624;
    }
    type Vex_ = Vex;
    class ResourceOrTagKeyArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.ResourceOrTagKeyArgument<T>> {
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        type(): Internal.ArgumentTypeInfo<Internal.ResourceOrTagKeyArgument<T>, any>;
    }
    type ResourceOrTagKeyArgument$Info$Template_ = ResourceOrTagKeyArgument$Info$Template;
    class DualNoiseProvider extends Internal.NoiseProvider {
        constructor(arg0: Internal.InclusiveRange_<number>, arg1: Internal.NormalNoise$NoiseParameters_, arg2: number, arg3: number, arg4: Internal.NormalNoise$NoiseParameters_, arg5: number, arg6: Internal.List_<Internal.BlockState>)
        static readonly CODEC: Internal.Codec<Internal.DualNoiseProvider>;
    }
    type DualNoiseProvider_ = DualNoiseProvider;
    class FurnaceBlock extends Internal.AbstractFurnaceBlock {
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
    }
    type FurnaceBlock_ = FurnaceBlock;
}
