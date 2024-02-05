/// <reference path="./internal_*.d.ts" />
declare namespace net.minecraft.util {
    class Unit extends Internal.Enum<net.minecraft.util.Unit> {
        static values(): net.minecraft.util.Unit[];
        static valueOf(arg0: string): net.minecraft.util.Unit;
        static readonly INSTANCE: net.minecraft.util.Unit;
    }
    type Unit_ = "instance" | Unit;
}
declare namespace Internal {
    class SlabBlockBuilder extends Internal.ShapedBlockBuilder {
        constructor(i: ResourceLocation_)
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        createObject(): any;
    }
    type SlabBlockBuilder_ = SlabBlockBuilder;
    abstract class AbstractChuteBlock extends Internal.Block implements Internal.IWrenchable, Internal.IBE<Internal.ChuteBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ChuteBlockEntity;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        abstract updateChuteState(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.BlockGetter_, arg3: BlockPos_): Internal.BlockState;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.ChuteBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        static getChuteFacing(arg0: Internal.BlockState_): Internal.Direction;
        static isChute(arg0: Internal.BlockState_): boolean;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getBlockEntityClass(): typeof Internal.ChuteBlockEntity;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.ChuteBlockEntity>): void;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        static isOpenChute(arg0: Internal.BlockState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.ChuteBlockEntity>;
        isTransparent(arg0: Internal.BlockState_): boolean;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        isOpen(arg0: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isTransparentChute(arg0: Internal.BlockState_): boolean;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
        abstract getBlockEntityType(): Internal.BlockEntityType<Internal.ChuteBlockEntity>;
        getFacing(arg0: Internal.BlockState_): Internal.Direction;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        get blockEntityClass(): typeof Internal.ChuteBlockEntity
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityType(): Internal.BlockEntityType<Internal.ChuteBlockEntity>
    }
    type AbstractChuteBlock_ = AbstractChuteBlock;
    abstract class CoralFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type CoralFeature_ = CoralFeature;
    interface SpectatorMenuCategory {
        abstract getPrompt(): Internal.Component;
        abstract getItems(): Internal.List<Internal.SpectatorMenuItem>;
        get prompt(): Internal.Component
        get items(): Internal.List<Internal.SpectatorMenuItem>
    }
    type SpectatorMenuCategory_ = SpectatorMenuCategory;
    class SculkSpreader {
        constructor(arg0: boolean, arg1: Internal.TagKey_<Internal.Block>, arg2: number, arg3: number, arg4: number, arg5: number)
        static createWorldGenSpreader(): Internal.SculkSpreader;
        growthSpawnCost(): number;
        replaceableBlocks(): Internal.TagKey<Internal.Block>;
        chargeDecayRate(): number;
        additionalDecayRate(): number;
        updateCursors(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: boolean): void;
        getCursors(): Internal.List<Internal.SculkSpreader$ChargeCursor>;
        save(arg0: Internal.CompoundTag_): void;
        addCursors(arg0: BlockPos_, arg1: number): void;
        load(arg0: Internal.CompoundTag_): void;
        isWorldGeneration(): boolean;
        clear(): void;
        noGrowthRadius(): number;
        static createLevelSpreader(): Internal.SculkSpreader;
        get cursors(): Internal.List<Internal.SculkSpreader$ChargeCursor>
        get worldGeneration(): boolean
        static readonly MAX_GROWTH_RATE_RADIUS: 24;
        static readonly MAX_DECAY_FACTOR: 0.5;
        static readonly SHRIEKER_PLACEMENT_RATE: 11;
        static readonly MAX_CHARGE: 1000;
    }
    type SculkSpreader_ = SculkSpreader;
    class TwistingVinesConfig extends Internal.Record implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: number, arg2: number)
        spreadWidth(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        spreadHeight(): number;
        maxHeight(): number;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.TwistingVinesConfig>;
    }
    type TwistingVinesConfig_ = TwistingVinesConfig;
    abstract class FlowingFluid extends Internal.Fluid {
        constructor()
        tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        getSource(arg0: boolean): Internal.FluidState;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        abstract getFlowing(): Internal.Fluid;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        getFlowing(arg0: number, arg1: boolean): Internal.FluidState;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        abstract getSource(): Internal.Fluid;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        arch$registryName(): ResourceLocation;
        get flowing(): Internal.Fluid
        get source(): Internal.Fluid
        static readonly FALLING: Internal.BooleanProperty;
        static readonly LEVEL: Internal.IntegerProperty;
    }
    type FlowingFluid_ = FlowingFluid;
    class NetherWartBlock extends Internal.BushBlock {
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
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
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
        static readonly AGE: Internal.IntegerProperty;
        static readonly MAX_AGE: 3;
    }
    type NetherWartBlock_ = NetherWartBlock;
    interface Remapper {
        getMappedClass(from: typeof any): string;
        getUnmappedClass(from: string): string;
        getMappedField(from: typeof any, field: Internal.Field_): string;
        getTypeName(type: string): string;
        getMappedMethod(from: typeof any, method: Internal.Method_): string;
    }
    type Remapper_ = Remapper;
    class Climate$Sampler extends Internal.Record {
        constructor(arg0: Internal.DensityFunction_, arg1: Internal.DensityFunction_, arg2: Internal.DensityFunction_, arg3: Internal.DensityFunction_, arg4: Internal.DensityFunction_, arg5: Internal.DensityFunction_, arg6: Internal.List_<Internal.Climate$ParameterPoint>)
        spawnTarget(): Internal.List<Internal.Climate$ParameterPoint>;
        findSpawnPosition(): BlockPos;
        sample(arg0: number, arg1: number, arg2: number): Internal.Climate$TargetPoint;
        temperature(): Internal.DensityFunction;
        humidity(): Internal.DensityFunction;
        weirdness(): Internal.DensityFunction;
        continentalness(): Internal.DensityFunction;
        depth(): Internal.DensityFunction;
        erosion(): Internal.DensityFunction;
    }
    type Climate$Sampler_ = Climate$Sampler;
    class PackRepository {
        constructor(...arg0: Internal.RepositorySource_[])
        isAvailable(arg0: string): boolean;
        reload(): void;
        openAllSelected(): Internal.List<Internal.PackResources>;
        getSelectedPacks(): Internal.Collection<Internal.Pack>;
        getAvailableIds(): Internal.Collection<string>;
        addPackFinder(arg0: Internal.RepositorySource_): void;
        setSelected(arg0: Internal.Collection_<string>): void;
        removePack(arg0: string): boolean;
        getSelectedIds(): Internal.Collection<string>;
        getPack(arg0: string): Internal.Pack;
        addPack(arg0: string): boolean;
        getAvailablePacks(): Internal.Collection<Internal.Pack>;
        getRequestedFeatureFlags(): Internal.FeatureFlagSet;
        get selectedPacks(): Internal.Collection<Internal.Pack>
        get availableIds(): Internal.Collection<string>
        set selected(arg0: Internal.Collection_<string>)
        get selectedIds(): Internal.Collection<string>
        get availablePacks(): Internal.Collection<Internal.Pack>
        get requestedFeatureFlags(): Internal.FeatureFlagSet
        sources: Internal.Set<Internal.RepositorySource>;
    }
    type PackRepository_ = PackRepository;
    class CarriageContraptionEntity extends Internal.OrientedContraptionEntity {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        getCarriage(): Internal.Carriage;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        bindInstance(arg0: Internal.CarriageContraptionInstance_): void;
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
        getCarriageData(): Internal.CarriageSyncData;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        static create(arg0: Internal.Level_, arg1: Internal.CarriageContraption_): Internal.CarriageContraptionEntity;
        getServer(): Internal.MinecraftServer;
        getDisplayName(): Internal.Component;
        setMotionX(x: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        setCarriage(arg0: Internal.Carriage_): void;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getLevel(): Internal.Level;
        getFacing(): Internal.Direction;
        getScriptType(): Internal.ScriptType;
        hasSchedule(): boolean;
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
        setServerSidePrevPosition(): void;
        getMotionZ(): number;
        checkConductors(): Internal.Couple<boolean>;
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
        syncCarriage(): void;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        updateRenderedPortalCutoff(): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        isLocalCoordWithin(arg0: BlockPos_, arg1: number, arg2: number): boolean;
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        get peacefulCreature(): boolean
        get carriage(): Internal.Carriage
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
        get carriageData(): Internal.CarriageSyncData
        get server(): Internal.MinecraftServer
        get displayName(): Internal.Component
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        set carriage(arg0: Internal.Carriage_)
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
        sounds: Internal.CarriageSounds;
        movingBackwards: boolean;
        leftTickingChunks: boolean;
        trainId: Internal.UUID;
        validForRender: boolean;
        carriageIndex: number;
        firstPositionUpdate: boolean;
        particles: Internal.CarriageParticles;
    }
    type CarriageContraptionEntity_ = CarriageContraptionEntity;
    class IntOpenHashSet extends Internal.AbstractIntSet implements Internal.Cloneable, Internal.Hash, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.IntCollection_)
        constructor(arg0: Internal.Iterator_<any>)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: number[], arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.Iterator_<any>, arg1: number)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number[], arg1: number)
        constructor(arg0: Internal.IntCollection_, arg1: number)
        constructor(arg0: Internal.Collection_<number>)
        constructor(arg0: number[], arg1: number, arg2: number)
        constructor(arg0: Internal.Collection_<number>, arg1: number)
        constructor(arg0: Internal.IntIterator_)
        constructor(arg0: Internal.IntIterator_, arg1: number)
        static of(arg0: number, arg1: number, arg2: number): Internal.IntOpenHashSet;
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        trim(arg0: number): boolean;
        static toSetWithExpectedSize(arg0: Internal.IntStream_, arg1: number): Internal.IntOpenHashSet;
        static toSet(arg0: Internal.IntStream_): Internal.IntOpenHashSet;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        clone(): this;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        intParallelStream(): Internal.IntStream;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        intIterator(): Internal.IntIterator;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        trim(): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        abstract toArray<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        static of(): Internal.IntOpenHashSet;
        intSpliterator(): Internal.IntSpliterator;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        spliterator(): Internal.Spliterator<any>;
        static of(arg0: number): Internal.IntOpenHashSet;
        static of(...arg0: number[]): Internal.IntOpenHashSet;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static of(arg0: number, arg1: number): Internal.IntOpenHashSet;
    }
    type IntOpenHashSet_ = IntOpenHashSet;
    interface ProfileKeyPairManager {
        abstract prepareKeyPair(): Internal.CompletableFuture<Internal.Optional<Internal.ProfileKeyPair>>;
        create(arg0: Internal.UserApiService_, arg1: Internal.User_, arg2: Internal.Path_): this;
        abstract shouldRefreshKeyPair(): boolean;
        readonly EMPTY_KEY_MANAGER: Internal.ProfileKeyPairManager;
    }
    type ProfileKeyPairManager_ = ProfileKeyPairManager;
    class FlapDisplaySection {
        constructor(arg0: number, arg1: string, arg2: boolean, arg3: boolean)
        static getFlapCycle(arg0: string): string[];
        renderCharsIndividually(): boolean;
        write(): Internal.CompoundTag;
        getSize(): number;
        update(arg0: Internal.CompoundTag_): void;
        getText(): Internal.Component;
        rightAligned(): this;
        static load(arg0: Internal.CompoundTag_): Internal.FlapDisplaySection;
        tick(arg0: boolean): number;
        refresh(arg0: boolean): void;
        setText(arg0: Internal.Component_): void;
        wideFlaps(): this;
        get size(): number
        get text(): Internal.Component
        set text(arg0: Internal.Component_)
        static readonly WIDE_MONOSPACE: 9.0;
        static readonly MONOSPACE: 7.0;
    }
    type FlapDisplaySection_ = FlapDisplaySection;
    class SnowGolem extends Internal.AbstractGolem implements Internal.Shearable, Internal.IForgeShearable, Internal.RangedAttackMob {
        constructor(arg0: Internal.EntityType_<Internal.SnowGolem>, arg1: Internal.Level_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
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
        readyForShearing(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
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
        hasPumpkin(): boolean;
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
        shear(arg0: Internal.SoundSource_): void;
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
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
        setPumpkin(arg0: boolean): void;
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
        set pumpkin(arg0: boolean)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type SnowGolem_ = SnowGolem;
    interface SignatureValidator {
        abstract validate(arg0: Internal.SignatureUpdater_, arg1: number[]): boolean;
        from(arg0: Internal.ServicesKeySet_, arg1: Internal.ServicesKeyType_): this;
        validate(arg0: number[], arg1: number[]): boolean;
        from(arg0: Internal.PublicKey_, arg1: string): this;
        (arg0: Internal.SignatureUpdater, arg1: number[]): boolean;
        readonly NO_VALIDATION: Internal.SignatureValidator;
        readonly LOGGER: Internal.Log4jLogger;
    }
    type SignatureValidator_ = SignatureValidator;
    class DensityFunctions$TwoArgumentSimpleFunction$Type extends Internal.Enum<Internal.DensityFunctions$TwoArgumentSimpleFunction$Type> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
        static values(): Internal.DensityFunctions$TwoArgumentSimpleFunction$Type[];
        get serializedName(): string
        static readonly MUL: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
        static readonly MAX: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
        static readonly ADD: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
        static readonly MIN: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
    }
    type DensityFunctions$TwoArgumentSimpleFunction$Type_ = "min" | "mul" | "max" | DensityFunctions$TwoArgumentSimpleFunction$Type | "add";
    interface Npc {
    }
    type Npc_ = Npc;
    class BlockTintFunction$Fixed extends Internal.Record implements Internal.BlockTintFunction {
        constructor(color: Internal.Color_)
        static of(cx: Internal.Context_, o: any): Internal.BlockTintFunction;
        getColor(state: Internal.BlockState_, level: Internal.BlockAndTintGetter_, pos: BlockPos_, index: number): Internal.Color;
        color(): Internal.Color;
    }
    type BlockTintFunction$Fixed_ = BlockTintFunction$Fixed;
    class DeltaFeature extends Internal.Feature<Internal.DeltaFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.DeltaFeatureConfiguration>)
    }
    type DeltaFeature_ = DeltaFeature;
    class BlockPattern$BlockPatternMatch {
        constructor(arg0: BlockPos_, arg1: Internal.Direction_, arg2: Internal.Direction_, arg3: Internal.LoadingCache_<BlockPos, Internal.BlockInWorld>, arg4: number, arg5: number, arg6: number)
        getDepth(): number;
        getBlock(arg0: number, arg1: number, arg2: number): Internal.BlockInWorld;
        getWidth(): number;
        getUp(): Internal.Direction;
        getHeight(): number;
        getFrontTopLeft(): BlockPos;
        getForwards(): Internal.Direction;
        get depth(): number
        get width(): number
        get up(): Internal.Direction
        get height(): number
        get frontTopLeft(): BlockPos
        get forwards(): Internal.Direction
    }
    type BlockPattern$BlockPatternMatch_ = BlockPattern$BlockPatternMatch;
    class PropelplantBerryStemBlock extends Internal.PropelplantBlock {
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
        static readonly PEARL: Internal.BooleanProperty;
    }
    type PropelplantBerryStemBlock_ = PropelplantBerryStemBlock;
    interface Float2ReferenceFunction <V> extends Internal.DoubleFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2ReferenceFunction<V>;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Float2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2ReferenceFunction<T, V>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2ReferenceFunction<V>;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        remove(arg0: number): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2ReferenceFunction<V>;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Float2FloatFunction;
        abstract get(arg0: number): V;
        containsKey(arg0: number): boolean;
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Float2LongFunction;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Float2IntFunction;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Float2ByteFunction;
        apply(arg0: number): V;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2ReferenceFunction<V>;
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Float2ShortFunction;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2ReferenceFunction<V>;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2ReferenceFunction<V>;
        size(): number;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Float2ObjectFunction<T>;
        clear(): void;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        defaultReturnValue(): V;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Float2DoubleFunction;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Float2CharFunction;
        put(arg0: number, arg1: V): V;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2ReferenceFunction<T, V>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        (arg0: number): V;
    }
    type Float2ReferenceFunction_<V> = Float2ReferenceFunction<V>;
    interface HoglinBase {
        abstract getAttackAnimationRemainingTicks(): number;
        hurtAndThrowTarget(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        throwTarget(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): void;
        get attackAnimationRemainingTicks(): number
        (): number;
        readonly ATTACK_ANIMATION_DURATION: 10;
    }
    type HoglinBase_ = HoglinBase;
    class ClientboundSetTimePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: number, arg2: boolean)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getGameTime(): number;
        getDayTime(): number;
        isSkippable(): boolean;
        get gameTime(): number
        get dayTime(): number
        get skippable(): boolean
    }
    type ClientboundSetTimePacket_ = ClientboundSetTimePacket;
    class EncasedCogwheelBlock extends Internal.RotatedPillarKineticBlock implements Internal.ISpecialBlockItemRequirement, Internal.IBE<Internal.SimpleKineticBlockEntity>, Internal.ICogWheel, Internal.EncasedBlock, Internal.ITransformableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: boolean, arg2: Internal.Supplier_<Internal.Block>)
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.SimpleKineticBlockEntity>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isSmallCog(): boolean;
        getRequiredItems(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.ItemRequirement;
        swapShafts(arg0: Internal.BlockState_): Internal.BlockState;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getBlockEntityClass(): typeof Internal.SimpleKineticBlockEntity;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        transform(arg0: Internal.BlockState_, arg1: Internal.StructureTransform_): Internal.BlockState;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isLargeCog(): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.SimpleKineticBlockEntity>;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static isSmallCogItem(arg0: Internal.ItemStack_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.SimpleKineticBlockEntity;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        static isLargeCog(arg0: Internal.BlockState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        isDedicatedCogWheel(): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getCasing(): Internal.Block;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        static isLargeCogItem(arg0: Internal.ItemStack_): boolean;
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
        static isSmallCog(arg0: Internal.BlockState_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBlockEntityType(): Internal.BlockEntityType<Internal.SimpleKineticBlockEntity>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        static isLargeCog(arg0: Internal.Block_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.SimpleKineticBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static isDedicatedCogWheel(arg0: Internal.Block_): boolean;
        static isSmallCog(arg0: Internal.Block_): boolean;
        swapShaftsForRotation(arg0: Internal.BlockState_, arg1: Internal.Rotation_, arg2: Internal.Direction$Axis_): Internal.BlockState;
        showCapacityWithAnnotation(): boolean;
        static isDedicatedCogItem(arg0: Internal.ItemStack_): boolean;
        handleEncasing(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: Internal.Player_, arg5: Internal.InteractionHand_, arg6: Internal.BlockHitResult_): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get smallCog(): boolean
        get blockEntityClass(): typeof Internal.SimpleKineticBlockEntity
        get largeCog(): boolean
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get dedicatedCogWheel(): boolean
        get casing(): Internal.Block
        get blockStates(): Internal.List<Internal.BlockState>
        get blockEntityType(): Internal.BlockEntityType<Internal.SimpleKineticBlockEntity>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly BOTTOM_SHAFT: Internal.BooleanProperty;
        static readonly TOP_SHAFT: Internal.BooleanProperty;
    }
    type EncasedCogwheelBlock_ = EncasedCogwheelBlock;
    class DetectorBlock$Builder extends Internal.BlockBuilder {
        constructor(i: ResourceLocation_)
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        detectorId(id: string): this;
        createObject(): Internal.Block;
    }
    type DetectorBlock$Builder_ = DetectorBlock$Builder;
    class IdMappingEvent$ModRemapping {
        readonly oldId: number;
        readonly registry: ResourceLocation;
        readonly newId: number;
        readonly key: ResourceLocation;
    }
    type IdMappingEvent$ModRemapping_ = IdMappingEvent$ModRemapping;
    interface IForgePlayer {
        canReach(arg0: Internal.Entity_, arg1: number): boolean;
        canReach(arg0: Vec3d_, arg1: number): boolean;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        getEntityReach(): number;
        canReach(arg0: BlockPos_, arg1: number): boolean;
        getBlockReach(): number;
        get entityReach(): number
        get blockReach(): number
    }
    type IForgePlayer_ = IForgePlayer;
    class Date implements Internal.Cloneable, Internal.Comparable<Internal.Date>, Internal.Serializable {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        constructor(arg0: number)
        constructor(arg0: string)
        clone(): any;
        /**
         * @deprecated
        */
        getHours(): number;
        toInstant(): Internal.Instant;
        compareTo(arg0: any): number;
        /**
         * @deprecated
        */
        setDate(arg0: number): void;
        /**
         * @deprecated
        */
        getMonth(): number;
        /**
         * @deprecated
        */
        static parse(arg0: string): number;
        /**
         * @deprecated
        */
        getTimezoneOffset(): number;
        before(arg0: Internal.Date_): boolean;
        /**
         * @deprecated
        */
        setMonth(arg0: number): void;
        compareTo(arg0: Internal.Date_): number;
        /**
         * @deprecated
        */
        getSeconds(): number;
        /**
         * @deprecated
        */
        getMinutes(): number;
        /**
         * @deprecated
        */
        setYear(arg0: number): void;
        getTime(): number;
        /**
         * @deprecated
        */
        setHours(arg0: number): void;
        /**
         * @deprecated
        */
        setMinutes(arg0: number): void;
        /**
         * @deprecated
        */
        setSeconds(arg0: number): void;
        static from(arg0: Internal.Instant_): Internal.Date;
        /**
         * @deprecated
        */
        getYear(): number;
        /**
         * @deprecated
        */
        toGMTString(): string;
        after(arg0: Internal.Date_): boolean;
        /**
         * @deprecated
        */
        toLocaleString(): string;
        /**
         * @deprecated
        */
        getDate(): number;
        /**
         * @deprecated
        */
        getDay(): number;
        /**
         * @deprecated
        */
        static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        setTime(arg0: number): void;
        /**
         * @deprecated
        */
        get hours(): number
        /**
         * @deprecated
        */
        set date(arg0: number)
        /**
         * @deprecated
        */
        get month(): number
        /**
         * @deprecated
        */
        get timezoneOffset(): number
        /**
         * @deprecated
        */
        set month(arg0: number)
        /**
         * @deprecated
        */
        get seconds(): number
        /**
         * @deprecated
        */
        get minutes(): number
        /**
         * @deprecated
        */
        set year(arg0: number)
        get time(): number
        /**
         * @deprecated
        */
        set hours(arg0: number)
        /**
         * @deprecated
        */
        set minutes(arg0: number)
        /**
         * @deprecated
        */
        set seconds(arg0: number)
        /**
         * @deprecated
        */
        get year(): number
        /**
         * @deprecated
        */
        get date(): number
        /**
         * @deprecated
        */
        get day(): number
        set time(arg0: number)
    }
    type Date_ = Date;
    class StringArgumentType$StringType extends Internal.Enum<Internal.StringArgumentType$StringType> {
        getExamples(): Internal.Collection<string>;
        static values(): Internal.StringArgumentType$StringType[];
        static valueOf(arg0: string): Internal.StringArgumentType$StringType;
        get examples(): Internal.Collection<string>
        static readonly QUOTABLE_PHRASE: Internal.StringArgumentType$StringType;
        static readonly GREEDY_PHRASE: Internal.StringArgumentType$StringType;
        static readonly SINGLE_WORD: Internal.StringArgumentType$StringType;
    }
    type StringArgumentType$StringType_ = StringArgumentType$StringType | "greedy_phrase" | "single_word" | "quotable_phrase";
    class Random implements Internal.RandomGenerator, Internal.Serializable {
        constructor()
        constructor(arg0: number)
        ints(arg0: number, arg1: number): Internal.IntStream;
        nextFloat(arg0: number): number;
        static getDefault(): Internal.RandomGenerator;
        nextLong(): number;
        nextDouble(): number;
        nextLong(arg0: number, arg1: number): number;
        nextGaussian(): number;
        doubles(arg0: number, arg1: number, arg2: number): Internal.DoubleStream;
        nextDouble(arg0: number): number;
        nextInt(arg0: number): number;
        nextFloat(): number;
        nextLong(arg0: number): number;
        ints(arg0: number, arg1: number, arg2: number): Internal.IntStream;
        nextFloat(arg0: number, arg1: number): number;
        static of(arg0: string): Internal.RandomGenerator;
        doubles(): Internal.DoubleStream;
        nextInt(): number;
        nextBytes(arg0: number[]): void;
        longs(arg0: number): Internal.LongStream;
        longs(arg0: number, arg1: number, arg2: number): Internal.LongStream;
        nextBoolean(): boolean;
        nextDouble(arg0: number, arg1: number): number;
        setSeed(arg0: number): void;
        nextExponential(): number;
        longs(arg0: number, arg1: number): Internal.LongStream;
        nextInt(arg0: number, arg1: number): number;
        longs(): Internal.LongStream;
        isDeprecated(): boolean;
        doubles(arg0: number): Internal.DoubleStream;
        nextGaussian(arg0: number, arg1: number): number;
        ints(): Internal.IntStream;
        ints(arg0: number): Internal.IntStream;
        doubles(arg0: number, arg1: number): Internal.DoubleStream;
        get "default"(): Internal.RandomGenerator
        set seed(arg0: number)
        get deprecated(): boolean
    }
    type Random_ = Random;
    class ClientboundLevelParticlesPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: T, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getCount(): number;
        getMaxSpeed(): number;
        getParticle(): Internal.ParticleOptions;
        isOverrideLimiter(): boolean;
        isSkippable(): boolean;
        getX(): number;
        getXDist(): number;
        getY(): number;
        getZ(): number;
        getYDist(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getZDist(): number;
        get count(): number
        get maxSpeed(): number
        get particle(): Internal.ParticleOptions
        get overrideLimiter(): boolean
        get skippable(): boolean
        get x(): number
        get XDist(): number
        get y(): number
        get z(): number
        get YDist(): number
        get ZDist(): number
    }
    type ClientboundLevelParticlesPacket_ = ClientboundLevelParticlesPacket;
    interface Navigation$StationTest {
        abstract test(arg0: number, arg1: number, arg2: Internal.Map_<Internal.TrackEdge, Internal.Pair<boolean, Internal.Couple<Internal.TrackNode>>>, arg3: Internal.Pair_<Internal.Couple<Internal.TrackNode>, Internal.TrackEdge>, arg4: Internal.GlobalStation_): boolean;
        (arg0: number, arg1: number, arg2: Internal.Map<Internal.TrackEdge, Internal.Pair<boolean, Internal.Couple<Internal.TrackNode>>>, arg3: Internal.Pair<Internal.Couple<Internal.TrackNode>, Internal.TrackEdge>, arg4: Internal.GlobalStation): boolean;
    }
    type Navigation$StationTest_ = Navigation$StationTest;
    abstract class FileLock implements Internal.AutoCloseable {
        abstract isValid(): boolean;
        overlaps(arg0: number, arg1: number): boolean;
        position(): number;
        close(): void;
        abstract release(): void;
        isShared(): boolean;
        size(): number;
        channel(): Internal.FileChannel;
        acquiredBy(): Internal.Channel;
        get valid(): boolean
        get shared(): boolean
    }
    type FileLock_ = FileLock;
    class Locale$FilteringMode extends Internal.Enum<Internal.Locale$FilteringMode> {
        static valueOf(arg0: string): Internal.Locale$FilteringMode;
        static values(): Internal.Locale$FilteringMode[];
        static readonly EXTENDED_FILTERING: Internal.Locale$FilteringMode;
        static readonly IGNORE_EXTENDED_RANGES: Internal.Locale$FilteringMode;
        static readonly AUTOSELECT_FILTERING: Internal.Locale$FilteringMode;
        static readonly MAP_EXTENDED_RANGES: Internal.Locale$FilteringMode;
        static readonly REJECT_EXTENDED_RANGES: Internal.Locale$FilteringMode;
    }
    type Locale$FilteringMode_ = "reject_extended_ranges" | Locale$FilteringMode | "extended_filtering" | "ignore_extended_ranges" | "autoselect_filtering" | "map_extended_ranges";
    interface IIngredientRenderer <T> {
        getFontRenderer(arg0: Internal.Minecraft_, arg1: T): Internal.Font;
        abstract getTooltip(arg0: T, arg1: Internal.TooltipFlag_): Internal.List<Internal.Component>;
        getWidth(): number;
        abstract render(arg0: Internal.GuiGraphics_, arg1: T): void;
        getHeight(): number;
        get width(): number
        get height(): number
    }
    type IIngredientRenderer_<T> = IIngredientRenderer<T>;
    class IsoChronology extends Internal.AbstractChronology implements Internal.Serializable {
        localDateTime(arg0: Internal.TemporalAccessor_): Internal.LocalDateTime;
        date(arg0: Internal.TemporalAccessor_): Internal.LocalDate;
        resolveDate(arg0: Internal.Map_<Internal.TemporalField, number>, arg1: Internal.ResolverStyle_): Internal.LocalDate;
        static getAvailableChronologies(): Internal.Set<Internal.Chronology>;
        zonedDateTime(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.ChronoZonedDateTime<any>;
        eraOf(arg0: number): Internal.IsoEra;
        date(arg0: Internal.Era_, arg1: number, arg2: number, arg3: number): Internal.LocalDate;
        static from(arg0: Internal.TemporalAccessor_): Internal.Chronology;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        dateNow(arg0: Internal.ZoneId_): Internal.LocalDate;
        zonedDateTime(arg0: Internal.TemporalAccessor_): Internal.ChronoZonedDateTime<any>;
        dateYearDay(arg0: Internal.Era_, arg1: number, arg2: number): Internal.LocalDate;
        static of(arg0: string): Internal.Chronology;
        epochSecond(arg0: Internal.Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.ZoneOffset_): number;
        static ofLocale(arg0: Internal.Locale_): Internal.Chronology;
        get availableChronologies(): Internal.Set<Internal.Chronology>
        static readonly INSTANCE: Internal.IsoChronology;
    }
    type IsoChronology_ = IsoChronology;
    class SoundEventBuilder extends Internal.BuilderBase<Internal.SoundEvent> {
        constructor(i: ResourceLocation_)
        createObject(): any;
    }
    type SoundEventBuilder_ = SoundEventBuilder;
    class ZipEntry implements Internal.Cloneable, Internal.ZipConstants {
        constructor(arg0: Internal.ZipEntry_)
        constructor(arg0: string)
        clone(): any;
        setCompressedSize(arg0: number): void;
        setComment(arg0: string): void;
        isDirectory(): boolean;
        getLastAccessTime(): Internal.FileTime;
        getCrc(): number;
        getMethod(): number;
        getName(): string;
        getSize(): number;
        getTimeLocal(): Internal.LocalDateTime;
        setCrc(arg0: number): void;
        setExtra(arg0: number[]): void;
        getCreationTime(): Internal.FileTime;
        setLastAccessTime(arg0: Internal.FileTime_): this;
        setTimeLocal(arg0: Internal.LocalDateTime_): void;
        getCompressedSize(): number;
        getComment(): string;
        getTime(): number;
        getLastModifiedTime(): Internal.FileTime;
        setLastModifiedTime(arg0: Internal.FileTime_): this;
        setCreationTime(arg0: Internal.FileTime_): this;
        getExtra(): number[];
        setSize(arg0: number): void;
        setMethod(arg0: number): void;
        setTime(arg0: number): void;
        set compressedSize(arg0: number)
        set comment(arg0: string)
        get directory(): boolean
        get lastAccessTime(): Internal.FileTime
        get crc(): number
        get method(): number
        get name(): string
        get size(): number
        get timeLocal(): Internal.LocalDateTime
        set crc(arg0: number)
        set extra(arg0: number[])
        get creationTime(): Internal.FileTime
        set lastAccessTime(arg0: Internal.FileTime_)
        set timeLocal(arg0: Internal.LocalDateTime_)
        get compressedSize(): number
        get comment(): string
        get time(): number
        get lastModifiedTime(): Internal.FileTime
        set lastModifiedTime(arg0: Internal.FileTime_)
        set creationTime(arg0: Internal.FileTime_)
        get extra(): number[]
        set size(arg0: number)
        set method(arg0: number)
        set time(arg0: number)
        static readonly STORED: 0;
        static readonly DEFLATED: 8;
    }
    type ZipEntry_ = ZipEntry;
    class ArmorItem$Type extends Internal.Enum<Internal.ArmorItem$Type> {
        getSlot(): Internal.EquipmentSlot;
        static valueOf(arg0: string): Internal.ArmorItem$Type;
        getName(): string;
        static values(): Internal.ArmorItem$Type[];
        get slot(): Internal.EquipmentSlot
        get name(): string
        static readonly HELMET: Internal.ArmorItem$Type;
        static readonly LEGGINGS: Internal.ArmorItem$Type;
        static readonly BOOTS: Internal.ArmorItem$Type;
        static readonly CHESTPLATE: Internal.ArmorItem$Type;
    }
    type ArmorItem$Type_ = "leggings" | ArmorItem$Type | "chestplate" | "boots" | "helmet";
    class SconceLeverBlock extends Internal.SconceWallBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_, particleData: Internal.Supplier_<Internal.SimpleParticleType>)
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
        setPowered(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_): Internal.BlockState;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeExtinguishedBy(item: Internal.ItemStack_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly POWERED: Internal.BooleanProperty;
    }
    type SconceLeverBlock_ = SconceLeverBlock;
    interface StructurePieceType$StructureTemplateType extends Internal.StructurePieceType {
        abstract load(arg0: Internal.StructureTemplateManager_, arg1: Internal.CompoundTag_): Internal.StructurePiece;
        load(arg0: Internal.StructurePieceSerializationContext_, arg1: Internal.CompoundTag_): Internal.StructurePiece;
        (arg0: Internal.StructureTemplateManager, arg1: Internal.CompoundTag): Internal.StructurePiece_;
    }
    type StructurePieceType$StructureTemplateType_ = StructurePieceType$StructureTemplateType;
    interface IProxyHoveringInformation {
        abstract getInformationSource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): BlockPos;
        (arg0: Internal.Level, arg1: BlockPos, arg2: Internal.BlockState): BlockPos_;
    }
    type IProxyHoveringInformation_ = IProxyHoveringInformation;
    class BlockPathTypes extends Internal.Enum<Internal.BlockPathTypes> implements Internal.IExtensibleEnum {
        static valueOf(arg0: string): Internal.BlockPathTypes;
        static create(arg0: string, arg1: number): Internal.BlockPathTypes;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        /**
         * @deprecated
        */
        init(): void;
        static values(): Internal.BlockPathTypes[];
        getDanger(): this;
        getMalus(): number;
        get danger(): Internal.BlockPathTypes
        get malus(): number
        static readonly STICKY_HONEY: Internal.BlockPathTypes;
        static readonly WALKABLE: Internal.BlockPathTypes;
        static readonly WATER_BORDER: Internal.BlockPathTypes;
        static readonly LAVA: Internal.BlockPathTypes;
        static readonly TRAPDOOR: Internal.BlockPathTypes;
        static readonly DAMAGE_CAUTIOUS: Internal.BlockPathTypes;
        static readonly FENCE: Internal.BlockPathTypes;
        static readonly OPEN: Internal.BlockPathTypes;
        static readonly UNPASSABLE_RAIL: Internal.BlockPathTypes;
        static readonly BLOCKED: Internal.BlockPathTypes;
        static readonly LEAVES: Internal.BlockPathTypes;
        static readonly DANGER_OTHER: Internal.BlockPathTypes;
        static readonly DANGER_POWDER_SNOW: Internal.BlockPathTypes;
        static readonly DOOR_WOOD_CLOSED: Internal.BlockPathTypes;
        static readonly DOOR_IRON_CLOSED: Internal.BlockPathTypes;
        static readonly BREACH: Internal.BlockPathTypes;
        static readonly COCOA: Internal.BlockPathTypes;
        static readonly DAMAGE_OTHER: Internal.BlockPathTypes;
        static readonly DAMAGE_FIRE: Internal.BlockPathTypes;
        static readonly WALKABLE_DOOR: Internal.BlockPathTypes;
        static readonly RAIL: Internal.BlockPathTypes;
        static readonly POWDER_SNOW: Internal.BlockPathTypes;
        static readonly DANGER_FIRE: Internal.BlockPathTypes;
        static readonly DOOR_OPEN: Internal.BlockPathTypes;
        static readonly WATER: Internal.BlockPathTypes;
    }
    type BlockPathTypes_ = "breach" | "lava" | "danger_powder_snow" | BlockPathTypes | "unpassable_rail" | "leaves" | "cocoa" | "rail" | "fence" | "trapdoor" | "danger_fire" | "blocked" | "walkable" | "open" | "door_iron_closed" | "walkable_door" | "powder_snow" | "damage_other" | "damage_cautious" | "door_wood_closed" | "door_open" | "danger_other" | "water" | "damage_fire" | "water_border" | "sticky_honey";
    class SimpleWeightedRandomList$Builder <E> {
        constructor()
        build(): Internal.SimpleWeightedRandomList<E>;
        add(arg0: E, arg1: number): this;
    }
    type SimpleWeightedRandomList$Builder_<E> = SimpleWeightedRandomList$Builder<E>;
    abstract class AbstractObject2IntFunction <K> implements Internal.Object2IntFunction<K>, Internal.Serializable {
        put(arg0: K, arg1: number): number;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Object2LongFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2IntFunction<T>;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        removeInt(arg0: any): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Object2ShortFunction<K>;
        containsKey(arg0: any): boolean;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2IntFunction;
        abstract getInt(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Object2IntFunction<K>;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        applyAsInt(arg0: K): number;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        size(): number;
        defaultReturnValue(arg0: number): void;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        clear(): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Object2CharFunction<K>;
        getOrDefault(arg0: any, arg1: number): number;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2IntFunction;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        static identity<T>(): Internal.Function<T, T>;
    }
    type AbstractObject2IntFunction_<K> = AbstractObject2IntFunction<K>;
    class Property$Value <T extends Internal.Comparable<T>> extends Internal.Record {
        constructor(arg0: Internal.Property_<T>, arg1: T)
        property(): Internal.Property<T>;
        value(): T;
    }
    type Property$Value_<T extends Internal.Comparable<T>> = Property$Value<T>;
    interface LevelReader extends Internal.BlockAndTintGetter, Internal.SignalGetter, Internal.BiomeManager$NoiseBiomeSource, Internal.CollisionGetter {
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
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
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        canSeeSky(arg0: BlockPos_): boolean;
        abstract isClientSide(): boolean;
        abstract enabledFeatures(): Internal.FeatureFlagSet;
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
        get skyDarken(): number
        get minBuildHeight(): number
        get sectionsCount(): number
        /**
         * @deprecated
        */
        get seaLevel(): number
        get maxBuildHeight(): number
        get lightEngine(): Internal.LevelLightEngine
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get worldBorder(): Internal.WorldBorder
        get maxLightLevel(): number
    }
    type LevelReader_ = LevelReader;
    interface IFrameBlock {
        abstract getFilledBlock(arg0: Internal.Block_): Internal.Block;
        (arg0: Internal.Block): Internal.Block_;
    }
    type IFrameBlock_ = IFrameBlock;
    abstract class Reference <T> {
        refersTo(arg0: T): boolean;
        static reachabilityFence(arg0: any): void;
        /**
         * @deprecated
        */
        isEnqueued(): boolean;
        clear(): void;
        enqueue(): boolean;
        get(): T;
        /**
         * @deprecated
        */
        get enqueued(): boolean
    }
    type Reference_<T> = Reference<T>;
    class ShortTag extends Internal.NumericTag {
        getType(): Internal.TagType<Internal.ShortTag>;
        getAsString(): string;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        static valueOf(arg0: number): Internal.ShortTag;
        copy(): this;
        get type(): Internal.TagType<Internal.ShortTag>
        get asString(): string
        static readonly TYPE: Internal.TagType<Internal.ShortTag>;
    }
    type ShortTag_ = ShortTag;
    class DoublePlantBlock extends Internal.BushBlock {
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
        static placeAt(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: number): void;
        static copyWaterloggedFrom(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.BlockState;
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
        static readonly HALF: Internal.EnumProperty<Internal.DoubleBlockHalf>;
    }
    type DoublePlantBlock_ = DoublePlantBlock;
    interface ComposableEntryContainer {
        and(arg0: Internal.ComposableEntryContainer_): this;
        or(arg0: Internal.ComposableEntryContainer_): this;
        abstract expand(arg0: Internal.LootContext_, arg1: Internal.Consumer_<Internal.LootPoolEntry>): boolean;
        (arg0: Internal.LootContext, arg1: Internal.Consumer<Internal.LootPoolEntry>): boolean;
        readonly ALWAYS_TRUE: Internal.ComposableEntryContainer;
        readonly ALWAYS_FALSE: Internal.ComposableEntryContainer;
    }
    type ComposableEntryContainer_ = ComposableEntryContainer;
    abstract class AbstractContraptionEntity extends Internal.Entity implements Internal.IEntityAdditionalSpawnData {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getYawOffset(): number;
        m_19956_(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        static build(arg0: Internal.EntityType$Builder_<any>): Internal.EntityType$Builder<any>;
        startControlling(arg0: BlockPos_, arg1: Internal.Player_): boolean;
        abstract reverseRotation(arg0: Vec3d_, arg1: number): Vec3d;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getContactPointMotion(arg0: Vec3d_): Vec3d;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        alwaysAccepts(): boolean;
        setContraptionMotion(arg0: Vec3d_): void;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        getDisplayName(): Internal.Component;
        getContraptionName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        getPrevPositionVec(): Vec3d;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        shouldRiderSit(): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getPassengerPosition(arg0: Internal.Entity_, arg1: number): Vec3d;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        supportsTerrainCollision(): boolean;
        getAnchorVec(): Vec3d;
        abstract getRotationState(): Internal.AbstractContraptionEntity$ContraptionRotationState;
        abstract applyLocalTransforms(arg0: Internal.PoseStack_, arg1: number): void;
        abstract applyRotation(arg0: Vec3d_, arg1: number): Vec3d;
        move(arg0: number, arg1: number, arg2: number): void;
        tickActors(): void;
        isFrame(): boolean;
        toLocalVector(arg0: Vec3d_, arg1: number, arg2: boolean): Vec3d;
        addSittingPassenger(arg0: Internal.Entity_, arg1: number): void;
        toGlobalVector(arg0: Vec3d_, arg1: number, arg2: boolean): Vec3d;
        playSound(id: Internal.SoundEvent_): void;
        refreshPSIs(): void;
        handlePlayerInteraction(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.InteractionHand_): boolean;
        toLocalVector(arg0: Vec3d_, arg1: number): Vec3d;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        setRotation(yaw: number, pitch: number): void;
        collisionEnabled(): boolean;
        toGlobalVector(arg0: Vec3d_, arg1: number): Vec3d;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        getControllingPlayer(): Internal.Optional<Internal.UUID>;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        control(arg0: BlockPos_, arg1: Internal.Collection_<number>, arg2: Internal.Player_): boolean;
        getContraption(): Internal.Contraption;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        isAliveOrStale(): boolean;
        getPassengers(): Internal.EntityArrayList;
        getPrevAnchorVec(): Vec3d;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        stopControlling(arg0: BlockPos_): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isStalled(): boolean;
        alignPassenger(arg0: Internal.Entity_): void;
        disassemble(): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isReadyForRender(): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        readSpawnData(arg0: Internal.FriendlyByteBuf_): void;
        static pitchFromVector(arg0: Vec3d_): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        registerColliding(arg0: Internal.Entity_): void;
        isMultipartEntity(): boolean;
        setBlock(arg0: BlockPos_, arg1: Internal.StructureTemplate$StructureBlockInfo_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        writeSpawnData(arg0: Internal.FriendlyByteBuf_): void;
        static yawFromVector(arg0: Vec3d_): number;
        deserializeNBT(arg0: Internal.Tag_): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        serializeNBT(): Internal.CompoundTag;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDistanceSq(pos: BlockPos_): number;
        getProfile(): Internal.GameProfile;
        getClassification(arg0: boolean): Internal.MobCategory;
        setControllingPlayer(arg0: Internal.UUID_): void;
        runCommand(command: string): number;
        get yawOffset(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        set contraptionMotion(arg0: Vec3d_)
        get displayName(): Internal.Component
        get contraptionName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get prevPositionVec(): Vec3d
        get teamId(): string
        get facing(): Internal.Direction
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get anchorVec(): Vec3d
        get rotationState(): Internal.AbstractContraptionEntity$ContraptionRotationState
        get frame(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get controllingPlayer(): Internal.Optional<Internal.UUID>
        get type(): string
        get contraption(): Internal.Contraption
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get aliveOrStale(): boolean
        get passengers(): Internal.EntityArrayList
        get prevAnchorVec(): Vec3d
        get stalled(): boolean
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get readyForRender(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set controllingPlayer(arg0: Internal.UUID_)
        staleTicks: number;
        readonly collidingEntities: Internal.Map<Internal.Entity, Internal.MutableInt>;
    }
    type AbstractContraptionEntity_ = AbstractContraptionEntity;
    class ComparatorBlock extends Internal.DiodeBlock implements Internal.EntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
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
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        handler$zdo000$updateSideRelayers(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, ci: Internal.CallbackInfo_): void;
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
        static readonly MODE: Internal.EnumProperty<Internal.ComparatorMode>;
    }
    type ComparatorBlock_ = ComparatorBlock;
    class CaveFilter extends Internal.PlacementFilter {
        static readonly CODEC: Internal.Codec<Internal.CaveFilter>;
    }
    type CaveFilter_ = CaveFilter;
    class EditBox extends Internal.AbstractWidget implements Internal.Renderable, Internal.AccessEditBox {
        constructor(arg0: Internal.Font_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Component_)
        constructor(arg0: Internal.Font_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.EditBox_, arg6: Internal.Component_)
        searchables$getResponder(): Internal.Consumer<any>;
        insertText(arg0: string): void;
        getScreenX(arg0: number): number;
        setSuggestion(arg0: string): void;
        moveCursor(arg0: number): void;
        setTextColorUneditable(arg0: number): void;
        setBordered(arg0: boolean): void;
        searchables$getFilter(): Internal.Predicate<any>;
        getCursorPosition(): number;
        renderWidget(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        setFormatter(arg0: Internal.BiFunction_<string, number, Internal.FormattedCharSequence>): void;
        setFilter(arg0: Internal.Predicate_<string>): void;
        setHint(arg0: Internal.Component_): void;
        setTextColor(arg0: number): void;
        setMaxLength(arg0: number): void;
        mouseMoved(arg0: number, arg1: number): void;
        isVisible(): boolean;
        deleteWords(arg0: number): void;
        setResponder(arg0: Internal.Consumer_<string>): void;
        getInnerWidth(): number;
        updateWidgetNarration(arg0: Internal.NarrationElementOutput_): void;
        getWordPosition(arg0: number): number;
        getValue(): string;
        setHighlightPos(arg0: number): void;
        moveCursorTo(arg0: number): void;
        setPosition(arg0: number, arg1: number): void;
        setCursorPosition(arg0: number): void;
        getHighlighted(): string;
        moveCursorToEnd(): void;
        canConsumeInput(): boolean;
        tick(): void;
        onClick(arg0: number, arg1: number, arg2: number): void;
        setValue(arg0: string): void;
        setCanLoseFocus(arg0: boolean): void;
        getCurrentFocusPath(): Internal.ComponentPath;
        moveCursorToStart(): void;
        deleteChars(arg0: number): void;
        setEditable(arg0: boolean): void;
        setVisible(arg0: boolean): void;
        set suggestion(arg0: string)
        set textColorUneditable(arg0: number)
        set bordered(arg0: boolean)
        get cursorPosition(): number
        set formatter(arg0: Internal.BiFunction_<string, number, Internal.FormattedCharSequence>)
        set filter(arg0: Internal.Predicate_<string>)
        set hint(arg0: Internal.Component_)
        set textColor(arg0: number)
        set maxLength(arg0: number)
        get visible(): boolean
        set responder(arg0: Internal.Consumer_<string>)
        get innerWidth(): number
        get value(): string
        set highlightPos(arg0: number)
        set cursorPosition(arg0: number)
        get highlighted(): string
        set value(arg0: string)
        set canLoseFocus(arg0: boolean)
        get currentFocusPath(): Internal.ComponentPath
        set editable(arg0: boolean)
        set visible(arg0: boolean)
        static readonly FORWARDS: 1;
        static readonly BACKWARDS: -1;
        static readonly DEFAULT_TEXT_COLOR: 14737632;
    }
    type EditBox_ = EditBox;
    interface BoilerHeaterHandlerEvent$BoilerHeaterCallback {
        abstract updateHeat(arg0: Internal.BlockContainerJS_): number;
        (arg0: Internal.BlockContainerJS): number;
    }
    type BoilerHeaterHandlerEvent$BoilerHeaterCallback_ = BoilerHeaterHandlerEvent$BoilerHeaterCallback;
    class MapExtendingRecipe extends Internal.ShapedRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        static bookshelf$dissolvePattern(arg0: string[], arg1: Internal.Map_<string, Internal.Ingredient>, arg2: number, arg3: number): Internal.NonNullList<Internal.Ingredient>;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        static bookshelf$shrink(...arg0: string[]): string[];
        static bookshelf$patternFromJson(arg0: Internal.JsonArray_): string[];
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        static bookshelf$keyFromJson(arg0: Internal.JsonObject_): Internal.Map<string, Internal.Ingredient>;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get mod(): string
    }
    type MapExtendingRecipe_ = MapExtendingRecipe;
    interface IBeeGrowable {
        abstract getPollinated(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        (arg0: Internal.Level, arg1: BlockPos, arg2: Internal.BlockState): boolean;
    }
    type IBeeGrowable_ = IBeeGrowable;
    interface LevelAccessor extends Internal.CommonLevelAccessor, Internal.LevelTimeAccess {
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        dayTime(): number;
        abstract getShade(arg0: Internal.Direction_, arg1: boolean): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getMaxSection(): number;
        abstract getLevelData(): Internal.LevelData;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        getSectionYFromSectionIndex(arg0: number): number;
        abstract players(): Internal.List<Internal.Player>;
        abstract getBiomeManager(): Internal.BiomeManager;
        abstract getRandom(): Internal.RandomSource;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        abstract removeBlock(arg0: BlockPos_, arg1: boolean): boolean;
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
        abstract setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number, arg3: number): boolean;
        abstract isClientSide(): boolean;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_): Internal.List<T>;
        abstract getBlockTicks(): Internal.LevelTickAccess<Internal.Block>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        abstract dimensionType(): Internal.DimensionType;
        abstract getSkyDarken(): number;
        getMinBuildHeight(): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        abstract destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_, arg3: number): boolean;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
        */
        abstract getSeaLevel(): number;
        abstract getFluidTicks(): Internal.LevelTickAccess<Internal.Fluid>;
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
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getHeight(): number;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        abstract isFluidAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.FluidState>): boolean;
        abstract getWorldBorder(): Internal.WorldBorder;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
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
        abstract gameEvent(arg0: Internal.GameEvent_, arg1: Vec3d_, arg2: Internal.GameEvent$Context_): void;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Internal.Player;
        neighborShapeChanged(arg0: Internal.Direction_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_, arg4: number, arg5: number): void;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        abstract playSound(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_, arg4: number, arg5: number): void;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Internal.Player;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        abstract addParticle(arg0: Internal.ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        abstract getCurrentDifficultyAt(arg0: BlockPos_): Internal.DifficultyInstance;
        getDifficulty(): Internal.Difficulty;
        canSeeSky(arg0: BlockPos_): boolean;
        abstract enabledFeatures(): Internal.FeatureFlagSet;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        abstract getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        abstract getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_, arg2: Internal.Predicate_<Internal.Entity>): Internal.List<Internal.Entity>;
        getPlayerByUUID(arg0: Internal.UUID_): Internal.Player;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        abstract getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getSectionsCount(): number;
        abstract isStateAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.BlockState>): boolean;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Internal.Player>;
        getSectionIndexFromSectionY(arg0: number): number;
        abstract getServer(): Internal.MinecraftServer;
        abstract levelEvent(arg0: Internal.Player_, arg1: number, arg2: BlockPos_, arg3: number): void;
        setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number): boolean;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        abstract getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getBestNeighborSignal(arg0: BlockPos_): number;
        hasChunk(arg0: number, arg1: number): boolean;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        getMoonBrightness(): number;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        abstract getLightEngine(): Internal.LevelLightEngine;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        isOutsideBuildHeight(arg0: number): boolean;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        abstract getChunkSource(): Internal.ChunkSource;
        abstract getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_, arg3: boolean): Internal.ChunkAccess;
        abstract registryAccess(): Internal.RegistryAccess;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract nextSubTickCount(): number;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: BlockPos_): void;
        getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        getMaxLightLevel(): number;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get maxSection(): number
        get levelData(): Internal.LevelData
        get biomeManager(): Internal.BiomeManager
        get random(): Internal.RandomSource
        get clientSide(): boolean
        get blockTicks(): Internal.LevelTickAccess<Internal.Block>
        get skyDarken(): number
        get minBuildHeight(): number
        /**
         * @deprecated
        */
        get seaLevel(): number
        get fluidTicks(): Internal.LevelTickAccess<Internal.Fluid>
        get maxBuildHeight(): number
        get height(): number
        get worldBorder(): Internal.WorldBorder
        get minSection(): number
        get difficulty(): Internal.Difficulty
        get moonPhase(): number
        get sectionsCount(): number
        get server(): Internal.MinecraftServer
        get moonBrightness(): number
        get lightEngine(): Internal.LevelLightEngine
        get modelDataManager(): Internal.ModelDataManager
        get chunkSource(): Internal.ChunkSource
        get maxLightLevel(): number
    }
    type LevelAccessor_ = LevelAccessor;
    interface Char2DoubleFunction extends Internal.IntToDoubleFunction, it.unimi.dsi.fastutil.Function<string, number> {
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        remove(arg0: string): number;
        andThenShort(arg0: Internal.Double2ShortFunction_): Internal.Char2ShortFunction;
        composeObject<T>(arg0: Internal.Object2CharFunction_<T>): Internal.Object2DoubleFunction<T>;
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: string, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2CharFunction_<T>): Internal.Reference2DoubleFunction<T>;
        andThenByte(arg0: Internal.Double2ByteFunction_): Internal.Char2ByteFunction;
        composeLong(arg0: Internal.Long2CharFunction_): Internal.Long2DoubleFunction;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenLong(arg0: Internal.Double2LongFunction_): Internal.Char2LongFunction;
        andThenInt(arg0: Internal.Double2IntFunction_): Internal.Char2IntFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(arg0: number): void;
        andThenReference<T>(arg0: Internal.Double2ReferenceFunction_<T>): Internal.Char2ReferenceFunction<T>;
        apply(arg0: string): number;
        getOrDefault(arg0: string, arg1: number): number;
        composeFloat(arg0: Internal.Float2CharFunction_): Internal.Float2DoubleFunction;
        andThenDouble(arg0: Internal.Double2DoubleFunction_): this;
        composeDouble(arg0: Internal.Double2CharFunction_): Internal.Double2DoubleFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        abstract get(arg0: string): number;
        composeByte(arg0: Internal.Byte2CharFunction_): Internal.Byte2DoubleFunction;
        composeInt(arg0: Internal.Int2CharFunction_): Internal.Int2DoubleFunction;
        defaultReturnValue(): number;
        composeShort(arg0: Internal.Short2CharFunction_): Internal.Short2DoubleFunction;
        size(): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<string, T>;
        clear(): void;
        andThenFloat(arg0: Internal.Double2FloatFunction_): Internal.Char2FloatFunction;
        andThenChar(arg0: Internal.Double2CharFunction_): Internal.Char2CharFunction;
        andThenObject<T>(arg0: Internal.Double2ObjectFunction_<T>): Internal.Char2ObjectFunction<T>;
        identity<T>(): Internal.Function<T, T>;
        composeChar(arg0: Internal.Char2CharFunction_): this;
        (arg0: string): number;
    }
    type Char2DoubleFunction_ = Char2DoubleFunction;
    class ClientChatReceivedEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.ChatType$Bound_, arg1: Internal.Component_, arg2: Internal.UUID_)
        getMessage(): Internal.Component;
        isSystem(): boolean;
        getBoundChatType(): Internal.ChatType$Bound;
        setMessage(arg0: Internal.Component_): void;
        getSender(): Internal.UUID;
        get message(): Internal.Component
        get system(): boolean
        get boundChatType(): Internal.ChatType$Bound
        set message(arg0: Internal.Component_)
        get sender(): Internal.UUID
    }
    type ClientChatReceivedEvent_ = ClientChatReceivedEvent;
    abstract class PlacementModifier {
        constructor()
        abstract getPositions(arg0: Internal.PlacementContext_, arg1: Internal.RandomSource_, arg2: BlockPos_): Internal.Stream<BlockPos>;
        abstract type(): Internal.PlacementModifierType<any>;
        static readonly CODEC: Internal.Codec<Internal.PlacementModifier>;
    }
    type PlacementModifier_ = PlacementModifier;
    interface CommandSource {
        abstract shouldInformAdmins(): boolean;
        alwaysAccepts(): boolean;
        abstract acceptsFailure(): boolean;
        abstract sendSystemMessage(arg0: Internal.Component_): void;
        abstract acceptsSuccess(): boolean;
        readonly NULL: Internal.CommandSource;
    }
    type CommandSource_ = CommandSource;
    class EnchantmentMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: any_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        getGoldCount(): number;
        getEnchantmentSeed(): number;
        get goldCount(): number
        get enchantmentSeed(): number
        readonly enchantClue: number[];
        readonly levelClue: number[];
        readonly costs: number[];
    }
    type EnchantmentMenu_ = EnchantmentMenu;
    class GameRules$BooleanValue extends Internal.GameRules$Value<Internal.GameRules$BooleanValue> implements Internal.BooleanValueInvoker {
        constructor(arg0: Internal.GameRules$Type_<Internal.GameRules$BooleanValue>, arg1: boolean)
        setFrom(arg0: Internal.GameRules$BooleanValue_, arg1: Internal.MinecraftServer_): void;
        static invokeCreate(defaultValue: boolean, onChanged: Internal.BiConsumer_<Internal.MinecraftServer, Internal.GameRules$BooleanValue>): Internal.GameRules$Type<Internal.GameRules$BooleanValue>;
        set(arg0: boolean, arg1: Internal.MinecraftServer_): void;
        static create(arg0: boolean): Internal.GameRules$Type<Internal.GameRules$BooleanValue>;
        get(): boolean;
        static create(arg0: boolean, arg1: Internal.BiConsumer_<Internal.MinecraftServer, Internal.GameRules$BooleanValue>): Internal.GameRules$Type<Internal.GameRules$BooleanValue>;
        static invokeCreate_$md$366fca$0(arg0: boolean, arg1: Internal.BiConsumer_<any, any>): Internal.GameRules$Type<any>;
    }
    type GameRules$BooleanValue_ = GameRules$BooleanValue;
    abstract class EntityEventJS extends Internal.LevelEventJS {
        constructor()
        abstract getEntity(): Internal.Entity;
        getPlayer(): Internal.Player;
        get entity(): Internal.Entity
        get player(): Internal.Player
    }
    type EntityEventJS_ = EntityEventJS;
    class RootSystemFeature extends Internal.Feature<Internal.RootSystemConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.RootSystemConfiguration>)
    }
    type RootSystemFeature_ = RootSystemFeature;
    interface Cancellable {
        abstract isCancellable(): boolean;
        abstract cancel(): void;
        abstract isCancelled(): boolean;
        get cancellable(): boolean
        get cancelled(): boolean
    }
    type Cancellable_ = Cancellable;
    class StringSplitter {
        constructor(arg0: any_)
        plainIndexAtWidth(arg0: string, arg1: number, arg2: Internal.Style_): number;
        findLineBreak(arg0: string, arg1: number, arg2: Internal.Style_): number;
        stringWidth(arg0: Internal.FormattedText_): number;
        splitLines(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_): Internal.List<Internal.FormattedText>;
        stringWidth(arg0: string): number;
        static getWordPosition(arg0: string, arg1: number, arg2: number, arg3: boolean): number;
        plainTailByWidth(arg0: string, arg1: number, arg2: Internal.Style_): string;
        plainHeadByWidth(arg0: string, arg1: number, arg2: Internal.Style_): string;
        splitLines(arg0: string, arg1: number, arg2: Internal.Style_): Internal.List<Internal.FormattedText>;
        splitLines(arg0: string, arg1: number, arg2: Internal.Style_, arg3: boolean, arg4: Internal.StringSplitter$LinePosConsumer_): void;
        componentStyleAtWidth(arg0: Internal.FormattedText_, arg1: number): Internal.Style;
        headByWidth(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_): Internal.FormattedText;
        formattedHeadByWidth(arg0: string, arg1: number, arg2: Internal.Style_): string;
        splitLines(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_, arg3: Internal.FormattedText_): Internal.List<Internal.FormattedText>;
        componentStyleAtWidth(arg0: Internal.FormattedCharSequence_, arg1: number): Internal.Style;
        stringWidth(arg0: Internal.FormattedCharSequence_): number;
        formattedIndexByWidth(arg0: string, arg1: number, arg2: Internal.Style_): number;
        splitLines(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_, arg3: Internal.BiConsumer_<Internal.FormattedText, boolean>): void;
    }
    type StringSplitter_ = StringSplitter;
    class STBTTFontinfo$Buffer extends Internal.StructBuffer<Internal.STBTTFontinfo, Internal.STBTTFontinfo$Buffer> implements Internal.NativeResource {
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.ByteBuffer_)
        close(): void;
    }
    type STBTTFontinfo$Buffer_ = STBTTFontinfo$Buffer;
    class SignalBlockEntity$SignalState extends Internal.Enum<Internal.SignalBlockEntity$SignalState> {
        isYellowLight(arg0: number): boolean;
        static values(): Internal.SignalBlockEntity$SignalState[];
        isGreenLight(arg0: number): boolean;
        isRedLight(arg0: number): boolean;
        static valueOf(arg0: string): Internal.SignalBlockEntity$SignalState;
        static readonly INVALID: Internal.SignalBlockEntity$SignalState;
        static readonly RED: Internal.SignalBlockEntity$SignalState;
        static readonly GREEN: Internal.SignalBlockEntity$SignalState;
        static readonly YELLOW: Internal.SignalBlockEntity$SignalState;
    }
    type SignalBlockEntity$SignalState_ = SignalBlockEntity$SignalState | "yellow" | "red" | "invalid" | "green";
    class TrueBlockPredicate implements net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate {
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
        type(): Internal.BlockPredicateType<any>;
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
        test(arg0: any, arg1: any): boolean;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static INSTANCE: Internal.TrueBlockPredicate;
        static readonly CODEC: Internal.Codec<Internal.TrueBlockPredicate>;
    }
    type TrueBlockPredicate_ = TrueBlockPredicate;
    interface CustomJavaToJsWrapperProvider <T> {
        abstract create(arg0: T): Internal.CustomJavaToJsWrapper;
        (arg0: T): Internal.CustomJavaToJsWrapper_;
        readonly NONE: Internal.CustomJavaToJsWrapperProvider<any>;
    }
    type CustomJavaToJsWrapperProvider_<T> = CustomJavaToJsWrapperProvider<T>;
    class PocketPistonItem extends Internal.WearableArtifactItem {
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
    type PocketPistonItem_ = PocketPistonItem;
    class ModuleDescriptor implements Internal.Comparable<Internal.ModuleDescriptor> {
        modifiers(): Internal.Set<Internal.ModuleDescriptor$Modifier>;
        isAutomatic(): boolean;
        uses(): Internal.Set<string>;
        static newOpenModule(arg0: string): Internal.ModuleDescriptor$Builder;
        static read(arg0: Internal.ByteBuffer_): Internal.ModuleDescriptor;
        static read(arg0: Internal.InputStream_, arg1: Internal.Supplier_<Internal.Set<string>>): Internal.ModuleDescriptor;
        exports(): Internal.Set<Internal.ModuleDescriptor$Exports>;
        compareTo(arg0: any): number;
        requires(): Internal.Set<Internal.ModuleDescriptor$Requires>;
        name(): string;
        provides(): Internal.Set<Internal.ModuleDescriptor$Provides>;
        toNameAndVersion(): string;
        opens(): Internal.Set<Internal.ModuleDescriptor$Opens>;
        static newModule(arg0: string, arg1: Internal.Set_<Internal.ModuleDescriptor$Modifier>): Internal.ModuleDescriptor$Builder;
        compareTo(arg0: Internal.ModuleDescriptor_): number;
        version(): Internal.Optional<Internal.ModuleDescriptor$Version>;
        isOpen(): boolean;
        static read(arg0: Internal.InputStream_): Internal.ModuleDescriptor;
        rawVersion(): Internal.Optional<string>;
        mainClass(): Internal.Optional<string>;
        static read(arg0: Internal.ByteBuffer_, arg1: Internal.Supplier_<Internal.Set<string>>): Internal.ModuleDescriptor;
        static newAutomaticModule(arg0: string): Internal.ModuleDescriptor$Builder;
        packages(): Internal.Set<string>;
        static newModule(arg0: string): Internal.ModuleDescriptor$Builder;
        get automatic(): boolean
        get open(): boolean
    }
    type ModuleDescriptor_ = ModuleDescriptor;
    class CachedSupplier <T> implements Internal.Supplier<T> {
        static singleton<T>(arg0: T): Internal.CachedSupplier<T>;
        apply(arg0: Internal.Consumer_<T>): void;
        ifCached(arg0: Internal.Consumer_<T>): void;
        cast<X>(): Internal.CachedSupplier<X>;
        ifPresent(arg0: Internal.Consumer_<T>): void;
        invalidate(): void;
        get(): T;
        isCached(): boolean;
        static cache<T>(arg0: Internal.Supplier_<T>): Internal.CachedSupplier<T>;
        get cached(): boolean
    }
    type CachedSupplier_<T> = CachedSupplier<T>;
    interface WithPersistentData extends Internal.MessageSenderKJS {
        getDisplayName(): Internal.Component;
        setStatusMessage(message: Internal.Component_): void;
        getPersistentData(): Internal.CompoundTag;
        getName(): Internal.Component;
        runCommandSilent(command: string): number;
        tell(message: Internal.Component_): void;
        runCommand(command: string): number;
        get displayName(): Internal.Component
        set statusMessage(message: Internal.Component_)
        get persistentData(): Internal.CompoundTag
        get name(): Internal.Component
    }
    type WithPersistentData_ = WithPersistentData;
    class EndRodBlock extends Internal.RodBlock {
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
    type EndRodBlock_ = EndRodBlock;
    abstract class AbstractIntCollection extends Internal.AbstractCollection<number> implements Internal.IntCollection {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        contains(arg0: number): boolean;
        toIntArray(): number[];
        forEach(arg0: Internal.IntConsumer_): void;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        toArray(arg0: number[]): number[];
        intParallelStream(): Internal.IntStream;
        removeAll(arg0: Internal.IntCollection_): boolean;
        intIterator(): Internal.IntIterator;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        addAll(arg0: Internal.IntCollection_): boolean;
        retainAll(arg0: Internal.IntCollection_): boolean;
        iterator(): Internal.Iterator<any>;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        add(arg0: number): boolean;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        intSpliterator(): Internal.IntSpliterator;
        spliterator(): Internal.Spliterator<any>;
        rem(arg0: number): boolean;
    }
    type AbstractIntCollection_ = AbstractIntCollection;
    class ClientboundOpenBookPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.InteractionHand_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getHand(): Internal.InteractionHand;
        isSkippable(): boolean;
        get hand(): Internal.InteractionHand
        get skippable(): boolean
    }
    type ClientboundOpenBookPacket_ = ClientboundOpenBookPacket;
    interface LootPoolEntry {
        abstract getWeight(arg0: number): number;
        abstract createItemStack(arg0: Internal.Consumer_<Internal.ItemStack>, arg1: Internal.LootContext_): void;
    }
    type LootPoolEntry_ = LootPoolEntry;
    class DrawBuffer {
        constructor(arg0: Internal.RenderType_)
        begin(arg0: number): Internal.DirectVertexConsumer;
        inject(arg0: Internal.BufferBuilderExtension_): void;
        reset(): void;
        hasVertices(): boolean;
    }
    type DrawBuffer_ = DrawBuffer;
    class ClassWrapper <T> extends Internal.Record implements Internal.CustomJavaToJsWrapper {
        constructor(wrappedClass: T)
        convertJavaToJs(cx: Internal.Context_, scope: Internal.Scriptable_, staticType: typeof any): Internal.Scriptable;
        wrappedClass(): T;
    }
    type ClassWrapper_<T> = ClassWrapper<T>;
    class WhoopeeCushionItem extends Internal.WearableArtifactItem {
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
    type WhoopeeCushionItem_ = WhoopeeCushionItem;
    interface Object2IntFunction <K> extends Internal.ToIntFunction<K>, it.unimi.dsi.fastutil.Function<K, number> {
        put(arg0: K, arg1: number): number;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Object2LongFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2IntFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): number;
        removeInt(arg0: any): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Object2ShortFunction<K>;
        containsKey(arg0: any): boolean;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2IntFunction;
        abstract getInt(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        applyAsInt(arg0: K): number;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        size(): number;
        defaultReturnValue(arg0: number): void;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        clear(): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Object2CharFunction<K>;
        getOrDefault(arg0: any, arg1: number): number;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2IntFunction;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        (arg0: any): number;
    }
    type Object2IntFunction_<K> = Object2IntFunction<K>;
    class BlockModel$GuiLight extends Internal.Enum<Internal.BlockModel$GuiLight> {
        static getByName(arg0: string): Internal.BlockModel$GuiLight;
        lightLikeBlock(): boolean;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.BlockModel$GuiLight;
        static values(): Internal.BlockModel$GuiLight[];
        get serializedName(): string
        static readonly SIDE: Internal.BlockModel$GuiLight;
        static readonly FRONT: Internal.BlockModel$GuiLight;
    }
    type BlockModel$GuiLight_ = "side" | BlockModel$GuiLight | "front";
    class ElevatorPulleyBlockEntity extends Internal.PulleyBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        addExceptionToTooltip(arg0: Internal.List_<Internal.Component>): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        clicked(): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
    }
    type ElevatorPulleyBlockEntity_ = ElevatorPulleyBlockEntity;
    /**
     * Invoked when an entity eats food.
    */
    class FoodEatenEventJS extends Internal.EntityEventJS {
        constructor(e: Internal.LivingEntity_, is: Internal.ItemStack_)
        /**
         * The food that was eaten.
        */
        getItem(): Internal.ItemStack;
        /**
         * The food that was eaten.
        */
        get item(): Internal.ItemStack
    }
    type FoodEatenEventJS_ = FoodEatenEventJS;
    class PaintingTextureManager extends Internal.TextureAtlasHolder {
        constructor(arg0: Internal.TextureManager_)
        get(arg0: Internal.PaintingVariant_): Internal.TextureAtlasSprite;
        getName(): string;
        getBackSprite(): Internal.TextureAtlasSprite;
        get name(): string
        get backSprite(): Internal.TextureAtlasSprite
    }
    type PaintingTextureManager_ = PaintingTextureManager;
    class RailBlock extends Internal.BaseRailBlock {
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
        onMinecartPass(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): void;
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
        isValidRailShape(arg0: Internal.RailShape_): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canMakeSlopes(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getRailMaxSpeed(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SHAPE: Internal.EnumProperty<Internal.RailShape>;
    }
    type RailBlock_ = RailBlock;
    class ServerStoppingEvent extends Internal.ServerLifecycleEvent {
        constructor()
        constructor(arg0: Internal.MinecraftServer_)
    }
    type ServerStoppingEvent_ = ServerStoppingEvent;
    class BogeySizes$BogeySize extends Internal.Record {
        constructor(location: ResourceLocation_, wheelRadius: number)
        constructor(arg0: string, arg1: string, arg2: number)
        wheelRadius(): number;
        location(): ResourceLocation;
        increment(): this;
        is(arg0: Internal.BogeySizes$BogeySize_): boolean;
    }
    type BogeySizes$BogeySize_ = BogeySizes$BogeySize;
    class LayerLightSectionStorage$SectionType extends Internal.Enum<Internal.LayerLightSectionStorage$SectionType> {
        static values(): Internal.LayerLightSectionStorage$SectionType[];
        display(): string;
        static valueOf(arg0: string): Internal.LayerLightSectionStorage$SectionType;
        static readonly LIGHT_AND_DATA: Internal.LayerLightSectionStorage$SectionType;
        static readonly LIGHT_ONLY: Internal.LayerLightSectionStorage$SectionType;
        static readonly EMPTY: Internal.LayerLightSectionStorage$SectionType;
    }
    type LayerLightSectionStorage$SectionType_ = LayerLightSectionStorage$SectionType | "light_and_data" | "empty" | "light_only";
    interface MenuAccess <T extends Internal.AbstractContainerMenu> {
        abstract getMenu(): T;
        get menu(): T
        (): T;
    }
    type MenuAccess_<T extends Internal.AbstractContainerMenu> = MenuAccess<T>;
    class ExistingFileHelper {
        constructor(arg0: Internal.Collection_<Internal.Path>, arg1: Internal.Set_<string>, arg2: boolean, arg3: string, arg4: Internal.File_)
        getResource(arg0: ResourceLocation_, arg1: Internal.PackType_, arg2: string, arg3: string): Internal.Resource;
        trackGenerated(arg0: ResourceLocation_, arg1: Internal.ExistingFileHelper$IResourceType_): void;
        getResource(arg0: ResourceLocation_, arg1: Internal.PackType_): Internal.Resource;
        exists(arg0: ResourceLocation_, arg1: Internal.PackType_): boolean;
        exists(arg0: ResourceLocation_, arg1: Internal.PackType_, arg2: string, arg3: string): boolean;
        exists(arg0: ResourceLocation_, arg1: Internal.ExistingFileHelper$IResourceType_): boolean;
        trackGenerated(arg0: ResourceLocation_, arg1: Internal.PackType_, arg2: string, arg3: string): void;
        isEnabled(): boolean;
        getResourceStack(arg0: ResourceLocation_, arg1: Internal.PackType_): Internal.List<Internal.Resource>;
        get enabled(): boolean
    }
    type ExistingFileHelper_ = ExistingFileHelper;
    interface PrimitiveIterator <T, T_CONS> extends Internal.Iterator<T> {
        remove(): void;
        abstract forEachRemaining(arg0: T_CONS): void;
        forEachRemaining(arg0: Internal.Consumer_<T>): void;
        abstract next(): T;
        abstract hasNext(): boolean;
    }
    type PrimitiveIterator_<T, T_CONS> = PrimitiveIterator<T, T_CONS>;
    abstract class ProjectileWeaponItem extends Internal.Item {
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
        abstract getAllSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        static getHeldProjectile(arg0: Internal.LivingEntity_, arg1: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getSupportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>;
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
        abstract getDefaultProjectileRange(): number;
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
        get allSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>
        get creativeTab(): string
        get supportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>
        set armorKnockbackResistance(knockbackResistance: number)
        get defaultProjectileRange(): number
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        static readonly ARROW_OR_FIREWORK: Internal.Predicate<Internal.ItemStack>;
        static readonly ARROW_ONLY: Internal.Predicate<Internal.ItemStack>;
    }
    type ProjectileWeaponItem_ = ProjectileWeaponItem;
    interface PointFreeRule {
        seq(...arg0: Internal.PointFreeRule_[]): this;
        rewriteOrNop<A>(arg0: Internal.PointFree_<A>): Internal.PointFree<A>;
        once(arg0: Internal.PointFreeRule_): this;
        choice(...arg0: Internal.PointFreeRule_[]): this;
        one(arg0: Internal.PointFreeRule_): this;
        many(arg0: Internal.PointFreeRule_): this;
        everywhere(arg0: Internal.PointFreeRule_, arg1: Internal.PointFreeRule_): this;
        all(arg0: Internal.PointFreeRule_): this;
        nop(): this;
        abstract rewrite<A>(arg0: Internal.PointFree_<A>): Internal.Optional<Internal.PointFree<A>>;
        (arg0: Internal.PointFree<A>): Internal.Optional_<Internal.PointFree<A>>;
    }
    type PointFreeRule_ = PointFreeRule;
    interface Reference2CharFunction <K> extends it.unimi.dsi.fastutil.Function<K, string>, Internal.ToIntFunction<K> {
        put(arg0: K, arg1: string): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        removeChar(arg0: any): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, string>;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Reference2LongFunction<K>;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2CharFunction;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Reference2ByteFunction<K>;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        containsKey(arg0: any): boolean;
        abstract getChar(arg0: any): string;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: string): string;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2CharFunction;
        defaultReturnValue(arg0: string): void;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2CharFunction<T>;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Reference2IntFunction<K>;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2CharFunction;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2CharFunction<T>;
        apply(arg0: K): string;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Reference2FloatFunction<K>;
        applyAsInt(arg0: K): number;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2CharFunction;
        size(): number;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2CharFunction;
        clear(): void;
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<K, T>;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Reference2ShortFunction<K>;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2CharFunction;
        (arg0: any): string;
    }
    type Reference2CharFunction_<K> = Reference2CharFunction<K>;
    interface DoubleSupplier {
        abstract getAsDouble(): number;
        get asDouble(): number
        (): number;
    }
    type DoubleSupplier_ = DoubleSupplier;
    class AdvancementHolder {
        save(arg0: Internal.Consumer_<Internal.Advancement>): void;
        static provideLangEntries(arg0: string): Internal.JsonObject;
        titleKey(): string;
        asCreateAdvancement(): Internal.CreateAdvancement;
        id(): ResourceLocation;
        title(): string;
        getTrigger(): Internal.SimpleTrigger;
        description(): string;
        descriptionKey(): string;
        appendToLang(arg0: Internal.JsonObject_): void;
        isAlreadyAwardedTo(arg0: Internal.Player_): boolean;
        awardTo(arg0: Internal.Player_): void;
        get trigger(): Internal.SimpleTrigger
        static readonly ENTRIES_MAP: {"create_enchantment_industry": [Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder, Internal.AdvancementHolder]};
    }
    type AdvancementHolder_ = AdvancementHolder;
    class ScreenEvent$MouseScrolled$Pre extends Internal.ScreenEvent$MouseScrolled {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
    }
    type ScreenEvent$MouseScrolled$Pre_ = ScreenEvent$MouseScrolled$Pre;
    abstract class Particle {
        constructor(arg0: Internal.ClientLevel_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)
        getLifetime(): number;
        setLifetime(arg0: number): void;
        getParticleGroup(): Internal.Optional<Internal.ParticleGroup>;
        setPos(arg0: number, arg1: number, arg2: number): void;
        abstract render(arg0: Internal.VertexConsumer_, arg1: Internal.Camera_, arg2: number): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        scale(arg0: number): this;
        tick(): void;
        abstract getRenderType(): Internal.ParticleRenderType;
        move(arg0: number, arg1: number, arg2: number): void;
        getBoundingBox(): Internal.AABB;
        remove(): void;
        setColor(arg0: number, arg1: number, arg2: number): void;
        isAlive(): boolean;
        setParticleSpeed(arg0: number, arg1: number, arg2: number): void;
        getPos(): Vec3d;
        shouldCull(): boolean;
        setPower(arg0: number): this;
        get lifetime(): number
        set lifetime(arg0: number)
        get particleGroup(): Internal.Optional<Internal.ParticleGroup>
        set boundingBox(arg0: Internal.AABB_)
        get renderType(): Internal.ParticleRenderType
        get boundingBox(): Internal.AABB
        get alive(): boolean
        get pos(): Vec3d
        set power(arg0: number)
    }
    type Particle_ = Particle;
    interface Cache <K, V> {
        abstract get(arg0: K, arg1: Internal.Callable_<V>): V;
        abstract getAllPresent(arg0: Internal.Iterable_<any>): Internal.ImmutableMap<K, V>;
        abstract asMap(): Internal.ConcurrentMap<K, V>;
        abstract invalidateAll(arg0: Internal.Iterable_<any>): void;
        abstract invalidateAll(): void;
        abstract getIfPresent(arg0: any): V;
        abstract stats(): Internal.CacheStats;
        abstract cleanUp(): void;
        abstract invalidate(arg0: any): void;
        abstract size(): number;
        abstract putAll(arg0: Internal.Map_<K, V>): void;
        abstract put(arg0: K, arg1: V): void;
    }
    type Cache_<K, V> = Cache<K, V>;
    class FurnaceMenu extends Internal.AbstractFurnaceMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Container_, arg3: any_)
        constructor(arg0: number, arg1: Internal.Inventory_)
    }
    type FurnaceMenu_ = FurnaceMenu;
    abstract class FileChannel extends Internal.AbstractInterruptibleChannel implements Internal.SeekableByteChannel, Internal.ScatteringByteChannel, Internal.GatheringByteChannel {
        lock(): Internal.FileLock;
        abstract write(arg0: Internal.ByteBuffer_): number;
        abstract transferFrom(arg0: Internal.ReadableByteChannel_, arg1: number, arg2: number): number;
        abstract read(arg0: Internal.ByteBuffer_): number;
        static open(arg0: Internal.Path_, arg1: Internal.Set_<Internal.OpenOption>, ...arg2: any_<any>[]): Internal.FileChannel;
        abstract lock(arg0: number, arg1: number, arg2: boolean): Internal.FileLock;
        abstract position(): number;
        tryLock(): Internal.FileLock;
        abstract size(): number;
        read(arg0: Internal.ByteBuffer_[]): number;
        abstract map(arg0: Internal.FileChannel$MapMode_, arg1: number, arg2: number): Internal.MappedByteBuffer;
        abstract read(arg0: Internal.ByteBuffer_, arg1: number): number;
        abstract read(arg0: Internal.ByteBuffer_[], arg1: number, arg2: number): number;
        abstract position(arg0: number): this;
        abstract write(arg0: Internal.ByteBuffer_[], arg1: number, arg2: number): number;
        static open(arg0: Internal.Path_, ...arg1: Internal.OpenOption_[]): Internal.FileChannel;
        abstract truncate(arg0: number): this;
        abstract transferTo(arg0: number, arg1: number, arg2: Internal.WritableByteChannel_): number;
        abstract tryLock(arg0: number, arg1: number, arg2: boolean): Internal.FileLock;
        abstract force(arg0: boolean): void;
        write(arg0: Internal.ByteBuffer_[]): number;
        abstract write(arg0: Internal.ByteBuffer_, arg1: number): number;
    }
    type FileChannel_ = FileChannel;
    class HauntedBellBlock extends Internal.AbstractBellBlock<Internal.HauntedBellBlockEntity> {
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
        getBlockEntityClass(): typeof Internal.HauntedBellBlockEntity;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.HauntedBellBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.HauntedBellBlockEntity>): void;
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
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.HauntedBellBlockEntity;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.HauntedBellBlockEntity>;
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
        getBlockEntityType(): Internal.BlockEntityType<Internal.HauntedBellBlockEntity>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        get blockEntityClass(): typeof Internal.HauntedBellBlockEntity
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityType(): Internal.BlockEntityType<Internal.HauntedBellBlockEntity>
    }
    type HauntedBellBlock_ = HauntedBellBlock;
    interface MapLike <T> {
        abstract get(arg0: string): T;
        forMap<T>(arg0: Internal.Map_<T, T>, arg1: Internal.DynamicOps_<T>): this;
        abstract get(arg0: T): T;
        abstract entries(): Internal.Stream<com.mojang.datafixers.util.Pair<T, T>>;
    }
    type MapLike_<T> = MapLike<T>;
    interface RecipeComponentWithParent <T> extends Internal.RecipeComponent<T> {
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<T, O>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<T>;
        abstract parentComponent(): Internal.RecipeComponent<T>;
        isOutput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<T>;
        read(recipe: Internal.RecipeJS_, from: any): T;
        orSelf(): Internal.RecipeComponent<T>;
        checkEmpty(key: Internal.RecipeKey_<T>, value: T): string;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T>;
        replaceInput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): T;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        checkValueHasChanged(oldValue: T, newValue: T): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        replaceOutput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): T;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<T>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<T>;
        isInput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, T>>;
        asArray(): Internal.ArrayRecipeComponent<T>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, T>>;
        write(recipe: Internal.RecipeJS_, value: T): Internal.JsonElement;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, map: Internal.Map_<any, any>): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<T, O>;
        (): Internal.RecipeComponent_<T>;
    }
    type RecipeComponentWithParent_<T> = RecipeComponentWithParent<T>;
    class WorldPreset {
        constructor(arg0: Internal.Map_<Internal.ResourceKey<Internal.LevelStem>, Internal.LevelStem>)
        overworld(): Internal.Optional<Internal.LevelStem>;
        createWorldDimensions(): Internal.WorldDimensions;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.WorldPreset>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.WorldPreset>>;
    }
    type WorldPreset_ = WorldPreset | Special.WorldPreset;
    class ShearsItemBuilder extends Internal.ItemBuilder {
        constructor(i: ResourceLocation_)
        createObject(): Internal.Item;
        static isCustomShears(stack: Internal.ItemStack_): boolean;
        speedBaseline(f: number): this;
        static readonly TAG: ResourceLocation;
    }
    type ShearsItemBuilder_ = ShearsItemBuilder;
    class ForgeConfigSpec extends Internal.UnmodifiableConfigWrapper<Internal.UnmodifiableConfig> implements Internal.IConfigSpec<Internal.ForgeConfigSpec> {
        getOrElse<T>(arg0: string, arg1: T): T;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getLong(arg0: string): number;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getInt(arg0: Internal.List_<string>): number;
        getByteOrElse(arg0: string, arg1: number): number;
        getShortOrElse(arg0: string, arg1: number): number;
        getLevelComment(arg0: Internal.List_<string>): string;
        get<T>(arg0: Internal.List_<string>): T;
        getCharOrElse(arg0: string, arg1: string): string;
        contains(arg0: string): boolean;
        getShort(arg0: Internal.List_<string>): number;
        getShortOrElse(arg0: Internal.List_<string>, arg1: number): number;
        isCorrecting(): boolean;
        isNull(arg0: Internal.List_<string>): boolean;
        getIntOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        getOptionalLong(arg0: string): Internal.OptionalLong;
        getOptional<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getOptional<T>(arg0: string): Internal.Optional<T>;
        getShort(arg0: string): number;
        getOrElse<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        setConfig(arg0: Internal.CommentedConfig_): void;
        correct(arg0: Internal.CommentedConfig_, arg1: Internal.ConfigSpec$CorrectionListener_, arg2: Internal.ConfigSpec$CorrectionListener_): number;
        getChar(arg0: string): string;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: T): T;
        getOptionalLong(arg0: Internal.List_<string>): Internal.OptionalLong;
        getChar(arg0: Internal.List_<string>): string;
        afterReload(): void;
        getValues(): Internal.UnmodifiableConfig;
        get<T>(arg0: string): T;
        getLong(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        apply<T>(arg0: Internal.List_<string>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getInt(arg0: string): number;
        isLoaded(): boolean;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: number): number;
        isCorrect(arg0: Internal.CommentedConfig_): boolean;
        getIntOrElse(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
        getLevelTranslationKey(arg0: Internal.List_<string>): string;
        correct(arg0: Internal.CommentedConfig_, arg1: Internal.ConfigSpec$CorrectionListener_): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getRaw<T>(arg0: string): T;
        getIntOrElse(arg0: string, arg1: Internal.IntSupplier_): number;
        isNull(arg0: string): boolean;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): Internal.Optional<T>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getCharOrElse(arg0: Internal.List_<string>, arg1: string): string;
        getByte(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.Optional<T>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getLongOrElse(arg0: string, arg1: number): number;
        getByteOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getOptionalInt(arg0: string): Internal.OptionalInt;
        self(): this;
        getLongOrElse(arg0: string, arg1: Internal.LongSupplier_): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        getByte(arg0: string): number;
        getIntOrElse(arg0: string, arg1: number): number;
        save(): void;
        correct(arg0: Internal.CommentedConfig_): number;
        getOptionalInt(arg0: Internal.List_<string>): Internal.OptionalInt;
        acceptConfig(arg0: Internal.CommentedConfig_): void;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getSpec(): Internal.UnmodifiableConfig;
        apply<T>(arg0: string): T;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        get correcting(): boolean
        set config(arg0: Internal.CommentedConfig_)
        get values(): Internal.UnmodifiableConfig
        get loaded(): boolean
        get spec(): Internal.UnmodifiableConfig
    }
    type ForgeConfigSpec_ = ForgeConfigSpec;
    interface IntBinaryOperator {
        abstract applyAsInt(arg0: number, arg1: number): number;
        (arg0: number, arg1: number): number;
    }
    type IntBinaryOperator_ = IntBinaryOperator;
    interface IColorHelper {
        abstract getColors(arg0: Internal.ItemStack_, arg1: number): Internal.List<number>;
        abstract getClosestColorName(arg0: number): string;
        abstract getColors(arg0: Internal.TextureAtlasSprite_, arg1: number, arg2: number): Internal.List<number>;
    }
    type IColorHelper_ = IColorHelper;
    interface MenuConstructor {
        abstract createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        (arg0: number, arg1: Internal.Inventory, arg2: Internal.Player): Internal.AbstractContainerMenu_;
    }
    type MenuConstructor_ = MenuConstructor;
    class ItemFrame extends Internal.HangingEntity implements Internal.ItemFrameEntityKJS {
        constructor(arg0: Internal.EntityType_<Internal.ItemFrame>, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_)
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_)
        constructor(arg0: Internal.EntityType_<Internal.ItemFrame>, arg1: Internal.Level_)
        getRotateItemSound(): Internal.SoundEvent;
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        hasFramedMap(): boolean;
        isAmbientCreature(): boolean;
        getStepHeight(): number;
        getAddItemSound(): Internal.SoundEvent;
        isMonster(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isOnScoreboardTeam(teamId: string): boolean;
        setItem(arg0: Internal.ItemStack_): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getMotionY(): number;
        getName(): Internal.Component;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        canStartSwimming(): boolean;
        setRotation(arg0: number): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        isLiving(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        alwaysAccepts(): boolean;
        setItem(arg0: Internal.ItemStack_, arg1: boolean): void;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getRemoveItemSound(): Internal.SoundEvent;
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
        getLevel(): Internal.Level;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFramedMapId(): Internal.OptionalInt;
        getFacing(): Internal.Direction;
        getScriptType(): Internal.ScriptType;
        getRotation(): number;
        isMultipartEntity(): boolean;
        shouldRiderSit(): boolean;
        getBreakSound(): Internal.SoundEvent;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getMotionX(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        isWaterCreature(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        serializeNBT(): Internal.CompoundTag;
        getPlaceSound(): Internal.SoundEvent;
        setStatusMessage(message: Internal.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isFrame(): boolean;
        getAnalogOutput(): number;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        getDistance(x: number, y: number, z: number): number;
        get rotateItemSound(): Internal.SoundEvent
        set motionY(y: number)
        get peacefulCreature(): boolean
        get ambientCreature(): boolean
        get stepHeight(): number
        get addItemSound(): Internal.SoundEvent
        get monster(): boolean
        set item(arg0: Internal.ItemStack_)
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        set rotation(arg0: number)
        set y(y: number)
        get living(): boolean
        get removeItemSound(): Internal.SoundEvent
        get server(): Internal.MinecraftServer
        get displayName(): Internal.Component
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get framedMapId(): Internal.OptionalInt
        get facing(): Internal.Direction
        get scriptType(): Internal.ScriptType
        get rotation(): number
        get multipartEntity(): boolean
        get breakSound(): Internal.SoundEvent
        get parts(): Internal.PartEntity<any>[]
        get motionX(): number
        get waterCreature(): boolean
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        set z(z: number)
        get placeSound(): Internal.SoundEvent
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get analogOutput(): number
        get profile(): Internal.GameProfile
        static readonly NUM_ROTATIONS: 8;
    }
    type ItemFrame_ = ItemFrame;
    class SpringLauncherHeadBlock extends Internal.DirectionalBlock {
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
        static readonly SHORT: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type SpringLauncherHeadBlock_ = SpringLauncherHeadBlock;
    interface ItemSteerable {
        abstract boost(): boolean;
        (): boolean;
    }
    type ItemSteerable_ = ItemSteerable;
    interface DirectoryStream <T> extends Internal.Closeable, Internal.Iterable<T> {
        forEach(arg0: Internal.Consumer_<T>): void;
        abstract close(): void;
        spliterator(): Internal.Spliterator<T>;
        abstract iterator(): Internal.Iterator<T>;
    }
    type DirectoryStream_<T> = DirectoryStream<T>;
    class ProgressMeter {
        constructor(arg0: string, arg1: number, arg2: number, arg3: Internal.Message_)
        name(): string;
        current(): number;
        label(): Internal.Message;
        steps(): number;
        increment(): void;
        progress(): number;
        setAbsolute(arg0: number): void;
        complete(): void;
        label(arg0: string): void;
        set absolute(arg0: number)
    }
    type ProgressMeter_ = ProgressMeter;
    class MapColor {
        static getColorFromPackedId(arg0: number): number;
        calculateRGBColor(arg0: Internal.MapColor$Brightness_): number;
        static byId(arg0: number): Internal.MapColor;
        getPackedId(arg0: Internal.MapColor$Brightness_): number;
        static readonly FIRE: Internal.MapColor;
        static readonly CRIMSON_NYLIUM: Internal.MapColor;
        static readonly GOLD: Internal.MapColor;
        static readonly DEEPSLATE: Internal.MapColor;
        static readonly TERRACOTTA_GRAY: Internal.MapColor;
        static readonly COLOR_MAGENTA: Internal.MapColor;
        static readonly DIAMOND: Internal.MapColor;
        static readonly COLOR_BLACK: Internal.MapColor;
        static readonly WOOL: Internal.MapColor;
        static readonly RAW_IRON: Internal.MapColor;
        static readonly TERRACOTTA_BROWN: Internal.MapColor;
        readonly id: number;
        static readonly QUARTZ: Internal.MapColor;
        static readonly COLOR_BLUE: Internal.MapColor;
        static readonly WOOD: Internal.MapColor;
        static readonly TERRACOTTA_MAGENTA: Internal.MapColor;
        static readonly COLOR_LIGHT_GREEN: Internal.MapColor;
        static readonly EMERALD: Internal.MapColor;
        static readonly DIRT: Internal.MapColor;
        static readonly COLOR_RED: Internal.MapColor;
        static readonly TERRACOTTA_CYAN: Internal.MapColor;
        static readonly COLOR_GREEN: Internal.MapColor;
        static readonly METAL: Internal.MapColor;
        static readonly WARPED_WART_BLOCK: Internal.MapColor;
        static readonly NETHER: Internal.MapColor;
        static readonly TERRACOTTA_PURPLE: Internal.MapColor;
        static readonly COLOR_GRAY: Internal.MapColor;
        static readonly WARPED_STEM: Internal.MapColor;
        static readonly STONE: Internal.MapColor;
        static readonly COLOR_CYAN: Internal.MapColor;
        static readonly COLOR_LIGHT_GRAY: Internal.MapColor;
        static readonly TERRACOTTA_GREEN: Internal.MapColor;
        static readonly GLOW_LICHEN: Internal.MapColor;
        static readonly COLOR_YELLOW: Internal.MapColor;
        static readonly TERRACOTTA_BLACK: Internal.MapColor;
        static readonly CRIMSON_HYPHAE: Internal.MapColor;
        static readonly COLOR_BROWN: Internal.MapColor;
        static readonly SAND: Internal.MapColor;
        static readonly NONE: Internal.MapColor;
        static readonly ICE: Internal.MapColor;
        static readonly TERRACOTTA_LIGHT_GRAY: Internal.MapColor;
        static readonly COLOR_ORANGE: Internal.MapColor;
        static readonly TERRACOTTA_WHITE: Internal.MapColor;
        static readonly TERRACOTTA_BLUE: Internal.MapColor;
        static readonly WARPED_NYLIUM: Internal.MapColor;
        static readonly PLANT: Internal.MapColor;
        static readonly COLOR_LIGHT_BLUE: Internal.MapColor;
        static readonly LAPIS: Internal.MapColor;
        static readonly TERRACOTTA_YELLOW: Internal.MapColor;
        static readonly CRIMSON_STEM: Internal.MapColor;
        static readonly WARPED_HYPHAE: Internal.MapColor;
        static readonly SNOW: Internal.MapColor;
        static readonly WATER: Internal.MapColor;
        static readonly PODZOL: Internal.MapColor;
        static readonly CLAY: Internal.MapColor;
        static readonly COLOR_PURPLE: Internal.MapColor;
        static readonly GRASS: Internal.MapColor;
        static readonly TERRACOTTA_LIGHT_BLUE: Internal.MapColor;
        static readonly TERRACOTTA_ORANGE: Internal.MapColor;
        static readonly TERRACOTTA_RED: Internal.MapColor;
        static readonly TERRACOTTA_LIGHT_GREEN: Internal.MapColor;
        static readonly COLOR_PINK: Internal.MapColor;
        static readonly TERRACOTTA_PINK: Internal.MapColor;
        readonly col: number;
    }
    type MapColor_ = MapColor;
    class ServerboundPickItemPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getSlot(): number;
        isSkippable(): boolean;
        get slot(): number
        get skippable(): boolean
    }
    type ServerboundPickItemPacket_ = ServerboundPickItemPacket;
}
declare namespace it.unimi.dsi.fastutil.ints {
    interface IntConsumer extends Internal.Consumer<number>, Internal.IntConsumer {
        andThen(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): this;
        /**
         * @deprecated
        */
        accept(arg0: any): void;
        /**
         * @deprecated
        */
        andThen(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        abstract accept(arg0: number): void;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        andThen(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        (arg0: number): void;
    }
    type IntConsumer_ = IntConsumer;
}
