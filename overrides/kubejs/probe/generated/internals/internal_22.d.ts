/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class GatherContextEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: boolean)
        isFirstLoad(): boolean;
        get firstLoad(): boolean
    }
    type GatherContextEvent_ = GatherContextEvent;
    interface Logger {
        abstract trace(arg0: string, ...arg1: any[]): void;
        abstract error(arg0: string): void;
        abstract warn(arg0: string, arg1: any, arg2: any): void;
        abstract isTraceEnabled(arg0: org.slf4j.Marker_): boolean;
        abstract info(arg0: string, arg1: Internal.Throwable_): void;
        abstract debug(arg0: string): void;
        abstract warn(arg0: org.slf4j.Marker_, arg1: string, arg2: any, arg3: any): void;
        abstract error(arg0: org.slf4j.Marker_, arg1: string): void;
        abstract trace(arg0: org.slf4j.Marker_, arg1: string, arg2: any): void;
        abstract error(arg0: string, ...arg1: any[]): void;
        abstract warn(arg0: string, arg1: any): void;
        abstract trace(arg0: org.slf4j.Marker_, arg1: string): void;
        abstract warn(arg0: org.slf4j.Marker_, arg1: string, ...arg2: any[]): void;
        abstract info(arg0: string): void;
        atTrace(): Internal.LoggingEventBuilder;
        isEnabledForLevel(arg0: org.slf4j.event.Level_): boolean;
        abstract debug(arg0: string, ...arg1: any[]): void;
        abstract debug(arg0: org.slf4j.Marker_, arg1: string): void;
        abstract info(arg0: org.slf4j.Marker_, arg1: string, ...arg2: any[]): void;
        abstract warn(arg0: org.slf4j.Marker_, arg1: string, arg2: Internal.Throwable_): void;
        abstract warn(arg0: string, arg1: Internal.Throwable_): void;
        atDebug(): Internal.LoggingEventBuilder;
        abstract info(arg0: string, arg1: any): void;
        abstract error(arg0: org.slf4j.Marker_, arg1: string, arg2: any): void;
        abstract isTraceEnabled(): boolean;
        abstract isWarnEnabled(arg0: org.slf4j.Marker_): boolean;
        abstract trace(arg0: string): void;
        abstract info(arg0: org.slf4j.Marker_, arg1: string): void;
        abstract debug(arg0: string, arg1: any, arg2: any): void;
        abstract info(arg0: org.slf4j.Marker_, arg1: string, arg2: any, arg3: any): void;
        abstract debug(arg0: org.slf4j.Marker_, arg1: string, arg2: any): void;
        abstract trace(arg0: string, arg1: any): void;
        abstract error(arg0: org.slf4j.Marker_, arg1: string, arg2: any, arg3: any): void;
        abstract trace(arg0: string, arg1: any, arg2: any): void;
        abstract debug(arg0: org.slf4j.Marker_, arg1: string, arg2: any, arg3: any): void;
        abstract isDebugEnabled(): boolean;
        atWarn(): Internal.LoggingEventBuilder;
        makeLoggingEventBuilder(arg0: org.slf4j.event.Level_): Internal.LoggingEventBuilder;
        abstract trace(arg0: org.slf4j.Marker_, arg1: string, arg2: any, arg3: any): void;
        abstract error(arg0: string, arg1: any): void;
        abstract info(arg0: org.slf4j.Marker_, arg1: string, arg2: Internal.Throwable_): void;
        abstract warn(arg0: string): void;
        abstract warn(arg0: string, ...arg1: any[]): void;
        abstract debug(arg0: org.slf4j.Marker_, arg1: string, arg2: Internal.Throwable_): void;
        abstract trace(arg0: org.slf4j.Marker_, arg1: string, ...arg2: any[]): void;
        abstract isErrorEnabled(): boolean;
        abstract warn(arg0: org.slf4j.Marker_, arg1: string): void;
        abstract warn(arg0: org.slf4j.Marker_, arg1: string, arg2: any): void;
        abstract isWarnEnabled(): boolean;
        abstract error(arg0: org.slf4j.Marker_, arg1: string, arg2: Internal.Throwable_): void;
        abstract error(arg0: string, arg1: any, arg2: any): void;
        abstract getName(): string;
        abstract trace(arg0: org.slf4j.Marker_, arg1: string, arg2: Internal.Throwable_): void;
        abstract debug(arg0: string, arg1: any): void;
        abstract isErrorEnabled(arg0: org.slf4j.Marker_): boolean;
        abstract info(arg0: org.slf4j.Marker_, arg1: string, arg2: any): void;
        abstract info(arg0: string, arg1: any, arg2: any): void;
        abstract isInfoEnabled(): boolean;
        atInfo(): Internal.LoggingEventBuilder;
        atError(): Internal.LoggingEventBuilder;
        abstract debug(arg0: string, arg1: Internal.Throwable_): void;
        abstract info(arg0: string, ...arg1: any[]): void;
        abstract error(arg0: org.slf4j.Marker_, arg1: string, ...arg2: any[]): void;
        abstract isDebugEnabled(arg0: org.slf4j.Marker_): boolean;
        abstract isInfoEnabled(arg0: org.slf4j.Marker_): boolean;
        abstract debug(arg0: org.slf4j.Marker_, arg1: string, ...arg2: any[]): void;
        abstract trace(arg0: string, arg1: Internal.Throwable_): void;
        abstract error(arg0: string, arg1: Internal.Throwable_): void;
        atLevel(arg0: org.slf4j.event.Level_): Internal.LoggingEventBuilder;
        get traceEnabled(): boolean
        get debugEnabled(): boolean
        get errorEnabled(): boolean
        get warnEnabled(): boolean
        get name(): string
        get infoEnabled(): boolean
        readonly ROOT_LOGGER_NAME: "ROOT";
    }
    type Logger_ = Logger;
    class ClientboundUpdateTagsPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Map_<Internal.ResourceKey<Internal.Registry<any>>, Internal.TagNetworkSerialization$NetworkPayload>)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getTags(): Internal.Map<Internal.ResourceKey<Internal.Registry<any>>, Internal.TagNetworkSerialization$NetworkPayload>;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get tags(): Internal.Map<Internal.ResourceKey<Internal.Registry<any>>, Internal.TagNetworkSerialization$NetworkPayload>
        get skippable(): boolean
    }
    type ClientboundUpdateTagsPacket_ = ClientboundUpdateTagsPacket;
    class TrackMaterial$TrackModelHolder extends Internal.Record {
        constructor(tie: Internal.PartialModel_, segment_left: Internal.PartialModel_, segment_right: Internal.PartialModel_)
        tie(): Internal.PartialModel;
        segment_right(): Internal.PartialModel;
        segment_left(): Internal.PartialModel;
    }
    type TrackMaterial$TrackModelHolder_ = TrackMaterial$TrackModelHolder;
    interface RecipeSerializer <T extends Internal.Recipe<any>> extends Internal.IForgeRecipeSerializer<T> {
        register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        abstract fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): T;
        abstract fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): T;
        abstract toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): T;
        readonly MAP_EXTENDING: Internal.RecipeSerializer<Internal.MapExtendingRecipe>;
        readonly ARMOR_DYE: Internal.RecipeSerializer<Internal.ArmorDyeRecipe>;
        readonly TIPPED_ARROW: Internal.RecipeSerializer<Internal.TippedArrowRecipe>;
        readonly SMELTING_RECIPE: Internal.RecipeSerializer<Internal.SmeltingRecipe>;
        readonly SUSPICIOUS_STEW: Internal.RecipeSerializer<Internal.SuspiciousStewRecipe>;
        readonly FIREWORK_STAR: Internal.RecipeSerializer<Internal.FireworkStarRecipe>;
        readonly SHAPELESS_RECIPE: Internal.ShapelessRecipe$Serializer;
        readonly BOOK_CLONING: Internal.RecipeSerializer<Internal.BookCloningRecipe>;
        readonly SHULKER_BOX_COLORING: Internal.RecipeSerializer<Internal.ShulkerBoxColoring>;
        readonly STONECUTTER: Internal.RecipeSerializer<Internal.StonecutterRecipe>;
        readonly FIREWORK_ROCKET: Internal.RecipeSerializer<Internal.FireworkRocketRecipe>;
        readonly FIREWORK_STAR_FADE: Internal.RecipeSerializer<Internal.FireworkStarFadeRecipe>;
        readonly SMITHING_TRANSFORM: Internal.SmithingTransformRecipe$Serializer;
        readonly MAP_CLONING: Internal.RecipeSerializer<Internal.MapCloningRecipe>;
        readonly DECORATED_POT_RECIPE: Internal.RecipeSerializer<Internal.DecoratedPotRecipe>;
        readonly SMITHING_TRIM: Internal.SmithingTrimRecipe$Serializer;
        readonly BLASTING_RECIPE: Internal.RecipeSerializer<Internal.BlastingRecipe>;
        readonly SMOKING_RECIPE: Internal.RecipeSerializer<Internal.SmokingRecipe>;
        readonly BANNER_DUPLICATE: Internal.RecipeSerializer<Internal.BannerDuplicateRecipe>;
        readonly SHIELD_DECORATION: Internal.RecipeSerializer<Internal.ShieldDecorationRecipe>;
        readonly REPAIR_ITEM: Internal.RecipeSerializer<Internal.RepairItemRecipe>;
        readonly CAMPFIRE_COOKING_RECIPE: Internal.RecipeSerializer<Internal.CampfireCookingRecipe>;
        readonly SHAPED_RECIPE: Internal.ShapedRecipe$Serializer;
    }
    type RecipeSerializer_<T extends Internal.Recipe<any>> = Special.RecipeSerializer | RecipeSerializer<T>;
    class Response {
        constructor()
        getError(): string;
        getErrorMessage(): string;
        getCause(): string;
        get error(): string
        get errorMessage(): string
        get cause(): string
    }
    type Response_ = Response;
    class WorldgenRandom extends Internal.LegacyRandomSource {
        constructor(arg0: Internal.RandomSource_)
        getCount(): number;
        static create(arg0: number): Internal.RandomSource;
        static create(): Internal.RandomSource;
        setLargeFeatureSeed(arg0: number, arg1: number, arg2: number): void;
        nextBoolean(): boolean;
        setLargeFeatureWithSalt(arg0: number, arg1: number, arg2: number, arg3: number): void;
        nextLong(): number;
        nextDouble(): number;
        nextInt(arg0: number, arg1: number): number;
        static createNewThreadLocalInstance(): Internal.RandomSource;
        consumeCount(arg0: number): void;
        setDecorationSeed(arg0: number, arg1: number, arg2: number): number;
        triangle(arg0: number, arg1: number): number;
        setFeatureSeed(arg0: number, arg1: number, arg2: number): void;
        nextInt(arg0: number): number;
        nextFloat(): number;
        static seedSlimeChunk(arg0: number, arg1: number, arg2: number, arg3: number): Internal.RandomSource;
        /**
         * @deprecated
        */
        static createThreadSafe(): Internal.RandomSource;
        nextInt(): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        get count(): number
    }
    type WorldgenRandom_ = WorldgenRandom;
    abstract class PartEntity <T extends Internal.Entity> extends Internal.Entity {
        constructor(arg0: T)
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
        getParent(): T;
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
        get parent(): T
    }
    type PartEntity_<T extends Internal.Entity> = PartEntity<T>;
    class RegisterColorHandlersEvent$Item extends Internal.RegisterColorHandlersEvent {
        constructor()
        constructor(arg0: Internal.ItemColors_, arg1: Internal.BlockColors_)
        getItemColors(): Internal.ItemColors;
        register(arg0: Internal.ItemColor_, ...arg1: Internal.ItemLike_[]): void;
        getBlockColors(): Internal.BlockColors;
        get itemColors(): Internal.ItemColors
        get blockColors(): Internal.BlockColors
    }
    type RegisterColorHandlersEvent$Item_ = RegisterColorHandlersEvent$Item;
    class AdvancementRewards$Builder {
        constructor()
        static loot(arg0: ResourceLocation_): Internal.AdvancementRewards$Builder;
        addExperience(arg0: number): this;
        static experience(arg0: number): Internal.AdvancementRewards$Builder;
        addLootTable(arg0: ResourceLocation_): this;
        build(): Internal.AdvancementRewards;
        static "function"(arg0: ResourceLocation_): Internal.AdvancementRewards$Builder;
        static recipe(arg0: ResourceLocation_): Internal.AdvancementRewards$Builder;
        addRecipe(arg0: ResourceLocation_): this;
        runs(arg0: ResourceLocation_): this;
    }
    type AdvancementRewards$Builder_ = AdvancementRewards$Builder;
    abstract class FeatureSize {
        constructor(arg0: Internal.OptionalInt_)
        minClippedHeight(): Internal.OptionalInt;
        abstract getSizeAtHeight(arg0: number, arg1: number): number;
        static readonly CODEC: Internal.Codec<Internal.FeatureSize>;
    }
    type FeatureSize_ = FeatureSize;
    class ChandelierBlock extends Internal.Block {
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
    type ChandelierBlock_ = ChandelierBlock;
    class AnvilBlock extends Internal.FallingBlock {
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
        static damage(arg0: Internal.BlockState_): Internal.BlockState;
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
    type AnvilBlock_ = AnvilBlock;
    class ImmutableMap$Builder <K, V> {
        constructor()
        put(arg0: K, arg1: V): this;
        buildOrThrow(): Internal.ImmutableMap<K, V>;
        putAll(arg0: Internal.Map_<K, V>): this;
        putAll(arg0: Internal.Iterable_<Internal.Map$Entry<K, V>>): this;
        buildKeepingLast(): Internal.ImmutableMap<K, V>;
        put(arg0: Internal.Map$Entry_<K, V>): this;
        orderEntriesByValue(arg0: Internal.Comparator_<V>): this;
        build(): Internal.ImmutableMap<K, V>;
    }
    type ImmutableMap$Builder_<K, V> = ImmutableMap$Builder<K, V>;
    abstract class MimicBlock extends Internal.Block {
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
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type MimicBlock_ = MimicBlock;
    interface ObjectListIterator <K> extends Internal.ObjectBidirectionalIterator<K>, Internal.ListIterator<K> {
        set(arg0: K): void;
        abstract nextIndex(): number;
        remove(): void;
        abstract hasPrevious(): boolean;
        skip(arg0: number): number;
        add(arg0: K): void;
        abstract next(): K;
        back(arg0: number): number;
        abstract hasNext(): boolean;
        forEachRemaining(arg0: Internal.Consumer_<K>): void;
        abstract previous(): K;
        abstract previousIndex(): number;
    }
    type ObjectListIterator_<K> = ObjectListIterator<K>;
    interface PlayerRideable {
    }
    type PlayerRideable_ = PlayerRideable;
    class ItemStack$TooltipPart extends Internal.Enum<Internal.ItemStack$TooltipPart> {
        static values(): Internal.ItemStack$TooltipPart[];
        getMask(): number;
        static valueOf(arg0: string): Internal.ItemStack$TooltipPart;
        get mask(): number
        static readonly ENCHANTMENTS: Internal.ItemStack$TooltipPart;
        static readonly CAN_PLACE: Internal.ItemStack$TooltipPart;
        static readonly UPGRADES: Internal.ItemStack$TooltipPart;
        static readonly CAN_DESTROY: Internal.ItemStack$TooltipPart;
        static readonly DYE: Internal.ItemStack$TooltipPart;
        static readonly MODIFIERS: Internal.ItemStack$TooltipPart;
        static readonly ADDITIONAL: Internal.ItemStack$TooltipPart;
        static readonly UNBREAKABLE: Internal.ItemStack$TooltipPart;
    }
    type ItemStack$TooltipPart_ = "modifiers" | "upgrades" | "enchantments" | "unbreakable" | "can_place" | "dye" | "can_destroy" | ItemStack$TooltipPart | "additional";
    class MinecraftProfileTexture {
        constructor(arg0: string, arg1: Internal.Map_<string, string>)
        getMetadata(arg0: string): string;
        getUrl(): string;
        getHash(): string;
        get url(): string
        get hash(): string
        static readonly PROFILE_TEXTURE_COUNT: 3;
    }
    type MinecraftProfileTexture_ = MinecraftProfileTexture;
    class NarratableEntry$NarrationPriority extends Internal.Enum<Internal.NarratableEntry$NarrationPriority> {
        static values(): Internal.NarratableEntry$NarrationPriority[];
        static valueOf(arg0: string): Internal.NarratableEntry$NarrationPriority;
        isTerminal(): boolean;
        get terminal(): boolean
        static readonly NONE: Internal.NarratableEntry$NarrationPriority;
        static readonly HOVERED: Internal.NarratableEntry$NarrationPriority;
        static readonly FOCUSED: Internal.NarratableEntry$NarrationPriority;
    }
    type NarratableEntry$NarrationPriority_ = "focused" | "hovered" | NarratableEntry$NarrationPriority | "none";
    class EndGatewayBlock extends Internal.BaseEntityBlock {
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
    type EndGatewayBlock_ = EndGatewayBlock;
    interface AccessorMobEffectInstance {
        abstract bookshelf$getHiddenEffect(): Internal.MobEffectInstance;
        abstract bookshelf$setHiddenEffect(arg0: Internal.MobEffectInstance_): void;
        abstract setDuration(arg0: number): void;
        abstract bookshelf$tickDownDuration(): number;
        set duration(arg0: number)
    }
    type AccessorMobEffectInstance_ = AccessorMobEffectInstance;
    class Services extends Internal.Record {
        constructor(arg0: Internal.MinecraftSessionService_, arg1: Internal.ServicesKeySet_, arg2: Internal.GameProfileRepository_, arg3: Internal.GameProfileCache_)
        static create(arg0: Internal.YggdrasilAuthenticationService_, arg1: Internal.File_): Internal.Services;
        servicesKeySet(): Internal.ServicesKeySet;
        sessionService(): Internal.MinecraftSessionService;
        profileCache(): Internal.GameProfileCache;
        profileRepository(): Internal.GameProfileRepository;
        profileKeySignatureValidator(): Internal.SignatureValidator;
    }
    type Services_ = Services;
    class InputConstants$Key implements Internal.AccessInputConstantsKey {
        getDisplayName(): Internal.Component;
        static controlling$getNAME_MAP_$md$366fca$0(): Internal.Map<any, any>;
        getName(): string;
        static controlling$getNAME_MAP(): Internal.Map<string, Internal.InputConstants$Key>;
        getType(): Internal.InputConstants$Type;
        getValue(): number;
        getNumericKeyValue(): Internal.OptionalInt;
        get displayName(): Internal.Component
        get name(): string
        get type(): Internal.InputConstants$Type
        get value(): number
        get numericKeyValue(): Internal.OptionalInt
    }
    type InputConstants$Key_ = InputConstants$Key;
    class MultiBufferSource$BufferSource implements Internal.MultiBufferSource {
        endBatch(arg0: Internal.RenderType_): void;
        endBatch(): void;
        endLastBatch(): void;
        static immediate(arg0: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        getBuffer(arg0: Internal.RenderType_): Internal.VertexConsumer;
        static immediateWithBuffers(arg0: Internal.Map_<Internal.RenderType, Internal.BufferBuilder>, arg1: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
    }
    type MultiBufferSource$BufferSource_ = MultiBufferSource$BufferSource;
    class CactusBlock extends Internal.Block implements Internal.IPlantable {
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
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
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
        static readonly MAX_AGE: 15;
    }
    type CactusBlock_ = CactusBlock;
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
        write(arg0: Internal.FriendlyByteBuf_): void;
        signature(): Internal.MessageSignature;
    }
    type ArgumentSignatures$Entry_ = ArgumentSignatures$Entry;
    class PackType extends Internal.Enum<Internal.PackType> {
        static values(): Internal.PackType[];
        static valueOf(arg0: string): Internal.PackType;
        getDirectory(): string;
        get directory(): string
        static readonly CLIENT_RESOURCES: Internal.PackType;
        static readonly SERVER_DATA: Internal.PackType;
    }
    type PackType_ = "client_resources" | PackType | "server_data";
    interface IExtendedItem {
        abstract moonlight$getClientAnimationExtension(): any;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
    }
    type IExtendedItem_ = IExtendedItem;
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
        logChatMessage(arg0: Internal.Component_, arg1: Internal.ChatType$Bound_, arg2: string): void;
        getPlayerList(): Internal.PlayerList;
        getWorldPath(arg0: Internal.LevelResource_): Internal.Path;
        getDisplayName(): Internal.Component;
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
        sendSystemMessage(arg0: Internal.Component_): void;
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
        getName(): Internal.Component;
        getSessionService(): Internal.MinecraftSessionService;
        abstract getRateLimitPacketsPerSecond(): number;
        abstract getOperatorUserPermissionLevel(): number;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        getSingleplayerProfile(): Internal.GameProfile;
        getServerResourcePack(): Internal.Optional<Internal.MinecraftServer$ServerResourcePackInfo>;
        fillSystemReport(arg0: Internal.SystemReport_): Internal.SystemReport;
        isReady(): boolean;
        setPort(arg0: number): void;
        abstract shouldInformAdmins(): boolean;
        registryAccess(): Internal.RegistryAccess$Frozen;
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
        getLootData(): Internal.LootDataManager;
        getStructureManager(): Internal.StructureTemplateManager;
        halt(arg0: boolean): void;
        getEntities(): Internal.EntityArrayList;
        abstract isEpollEnabled(): boolean;
        tell(message: Internal.Component_): void;
        abstract shouldRconBroadcast(): boolean;
        levelKeys(): Internal.Set<Internal.ResourceKey<Internal.Level>>;
        getSpawnProtectionRadius(): number;
        getProfileKeySignatureValidator(): Internal.SignatureValidator;
        getModdedStatus(): Internal.ModCheck;
        getPlayerNames(): string[];
        setStatusMessage(message: Internal.Component_): void;
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
        get displayName(): Internal.Component
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
        get name(): Internal.Component
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
        get lootData(): Internal.LootDataManager
        get structureManager(): Internal.StructureTemplateManager
        get entities(): Internal.EntityArrayList
        get epollEnabled(): boolean
        get spawnProtectionRadius(): number
        get profileKeySignatureValidator(): Internal.SignatureValidator
        get moddedStatus(): Internal.ModCheck
        get playerNames(): string[]
        set statusMessage(message: Internal.Component_)
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
    abstract class ScreenEvent$MouseDragged extends Internal.ScreenEvent$MouseInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        getMouseButton(): number;
        getDragY(): number;
        getDragX(): number;
        get mouseButton(): number
        get dragY(): number
        get dragX(): number
    }
    type ScreenEvent$MouseDragged_ = ScreenEvent$MouseDragged;
    class Matcher implements Internal.MatchResult {
        start(): number;
        matches(): boolean;
        find(arg0: number): boolean;
        pattern(): Internal.Pattern;
        appendReplacement(arg0: Internal.StringBuffer_, arg1: string): this;
        end(arg0: number): number;
        end(arg0: string): number;
        reset(): this;
        reset(arg0: Internal.CharSequence_): this;
        results(): Internal.Stream<Internal.MatchResult>;
        replaceFirst(arg0: string): string;
        appendTail(arg0: Internal.StringBuilder_): Internal.StringBuilder;
        groupCount(): number;
        find(): boolean;
        replaceFirst(arg0: Internal.Function_<Internal.MatchResult, string>): string;
        region(arg0: number, arg1: number): this;
        lookingAt(): boolean;
        start(arg0: number): number;
        hasTransparentBounds(): boolean;
        appendReplacement(arg0: Internal.StringBuilder_, arg1: string): this;
        end(): number;
        group(arg0: string): string;
        replaceAll(arg0: Internal.Function_<Internal.MatchResult, string>): string;
        requireEnd(): boolean;
        hasAnchoringBounds(): boolean;
        useTransparentBounds(arg0: boolean): this;
        appendTail(arg0: Internal.StringBuffer_): Internal.StringBuffer;
        regionEnd(): number;
        useAnchoringBounds(arg0: boolean): this;
        toMatchResult(): Internal.MatchResult;
        usePattern(arg0: Internal.Pattern_): this;
        replaceAll(arg0: string): string;
        start(arg0: string): number;
        group(): string;
        static quoteReplacement(arg0: string): string;
        group(arg0: number): string;
        hitEnd(): boolean;
        regionStart(): number;
    }
    type Matcher_ = Matcher;
    class FieldPosition {
        constructor(arg0: Internal.Format$Field_)
        constructor(arg0: Internal.Format$Field_, arg1: number)
        constructor(arg0: number)
        getFieldAttribute(): Internal.Format$Field;
        getBeginIndex(): number;
        getField(): number;
        setBeginIndex(arg0: number): void;
        setEndIndex(arg0: number): void;
        getEndIndex(): number;
        get fieldAttribute(): Internal.Format$Field
        get beginIndex(): number
        get field(): number
        set beginIndex(arg0: number)
        set endIndex(arg0: number)
        get endIndex(): number
    }
    type FieldPosition_ = FieldPosition;
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
    interface WithAttachedData <T> extends Internal.MessageSenderKJS {
        getDisplayName(): Internal.Component;
        setStatusMessage(message: Internal.Component_): void;
        getName(): Internal.Component;
        runCommandSilent(command: string): number;
        tell(message: Internal.Component_): void;
        abstract getData(): Internal.AttachedData<T>;
        runCommand(command: string): number;
        get displayName(): Internal.Component
        set statusMessage(message: Internal.Component_)
        get name(): Internal.Component
        get data(): Internal.AttachedData<T>
        (): Internal.AttachedData_<T>;
    }
    type WithAttachedData_<T> = WithAttachedData<T>;
    class HandCrankBlockEntity extends Internal.GeneratingKineticBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        deserializeNBT(arg0: Internal.Tag_): void;
        getIndependentAngle(arg0: number): number;
        turn(arg0: boolean): void;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        shouldRenderShaft(): boolean;
        getRenderedHandle(): Internal.SuperByteBuffer;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getRenderedHandleInstance(arg0: com.jozufozu.flywheel.api.Material_<com.jozufozu.flywheel.core.materials.model.ModelData>): Internal.Instancer<com.jozufozu.flywheel.core.materials.model.ModelData>;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get renderedHandle(): Internal.SuperByteBuffer
        get modelData(): Internal.ModelData
        chasingVelocity: number;
        independentAngle: number;
        inUse: number;
        backwards: boolean;
    }
    type HandCrankBlockEntity_ = HandCrankBlockEntity;
    class TallGrassBlock extends Internal.BushBlock implements Internal.IForgeShearable, Internal.BonemealableBlock {
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
    type TallGrassBlock_ = TallGrassBlock;
    interface IItemHandlerModifiable extends Internal.IItemHandler {
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        abstract setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        getSlots(): number;
        abstract extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        kjs$self(): Internal.IItemHandler;
        abstract getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
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
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static speed(arg0: Internal.BlockBehaviour$Properties_): Internal.GaugeBlock;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.GaugeBlockEntity>;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.GaugeBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.GaugeBlockEntity>): void;
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
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        shouldRenderHeadOnFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
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
    class WorldAttached <T> {
        constructor(arg0: Internal.Function_<Internal.LevelAccessor, T>)
        empty(arg0: Internal.BiConsumer_<Internal.LevelAccessor, T>): void;
        put(arg0: Internal.LevelAccessor_, arg1: T): void;
        get(arg0: Internal.LevelAccessor_): T;
        replace(arg0: Internal.LevelAccessor_, arg1: Internal.Consumer_<T>): T;
        replace(arg0: Internal.LevelAccessor_): T;
        empty(arg0: Internal.Consumer_<T>): void;
        static invalidateWorld(arg0: Internal.LevelAccessor_): void;
    }
    type WorldAttached_<T> = WorldAttached<T>;
    interface PositionalRandomFactory {
        abstract fromHashOf(arg0: string): Internal.RandomSource;
        abstract at(arg0: number, arg1: number, arg2: number): Internal.RandomSource;
        fromHashOf(arg0: ResourceLocation_): Internal.RandomSource;
        at(arg0: BlockPos_): Internal.RandomSource;
        abstract parityConfigString(arg0: Internal.StringBuilder_): void;
    }
    type PositionalRandomFactory_ = PositionalRandomFactory;
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
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.StandardBogeyBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.StandardBogeyBlockEntity;
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
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        getConnectorAnchorOffset(): Vec3d;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.StandardBogeyBlockEntity>;
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
        getBlockEntityType(): Internal.BlockEntityType<Internal.StandardBogeyBlockEntity>;
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
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
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
    class BlockColumnConfiguration extends Internal.Record implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.List_<Internal.BlockColumnConfiguration$Layer>, arg1: Internal.Direction_, arg2: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg3: boolean)
        static layer(arg0: Internal.IntProvider_, arg1: Internal.BlockStateProvider_): Internal.BlockColumnConfiguration$Layer;
        allowedPlacement(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        layers(): Internal.List<Internal.BlockColumnConfiguration$Layer>;
        static simple(arg0: Internal.IntProvider_, arg1: Internal.BlockStateProvider_): Internal.BlockColumnConfiguration;
        prioritizeTip(): boolean;
        direction(): Internal.Direction;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.BlockColumnConfiguration>;
    }
    type BlockColumnConfiguration_ = BlockColumnConfiguration;
    class LinearPosTest extends Internal.PosRuleTest {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        static readonly CODEC: Internal.Codec<Internal.LinearPosTest>;
    }
    type LinearPosTest_ = LinearPosTest;
    class RenderType$CompositeRenderType extends Internal.RenderType {
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
    abstract class Type$TypeError {
        constructor(arg0: string)
    }
    type Type$TypeError_ = Type$TypeError;
    class LevelRenderer implements Internal.ResourceManagerReloadListener, Internal.AutoCloseable, Internal.LevelRendererAccessor {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.EntityRenderDispatcher_, arg2: Internal.BlockEntityRenderDispatcher_, arg3: Internal.RenderBuffers_)
        needsUpdate(): void;
        getFrustum(): Internal.Frustum;
        getItemEntityTarget(): Internal.RenderTarget;
        entityTarget(): Internal.RenderTarget;
        updateGlobalBlockEntities(arg0: Internal.Collection_<Internal.BlockEntity>, arg1: Internal.Collection_<Internal.BlockEntity>): void;
        getCloudsTarget(): Internal.RenderTarget;
        static renderLineBox(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number): void;
        killFrustum(): void;
        getTranslucentTarget(): Internal.RenderTarget;
        prepareCullFrustum(arg0: Internal.PoseStack_, arg1: Vec3d_, arg2: Matrix4f_): void;
        static renderVoxelShape(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: Internal.VoxelShape_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean): void;
        countRenderedChunks(): number;
        addRecentlyCompiledChunk(arg0: Internal.ChunkRenderDispatcher$RenderChunk_): void;
        tickRain(arg0: Internal.Camera_): void;
        hasRenderedAllChunks(): boolean;
        setLevel(arg0: Internal.ClientLevel_): void;
        setBlocksDirty(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static getLightColor(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BlockState_, arg2: BlockPos_): number;
        addParticle(arg0: Internal.ParticleOptions_, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        renderClouds(arg0: Internal.PoseStack_, arg1: Matrix4f_, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTotalChunks(): number;
        tick(): void;
        doEntityOutline(): void;
        static renderLineBox(arg0: Internal.VertexConsumer_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        getEntityStatistics(): string;
        getTicks(): number;
        resize(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        playStreamingMusic(arg0: Internal.SoundEvent_, arg1: BlockPos_): void;
        getChunkStatistics(): string;
        initOutline(): void;
        static addChainedFilledBoxVertices(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        setSectionDirty(arg0: number, arg1: number, arg2: number): void;
        isChunkCompiled(arg0: BlockPos_): boolean;
        static addChainedFilledBoxVertices(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        destroyBlockProgress(arg0: number, arg1: BlockPos_, arg2: number): void;
        static renderLineBox(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        addParticle(arg0: Internal.ParticleOptions_, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        captureFrustum(): void;
        renderSky(arg0: Internal.PoseStack_, arg1: Matrix4f_, arg2: number, arg3: Internal.Camera_, arg4: boolean, arg5: Internal.Runnable_): void;
        getName(): string;
        shouldShowEntityOutlines(): boolean;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        blockChanged(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: number): void;
        static renderLineBox(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: Internal.AABB_, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getChunkRenderDispatcher(): Internal.ChunkRenderDispatcher;
        globalLevelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        playStreamingMusic(arg0: Internal.SoundEvent_, arg1: BlockPos_, arg2: Internal.RecordItem_): void;
        allChanged(): void;
        setBlockDirty(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.BlockState_): void;
        getParticlesTarget(): Internal.RenderTarget;
        flywheel$getDestructionProgress(): Internal.Long2ObjectMap<any>;
        renderLevel(arg0: Internal.PoseStack_, arg1: number, arg2: number, arg3: boolean, arg4: Internal.Camera_, arg5: Internal.GameRenderer_, arg6: Internal.LightTexture_, arg7: Matrix4f_): void;
        setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getLastViewDistance(): number;
        getWeatherTarget(): Internal.RenderTarget;
        close(): void;
        clear(): void;
        graphicsChanged(): void;
        static getLightColor(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_): number;
        get frustum(): Internal.Frustum
        get itemEntityTarget(): Internal.RenderTarget
        get cloudsTarget(): Internal.RenderTarget
        get translucentTarget(): Internal.RenderTarget
        set level(arg0: Internal.ClientLevel_)
        get totalChunks(): number
        get entityStatistics(): string
        get ticks(): number
        get chunkStatistics(): string
        get name(): string
        get chunkRenderDispatcher(): Internal.ChunkRenderDispatcher
        get particlesTarget(): Internal.RenderTarget
        get lastViewDistance(): number
        get weatherTarget(): Internal.RenderTarget
        static readonly CHUNK_SIZE: 16;
        readonly renderBuffers: Internal.RenderBuffers;
        static readonly DIRECTIONS: Internal.Direction[];
    }
    type LevelRenderer_ = LevelRenderer;
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
    class DiningBenchBlock extends Internal.HorizontalDirectionalBlock implements Internal.SittableBlock, Internal.SimpleWaterloggedBlock {
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
        static getShape(block: Internal.Block_, direction: Internal.Direction_, level: Internal.BlockGetter_, pos: BlockPos_): Internal.DirectionalBlockProperty;
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
        static readonly SEAT: Internal.AABB;
        static readonly X_AXIS_SHAPE: Internal.ArrayVoxelShape;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly SHAPE: Internal.EnumProperty<Internal.DirectionalBlockProperty>;
        static readonly Z_AXIS_SHAPE: Internal.ArrayVoxelShape;
    }
    type DiningBenchBlock_ = DiningBenchBlock;
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
    class BlockEvent$NeighborNotifyEvent extends Internal.BlockEvent {
        constructor()
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.EnumSet_<Internal.Direction>, arg4: boolean)
        getForceRedstoneUpdate(): boolean;
        getNotifiedSides(): Internal.EnumSet<Internal.Direction>;
        get forceRedstoneUpdate(): boolean
        get notifiedSides(): Internal.EnumSet<Internal.Direction>
    }
    type BlockEvent$NeighborNotifyEvent_ = BlockEvent$NeighborNotifyEvent;
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
    interface DisplayStateSerializer <T extends Internal.DisplayState> extends Internal.ISerializer<T> {
        fromJSONSet(arg0: Internal.JsonObject_, arg1: string, arg2: Internal.Supplier_<Internal.Set<T>>): Internal.Set<T>;
        abstract toJSON(arg0: T): Internal.JsonElement;
        fromByteBufList(arg0: Internal.FriendlyByteBuf_): Internal.List<T>;
        abstract toNBT(arg0: T): Internal.Tag;
        fromByteBufOptional(arg0: Internal.FriendlyByteBuf_): Internal.Optional<T>;
        toJSONWeighted(arg0: Internal.WeightedEntry$Wrapper_<T>): Internal.JsonElement;
        abstract fromJSON(arg0: Internal.JsonElement_): T;
        abstract getId(): ResourceLocation;
        fromNBTList(arg0: Internal.CompoundTag_, arg1: string): Internal.List<T>;
        toJSONOptional(arg0: Internal.JsonObject_, arg1: string, arg2: Internal.Optional_<T>): void;
        fromByteBufWeightedList(arg0: Internal.FriendlyByteBuf_): Internal.SimpleWeightedRandomList<T>;
        toJSONWeightedList(arg0: Internal.SimpleWeightedRandomList_<T>): Internal.JsonElement;
        readByteBufSet(arg0: Internal.FriendlyByteBuf_): Internal.Set<T>;
        toByteBufNullable(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        fromJSONSet(arg0: Internal.JsonElement_): Internal.Set<T>;
        fromJSONSet(arg0: Internal.JsonObject_, arg1: string): Internal.Set<T>;
        toJSONNullable(arg0: Internal.JsonObject_, arg1: string, arg2: T): void;
        abstract fromByteBuf(arg0: Internal.FriendlyByteBuf_): T;
        toByteBufWeighted(arg0: Internal.FriendlyByteBuf_, arg1: Internal.WeightedEntry$Wrapper_<T>): void;
        fromJSONNullable(arg0: Internal.JsonElement_): T;
        abstract fromNBT(arg0: Internal.Tag_): T;
        abstract toByteBuf(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        toJSONOptional(arg0: Internal.Optional_<T>): Internal.JsonElement;
        toByteBufList(arg0: Internal.FriendlyByteBuf_, arg1: Internal.List_<T>): void;
        fromByteBufWeighted(arg0: Internal.FriendlyByteBuf_): Internal.WeightedEntry$Wrapper<T>;
        fromJSONNullable(arg0: Internal.JsonObject_, arg1: string): T;
        toJSONList(arg0: Internal.List_<T>): Internal.JsonElement;
        fromJSONList(arg0: Internal.JsonElement_): Internal.List<T>;
        fromJSON(arg0: Internal.JsonObject_, arg1: string, arg2: Internal.Supplier_<T>): T;
        fromJSONList(arg0: Internal.JsonObject_, arg1: string, arg2: Internal.Supplier_<Internal.List<T>>): Internal.List<T>;
        fromNBT(arg0: Internal.CompoundTag_, arg1: string): T;
        toJSONSet(arg0: Internal.Set_<T>): Internal.JsonElement;
        toJSONString(arg0: T): string;
        toJSONList(arg0: Internal.JsonObject_, arg1: string, arg2: Internal.List_<T>): void;
        fromJSONWeightedList(arg0: Internal.JsonElement_): Internal.SimpleWeightedRandomList<T>;
        toNBTList(arg0: Internal.CompoundTag_, arg1: string, arg2: Internal.List_<T>): void;
        fromJSONOptional(arg0: Internal.JsonObject_, arg1: string): Internal.Optional<T>;
        toNBT(arg0: Internal.CompoundTag_, arg1: string, arg2: T): void;
        fromJSONList(arg0: Internal.JsonObject_, arg1: string, arg2: Internal.List_<T>): Internal.List<T>;
        fromJSONOptional(arg0: Internal.JsonElement_): Internal.Optional<T>;
        toByteBufWeightedList(arg0: Internal.FriendlyByteBuf_, arg1: Internal.SimpleWeightedRandomList_<T>): void;
        toByteBufOptional(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Optional_<T>): void;
        fromJSONSet(arg0: Internal.JsonObject_, arg1: string, arg2: Internal.Set_<T>): Internal.Set<T>;
        fromNBT(arg0: Internal.CompoundTag_, arg1: string, arg2: T): T;
        toJSONNullable(arg0: T): Internal.JsonElement;
        fromJSON(arg0: Internal.JsonObject_, arg1: string): T;
        toNBTList(arg0: Internal.List_<T>): Internal.ListTag;
        fromByteBufNullable(arg0: Internal.FriendlyByteBuf_): T;
        writeByteBufSet(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Set_<T>): void;
        toJSON(arg0: Internal.JsonObject_, arg1: string, arg2: T): void;
        fromNBTList(arg0: Internal.Tag_): Internal.List<T>;
        fromJSONList(arg0: Internal.JsonObject_, arg1: string): Internal.List<T>;
        toJSONOptional(arg0: T): Internal.JsonElement;
        fromJSONWeighted(arg0: Internal.JsonElement_): Internal.WeightedEntry$Wrapper<T>;
        fromJSON(arg0: Internal.JsonObject_, arg1: string, arg2: T): T;
        fromJSONString(arg0: string): T;
        get id(): ResourceLocation
    }
    type DisplayStateSerializer_<T extends Internal.DisplayState> = DisplayStateSerializer<T>;
    class NetworkEvent$Context {
        setPacketHandled(arg0: boolean): void;
        enqueueWork(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        getPacketDispatcher(): Internal.NetworkEvent$PacketDispatcher;
        getPacketHandled(): boolean;
        getDirection(): Internal.NetworkDirection;
        attr<T>(arg0: Internal.AttributeKey_<T>): io.netty.util.Attribute<T>;
        getSender(): Internal.ServerPlayer;
        getNetworkManager(): Internal.Connection;
        set packetHandled(arg0: boolean)
        get packetDispatcher(): Internal.NetworkEvent$PacketDispatcher
        get packetHandled(): boolean
        get direction(): Internal.NetworkDirection
        get sender(): Internal.ServerPlayer
        get networkManager(): Internal.Connection
    }
    type NetworkEvent$Context_ = NetworkEvent$Context;
    class EntityRendererProvider$Context {
        constructor(arg0: Internal.EntityRenderDispatcher_, arg1: Internal.ItemRenderer_, arg2: Internal.BlockRenderDispatcher_, arg3: Internal.ItemInHandRenderer_, arg4: Internal.ResourceManager_, arg5: Internal.EntityModelSet_, arg6: Internal.Font_)
        getFont(): Internal.Font;
        getItemInHandRenderer(): Internal.ItemInHandRenderer;
        getItemRenderer(): Internal.ItemRenderer;
        getModelSet(): Internal.EntityModelSet;
        getModelManager(): Internal.ModelManager;
        getEntityRenderDispatcher(): Internal.EntityRenderDispatcher;
        getBlockRenderDispatcher(): Internal.BlockRenderDispatcher;
        getResourceManager(): Internal.ResourceManager;
        bakeLayer(arg0: Internal.ModelLayerLocation_): Internal.ModelPart;
        get font(): Internal.Font
        get itemInHandRenderer(): Internal.ItemInHandRenderer
        get itemRenderer(): Internal.ItemRenderer
        get modelSet(): Internal.EntityModelSet
        get modelManager(): Internal.ModelManager
        get entityRenderDispatcher(): Internal.EntityRenderDispatcher
        get blockRenderDispatcher(): Internal.BlockRenderDispatcher
        get resourceManager(): Internal.ResourceManager
    }
    type EntityRendererProvider$Context_ = EntityRendererProvider$Context;
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
    class ServerStatus$Version extends Internal.Record {
        constructor(name: string, protocol: number)
        name(): string;
        protocol(): number;
        static current(): Internal.ServerStatus$Version;
        static readonly CODEC: Internal.Codec<Internal.ServerStatus$Version>;
    }
    type ServerStatus$Version_ = ServerStatus$Version;
    class TimeArgument implements Internal.ArgumentType<number> {
        getExamples(): Internal.Collection<string>;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        static time(arg0: number): Internal.TimeArgument;
        static time(): Internal.TimeArgument;
        parse(arg0: Internal.StringReader_): any;
        get examples(): Internal.Collection<string>
    }
    type TimeArgument_ = TimeArgument;
    class GoldDoorBlock extends Internal.DoorBlock {
        constructor(builder: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static tryOpenDoubleDoorKey(world: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_): void;
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
        canBeOpened(state: Internal.BlockState_): boolean;
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
    class RegisterEvent extends Internal.Event implements Internal.IModBusEvent {
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
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    class HangingFlowerPotBlock extends Internal.Block implements Internal.EntityBlock {
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
        static readonly LIGHT_LEVEL: Internal.IntegerProperty;
    }
    type HangingFlowerPotBlock_ = HangingFlowerPotBlock;
    class ZombieHorse extends Internal.AbstractHorse implements Internal.IConvertableHorse {
        constructor(arg0: Internal.EntityType_<Internal.ZombieHorse>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
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
        damageHeldItem(): void;
        getSaddleSoundEvent(): Internal.SoundEvent;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        supp$isConverting(): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        getJumpCooldown(): number;
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
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        startConverting(): void;
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
        handler$zfl000$interact(pPlayer: Internal.Player_, pHand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
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
        get owner(): Internal.LivingEntity
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get saddleSoundEvent(): Internal.SoundEvent
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get jumpCooldown(): number
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
    type ZombieHorse_ = ZombieHorse;
    class EvokerFangs extends Internal.Entity implements Internal.TraceableEntity {
        constructor(arg0: Internal.EntityType_<Internal.EvokerFangs>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.LivingEntity_)
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
        getOwner(): Internal.LivingEntity;
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
        setOwner(arg0: Internal.LivingEntity_): void;
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
        getAnimationProgress(arg0: number): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        get peacefulCreature(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        get owner(): Internal.LivingEntity
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
        set owner(arg0: Internal.LivingEntity_)
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
        static readonly ATTACK_DURATION: 20;
        static readonly LIFE_OFFSET: 2;
        static readonly ATTACK_TRIGGER_TICKS: 14;
    }
    type EvokerFangs_ = EvokerFangs;
    class BlockBehaviour$OffsetType extends Internal.Enum<Internal.BlockBehaviour$OffsetType> {
        static valueOf(arg0: string): Internal.BlockBehaviour$OffsetType;
        static values(): Internal.BlockBehaviour$OffsetType[];
        static readonly NONE: Internal.BlockBehaviour$OffsetType;
        static readonly XZ: Internal.BlockBehaviour$OffsetType;
        static readonly XYZ: Internal.BlockBehaviour$OffsetType;
    }
    type BlockBehaviour$OffsetType_ = BlockBehaviour$OffsetType | "xyz" | "none" | "xz";
    class RegisterItemDecorationsEvent extends Internal.Event implements Internal.IModBusEvent {
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
    class ChalkBoxItem extends Internal.Item implements Internal.IDrawingTool {
        constructor(arg0: Internal.Item$Properties_)
        getMarkColor(arg0: Internal.ItemStack_): Internal.Optional<Internal.DyeColor>;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getGlowing(arg0: Internal.ItemStack_): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        static openGUI(arg0: Internal.Player_, arg1: Internal.ItemStack_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getMark(arg0: Internal.ItemStack_, arg1: Internal.MarkDrawingContext_, arg2: Internal.MarkSymbol_): Internal.Mark;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        createDrawingContext(arg0: Internal.Player_, arg1: BlockPos_, arg2: Vec3d_, arg3: Internal.Direction_, arg4: Internal.InteractionHand_): Internal.MarkDrawingContext;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        drawMark(arg0: Internal.MarkDrawingContext_, arg1: Internal.Mark_): boolean;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getMarkColorValue(arg0: Internal.ItemStack_): number;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        createDrawingContext(arg0: Internal.UseOnContext_): Internal.MarkDrawingContext;
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
        getSelectedChalkColor(arg0: Internal.ItemStack_): number;
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
        onMarkDrawn(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
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
        static readonly SELECTED_PROPERTY: ResourceLocation;
    }
    type ChalkBoxItem_ = ChalkBoxItem;
    class TrackBlockOutline$BezierPointSelection extends Internal.Record {
        constructor(blockEntity: Internal.TrackBlockEntity_, loc: Internal.BezierTrackPointLocation_, vec: Vec3d_, angles: Vec3d_, direction: Vec3d_)
        blockEntity(): Internal.TrackBlockEntity;
        angles(): Vec3d;
        vec(): Vec3d;
        loc(): Internal.BezierTrackPointLocation;
        direction(): Vec3d;
    }
    type TrackBlockOutline$BezierPointSelection_ = TrackBlockOutline$BezierPointSelection;
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
        kjs$self(): Internal.Container;
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
        asContainer(): Internal.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
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
    interface Hash$Strategy <K> {
        abstract equals(arg0: K, arg1: K): boolean;
        abstract hashCode(arg0: K): number;
    }
    type Hash$Strategy_<K> = Hash$Strategy<K>;
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
    class EnumArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.EnumArgument<T>> {
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.EnumArgument<T>;
        type(): Internal.ArgumentTypeInfo<Internal.EnumArgument<T>, any>;
    }
    type EnumArgument$Info$Template_ = EnumArgument$Info$Template;
    class TransportedItemStackHandlerBehaviour$TransportedResult {
        hasHeldOutput(): boolean;
        static convertTo(arg0: Internal.List_<Internal.TransportedItemStack>): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        doesNothing(): boolean;
        didntChangeFrom(arg0: Internal.ItemStack_): boolean;
        getHeldOutput(): Internal.TransportedItemStack;
        static convertTo(arg0: Internal.TransportedItemStack_): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        static removeItem(): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        static convertToAndLeaveHeld(arg0: Internal.List_<Internal.TransportedItemStack>, arg1: Internal.TransportedItemStack_): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        static doNothing(): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        getOutputs(): Internal.List<Internal.TransportedItemStack>;
        get heldOutput(): Internal.TransportedItemStack
        get outputs(): Internal.List<Internal.TransportedItemStack>
    }
    type TransportedItemStackHandlerBehaviour$TransportedResult_ = TransportedItemStackHandlerBehaviour$TransportedResult;
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
    abstract class GameRules$Value <T extends Internal.GameRules$Value<T>> {
        constructor(arg0: Internal.GameRules$Type_<T>)
        onChanged(arg0: Internal.MinecraftServer_): void;
        setFromArgument(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): void;
        abstract serialize(): string;
        abstract getCommandResult(): number;
        abstract deserialize(arg0: string): void;
        abstract setFrom(arg0: T, arg1: Internal.MinecraftServer_): void;
        get commandResult(): number
    }
    type GameRules$Value_<T extends Internal.GameRules$Value<T>> = GameRules$Value<T>;
    class ServerScoreboard extends Internal.Scoreboard {
        constructor(arg0: Internal.MinecraftServer_)
        getObjectiveDisplaySlotCount(arg0: Internal.Objective_): number;
        stopTrackingObjective(arg0: Internal.Objective_): void;
        getStartTrackingPackets(arg0: Internal.Objective_): Internal.List<Internal.Packet<any>>;
        createData(arg0: Internal.CompoundTag_): Internal.ScoreboardSaveData;
        createData(): Internal.ScoreboardSaveData;
        getStopTrackingPackets(arg0: Internal.Objective_): Internal.List<Internal.Packet<any>>;
        addDirtyListener(arg0: Internal.Runnable_): void;
        startTrackingObjective(arg0: Internal.Objective_): void;
    }
    type ServerScoreboard_ = ServerScoreboard;
    class LayerConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: Internal.BlockState_)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly height: number;
        readonly state: Internal.BlockState;
        static readonly CODEC: Internal.Codec<Internal.LayerConfiguration>;
    }
    type LayerConfiguration_ = LayerConfiguration;
    interface ReputationEventHandler {
        abstract onReputationEventFrom(arg0: Internal.ReputationEventType_, arg1: Internal.Entity_): void;
        (arg0: Internal.ReputationEventType, arg1: Internal.Entity): void;
    }
    type ReputationEventHandler_ = ReputationEventHandler;
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
    type RefinedRadianceItem_ = RefinedRadianceItem;
    class LootrBarrelBlock extends Internal.BarrelBlock {
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
        static readonly OPENED: Internal.ModelProperty<boolean>;
    }
    type LootrBarrelBlock_ = LootrBarrelBlock;
    interface Reference2LongFunction <K> extends it.unimi.dsi.fastutil.Function<K, number>, Internal.ToLongFunction<K> {
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2LongFunction<T>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2LongFunction;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        removeLong(arg0: any): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Reference2ByteFunction<K>;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2LongFunction;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2LongFunction<T>;
        containsKey(arg0: any): boolean;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Reference2IntFunction<K>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        abstract getLong(arg0: any): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Reference2CharFunction<K>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2LongFunction;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Reference2FloatFunction<K>;
        applyAsLong(arg0: K): number;
        defaultReturnValue(): number;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        apply(arg0: K): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Reference2ShortFunction<K>;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2LongFunction;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2LongFunction;
        getOrDefault(arg0: any, arg1: number): number;
        size(): number;
        clear(): void;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2LongFunction;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        (arg0: any): number;
    }
    type Reference2LongFunction_<K> = Reference2LongFunction<K>;
    abstract class StructurePlacement {
        isStructureChunk(arg0: Internal.ChunkGeneratorStructureState_, arg1: number, arg2: number): boolean;
        getLocatePos(arg0: Internal.ChunkPos_): BlockPos;
        abstract type(): Internal.StructurePlacementType<any>;
        static readonly CODEC: Internal.Codec<Internal.StructurePlacement>;
    }
    type StructurePlacement_ = StructurePlacement;
    class OceanMonumentStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static regeneratePiecesAfterLoad(arg0: Internal.ChunkPos_, arg1: number, arg2: Internal.PiecesContainer_): Internal.PiecesContainer;
        static readonly CODEC: Internal.Codec<Internal.OceanMonumentStructure>;
    }
    type OceanMonumentStructure_ = OceanMonumentStructure;
    class Sound implements Internal.Weighted<Internal.Sound> {
        constructor(arg0: string, arg1: Internal.SampledFloat_, arg2: Internal.SampledFloat_, arg3: number, arg4: Internal.Sound$Type_, arg5: boolean, arg6: boolean, arg7: number)
        getType(): Internal.Sound$Type;
        getLocation(): ResourceLocation;
        getVolume(): Internal.SampledFloat;
        getPitch(): Internal.SampledFloat;
        getSound(arg0: Internal.RandomSource_): any;
        getPath(): ResourceLocation;
        getAttenuationDistance(): number;
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
    class CarrotBlock extends Internal.CropBlock {
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
    }
    type CarrotBlock_ = CarrotBlock;
    interface IModFileInfo {
        abstract getConfig(): Internal.IConfigurable;
        abstract getMods(): Internal.List<Internal.IModInfo>;
        abstract getLicense(): string;
        abstract moduleName(): string;
        abstract showAsResourcePack(): boolean;
        abstract versionString(): string;
        abstract usesServices(): Internal.List<string>;
        abstract getFile(): Internal.IModFile;
        abstract requiredLanguageLoaders(): Internal.List<Internal.IModFileInfo$LanguageSpec>;
        abstract getFileProperties(): Internal.Map<string, any>;
        get config(): Internal.IConfigurable
        get mods(): Internal.List<Internal.IModInfo>
        get license(): string
        get file(): Internal.IModFile
        get fileProperties(): Internal.Map<string, any>
    }
    type IModFileInfo_ = IModFileInfo;
    interface Component extends com.mojang.brigadier.Message, Internal.FormattedText {
        abstract getVisualOrderText(): Internal.FormattedCharSequence;
        toFlatList(): Internal.List<Internal.Component>;
        translatable(arg0: string): Internal.MutableComponent;
        empty(): Internal.MutableComponent;
        translatable(arg0: string, ...arg1: any[]): Internal.MutableComponent;
        visit<T>(arg0: Internal.FormattedText$ContentConsumer_<T>): Internal.Optional<T>;
        abstract getStyle(): Internal.Style;
        visit<T>(arg0: Internal.FormattedText$StyledContentConsumer_<T>, arg1: Internal.Style_): Internal.Optional<T>;
        getString(arg0: number): string;
        abstract getSiblings(): Internal.List<Internal.Component>;
        getString(): string;
        nbt(arg0: string, arg1: boolean, arg2: Internal.Optional_<Internal.Component>, arg3: Internal.DataSource_): Internal.MutableComponent;
        nullToEmpty(arg0: string): this;
        translatableWithFallback(arg0: string, arg1: string, ...arg2: any[]): Internal.MutableComponent;
        of(arg0: string, arg1: Internal.Style_): Internal.FormattedText;
        plainCopy(): Internal.MutableComponent;
        keybind(arg0: string): Internal.MutableComponent;
        translatableWithFallback(arg0: string, arg1: string): Internal.MutableComponent;
        contains(arg0: Internal.Component_): boolean;
        score(arg0: string, arg1: string): Internal.MutableComponent;
        composite(...arg0: Internal.FormattedText_[]): Internal.FormattedText;
        of(arg0: string): Internal.FormattedText;
        composite(arg0: Internal.List_<Internal.FormattedText>): Internal.FormattedText;
        abstract getContents(): Internal.ComponentContents;
        toFlatList(arg0: Internal.Style_): Internal.List<Internal.Component>;
        selector(arg0: string, arg1: Internal.Optional_<Internal.Component>): Internal.MutableComponent;
        copy(): Internal.MutableComponent;
        literal(arg0: string): Internal.MutableComponent;
        get visualOrderText(): Internal.FormattedCharSequence
        get style(): Internal.Style
        get siblings(): Internal.List<Internal.Component>
        get string(): string
        get contents(): Internal.ComponentContents
    }
    type Component_ = Component;
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
    class TrackBlockEntity extends Internal.SmartBlockEntity implements Internal.ITransformableBlockEntity, Internal.IMergeableBE {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        accept(arg0: Internal.BlockEntity_): void;
        getConnections(): Internal.Map<BlockPos, Internal.BezierConnection>;
        manageFakeTracksAlong(arg0: Internal.BezierConnection_, arg1: boolean): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        addConnection(arg0: Internal.BezierConnection_): void;
        validateConnections(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isTilted(): boolean;
        removeInboundConnections(arg0: boolean): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        transform(arg0: Internal.StructureTransform_): void;
        hasInteractableConnections(): boolean;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        bind(arg0: Internal.ResourceKey_<Internal.Level>, arg1: BlockPos_): void;
        removeConnection(arg0: BlockPos_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get connections(): Internal.Map<BlockPos, Internal.BezierConnection>
        get tilted(): boolean
        boundLocation: Internal.Pair<Internal.ResourceKey<Internal.Level>, BlockPos>;
        tilt: Internal.TrackBlockEntityTilt;
    }
    type TrackBlockEntity_ = TrackBlockEntity;
    class VariantBlockStateGenerator$Variant {
        constructor()
        model(s: string): Internal.VariantBlockStateGenerator$Model;
        toJson(): Internal.JsonElement;
    }
    type VariantBlockStateGenerator$Variant_ = VariantBlockStateGenerator$Variant;
    class AssetJsonGenerator extends Internal.ResourceGenerator {
        constructor(m: Internal.Map_<ResourceLocation, any>)
        static asItemModelLocation(id: ResourceLocation_): ResourceLocation;
        itemModel(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.ModelGenerator>): void;
        blockModel(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.ModelGenerator>): void;
        blockState(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.VariantBlockStateGenerator>): void;
        multipartState(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.MultipartBlockStateGenerator>): void;
        stencil(target: ResourceLocation_, stencil: string, colors: Internal.JsonObject_): void;
    }
    type AssetJsonGenerator_ = AssetJsonGenerator;
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
    class PlayerInteractEvent$LeftClickEmpty extends Internal.PlayerInteractEvent {
        constructor()
        constructor(arg0: Internal.Player_)
        getEntity(): Internal.LivingEntity;
        get entity(): Internal.LivingEntity
    }
    type PlayerInteractEvent$LeftClickEmpty_ = PlayerInteractEvent$LeftClickEmpty;
    interface LevelKJS extends Internal.WithAttachedData<Internal.Level>, Internal.ScriptTypeHolder {
        getDisplayName(): Internal.Component;
        getDimension(): ResourceLocation;
        getName(): Internal.Component;
        runCommandSilent(command: string): number;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        self(): Internal.Level;
        tell(message: Internal.Component_): void;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        abstract getData(): Internal.AttachedData<Internal.Level>;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        setStatusMessage(message: Internal.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        getSide(): Internal.ScriptType;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        isOverworld(): boolean;
        runCommand(command: string): number;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        get displayName(): Internal.Component
        get dimension(): ResourceLocation
        get name(): Internal.Component
        get entities(): Internal.EntityArrayList
        get data(): Internal.AttachedData<Internal.Level>
        set statusMessage(message: Internal.Component_)
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
    class BuriedTreasureStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly CODEC: Internal.Codec<Internal.BuriedTreasureStructure>;
    }
    type BuriedTreasureStructure_ = BuriedTreasureStructure;
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
    class EntityAttributeModificationEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<Internal.EntityType<Internal.LivingEntity>, Internal.AttributeSupplier$Builder>)
        add(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.Attribute_, arg2: number): void;
        getTypes(): Internal.List<Internal.EntityType<Internal.LivingEntity>>;
        add(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.Attribute_): void;
        has(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.Attribute_): boolean;
        get types(): Internal.List<Internal.EntityType<Internal.LivingEntity>>
    }
    type EntityAttributeModificationEvent_ = EntityAttributeModificationEvent;
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
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
    class CommandSyntaxException extends Internal.Exception {
        constructor(arg0: Internal.CommandExceptionType_, arg1: com.mojang.brigadier.Message_, arg2: string, arg3: number)
        constructor(arg0: Internal.CommandExceptionType_, arg1: com.mojang.brigadier.Message_)
        getRawMessage(): com.mojang.brigadier.Message;
        getCursor(): number;
        getInput(): string;
        getContext(): string;
        getType(): Internal.CommandExceptionType;
        get rawMessage(): com.mojang.brigadier.Message
        get cursor(): number
        get input(): string
        get context(): string
        get type(): Internal.CommandExceptionType
        static ENABLE_COMMAND_STACK_TRACES: false;
        static BUILT_IN_EXCEPTIONS: Internal.BrigadierExceptions;
        static readonly CONTEXT_AMOUNT: 10;
    }
    type CommandSyntaxException_ = CommandSyntaxException;
    abstract class DisplayState {
        constructor()
        static init(): void;
        abstract getSerializer(): Internal.DisplayStateSerializer<any>;
        static getSerializer(arg0: ResourceLocation_): Internal.ISerializer<Internal.DisplayState>;
        get serializer(): Internal.DisplayStateSerializer<any>
        static readonly SERIALIZER: Internal.DisplayState$Serializer;
    }
    type DisplayState_ = DisplayState;
    class HeliumFlamingoItem extends Internal.WearableArtifactItem {
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
    type HeliumFlamingoItem_ = HeliumFlamingoItem;
    abstract class FlyingMob extends Internal.Mob {
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
    type FlyingMob_ = FlyingMob;
    interface SampledFloat {
        abstract sample(arg0: Internal.RandomSource_): number;
        (arg0: Internal.RandomSource): number;
    }
    type SampledFloat_ = SampledFloat;
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
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_): void;
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
    }
    type DragonEggBlock_ = DragonEggBlock;
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
    interface OptionInstance$CycleableValueSet$ValueSetter <T> {
        abstract set(arg0: Internal.OptionInstance_<T>, arg1: T): void;
        (arg0: Internal.OptionInstance<T>, arg1: T): void;
    }
    type OptionInstance$CycleableValueSet$ValueSetter_<T> = OptionInstance$CycleableValueSet$ValueSetter<T>;
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
        asMapOpt(): Internal.DataResult<Internal.Stream<com.mojang.datafixers.util.Pair<Internal.Dynamic<T>, Internal.Dynamic<T>>>>;
        decode<A>(arg0: Internal.Decoder_<A>): Internal.DataResult<com.mojang.datafixers.util.Pair<A, T>>;
        flatMap<U>(arg0: Internal.Function_<Internal.Dynamic<T>, Internal.DataResult<U>>): Internal.DataResult<U>;
        orElseEmptyList(): Internal.Dynamic<T>;
        into<V>(arg0: Internal.Function_<Internal.Dynamic<T>, V>): Internal.DataResult<V>;
        get(arg0: string): this;
    }
    type OptionalDynamic_<T> = OptionalDynamic<T>;
    class GameRules$IntegerValue extends Internal.GameRules$Value<Internal.GameRules$IntegerValue> implements Internal.IntegerValueInvoker {
        constructor(arg0: Internal.GameRules$Type_<Internal.GameRules$IntegerValue>, arg1: number)
        set(arg0: number, arg1: Internal.MinecraftServer_): void;
        static invokeCreate(defaultValue: number, onChanged: Internal.BiConsumer_<Internal.MinecraftServer, Internal.GameRules$IntegerValue>): Internal.GameRules$Type<Internal.GameRules$IntegerValue>;
        setFrom(arg0: Internal.GameRules$IntegerValue_, arg1: Internal.MinecraftServer_): void;
        tryDeserialize(arg0: string): boolean;
        static create(arg0: number): Internal.GameRules$Type<Internal.GameRules$IntegerValue>;
        static create(arg0: number, arg1: Internal.BiConsumer_<Internal.MinecraftServer, Internal.GameRules$IntegerValue>): Internal.GameRules$Type<Internal.GameRules$IntegerValue>;
        static invokeCreate_$md$366fca$0(arg0: number, arg1: Internal.BiConsumer_<any, any>): Internal.GameRules$Type<any>;
        get(): number;
    }
    type GameRules$IntegerValue_ = GameRules$IntegerValue;
}
declare namespace net.mehvahdjukaar.supplementaries.common.block.blocks {
    class RopeBlock extends Internal.WaterBlock implements Internal.IRopeConnection {
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
        static canConnectDown(downState: Internal.BlockState_): boolean;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static hasMiddleKnot(state: Internal.BlockState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        static isSupportingCeiling(upState: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelReader_): boolean;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        shouldConnectToDir(thisState: Internal.BlockState_, currentPos: BlockPos_, world: Internal.LevelReader_, dir: Internal.Direction_): boolean;
        canSideAcceptConnection(state: Internal.BlockState_, direction: Internal.Direction_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        shouldConnectToFace(thisState: Internal.BlockState_, facingState: Internal.BlockState_, facingPos: BlockPos_, dir: Internal.Direction_, world: Internal.LevelReader_): boolean;
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
        static isSupportingCeiling(pos: BlockPos_, world: Internal.LevelReader_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static findAndRingBell(world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, it: number, predicate: Internal.Predicate_<Internal.BlockState>): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly COLLISION_SHAPE: Internal.ArrayVoxelShape;
        static readonly NORTH: Internal.BooleanProperty;
        static readonly FACING_TO_PROPERTY_MAP: {[key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty};
        static readonly SOUTH: Internal.BooleanProperty;
        static readonly UP: Internal.BooleanProperty;
        static readonly WEST: Internal.BooleanProperty;
        static readonly DOWN: Internal.BooleanProperty;
        static readonly DISTANCE: Internal.IntegerProperty;
        static readonly KNOT: Internal.BooleanProperty;
        static readonly EAST: Internal.BooleanProperty;
    }
    type RopeBlock_ = RopeBlock;
}
