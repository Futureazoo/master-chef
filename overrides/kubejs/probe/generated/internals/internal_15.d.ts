/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class MyaliteCrystalBlock extends Internal.ZetaGlassBlock implements Internal.IZetaBlockColorProvider {
        constructor(arg0: Internal.ZetaModule_)
        static isEnabled(arg0: Internal.Item_): boolean;
        canStickToZeta(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        isScaffoldingZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getBlockColorProviderName(): string;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.ItemLike_, arg2: boolean): Internal.Block;
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
        arch$holder(): Internal.Holder<Internal.Block>;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getBlock(): Internal.Block;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getItemColorProviderName(): string;
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
        get blockColorProviderName(): string
        set lightEmission(v: number)
        set creativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>)
        set destroySpeed(v: number)
        get block(): Internal.Block
        get itemColorProviderName(): string
        set condition(arg0: Internal.BooleanSupplier_)
        get enabled(): boolean
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type MyaliteCrystalBlock_ = MyaliteCrystalBlock;
    class ClientboundCustomChatCompletionsPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.ClientboundCustomChatCompletionsPacket$Action_, arg1: Internal.List_<string>)
        handle(arg0: Internal.PacketListener_): void;
        entries(): Internal.List<string>;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        action(): Internal.ClientboundCustomChatCompletionsPacket$Action;
        get skippable(): boolean
    }
    type ClientboundCustomChatCompletionsPacket_ = ClientboundCustomChatCompletionsPacket;
    class ArgumentSignatures$Entry extends Internal.Record {
        constructor(arg0: string, arg1: Internal.MessageSignature_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        name(): string;
        signature(): Internal.MessageSignature;
        write(arg0: Internal.FriendlyByteBuf_): void;
    }
    type ArgumentSignatures$Entry_ = ArgumentSignatures$Entry;
    class AnvilRepairEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.ItemStack_)
        getBreakChance(): number;
        getOutput(): Internal.ItemStack;
        setBreakChance(arg0: number): void;
        getEntity(): Internal.LivingEntity;
        getLeft(): Internal.ItemStack;
        getRight(): Internal.ItemStack;
        get breakChance(): number
        get output(): Internal.ItemStack
        set breakChance(arg0: number)
        get entity(): Internal.LivingEntity
        get left(): Internal.ItemStack
        get right(): Internal.ItemStack
    }
    type AnvilRepairEvent_ = AnvilRepairEvent;
    class PainterObjectStorage {
        constructor(p: Internal.Painter_)
        createScreenObjects(): any[];
        getObject(key: string): Internal.PainterObject;
        clear(): void;
        getObjects(): Internal.Collection<Internal.PainterObject>;
        remove(id: string): void;
        handle(root: Internal.CompoundTag_): void;
        get objects(): Internal.Collection<Internal.PainterObject>
        readonly painter: Internal.Painter;
    }
    type PainterObjectStorage_ = PainterObjectStorage;
    abstract class MinecraftServer extends Internal.ReentrantBlockableEventLoop<Internal.TickTask> implements Internal.MinecraftServerKJS, Internal.CommandSource, Internal.AutoCloseable {
        constructor(arg0: Internal.Thread_, arg1: Internal.LevelStorageSource$LevelStorageAccess_, arg2: Internal.PackRepository_, arg3: Internal.WorldStem_, arg4: Internal.Proxy_, arg5: Internal.DataFixer_, arg6: Internal.Services_, arg7: any_)
        getConnection(): Internal.ServerConnectionListener;
        self(): this;
        getPlayerIdleTimeout(): number;
        getCompressionThreshold(): number;
        abstract fillServerSystemReport(arg0: Internal.SystemReport_): Internal.SystemReport;
        isTimeProfilerRunning(): boolean;
        getResourceManager(): Internal.ResourceManager;
        getProxy(): Internal.Proxy;
        setDefaultGameType(arg0: Internal.GameType_): void;
        getAdvancement(id: ResourceLocation_): Internal.AdvancementJS;
        saveEverything(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        onServerCrash(arg0: Internal.CrashReport_): void;
        registries(): Internal.LayeredRegistryAccess<Internal.RegistryLayer>;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, Internal.TickTask>): Internal.CompletableFuture<Source>;
        /**
         * @deprecated
        */
        markWorldsDirty(): void;
        usesAuthentication(): boolean;
        getFunctions(): Internal.ServerFunctionManager;
        setEnforceWhitelist(arg0: boolean): void;
        scheduleInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        handler$bfo000$injectSpatialLevel(arg0: Internal.ChunkProgressListener_, arg1: Internal.CallbackInfo_): void;
        isShutdown(): boolean;
        getScaledTrackingDistance(arg0: number): number;
        runCommandSilent(command: string): number;
        scheduleRepeatingInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        publishServer(arg0: Internal.GameType_, arg1: boolean, arg2: number): boolean;
        getFrameTimer(): Internal.FrameTimer;
        hasGui(): boolean;
        stopTimeProfiler(): Internal.ProfileResults;
        getDefaultGameType(): Internal.GameType;
        setDemo(arg0: boolean): void;
        alwaysAccepts(): boolean;
        getTickCount(): number;
        dumpServerProperties(arg0: Internal.Path_): void;
        isUnderSpawnProtection(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        /**
         * @deprecated
        */
        forgeGetWorldMap(): Internal.Map<Internal.ResourceKey<Internal.Level>, Internal.ServerLevel>;
        abstract isDedicated(): boolean;
        getPackRepository(): Internal.PackRepository;
        logChatMessage(arg0: net.minecraft.network.chat.Component_, arg1: Internal.ChatType$Bound_, arg2: string): void;
        getPlayerList(): Internal.PlayerList;
        getWorldPath(arg0: Internal.LevelResource_): Internal.Path;
        getDisplayName(): net.minecraft.network.chat.Component;
        finishRecordingMetrics(): void;
        cancelRecordingMetrics(): void;
        getLevel(arg0: Internal.ResourceKey_<Internal.Level>): Internal.ServerLevel;
        getPlayer(selector: Internal.PlayerSelector_): Internal.ServerPlayer;
        isSingleplayer(): boolean;
        getServerResources(): Internal.MinecraftServer$ReloadableResources;
        getChatDecorator(): Internal.ChatDecorator;
        setPreventProxyConnections(arg0: boolean): void;
        getPort(): number;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, Internal.TickTask>): Internal.CompletableFuture<Source>;
        getGameRules(): Internal.GameRules;
        getCommands(): Internal.Commands;
        tickChildren(arg0: Internal.BooleanSupplier_): void;
        isRecordingMetrics(): boolean;
        isSpawningAnimals(): boolean;
        getServerDirectory(): Internal.File;
        setUsesAuthentication(arg0: boolean): void;
        getAllLevels(): Internal.Iterable<Internal.ServerLevel>;
        getPersistentData(): Internal.CompoundTag;
        isStopped(): boolean;
        setPlayerList(arg0: Internal.PlayerList_): void;
        setLocalIp(arg0: string): void;
        sendData(channel: string): void;
        getScheduledEvents(): Internal.ScheduledEvents;
        getStatusJson(): string;
        createGameModeForPlayer(arg0: Internal.ServerPlayer_): Internal.ServerPlayerGameMode;
        isNetherEnabled(): boolean;
        getCustomBossEvents(): Internal.CustomBossEvents;
        getLocalIp(): string;
        reloadResources(arg0: Internal.Collection_<string>): Internal.CompletableFuture<void>;
        isEnforceWhitelist(): boolean;
        saveAllChunks(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        isCurrentlySaving(): boolean;
        areNpcsEnabled(): boolean;
        hidesOnlinePlayers(): boolean;
        getProfileRepository(): Internal.GameProfileRepository;
        getProfileCache(): Internal.GameProfileCache;
        getAbsoluteMaxWorldSize(): number;
        getCommandStorage(): Internal.CommandStorage;
        getForcedGameType(): Internal.GameType;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        setDifficulty(arg0: Internal.Difficulty_, arg1: boolean): void;
        acceptsSuccess(): boolean;
        invalidateStatus(): void;
        overworld(): Internal.ServerLevel;
        getLevel(dimension: ResourceLocation_): Internal.ServerLevel;
        static spin<S extends Internal.MinecraftServer>(arg0: Internal.Function_<Internal.Thread, S>): S;
        getStatus(): Internal.ServerStatus;
        setPlayerIdleTimeout(arg0: number): void;
        getScoreboard(): Internal.ServerScoreboard;
        tickServer(arg0: Internal.BooleanSupplier_): void;
        addTickable(arg0: Internal.Runnable_): void;
        enforceSecureProfile(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        schedule(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        setFlightAllowed(arg0: boolean): void;
        static configurePackRepository(arg0: Internal.PackRepository_, arg1: Internal.DataPackConfig_, arg2: boolean, arg3: Internal.FeatureFlagSet_): Internal.WorldDataConfiguration;
        getServerModName(): string;
        localvar$zzn000$wrapResourceManager(original: Internal.CloseableResourceManager_): Internal.CloseableResourceManager;
        acceptsFailure(): boolean;
        abstract isCommandBlockEnabled(): boolean;
        getNextTickTime(): number;
        isHardcore(): boolean;
        getFile(arg0: string): Internal.File;
        getSpawnRadius(arg0: Internal.ServerLevel_): number;
        abstract isPublished(): boolean;
        repliesToStatus(): boolean;
        stopRecordingMetrics(): void;
        startTimeProfiler(): void;
        getAdvancements(): Internal.ServerAdvancementManager;
        getPlayerCount(): number;
        getOverworld(): Internal.ServerLevel;
        getMaxChainedNeighborUpdates(): number;
        forceTimeSynchronization(): void;
        getMotd(): string;
        isRunning(): boolean;
        getName(): net.minecraft.network.chat.Component;
        getSessionService(): Internal.MinecraftSessionService;
        abstract getRateLimitPacketsPerSecond(): number;
        abstract getOperatorUserPermissionLevel(): number;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        getSingleplayerProfile(): Internal.GameProfile;
        getServerResourcePack(): Internal.Optional<Internal.MinecraftServer$ServerResourcePackInfo>;
        fillSystemReport(arg0: Internal.SystemReport_): Internal.SystemReport;
        isReady(): boolean;
        setPort(arg0: number): void;
        registryAccess(): Internal.RegistryAccess$Frozen;
        abstract shouldInformAdmins(): boolean;
        setDifficultyLocked(arg0: boolean): void;
        stop(): void;
        getMaxPlayers(): number;
        isSpawningMonsters(): boolean;
        setPvpAllowed(arg0: boolean): void;
        getKeyPair(): Internal.KeyPair;
        forceSynchronousWrites(): boolean;
        getTickTime(arg0: Internal.ResourceKey_<Internal.Level>): number[];
        isPvpAllowed(): boolean;
        isResourcePackRequired(): boolean;
        abstract getFunctionCompilationLevel(): number;
        getServerVersion(): string;
        getProfiler(): Internal.ProfilerFiller;
        abstract isSingleplayerOwner(arg0: Internal.GameProfile_): boolean;
        getAverageTickTime(): number;
        scheduleRepeating(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        setSingleplayerProfile(arg0: Internal.GameProfile_): void;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        doRunTask(arg0: Internal.TickTask_): void;
        onServerExit(): void;
        kickUnlistedPlayers(arg0: Internal.CommandSourceStack_): void;
        getRunningThread(): Internal.Thread;
        createTextFilterForPlayer(arg0: Internal.ServerPlayer_): Internal.TextFilter;
        startRecordingMetrics(arg0: Internal.Consumer_<Internal.ProfileResults>, arg1: Internal.Consumer_<Internal.Path>): void;
        isDemo(): boolean;
        getReloadableResources(): Internal.MinecraftServer$ReloadableResources;
        getProfilePermissions(arg0: Internal.GameProfile_): number;
        getData(): Internal.AttachedData<any>;
        getWorldScreenshotFile(): Internal.Optional<Internal.Path>;
        getStructureManager(): Internal.StructureTemplateManager;
        getLootData(): Internal.LootDataManager;
        halt(arg0: boolean): void;
        getEntities(): Internal.EntityArrayList;
        abstract isEpollEnabled(): boolean;
        tell(message: net.minecraft.network.chat.Component_): void;
        abstract shouldRconBroadcast(): boolean;
        levelKeys(): Internal.Set<Internal.ResourceKey<Internal.Level>>;
        getSpawnProtectionRadius(): number;
        getProfileKeySignatureValidator(): Internal.SignatureValidator;
        getModdedStatus(): Internal.ModCheck;
        getPlayerNames(): string[];
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getRecipeManager(): Internal.RecipeManager;
        getPlayers(): Internal.EntityArrayList;
        getFixerUpper(): Internal.DataFixer;
        getWorldData(): Internal.WorldData;
        setMotd(arg0: string): void;
        getPreventProxyConnections(): boolean;
        runCommand(command: string): number;
        isFlightAllowed(): boolean;
        get connection(): Internal.ServerConnectionListener
        get playerIdleTimeout(): number
        get compressionThreshold(): number
        get timeProfilerRunning(): boolean
        get resourceManager(): Internal.ResourceManager
        get proxy(): Internal.Proxy
        set defaultGameType(arg0: Internal.GameType_)
        get functions(): Internal.ServerFunctionManager
        set enforceWhitelist(arg0: boolean)
        get shutdown(): boolean
        get frameTimer(): Internal.FrameTimer
        get defaultGameType(): Internal.GameType
        set demo(arg0: boolean)
        get tickCount(): number
        get dedicated(): boolean
        get packRepository(): Internal.PackRepository
        get playerList(): Internal.PlayerList
        get displayName(): net.minecraft.network.chat.Component
        get singleplayer(): boolean
        get serverResources(): Internal.MinecraftServer$ReloadableResources
        get chatDecorator(): Internal.ChatDecorator
        set preventProxyConnections(arg0: boolean)
        get port(): number
        get gameRules(): Internal.GameRules
        get commands(): Internal.Commands
        get recordingMetrics(): boolean
        get spawningAnimals(): boolean
        get serverDirectory(): Internal.File
        set usesAuthentication(arg0: boolean)
        get allLevels(): Internal.Iterable<Internal.ServerLevel>
        get persistentData(): Internal.CompoundTag
        get stopped(): boolean
        set playerList(arg0: Internal.PlayerList_)
        set localIp(arg0: string)
        get scheduledEvents(): Internal.ScheduledEvents
        get statusJson(): string
        get netherEnabled(): boolean
        get customBossEvents(): Internal.CustomBossEvents
        get localIp(): string
        get enforceWhitelist(): boolean
        get currentlySaving(): boolean
        get profileRepository(): Internal.GameProfileRepository
        get profileCache(): Internal.GameProfileCache
        get absoluteMaxWorldSize(): number
        get commandStorage(): Internal.CommandStorage
        get forcedGameType(): Internal.GameType
        get status(): Internal.ServerStatus
        set playerIdleTimeout(arg0: number)
        get scoreboard(): Internal.ServerScoreboard
        set flightAllowed(arg0: boolean)
        get serverModName(): string
        get commandBlockEnabled(): boolean
        get nextTickTime(): number
        get hardcore(): boolean
        get published(): boolean
        get advancements(): Internal.ServerAdvancementManager
        get playerCount(): number
        get overworld(): Internal.ServerLevel
        get maxChainedNeighborUpdates(): number
        get motd(): string
        get running(): boolean
        get name(): net.minecraft.network.chat.Component
        get sessionService(): Internal.MinecraftSessionService
        get rateLimitPacketsPerSecond(): number
        get operatorUserPermissionLevel(): number
        get singleplayerProfile(): Internal.GameProfile
        get serverResourcePack(): Internal.Optional<Internal.MinecraftServer$ServerResourcePackInfo>
        get ready(): boolean
        set port(arg0: number)
        set difficultyLocked(arg0: boolean)
        get maxPlayers(): number
        get spawningMonsters(): boolean
        set pvpAllowed(arg0: boolean)
        get keyPair(): Internal.KeyPair
        get pvpAllowed(): boolean
        get resourcePackRequired(): boolean
        get functionCompilationLevel(): number
        get serverVersion(): string
        get profiler(): Internal.ProfilerFiller
        get averageTickTime(): number
        set singleplayerProfile(arg0: Internal.GameProfile_)
        get runningThread(): Internal.Thread
        get demo(): boolean
        get reloadableResources(): Internal.MinecraftServer$ReloadableResources
        get data(): Internal.AttachedData<any>
        get worldScreenshotFile(): Internal.Optional<Internal.Path>
        get structureManager(): Internal.StructureTemplateManager
        get lootData(): Internal.LootDataManager
        get entities(): Internal.EntityArrayList
        get epollEnabled(): boolean
        get spawnProtectionRadius(): number
        get profileKeySignatureValidator(): Internal.SignatureValidator
        get moddedStatus(): Internal.ModCheck
        get playerNames(): string[]
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get recipeManager(): Internal.RecipeManager
        get players(): Internal.EntityArrayList
        get fixerUpper(): Internal.DataFixer
        get worldData(): Internal.WorldData
        set motd(arg0: string)
        get preventProxyConnections(): boolean
        get flightAllowed(): boolean
        static readonly START_CHUNK_RADIUS: 11;
        static readonly ABSOLUTE_MAX_WORLD_SIZE: 29999984;
        static readonly DEMO_SETTINGS: Internal.LevelSettings;
        readonly storageSource: Internal.LevelStorageSource$LevelStorageAccess;
        static readonly VANILLA_BRAND: "vanilla";
        static readonly ANONYMOUS_PLAYER_PROFILE: Internal.GameProfile;
        readonly tickTimes: number[];
        static readonly MS_PER_TICK: 50;
    }
    type MinecraftServer_ = MinecraftServer;
    class SeedPouchItem$PouchContents {
        constructor()
        getCount(): number;
        static mutate<T>(arg0: Internal.ItemStack_, arg1: Internal.Function_<Internal.SeedPouchItem$PouchContents, T>): T;
        isSeed(): boolean;
        static readFromStack(arg0: Internal.ItemStack_): Internal.SeedPouchItem$PouchContents;
        split(arg0: number): Internal.ItemStack;
        static readCountOnlyFromStack(arg0: Internal.ItemStack_): number;
        isEmpty(): boolean;
        getContents(): Internal.ItemStack;
        setCount(arg0: number): void;
        writeToStack(arg0: Internal.ItemStack_): Internal.ItemStack;
        isFertilizer(): boolean;
        shrink(arg0: number): void;
        splitOneStack(): Internal.ItemStack;
        setContents(arg0: Internal.ItemStack_): void;
        canFit(arg0: Internal.ItemStack_): boolean;
        grow(arg0: number): void;
        absorb(arg0: Internal.ItemStack_): boolean;
        get count(): number
        get seed(): boolean
        get empty(): boolean
        get contents(): Internal.ItemStack
        set count(arg0: number)
        get fertilizer(): boolean
        set contents(arg0: Internal.ItemStack_)
        static readonly TAG_STORED_ITEM: "storedItem";
        static readonly TAG_COUNT: "itemCount";
    }
    type SeedPouchItem$PouchContents_ = SeedPouchItem$PouchContents;
    interface StructurePoolElementType <P extends Internal.StructurePoolElement> {
        abstract codec(): Internal.Codec<P>;
        register<P extends Internal.StructurePoolElement>(arg0: string, arg1: Internal.Codec_<P>): this;
        (): Internal.Codec_<P>;
        readonly LIST: Internal.StructurePoolElementType<Internal.ListPoolElement>;
        readonly LEGACY: Internal.StructurePoolElementType<Internal.LegacySinglePoolElement>;
        readonly FEATURE: Internal.StructurePoolElementType<Internal.FeaturePoolElement>;
        readonly EMPTY: Internal.StructurePoolElementType<Internal.EmptyPoolElement>;
        readonly SINGLE: Internal.StructurePoolElementType<Internal.SinglePoolElement>;
    }
    type StructurePoolElementType_<P extends Internal.StructurePoolElement> = Special.StructurePoolElement | StructurePoolElementType<P>;
    class PointToPointParticleType extends Internal.ParticleType<Internal.BiColorParticleOptions> {
        constructor()
        constructor(arg0: boolean)
        codec(): Internal.Codec<Internal.BiColorParticleOptions>;
    }
    type PointToPointParticleType_ = PointToPointParticleType;
    interface IItemHandlerModifiable extends Internal.IItemHandler {
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        abstract setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        abstract getSlots(): number;
        abstract extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        kjs$self(): Internal.IItemHandler;
        abstract getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        getWidth(): number;
        abstract getSlotLimit(arg0: number): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(i: number, itemStack: Internal.ItemStack_, b: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        abstract isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get height(): number
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type IItemHandlerModifiable_ = IItemHandlerModifiable;
    class ZetaBiomeModifier implements Internal.BiomeModifier {
        constructor()
        codec(): Internal.Codec<Internal.BiomeModifier>;
        static makeCodec(): Internal.Codec<Internal.ZetaBiomeModifier>;
        static registerBiomeModifier(arg0: Internal.IEventBus_): void;
        static modifyBiome(arg0: Internal.Holder_<Internal.Biome>, arg1: Internal.ModifiableBiomeInfo$BiomeInfo$Builder_): void;
        modify(arg0: Internal.Holder_<Internal.Biome>, arg1: Internal.BiomeModifier$Phase_, arg2: Internal.ModifiableBiomeInfo$BiomeInfo$Builder_): void;
        static readonly RESOURCE: ResourceLocation;
    }
    type ZetaBiomeModifier_ = ZetaBiomeModifier;
    class BlockItemAugmentable extends Internal.BlockItemCoFH implements Internal.IAugmentableItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        updateAugmentState(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.ItemStack>): void;
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
        getAugments(arg0: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        hasActiveTag(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        setActive(arg0: Internal.ItemStack_, arg1: boolean): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        setNumSlots(arg0: Internal.IntSupplier_): this;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        addModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        setAugments(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.ItemStack>): void;
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
        setAugValidator(arg0: Internal.BiPredicate_<Internal.ItemStack, Internal.List<Internal.ItemStack>>): this;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        validAugment(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.List_<Internal.ItemStack>): boolean;
        getAugmentSlots(arg0: Internal.ItemStack_): number;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set numSlots(arg0: Internal.IntSupplier_)
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        set augValidator(arg0: Internal.BiPredicate_<Internal.ItemStack, Internal.List<Internal.ItemStack>>)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type BlockItemAugmentable_ = BlockItemAugmentable;
    interface EnchantmentBuilder$PostFunction {
        abstract apply(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        (arg0: Internal.LivingEntity, arg1: Internal.Entity, arg2: number): void;
    }
    type EnchantmentBuilder$PostFunction_ = EnchantmentBuilder$PostFunction;
    class GaugeBlock extends Internal.DirectionalAxisKineticBlock implements Internal.IBE<Internal.GaugeBlockEntity> {
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static speed(arg0: Internal.BlockBehaviour$Properties_): Internal.GaugeBlock;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.GaugeBlockEntity>;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.GaugeBlockEntity, InteractionResult>): InteractionResult;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.GaugeBlockEntity>): void;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
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
        hideStressImpact(): boolean;
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
        shouldRenderHeadOnFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
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
        getBlockEntityClass(): typeof Internal.GaugeBlockEntity;
        showCapacityWithAnnotation(): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.GaugeBlockEntity;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static stress(arg0: Internal.BlockBehaviour$Properties_): Internal.GaugeBlock;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.GaugeBlockEntity>;
        get blockEntityType(): Internal.BlockEntityType<Internal.GaugeBlockEntity>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityClass(): typeof Internal.GaugeBlockEntity
        static readonly GAUGE: Internal.GaugeShaper;
    }
    type GaugeBlock_ = GaugeBlock;
    interface PositionalRandomFactory {
        abstract fromHashOf(arg0: string): Internal.RandomSource;
        abstract at(arg0: number, arg1: number, arg2: number): Internal.RandomSource;
        fromHashOf(arg0: ResourceLocation_): Internal.RandomSource;
        at(arg0: BlockPos_): Internal.RandomSource;
        abstract parityConfigString(arg0: Internal.StringBuilder_): void;
    }
    type PositionalRandomFactory_ = PositionalRandomFactory;
    class MaxCountFilterItem extends Internal.StringValueFilterItem {
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
        getDisplayItemStacks(filter: Internal.ItemStack_, list: Internal.List_<Internal.ItemStack>): void;
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
        filterItem(filter: Internal.ItemStack_, item: Internal.Item_): boolean;
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
        getValueVariants(stack: Internal.ItemStack_): Internal.Collection<Internal.StringValueFilterVariant>;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        clearFilterCache(filter: Internal.ItemStack_): void;
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
    type MaxCountFilterItem_ = MaxCountFilterItem;
    class StandardBogeyBlock extends Internal.AbstractBogeyBlock<Internal.StandardBogeyBlockEntity> implements Internal.ProperWaterloggedBlock, Internal.ISpecialBlockItemRequirement, Internal.IBE<Internal.StandardBogeyBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.BogeySizes$BogeySize_)
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.StandardBogeyBlockEntity, InteractionResult>): InteractionResult;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.StandardBogeyBlockEntity;
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
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        getConnectorAnchorOffset(): Vec3d;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.StandardBogeyBlockEntity>;
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
        getBlockEntityType(): Internal.BlockEntityType<Internal.StandardBogeyBlockEntity>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        static withWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.BlockState;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
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
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.StandardBogeyBlockEntity>): void;
        getBlockEntityClass(): typeof Internal.StandardBogeyBlockEntity;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get connectorAnchorOffset(): Vec3d
        get blockStates(): Internal.List<Internal.BlockState>
        get blockEntityType(): Internal.BlockEntityType<Internal.StandardBogeyBlockEntity>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityClass(): typeof Internal.StandardBogeyBlockEntity
    }
    type StandardBogeyBlock_ = StandardBogeyBlock;
    class RenderType$CompositeRenderType extends Internal.RenderType {
        state(): Internal.RenderType$CompositeState;
        static getDrawBuffer(arg0: Internal.RenderType_): Internal.DrawBuffer;
    }
    type RenderType$CompositeRenderType_ = RenderType$CompositeRenderType;
    class AppendLoot implements Internal.RuleBlockEntityModifier {
        constructor(arg0: ResourceLocation_)
        getType(): Internal.RuleBlockEntityModifierType<any>;
        apply(arg0: Internal.RandomSource_, arg1: Internal.CompoundTag_): Internal.CompoundTag;
        get type(): Internal.RuleBlockEntityModifierType<any>
        static readonly CODEC: Internal.Codec<Internal.AppendLoot>;
    }
    type AppendLoot_ = AppendLoot;
    class LinearPosTest extends Internal.PosRuleTest {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        static readonly CODEC: Internal.Codec<Internal.LinearPosTest>;
    }
    type LinearPosTest_ = LinearPosTest;
    abstract class Type$TypeError {
        constructor(arg0: string)
    }
    type Type$TypeError_ = Type$TypeError;
    abstract class Reader implements Internal.Closeable, Internal.Readable {
        static nullReader(): Internal.Reader;
        transferTo(arg0: Internal.Writer_): number;
        read(arg0: Internal.CharBuffer_): number;
        read(): number;
        markSupported(): boolean;
        mark(arg0: number): void;
        abstract close(): void;
        abstract read(arg0: string[], arg1: number, arg2: number): number;
        ready(): boolean;
        read(arg0: string[]): number;
        skip(arg0: number): number;
        reset(): void;
    }
    type Reader_ = Reader;
    interface CreativeModeTab$Output {
        acceptAll(arg0: Internal.Collection_<Internal.ItemStack>, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        accept(arg0: Internal.ItemStack_): void;
        abstract accept(arg0: Internal.ItemStack_, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        accept(arg0: Internal.ItemLike_, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        acceptAll(arg0: Internal.Collection_<Internal.ItemStack>): void;
        accept(arg0: Internal.ItemLike_): void;
        (arg0: Internal.ItemStack, arg1: Internal.CreativeModeTab$TabVisibility): void;
    }
    type CreativeModeTab$Output_ = CreativeModeTab$Output;
    interface PrivateKey extends Internal.Key, Internal.Destroyable {
        abstract getAlgorithm(): string;
        abstract getFormat(): string;
        destroy(): void;
        isDestroyed(): boolean;
        abstract getEncoded(): number[];
        get algorithm(): string
        get format(): string
        get destroyed(): boolean
        get encoded(): number[]
        /**
         * @deprecated
        */
        readonly serialVersionUID: 6034044314589513430;
    }
    type PrivateKey_ = PrivateKey;
    class ModConfig {
        constructor(arg0: Internal.ModConfig$Type_, arg1: Internal.IConfigSpec_<any>, arg2: Internal.ModContainer_)
        constructor(arg0: Internal.ModConfig$Type_, arg1: Internal.IConfigSpec_<any>, arg2: Internal.ModContainer_, arg3: string)
        getFileName(): string;
        getType(): Internal.ModConfig$Type;
        getConfigData(): Internal.CommentedConfig;
        getModId(): string;
        getHandler(): Internal.ConfigFileTypeHandler;
        save(): void;
        acceptSyncedConfig(arg0: number[]): void;
        getFullPath(): Internal.Path;
        getSpec<T extends Internal.IConfigSpec<T>>(): Internal.IConfigSpec<T>;
        get fileName(): string
        get type(): Internal.ModConfig$Type
        get configData(): Internal.CommentedConfig
        get modId(): string
        get handler(): Internal.ConfigFileTypeHandler
        get fullPath(): Internal.Path
        get spec(): Internal.IConfigSpec<T>
    }
    type ModConfig_ = ModConfig;
    class EntityRendererProvider$Context {
        constructor(arg0: Internal.EntityRenderDispatcher_, arg1: Internal.ItemRenderer_, arg2: Internal.BlockRenderDispatcher_, arg3: Internal.ItemInHandRenderer_, arg4: Internal.ResourceManager_, arg5: Internal.EntityModelSet_, arg6: net.minecraft.client.gui.Font_)
        getFont(): net.minecraft.client.gui.Font;
        getItemInHandRenderer(): Internal.ItemInHandRenderer;
        getItemRenderer(): Internal.ItemRenderer;
        getModelSet(): Internal.EntityModelSet;
        getModelManager(): Internal.ModelManager;
        getEntityRenderDispatcher(): Internal.EntityRenderDispatcher;
        getBlockRenderDispatcher(): Internal.BlockRenderDispatcher;
        getResourceManager(): Internal.ResourceManager;
        bakeLayer(arg0: Internal.ModelLayerLocation_): Internal.ModelPart;
        get font(): net.minecraft.client.gui.Font
        get itemInHandRenderer(): Internal.ItemInHandRenderer
        get itemRenderer(): Internal.ItemRenderer
        get modelSet(): Internal.EntityModelSet
        get modelManager(): Internal.ModelManager
        get entityRenderDispatcher(): Internal.EntityRenderDispatcher
        get blockRenderDispatcher(): Internal.BlockRenderDispatcher
        get resourceManager(): Internal.ResourceManager
    }
    type EntityRendererProvider$Context_ = EntityRendererProvider$Context;
    class DepositFilterLogic extends Internal.FilterLogic {
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.ItemStack>, arg2: number)
        setDepositFilterType(arg0: Internal.DepositFilterType_): void;
        getDepositFilterType(): Internal.DepositFilterType;
        setInventory(arg0: Internal.IItemHandler_): void;
        set depositFilterType(arg0: Internal.DepositFilterType_)
        get depositFilterType(): Internal.DepositFilterType
        set inventory(arg0: Internal.IItemHandler_)
    }
    type DepositFilterLogic_ = DepositFilterLogic;
    class GoldDoorBlock extends Internal.DoorBlock {
        constructor(builder: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static tryOpenDoubleDoorKey(world: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_): void;
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
        canBeOpened(state: Internal.BlockState_): boolean;
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
        static tryOpenDoubleDoor(world: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type GoldDoorBlock_ = GoldDoorBlock;
    class Message {
        constructor(arg0: string, arg1: any_)
        getTypeColour(): number[];
        getText(): string;
        get typeColour(): number[]
        get text(): string
    }
    type Message_ = Message;
    class RegisterEvent extends net.minecraftforge.eventbus.api.Event implements Internal.IModBusEvent {
        constructor()
        register<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: Internal.Consumer_<Internal.RegisterEvent$RegisterHelper<T>>): void;
        getForgeRegistry<T>(): Internal.IForgeRegistry<T>;
        getVanillaRegistry<T>(): Internal.Registry<T>;
        register<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: ResourceLocation_, arg2: Internal.Supplier_<T>): void;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<any>>;
        get forgeRegistry(): Internal.IForgeRegistry<T>
        get vanillaRegistry(): Internal.Registry<T>
        get registryKey(): Internal.ResourceKey<Internal.Registry<any>>
    }
    type RegisterEvent_ = RegisterEvent;
    class FloatArgumentInfo$Template implements Internal.ArgumentTypeInfo$Template<Internal.FloatArgumentType> {
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        type(): Internal.ArgumentTypeInfo<Internal.FloatArgumentType, any>;
    }
    type FloatArgumentInfo$Template_ = FloatArgumentInfo$Template;
    class BlockBehaviour$OffsetType extends Internal.Enum<Internal.BlockBehaviour$OffsetType> {
        static valueOf(arg0: string): Internal.BlockBehaviour$OffsetType;
        static values(): Internal.BlockBehaviour$OffsetType[];
        static readonly NONE: Internal.BlockBehaviour$OffsetType;
        static readonly XZ: Internal.BlockBehaviour$OffsetType;
        static readonly XYZ: Internal.BlockBehaviour$OffsetType;
    }
    type BlockBehaviour$OffsetType_ = BlockBehaviour$OffsetType | "xyz" | "none" | "xz";
    class RegisterItemDecorationsEvent extends net.minecraftforge.eventbus.api.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<Internal.Item, Internal.List<Internal.IItemDecorator>>)
        register(arg0: Internal.ItemLike_, arg1: Internal.IItemDecorator_): void;
    }
    type RegisterItemDecorationsEvent_ = RegisterItemDecorationsEvent;
    class BogeyInstance {
        constructor(arg0: Internal.CarriageBogey_, arg1: Internal.BogeyStyle_, arg2: Internal.BogeySizes$BogeySize_, arg3: Internal.MaterialManager_)
        updateLight(arg0: Internal.BlockAndTintGetter_, arg1: Internal.CarriageContraptionEntity_): void;
        beginFrame(arg0: number, arg1: Internal.PoseStack_): void;
        readonly commonRenderer: Internal.Optional<Internal.BogeyRenderer$CommonRenderer>;
        readonly bogey: Internal.CarriageBogey;
        readonly renderer: Internal.BogeyRenderer;
    }
    type BogeyInstance_ = BogeyInstance;
    class PackageBlock extends Internal.BaseEntityBlock {
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
        static readonly SHAPE_X: Internal.ArrayVoxelShape;
        static readonly SHAPE_Y: Internal.ArrayVoxelShape;
        static readonly FACING: Internal.DirectionProperty;
    }
    type PackageBlock_ = PackageBlock;
    class ChestBlockEntity extends Internal.RandomizableContainerBlockEntity implements Internal.LidBlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        static tryClear(arg0: any): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getOpenNess(arg0: number): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        setChanged(): void;
        onLoad(): void;
        static lidAnimateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.ChestBlockEntity_): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): net.minecraft.world.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        hasCustomName(): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        count(ingredient: Internal.Ingredient_): number;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        recheckOpen(): void;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        static swapContents(arg0: Internal.ChestBlockEntity_, arg1: Internal.ChestBlockEntity_): void;
        static getOpenCount(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get width(): number
        get maxStackSize(): number
        get renderBoundingBox(): Internal.AABB
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get modelData(): Internal.ModelData
        get mutable(): boolean
        items: Internal.NonNullList<Internal.ItemStack>;
    }
    type ChestBlockEntity_ = ChestBlockEntity;
    class ClientboundBlockChangedAckPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        sequence(): number;
        get skippable(): boolean
    }
    type ClientboundBlockChangedAckPacket_ = ClientboundBlockChangedAckPacket;
    abstract class FileSystemProvider {
        abstract readAttributes<A extends Internal.BasicFileAttributes>(arg0: Internal.Path_, arg1: A, ...arg2: any_[]): A;
        abstract move(arg0: Internal.Path_, arg1: Internal.Path_, ...arg2: any_[]): void;
        static installedProviders(): Internal.List<Internal.FileSystemProvider>;
        abstract "delete"(arg0: Internal.Path_): void;
        createLink(arg0: Internal.Path_, arg1: Internal.Path_): void;
        abstract getFileStore(arg0: Internal.Path_): Internal.FileStore;
        newFileChannel(arg0: Internal.Path_, arg1: Internal.Set_<Internal.OpenOption>, ...arg2: any_<any>[]): Internal.FileChannel;
        abstract getFileAttributeView<V extends Internal.FileAttributeView>(arg0: Internal.Path_, arg1: V, ...arg2: any_[]): V;
        abstract createDirectory(arg0: Internal.Path_, ...arg1: any_<any>[]): void;
        createSymbolicLink(arg0: Internal.Path_, arg1: Internal.Path_, ...arg2: any_<any>[]): void;
        abstract getScheme(): string;
        newAsynchronousFileChannel(arg0: Internal.Path_, arg1: Internal.Set_<Internal.OpenOption>, arg2: Internal.ExecutorService_, ...arg3: any_<any>[]): Internal.AsynchronousFileChannel;
        abstract newFileSystem(arg0: Internal.URI_, arg1: Internal.Map_<string, any>): Internal.FileSystem;
        abstract newDirectoryStream(arg0: Internal.Path_, arg1: Internal.DirectoryStream$Filter_<Internal.Path>): Internal.DirectoryStream<Internal.Path>;
        abstract isSameFile(arg0: Internal.Path_, arg1: Internal.Path_): boolean;
        abstract readAttributes(arg0: Internal.Path_, arg1: string, ...arg2: any_[]): Internal.Map<string, any>;
        readSymbolicLink(arg0: Internal.Path_): Internal.Path;
        abstract isHidden(arg0: Internal.Path_): boolean;
        newFileSystem(arg0: Internal.Path_, arg1: Internal.Map_<string, any>): Internal.FileSystem;
        newOutputStream(arg0: Internal.Path_, ...arg1: Internal.OpenOption_[]): Internal.OutputStream;
        abstract checkAccess(arg0: Internal.Path_, ...arg1: any_[]): void;
        abstract setAttribute(arg0: Internal.Path_, arg1: string, arg2: any, ...arg3: any_[]): void;
        abstract copy(arg0: Internal.Path_, arg1: Internal.Path_, ...arg2: any_[]): void;
        abstract newByteChannel(arg0: Internal.Path_, arg1: Internal.Set_<Internal.OpenOption>, ...arg2: any_<any>[]): Internal.SeekableByteChannel;
        deleteIfExists(arg0: Internal.Path_): boolean;
        newInputStream(arg0: Internal.Path_, ...arg1: Internal.OpenOption_[]): Internal.InputStream;
        abstract getFileSystem(arg0: Internal.URI_): Internal.FileSystem;
        abstract getPath(arg0: Internal.URI_): Internal.Path;
        get scheme(): string
    }
    type FileSystemProvider_ = FileSystemProvider;
    class EventHandlerContainer {
        constructor(extraId: any, handler: Internal.IEventHandler_, source: string, line: number)
        add(extraId: any, handler: Internal.IEventHandler_, source: string, line: number): void;
        handle(event: Internal.EventJS_, exh: Internal.EventExceptionHandler_): Internal.EventResult;
        static isEmpty(array: Internal.EventHandlerContainer_[]): boolean;
        readonly source: string;
        readonly handler: Internal.IEventHandler;
        readonly extraId: any;
        readonly line: number;
    }
    type EventHandlerContainer_ = EventHandlerContainer;
    interface ICustomCTBlocking {
        isCTBlocked(reader: Internal.BlockAndTintGetter_, state: Internal.BlockState_, pos: BlockPos_, connectingPos: BlockPos_, blockingPos: BlockPos_, face: Internal.Direction_): Internal.Optional<boolean>;
        blockCTTowards(reader: Internal.BlockAndTintGetter_, state: Internal.BlockState_, pos: BlockPos_, ctPos: BlockPos_, connectingPos: BlockPos_, face: Internal.Direction_): Internal.Optional<boolean>;
    }
    type ICustomCTBlocking_ = ICustomCTBlocking;
    class StorageComponentItem extends Internal.AEBaseItem implements Internal.IStorageComponent {
        constructor(arg0: Internal.Item$Properties_, arg1: number)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isStorageComponent(arg0: Internal.ItemStack_): boolean;
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
        getBytes(arg0: Internal.ItemStack_): number;
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
    type StorageComponentItem_ = StorageComponentItem;
    class VoidUpgradeWrapper extends Internal.UpgradeWrapperBase<Internal.VoidUpgradeWrapper, Internal.VoidUpgradeItem> implements Internal.IFilteredUpgrade, Internal.ISlotLimitUpgrade, Internal.IOverflowResponseUpgrade, Internal.ISlotChangeResponseUpgrade, Internal.IInsertResponseUpgrade, Internal.ITickableUpgrade {
        constructor(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: Internal.Consumer_<Internal.ItemStack>)
        onSlotChange(arg0: Internal.IItemHandler_, arg1: number): void;
        onBeforeInsert(arg0: Internal.IItemHandlerSimpleInserter_, arg1: number, arg2: Internal.ItemStack_, arg3: boolean): Internal.ItemStack;
        tick(arg0: Internal.LivingEntity_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getFilterLogic(): Internal.FilterLogic;
        isVoidAnythingEnabled(): boolean;
        getSlotLimit(): number;
        setShouldVoidOverflowDefaultOrLoadFromNbt(arg0: boolean): void;
        canBeDisabled(): boolean;
        worksInGui(): boolean;
        onOverflow(arg0: Internal.ItemStack_): Internal.ItemStack;
        hideSettingsTab(): boolean;
        stackMatchesFilter(arg0: Internal.ItemStack_): boolean;
        stackMatchesFilterStack(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setShouldVoidOverflow(arg0: boolean): void;
        setShouldWorkdInGUI(arg0: boolean): void;
        shouldVoidOverflow(): boolean;
        shouldWorkInGUI(): boolean;
        onAfterInsert(arg0: Internal.IItemHandlerSimpleInserter_, arg1: number): void;
        onAdded(): void;
        onBeforeRemoved(): void;
        get filterLogic(): Internal.FilterLogic
        get voidAnythingEnabled(): boolean
        get slotLimit(): number
        set shouldVoidOverflowDefaultOrLoadFromNbt(arg0: boolean)
        set shouldVoidOverflow(arg0: boolean)
        set shouldWorkdInGUI(arg0: boolean)
    }
    type VoidUpgradeWrapper_ = VoidUpgradeWrapper;
    class RefinedRadianceItem extends Internal.NoGravMagicalDohickyItem {
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
    type RefinedRadianceItem_ = RefinedRadianceItem;
    class EntropyRecipeSerializer implements Internal.RecipeSerializer<Internal.EntropyRecipe> {
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.EntropyRecipe;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.EntropyRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.EntropyRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.EntropyRecipe_): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        toJson(arg0: Internal.EntropyRecipe_, arg1: Internal.JsonObject_): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        static readonly INSTANCE: Internal.EntropyRecipeSerializer;
    }
    type EntropyRecipeSerializer_ = EntropyRecipeSerializer;
    class OceanMonumentStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static regeneratePiecesAfterLoad(arg0: Internal.ChunkPos_, arg1: number, arg2: Internal.PiecesContainer_): Internal.PiecesContainer;
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly CODEC: Internal.Codec<Internal.OceanMonumentStructure>;
    }
    type OceanMonumentStructure_ = OceanMonumentStructure;
    class Sound implements Internal.Weighted<Internal.Sound> {
        constructor(arg0: string, arg1: Internal.SampledFloat_, arg2: Internal.SampledFloat_, arg3: number, arg4: Internal.Sound$Type_, arg5: boolean, arg6: boolean, arg7: number)
        getType(): Internal.Sound$Type;
        getLocation(): ResourceLocation;
        getVolume(): Internal.SampledFloat;
        getPitch(): Internal.SampledFloat;
        getPath(): ResourceLocation;
        getAttenuationDistance(): number;
        getSound(arg0: Internal.RandomSource_): this;
        getWeight(): number;
        preloadIfRequired(arg0: Internal.SoundEngine_): void;
        shouldStream(): boolean;
        shouldPreload(): boolean;
        get type(): Internal.Sound$Type
        get location(): ResourceLocation
        get volume(): Internal.SampledFloat
        get pitch(): Internal.SampledFloat
        get path(): ResourceLocation
        get attenuationDistance(): number
        get weight(): number
        static readonly SOUND_LISTER: Internal.FileToIdConverter;
    }
    type Sound_ = Sound;
    class ServerboundClientCommandPacket$Action extends Internal.Enum<Internal.ServerboundClientCommandPacket$Action> {
        static valueOf(arg0: string): Internal.ServerboundClientCommandPacket$Action;
        static values(): Internal.ServerboundClientCommandPacket$Action[];
        static readonly REQUEST_STATS: Internal.ServerboundClientCommandPacket$Action;
        static readonly PERFORM_RESPAWN: Internal.ServerboundClientCommandPacket$Action;
    }
    type ServerboundClientCommandPacket$Action_ = "request_stats" | "perform_respawn" | ServerboundClientCommandPacket$Action;
    interface ZipConstants {
        readonly EXTHDR: number;
        readonly LOCCRC: number;
        readonly LOCHOW: number;
        readonly CENSIZ: number;
        readonly EXTLEN: number;
        readonly ENDSIZ: number;
        readonly CENVEM: number;
        readonly CENHDR: number;
        readonly LOCNAM: number;
        readonly EXTSIZ: number;
        readonly LOCVER: number;
        readonly ENDCOM: number;
        readonly CENSIG: number;
        readonly CENLEN: number;
        readonly CENCOM: number;
        readonly ENDOFF: number;
        readonly LOCSIG: number;
        readonly LOCHDR: number;
        readonly ENDSUB: number;
        readonly EXTCRC: number;
        readonly CENHOW: number;
        readonly LOCLEN: number;
        readonly LOCSIZ: number;
        readonly CENCRC: number;
        readonly CENVER: number;
        readonly CENTIM: number;
        readonly CENNAM: number;
        readonly CENATT: number;
        readonly CENDSK: number;
        readonly LOCEXT: number;
        readonly LOCFLG: number;
        readonly LOCTIM: number;
        readonly CENFLG: number;
        readonly CENEXT: number;
        readonly ENDSIG: number;
        readonly EXTSIG: number;
        readonly ENDHDR: number;
        readonly CENATX: number;
        readonly CENOFF: number;
        readonly ENDTOT: number;
    }
    type ZipConstants_ = ZipConstants;
    class TinyPotatoBlock extends Internal.ZetaBlock implements Internal.SimpleWaterloggedBlock, Internal.EntityBlock, Internal.IZetaBlockItemProvider {
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
        provideItemBlock(arg0: Internal.Block_, arg1: Internal.Item$Properties_): Internal.BlockItem;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getBlock(): Internal.Block;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
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
        static isAngry(arg0: Internal.ItemStack_): boolean;
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
        static readonly ANGRY: "angery";
        static readonly HORIZONTAL_FACING: Internal.DirectionProperty;
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type TinyPotatoBlock_ = TinyPotatoBlock;
    class CarrotBlock extends Internal.CropBlock {
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
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type CarrotBlock_ = CarrotBlock;
    class SpawnPlacementRegisterEvent$Operation extends Internal.Enum<Internal.SpawnPlacementRegisterEvent$Operation> {
        static values(): Internal.SpawnPlacementRegisterEvent$Operation[];
        static valueOf(arg0: string): Internal.SpawnPlacementRegisterEvent$Operation;
        static readonly OR: Internal.SpawnPlacementRegisterEvent$Operation;
        static readonly REPLACE: Internal.SpawnPlacementRegisterEvent$Operation;
        static readonly AND: Internal.SpawnPlacementRegisterEvent$Operation;
    }
    type SpawnPlacementRegisterEvent$Operation_ = "replace" | "and" | SpawnPlacementRegisterEvent$Operation | "or";
    interface Byte2ReferenceFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2ReferenceFunction<V>;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        put(arg0: number, arg1: V): V;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2ReferenceFunction<V>;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2ReferenceFunction<T, V>;
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Byte2LongFunction;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Byte2IntFunction;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Byte2ReferenceFunction<T>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2ReferenceFunction<V>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Byte2ObjectFunction<T>;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2ReferenceFunction<T, V>;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2ReferenceFunction<V>;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        abstract get(arg0: number): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        containsKey(arg0: number): boolean;
        remove(arg0: number): V;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Byte2ShortFunction;
        apply(arg0: number): V;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Byte2CharFunction;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Byte2FloatFunction;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Byte2ByteFunction;
        size(): number;
        getOrDefault(arg0: number, arg1: V): V;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2ReferenceFunction<V>;
        clear(): void;
        defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2ReferenceFunction<V>;
        (arg0: number): V;
    }
    type Byte2ReferenceFunction_<V> = Byte2ReferenceFunction<V>;
    class TagKeyComponent <T> extends Internal.Record implements Internal.RecipeComponent<Internal.TagKey<T>> {
        constructor(registry: Internal.ResourceKey_<Internal.Registry<T>>, registryType: typeof any)
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.TagKey<T>>, json: Internal.JsonObject_): void;
        replaceOutput(recipe: Internal.RecipeJS_, original: Internal.TagKey_<T>, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): Internal.TagKey<T>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        registryType(): typeof any;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<Internal.TagKey<T>, O>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, Internal.TagKey<T>>>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, Internal.TagKey<T>>>;
        isInput(recipe: Internal.RecipeJS_, value: Internal.TagKey_<T>, match: Internal.ReplacementMatch_): boolean;
        write(recipe: Internal.RecipeJS_, value: Internal.TagKey_<T>): Internal.JsonPrimitive;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        asArray(): Internal.ArrayRecipeComponent<Internal.TagKey<T>>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.TagKey<T>>;
        orSelf(): Internal.RecipeComponent<Internal.TagKey<T>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<Internal.TagKey<T>>;
        registry(): Internal.ResourceKey<Internal.Registry<T>>;
        key(name: string): Internal.RecipeKey<Internal.TagKey<T>>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        checkValueHasChanged(oldValue: Internal.TagKey_<T>, newValue: Internal.TagKey_<T>): boolean;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<Internal.TagKey<T>>;
        isOutput(recipe: Internal.RecipeJS_, value: Internal.TagKey_<T>, match: Internal.ReplacementMatch_): boolean;
        static builder(): Internal.RecipeComponentBuilder;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.TagKey<T>>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.TagKey<T>>, map: Internal.Map_<any, any>): void;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<Internal.TagKey<T>, O>;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        checkEmpty(key: Internal.RecipeKey_<Internal.TagKey<T>>, value: Internal.TagKey_<T>): string;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.TagKey<T>>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<Internal.TagKey<T>>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        replaceInput(recipe: Internal.RecipeJS_, original: Internal.TagKey_<T>, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): Internal.TagKey<T>;
        static readonly ENTITY_TYPE: Internal.RecipeComponent<Internal.TagKey<Internal.EntityType<any>>>;
        static readonly BIOME: Internal.RecipeComponent<Internal.TagKey<Internal.Biome>>;
        static readonly DYNAMIC: Internal.DynamicRecipeComponent;
        static readonly FLUID: Internal.RecipeComponent<Internal.TagKey<Internal.Fluid>>;
        static readonly BLOCK: Internal.RecipeComponent<Internal.TagKey<Internal.Block>>;
        static readonly ITEM: Internal.RecipeComponent<Internal.TagKey<Internal.Item>>;
    }
    type TagKeyComponent_<T> = TagKeyComponent<T>;
    class RoadSignFeature$Config extends Internal.Record implements Internal.FeatureConfiguration {
        constructor(randomState: Internal.RoadSignFeature$RandomState_, postWood: net.mehvahdjukaar.moonlight.api.set.wood.WoodType_, signWood: net.mehvahdjukaar.moonlight.api.set.wood.WoodType_, fence: Internal.BlockState_, trapdoor: Internal.BlockState_, slab: Internal.BlockState_, log: Internal.BlockState_, cobble: Internal.BlockState_, mossyCobble: Internal.BlockState_, wall: Internal.BlockState_, mossyWall: Internal.BlockState_, lanternUp: Internal.BlockState_, lanternDown: Internal.BlockState_, candleHolder: Internal.BlockState_, stone: Internal.BlockState_, stoneSlab: Internal.BlockState_, stoneStairs: Internal.BlockState_, invalidMessage: string)
        slab(): Internal.BlockState;
        log(): Internal.BlockState;
        randomState(): Internal.RoadSignFeature$RandomState;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        signWood(): net.mehvahdjukaar.moonlight.api.set.wood.WoodType;
        trapdoor(): Internal.BlockState;
        wall(): Internal.BlockState;
        fence(): Internal.BlockState;
        stoneSlab(): Internal.BlockState;
        cobble(): Internal.BlockState;
        postWood(): net.mehvahdjukaar.moonlight.api.set.wood.WoodType;
        invalidMessage(): string;
        mossyCobble(): Internal.BlockState;
        candleHolder(): Internal.BlockState;
        lanternDown(): Internal.BlockState;
        mossyWall(): Internal.BlockState;
        stoneStairs(): Internal.BlockState;
        stone(): Internal.BlockState;
        lanternUp(): Internal.BlockState;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.RoadSignFeature$Config>;
    }
    type RoadSignFeature$Config_ = RoadSignFeature$Config;
    class PotatoRecoveryEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, arg1: Internal.EnchantmentCategory_, arg2: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type PotatoRecoveryEnchantment_ = PotatoRecoveryEnchantment;
    class NameChanger {
        constructor()
        changeBlock(arg0: Internal.Block_, arg1: string, arg2: boolean): void;
        changeItem(arg0: Internal.Item_, arg1: string, arg2: boolean): void;
    }
    type NameChanger_ = NameChanger;
    class TrackBlockEntity extends Internal.SmartBlockEntity implements Internal.ITransformableBlockEntity, Internal.IHasTrackCasing, Internal.IMergeableBE {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getConnections(): Internal.Map<BlockPos, Internal.BezierConnection>;
        manageFakeTracksAlong(arg0: Internal.BezierConnection_, arg1: boolean): void;
        requestModelDataUpdate(): void;
        validateConnections(): void;
        addConnection(arg0: Internal.BezierConnection_): void;
        isTilted(): boolean;
        transform(arg0: Internal.StructureTransform_): void;
        static isAlternate(world: Internal.Level_, pos: BlockPos_): boolean;
        static setTrackCasing(world: Internal.Level_, pos: BlockPos_, trackCasing: Internal.SlabBlock_): void;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        bind(arg0: Internal.ResourceKey_<Internal.Level>, arg1: BlockPos_): void;
        removeConnection(arg0: BlockPos_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        accept(arg0: Internal.BlockEntity_): void;
        isAlternate(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        static setAlternateModel(world: Internal.Level_, pos: BlockPos_, useAlternateModel: boolean): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static getTrackCasing(world: Internal.Level_, pos: BlockPos_): Internal.SlabBlock;
        removeInboundConnections(arg0: boolean): void;
        getTrackCasing(): Internal.SlabBlock;
        setAlternate(alternate: boolean): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hasInteractableConnections(): boolean;
        setTrackCasing(trackCasing: Internal.SlabBlock_): void;
        get connections(): Internal.Map<BlockPos, Internal.BezierConnection>
        get tilted(): boolean
        get alternate(): boolean
        get trackCasing(): Internal.SlabBlock
        set alternate(alternate: boolean)
        set trackCasing(trackCasing: Internal.SlabBlock_)
        boundLocation: com.simibubi.create.foundation.utility.Pair<Internal.ResourceKey<Internal.Level>, BlockPos>;
        tilt: Internal.TrackBlockEntityTilt;
    }
    type TrackBlockEntity_ = TrackBlockEntity;
    class AudioFormat$Encoding {
        constructor(arg0: string)
        static readonly PCM_SIGNED: Internal.AudioFormat$Encoding;
        static readonly ULAW: Internal.AudioFormat$Encoding;
        static readonly PCM_UNSIGNED: Internal.AudioFormat$Encoding;
        static readonly PCM_FLOAT: Internal.AudioFormat$Encoding;
        static readonly ALAW: Internal.AudioFormat$Encoding;
    }
    type AudioFormat$Encoding_ = AudioFormat$Encoding;
    abstract class BlockSpoutingBehaviour {
        constructor()
        static addCustomSpoutInteraction(arg0: ResourceLocation_, arg1: Internal.BlockSpoutingBehaviour_): void;
        static registerDefaults(): void;
        abstract fillBlock(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.SpoutBlockEntity_, arg3: Internal.FluidStack_, arg4: boolean): number;
        static forEach(arg0: Internal.Consumer_<Internal.BlockSpoutingBehaviour>): void;
    }
    type BlockSpoutingBehaviour_ = BlockSpoutingBehaviour;
    interface LevelKJS extends Internal.WithAttachedData<Internal.Level>, Internal.ScriptTypeHolder {
        getDisplayName(): net.minecraft.network.chat.Component;
        getDimension(): ResourceLocation;
        getName(): net.minecraft.network.chat.Component;
        getEntities(): Internal.EntityArrayList;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        runCommandSilent(command: string): number;
        self(): Internal.Level;
        tell(message: net.minecraft.network.chat.Component_): void;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        abstract getData(): Internal.AttachedData<Internal.Level>;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        getSide(): Internal.ScriptType;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        isOverworld(): boolean;
        runCommand(command: string): number;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        get displayName(): net.minecraft.network.chat.Component
        get dimension(): ResourceLocation
        get name(): net.minecraft.network.chat.Component
        get entities(): Internal.EntityArrayList
        get data(): Internal.AttachedData<Internal.Level>
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get players(): Internal.EntityArrayList
        get side(): Internal.ScriptType
        get overworld(): boolean
        (): Internal.AttachedData_<Internal.Level>;
    }
    type LevelKJS_ = LevelKJS;
    interface ChronoZonedDateTime <D extends Internal.ChronoLocalDate> extends Internal.Comparable<Internal.ChronoZonedDateTime<any>>, Internal.Temporal {
        isAfter(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        toLocalTime(): Internal.LocalTime;
        abstract plus(arg0: number, arg1: Internal.TemporalUnit_): this;
        toInstant(): Internal.Instant;
        compareTo(arg0: any): number;
        abstract toLocalDateTime(): Internal.ChronoLocalDateTime<D>;
        abstract getZone(): Internal.ZoneId;
        "with"(arg0: Internal.TemporalAdjuster_): this;
        getLong(arg0: Internal.TemporalField_): number;
        timeLineOrder(): Internal.Comparator<Internal.ChronoZonedDateTime<any>>;
        minus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        abstract "with"(arg0: Internal.TemporalField_, arg1: number): this;
        compareTo(arg0: Internal.ChronoZonedDateTime_<any>): number;
        abstract isSupported(arg0: Internal.TemporalField_): boolean;
        format(arg0: Internal.DateTimeFormatter_): string;
        abstract getOffset(): Internal.ZoneOffset;
        getChronology(): Internal.Chronology;
        abstract toString(): string;
        abstract withZoneSameInstant(arg0: Internal.ZoneId_): this;
        isEqual(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        abstract until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        isBefore(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        from(arg0: Internal.TemporalAccessor_): Internal.ChronoZonedDateTime<any>;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        abstract hashCode(): number;
        abstract withEarlierOffsetAtOverlap(): this;
        get(arg0: Internal.TemporalField_): number;
        plus(arg0: Internal.TemporalAmount_): this;
        abstract withZoneSameLocal(arg0: Internal.ZoneId_): this;
        abstract equals(arg0: any): boolean;
        toLocalDate(): D;
        toEpochSecond(): number;
        minus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        abstract withLaterOffsetAtOverlap(): this;
        get zone(): Internal.ZoneId
        get offset(): Internal.ZoneOffset
        get chronology(): Internal.Chronology
    }
    type ChronoZonedDateTime_<D extends Internal.ChronoLocalDate> = ChronoZonedDateTime<D>;
    class TeamPropertyArgument$Info implements Internal.ArgumentTypeInfo<Internal.TeamPropertyArgument, Internal.TeamPropertyArgument$Info$Template> {
        constructor()
        deserializeFromNetwork(friendlyByteBuf: Internal.FriendlyByteBuf_): Internal.TeamPropertyArgument$Info$Template;
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        serializeToJson(template: Internal.TeamPropertyArgument$Info$Template_, jsonObject: Internal.JsonObject_): void;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        unpack(argumentType: Internal.TeamPropertyArgument_): Internal.TeamPropertyArgument$Info$Template;
        serializeToNetwork(template: Internal.TeamPropertyArgument$Info$Template_, friendlyByteBuf: Internal.FriendlyByteBuf_): void;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
    }
    type TeamPropertyArgument$Info_ = TeamPropertyArgument$Info;
    class BiomeSpecialEffects$GrassColorModifier extends Internal.Enum<Internal.BiomeSpecialEffects$GrassColorModifier> implements Internal.IExtensibleEnum, Internal.StringRepresentable {
        static byName(arg0: string): Internal.BiomeSpecialEffects$GrassColorModifier;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        init(): void;
        static create(arg0: string, arg1: string, arg2: Internal.BiomeSpecialEffects$GrassColorModifier$ColorModifier_): Internal.BiomeSpecialEffects$GrassColorModifier;
        getSerializedName(): string;
        static values(): Internal.BiomeSpecialEffects$GrassColorModifier[];
        getName(): string;
        modifyColor(arg0: number, arg1: number, arg2: number): number;
        static valueOf(arg0: string): Internal.BiomeSpecialEffects$GrassColorModifier;
        get serializedName(): string
        get name(): string
        static readonly DARK_FOREST: Internal.BiomeSpecialEffects$GrassColorModifier;
        static readonly CODEC: Internal.Codec<Internal.BiomeSpecialEffects$GrassColorModifier>;
        static readonly SWAMP: Internal.BiomeSpecialEffects$GrassColorModifier;
        static readonly NONE: Internal.BiomeSpecialEffects$GrassColorModifier;
    }
    type BiomeSpecialEffects$GrassColorModifier_ = "dark_forest" | BiomeSpecialEffects$GrassColorModifier | "none" | "swamp";
    class BuriedTreasureStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly CODEC: Internal.Codec<Internal.BuriedTreasureStructure>;
    }
    type BuriedTreasureStructure_ = BuriedTreasureStructure;
    class SafeBlock extends Internal.Block implements Internal.ILavaAndWaterLoggable, Internal.EntityBlock {
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
        placeLiquid(world: Internal.LevelAccessor_, pos: BlockPos_, state: Internal.BlockState_, fluidState: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(pos: BlockPos_, state: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(reader: Internal.BlockGetter_, pos: BlockPos_, state: Internal.BlockState_, fluid: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(pLevel: Internal.LevelAccessor_, pPos: BlockPos_, pState: Internal.BlockState_): Internal.ItemStack;
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
        takeLiquid(world: Internal.LevelAccessor_, pos: BlockPos_, state: Internal.BlockState_): Internal.Fluid;
        getSafeItem(te: Internal.SafeBlockTile_): Internal.ItemStack;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly LAVALOGGED: Internal.BooleanProperty;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly OPEN: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type SafeBlock_ = SafeBlock;
    class EntityAttributeModificationEvent extends net.minecraftforge.eventbus.api.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<Internal.EntityType<Internal.LivingEntity>, Internal.AttributeSupplier$Builder>)
        add(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.Attribute_, arg2: number): void;
        getTypes(): Internal.List<Internal.EntityType<Internal.LivingEntity>>;
        add(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.Attribute_): void;
        has(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.Attribute_): boolean;
        get types(): Internal.List<Internal.EntityType<Internal.LivingEntity>>
    }
    type EntityAttributeModificationEvent_ = EntityAttributeModificationEvent;
    class XpPumpUpgradeWrapper extends Internal.UpgradeWrapperBase<Internal.XpPumpUpgradeWrapper, Internal.XpPumpUpgradeItem> implements Internal.ITickableUpgrade {
        getLevel(): number;
        getDirection(): Internal.AutomationDirection;
        getLevelsToStore(): number;
        setMendItems(arg0: boolean): void;
        giveAllExperienceToPlayer(arg0: Internal.Player_): void;
        giveLevelsToPlayer(arg0: Internal.Player_): void;
        tick(arg0: Internal.LivingEntity_, arg1: Internal.Level_, arg2: BlockPos_): void;
        takeLevelsFromPlayer(arg0: Internal.Player_): void;
        shouldMendItems(): boolean;
        takeAllExperienceFromPlayer(arg0: Internal.Player_): void;
        canBeDisabled(): boolean;
        setDirection(arg0: Internal.AutomationDirection_): void;
        hideSettingsTab(): boolean;
        setLevel(arg0: number): void;
        getLevelsToTake(): number;
        setLevelsToStore(arg0: number): void;
        onAdded(): void;
        setLevelsToTake(arg0: number): void;
        onBeforeRemoved(): void;
        get level(): number
        get direction(): Internal.AutomationDirection
        get levelsToStore(): number
        set mendItems(arg0: boolean)
        set direction(arg0: Internal.AutomationDirection_)
        set level(arg0: number)
        get levelsToTake(): number
        set levelsToStore(arg0: number)
        set levelsToTake(arg0: number)
    }
    type XpPumpUpgradeWrapper_ = XpPumpUpgradeWrapper;
    class CorrosiveEffect extends Internal.StatusEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
    }
    type CorrosiveEffect_ = CorrosiveEffect;
    abstract class FlyingMob extends Internal.Mob {
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
    type FlyingMob_ = FlyingMob;
    class RecipeWrapperSerializer <T extends Internal.Recipe<any>, R extends Internal.Recipe<any> & Internal.IWrapperRecipe<T>> implements Internal.RecipeSerializer<R> {
        constructor(arg0: Internal.Function_<T, R>, arg1: Internal.RecipeSerializer_<T>)
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): R;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): R;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: R): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): R;
    }
    type RecipeWrapperSerializer_<T extends Internal.Recipe<any>, R extends Internal.Recipe<any> & Internal.IWrapperRecipe<T>> = RecipeWrapperSerializer<T, R>;
    class InputContext {
        reconvert(): void;
        endComposition(): void;
        setCompositionEnabled(arg0: boolean): void;
        getInputMethodControlObject(): any;
        getLocale(): Internal.Locale;
        isCompositionEnabled(): boolean;
        dispose(): void;
        removeNotify(arg0: Internal.Component_): void;
        selectInputMethod(arg0: Internal.Locale_): boolean;
        dispatchEvent(arg0: Internal.AWTEvent_): void;
        static getInstance(): Internal.InputContext;
        setCharacterSubsets(arg0: any_[]): void;
        set compositionEnabled(arg0: boolean)
        get inputMethodControlObject(): any
        get locale(): Internal.Locale
        get compositionEnabled(): boolean
        get instance(): Internal.InputContext
        set characterSubsets(arg0: any_[])
    }
    type InputContext_ = InputContext;
    interface IUpgradeInventory extends Internal.InternalInventory {
        simulateRemove(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        addItems(arg0: Internal.ItemStack_, arg1: boolean): Internal.ItemStack;
        toContainer(): net.minecraft.world.Container;
        getSubInventory(arg0: number, arg1: number): Internal.InternalInventory;
        isEmpty(): boolean;
        abstract writeToNBT(arg0: Internal.CompoundTag_, arg1: string): void;
        abstract readFromNBT(arg0: Internal.CompoundTag_, arg1: string): void;
        removeItems(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        sendChangeNotification(arg0: number): void;
        abstract getUpgradableItem(): Internal.ItemLike;
        abstract getStackInSlot(arg0: number): Internal.ItemStack;
        removeSimilarItems(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.FuzzyMode_, arg3: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        abstract getMaxInstalled(arg0: Internal.ItemLike_): number;
        wrapExternal(arg0: Internal.BlockEntity_, arg1: Internal.Direction_): Internal.ItemTransfer;
        empty(): Internal.InternalInventory;
        getSlotInv(arg0: number): Internal.InternalInventory;
        mayAllowInsertion(): boolean;
        addItems(arg0: Internal.ItemStack_): Internal.ItemStack;
        getSlotLimit(arg0: number): number;
        iterator(): Internal.Iterator<Internal.ItemStack>;
        isInstalled(arg0: Internal.ItemLike_): boolean;
        toItemHandler(): Internal.IItemHandler;
        simulateSimilarRemove(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.FuzzyMode_, arg3: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        spliterator(): Internal.Spliterator<Internal.ItemStack>;
        abstract getInstalledUpgrades(arg0: Internal.ItemLike_): number;
        simulateAdd(arg0: Internal.ItemStack_): Internal.ItemStack;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        abstract size(): number;
        forEach(arg0: Internal.Consumer_<Internal.ItemStack>): void;
        abstract setItemDirect(arg0: number, arg1: Internal.ItemStack_): void;
        clear(): void;
        wrapExternal(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_): Internal.ItemTransfer;
        getRedstoneSignal(): number;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        get empty(): boolean
        get upgradableItem(): Internal.ItemLike
        get redstoneSignal(): number
    }
    type IUpgradeInventory_ = IUpgradeInventory;
    class SuggestionContext <S> {
        constructor(arg0: Internal.CommandNode_<S>, arg1: number)
        readonly startPos: number;
        readonly parent: Internal.CommandNode<S>;
    }
    type SuggestionContext_<S> = SuggestionContext<S>;
    class RealmsServer$WorldType extends Internal.Enum<Internal.RealmsServer$WorldType> {
        static valueOf(arg0: string): Internal.RealmsServer$WorldType;
        static values(): Internal.RealmsServer$WorldType[];
        static readonly ADVENTUREMAP: Internal.RealmsServer$WorldType;
        static readonly NORMAL: Internal.RealmsServer$WorldType;
        static readonly EXPERIENCE: Internal.RealmsServer$WorldType;
        static readonly MINIGAME: Internal.RealmsServer$WorldType;
        static readonly INSPIRATION: Internal.RealmsServer$WorldType;
    }
    type RealmsServer$WorldType_ = "normal" | "adventuremap" | "minigame" | "inspiration" | "experience" | RealmsServer$WorldType;
    class SecondaryPoiSensor extends Internal.Sensor<Internal.Villager> {
        constructor()
    }
    type SecondaryPoiSensor_ = SecondaryPoiSensor;
    class DragonEggBlock extends Internal.FallingBlock {
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
        onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_): void;
        onBrokenAfterFall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FallingBlockEntity_): void;
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
        getFallDamageSource(arg0: Internal.Entity_): DamageSource;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type DragonEggBlock_ = DragonEggBlock;
    class AbilitiesData$AbilitiesDataBuilder {
        ability(arg0: Internal.AbilityData_): this;
        abilities(arg0: Internal.Map_<string, Internal.AbilityData>): this;
        build(): Internal.AbilitiesData;
    }
    type AbilitiesData$AbilitiesDataBuilder_ = AbilitiesData$AbilitiesDataBuilder;
    class APBiomeModifiers$APUndergroundDecorationBiomeModifier extends Internal.Record implements Internal.BiomeModifier {
        constructor(biomes: Internal.HolderSet_<Internal.Biome>, feature: Internal.Holder_<Internal.PlacedFeature>, step: Internal.GenerationStep$Decoration_)
        codec(): Internal.Codec<Internal.BiomeModifier>;
        biomes(): Internal.HolderSet<Internal.Biome>;
        step(): Internal.GenerationStep$Decoration;
        feature(): Internal.Holder<Internal.PlacedFeature>;
        modify(arg0: Internal.Holder_<Internal.Biome>, arg1: Internal.BiomeModifier$Phase_, arg2: Internal.ModifiableBiomeInfo$BiomeInfo$Builder_): void;
    }
    type APBiomeModifiers$APUndergroundDecorationBiomeModifier_ = APBiomeModifiers$APUndergroundDecorationBiomeModifier;
    abstract class PlacementFilter extends Internal.PlacementModifier {
        constructor()
    }
    type PlacementFilter_ = PlacementFilter;
    class DamageEffects extends Internal.Enum<Internal.DamageEffects> implements Internal.IExtensibleEnum, Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        static values(): Internal.DamageEffects[];
        /**
         * @deprecated
        */
        init(): void;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.DamageEffects;
        static create(arg0: string, arg1: string, arg2: Internal.Supplier_<Internal.SoundEvent>): Internal.DamageEffects;
        sound(): Internal.SoundEvent;
        get serializedName(): string
        static readonly THORNS: Internal.DamageEffects;
        static readonly CODEC: Internal.Codec<Internal.DamageEffects>;
        static readonly HURT: Internal.DamageEffects;
        static readonly POKING: Internal.DamageEffects;
        static readonly DROWNING: Internal.DamageEffects;
        static readonly FREEZING: Internal.DamageEffects;
        static readonly BURNING: Internal.DamageEffects;
    }
    type DamageEffects_ = "thorns" | "drowning" | "hurt" | DamageEffects | "burning" | "poking" | "freezing";
    class OptionalDynamic <T> extends Internal.DynamicLike<T> {
        constructor(arg0: Internal.DynamicOps_<T>, arg1: Internal.DataResult_<Internal.Dynamic<T>>)
        getElementGeneric(arg0: T): Internal.DataResult<T>;
        getGeneric(arg0: T): Internal.DataResult<T>;
        map<U>(arg0: Internal.Function_<Internal.Dynamic<T>, U>): Internal.DataResult<U>;
        get(): Internal.DataResult<Internal.Dynamic<T>>;
        orElseEmptyMap(): Internal.Dynamic<T>;
        result(): Internal.Optional<Internal.Dynamic<T>>;
        asStreamOpt(): Internal.DataResult<Internal.Stream<Internal.Dynamic<T>>>;
        getElement(arg0: string): Internal.DataResult<T>;
        asMapOpt(): Internal.DataResult<Internal.Stream<Internal.Pair<Internal.Dynamic<T>, Internal.Dynamic<T>>>>;
        decode<A>(arg0: Internal.Decoder_<A>): Internal.DataResult<Internal.Pair<A, T>>;
        flatMap<U>(arg0: Internal.Function_<Internal.Dynamic<T>, Internal.DataResult<U>>): Internal.DataResult<U>;
        into<V>(arg0: Internal.Function_<Internal.Dynamic<T>, V>): Internal.DataResult<V>;
        orElseEmptyList(): Internal.Dynamic<T>;
        get(arg0: string): this;
    }
    type OptionalDynamic_<T> = OptionalDynamic<T>;
    class SlidingDoorBlockEntity extends Internal.SmartBlockEntity implements Internal.SlidingDoorMode$IHasDoorMode {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getSlidingDoorMode(): Internal.SlidingDoorMode;
        requestModelDataUpdate(): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static isOpen(arg0: Internal.BlockState_): boolean;
        get slidingDoorMode(): Internal.SlidingDoorMode
        get modelData(): Internal.ModelData
    }
    type SlidingDoorBlockEntity_ = SlidingDoorBlockEntity;
    class RoundingMode extends Internal.Enum<Internal.RoundingMode> {
        static valueOf(arg0: number): Internal.RoundingMode;
        static valueOf(arg0: string): Internal.RoundingMode;
        static values(): Internal.RoundingMode[];
        static readonly FLOOR: Internal.RoundingMode;
        static readonly HALF_DOWN: Internal.RoundingMode;
        static readonly UNNECESSARY: Internal.RoundingMode;
        static readonly HALF_UP: Internal.RoundingMode;
        static readonly UP: Internal.RoundingMode;
        static readonly CEILING: Internal.RoundingMode;
        static readonly DOWN: Internal.RoundingMode;
        static readonly HALF_EVEN: Internal.RoundingMode;
    }
    type RoundingMode_ = "floor" | "up" | "down" | RoundingMode | "half_down" | "ceiling" | "unnecessary" | "half_up" | "half_even";
    class RelicExperienceBottleItem extends it.hurts.sskirillss.relics.items.ItemBase {
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
    type RelicExperienceBottleItem_ = RelicExperienceBottleItem;
    interface Shape {
        abstract contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract getPathIterator(arg0: Internal.AffineTransform_, arg1: number): Internal.PathIterator;
        abstract contains(arg0: number, arg1: number): boolean;
        abstract intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract getBounds(): Internal.Rectangle;
        abstract getPathIterator(arg0: Internal.AffineTransform_): Internal.PathIterator;
        abstract intersects(arg0: Internal.Rectangle2D_): boolean;
        abstract getBounds2D(): Internal.Rectangle2D;
        abstract contains(arg0: Internal.Rectangle2D_): boolean;
        abstract contains(arg0: Internal.Point2D_): boolean;
        get bounds(): Internal.Rectangle
        get bounds2D(): Internal.Rectangle2D
    }
    type Shape_ = Shape;
    class GantryShaftBlock$Part extends Internal.Enum<Internal.GantryShaftBlock$Part> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.GantryShaftBlock$Part;
        static values(): Internal.GantryShaftBlock$Part[];
        get serializedName(): string
        static readonly END: Internal.GantryShaftBlock$Part;
        static readonly MIDDLE: Internal.GantryShaftBlock$Part;
        static readonly SINGLE: Internal.GantryShaftBlock$Part;
        static readonly START: Internal.GantryShaftBlock$Part;
    }
    type GantryShaftBlock$Part_ = "start" | "single" | "middle" | "end" | GantryShaftBlock$Part;
    class BambooMatCarpetBlock extends Internal.BambooMatBlock {
        constructor(arg0: string, arg1: Internal.ZetaModule_)
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
    }
    type BambooMatCarpetBlock_ = BambooMatCarpetBlock;
    class MultiBlockContainerBlockItem extends Internal.BlockItem {
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
    type MultiBlockContainerBlockItem_ = MultiBlockContainerBlockItem;
    class DarkOakTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        static readonly CODEC: Internal.Codec<Internal.DarkOakTrunkPlacer>;
    }
    type DarkOakTrunkPlacer_ = DarkOakTrunkPlacer;
    class RecipeKey <T> {
        constructor(component: Internal.RecipeComponent_<T>, name: string)
        optional(value: T): this;
        preferred(name: string): this;
        defaultOptional(): this;
        optional(): boolean;
        optional(value: Internal.RecipeOptional_<T>): this;
        alt(...names: string[]): this;
        includeInAutoConstructors(): boolean;
        alt(name: string): this;
        exclude(): this;
        alwaysWrite(): this;
        allowEmpty(): this;
        noBuilders(): this;
        readonly name: string;
        excluded: boolean;
        preferred: string;
        alwaysWrite: boolean;
        optional: Internal.RecipeOptional<T>;
        readonly names: Internal.Set<string>;
        allowEmpty: boolean;
        readonly component: Internal.RecipeComponent<T>;
        noBuilders: boolean;
    }
    type RecipeKey_<T> = RecipeKey<T>;
    interface RandomSource {
        create(arg0: number): this;
        create(): this;
        abstract fork(): this;
        abstract nextBoolean(): boolean;
        abstract nextLong(): number;
        abstract setSeed(arg0: number): void;
        abstract nextDouble(): number;
        nextInt(arg0: number, arg1: number): number;
        abstract nextGaussian(): number;
        createNewThreadLocalInstance(): this;
        abstract forkPositional(): Internal.PositionalRandomFactory;
        consumeCount(arg0: number): void;
        triangle(arg0: number, arg1: number): number;
        abstract nextInt(arg0: number): number;
        abstract nextFloat(): number;
        /**
         * @deprecated
        */
        createThreadSafe(): this;
        abstract nextInt(): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        set seed(arg0: number)
        /**
         * @deprecated
        */
        readonly GAUSSIAN_SPREAD_FACTOR: 2.297;
    }
    type RandomSource_ = RandomSource;
    interface IStorageMounts {
        abstract mount(arg0: Internal.MEStorage_, arg1: number): void;
        mount(arg0: Internal.MEStorage_): void;
        (arg0: Internal.MEStorage, arg1: number): void;
        readonly DEFAULT_PRIORITY: 0;
    }
    type IStorageMounts_ = IStorageMounts;
    abstract class CopycatBlock extends Internal.Block implements com.simibubi.create.content.equipment.wrench.IWrenchable, Internal.IBE<Internal.CopycatBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        shouldFaceAlwaysRender(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        abstract canConnectTexturesToward(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.CopycatBlockEntity>;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static getMaterial(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.CopycatBlockEntity, InteractionResult>): InteractionResult;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getBlockEntityType(): Internal.BlockEntityType<Internal.CopycatBlockEntity>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        canFaceBeOccluded(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        isIgnoredConnectivitySide(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BlockState_, arg2: Internal.Direction_, arg3: BlockPos_, arg4: BlockPos_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isAcceptedRegardless(arg0: Internal.BlockState_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.CopycatBlockEntity>): void;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        getBlockEntityClass(): typeof Internal.CopycatBlockEntity;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        prepareMaterial(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_, arg6: Internal.BlockState_): Internal.BlockState;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.CopycatBlockEntity;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        static wrappedColor(): Internal.BlockColor;
        getAcceptedBlockState(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.Direction_): Internal.BlockState;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.CopycatBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityClass(): typeof Internal.CopycatBlockEntity
        get mod(): string
    }
    type CopycatBlock_ = CopycatBlock;
    class AsyncLoggerConfig$Builder <B extends Internal.AsyncLoggerConfig$Builder<B>> extends Internal.LoggerConfig$Builder<B> {
        constructor()
        isValid(): boolean;
        getErrorPrefix(): string;
        get valid(): boolean
        get errorPrefix(): string
    }
    type AsyncLoggerConfig$Builder_<B extends Internal.AsyncLoggerConfig$Builder<B>> = AsyncLoggerConfig$Builder<B>;
    interface CraftingContainer extends net.minecraft.world.Container, Internal.StackedContentsCompatible, Internal.CraftingContainerKJS {
        stopOpen(arg0: Internal.Player_): void;
        count(ingredient: Internal.Ingredient_): number;
        tryClear(arg0: any): void;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        abstract isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        abstract getItems(): Internal.List<Internal.ItemStack>;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        setChanged(): void;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        abstract getContainerSize(): number;
        getStackInSlot(slot: number): Internal.ItemStack;
        abstract getHeight(): number;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        kjs$self(): net.minecraft.world.Container;
        getMenu(): Internal.AbstractContainerMenu;
        abstract getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        abstract fillStackedContents(arg0: Internal.StackedContents_): void;
        abstract removeItemNoUpdate(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract stillValid(arg0: Internal.Player_): boolean;
        isMutable(): boolean;
        clear(): void;
        abstract getItem(arg0: number): Internal.ItemStack;
        find(ingredient: Internal.Ingredient_): number;
        abstract clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        get empty(): boolean
        get items(): Internal.List<Internal.ItemStack>
        get slots(): number
        get containerSize(): number
        get height(): number
        get menu(): Internal.AbstractContainerMenu
        get width(): number
        get maxStackSize(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type CraftingContainer_ = CraftingContainer;
    interface AbuseReportSender {
        abstract send(arg0: Internal.UUID_, arg1: Internal.AbuseReport_): Internal.CompletableFuture<com.mojang.datafixers.util.Unit>;
        create(arg0: Internal.ReportEnvironment_, arg1: Internal.UserApiService_): this;
        reportLimits(): Internal.AbuseReportLimits;
        abstract isEnabled(): boolean;
        get enabled(): boolean
    }
    type AbuseReportSender_ = AbuseReportSender;
    class ServerStatusPing$ChannelData extends Internal.Record {
        constructor(res: ResourceLocation_, version: string, required: boolean)
        required(): boolean;
        version(): string;
        res(): ResourceLocation;
        static readonly CODEC: Internal.Codec<Internal.ServerStatusPing$ChannelData>;
    }
    type ServerStatusPing$ChannelData_ = ServerStatusPing$ChannelData;
    class MixedExclusionRecipe implements Internal.CraftingRecipe, Internal.IShapedRecipe<Internal.CraftingContainer> {
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.ItemStack_, arg3: Internal.TagKey_<Internal.Item>, arg4: Internal.ItemStack_)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        static forFurnace(arg0: string, arg1: ResourceLocation_): Internal.MixedExclusionRecipe;
        getId(): ResourceLocation;
        static forChest(arg0: string, arg1: ResourceLocation_, arg2: boolean): Internal.MixedExclusionRecipe;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        getRecipeWidth(): number;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getRecipeHeight(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get recipeWidth(): number
        get type(): ResourceLocation
        set group(group: string)
        get recipeHeight(): number
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        static readonly SERIALIZER: Internal.MixedExclusionRecipe$Serializer;
    }
    type MixedExclusionRecipe_ = MixedExclusionRecipe;
    class RenderStateShard$TextureStateShard extends Internal.RenderStateShard$EmptyTextureStateShard {
        constructor(arg0: ResourceLocation_, arg1: boolean, arg2: boolean)
        readonly texture: Internal.Optional<ResourceLocation>;
        blur: boolean;
        mipmap: boolean;
    }
    type RenderStateShard$TextureStateShard_ = RenderStateShard$TextureStateShard;
    interface CoreGeoBone {
        saveSnapshot(): Internal.BoneSnapshot;
        abstract setHidden(arg0: boolean): void;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        abstract setPivotY(arg0: number): void;
        abstract getPivotY(): number;
        abstract setRotZ(arg0: number): void;
        abstract setPivotZ(arg0: number): void;
        abstract getPivotZ(): number;
        abstract setRotX(arg0: number): void;
        abstract setRotY(arg0: number): void;
        abstract setPivotX(arg0: number): void;
        abstract getPivotX(): number;
        abstract getRotZ(): number;
        abstract hasRotationChanged(): boolean;
        abstract getRotX(): number;
        abstract getRotY(): number;
        abstract getName(): string;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        abstract setPosX(arg0: number): void;
        abstract resetStateChanges(): void;
        abstract setScaleX(arg0: number): void;
        abstract setScaleZ(arg0: number): void;
        abstract setScaleY(arg0: number): void;
        abstract getInitialSnapshot(): Internal.BoneSnapshot;
        abstract hasPositionChanged(): boolean;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        abstract setChildrenHidden(arg0: boolean): void;
        abstract isHidden(): boolean;
        abstract setPosY(arg0: number): void;
        abstract getParent(): this;
        abstract setPosZ(arg0: number): void;
        abstract getPosX(): number;
        abstract getPosY(): number;
        abstract getPosZ(): number;
        abstract markPositionAsChanged(): void;
        abstract getChildBones(): Internal.List<Internal.CoreGeoBone>;
        abstract markRotationAsChanged(): void;
        abstract hasScaleChanged(): boolean;
        abstract isHidingChildren(): boolean;
        abstract saveInitialSnapshot(): void;
        abstract markScaleAsChanged(): void;
        abstract getScaleY(): number;
        abstract getScaleZ(): number;
        abstract getScaleX(): number;
        set hidden(arg0: boolean)
        set pivotY(arg0: number)
        get pivotY(): number
        set rotZ(arg0: number)
        set pivotZ(arg0: number)
        get pivotZ(): number
        set rotX(arg0: number)
        set rotY(arg0: number)
        set pivotX(arg0: number)
        get pivotX(): number
        get rotZ(): number
        get rotX(): number
        get rotY(): number
        get name(): string
        set posX(arg0: number)
        set scaleX(arg0: number)
        set scaleZ(arg0: number)
        set scaleY(arg0: number)
        get initialSnapshot(): Internal.BoneSnapshot
        set childrenHidden(arg0: boolean)
        get hidden(): boolean
        set posY(arg0: number)
        get parent(): Internal.CoreGeoBone
        set posZ(arg0: number)
        get posX(): number
        get posY(): number
        get posZ(): number
        get childBones(): Internal.List<Internal.CoreGeoBone>
        get hidingChildren(): boolean
        get scaleY(): number
        get scaleZ(): number
        get scaleX(): number
    }
    type CoreGeoBone_ = CoreGeoBone;
    class ZetaArrowItem$Impl extends Internal.ZetaArrowItem {
        constructor(arg0: string, arg1: Internal.ZetaModule_, arg2: any_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        static isEnabled(arg0: Internal.Item_): boolean;
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
        static isEnabled(arg0: Internal.Block_): boolean;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        setCondition(arg0: Internal.BooleanSupplier_): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>): Internal.Item;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        isEnabled(): boolean;
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
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.ItemLike_, arg2: boolean): Internal.Item;
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
        get item(): Internal.Item
        set armorKnockbackResistance(knockbackResistance: number)
        set condition(arg0: Internal.BooleanSupplier_)
        set creativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>)
        get enabled(): boolean
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type ZetaArrowItem$Impl_ = ZetaArrowItem$Impl;
    interface MenuType$MenuSupplier <T extends Internal.AbstractContainerMenu> {
        abstract create(arg0: number, arg1: Internal.Inventory_): T;
        (arg0: number, arg1: Internal.Inventory): T;
    }
    type MenuType$MenuSupplier_<T extends Internal.AbstractContainerMenu> = MenuType$MenuSupplier<T>;
    interface CauldronInteraction {
        bootStrap(): void;
        fillBucket(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.ItemStack_, arg6: Internal.ItemStack_, arg7: Internal.Predicate_<Internal.BlockState>, arg8: Internal.SoundEvent_): InteractionResult;
        newInteractionMap(): Internal.Object2ObjectOpenHashMap<Internal.Item, Internal.CauldronInteraction>;
        addDefaultInteractions(arg0: Internal.Map_<Internal.Item, Internal.CauldronInteraction>): void;
        emptyBucket(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: Internal.ItemStack_, arg5: Internal.BlockState_, arg6: Internal.SoundEvent_): InteractionResult;
        abstract interact(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.ItemStack_): InteractionResult;
        (arg0: Internal.BlockState, arg1: Internal.Level, arg2: BlockPos, arg3: Internal.Player, arg4: Internal.InteractionHand, arg5: Internal.ItemStack): InteractionResult_;
        readonly FILL_LAVA: Internal.CauldronInteraction;
        readonly BANNER: Internal.CauldronInteraction;
        readonly EMPTY: {[key: Internal.BucketItem]: any, [key: Internal.SolidBucketItem]: any, [key: Internal.PotionItem]: any, [key: Internal.BucketItem]: any};
        readonly SHULKER_BOX: Internal.CauldronInteraction;
        readonly LAVA: {[key: Internal.BucketItem]: any, [key: Internal.BucketItem]: any, [key: Internal.SolidBucketItem]: any, [key: Internal.BucketItem]: any};
        readonly FILL_WATER: Internal.CauldronInteraction;
        readonly POWDER_SNOW: {[key: Internal.BucketItem]: any, [key: Internal.BucketItem]: any, [key: Internal.SolidBucketItem]: any, [key: Internal.BucketItem]: any};
        readonly FILL_POWDER_SNOW: Internal.CauldronInteraction;
        readonly DYED_ITEM: Internal.CauldronInteraction;
        readonly WATER: {[key: Internal.HatItemDyeable]: any, [key: Internal.FlagItem]: any, [key: Internal.FlagItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.BackpackItem]: any, [key: Internal.ItemFrameItem]: any, [key: Internal.BannerItem]: any, [key: Internal.BackpackItem]: any, [key: Internal.FlagItem]: any, [key: Internal.PortableCellItem]: any, [key: Internal.BackpackItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.BackpackItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BannerItem]: any, [key: Internal.MemoryCardItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.PortableCellItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.BannerItem]: any, [key: Internal.FlagItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.PortableCellItem]: any, [key: Internal.PortableCellItem]: any, [key: Internal.BannerItem]: any, [key: Internal.BannerItem]: any, [key: Internal.PortableCellItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.ForgeParagliderItem]: any, [key: Internal.BannerItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PortableCellItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.BlockItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.FlagItem]: any, [key: Internal.BackpackItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BannerItem]: any, [key: org.violetmoon.quark.addons.oddities.item.BackpackItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.QuiverItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.BannerItem]: any, [key: Internal.BucketItem]: any, [key: Internal.ItemFrameItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PortableCellItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BucketItem]: any, [key: Internal.BackpackItem]: any, [key: Internal.BannerItem]: any, [key: Internal.ForgeParagliderItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.BlockItem]: any, [key: Internal.PortableCellItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.FlagItem]: any, [key: Internal.SolidBucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.DyeableHorseArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.PotionItem]: any, [key: Internal.BannerItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MapItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.BannerItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.BucketItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.BannerItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BottleItem]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.HatItemDyeable]: any, [key: Internal.BannerItem]: any, [key: Internal.FlagItem]: any, [key: Internal.PortableCellItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.PortableCellItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.HatItemDyeable]: any};
    }
    type CauldronInteraction_ = CauldronInteraction;
    abstract class BlockEntityInstance <T extends Internal.BlockEntity> extends Internal.AbstractInstance {
        constructor(arg0: Internal.MaterialManager_, arg1: T)
        onLightPacket(arg0: number, arg1: number): void;
        getInstancePosition(): BlockPos;
        get instancePosition(): BlockPos
    }
    type BlockEntityInstance_<T extends Internal.BlockEntity> = BlockEntityInstance<T>;
    class CarpetStairBlock extends Internal.ModStairBlock implements Internal.EntityBlock, Internal.IRecolorable {
        constructor(block: Internal.Block_)
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
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(pPos: BlockPos_, pState: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        tryRecolor(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, dyeColor: Internal.DyeColor_): boolean;
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
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SOLID: Internal.BooleanProperty;
        static readonly LIGHT_LEVEL: Internal.IntegerProperty;
    }
    type CarpetStairBlock_ = CarpetStairBlock;
    class BlazeStoveBlockEntity extends Internal.BlazeBurnerBlockEntity implements Internal.IPartialSafeNBT, Internal.MenuProvider, Internal.IHaveGoggleInformation {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getDisplayName(): net.minecraft.network.chat.Component;
        addSmokeAtItem(arg0: number, arg1: number): void;
        requestModelDataUpdate(): void;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        getHeadAngle(): Internal.LerpedFloat;
        dropAll(): void;
        tryAddIngredient(arg0: Internal.ItemStack_, arg1: boolean, arg2: boolean): boolean;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        tryUpdateFuel(arg0: Internal.ItemStack_, arg1: boolean, arg2: boolean): boolean;
        getNextEmptySlot(): number;
        applyCreativeFuel(): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        setGuide(arg0: Internal.ItemStack_): void;
        getBlazeStatusCode(): number;
        deserializeNBT(arg0: Internal.Tag_): void;
        getHeadAnimation(): Internal.LerpedFloat;
        getGuide(): Internal.ItemStack;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        findRecipe(arg0: net.minecraft.world.Container_, arg1: number): Internal.Optional<Internal.CampfireCookingRecipe>;
        getInventory(): Internal.ItemStackHandler;
        stillValid(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        addToGoggleTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean): boolean;
        isBlockedAbove(): boolean;
        get displayName(): net.minecraft.network.chat.Component
        get headAngle(): Internal.LerpedFloat
        get nextEmptySlot(): number
        set guide(arg0: Internal.ItemStack_)
        get blazeStatusCode(): number
        get headAnimation(): Internal.LerpedFloat
        get guide(): Internal.ItemStack
        get inventory(): Internal.ItemStackHandler
        get modelData(): Internal.ModelData
        get blockedAbove(): boolean
        static readonly ITEM_OFFSET_WE: Internal.Vec2[];
        static readonly ITEM_OFFSET_NS: Internal.Vec2[];
    }
    type BlazeStoveBlockEntity_ = BlazeStoveBlockEntity;
    class BrassDiodeBlock extends Internal.AbstractDiodeBlock implements Internal.IBE<Internal.BrassDiodeBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.BrassDiodeBlockEntity>;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.BrassDiodeBlockEntity>): void;
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
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
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BrassDiodeBlockEntity;
        getBlockEntityClass(): typeof Internal.BrassDiodeBlockEntity;
        toggle(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_, arg4: Internal.InteractionHand_): InteractionResult;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.BrassDiodeBlockEntity, InteractionResult>): InteractionResult;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.BrassDiodeBlockEntity>;
        get blockEntityType(): Internal.BlockEntityType<Internal.BrassDiodeBlockEntity>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityClass(): typeof Internal.BrassDiodeBlockEntity
        static readonly POWERING: Internal.BooleanProperty;
        static readonly INVERTED: Internal.BooleanProperty;
    }
    type BrassDiodeBlock_ = BrassDiodeBlock;
    interface BlockEntityType$BlockEntitySupplier <T extends Internal.BlockEntity> {
        abstract create(arg0: BlockPos_, arg1: Internal.BlockState_): T;
        (arg0: BlockPos, arg1: Internal.BlockState): T;
    }
    type BlockEntityType$BlockEntitySupplier_<T extends Internal.BlockEntity> = BlockEntityType$BlockEntitySupplier<T>;
    class PlayerInteractEvent$LeftClickBlock$Action extends Internal.Enum<Internal.PlayerInteractEvent$LeftClickBlock$Action> {
        static convert(arg0: Internal.ServerboundPlayerActionPacket$Action_): Internal.PlayerInteractEvent$LeftClickBlock$Action;
        static values(): Internal.PlayerInteractEvent$LeftClickBlock$Action[];
        static valueOf(arg0: string): Internal.PlayerInteractEvent$LeftClickBlock$Action;
        static readonly START: Internal.PlayerInteractEvent$LeftClickBlock$Action;
        static readonly ABORT: Internal.PlayerInteractEvent$LeftClickBlock$Action;
        static readonly CLIENT_HOLD: Internal.PlayerInteractEvent$LeftClickBlock$Action;
        static readonly STOP: Internal.PlayerInteractEvent$LeftClickBlock$Action;
    }
    type PlayerInteractEvent$LeftClickBlock$Action_ = "stop" | PlayerInteractEvent$LeftClickBlock$Action | "client_hold" | "start" | "abort";
    class TrackSwitchTileEntity extends Internal.SmartBlockEntity implements Internal.ITransformableBlockEntity, Internal.IHaveGoggleInformation {
        constructor(type: Internal.BlockEntityType_<any>, pos: BlockPos_, state: Internal.BlockState_)
        isReverseRight(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getOverlayModel(): Internal.PartialModel;
        requestModelDataUpdate(): void;
        isNormal(): boolean;
        isAutomatic(): boolean;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getTargetAnalogOutput(): number;
        isLocked(): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        transform(transform: Internal.StructureTransform_): void;
        hasExit(state: Internal.TrackSwitchBlock$SwitchState_): boolean;
        getState(): Internal.TrackSwitchBlock$SwitchState;
        clientLazyTick(): void;
        getModelData(): Internal.ModelData;
        isReverseLeft(): boolean;
        addToGoggleTooltip(tooltip: Internal.List_<net.minecraft.network.chat.Component>, isPlayerSneaking: boolean): boolean;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getSwitch(): Internal.TrackSwitch;
        setStatePonder(state: Internal.TrackSwitchBlock$SwitchState_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get reverseRight(): boolean
        get overlayModel(): Internal.PartialModel
        get normal(): boolean
        get automatic(): boolean
        get targetAnalogOutput(): number
        get locked(): boolean
        get state(): Internal.TrackSwitchBlock$SwitchState
        get modelData(): Internal.ModelData
        get reverseLeft(): boolean
        get "switch"(): Internal.TrackSwitch
        set statePonder(state: Internal.TrackSwitchBlock$SwitchState_)
        edgePoint: Internal.TrackTargetingBehaviour<Internal.TrackSwitch>;
        ponderData: Internal.TrackSwitchTileEntity$PonderData;
    }
    type TrackSwitchTileEntity_ = TrackSwitchTileEntity;
    class FenceBlockBuilder extends Internal.MultipartShapedBlockBuilder {
        constructor(i: ResourceLocation_)
        createObject(): any;
    }
    type FenceBlockBuilder_ = FenceBlockBuilder;
    interface AccessorSmithingTransformRecipe {
        abstract getTemplate(): Internal.Ingredient;
        abstract getBase(): Internal.Ingredient;
        abstract getAddition(): Internal.Ingredient;
        get template(): Internal.Ingredient
        get base(): Internal.Ingredient
        get addition(): Internal.Ingredient
    }
    type AccessorSmithingTransformRecipe_ = AccessorSmithingTransformRecipe;
    abstract class TrackSwitchBlock extends Internal.HorizontalDirectionalBlock implements com.simibubi.create.content.equipment.wrench.IWrenchable, Internal.IBE<Internal.TrackSwitchTileEntity> {
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.TrackSwitchTileEntity;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static automatic(properties: Internal.BlockBehaviour$Properties_): Internal.TrackSwitchBlock;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        static manual(properties: Internal.BlockBehaviour$Properties_): Internal.TrackSwitchBlock;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.TrackSwitchTileEntity>;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.TrackSwitchTileEntity>;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntityClass(): typeof Internal.TrackSwitchTileEntity;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
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
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.TrackSwitchTileEntity>): void;
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.TrackSwitchTileEntity, InteractionResult>): InteractionResult;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.TrackSwitchTileEntity>
        get blockEntityClass(): typeof Internal.TrackSwitchTileEntity
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly LOCKED: Internal.BooleanProperty;
    }
    type TrackSwitchBlock_ = TrackSwitchBlock;
    interface InternalInventory extends Internal.ItemTransfer, Internal.Iterable<Internal.ItemStack> {
        simulateRemove(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        addItems(arg0: Internal.ItemStack_, arg1: boolean): Internal.ItemStack;
        toContainer(): net.minecraft.world.Container;
        getSubInventory(arg0: number, arg1: number): this;
        isEmpty(): boolean;
        removeItems(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        sendChangeNotification(arg0: number): void;
        abstract getStackInSlot(arg0: number): Internal.ItemStack;
        removeSimilarItems(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.FuzzyMode_, arg3: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        wrapExternal(arg0: Internal.BlockEntity_, arg1: Internal.Direction_): Internal.ItemTransfer;
        empty(): this;
        getSlotInv(arg0: number): this;
        mayAllowInsertion(): boolean;
        addItems(arg0: Internal.ItemStack_): Internal.ItemStack;
        getSlotLimit(arg0: number): number;
        iterator(): Internal.Iterator<Internal.ItemStack>;
        toItemHandler(): Internal.IItemHandler;
        simulateSimilarRemove(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.FuzzyMode_, arg3: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        spliterator(): Internal.Spliterator<Internal.ItemStack>;
        simulateAdd(arg0: Internal.ItemStack_): Internal.ItemStack;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        abstract size(): number;
        forEach(arg0: Internal.Consumer_<Internal.ItemStack>): void;
        abstract setItemDirect(arg0: number, arg1: Internal.ItemStack_): void;
        clear(): void;
        wrapExternal(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_): Internal.ItemTransfer;
        getRedstoneSignal(): number;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        get empty(): boolean
        get redstoneSignal(): number
    }
    type InternalInventory_ = InternalInventory;
    interface AgeableMobAccessor {
        abstract biomancy$getForcedAge(): number;
        abstract biomancy$setForcedAge(arg0: number): void;
    }
    type AgeableMobAccessor_ = AgeableMobAccessor;
    class StringComponent$1 implements Internal.RecipeComponent<string> {
        checkEmpty(key: Internal.RecipeKey_<string>, value: string): string;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<string, O>;
        orSelf(): Internal.RecipeComponent<string>;
        isOutput(recipe: Internal.RecipeJS_, value: string, match: Internal.ReplacementMatch_): boolean;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<string>, json: Internal.JsonObject_): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<string>;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<string>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, string>>;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<string>, map: Internal.Map_<any, any>): void;
        replaceOutput(recipe: Internal.RecipeJS_, original: string, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): string;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<string>, json: Internal.JsonObject_): void;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        checkValueHasChanged(oldValue: string, newValue: string): boolean;
        write(recipe: Internal.RecipeJS_, value: string): Internal.JsonElement;
        static builder(): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<string>;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        replaceInput(recipe: Internal.RecipeJS_, original: string, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): string;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        isInput(recipe: Internal.RecipeJS_, value: string, match: Internal.ReplacementMatch_): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<string, O>;
        asArray(): Internal.ArrayRecipeComponent<string>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<string>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, string>>;
        key(name: string): Internal.RecipeKey<string>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<string>;
    }
    type StringComponent$1_ = StringComponent$1;
    interface Iterator <E> {
        remove(): void;
        forEachRemaining(arg0: Internal.Consumer_<E>): void;
        abstract next(): E;
        abstract hasNext(): boolean;
    }
    type Iterator_<E> = Iterator<E>;
    class ClientboundLightUpdatePacketData {
        constructor(arg0: Internal.ChunkPos_, arg1: Internal.LevelLightEngine_, arg2: Internal.BitSet_, arg3: Internal.BitSet_)
        constructor(arg0: Internal.FriendlyByteBuf_, arg1: number, arg2: number)
        getEmptyBlockYMask(): Internal.BitSet;
        getEmptySkyYMask(): Internal.BitSet;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getBlockUpdates(): Internal.List<number[]>;
        getBlockYMask(): Internal.BitSet;
        getSkyUpdates(): Internal.List<number[]>;
        getSkyYMask(): Internal.BitSet;
        get emptyBlockYMask(): Internal.BitSet
        get emptySkyYMask(): Internal.BitSet
        get blockUpdates(): Internal.List<number[]>
        get blockYMask(): Internal.BitSet
        get skyUpdates(): Internal.List<number[]>
        get skyYMask(): Internal.BitSet
    }
    type ClientboundLightUpdatePacketData_ = ClientboundLightUpdatePacketData;
    /**
     * Invoked when a player right clicks with an item **without targeting anything**.
     * 
     * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
    */
    class ItemClickedEventJS extends Internal.PlayerEventJS {
        constructor(player: Internal.Player_, hand: Internal.InteractionHand_, item: Internal.ItemStack_)
        /**
         * The player that clicked with the item.
        */
        getEntity(): Internal.LivingEntity;
        /**
         * The ray trace result of the click.
        */
        getTarget(): Internal.RayTraceResultJS;
        /**
         * The item that was clicked with.
        */
        getItem(): Internal.ItemStack;
        /**
         * The hand that the item was clicked with.
        */
        getHand(): Internal.InteractionHand;
        /**
         * The player that clicked with the item.
        */
        get entity(): Internal.LivingEntity
        /**
         * The ray trace result of the click.
        */
        get target(): Internal.RayTraceResultJS
        /**
         * The item that was clicked with.
        */
        get item(): Internal.ItemStack
        /**
         * The hand that the item was clicked with.
        */
        get hand(): Internal.InteractionHand
    }
    type ItemClickedEventJS_ = ItemClickedEventJS;
    class LoggedChatEvent$Type extends Internal.Enum<Internal.LoggedChatEvent$Type> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.LoggedChatEvent$Type[];
        static valueOf(arg0: string): Internal.LoggedChatEvent$Type;
        get serializedName(): string
        static readonly SYSTEM: Internal.LoggedChatEvent$Type;
        static readonly PLAYER: Internal.LoggedChatEvent$Type;
    }
    type LoggedChatEvent$Type_ = LoggedChatEvent$Type | "player" | "system";
    class CellWorkbenchBlock extends Internal.AEBaseEntityBlock<any> {
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
    type CellWorkbenchBlock_ = CellWorkbenchBlock;
    class ClientboundSetObjectivePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Objective_, arg1: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getMethod(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getRenderType(): Internal.ObjectiveCriteria$RenderType;
        isSkippable(): boolean;
        getObjectiveName(): string;
        get displayName(): net.minecraft.network.chat.Component
        get method(): number
        get renderType(): Internal.ObjectiveCriteria$RenderType
        get skippable(): boolean
        get objectiveName(): string
        static readonly METHOD_ADD: 0;
        static readonly METHOD_CHANGE: 2;
        static readonly METHOD_REMOVE: 1;
    }
    type ClientboundSetObjectivePacket_ = ClientboundSetObjectivePacket;
    abstract class AbstractArrow extends Internal.Projectile implements Internal.AccessorAbstractArrow {
        getDistance(pos: BlockPos_): number;
        setEnchantmentEffectsFromEntity(arg0: Internal.LivingEntity_, arg1: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isOnScoreboardTeam(teamId: string): boolean;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        handler$zkk000$onPlayerTouch(player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        setNoPhysics(arg0: boolean): void;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        getDisplayName(): net.minecraft.network.chat.Component;
        isCritArrow(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setCritArrow(arg0: boolean): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        getPierceLevel(): number;
        shouldRiderSit(): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        setBaseDamage(arg0: number): void;
        quark$getPickupItem(): Internal.ItemStack;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        isFrame(): boolean;
        playSound(id: Internal.SoundEvent_): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        setRotation(yaw: number, pitch: number): void;
        shouldFall(): boolean;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setShotFromCrossbow(arg0: boolean): void;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        startFalling(): void;
        getBaseDamage(): number;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): net.minecraft.network.chat.Component;
        getPassengers(): Internal.EntityArrayList;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setSoundEvent(arg0: Internal.SoundEvent_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        shotFromCrossbow(): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        isNoPhysics(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getMotionZ(): number;
        getKnockback(): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getProfile(): Internal.GameProfile;
        getClassification(arg0: boolean): Internal.MobCategory;
        setKnockback(arg0: number): void;
        runCommand(command: string): number;
        setPierceLevel(arg0: number): void;
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        set noPhysics(arg0: boolean)
        get displayName(): net.minecraft.network.chat.Component
        get critArrow(): boolean
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        set critArrow(arg0: boolean)
        get teamId(): string
        get facing(): Internal.Direction
        get pierceLevel(): number
        get motionX(): number
        get waterCreature(): boolean
        set baseDamage(arg0: number)
        get item(): Internal.ItemStack
        set x(x: number)
        get frame(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        set shotFromCrossbow(arg0: boolean)
        get block(): Internal.BlockContainerJS
        get baseDamage(): number
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        set soundEvent(arg0: Internal.SoundEvent_)
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get noPhysics(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        get knockback(): number
        set z(z: number)
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get profile(): Internal.GameProfile
        set knockback(arg0: number)
        set pierceLevel(arg0: number)
        static readonly FLAG_CRIT: 1;
        knockback: number;
        piercingIgnoreEntityIds: Internal.IntOpenHashSet;
        static readonly FLAG_NOPHYSICS: 2;
        static readonly FLAG_CROSSBOW: 4;
        static readonly PIERCE_LEVEL: Internal.EntityDataAccessor<number>;
        pickup: Internal.AbstractArrow$Pickup;
        static readonly ID_FLAGS: Internal.EntityDataAccessor<number>;
        piercedAndKilledEntities: Internal.List<Internal.Entity>;
        lastState: Internal.BlockState;
        baseDamage: number;
        soundEvent: Internal.SoundEvent;
        life: number;
        inGround: boolean;
        inGroundTime: number;
        static readonly ARROW_BASE_DAMAGE: 2.0;
        shakeTime: number;
    }
    type AbstractArrow_ = AbstractArrow;
    class SmokerMenu extends Internal.AbstractFurnaceMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: net.minecraft.world.Container_, arg3: Internal.ContainerData_)
        constructor(arg0: number, arg1: Internal.Inventory_)
    }
    type SmokerMenu_ = SmokerMenu;
    interface PoolChunkListMetric extends Internal.Iterable<Internal.PoolChunkMetric> {
        abstract maxUsage(): number;
        forEach(arg0: Internal.Consumer_<Internal.PoolChunkMetric>): void;
        abstract minUsage(): number;
        abstract iterator(): Internal.Iterator<Internal.PoolChunkMetric>;
        spliterator(): Internal.Spliterator<Internal.PoolChunkMetric>;
    }
    type PoolChunkListMetric_ = PoolChunkListMetric;
    class HoglinSpecificSensor extends Internal.Sensor<Internal.Hoglin> {
        constructor()
    }
    type HoglinSpecificSensor_ = HoglinSpecificSensor;
    abstract class DescriptionItem extends Internal.Item {
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
    type DescriptionItem_ = DescriptionItem;
}
declare namespace com.github.elenterius.biomancy.util.serialization {
    interface NBTSerializable <T> {
        abstract getNBTSerializer(): Internal.NBTSerializer<T>;
        get NBTSerializer(): Internal.NBTSerializer<T>
        (): Internal.NBTSerializer_<T>;
    }
    type NBTSerializable_<T> = NBTSerializable<T>;
}
