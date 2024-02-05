/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    interface Appendable {
        abstract append(arg0: Internal.CharSequence_): this;
        abstract append(arg0: Internal.CharSequence_, arg1: number, arg2: number): this;
        abstract append(arg0: string): this;
    }
    type Appendable_ = Appendable;
    class SconceBlock extends Internal.LightUpWaterBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_, lightLevel: number, particleData: Internal.Supplier_<T>)
        constructor(properties: Internal.BlockBehaviour$Properties_, particleData: Internal.Supplier_<T>)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        playExtinguishSound(world: Internal.LevelAccessor_, pos: BlockPos_): void;
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
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        extinguish(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): boolean;
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
        interactWithPlayer(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_): Internal.InteractionResult;
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
        playLightUpSound(world: Internal.LevelAccessor_, pos: BlockPos_, type: Internal.ILightable$FireSourceType_): void;
        spawnSmokeParticles(state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): void;
        interactWithProjectile(level: Internal.Level_, state: Internal.BlockState_, projectile: Internal.Projectile_, pos: BlockPos_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeExtinguishedBy(item: Internal.ItemStack_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type SconceBlock_ = SconceBlock;
    interface Byte2ShortFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntUnaryOperator {
        andThenByte(arg0: Internal.Short2ByteFunction_): Internal.Byte2ByteFunction;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2ShortFunction;
        andThenLong(arg0: Internal.Short2LongFunction_): Internal.Byte2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        andThenReference<T>(arg0: Internal.Short2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2ShortFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenShort(arg0: Internal.Short2ShortFunction_): this;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        defaultReturnValue(): number;
        put(arg0: number, arg1: number): number;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        andThenDouble(arg0: Internal.Short2DoubleFunction_): Internal.Byte2DoubleFunction;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        containsKey(arg0: number): boolean;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2ShortFunction<T>;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2ShortFunction;
        andThenFloat(arg0: Internal.Short2FloatFunction_): Internal.Byte2FloatFunction;
        getOrDefault(arg0: number, arg1: number): number;
        remove(arg0: number): number;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2ShortFunction;
        andThenInt(arg0: Internal.Short2IntFunction_): Internal.Byte2IntFunction;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        andThenChar(arg0: Internal.Short2CharFunction_): Internal.Byte2CharFunction;
        size(): number;
        abstract get(arg0: number): number;
        defaultReturnValue(arg0: number): void;
        apply(arg0: number): number;
        clear(): void;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenObject<T>(arg0: Internal.Short2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2ShortFunction<T>;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2ShortFunction;
        (arg0: number): number;
    }
    type Byte2ShortFunction_ = Byte2ShortFunction;
    class BlockPredicateFilter extends Internal.PlacementFilter {
        static forPredicate(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): Internal.BlockPredicateFilter;
        static readonly CODEC: Internal.Codec<Internal.BlockPredicateFilter>;
    }
    type BlockPredicateFilter_ = BlockPredicateFilter;
    class ClipboardBlock extends Internal.FaceAttachedHorizontalDirectionalBlock implements Internal.ProperWaterloggedBlock, Internal.IBE<Internal.ClipboardBlockEntity>, Internal.IWrenchable {
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
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ClipboardBlockEntity;
        getBlockEntityType(): Internal.BlockEntityType<Internal.ClipboardBlockEntity>;
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
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.ClipboardBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.ClipboardBlockEntity>;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.ClipboardBlockEntity>): void;
        getBlockEntityClass(): typeof Internal.ClipboardBlockEntity;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get blockEntityType(): Internal.BlockEntityType<Internal.ClipboardBlockEntity>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityClass(): typeof Internal.ClipboardBlockEntity
        static readonly WRITTEN: Internal.BooleanProperty;
    }
    type ClipboardBlock_ = ClipboardBlock;
    class PancakeBlock extends Internal.WaterBlock implements Internal.ISoftFluidConsumer {
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
        tryAcceptingFluid(world: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_, f: Internal.SoftFluid_, nbt: Internal.CompoundTag_, amount: number): boolean;
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
        static readonly PANCAKES: Internal.IntegerProperty;
        static readonly TOPPING: Internal.EnumProperty<Internal.ModBlockProperties$Topping>;
    }
    type PancakeBlock_ = PancakeBlock;
    interface AccessEditBox {
        abstract searchables$getFilter(): Internal.Predicate<string>;
        abstract searchables$getResponder(): Internal.Consumer<string>;
    }
    type AccessEditBox_ = AccessEditBox;
    class PlayerEvent$ItemCraftedEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Container_)
        getInventory(): Internal.Container;
        getCrafting(): Internal.ItemStack;
        getEntity(): Internal.LivingEntity;
        get inventory(): Internal.Container
        get crafting(): Internal.ItemStack
        get entity(): Internal.LivingEntity
    }
    type PlayerEvent$ItemCraftedEvent_ = PlayerEvent$ItemCraftedEvent;
    class ModBlockProperties$RakeDirection extends Internal.Enum<Internal.ModBlockProperties$RakeDirection> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(name: string): Internal.ModBlockProperties$RakeDirection;
        getSerializedName(): string;
        static fromDirections(directions: Internal.List_<Internal.Direction>): Internal.ModBlockProperties$RakeDirection;
        static values(): Internal.ModBlockProperties$RakeDirection[];
        getDirections(): Internal.List<Internal.Direction>;
        get serializedName(): string
        get directions(): Internal.List<Internal.Direction>
        static readonly NORTH_SOUTH: Internal.ModBlockProperties$RakeDirection;
        static readonly NORTH_WEST: Internal.ModBlockProperties$RakeDirection;
        static readonly NORTH_EAST: Internal.ModBlockProperties$RakeDirection;
        static readonly SOUTH_EAST: Internal.ModBlockProperties$RakeDirection;
        static readonly SOUTH_WEST: Internal.ModBlockProperties$RakeDirection;
        static readonly EAST_WEST: Internal.ModBlockProperties$RakeDirection;
    }
    type ModBlockProperties$RakeDirection_ = ModBlockProperties$RakeDirection | "north_west" | "north_east" | "south_west" | "north_south" | "east_west" | "south_east";
    class StreamTagVisitor$EntryResult extends Internal.Enum<Internal.StreamTagVisitor$EntryResult> {
        static valueOf(arg0: string): Internal.StreamTagVisitor$EntryResult;
        static values(): Internal.StreamTagVisitor$EntryResult[];
        static readonly BREAK: Internal.StreamTagVisitor$EntryResult;
        static readonly SKIP: Internal.StreamTagVisitor$EntryResult;
        static readonly ENTER: Internal.StreamTagVisitor$EntryResult;
        static readonly HALT: Internal.StreamTagVisitor$EntryResult;
    }
    type StreamTagVisitor$EntryResult_ = StreamTagVisitor$EntryResult | "break" | "halt" | "skip" | "enter";
    class BlackstoneStoveBlock extends Internal.AbstractStoveBlock {
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
        soulLight(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
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
        static readonly SOUL: Internal.BooleanProperty;
    }
    type BlackstoneStoveBlock_ = BlackstoneStoveBlock;
    class FogShape extends Internal.Enum<Internal.FogShape> {
        static valueOf(arg0: string): Internal.FogShape;
        static values(): Internal.FogShape[];
        getIndex(): number;
        get index(): number
        static readonly CYLINDER: Internal.FogShape;
        static readonly SPHERE: Internal.FogShape;
    }
    type FogShape_ = FogShape | "cylinder" | "sphere";
    class DispenserBlock extends Internal.BaseEntityBlock implements com.simibubi.create.foundation.mixin.accessor.DispenserBlockAccessor, Internal.DispenserBlockAccessor {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        static registerBehavior(arg0: Internal.ItemLike_, arg1: Internal.DispenseItemBehavior_): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        static getDispenserRegistry_$md$366fca$0(): Internal.Map<any, any>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getDispenseMethod(arg0: Internal.ItemStack_): Internal.DispenseItemBehavior;
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
        create$callGetDispenseMethod(arg0: Internal.ItemStack_): Internal.DispenseItemBehavior;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        static getDispensePosition(arg0: Internal.BlockSource_): Internal.Position;
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
        handler$zhm000$onCuttingBoardDispenseFromInject(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.CallbackInfo_, arg3: Internal.BlockSourceImpl_, arg4: Internal.DispenserBlockEntity_, arg5: number, arg6: Internal.ItemStack_): void;
        static getDispenserRegistry(): Internal.Map<Internal.Item, Internal.DispenseItemBehavior>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get dispenserRegistry_$md$366fca$0(): Internal.Map<any, any>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get dispenserRegistry(): Internal.Map<Internal.Item, Internal.DispenseItemBehavior>
        static DISPENSER_REGISTRY: {[key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.BombItem]: any, [key: Internal.BombItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.HotCocoaItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ArmorStandItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BowlFoodItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.HorseArmorItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.TargetDummyItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SuspiciousStewItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.HorseArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.Item]: any, [key: Internal.Item]: any, [key: Internal.BoneMealItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.Item]: any, [key: Internal.HoneyBottleItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.BlockItem]: any, [key: Internal.EnderpearlItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.Item]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.UmbrellaItem]: any, [key: Internal.BoatItem]: any, [key: Internal.DrinkableItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BowlFoodItem]: any, [key: Internal.BucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SolidBucketItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BacktankItem]: any, [key: Internal.MinecartContraptionItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.LingeringPotionItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SoapItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.Item]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BombItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.DispenserMinecartItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.SnowballItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FireworkRocketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArchitecturySpawnEggItem]: any, [key: Internal.Item]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ShieldItem]: any, [key: Internal.KeyItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SackItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.BombItem]: any, [key: Internal.ShulkerShellItem]: any, [key: Internal.GogglesItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.MinecartContraptionItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.HoneycombItem]: any, [key: Internal.BucketItem]: any, [key: Internal.MinecartContraptionItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.AxeItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.Item]: any, [key: Internal.PlayerHeadItem]: any, [key: Internal.PotionItem]: any, [key: Internal.DivingHelmetItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.BambooSpikesTippedItem]: any, [key: Internal.MelonJuiceItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.AxeItem]: any, [key: Internal.AxeItem]: any, [key: Internal.AxeItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BombItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ShearsItem]: any, [key: Internal.BuildersTeaItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DivingBootsItem]: any, [key: Internal.MilkBucketItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.FlintAndSteelItem]: any, [key: Internal.AxeItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.EggItem]: any, [key: Internal.BowlFoodItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.AxeItem]: any, [key: Internal.Item]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TippedArrowItem]: any, [key: Internal.DyeableHorseArmorItem]: any, [key: Internal.SplashPotionItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DivingHelmetItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BacktankItem$Layered]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.RottenTomatoItem]: any, [key: Internal.SaddleItem]: any, [key: Internal.MilkBottleItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BombItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.HorseArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ElytraItem]: any, [key: Internal.RopeArrowItem]: any, [key: Internal.BlockItem]: any, [key: Internal.JetpackItem]: any, [key: Internal.JetpackItem$Layered]: any, [key: Internal.JarItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.EndermanHeadItem]: any, [key: Internal.FireChargeItem]: any, [key: Internal.BoatItem]: any, [key: Internal.Item]: any, [key: Internal.Item]: any, [key: Internal.ArrowItem]: any, [key: Internal.BubbleBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpectralArrowItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DivingBootsItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ExperienceBottleItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BucketItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.WoodBasedBlockItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BottleItem]: any, [key: Internal.MobBucketItem]: any};
        static readonly TRIGGERED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type DispenserBlock_ = DispenserBlock;
    class SupportItem extends Internal.SwitchableBlockItem<Internal.BooleanProperty, boolean> {
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
        static readonly OVERRIDE_TAG: ResourceLocation;
    }
    type SupportItem_ = SupportItem;
    interface DataSenderKJS {
        sendData(channel: string): void;
        sendData(channel: string, data: Internal.CompoundTag_): void;
    }
    type DataSenderKJS_ = DataSenderKJS;
    class ClientboundSetCarriedItemPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getSlot(): number;
        isSkippable(): boolean;
        get slot(): number
        get skippable(): boolean
    }
    type ClientboundSetCarriedItemPacket_ = ClientboundSetCarriedItemPacket;
    class EntityTickList {
        constructor()
        forEach(arg0: Internal.Consumer_<Internal.Entity>): void;
        add(arg0: Internal.Entity_): void;
        contains(arg0: Internal.Entity_): boolean;
        remove(arg0: Internal.Entity_): void;
    }
    type EntityTickList_ = EntityTickList;
    interface TagVisitor {
        abstract visitFloat(arg0: Internal.FloatTag_): void;
        abstract visitByte(arg0: Internal.ByteTag_): void;
        abstract visitList(arg0: Internal.ListTag_): void;
        abstract visitLongArray(arg0: Internal.LongArrayTag_): void;
        abstract visitShort(arg0: Internal.ShortTag_): void;
        abstract visitEnd(arg0: Internal.EndTag_): void;
        abstract visitIntArray(arg0: Internal.IntArrayTag_): void;
        abstract visitInt(arg0: Internal.IntTag_): void;
        abstract visitByteArray(arg0: Internal.ByteArrayTag_): void;
        abstract visitString(arg0: Internal.StringTag_): void;
        abstract visitCompound(arg0: Internal.CompoundTag_): void;
        abstract visitLong(arg0: Internal.LongTag_): void;
        abstract visitDouble(arg0: Internal.DoubleTag_): void;
    }
    type TagVisitor_ = TagVisitor;
    class OceanRuinStructure$Type extends Internal.Enum<Internal.OceanRuinStructure$Type> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.OceanRuinStructure$Type[];
        getSerializedName(): string;
        getName(): string;
        static valueOf(arg0: string): Internal.OceanRuinStructure$Type;
        get serializedName(): string
        get name(): string
        static readonly COLD: Internal.OceanRuinStructure$Type;
        static readonly CODEC: Internal.Codec<Internal.OceanRuinStructure$Type>;
        static readonly WARM: Internal.OceanRuinStructure$Type;
    }
    type OceanRuinStructure$Type_ = "warm" | "cold" | OceanRuinStructure$Type;
    class CampfireBlockEntity extends Internal.BlockEntity implements Internal.Clearable {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        placeFood(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: number): boolean;
        static particleTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.CampfireBlockEntity_): void;
        static tryClear(arg0: any): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getCookableRecipe(arg0: Internal.ItemStack_): Internal.Optional<Internal.CampfireCookingRecipe>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        static cooldownTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.CampfireBlockEntity_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        static cookTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.CampfireBlockEntity_): void;
        dowse(): void;
        clearContent(): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        get items(): Internal.NonNullList<Internal.ItemStack>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get modelData(): Internal.ModelData
        get renderBoundingBox(): Internal.AABB
    }
    type CampfireBlockEntity_ = CampfireBlockEntity;
    class GeodeLayerSettings {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        readonly innerLayer: number;
        readonly middleLayer: number;
        static readonly CODEC: Internal.Codec<Internal.GeodeLayerSettings>;
        readonly outerLayer: number;
        readonly filling: number;
    }
    type GeodeLayerSettings_ = GeodeLayerSettings;
    interface DoublePredicate {
        abstract test(arg0: number): boolean;
        or(arg0: Internal.DoublePredicate_): this;
        and(arg0: Internal.DoublePredicate_): this;
        negate(): this;
        (arg0: number): boolean;
    }
    type DoublePredicate_ = DoublePredicate;
    class MetricSampler$MetricSamplerBuilder <T> {
        constructor(arg0: string, arg1: Internal.MetricCategory_, arg2: Internal.ToDoubleFunction_<T>, arg3: T)
        withBeforeTick(arg0: Internal.Consumer_<T>): this;
        withThresholdAlert(arg0: Internal.MetricSampler$ThresholdTest_): this;
        build(): Internal.MetricSampler;
    }
    type MetricSampler$MetricSamplerBuilder_<T> = MetricSampler$MetricSamplerBuilder<T>;
    interface RegistrySupplier <T> extends Internal.DeferredSupplier<T> {
        abstract getRegistrarManager(): Internal.RegistrarManager;
        getKey(): Internal.ResourceKey<T>;
        stream(): Internal.Stream<T>;
        ifPresent(action: Internal.Consumer_<T>): void;
        orElseGet(supplier: Internal.Supplier_<T>): T;
        ifPresentOrElse(action: Internal.Consumer_<T>, emptyAction: Internal.Runnable_): void;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<T>>;
        abstract getRegistrar(): Internal.Registrar<T>;
        getOrNull(): T;
        orElse(other: T): T;
        abstract getId(): ResourceLocation;
        abstract isPresent(): boolean;
        abstract getRegistryId(): ResourceLocation;
        abstract get(): T;
        listen(callback: Internal.Consumer_<T>): void;
        toOptional(): Internal.Optional<T>;
        get registrarManager(): Internal.RegistrarManager
        get key(): Internal.ResourceKey<T>
        get registryKey(): Internal.ResourceKey<Internal.Registry<T>>
        get registrar(): Internal.Registrar<T>
        get orNull(): T
        get id(): ResourceLocation
        get present(): boolean
        get registryId(): ResourceLocation
    }
    type RegistrySupplier_<T> = RegistrySupplier<T>;
    class PlayerEvent$PlayerRespawnEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: boolean)
        getEntity(): Internal.LivingEntity;
        isEndConquered(): boolean;
        get entity(): Internal.LivingEntity
        get endConquered(): boolean
    }
    type PlayerEvent$PlayerRespawnEvent_ = PlayerEvent$PlayerRespawnEvent;
    interface ResultConsumer <S> {
        abstract onCommandComplete(arg0: Internal.CommandContext_<S>, arg1: boolean, arg2: number): void;
        (arg0: Internal.CommandContext<S>, arg1: boolean, arg2: number): void;
    }
    type ResultConsumer_<S> = ResultConsumer<S>;
    class TripWireBlock extends Internal.Block {
        constructor(arg0: Internal.TripWireHookBlock_, arg1: Internal.BlockBehaviour$Properties_)
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
        shouldConnectTo(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
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
        static readonly ATTACHED: Internal.BooleanProperty;
        static readonly NORTH: Internal.BooleanProperty;
        static readonly SOUTH: Internal.BooleanProperty;
        static readonly WEST: Internal.BooleanProperty;
        static readonly POWERED: Internal.BooleanProperty;
        static readonly DISARMED: Internal.BooleanProperty;
        static readonly EAST: Internal.BooleanProperty;
    }
    type TripWireBlock_ = TripWireBlock;
    interface CommandBuildContext$Configurable extends Internal.CommandBuildContext {
        abstract holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        simple(arg0: Internal.HolderLookup$Provider_, arg1: Internal.FeatureFlagSet_): Internal.CommandBuildContext;
        configurable(arg0: Internal.RegistryAccess_, arg1: Internal.FeatureFlagSet_): this;
        abstract missingTagAccessPolicy(arg0: Internal.CommandBuildContext$MissingTagAccessPolicy_): void;
    }
    type CommandBuildContext$Configurable_ = CommandBuildContext$Configurable;
    class DecoratedPotRecipe extends Internal.CustomRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        static createDecoratedPotItem(arg0: Internal.DecoratedPotBlockEntity$Decorations_): Internal.ItemStack;
        getMod(): string;
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type DecoratedPotRecipe_ = DecoratedPotRecipe;
    abstract class WaterBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
    type WaterBlock_ = WaterBlock;
    class ProjectileImpactEvent extends Internal.EntityEvent {
        constructor()
        constructor(arg0: Internal.Projectile_, arg1: Internal.HitResult_)
        getProjectile(): Internal.Projectile;
        getRayTraceResult(): Internal.HitResult;
        get projectile(): Internal.Projectile
        get rayTraceResult(): Internal.HitResult
    }
    type ProjectileImpactEvent_ = ProjectileImpactEvent;
    class TrackNodeLocation$DiscoveredLocation extends Internal.TrackNodeLocation {
        constructor(arg0: Internal.ResourceKey_<Internal.Level>, arg1: Vec3d_)
        constructor(arg0: Internal.Level_, arg1: Vec3d_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        materials(arg0: Internal.TrackMaterial_, arg1: Internal.TrackMaterial_): this;
        notInLineWith(arg0: Vec3d_): boolean;
        withNormal(arg0: Vec3d_): this;
        forceNode(): this;
        getTurn(): Internal.BezierConnection;
        viaTurn(arg0: Internal.BezierConnection_): this;
        connectedViaTurn(): boolean;
        materialA(arg0: Internal.TrackMaterial_): this;
        materialB(arg0: Internal.TrackMaterial_): this;
        getDirection(): Vec3d;
        withDirection(arg0: Vec3d_): this;
        differentMaterials(): boolean;
        shouldForceNode(): boolean;
        withYOffset(arg0: number): this;
        get turn(): Internal.BezierConnection
        get direction(): Vec3d
    }
    type TrackNodeLocation$DiscoveredLocation_ = TrackNodeLocation$DiscoveredLocation;
    class ModuleDescriptor$Exports$Modifier extends Internal.Enum<Internal.ModuleDescriptor$Exports$Modifier> {
        static values(): Internal.ModuleDescriptor$Exports$Modifier[];
        static valueOf(arg0: string): Internal.ModuleDescriptor$Exports$Modifier;
        static readonly SYNTHETIC: Internal.ModuleDescriptor$Exports$Modifier;
        static readonly MANDATED: Internal.ModuleDescriptor$Exports$Modifier;
    }
    type ModuleDescriptor$Exports$Modifier_ = "mandated" | "synthetic" | ModuleDescriptor$Exports$Modifier;
    interface ILavaAndWaterLoggable extends Internal.BucketPickup, Internal.LiquidBlockContainer {
        takeLiquid(world: Internal.LevelAccessor_, pos: BlockPos_, state: Internal.BlockState_): Internal.Fluid;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(reader: Internal.BlockGetter_, pos: BlockPos_, state: Internal.BlockState_, fluid: Internal.Fluid_): boolean;
        pickupBlock(pLevel: Internal.LevelAccessor_, pPos: BlockPos_, pState: Internal.BlockState_): Internal.ItemStack;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        placeLiquid(world: Internal.LevelAccessor_, pos: BlockPos_, state: Internal.BlockState_, fluidState: Internal.FluidState_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
    }
    type ILavaAndWaterLoggable_ = ILavaAndWaterLoggable;
    class DynamicRecipeComponent extends Internal.Record {
        constructor(desc: Internal.TypeDescJS_, factory: Internal.DynamicRecipeComponent$Factory_)
        desc(): Internal.TypeDescJS;
        factory(): Internal.DynamicRecipeComponent$Factory;
    }
    type DynamicRecipeComponent_ = DynamicRecipeComponent;
    class Item implements Internal.FeatureElement, Internal.ItemAccessor, Internal.ItemLike, Internal.IForgeItem, Internal.ItemKJS, Internal.AccessorItem, Internal.IExtendedItem, Internal.InjectedItemExtension, Internal.ItemForgeAccessor {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): this;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): this;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        getId(): Special.Item&`${string}:${string}`;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        handler$zka000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        static getPlayerPOVHitResult_$md$366fca$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): this;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): Special.Item&`${string}:${string}`
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly BY_BLOCK: {[key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.PortableStorageInterfaceBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.SeatItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.SeatItem, [key: Internal.CupboardBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CopycatStepBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.FarmersDelightCompat$PlanterRichBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BellBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.IceBlock]: Internal.BlockItem, [key: Internal.FancyBedBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.SeatItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.SculkVeinBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.CounterBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.HugeMushroomBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PieBlock]: Internal.BlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.BasketBlock]: Internal.FuelBlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.MetalBenchBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.CartographyTableBlock]: Internal.BlockItem, [key: Internal.BrazierBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TrappedChestBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MelonBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.CupboardBlock]: Internal.BlockItem, [key: Internal.TrainTrapdoorBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StuffedHoglinBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SnowyDirtBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.SeatItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.DiningBenchBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.RiceRollMedleyBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.SpoutBlock]: Internal.AssemblyOperatorBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EjectorBlock]: Internal.EjectorItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.PowderSnowCauldronBlock]: Internal.Items$1, [key: Internal.LightBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.HugeMushroomBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CrockeryComboBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.PulleyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.DeskBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.MetalLadderBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.IronGateBlock]: Internal.BlockItem, [key: Internal.PrinterBlock]: Internal.AssemblyOperatorBlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.ItemDrainBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.LockBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.LanternBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeepingVinesBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.WallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.FlapDisplayBlock]: Internal.BlockItem, [key: Internal.FurnaceBlock]: Internal.BlockItem, [key: Internal.EndermanSkullBlock]: Internal.EndermanHeadItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PinkPetalsBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.ClutchBlock]: Internal.BlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.PointedDripstoneBlock]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.BeltBlock]: Internal.BeltConnectorItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.DeskBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SconceBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.SchematicTableBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.PiglinWallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.PancakeBlock]: Internal.PancakeItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.FrameBlock]: Internal.TimberFrameItem, [key: Internal.WindBellBlock]: Internal.WindBellItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SignalBlock]: Internal.TrackTargetingBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.GlowLichenBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlazeBurnerBlock]: Internal.BlazeBurnerBlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.MechanicalPistonBlock]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ExperienceBlock]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.CommandBlock]: Internal.GameMasterBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConnectedGlassBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.WallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.PedestalBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CopycatPanelBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlazeRodBlock]: Internal.Item, [key: Internal.MetalBenchBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.BeaconBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.CuckooClockBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SmokerBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.NightstandBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.BrewingStandBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.GrindstoneBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.DaylightDetectorBlock]: Internal.BlockItem, [key: Internal.TatamiHalfMatBlock]: Internal.FuelBlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.HornedStatueBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.DiningBenchBlock]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.CounterBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.SideTableBlock]: Internal.BlockItem, [key: Internal.MossBlock]: Internal.BlockItem, [key: Internal.BeehiveBlock]: Internal.BlockItem, [key: Internal.PoweredRailBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DeskBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.FluidTankBlock]: Internal.FluidTankItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BookPileHorizontalBlock]: Internal.BookItem, [key: Internal.DepotBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.TintedGlassBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.LootrTrappedChestBlock]: Internal.LootrChestBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.PoweredRailBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.HalfTransparentBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.SconceWallBlock]: Internal.StandingAndWallBlockItem, [key: Internal.GlobeBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.LootrBarrelBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.CounterBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.MechanicalPressBlock]: Internal.AssemblyOperatorBlockItem, [key: Internal.EncasedCogwheelBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TorchflowerCropBlock]: Internal.ItemNameBlockItem, [key: Internal.CookingPotBlock]: Internal.BlockItem, [key: Internal.CounterBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.CouchBlock]: Internal.BlockItem, [key: Internal.DiningBenchBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.SeatItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.RoastChickenBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StationBlock]: Internal.TrackTargetingBlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: net.mehvahdjukaar.supplementaries.common.block.blocks.PulleyBlock]: Internal.WoodBasedBlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StackableBookBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.WaterlilyBlock]: Internal.PlaceOnWaterBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ChandelierBlock]: Internal.BlockItem, [key: Internal.FancyBedBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.BookPileBlock]: Internal.EnchantedBookItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.BrassDiodeBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.HauntedBellBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.HangingRootsBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.NightstandBlock]: Internal.BlockItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.KitchenHoodBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.PistonBaseBlock]: Internal.BlockItem, [key: Internal.SlidingDoorBlock]: Internal.BlockItem, [key: Internal.TrackObserverBlock]: Internal.TrackTargetingBlockItem, [key: Internal.RichSoulSoilBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SideTableBlock]: Internal.BlockItem, [key: Internal.LoomBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BubbleBlock]: Internal.BubbleBlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.CommandBlock]: Internal.GameMasterBlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SnowLayerBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.MyceliumBlock]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.DoublePlantBlock]: Internal.DoubleHighBlockItem, [key: Internal.SpringLauncherBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.SpeedControllerBlock]: Internal.BlockItem, [key: Internal.NyliumBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TatamiMatBlock]: Internal.FuelBlockItem, [key: Internal.NightstandBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.HandCrankBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.SporeBlossomBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.HourGlassBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.ChiseledBookShelfBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: Internal.JarBoatBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.EncasedShaftBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.StonecutterBlock]: Internal.BlockItem, [key: Internal.StackableJarBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ChandelierBlock]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.FungusBlock]: Internal.BlockItem, [key: Internal.NightstandBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MechanicalCrafterBlock]: Internal.BlockItem, [key: Internal.SequencedGearshiftBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.HosePulleyBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CauldronBlock]: Internal.Items$1, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.DeskBlock]: Internal.BlockItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: Internal.GobletBlock]: Internal.BlockItem, [key: Internal.PlayerWallHeadBlock]: Internal.PlayerHeadItem, [key: Internal.CabinetBlock]: Internal.BlockItem, [key: Internal.LootrShulkerBlock]: Internal.LootrShulkerBlockItem, [key: Internal.ModStairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.SideTableBlock]: Internal.BlockItem, [key: Internal.TurntableBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FancyBedBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CupboardBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.SideTableBlock]: Internal.BlockItem, [key: Internal.SideTableBlock]: Internal.BlockItem, [key: Internal.ScaffoldingBlock]: Internal.ScaffoldingBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RedstoneContactBlock]: Internal.RedstoneContactItem, [key: Internal.SchematicannonBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.EndPortalFrameBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.ChainDriveBlock]: Internal.BlockItem, [key: Internal.BracketBlock]: Internal.BracketBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.DiningBenchBlock]: Internal.BlockItem, [key: Internal.NightstandBlock]: Internal.BlockItem, [key: Internal.SafeBlock]: Internal.SafeItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WindVaneBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.StructureBlock]: Internal.GameMasterBlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.EnchantmentTableBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ThresholdSwitchBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PistonBaseBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CocoaBlock]: Internal.ItemNameBlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PillarBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.NightstandBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.LayeredCauldronBlock]: Internal.Items$1, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.HoneyGlazedHamBlock]: Internal.BlockItem, [key: Internal.CouchBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.ConduitBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.FlippedBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.SideTableBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.SeaPickleBlock]: Internal.BlockItem, [key: Internal.SculkSensorBlock]: Internal.BlockItem, [key: Internal.SugarBlock]: Internal.SugarCubeItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.MetalScaffoldingBlock]: Internal.MetalScaffoldingBlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.GlobeBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.FluidTankBlock]: Internal.FluidTankItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.ModStairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.TntBlock]: Internal.BlockItem, [key: Internal.CarvedBambooWindChimeBlock]: Internal.BlockItem, [key: Internal.BrassDiodeBlock]: Internal.BlockItem, [key: Internal.CampfireBlock]: Internal.BlockItem, [key: Internal.SconceBlock]: Internal.StandingAndWallBlockItem, [key: Internal.DeployerBlock]: Internal.AssemblyOperatorBlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.TomatoVineBlock]: Internal.ModItems$1, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.BasinBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.PieBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.NightstandBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.ChorusFlowerBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.RedstoneLinkBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.ChorusPlantBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MechanicalMixerBlock]: Internal.AssemblyOperatorBlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ItemShelfBlock]: Internal.WoodBasedBlockItem, [key: Internal.CryingObsidianBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GoldTrapdoorBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.JukeboxBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.DiningBenchBlock]: Internal.BlockItem, [key: Internal.WitherRoseBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.FlaxBaleBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.SconceWallBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.JarBlock]: Internal.JarItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlidingDoorBlock]: Internal.BlockItem, [key: Internal.MechanicalPistonBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.HoglinMountBlock]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SideTableBlock]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.RiceBlock]: Internal.RiceItem, [key: Internal.SeatBlock]: Internal.SeatItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.CounterBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.FancyBedBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.WhistleBlock]: Internal.BlockItem, [key: Internal.CherryLeavesBlock]: Internal.BlockItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.JetpackBlock]: Internal.BacktankItem$BacktankBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DispenserBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CrankBlock]: Internal.BlockItem, [key: Internal.CouchBlock]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: lilypuree.decorative_blocks.blocks.ChainBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.GunpowderBlock]: Internal.Item, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.MagmaBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.HangingFlowerPotBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.CounterBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SandBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.FancyBedBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SpawnerBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.PistonExtensionPoleBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.TurnTableBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.SandyShrubBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.DetectorRailBlock]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.FrogspawnBlock]: Internal.PlaceOnWaterBlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.ShaftBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.WildFlaxBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.MushroomColonyBlock]: Internal.MushroomColonyItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GearboxBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.PeculiarBellBlock]: Internal.BlockItem, [key: Internal.ShepherdsPieBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.FancyBedBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CouchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CreativeCrateBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.KelpBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BrassFunnelBlock]: Internal.FunnelItem, [key: Internal.CupboardBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.MetalLadderBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.RelayerBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.SideTableBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ChainBlock]: Internal.BlockItem, [key: Internal.LanternBlock]: Internal.BlockItem, [key: Internal.ControlsBlock]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.CrushingWheelBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.IronWindChimeBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.WetSpongeBlock]: Internal.BlockItem, [key: Internal.FarmBlock]: Internal.BlockItem, [key: Internal.HarvesterBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.NixieTubeBlock]: Internal.BlockItem, [key: Internal.SculkShriekerBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CaveVinesBlock]: Internal.ItemNameBlockItem, [key: Internal.BrazierBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.WeightedPressurePlateBlock]: Internal.BlockItem, [key: Internal.PlacardBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.MushroomBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ClockworkBearingBlock]: Internal.BlockItem, [key: Internal.CounterBlock]: Internal.BlockItem, [key: Internal.StructureVoidBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GravelBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SmithingTableBlock]: Internal.BlockItem, [key: Internal.SoapBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem, [key: Internal.LootrChestBlock]: Internal.LootrChestBlockItem, [key: Internal.ChainGearshiftBlock]: Internal.BlockItem, [key: Internal.CouchBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.RedstoneLampBlock]: Internal.BlockItem, [key: Internal.FluidValveBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.GoddessStatueBlock]: Internal.BlockItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.CrockeryComboBlock]: Internal.BlockItem, [key: Internal.ControllerRailBlock]: Internal.BlockItem, [key: Internal.StatueTrophyBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.GlassBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.BarPanelBlock]: Internal.BlockItem, [key: Internal.SandBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.GaugeBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.DeskBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.DiningBenchBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.SeagrassBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.NetherWartBlock]: Internal.ItemNameBlockItem, [key: Internal.EncasedFanBlock]: Internal.BlockItem, [key: Internal.BeltTunnelBlock]: Internal.BeltTunnelItem, [key: Internal.MimicarnationBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DirtPathBlock]: Internal.BlockItem, [key: Internal.PortableStorageInterfaceBlock]: Internal.BlockItem, [key: Internal.NightstandBlock]: Internal.BlockItem, [key: Internal.RockyDirtBlock]: Internal.BlockItem, [key: Internal.CrockeryComboBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlowerPotBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.SideTableBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.HoneyBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StickBlock]: Internal.Item, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CopperWindChimeBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.SteamEngineBlock]: Internal.BlockItem, [key: Internal.DeskBlock]: Internal.BlockItem, [key: Internal.MillstoneBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.MangroveLeavesBlock]: Internal.BlockItem, [key: Internal.CupboardBlock]: Internal.BlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DeskBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EndermanSkullWallBlock]: Internal.EndermanHeadItem, [key: Internal.NightstandBlock]: Internal.BlockItem, [key: Internal.EquipableCarvedPumpkinBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.UrnBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FeatherBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.TorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.PowderSnowBlock]: Internal.SolidBucketItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.WildRiceBlock]: Internal.DoubleHighBlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.TrophyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.BarrierBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.TripWireHookBlock]: Internal.BlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.AshLayerBlock]: Internal.BlockItem, [key: Internal.CactusBlock]: Internal.BlockItem, [key: Internal.CogWheelBlock]: Internal.CogwheelBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FodderBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.ModStairBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.CampfireBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RiceBaleBlock]: Internal.BlockItem, [key: Internal.LightningRodBlock]: Internal.BlockItem, [key: Internal.PumpBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.SmartObserverBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.NyliumBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SoulCompostBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RepeaterBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.CouchBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.JigsawBlock]: Internal.GameMasterBlockItem, [key: Internal.ArmBlock]: Internal.ArmItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.DeadBushBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.NetherSproutsBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.StickerBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.GoddessStatueBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CartAssemblerBlock]: Internal.CartAssemblerBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.FungusColonyBlock]: Internal.FungusColonyItem, [key: Internal.BlackboardBlock]: Internal.BlackboardItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SconceLeverBlock]: Internal.BlockItem, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FungusColonyBlock]: Internal.FungusColonyItem, [key: Internal.ModStairBlock]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ChestBlock]: Internal.BlockItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StoveBlock]: Internal.BlockItem, [key: Internal.BambooStalkBlock]: Internal.BlockItem, [key: Internal.WindmillBearingBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.GaugeBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.CreativeMotorBlock]: Internal.BlockItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.IronGateBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.RedStoneOreBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.OnionBlock]: Internal.ItemNameBlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.HangingTrophyBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CounterBlock]: Internal.BlockItem, [key: Internal.BuddingTomatoBlock]: Internal.ModItems$1, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.WitherWallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RollerBlock]: Internal.RollerBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.AzaleaBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.GantryCarriageBlock]: Internal.BlockItem, [key: Internal.StatueTrophyBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BracketBlock]: Internal.BracketBlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.AndesiteFunnelBlock]: Internal.FunnelItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CupboardBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.EncasedShaftBlock]: Internal.BlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PoweredLatchBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.BeetrootBlock]: Internal.ItemNameBlockItem, [key: net.mehvahdjukaar.supplementaries.common.block.blocks.RopeBlock]: Internal.RopeItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DecoratedPotBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.InfestedRotatedPillarBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlastFurnaceBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.CouchBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.GoddessStatueBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BuddingAmethystBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CropBlock]: Internal.ItemNameBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.CabbageBlock]: Internal.ItemNameBlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.CounterBlock]: Internal.BlockItem, [key: Internal.PitcherCropBlock]: Internal.ItemNameBlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FlaxBlock]: Internal.ItemNameBlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.GirderBlock]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.CarvedPumpkinBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.AnvilBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TurtleEggBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.GlassBlock]: Internal.BlockItem, [key: Internal.DeskBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.TallGrassBlock]: Internal.BlockItem, [key: Internal.ChuteBlock]: Internal.ChuteItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.BrassTunnelBlock]: Internal.BeltTunnelItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.SideTableBlock]: Internal.BlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.TallGrassBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MangrovePropaguleBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FancyBedBlock]: Internal.BlockItem, [key: Internal.RailBlock]: Internal.BlockItem, [key: Internal.AmethystWindChimeBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.SugarCaneBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.GlassPaneBlock]: Internal.BlockItem, [key: Internal.StatueTrophyBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CalibratedSculkSensorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.NetheriteTrapdoorBlock]: Internal.BlockItem, [key: Internal.CouchBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.TwistingVinesBlock]: Internal.BlockItem, [key: Internal.ElevatorPulleyBlock]: Internal.BlockItem, [key: Internal.CouchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FluidPipeBlock]: Internal.BlockItem, [key: Internal.RootsBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.DeskBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ObserverBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.LinearChassisBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CounterBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.EncasedCogwheelBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BlackstoneBlastFurnaceBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BellowsBlock]: Internal.WoodBasedBlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BambooSpikesBlock]: Internal.BambooSpikesTippedItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.SlidingDoorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.RedstoneWallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CarrotBlock]: Internal.ItemNameBlockItem, [key: Internal.SlidingDoorBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.MudBlock]: Internal.BlockItem, [key: Internal.KitchenHoodPipeBlock]: Internal.TooltipBlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.GearshiftBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.EncasedCogwheelBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.LadderBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StemBlock]: Internal.ItemNameBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.JetpackBlock]: Internal.BacktankItem$BacktankBlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ContraptionControlsBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.ComparatorBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.BrushableBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.CupboardBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.SeatItem, [key: Internal.HayBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.SeatItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.TripWireBlock]: Internal.ItemNameBlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.BeehiveBlock]: Internal.BlockItem, [key: Internal.SmallDripleafBlock]: Internal.DoubleHighBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.RichSoilFarmlandBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.RedStoneWireBlock]: Internal.ItemNameBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SoulSandBlock]: Internal.BlockItem, [key: Internal.FancyBedBlock]: Internal.BlockItem, [key: Internal.CogBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.StatueTrophyBlock]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.MechanicalBearingBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.SlidingDoorBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.DrillBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallTrophyBlock]: Internal.BlockItem, [key: Internal.FancyBedBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.MushroomBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DoublePlantBlock]: Internal.DoubleHighBlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.RootsBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.LargeWaterWheelBlock]: Internal.LargeWaterWheelBlockItem, [key: Internal.AzaleaBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DisplayLinkBlock]: Internal.DisplayLinkBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.LeverBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SideTableBlock]: Internal.BlockItem, [key: Internal.WeightedPressurePlateBlock]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.ComposterBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StatueTrophyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.PoweredBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.ToggleLatchBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.RakedGravelBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.NetherrackBlock]: Internal.BlockItem, [key: Internal.PloughBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.NightstandBlock]: Internal.BlockItem, [key: Internal.PotatoBlock]: Internal.ItemNameBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.NightstandBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.RoseQuartzLampBlock]: Internal.BlockItem, [key: Internal.MushroomColonyBlock]: Internal.MushroomColonyItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CakeBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.BarrelBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.BigDripleafStemBlock]: Internal.Items$1, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.OvenBlock]: Internal.BlockItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.WebBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.SlimeBlock]: Internal.BlockItem, [key: Internal.RespawnAnchorBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.CageBlock]: Internal.CageItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.AnvilBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.ItemVaultBlock]: Internal.ItemVaultItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DragonEggBlock]: Internal.BlockItem, [key: Internal.RedstoneTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FancyBedBlock]: Internal.BlockItem, [key: Internal.BigDripleafBlock]: Internal.Items$1, [key: Internal.NetherBrickSmokerBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.CuttingBoardBlock]: Internal.FuelBlockItem, [key: Internal.MangroveRootsBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.TrainTrapdoorBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.MetalLadderBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.PumpkinBlock]: Internal.BlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TatamiBlock]: Internal.FuelBlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.AnalogLeverBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FeastBlock]: Internal.BlockItem, [key: Internal.VineBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.FrameBraceBlock]: Internal.TimberFrameItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.RichSoilBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.StatueTrophyBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.FancyBedBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.FungusBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.CrockeryComboBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.SconceWallBlock]: Internal.StandingAndWallBlockItem, [key: Internal.SmartFluidPipeBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.NozzleBlock]: Internal.BlockItem, [key: Internal.SconceBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.BlackstoneFurnaceBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SnifferEggBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.SeatBlock]: Internal.SeatItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConnectedGlassBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.GrassBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.StatueBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.CupboardBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.CarpetBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FlintBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PlayerHeadBlock]: Internal.PlayerHeadItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.FletchingTableBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FaucetBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.WaterWheelBlock]: Internal.BlockItem, [key: Internal.DeskBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.SeatItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DiningBenchBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.DiningBenchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.SeatItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.RootedDirtBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.EncasedCogwheelBlock]: Internal.BlockItem, [key: Internal.EnderChestBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.CogWheelBlock]: Internal.CogwheelBlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.DeskBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ClockBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EndRodBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SafetyNetBlock]: Internal.FuelBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.CouchBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.TargetBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.GoddessStatueBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.DiningBenchBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.RedstoneIlluminatorBlock]: Internal.BlockItem, [key: Internal.DoublePlantBlock]: Internal.BlockItem, [key: Internal.SweetBerryBushBlock]: Internal.ItemNameBlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.PotBlock]: Internal.BlockItem, [key: Internal.TorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.CraftingTableBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.BlackstoneStoveBlock]: Internal.BlockItem, [key: Internal.GoldDoorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.MetalScaffoldingBlock]: Internal.MetalScaffoldingBlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CupboardBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.EndLampBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.AnvilBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.BacktankBlock]: Internal.BacktankItem$BacktankBlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.LecternBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.LinearChassisBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.NetheriteDoorBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DoormatBlock]: Internal.WoodBasedBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.LootrInventoryBlock]: Internal.LootrChestBlockItem, [key: Internal.CommandBlock]: Internal.GameMasterBlockItem, [key: Internal.NoticeBoardBlock]: Internal.WoodBasedBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CupboardBlock]: Internal.BlockItem, [key: Internal.LavaCauldronBlock]: Internal.Items$1, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.BrushableBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.GantryShaftBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.LatticeBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.ClipboardBlock]: Internal.ClipboardBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.DiningBenchBlock]: Internal.BlockItem, [key: Internal.PropelplantCaneBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.DisenchanterBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CrockeryComboBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.WallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SpeakerBlock]: Internal.WoodBasedBlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.CrystalDisplayBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.CanvasRugBlock]: Internal.FuelBlockItem, [key: Internal.SpongeBlock]: Internal.BlockItem, [key: Internal.CrockeryBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.CornerTrimBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.CounterBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.CouchBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.NoteBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: com.simibubi.create.content.contraptions.actors.seat.SeatBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StemBlock]: Internal.ItemNameBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SculkCatalystBlock]: Internal.BlockItem, [key: Internal.DropperBlock]: Internal.BlockItem, [key: Internal.WitherSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.TorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.ElevatorContactBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.MetalScaffoldingBlock]: Internal.MetalScaffoldingBlockItem, [key: Internal.SmartChuteBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.HopperBlock]: Internal.BlockItem, [key: Internal.RopeBlock]: vectorwing.farmersdelight.common.item.RopeItem, [key: Internal.DiningBenchBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.RedStoneOreBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.OrganicCompostBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SackBlock]: Internal.SackItem, [key: Internal.CuckooClockBlock]: Internal.BlockItem, [key: Internal.FlywheelBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CupboardBlock]: Internal.BlockItem, [key: Internal.BlockBotanyPot]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.FrameBlock]: Internal.TimberFrameItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StrawBaleBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RadialChassisBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.SkilletBlock]: Internal.SkilletItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SawBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.HugeMushroomBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.PieBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BacktankBlock]: Internal.BacktankItem$BacktankBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.PillarTrimBlock]: Internal.BlockItem, [key: Internal.AmethystBlock]: Internal.BlockItem, [key: Internal.SculkBlock]: Internal.BlockItem, [key: Internal.BambooWindChimeBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.CushionBlock]: Internal.ItemNameBlockItem};
        static readonly EAT_DURATION: 32;
        static readonly MAX_STACK_SIZE: 64;
        static readonly MAX_BAR_WIDTH: 13;
    }
    type Item_ = Item | Special.Item;
    class RedstoneLinkBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        setSignal(arg0: number): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        getReceivedSignal(): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        transmit(arg0: number): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getSignal(): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        set signal(arg0: number)
        get receivedSignal(): number
        get modelData(): Internal.ModelData
        get signal(): number
    }
    type RedstoneLinkBlockEntity_ = RedstoneLinkBlockEntity;
    interface ItemSupplier {
        abstract getItem(): Internal.ItemStack;
        get item(): Internal.ItemStack
        (): Internal.ItemStack_;
    }
    type ItemSupplier_ = ItemSupplier;
    interface Boolean2ObjectFunction <V> extends it.unimi.dsi.fastutil.Function<boolean, V> {
        put(arg0: boolean, arg1: V): V;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Boolean2ShortFunction;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Boolean2ObjectFunction<T>;
        composeFloat(arg0: Internal.Float2BooleanFunction_): Internal.Float2ObjectFunction<V>;
        composeReference<T>(arg0: Internal.Reference2BooleanFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Boolean2DoubleFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Boolean2FloatFunction;
        composeLong(arg0: Internal.Long2BooleanFunction_): Internal.Long2ObjectFunction<V>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Boolean2IntFunction;
        /**
         * @deprecated
        */
        put(arg0: boolean, arg1: V): V;
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
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Boolean2LongFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, boolean>): Internal.Function<T, V>;
        apply(arg0: boolean): V;
        abstract get(arg0: boolean): V;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Boolean2ByteFunction;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<boolean, V>;
        composeShort(arg0: Internal.Short2BooleanFunction_): Internal.Short2ObjectFunction<V>;
        composeInt(arg0: Internal.Int2BooleanFunction_): Internal.Int2ObjectFunction<V>;
        composeChar(arg0: Internal.Char2BooleanFunction_): Internal.Char2ObjectFunction<V>;
        containsKey(arg0: boolean): boolean;
        composeObject<T>(arg0: Internal.Object2BooleanFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Boolean2ReferenceFunction<T>;
        remove(arg0: boolean): V;
        size(): number;
        composeDouble(arg0: Internal.Double2BooleanFunction_): Internal.Double2ObjectFunction<V>;
        clear(): void;
        composeByte(arg0: Internal.Byte2BooleanFunction_): Internal.Byte2ObjectFunction<V>;
        defaultReturnValue(): V;
        getOrDefault(arg0: boolean, arg1: V): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Boolean2CharFunction;
        (arg0: boolean): V;
    }
    type Boolean2ObjectFunction_<V> = Boolean2ObjectFunction<V>;
    class ExperienceNuggetItem extends Internal.Item {
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
    type ExperienceNuggetItem_ = ExperienceNuggetItem;
    class MapBanner {
        constructor(arg0: BlockPos_, arg1: Internal.DyeColor_, arg2: Internal.Component_)
        getPos(): BlockPos;
        save(): Internal.CompoundTag;
        getColor(): Internal.DyeColor;
        getName(): Internal.Component;
        static load(arg0: Internal.CompoundTag_): Internal.MapBanner;
        static fromWorld(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.MapBanner;
        getId(): string;
        getDecoration(): Internal.MapDecoration$Type;
        get pos(): BlockPos
        get color(): Internal.DyeColor
        get name(): Internal.Component
        get id(): string
        get decoration(): Internal.MapDecoration$Type
    }
    type MapBanner_ = MapBanner;
    class HoeItemBuilder extends Internal.HandheldItemBuilder {
        constructor(i: ResourceLocation_)
        createObject(): Internal.Item;
    }
    type HoeItemBuilder_ = HoeItemBuilder;
    class AltimeterItem extends Internal.Item implements Internal.ICustomItemRendererProvider {
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
        get rendererFactory(): Internal.Supplier<Internal.ItemStackRenderer>
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type AltimeterItem_ = AltimeterItem;
    class ServerAdvancementManager extends Internal.SimpleJsonResourceReloadListener {
        constructor(arg0: Internal.LootDataManager_)
        constructor(arg0: Internal.LootDataManager_, arg1: Internal.ICondition$IContext_)
        getAllAdvancements(): Internal.Collection<Internal.Advancement>;
        getAdvancement(arg0: ResourceLocation_): Internal.Advancement;
        getName(): string;
        get allAdvancements(): Internal.Collection<Internal.Advancement>
        get name(): string
    }
    type ServerAdvancementManager_ = ServerAdvancementManager;
    class WitherWallSkullBlock extends Internal.WallSkullBlock {
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
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        get equipSound(): Internal.SoundEvent
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type WitherWallSkullBlock_ = WitherWallSkullBlock;
    class HoverEvent$Action <T> {
        constructor(arg0: string, arg1: boolean, arg2: Internal.Function_<Internal.JsonElement, T>, arg3: Internal.Function_<T, Internal.JsonElement>, arg4: Internal.Function_<Internal.Component, T>)
        static getByName(arg0: string): Internal.HoverEvent$Action<any>;
        isAllowedFromServer(): boolean;
        deserializeFromLegacy(arg0: Internal.Component_): Internal.HoverEvent;
        getName(): string;
        serializeArg(arg0: any): Internal.JsonElement;
        deserialize(arg0: Internal.JsonElement_): Internal.HoverEvent;
        get allowedFromServer(): boolean
        get name(): string
        static readonly SHOW_ENTITY: Internal.HoverEvent$Action<Internal.HoverEvent$EntityTooltipInfo>;
        static readonly SHOW_TEXT: Internal.HoverEvent$Action<Internal.Component>;
        static readonly SHOW_ITEM: Internal.HoverEvent$Action<Internal.HoverEvent$ItemStackInfo>;
    }
    type HoverEvent$Action_<T> = HoverEvent$Action<T>;
    class HangingSignItem extends Internal.SignItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Block_, arg2: Internal.Item$Properties_)
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
    type HangingSignItem_ = HangingSignItem;
    abstract class HangingEntity extends Internal.Entity {
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        getPos(): BlockPos;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        abstract getWidth(): number;
        abstract dropItem(arg0: Internal.Entity_): void;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        survives(): boolean;
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
        abstract playPlacementSound(): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getLevel(): Internal.Level;
        getFacing(): Internal.Direction;
        getScriptType(): Internal.ScriptType;
        isMultipartEntity(): boolean;
        shouldRiderSit(): boolean;
        abstract getHeight(): number;
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
        setDirection(arg0: Internal.Direction_): void;
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
        get pos(): BlockPos
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get width(): number
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
        get height(): number
        get parts(): Internal.PartEntity<any>[]
        get motionX(): number
        get waterCreature(): boolean
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        set z(z: number)
        set direction(arg0: Internal.Direction_)
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
    }
    type HangingEntity_ = HangingEntity;
    class InterModProcessEvent extends Internal.ParallelDispatchEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.ModLoadingStage_)
    }
    type InterModProcessEvent_ = InterModProcessEvent;
    class GoalSelectorDebugRenderer$DebugGoal {
        constructor(arg0: BlockPos_, arg1: number, arg2: string, arg3: boolean)
        readonly name: string;
        readonly priority: number;
        readonly isRunning: boolean;
        readonly pos: BlockPos;
    }
    type GoalSelectorDebugRenderer$DebugGoal_ = GoalSelectorDebugRenderer$DebugGoal;
    class BundleDelimiterPacket <T extends Internal.PacketListener> implements Internal.Packet<T> {
        constructor()
        write(arg0: Internal.FriendlyByteBuf_): void;
        isSkippable(): boolean;
        handle(arg0: T): void;
        get skippable(): boolean
    }
    type BundleDelimiterPacket_<T extends Internal.PacketListener> = BundleDelimiterPacket<T>;
    class GiftLootEventJS extends Internal.LootEventJS {
        constructor(c: Internal.Map_<ResourceLocation, Internal.JsonElement>)
        addGift(id: ResourceLocation_, b: Internal.Consumer_<Internal.LootBuilder>): void;
    }
    type GiftLootEventJS_ = GiftLootEventJS;
    class FluidContainerList$Category {
        getFilledItems(): Internal.List<Internal.Item>;
        getFirstFilled(): Internal.Optional<Internal.Item>;
        getEmptyContainer(): Internal.Item;
        getCapacity(): number;
        getAmount(): number;
        getFillSound(): Internal.SoundEvent;
        isEmpty(): boolean;
        getEmptySound(): Internal.SoundEvent;
        get filledItems(): Internal.List<Internal.Item>
        get firstFilled(): Internal.Optional<Internal.Item>
        get emptyContainer(): Internal.Item
        get capacity(): number
        get amount(): number
        get fillSound(): Internal.SoundEvent
        get empty(): boolean
        get emptySound(): Internal.SoundEvent
        static readonly CODEC: Internal.Codec<Internal.FluidContainerList$Category>;
    }
    type FluidContainerList$Category_ = FluidContainerList$Category;
    interface SignedMessageChain$Decoder {
        unsigned(arg0: Internal.UUID_): this;
        abstract unpack(arg0: Internal.MessageSignature_, arg1: Internal.SignedMessageBody_): Internal.PlayerChatMessage;
        (arg0: Internal.MessageSignature, arg1: Internal.SignedMessageBody): Internal.PlayerChatMessage_;
        readonly REJECT_ALL: Internal.SignedMessageChain$Decoder;
    }
    type SignedMessageChain$Decoder_ = SignedMessageChain$Decoder;
    interface ClientLevelExtension {
        abstract flywheel$getAllLoadedEntities(): Internal.Iterable<Internal.Entity>;
        cast(arg0: Internal.ClientLevel_): this;
        (): Internal.Iterable_<Internal.Entity>;
    }
    type ClientLevelExtension_ = ClientLevelExtension;
    class VertexFormatElement$Type extends Internal.Enum<Internal.VertexFormatElement$Type> {
        getSize(): number;
        static valueOf(arg0: string): Internal.VertexFormatElement$Type;
        getName(): string;
        getGlType(): number;
        static values(): Internal.VertexFormatElement$Type[];
        get size(): number
        get name(): string
        get glType(): number
        static readonly USHORT: Internal.VertexFormatElement$Type;
        static readonly SHORT: Internal.VertexFormatElement$Type;
        static readonly BYTE: Internal.VertexFormatElement$Type;
        static readonly UINT: Internal.VertexFormatElement$Type;
        static readonly INT: Internal.VertexFormatElement$Type;
        static readonly FLOAT: Internal.VertexFormatElement$Type;
        static readonly UBYTE: Internal.VertexFormatElement$Type;
    }
    type VertexFormatElement$Type_ = "float" | "uint" | "ushort" | "int" | "short" | "byte" | VertexFormatElement$Type | "ubyte";
    interface ITypeInfo {
        abstract getTypeName(): string;
        abstract equalsTo(arg0: Internal.ITypeInfo_): boolean;
        abstract getBaseType(): this;
        abstract getResolvedClass(): typeof any;
        abstract assignableFrom(arg0: Internal.ITypeInfo_): boolean;
        abstract copy(): this;
        get typeName(): string
        get baseType(): Internal.ITypeInfo
        get resolvedClass(): typeof any
    }
    type ITypeInfo_ = ITypeInfo;
    class SequentialEntry$Builder extends Internal.LootPoolEntryContainer$Builder<Internal.SequentialEntry$Builder> {
        constructor(...arg0: Internal.LootPoolEntryContainer$Builder_<any>[])
        when<E>(arg0: Internal.Iterable_<E>, arg1: Internal.Function_<E, Internal.LootItemCondition$Builder>): this;
        when(arg0: Internal.LootItemCondition$Builder_): Internal.ConditionUserBuilder<any>;
        unwrap(): Internal.ConditionUserBuilder<any>;
    }
    type SequentialEntry$Builder_ = SequentialEntry$Builder;
    class PotatoCannonItem extends Internal.ProjectileWeaponItem implements Internal.CustomArmPoseItem {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        getArmPose(arg0: Internal.ItemStack_, arg1: Internal.AbstractClientPlayer_, arg2: Internal.InteractionHand_): Internal.HumanoidModel$ArmPose;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
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
        isCannon(arg0: Internal.ItemStack_): boolean;
        setArmorProtection(armorProtection: number): void;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setArmorToughness(armorToughness: number): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getAmmoforPreview(arg0: Internal.ItemStack_): Internal.Optional<Internal.ItemStack>;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
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
        static readonly MAX_DAMAGE: 100;
        static CLIENT_CURRENT_AMMO: Internal.ItemStack;
    }
    type PotatoCannonItem_ = PotatoCannonItem;
    class ServerEventJS extends Internal.EventJS {
        constructor(s: Internal.MinecraftServer_)
        getServer(): Internal.MinecraftServer;
        get server(): Internal.MinecraftServer
        readonly server: Internal.MinecraftServer;
    }
    type ServerEventJS_ = ServerEventJS;
    class DensityFunction$NoiseHolder extends Internal.Record {
        constructor(arg0: Internal.Holder_<Internal.NormalNoise$NoiseParameters>, arg1: Internal.NormalNoise_)
        constructor(arg0: Internal.Holder_<Internal.NormalNoise$NoiseParameters>)
        getValue(arg0: number, arg1: number, arg2: number): number;
        noise(): Internal.NormalNoise;
        maxValue(): number;
        noiseData(): Internal.Holder<Internal.NormalNoise$NoiseParameters>;
        static readonly CODEC: Internal.Codec<Internal.DensityFunction$NoiseHolder>;
    }
    type DensityFunction$NoiseHolder_ = DensityFunction$NoiseHolder;
    interface LerpingModel {
        abstract getModelRotationValues(): Internal.Map<string, Vec3f>;
        get modelRotationValues(): Internal.Map<string, Vec3f>
        (): Internal.Map_<string, Vec3f>;
    }
    type LerpingModel_ = LerpingModel;
    class RegisterClientCommandsEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.CommandDispatcher_<Internal.CommandSourceStack>, arg1: Internal.CommandBuildContext_)
        getDispatcher(): Internal.CommandDispatcher<Internal.CommandSourceStack>;
        getBuildContext(): Internal.CommandBuildContext;
        get dispatcher(): Internal.CommandDispatcher<Internal.CommandSourceStack>
        get buildContext(): Internal.CommandBuildContext
    }
    type RegisterClientCommandsEvent_ = RegisterClientCommandsEvent;
    class ResolverStyle extends Internal.Enum<Internal.ResolverStyle> {
        static valueOf(arg0: string): Internal.ResolverStyle;
        static values(): Internal.ResolverStyle[];
        static readonly LENIENT: Internal.ResolverStyle;
        static readonly SMART: Internal.ResolverStyle;
        static readonly STRICT: Internal.ResolverStyle;
    }
    type ResolverStyle_ = "smart" | ResolverStyle | "strict" | "lenient";
    class FishingHook extends Internal.Projectile {
        constructor(arg0: Internal.Player_, arg1: Internal.Level_, arg2: number, arg3: number)
        constructor(arg0: Internal.EntityType_<Internal.FishingHook>, arg1: Internal.Level_)
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getHookedIn(): Internal.Entity;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
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
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        getPlayerOwner(): Internal.Player;
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
        retrieve(arg0: Internal.ItemStack_): number;
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
        isOpenWaterFishing(): boolean;
        runCommand(command: string): number;
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        get peacefulCreature(): boolean
        get hookedIn(): Internal.Entity
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
        get playerOwner(): Internal.Player
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
        get openWaterFishing(): boolean
    }
    type FishingHook_ = FishingHook;
    class DoubleFaceAttachedBlock extends Internal.HorizontalDirectionalBlock {
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
        static readonly FACE: Internal.EnumProperty<Internal.DoubleFaceAttachedBlock$DoubleAttachFace>;
    }
    type DoubleFaceAttachedBlock_ = DoubleFaceAttachedBlock;
    interface IBindRenderLayer {
        abstract getRenderLayerToBind(): Internal.RenderType;
        get renderLayerToBind(): Internal.RenderType
        (): Internal.RenderType_;
    }
    type IBindRenderLayer_ = IBindRenderLayer;
    interface ObjIntConsumer <T> {
        abstract accept(arg0: T, arg1: number): void;
        (arg0: T, arg1: number): void;
    }
    type ObjIntConsumer_<T> = ObjIntConsumer<T>;
    class EmptyMapItem extends Internal.ComplexItem {
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
    type EmptyMapItem_ = EmptyMapItem;
    class BellAttachType extends Internal.Enum<Internal.BellAttachType> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.BellAttachType;
        static values(): Internal.BellAttachType[];
        get serializedName(): string
        static readonly DOUBLE_WALL: Internal.BellAttachType;
        static readonly CEILING: Internal.BellAttachType;
        static readonly SINGLE_WALL: Internal.BellAttachType;
        static readonly FLOOR: Internal.BellAttachType;
    }
    type BellAttachType_ = "floor" | "ceiling" | "single_wall" | BellAttachType | "double_wall";
    class BellowsBlock extends Internal.Block implements Internal.EntityBlock {
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
        updatePower(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_): void;
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
        static createVoxelShapeY(height: number): Internal.VoxelShape;
        static createVoxelShapeXZ(height: number): Internal.VoxelShape;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly POWER: Internal.IntegerProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type BellowsBlock_ = BellowsBlock;
    abstract class FluidStackJS implements Internal.OutputFluid, Internal.WrappedJS, Internal.InputFluid {
        constructor()
        copy(): this;
        getTags(): Internal.Collection<ResourceLocation>;
        replaceInput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, original: Internal.InputReplacement_): any;
        removeChance(): void;
        isEmpty(): boolean;
        toJson(): Internal.JsonObject;
        abstract setNbt(arg0: Internal.CompoundTag_): void;
        replaceOutput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, original: Internal.OutputReplacement_): any;
        abstract getAmount(): number;
        toNBT(): Internal.CompoundTag;
        abstract getFluidStack(): dev.architectury.fluid.FluidStack;
        static of(o: any, amount: number, nbt: Internal.CompoundTag_): Internal.FluidStackJS;
        abstract getNbt(): Internal.CompoundTag;
        transform(transformer: Internal.OutputReplacementTransformer_): Internal.OutputReplacementTransformer$Replacement;
        getChance(): number;
        hasTag(tag: ResourceLocation_): boolean;
        static of(o: any): Internal.FluidStackJS;
        abstract setAmount(arg0: number): void;
        copy(arg0: number): Internal.FluidLike;
        abstract getId(): string;
        strongEquals(o: any): boolean;
        withAmount(amount: number): this;
        withNBT(nbt: Internal.CompoundTag_): this;
        matches(other: Internal.FluidLike_): boolean;
        static fromJson(e: Internal.JsonElement_): Internal.FluidStackJS;
        transform(transformer: Internal.InputReplacementTransformer_): Internal.InputReplacementTransformer$Replacement;
        getFluid(): Internal.Fluid;
        setChance(c: number): void;
        hasChance(): boolean;
        withChance(c: number): this;
        get tags(): Internal.Collection<ResourceLocation>
        get empty(): boolean
        set nbt(arg0: Internal.CompoundTag_)
        get amount(): number
        get fluidStack(): dev.architectury.fluid.FluidStack
        get nbt(): Internal.CompoundTag
        get chance(): number
        set amount(arg0: number)
        get id(): string
        get fluid(): Internal.Fluid
        set chance(c: number)
    }
    type FluidStackJS_ = FluidStackJS | {fluid: ResourceLocation_, nbt?: Internal.CompoundTag_, amount?: number} | "empty" | dev.architectury.fluid.FluidStack_ | Internal.Fluid_ | "-" | {fluid: Internal.Fluid_, nbt: Internal.CompoundTag_, amount?: number} | ""|"-"|"empty"|"minecraft:empty" | "minecraft:empty";
    class LootTableEntry implements Internal.FunctionContainer, Internal.ConditionContainer {
        constructor(o: Internal.JsonObject_)
        enchantWithLevels(levels: Internal.NumberProvider_, treasure: boolean): Internal.FunctionContainer;
        weight(weight: number): this;
        enchantRandomly(enchantments: ResourceLocation_[]): Internal.FunctionContainer;
        furnaceSmelt(): Internal.FunctionContainer;
        entityProperties(entity: Internal.LootContext$EntityTarget_, properties: Internal.JsonObject_): Internal.ConditionContainer;
        lootingEnchant(count: Internal.NumberProvider_, limit: number): Internal.FunctionContainer;
        addCondition(o: Internal.JsonObject_): this;
        addConditionalFunction(func: Internal.Consumer_<Internal.ConditionalFunction>): Internal.FunctionContainer;
        randomChanceWithLooting(chance: number, multiplier: number): Internal.ConditionContainer;
        randomChance(chance: number): Internal.ConditionContainer;
        addFunction(o: Internal.JsonObject_): this;
        name(name: Internal.Component_, entity: Internal.LootContext$EntityTarget_): Internal.FunctionContainer;
        killedByPlayer(): Internal.ConditionContainer;
        damage(damage: Internal.NumberProvider_): Internal.FunctionContainer;
        nbt(tag: Internal.CompoundTag_): Internal.FunctionContainer;
        entityScores(entity: Internal.LootContext$EntityTarget_, scores: Internal.Map_<string, any>): Internal.ConditionContainer;
        count(count: Internal.NumberProvider_): Internal.FunctionContainer;
        survivesExplosion(): Internal.ConditionContainer;
        quality(quality: number): this;
        copyName(source: Internal.CopyNameFunction$NameSource_): Internal.FunctionContainer;
        lootTable(table: ResourceLocation_, seed: number): Internal.FunctionContainer;
        name(name: Internal.Component_): Internal.FunctionContainer;
        readonly json: Internal.JsonObject;
    }
    type LootTableEntry_ = LootTableEntry;
    interface IClientItemExtensions {
        renderHelmetOverlay(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number, arg3: number, arg4: number): void;
        of(arg0: Internal.ItemStack_): this;
        of(arg0: Internal.Item_): this;
        getCustomRenderer(): Internal.BlockEntityWithoutLevelRenderer;
        getGenericArmorModel(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: Internal.EquipmentSlot_, arg3: Internal.HumanoidModel_<any>): Internal.Model;
        getFont(arg0: Internal.ItemStack_, arg1: Internal.IClientItemExtensions$FontContext_): Internal.Font;
        getArmPose(arg0: Internal.LivingEntity_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_): Internal.HumanoidModel$ArmPose;
        applyForgeHandTransform(arg0: Internal.PoseStack_, arg1: Internal.LocalPlayer_, arg2: Internal.HumanoidArm_, arg3: Internal.ItemStack_, arg4: number, arg5: number, arg6: number): boolean;
        getHumanoidArmorModel(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: Internal.EquipmentSlot_, arg3: Internal.HumanoidModel_<any>): Internal.HumanoidModel<any>;
        get customRenderer(): Internal.BlockEntityWithoutLevelRenderer
        readonly DEFAULT: Internal.IClientItemExtensions;
    }
    type IClientItemExtensions_ = IClientItemExtensions;
    class ComposterBlock extends Internal.Block implements Internal.WorldlyContainerHolder {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        static extractProduce(arg0: Internal.Entity_, arg1: Internal.BlockState_, arg2: Internal.Level_, arg3: BlockPos_): Internal.BlockState;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getContainer(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.WorldlyContainer;
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
        static bootStrap(): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        static handleFill(arg0: Internal.Level_, arg1: BlockPos_, arg2: boolean): void;
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
        static insertItem(arg0: Internal.Entity_, arg1: Internal.BlockState_, arg2: Internal.ServerLevel_, arg3: Internal.ItemStack_, arg4: BlockPos_): Internal.BlockState;
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
        static readonly COMPOSTABLES: {[key: Internal.Item]: 0.65, [key: Internal.Item]: 0.5, [key: Internal.Item]: 1.0, [key: Internal.BlockItem]: 0.3, [key: Internal.ItemNameBlockItem]: 0.3, [key: Internal.BlockItem]: 0.65, [key: Internal.Item]: 0.65, [key: Internal.DoubleHighBlockItem]: 0.65, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.65, [key: Internal.Item]: 0.65, [key: Internal.Item]: 1.0, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 1.0, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.5, [key: Internal.BlockItem]: 1.0, [key: Internal.FungusColonyItem]: 1.0, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.5, [key: Internal.BlockItem]: 0.85, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.3, [key: Internal.Item]: 0.85, [key: Internal.BlockItem]: 0.65, [key: Internal.FuelItem]: 0.3, [key: Internal.Items$1]: 0.65, [key: Internal.Item]: 0.85, [key: Internal.BlockItem]: 0.65, [key: Internal.Item]: 0.85, [key: Internal.BlockItem]: 0.65, [key: Internal.FungusColonyItem]: 1.0, [key: Internal.BlockItem]: 0.85, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.85, [key: Internal.ItemNameBlockItem]: 0.3, [key: Internal.Item]: 0.85, [key: Internal.BlockItem]: 0.65, [key: Internal.DoubleHighBlockItem]: 0.65, [key: Internal.DoubleHighBlockItem]: 0.65, [key: Internal.Item]: 0.85, [key: Internal.ItemNameBlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.DoubleHighBlockItem]: 0.3, [key: Internal.BlockItem]: 0.65, [key: Internal.Item]: 0.3, [key: Internal.PlaceOnWaterBlockItem]: 0.65, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.5, [key: Internal.RiceItem]: 0.3, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 1.0, [key: Internal.MushroomColonyItem]: 1.0, [key: Internal.Item]: 0.3, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.85, [key: Internal.ModItems$1]: 0.3, [key: Internal.RottenTomatoItem]: 0.85, [key: Internal.BlockItem]: 0.85, [key: Internal.MushroomColonyItem]: 1.0, [key: Internal.Item]: 0.65, [key: Internal.BlockItem]: 0.85, [key: Internal.Item]: 0.85, [key: Internal.ItemNameBlockItem]: 0.3, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.5, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.65, [key: Internal.ItemNameBlockItem]: 0.3, [key: Internal.ItemNameBlockItem]: 0.3, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.3, [key: Internal.ItemNameBlockItem]: 0.3, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.DoubleHighBlockItem]: 0.5, [key: Internal.BlockItem]: 0.3, [key: Internal.Item]: 0.65, [key: Internal.BlockItem]: 0.3, [key: Internal.ItemNameBlockItem]: 0.65, [key: Internal.BlockItem]: 0.3, [key: Internal.Item]: 0.85, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 1.0, [key: Internal.BlockItem]: 0.3, [key: Internal.Item]: 0.65, [key: Internal.Item]: 0.5, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.3, [key: Internal.FuelItem]: 0.3, [key: Internal.ItemNameBlockItem]: 0.65, [key: Internal.BlockItem]: 0.5, [key: Internal.DoubleHighBlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.ItemNameBlockItem]: 0.3, [key: Internal.ItemNameBlockItem]: 0.3, [key: Internal.BlockItem]: 0.85, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.DoubleHighBlockItem]: 0.65, [key: Internal.ItemNameBlockItem]: 0.3, [key: Internal.DoubleHighBlockItem]: 0.65, [key: Internal.ItemNameBlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.85, [key: Internal.BlockItem]: 0.4, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.5, [key: Internal.BlockItem]: 0.65, [key: Internal.Item]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.3, [key: Internal.Item]: 0.5, [key: Internal.Item]: 0.85, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 1.0, [key: Internal.BlockItem]: 0.3, [key: Internal.Item]: 0.85, [key: Internal.BlockItem]: 0.5, [key: Internal.BlockItem]: 0.65, [key: Internal.KelpRollItem]: 0.85, [key: Internal.Item]: 0.5, [key: Internal.ItemNameBlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 0.65, [key: Internal.ItemNameBlockItem]: 0.3, [key: Internal.BlockItem]: 0.3, [key: Internal.BlockItem]: 0.85, [key: Internal.Item]: 0.85, [key: Internal.BlockItem]: 0.65, [key: Internal.BlockItem]: 1.0, [key: Internal.BlockItem]: 0.5, [key: Internal.BlockItem]: 0.5};
        static readonly MAX_LEVEL: 7;
        static readonly MIN_LEVEL: 0;
        static readonly READY: 8;
        static readonly LEVEL: Internal.IntegerProperty;
    }
    type ComposterBlock_ = ComposterBlock;
    class CherryLeavesBlock extends Internal.LeavesBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
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
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
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
    }
    type CherryLeavesBlock_ = CherryLeavesBlock;
    interface LootItemCondition$Builder {
        and(arg0: Internal.LootItemCondition$Builder_): Internal.AllOfCondition$Builder;
        abstract build(): Internal.LootItemCondition;
        invert(): this;
        or(arg0: Internal.LootItemCondition$Builder_): Internal.AnyOfCondition$Builder;
        (): Internal.LootItemCondition_;
    }
    type LootItemCondition$Builder_ = LootItemCondition$Builder;
    interface BakedModel extends Internal.IForgeBakedModel {
        abstract isCustomRenderer(): boolean;
        getRenderPasses(arg0: Internal.ItemStack_, arg1: boolean): Internal.List<Internal.BakedModel>;
        getModelData(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.ModelData_): Internal.ModelData;
        getRenderTypes(arg0: Internal.BlockState_, arg1: Internal.RandomSource_, arg2: Internal.ModelData_): Internal.ChunkRenderTypeSet;
        /**
         * @deprecated
        */
        abstract getQuads(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.RandomSource_): Internal.List<Internal.BakedQuad>;
        applyTransform(arg0: Internal.ItemDisplayContext_, arg1: Internal.PoseStack_, arg2: boolean): this;
        abstract getOverrides(): Internal.ItemOverrides;
        useAmbientOcclusion(arg0: Internal.BlockState_): boolean;
        useAmbientOcclusion(arg0: Internal.BlockState_, arg1: Internal.RenderType_): boolean;
        getRenderTypes(arg0: Internal.ItemStack_, arg1: boolean): Internal.List<Internal.RenderType>;
        getQuads(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.RandomSource_, arg3: Internal.ModelData_, arg4: Internal.RenderType_): Internal.List<Internal.BakedQuad>;
        abstract useAmbientOcclusion(): boolean;
        abstract isGui3d(): boolean;
        abstract usesBlockLight(): boolean;
        /**
         * @deprecated
        */
        abstract getParticleIcon(): Internal.TextureAtlasSprite;
        getParticleIcon(arg0: Internal.ModelData_): Internal.TextureAtlasSprite;
        /**
         * @deprecated
        */
        getTransforms(): Internal.ItemTransforms;
        get customRenderer(): boolean
        get overrides(): Internal.ItemOverrides
        get gui3d(): boolean
        /**
         * @deprecated
        */
        get particleIcon(): Internal.TextureAtlasSprite
        /**
         * @deprecated
        */
        get transforms(): Internal.ItemTransforms
    }
    type BakedModel_ = BakedModel;
    class IModFile$Type extends Internal.Enum<Internal.IModFile$Type> {
        static valueOf(arg0: string): Internal.IModFile$Type;
        static values(): Internal.IModFile$Type[];
        static readonly LIBRARY: Internal.IModFile$Type;
        static readonly GAMELIBRARY: Internal.IModFile$Type;
        static readonly LANGPROVIDER: Internal.IModFile$Type;
        static readonly MOD: Internal.IModFile$Type;
    }
    type IModFile$Type_ = "mod" | "gamelibrary" | "langprovider" | "library" | IModFile$Type;
    class ScreenAxis extends Internal.Enum<Internal.ScreenAxis> {
        static valueOf(arg0: string): Internal.ScreenAxis;
        getNegative(): Internal.ScreenDirection;
        static values(): Internal.ScreenAxis[];
        orthogonal(): this;
        getDirection(arg0: boolean): Internal.ScreenDirection;
        getPositive(): Internal.ScreenDirection;
        get negative(): Internal.ScreenDirection
        get positive(): Internal.ScreenDirection
        static readonly VERTICAL: Internal.ScreenAxis;
        static readonly HORIZONTAL: Internal.ScreenAxis;
    }
    type ScreenAxis_ = ScreenAxis | "vertical" | "horizontal";
    class VineBlock extends Internal.Block implements Internal.IForgeShearable {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
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
        static getPropertyForFace(arg0: Internal.Direction_): Internal.BooleanProperty;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
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
        static isAcceptableNeighbour(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly NORTH: Internal.BooleanProperty;
        static readonly PROPERTY_BY_DIRECTION: {[key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty};
        static readonly UP: Internal.BooleanProperty;
        static readonly SOUTH: Internal.BooleanProperty;
        static readonly WEST: Internal.BooleanProperty;
        static readonly EAST: Internal.BooleanProperty;
    }
    type VineBlock_ = VineBlock;
    class ParticleTypeBuilder extends Internal.BuilderBase<Internal.ParticleType<any>> {
        constructor(i: ResourceLocation_)
        deserializer(d: Internal.ParticleOptions$Deserializer_<any>): this;
        createObject(): any;
        overrideLimiter(o: boolean): this;
    }
    type ParticleTypeBuilder_ = ParticleTypeBuilder;
    interface PacketListener {
        abstract isAcceptingMessages(): boolean;
        abstract onDisconnect(arg0: Internal.Component_): void;
        shouldPropagateHandlingExceptions(): boolean;
        get acceptingMessages(): boolean
    }
    type PacketListener_ = PacketListener;
    class LootParams {
        constructor(arg0: Internal.ServerLevel_, arg1: Internal.Map_<Internal.LootContextParam<any>, any>, arg2: Internal.Map_<ResourceLocation, Internal.LootParams$DynamicDrop>, arg3: number)
        getParamOrNull<T>(arg0: Internal.LootContextParam_<T>): T;
        getLuck(): number;
        getOptionalParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        getLevel(): Internal.ServerLevel;
        getParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        hasParam(arg0: Internal.LootContextParam_<any>): boolean;
        addDynamicDrops(arg0: ResourceLocation_, arg1: Internal.Consumer_<Internal.ItemStack>): void;
        get luck(): number
        get level(): Internal.ServerLevel
    }
    type LootParams_ = LootParams;
    class DefaultEventLoopGroup extends Internal.MultithreadEventLoopGroup {
        constructor()
        constructor(arg0: any_)
        constructor(arg0: number, arg1: Internal.Executor_)
        constructor(arg0: number)
        constructor(arg0: number, arg1: any_)
        abstract schedule<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        abstract submit<T>(arg0: Internal.Runnable_, arg1: T): io.netty.util.concurrent.Future<T>;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        abstract submit<T>(arg0: Internal.Callable_<T>): io.netty.util.concurrent.Future<T>;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
    }
    type DefaultEventLoopGroup_ = DefaultEventLoopGroup;
    interface Byte2CharFunction extends Internal.IntUnaryOperator, it.unimi.dsi.fastutil.Function<number, string> {
        getOrDefault(arg0: number, arg1: string): string;
        abstract get(arg0: number): string;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2CharFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Byte2LongFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2CharFunction;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Byte2FloatFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Byte2ByteFunction;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        defaultReturnValue(arg0: string): void;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        containsKey(arg0: number): boolean;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Byte2IntFunction;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2CharFunction;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        remove(arg0: number): string;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2CharFunction;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2CharFunction;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2CharFunction<T>;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2CharFunction;
        clear(): void;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        apply(arg0: number): string;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2CharFunction;
        put(arg0: number, arg1: string): string;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Byte2ShortFunction;
        (arg0: number): string;
    }
    type Byte2CharFunction_ = Byte2CharFunction;
    class Llama$Variant extends Internal.Enum<Internal.Llama$Variant> implements Internal.StringRepresentable {
        static values(): Internal.Llama$Variant[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static byId(arg0: number): Internal.Llama$Variant;
        static valueOf(arg0: string): Internal.Llama$Variant;
        getId(): number;
        get serializedName(): string
        get id(): number
        static readonly GRAY: Internal.Llama$Variant;
        static readonly BROWN: Internal.Llama$Variant;
        static readonly CREAMY: Internal.Llama$Variant;
        static readonly WHITE: Internal.Llama$Variant;
        static readonly CODEC: Internal.Codec<Internal.Llama$Variant>;
    }
    type Llama$Variant_ = Llama$Variant | "white" | "brown" | "gray" | "creamy";
    class PeculiarBellBlock extends Internal.AbstractBellBlock<Internal.PeculiarBellBlockEntity> {
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
        getBlockEntityClass(): typeof Internal.PeculiarBellBlockEntity;
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
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.PeculiarBellBlockEntity>;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        spawnConversionParticles(arg0: Internal.LevelAccessor_, arg1: BlockPos_): void;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.PeculiarBellBlockEntity>;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.PeculiarBellBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.PeculiarBellBlockEntity>): void;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PeculiarBellBlockEntity;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockEntityClass(): typeof Internal.PeculiarBellBlockEntity
        get blockEntityType(): Internal.BlockEntityType<Internal.PeculiarBellBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type PeculiarBellBlock_ = PeculiarBellBlock;
    class LootrTrappedChestBlock extends Internal.ChestBlock {
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
    }
    type LootrTrappedChestBlock_ = LootrTrappedChestBlock;
    class Guardian extends Internal.Monster {
        constructor(arg0: Internal.EntityType_<Internal.Guardian>, arg1: Internal.Level_)
        getActiveAttackTarget(): Internal.LivingEntity;
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
        isMoving(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        getTailAnimation(arg0: number): number;
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
        getClientSideAttackTime(): number;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getAttackAnimationScale(arg0: number): number;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        hasActiveAttackTarget(): boolean;
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
        getAttackDuration(): number;
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
        getSpikesAnimation(arg0: number): number;
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
        static checkGuardianSpawnRules(arg0: Internal.EntityType_<Internal.Guardian>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        get activeAttackTarget(): Internal.LivingEntity
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        get moving(): boolean
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
        get clientSideAttackTime(): number
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
        get attackDuration(): number
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
    type Guardian_ = Guardian;
    class ItemFrameItem extends Internal.HangingEntityItem {
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
    type ItemFrameItem_ = ItemFrameItem;
    class SoundInstance$Attenuation extends Internal.Enum<Internal.SoundInstance$Attenuation> {
        static values(): Internal.SoundInstance$Attenuation[];
        static valueOf(arg0: string): Internal.SoundInstance$Attenuation;
        static readonly LINEAR: Internal.SoundInstance$Attenuation;
        static readonly NONE: Internal.SoundInstance$Attenuation;
    }
    type SoundInstance$Attenuation_ = "linear" | SoundInstance$Attenuation | "none";
    class FakeTrackBlock extends Internal.Block implements Internal.ProperWaterloggedBlock, Internal.EntityBlock {
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
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        static keepAlive(arg0: Internal.LevelAccessor_, arg1: BlockPos_): void;
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
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
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
    type FakeTrackBlock_ = FakeTrackBlock;
    class EquipmentSlot extends Internal.Enum<Internal.EquipmentSlot> {
        static values(): Internal.EquipmentSlot[];
        getType(): Internal.EquipmentSlot$Type;
        getFilterFlag(): number;
        static byName(arg0: string): Internal.EquipmentSlot;
        getName(): string;
        static valueOf(arg0: string): Internal.EquipmentSlot;
        getIndex(arg0: number): number;
        static byTypeAndIndex(arg0: Internal.EquipmentSlot$Type_, arg1: number): Internal.EquipmentSlot;
        getIndex(): number;
        isArmor(): boolean;
        get type(): Internal.EquipmentSlot$Type
        get filterFlag(): number
        get name(): string
        get index(): number
        get armor(): boolean
        static readonly HEAD: Internal.EquipmentSlot;
        static readonly FEET: Internal.EquipmentSlot;
        static readonly LEGS: Internal.EquipmentSlot;
        static readonly OFFHAND: Internal.EquipmentSlot;
        static readonly MAINHAND: Internal.EquipmentSlot;
        static readonly CHEST: Internal.EquipmentSlot;
    }
    type EquipmentSlot_ = "feet" | EquipmentSlot | "mainhand" | "offhand" | "head" | "legs" | "chest";
    class Brain <E extends Internal.LivingEntity> implements Internal.BrainAccessor<any> {
        constructor(arg0: Internal.Collection_<Internal.MemoryModuleType<any>>, arg1: Internal.Collection_<Internal.SensorType<Internal.Sensor<E>>>, arg2: Internal.ImmutableList_<any>, arg3: Internal.Supplier_<Internal.Codec<Internal.Brain<E>>>)
        serializeStart<T>(arg0: Internal.DynamicOps_<T>): Internal.DataResult<T>;
        eraseMemory<U>(arg0: Internal.MemoryModuleType_<U>): void;
        setCoreActivities(arg0: Internal.Set_<Internal.Activity>): void;
        getAvailableBehaviorsByPriority(): Internal.Map<any, any>;
        setMemory<U>(arg0: Internal.MemoryModuleType_<U>, arg1: Internal.Optional_<U>): void;
        useDefaultActivity(): void;
        /**
         * @deprecated
        */
        getActiveActivities(): Internal.Set<Internal.Activity>;
        setDefaultActivity(arg0: Internal.Activity_): void;
        setActiveActivityIfPossible(arg0: Internal.Activity_): void;
        updateActivityFromSchedule(arg0: number, arg1: number): void;
        getSchedule(): Internal.Schedule;
        setSchedule(arg0: Internal.Schedule_): void;
        isMemoryValue<U>(arg0: Internal.MemoryModuleType_<U>, arg1: U): boolean;
        getTimeUntilExpiry<U>(arg0: Internal.MemoryModuleType_<U>): number;
        static codec<E extends Internal.LivingEntity>(arg0: Internal.Collection_<Internal.MemoryModuleType<any>>, arg1: Internal.Collection_<Internal.SensorType<Internal.Sensor<E>>>): Internal.Codec<Internal.Brain<E>>;
        /**
         * @deprecated
        */
        getMemories(): Internal.Map<Internal.MemoryModuleType<any>, Internal.Optional<Internal.ExpirableValue<any>>>;
        removeAllBehaviors(): void;
        getSensors(): Internal.Map<any, any>;
        setMemory<U>(arg0: Internal.MemoryModuleType_<U>, arg1: U): void;
        copyWithoutBehaviors(): this;
        addActivity(arg0: Internal.Activity_, arg1: number, arg2: Internal.ImmutableList_<Internal.BehaviorControl<E>>): void;
        getActiveNonCoreActivity(): Internal.Optional<Internal.Activity>;
        checkMemory(arg0: Internal.MemoryModuleType_<any>, arg1: Internal.MemoryStatus_): boolean;
        stopAll(arg0: Internal.ServerLevel_, arg1: E): void;
        static provider<E extends Internal.LivingEntity>(arg0: Internal.Collection_<Internal.MemoryModuleType<any>>, arg1: Internal.Collection_<Internal.SensorType<Internal.Sensor<E>>>): Internal.Brain$Provider<E>;
        getMemoryInternal<U>(arg0: Internal.MemoryModuleType_<U>): Internal.Optional<U>;
        setMemoryWithExpiry<U>(arg0: Internal.MemoryModuleType_<U>, arg1: U, arg2: number): void;
        addActivity(arg0: Internal.Activity_, arg1: Internal.ImmutableList_<com.mojang.datafixers.util.Pair<number, Internal.BehaviorControl<E>>>): void;
        hasMemoryValue(arg0: Internal.MemoryModuleType_<any>): boolean;
        isActive(arg0: Internal.Activity_): boolean;
        getMemory<U>(arg0: Internal.MemoryModuleType_<U>): Internal.Optional<U>;
        addActivityAndRemoveMemoryWhenStopped(arg0: Internal.Activity_, arg1: number, arg2: Internal.ImmutableList_<Internal.BehaviorControl<E>>, arg3: Internal.MemoryModuleType_<any>): void;
        addActivityWithConditions(arg0: Internal.Activity_, arg1: Internal.ImmutableList_<com.mojang.datafixers.util.Pair<number, Internal.BehaviorControl<E>>>, arg2: Internal.Set_<com.mojang.datafixers.util.Pair<Internal.MemoryModuleType<any>, Internal.MemoryStatus>>): void;
        clearMemories(): void;
        setActiveActivityToFirstValid(arg0: Internal.List_<Internal.Activity>): void;
        tick(arg0: Internal.ServerLevel_, arg1: E): void;
        /**
         * @deprecated
        */
        getRunningBehaviors(): Internal.List<Internal.BehaviorControl<E>>;
        addActivityAndRemoveMemoriesWhenStopped(arg0: Internal.Activity_, arg1: Internal.ImmutableList_<com.mojang.datafixers.util.Pair<number, Internal.BehaviorControl<E>>>, arg2: Internal.Set_<com.mojang.datafixers.util.Pair<Internal.MemoryModuleType<any>, Internal.MemoryStatus>>, arg3: Internal.Set_<Internal.MemoryModuleType<any>>): void;
        set coreActivities(arg0: Internal.Set_<Internal.Activity>)
        get availableBehaviorsByPriority(): Internal.Map<any, any>
        /**
         * @deprecated
        */
        get activeActivities(): Internal.Set<Internal.Activity>
        set defaultActivity(arg0: Internal.Activity_)
        set activeActivityIfPossible(arg0: Internal.Activity_)
        get schedule(): Internal.Schedule
        set schedule(arg0: Internal.Schedule_)
        /**
         * @deprecated
        */
        get memories(): Internal.Map<Internal.MemoryModuleType<any>, Internal.Optional<Internal.ExpirableValue<any>>>
        get sensors(): Internal.Map<any, any>
        get activeNonCoreActivity(): Internal.Optional<Internal.Activity>
        set activeActivityToFirstValid(arg0: Internal.List_<Internal.Activity>)
        /**
         * @deprecated
        */
        get runningBehaviors(): Internal.List<Internal.BehaviorControl<E>>
    }
    type Brain_<E extends Internal.LivingEntity> = Brain<E>;
    class SequencerInstructions extends Internal.Enum<Internal.SequencerInstructions> {
        static values(): Internal.SequencerInstructions[];
        static valueOf(arg0: string): Internal.SequencerInstructions;
        needsPropagation(): boolean;
        static readonly TURN_ANGLE: Internal.SequencerInstructions;
        static readonly TURN_DISTANCE: Internal.SequencerInstructions;
        static readonly AWAIT: Internal.SequencerInstructions;
        static readonly END: Internal.SequencerInstructions;
        static readonly DELAY: Internal.SequencerInstructions;
    }
    type SequencerInstructions_ = "turn_angle" | "end" | "await" | "delay" | "turn_distance" | SequencerInstructions;
    class LevelStem extends Internal.Record {
        constructor(arg0: Internal.Holder_<Internal.DimensionType>, arg1: Internal.ChunkGenerator_)
        generator(): Internal.ChunkGenerator;
        type(): Internal.Holder<Internal.DimensionType>;
        static readonly OVERWORLD: Internal.ResourceKey<Internal.LevelStem>;
        static readonly END: Internal.ResourceKey<Internal.LevelStem>;
        static readonly CODEC: Internal.Codec<Internal.LevelStem>;
        static readonly NETHER: Internal.ResourceKey<Internal.LevelStem>;
    }
    type LevelStem_ = Special.Dimension | LevelStem;
    class ListTag extends Internal.CollectionTag<Internal.Tag> {
        constructor()
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        getDouble(arg0: number): number;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        get(arg0: number): Internal.Tag;
        set(arg0: number, arg1: Internal.Tag_): Internal.Tag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        getCompound(arg0: number): Internal.CompoundTag;
        copy(): this;
        getShort(arg0: number): number;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        getFloat(arg0: number): number;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        getIntArray(arg0: number): number[];
        getLongArray(arg0: number): number[];
        getList(arg0: number): this;
        getInt(arg0: number): number;
        sort(arg0: Internal.Comparator_<Internal.Tag>): void;
        stream(): Internal.Stream<Internal.Tag>;
        getString(arg0: number): string;
        spliterator(): Internal.Spliterator<Internal.Tag>;
        replaceAll(arg0: Internal.UnaryOperator_<Internal.Tag>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        getType(): Internal.TagType<Internal.ListTag>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        forEach(arg0: Internal.Consumer_<Internal.Tag>): void;
        abstract toArray<T>(arg0: T[]): T[];
        remove(arg0: number): Internal.Tag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        parallelStream(): Internal.Stream<Internal.Tag>;
        getAsString(): string;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        removeIf(arg0: Internal.Predicate_<Internal.Tag>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        get type(): Internal.TagType<Internal.ListTag>
        get asString(): string
        static readonly TYPE: Internal.TagType<Internal.ListTag>;
    }
    type ListTag_ = ListTag;
    class ChunkGeneratorStructureState {
        static createForNormal(arg0: Internal.RandomState_, arg1: number, arg2: Internal.BiomeSource_, arg3: Internal.HolderLookup_<Internal.StructureSet>): Internal.ChunkGeneratorStructureState;
        getPlacementsForStructure(arg0: Internal.Holder_<Internal.Structure>): Internal.List<Internal.StructurePlacement>;
        ensureStructuresGenerated(): void;
        static createForFlat(arg0: Internal.RandomState_, arg1: number, arg2: Internal.BiomeSource_, arg3: Internal.Stream_<Internal.Holder<Internal.StructureSet>>): Internal.ChunkGeneratorStructureState;
        getLevelSeed(): number;
        hasStructureChunkInRange(arg0: Internal.Holder_<Internal.StructureSet>, arg1: number, arg2: number, arg3: number): boolean;
        getRingPositionsFor(arg0: Internal.ConcentricRingsStructurePlacement_): Internal.List<Internal.ChunkPos>;
        randomState(): Internal.RandomState;
        possibleStructureSets(): Internal.List<Internal.Holder<Internal.StructureSet>>;
        get levelSeed(): number
    }
    type ChunkGeneratorStructureState_ = ChunkGeneratorStructureState;
    class GlowSquid extends Internal.Squid {
        constructor(arg0: Internal.EntityType_<Internal.GlowSquid>, arg1: Internal.Level_)
        static checkGlowSquideSpawnRules(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
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
        getDarkTicksRemaining(): number;
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
        get darkTicksRemaining(): number
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
    type GlowSquid_ = GlowSquid;
    class TrappedChestBlock extends Internal.ChestBlock {
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
    type TrappedChestBlock_ = TrappedChestBlock;
    class AndesiteFunnelBlock extends Internal.FunnelBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.FunnelBlockEntity>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
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
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.FunnelBlockEntity>;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type AndesiteFunnelBlock_ = AndesiteFunnelBlock;
    class URL implements Internal.Serializable {
        constructor(arg0: Internal.URL_, arg1: string, arg2: Internal.URLStreamHandler_)
        constructor(arg0: Internal.URL_, arg1: string)
        constructor(arg0: string, arg1: string, arg2: string)
        constructor(arg0: string, arg1: string, arg2: number, arg3: string)
        constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: Internal.URLStreamHandler_)
        constructor(arg0: string)
        getContent(): any;
        getQuery(): string;
        sameFile(arg0: Internal.URL_): boolean;
        openConnection(): Internal.URLConnection;
        openConnection(arg0: Internal.Proxy_): Internal.URLConnection;
        getPort(): number;
        getFile(): string;
        getAuthority(): string;
        getUserInfo(): string;
        getRef(): string;
        getProtocol(): string;
        toExternalForm(): string;
        openStream(): Internal.InputStream;
        static setURLStreamHandlerFactory(arg0: Internal.URLStreamHandlerFactory_): void;
        toURI(): Internal.URI;
        getContent(arg0: typeof any[]): any;
        getPath(): string;
        getHost(): string;
        getDefaultPort(): number;
        get content(): any
        get query(): string
        get port(): number
        get file(): string
        get authority(): string
        get userInfo(): string
        get ref(): string
        get protocol(): string
        set URLStreamHandlerFactory(arg0: Internal.URLStreamHandlerFactory_)
        get path(): string
        get host(): string
        get defaultPort(): number
    }
    type URL_ = URL;
    interface ObjectOutput extends Internal.DataOutput, Internal.AutoCloseable {
        abstract writeBoolean(arg0: boolean): void;
        abstract writeUTF(arg0: string): void;
        abstract writeLong(arg0: number): void;
        abstract writeChars(arg0: string): void;
        abstract write(arg0: number[]): void;
        abstract writeChar(arg0: number): void;
        abstract writeFloat(arg0: number): void;
        abstract flush(): void;
        abstract write(arg0: number): void;
        abstract writeInt(arg0: number): void;
        abstract writeBytes(arg0: string): void;
        abstract writeObject(arg0: any): void;
        abstract writeByte(arg0: number): void;
        abstract close(): void;
        abstract write(arg0: number[], arg1: number, arg2: number): void;
        abstract writeDouble(arg0: number): void;
        abstract writeShort(arg0: number): void;
    }
    type ObjectOutput_ = ObjectOutput;
    interface MatchResult {
        abstract start(): number;
        abstract end(): number;
        abstract groupCount(): number;
        abstract group(): string;
        abstract end(arg0: number): number;
        abstract group(arg0: number): string;
        abstract start(arg0: number): number;
    }
    type MatchResult_ = MatchResult;
    class Score {
        constructor(arg0: Internal.Scoreboard_, arg1: Internal.Objective_, arg2: string)
        isLocked(): boolean;
        getOwner(): string;
        setScore(arg0: number): void;
        getObjective(): Internal.Objective;
        getScore(): number;
        add(arg0: number): void;
        increment(): void;
        setLocked(arg0: boolean): void;
        reset(): void;
        getScoreboard(): Internal.Scoreboard;
        get locked(): boolean
        get owner(): string
        set score(arg0: number)
        get objective(): Internal.Objective
        get score(): number
        set locked(arg0: boolean)
        get scoreboard(): Internal.Scoreboard
        static readonly SCORE_COMPARATOR: Internal.Comparator<Internal.Score>;
    }
    type Score_ = Score;
    interface ClassShutter {
        abstract visibleToScripts(arg0: string, arg1: number): boolean;
        (arg0: string, arg1: number): boolean;
        readonly TYPE_EXCEPTION: 3;
        readonly TYPE_CLASS_IN_PACKAGE: 2;
        readonly TYPE_UNKNOWN: 0;
        readonly TYPE_MEMBER: 1;
    }
    type ClassShutter_ = ClassShutter;
    class AnyOfPredicate extends Internal.CombiningPredicate {
        constructor(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>)
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static readonly CODEC: Internal.Codec<Internal.AnyOfPredicate>;
    }
    type AnyOfPredicate_ = AnyOfPredicate;
    class HayBlock extends Internal.RotatedPillarBlock {
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
    type HayBlock_ = HayBlock;
    abstract class Enum <E extends Internal.Enum<E>> implements Internal.Constable, Internal.Serializable, Internal.Comparable<E> {
        name(): string;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<E>>;
        compareTo(arg0: E): number;
        getDeclaringClass(): E;
        ordinal(): number;
        compareTo(arg0: any): number;
        get declaringClass(): E
    }
    type Enum_<E extends Internal.Enum<E>> = Enum<E>;
    class DyeableArmorItem extends Internal.ArmorItem implements Internal.DyeableLeatherItem {
        constructor(arg0: Internal.ArmorMaterial_, arg1: Internal.ArmorItem$Type_, arg2: Internal.Item$Properties_)
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
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        getDamage(arg0: Internal.ItemStack_): number;
        getColor(arg0: Internal.ItemStack_): number;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
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
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
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
    type DyeableArmorItem_ = DyeableArmorItem;
    class BambooFeature extends Internal.Feature<Internal.ProbabilityFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.ProbabilityFeatureConfiguration>)
    }
    type BambooFeature_ = BambooFeature;
    interface PathMatcher {
        abstract matches(arg0: Internal.Path_): boolean;
        (arg0: Internal.Path): boolean;
    }
    type PathMatcher_ = PathMatcher;
    class NoiseGeneratorSettings extends Internal.Record {
        constructor(arg0: Internal.NoiseSettings_, arg1: Internal.BlockState_, arg2: Internal.BlockState_, arg3: Internal.NoiseRouter_, arg4: Internal.SurfaceRules$RuleSource_, arg5: Internal.List_<Internal.Climate$ParameterPoint>, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean)
        static bootstrap(arg0: Internal.BootstapContext_<Internal.NoiseGeneratorSettings>): void;
        defaultBlock(): Internal.BlockState;
        /**
         * @deprecated
        */
        disableMobGeneration(): boolean;
        static floatingIslands(arg0: Internal.BootstapContext_<any>): Internal.NoiseGeneratorSettings;
        static dummy(): Internal.NoiseGeneratorSettings;
        aquifersEnabled(): boolean;
        static end(arg0: Internal.BootstapContext_<any>): Internal.NoiseGeneratorSettings;
        getRandomSource(): Internal.WorldgenRandom$Algorithm;
        surfaceRule(): Internal.SurfaceRules$RuleSource;
        static overworld(arg0: Internal.BootstapContext_<any>, arg1: boolean, arg2: boolean): Internal.NoiseGeneratorSettings;
        isAquifersEnabled(): boolean;
        oreVeinsEnabled(): boolean;
        static caves(arg0: Internal.BootstapContext_<any>): Internal.NoiseGeneratorSettings;
        defaultFluid(): Internal.BlockState;
        static m_64474_(arg0: Internal.RecordCodecBuilder$Instance_<any>): Internal.App<any, any>;
        spawnTarget(): Internal.List<Internal.Climate$ParameterPoint>;
        seaLevel(): number;
        noiseSettings(): Internal.NoiseSettings;
        static nether(arg0: Internal.BootstapContext_<any>): Internal.NoiseGeneratorSettings;
        useLegacyRandomSource(): boolean;
        noiseRouter(): Internal.NoiseRouter;
        get randomSource(): Internal.WorldgenRandom$Algorithm
        get aquifersEnabled(): boolean
        static readonly OVERWORLD: Internal.ResourceKey<Internal.NoiseGeneratorSettings>;
        static readonly END: Internal.ResourceKey<Internal.NoiseGeneratorSettings>;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.NoiseGeneratorSettings>;
        static readonly NETHER: Internal.ResourceKey<Internal.NoiseGeneratorSettings>;
        static readonly CAVES: Internal.ResourceKey<Internal.NoiseGeneratorSettings>;
        static readonly FLOATING_ISLANDS: Internal.ResourceKey<Internal.NoiseGeneratorSettings>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.NoiseGeneratorSettings>>;
        static readonly LARGE_BIOMES: Internal.ResourceKey<Internal.NoiseGeneratorSettings>;
        static readonly AMPLIFIED: Internal.ResourceKey<Internal.NoiseGeneratorSettings>;
    }
    type NoiseGeneratorSettings_ = Special.NoiseSettings | NoiseGeneratorSettings;
    interface BitStorage {
        abstract getAndSet(arg0: number, arg1: number): number;
        abstract getAll(arg0: Internal.IntConsumer_): void;
        abstract getSize(): number;
        abstract copy(): this;
        abstract get(arg0: number): number;
        abstract set(arg0: number, arg1: number): void;
        abstract getBits(): number;
        abstract unpack(arg0: number[]): void;
        abstract getRaw(): number[];
        get size(): number
        get bits(): number
        get raw(): number[]
    }
    type BitStorage_ = BitStorage;
    class IdMappingEvent$IdRemapping extends Internal.Record {
        constructor(currId: number, newId: number)
        currId(): number;
        newId(): number;
    }
    type IdMappingEvent$IdRemapping_ = IdMappingEvent$IdRemapping;
    class URI implements Internal.Comparable<Internal.URI>, Internal.Serializable {
        constructor(arg0: string, arg1: string, arg2: string)
        constructor(arg0: string, arg1: string, arg2: string, arg3: string)
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string)
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: string)
        constructor(arg0: string)
        getQuery(): string;
        toURL(): Internal.URL;
        relativize(arg0: Internal.URI_): this;
        getPort(): number;
        compareTo(arg0: any): number;
        getRawUserInfo(): string;
        toASCIIString(): string;
        isOpaque(): boolean;
        getRawSchemeSpecificPart(): string;
        static create(arg0: string): Internal.URI;
        resolve(arg0: string): this;
        resolve(arg0: Internal.URI_): this;
        getPath(): string;
        getScheme(): string;
        compareTo(arg0: Internal.URI_): number;
        normalize(): this;
        getRawQuery(): string;
        getAuthority(): string;
        getUserInfo(): string;
        getSchemeSpecificPart(): string;
        parseServerAuthority(): this;
        getRawPath(): string;
        getFragment(): string;
        isAbsolute(): boolean;
        getRawFragment(): string;
        getHost(): string;
        getRawAuthority(): string;
        get query(): string
        get port(): number
        get rawUserInfo(): string
        get opaque(): boolean
        get rawSchemeSpecificPart(): string
        get path(): string
        get scheme(): string
        get rawQuery(): string
        get authority(): string
        get userInfo(): string
        get schemeSpecificPart(): string
        get rawPath(): string
        get fragment(): string
        get absolute(): boolean
        get rawFragment(): string
        get host(): string
        get rawAuthority(): string
    }
    type URI_ = URI;
    class FancyBedBlock extends Internal.BedBlock {
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
        static getShape(block: Internal.Block_, direction: Internal.Direction_, level: Internal.BlockGetter_, pos: BlockPos_): Internal.DirectionalBlockProperty;
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
        static readonly PART: Internal.EnumProperty<Internal.BedPart>;
        static readonly OCCUPIED: Internal.BooleanProperty;
        static readonly VOXEL_SHAPE: Internal.ArrayVoxelShape;
        static readonly COLOR: Internal.EnumProperty<Internal.ColorProperty>;
        static readonly SHAPE: Internal.EnumProperty<Internal.DirectionalBlockProperty>;
    }
    type FancyBedBlock_ = FancyBedBlock;
    interface Display$TextDisplay$LineSplitter {
        abstract split(arg0: Internal.Component_, arg1: number): Internal.Display$TextDisplay$CachedInfo;
        (arg0: Internal.Component, arg1: number): Internal.Display$TextDisplay$CachedInfo_;
    }
    type Display$TextDisplay$LineSplitter_ = Display$TextDisplay$LineSplitter;
    class AnimationMetadataSectionSerializer implements Internal.MetadataSectionSerializer<Internal.AnimationMetadataSection> {
        constructor()
        getMetadataSectionName(): string;
        fromJson(arg0: Internal.JsonObject_): any;
        get metadataSectionName(): string
    }
    type AnimationMetadataSectionSerializer_ = AnimationMetadataSectionSerializer;
    abstract class NoiseBasedStateProvider extends Internal.BlockStateProvider {
    }
    type NoiseBasedStateProvider_ = NoiseBasedStateProvider;
    interface Functor$Mu extends Internal.Kind1$Mu {
    }
    type Functor$Mu_ = Functor$Mu;
    abstract class AbstractByteBuf extends Internal.ByteBuf {
        touch(arg0: any): Internal.ReferenceCounted;
        retain(): Internal.ReferenceCounted;
        retain(arg0: number): Internal.ReferenceCounted;
    }
    type AbstractByteBuf_ = AbstractByteBuf;
    class ModelBlockRenderer {
        constructor(arg0: Internal.BlockColors_)
        /**
         * @deprecated
        */
        tesselateWithAO(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number): void;
        renderModel(arg0: Internal.PoseStack$Pose_, arg1: Internal.VertexConsumer_, arg2: Internal.BlockState_, arg3: Internal.BakedModel_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.ModelData_, arg10: Internal.RenderType_): void;
        /**
         * @deprecated
        */
        renderModel(arg0: Internal.PoseStack$Pose_, arg1: Internal.VertexConsumer_, arg2: Internal.BlockState_, arg3: Internal.BakedModel_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        static enableCaching(): void;
        tesselateWithAO(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number, arg10: Internal.ModelData_, arg11: Internal.RenderType_): void;
        static clearCache(): void;
        /**
         * @deprecated
        */
        tesselateBlock(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number): void;
        /**
         * @deprecated
        */
        tesselateWithoutAO(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number): void;
        tesselateBlock(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number, arg10: Internal.ModelData_, arg11: Internal.RenderType_): void;
        tesselateWithoutAO(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number, arg10: Internal.ModelData_, arg11: Internal.RenderType_): void;
    }
    type ModelBlockRenderer_ = ModelBlockRenderer;
    class FancyFoliagePlacer extends Internal.BlobFoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_, arg2: number)
        static readonly CODEC: Internal.Codec<Internal.FancyFoliagePlacer>;
    }
    type FancyFoliagePlacer_ = FancyFoliagePlacer;
}
declare namespace mezz.jei.api.recipe {
    class RecipeType <T> {
        constructor(arg0: ResourceLocation_, arg1: T)
        static create<T>(arg0: string, arg1: string, arg2: T): mezz.jei.api.recipe.RecipeType<T>;
        getRecipeClass(): T;
        getUid(): ResourceLocation;
        get recipeClass(): T
        get uid(): ResourceLocation
    }
    type RecipeType_<T> = RecipeType<T>;
}
declare namespace org.objectweb.asm {
    class Type {
        getOpcode(arg0: number): number;
        getClassName(): string;
        getSort(): number;
        getDescriptor(): string;
        static getDescriptor(arg0: typeof any): string;
        getSize(): number;
        static getConstructorDescriptor(arg0: Internal.Constructor_<any>): string;
        getDimensions(): number;
        static getType(arg0: Internal.Constructor_<any>): org.objectweb.asm.Type;
        static getType(arg0: typeof any): org.objectweb.asm.Type;
        static getInternalName(arg0: typeof any): string;
        getElementType(): this;
        static getMethodType(arg0: org.objectweb.asm.Type_, ...arg1: org.objectweb.asm.Type_[]): org.objectweb.asm.Type;
        static getMethodDescriptor(arg0: org.objectweb.asm.Type_, ...arg1: org.objectweb.asm.Type_[]): string;
        static getReturnType(arg0: Internal.Method_): org.objectweb.asm.Type;
        getInternalName(): string;
        static getReturnType(arg0: string): org.objectweb.asm.Type;
        getArgumentTypes(): org.objectweb.asm.Type[];
        static getObjectType(arg0: string): org.objectweb.asm.Type;
        static getMethodType(arg0: string): org.objectweb.asm.Type;
        static getMethodDescriptor(arg0: Internal.Method_): string;
        getArgumentsAndReturnSizes(): number;
        static getType(arg0: Internal.Method_): org.objectweb.asm.Type;
        static getArgumentTypes(arg0: string): org.objectweb.asm.Type[];
        getReturnType(): this;
        static getType(arg0: string): org.objectweb.asm.Type;
        static getArgumentsAndReturnSizes(arg0: string): number;
        static getArgumentTypes(arg0: Internal.Method_): org.objectweb.asm.Type[];
        get className(): string
        get sort(): number
        get descriptor(): string
        get size(): number
        get dimensions(): number
        get elementType(): org.objectweb.asm.Type
        get internalName(): string
        get argumentTypes(): org.objectweb.asm.Type[]
        get argumentsAndReturnSizes(): number
        get returnType(): org.objectweb.asm.Type
        static readonly ARRAY: 9;
        static readonly VOID_TYPE: org.objectweb.asm.Type;
        static readonly INT: 5;
        static readonly LONG: 7;
        static readonly SHORT_TYPE: org.objectweb.asm.Type;
        static readonly INT_TYPE: org.objectweb.asm.Type;
        static readonly CHAR: 2;
        static readonly BYTE: 3;
        static readonly CHAR_TYPE: org.objectweb.asm.Type;
        static readonly SHORT: 4;
        static readonly METHOD: 11;
        static readonly OBJECT: 10;
        static readonly BYTE_TYPE: org.objectweb.asm.Type;
        static readonly LONG_TYPE: org.objectweb.asm.Type;
        static readonly VOID: 0;
        static readonly FLOAT: 6;
        static readonly DOUBLE: 8;
        static readonly FLOAT_TYPE: org.objectweb.asm.Type;
        static readonly DOUBLE_TYPE: org.objectweb.asm.Type;
        static readonly BOOLEAN_TYPE: org.objectweb.asm.Type;
        static readonly BOOLEAN: 1;
    }
    type Type_ = Type;
}
declare namespace vectorwing.farmersdelight.common.mixin.accessor {
    interface RecipeManagerAccessor {
        abstract getRecipeMap<C extends Internal.Container, T extends Internal.Recipe<C>>(arg0: Internal.RecipeType_<T>): Internal.Map<ResourceLocation, Internal.Recipe<C>>;
        (arg0: Internal.RecipeType<T>): Internal.Map_<ResourceLocation, Internal.Recipe<C>>;
    }
    type RecipeManagerAccessor_ = RecipeManagerAccessor;
}
