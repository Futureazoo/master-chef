/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    interface IExtendedHangingSign {
        abstract getExtension(): Internal.HangingSignTileExtension;
        get extension(): Internal.HangingSignTileExtension
        (): Internal.HangingSignTileExtension_;
    }
    type IExtendedHangingSign_ = IExtendedHangingSign;
    class ModifiableBiomeInfo {
        constructor(arg0: Internal.ModifiableBiomeInfo$BiomeInfo_)
        getModifiedBiomeInfo(): Internal.ModifiableBiomeInfo$BiomeInfo;
        applyBiomeModifiers(arg0: Internal.Holder_<Internal.Biome>, arg1: Internal.List_<Internal.BiomeModifier>): void;
        get(): Internal.ModifiableBiomeInfo$BiomeInfo;
        getOriginalBiomeInfo(): Internal.ModifiableBiomeInfo$BiomeInfo;
        get modifiedBiomeInfo(): Internal.ModifiableBiomeInfo$BiomeInfo
        get originalBiomeInfo(): Internal.ModifiableBiomeInfo$BiomeInfo
    }
    type ModifiableBiomeInfo_ = ModifiableBiomeInfo;
    abstract class ThrowableProjectile extends Internal.Projectile {
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
    type ThrowableProjectile_ = ThrowableProjectile;
    class HoverEvent$EntityTooltipInfo {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.UUID_, arg2: Internal.Component_)
        static create(arg0: Internal.JsonElement_): Internal.HoverEvent$EntityTooltipInfo;
        getTooltipLines(): Internal.List<Internal.Component>;
        serialize(): Internal.JsonElement;
        static create(arg0: Internal.Component_): Internal.HoverEvent$EntityTooltipInfo;
        get tooltipLines(): Internal.List<Internal.Component>
        readonly id: Internal.UUID;
        readonly name: Internal.Component;
        readonly type: Internal.EntityType<any>;
    }
    type HoverEvent$EntityTooltipInfo_ = HoverEvent$EntityTooltipInfo;
    class LivingEvent$LivingTickEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_)
        getEntity(): Internal.Entity;
        get entity(): Internal.Entity
    }
    type LivingEvent$LivingTickEvent_ = LivingEvent$LivingTickEvent;
    class ForgeRegistry <V> implements Internal.ForgeRegistryForgeAccessor<any>, Internal.IForgeRegistryInternal<V>, Internal.IForgeRegistryModifiable<V> {
        getResourceKey(arg0: V): Internal.Optional<Internal.ResourceKey<V>>;
        getKey(arg0: number): Internal.ResourceKey<V>;
        iterator(): Internal.Iterator<V>;
        getDelegateOrThrow(arg0: V): Internal.Holder$Reference<V>;
        addAlias(arg0: ResourceLocation_, arg1: ResourceLocation_): void;
        getValues(): Internal.Collection<V>;
        getHolder(arg0: V): Internal.Optional<Internal.Holder<V>>;
        getHolder(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder<V>>;
        spliterator(): Internal.Spliterator<V>;
        getID(arg0: V): number;
        getMissingEvent(arg0: ResourceLocation_, arg1: Internal.Map_<ResourceLocation, number>): Internal.MissingMappingsEvent;
        isEmpty(): boolean;
        register(arg0: ResourceLocation_, arg1: V): void;
        getSlaveMap<T>(arg0: ResourceLocation_, arg1: T): T;
        getDelegate(arg0: V): Internal.Optional<Internal.Holder$Reference<V>>;
        getValue(arg0: number): V;
        containsKey(arg0: ResourceLocation_): boolean;
        forEach(arg0: Internal.Consumer_<V>): void;
        getHolder(arg0: ResourceLocation_): Internal.Optional<Internal.Holder<V>>;
        getDelegate(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder$Reference<V>>;
        register(arg0: number, arg1: ResourceLocation_, arg2: V): void;
        puzzleslib$getAdd(): Internal.IForgeRegistry$AddCallback<any>;
        getCodec(): Internal.Codec<V>;
        getRaw(arg0: ResourceLocation_): V;
        puzzleslib$setAdd(arg0: Internal.IForgeRegistry$AddCallback_<any>): void;
        freeze(): void;
        getDefaultKey(): ResourceLocation;
        getDelegate(arg0: ResourceLocation_): Internal.Optional<Internal.Holder$Reference<V>>;
        setSlaveMap(arg0: ResourceLocation_, arg1: any): void;
        getID(arg0: ResourceLocation_): number;
        remove(arg0: ResourceLocation_): V;
        getKeys(): Internal.Set<ResourceLocation>;
        tags(): Internal.ITagManager<V>;
        register(arg0: string, arg1: V): void;
        containsValue(arg0: V): boolean;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<V>>;
        isLocked(): boolean;
        unfreeze(): void;
        bake(): void;
        getValue(arg0: ResourceLocation_): V;
        clear(): void;
        getEntries(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<V>, V>>;
        getRegistryName(): ResourceLocation;
        getDelegateOrThrow(arg0: Internal.ResourceKey_<V>): Internal.Holder$Reference<V>;
        makeSnapshot(): Internal.ForgeRegistry$Snapshot;
        loadIds(arg0: Internal.Map_<ResourceLocation, number>, arg1: Internal.Map_<ResourceLocation, string>, arg2: Internal.Map_<ResourceLocation, number>, arg3: Internal.Map_<ResourceLocation, Internal.IdMappingEvent$IdRemapping>, arg4: Internal.ForgeRegistry_<V>, arg5: ResourceLocation_): void;
        getKey(arg0: V): ResourceLocation;
        getDelegateOrThrow(arg0: ResourceLocation_): Internal.Holder$Reference<V>;
        get values(): Internal.Collection<V>
        get empty(): boolean
        get codec(): Internal.Codec<V>
        get defaultKey(): ResourceLocation
        get keys(): Internal.Set<ResourceLocation>
        get registryKey(): Internal.ResourceKey<Internal.Registry<V>>
        get locked(): boolean
        get entries(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<V>, V>>
        get registryName(): ResourceLocation
        static REGISTRIES: Internal.MarkerManager$Log4jMarker;
    }
    type ForgeRegistry_<V> = ForgeRegistry<V>;
    class MultifaceSpreader$SpreadPos extends Internal.Record {
        constructor(arg0: BlockPos_, arg1: Internal.Direction_)
        face(): Internal.Direction;
        pos(): BlockPos;
    }
    type MultifaceSpreader$SpreadPos_ = MultifaceSpreader$SpreadPos;
    interface TextFilter {
        abstract processMessageBundle(arg0: Internal.List_<string>): Internal.CompletableFuture<Internal.List<Internal.FilteredText>>;
        abstract processStreamMessage(arg0: string): Internal.CompletableFuture<Internal.FilteredText>;
        abstract leave(): void;
        abstract join(): void;
        readonly DUMMY: Internal.TextFilter;
    }
    type TextFilter_ = TextFilter;
    class ProtoChunk extends Internal.ChunkAccess {
        constructor(arg0: Internal.ChunkPos_, arg1: Internal.UpgradeData_, arg2: Internal.LevelChunkSection_[], arg3: any_<Internal.Block>, arg4: any_<Internal.Fluid>, arg5: Internal.LevelHeightAccessor_, arg6: Internal.Registry_<Internal.Biome>, arg7: Internal.BlendingData_)
        constructor(arg0: Internal.ChunkPos_, arg1: Internal.UpgradeData_, arg2: Internal.LevelHeightAccessor_, arg3: Internal.Registry_<Internal.Biome>, arg4: Internal.BlendingData_)
        getMinSection(): number;
        setStatus(arg0: Internal.ChunkStatus_): void;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getSectionIndex(arg0: number): number;
        getMaxSection(): number;
        unpackFluidTicks(): Internal.LevelChunkTicks<Internal.Fluid>;
        getMaxBuildHeight(): number;
        getOrCreateCarvingMask(arg0: Internal.GenerationStep$Carving_): Internal.CarvingMask;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        unpackBlockTicks(): Internal.LevelChunkTicks<Internal.Block>;
        getSectionYFromSectionIndex(arg0: number): number;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        setLightEngine(arg0: Internal.LevelLightEngine_): void;
        setCarvingMask(arg0: Internal.GenerationStep$Carving_, arg1: Internal.CarvingMask_): void;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        static unpackOffsetCoordinates(arg0: number, arg1: number, arg2: Internal.ChunkPos_): BlockPos;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getModelDataManager(): Internal.ModelDataManager;
        isOutsideBuildHeight(arg0: number): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        setBelowZeroRetrogen(arg0: Internal.BelowZeroRetrogen_): void;
        addEntity(arg0: Internal.CompoundTag_): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        static packOffsetCoordinates(arg0: BlockPos_): number;
        getSectionsCount(): number;
        getBlockEntities(): Internal.Map<BlockPos, Internal.BlockEntity>;
        getBlockEntityNbts(): Internal.Map<BlockPos, Internal.CompoundTag>;
        getMaxLightLevel(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getCarvingMask(arg0: Internal.GenerationStep$Carving_): Internal.CarvingMask;
        getEntities(): Internal.List<Internal.CompoundTag>;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        set status(arg0: Internal.ChunkStatus_)
        get maxSection(): number
        get maxBuildHeight(): number
        set lightEngine(arg0: Internal.LevelLightEngine_)
        get modelDataManager(): Internal.ModelDataManager
        set belowZeroRetrogen(arg0: Internal.BelowZeroRetrogen_)
        get sectionsCount(): number
        get blockEntities(): Internal.Map<BlockPos, Internal.BlockEntity>
        get blockEntityNbts(): Internal.Map<BlockPos, Internal.CompoundTag>
        get maxLightLevel(): number
        get entities(): Internal.List<Internal.CompoundTag>
    }
    type ProtoChunk_ = ProtoChunk;
    class CampfireCookingRecipe extends Internal.AbstractCookingRecipe {
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
    type CampfireCookingRecipe_ = CampfireCookingRecipe;
    class PartDefinition {
        bake(arg0: number, arg1: number): Internal.ModelPart;
        getChild(arg0: string): this;
        addOrReplaceChild(arg0: string, arg1: Internal.CubeListBuilder_, arg2: Internal.PartPose_): this;
    }
    type PartDefinition_ = PartDefinition;
    class MeshDefinition {
        constructor()
        getRoot(): Internal.PartDefinition;
        get root(): Internal.PartDefinition
    }
    type MeshDefinition_ = MeshDefinition;
    class LazyOptional <T> {
        cast<X>(): Internal.LazyOptional<X>;
        invalidate(): void;
        orElseThrow<X extends Internal.Throwable>(arg0: Internal.NonNullSupplier_<X>): T;
        filter(arg0: Internal.NonNullPredicate_<T>): Internal.Optional<T>;
        resolve(): Internal.Optional<T>;
        lazyMap<U>(arg0: Internal.NonNullFunction_<T, U>): Internal.LazyOptional<U>;
        orElse(arg0: T): T;
        isPresent(): boolean;
        static of<T>(arg0: Internal.NonNullSupplier_<T>): Internal.LazyOptional<T>;
        orElseGet(arg0: Internal.NonNullSupplier_<T>): T;
        map<U>(arg0: Internal.NonNullFunction_<T, U>): Internal.Optional<U>;
        ifPresent(arg0: Internal.NonNullConsumer_<T>): void;
        addListener(arg0: Internal.NonNullConsumer_<Internal.LazyOptional<T>>): void;
        static empty<T>(): Internal.LazyOptional<T>;
        get present(): boolean
    }
    type LazyOptional_<T> = LazyOptional<T>;
    interface TemporalAccessor {
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        get(arg0: Internal.TemporalField_): number;
        abstract getLong(arg0: Internal.TemporalField_): number;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        abstract isSupported(arg0: Internal.TemporalField_): boolean;
    }
    type TemporalAccessor_ = TemporalAccessor;
    class GeodeBlockSettings {
        constructor(arg0: Internal.BlockStateProvider_, arg1: Internal.BlockStateProvider_, arg2: Internal.BlockStateProvider_, arg3: Internal.BlockStateProvider_, arg4: Internal.BlockStateProvider_, arg5: Internal.List_<Internal.BlockState>, arg6: Internal.TagKey_<Internal.Block>, arg7: Internal.TagKey_<Internal.Block>)
        readonly innerLayerProvider: Internal.BlockStateProvider;
        readonly middleLayerProvider: Internal.BlockStateProvider;
        readonly fillingProvider: Internal.BlockStateProvider;
        readonly alternateInnerLayerProvider: Internal.BlockStateProvider;
        readonly outerLayerProvider: Internal.BlockStateProvider;
        readonly invalidBlocks: Internal.TagKey<Internal.Block>;
        static readonly CODEC: Internal.Codec<Internal.GeodeBlockSettings>;
        readonly innerPlacements: Internal.List<Internal.BlockState>;
        readonly cannotReplace: Internal.TagKey<Internal.Block>;
    }
    type GeodeBlockSettings_ = GeodeBlockSettings;
    interface Functor <F extends Internal.K1, Mu extends Internal.Functor$Mu> extends Internal.Kind1<F, Mu> {
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>): Internal.Products$P11<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        group<T1, T2, T3, T4, T5, T6>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>): Internal.Products$P15<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        abstract map<T, R>(arg0: Internal.Function_<T, R>, arg1: Internal.App_<F, T>): Internal.App<F, R>;
        group<T1, T2>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>): Internal.Products$P2<F, T1, T2>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>): Internal.Products$P10<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>): Internal.Products$P13<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>): Internal.Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        group<T1, T2, T3, T4>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        group<T1, T2, T3, T4, T5>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        group<T1>(arg0: Internal.App_<F, T1>): Internal.Products$P1<F, T1>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>): Internal.Products$P14<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>): Internal.Products$P12<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        unbox<F extends Internal.K1, Mu extends Internal.Functor$Mu>(arg0: Internal.App_<Mu, F>): this;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>, arg15: Internal.App_<F, T16>): Internal.Products$P16<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        group<T1, T2, T3>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>): Internal.Products$P3<F, T1, T2, T3>;
        (arg0: Internal.Function<T, R>, arg1: Internal.App<F, T>): Internal.App_<F, R>;
    }
    type Functor_<F extends Internal.K1, Mu extends Internal.Functor$Mu> = Functor<F, Mu>;
    interface Object2DoubleFunction <K> extends it.unimi.dsi.fastutil.Function<K, number>, Internal.ToDoubleFunction<K> {
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        put(arg0: K, arg1: number): number;
        andThenLong(arg0: Internal.Double2LongFunction_): Internal.Object2LongFunction<K>;
        andThenReference<T>(arg0: Internal.Double2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2DoubleFunction;
        andThenByte(arg0: Internal.Double2ByteFunction_): Internal.Object2ByteFunction<K>;
        containsKey(arg0: any): boolean;
        andThenFloat(arg0: Internal.Double2FloatFunction_): Internal.Object2FloatFunction<K>;
        andThenDouble(arg0: Internal.Double2DoubleFunction_): this;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2DoubleFunction<T>;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2DoubleFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(arg0: number): void;
        applyAsDouble(arg0: K): number;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2DoubleFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2DoubleFunction;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2DoubleFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2DoubleFunction;
        removeDouble(arg0: any): number;
        andThenShort(arg0: Internal.Double2ShortFunction_): Internal.Object2ShortFunction<K>;
        defaultReturnValue(): number;
        apply(arg0: K): number;
        andThenObject<T>(arg0: Internal.Double2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        size(): number;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2DoubleFunction;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2DoubleFunction;
        andThenChar(arg0: Internal.Double2CharFunction_): Internal.Object2CharFunction<K>;
        clear(): void;
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        abstract getDouble(arg0: any): number;
        andThenInt(arg0: Internal.Double2IntFunction_): Internal.Object2IntFunction<K>;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        (arg0: any): number;
    }
    type Object2DoubleFunction_<K> = Object2DoubleFunction<K>;
    interface PermissionNode$PermissionResolver <T> {
        abstract resolve(arg0: Internal.ServerPlayer_, arg1: Internal.UUID_, ...arg2: any_<any>[]): T;
        (arg0: Internal.ServerPlayer, arg1: Internal.UUID, ...arg2: any[]): T;
    }
    type PermissionNode$PermissionResolver_<T> = PermissionNode$PermissionResolver<T>;
    class EntityArgument implements Internal.ArgumentType<net.minecraft.commands.arguments.selector.EntitySelector> {
        static getOptionalPlayers(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): Internal.Collection<Internal.ServerPlayer>;
        static getPlayer(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): Internal.ServerPlayer;
        static getEntities(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): Internal.Collection<Internal.Entity>;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        static player(): Internal.EntityArgument;
        static getPlayers(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): Internal.Collection<Internal.ServerPlayer>;
        static getOptionalEntities(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): Internal.Collection<Internal.Entity>;
        getExamples(): Internal.Collection<string>;
        static players(): Internal.EntityArgument;
        static entities(): Internal.EntityArgument;
        parse(arg0: Internal.StringReader_): any;
        static entity(): Internal.EntityArgument;
        static getEntity(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): Internal.Entity;
        get examples(): Internal.Collection<string>
        static readonly ERROR_NOT_SINGLE_ENTITY: Internal.SimpleCommandExceptionType;
        static readonly ERROR_NOT_SINGLE_PLAYER: Internal.SimpleCommandExceptionType;
        static readonly ERROR_SELECTORS_NOT_ALLOWED: Internal.SimpleCommandExceptionType;
        static readonly NO_PLAYERS_FOUND: Internal.SimpleCommandExceptionType;
        static readonly ERROR_ONLY_PLAYERS_ALLOWED: Internal.SimpleCommandExceptionType;
        static readonly NO_ENTITIES_FOUND: Internal.SimpleCommandExceptionType;
    }
    type EntityArgument_ = EntityArgument;
    class FunnelBlockEntity extends Internal.SmartBlockEntity implements Internal.IHaveHoveringInformation {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        determineCurrentMode(): Internal.FunnelBlockEntity$Mode;
        getFlapOffset(): number;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        onTransfer(arg0: Internal.ItemStack_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasFlap(): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModeToExtract(): Internal.ItemHelper$ExtractionCountMode;
        flap(arg0: boolean): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getAmountToExtract(): number;
        addToTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean): boolean;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get flapOffset(): number
        get modeToExtract(): Internal.ItemHelper$ExtractionCountMode
        get modelData(): Internal.ModelData
        get amountToExtract(): number
    }
    type FunnelBlockEntity_ = FunnelBlockEntity;
    interface ArtifactFilter {
        abstract include(arg0: Internal.Artifact_): boolean;
        (arg0: Internal.Artifact): boolean;
    }
    type ArtifactFilter_ = ArtifactFilter;
    class ModelManager implements Internal.PreparableReloadListener, Internal.AutoCloseable {
        constructor(arg0: Internal.TextureManager_, arg1: Internal.BlockColors_, arg2: number)
        updateMaxMipLevel(arg0: number): void;
        getModel(arg0: ResourceLocation_): Internal.BakedModel;
        getModel(arg0: Internal.ModelResourceLocation_): Internal.BakedModel;
        getMissingModel(): Internal.BakedModel;
        requiresRender(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        close(): void;
        getName(): string;
        getBlockModelShaper(): Internal.BlockModelShaper;
        getModelBakery(): Internal.ModelBakery;
        getAtlas(arg0: ResourceLocation_): Internal.TextureAtlas;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get missingModel(): Internal.BakedModel
        get name(): string
        get blockModelShaper(): Internal.BlockModelShaper
        get modelBakery(): Internal.ModelBakery
        bakedRegistry: Internal.Map<ResourceLocation, Internal.BakedModel>;
    }
    type ModelManager_ = ModelManager;
    class VibrationSystem$Data {
        constructor()
        setCurrentVibration(arg0: Internal.VibrationInfo_): void;
        setTravelTimeInTicks(arg0: number): void;
        shouldReloadVibrationParticle(): boolean;
        decrementTravelTime(): void;
        getSelectionStrategy(): Internal.VibrationSelector;
        getCurrentVibration(): Internal.VibrationInfo;
        setReloadVibrationParticle(arg0: boolean): void;
        getTravelTimeInTicks(): number;
        set currentVibration(arg0: Internal.VibrationInfo_)
        set travelTimeInTicks(arg0: number)
        get selectionStrategy(): Internal.VibrationSelector
        get currentVibration(): Internal.VibrationInfo
        set reloadVibrationParticle(arg0: boolean)
        get travelTimeInTicks(): number
        static readonly NBT_TAG_KEY: "listener";
        static CODEC: Internal.Codec<Internal.VibrationSystem$Data>;
    }
    type VibrationSystem$Data_ = VibrationSystem$Data;
    class DoubleBlockCombiner$BlockType extends Internal.Enum<Internal.DoubleBlockCombiner$BlockType> {
        static values(): Internal.DoubleBlockCombiner$BlockType[];
        static valueOf(arg0: string): Internal.DoubleBlockCombiner$BlockType;
        static readonly SINGLE: Internal.DoubleBlockCombiner$BlockType;
        static readonly FIRST: Internal.DoubleBlockCombiner$BlockType;
        static readonly SECOND: Internal.DoubleBlockCombiner$BlockType;
    }
    type DoubleBlockCombiner$BlockType_ = DoubleBlockCombiner$BlockType | "single" | "second" | "first";
    class ClientboundLightUpdatePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.ChunkPos_, arg1: Internal.LevelLightEngine_, arg2: Internal.BitSet_, arg3: Internal.BitSet_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getX(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getZ(): number;
        getLightData(): Internal.ClientboundLightUpdatePacketData;
        isSkippable(): boolean;
        get x(): number
        get z(): number
        get lightData(): Internal.ClientboundLightUpdatePacketData
        get skippable(): boolean
    }
    type ClientboundLightUpdatePacket_ = ClientboundLightUpdatePacket;
    class ResourceOrTagKeyArgument <T> implements Internal.ArgumentType<Internal.ResourceOrTagKeyArgument$Result<T>> {
        constructor(arg0: Internal.ResourceKey_<Internal.Registry<T>>)
        getExamples(): Internal.Collection<string>;
        static getResourceOrTagKey<T>(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string, arg2: Internal.ResourceKey_<Internal.Registry<T>>, arg3: Internal.DynamicCommandExceptionType_): Internal.ResourceOrTagKeyArgument$Result<T>;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        static resourceOrTagKey<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.ResourceOrTagKeyArgument<T>;
        parse(arg0: Internal.StringReader_): any;
        get examples(): Internal.Collection<string>
    }
    type ResourceOrTagKeyArgument_<T> = ResourceOrTagKeyArgument<T>;
    class SimpleBargainSerializer$Simple extends Internal.SimpleBargainSerializer<Internal.SimpleBargain> {
        constructor()
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.SimpleBargain;
    }
    type SimpleBargainSerializer$Simple_ = SimpleBargainSerializer$Simple;
    abstract class AbstractObject2IntMap <K> extends Internal.AbstractObject2IntFunction<K> implements Internal.Object2IntMap<K>, Internal.Serializable {
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        /**
         * @deprecated
        */
        mergeInt(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        removeInt(arg0: any): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
        keySet(): Internal.Set<any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2IntFunction;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        computeIntIfAbsentPartial(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        values(): Internal.Collection<any>;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Object2IntFunction<K>;
        computeIfAbsent(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        replaceAll(arg0: Internal.BiFunction_<K, number, number>): void;
        replace(arg0: K, arg1: number): number;
        applyAsInt(arg0: K): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        getOrDefault(arg0: any, arg1: number): number;
        static identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        put(arg0: K, arg1: number): number;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        /**
         * @deprecated
        */
        computeIntIfAbsent(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Object2LongFunction<K>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2IntFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        static of<K, V>(): Internal.Map<K, V>;
        isEmpty(): boolean;
        mergeInt(arg0: K, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number): number;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Object2ShortFunction<K>;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<K, number>>;
        computeIfAbsent(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        containsValue(arg0: number): boolean;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        computeInt(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        remove(arg0: any, arg1: number): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        computeIntIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        mergeInt(arg0: K, arg1: number, arg2: it.unimi.dsi.fastutil.ints.IntBinaryOperator_): number;
        putAll(arg0: Internal.Map_<K, number>): void;
        putIfAbsent(arg0: K, arg1: number): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        abstract object2IntEntrySet(): Internal.ObjectSet<Internal.Object2IntMap$Entry<K>>;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Object2CharFunction<K>;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2IntFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, number>): number;
        forEach(arg0: Internal.BiConsumer_<K, number>): void;
        get empty(): boolean
    }
    type AbstractObject2IntMap_<K> = AbstractObject2IntMap<K>;
    class IForgeHolderSet$SerializationType extends Internal.Enum<Internal.IForgeHolderSet$SerializationType> {
        static values(): Internal.IForgeHolderSet$SerializationType[];
        static valueOf(arg0: string): Internal.IForgeHolderSet$SerializationType;
        static readonly STRING: Internal.IForgeHolderSet$SerializationType;
        static readonly OBJECT: Internal.IForgeHolderSet$SerializationType;
        static readonly LIST: Internal.IForgeHolderSet$SerializationType;
        static readonly UNKNOWN: Internal.IForgeHolderSet$SerializationType;
    }
    type IForgeHolderSet$SerializationType_ = "string" | IForgeHolderSet$SerializationType | "list" | "object" | "unknown";
    class WorldDataConfiguration extends Internal.Record {
        constructor(arg0: Internal.DataPackConfig_, arg1: Internal.FeatureFlagSet_)
        enabledFeatures(): Internal.FeatureFlagSet;
        expandFeatures(arg0: Internal.FeatureFlagSet_): this;
        dataPacks(): Internal.DataPackConfig;
        static readonly ENABLED_FEATURES_ID: "enabled_features";
        static readonly CODEC: Internal.Codec<Internal.WorldDataConfiguration>;
        static readonly DEFAULT: Internal.WorldDataConfiguration;
    }
    type WorldDataConfiguration_ = WorldDataConfiguration;
    interface Flushable {
        abstract flush(): void;
        (): void;
    }
    type Flushable_ = Flushable;
    interface ShortComparator extends Internal.Comparator<number> {
        abstract compare(arg0: number, arg1: number): number;
        comparing<T, U extends Internal.Comparable<any>>(arg0: Internal.Function_<T, U>): Internal.Comparator<T>;
        thenComparingInt(arg0: Internal.ToIntFunction_<number>): Internal.Comparator<number>;
        reverseOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        thenComparing<U>(arg0: Internal.Function_<number, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<number>;
        thenComparingDouble(arg0: Internal.ToDoubleFunction_<number>): Internal.Comparator<number>;
        thenComparing(arg0: Internal.ShortComparator_): this;
        thenComparingLong(arg0: Internal.ToLongFunction_<number>): Internal.Comparator<number>;
        naturalOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        thenComparing<U extends Internal.Comparable<any>>(arg0: Internal.Function_<number, U>): Internal.Comparator<number>;
        comparingInt<T>(arg0: Internal.ToIntFunction_<T>): Internal.Comparator<T>;
        nullsFirst<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        comparingLong<T>(arg0: Internal.ToLongFunction_<T>): Internal.Comparator<T>;
        comparingDouble<T>(arg0: Internal.ToDoubleFunction_<T>): Internal.Comparator<T>;
        nullsLast<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        /**
         * @deprecated
        */
        compare(arg0: any, arg1: any): number;
        /**
         * @deprecated
        */
        compare(arg0: number, arg1: number): number;
        abstract equals(arg0: any): boolean;
        comparing<T, U>(arg0: Internal.Function_<T, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<T>;
        thenComparing(arg0: Internal.Comparator_<number>): Internal.Comparator<number>;
        reversed(): this;
    }
    type ShortComparator_ = ShortComparator;
    class SmokerBlock extends Internal.AbstractFurnaceBlock {
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
    type SmokerBlock_ = SmokerBlock;
    class ChunkRenderDispatcher$RenderChunk {
        constructor(arg0: Internal.ChunkRenderDispatcher_, arg1: number, arg2: number, arg3: number, arg4: number)
        getRelativeOrigin(arg0: Internal.Direction_): BlockPos;
        setNotDirty(): void;
        getOrigin(): BlockPos;
        compileSync(arg0: Internal.RenderRegionCache_): void;
        resortTransparency(arg0: Internal.RenderType_, arg1: Internal.ChunkRenderDispatcher_): boolean;
        getBuffer(arg0: Internal.RenderType_): Internal.VertexBuffer;
        setOrigin(arg0: number, arg1: number, arg2: number): void;
        isDirty(): boolean;
        getCompiledChunk(): Internal.ChunkRenderDispatcher$CompiledChunk;
        getBoundingBox(): Internal.AABB;
        isDirtyFromPlayer(): boolean;
        rebuildChunkAsync(arg0: Internal.ChunkRenderDispatcher_, arg1: Internal.RenderRegionCache_): void;
        hasAllNeighbors(): boolean;
        setDirty(arg0: boolean): void;
        createCompileTask(arg0: Internal.RenderRegionCache_): Internal.ChunkRenderDispatcher$RenderChunk$ChunkCompileTask;
        releaseBuffers(): void;
        get origin(): BlockPos
        get dirty(): boolean
        get compiledChunk(): Internal.ChunkRenderDispatcher$CompiledChunk
        get boundingBox(): Internal.AABB
        get dirtyFromPlayer(): boolean
        set dirty(arg0: boolean)
        readonly index: number;
        static readonly SIZE: 16;
        readonly compiled: Internal.AtomicReference<Internal.ChunkRenderDispatcher$CompiledChunk>;
    }
    type ChunkRenderDispatcher$RenderChunk_ = ChunkRenderDispatcher$RenderChunk;
    interface Object2FloatMap$FastEntrySet <K> extends Internal.ObjectSet<Internal.Object2FloatMap$Entry<K>> {
        abstract add(arg0: Internal.Object2FloatMap$Entry_<K>): boolean;
        stream(): Internal.Stream<Internal.Object2FloatMap$Entry<K>>;
        of<K>(arg0: K, arg1: K, arg2: K): Internal.ObjectSet<K>;
        abstract isEmpty(): boolean;
        of<K>(arg0: K, arg1: K): Internal.ObjectSet<K>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        parallelStream(): Internal.Stream<Internal.Object2FloatMap$Entry<K>>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        forEach(arg0: Internal.Consumer_<Internal.Object2FloatMap$Entry<K>>): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        fastForEach(arg0: Internal.Consumer_<Internal.Object2FloatMap$Entry<K>>): void;
        removeIf(arg0: Internal.Predicate_<Internal.Object2FloatMap$Entry<K>>): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        abstract contains(arg0: any): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        abstract fastIterator(): Internal.ObjectIterator<Internal.Object2FloatMap$Entry<K>>;
        abstract toArray(): any[];
        of<K>(): Internal.ObjectSet<K>;
        abstract hashCode(): number;
        abstract size(): number;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<any>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        of<K>(...arg0: K[]): Internal.ObjectSet<K>;
        abstract clear(): void;
        of<K>(arg0: K): Internal.ObjectSet<K>;
        abstract addAll(arg0: Internal.Collection_<Internal.Object2FloatMap$Entry<K>>): boolean;
        abstract equals(arg0: any): boolean;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        get empty(): boolean
    }
    type Object2FloatMap$FastEntrySet_<K> = Object2FloatMap$FastEntrySet<K>;
    abstract class FileStore {
        abstract getFileStoreAttributeView<V extends Internal.FileStoreAttributeView>(arg0: V): V;
        abstract name(): string;
        abstract supportsFileAttributeView(arg0: typeof Internal.FileAttributeView): boolean;
        abstract type(): string;
        abstract getAttribute(arg0: string): any;
        abstract getUnallocatedSpace(): number;
        abstract getUsableSpace(): number;
        abstract supportsFileAttributeView(arg0: string): boolean;
        abstract isReadOnly(): boolean;
        abstract getTotalSpace(): number;
        getBlockSize(): number;
        get unallocatedSpace(): number
        get usableSpace(): number
        get readOnly(): boolean
        get totalSpace(): number
        get blockSize(): number
    }
    type FileStore_ = FileStore;
    class CriticalHitEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.Entity_, arg2: number, arg3: boolean)
        getTarget(): Internal.Entity;
        setDamageModifier(arg0: number): void;
        getEntity(): Internal.LivingEntity;
        isVanillaCritical(): boolean;
        getDamageModifier(): number;
        getOldDamageModifier(): number;
        get target(): Internal.Entity
        set damageModifier(arg0: number)
        get entity(): Internal.LivingEntity
        get vanillaCritical(): boolean
        get damageModifier(): number
        get oldDamageModifier(): number
    }
    type CriticalHitEvent_ = CriticalHitEvent;
    class NumberComponent$DoubleRange extends Internal.Record implements Internal.NumberComponent<number> {
        constructor(min: number, max: number)
        static floatRange(min: number, max: number): Internal.NumberComponent$FloatRange;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, map: Internal.Map_<any, any>): void;
        isOutput(recipe: Internal.RecipeJS_, value: number, match: Internal.ReplacementMatch_): boolean;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        replaceInput(recipe: Internal.RecipeJS_, original: number, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): number;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, json: Internal.JsonObject_): void;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<number>;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        max(max: number): this;
        static doubleRange(min: number, max: number): Internal.NumberComponent$DoubleRange;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<number>;
        static longRange(min: number, max: number): Internal.NumberComponent$LongRange;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, number>>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<number>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<number>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<number>;
        static builder(): Internal.RecipeComponentBuilder;
        write(recipe: Internal.RecipeJS_, value: number): Internal.JsonPrimitive;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<number, O>;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, json: Internal.JsonObject_): void;
        checkValueHasChanged(oldValue: number, newValue: number): boolean;
        min(): number;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, number>>;
        orSelf(): Internal.RecipeComponent<number>;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        isInput(recipe: Internal.RecipeJS_, value: number, match: Internal.ReplacementMatch_): boolean;
        checkEmpty(key: Internal.RecipeKey_<number>, value: number): string;
        key(name: string): Internal.RecipeKey<number>;
        static intRange(min: number, max: number): Internal.NumberComponent$IntRange;
        asArray(): Internal.ArrayRecipeComponent<number>;
        max(): number;
        replaceOutput(recipe: Internal.RecipeJS_, original: number, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): number;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<number, O>;
        min(min: number): this;
    }
    type NumberComponent$DoubleRange_ = NumberComponent$DoubleRange;
    class ClientboundSystemChatPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Component_, arg1: boolean)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        content(): Internal.Component;
        overlay(): boolean;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get skippable(): boolean
    }
    type ClientboundSystemChatPacket_ = ClientboundSystemChatPacket;
    interface IHaveHoveringInformation {
        addToTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean): boolean;
    }
    type IHaveHoveringInformation_ = IHaveHoveringInformation;
    class LoomMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: any_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        getSelectablePatterns(): Internal.List<Internal.Holder<Internal.BannerPattern>>;
        getSelectedBannerPatternIndex(): number;
        getPatternSlot(): Internal.Slot;
        getDyeSlot(): Internal.Slot;
        registerUpdateListener(arg0: Internal.Runnable_): void;
        getResultSlot(): Internal.Slot;
        getBannerSlot(): Internal.Slot;
        wrapOperation$zel000$getItem(instance: Internal.ItemStack_, original: Internal.Operation_<any>): Internal.Item;
        get selectablePatterns(): Internal.List<Internal.Holder<Internal.BannerPattern>>
        get selectedBannerPatternIndex(): number
        get patternSlot(): Internal.Slot
        get dyeSlot(): Internal.Slot
        get resultSlot(): Internal.Slot
        get bannerSlot(): Internal.Slot
    }
    type LoomMenu_ = LoomMenu;
    class TieredItem extends Internal.Item {
        constructor(arg0: Internal.Tier_, arg1: Internal.Item$Properties_)
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
        getTier(): Internal.Tier;
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
        get tier(): Internal.Tier
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        tier: Internal.Tier;
    }
    type TieredItem_ = TieredItem;
    class WalkAnimationState {
        constructor()
        position(): number;
        isMoving(): boolean;
        speed(arg0: number): number;
        update(arg0: number, arg1: number): void;
        setSpeed(arg0: number): void;
        speed(): number;
        position(arg0: number): number;
        get moving(): boolean
        set speed(arg0: number)
    }
    type WalkAnimationState_ = WalkAnimationState;
    class LevelChunkSection {
        constructor(arg0: Internal.Registry_<Internal.Biome>)
        constructor(arg0: Internal.PalettedContainer_<Internal.BlockState>, arg1: Internal.PalettedContainerRO_<Internal.Holder<Internal.Biome>>)
        read(arg0: Internal.FriendlyByteBuf_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        readBiomes(arg0: Internal.FriendlyByteBuf_): void;
        getSerializedSize(): number;
        hasOnlyAir(): boolean;
        isRandomlyTickingBlocks(): boolean;
        setBlockState(arg0: number, arg1: number, arg2: number, arg3: Internal.BlockState_): Internal.BlockState;
        getStates(): Internal.PalettedContainer<Internal.BlockState>;
        getBiomes(): Internal.PalettedContainerRO<Internal.Holder<Internal.Biome>>;
        setBlockState(arg0: number, arg1: number, arg2: number, arg3: Internal.BlockState_, arg4: boolean): Internal.BlockState;
        maybeHas(arg0: Internal.Predicate_<Internal.BlockState>): boolean;
        isRandomlyTickingFluids(): boolean;
        release(): void;
        acquire(): void;
        fillBiomesFromNoise(arg0: Internal.BiomeResolver_, arg1: Internal.Climate$Sampler_, arg2: number, arg3: number, arg4: number): void;
        recalcBlockCounts(): void;
        getBlockState(arg0: number, arg1: number, arg2: number): Internal.BlockState;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        isRandomlyTicking(): boolean;
        getFluidState(arg0: number, arg1: number, arg2: number): Internal.FluidState;
        get serializedSize(): number
        get randomlyTickingBlocks(): boolean
        get states(): Internal.PalettedContainer<Internal.BlockState>
        get biomes(): Internal.PalettedContainerRO<Internal.Holder<Internal.Biome>>
        get randomlyTickingFluids(): boolean
        get randomlyTicking(): boolean
        static readonly BIOME_CONTAINER_BITS: 2;
        static readonly SECTION_WIDTH: 16;
        static readonly SECTION_SIZE: 4096;
        static readonly SECTION_HEIGHT: 16;
    }
    type LevelChunkSection_ = LevelChunkSection;
    class NoteBlockEvent$Note extends Internal.Enum<Internal.NoteBlockEvent$Note> {
        static values(): Internal.NoteBlockEvent$Note[];
        static valueOf(arg0: string): Internal.NoteBlockEvent$Note;
        static readonly G: Internal.NoteBlockEvent$Note;
        static readonly F_SHARP: Internal.NoteBlockEvent$Note;
        static readonly D_SHARP: Internal.NoteBlockEvent$Note;
        static readonly A_SHARP: Internal.NoteBlockEvent$Note;
        static readonly B: Internal.NoteBlockEvent$Note;
        static readonly A: Internal.NoteBlockEvent$Note;
        static readonly C_SHARP: Internal.NoteBlockEvent$Note;
        static readonly D: Internal.NoteBlockEvent$Note;
        static readonly G_SHARP: Internal.NoteBlockEvent$Note;
        static readonly C: Internal.NoteBlockEvent$Note;
        static readonly F: Internal.NoteBlockEvent$Note;
        static readonly E: Internal.NoteBlockEvent$Note;
    }
    type NoteBlockEvent$Note_ = "d" | "c" | "b" | "a" | "a_sharp" | "c_sharp" | NoteBlockEvent$Note | "f_sharp" | "d_sharp" | "g_sharp" | "g" | "f" | "e";
    class InclusiveRange <T extends Internal.Comparable<T>> extends Internal.Record {
        constructor(arg0: T, arg1: T)
        static create<T extends Internal.Comparable<T>>(arg0: T, arg1: T): Internal.DataResult<Internal.InclusiveRange<T>>;
        maxInclusive(): T;
        static codec<T extends Internal.Comparable<T>>(arg0: Internal.Codec_<T>, arg1: T, arg2: T): Internal.Codec<Internal.InclusiveRange<T>>;
        static codec<T extends Internal.Comparable<T>>(arg0: Internal.Codec_<T>): Internal.Codec<Internal.InclusiveRange<T>>;
        isValueInRange(arg0: T): boolean;
        contains(arg0: Internal.InclusiveRange_<T>): boolean;
        minInclusive(): T;
        static readonly INT: Internal.Codec<Internal.InclusiveRange<number>>;
    }
    type InclusiveRange_<T extends Internal.Comparable<T>> = InclusiveRange<T>;
    interface RangedAttackMob {
        abstract performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        (arg0: Internal.LivingEntity, arg1: number): void;
    }
    type RangedAttackMob_ = RangedAttackMob;
    class ParticleTypes$1 extends Internal.ParticleType<T> {
        codec(): Internal.Codec<T>;
    }
    type ParticleTypes$1_ = ParticleTypes$1;
    class AttackDamageMobEffect extends Internal.MobEffect {
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type AttackDamageMobEffect_ = AttackDamageMobEffect;
    interface CarvingMask$Mask {
        abstract test(arg0: number, arg1: number, arg2: number): boolean;
        (arg0: number, arg1: number, arg2: number): boolean;
    }
    type CarvingMask$Mask_ = CarvingMask$Mask;
    class LeavesBlock extends Internal.Block implements Internal.IForgeShearable, Internal.SimpleWaterloggedBlock {
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
        static getOptionalDistanceAt(arg0: Internal.BlockState_): Internal.OptionalInt;
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
        static readonly PERSISTENT: Internal.BooleanProperty;
        static readonly DECAY_DISTANCE: 7;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly DISTANCE: Internal.IntegerProperty;
    }
    type LeavesBlock_ = LeavesBlock;
    class FallingBlockEntity extends Internal.Entity implements Internal.FallingBlockEntityAccessor {
        constructor(arg0: Internal.EntityType_<Internal.FallingBlockEntity>, arg1: Internal.Level_)
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        static create$callInit_$md$366fca$0(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.BlockState_): Internal.FallingBlockEntity;
        handler$zlp000$handleLand(ci: Internal.CallbackInfo_, block: Internal.Block_, blockPos2: BlockPos_, bl: boolean, bl2: boolean, d: number, blockState: Internal.BlockState_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        callOnBrokenAfterFall(arg0: Internal.Block_, arg1: BlockPos_): void;
        getBlockState(): Internal.BlockState;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        static create$callInit(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.BlockState_): Internal.FallingBlockEntity;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        isLiving(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        alwaysAccepts(): boolean;
        disableDrop(): void;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setHurtsEntities(arg0: number, arg1: number): void;
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
        setStartPos(arg0: BlockPos_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: Internal.Component_): void;
        serializeNBT(): Internal.CompoundTag;
        setZ(z: number): void;
        getStartPos(): BlockPos;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDistanceSq(pos: BlockPos_): number;
        isFrame(): boolean;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        static fall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.FallingBlockEntity;
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
        get blockState(): Internal.BlockState
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
        set startPos(arg0: BlockPos_)
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        set z(z: number)
        get startPos(): BlockPos
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
        time: number;
        dropItem: boolean;
        blockData: Internal.CompoundTag;
        cancelDrop: boolean;
    }
    type FallingBlockEntity_ = FallingBlockEntity;
    interface NarrationSupplier {
        abstract updateNarration(arg0: Internal.NarrationElementOutput_): void;
        (arg0: Internal.NarrationElementOutput): void;
    }
    type NarrationSupplier_ = NarrationSupplier;
    class JsonObject extends Internal.JsonElement {
        constructor()
        keySet(): Internal.Set<string>;
        getAsJsonArray(arg0: string): Internal.JsonArray;
        get(arg0: string): Internal.JsonElement;
        getAsJsonPrimitive(arg0: string): Internal.JsonPrimitive;
        addProperty(arg0: string, arg1: string): void;
        size(): number;
        getAsJsonObject(arg0: string): this;
        has(arg0: string): boolean;
        remove(arg0: string): Internal.JsonElement;
        asMap(): Internal.Map<string, Internal.JsonElement>;
        addProperty(arg0: string, arg1: number): void;
        addProperty(arg0: string, arg1: boolean): void;
        add(arg0: string, arg1: Internal.JsonElement_): void;
        addProperty(arg0: string, arg1: string): void;
        entrySet(): Internal.Set<Internal.Map$Entry<string, Internal.JsonElement>>;
    }
    type JsonObject_ = JsonObject;
    class PathfindingRenderer implements Internal.DebugRenderer$SimpleDebugRenderer {
        constructor()
        addPath(arg0: number, arg1: net.minecraft.world.level.pathfinder.Path_, arg2: number): void;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        static renderPathLine(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: net.minecraft.world.level.pathfinder.Path_, arg3: number, arg4: number, arg5: number): void;
        static renderPath(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: net.minecraft.world.level.pathfinder.Path_, arg3: number, arg4: boolean, arg5: boolean, arg6: number, arg7: number, arg8: number): void;
    }
    type PathfindingRenderer_ = PathfindingRenderer;
    class DirectVertexConsumer implements Internal.VertexConsumer {
        constructor(arg0: Internal.ByteBuffer_, arg1: Internal.VertexFormat_, arg2: number)
        uv2(arg0: number): Internal.VertexConsumer;
        endVertex(): void;
        color(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        color(arg0: number): Internal.VertexConsumer;
        normal(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        hasOverlay(): boolean;
        misc(arg0: Internal.VertexFormatElement_, ...arg1: number[]): Internal.VertexConsumer;
        memSetZero(): void;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        overlayCoords(arg0: number): Internal.VertexConsumer;
        vertex(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        color(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number[], arg7: number, arg8: boolean): void;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        overlayCoords(arg0: number, arg1: number): Internal.VertexConsumer;
        applyBakedLighting(arg0: number, arg1: Internal.ByteBuffer_): number;
        defaultColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        uv2(arg0: number, arg1: number): Internal.VertexConsumer;
        normal(arg0: Matrix3f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        applyBakedNormals(arg0: Vec3f_, arg1: Internal.ByteBuffer_, arg2: Matrix3f_): void;
        vertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        vertex(arg0: Matrix4f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        split(arg0: number): this;
        uv(arg0: number, arg1: number): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        unsetDefaultColor(): void;
        readonly format: Internal.VertexFormat;
        readonly startPos: number;
    }
    type DirectVertexConsumer_ = DirectVertexConsumer;
    class ClientboundPlayerChatPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.UUID_, arg1: number, arg2: Internal.MessageSignature_, arg3: Internal.SignedMessageBody$Packed_, arg4: Internal.Component_, arg5: Internal.FilterMask_, arg6: Internal.ChatType$BoundNetwork_)
        handle(arg0: Internal.PacketListener_): void;
        unsignedContent(): Internal.Component;
        write(arg0: Internal.FriendlyByteBuf_): void;
        signature(): Internal.MessageSignature;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        chatType(): Internal.ChatType$BoundNetwork;
        index(): number;
        filterMask(): Internal.FilterMask;
        body(): Internal.SignedMessageBody$Packed;
        isSkippable(): boolean;
        sender(): Internal.UUID;
        get skippable(): boolean
    }
    type ClientboundPlayerChatPacket_ = ClientboundPlayerChatPacket;
    class CuttingBoardRecipe implements Internal.Recipe<Internal.RecipeWrapper> {
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.Ingredient_, arg3: Internal.Ingredient_, arg4: Internal.NonNullList_<Internal.ChanceResult>, arg5: string)
        getTool(): Internal.Ingredient;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        matches(arg0: Internal.RecipeWrapper_, arg1: Internal.Level_): boolean;
        getRollableResults(): Internal.NonNullList<Internal.ChanceResult>;
        assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        assemble(arg0: Internal.RecipeWrapper_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        getResults(): Internal.List<Internal.ItemStack>;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        getSoundEventID(): string;
        rollResults(arg0: Internal.RandomSource_, arg1: number): Internal.List<Internal.ItemStack>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: Internal.RecipeWrapper_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        get tool(): Internal.Ingredient
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get rollableResults(): Internal.NonNullList<Internal.ChanceResult>
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get results(): Internal.List<Internal.ItemStack>
        get soundEventID(): string
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        static readonly MAX_RESULTS: 4;
    }
    type CuttingBoardRecipe_ = CuttingBoardRecipe;
    class SandyShrubBlock extends Internal.BushBlock implements Internal.IForgeShearable, Internal.BonemealableBlock {
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
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
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
    type SandyShrubBlock_ = SandyShrubBlock;
    class Tilt extends Internal.Enum<Internal.Tilt> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.Tilt;
        static values(): Internal.Tilt[];
        causesVibration(): boolean;
        get serializedName(): string
        static readonly NONE: Internal.Tilt;
        static readonly UNSTABLE: Internal.Tilt;
        static readonly PARTIAL: Internal.Tilt;
        static readonly FULL: Internal.Tilt;
    }
    type Tilt_ = "unstable" | "partial" | "full" | Tilt | "none";
    class RegisterRecipeBookCategoriesEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<Internal.RecipeBookCategories, Internal.ImmutableList<Internal.RecipeBookCategories>>, arg1: Internal.Map_<Internal.RecipeBookType, Internal.ImmutableList<Internal.RecipeBookCategories>>, arg2: Internal.Map_<Internal.RecipeType<any>, Internal.Function<Internal.Recipe<any>, Internal.RecipeBookCategories>>)
        registerAggregateCategory(arg0: Internal.RecipeBookCategories_, arg1: Internal.List_<Internal.RecipeBookCategories>): void;
        registerBookCategories(arg0: Internal.RecipeBookType_, arg1: Internal.List_<Internal.RecipeBookCategories>): void;
        registerRecipeCategoryFinder(arg0: Internal.RecipeType_<any>, arg1: Internal.Function_<Internal.Recipe<any>, Internal.RecipeBookCategories>): void;
    }
    type RegisterRecipeBookCategoriesEvent_ = RegisterRecipeBookCategoriesEvent;
    class OutlineBufferSource implements Internal.MultiBufferSource {
        constructor(arg0: Internal.MultiBufferSource$BufferSource_)
        static immediate(arg0: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        getBuffer(arg0: Internal.RenderType_): Internal.VertexConsumer;
        endOutlineBatch(): void;
        static immediateWithBuffers(arg0: Internal.Map_<Internal.RenderType, Internal.BufferBuilder>, arg1: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
    }
    type OutlineBufferSource_ = OutlineBufferSource;
    class NoticeBoardBlock extends Internal.Block implements Internal.EntityBlock {
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
        static readonly HAS_BOOK: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
        static readonly CULLED: Internal.BooleanProperty;
        static readonly POWERED: Internal.BooleanProperty;
    }
    type NoticeBoardBlock_ = NoticeBoardBlock;
    interface BlockGetter extends Internal.LevelHeightAccessor, Internal.IForgeBlockGetter {
        getMinSection(): number;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getMaxBuildHeight(): number;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getSectionYFromSectionIndex(arg0: number): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract getHeight(): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getModelDataManager(): Internal.ModelDataManager;
        isOutsideBuildHeight(arg0: number): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract getMinBuildHeight(): number;
        getSectionsCount(): number;
        getMaxLightLevel(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get maxBuildHeight(): number
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get minBuildHeight(): number
        get sectionsCount(): number
        get maxLightLevel(): number
    }
    type BlockGetter_ = BlockGetter;
    abstract class AbstractCollection <E> implements Internal.Collection<E> {
        add(arg0: E): boolean;
        forEach(arg0: Internal.Consumer_<E>): void;
        toArray<T>(arg0: T[]): T[];
        remove(arg0: any): boolean;
        parallelStream(): Internal.Stream<E>;
        isEmpty(): boolean;
        toArray(): any[];
        abstract iterator(): Internal.Iterator<E>;
        retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract size(): number;
        containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        stream(): Internal.Stream<E>;
        removeAll(arg0: Internal.Collection_<any>): boolean;
        clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        spliterator(): Internal.Spliterator<E>;
        contains(arg0: any): boolean;
        addAll(arg0: Internal.Collection_<E>): boolean;
        get empty(): boolean
    }
    type AbstractCollection_<E> = AbstractCollection<E>;
    abstract class ImmutableCollections$AbstractImmutableCollection <E> extends Internal.AbstractCollection<E> {
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        stream(): Internal.Stream<E>;
        forEach(arg0: Internal.Consumer_<E>): void;
        spliterator(): Internal.Spliterator<E>;
        parallelStream(): Internal.Stream<E>;
    }
    type ImmutableCollections$AbstractImmutableCollection_<E> = ImmutableCollections$AbstractImmutableCollection<E>;
    class LootPool$Builder implements Internal.FunctionUserBuilder<Internal.LootPool$Builder>, Internal.ConditionUserBuilder<Internal.LootPool$Builder> {
        constructor()
        when<E>(arg0: Internal.Iterable_<E>, arg1: Internal.Function_<E, Internal.LootItemCondition$Builder>): this;
        setRolls(arg0: Internal.NumberProvider_): this;
        name(arg0: string): this;
        setBonusRolls(arg0: Internal.NumberProvider_): this;
        apply<E>(arg0: E[], arg1: Internal.Function_<E, Internal.LootItemFunction$Builder>): this;
        add(arg0: Internal.LootPoolEntryContainer$Builder_<any>): this;
        apply(arg0: Internal.LootItemFunction$Builder_): this;
        build(): Internal.LootPool;
        apply<E>(arg0: Internal.Iterable_<E>, arg1: Internal.Function_<E, Internal.LootItemFunction$Builder>): this;
        when(arg0: Internal.LootItemCondition$Builder_): this;
        unwrap(): this;
        set rolls(arg0: Internal.NumberProvider_)
        set bonusRolls(arg0: Internal.NumberProvider_)
    }
    type LootPool$Builder_ = LootPool$Builder;
    interface ItemBuilder$NameCallback {
        abstract apply(arg0: Internal.ItemStack_): Internal.Component;
        (arg0: Internal.ItemStack): Internal.Component_;
    }
    type ItemBuilder$NameCallback_ = ItemBuilder$NameCallback;
    interface Readable {
        abstract read(arg0: Internal.CharBuffer_): number;
        (arg0: Internal.CharBuffer): number;
    }
    type Readable_ = Readable;
    class RecipeBookCategories extends Internal.Enum<Internal.RecipeBookCategories> implements Internal.IExtensibleEnum {
        static create(arg0: string, ...arg1: Internal.ItemStack_[]): Internal.RecipeBookCategories;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        /**
         * @deprecated
        */
        init(): void;
        static valueOf(arg0: string): Internal.RecipeBookCategories;
        getIconItems(): Internal.List<Internal.ItemStack>;
        static values(): Internal.RecipeBookCategories[];
        static getCategories(arg0: Internal.RecipeBookType_): Internal.List<Internal.RecipeBookCategories>;
        get iconItems(): Internal.List<Internal.ItemStack>
        static readonly CRAFTING_SEARCH: Internal.RecipeBookCategories;
        static readonly SMOKER_SEARCH: Internal.RecipeBookCategories;
        static readonly SMOKER_CATEGORIES: [Internal.RecipeBookCategories, Internal.RecipeBookCategories];
        static readonly BLAST_FURNACE_SEARCH: Internal.RecipeBookCategories;
        static readonly CRAFTING_BUILDING_BLOCKS: Internal.RecipeBookCategories;
        static readonly STONECUTTER: Internal.RecipeBookCategories;
        static readonly CRAFTING_MISC: Internal.RecipeBookCategories;
        static readonly CRAFTING_REDSTONE: Internal.RecipeBookCategories;
        static readonly SMOKER_FOOD: Internal.RecipeBookCategories;
        static readonly AGGREGATE_CATEGORIES: {[key: Internal.RecipeBookCategories]: [Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories], [key: Internal.RecipeBookCategories]: [Internal.RecipeBookCategories], [key: Internal.RecipeBookCategories]: [Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories], [key: Internal.RecipeBookCategories]: [Internal.RecipeBookCategories, Internal.RecipeBookCategories], [key: Internal.RecipeBookCategories]: [Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories]};
        static readonly UNKNOWN: Internal.RecipeBookCategories;
        static readonly CRAFTING_EQUIPMENT: Internal.RecipeBookCategories;
        static readonly FURNACE_BLOCKS: Internal.RecipeBookCategories;
        static readonly BLAST_FURNACE_MISC: Internal.RecipeBookCategories;
        static readonly BLAST_FURNACE_CATEGORIES: [Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories];
        static readonly CRAFTING_CATEGORIES: [Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories];
        static readonly FURNACE_SEARCH: Internal.RecipeBookCategories;
        static readonly FURNACE_MISC: Internal.RecipeBookCategories;
        static readonly SMITHING: Internal.RecipeBookCategories;
        static readonly FURNACE_FOOD: Internal.RecipeBookCategories;
        static readonly CAMPFIRE: Internal.RecipeBookCategories;
        static readonly FURNACE_CATEGORIES: [Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories];
        static readonly BLAST_FURNACE_BLOCKS: Internal.RecipeBookCategories;
    }
    type RecipeBookCategories_ = "crafting_misc" | "smoker_search" | "furnace_misc" | "cooking_search" | "cooking_misc" | "smithing" | "crafting_building_blocks" | "crafting_search" | RecipeBookCategories | "blast_furnace_misc" | "stonecutter" | "furnace_search" | "campfire" | "cooking_meals" | "blast_furnace_search" | "smoker_food" | "blast_furnace_blocks" | "cooking_drinks" | "unknown" | "furnace_food" | "crafting_equipment" | "furnace_blocks" | "crafting_redstone";
    class ServerboundTeleportToEntityPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.UUID_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getEntity(arg0: Internal.ServerLevel_): Internal.Entity;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        isSkippable(): boolean;
        get skippable(): boolean
    }
    type ServerboundTeleportToEntityPacket_ = ServerboundTeleportToEntityPacket;
    interface BiomeFilter extends Internal.Predicate<Internal.BiomeModifications$BiomeContext> {
        idFilter(cx: Internal.Context_, s: string): this;
        test(arg0: any): boolean;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        of(cx: Internal.Context_, o: any): this;
        abstract test(arg0: Internal.BiomeModifications$BiomeContext_): boolean;
        and(arg0: Internal.Predicate_<Internal.BiomeModifications$BiomeContext>): Internal.Predicate<Internal.BiomeModifications$BiomeContext>;
        negate(): Internal.Predicate<Internal.BiomeModifications$BiomeContext>;
        or(arg0: Internal.Predicate_<Internal.BiomeModifications$BiomeContext>): Internal.Predicate<Internal.BiomeModifications$BiomeContext>;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        (arg0: Internal.BiomeModifications$BiomeContext): boolean;
        readonly ALWAYS_FALSE: Internal.BiomeFilter;
        readonly ALWAYS_TRUE: Internal.BiomeFilter;
    }
    type BiomeFilter_ = Internal.Biome_ | Special.Biome | Internal.BiomeFilter_[] | RegExp | {tag?: `#${Special.BiomeTag}`, id?: Special.Biome, type?: Special.Biome, not?: Internal.BiomeFilter_, or?: Internal.BiomeFilter_} | `#${Special.BiomeTag}` | "-" | {not?: Internal.BiomeFilter_, or?: Internal.BiomeFilter_} | "*" | BiomeFilter | Internal.Biome_[];
    class ZipFile implements Internal.Closeable, Internal.ZipConstants {
        constructor(arg0: Internal.File_, arg1: number)
        constructor(arg0: Internal.File_)
        constructor(arg0: Internal.File_, arg1: number, arg2: Internal.Charset_)
        constructor(arg0: string, arg1: Internal.Charset_)
        constructor(arg0: Internal.File_, arg1: Internal.Charset_)
        constructor(arg0: string)
        size(): number;
        getComment(): string;
        getName(): string;
        close(): void;
        getInputStream(arg0: Internal.ZipEntry_): Internal.InputStream;
        getEntry(arg0: string): Internal.ZipEntry;
        stream(): Internal.Stream<Internal.ZipEntry>;
        entries(): Internal.Enumeration<Internal.ZipEntry>;
        get comment(): string
        get name(): string
        static readonly OPEN_READ: 1;
        static readonly OPEN_DELETE: 4;
    }
    type ZipFile_ = ZipFile;
    class TickEvent$PlayerTickEvent extends Internal.TickEvent {
        constructor()
        constructor(arg0: Internal.TickEvent$Phase_, arg1: Internal.Player_)
        readonly player: Internal.Player;
    }
    type TickEvent$PlayerTickEvent_ = TickEvent$PlayerTickEvent;
    class WaySignStructure extends Internal.Structure {
        constructor(config: Internal.Structure$StructureSettings_, startPool: Internal.Holder_<Internal.StructureTemplatePool>, startJigsawName: Internal.Optional_<ResourceLocation>, minY: number, maxY: number)
        static recomputeValidStructureCache(access: Internal.RegistryAccess_): void;
        static clearCache(): void;
        m_214086_(context: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly CODEC: Internal.Codec<Internal.WaySignStructure>;
    }
    type WaySignStructure_ = WaySignStructure;
    class TransportedItemStackHandlerBehaviour extends Internal.BlockEntityBehaviour {
        constructor(arg0: Internal.SmartBlockEntity_, arg1: any_)
        withStackPlacement(arg0: Internal.TransportedItemStackHandlerBehaviour$PositionGetter_): this;
        handleProcessingOnItem(arg0: Internal.TransportedItemStack_, arg1: Internal.TransportedItemStackHandlerBehaviour$TransportedResult_): void;
        handleCenteredProcessingOnAllItems(arg0: number, arg1: Internal.Function_<Internal.TransportedItemStack, Internal.TransportedItemStackHandlerBehaviour$TransportedResult>): void;
        handleProcessingOnAllItems(arg0: Internal.Function_<Internal.TransportedItemStack, Internal.TransportedItemStackHandlerBehaviour$TransportedResult>): void;
        getWorldPositionOf(arg0: Internal.TransportedItemStack_): Vec3d;
        static readonly TYPE: Internal.BehaviourType<Internal.TransportedItemStackHandlerBehaviour>;
    }
    type TransportedItemStackHandlerBehaviour_ = TransportedItemStackHandlerBehaviour;
    class ConcretePowderBlock extends Internal.FallingBlock {
        constructor(arg0: Internal.Block_, arg1: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        onBrokenAfterFall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FallingBlockEntity_): void;
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
        getFallDamageSource(arg0: Internal.Entity_): DamageSource;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        readonly concrete: Internal.BlockState;
    }
    type ConcretePowderBlock_ = ConcretePowderBlock;
    abstract class Fireball extends Internal.AbstractHurtingProjectile implements Internal.ItemSupplier {
        constructor(arg0: Internal.EntityType_<Internal.Fireball>, arg1: Internal.Level_)
        constructor(arg0: Internal.EntityType_<Internal.Fireball>, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number, arg5: Internal.Level_)
        constructor(arg0: Internal.EntityType_<Internal.Fireball>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.Level_)
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
        setItem(arg0: Internal.ItemStack_): void;
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
        set item(arg0: Internal.ItemStack_)
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
    type Fireball_ = Fireball;
    class TooltipFlag$Default extends Internal.Record implements Internal.TooltipFlag {
        constructor(arg0: boolean, arg1: boolean)
        creative(): boolean;
        asCreative(): this;
        isAdvanced(): boolean;
        isCreative(): boolean;
        advanced(): boolean;
        get advanced(): boolean
        get creative(): boolean
    }
    type TooltipFlag$Default_ = TooltipFlag$Default;
    interface IModInfo {
        abstract getModURL(): Internal.Optional<Internal.URL>;
        abstract getDependencies(): Internal.List<Internal.IModInfo$ModVersion>;
        abstract getModProperties(): Internal.Map<string, any>;
        abstract getUpdateURL(): Internal.Optional<Internal.URL>;
        abstract getModId(): string;
        abstract getDescription(): string;
        abstract getConfig(): Internal.IConfigurable;
        abstract getOwningFile(): Internal.IModFileInfo;
        abstract getLogoBlur(): boolean;
        abstract getDisplayName(): string;
        abstract getVersion(): Internal.ArtifactVersion;
        abstract getLogoFile(): Internal.Optional<string>;
        abstract getNamespace(): string;
        abstract getForgeFeatures(): Internal.List<Internal.ForgeFeature$Bound>;
        get modURL(): Internal.Optional<Internal.URL>
        get dependencies(): Internal.List<Internal.IModInfo$ModVersion>
        get modProperties(): Internal.Map<string, any>
        get updateURL(): Internal.Optional<Internal.URL>
        get modId(): string
        get description(): string
        get config(): Internal.IConfigurable
        get owningFile(): Internal.IModFileInfo
        get logoBlur(): boolean
        get displayName(): string
        get version(): Internal.ArtifactVersion
        get logoFile(): Internal.Optional<string>
        get namespace(): string
        get forgeFeatures(): Internal.List<Internal.ForgeFeature$Bound>
        readonly UNBOUNDED: Internal.VersionRange;
    }
    type IModInfo_ = IModInfo;
    class ValueSettingsBoard extends Internal.Record {
        constructor(title: Internal.Component_, maxValue: number, milestoneInterval: number, rows: Internal.List_<Internal.Component>, formatter: Internal.ValueSettingsFormatter_)
        maxValue(): number;
        milestoneInterval(): number;
        rows(): Internal.List<Internal.Component>;
        formatter(): Internal.ValueSettingsFormatter;
        title(): Internal.Component;
    }
    type ValueSettingsBoard_ = ValueSettingsBoard;
    interface URLStreamHandlerFactory {
        abstract createURLStreamHandler(arg0: string): Internal.URLStreamHandler;
        (arg0: string): Internal.URLStreamHandler_;
    }
    type URLStreamHandlerFactory_ = URLStreamHandlerFactory;
    interface AccessorMinecraft {
        abstract bookshelf$getFontManager(): Internal.FontManager;
        (): Internal.FontManager_;
    }
    type AccessorMinecraft_ = AccessorMinecraft;
    class HatEntry$HatParticleSettings$HatParticleMovement extends Internal.Enum<Internal.HatEntry$HatParticleSettings$HatParticleMovement> {
        static valueOf(arg0: string): Internal.HatEntry$HatParticleSettings$HatParticleMovement;
        static values(): Internal.HatEntry$HatParticleSettings$HatParticleMovement[];
        static readonly TRAILING_FEET: Internal.HatEntry$HatParticleSettings$HatParticleMovement;
        static readonly TRAILING_HEAD: Internal.HatEntry$HatParticleSettings$HatParticleMovement;
        static readonly TRAILING_FULL: Internal.HatEntry$HatParticleSettings$HatParticleMovement;
    }
    type HatEntry$HatParticleSettings$HatParticleMovement_ = "trailing_feet" | HatEntry$HatParticleSettings$HatParticleMovement | "trailing_full" | "trailing_head";
    class ArmItem extends Internal.BlockItem {
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
    type ArmItem_ = ArmItem;
    interface IMultiBlockEntityContainer$Fluid extends Internal.IMultiBlockEntityContainer {
        hasTank(): boolean;
        getMainAxisOf(arg0: Internal.BlockEntity_): Internal.Direction$Axis;
        setTankSize(arg0: number, arg1: number): void;
        abstract getMaxWidth(): number;
        abstract removeController(arg0: boolean): void;
        getTank(arg0: number): Internal.IFluidTank;
        getFluid(arg0: number): Internal.FluidStack;
        abstract getControllerBE<T extends Internal.BlockEntity & Internal.IMultiBlockEntityContainer>(): T;
        abstract setController(arg0: BlockPos_): void;
        abstract isController(): boolean;
        abstract getWidth(): number;
        setExtraData(arg0: any): void;
        modifyExtraData(arg0: any): any;
        getTankSize(arg0: number): number;
        abstract getController(): BlockPos;
        abstract getLastKnownPos(): BlockPos;
        abstract preventConnectivityUpdate(): void;
        abstract notifyMultiUpdated(): void;
        getExtraData(): any;
        abstract getMainConnectionAxis(): Internal.Direction$Axis;
        abstract setHeight(arg0: number): void;
        abstract setWidth(arg0: number): void;
        abstract getHeight(): number;
        abstract getMaxLength(arg0: Internal.Direction$Axis_, arg1: number): number;
        get maxWidth(): number
        get controllerBE(): T
        set controller(arg0: BlockPos_)
        get controller(): boolean
        get width(): number
        set extraData(arg0: any)
        get controller(): BlockPos
        get lastKnownPos(): BlockPos
        get extraData(): any
        get mainConnectionAxis(): Internal.Direction$Axis
        set height(arg0: number)
        set width(arg0: number)
        get height(): number
    }
    type IMultiBlockEntityContainer$Fluid_ = IMultiBlockEntityContainer$Fluid;
    class EnchantedGoldenAppleItem extends Internal.Item {
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
    type EnchantedGoldenAppleItem_ = EnchantedGoldenAppleItem;
    class HoneycombItem extends Internal.Item implements Internal.SignApplicator {
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
        tryApplyToSign(arg0: Internal.Level_, arg1: Internal.SignBlockEntity_, arg2: boolean, arg3: Internal.Player_): boolean;
        canApplyToSign(arg0: Internal.SignText_, arg1: Internal.Player_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        static getWaxed(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
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
        static readonly WAX_OFF_BY_BLOCK: Internal.Supplier<Internal.BiMap<Internal.Block, Internal.Block>>;
        static WAXABLES: Internal.Supplier<Internal.BiMap<Internal.Block, Internal.Block>>;
    }
    type HoneycombItem_ = HoneycombItem;
    class HoverEvent {
        constructor(arg0: Internal.HoverEvent$Action_<T>, arg1: T)
        static deserialize(arg0: Internal.JsonObject_): Internal.HoverEvent;
        getAction(): Internal.HoverEvent$Action<any>;
        serialize(): Internal.JsonObject;
        getValue<T>(arg0: Internal.HoverEvent$Action_<T>): T;
        get action(): Internal.HoverEvent$Action<any>
    }
    type HoverEvent_ = HoverEvent;
    interface IFocus <V> {
        abstract getTypedValue(): Internal.ITypedIngredient<V>;
        abstract checkedCast<T>(arg0: Internal.IIngredientType_<T>): Internal.Optional<Internal.IFocus<T>>;
        abstract getRole(): Internal.RecipeIngredientRole;
        get typedValue(): Internal.ITypedIngredient<V>
        get role(): Internal.RecipeIngredientRole
    }
    type IFocus_<V> = IFocus<V>;
    class RecipeBookSettings {
        constructor()
        static addTagsForType(arg0: Internal.RecipeBookType_, arg1: string, arg2: string): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        replaceFrom(arg0: Internal.RecipeBookSettings_): void;
        isFiltering(arg0: Internal.RecipeBookType_): boolean;
        isOpen(arg0: Internal.RecipeBookType_): boolean;
        setFiltering(arg0: Internal.RecipeBookType_, arg1: boolean): void;
        static read(arg0: Internal.CompoundTag_): Internal.RecipeBookSettings;
        copy(): this;
        write(arg0: Internal.CompoundTag_): void;
        setOpen(arg0: Internal.RecipeBookType_, arg1: boolean): void;
        static read(arg0: Internal.FriendlyByteBuf_): Internal.RecipeBookSettings;
    }
    type RecipeBookSettings_ = RecipeBookSettings;
    interface Annotation {
        abstract hashCode(): number;
        abstract toString(): string;
        abstract annotationType(): typeof Internal.Annotation;
        abstract equals(arg0: any): boolean;
    }
    type Annotation_ = Annotation;
    interface DataInput {
        abstract readByte(): number;
        abstract readFully(arg0: number[], arg1: number, arg2: number): void;
        abstract readUnsignedShort(): number;
        abstract readLong(): number;
        abstract readUnsignedByte(): number;
        abstract readFully(arg0: number[]): void;
        abstract readDouble(): number;
        abstract readInt(): number;
        abstract readFloat(): number;
        abstract readBoolean(): boolean;
        abstract skipBytes(arg0: number): number;
        abstract readLine(): string;
        abstract readShort(): number;
        abstract readUTF(): string;
        abstract readChar(): string;
    }
    type DataInput_ = DataInput;
    class NetworkEvent$ServerCustomPayloadEvent extends Internal.NetworkEvent {
        constructor()
    }
    type NetworkEvent$ServerCustomPayloadEvent_ = NetworkEvent$ServerCustomPayloadEvent;
    abstract class AbstractFish extends Internal.WaterAnimal implements Internal.Bucketable {
        constructor(arg0: Internal.EntityType_<Internal.AbstractFish>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setFromBucket(arg0: boolean): void;
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
        /**
         * @deprecated
        */
        static loadDefaultDataFromBucketTag(arg0: Internal.Mob_, arg1: Internal.CompoundTag_): void;
        fromBucket(): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        loadFromBucketTag(arg0: Internal.CompoundTag_): void;
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
        saveToBucketTag(arg0: Internal.ItemStack_): void;
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
        abstract getBucketItemStack(): Internal.ItemStack;
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
        /**
         * @deprecated
        */
        static saveDefaultDataToBucketTag(arg0: Internal.Mob_, arg1: Internal.ItemStack_): void;
        getScriptType(): Internal.ScriptType;
        static bucketMobPickup<T extends Internal.LivingEntity & Internal.Bucketable>(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: T): Internal.Optional<Internal.InteractionResult>;
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
        getPickupSound(): Internal.SoundEvent;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        set fromBucket(arg0: boolean)
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
        get bucketItemStack(): Internal.ItemStack
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
        get pickupSound(): Internal.SoundEvent
    }
    type AbstractFish_ = AbstractFish;
    class MinecraftServer$ServerResourcePackInfo extends Internal.Record {
        constructor(url: string, hash: string, isRequired: boolean, prompt: Internal.Component_)
        hash(): string;
        isRequired(): boolean;
        url(): string;
        prompt(): Internal.Component;
        get required(): boolean
    }
    type MinecraftServer$ServerResourcePackInfo_ = MinecraftServer$ServerResourcePackInfo;
    class PolarBear extends Internal.Animal implements Internal.NeutralMob {
        constructor(arg0: Internal.EntityType_<Internal.PolarBear>, arg1: Internal.Level_)
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
        readPersistentAngerSaveData(arg0: Internal.Level_, arg1: Internal.CompoundTag_): void;
        stopBeingAngry(): void;
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
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        addPersistentAngerSaveData(arg0: Internal.CompoundTag_): void;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        getPersistentAngerTarget(): Internal.UUID;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        setStanding(arg0: boolean): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        isAngryAtAllPlayers(arg0: Internal.Level_): boolean;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        playerDied(arg0: Internal.Player_): void;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        isAngry(): boolean;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        startPersistentAngerTimer(): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        setRemainingPersistentAngerTime(arg0: number): void;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        static checkPolarBearSpawnRules(arg0: Internal.EntityType_<Internal.PolarBear>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        setPersistentAngerTarget(arg0: Internal.UUID_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getStandingAnimationScale(arg0: number): number;
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
        isAngryAt(arg0: Internal.LivingEntity_): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getRemainingPersistentAngerTime(): number;
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
        updatePersistentAnger(arg0: Internal.ServerLevel_, arg1: boolean): void;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        isStanding(): boolean;
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
        get persistentAngerTarget(): Internal.UUID
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set standing(arg0: boolean)
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get angry(): boolean
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        set remainingPersistentAngerTime(arg0: number)
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        set persistentAngerTarget(arg0: Internal.UUID_)
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
        get remainingPersistentAngerTime(): number
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        get standing(): boolean
    }
    type PolarBear_ = PolarBear;
    interface Multiset <E> extends Internal.Collection<E> {
        abstract remove(arg0: any, arg1: number): number;
        abstract add(arg0: E): boolean;
        abstract setCount(arg0: E, arg1: number): number;
        forEachEntry(arg0: Internal.ObjIntConsumer_<E>): void;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        abstract entrySet(): Internal.Set<Internal.Multiset$Entry<E>>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract elementSet(): Internal.Set<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        abstract count(arg0: any): number;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract add(arg0: E, arg1: number): number;
        abstract setCount(arg0: E, arg1: number, arg2: number): boolean;
        abstract contains(arg0: any): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        abstract toString(): string;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        abstract toArray(): any[];
        abstract iterator(): Internal.Iterator<E>;
        abstract hashCode(): number;
        abstract size(): number;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        spliterator(): Internal.Spliterator<E>;
        abstract equals(arg0: any): boolean;
        get empty(): boolean
    }
    type Multiset_<E> = Multiset<E>;
    class CustomBossEvents {
        constructor()
        onPlayerConnect(arg0: Internal.ServerPlayer_): void;
        save(): Internal.CompoundTag;
        getIds(): Internal.Collection<ResourceLocation>;
        load(arg0: Internal.CompoundTag_): void;
        getEvents(): Internal.Collection<Internal.CustomBossEvent>;
        get(arg0: ResourceLocation_): Internal.CustomBossEvent;
        remove(arg0: Internal.CustomBossEvent_): void;
        create(arg0: ResourceLocation_, arg1: Internal.Component_): Internal.CustomBossEvent;
        onPlayerDisconnect(arg0: Internal.ServerPlayer_): void;
        get ids(): Internal.Collection<ResourceLocation>
        get events(): Internal.Collection<Internal.CustomBossEvent>
    }
    type CustomBossEvents_ = CustomBossEvents;
    abstract class Overlay implements Internal.Renderable {
        constructor()
        abstract render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        isPauseScreen(): boolean;
        get pauseScreen(): boolean
    }
    type Overlay_ = Overlay;
    interface StructureModifier {
        abstract modify(arg0: Internal.Holder_<Internal.Structure>, arg1: Internal.StructureModifier$Phase_, arg2: Internal.ModifiableStructureInfo$StructureInfo$Builder_): void;
        abstract codec(): Internal.Codec<Internal.StructureModifier>;
        readonly LIST_CODEC: Internal.Codec<Internal.HolderSet<Internal.StructureModifier>>;
        readonly REFERENCE_CODEC: Internal.Codec<Internal.Holder<Internal.StructureModifier>>;
        readonly DIRECT_CODEC: Internal.Codec<Internal.StructureModifier>;
    }
    type StructureModifier_ = StructureModifier;
    class MineshaftStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: any_)
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly CODEC: Internal.Codec<Internal.MineshaftStructure>;
    }
    type MineshaftStructure_ = MineshaftStructure;
    interface Function <T, R> {
        andThen<V>(arg0: Internal.Function_<R, V>): Internal.Function<T, V>;
        abstract apply(arg0: T): R;
        compose<V>(arg0: Internal.Function_<V, T>): Internal.Function<V, R>;
        identity<T>(): Internal.Function<T, T>;
        (arg0: T): R;
    }
    type Function_<T, R> = Function<T, R>;
    interface BiPredicate <T, U> {
        abstract test(arg0: T, arg1: U): boolean;
        or(arg0: Internal.BiPredicate_<T, U>): this;
        and(arg0: Internal.BiPredicate_<T, U>): this;
        negate(): this;
        (arg0: T, arg1: U): boolean;
    }
    type BiPredicate_<T, U> = BiPredicate<T, U>;
    interface MinecraftSessionService {
        abstract getSecurePropertyValue(arg0: com.mojang.authlib.properties.Property_): string;
        abstract fillProfileProperties(arg0: Internal.GameProfile_, arg1: boolean): Internal.GameProfile;
        abstract getTextures(arg0: Internal.GameProfile_, arg1: boolean): Internal.Map<Internal.MinecraftProfileTexture$Type, Internal.MinecraftProfileTexture>;
        abstract joinServer(arg0: Internal.GameProfile_, arg1: string, arg2: string): void;
        abstract hasJoinedServer(arg0: Internal.GameProfile_, arg1: string, arg2: Internal.InetAddress_): Internal.GameProfile;
    }
    type MinecraftSessionService_ = MinecraftSessionService;
    class FluidIngredient$FluidStackIngredient extends Internal.FluidIngredient {
        constructor()
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        negate(): Internal.Predicate<Internal.FluidStack>;
        and(arg0: Internal.Predicate_<Internal.FluidStack>): Internal.Predicate<Internal.FluidStack>;
        or(arg0: Internal.Predicate_<Internal.FluidStack>): Internal.Predicate<Internal.FluidStack>;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
    }
    type FluidIngredient$FluidStackIngredient_ = FluidIngredient$FluidStackIngredient;
    class MilkBucketItem extends Internal.Item {
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
    type MilkBucketItem_ = MilkBucketItem;
    class DoubleFaceAttachedBlock$DoubleAttachFace extends Internal.Enum<Internal.DoubleFaceAttachedBlock$DoubleAttachFace> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.DoubleFaceAttachedBlock$DoubleAttachFace;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        xRot(): number;
        getSerializedName(): string;
        static values(): Internal.DoubleFaceAttachedBlock$DoubleAttachFace[];
        get serializedName(): string
        static readonly FLOOR: Internal.DoubleFaceAttachedBlock$DoubleAttachFace;
        static readonly WALL: Internal.DoubleFaceAttachedBlock$DoubleAttachFace;
        static readonly WALL_REVERSED: Internal.DoubleFaceAttachedBlock$DoubleAttachFace;
        static readonly CEILING: Internal.DoubleFaceAttachedBlock$DoubleAttachFace;
    }
    type DoubleFaceAttachedBlock$DoubleAttachFace_ = "floor" | "ceiling" | "wall_reversed" | "wall" | DoubleFaceAttachedBlock$DoubleAttachFace;
    abstract class WaterFluid extends Internal.FlowingFluid {
        constructor()
        getDripParticle(): Internal.ParticleOptions;
        getSlopeFindDistance(arg0: Internal.LevelReader_): number;
        canBeReplacedWith(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Fluid_, arg4: Internal.Direction_): boolean;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        animateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        getDropOff(arg0: Internal.LevelReader_): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        createLegacyBlock(arg0: Internal.FluidState_): Internal.BlockState;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        arch$registryName(): ResourceLocation;
        get dripParticle(): Internal.ParticleOptions
    }
    type WaterFluid_ = WaterFluid;
    interface EventLoopGroup extends Internal.EventExecutorGroup {
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): Internal.List<Internal.Future<T>>;
        abstract submit<T>(arg0: Internal.Runnable_, arg1: T): io.netty.util.concurrent.Future<T>;
        abstract scheduleAtFixedRate(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        abstract schedule<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        /**
         * @deprecated
        */
        abstract register(arg0: io.netty.channel.Channel_, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract isTerminated(): boolean;
        abstract next(): Internal.EventLoop;
        abstract register(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): T;
        abstract register(arg0: io.netty.channel.Channel_): Internal.ChannelFuture;
        abstract scheduleWithFixedDelay(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        abstract isShutdown(): boolean;
        /**
         * @deprecated
        */
        abstract shutdownNow(): Internal.List<Internal.Runnable>;
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>): Internal.List<Internal.Future<T>>;
        abstract shutdownGracefully(arg0: number, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.Future<any>;
        abstract shutdownGracefully(): io.netty.util.concurrent.Future<any>;
        /**
         * @deprecated
        */
        abstract shutdown(): void;
        abstract terminationFuture(): io.netty.util.concurrent.Future<any>;
        abstract iterator(): Internal.Iterator<Internal.EventExecutor>;
        abstract awaitTermination(arg0: number, arg1: Internal.TimeUnit_): boolean;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        abstract schedule(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>): T;
        abstract execute(arg0: Internal.Runnable_): void;
        abstract submit<T>(arg0: Internal.Callable_<T>): io.netty.util.concurrent.Future<T>;
        abstract submit(arg0: Internal.Runnable_): io.netty.util.concurrent.Future<any>;
        abstract isShuttingDown(): boolean;
        get terminated(): boolean
        get shutdown(): boolean
        get shuttingDown(): boolean
    }
    type EventLoopGroup_ = EventLoopGroup;
    class BonfireBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        static spawnExtinguishSmoke(arg0: Internal.LevelAccessor_, arg1: BlockPos_): void;
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
    type BonfireBlock_ = BonfireBlock;
    class HarvestEntry {
        constructor(arg0: number, arg1: Internal.ItemStack_, arg2: number, arg3: number)
        getMaxRolls(): number;
        getItem(): Internal.ItemStack;
        getChance(): number;
        getMinRolls(): number;
        get maxRolls(): number
        get item(): Internal.ItemStack
        get chance(): number
        get minRolls(): number
    }
    type HarvestEntry_ = HarvestEntry;
    class FloatArgumentInfo implements Internal.ArgumentTypeInfo<Internal.FloatArgumentType, Internal.FloatArgumentInfo$Template> {
        constructor()
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.FloatArgumentType_): Internal.FloatArgumentInfo$Template;
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        serializeToNetwork(arg0: Internal.FloatArgumentInfo$Template_, arg1: Internal.FriendlyByteBuf_): void;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToJson(arg0: Internal.FloatArgumentInfo$Template_, arg1: Internal.JsonObject_): void;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
    }
    type FloatArgumentInfo_ = FloatArgumentInfo;
    interface PublicKey extends Internal.Key {
        abstract getAlgorithm(): string;
        abstract getFormat(): string;
        abstract getEncoded(): number[];
        get algorithm(): string
        get format(): string
        get encoded(): number[]
        /**
         * @deprecated
        */
        readonly serialVersionUID: 7187392471159151072;
    }
    type PublicKey_ = PublicKey;
    class AlgorithmParameters {
        getAlgorithm(): string;
        getParameterSpec<T extends Internal.AlgorithmParameterSpec>(arg0: T): T;
        getEncoded(arg0: string): number[];
        init(arg0: Internal.AlgorithmParameterSpec_): void;
        static getInstance(arg0: string): Internal.AlgorithmParameters;
        static getInstance(arg0: string, arg1: Internal.Provider_): Internal.AlgorithmParameters;
        init(arg0: number[], arg1: string): void;
        static getInstance(arg0: string, arg1: string): Internal.AlgorithmParameters;
        getEncoded(): number[];
        init(arg0: number[]): void;
        getProvider(): Internal.Provider;
        get algorithm(): string
        get encoded(): number[]
        get provider(): Internal.Provider
    }
    type AlgorithmParameters_ = AlgorithmParameters;
    class LevelTicks <T> implements Internal.LevelTickAccess<T> {
        constructor(arg0: Internal.LongPredicate_, arg1: Internal.Supplier_<Internal.ProfilerFiller>)
        clearArea(arg0: Internal.BoundingBox_): void;
        count(): number;
        copyArea(arg0: Internal.BoundingBox_, arg1: Vec3i_): void;
        schedule(arg0: Internal.ScheduledTick_<T>): void;
        tick(arg0: number, arg1: number, arg2: Internal.BiConsumer_<BlockPos, T>): void;
        addContainer(arg0: Internal.ChunkPos_, arg1: Internal.LevelChunkTicks_<T>): void;
        hasScheduledTick(arg0: BlockPos_, arg1: T): boolean;
        willTickThisTick(arg0: BlockPos_, arg1: T): boolean;
        copyAreaFrom(arg0: Internal.LevelTicks_<T>, arg1: Internal.BoundingBox_, arg2: Vec3i_): void;
        removeContainer(arg0: Internal.ChunkPos_): void;
    }
    type LevelTicks_<T> = LevelTicks<T>;
    class PiglinBruteSpecificSensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
    }
    type PiglinBruteSpecificSensor_ = PiglinBruteSpecificSensor;
    class DragonDeathPhase extends Internal.AbstractDragonPhaseInstance {
        constructor(arg0: Internal.EnderDragon_)
        getPhase(): Internal.EnderDragonPhase<Internal.DragonDeathPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonDeathPhase>
    }
    type DragonDeathPhase_ = DragonDeathPhase;
    abstract class ForwardingMultimap <K, V> extends Internal.ForwardingObject implements Internal.Multimap<K, V> {
        keySet(): Internal.Set<K>;
        replaceValues(arg0: K, arg1: Internal.Iterable_<V>): Internal.Collection<V>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        get(arg0: K): Internal.Collection<V>;
        removeAll(arg0: any): Internal.Collection<V>;
        entries(): Internal.Collection<Internal.Map$Entry<K, V>>;
        values(): Internal.Collection<V>;
        containsValue(arg0: any): boolean;
        remove(arg0: any, arg1: any): boolean;
        isEmpty(): boolean;
        containsEntry(arg0: any, arg1: any): boolean;
        size(): number;
        containsKey(arg0: any): boolean;
        putAll(arg0: Internal.Multimap_<K, V>): boolean;
        put(arg0: K, arg1: V): boolean;
        clear(): void;
        putAll(arg0: K, arg1: Internal.Iterable_<V>): boolean;
        keys(): Internal.Multiset<K>;
        asMap(): Internal.Map<K, Internal.Collection<V>>;
        get empty(): boolean
    }
    type ForwardingMultimap_<K, V> = ForwardingMultimap<K, V>;
    interface SpriteTicker extends Internal.AutoCloseable {
        abstract close(): void;
        abstract tickAndUpload(arg0: number, arg1: number): void;
    }
    type SpriteTicker_ = SpriteTicker;
    interface Pack$ResourcesSupplier {
        abstract open(arg0: string): Internal.PackResources;
        (arg0: string): Internal.PackResources_;
    }
    type Pack$ResourcesSupplier_ = Pack$ResourcesSupplier;
    class Axolotl extends Internal.Animal implements Internal.Bucketable, Internal.VariantHolder<Internal.Axolotl$Variant>, Internal.LerpingModel {
        constructor(arg0: Internal.EntityType_<Internal.Axolotl>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setFromBucket(arg0: boolean): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        static onStopAttacking(arg0: Internal.Axolotl_, arg1: Internal.LivingEntity_): void;
        isPlayingDead(): boolean;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        applySupportingEffects(arg0: Internal.Player_): void;
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
        getModelRotationValues(): Internal.Map<string, Vec3f>;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        rehydrate(): void;
        /**
         * @deprecated
        */
        static loadDefaultDataFromBucketTag(arg0: Internal.Mob_, arg1: Internal.CompoundTag_): void;
        fromBucket(): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        loadFromBucketTag(arg0: Internal.CompoundTag_): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getVariant(): Internal.Axolotl$Variant;
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
        static checkAxolotlSpawnRules(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        saveToBucketTag(arg0: Internal.ItemStack_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        getBrain(): Internal.Brain<Internal.Axolotl>;
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
        getBucketItemStack(): Internal.ItemStack;
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
        setPlayingDead(arg0: boolean): void;
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
        static bucketMobPickup<T extends Internal.LivingEntity & Internal.Bucketable>(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: T): Internal.Optional<Internal.InteractionResult>;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        setVariant(arg0: Internal.Axolotl$Variant_): void;
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
        getPickupSound(): Internal.SoundEvent;
        setVariant(arg0: any): void;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        set fromBucket(arg0: boolean)
        set defaultMovementSpeedMultiplier(speed: number)
        get playingDead(): boolean
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get modelRotationValues(): Internal.Map<string, Vec3f>
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get variant(): Internal.Axolotl$Variant
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
        get brain(): Internal.Brain<Internal.Axolotl>
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get bucketItemStack(): Internal.ItemStack
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
        set playingDead(arg0: boolean)
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        set variant(arg0: Internal.Axolotl$Variant_)
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        get pickupSound(): Internal.SoundEvent
        set variant(arg0: any)
        static readonly TOTAL_PLAYDEAD_TIME: 200;
        static readonly PLAYER_REGEN_DETECTION_RANGE: 20.0;
        static readonly RARE_VARIANT_CHANCE: 1200;
        static readonly VARIANT_TAG: "Variant";
    }
    type Axolotl_ = Axolotl;
    class OptionInstance <T> {
        constructor(arg0: string, arg1: Internal.OptionInstance$TooltipSupplier_<T>, arg2: Internal.OptionInstance$CaptionBasedToString_<T>, arg3: Internal.OptionInstance$ValueSet_<T>, arg4: Internal.Codec_<T>, arg5: T, arg6: Internal.Consumer_<T>)
        constructor(arg0: string, arg1: Internal.OptionInstance$TooltipSupplier_<T>, arg2: Internal.OptionInstance$CaptionBasedToString_<T>, arg3: Internal.OptionInstance$ValueSet_<T>, arg4: T, arg5: Internal.Consumer_<T>)
        createButton(arg0: Internal.Options_, arg1: number, arg2: number, arg3: number, arg4: Internal.Consumer_<T>): Internal.AbstractWidget;
        static cachedConstantTooltip<T>(arg0: Internal.Component_): Internal.OptionInstance$TooltipSupplier<T>;
        static createBoolean(arg0: string, arg1: Internal.OptionInstance$TooltipSupplier_<boolean>, arg2: boolean, arg3: Internal.Consumer_<boolean>): Internal.OptionInstance<boolean>;
        createButton(arg0: Internal.Options_, arg1: number, arg2: number, arg3: number): Internal.AbstractWidget;
        values(): Internal.OptionInstance$ValueSet<T>;
        static createBoolean(arg0: string, arg1: boolean, arg2: Internal.Consumer_<boolean>): Internal.OptionInstance<boolean>;
        static forOptionEnum<T extends Internal.OptionEnum>(): Internal.OptionInstance$CaptionBasedToString<T>;
        static createBoolean(arg0: string, arg1: boolean): Internal.OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: Internal.OptionInstance$TooltipSupplier_<boolean>, arg2: Internal.OptionInstance$CaptionBasedToString_<boolean>, arg3: boolean, arg4: Internal.Consumer_<boolean>): Internal.OptionInstance<boolean>;
        codec(): Internal.Codec<T>;
        static noTooltip<T>(): Internal.OptionInstance$TooltipSupplier<T>;
        get(): T;
        set(arg0: T): void;
        static createBoolean(arg0: string, arg1: Internal.OptionInstance$TooltipSupplier_<boolean>, arg2: boolean): Internal.OptionInstance<boolean>;
        static readonly BOOLEAN_VALUES: Internal.OptionInstance$Enum<boolean>;
        static readonly BOOLEAN_TO_STRING: Internal.OptionInstance$CaptionBasedToString<boolean>;
    }
    type OptionInstance_<T> = OptionInstance<T>;
}
declare namespace net.darkhax.bookshelf.api.registry {
    class RegistryObject <T> extends Internal.CachedSupplier<T> implements Internal.IRegistryObject<T> {
        static deferred<T>(arg0: Internal.Registry_<T>, arg1: ResourceLocation_): net.darkhax.bookshelf.api.registry.RegistryObject<any>;
        getRegistryName(): ResourceLocation;
        static deferred<T>(arg0: Internal.Registry_<T>, arg1: string, arg2: string): net.darkhax.bookshelf.api.registry.RegistryObject<any>;
        get registryName(): ResourceLocation
    }
    type RegistryObject_<T> = RegistryObject<T>;
}
declare namespace org.apache.logging.log4j {
    interface Marker extends Internal.Serializable {
        abstract getParents(): org.apache.logging.log4j.Marker[];
        abstract hasParents(): boolean;
        abstract hashCode(): number;
        abstract addParents(...markers: org.apache.logging.log4j.Marker_[]): this;
        abstract isInstanceOf(name: string): boolean;
        abstract getName(): string;
        abstract isInstanceOf(m: org.apache.logging.log4j.Marker_): boolean;
        abstract setParents(...markers: org.apache.logging.log4j.Marker_[]): this;
        abstract equals(obj: any): boolean;
        abstract remove(marker: org.apache.logging.log4j.Marker_): boolean;
        get parents(): org.apache.logging.log4j.Marker[]
        get name(): string
        set parents(...markers: org.apache.logging.log4j.Marker_[])
    }
    type Marker_ = Marker;
}
declare namespace io.netty.util.concurrent {
    interface Future <V> extends Internal.Future<V> {
        abstract isSuccess(): boolean;
        abstract isDone(): boolean;
        abstract cancel(arg0: boolean): boolean;
        abstract addListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract cause(): Internal.Throwable;
        abstract get(): V;
        abstract awaitUninterruptibly(): this;
        abstract getNow(): V;
        abstract await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract await(arg0: number): boolean;
        abstract syncUninterruptibly(): this;
        abstract removeListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract removeListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract await(): this;
        abstract isCancellable(): boolean;
        abstract addListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): V;
        abstract awaitUninterruptibly(arg0: number): boolean;
        abstract sync(): this;
        abstract isCancelled(): boolean;
        get success(): boolean
        get done(): boolean
        get now(): V
        get cancellable(): boolean
        get cancelled(): boolean
    }
    type Future_<V> = Future<V>;
}
declare namespace com.mojang.brigadier {
    interface Message {
        abstract getString(): string;
        get string(): string
        (): string;
    }
    type Message_ = Message;
}
declare namespace com.mojang.datafixers.types {
    abstract class Type <A> implements Internal.App<Internal.Type$Mu, A> {
        constructor()
        codec(): Internal.Codec<A>;
        findType<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        findChoiceType(arg0: string, arg1: number): Internal.Optional<Internal.TaggedChoice$TaggedChoiceType<any>>;
        readTyped<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Typed<A>, T>>;
        writeDynamic<T>(arg0: Internal.DynamicOps_<T>, arg1: A): Internal.DataResult<Internal.Dynamic<T>>;
        all(arg0: Internal.TypeRewriteRule_, arg1: boolean, arg2: boolean): Internal.RewriteResult<A, any>;
        getSetType<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>): com.mojang.datafixers.types.Type<any>;
        readAndWrite<T>(arg0: Internal.DynamicOps_<T>, arg1: com.mojang.datafixers.types.Type_<any>, arg2: Internal.TypeRewriteRule_, arg3: Internal.PointFreeRule_, arg4: T): Internal.DataResult<T>;
        rewrite(arg0: Internal.TypeRewriteRule_, arg1: Internal.PointFreeRule_): Internal.Optional<Internal.RewriteResult<A, any>>;
        findField(arg0: string): Internal.OpticFinder<any>;
        ifSame<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: B): Internal.Optional<A>;
        one(arg0: Internal.TypeRewriteRule_): Internal.Optional<Internal.RewriteResult<A, any>>;
        everywhere(arg0: Internal.TypeRewriteRule_, arg1: Internal.PointFreeRule_, arg2: boolean, arg3: boolean): Internal.Optional<Internal.RewriteResult<A, any>>;
        pointTyped(arg0: Internal.DynamicOps_<any>): Internal.Optional<Internal.Typed<A>>;
        point(arg0: Internal.DynamicOps_<any>): Internal.Optional<A>;
        static unbox<A>(arg0: Internal.App_<Internal.Type$Mu, A>): com.mojang.datafixers.types.Type<A>;
        readTyped<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Typed<A>, T>>;
        abstract equals(arg0: any, arg1: boolean, arg2: boolean): boolean;
        findTypeCached<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        findTypeInChildren<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        ifSame<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: Internal.RewriteResult_<B, any>): Internal.Optional<Internal.RewriteResult<A, any>>;
        static opticView<S, T, A, B>(arg0: com.mojang.datafixers.types.Type_<S>, arg1: Internal.RewriteResult_<A, B>, arg2: Internal.TypedOptic_<S, T, A, B>): Internal.RewriteResult<S, T>;
        read<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.TypeRewriteRule_, arg2: Internal.PointFreeRule_, arg3: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Optional<any>, T>>;
        findCheckedType(arg0: number): Internal.Optional<com.mojang.datafixers.types.Type<any>>;
        findFieldTypeOpt(arg0: string): Internal.Optional<com.mojang.datafixers.types.Type<any>>;
        read<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<A, Internal.Dynamic<T>>>;
        findFieldType(arg0: string): com.mojang.datafixers.types.Type<any>;
        rewriteOrNop(arg0: Internal.TypeRewriteRule_): Internal.RewriteResult<A, any>;
        ifSame<B>(arg0: Internal.Typed_<B>): Internal.Optional<A>;
        finder(): Internal.OpticFinder<A>;
        write<T>(arg0: Internal.DynamicOps_<T>, arg1: A): Internal.DataResult<T>;
        abstract buildTemplate(): Internal.TypeTemplate;
        updateMu(arg0: Internal.RecursiveTypeFamily_): com.mojang.datafixers.types.Type<any>;
        template(): Internal.TypeTemplate;
    }
    type Type_<A> = Type<A>;
}
