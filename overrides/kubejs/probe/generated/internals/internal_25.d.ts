/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class FishingSpeedEnchantment extends Internal.Enchantment {
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type FishingSpeedEnchantment_ = FishingSpeedEnchantment;
    class SculkSensorBlockEntity extends Internal.BlockEntity implements Internal.GameEventListener$Holder<Internal.VibrationSystem$Listener>, Internal.VibrationSystem {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        getLastVibrationFrequency(): number;
        deserializeNBT(arg0: Internal.Tag_): void;
        static getGameEventFrequency(arg0: Internal.GameEvent_): number;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getListener(): Internal.VibrationSystem$Listener;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getVibrationData(): Internal.VibrationSystem$Data;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getVibrationUser(): Internal.VibrationSystem$User;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        createVibrationUser(): Internal.VibrationSystem$User;
        setLastVibrationFrequency(arg0: number): void;
        static getRedstoneStrengthForDistance(arg0: number, arg1: number): number;
        static getResonanceEventByFrequency(arg0: number): Internal.GameEvent;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        get lastVibrationFrequency(): number
        get listener(): Internal.VibrationSystem$Listener
        get vibrationData(): Internal.VibrationSystem$Data
        get vibrationUser(): Internal.VibrationSystem$User
        get modelData(): Internal.ModelData
        set lastVibrationFrequency(arg0: number)
        get renderBoundingBox(): Internal.AABB
    }
    type SculkSensorBlockEntity_ = SculkSensorBlockEntity;
    class RenderBuffers {
        constructor()
        bufferSource(): Internal.MultiBufferSource$BufferSource;
        crumblingBufferSource(): Internal.MultiBufferSource$BufferSource;
        fixedBufferPack(): Internal.ChunkBufferBuilderPack;
        outlineBufferSource(): Internal.OutlineBufferSource;
    }
    type RenderBuffers_ = RenderBuffers;
    class PistonType extends Internal.Enum<Internal.PistonType> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.PistonType;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.PistonType[];
        get serializedName(): string
        static readonly STICKY: Internal.PistonType;
        static readonly DEFAULT: Internal.PistonType;
    }
    type PistonType_ = "sticky" | PistonType | "default";
    interface LogicFunctionPlateBlock$LogicFunctionPlateBlockFactory {
        abstract makeBlock(arg0: Internal.LogicFunction_, arg1: Internal.BlockBehaviour$Properties_): Internal.LogicFunctionPlateBlock;
        (arg0: Internal.LogicFunction, arg1: Internal.BlockBehaviour$Properties): Internal.LogicFunctionPlateBlock_;
    }
    type LogicFunctionPlateBlock$LogicFunctionPlateBlockFactory_ = LogicFunctionPlateBlock$LogicFunctionPlateBlockFactory;
    class ModuleLayer {
        defineModulesWithManyLoaders(arg0: Internal.Configuration_, arg1: Internal.ClassLoader_): this;
        static boot(): Internal.ModuleLayer;
        findLoader(arg0: string): Internal.ClassLoader;
        static defineModulesWithManyLoaders(arg0: Internal.Configuration_, arg1: Internal.List_<Internal.ModuleLayer>, arg2: Internal.ClassLoader_): Internal.ModuleLayer$Controller;
        static defineModules(arg0: Internal.Configuration_, arg1: Internal.List_<Internal.ModuleLayer>, arg2: Internal.Function_<string, Internal.ClassLoader>): Internal.ModuleLayer$Controller;
        defineModulesWithOneLoader(arg0: Internal.Configuration_, arg1: Internal.ClassLoader_): this;
        modules(): Internal.Set<Internal.Module>;
        static defineModulesWithOneLoader(arg0: Internal.Configuration_, arg1: Internal.List_<Internal.ModuleLayer>, arg2: Internal.ClassLoader_): Internal.ModuleLayer$Controller;
        parents(): Internal.List<Internal.ModuleLayer>;
        defineModules(arg0: Internal.Configuration_, arg1: Internal.Function_<string, Internal.ClassLoader>): this;
        static empty(): Internal.ModuleLayer;
        configuration(): Internal.Configuration;
        findModule(arg0: string): Internal.Optional<Internal.Module>;
    }
    type ModuleLayer_ = ModuleLayer;
    class CalculationStrategy extends Internal.Enum<Internal.CalculationStrategy> {
        static values(): Internal.CalculationStrategy[];
        static valueOf(arg0: string): Internal.CalculationStrategy;
        static readonly CRAFT_LESS: Internal.CalculationStrategy;
        static readonly REPORT_MISSING_ITEMS: Internal.CalculationStrategy;
    }
    type CalculationStrategy_ = "report_missing_items" | CalculationStrategy | "craft_less";
    interface SpecialSpoutHandlerEvent$SpoutHandler {
        abstract fillBlock(arg0: Internal.BlockContainerJS_, arg1: Internal.FluidStackJS_, arg2: boolean): number;
        (arg0: Internal.BlockContainerJS, arg1: Internal.FluidStackJS, arg2: boolean): number;
    }
    type SpecialSpoutHandlerEvent$SpoutHandler_ = SpecialSpoutHandlerEvent$SpoutHandler;
    class ServerLevel extends Internal.Level implements Internal.ServerLevelKJS, Internal.CellularNoiseProvider, com.simibubi.create.foundation.mixin.accessor.ServerLevelAccessor, Internal.WorldGenLevel, Internal.ILevelEventRedirect {
        constructor(arg0: Internal.MinecraftServer_, arg1: Internal.Executor_, arg2: Internal.LevelStorageSource$LevelStorageAccess_, arg3: Internal.ServerLevelData_, arg4: Internal.ResourceKey_<Internal.Level>, arg5: Internal.LevelStem_, arg6: Internal.ChunkProgressListener_, arg7: boolean, arg8: number, arg9: Internal.List_<any>, arg10: boolean, arg11: Internal.RandomSequences_)
        spawnLightning(x: number, y: number, z: number, effectOnly: boolean, player: Internal.ServerPlayer_): void;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        dayTime(): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        resetEmptyTime(): void;
        getMaxSection(): number;
        setDefaultSpawnPos(arg0: BlockPos_, arg1: number): void;
        setRedirected(redirected: boolean, id: Vec3d_): void;
        biomancy$getCellularNoise(): Internal.CellularNoise;
        getPlayers(arg0: Internal.Predicate_<Internal.ServerPlayer>, arg1: number): Internal.List<Internal.ServerPlayer>;
        getSectionYFromSectionIndex(arg0: number): number;
        tick(arg0: Internal.BooleanSupplier_): void;
        isEmptyBlock(arg0: BlockPos_): boolean;
        playSound(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_): void;
        getTimeOfDay(arg0: number): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        addRespawnedPlayer(arg0: Internal.ServerPlayer_): void;
        runCommandSilent(command: string): number;
        addWorldGenChunkEntities(arg0: Internal.Stream_<Internal.Entity>): void;
        sendParticles<T extends Internal.ParticleOptions>(arg0: Internal.ServerPlayer_, arg1: T, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): boolean;
        getRaidAt(arg0: BlockPos_): Internal.Raid;
        getDataStorage(): Internal.DimensionDataStorage;
        getSectionIndex(arg0: number): number;
        ensureCanWrite(arg0: BlockPos_): boolean;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        handler$zbh000$warpingCheck(arg0: Internal.Entity_, arg1: Internal.CallbackInfo_): void;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        getHeight(): number;
        getPersistentData(): Internal.CompoundTag;
        getPlayers(arg0: Internal.Predicate_<Internal.ServerPlayer>): Internal.List<Internal.ServerPlayer>;
        addDuringTeleport(arg0: Internal.Entity_): void;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        isNaturalSpawningAllowed(arg0: Internal.ChunkPos_): boolean;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        isPositionEntityTicking(arg0: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number, arg3: Internal.TickPriority_): void;
        getRandomSequences(): Internal.RandomSequences;
        setTime(time: number): void;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Internal.Player;
        isNaturalSpawningAllowed(arg0: BlockPos_): boolean;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        setWeatherParameters(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        getPortalForcer(): Internal.PortalForcer;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        isVillage(arg0: Internal.SectionPos_): boolean;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getName(): net.minecraft.network.chat.Component;
        getDifficulty(): Internal.Difficulty;
        getForcedChunks(): Internal.LongSet;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        getSectionsCount(): number;
        getFluidTicks(): Internal.LevelTicks<Internal.Fluid>;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.Predicate_<T>, arg2: Internal.List_<T>, arg3: number): void;
        hasChunk(arg0: number, arg1: number): boolean;
        getMoonBrightness(): number;
        /**
         * @deprecated
        */
        setDragonFight(arg0: Internal.EndDragonFight_): void;
        isWaterAt(arg0: BlockPos_): boolean;
        saveDebugReport(arg0: Internal.Path_): void;
        getSide(): Internal.ScriptType;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        getStructureManager(): Internal.StructureTemplateManager;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        removePlayerImmediately(arg0: Internal.ServerPlayer_, arg1: Internal.Entity$RemovalReason_): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getPoiManager(): Internal.PoiManager;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        static makeObsidianPlatform(arg0: Internal.ServerLevel_): void;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: BlockPos_): void;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        getMaxLightLevel(): number;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        tickNonPassenger(arg0: Internal.Entity_): void;
        getSeed(): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        save(arg0: Internal.ProgressListener_, arg1: boolean, arg2: boolean): void;
        addWithUUID(arg0: Internal.Entity_): boolean;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        getAllEntities(): Internal.Iterable<Internal.Entity>;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        unload(arg0: Internal.LevelChunk_): void;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        canSleepThroughNights(): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        static tryRedirect(serverLevel: Internal.ILevelEventRedirect_, pPlayer: Internal.Player_, vec3: Vec3d_, pType: number, pPos: BlockPos_, pData: number): boolean;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_): Internal.List<T>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        onReputationEvent(arg0: Internal.ReputationEventType_, arg1: Internal.Entity_, arg2: Internal.ReputationEventHandler_): void;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        setDayTime(arg0: number): void;
        getMinBuildHeight(): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        getDisplayName(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getDirectSignalTo(arg0: BlockPos_): number;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: number, arg2: number, arg3: number): Internal.Player;
        getMaxBuildHeight(): number;
        areEntitiesLoaded(arg0: number): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean): boolean;
        tryAddFreshEntityWithPassengers(arg0: Internal.Entity_): boolean;
        spawnLightning(x: number, y: number, z: number, effectOnly: boolean): void;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number): void;
        getChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        setChunkForced(arg0: number, arg1: number, arg2: boolean): boolean;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        addDuringCommandTeleport(arg0: Internal.ServerPlayer_): void;
        startTickingChunk(arg0: Internal.LevelChunk_): void;
        getBlockTicks(): Internal.LevelTickAccess<any>;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        getWatchdogStats(): string;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        findClosestBiome3d(arg0: Internal.Predicate_<Internal.Holder<Internal.Biome>>, arg1: BlockPos_, arg2: number, arg3: number, arg4: number): Internal.Pair<BlockPos, Internal.Holder<Internal.Biome>>;
        isCloseToVillage(arg0: BlockPos_, arg1: number): boolean;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getRandomSequence(arg0: ResourceLocation_): Internal.RandomSource;
        tickCustomSpawners(arg0: boolean, arg1: boolean): void;
        addNewPlayer(arg0: Internal.ServerPlayer_): void;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Internal.Player;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.Predicate_<T>, arg2: Internal.List_<T>): void;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        sendParticles<T extends Internal.ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isHandlingTick(): boolean;
        getDimension(): ResourceLocation;
        canSeeSky(arg0: BlockPos_): boolean;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        /**
         * @deprecated
        */
        getEntityOrPart(arg0: number): Internal.Entity;
        getDragons(): Internal.List<Internal.EnderDragon>;
        addFreshEntityWithPassengers(arg0: Internal.Entity_): void;
        structureManager(): Internal.StructureManager;
        getPlayerByUUID(arg0: Internal.UUID_): Internal.Player;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Internal.Player>;
        getSectionIndexFromSectionY(arg0: number): number;
        updateSleepingPlayerList(): void;
        getRandomPlayer(): Internal.ServerPlayer;
        noCollision(arg0: Internal.Entity_): boolean;
        getLevel(): this;
        tickChunk(arg0: Internal.LevelChunk_, arg1: number): void;
        self(): Internal.Level;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        getBestNeighborSignal(arg0: BlockPos_): number;
        getEntity(arg0: Internal.UUID_): Internal.Entity;
        sectionsToVillage(arg0: Internal.SectionPos_): number;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        noCollision(arg0: Internal.AABB_): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        clearBlockEvents(arg0: Internal.BoundingBox_): void;
        setCurrentlyGenerating(arg0: Internal.Supplier_<string>): void;
        getModelDataManager(): Internal.ModelDataManager;
        findNearestMapStructure(arg0: Internal.TagKey_<Internal.Structure>, arg1: BlockPos_, arg2: number, arg3: boolean): BlockPos;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        create$getEntityTickList(): Internal.EntityTickList;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        isOutsideBuildHeight(arg0: number): boolean;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        addDuringPortalTeleport(arg0: Internal.ServerPlayer_): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        getLogicalHeight(): number;
        onStructureStartsAvailable(arg0: Internal.ChunkAccess_): void;
        isRaided(arg0: BlockPos_): boolean;
        addLegacyChunkEntities(arg0: Internal.Stream_<Internal.Entity>): void;
        getRaids(): Internal.Raids;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        isVillage(arg0: BlockPos_): boolean;
        getPlayers(): Internal.EntityArrayList;
        getDragonFight(): Internal.EndDragonFight;
        isOverworld(): boolean;
        runCommand(command: string): number;
        getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.Predicate_<T>): Internal.List<T>;
        isFlat(): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        get maxSection(): number
        get dataStorage(): Internal.DimensionDataStorage
        get height(): number
        get persistentData(): Internal.CompoundTag
        get randomSequences(): Internal.RandomSequences
        set time(time: number)
        get portalForcer(): Internal.PortalForcer
        get name(): net.minecraft.network.chat.Component
        get difficulty(): Internal.Difficulty
        get forcedChunks(): Internal.LongSet
        get sectionsCount(): number
        get fluidTicks(): Internal.LevelTicks<Internal.Fluid>
        get moonBrightness(): number
        /**
         * @deprecated
        */
        set dragonFight(arg0: Internal.EndDragonFight_)
        get side(): Internal.ScriptType
        get structureManager(): Internal.StructureTemplateManager
        get poiManager(): Internal.PoiManager
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get maxLightLevel(): number
        get seed(): number
        get allEntities(): Internal.Iterable<Internal.Entity>
        set dayTime(arg0: number)
        get minBuildHeight(): number
        get displayName(): net.minecraft.network.chat.Component
        get maxBuildHeight(): number
        get blockTicks(): Internal.LevelTickAccess<any>
        get watchdogStats(): string
        get minSection(): number
        get handlingTick(): boolean
        get dimension(): ResourceLocation
        get moonPhase(): number
        get dragons(): Internal.List<Internal.EnderDragon>
        get randomPlayer(): Internal.ServerPlayer
        get level(): Internal.ServerLevel
        set currentlyGenerating(arg0: Internal.Supplier_<string>)
        get modelDataManager(): Internal.ModelDataManager
        get entities(): Internal.EntityArrayList
        get logicalHeight(): number
        get raids(): Internal.Raids
        get players(): Internal.EntityArrayList
        get dragonFight(): Internal.EndDragonFight
        get overworld(): boolean
        get flat(): boolean
        static readonly RAIN_DURATION: Internal.UniformInt;
        static readonly END_SPAWN_POINT: BlockPos;
        static readonly THUNDER_DURATION: Internal.UniformInt;
        noSave: boolean;
        static readonly RAIN_DELAY: Internal.UniformInt;
        readonly entityManager: Internal.PersistentEntitySectionManager<Internal.Entity>;
    }
    type ServerLevel_ = ServerLevel;
    class BackpackUpgradeRecipe extends Internal.ShapedRecipe implements Internal.IWrapperRecipe<Internal.ShapedRecipe> {
        constructor(arg0: Internal.ShapedRecipe_)
        static bookshelf$dissolvePattern(arg0: string[], arg1: Internal.Map_<string, Internal.Ingredient>, arg2: number, arg3: number): Internal.NonNullList<Internal.Ingredient>;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getCompose(): Internal.Recipe<any>;
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
        get compose(): Internal.Recipe<any>
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get mod(): string
        static readonly REGISTERED_RECIPES: Internal.Set<ResourceLocation>;
    }
    type BackpackUpgradeRecipe_ = BackpackUpgradeRecipe;
    class AllIcons implements Internal.ScreenElement {
        constructor(arg0: number, arg1: number)
        asStencil(): Internal.DelegatedStencilElement;
        bind(): void;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number): void;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        static readonly I_WHITELIST_AND: Internal.AllIcons;
        static readonly I_ARM_ROUND_ROBIN: Internal.AllIcons;
        static readonly I_SEQ_REPEAT: Internal.AllIcons;
        static readonly I_PATTERN_CHECKERED: Internal.AllIcons;
        static readonly VALUE_BOX_HOVER_8PX: Internal.AllIcons;
        static readonly I_MTD_REPLAY: Internal.AllIcons;
        static readonly I_TOOL_MOVE_Y: Internal.AllIcons;
        static readonly I_PRIORITY_HIGH: Internal.AllIcons;
        static readonly I_PATTERN_CHANCE_50: Internal.AllIcons;
        static readonly I_CONFIG_PREV: Internal.AllIcons;
        static readonly I_ATTACHED: Internal.AllIcons;
        static readonly I_SCHEMATIC: Internal.AllIcons;
        static readonly I_CONFIG_OPEN: Internal.AllIcons;
        static readonly I_FX_FIELD_OFF: Internal.AllIcons;
        static readonly I_FX_FIELD_ON: Internal.AllIcons;
        static readonly I_REFRESH: Internal.AllIcons;
        static readonly I_PLACE: Internal.AllIcons;
        static readonly I_OVERLAY: Internal.AllIcons;
        static readonly I_MOVE_PLACE_RETURNED: Internal.AllIcons;
        static readonly I_CONFIG_SAVE: Internal.AllIcons;
        static readonly I_CONFIRM: Internal.AllIcons;
        static readonly I_ROLLER_FILL: Internal.AllIcons;
        static readonly I_MOVE_NEVER_PLACE: Internal.AllIcons;
        static readonly I_TUNNEL_FORCED_ROUND_ROBIN: Internal.AllIcons;
        static readonly I_PATTERN_SOLID: Internal.AllIcons;
        static readonly I_DISABLE: Internal.AllIcons;
        static readonly I_TOOL_MOVE_XZ: Internal.AllIcons;
        static readonly I_PATTERN_CHANCE_75: Internal.AllIcons;
        static readonly ICON_ATLAS_SIZE: 256;
        static readonly I_SCROLL: Internal.AllIcons;
        static readonly I_TUNNEL_FORCED_SPLIT: Internal.AllIcons;
        static readonly I_CONFIG_UNLOCKED: Internal.AllIcons;
        static readonly I_PASSIVE: Internal.AllIcons;
        static readonly I_CONFIG_LOCKED: Internal.AllIcons;
        static readonly I_PRIORITY_VERY_HIGH: Internal.AllIcons;
        static readonly I_MTD_LEFT: Internal.AllIcons;
        static readonly I_TOOLBOX: Internal.AllIcons;
        static readonly I_MTD_SLOW_MODE: Internal.AllIcons;
        static readonly I_OPEN_FOLDER: Internal.AllIcons;
        static readonly I_MINUTE_HAND_FIRST: Internal.AllIcons;
        static readonly I_ROTATE_PLACE: Internal.AllIcons;
        static readonly I_PATTERN_CHECKERED_INVERSED: Internal.AllIcons;
        static readonly I_HOUR_HAND_FIRST_24: Internal.AllIcons;
        static readonly I_ARM_FORCED_ROUND_ROBIN: Internal.AllIcons;
        static readonly I_REPLACE_ANY: Internal.AllIcons;
        static readonly I_CONFIG_BACK: Internal.AllIcons;
        static readonly I_MOVE_PLACE: Internal.AllIcons;
        static readonly I_TARGET: Internal.AllIcons;
        static readonly I_TUNNEL_SYNCHRONIZE: Internal.AllIcons;
        static readonly I_FOLLOW_DIAGONAL: Internal.AllIcons;
        static readonly I_ROLLER_PAVE: Internal.AllIcons;
        static readonly I_REPLACE_EMPTY: Internal.AllIcons;
        static readonly I_ROTATE_CCW: Internal.AllIcons;
        static readonly I_CLEAR: Internal.AllIcons;
        static readonly I_WHITELIST_NOT: Internal.AllIcons;
        static readonly I_FLATTEN: Internal.AllIcons;
        static readonly I_MTD_CLOSE: Internal.AllIcons;
        static readonly I_CENTERED: Internal.AllIcons;
        static readonly I_SKIP_BLOCK_ENTITIES: Internal.AllIcons;
        static readonly I_BLACKLIST: Internal.AllIcons;
        static readonly I_WHITELIST: Internal.AllIcons;
        static readonly I_MTD_RIGHT: Internal.AllIcons;
        static readonly I_CONFIG_DISCARD: Internal.AllIcons;
        static readonly I_FX_BLEND_OFF: Internal.AllIcons;
        static readonly I_WHITELIST_OR: Internal.AllIcons;
        static readonly I_TOOL_DEPLOY: Internal.AllIcons;
        static readonly I_CONFIG_RESET: Internal.AllIcons;
        static readonly I_ADD: Internal.AllIcons;
        static readonly I_CART_ROTATE: Internal.AllIcons;
        static readonly I_REPLACE: Internal.AllIcons;
        static readonly VALUE_BOX_HOVER_4PX: Internal.AllIcons;
        static readonly I_TOOL_MIRROR: Internal.AllIcons;
        static readonly I_CLEAR_CHECKED: Internal.AllIcons;
        static readonly I_ADD_INVERTED_ATTRIBUTE: Internal.AllIcons;
        static readonly ICON_ATLAS: ResourceLocation;
        static readonly I_3x3: Internal.AllIcons;
        static readonly I_RMB: Internal.AllIcons;
        static readonly I_PAUSE: Internal.AllIcons;
        static readonly I_TOOL_ROTATE: Internal.AllIcons;
        static readonly I_FLIP: Internal.AllIcons;
        static readonly I_PRIORITY_LOW: Internal.AllIcons;
        static readonly I_INSERTED: Internal.AllIcons;
        static readonly I_FX_SURFACE_ON: Internal.AllIcons;
        static readonly I_TUNNEL_PREFER_NEAREST: Internal.AllIcons;
        static readonly I_ROLLER_WIDE_FILL: Internal.AllIcons;
        static readonly I_CONFIG_NEXT: Internal.AllIcons;
        static readonly I_DONT_REPLACE: Internal.AllIcons;
        static readonly I_FX_SURFACE_OFF: Internal.AllIcons;
        static readonly I_VIEW_SCHEDULE: Internal.AllIcons;
        static readonly I_DICE: Internal.AllIcons;
        static readonly I_NONE: Internal.AllIcons;
        static readonly I_ACTIVE: Internal.AllIcons;
        static readonly I_ROTATE_PLACE_RETURNED: Internal.AllIcons;
        static readonly I_CART_ROTATE_PAUSED: Internal.AllIcons;
        static readonly I_FX_BLEND: Internal.AllIcons;
        static readonly VALUE_BOX_HOVER_6PX: Internal.AllIcons;
        static readonly I_PLAY: Internal.AllIcons;
        static readonly I_FILL: Internal.AllIcons;
        static readonly I_SKIP_MISSING: Internal.AllIcons;
        static readonly I_HOUR_HAND_FIRST: Internal.AllIcons;
        static readonly I_REPLACE_SOLID: Internal.AllIcons;
        static readonly I_TUNNEL_ROUND_ROBIN: Internal.AllIcons;
        static readonly I_TUNNEL_RANDOMIZE: Internal.AllIcons;
        static readonly I_PLACEMENT_SETTINGS: Internal.AllIcons;
        static readonly I_MTD_USER_MODE: Internal.AllIcons;
        static readonly I_LMB: Internal.AllIcons;
        static readonly I_TUNNEL_SPLIT: Internal.AllIcons;
        static readonly I_ARM_PREFER_FIRST: Internal.AllIcons;
        static readonly I_TRASH: Internal.AllIcons;
        static readonly I_PRIORITY_VERY_LOW: Internal.AllIcons;
        static readonly I_PATTERN_CHANCE_25: Internal.AllIcons;
        static readonly I_CART_ROTATE_LOCKED: Internal.AllIcons;
        static readonly I_STOP: Internal.AllIcons;
        static readonly I_RESPECT_NBT: Internal.AllIcons;
        static readonly I_FOLLOW_MATERIAL: Internal.AllIcons;
        static readonly I_IGNORE_NBT: Internal.AllIcons;
        static readonly I_ROTATE_NEVER_PLACE: Internal.AllIcons;
        static readonly I_MTD_SCAN: Internal.AllIcons;
    }
    type AllIcons_ = AllIcons;
    interface CustomMapData <H extends Internal.CustomMapData$DirtyCounter> {
        abstract loadUpdateTag(arg0: Internal.CompoundTag_): void;
        onItemUpdate(data: Internal.MapItemSavedData_, entity: Internal.Entity_): boolean;
        onItemTooltip(data: Internal.MapItemSavedData_, stack: Internal.ItemStack_): net.minecraft.network.chat.Component;
        abstract load(arg0: Internal.CompoundTag_): void;
        abstract saveToUpdateTag(arg0: Internal.CompoundTag_, arg1: H): void;
        setDirty(data: Internal.MapItemSavedData_, dirtySetter: Internal.Consumer_<H>): void;
        abstract createDirtyCounter(): H;
        abstract save(arg0: Internal.CompoundTag_): void;
        abstract getType(): Internal.CustomMapData$Type<any>;
        persistOnCopyOrLock(): boolean;
        get type(): Internal.CustomMapData$Type<any>
    }
    type CustomMapData_<H extends Internal.CustomMapData$DirtyCounter> = CustomMapData<H>;
    class ModBlockProperties$Winding extends Internal.Enum<Internal.ModBlockProperties$Winding> implements Internal.StringRepresentable {
        static valueOf(name: string): Internal.ModBlockProperties$Winding;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.ModBlockProperties$Winding[];
        get serializedName(): string
        static readonly ROPE: Internal.ModBlockProperties$Winding;
        static readonly NONE: Internal.ModBlockProperties$Winding;
        static readonly CHAIN: Internal.ModBlockProperties$Winding;
    }
    type ModBlockProperties$Winding_ = "rope" | ModBlockProperties$Winding | "chain" | "none";
    class NoOpFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type NoOpFeature_ = NoOpFeature;
    class LootDataId <T> extends Internal.Record {
        constructor(arg0: Internal.LootDataType_<T>, arg1: ResourceLocation_)
        type(): Internal.LootDataType<T>;
        location(): ResourceLocation;
    }
    type LootDataId_<T> = LootDataId<T>;
    class GearboxBlockEntity extends Internal.DirectionalShaftHalvesBlockEntity {
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
    type GearboxBlockEntity_ = GearboxBlockEntity;
    class LevelStorageSource$LevelStorageAccess implements Internal.AutoCloseable {
        deleteLevel(): void;
        getLevelPath(arg0: Internal.LevelResource_): Internal.Path;
        getLevelId(): string;
        getWorldDir(): Internal.Path;
        saveDataTag(arg0: Internal.RegistryAccess_, arg1: Internal.WorldData_, arg2: Internal.CompoundTag_): void;
        getDataConfiguration(): Internal.WorldDataConfiguration;
        getSummary(): Internal.LevelSummary;
        makeWorldBackup(): number;
        getDimensionPath(arg0: Internal.ResourceKey_<Internal.Level>): Internal.Path;
        readAdditionalLevelSaveData(): void;
        getDataTag(arg0: Internal.DynamicOps_<Internal.Tag>, arg1: Internal.WorldDataConfiguration_, arg2: Internal.Registry_<Internal.LevelStem>, arg3: Internal.Lifecycle_): Internal.Pair<Internal.WorldData, Internal.WorldDimensions$Complete>;
        renameLevel(arg0: string): void;
        close(): void;
        saveDataTag(arg0: Internal.RegistryAccess_, arg1: Internal.WorldData_): void;
        createPlayerStorage(): Internal.PlayerDataStorage;
        getIconFile(): Internal.Optional<Internal.Path>;
        get levelId(): string
        get worldDir(): Internal.Path
        get dataConfiguration(): Internal.WorldDataConfiguration
        get summary(): Internal.LevelSummary
        get iconFile(): Internal.Optional<Internal.Path>
    }
    type LevelStorageSource$LevelStorageAccess_ = LevelStorageSource$LevelStorageAccess;
    interface GenericDeclaration extends Internal.AnnotatedElement {
        getAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        getDeclaredAnnotation<T extends Internal.Annotation>(arg0: T): T;
        getDeclaredAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        abstract getAnnotation<T extends Internal.Annotation>(arg0: T): T;
        abstract getAnnotations(): Internal.Annotation[];
        abstract getTypeParameters(): any[];
        abstract getDeclaredAnnotations(): Internal.Annotation[];
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        get annotations(): Internal.Annotation[]
        get typeParameters(): any[]
        get declaredAnnotations(): Internal.Annotation[]
    }
    type GenericDeclaration_ = GenericDeclaration;
    interface IZetaMessage {
        abstract receive(arg0: Internal.IZetaNetworkEventContext_): boolean;
        (arg0: Internal.IZetaNetworkEventContext): boolean;
    }
    type IZetaMessage_ = IZetaMessage;
    interface IZeta {
        abstract asZeta(): Internal.Zeta;
        (): Internal.Zeta_;
    }
    type IZeta_ = IZeta;
    class ModelDataManager {
        constructor(arg0: Internal.Level_)
        requestRefresh(arg0: Internal.BlockEntity_): void;
        getAt(arg0: BlockPos_): Internal.ModelData;
        getAt(arg0: Internal.ChunkPos_): Internal.Map<BlockPos, Internal.ModelData>;
        static onChunkUnload(arg0: Internal.ChunkEvent$Unload_): void;
    }
    type ModelDataManager_ = ModelDataManager;
    abstract class MultifaceBlock extends Internal.Block {
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
        static getFaceProperty(arg0: Internal.Direction_): Internal.BooleanProperty;
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
        isValidStateForPlacement(arg0: Internal.BlockGetter_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        static canAttachTo(arg0: Internal.BlockGetter_, arg1: Internal.Direction_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        static hasFace(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
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
        static pack(arg0: Internal.Collection_<Internal.Direction>): number;
        getBlockStates(): Internal.List<Internal.BlockState>;
        static availableFaces(arg0: Internal.BlockState_): Internal.Set<Internal.Direction>;
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
        abstract getSpreader(): Internal.MultifaceSpreader;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getStateForPlacement(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): Internal.BlockState;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static unpack(arg0: number): Internal.Set<Internal.Direction>;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get spreader(): Internal.MultifaceSpreader
    }
    type MultifaceBlock_ = MultifaceBlock;
    class ModFileScanData$AnnotationData extends Internal.Record {
        constructor(annotationType: org.objectweb.asm.Type_, targetType: Internal.ElementType_, clazz: org.objectweb.asm.Type_, memberName: string, annotationData: Internal.Map_<string, any>)
        memberName(): string;
        clazz(): org.objectweb.asm.Type;
        annotationData(): Internal.Map<string, any>;
        targetType(): Internal.ElementType;
        annotationType(): org.objectweb.asm.Type;
    }
    type ModFileScanData$AnnotationData_ = ModFileScanData$AnnotationData;
    class ScreenEvent$CharacterTyped extends Internal.ScreenEvent {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: string, arg2: number)
        getModifiers(): number;
        getCodePoint(): string;
        get modifiers(): number
        get codePoint(): string
    }
    type ScreenEvent$CharacterTyped_ = ScreenEvent$CharacterTyped;
    class Explosion {
        constructor(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Explosion$BlockInteraction_)
        constructor(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Explosion$BlockInteraction_, arg8: Internal.List_<BlockPos>)
        constructor(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.List_<BlockPos>)
        constructor(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: DamageSource_, arg3: Internal.ExplosionDamageCalculator_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: Internal.Explosion$BlockInteraction_)
        getDamageSource(): DamageSource;
        getPosition(): Vec3d;
        getIndirectSourceEntity(): Internal.LivingEntity;
        getExploder(): Internal.Entity;
        getDirectSourceEntity(): Internal.Entity;
        finalizeExplosion(arg0: boolean): void;
        explode(): void;
        interactsWithBlocks(): boolean;
        getToBlow(): Internal.List<BlockPos>;
        static getSeenPercent(arg0: Vec3d_, arg1: Internal.Entity_): number;
        clearToBlow(): void;
        static addBlockDrops(arg0: Internal.ObjectArrayList_<Internal.Pair<Internal.ItemStack, BlockPos>>, arg1: Internal.ItemStack_, arg2: BlockPos_): void;
        getHitPlayers(): Internal.Map<Internal.Player, Vec3d>;
        get damageSource(): DamageSource
        get position(): Vec3d
        get indirectSourceEntity(): Internal.LivingEntity
        get exploder(): Internal.Entity
        get directSourceEntity(): Internal.Entity
        get toBlow(): Internal.List<BlockPos>
        get hitPlayers(): Internal.Map<Internal.Player, Vec3d>
        readonly z: number;
        readonly blockInteraction: Internal.Explosion$BlockInteraction;
        radius: number;
        readonly level: Internal.Level;
        source: Internal.Entity;
        damageSource: DamageSource;
        readonly damageCalculator: Internal.ExplosionDamageCalculator;
        readonly x: number;
        readonly y: number;
    }
    type Explosion_ = Explosion;
    interface ItemForgeAccessor {
        abstract puzzleslib$setRenderProperties(arg0: any): void;
        abstract puzzleslib$getRenderProperties(): any;
    }
    type ItemForgeAccessor_ = ItemForgeAccessor;
    interface LongConsumer {
        andThen(arg0: Internal.LongConsumer_): this;
        abstract accept(arg0: number): void;
        (arg0: number): void;
    }
    type LongConsumer_ = LongConsumer;
    interface IActionHost {
        abstract getActionableNode(): Internal.IGridNode;
        get actionableNode(): Internal.IGridNode
        (): Internal.IGridNode_;
    }
    type IActionHost_ = IActionHost;
    abstract class Model {
        constructor(arg0: Internal.Function_<ResourceLocation, Internal.RenderType>)
        renderType(arg0: ResourceLocation_): Internal.RenderType;
        abstract renderToBuffer(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    }
    type Model_ = Model;
    class ClientboundContainerSetContentPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: number, arg2: Internal.NonNullList_<Internal.ItemStack>, arg3: Internal.ItemStack_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getStateId(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getCarriedItem(): Internal.ItemStack;
        getContainerId(): number;
        isSkippable(): boolean;
        getItems(): Internal.List<Internal.ItemStack>;
        get stateId(): number
        get carriedItem(): Internal.ItemStack
        get containerId(): number
        get skippable(): boolean
        get items(): Internal.List<Internal.ItemStack>
    }
    type ClientboundContainerSetContentPacket_ = ClientboundContainerSetContentPacket;
    class Class <T> implements Internal.Constable, Internal.Type, Internal.TypeDescriptor$OfField<typeof any>, Internal.Serializable, Internal.AnnotatedElement, Internal.GenericDeclaration {
        isPrimitive(): boolean;
        getTypeName(): string;
        isAnnotation(): boolean;
        getConstructors(): Internal.Constructor<any>[];
        isInstance(arg0: any): boolean;
        getModifiers(): number;
        static forName(arg0: Internal.Module_, arg1: string): typeof any;
        getDeclaredMethod(arg0: string, ...arg1: typeof any[]): Internal.Method;
        getEnumConstants(): T[];
        getAnnotation<A extends Internal.Annotation>(arg0: A): A;
        getAnnotatedSuperclass(): Internal.AnnotatedType;
        getRecordComponents(): any[];
        getDeclaredField(arg0: string): Internal.Field;
        getClassLoader(): Internal.ClassLoader;
        getPackageName(): string;
        static forName(arg0: string): typeof any;
        getAnnotatedInterfaces(): Internal.AnnotatedType[];
        getDeclaredFields(): Internal.Field[];
        asSubclass<U>(arg0: U): U;
        getResourceAsStream(arg0: string): Internal.InputStream;
        arrayType(): Internal.TypeDescriptor$OfField<any>;
        isLocalClass(): boolean;
        getDeclaredAnnotationsByType<A extends Internal.Annotation>(arg0: A): A[];
        getProtectionDomain(): Internal.ProtectionDomain;
        cast(arg0: any): T;
        getGenericSuperclass(): Internal.Type;
        isAnonymousClass(): boolean;
        getDeclaredConstructor(...arg0: typeof any[]): Internal.Constructor<T>;
        getMethods(): Internal.Method[];
        isNestmateOf(arg0: typeof any): boolean;
        isInterface(): boolean;
        getSuperclass(): this;
        getField(arg0: string): Internal.Field;
        getTypeParameters(): any[];
        getModule(): Internal.Module;
        toGenericString(): string;
        getFields(): Internal.Field[];
        isAssignableFrom(arg0: typeof any): boolean;
        getComponentType(): typeof any;
        componentType(): Internal.TypeDescriptor$OfField<any>;
        getGenericInterfaces(): Internal.Type[];
        getEnclosingMethod(): Internal.Method;
        getEnclosingConstructor(): Internal.Constructor<any>;
        getNestMembers(): typeof any[];
        descriptorString(): string;
        /**
         * @deprecated
        */
        newInstance(): T;
        isRecord(): boolean;
        isArray(): boolean;
        getName(): string;
        describeConstable(): Internal.Optional<Internal.ClassDesc>;
        isSealed(): boolean;
        getDeclaredAnnotations(): Internal.Annotation[];
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        isMemberClass(): boolean;
        getDeclaredConstructors(): Internal.Constructor<any>[];
        getCanonicalName(): string;
        getClasses(): typeof any[];
        isHidden(): boolean;
        isSynthetic(): boolean;
        getEnclosingClass(): typeof any;
        getInterfaces(): typeof any[];
        getSimpleName(): string;
        getMethod(arg0: string, ...arg1: typeof any[]): Internal.Method;
        getDeclaringClass(): typeof any;
        desiredAssertionStatus(): boolean;
        getSigners(): any[];
        static forName(arg0: string, arg1: boolean, arg2: Internal.ClassLoader_): typeof any;
        getPackage(): Internal.Package;
        getDeclaredMethods(): Internal.Method[];
        getConstructor(...arg0: typeof any[]): Internal.Constructor<T>;
        isEnum(): boolean;
        getPermittedSubclasses(): typeof any[];
        getAnnotations(): Internal.Annotation[];
        getNestHost(): typeof any;
        getDeclaredAnnotation<A extends Internal.Annotation>(arg0: A): A;
        getResource(arg0: string): Internal.URL;
        getDeclaredClasses(): typeof any[];
        getAnnotationsByType<A extends Internal.Annotation>(arg0: A): A[];
        get primitive(): boolean
        get typeName(): string
        get annotation(): boolean
        get constructors(): Internal.Constructor<any>[]
        get modifiers(): number
        get enumConstants(): T[]
        get annotatedSuperclass(): Internal.AnnotatedType
        get recordComponents(): any[]
        get classLoader(): Internal.ClassLoader
        get packageName(): string
        get annotatedInterfaces(): Internal.AnnotatedType[]
        get declaredFields(): Internal.Field[]
        get localClass(): boolean
        get protectionDomain(): Internal.ProtectionDomain
        get genericSuperclass(): Internal.Type
        get anonymousClass(): boolean
        get methods(): Internal.Method[]
        get "interface"(): boolean
        get superclass(): T
        get typeParameters(): any[]
        get module(): Internal.Module
        get fields(): Internal.Field[]
        get componentType(): typeof any
        get genericInterfaces(): Internal.Type[]
        get enclosingMethod(): Internal.Method
        get enclosingConstructor(): Internal.Constructor<any>
        get nestMembers(): typeof any[]
        get record(): boolean
        get array(): boolean
        get name(): string
        get sealed(): boolean
        get declaredAnnotations(): Internal.Annotation[]
        get memberClass(): boolean
        get declaredConstructors(): Internal.Constructor<any>[]
        get canonicalName(): string
        get classes(): typeof any[]
        get hidden(): boolean
        get synthetic(): boolean
        get enclosingClass(): typeof any
        get interfaces(): typeof any[]
        get simpleName(): string
        get declaringClass(): typeof any
        get signers(): any[]
        get "package"(): Internal.Package
        get declaredMethods(): Internal.Method[]
        get enum(): boolean
        get permittedSubclasses(): typeof any[]
        get annotations(): Internal.Annotation[]
        get nestHost(): typeof any
        get declaredClasses(): typeof any[]
    }
    type Class_<T> = Class<T>;
    class WideGaugeTrackBlock extends Internal.TrackBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_, material: Internal.TrackMaterial_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static getMaterialSimple(arg0: Internal.BlockGetter_, arg1: Vec3d_, arg2: Internal.TrackMaterial_): Internal.TrackMaterial;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isSlope(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getElevationAtCenter(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): number;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.TrackBlockEntity>): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.TrackBlockEntity>;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.TrackBlockEntity;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        static getMaterialSimple(arg0: Internal.BlockGetter_, arg1: Vec3d_): Internal.TrackMaterial;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        static walkConnectedTracks(arg0: Internal.BlockGetter_, arg1: Internal.TrackNodeLocation_, arg2: boolean): Internal.Collection<Internal.TrackNodeLocation$DiscoveredLocation>;
        getNearestTrackAxis(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Vec3d_): com.simibubi.create.foundation.utility.Pair<Vec3d, Internal.Direction$AxisDirection>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.TrackBlockEntity, InteractionResult>): InteractionResult;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        static addToListIfConnected(arg0: Internal.TrackNodeLocation_, arg1: Internal.Collection_<Internal.TrackNodeLocation$DiscoveredLocation>, arg2: Internal.BiFunction_<number, boolean, Vec3d>, arg3: Internal.Function_<boolean, Vec3d>, arg4: Internal.Function_<boolean, Internal.ResourceKey<Internal.Level>>, arg5: Internal.Function_<Vec3d, number>, arg6: Vec3d_, arg7: Internal.BezierConnection_, arg8: Internal.BiFunction_<boolean, Vec3d, Internal.TrackMaterial>): void;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type WideGaugeTrackBlock_ = WideGaugeTrackBlock;
    class ItemDrawers extends Internal.BlockItem {
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
    type ItemDrawers_ = ItemDrawers;
    interface AccessKeyMapping {
        abstract controlling$getKey(): Internal.InputConstants$Key;
        (): Internal.InputConstants$Key_;
    }
    type AccessKeyMapping_ = AccessKeyMapping;
    class HeightRangePlacement extends Internal.PlacementModifier {
        static uniform(arg0: Internal.VerticalAnchor_, arg1: Internal.VerticalAnchor_): Internal.HeightRangePlacement;
        static triangle(arg0: Internal.VerticalAnchor_, arg1: Internal.VerticalAnchor_): Internal.HeightRangePlacement;
        static of(arg0: Internal.HeightProvider_): Internal.HeightRangePlacement;
        static readonly CODEC: Internal.Codec<Internal.HeightRangePlacement>;
    }
    type HeightRangePlacement_ = HeightRangePlacement;
    class LootrVariantTrappedChestBlock extends Internal.VariantTrappedChestBlock implements Internal.IZetaBlockItemProvider {
        constructor(arg0: string, arg1: Internal.ZetaModule_, arg2: Internal.Supplier_<Internal.BlockEntityType<Internal.ChestBlockEntity>>, arg3: Internal.BlockBehaviour$Properties_)
        static isEnabled(arg0: Internal.Item_): boolean;
        canStickToZeta(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        isScaffoldingZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.ItemLike_, arg2: boolean): Internal.Block;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getBeaconColorMultiplierZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        setLightEmission(v: number): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getFireSpreadSpeedZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>): Internal.Block;
        getLightEmissionZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        isStickyBlockZeta(arg0: Internal.BlockState_): boolean;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundTypeZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        shouldDisplayFluidOverlayZeta(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        static isEnabled(arg0: Internal.Block_): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isLadderZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        provideItemBlock(arg0: Internal.Block_, arg1: Internal.Item$Properties_): Internal.BlockItem;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getBlock(): Internal.Block;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        isConduitFrameZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        isEnabled(): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getEnchantPowerBonusZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getTextureFolder(): string;
        makesOpenTrapdoorAboveClimbableZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        collisionExtendsVerticallyZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getToolModifiedStateZeta(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: string, arg3: boolean): Internal.BlockState;
        canSustainPlantZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: string): boolean;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set creativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>)
        set destroySpeed(v: number)
        get block(): Internal.Block
        get enabled(): boolean
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get textureFolder(): string
    }
    type LootrVariantTrappedChestBlock_ = LootrVariantTrappedChestBlock;
    class ServerboundCommandSuggestionPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: string)
        handle(arg0: Internal.PacketListener_): void;
        getCommand(): string;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        isSkippable(): boolean;
        getId(): number;
        get command(): string
        get skippable(): boolean
        get id(): number
    }
    type ServerboundCommandSuggestionPacket_ = ServerboundCommandSuggestionPacket;
    class StructureVoidBlock extends Internal.Block {
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
    type StructureVoidBlock_ = StructureVoidBlock;
    interface Shapes$DoubleLineConsumer {
        abstract consume(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    type Shapes$DoubleLineConsumer_ = Shapes$DoubleLineConsumer;
    interface LogEvent extends Internal.Serializable {
        abstract getMarker(): org.apache.logging.log4j.Marker;
        /**
         * @deprecated
        */
        abstract getContextMap(): Internal.Map<string, string>;
        abstract getThreadPriority(): number;
        abstract getContextData(): Internal.ReadOnlyStringMap;
        abstract getLoggerFqcn(): string;
        abstract getNanoTime(): number;
        abstract getTimeMillis(): number;
        abstract setEndOfBatch(endOfBatch: boolean): void;
        abstract getLevel(): org.apache.logging.log4j.Level;
        abstract isIncludeLocation(): boolean;
        abstract getLoggerName(): string;
        abstract toImmutable(): this;
        abstract getThrown(): Internal.Throwable;
        abstract getInstant(): org.apache.logging.log4j.core.time.Instant;
        abstract getMessage(): org.apache.logging.log4j.message.Message;
        abstract getThreadId(): number;
        abstract isEndOfBatch(): boolean;
        abstract getSource(): Internal.StackTraceElement;
        abstract setIncludeLocation(locationRequired: boolean): void;
        abstract getThrownProxy(): Internal.ThrowableProxy;
        abstract getContextStack(): Internal.ThreadContext$ContextStack;
        abstract getThreadName(): string;
        get marker(): org.apache.logging.log4j.Marker
        /**
         * @deprecated
        */
        get contextMap(): Internal.Map<string, string>
        get threadPriority(): number
        get contextData(): Internal.ReadOnlyStringMap
        get loggerFqcn(): string
        get nanoTime(): number
        get timeMillis(): number
        set endOfBatch(endOfBatch: boolean)
        get level(): org.apache.logging.log4j.Level
        get includeLocation(): boolean
        get loggerName(): string
        get thrown(): Internal.Throwable
        get instant(): org.apache.logging.log4j.core.time.Instant
        get message(): org.apache.logging.log4j.message.Message
        get threadId(): number
        get endOfBatch(): boolean
        get source(): Internal.StackTraceElement
        set includeLocation(locationRequired: boolean)
        get thrownProxy(): Internal.ThrowableProxy
        get contextStack(): Internal.ThreadContext$ContextStack
        get threadName(): string
    }
    type LogEvent_ = LogEvent;
    class KubeJSIngredientSerializer <T extends Internal.KubeJSIngredient> extends Internal.Record implements Internal.IIngredientSerializer<T> {
        constructor(fromJson: Internal.Function_<Internal.JsonObject, T>, fromNet: Internal.Function_<Internal.FriendlyByteBuf, T>)
        fromJson(): Internal.Function<Internal.JsonObject, T>;
        fromNet(): Internal.Function<Internal.FriendlyByteBuf, T>;
        parse(arg0: Internal.JsonObject_): Internal.Ingredient;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Ingredient_): void;
        parse(arg0: Internal.FriendlyByteBuf_): Internal.Ingredient;
        write(buf: Internal.FriendlyByteBuf_, ingredient: T): void;
    }
    type KubeJSIngredientSerializer_<T extends Internal.KubeJSIngredient> = KubeJSIngredientSerializer<T>;
    abstract class Team {
        constructor()
        abstract getDeathMessageVisibility(): Internal.Team$Visibility;
        abstract isAllowFriendlyFire(): boolean;
        abstract getFormattedName(arg0: net.minecraft.network.chat.Component_): Internal.MutableComponent;
        abstract getName(): string;
        isAlliedTo(arg0: Internal.Team_): boolean;
        abstract getColor(): Internal.ChatFormatting;
        abstract getNameTagVisibility(): Internal.Team$Visibility;
        abstract getCollisionRule(): Internal.Team$CollisionRule;
        abstract canSeeFriendlyInvisibles(): boolean;
        abstract getPlayers(): Internal.Collection<string>;
        get deathMessageVisibility(): Internal.Team$Visibility
        get allowFriendlyFire(): boolean
        get name(): string
        get color(): Internal.ChatFormatting
        get nameTagVisibility(): Internal.Team$Visibility
        get collisionRule(): Internal.Team$CollisionRule
        get players(): Internal.Collection<string>
    }
    type Team_ = Team;
    class NormalNoise {
        parameters(): Internal.NormalNoise$NoiseParameters;
        getValue(arg0: number, arg1: number, arg2: number): number;
        static create(arg0: Internal.RandomSource_, arg1: Internal.NormalNoise$NoiseParameters_): Internal.NormalNoise;
        maxValue(): number;
        /**
         * @deprecated
        */
        static createLegacyNetherBiome(arg0: Internal.RandomSource_, arg1: Internal.NormalNoise$NoiseParameters_): Internal.NormalNoise;
        static create(arg0: Internal.RandomSource_, arg1: number, ...arg2: number[]): Internal.NormalNoise;
        parityConfigString(arg0: Internal.StringBuilder_): void;
    }
    type NormalNoise_ = NormalNoise;
    class CommentedFileConfigBuilder extends Internal.GenericBuilder<Internal.CommentedConfig, Internal.CommentedFileConfig> {
    }
    type CommentedFileConfigBuilder_ = CommentedFileConfigBuilder;
    interface FormattedText$ContentConsumer <T> {
        abstract accept(arg0: string): Internal.Optional<T>;
        (arg0: string): Internal.Optional_<T>;
    }
    type FormattedText$ContentConsumer_<T> = FormattedText$ContentConsumer<T>;
    abstract class AbstractClientPlayer extends Internal.Player implements Internal.ClientPlayerKJS {
        constructor(arg0: Internal.ClientLevel_, arg1: Internal.GameProfile_)
        getDistance(pos: BlockPos_): number;
        isFake(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        getStats(): Internal.PlayerStatsJS;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        static getSkinLocation(arg0: string): ResourceLocation;
        isCapeLoaded(): boolean;
        addFood(f: number, m: number): void;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
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
        setSelectedSlot(index: number): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getTotalMovementSpeed(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isSkinLoaded(): boolean;
        paint(tag: Internal.CompoundTag_): void;
        getBlockReach(): number;
        damageHeldItem(): void;
        getDeltaMovementLerped(arg0: number): Vec3d;
        getDisplayName(): net.minecraft.network.chat.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        isElytraLoaded(): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        static registerSkinTexture(arg0: ResourceLocation_, arg1: string): void;
        getFoodLevel(): number;
        notify(title: net.minecraft.network.chat.Component_, text: net.minecraft.network.chat.Component_): void;
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
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        isMiningBlock(): boolean;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        getModelName(): string;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        isAmbientCreature(): boolean;
        getStepHeight(): number;
        notify(notification: Notification_): void;
        isMonster(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        handler$zbk000$ia$getFieldOfViewModifier(cir: Internal.CallbackInfoReturnable_<any>): void;
        getType(): string;
        self(): Internal.Entity;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getFieldOfViewModifier(): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        getName(): net.minecraft.network.chat.Component;
        boostElytraFlight(): void;
        addExhaustion(exhaustion: number): void;
        getPassengers(): Internal.EntityArrayList;
        giveInHand(item: Internal.ItemStack_): void;
        setMouseItem(item: Internal.ItemStack_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        addXP(xp: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        give(item: Internal.ItemStack_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        spawn(): void;
        getMainHandItem(): Internal.ItemStack;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        getCloakTextureLocation(): ResourceLocation;
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
        isSelf(): boolean;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        canReach(arg0: Vec3d_, arg1: number): boolean;
        sendInventoryUpdate(): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        getMouseItem(): Internal.ItemStack;
        setZ(z: number): void;
        getSkinTextureLocation(): ResourceLocation;
        getElytraTextureLocation(): ResourceLocation;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
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
        get offHandItem(): Internal.ItemStack
        get capeLoaded(): boolean
        get entityReach(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get xpLevel(): number
        set selectedSlot(index: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get skinLoaded(): boolean
        get blockReach(): number
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get elytraLoaded(): boolean
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
        get defaultMovementSpeed(): number
        get miningBlock(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        get modelName(): string
        get undead(): boolean
        get ambientCreature(): boolean
        get stepHeight(): number
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get fieldOfViewModifier(): number
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        set mouseItem(item: Internal.ItemStack_)
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get cloakTextureLocation(): ResourceLocation
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get self(): boolean
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get mouseItem(): Internal.ItemStack
        set z(z: number)
        get skinTextureLocation(): ResourceLocation
        get elytraTextureLocation(): ResourceLocation
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get profile(): Internal.GameProfile
        get saturation(): number
        set headArmorItem(item: Internal.ItemStack_)
        elytraRotX: number;
        elytraRotY: number;
        elytraRotZ: number;
        playerInfo: Internal.PlayerInfo;
        readonly clientLevel: Internal.ClientLevel;
    }
    type AbstractClientPlayer_ = AbstractClientPlayer;
    interface BuilderFactory {
        abstract createBuilder(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        (arg0: ResourceLocation): Internal.BuilderBase_<any>;
    }
    type BuilderFactory_ = BuilderFactory;
    class ItemUpgradeStorage extends Internal.ItemUpgrade {
        constructor(arg0: Internal.EnumUpgradeStorage_, arg1: Internal.Item$Properties_)
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
        readonly level: Internal.EnumUpgradeStorage;
    }
    type ItemUpgradeStorage_ = ItemUpgradeStorage;
    class WallCandleSkullBlock extends Internal.AbstractCandleSkullBlock implements Internal.IRecolorable {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        constructor(properties: Internal.BlockBehaviour$Properties_, particle: Internal.Supplier_<Internal.ParticleType<Internal.ParticleOptions>>)
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
        isDefaultColor(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_): boolean;
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
        extinguish(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): boolean;
        lightUp(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_, fireSourceType: Internal.ILightable$FireSourceType_): boolean;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        interactWithPlayer(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_): InteractionResult;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        tryRecolor(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, dyeColor: Internal.DyeColor_): boolean;
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
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        isLitUp(state: Internal.BlockState_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        playLightUpSound(world: Internal.LevelAccessor_, pos: BlockPos_, type: Internal.ILightable$FireSourceType_): void;
        interactWithProjectile(level: Internal.Level_, state: Internal.BlockState_, projectile: Internal.Projectile_, pos: BlockPos_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        toggleLitState(state: Internal.BlockState_, lit: boolean): Internal.BlockState;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly FACING: Internal.DirectionProperty;
    }
    type WallCandleSkullBlock_ = WallCandleSkullBlock;
    class AlternatorBlock extends Internal.DirectionalKineticBlock implements Internal.IRotate, Internal.IBE<Internal.AlternatorBlockEntity> {
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.AlternatorBlockEntity, InteractionResult>): InteractionResult;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        getBlockEntityClass(): typeof Internal.AlternatorBlockEntity;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.AlternatorBlockEntity>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.AlternatorBlockEntity>): void;
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
        getBlockEntityType(): Internal.BlockEntityType<Internal.AlternatorBlockEntity>;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.AlternatorBlockEntity;
        showCapacityWithAnnotation(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockEntityClass(): typeof Internal.AlternatorBlockEntity
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityType(): Internal.BlockEntityType<Internal.AlternatorBlockEntity>
        static readonly ALTERNATOR_SHAPE: Internal.VoxelShaper;
    }
    type AlternatorBlock_ = AlternatorBlock;
    class AttributeSlot extends Internal.Enum<Internal.AttributeSlot> {
        static fromCanonicalSlot(arg0: Internal.EquipmentSlot_): Internal.AttributeSlot;
        getCanonicalSlot(): Internal.EquipmentSlot;
        static values(): Internal.AttributeSlot[];
        getTranslationKey(): string;
        static valueOf(arg0: string): Internal.AttributeSlot;
        hasCanonicalSlot(): boolean;
        get canonicalSlot(): Internal.EquipmentSlot
        get translationKey(): string
        static readonly LEGS: Internal.AttributeSlot;
        static readonly MAINHAND: Internal.AttributeSlot;
        static readonly POTION: Internal.AttributeSlot;
        static readonly OFFHAND: Internal.AttributeSlot;
        static readonly CHEST: Internal.AttributeSlot;
        static readonly FEET: Internal.AttributeSlot;
        static readonly HEAD: Internal.AttributeSlot;
    }
    type AttributeSlot_ = "potion" | "feet" | AttributeSlot | "mainhand" | "offhand" | "head" | "legs" | "chest";
    class CylindricalParticleType extends Internal.ParticleType<Internal.CylindricalParticleOptions> {
        constructor()
        constructor(arg0: boolean)
        codec(): Internal.Codec<Internal.CylindricalParticleOptions>;
    }
    type CylindricalParticleType_ = CylindricalParticleType;
    /**
     * Invoked when a player opens a chest.
     * 
     * Same as `PlayerEvents.inventoryOpened`, but only for chests.
    */
    class ChestEventJS extends Internal.InventoryEventJS {
        constructor(player: Internal.Player_, menu: Internal.AbstractContainerMenu_)
        /**
         * Gets the chest inventory.
        */
        getInventory(): net.minecraft.world.Container;
        /**
         * Gets the player that opened or closed the container.
        */
        getEntity(): Internal.Entity;
        /**
         * Gets the chest block.
        */
        getBlock(): Internal.BlockContainerJS;
        /**
         * Gets the chest inventory.
        */
        get inventory(): net.minecraft.world.Container
        /**
         * Gets the player that opened or closed the container.
        */
        get entity(): Internal.Entity
        /**
         * Gets the chest block.
        */
        get block(): Internal.BlockContainerJS
    }
    type ChestEventJS_ = ChestEventJS;
    class ZoneOffsetTransition implements Internal.Comparable<Internal.ZoneOffsetTransition>, Internal.Serializable {
        getOffsetAfter(): Internal.ZoneOffset;
        isValidOffset(arg0: Internal.ZoneOffset_): boolean;
        compareTo(arg0: Internal.ZoneOffsetTransition_): number;
        isGap(): boolean;
        compareTo(arg0: any): number;
        static of(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneOffset_, arg2: Internal.ZoneOffset_): Internal.ZoneOffsetTransition;
        isOverlap(): boolean;
        getDateTimeAfter(): Internal.LocalDateTime;
        getOffsetBefore(): Internal.ZoneOffset;
        getDuration(): Duration;
        toEpochSecond(): number;
        getInstant(): Internal.Instant;
        getDateTimeBefore(): Internal.LocalDateTime;
        get offsetAfter(): Internal.ZoneOffset
        get gap(): boolean
        get overlap(): boolean
        get dateTimeAfter(): Internal.LocalDateTime
        get offsetBefore(): Internal.ZoneOffset
        get duration(): Duration
        get instant(): Internal.Instant
        get dateTimeBefore(): Internal.LocalDateTime
    }
    type ZoneOffsetTransition_ = ZoneOffsetTransition;
    class KineticBlockEntity extends Internal.SmartBlockEntity implements Internal.IHaveHoveringInformation, Internal.IHaveGoggleInformation {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        clearKineticInformation(): void;
        getOrCreateNetwork(): Internal.KineticNetwork;
        isSource(): boolean;
        static switchToBlockState(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        detachKinetics(): void;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        isSpeedRequirementFulfilled(): boolean;
        setSource(arg0: BlockPos_): void;
        setSpeed(arg0: number): void;
        calculateStressApplied(): number;
        getGeneratedSpeed(): number;
        isCustomConnection(arg0: Internal.KineticBlockEntity_, arg1: Internal.BlockState_, arg2: Internal.BlockState_): boolean;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        getFlickerScore(): number;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        calculateAddedStressCapacity(): number;
        needsSpeedUpdate(): boolean;
        hasSource(): boolean;
        static convertToAngular(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getTheoreticalSpeed(): number;
        propagateRotationTo(arg0: Internal.KineticBlockEntity_, arg1: Internal.BlockState_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: boolean, arg5: boolean): number;
        deserializeNBT(arg0: Internal.Tag_): void;
        isOverStressed(): boolean;
        hasNetwork(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        warnOfMovement(): void;
        getSpeed(): number;
        attachKinetics(): void;
        static convertToLinear(arg0: number): number;
        tickAudio(): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static convertToDirection(arg0: number, arg1: Internal.Direction_): number;
        removeSource(): void;
        getModelData(): Internal.ModelData;
        addToGoggleTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean): boolean;
        addPropagationLocations(arg0: Internal.IRotate_, arg1: Internal.BlockState_, arg2: Internal.List_<BlockPos>): Internal.List<BlockPos>;
        setNetwork(arg0: number): void;
        onSpeedChanged(arg0: number): void;
        addToTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean): boolean;
        getRotationAngleOffset(arg0: Internal.Direction$Axis_): number;
        get orCreateNetwork(): Internal.KineticNetwork
        get source(): boolean
        get speedRequirementFulfilled(): boolean
        set source(arg0: BlockPos_)
        set speed(arg0: number)
        get generatedSpeed(): number
        get flickerScore(): number
        get theoreticalSpeed(): number
        get overStressed(): boolean
        get speed(): number
        get modelData(): Internal.ModelData
        set network(arg0: number)
        networkDirty: boolean;
        preventSpeedUpdate: number;
        source: BlockPos;
        updateSpeed: boolean;
        sequenceContext: Internal.SequencedGearshiftBlockEntity$SequenceContext;
        network: number;
    }
    type KineticBlockEntity_ = KineticBlockEntity;
    interface SecureJar$ModuleDataProvider {
        abstract name(): string;
        abstract uri(): Internal.URI;
        abstract descriptor(): Internal.ModuleDescriptor;
        abstract verifyAndGetSigners(arg0: string, arg1: number[]): any[];
        abstract open(arg0: string): Internal.Optional<Internal.InputStream>;
        abstract findFile(arg0: string): Internal.Optional<Internal.URI>;
        abstract getManifest(): Internal.Manifest;
        get manifest(): Internal.Manifest
    }
    type SecureJar$ModuleDataProvider_ = SecureJar$ModuleDataProvider;
    class Giant extends Internal.Monster {
        constructor(arg0: Internal.EntityType_<Internal.Giant>, arg1: Internal.Level_)
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
    type Giant_ = Giant;
    class SimpleItemHandler implements Internal.IItemHandler {
        constructor(arg0: any_, arg1: Internal.List_<Internal.ItemStorageCoFH>)
        constructor(arg0: any_)
        constructor(arg0: Internal.List_<Internal.ItemStorageCoFH>)
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        getSlots(): number;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        kjs$self(): Internal.IItemHandler;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        isFull(): boolean;
        onInventoryChange(arg0: number): void;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get height(): number
        get full(): boolean
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type SimpleItemHandler_ = SimpleItemHandler;
    interface ConfigFormat <C extends Internal.Config> {
        abstract createConfig(arg0: Internal.Supplier_<Internal.Map<string, any>>): C;
        abstract supportsComments(): boolean;
        initEmptyFile(arg0: Internal.File_): void;
        createConcurrentConfig(): C;
        abstract createWriter(): Internal.ConfigWriter;
        initEmptyFile(arg0: Internal.Path_): void;
        createConfig(): C;
        isInMemory(): boolean;
        abstract createParser(): Internal.ConfigParser<C>;
        supportsType(arg0: typeof any): boolean;
        initEmptyFile(arg0: Internal.WriterSupplier_): void;
        get inMemory(): boolean
    }
    type ConfigFormat_<C extends Internal.Config> = ConfigFormat<C>;
    class FluidContainerList {
        constructor()
        constructor(categoryList: Internal.List_<Internal.FluidContainerList$Category>)
        getCategoryFromFilled(filledContainer: Internal.Item_): Internal.Optional<Internal.FluidContainerList$Category>;
        getCategoryFromEmpty(emptyContainer: Internal.Item_): Internal.Optional<Internal.FluidContainerList$Category>;
        getPossibleFilled(): Internal.Collection<Internal.Item>;
        getCategories(): Internal.Collection<Internal.FluidContainerList$Category>;
        getEmpty(filledContainer: Internal.Item_): Internal.Optional<Internal.Item>;
        getPossibleEmpty(): Internal.Collection<Internal.Item>;
        getFilled(emptyContainer: Internal.Item_): Internal.Optional<Internal.Item>;
        get possibleFilled(): Internal.Collection<Internal.Item>
        get categories(): Internal.Collection<Internal.FluidContainerList$Category>
        get possibleEmpty(): Internal.Collection<Internal.Item>
    }
    type FluidContainerList_ = FluidContainerList;
    interface AccessorSignBlockEntity {
        abstract bookshelf$markUpdated(): void;
        (): void;
    }
    type AccessorSignBlockEntity_ = AccessorSignBlockEntity;
    interface Transparency {
        abstract getTransparency(): number;
        get transparency(): number
        (): number;
        readonly TRANSLUCENT: 3;
        readonly OPAQUE: 1;
        readonly BITMASK: 2;
    }
    type Transparency_ = Transparency;
    class ConfigBase$ConfigBool extends Internal.ConfigBase$CValue<boolean, Internal.ForgeConfigSpec$BooleanValue> {
        constructor(arg0: Internal.ConfigBase_, arg1: string, arg2: boolean, ...arg3: string[])
    }
    type ConfigBase$ConfigBool_ = ConfigBase$ConfigBool;
    class WidgetType extends Internal.Enum<Internal.WidgetType> {
        static mouseOver(mouseOver: boolean): Internal.WidgetType;
        static values(): Internal.WidgetType[];
        static valueOf(name: string): Internal.WidgetType;
        static readonly MOUSE_OVER: Internal.WidgetType;
        static readonly DISABLED: Internal.WidgetType;
        static readonly NORMAL: Internal.WidgetType;
    }
    type WidgetType_ = "normal" | "mouse_over" | "disabled" | WidgetType;
    interface ObjLongConsumer <T> {
        abstract accept(arg0: T, arg1: number): void;
        (arg0: T, arg1: number): void;
    }
    type ObjLongConsumer_<T> = ObjLongConsumer<T>;
    class HornedStatueBlock extends Internal.HorizontalDirectionalBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
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
    type HornedStatueBlock_ = HornedStatueBlock;
    class SoulFurnaceBlock extends Internal.VariantFurnaceBlock {
        constructor(arg0: string, arg1: Internal.ZetaModule_, arg2: Internal.BlockBehaviour$Properties_)
        static isEnabled(arg0: Internal.Item_): boolean;
        canStickToZeta(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        isScaffoldingZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.ItemLike_, arg2: boolean): Internal.Block;
        getBeaconColorMultiplierZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        setLightEmission(v: number): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getFireSpreadSpeedZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>): Internal.Block;
        getLightEmissionZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        isStickyBlockZeta(arg0: Internal.BlockState_): boolean;
        getFlammabilityZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundTypeZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        shouldDisplayFluidOverlayZeta(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        static isEnabled(arg0: Internal.Block_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isLadderZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getBlock(): Internal.Block;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        isConduitFrameZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        setCondition(arg0: Internal.BooleanSupplier_): any;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        isEnabled(): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getEnchantPowerBonusZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        makesOpenTrapdoorAboveClimbableZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        collisionExtendsVerticallyZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isFlammableZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getToolModifiedStateZeta(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: string, arg3: boolean): Internal.BlockState;
        canSustainPlantZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: string): boolean;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set creativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>)
        set destroySpeed(v: number)
        get block(): Internal.Block
        set condition(arg0: Internal.BooleanSupplier_)
        get enabled(): boolean
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SOUL: Internal.BooleanProperty;
    }
    type SoulFurnaceBlock_ = SoulFurnaceBlock;
    class CharStream {
        constructor(c: string[])
        peek(): string;
        nextIf(match: string): boolean;
        next(): string;
        peek(ahead: number): string;
        position: number;
        skipWhitespace: boolean;
        readonly chars: string[];
    }
    type CharStream_ = CharStream;
    class ItemStack extends Internal.CapabilityProvider<Internal.ItemStack> implements Internal.ItemStackKJS, Internal.ItemFiltersStack, Internal.PseudoAccessorItemStack, Internal.IForgeItemStack {
        constructor(arg0: Internal.Holder_<Internal.Item>)
        constructor(arg0: Internal.Holder_<Internal.Item>, arg1: number)
        constructor(arg0: Internal.ItemLike_)
        constructor(arg0: Internal.ItemLike_, arg1: number, arg2: Internal.CompoundTag_)
        constructor(arg0: Internal.ItemLike_, arg1: number)
        getTags(): Internal.Collection<ResourceLocation>;
        getDrinkingSound(): Internal.SoundEvent;
        self(): this;
        createDataIF(item: Internal.Item_): any;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getHoverName(): net.minecraft.network.chat.Component;
        onStopUsing(arg0: Internal.LivingEntity_, arg1: number): void;
        enchant(enchantment: Internal.Enchantment_, level: number): this;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_): boolean;
        getBaseRepairCost(): number;
        isItemEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        elytraFlightTick(arg0: Internal.LivingEntity_, arg1: number): boolean;
        getFrame(): Internal.ItemFrame;
        getEnchantments(): Internal.Map<string, number>;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        static appendEnchantmentNames(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ListTag_): void;
        enchant(enchantments: Internal.Map_<any, any>): this;
        static matches(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        hasAdventureModeBreakTagForBlock(arg0: Internal.Registry_<Internal.Block>, arg1: Internal.BlockInWorld_): boolean;
        getPopTime(): number;
        makesPiglinsNeutral(arg0: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.LivingEntity_, arg1: Internal.Player_): void;
        getRarity(): Internal.Rarity;
        getDescriptionId(): string;
        areShareTagsEqual(arg0: Internal.ItemStack_): boolean;
        finishUsingItem(arg0: Internal.Level_, arg1: Internal.LivingEntity_): this;
        canWalkOnPowderedSnow(arg0: Internal.LivingEntity_): boolean;
        getHighlightTip(arg0: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        getAllEnchantments(): Internal.Map<Internal.Enchantment, number>;
        canPerformAction(arg0: Internal.ToolAction_): boolean;
        getTypeData(): Internal.CompoundTag;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_, arg2: Internal.EquipmentSlot_): void;
        is(arg0: Internal.Predicate_<Internal.Holder<Internal.Item>>): boolean;
        hasAdventureModePlaceTagForBlock(arg0: Internal.Registry_<Internal.Block>, arg1: Internal.BlockInWorld_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        getItemFiltersData(): any;
        removeTag(): void;
        isNotReplaceableByPickAction(arg0: Internal.Player_, arg1: number): boolean;
        canEquip(arg0: Internal.EquipmentSlot_, arg1: Internal.Entity_): boolean;
        getItem(): Internal.Item;
        is(arg0: Internal.TagKey_<Internal.Item>): boolean;
        inventoryTick(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: number, arg3: boolean): void;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getOrCreateTagElement(arg0: string): Internal.CompoundTag;
        hideTooltipPart(arg0: Internal.ItemStack$TooltipPart_): void;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMaxDamage(): number;
        getHarvestSpeed(): number;
        grow(arg0: number): void;
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        getDisplayName(): net.minecraft.network.chat.Component;
        getCount(): number;
        onItemUseFirst(arg0: Internal.UseOnContext_): InteractionResult;
        hasCustomHoverName(): boolean;
        onArmorTick(arg0: Internal.Level_, arg1: Internal.Player_): void;
        toJson(): Internal.JsonObject;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        isBarVisible(): boolean;
        static isSameItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        doesSneakBypassUse(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        removeTagKey(arg0: string): void;
        getEnchantmentLevel(arg0: Internal.Enchantment_): number;
        getShareTag(): Internal.CompoundTag;
        onCraftedBy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: number): void;
        hasEnchantment(enchantment: Internal.Enchantment_, level: number): boolean;
        isEdible(): boolean;
        isFramed(): boolean;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getEquipmentSlot(): Internal.EquipmentSlot;
        enchantStack(arg0: Internal.Enchantment_, arg1: number): void;
        getBurnTime(arg0: Internal.RecipeType_<any>): number;
        onEntityItemUpdate(arg0: Internal.ItemEntity_): boolean;
        getEnchantmentValue(): number;
        isRepairable(): boolean;
        getId(): Special.Item&`${string}:${string}`;
        setCount(arg0: number): void;
        getSweepHitBox(arg0: Internal.Player_, arg1: Internal.Entity_): Internal.AABB;
        is(arg0: Internal.Item_): boolean;
        setDamageValue(arg0: number): void;
        equalsIgnoringCount(stack: Internal.ItemStack_): boolean;
        getOrCreateTag(): Internal.CompoundTag;
        copyWithCount(arg0: number): this;
        getTagElement(arg0: string): Internal.CompoundTag;
        onBlockStartBreak(arg0: BlockPos_, arg1: Internal.Player_): boolean;
        withCount(c: number): this;
        toNBT(): Internal.Tag;
        setHoverName(arg0: net.minecraft.network.chat.Component_): this;
        getTags(): Internal.Stream<Internal.TagKey<Internal.Item>>;
        setEntityRepresentation(arg0: Internal.Entity_): void;
        getBarWidth(): number;
        hasFoil(): boolean;
        getItemHolder(): Internal.Holder<Internal.Item>;
        split(arg0: number): this;
        setPopTime(arg0: number): void;
        strongNBT(): Internal.Ingredient;
        save(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        isBlock(): boolean;
        getTooltipImage(): Internal.Optional<Internal.TooltipComponent>;
        isEnderMask(arg0: Internal.Player_, arg1: Internal.EnderMan_): boolean;
        getHarvestSpeed(block: Internal.BlockContainerJS_): number;
        shrink(arg0: number): void;
        copyAndClear(): this;
        weakNBT(): Internal.Ingredient;
        withName(displayName: net.minecraft.network.chat.Component_): this;
        getCraftingRemainingItem(): this;
        isPiglinCurrency(): boolean;
        getFoodProperties(arg0: Internal.LivingEntity_): Internal.FoodProperties;
        is(arg0: Internal.Holder_<Internal.Item>): boolean;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_, arg4: Internal.SlotAccess_): boolean;
        getXpRepairRatio(): number;
        withLore(text: net.minecraft.network.chat.Component_[]): this;
        getNbt(): Internal.CompoundTag;
        getInventoryFilterData(): Internal.ItemInventory;
        isDamageableItem(): boolean;
        getTooltipLines(arg0: Internal.Player_, arg1: Internal.TooltipFlag_): Internal.List<net.minecraft.network.chat.Component>;
        isEnchantable(): boolean;
        getMaxStackSize(): number;
        specialEquals(o: any, shallow: boolean): boolean;
        hasTag(tag: ResourceLocation_): boolean;
        getNbtString(): string;
        hurtAndBreak<T extends Internal.LivingEntity>(arg0: number, arg1: T, arg2: Internal.Consumer_<T>): void;
        getDestroySpeed(arg0: Internal.BlockState_): number;
        copy(): this;
        hasNBT(): boolean;
        isStackable(): boolean;
        equals(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        quark$getCapturedAttributes(): Internal.Map<any, any>;
        static of(arg0: Internal.CompoundTag_): Internal.ItemStack;
        getEatingSound(): Internal.SoundEvent;
        overrideStackedOnOther(arg0: Internal.Slot_, arg1: Internal.ClickAction_, arg2: Internal.Player_): boolean;
        isBookEnchantable(arg0: Internal.ItemStack_): boolean;
        getEntityLifespan(arg0: Internal.Level_): number;
        getEntityRepresentation(): Internal.Entity;
        static isSameItemSameTags(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        isEmpty(): boolean;
        setNbt(arg0: Internal.CompoundTag_): void;
        resetHoverName(): void;
        setRepairCost(arg0: number): void;
        withChance(chance: number): OutputItem;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: number): void;
        getUseDuration(): number;
        serializeNBT(): Internal.Tag;
        hurt(arg0: number, arg1: Internal.RandomSource_, arg2: Internal.ServerPlayer_): boolean;
        areItemsEqual(other: Internal.ItemStack_): boolean;
        getIdLocation(): ResourceLocation;
        isDamaged(): boolean;
        getMod(): string;
        mineBlock(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Player_): void;
        canGrindstoneRepair(): boolean;
        getDamageValue(): number;
        getEnchantmentTags(): Internal.ListTag;
        getUseAnimation(): Internal.UseAnim;
        deserializeNBT(arg0: Internal.Tag_): void;
        getStringValueFilterData(): Internal.StringValueData<any>;
        quark$capturePotionAttributes(arg0: Internal.List_<any>): void;
        toItemString(): string;
        withNBT(nbt: Internal.CompoundTag_): this;
        interactLivingEntity(arg0: Internal.Player_, arg1: Internal.LivingEntity_, arg2: Internal.InteractionHand_): InteractionResult;
        readShareTag(arg0: Internal.CompoundTag_): void;
        useOnRelease(): boolean;
        addTagElement(arg0: string, arg1: Internal.Tag_): void;
        isNBTEqual(other: Internal.ItemStack_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        onDroppedByPlayer(arg0: Internal.Player_): boolean;
        /**
         * @deprecated
        */
        ignoreNBT(): Internal.Ingredient;
        releaseUsing(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: number): void;
        canApplyAtEnchantingTable(arg0: Internal.Enchantment_): boolean;
        getBarColor(): number;
        onEntitySwing(arg0: Internal.LivingEntity_): boolean;
        onHorseArmorTick(arg0: Internal.Level_, arg1: Internal.Mob_): void;
        canElytraFly(arg0: Internal.LivingEntity_): boolean;
        isEnchanted(): boolean;
        get tags(): Internal.Collection<ResourceLocation>
        get drinkingSound(): Internal.SoundEvent
        get hoverName(): net.minecraft.network.chat.Component
        get baseRepairCost(): number
        get frame(): Internal.ItemFrame
        get enchantments(): Internal.Map<string, number>
        get popTime(): number
        get rarity(): Internal.Rarity
        get descriptionId(): string
        get allEnchantments(): Internal.Map<Internal.Enchantment, number>
        get typeData(): Internal.CompoundTag
        get itemFiltersData(): any
        get item(): Internal.Item
        get maxDamage(): number
        get harvestSpeed(): number
        get displayName(): net.minecraft.network.chat.Component
        get count(): number
        get barVisible(): boolean
        get shareTag(): Internal.CompoundTag
        get edible(): boolean
        get framed(): boolean
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        get repairable(): boolean
        get id(): Special.Item&`${string}:${string}`
        set count(arg0: number)
        set damageValue(arg0: number)
        get orCreateTag(): Internal.CompoundTag
        set hoverName(arg0: net.minecraft.network.chat.Component_)
        get tags(): Internal.Stream<Internal.TagKey<Internal.Item>>
        set entityRepresentation(arg0: Internal.Entity_)
        get barWidth(): number
        get itemHolder(): Internal.Holder<Internal.Item>
        set popTime(arg0: number)
        get block(): boolean
        get tooltipImage(): Internal.Optional<Internal.TooltipComponent>
        get craftingRemainingItem(): Internal.ItemStack
        get piglinCurrency(): boolean
        get xpRepairRatio(): number
        get nbt(): Internal.CompoundTag
        get inventoryFilterData(): Internal.ItemInventory
        get damageableItem(): boolean
        get enchantable(): boolean
        get maxStackSize(): number
        get nbtString(): string
        get stackable(): boolean
        get eatingSound(): Internal.SoundEvent
        get entityRepresentation(): Internal.Entity
        get empty(): boolean
        set nbt(arg0: Internal.CompoundTag_)
        set repairCost(arg0: number)
        get useDuration(): number
        get idLocation(): ResourceLocation
        get damaged(): boolean
        get mod(): string
        get damageValue(): number
        get enchantmentTags(): Internal.ListTag
        get useAnimation(): Internal.UseAnim
        get stringValueFilterData(): Internal.StringValueData<any>
        get barColor(): number
        get enchanted(): boolean
        static readonly TAG_DISPLAY_NAME: "Name";
        static readonly TAG_LORE: "Lore";
        static readonly TAG_ENCH: "Enchantments";
        static readonly ATTRIBUTE_MODIFIER_FORMAT: Internal.DecimalFormat;
        static readonly TAG_DAMAGE: "Damage";
        static readonly CODEC: Internal.Codec<Internal.ItemStack>;
        static readonly TAG_DISPLAY: "display";
        static readonly TAG_COLOR: "color";
        static readonly EMPTY: Internal.ItemStack;
    }
    type ItemStack_ = RegExp | Internal.Item_ | {count?: number, nbt?: Internal.CompoundTag_, item: Internal.Item_} | ItemStack | {count?: number, nbt?: Internal.CompoundTag_, maxRolls?: number, item: Internal.Item_, minRolls?: number, chance?: number};
    class CopycatCatwalkItem extends Internal.BlockItem {
        constructor(builder: Internal.Item$Properties_)
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
    type CopycatCatwalkItem_ = CopycatCatwalkItem;
    class CopperPipeBlock extends Internal.BasePipeBlock implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.ZetaModule_)
        static isEnabled(arg0: Internal.Item_): boolean;
        canStickToZeta(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        isScaffoldingZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.ItemLike_, arg2: boolean): Internal.Block;
        getBeaconColorMultiplierZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        setLightEmission(v: number): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getFireSpreadSpeedZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>): Internal.Block;
        getLightEmissionZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        isStickyBlockZeta(arg0: Internal.BlockState_): boolean;
        getFlammabilityZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundTypeZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        shouldDisplayFluidOverlayZeta(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        static isEnabled(arg0: Internal.Block_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        isLadderZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getBlock(): Internal.Block;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        isConduitFrameZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        setCondition(arg0: Internal.BooleanSupplier_): any;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        isEnabled(): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getEnchantPowerBonusZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        makesOpenTrapdoorAboveClimbableZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        collisionExtendsVerticallyZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isFlammableZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getToolModifiedStateZeta(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: string, arg3: boolean): Internal.BlockState;
        canSustainPlantZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: string): boolean;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set creativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>)
        set destroySpeed(v: number)
        get block(): Internal.Block
        set condition(arg0: Internal.BooleanSupplier_)
        get enabled(): boolean
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type CopperPipeBlock_ = CopperPipeBlock;
    interface TypeAdapterFactory {
        abstract create<T>(arg0: Internal.Gson_, arg1: com.google.gson.reflect.TypeToken_<T>): Internal.TypeAdapter<T>;
        (arg0: Internal.Gson, arg1: com.google.gson.reflect.TypeToken<T>): Internal.TypeAdapter_<T>;
    }
    type TypeAdapterFactory_ = TypeAdapterFactory;
    class VerticalAnchor$AboveBottom extends Internal.Record implements Internal.VerticalAnchor {
        constructor(arg0: number)
        static aboveBottom(arg0: number): Internal.VerticalAnchor;
        static absolute(arg0: number): Internal.VerticalAnchor;
        static belowTop(arg0: number): Internal.VerticalAnchor;
        static bottom(): Internal.VerticalAnchor;
        static top(): Internal.VerticalAnchor;
        resolveY(arg0: Internal.WorldGenerationContext_): number;
        offset(): number;
        static readonly CODEC: Internal.Codec<Internal.VerticalAnchor$AboveBottom>;
    }
    type VerticalAnchor$AboveBottom_ = VerticalAnchor$AboveBottom;
    class EndCityStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly CODEC: Internal.Codec<Internal.EndCityStructure>;
    }
    type EndCityStructure_ = EndCityStructure;
    class BioLabRecipe$Serializer implements Internal.RecipeSerializer<Internal.BioLabRecipe> {
        constructor()
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.BioLabRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.BioLabRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.BioLabRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BioLabRecipe_): void;
    }
    type BioLabRecipe$Serializer_ = BioLabRecipe$Serializer;
    class VirtualRenderWorld extends Internal.Level implements Internal.FlywheelWorld {
        constructor(arg0: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: Vec3i_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: Vec3i_)
        supportsFlywheel(): boolean;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        dayTime(): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        playSound(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_): void;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
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
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        getDisplayName(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getDirectSignalTo(arg0: BlockPos_): number;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: number, arg2: number, arg3: number): Internal.Player;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number): void;
        addFreshEntity(arg0: Internal.Entity_): boolean;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        clear(): void;
        setBlockEntities(arg0: Internal.Collection_<Internal.BlockEntity>): void;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number, arg3: Internal.TickPriority_): void;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Internal.Player;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Internal.Player;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        getPartEntities(): Internal.Collection<Internal.PartEntity<any>>;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getDimension(): ResourceLocation;
        getDifficulty(): Internal.Difficulty;
        getName(): net.minecraft.network.chat.Component;
        canSeeSky(arg0: BlockPos_): boolean;
        static nextMultipleOf16(arg0: number): number;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        getPlayerByUUID(arg0: Internal.UUID_): Internal.Player;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Internal.Player>;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        self(): Internal.Level;
        getBestNeighborSignal(arg0: BlockPos_): number;
        hasChunk(arg0: number, arg1: number): boolean;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        getChunkAtImmediately(arg0: number, arg1: number): Internal.LevelChunk;
        getMoonBrightness(): number;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        getSide(): Internal.ScriptType;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        actuallyGetChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        runLightEngine(): void;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        getAnyChunkImmediately(arg0: number, arg1: number): Internal.ChunkAccess;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: BlockPos_): void;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        getMaxLightLevel(): number;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        isOverworld(): boolean;
        runCommand(command: string): number;
        getBlockState(arg0: number, arg1: number, arg2: number): Internal.BlockState;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get displayName(): net.minecraft.network.chat.Component
        set blockEntities(arg0: Internal.Collection_<Internal.BlockEntity>)
        get partEntities(): Internal.Collection<Internal.PartEntity<any>>
        get dimension(): ResourceLocation
        get difficulty(): Internal.Difficulty
        get name(): net.minecraft.network.chat.Component
        get moonPhase(): number
        get moonBrightness(): number
        get side(): Internal.ScriptType
        get modelDataManager(): Internal.ModelDataManager
        get entities(): Internal.EntityArrayList
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get players(): Internal.EntityArrayList
        get maxLightLevel(): number
        get overworld(): boolean
    }
    type VirtualRenderWorld_ = VirtualRenderWorld;
    interface LightListener {
        abstract getVolume(): Internal.ImmutableBox;
        onLightPacket(arg0: number, arg1: number): void;
        abstract onLightUpdate(arg0: Internal.LightLayer_, arg1: Internal.ImmutableBox_): void;
        abstract isListenerInvalid(): boolean;
        get volume(): Internal.ImmutableBox
        get listenerInvalid(): boolean
    }
    type LightListener_ = LightListener;
    abstract class SingleItemRecipe implements Internal.Recipe<net.minecraft.world.Container> {
        constructor(arg0: Internal.RecipeType_<any>, arg1: Internal.RecipeSerializer_<any>, arg2: ResourceLocation_, arg3: string, arg4: Internal.Ingredient_, arg5: Internal.ItemStack_)
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        abstract matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type SingleItemRecipe_ = SingleItemRecipe;
    class TugDockBlock extends Internal.AbstractDockBlock {
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
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
    type TugDockBlock_ = TugDockBlock;
    abstract class AbstractCraftingUnitBlock <T> extends Internal.AEBaseEntityBlock<T> {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.ICraftingUnitType_)
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
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
        readonly type: Internal.ICraftingUnitType;
        static readonly FORMED: Internal.BooleanProperty;
        static readonly POWERED: Internal.BooleanProperty;
    }
    type AbstractCraftingUnitBlock_<T> = AbstractCraftingUnitBlock<T>;
    abstract class PointFree <T> {
        constructor()
        abstract "eval"(): Internal.Function<Internal.DynamicOps<any>, T>;
        static indent(arg0: number): string;
        abstract type(): com.mojang.datafixers.types.Type<T>;
        evalCached(): Internal.Function<Internal.DynamicOps<any>, T>;
        abstract toString(arg0: number): string;
    }
    type PointFree_<T> = PointFree<T>;
    interface FileNameMap {
        abstract getContentTypeFor(arg0: string): string;
        (arg0: string): string;
    }
    type FileNameMap_ = FileNameMap;
    abstract class BaseQuestFile extends Internal.QuestObject implements Internal.QuestFile {
        constructor()
        isLoading(): boolean;
        getRewardType(typeId: number): Internal.RewardType;
        forAllQuests(consumer: Internal.Consumer_<Internal.Quest>): void;
        writeDataFull(folder: Internal.Path_): void;
        abstract getSide(): Internal.Env;
        create(id: number, type: Internal.QuestObjectType_, parent: number, extra: Internal.CompoundTag_): Internal.QuestObjectBase;
        getCraftingTasks(): Internal.List<Internal.Task>;
        getLootCrate(id: string): Internal.LootCrate;
        getQuest(id: number): Internal.Quest;
        readID(tag: Internal.Tag_): number;
        getDefaultQuestShape(): string;
        forAllChapterGroups(consumer: Internal.Consumer_<Internal.ChapterGroup>): void;
        getEmergencyItems(): Internal.List<Internal.ItemStack>;
        getDetectionDelay(): number;
        removeEmptyRewardTables(source: Internal.CommandSourceStack_): number;
        getProgressionMode(): Internal.ProgressionMode;
        getChapterGroup(id: number): Internal.ChapterGroup;
        updateLootCrates(): void;
        isDefaultPerTeamReward(): boolean;
        markDirty(): void;
        readDataFull(folder: Internal.Path_): void;
        getEmergencyItemsCooldown(): number;
        getDefaultChapterGroup(): Internal.DefaultChapterGroup;
        getReward(id: number): Internal.Reward;
        generateRewardTableName(basename: string): string;
        getBase(id: number): Internal.QuestObjectBase;
        readID(id: number): number;
        collect<T extends Internal.QuestObjectBase>(clazz: T): Internal.List<T>;
        getDefaultRewardAutoClaim(): Internal.RewardAutoClaim;
        refreshGui(): void;
        isDropLootCrates(): boolean;
        getOrCreateTeamData(team: dev.ftb.mods.ftbteams.api.Team_): Internal.TeamData;
        getAllObjects(): Internal.Collection<Internal.QuestObjectBase>;
        getOrCreateTeamData(teamId: Internal.UUID_): Internal.TeamData;
        canEdit(): boolean;
        newID(): number;
        getRewardTables(): Internal.List<Internal.RewardTable>;
        addData(data: Internal.TeamData_, override: boolean): void;
        getID(obj: any): number;
        forAllQuestLinks(consumer: Internal.Consumer_<Internal.QuestLink>): void;
        abstract deleteObject(arg0: number): void;
        getChapterOrThrow(id: number): Internal.Chapter;
        clearCachedProgress(): void;
        getFirstVisibleChapter(data: Internal.TeamData_): Internal.Chapter;
        getOrCreateTeamData(player: Internal.Entity_): Internal.TeamData;
        getTask(id: number): Internal.Task;
        getSubmitTasks(): Internal.List<Internal.Task>;
        abstract isPlayerOnTeam(arg0: Internal.Player_, arg1: Internal.TeamData_): boolean;
        remove(id: number): Internal.QuestObjectBase;
        getChapter(id: number): Internal.Chapter;
        isDefaultTeamConsumeItems(): boolean;
        get(id: number): Internal.QuestObject;
        forAllChapters(consumer: Internal.Consumer_<Internal.Chapter>): void;
        collect<T extends Internal.QuestObjectBase>(filter: Internal.Predicate_<Internal.QuestObjectBase>): Internal.List<T>;
        writeNetDataFull(buffer: Internal.FriendlyByteBuf_): void;
        getRewardTable(id: number): Internal.RewardTable;
        getTaskType(typeId: number): Internal.TaskType;
        isPauseGame(): boolean;
        isDisableGui(): boolean;
        getAllTeamData(): Internal.Collection<Internal.TeamData>;
        getAllTasks(): Internal.List<Internal.Task>;
        makeRandomLootCrate(entity: Internal.Entity_, random: Internal.RandomSource_): Internal.Optional<Internal.LootCrate>;
        removeRewardTable(rewardTable: Internal.RewardTable_): void;
        refreshIDMap(): void;
        getGridScale(): number;
        isServerSide(): boolean;
        isDefaultQuestDisableJEI(): boolean;
        addRewardTable(rewardTable: Internal.RewardTable_): void;
        getAllChapters(): Internal.List<Internal.Chapter>;
        getVisibleChapters(data: Internal.TeamData_): Internal.List<Internal.Chapter>;
        getLootCrateNoDrop(): Internal.EntityWeight;
        readNetDataFull(buffer: Internal.FriendlyByteBuf_): void;
        getFolder(): Internal.Path;
        getNullableTeamData(id: Internal.UUID_): Internal.TeamData;
        moveChapterGroup(id: number, movingUp: boolean): boolean;
        get loading(): boolean
        get side(): Internal.Env
        get craftingTasks(): Internal.List<Internal.Task>
        get defaultQuestShape(): string
        get emergencyItems(): Internal.List<Internal.ItemStack>
        get detectionDelay(): number
        get progressionMode(): Internal.ProgressionMode
        get defaultPerTeamReward(): boolean
        get emergencyItemsCooldown(): number
        get defaultChapterGroup(): Internal.DefaultChapterGroup
        get defaultRewardAutoClaim(): Internal.RewardAutoClaim
        get dropLootCrates(): boolean
        get allObjects(): Internal.Collection<Internal.QuestObjectBase>
        get rewardTables(): Internal.List<Internal.RewardTable>
        get submitTasks(): Internal.List<Internal.Task>
        get defaultTeamConsumeItems(): boolean
        get pauseGame(): boolean
        get disableGui(): boolean
        get allTeamData(): Internal.Collection<Internal.TeamData>
        get allTasks(): Internal.List<Internal.Task>
        get gridScale(): number
        get serverSide(): boolean
        get defaultQuestDisableJEI(): boolean
        get allChapters(): Internal.List<Internal.Chapter>
        get lootCrateNoDrop(): Internal.EntityWeight
        get folder(): Internal.Path
        static VERSION: 13;
    }
    type BaseQuestFile_ = BaseQuestFile;
    class StructureTemplatePool implements Internal.AccessorStructureTemplatePool {
        constructor(arg0: Internal.Holder_<Internal.StructureTemplatePool>, arg1: Internal.List_<Internal.Pair<Internal.StructurePoolElement, number>>)
        constructor(arg0: Internal.Holder_<Internal.StructureTemplatePool>, arg1: Internal.List_<Internal.Pair<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>, number>>, arg2: Internal.StructureTemplatePool$Projection_)
        bookshelf$setRawTemplates(arg0: Internal.List_<any>): void;
        getRandomTemplate(arg0: Internal.RandomSource_): Internal.StructurePoolElement;
        bookshelf$setTemplates(arg0: Internal.ObjectArrayList_<any>): void;
        getFallback(): Internal.Holder<Internal.StructureTemplatePool>;
        size(): number;
        getShuffledTemplates(arg0: Internal.RandomSource_): Internal.List<Internal.StructurePoolElement>;
        bookshelf$getRawTemplates(): Internal.List<any>;
        getMaxSize(arg0: Internal.StructureTemplateManager_): number;
        bookshelf$getTemplates(): Internal.ObjectArrayList<any>;
        get fallback(): Internal.Holder<Internal.StructureTemplatePool>
        static readonly DIRECT_CODEC: Internal.Codec<Internal.StructureTemplatePool>;
        rawTemplates: Internal.List<Internal.Pair<Internal.StructurePoolElement, number>>;
        templates: Internal.ObjectArrayList<Internal.StructurePoolElement>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.StructureTemplatePool>>;
    }
    type StructureTemplatePool_ = StructureTemplatePool | Special.TemplatePool;
    class RollingRecipe extends Internal.ProcessingRecipe<Internal.RecipeWrapper> implements Internal.IAssemblyRecipe {
        getDescriptionForAssembly(): net.minecraft.network.chat.Component;
        supportsAssembly(): boolean;
        getGroup(): string;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        addAssemblyFluidIngredients(arg0: Internal.List_<Internal.FluidIngredient>): void;
        matches(arg0: Internal.RecipeWrapper_, arg1: Internal.Level_): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: Internal.RecipeWrapper_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        addRequiredMachines(arg0: Internal.Set_<Internal.ItemLike>): void;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        static register(): void;
        addAssemblyIngredients(arg0: Internal.List_<Internal.Ingredient>): void;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getIngredient(): Internal.Ingredient;
        getJEISubCategory(): Internal.Supplier<Internal.Supplier<Internal.SequencedAssemblySubCategory>>;
        assemble(arg0: Internal.RecipeWrapper_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getResultItem(): Internal.ItemStack;
        getMod(): string;
        get descriptionForAssembly(): net.minecraft.network.chat.Component
        get group(): string
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get ingredient(): Internal.Ingredient
        get JEISubCategory(): Internal.Supplier<Internal.Supplier<Internal.SequencedAssemblySubCategory>>
        get resultItem(): Internal.ItemStack
        get mod(): string
    }
    type RollingRecipe_ = RollingRecipe;
    interface AccessibleText {
        abstract getBeforeIndex(arg0: number, arg1: number): string;
        abstract getSelectionStart(): number;
        abstract getSelectedText(): string;
        abstract getAtIndex(arg0: number, arg1: number): string;
        abstract getAfterIndex(arg0: number, arg1: number): string;
        abstract getSelectionEnd(): number;
        abstract getCharacterBounds(arg0: number): Internal.Rectangle;
        abstract getCaretPosition(): number;
        abstract getIndexAtPoint(arg0: Internal.Point_): number;
        abstract getCharCount(): number;
        abstract getCharacterAttribute(arg0: number): Internal.AttributeSet;
        get selectionStart(): number
        get selectedText(): string
        get selectionEnd(): number
        get caretPosition(): number
        get charCount(): number
        readonly CHARACTER: 1;
        readonly WORD: 2;
        readonly SENTENCE: 3;
    }
    type AccessibleText_ = AccessibleText;
    class SlotContext extends Internal.Record {
        constructor(identifier: string, entity: Internal.LivingEntity_, index: number, cosmetic: boolean, visible: boolean)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getIdentifier(): string;
        visible(): boolean;
        identifier(): string;
        entity(): Internal.LivingEntity;
        index(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getWearer(): Internal.LivingEntity;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getIndex(): number;
        cosmetic(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get identifier(): string
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get wearer(): Internal.LivingEntity
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get index(): number
    }
    type SlotContext_ = SlotContext;
    interface IFluidHandler {
        abstract getFluidInTank(arg0: number): Internal.FluidStack;
        abstract drain(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        abstract getTanks(): number;
        abstract isFluidValid(arg0: number, arg1: Internal.FluidStack_): boolean;
        abstract getTankCapacity(arg0: number): number;
        abstract fill(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): number;
        abstract drain(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        get tanks(): number
    }
    type IFluidHandler_ = IFluidHandler;
    class EntropyRecipe implements Internal.Recipe<net.minecraft.world.Container> {
        constructor(arg0: ResourceLocation_, arg1: Internal.EntropyMode_, arg2: Internal.Block_, arg3: Internal.List_<any>, arg4: Internal.Fluid_, arg5: Internal.List_<any>, arg6: Internal.Block_, arg7: Internal.List_<any>, arg8: boolean, arg9: Internal.Fluid_, arg10: Internal.List_<any>, arg11: boolean, arg12: Internal.List_<Internal.ItemStack>)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getOutputBlockState(arg0: Internal.BlockState_): Internal.BlockState;
        getId(): ResourceLocation;
        getMode(): Internal.EntropyMode;
        getOutputBlock(): Internal.Block;
        getDrops(): Internal.List<Internal.ItemStack>;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getOutputBlockKeep(): boolean;
        getMod(): string;
        getOutputFluid(): Internal.Fluid;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        getInputFluid(): Internal.Fluid;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        getInputBlock(): Internal.Block;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        matches(arg0: Internal.EntropyMode_, arg1: Internal.BlockState_, arg2: Internal.FluidState_): boolean;
        isIncomplete(): boolean;
        getOutputFluidState(arg0: Internal.FluidState_): Internal.FluidState;
        getOutputFluidKeep(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mode(): Internal.EntropyMode
        get outputBlock(): Internal.Block
        get drops(): Internal.List<Internal.ItemStack>
        get outputBlockKeep(): boolean
        get mod(): string
        get outputFluid(): Internal.Fluid
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get inputFluid(): Internal.Fluid
        get type(): ResourceLocation
        get inputBlock(): Internal.Block
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get outputFluidKeep(): boolean
        static readonly TYPE: Internal.RecipeType$2;
        static readonly TYPE_ID: ResourceLocation;
    }
    type EntropyRecipe_ = EntropyRecipe;
    interface ScriptTypePredicate extends Internal.Predicate<Internal.ScriptType> {
        getValidTypes(): Internal.List<Internal.ScriptType>;
        test(arg0: any): boolean;
        negate(): Internal.Predicate<Internal.ScriptType>;
        and(arg0: Internal.Predicate_<Internal.ScriptType>): Internal.Predicate<Internal.ScriptType>;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        abstract test(arg0: Internal.ScriptType_): boolean;
        or(arg0: Internal.Predicate_<Internal.ScriptType>): Internal.Predicate<Internal.ScriptType>;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        get validTypes(): Internal.List<Internal.ScriptType>
        (arg0: Internal.ScriptType): boolean;
        readonly COMMON: Internal.ScriptTypePredicate;
        readonly STARTUP_OR_CLIENT: Internal.ScriptTypePredicate;
        readonly STARTUP_OR_SERVER: Internal.ScriptTypePredicate;
        readonly ALL: Internal.ScriptTypePredicate;
    }
    type ScriptTypePredicate_ = ScriptTypePredicate;
    class AEDecorativeBlock extends Internal.AEBaseBlock {
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
        getOrientation(arg0: Internal.BlockState_): Internal.BlockOrientation;
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
    type AEDecorativeBlock_ = AEDecorativeBlock;
    class CustomMapDecoration {
        constructor(type: Internal.MapDecorationType_<any, any>, buffer: Internal.FriendlyByteBuf_)
        constructor(type: Internal.MapDecorationType_<any, any>, x: number, y: number, rot: number, displayName: net.minecraft.network.chat.Component_)
        getDisplayName(): net.minecraft.network.chat.Component;
        getX(): number;
        setDisplayName(displayName: net.minecraft.network.chat.Component_): void;
        getRot(): number;
        getType(): Internal.MapDecorationType<any, any>;
        setRot(rot: number): void;
        setX(x: number): void;
        saveToBuffer(buffer: Internal.FriendlyByteBuf_): void;
        setY(y: number): void;
        getY(): number;
        get displayName(): net.minecraft.network.chat.Component
        get x(): number
        set displayName(displayName: net.minecraft.network.chat.Component_)
        get rot(): number
        get type(): Internal.MapDecorationType<any, any>
        set rot(rot: number)
        set x(x: number)
        set y(y: number)
        get y(): number
    }
    type CustomMapDecoration_ = CustomMapDecoration;
    interface LevelTickAccess <T> extends Internal.TickAccess<T> {
        abstract count(): number;
        abstract schedule(arg0: Internal.ScheduledTick_<T>): void;
        abstract willTickThisTick(arg0: BlockPos_, arg1: T): boolean;
        abstract hasScheduledTick(arg0: BlockPos_, arg1: T): boolean;
    }
    type LevelTickAccess_<T> = LevelTickAccess<T>;
    class RenderStateShard$LightmapStateShard extends Internal.RenderStateShard$BooleanStateShard {
        constructor(arg0: boolean)
    }
    type RenderStateShard$LightmapStateShard_ = RenderStateShard$LightmapStateShard;
    class PointerBuffer extends Internal.CustomBuffer<Internal.PointerBuffer> implements Internal.Comparable<Internal.PointerBuffer> {
        put(arg0: number, arg1: number): this;
        put(arg0: Internal.DoubleBuffer_): this;
        put(arg0: Internal.LongBuffer_): this;
        getPointerBuffer(arg0: number): this;
        put(arg0: number[], arg1: number, arg2: number): this;
        getPointerBuffer(arg0: number, arg1: number): this;
        put(arg0: number, arg1: Internal.DoubleBuffer_): this;
        getByteBuffer(arg0: number, arg1: number): Internal.ByteBuffer;
        compareTo(arg0: any): number;
        getStringUTF8(): string;
        getShortBuffer(arg0: number, arg1: number): Internal.ShortBuffer;
        getShortBuffer(arg0: number): Internal.ShortBuffer;
        putAddressOf(arg0: number, arg1: Internal.CustomBuffer_<any>): this;
        static put(arg0: Internal.ByteBuffer_, arg1: number): void;
        static get(arg0: Internal.ByteBuffer_, arg1: number): number;
        put(arg0: number, arg1: Internal.FloatBuffer_): this;
        static get(arg0: Internal.ByteBuffer_): number;
        get(arg0: number[], arg1: number, arg2: number): this;
        put(arg0: number, arg1: Internal.LongBuffer_): this;
        getStringUTF16(): string;
        getStringASCII(arg0: number): string;
        compareTo(arg0: Internal.PointerBuffer_): number;
        put(arg0: Internal.FloatBuffer_): this;
        put(arg0: number[]): this;
        static allocateDirect(arg0: number): Internal.PointerBuffer;
        get(arg0: number): number;
        static create(arg0: number, arg1: number): Internal.PointerBuffer;
        put(arg0: number, arg1: Internal.ByteBuffer_): this;
        getStringUTF16(arg0: number): string;
        static create(arg0: Internal.ByteBuffer_): Internal.PointerBuffer;
        put(arg0: Internal.IntBuffer_): this;
        put(arg0: number, arg1: Internal.ShortBuffer_): this;
        get(arg0: number[]): this;
        put(arg0: number, arg1: Internal.Pointer_): this;
        put(arg0: Internal.ByteBuffer_): this;
        put(arg0: Internal.ShortBuffer_): this;
        put(arg0: Internal.Pointer_): this;
        put(arg0: number, arg1: Internal.IntBuffer_): this;
        getStringASCII(): string;
        get(): number;
        putAddressOf(arg0: Internal.CustomBuffer_<any>): this;
        getFloatBuffer(arg0: number): Internal.FloatBuffer;
        getStringUTF8(arg0: number): string;
        getIntBuffer(arg0: number): Internal.IntBuffer;
        put(arg0: number): this;
        static put(arg0: Internal.ByteBuffer_, arg1: number, arg2: number): void;
        getFloatBuffer(arg0: number, arg1: number): Internal.FloatBuffer;
        getLongBuffer(arg0: number): Internal.LongBuffer;
        getDoubleBuffer(arg0: number): Internal.DoubleBuffer;
        getDoubleBuffer(arg0: number, arg1: number): Internal.DoubleBuffer;
        getByteBuffer(arg0: number): Internal.ByteBuffer;
        getLongBuffer(arg0: number, arg1: number): Internal.LongBuffer;
        getIntBuffer(arg0: number, arg1: number): Internal.IntBuffer;
        get stringUTF8(): string
        get stringUTF16(): string
        get stringASCII(): string
    }
    type PointerBuffer_ = PointerBuffer;
    abstract class AbstractCriterionTriggerInstance implements Internal.CriterionTriggerInstance {
        constructor(arg0: ResourceLocation_, arg1: any_)
        serializeToJson(arg0: Internal.SerializationContext_): Internal.JsonObject;
        getCriterion(): ResourceLocation;
        get criterion(): ResourceLocation
    }
    type AbstractCriterionTriggerInstance_ = AbstractCriterionTriggerInstance;
    class GameEventListenerRenderer implements Internal.DebugRenderer$SimpleDebugRenderer {
        constructor(arg0: Internal.Minecraft_)
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        trackGameEvent(arg0: Internal.GameEvent_, arg1: Vec3d_): void;
        clear(): void;
        trackListener(arg0: Internal.PositionSource_, arg1: number): void;
    }
    type GameEventListenerRenderer_ = GameEventListenerRenderer;
    class DesertWellFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type DesertWellFeature_ = DesertWellFeature;
    class PistonMovingBlockEntity extends Internal.BlockEntity implements Internal.IExtendedPistonTile, Internal.IBlockHolder {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: boolean, arg5: boolean)
        getMovementDirection(): Internal.Direction;
        isSourcePiston(): boolean;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getHeldBlock(): Internal.BlockState;
        getMovedState(): Internal.BlockState;
        getLastTicked(): number;
        tickMovedBlock(level: Internal.Level_, pos: BlockPos_): void;
        getProgress(arg0: number): number;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getZOff(arg0: number): number;
        isExtending(): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        handler$bja000$onFinishedShortPulse(ci: Internal.CallbackInfo_): void;
        static tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.PistonMovingBlockEntity_): void;
        getXOff(arg0: number): number;
        deserializeNBT(arg0: Internal.Tag_): void;
        setHeldBlock(state: Internal.BlockState_): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        abstract getHeldBlock(arg0: number): Internal.BlockState;
        getCollisionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        getYOff(arg0: number): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        abstract setHeldBlock(arg0: Internal.BlockState_, arg1: number): boolean;
        getModelData(): Internal.ModelData;
        finalTick(): void;
        getDirection(): Internal.Direction;
        getRenderBoundingBox(): Internal.AABB;
        get movementDirection(): Internal.Direction
        get sourcePiston(): boolean
        get heldBlock(): Internal.BlockState
        get movedState(): Internal.BlockState
        get lastTicked(): number
        get extending(): boolean
        set heldBlock(state: Internal.BlockState_)
        get modelData(): Internal.ModelData
        get direction(): Internal.Direction
        get renderBoundingBox(): Internal.AABB
        static readonly TICK_MOVEMENT: 0.51;
    }
    type PistonMovingBlockEntity_ = PistonMovingBlockEntity;
    class BufferedReader extends Internal.Reader {
        constructor(arg0: Internal.Reader_, arg1: number)
        constructor(arg0: Internal.Reader_)
        readLine(): string;
        lines(): Internal.Stream<string>;
    }
    type BufferedReader_ = BufferedReader;
    class BookItem extends Internal.Item {
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
    type BookItem_ = BookItem;
    class GrapplehookEntity extends Internal.ThrowableItemProjectile implements Internal.IEntityAdditionalSpawnData {
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: boolean, arg3: Internal.GrappleCustomization_, arg4: boolean)
        constructor(arg0: Internal.EntityType_<Internal.GrapplehookEntity>, arg1: Internal.Level_)
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        check(arg0: Internal.Vec_, arg1: Internal.HashMap_<BlockPos, boolean>): BlockPos;
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
        getName(): net.minecraft.network.chat.Component;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        getVelocity(): number;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        isLiving(): boolean;
        setVelocityActually(arg0: number, arg1: number, arg2: number): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        getControlId(): number;
        removeServer(): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        getDisplayName(): net.minecraft.network.chat.Component;
        setMotionX(x: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        m_8097_(): void;
        attack(hp: number): void;
        readSpawnData(arg0: Internal.FriendlyByteBuf_): void;
        clientAttach(arg0: number, arg1: number, arg2: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getLevel(): Internal.Level;
        getFacing(): Internal.Direction;
        getScriptType(): Internal.ScriptType;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        shouldRiderSit(): boolean;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        writeSpawnData(arg0: Internal.FriendlyByteBuf_): void;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        isFrame(): boolean;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        serverAttach(arg0: BlockPos_, arg1: Internal.Vec_, arg2: Internal.Direction_): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        hasBlock(arg0: BlockPos_, arg1: Internal.HashMap_<BlockPos, boolean>): boolean;
        setAttachPos(arg0: number, arg1: number, arg2: number): void;
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
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        get velocity(): number
        set y(y: number)
        get living(): boolean
        get controlId(): number
        get server(): Internal.MinecraftServer
        get displayName(): net.minecraft.network.chat.Component
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
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
        magnetBlock: BlockPos;
        wasInAir: boolean;
        rightHand: boolean;
        r: number;
        customization: Internal.GrappleCustomization;
        isDouble: boolean;
        attached: boolean;
        attach_dir: Internal.Vec;
        taut: number;
        foundBlock: boolean;
        shootingEntityID: number;
        pull: number;
        ignoreFrustumCheck: boolean;
        shootingEntity: Internal.Entity;
        thisPos: Internal.Vec;
        segmentHandler: Internal.SegmentHandler;
        prevPos: Internal.Vec;
    }
    type GrapplehookEntity_ = GrapplehookEntity;
    class SimpleParticleType extends Internal.ParticleType<Internal.SimpleParticleType> implements Internal.ParticleOptions {
        constructor(arg0: boolean)
        writeToString(): string;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        getType(): this;
        codec(): Internal.Codec<Internal.SimpleParticleType>;
        get type(): Internal.SimpleParticleType
    }
    type SimpleParticleType_ = SimpleParticleType;
    class LatticeBlock extends Internal.TrapDoorBlock {
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
    type LatticeBlock_ = LatticeBlock;
    class UnderwaterMagmaFeature extends Internal.Feature<Internal.UnderwaterMagmaConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.UnderwaterMagmaConfiguration>)
    }
    type UnderwaterMagmaFeature_ = UnderwaterMagmaFeature;
    class AugmentItem extends Internal.ItemCoFH implements Internal.IAugmentItem {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.CompoundTag_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isActive(arg0: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        hasActiveTag(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAugmentData(arg0: Internal.CompoundTag_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getAugmentData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setActive(arg0: Internal.ItemStack_, arg1: boolean): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        addModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        setActive(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        addIncrementModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
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
        addEnergyTooltip(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_, arg4: number, arg5: number, arg6: boolean): void;
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
        set augmentData(arg0: Internal.CompoundTag_)
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type AugmentItem_ = AugmentItem;
    class DataGenerator$PackGenerator {
        addProvider<T extends Internal.DataProvider>(arg0: Internal.DataProvider$Factory_<T>): T;
    }
    type DataGenerator$PackGenerator_ = DataGenerator$PackGenerator;
    class TeamPropertyValue <T> {
        constructor(property: Internal.TeamProperty_<T>, value: T)
        constructor(k: Internal.TeamProperty_<T>)
        setValue(value: T): void;
        getValue(): T;
        getProperty(): Internal.TeamProperty<T>;
        copy(): this;
        set value(value: T)
        get value(): T
        get property(): Internal.TeamProperty<T>
    }
    type TeamPropertyValue_<T> = TeamPropertyValue<T>;
    class BogeyRenderer$BogeyModelData extends Internal.Record implements Internal.Transform<Internal.BogeyRenderer$BogeyModelData> {
        constructor(transform: Internal.Transform_<any>)
        translate(arg0: number, arg1: number, arg2: number): any;
        mulNormal(arg0: Matrix3f_): Internal.Transform<any>;
        translate(arg0: Vec3f_): this;
        static from(arg0: Internal.BlockState_): Internal.BogeyRenderer$BogeyModelData;
        translateAll(arg0: number): this;
        rotateCentered(arg0: Internal.Direction_, arg1: number): this;
        multiply(arg0: Internal.Axis_, arg1: number): this;
        translateY(arg0: number): this;
        translateZ(arg0: number): this;
        rotateZRadians(arg0: number): this;
        scale(arg0: number, arg1: number, arg2: number): any;
        translateX(arg0: number): this;
        "delete"(): this;
        mulPose(arg0: Matrix4f_): this;
        multiplyRadians(arg0: Internal.Axis_, arg1: number): this;
        translateBack(arg0: Vec3d_): this;
        rotateYRadians(arg0: number): this;
        multiply(arg0: Quaternionf_): this;
        translateBack(arg0: Vec3i_): this;
        updateLight(arg0: number, arg1: number): this;
        rotate(arg0: Internal.Direction_, arg1: number): this;
        transform(arg0: Internal.PoseStack_): this;
        scale(arg0: number): this;
        static from(arg0: Internal.PartialModel_): Internal.BogeyRenderer$BogeyModelData;
        setTransform(arg0: Internal.PoseStack_): this;
        multiplyRadians(arg0: Vec3f_, arg1: number): this;
        rotateCentered(arg0: Quaternionf_): this;
        setEmptyTransform(): this;
        nudge(arg0: number): this;
        transform(): Internal.Transform<any>;
        render(arg0: Internal.PoseStack_, arg1: number, arg2: Internal.VertexConsumer_): void;
        translate(arg0: Vec3i_): this;
        multiply(arg0: Vec3f_, arg1: number): this;
        rotateX(arg0: number): this;
        transform(arg0: Matrix4f_, arg1: Matrix3f_): this;
        rotateY(arg0: number): this;
        unCentre(): this;
        rotate(arg0: number, arg1: Internal.Direction$Axis_): this;
        translateBack(arg0: number, arg1: number, arg2: number): this;
        rotateZ(arg0: number): this;
        centre(): this;
        rotateXRadians(arg0: number): this;
        translate(arg0: Vec3d_): this;
        rotateToFace(arg0: Internal.Direction_): this;
        set transform(arg0: Internal.PoseStack_)
    }
    type BogeyRenderer$BogeyModelData_ = BogeyRenderer$BogeyModelData;
    interface NeutralMob {
        abstract getTarget(): Internal.LivingEntity;
        playerDied(arg0: Internal.Player_): void;
        abstract getPersistentAngerTarget(): Internal.UUID;
        isAngry(): boolean;
        abstract setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        readPersistentAngerSaveData(arg0: Internal.Level_, arg1: Internal.CompoundTag_): void;
        abstract startPersistentAngerTimer(): void;
        abstract canAttack(arg0: Internal.LivingEntity_): boolean;
        stopBeingAngry(): void;
        abstract setLastHurtByPlayer(arg0: Internal.Player_): void;
        abstract setTarget(arg0: Internal.LivingEntity_): void;
        addPersistentAngerSaveData(arg0: Internal.CompoundTag_): void;
        abstract setPersistentAngerTarget(arg0: Internal.UUID_): void;
        abstract setRemainingPersistentAngerTime(arg0: number): void;
        abstract getLastHurtByMob(): Internal.LivingEntity;
        updatePersistentAnger(arg0: Internal.ServerLevel_, arg1: boolean): void;
        isAngryAtAllPlayers(arg0: Internal.Level_): boolean;
        isAngryAt(arg0: Internal.LivingEntity_): boolean;
        abstract getRemainingPersistentAngerTime(): number;
        get target(): Internal.LivingEntity
        get persistentAngerTarget(): Internal.UUID
        get angry(): boolean
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set lastHurtByPlayer(arg0: Internal.Player_)
        set target(arg0: Internal.LivingEntity_)
        set persistentAngerTarget(arg0: Internal.UUID_)
        set remainingPersistentAngerTime(arg0: number)
        get lastHurtByMob(): Internal.LivingEntity
        get remainingPersistentAngerTime(): number
        readonly TAG_ANGER_TIME: "AngerTime";
        readonly TAG_ANGRY_AT: "AngryAt";
    }
    type NeutralMob_ = NeutralMob;
    interface IForgeDispensibleContainerItem {
        emptyContents(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockHitResult_, arg4: Internal.ItemStack_): boolean;
    }
    type IForgeDispensibleContainerItem_ = IForgeDispensibleContainerItem;
    class BlockstateCopyItem extends Internal.Item {
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
        static addProperties(arg0: Internal.Block_, ...arg1: Internal.Property_<any>[]): void;
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
        static allowedProperties: {[key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.WallBlock]: any, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.BarPanelBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.TLocBlocks$5]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ControllerRailBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.ZetaFlammablePillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.LinearChassisBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ObserverBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.AbyssalinePillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.AbyssalineLampBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.PaperWallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.HugeGlowShroomBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.LatticeBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ModStairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WrappedTrapdoorBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.PoweredRailBlock]: any, [key: Internal.StairBlock]: any, [key: architectspalette.content.blocks.PipeBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaFlammablePillarBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaPaneBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.PoweredRailBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.WrappedWallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.ComparatorBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: lilypuree.decorative_blocks.blocks.ChainBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RopeBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.WallBlock]: any, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: any, [key: Internal.GlassFluidPipeBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.HugeMushroomBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.CarpetStairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.HollowLogBlock]: any, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.ChainBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.ModStairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.HugeGlowShroomBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.HugeMushroomBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.TLocBlocks$4]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ChainBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.PoweredRailBlockCoFH]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RadialChassisBlock]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.AbyssalineLampBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.GoldTrapdoorBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.TCoreBlocks$2]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaFenceBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.TLocBlocks$1]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.MyalitePillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.DispenserBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaFlammablePillarBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.PaperWallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.DetectorRailBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.LinearChassisBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.WrappedStairsBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaFlammablePillarBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.TrainTrapdoorBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RedStoneWireBlock]: any, [key: Internal.HayBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.PulleyBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ModStairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.NetheriteTrapdoorBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RailBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.TCoreBlocks$1]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.FleshFenceBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.DetectorRailBlockCoFH]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaTrapdoorBlock]: any, [key: Internal.HollowLogBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.ZetaFenceBlock]: any, [key: Internal.DropperBlock]: any, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.RepeaterBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.HugeMushroomBlock]: any, [key: Internal.PaperWallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.WrappedFenceBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.HedgeBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ModStairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaTrapdoorBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaFenceBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.AbyssalinePillarBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StrippableLogBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.TLocBlocks$3]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FleshChainBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.TrainTrapdoorBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StrippableLogBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.GlassPaneBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StrawBaleBlock]: any, [key: Internal.WallBlock]: any, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaTrapdoorBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RailBlockCoFH]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.ZetaWallBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.ZetaPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaInheritedPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.PoweredRailBlockCoFH]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ZetaStairsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.WallBlock]: any};
    }
    type BlockstateCopyItem_ = BlockstateCopyItem;
    class EnergyAcceptorBlock extends Internal.AEBaseEntityBlock<any> {
        constructor()
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
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
    type EnergyAcceptorBlock_ = EnergyAcceptorBlock;
    class DragonLandingApproachPhase extends Internal.AbstractDragonPhaseInstance {
        constructor(arg0: Internal.EnderDragon_)
        getPhase(): Internal.EnderDragonPhase<Internal.DragonLandingApproachPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonLandingApproachPhase>
    }
    type DragonLandingApproachPhase_ = DragonLandingApproachPhase;
    interface Matrix3fc {
        abstract rotateLocalY(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract mapYnZX(arg0: Matrix3f_): Matrix3f;
        abstract m00(): number;
        abstract get3x4(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract rotate(arg0: Internal.Quaternionfc_, arg1: Matrix3f_): Matrix3f;
        abstract getEulerAnglesXYZ(arg0: Vec3f_): Vec3f;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapYXnZ(arg0: Matrix3f_): Matrix3f;
        abstract mapnYnXZ(arg0: Matrix3f_): Matrix3f;
        abstract mulLocal(arg0: Internal.Matrix3fc_, arg1: Matrix3f_): Matrix3f;
        abstract lookAlong(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Matrix3f_): Matrix3f;
        abstract mapYnXnZ(arg0: Matrix3f_): Matrix3f;
        abstract getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract negateZ(arg0: Matrix3f_): Matrix3f;
        abstract m12(): number;
        abstract mapnZYnX(arg0: Matrix3f_): Matrix3f;
        abstract get3x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapZYnX(arg0: Matrix3f_): Matrix3f;
        abstract mapnYnXnZ(arg0: Matrix3f_): Matrix3f;
        abstract normalizedPositiveX(arg0: Vec3f_): Vec3f;
        abstract transformTranspose(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract get(arg0: number[]): number[];
        abstract getColumn(arg0: number, arg1: Vec3f_): Vec3f;
        abstract getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract mapnXYnZ(arg0: Matrix3f_): Matrix3f;
        abstract get(arg0: number[], arg1: number): number[];
        abstract getRowColumn(arg0: number, arg1: number): number;
        abstract rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3f_): Matrix3f;
        abstract positiveZ(arg0: Vec3f_): Vec3f;
        abstract mapnYZX(arg0: Matrix3f_): Matrix3f;
        abstract mapnXnZY(arg0: Matrix3f_): Matrix3f;
        abstract mapXZY(arg0: Matrix3f_): Matrix3f;
        abstract rotateZ(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract mapnXnYnZ(arg0: Matrix3f_): Matrix3f;
        abstract mapnZnYX(arg0: Matrix3f_): Matrix3f;
        abstract mapZYX(arg0: Matrix3f_): Matrix3f;
        abstract rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract rotateLocalZ(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract mapnYnZX(arg0: Matrix3f_): Matrix3f;
        abstract m01(): number;
        abstract quadraticFormProduct(arg0: Internal.Vector3fc_): number;
        abstract rotateLocal(arg0: Internal.Quaternionfc_, arg1: Matrix3f_): Matrix3f;
        abstract getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        abstract mapnYnZnX(arg0: Matrix3f_): Matrix3f;
        abstract transformTranspose(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract obliqueZ(arg0: number, arg1: number, arg2: Matrix3f_): Matrix3f;
        abstract m20(): number;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract get(arg0: Matrix4f_): Matrix4f;
        abstract scale(arg0: Internal.Vector3fc_, arg1: Matrix3f_): Matrix3f;
        abstract mapnZnXY(arg0: Matrix3f_): Matrix3f;
        abstract mul(arg0: Internal.Matrix3fc_, arg1: Matrix3f_): Matrix3f;
        abstract mulComponentWise(arg0: Internal.Matrix3fc_, arg1: Matrix3f_): Matrix3f;
        abstract mapZXnY(arg0: Matrix3f_): Matrix3f;
        abstract rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract mapnZYX(arg0: Matrix3f_): Matrix3f;
        abstract normalizedPositiveY(arg0: Vec3f_): Vec3f;
        abstract mapYZnX(arg0: Matrix3f_): Matrix3f;
        abstract getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapnYZnX(arg0: Matrix3f_): Matrix3f;
        abstract cofactor(arg0: Matrix3f_): Matrix3f;
        abstract getRow(arg0: number, arg1: Vec3f_): Vec3f;
        abstract mapXnZY(arg0: Matrix3f_): Matrix3f;
        abstract getScale(arg0: Vec3f_): Vec3f;
        abstract rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3f_): Matrix3f;
        abstract mapnZXnY(arg0: Matrix3f_): Matrix3f;
        abstract transform(arg0: Vec3f_): Vec3f;
        abstract rotateY(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract mapZnXY(arg0: Matrix3f_): Matrix3f;
        abstract mapnXZY(arg0: Matrix3f_): Matrix3f;
        abstract normal(arg0: Matrix3f_): Matrix3f;
        abstract rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix3f_): Matrix3f;
        abstract mapnXZnY(arg0: Matrix3f_): Matrix3f;
        abstract m21(): number;
        abstract m02(): number;
        abstract sub(arg0: Internal.Matrix3fc_, arg1: Matrix3f_): Matrix3f;
        abstract isFinite(): boolean;
        abstract get3x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapZnYX(arg0: Matrix3f_): Matrix3f;
        abstract negateX(arg0: Matrix3f_): Matrix3f;
        abstract transpose(arg0: Matrix3f_): Matrix3f;
        abstract mapnXnYZ(arg0: Matrix3f_): Matrix3f;
        abstract m10(): number;
        abstract mapZXY(arg0: Matrix3f_): Matrix3f;
        abstract invert(arg0: Matrix3f_): Matrix3f;
        abstract normalizedPositiveZ(arg0: Vec3f_): Vec3f;
        abstract reflect(arg0: Internal.Quaternionfc_, arg1: Matrix3f_): Matrix3f;
        abstract rotate(arg0: Internal.AxisAngle4f_, arg1: Matrix3f_): Matrix3f;
        abstract scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract getEulerAnglesZYX(arg0: Vec3f_): Vec3f;
        abstract get(arg0: Matrix3f_): Matrix3f;
        abstract reflect(arg0: Internal.Vector3fc_, arg1: Matrix3f_): Matrix3f;
        abstract getToAddress(arg0: number): this;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract rotateX(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract positiveX(arg0: Vec3f_): Vec3f;
        abstract get(arg0: number, arg1: number): number;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract determinant(): number;
        abstract add(arg0: Internal.Matrix3fc_, arg1: Matrix3f_): Matrix3f;
        abstract mapYnZnX(arg0: Matrix3f_): Matrix3f;
        abstract get3x4(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapnZnXnY(arg0: Matrix3f_): Matrix3f;
        abstract scale(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract mapXZnY(arg0: Matrix3f_): Matrix3f;
        abstract rotateLocalX(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract mapYnXZ(arg0: Matrix3f_): Matrix3f;
        abstract rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract transform(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract mapnZXY(arg0: Matrix3f_): Matrix3f;
        abstract mapnYXnZ(arg0: Matrix3f_): Matrix3f;
        abstract transformTranspose(arg0: Vec3f_): Vec3f;
        abstract scale(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract m22(): number;
        abstract lerp(arg0: Internal.Matrix3fc_, arg1: number, arg2: Matrix3f_): Matrix3f;
        abstract quadraticFormProduct(arg0: number, arg1: number, arg2: number): number;
        abstract mapZnYnX(arg0: Matrix3f_): Matrix3f;
        abstract mapYXZ(arg0: Matrix3f_): Matrix3f;
        abstract lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix3f_): Matrix3f;
        abstract mapXnZnY(arg0: Matrix3f_): Matrix3f;
        abstract negateY(arg0: Matrix3f_): Matrix3f;
        abstract getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Matrix3f_): Matrix3f;
        abstract getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapXnYnZ(arg0: Matrix3f_): Matrix3f;
        abstract m11(): number;
        abstract getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapZnXnY(arg0: Matrix3f_): Matrix3f;
        abstract equals(arg0: Internal.Matrix3fc_, arg1: number): boolean;
        abstract mapYZX(arg0: Matrix3f_): Matrix3f;
        abstract getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract mapnXnZnY(arg0: Matrix3f_): Matrix3f;
        abstract mapnZnYnX(arg0: Matrix3f_): Matrix3f;
        abstract positiveY(arg0: Vec3f_): Vec3f;
        abstract mapnYXZ(arg0: Matrix3f_): Matrix3f;
        abstract rotateTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Matrix3f_): Matrix3f;
        get finite(): boolean
    }
    type Matrix3fc_ = Matrix3fc;
    interface ArgumentTypeInfo <A extends Internal.ArgumentType<any>, T extends Internal.ArgumentTypeInfo$Template<A>> {
        abstract serializeToJson(arg0: T, arg1: Internal.JsonObject_): void;
        abstract deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): T;
        abstract serializeToNetwork(arg0: T, arg1: Internal.FriendlyByteBuf_): void;
        abstract unpack(arg0: A): T;
    }
    type ArgumentTypeInfo_<A extends Internal.ArgumentType<any>, T extends Internal.ArgumentTypeInfo$Template<A>> = ArgumentTypeInfo<A, T> | Special.CommandArgumentType;
    class PropertyMap extends Internal.ForwardingMultimap<string, com.mojang.authlib.properties.Property> {
        constructor()
        forEach(arg0: Internal.BiConsumer_<string, com.mojang.authlib.properties.Property>): void;
    }
    type PropertyMap_ = PropertyMap;
    interface ItemEntityAccess {
        abstract setHealth(arg0: number): void;
        set health(arg0: number)
        (arg0: number): void;
    }
    type ItemEntityAccess_ = ItemEntityAccess;
    class TeamData {
        constructor(teamId: Internal.UUID_, file: Internal.BaseQuestFile_, name: string)
        constructor(teamId: Internal.UUID_, file: Internal.BaseQuestFile_)
        getOnlineMembers(): Internal.Collection<Internal.ServerPlayer>;
        setCompleted(id: number, time: Internal.Date_): boolean;
        getRelativeProgress(object: Internal.QuestObject_): number;
        setProgress(task: Internal.Task_, progress: number): void;
        deleteReward(reward: Internal.Reward_): void;
        isCompleted(object: Internal.QuestObject_): boolean;
        isRewardClaimed(player: Internal.UUID_, reward: Internal.Reward_): boolean;
        markTaskCompleted(task: Internal.Task_): void;
        mergeData(from: Internal.TeamData_): void;
        setStarted(questId: number, time: Internal.Date_): boolean;
        canStartTasks(quest: Internal.Quest_): boolean;
        setName(name: string): void;
        claimReward(player: Internal.UUID_, reward: Internal.Reward_, date: number): boolean;
        getTeamId(): Internal.UUID;
        setCanEdit(player: Internal.Player_, newCanEdit: boolean): boolean;
        setRewardsBlocked(rewardsBlocked: boolean): boolean;
        setLocked(newLocked: boolean): boolean;
        getCompletedTime(questId: number): Internal.Optional<Internal.Date>;
        resetProgress(task: Internal.Task_): void;
        markDirty(): void;
        getStartedTime(questId: number): Internal.Optional<Internal.Date>;
        setQuestPinned(player: Internal.Player_, id: number, pinned: boolean): void;
        getRewardClaimTime(player: Internal.UUID_, reward: Internal.Reward_): Internal.Optional<Internal.Date>;
        areRewardsBlocked(): boolean;
        getCanEdit(player: Internal.Player_): boolean;
        isQuestPinned(player: Internal.Player_, id: number): boolean;
        areDependenciesComplete(quest: Internal.Quest_): boolean;
        isRewardBlocked(reward: Internal.Reward_): boolean;
        claimReward(player: Internal.ServerPlayer_, reward: Internal.Reward_, notify: boolean): void;
        clearCachedProgress(): void;
        copyData(from: Internal.TeamData_): void;
        getClaimType(player: Internal.UUID_, reward: Internal.Reward_): Internal.RewardClaimType;
        isStarted(object: Internal.QuestObject_): boolean;
        resetReward(player: Internal.UUID_, reward: Internal.Reward_): boolean;
        setChapterPinned(player: Internal.Player_, pinned: boolean): void;
        write(buffer: Internal.FriendlyByteBuf_, self: boolean): void;
        getName(): string;
        hasUnclaimedRewards(player: Internal.UUID_, object: Internal.QuestObject_): boolean;
        serializeNBT(): Internal.SNBTCompoundTag;
        mergeClaimedRewards(from: Internal.TeamData_): void;
        checkAutoCompletion(quest: Internal.Quest_): void;
        getProgress(taskId: number): number;
        getFile(): Internal.BaseQuestFile;
        isChapterPinned(player: Internal.Player_): boolean;
        static get(player: Internal.Player_): Internal.TeamData;
        read(buffer: Internal.FriendlyByteBuf_, self: boolean): void;
        isLocked(): boolean;
        getProgress(task: Internal.Task_): number;
        addProgress(task: Internal.Task_, progress: number): void;
        getPinnedQuestIds(player: Internal.Player_): Internal.LongSet;
        saveIfChanged(): void;
        deserializeNBT(nbt: Internal.SNBTCompoundTag_): void;
        get onlineMembers(): Internal.Collection<Internal.ServerPlayer>
        set name(name: string)
        get teamId(): Internal.UUID
        set rewardsBlocked(rewardsBlocked: boolean)
        set locked(newLocked: boolean)
        get name(): string
        get file(): Internal.BaseQuestFile
        get locked(): boolean
        static readonly VERSION: 1;
        static readonly AUTO_PIN_ID: 1;
    }
    type TeamData_ = TeamData;
    class WeightedListHeight extends Internal.HeightProvider {
        constructor(arg0: Internal.SimpleWeightedRandomList_<Internal.HeightProvider>)
        static readonly CODEC: Internal.Codec<Internal.WeightedListHeight>;
    }
    type WeightedListHeight_ = WeightedListHeight;
    interface ICurioRenderer {
        followBodyRotations(arg0: Internal.LivingEntity_, ...arg1: Internal.HumanoidModel_<Internal.LivingEntity>[]): void;
        translateIfSneaking(arg0: Internal.PoseStack_, arg1: Internal.LivingEntity_): void;
        rotateIfSneaking(arg0: Internal.PoseStack_, arg1: Internal.LivingEntity_): void;
        abstract render<T extends Internal.LivingEntity, M extends Internal.EntityModel<T>>(arg0: Internal.ItemStack_, arg1: Internal.SlotContext_, arg2: Internal.PoseStack_, arg3: Internal.RenderLayerParent_<T, M>, arg4: Internal.MultiBufferSource_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        followHeadRotations(arg0: Internal.LivingEntity_, ...arg1: Internal.ModelPart_[]): void;
        (arg0: Internal.ItemStack, arg1: Internal.SlotContext, arg2: Internal.PoseStack, arg3: Internal.RenderLayerParent<T, M>, arg4: Internal.MultiBufferSource, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
    }
    type ICurioRenderer_ = ICurioRenderer;
    class CaveWorldCarver extends Internal.WorldCarver<Internal.CaveCarverConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.CaveCarverConfiguration>)
        carve(arg0: Internal.CarvingContext_, arg1: Internal.CaveCarverConfiguration_, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.RandomSource_, arg5: Internal.Aquifer_, arg6: Internal.ChunkPos_, arg7: Internal.CarvingMask_): boolean;
        isStartChunk(arg0: Internal.CaveCarverConfiguration_, arg1: Internal.RandomSource_): boolean;
    }
    type CaveWorldCarver_ = CaveWorldCarver;
    abstract class AbstractFurnaceBlock extends Internal.BaseEntityBlock {
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
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
        static readonly FACING: Internal.DirectionProperty;
        static readonly LIT: Internal.BooleanProperty;
    }
    type AbstractFurnaceBlock_ = AbstractFurnaceBlock;
    class RealmsServerPlayerLists extends Internal.ValueObject {
        constructor()
        static parse(arg0: string): Internal.RealmsServerPlayerLists;
        servers: Internal.List<Internal.RealmsServerPlayerList>;
    }
    type RealmsServerPlayerLists_ = RealmsServerPlayerLists;
    class JukeboxUpgradeNoteParticleData extends Internal.ParticleType<Internal.JukeboxUpgradeNoteParticleData> implements Internal.ParticleOptions {
        constructor()
        codec(): Internal.Codec<Internal.JukeboxUpgradeNoteParticleData>;
        writeToString(): string;
        getType(): Internal.ParticleType<any>;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        getType(): this;
        get type(): Internal.ParticleType<any>
        get type(): Internal.JukeboxUpgradeNoteParticleData
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.JukeboxUpgradeNoteParticleData>;
    }
    type JukeboxUpgradeNoteParticleData_ = JukeboxUpgradeNoteParticleData;
    class Thread$State extends Internal.Enum<Internal.Thread$State> {
        static values(): Internal.Thread$State[];
        static valueOf(arg0: string): Internal.Thread$State;
        static readonly WAITING: Internal.Thread$State;
        static readonly BLOCKED: Internal.Thread$State;
        static readonly NEW: Internal.Thread$State;
        static readonly TIMED_WAITING: Internal.Thread$State;
        static readonly RUNNABLE: Internal.Thread$State;
        static readonly TERMINATED: Internal.Thread$State;
    }
    type Thread$State_ = "terminated" | "blocked" | "timed_waiting" | "new" | "runnable" | "waiting" | Thread$State;
}
declare namespace net.darkhax.bookshelf.mixin.accessors.entity {
    interface AccessorEntity {
        abstract bookshelf$createHoverEvent(): Internal.HoverEvent;
        (): Internal.HoverEvent_;
    }
    type AccessorEntity_ = AccessorEntity;
}
declare namespace com.simibubi.create.content.trains.schedule {
    class Schedule {
        constructor()
        static getTypeOptions<T>(arg0: Internal.List_<com.simibubi.create.foundation.utility.Pair<ResourceLocation, T>>): Internal.List<net.minecraft.network.chat.Component>;
        write(): Internal.CompoundTag;
        static fromTag(arg0: Internal.CompoundTag_): com.simibubi.create.content.trains.schedule.Schedule;
        savedProgress: number;
        entries: Internal.List<Internal.ScheduleEntry>;
        cyclic: boolean;
        static INSTRUCTION_TYPES: [com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>];
        static CONDITION_TYPES: [com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>, com.simibubi.create.foundation.utility.Pair<any, any>];
    }
    type Schedule_ = Schedule;
}
