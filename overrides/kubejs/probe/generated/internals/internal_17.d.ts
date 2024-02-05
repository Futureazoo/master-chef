/// <reference path="./internal_*.d.ts" />
declare namespace vectorwing.farmersdelight.common.registry {
    class ModRecipeTypes$1 implements Internal.RecipeType<T> {
        static simple<T extends Internal.Recipe<any>>(arg0: ResourceLocation_): Internal.RecipeType<T>;
        static register<T extends Internal.Recipe<any>>(arg0: string): Internal.RecipeType<T>;
    }
    type ModRecipeTypes$1_ = ModRecipeTypes$1;
}
declare namespace Internal {
    class GameRules$Key <T extends Internal.GameRules$Value<T>> {
        constructor(arg0: string, arg1: Internal.GameRules$Category_)
        getCategory(): Internal.GameRules$Category;
        getId(): string;
        getDescriptionId(): string;
        get category(): Internal.GameRules$Category
        get id(): string
        get descriptionId(): string
    }
    type GameRules$Key_<T extends Internal.GameRules$Value<T>> = GameRules$Key<T>;
    class DataJsonGenerator extends Internal.ResourceGenerator {
        constructor(m: Internal.Map_<ResourceLocation, any>)
    }
    type DataJsonGenerator_ = DataJsonGenerator;
    class SafetyNetBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
    type SafetyNetBlock_ = SafetyNetBlock;
    abstract class Behavior <E extends Internal.LivingEntity> implements Internal.BehaviorControl<E> {
        constructor(arg0: Internal.Map_<Internal.MemoryModuleType<any>, Internal.MemoryStatus>, arg1: number)
        constructor(arg0: Internal.Map_<Internal.MemoryModuleType<any>, Internal.MemoryStatus>)
        constructor(arg0: Internal.Map_<Internal.MemoryModuleType<any>, Internal.MemoryStatus>, arg1: number, arg2: number)
        tryStart(arg0: Internal.ServerLevel_, arg1: E, arg2: number): boolean;
        debugString(): string;
        doStop(arg0: Internal.ServerLevel_, arg1: E, arg2: number): void;
        getStatus(): Internal.Behavior$Status;
        tickOrStop(arg0: Internal.ServerLevel_, arg1: E, arg2: number): void;
        get status(): Internal.Behavior$Status
        static readonly DEFAULT_DURATION: 60;
    }
    type Behavior_<E extends Internal.LivingEntity> = Behavior<E>;
    interface SittableBlock {
        abstract getSeatSize(arg0: Internal.BlockState_): Internal.AABB;
        sitOn(level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, dir: Internal.Direction_): boolean;
        (arg0: Internal.BlockState): Internal.AABB_;
    }
    type SittableBlock_ = SittableBlock;
    class Commands {
        constructor(arg0: Internal.Commands$CommandSelection_, arg1: Internal.CommandBuildContext_)
        static literal(arg0: string): Internal.LiteralArgumentBuilder<Internal.CommandSourceStack>;
        static mapSource<S>(arg0: Internal.ParseResults_<S>, arg1: Internal.UnaryOperator_<S>): Internal.ParseResults<S>;
        static argument<T>(arg0: string, arg1: Internal.ArgumentType_<T>): Internal.RequiredArgumentBuilder<Internal.CommandSourceStack, T>;
        static getParseException<S>(arg0: Internal.ParseResults_<S>): Internal.CommandSyntaxException;
        performCommand(arg0: Internal.ParseResults_<Internal.CommandSourceStack>, arg1: string): number;
        getDispatcher(): Internal.CommandDispatcher<Internal.CommandSourceStack>;
        performPrefixedCommand(arg0: Internal.CommandSourceStack_, arg1: string): number;
        static createValidator(arg0: Internal.Commands$ParseFunction_): Internal.Predicate<string>;
        static validate(): void;
        sendCommands(arg0: Internal.ServerPlayer_): void;
        static createValidationContext(arg0: Internal.HolderLookup$Provider_): Internal.CommandBuildContext;
        get dispatcher(): Internal.CommandDispatcher<Internal.CommandSourceStack>
        static readonly LEVEL_OWNERS: 4;
        static readonly LEVEL_ALL: 0;
        static readonly LEVEL_MODERATORS: 1;
        static readonly LEVEL_ADMINS: 3;
        static readonly LEVEL_GAMEMASTERS: 2;
    }
    type Commands_ = Commands;
    class ReportEnvironment extends Internal.Record {
        constructor(arg0: string, arg1: Internal.ReportEnvironment$Server_)
        server(): Internal.ReportEnvironment$Server;
        clientVersion(): string;
        static local(): Internal.ReportEnvironment;
        static realm(arg0: Internal.RealmsServer_): Internal.ReportEnvironment;
        static thirdParty(arg0: string): Internal.ReportEnvironment;
        thirdPartyServerInfo(): Internal.AbuseReportRequest$ThirdPartyServerInfo;
        clientInfo(): Internal.AbuseReportRequest$ClientInfo;
        static create(arg0: Internal.ReportEnvironment$Server_): Internal.ReportEnvironment;
        realmInfo(): Internal.AbuseReportRequest$RealmInfo;
    }
    type ReportEnvironment_ = ReportEnvironment;
    class StonecutterMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: any_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        getRecipes(): Internal.List<Internal.StonecutterRecipe>;
        getSelectedRecipeIndex(): number;
        hasInputItem(): boolean;
        getNumRecipes(): number;
        registerUpdateListener(arg0: Internal.Runnable_): void;
        get recipes(): Internal.List<Internal.StonecutterRecipe>
        get selectedRecipeIndex(): number
        get numRecipes(): number
        static readonly INPUT_SLOT: 0;
        static readonly RESULT_SLOT: 1;
        readonly container: Internal.Container;
    }
    type StonecutterMenu_ = StonecutterMenu;
    class WorldCreationContext extends Internal.Record {
        constructor(arg0: any_, arg1: Internal.LayeredRegistryAccess_<Internal.RegistryLayer>, arg2: Internal.ReloadableServerResources_, arg3: Internal.WorldDataConfiguration_)
        constructor(options: Internal.WorldOptions_, datapackDimensions: Internal.Registry_<Internal.LevelStem>, selectedDimensions: Internal.WorldDimensions_, worldgenRegistries: Internal.LayeredRegistryAccess_<Internal.RegistryLayer>, dataPackResources: Internal.ReloadableServerResources_, dataConfiguration: Internal.WorldDataConfiguration_)
        constructor(arg0: Internal.WorldOptions_, arg1: Internal.WorldDimensions_, arg2: Internal.LayeredRegistryAccess_<Internal.RegistryLayer>, arg3: Internal.ReloadableServerResources_, arg4: Internal.WorldDataConfiguration_)
        worldgenRegistries(): Internal.LayeredRegistryAccess<Internal.RegistryLayer>;
        dataConfiguration(): Internal.WorldDataConfiguration;
        dataPackResources(): Internal.ReloadableServerResources;
        withDataConfiguration(arg0: Internal.WorldDataConfiguration_): this;
        options(): Internal.WorldOptions;
        datapackDimensions(): Internal.Registry<Internal.LevelStem>;
        withSettings(arg0: Internal.WorldOptions_, arg1: Internal.WorldDimensions_): this;
        withDimensions(arg0: Internal.WorldCreationContext$DimensionsUpdater_): this;
        withOptions(arg0: Internal.WorldCreationContext$OptionsModifier_): this;
        selectedDimensions(): Internal.WorldDimensions;
        worldgenLoadContext(): Internal.RegistryAccess$Frozen;
    }
    type WorldCreationContext_ = WorldCreationContext;
    class LargeDripstoneFeature extends Internal.Feature<Internal.LargeDripstoneConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.LargeDripstoneConfiguration>)
    }
    type LargeDripstoneFeature_ = LargeDripstoneFeature;
    class InkSacItem extends Internal.Item implements Internal.SignApplicator {
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
    type InkSacItem_ = InkSacItem;
    interface PlayerSelector {
        uuid(uuid: Internal.UUID_): this;
        or(fallback: Internal.PlayerSelector_): this;
        identity(player: Internal.ServerPlayer_): this;
        fuzzyName(name: string): this;
        name(name: string): this;
        of(o: any): this;
        abstract getPlayer(arg0: Internal.MinecraftServer_): Internal.ServerPlayer;
        (arg0: Internal.MinecraftServer): Internal.ServerPlayer_;
    }
    type PlayerSelector_ = PlayerSelector | string | Internal.UUID_;
    abstract class AbstractHurtingProjectile extends Internal.Projectile {
        constructor(arg0: Internal.EntityType_<Internal.AbstractHurtingProjectile>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.Level_)
        constructor(arg0: Internal.EntityType_<Internal.AbstractHurtingProjectile>, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number, arg5: Internal.Level_)
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
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
        zPower: number;
        yPower: number;
        xPower: number;
    }
    type AbstractHurtingProjectile_ = AbstractHurtingProjectile;
    class HourGlassBlock extends Internal.WaterBlock implements Internal.EntityBlock {
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
    type HourGlassBlock_ = HourGlassBlock;
    class LivingKnockBackEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: number, arg2: number, arg3: number)
        getOriginalRatioX(): number;
        getRatioZ(): number;
        setRatioX(arg0: number): void;
        getStrength(): number;
        getOriginalStrength(): number;
        getRatioX(): number;
        getOriginalRatioZ(): number;
        setRatioZ(arg0: number): void;
        setStrength(arg0: number): void;
        get originalRatioX(): number
        get ratioZ(): number
        set ratioX(arg0: number)
        get strength(): number
        get originalStrength(): number
        get ratioX(): number
        get originalRatioZ(): number
        set ratioZ(arg0: number)
        set strength(arg0: number)
    }
    type LivingKnockBackEvent_ = LivingKnockBackEvent;
    interface Symbol {
    }
    type Symbol_ = Symbol;
    class ClientboundDisconnectPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Component_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getReason(): Internal.Component;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get reason(): Internal.Component
        get skippable(): boolean
    }
    type ClientboundDisconnectPacket_ = ClientboundDisconnectPacket;
    abstract class BogeyRenderer$CommonRenderer extends Internal.BogeyRenderer {
        constructor()
    }
    type BogeyRenderer$CommonRenderer_ = BogeyRenderer$CommonRenderer;
    class ClientboundUpdateAdvancementsPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: boolean, arg1: Internal.Collection_<Internal.Advancement>, arg2: Internal.Set_<ResourceLocation>, arg3: Internal.Map_<ResourceLocation, Internal.AdvancementProgress>)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getRemoved(): Internal.Set<ResourceLocation>;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getAdded(): Internal.Map<ResourceLocation, Internal.Advancement$Builder>;
        getProgress(): Internal.Map<ResourceLocation, Internal.AdvancementProgress>;
        isSkippable(): boolean;
        shouldReset(): boolean;
        get removed(): Internal.Set<ResourceLocation>
        get added(): Internal.Map<ResourceLocation, Internal.Advancement$Builder>
        get progress(): Internal.Map<ResourceLocation, Internal.AdvancementProgress>
        get skippable(): boolean
    }
    type ClientboundUpdateAdvancementsPacket_ = ClientboundUpdateAdvancementsPacket;
    class CompositeByteBuf extends Internal.AbstractReferenceCountedByteBuf implements Internal.Iterable<Internal.ByteBuf> {
        constructor(arg0: Internal.ByteBufAllocator_, arg1: boolean, arg2: number, ...arg3: Internal.ByteBuf_[])
        constructor(arg0: Internal.ByteBufAllocator_, arg1: boolean, arg2: number, arg3: Internal.Iterable_<Internal.ByteBuf>)
        constructor(arg0: Internal.ByteBufAllocator_, arg1: boolean, arg2: number)
        addComponent(arg0: boolean, arg1: Internal.ByteBuf_): this;
        writeBytes(arg0: number[], arg1: number, arg2: number): this;
        setInt(arg0: number, arg1: number): this;
        componentAtOffset(arg0: number): Internal.ByteBuf;
        addComponents(arg0: boolean, ...arg1: Internal.ByteBuf_[]): this;
        writeFloat(arg0: number): this;
        toComponentIndex(arg0: number): number;
        getBytes(arg0: number, arg1: number[]): this;
        removeComponent(arg0: number): this;
        internalComponentAtOffset(arg0: number): Internal.ByteBuf;
        getBytes(arg0: number, arg1: Internal.OutputStream_, arg2: number): this;
        maxNumComponents(): number;
        retain(arg0: number): Internal.ReferenceCounted;
        writeBytes(arg0: Internal.ByteBuf_, arg1: number, arg2: number): this;
        component(arg0: number): Internal.ByteBuf;
        setChar(arg0: number, arg1: number): this;
        numComponents(): number;
        addComponents(arg0: number, arg1: Internal.Iterable_<Internal.ByteBuf>): this;
        addComponent(arg0: boolean, arg1: number, arg2: Internal.ByteBuf_): this;
        consolidate(arg0: number, arg1: number): this;
        setBytes(arg0: number, arg1: number[]): this;
        iterator(): Internal.Iterator<Internal.ByteBuf>;
        decompose(arg0: number, arg1: number): Internal.List<Internal.ByteBuf>;
        discardSomeReadBytes(): this;
        addComponent(arg0: number, arg1: Internal.ByteBuf_): this;
        ensureWritable(arg0: number): this;
        spliterator(): Internal.Spliterator<Internal.ByteBuf>;
        clear(): this;
        addComponents(arg0: Internal.Iterable_<Internal.ByteBuf>): this;
        writeBoolean(arg0: boolean): this;
        internalComponent(arg0: number): Internal.ByteBuf;
        markReaderIndex(): this;
        addComponents(...arg0: Internal.ByteBuf_[]): this;
        setBoolean(arg0: number, arg1: boolean): this;
        setZero(arg0: number, arg1: number): this;
        addComponent(arg0: Internal.ByteBuf_): this;
        removeComponents(arg0: number, arg1: number): this;
        setIndex(arg0: number, arg1: number): this;
        writeZero(arg0: number): this;
        setBytes(arg0: number, arg1: Internal.ByteBuf_): this;
        addComponents(arg0: number, ...arg1: Internal.ByteBuf_[]): this;
        getBytes(arg0: number, arg1: Internal.ByteBuf_): this;
        addComponents(arg0: boolean, arg1: Internal.Iterable_<Internal.ByteBuf>): this;
        touch(): Internal.ReferenceCounted;
        writeBytes(arg0: Internal.ByteBuf_): this;
        discardReadComponents(): this;
        addFlattenedComponents(arg0: boolean, arg1: Internal.ByteBuf_): this;
        capacity(arg0: number): this;
        getBytes(arg0: number, arg1: Internal.ByteBuffer_): this;
        consolidate(): this;
        getBytes(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        setBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number): this;
        forEach(arg0: Internal.Consumer_<Internal.ByteBuf>): void;
        markWriterIndex(): this;
        toByteIndex(arg0: number): number;
        getBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): this;
        writeBytes(arg0: number[]): this;
    }
    type CompositeByteBuf_ = CompositeByteBuf;
    abstract class InputEvent$MouseButton extends Internal.InputEvent {
        constructor()
        getButton(): number;
        getModifiers(): number;
        getAction(): number;
        get button(): number
        get modifiers(): number
        get action(): number
    }
    type InputEvent$MouseButton_ = InputEvent$MouseButton;
    class OvenBlock extends Internal.SmokerBlock {
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
        getTicker<T extends Internal.BlockEntity>(level: Internal.Level_, state: Internal.BlockState_, blockEntityType: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
    type OvenBlock_ = OvenBlock;
    class OffsetDateTime implements Internal.Temporal, Internal.TemporalAdjuster, Internal.Comparable<Internal.OffsetDateTime>, Internal.Serializable {
        getHour(): number;
        minusDays(arg0: number): this;
        getMonth(): Internal.Month;
        toLocalTime(): Internal.LocalTime;
        toInstant(): Internal.Instant;
        plus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        getDayOfWeek(): Internal.DayOfWeek;
        toZonedDateTime(): Internal.ZonedDateTime;
        withOffsetSameInstant(arg0: Internal.ZoneOffset_): this;
        compareTo(arg0: any): number;
        getMinute(): number;
        getDayOfMonth(): number;
        plusSeconds(arg0: number): this;
        plusMinutes(arg0: number): this;
        withDayOfYear(arg0: number): this;
        withYear(arg0: number): this;
        isSupported(arg0: Internal.TemporalField_): boolean;
        plusDays(arg0: number): this;
        format(arg0: Internal.DateTimeFormatter_): string;
        static parse(arg0: Internal.CharSequence_): Internal.OffsetDateTime;
        minusMinutes(arg0: number): this;
        plusWeeks(arg0: number): this;
        withHour(arg0: number): this;
        withOffsetSameLocal(arg0: Internal.ZoneOffset_): this;
        atZoneSimilarLocal(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        getYear(): number;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        withDayOfMonth(arg0: number): this;
        withMonth(arg0: number): this;
        get(arg0: Internal.TemporalField_): number;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        minusYears(arg0: number): this;
        toEpochSecond(): number;
        static now(arg0: Internal.Clock_): Internal.OffsetDateTime;
        toOffsetTime(): Internal.OffsetTime;
        compareTo(arg0: Internal.OffsetDateTime_): number;
        getMonthValue(): number;
        plusHours(arg0: number): this;
        isEqual(arg0: Internal.OffsetDateTime_): boolean;
        withNano(arg0: number): this;
        static now(): Internal.OffsetDateTime;
        minusNanos(arg0: number): this;
        plusMonths(arg0: number): this;
        static from(arg0: Internal.TemporalAccessor_): Internal.OffsetDateTime;
        toLocalDate(): Internal.LocalDate;
        "with"(arg0: Internal.TemporalField_, arg1: number): this;
        isAfter(arg0: Internal.OffsetDateTime_): boolean;
        "with"(arg0: Internal.TemporalAdjuster_): this;
        minusHours(arg0: number): this;
        isBefore(arg0: Internal.OffsetDateTime_): boolean;
        static ofInstant(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.OffsetDateTime;
        static timeLineOrder(): Internal.Comparator<Internal.OffsetDateTime>;
        getLong(arg0: Internal.TemporalField_): number;
        plusYears(arg0: number): this;
        minus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        getOffset(): Internal.ZoneOffset;
        static parse(arg0: Internal.CharSequence_, arg1: Internal.DateTimeFormatter_): Internal.OffsetDateTime;
        withSecond(arg0: number): this;
        static of(arg0: Internal.LocalDate_, arg1: Internal.LocalTime_, arg2: Internal.ZoneOffset_): Internal.OffsetDateTime;
        minusSeconds(arg0: number): this;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        getDayOfYear(): number;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        minusWeeks(arg0: number): this;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        minusMonths(arg0: number): this;
        toLocalDateTime(): Internal.LocalDateTime;
        getSecond(): number;
        getNano(): number;
        plus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        plusNanos(arg0: number): this;
        withMinute(arg0: number): this;
        static of(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneOffset_): Internal.OffsetDateTime;
        atZoneSameInstant(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.ZoneOffset_): Internal.OffsetDateTime;
        static now(arg0: Internal.ZoneId_): Internal.OffsetDateTime;
        minus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        get hour(): number
        get month(): Internal.Month
        get dayOfWeek(): Internal.DayOfWeek
        get minute(): number
        get dayOfMonth(): number
        get year(): number
        get monthValue(): number
        get offset(): Internal.ZoneOffset
        get dayOfYear(): number
        get second(): number
        get nano(): number
        static readonly MIN: Internal.OffsetDateTime;
        static readonly MAX: Internal.OffsetDateTime;
    }
    type OffsetDateTime_ = OffsetDateTime;
    class NoteBlockEvent$Play extends Internal.NoteBlockEvent {
        constructor()
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: number, arg4: Internal.NoteBlockInstrument_)
        setInstrument(arg0: Internal.NoteBlockInstrument_): void;
        getInstrument(): Internal.NoteBlockInstrument;
        set instrument(arg0: Internal.NoteBlockInstrument_)
        get instrument(): Internal.NoteBlockInstrument
    }
    type NoteBlockEvent$Play_ = NoteBlockEvent$Play;
    class AxisPipeBlock extends Internal.RotatedPillarBlock implements Internal.IWrenchableWithBracket, Internal.IAxisPipe {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tryRemoveBracket(arg0: Internal.UseOnContext_): boolean;
        getAxis(arg0: Internal.BlockState_): Internal.Direction$Axis;
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
        static isOpenAt(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
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
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        toRegularPipe(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.BlockState;
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
        static getAxisOf(arg0: Internal.BlockState_): Internal.Direction$Axis;
        removeBracket(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: boolean): Internal.Optional<Internal.ItemStack>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type AxisPipeBlock_ = AxisPipeBlock;
    interface UnmodifiableConfig {
        getOrElse<T>(arg0: string, arg1: T): T;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getLong(arg0: string): number;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getInt(arg0: Internal.List_<string>): number;
        getByteOrElse(arg0: string, arg1: number): number;
        getShortOrElse(arg0: string, arg1: number): number;
        get<T>(arg0: Internal.List_<string>): T;
        getCharOrElse(arg0: string, arg1: string): string;
        contains(arg0: string): boolean;
        getShort(arg0: Internal.List_<string>): number;
        getShortOrElse(arg0: Internal.List_<string>, arg1: number): number;
        isNull(arg0: Internal.List_<string>): boolean;
        getIntOrElse(arg0: Internal.List_<string>, arg1: number): number;
        abstract getRaw<T>(arg0: Internal.List_<string>): T;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        getOptionalLong(arg0: string): Internal.OptionalLong;
        getOptional<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getOptional<T>(arg0: string): Internal.Optional<T>;
        getShort(arg0: string): number;
        getOrElse<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        abstract entrySet(): Internal.Set<Internal.UnmodifiableConfig$Entry>;
        getChar(arg0: string): string;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: T): T;
        getOptionalLong(arg0: Internal.List_<string>): Internal.OptionalLong;
        getChar(arg0: Internal.List_<string>): string;
        get<T>(arg0: string): T;
        abstract contains(arg0: Internal.List_<string>): boolean;
        getLong(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        apply<T>(arg0: Internal.List_<string>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getInt(arg0: string): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: number): number;
        isEmpty(): boolean;
        getIntOrElse(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
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
        getLongOrElse(arg0: string, arg1: Internal.LongSupplier_): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        getByte(arg0: string): number;
        getIntOrElse(arg0: string, arg1: number): number;
        getOptionalInt(arg0: Internal.List_<string>): Internal.OptionalInt;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract configFormat(): Internal.ConfigFormat<any>;
        abstract size(): number;
        abstract valueMap(): Internal.Map<string, any>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        apply<T>(arg0: string): T;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        get empty(): boolean
    }
    type UnmodifiableConfig_ = UnmodifiableConfig;
    abstract class BossEvent {
        constructor(arg0: Internal.UUID_, arg1: Internal.Component_, arg2: Internal.BossEvent$BossBarColor_, arg3: Internal.BossEvent$BossBarOverlay_)
        getColor(): Internal.BossEvent$BossBarColor;
        shouldCreateWorldFog(): boolean;
        setCreateWorldFog(arg0: boolean): this;
        getProgress(): number;
        setPlayBossMusic(arg0: boolean): this;
        getName(): Internal.Component;
        getOverlay(): Internal.BossEvent$BossBarOverlay;
        setOverlay(arg0: Internal.BossEvent$BossBarOverlay_): void;
        setColor(arg0: Internal.BossEvent$BossBarColor_): void;
        setDarkenScreen(arg0: boolean): this;
        setName(arg0: Internal.Component_): void;
        setProgress(arg0: number): void;
        shouldPlayBossMusic(): boolean;
        getId(): Internal.UUID;
        shouldDarkenScreen(): boolean;
        get color(): Internal.BossEvent$BossBarColor
        set createWorldFog(arg0: boolean)
        get progress(): number
        set playBossMusic(arg0: boolean)
        get name(): Internal.Component
        get overlay(): Internal.BossEvent$BossBarOverlay
        set overlay(arg0: Internal.BossEvent$BossBarOverlay_)
        set color(arg0: Internal.BossEvent$BossBarColor_)
        set darkenScreen(arg0: boolean)
        set name(arg0: Internal.Component_)
        set progress(arg0: number)
        get id(): Internal.UUID
    }
    type BossEvent_ = BossEvent;
    class Sniffer$State extends Internal.Enum<Internal.Sniffer$State> {
        static valueOf(arg0: string): Internal.Sniffer$State;
        static values(): Internal.Sniffer$State[];
        static readonly SCENTING: Internal.Sniffer$State;
        static readonly FEELING_HAPPY: Internal.Sniffer$State;
        static readonly DIGGING: Internal.Sniffer$State;
        static readonly SEARCHING: Internal.Sniffer$State;
        static readonly IDLING: Internal.Sniffer$State;
        static readonly SNIFFING: Internal.Sniffer$State;
        static readonly RISING: Internal.Sniffer$State;
    }
    type Sniffer$State_ = Sniffer$State | "idling" | "sniffing" | "scenting" | "searching" | "rising" | "digging" | "feeling_happy";
    class CarverConfiguration extends Internal.ProbabilityFeatureConfiguration {
        constructor(arg0: number, arg1: Internal.HeightProvider_, arg2: Internal.FloatProvider_, arg3: Internal.VerticalAnchor_, arg4: Internal.CarverDebugSettings_, arg5: Internal.HolderSet_<Internal.Block>)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly lavaLevel: Internal.VerticalAnchor;
        readonly replaceable: Internal.HolderSet<Internal.Block>;
        readonly y: Internal.HeightProvider;
        readonly debugSettings: Internal.CarverDebugSettings;
        static readonly CODEC: Internal.MapCodec<Internal.CarverConfiguration>;
        readonly yScale: Internal.FloatProvider;
    }
    type CarverConfiguration_ = CarverConfiguration;
    class RandomSelectorFeature extends Internal.Feature<Internal.RandomFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.RandomFeatureConfiguration>)
    }
    type RandomSelectorFeature_ = RandomSelectorFeature;
    class BasaltColumnsFeature extends Internal.Feature<Internal.ColumnFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.ColumnFeatureConfiguration>)
    }
    type BasaltColumnsFeature_ = BasaltColumnsFeature;
    class KelpRollItem extends Internal.Item {
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
    type KelpRollItem_ = KelpRollItem;
    class ConfigSpec$CorrectionAction extends Internal.Enum<Internal.ConfigSpec$CorrectionAction> {
        static valueOf(arg0: string): Internal.ConfigSpec$CorrectionAction;
        static values(): Internal.ConfigSpec$CorrectionAction[];
        static readonly ADD: Internal.ConfigSpec$CorrectionAction;
        static readonly REPLACE: Internal.ConfigSpec$CorrectionAction;
        static readonly REMOVE: Internal.ConfigSpec$CorrectionAction;
    }
    type ConfigSpec$CorrectionAction_ = "replace" | "remove" | ConfigSpec$CorrectionAction | "add";
    class GoldTrapdoorBlock extends Internal.TrapDoorBlock {
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
        canBeOpened(state: Internal.BlockState_): boolean;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
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
    type GoldTrapdoorBlock_ = GoldTrapdoorBlock;
    class WrappedWorld extends Internal.Level {
        constructor(arg0: Internal.Level_)
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
        setChunkSource(arg0: Internal.ChunkSource_): void;
        getMinBuildHeight(): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        getDisplayName(): Internal.Component;
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
        getChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        getHeight(): number;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
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
        getName(): Internal.Component;
        canSeeSky(arg0: BlockPos_): boolean;
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
        getLevel(): Internal.Level;
        getMoonBrightness(): number;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        getSide(): Internal.ScriptType;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        tell(message: Internal.Component_): void;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        setStatusMessage(message: Internal.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        getMaxLightLevel(): number;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        isOverworld(): boolean;
        runCommand(command: string): number;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        set chunkSource(arg0: Internal.ChunkSource_)
        get minBuildHeight(): number
        get displayName(): Internal.Component
        get height(): number
        get partEntities(): Internal.Collection<Internal.PartEntity<any>>
        get dimension(): ResourceLocation
        get difficulty(): Internal.Difficulty
        get name(): Internal.Component
        get moonPhase(): number
        get level(): Internal.Level
        get moonBrightness(): number
        get side(): Internal.ScriptType
        get modelDataManager(): Internal.ModelDataManager
        get entities(): Internal.EntityArrayList
        set statusMessage(message: Internal.Component_)
        get players(): Internal.EntityArrayList
        get maxLightLevel(): number
        get overworld(): boolean
    }
    type WrappedWorld_ = WrappedWorld;
    abstract class ItemDisplayTile extends Internal.RandomizableContainerBlockEntity implements Internal.IOwnerProtected, Internal.WorldlyContainer {
        stopOpen(arg0: Internal.Player_): void;
        static tryClear(arg0: any): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        needsToUpdateClientWhenChanged(): boolean;
        saveOwner(tag: Internal.CompoundTag_): void;
        clear(ingredient: Internal.Ingredient_): void;
        getAddItemSound(): Internal.SoundEvent;
        isNotOwnedBy(player: Internal.Player_): boolean;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        setChanged(): void;
        isPublic(): boolean;
        onLoad(): void;
        getSlotsForFace(side: Internal.Direction_): number[];
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        interact(player: Internal.Player_, handIn: Internal.InteractionHand_, slot: number): Internal.InteractionResult;
        kjs$self(): Internal.Container;
        getWidth(): number;
        isOwnedBy(player: Internal.Player_): boolean;
        getSlotLimit(slot: number): number;
        setOwner(owner: Internal.UUID_): void;
        getCapability(capability: Internal.Capability_<any>, facing: Internal.Direction_): Internal.LazyOptional<any>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        hasCustomName(): boolean;
        m_183515_(compound: Internal.CompoundTag_): void;
        canTakeItemThroughFace(index: number, stack: Internal.ItemStack_, direction: Internal.Direction_): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        loadOwner(tag: Internal.CompoundTag_): void;
        interact(player: Internal.Player_, handIn: Internal.InteractionHand_): Internal.InteractionResult;
        countItem(arg0: Internal.Item_): number;
        updateTileOnInventoryChanged(): void;
        updateClientVisualsOnLoad(): void;
        isEmpty(): boolean;
        startOpen(arg0: Internal.Player_): void;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        canPlaceItemThroughFace(index: number, stack: Internal.ItemStack_, direction: Internal.Direction_): boolean;
        getUpdatePacket(): Internal.Packet<any>;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        isAccessibleBy(player: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        m_6520_(stacks: Internal.NonNullList_<Internal.ItemStack>): void;
        getOwner(): Internal.UUID;
        getDisplayedItem(): Internal.ItemStack;
        setDisplayedItem(stack: Internal.ItemStack_): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        m_6555_(id: number, player: Internal.Inventory_): Internal.AbstractContainerMenu;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get addItemSound(): Internal.SoundEvent
        get slots(): number
        get "public"(): boolean
        get width(): number
        set owner(owner: Internal.UUID_)
        get renderBoundingBox(): Internal.AABB
        get empty(): boolean
        get updatePacket(): Internal.Packet<any>
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get owner(): Internal.UUID
        get displayedItem(): Internal.ItemStack
        set displayedItem(stack: Internal.ItemStack_)
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get modelData(): Internal.ModelData
        get mutable(): boolean
    }
    type ItemDisplayTile_ = ItemDisplayTile;
    interface LiquidBlockContainer {
        abstract canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        abstract placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
    }
    type LiquidBlockContainer_ = LiquidBlockContainer;
    interface Command <S> {
        abstract run(arg0: Internal.CommandContext_<S>): number;
        (arg0: Internal.CommandContext<S>): number;
        readonly SINGLE_SUCCESS: 1;
    }
    type Command_<S> = Command<S>;
    class WritingMode extends Internal.Enum<Internal.WritingMode> {
        static values(): Internal.WritingMode[];
        static valueOf(arg0: string): Internal.WritingMode;
        static readonly REPLACE: Internal.WritingMode;
        static readonly APPEND: Internal.WritingMode;
    }
    type WritingMode_ = "replace" | WritingMode | "append";
    abstract class SoftFluidTank {
        abstract getTintColor(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_): number;
        tryTransferFluid(destination: Internal.SoftFluidTank_, amount: number): boolean;
        tryFillingItem(emptyContainer: Internal.Item_, world: Internal.Level_, pos: BlockPos_, simulate: boolean): Internal.ItemStack;
        getCount(): number;
        static create(capacity: number): Internal.SoftFluidTank;
        getFluid(): Internal.SoftFluid;
        isEmpty(): boolean;
        setFluid(fluid: Internal.SoftFluid_): void;
        save(compound: Internal.CompoundTag_): Internal.CompoundTag;
        interactWithPlayer(player: Internal.Player_, hand: Internal.InteractionHand_, world: Internal.Level_, pos: BlockPos_): boolean;
        getComparatorOutput(): number;
        tryFillingBowl(world: Internal.Level_, pos: BlockPos_): Internal.ItemStack;
        setNbt(nbt: Internal.CompoundTag_): void;
        shrink(inc: number): void;
        load(compound: Internal.CompoundTag_): void;
        isSameFluidAs(other: Internal.SoftFluid_, com: Internal.CompoundTag_): boolean;
        fillCount(): void;
        fill(fluid: Internal.SoftFluid_, nbt: Internal.CompoundTag_): void;
        tryAddingFluid(s: Internal.SoftFluid_, count: number): boolean;
        containsFood(): boolean;
        tryFillingBottle(world: Internal.Level_, pos: BlockPos_): Internal.ItemStack;
        tryDrinkUpFluid(player: Internal.Player_, world: Internal.Level_): boolean;
        getNbt(): Internal.CompoundTag;
        tryDrainItem(filledContainerStack: Internal.ItemStack_, world: Internal.Level_, pos: BlockPos_, simulate: boolean, playSound: boolean): Internal.ItemStack;
        tryFillingBucket(world: Internal.Level_, pos: BlockPos_): Internal.ItemStack;
        isFull(): boolean;
        canAddSoftFluid(s: Internal.SoftFluid_, count: number): boolean;
        interactWithItem(stack: Internal.ItemStack_, world: Internal.Level_, pos: BlockPos_, simulate: boolean): Internal.ItemStack;
        isSameFluidAs(other: Internal.SoftFluid_): boolean;
        getHeight(maxHeight: number): number;
        tryAddingFluid(s: Internal.SoftFluid_): boolean;
        setCount(count: number): void;
        abstract getFlowingTint(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_): number;
        fill(fluid: Internal.SoftFluid_): void;
        setFluid(fluid: Internal.SoftFluid_, nbt: Internal.CompoundTag_): void;
        canAddSoftFluid(s: Internal.SoftFluid_, count: number, nbt: Internal.CompoundTag_): boolean;
        abstract getParticleColor(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_): number;
        tryFillingItem(emptyContainer: Internal.Item_, world: Internal.Level_, pos: BlockPos_, simulate: boolean, playSound: boolean): Internal.ItemStack;
        tryTransferFluid(destination: Internal.SoftFluidTank_): boolean;
        static getLiquidCountFromItem(i: Internal.Item_): number;
        lossyAdd(inc: number): void;
        clear(): void;
        tryAddingFluid(s: Internal.SoftFluid_, count: number, com: Internal.CompoundTag_): boolean;
        copy(other: Internal.SoftFluidTank_): void;
        grow(inc: number): void;
        tryDrainItem(filledContainerStack: Internal.ItemStack_, world: Internal.Level_, pos: BlockPos_, simulate: boolean): Internal.ItemStack;
        get count(): number
        get fluid(): Internal.SoftFluid
        get empty(): boolean
        set fluid(fluid: Internal.SoftFluid_)
        get comparatorOutput(): number
        set nbt(nbt: Internal.CompoundTag_)
        get nbt(): Internal.CompoundTag
        get full(): boolean
        set count(count: number)
        static readonly POTION_TYPE_KEY: "Bottle";
        static readonly BUCKET_COUNT: 4;
        static readonly BOTTLE_COUNT: 1;
        static readonly BOWL_COUNT: 2;
    }
    type SoftFluidTank_ = SoftFluidTank;
    class BeeDebugRenderer$HiveInfo {
        constructor(arg0: BlockPos_, arg1: string, arg2: number, arg3: number, arg4: boolean, arg5: number)
        readonly pos: BlockPos;
        readonly occupantCount: number;
        readonly lastSeen: number;
        readonly hiveType: string;
        readonly sedated: boolean;
        readonly honeyLevel: number;
    }
    type BeeDebugRenderer$HiveInfo_ = BeeDebugRenderer$HiveInfo;
    class HashMap <K, V> extends Internal.AbstractMap<K, V> implements Internal.Cloneable, Internal.Map<K, V>, Internal.Serializable {
        constructor(arg0: Internal.Map_<K, V>)
        constructor()
        constructor(arg0: number)
        constructor(arg0: number, arg1: number)
        clone(): any;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        replace(arg0: K, arg1: V): V;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: K, arg1: V): V;
        get(arg0: any): V;
        remove(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        keySet(): Internal.Set<K>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        values(): Internal.Collection<V>;
        entrySet(): Internal.Set<Internal.Map$Entry<K, V>>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
    }
    type HashMap_<K, V> = HashMap<K, V>;
    class RedStoneWireBlock extends Internal.Block {
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
        static getColorForPower(arg0: number): number;
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
        static readonly WEST: Internal.EnumProperty<Internal.RedstoneSide>;
        static readonly PROPERTY_BY_DIRECTION: {[key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>};
        static readonly NORTH: Internal.EnumProperty<Internal.RedstoneSide>;
        static readonly SOUTH: Internal.EnumProperty<Internal.RedstoneSide>;
        static readonly EAST: Internal.EnumProperty<Internal.RedstoneSide>;
        static readonly POWER: Internal.IntegerProperty;
    }
    type RedStoneWireBlock_ = RedStoneWireBlock;
    class QuickChargeEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type QuickChargeEnchantment_ = QuickChargeEnchantment;
    interface PrintEntry {
        abstract valid(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        abstract isTooExpensive(arg0: Internal.ItemStack_, arg1: number): boolean;
        abstract addToGoggleTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.ItemStack_): void;
        abstract requiredInkAmount(arg0: Internal.ItemStack_): number;
        requiredInkType(arg0: Internal.ItemStack_): Internal.Fluid;
        abstract id(): ResourceLocation;
        abstract getDisplaySourceContent(arg0: Internal.ItemStack_): Internal.MutableComponent;
        abstract match(arg0: Internal.ItemStack_): boolean;
        print(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): Internal.ItemStack;
    }
    type PrintEntry_ = PrintEntry;
    interface Multimap <K, V> {
        abstract keySet(): Internal.Set<K>;
        abstract replaceValues(arg0: K, arg1: Internal.Iterable_<V>): Internal.Collection<V>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        abstract get(arg0: K): Internal.Collection<V>;
        abstract removeAll(arg0: any): Internal.Collection<V>;
        abstract entries(): Internal.Collection<Internal.Map$Entry<K, V>>;
        abstract values(): Internal.Collection<V>;
        abstract containsValue(arg0: any): boolean;
        abstract remove(arg0: any, arg1: any): boolean;
        abstract isEmpty(): boolean;
        abstract containsEntry(arg0: any, arg1: any): boolean;
        abstract hashCode(): number;
        abstract size(): number;
        abstract containsKey(arg0: any): boolean;
        abstract putAll(arg0: Internal.Multimap_<K, V>): boolean;
        abstract put(arg0: K, arg1: V): boolean;
        abstract clear(): void;
        abstract putAll(arg0: K, arg1: Internal.Iterable_<V>): boolean;
        abstract equals(arg0: any): boolean;
        abstract keys(): Internal.Multiset<K>;
        abstract asMap(): Internal.Map<K, Internal.Collection<V>>;
        get empty(): boolean
    }
    type Multimap_<K, V> = Multimap<K, V>;
    interface ContainerEventHandler extends Internal.GuiEventListener {
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        magicalSpecialHackyFocus(arg0: Internal.GuiEventListener_): void;
        setFocused(arg0: boolean): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        getTabOrderGroup(): number;
        abstract setFocused(arg0: Internal.GuiEventListener_): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getCurrentFocusPath(): Internal.ComponentPath;
        abstract setDragging(arg0: boolean): void;
        abstract children(): Internal.List<Internal.GuiEventListener>;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        abstract isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): Internal.Optional<Internal.GuiEventListener>;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        abstract getFocused(): Internal.GuiEventListener;
        isMouseOver(arg0: number, arg1: number): boolean;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        get focused(): boolean
        set focused(arg0: boolean)
        get tabOrderGroup(): number
        set focused(arg0: Internal.GuiEventListener_)
        get currentFocusPath(): Internal.ComponentPath
        set dragging(arg0: boolean)
        get dragging(): boolean
        get rectangle(): Internal.ScreenRectangle
        get focused(): Internal.GuiEventListener
    }
    type ContainerEventHandler_ = ContainerEventHandler;
    class EvaluatorException extends Internal.RhinoException {
        constructor(cx: Internal.Context_, detail: string, sourceName: string, lineNumber: number, lineSource: string, columnNumber: number)
        constructor(cx: Internal.Context_, detail: string, sourceName: string, lineNumber: number)
        constructor(cx: Internal.Context_, detail: string)
    }
    type EvaluatorException_ = EvaluatorException;
    class CopyNbtMechanicalCraftingRecipe$Serializer extends Internal.MechanicalCraftingRecipe$Serializer {
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ShapedRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        static readonly INSTANCE: Internal.CopyNbtMechanicalCraftingRecipe$Serializer;
    }
    type CopyNbtMechanicalCraftingRecipe$Serializer_ = CopyNbtMechanicalCraftingRecipe$Serializer;
    abstract class JsonElement {
        constructor()
        isJsonNull(): boolean;
        isJsonPrimitive(): boolean;
        getAsBigDecimal(): Internal.BigDecimal;
        getAsBigInteger(): Internal.BigInteger;
        getAsDouble(): number;
        getAsJsonPrimitive(): Internal.JsonPrimitive;
        /**
         * @deprecated
        */
        getAsCharacter(): string;
        getAsLong(): number;
        getAsFloat(): number;
        getAsInt(): number;
        getAsString(): string;
        isJsonObject(): boolean;
        getAsByte(): number;
        getAsJsonArray(): Internal.JsonArray;
        isJsonArray(): boolean;
        getAsNumber(): number;
        abstract deepCopy(): this;
        getAsJsonObject(): Internal.JsonObject;
        getAsShort(): number;
        getAsJsonNull(): Internal.JsonNull;
        getAsBoolean(): boolean;
        get jsonNull(): boolean
        get jsonPrimitive(): boolean
        get asBigDecimal(): Internal.BigDecimal
        get asBigInteger(): Internal.BigInteger
        get asDouble(): number
        get asJsonPrimitive(): Internal.JsonPrimitive
        /**
         * @deprecated
        */
        get asCharacter(): string
        get asLong(): number
        get asFloat(): number
        get asInt(): number
        get asString(): string
        get jsonObject(): boolean
        get asByte(): number
        get asJsonArray(): Internal.JsonArray
        get jsonArray(): boolean
        get asNumber(): number
        get asJsonObject(): Internal.JsonObject
        get asShort(): number
        get asJsonNull(): Internal.JsonNull
        get asBoolean(): boolean
    }
    type JsonElement_ = JsonElement;
    class ComparatorBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        setOutputSignal(arg0: number): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getOutputSignal(): number;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        set outputSignal(arg0: number)
        get modelData(): Internal.ModelData
        get outputSignal(): number
        get renderBoundingBox(): Internal.AABB
    }
    type ComparatorBlockEntity_ = ComparatorBlockEntity;
    class TallFlowerBlock extends Internal.DoublePlantBlock implements Internal.BonemealableBlock {
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
    type TallFlowerBlock_ = TallFlowerBlock;
    class FluidPipeBlockEntity extends Internal.SmartBlockEntity implements Internal.ITransformableBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        transform(arg0: Internal.StructureTransform_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
    }
    type FluidPipeBlockEntity_ = FluidPipeBlockEntity;
    interface IRecipeCategory <T> {
        getWidth(): number;
        getRegistryName(arg0: T): ResourceLocation;
        abstract getTitle(): Internal.Component;
        handleInput(arg0: T, arg1: number, arg2: number, arg3: Internal.InputConstants$Key_): boolean;
        abstract getRecipeType(): mezz.jei.api.recipe.RecipeType<T>;
        draw(arg0: T, arg1: Internal.IRecipeSlotsView_, arg2: Internal.GuiGraphics_, arg3: number, arg4: number): void;
        abstract setRecipe(arg0: Internal.IRecipeLayoutBuilder_, arg1: T, arg2: Internal.IFocusGroup_): void;
        getHeight(): number;
        isHandled(arg0: T): boolean;
        abstract getIcon(): Internal.IDrawable;
        getTooltipStrings(arg0: T, arg1: Internal.IRecipeSlotsView_, arg2: number, arg3: number): Internal.List<Internal.Component>;
        abstract getBackground(): Internal.IDrawable;
        get width(): number
        get title(): Internal.Component
        get recipeType(): mezz.jei.api.recipe.RecipeType<T>
        get height(): number
        get icon(): Internal.IDrawable
        get background(): Internal.IDrawable
    }
    type IRecipeCategory_<T> = IRecipeCategory<T>;
    interface PlayerKJS extends Internal.DataSenderKJS, Internal.WithAttachedData<Internal.Player>, Internal.LivingEntityKJS {
        getDistance(pos: BlockPos_): number;
        isFake(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        getStats(): Internal.PlayerStatsJS;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        addFood(f: number, m: number): void;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getXpLevel(): number;
        setSelectedSlot(index: number): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        paint(renderer: Internal.CompoundTag_): void;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        getFoodLevel(): number;
        notify(title: Internal.Component_, text: Internal.Component_): void;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        getCraftingGrid(): Internal.InventoryKJS;
        setXpLevel(l: number): void;
        setFoodLevel(foodLevel: number): void;
        setSaturation(saturation: number): void;
        addXPLevels(l: number): void;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getReachDistance(): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getPersistentData(): Internal.CompoundTag;
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
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        isAmbientCreature(): boolean;
        getInventoryChangeListener(): Internal.KubeJSInventoryListener;
        notify(builder: Notification_): void;
        isMonster(): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getStages(): Internal.Stages;
        getName(): Internal.Component;
        boostElytraFlight(): void;
        addExhaustion(exhaustion: number): void;
        getPassengers(): Internal.EntityArrayList;
        giveInHand(item: Internal.ItemStack_): void;
        setMouseItem(item: Internal.ItemStack_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        addXP(xp: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        getInventory(): Internal.InventoryKJS;
        give(item: Internal.ItemStack_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getFeetArmorItem(): Internal.ItemStack;
        setDefaultMovementSpeed(speed: number): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        getMainHandItem(): Internal.ItemStack;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        sendInventoryUpdate(): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        getMouseItem(): Internal.ItemStack;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        abstract getData(): Internal.AttachedData<Internal.Player>;
        getProfile(): Internal.GameProfile;
        getSaturation(): number;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        runCommand(command: string): number;
        addItemCooldown(item: Internal.Item_, ticks: number): void;
        get fake(): boolean
        get stats(): Internal.PlayerStatsJS
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get xpLevel(): number
        set selectedSlot(index: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get foodLevel(): number
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get craftingGrid(): Internal.InventoryKJS
        set xpLevel(l: number)
        set foodLevel(foodLevel: number)
        set saturation(saturation: number)
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get persistentData(): Internal.CompoundTag
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
        get undead(): boolean
        get ambientCreature(): boolean
        get inventoryChangeListener(): Internal.KubeJSInventoryListener
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get stages(): Internal.Stages
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set mouseItem(item: Internal.ItemStack_)
        set totalMovementSpeedMultiplier(speed: number)
        get inventory(): Internal.InventoryKJS
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
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get mouseItem(): Internal.ItemStack
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get data(): Internal.AttachedData<Internal.Player>
        get profile(): Internal.GameProfile
        get saturation(): number
        set headArmorItem(item: Internal.ItemStack_)
        (): Internal.AttachedData_<Internal.Player>;
    }
    type PlayerKJS_ = PlayerKJS;
    class ArgumentTypeWrappers extends Internal.Enum<Internal.ArgumentTypeWrappers> implements Internal.ArgumentTypeWrapper {
        static registry<T>(event: Internal.CommandRegistryEventJS_, reg: ResourceLocation_): Internal.ArgumentTypeWrapper;
        static printAll(): void;
        static values(): Internal.ArgumentTypeWrappers[];
        getResult(context: Internal.CommandContext_<Internal.CommandSourceStack>, input: string): any;
        static valueOf(name: string): Internal.ArgumentTypeWrappers;
        create(event: Internal.CommandRegistryEventJS_): Internal.ArgumentType<any>;
        time(minRequired: number): Internal.ArgumentTypeWrapper;
        static byName(name: ResourceLocation_): typeof any;
        static readonly NBT_PATH: Internal.ArgumentTypeWrappers;
        static readonly ENTITY_ANCHOR: Internal.ArgumentTypeWrappers;
        static readonly PLAYERS: Internal.ArgumentTypeWrappers;
        static readonly VEC2_CENTERED: Internal.ArgumentTypeWrappers;
        static readonly COMPONENT: Internal.ArgumentTypeWrappers;
        static readonly DOUBLE: Internal.ArgumentTypeWrappers;
        static readonly WORD: Internal.ArgumentTypeWrappers;
        static readonly BOOLEAN: Internal.ArgumentTypeWrappers;
        static readonly ENTITY: Internal.ArgumentTypeWrappers;
        static readonly COLUMN_POS: Internal.ArgumentTypeWrappers;
        static readonly FLOAT: Internal.ArgumentTypeWrappers;
        static readonly COLOR: Internal.ArgumentTypeWrappers;
        static readonly ITEM_STACK: Internal.ArgumentTypeWrappers;
        static readonly OBJECTIVE: Internal.ArgumentTypeWrappers;
        static readonly DIMENSION: Internal.ArgumentTypeWrappers;
        static readonly BLOCK_POS_LOADED: Internal.ArgumentTypeWrappers;
        static readonly MESSAGE: Internal.ArgumentTypeWrappers;
        static readonly TIME: Internal.ArgumentTypeWrappers;
        static readonly LONG: Internal.ArgumentTypeWrappers;
        static readonly ROTATION: Internal.ArgumentTypeWrappers;
        static readonly PLAYER: Internal.ArgumentTypeWrappers;
        static readonly BLOCK_PREDICATE: Internal.ArgumentTypeWrappers;
        static readonly GAME_PROFILE: Internal.ArgumentTypeWrappers;
        static readonly VEC2: Internal.ArgumentTypeWrappers;
        static readonly ITEM_PREDICATE: Internal.ArgumentTypeWrappers;
        static readonly FLOAT_RANGE: Internal.ArgumentTypeWrappers;
        static readonly STRING: Internal.ArgumentTypeWrappers;
        static readonly NBT_COMPOUND: Internal.ArgumentTypeWrappers;
        static readonly GREEDY_STRING: Internal.ArgumentTypeWrappers;
        static readonly SWIZZLE: Internal.ArgumentTypeWrappers;
        static readonly BLOCK_STATE: Internal.ArgumentTypeWrappers;
        static readonly ENTITIES: Internal.ArgumentTypeWrappers;
        static readonly RESOURCE_LOCATION: Internal.ArgumentTypeWrappers;
        static readonly NBT_TAG: Internal.ArgumentTypeWrappers;
        static readonly ANGLE: Internal.ArgumentTypeWrappers;
        static readonly VEC3_CENTERED: Internal.ArgumentTypeWrappers;
        static readonly PARTICLE: Internal.ArgumentTypeWrappers;
        static readonly INTEGER: Internal.ArgumentTypeWrappers;
        static readonly INT_RANGE: Internal.ArgumentTypeWrappers;
        static readonly UUID: Internal.ArgumentTypeWrappers;
        static readonly BLOCK_POS: Internal.ArgumentTypeWrappers;
        static readonly VEC3: Internal.ArgumentTypeWrappers;
        static readonly ITEM_SLOT: Internal.ArgumentTypeWrappers;
    }
    type ArgumentTypeWrappers_ = "nbt_compound" | "player" | "block_predicate" | "int_range" | "particle" | "players" | "uuid" | "angle" | "entities" | "rotation" | "block_state" | "time" | "greedy_string" | "vec2_centered" | ArgumentTypeWrappers | "dimension" | "double" | "vec2" | "float_range" | "entity_anchor" | "color" | "component" | "nbt_tag" | "message" | "integer" | "item_slot" | "game_profile" | "nbt_path" | "float" | "column_pos" | "swizzle" | "item_predicate" | "objective" | "item_stack" | "long" | "block_pos" | "resource_location" | "string" | "block_pos_loaded" | "vec3" | "word" | "boolean" | "vec3_centered" | "entity";
    class PropertyParam extends Internal.AbstractProperty<Internal.PropertyParam> {
        constructor()
        constructor(name: string, type: Internal.PropertyType_<any>, isVarArg: boolean)
        isVarArg(): boolean;
        getType(): Internal.PropertyType<any>;
        copy(): Internal.AbstractDocumentBase<any>;
        getName(): string;
        static fromJava(info: Internal.MethodInfo$ParamInfo_): Internal.PropertyParam;
        get varArg(): boolean
        get type(): Internal.PropertyType<any>
        get name(): string
    }
    type PropertyParam_ = PropertyParam;
    interface DirectBeltInputBehaviour$AvailabilityPredicate {
        abstract test(arg0: Internal.Direction_): boolean;
        (arg0: Internal.Direction): boolean;
    }
    type DirectBeltInputBehaviour$AvailabilityPredicate_ = DirectBeltInputBehaviour$AvailabilityPredicate;
    class BiasedToBottomInt extends Internal.IntProvider {
        static of(arg0: number, arg1: number): Internal.BiasedToBottomInt;
        static readonly CODEC: Internal.Codec<Internal.BiasedToBottomInt>;
    }
    type BiasedToBottomInt_ = BiasedToBottomInt;
    interface FireBlockForgeAccessor {
        abstract puzzleslib$setFlammable(arg0: Internal.Block_, arg1: number, arg2: number): void;
        (arg0: Internal.Block, arg1: number, arg2: number): void;
    }
    type FireBlockForgeAccessor_ = FireBlockForgeAccessor;
    abstract class RenderGuiEvent extends Internal.Event {
        constructor()
        getGuiGraphics(): Internal.GuiGraphics;
        getPartialTick(): number;
        getWindow(): Internal.Window;
        get guiGraphics(): Internal.GuiGraphics
        get partialTick(): number
        get window(): Internal.Window
    }
    type RenderGuiEvent_ = RenderGuiEvent;
    class DataPackRegistryEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
    }
    type DataPackRegistryEvent_ = DataPackRegistryEvent;
    class BellBlock extends Internal.BaseEntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        attemptToRing(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
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
        attemptToRing(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        handler$zdi000$updateShape(stateIn: Internal.BlockState_, facing: Internal.Direction_, facingState: Internal.BlockState_, worldIn: Internal.LevelAccessor_, currentPos: BlockPos_, facingPos: BlockPos_, info: Internal.CallbackInfoReturnable_<any>): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        tryConnect(pos: BlockPos_, facingState: Internal.BlockState_, world: Internal.LevelAccessor_): boolean;
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
        onHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Player_, arg4: boolean): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly EVENT_BELL_RING: 1;
        static readonly ATTACHMENT: Internal.EnumProperty<Internal.BellAttachType>;
        static readonly FACING: Internal.DirectionProperty;
        static readonly POWERED: Internal.BooleanProperty;
    }
    type BellBlock_ = BellBlock;
    class UserType extends Internal.Enum<Internal.UserType> {
        static values(): Internal.UserType[];
        static byName(arg0: string): Internal.UserType;
        getName(): string;
        static valueOf(arg0: string): Internal.UserType;
        get name(): string
        static readonly MOJANG: Internal.UserType;
        static readonly LEGACY: Internal.UserType;
    }
    type UserType_ = "mojang" | "legacy" | UserType;
    /**
     * Invoked when the debug info is rendered.
    */
    class DebugInfoEventJS extends Internal.ClientEventJS {
        constructor(l: Internal.List_<string>)
        getEntity(): Internal.Player;
        /**
         * Whether the debug info should be rendered.
        */
        getShowDebug(): boolean;
        /**
         * The lines of debug info. Mutating this list will change the debug info.
        */
        getLines(): Internal.List<string>;
        get entity(): Internal.Player
        /**
         * Whether the debug info should be rendered.
        */
        get showDebug(): boolean
        /**
         * The lines of debug info. Mutating this list will change the debug info.
        */
        get lines(): Internal.List<string>
    }
    type DebugInfoEventJS_ = DebugInfoEventJS;
    interface ItemTooltipEventJS$StaticTooltipHandlerFromJS {
        abstract accept(itemStack: Internal.ItemStack_, isAdvanced: boolean, lines: Internal.List_<Internal.Component_>): void;
        (arg0: Internal.ItemStack, arg1: boolean, arg2: Internal.List<any>): void;
    }
    type ItemTooltipEventJS$StaticTooltipHandlerFromJS_ = ItemTooltipEventJS$StaticTooltipHandlerFromJS;
    class PlayerEvent$BreakSpeed extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.BlockState_, arg2: number, arg3: BlockPos_)
        getPosition(): Internal.Optional<BlockPos>;
        getOriginalSpeed(): number;
        getEntity(): Internal.LivingEntity;
        getNewSpeed(): number;
        getState(): Internal.BlockState;
        setNewSpeed(arg0: number): void;
        get position(): Internal.Optional<BlockPos>
        get originalSpeed(): number
        get entity(): Internal.LivingEntity
        get newSpeed(): number
        get state(): Internal.BlockState
        set newSpeed(arg0: number)
    }
    type PlayerEvent$BreakSpeed_ = PlayerEvent$BreakSpeed;
    class WallTorchBlock extends Internal.TorchBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.ParticleOptions_)
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
        static getShape(arg0: Internal.BlockState_): Internal.VoxelShape;
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
    type WallTorchBlock_ = WallTorchBlock;
    class SpoutBlockEntity extends Internal.SmartBlockEntity implements Internal.SpoutBlockEntityAccessor, Internal.IHaveGoggleInformation {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getTank(): Internal.SmartFluidTankBehaviour;
        requestModelDataUpdate(): void;
        getModelData(): Internal.ModelData;
        addToGoggleTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean): boolean;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get tank(): Internal.SmartFluidTankBehaviour
        get modelData(): Internal.ModelData
        customProcess: Internal.BlockSpoutingBehaviour;
        static readonly FILLING_TIME: 20;
        sendSplash: boolean;
        processingTicks: number;
    }
    type SpoutBlockEntity_ = SpoutBlockEntity;
    class ServerboundContainerClosePacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getContainerId(): number;
        isSkippable(): boolean;
        get containerId(): number
        get skippable(): boolean
    }
    type ServerboundContainerClosePacket_ = ServerboundContainerClosePacket;
    class AllOfPredicate extends Internal.CombiningPredicate {
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
        static readonly CODEC: Internal.Codec<Internal.AllOfPredicate>;
    }
    type AllOfPredicate_ = AllOfPredicate;
    interface HolderLookup <T> extends Internal.HolderGetter<T> {
        listElementIds(): Internal.Stream<Internal.ResourceKey<T>>;
        abstract get(arg0: Internal.TagKey_<T>): Internal.Optional<Internal.HolderSet$Named<T>>;
        filterElements(arg0: Internal.Predicate_<T>): this;
        listTagIds(): Internal.Stream<Internal.TagKey<T>>;
        abstract get(arg0: Internal.ResourceKey_<T>): Internal.Optional<Internal.Holder$Reference<T>>;
        abstract listElements(): Internal.Stream<Internal.Holder$Reference<T>>;
        abstract listTags(): Internal.Stream<Internal.HolderSet$Named<T>>;
        getOrThrow(arg0: Internal.TagKey_<T>): Internal.HolderSet$Named<T>;
        getOrThrow(arg0: Internal.ResourceKey_<T>): Internal.Holder$Reference<T>;
    }
    type HolderLookup_<T> = HolderLookup<T>;
    interface TypeWrapperFactory <T> {
        abstract wrap(arg0: Internal.Context_, arg1: any): T;
        (arg0: Internal.Context, arg1: any): T;
    }
    type TypeWrapperFactory_<T> = TypeWrapperFactory<T>;
    interface RegistrarOption {
    }
    type RegistrarOption_ = RegistrarOption;
    abstract class NumericTag implements Internal.Tag, Internal.SpecialEquality {
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        specialEquals(o: any, shallow: boolean): boolean;
        abstract getAsDouble(): number;
        abstract accept(arg0: Internal.TagVisitor_): void;
        abstract sizeInBytes(): number;
        abstract getAsLong(): number;
        abstract getAsFloat(): number;
        abstract getAsInt(): number;
        abstract getType(): Internal.TagType<any>;
        getAsString(): string;
        abstract getAsByte(): number;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        abstract getAsNumber(): number;
        abstract copy(): Internal.Tag;
        abstract write(arg0: Internal.DataOutput_): void;
        abstract getId(): number;
        abstract getAsShort(): number;
        abstract accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        get asDouble(): number
        get asLong(): number
        get asFloat(): number
        get asInt(): number
        get type(): Internal.TagType<any>
        get asString(): string
        get asByte(): number
        get asNumber(): number
        get id(): number
        get asShort(): number
    }
    type NumericTag_ = NumericTag;
    interface BundlerInfo$Provider {
        abstract getBundlerInfo(arg0: Internal.PacketFlow_): Internal.BundlerInfo;
        (arg0: Internal.PacketFlow): Internal.BundlerInfo_;
    }
    type BundlerInfo$Provider_ = BundlerInfo$Provider;
    class HumanoidArmorLayer <T extends Internal.LivingEntity, M extends Internal.HumanoidModel<T>, A extends Internal.HumanoidModel<T>> extends Internal.RenderLayer<T, M> implements Internal.HumanoidArmorLayerAccessor {
        constructor(arg0: Internal.RenderLayerParent_<T, M>, arg1: A, arg2: A, arg3: Internal.ModelManager_)
        create$getInnerModel(): Internal.HumanoidModel<any>;
        static create$getArmorLocationCache(): Internal.Map<string, ResourceLocation>;
        create$getOuterModel(): Internal.HumanoidModel<any>;
        static create$getArmorLocationCache_$md$366fca$2(): Internal.Map<any, any>;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        handler$zln000$simplehats_renderArmorPiece(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: Internal.LivingEntity_, arg3: Internal.EquipmentSlot_, arg4: number, arg5: Internal.HumanoidModel_<any>, arg6: Internal.CallbackInfo_): void;
        getArmorResource(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: Internal.EquipmentSlot_, arg3: string): ResourceLocation;
        create$callSetPartVisibility(arg0: Internal.HumanoidModel_<any>, arg1: Internal.EquipmentSlot_): void;
    }
    type HumanoidArmorLayer_<T extends Internal.LivingEntity, M extends Internal.HumanoidModel<T>, A extends Internal.HumanoidModel<T>> = HumanoidArmorLayer<T, M, A>;
    class LevelSettings {
        constructor(arg0: string, arg1: Internal.GameType_, arg2: boolean, arg3: Internal.Difficulty_, arg4: boolean, arg5: Internal.GameRules_, arg6: Internal.WorldDataConfiguration_, arg7: Internal.Lifecycle_)
        constructor(arg0: string, arg1: Internal.GameType_, arg2: boolean, arg3: Internal.Difficulty_, arg4: boolean, arg5: Internal.GameRules_, arg6: Internal.WorldDataConfiguration_)
        difficulty(): Internal.Difficulty;
        getLifecycle(): Internal.Lifecycle;
        withDataConfiguration(arg0: Internal.WorldDataConfiguration_): this;
        allowCommands(): boolean;
        levelName(): string;
        withGameType(arg0: Internal.GameType_): this;
        getDataConfiguration(): Internal.WorldDataConfiguration;
        gameType(): Internal.GameType;
        gameRules(): Internal.GameRules;
        withLifecycle(arg0: Internal.Lifecycle_): this;
        static parse(arg0: Internal.Dynamic_<any>, arg1: Internal.WorldDataConfiguration_): Internal.LevelSettings;
        hardcore(): boolean;
        withDifficulty(arg0: Internal.Difficulty_): this;
        copy(): this;
        get lifecycle(): Internal.Lifecycle
        get dataConfiguration(): Internal.WorldDataConfiguration
    }
    type LevelSettings_ = LevelSettings;
    class ServerPlayerGameMode {
        constructor(arg0: Internal.ServerPlayer_)
        setLevel(arg0: Internal.ServerLevel_): void;
        getGameModeForPlayer(): Internal.GameType;
        isCreative(): boolean;
        useItemOn(arg0: Internal.ServerPlayer_, arg1: Internal.Level_, arg2: Internal.ItemStack_, arg3: Internal.InteractionHand_, arg4: Internal.BlockHitResult_): Internal.InteractionResult;
        getPreviousGameModeForPlayer(): Internal.GameType;
        isSurvival(): boolean;
        changeGameModeForPlayer(arg0: Internal.GameType_): boolean;
        handleBlockBreakAction(arg0: BlockPos_, arg1: Internal.ServerboundPlayerActionPacket$Action_, arg2: Internal.Direction_, arg3: number, arg4: number): void;
        destroyBlock(arg0: BlockPos_): boolean;
        destroyAndAck(arg0: BlockPos_, arg1: number, arg2: string): void;
        tick(): void;
        useItem(arg0: Internal.ServerPlayer_, arg1: Internal.Level_, arg2: Internal.ItemStack_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        set level(arg0: Internal.ServerLevel_)
        get gameModeForPlayer(): Internal.GameType
        get creative(): boolean
        get previousGameModeForPlayer(): Internal.GameType
        get survival(): boolean
        isDestroyingBlock: boolean;
    }
    type ServerPlayerGameMode_ = ServerPlayerGameMode;
    class PlayerHeadBlock extends Internal.SkullBlock {
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
    type PlayerHeadBlock_ = PlayerHeadBlock;
    class ClientboundSetEntityDataPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: Internal.List_<Internal.SynchedEntityData$DataValue<any>>)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        id(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        packedItems(): Internal.List<Internal.SynchedEntityData$DataValue<any>>;
        isSkippable(): boolean;
        get skippable(): boolean
        static readonly EOF_MARKER: 255;
    }
    type ClientboundSetEntityDataPacket_ = ClientboundSetEntityDataPacket;
    interface Operation <R> {
        abstract call(...arg0: any[]): R;
        (...arg0: any[]): R;
    }
    type Operation_<R> = Operation<R>;
    class StructureSettingsBuilder$StructureSpawnOverrideBuilder {
        static copyOf(arg0: Internal.StructureSpawnOverride_): Internal.StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        removeSpawn(arg0: Internal.MobSpawnSettings$SpawnerData_): void;
        setBoundingBox(arg0: Internal.StructureSpawnOverride$BoundingBoxType_): void;
        getBoundingBox(): Internal.StructureSpawnOverride$BoundingBoxType;
        addSpawn(arg0: Internal.MobSpawnSettings$SpawnerData_): void;
        getSpawns(): Internal.List<Internal.MobSpawnSettings$SpawnerData>;
        build(): Internal.StructureSpawnOverride;
        set boundingBox(arg0: Internal.StructureSpawnOverride$BoundingBoxType_)
        get boundingBox(): Internal.StructureSpawnOverride$BoundingBoxType
        get spawns(): Internal.List<Internal.MobSpawnSettings$SpawnerData>
    }
    type StructureSettingsBuilder$StructureSpawnOverrideBuilder_ = StructureSettingsBuilder$StructureSpawnOverrideBuilder;
    class CommandFunction {
        constructor(arg0: ResourceLocation_, arg1: any_[])
        getEntries(): any[];
        getId(): ResourceLocation;
        static fromLines(arg0: ResourceLocation_, arg1: Internal.CommandDispatcher_<Internal.CommandSourceStack>, arg2: Internal.CommandSourceStack_, arg3: Internal.List_<string>): Internal.CommandFunction;
        get entries(): any[]
        get id(): ResourceLocation
    }
    type CommandFunction_ = CommandFunction;
    class LinkedControllerItem extends Internal.Item implements Internal.MenuProvider {
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
        getDisplayName(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        static getFrequencyItems(arg0: Internal.ItemStack_): Internal.ItemStackHandler;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        static toFrequency(arg0: Internal.ItemStack_, arg1: number): Internal.Couple<Internal.RedstoneLinkNetworkHandler$Frequency>;
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
        get displayName(): Internal.Component
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type LinkedControllerItem_ = LinkedControllerItem;
    class BlazeBurnerBlock extends Internal.HorizontalDirectionalBlock implements Internal.IWrenchable, Internal.IBE<Internal.BlazeBurnerBlockEntity> {
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
        static buildLootTable(): Internal.LootTable$Builder;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.BlazeBurnerBlockEntity>;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getBlockEntityClass(): typeof Internal.BlazeBurnerBlockEntity;
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
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Random_): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.BlazeBurnerBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        static tryInsert(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean, arg5: boolean, arg6: boolean): Internal.InteractionResultHolder<Internal.ItemStack>;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.BlazeBurnerBlockEntity>): void;
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
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.BlazeBurnerBlockEntity>;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlazeBurnerBlockEntity;
        static getHeatLevelOf(arg0: Internal.BlockState_): Internal.BlazeBurnerBlock$HeatLevel;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getLight(arg0: Internal.BlockState_): number;
        set lightEmission(v: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.BlazeBurnerBlockEntity>
        get blockEntityClass(): typeof Internal.BlazeBurnerBlockEntity
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly HEAT_LEVEL: Internal.EnumProperty<Internal.BlazeBurnerBlock$HeatLevel>;
    }
    type BlazeBurnerBlock_ = BlazeBurnerBlock;
    interface BlockDestructionProgressExtension {
        abstract getExtraPositions(): Internal.Set<BlockPos>;
        abstract setExtraPositions(arg0: Internal.Set_<BlockPos>): void;
        get extraPositions(): Internal.Set<BlockPos>
        set extraPositions(arg0: Internal.Set_<BlockPos>)
    }
    type BlockDestructionProgressExtension_ = BlockDestructionProgressExtension;
    class ClientPlayerNetworkEvent$Clone extends Internal.ClientPlayerNetworkEvent {
        constructor()
        constructor(arg0: Internal.MultiPlayerGameMode_, arg1: Internal.LocalPlayer_, arg2: Internal.LocalPlayer_, arg3: Internal.Connection_)
        getNewPlayer(): Internal.LocalPlayer;
        getOldPlayer(): Internal.LocalPlayer;
        get newPlayer(): Internal.LocalPlayer
        get oldPlayer(): Internal.LocalPlayer
    }
    type ClientPlayerNetworkEvent$Clone_ = ClientPlayerNetworkEvent$Clone;
    abstract class MappedByteBuffer extends Internal.ByteBuffer {
        load(): this;
        limit(arg0: number): Internal.Buffer;
        mark(): this;
        force(): this;
        clear(): Internal.Buffer;
        flip(): Internal.Buffer;
        reset(): Internal.Buffer;
        abstract compact(): this;
        isLoaded(): boolean;
        abstract duplicate(): this;
        force(arg0: number, arg1: number): this;
        rewind(): this;
        get loaded(): boolean
    }
    type MappedByteBuffer_ = MappedByteBuffer;
    class ItemRequirement {
        constructor(arg0: Internal.List_<Internal.ItemRequirement$StackRequirement>)
        constructor(arg0: Internal.ItemRequirement$StackRequirement_)
        constructor(arg0: Internal.ItemRequirement$ItemUseType_, arg1: Internal.Item_)
        constructor(arg0: Internal.ItemRequirement$ItemUseType_, arg1: Internal.List_<Internal.ItemStack>)
        constructor(arg0: Internal.ItemRequirement$ItemUseType_, arg1: Internal.ItemStack_)
        static of(arg0: Internal.Entity_): Internal.ItemRequirement;
        static of(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.ItemRequirement;
        isInvalid(): boolean;
        getRequiredItems(): Internal.List<Internal.ItemRequirement$StackRequirement>;
        isEmpty(): boolean;
        union(arg0: Internal.ItemRequirement_): this;
        get invalid(): boolean
        get requiredItems(): Internal.List<Internal.ItemRequirement$StackRequirement>
        get empty(): boolean
        static readonly NONE: Internal.ItemRequirement;
        static readonly INVALID: Internal.ItemRequirement;
    }
    type ItemRequirement_ = ItemRequirement;
    interface ModelState {
        getRotation(): Internal.Transformation;
        isUvLocked(): boolean;
        get rotation(): Internal.Transformation
        get uvLocked(): boolean
    }
    type ModelState_ = ModelState;
    class MobEffect implements Internal.IForgeMobEffect {
        getDisplayName(): Internal.Component;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): this;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        isInstantenous(): boolean;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): this;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        isBeneficial(): boolean;
        static byId(arg0: number): Internal.MobEffect;
        getEffectRendererInternal(): any;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        getColor(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): Internal.Component
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        get instantenous(): boolean
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get beneficial(): boolean
        get effectRendererInternal(): any
        get color(): number
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
        get descriptionId(): string
    }
    type MobEffect_ = MobEffect | Special.MobEffect;
    class Font implements Internal.IAntiqueTextProvider, Internal.IForgeFont {
        constructor(arg0: Internal.Function_<ResourceLocation, Internal.FontSet>, arg1: boolean)
        width(arg0: Internal.FormattedText_): number;
        width(arg0: string): number;
        drawInBatch(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Matrix4f_, arg6: Internal.MultiBufferSource_, arg7: Internal.Font$DisplayMode_, arg8: number, arg9: number, arg10: boolean): number;
        ellipsize(arg0: Internal.FormattedText_, arg1: number): Internal.FormattedText;
        plainSubstrByWidth(arg0: string, arg1: number): string;
        drawInBatch8xOutline(arg0: Internal.FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Matrix4f_, arg6: Internal.MultiBufferSource_, arg7: number): void;
        wordWrapHeight(arg0: Internal.FormattedText_, arg1: number): number;
        drawInBatch(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Matrix4f_, arg6: Internal.MultiBufferSource_, arg7: Internal.Font$DisplayMode_, arg8: number, arg9: number): number;
        renderText(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Matrix4f_, arg6: Internal.MultiBufferSource_, arg7: Internal.Font$DisplayMode_, arg8: number, arg9: number): number;
        hasAntiqueInk(): boolean;
        split(arg0: Internal.FormattedText_, arg1: number): Internal.List<Internal.FormattedCharSequence>;
        self(): this;
        getSplitter(): Internal.StringSplitter;
        drawInBatch(arg0: Internal.Component_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Matrix4f_, arg6: Internal.MultiBufferSource_, arg7: Internal.Font$DisplayMode_, arg8: number, arg9: number): number;
        wordWrapHeight(arg0: string, arg1: number): number;
        substrByWidth(arg0: Internal.FormattedText_, arg1: number): Internal.FormattedText;
        setAntiqueInk(hasInk: boolean): void;
        width(arg0: Internal.FormattedCharSequence_): number;
        getFontSet(arg0: ResourceLocation_): Internal.FontSet;
        drawInBatch(arg0: Internal.FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Matrix4f_, arg6: Internal.MultiBufferSource_, arg7: Internal.Font$DisplayMode_, arg8: number, arg9: number): number;
        isBidirectional(): boolean;
        bidirectionalShaping(arg0: string): string;
        plainSubstrByWidth(arg0: string, arg1: number, arg2: boolean): string;
        get splitter(): Internal.StringSplitter
        set antiqueInk(hasInk: boolean)
        get bidirectional(): boolean
        static readonly ALPHA_CUTOFF: 8;
        readonly lineHeight: number;
        readonly random: Internal.RandomSource;
    }
    type Font_ = Font;
    interface ModelBakeryAccessor {
        puzzleslib$getItemModelGenerator(): Internal.ItemModelGenerator;
    }
    type ModelBakeryAccessor_ = ModelBakeryAccessor;
    class AdvancementEvent$AdvancementProgressEvent extends Internal.AdvancementEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.Advancement_, arg2: Internal.AdvancementProgress_, arg3: string, arg4: Internal.AdvancementEvent$AdvancementProgressEvent$ProgressType_)
        getAdvancementProgress(): Internal.AdvancementProgress;
        getEntity(): Internal.LivingEntity;
        getCriterionName(): string;
        getProgressType(): Internal.AdvancementEvent$AdvancementProgressEvent$ProgressType;
        get advancementProgress(): Internal.AdvancementProgress
        get entity(): Internal.LivingEntity
        get criterionName(): string
        get progressType(): Internal.AdvancementEvent$AdvancementProgressEvent$ProgressType
    }
    type AdvancementEvent$AdvancementProgressEvent_ = AdvancementEvent$AdvancementProgressEvent;
    class DrinkingHatItem extends Internal.WearableArtifactItem {
        constructor(drinkingDurationMultiplier: Internal.Supplier_<number>, eatingDurationMultiplier: Internal.Supplier_<number>, hasSpecialTooltip: boolean)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getDurationMultiplier(action: Internal.UseAnim_): number;
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
        static getDrinkingHatUseDuration(entity: Internal.LivingEntity_, action: Internal.UseAnim_, duration: number): number;
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
    type DrinkingHatItem_ = DrinkingHatItem;
    interface TutorialStepInstance {
        onMouse(arg0: number, arg1: number): void;
        clear(): void;
        onInput(arg0: Internal.Input_): void;
        onLookAt(arg0: Internal.ClientLevel_, arg1: Internal.HitResult_): void;
        onDestroyBlock(arg0: Internal.ClientLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: number): void;
        onOpenInventory(): void;
        tick(): void;
        onGetItem(arg0: Internal.ItemStack_): void;
    }
    type TutorialStepInstance_ = TutorialStepInstance;
    interface StringRepresentable {
        fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        abstract getSerializedName(): string;
        get serializedName(): string
        (): string;
        readonly PRE_BUILT_MAP_THRESHOLD: 16;
    }
    type StringRepresentable_ = StringRepresentable;
    class ArmorStandItem extends Internal.Item {
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
    type ArmorStandItem_ = ArmorStandItem;
    class VoxelShaper {
        constructor()
        static forDirectional(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): Internal.VoxelShaper;
        static forAxis(arg0: Internal.VoxelShape_, arg1: Internal.Direction$Axis_): Internal.VoxelShaper;
        static forHorizontalAxis(arg0: Internal.VoxelShape_, arg1: Internal.Direction$Axis_): Internal.VoxelShaper;
        static axisAsFace(arg0: Internal.Direction$Axis_): Internal.Direction;
        withShape(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): this;
        withVerticalShapes(arg0: Internal.VoxelShape_): this;
        get(arg0: Internal.Direction_): Internal.VoxelShape;
        get(arg0: Internal.Direction$Axis_): Internal.VoxelShape;
        static forHorizontal(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): Internal.VoxelShaper;
    }
    type VoxelShaper_ = VoxelShaper;
    class SimpleContainer implements Internal.Container, Internal.StackedContentsCompatible {
        constructor(...arg0: Internal.ItemStack_[])
        constructor(arg0: number)
        stopOpen(arg0: Internal.Player_): void;
        static tryClear(arg0: any): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        setChanged(): void;
        getContainerSize(): number;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        getItem(arg0: number): Internal.ItemStack;
        removeItemType(arg0: Internal.Item_, arg1: number): Internal.ItemStack;
        addListener(arg0: net.minecraft.world.ContainerListener_): void;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        addItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        fromTag(arg0: Internal.ListTag_): void;
        canAddItem(arg0: Internal.ItemStack_): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        removeListener(arg0: net.minecraft.world.ContainerListener_): void;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        createTag(): Internal.ListTag;
        removeAllItems(): Internal.List<Internal.ItemStack>;
        getAllItems(): Internal.List<Internal.ItemStack>;
        fillStackedContents(arg0: Internal.StackedContents_): void;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        stillValid(arg0: Internal.Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type SimpleContainer_ = SimpleContainer;
    class BlockGeneratorBlock extends Internal.Block implements Internal.EntityBlock {
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
    type BlockGeneratorBlock_ = BlockGeneratorBlock;
    interface IClientBlockExtensions {
        addHitEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.HitResult_, arg3: Internal.ParticleEngine_): boolean;
        of(arg0: Internal.BlockState_): this;
        of(arg0: Internal.Block_): this;
        addDestroyEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.ParticleEngine_): boolean;
        areBreakingParticlesTinted(arg0: Internal.BlockState_, arg1: Internal.ClientLevel_, arg2: BlockPos_): boolean;
        getFogColor(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: Internal.Vector3d_, arg5: number): Internal.Vector3d;
        readonly DEFAULT: Internal.IClientBlockExtensions;
    }
    type IClientBlockExtensions_ = IClientBlockExtensions;
    class WorldGenRegion implements Internal.WorldGenLevel {
        constructor(arg0: Internal.ServerLevel_, arg1: Internal.List_<Internal.ChunkAccess>, arg2: Internal.ChunkStatus_, arg3: number)
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        getShade(arg0: Internal.Direction_, arg1: boolean): number;
        getSeed(): number;
        dayTime(): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getMaxSection(): number;
        getLevelData(): Internal.LevelData;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        getSectionYFromSectionIndex(arg0: number): number;
        players(): Internal.List<Internal.Player>;
        getBiomeManager(): Internal.BiomeManager;
        getRandom(): Internal.RandomSource;
        isEmptyBlock(arg0: BlockPos_): boolean;
        removeBlock(arg0: BlockPos_, arg1: boolean): boolean;
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
        setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number, arg3: number): boolean;
        isClientSide(): boolean;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_): Internal.List<T>;
        getBlockTicks(): Internal.LevelTickAccess<Internal.Block>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        dimensionType(): Internal.DimensionType;
        getSkyDarken(): number;
        getMinBuildHeight(): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_, arg3: number): boolean;
        getSeaLevel(): number;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getFluidTicks(): Internal.LevelTickAccess<Internal.Fluid>;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        ensureCanWrite(arg0: BlockPos_): boolean;
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
        isFluidAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.FluidState>): boolean;
        getWorldBorder(): Internal.WorldBorder;
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
        gameEvent(arg0: Internal.GameEvent_, arg1: Vec3d_, arg2: Internal.GameEvent$Context_): void;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Internal.Player;
        neighborShapeChanged(arg0: Internal.Direction_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_, arg4: number, arg5: number): void;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        getBlockState(arg0: BlockPos_): Internal.BlockState;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        playSound(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_, arg4: number, arg5: number): void;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Internal.Player;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        addParticle(arg0: Internal.ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getCurrentDifficultyAt(arg0: BlockPos_): Internal.DifficultyInstance;
        getDifficulty(): Internal.Difficulty;
        canSeeSky(arg0: BlockPos_): boolean;
        enabledFeatures(): Internal.FeatureFlagSet;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_, arg2: Internal.Predicate_<Internal.Entity>): Internal.List<Internal.Entity>;
        addFreshEntityWithPassengers(arg0: Internal.Entity_): void;
        getPlayerByUUID(arg0: Internal.UUID_): Internal.Player;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getSectionsCount(): number;
        isStateAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.BlockState>): boolean;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Internal.Player>;
        getSectionIndexFromSectionY(arg0: number): number;
        getCenter(): Internal.ChunkPos;
        getServer(): Internal.MinecraftServer;
        levelEvent(arg0: Internal.Player_, arg1: number, arg2: BlockPos_, arg3: number): void;
        setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number): boolean;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getLevel(): Internal.ServerLevel;
        isOldChunkAround(arg0: Internal.ChunkPos_, arg1: number): boolean;
        getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getBestNeighborSignal(arg0: BlockPos_): number;
        hasChunk(arg0: number, arg1: number): boolean;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        getMoonBrightness(): number;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        getLightEngine(): Internal.LevelLightEngine;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        setCurrentlyGenerating(arg0: Internal.Supplier_<string>): void;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        isOutsideBuildHeight(arg0: number): boolean;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        getFluidState(arg0: BlockPos_): Internal.FluidState;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_, arg3: boolean): Internal.ChunkAccess;
        getChunkSource(): Internal.ChunkSource;
        registryAccess(): Internal.RegistryAccess;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        nextSubTickCount(): number;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: BlockPos_): void;
        getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        getMaxLightLevel(): number;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get seed(): number
        get maxSection(): number
        get levelData(): Internal.LevelData
        get biomeManager(): Internal.BiomeManager
        get random(): Internal.RandomSource
        get clientSide(): boolean
        get blockTicks(): Internal.LevelTickAccess<Internal.Block>
        get skyDarken(): number
        get minBuildHeight(): number
        get seaLevel(): number
        get fluidTicks(): Internal.LevelTickAccess<Internal.Fluid>
        get maxBuildHeight(): number
        get height(): number
        get worldBorder(): Internal.WorldBorder
        get minSection(): number
        get difficulty(): Internal.Difficulty
        get moonPhase(): number
        get sectionsCount(): number
        get center(): Internal.ChunkPos
        get server(): Internal.MinecraftServer
        /**
         * @deprecated
        */
        get level(): Internal.ServerLevel
        get moonBrightness(): number
        get lightEngine(): Internal.LevelLightEngine
        set currentlyGenerating(arg0: Internal.Supplier_<string>)
        get modelDataManager(): Internal.ModelDataManager
        get chunkSource(): Internal.ChunkSource
        get maxLightLevel(): number
    }
    type WorldGenRegion_ = WorldGenRegion;
    class StackableBookBlock extends Internal.HorizontalDirectionalBlock {
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
        static bookName(state: Internal.BlockState_): string;
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
        static readonly BOOKS: Internal.IntegerProperty;
        static readonly SHAPE_4: Internal.ArrayVoxelShape;
        static readonly SEED: Internal.IntegerProperty;
        static readonly SHAPE_2: Internal.ArrayVoxelShape;
        static readonly SHAPE_3: Internal.ArrayVoxelShape;
        static readonly SHAPE_1: Internal.ArrayVoxelShape;
    }
    type StackableBookBlock_ = StackableBookBlock;
    class VillagerTradesEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Int2ObjectMap_<Internal.List<Internal.VillagerTrades$ItemListing>>, arg1: Internal.VillagerProfession_)
        getType(): Internal.VillagerProfession;
        getTrades(): Internal.Int2ObjectMap<Internal.List<Internal.VillagerTrades$ItemListing>>;
        get type(): Internal.VillagerProfession
        get trades(): Internal.Int2ObjectMap<Internal.List<Internal.VillagerTrades$ItemListing>>
    }
    type VillagerTradesEvent_ = VillagerTradesEvent;
    interface ReflectionBasedSerialization {
    }
    type ReflectionBasedSerialization_ = ReflectionBasedSerialization;
    class TagManager$LoadResult <T> extends Internal.Record {
        constructor(key: Internal.ResourceKey_<Internal.Registry<T>>, tags: Internal.Map_<ResourceLocation, Internal.Collection<Internal.Holder<T>>>)
        tags(): Internal.Map<ResourceLocation, Internal.Collection<Internal.Holder<T>>>;
        key(): Internal.ResourceKey<Internal.Registry<T>>;
    }
    type TagManager$LoadResult_<T> = TagManager$LoadResult<T>;
    class Interaction extends Internal.Entity implements Internal.Attackable, Internal.Targeting {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
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
        getLastAttacker(): Internal.LivingEntity;
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
        getTarget(): Internal.LivingEntity;
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
        get lastAttacker(): Internal.LivingEntity
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
        get target(): Internal.LivingEntity
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
    type Interaction_ = Interaction;
    interface WindowEventHandler {
        abstract setWindowActive(arg0: boolean): void;
        abstract cursorEntered(): void;
        abstract resizeDisplay(): void;
        set windowActive(arg0: boolean)
    }
    type WindowEventHandler_ = WindowEventHandler;
    class ScheduleEntry {
        constructor()
        clone(): any;
        write(): Internal.CompoundTag;
        static fromTag(arg0: Internal.CompoundTag_): Internal.ScheduleEntry;
        conditions: Internal.List<Internal.List<Internal.ScheduleWaitCondition>>;
        instruction: Internal.ScheduleInstruction;
    }
    type ScheduleEntry_ = ScheduleEntry;
    interface Future <V> {
        abstract get(): V;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): V;
        abstract isDone(): boolean;
        abstract cancel(arg0: boolean): boolean;
        abstract isCancelled(): boolean;
        get done(): boolean
        get cancelled(): boolean
    }
    type Future_<V> = Future<V>;
    class JumpControl implements Internal.Control {
        constructor(arg0: Internal.Mob_)
        jump(): void;
        tick(): void;
    }
    type JumpControl_ = JumpControl;
    interface IModLanguageProvider {
        abstract name(): string;
        abstract getFileVisitor(): Internal.Consumer<Internal.ModFileScanData>;
        abstract consumeLifecycleEvent<R extends Internal.ILifecycleEvent<R>>(arg0: Internal.Supplier_<R>): void;
        get fileVisitor(): Internal.Consumer<Internal.ModFileScanData>
    }
    type IModLanguageProvider_ = IModLanguageProvider;
    class Thread implements Internal.Runnable {
        constructor()
        constructor(arg0: Internal.ThreadGroup_, arg1: Internal.Runnable_, arg2: string)
        constructor(arg0: Internal.Runnable_)
        constructor(arg0: Internal.ThreadGroup_, arg1: Internal.Runnable_)
        constructor(arg0: Internal.ThreadGroup_, arg1: Internal.Runnable_, arg2: string, arg3: number, arg4: boolean)
        constructor(arg0: Internal.Runnable_, arg1: string)
        constructor(arg0: Internal.ThreadGroup_, arg1: string)
        constructor(arg0: Internal.ThreadGroup_, arg1: Internal.Runnable_, arg2: string, arg3: number)
        constructor(arg0: string)
        isDaemon(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        suspend(): void;
        setUncaughtExceptionHandler(arg0: Internal.Thread$UncaughtExceptionHandler_): void;
        static "yield"(): void;
        static dumpStack(): void;
        run(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        checkAccess(): void;
        static sleep(arg0: number, arg1: number): void;
        static holdsLock(arg0: any): boolean;
        isInterrupted(): boolean;
        static onSpinWait(): void;
        join(arg0: number): void;
        static setDefaultUncaughtExceptionHandler(arg0: Internal.Thread$UncaughtExceptionHandler_): void;
        setContextClassLoader(arg0: Internal.ClassLoader_): void;
        setName(arg0: string): void;
        getName(): string;
        getId(): number;
        isAlive(): boolean;
        getThreadGroup(): Internal.ThreadGroup;
        static sleep(arg0: number): void;
        getContextClassLoader(): Internal.ClassLoader;
        static getAllStackTraces(): Internal.Map<Internal.Thread, Internal.StackTraceElement[]>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        resume(): void;
        getUncaughtExceptionHandler(): Internal.Thread$UncaughtExceptionHandler;
        getState(): Internal.Thread$State;
        static getDefaultUncaughtExceptionHandler(): Internal.Thread$UncaughtExceptionHandler;
        static currentThread(): Internal.Thread;
        getStackTrace(): Internal.StackTraceElement[];
        setDaemon(arg0: boolean): void;
        start(): void;
        setPriority(arg0: number): void;
        interrupt(): void;
        getPriority(): number;
        static interrupted(): boolean;
        static enumerate(arg0: Internal.Thread_[]): number;
        /**
         * @deprecated
        */
        stop(): void;
        static activeCount(): number;
        join(): void;
        join(arg0: number, arg1: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        countStackFrames(): number;
        get daemon(): boolean
        set uncaughtExceptionHandler(arg0: Internal.Thread$UncaughtExceptionHandler_)
        get interrupted(): boolean
        set defaultUncaughtExceptionHandler(arg0: Internal.Thread$UncaughtExceptionHandler_)
        set contextClassLoader(arg0: Internal.ClassLoader_)
        set name(arg0: string)
        get name(): string
        get id(): number
        get alive(): boolean
        get threadGroup(): Internal.ThreadGroup
        get contextClassLoader(): Internal.ClassLoader
        get allStackTraces(): Internal.Map<Internal.Thread, Internal.StackTraceElement[]>
        get uncaughtExceptionHandler(): Internal.Thread$UncaughtExceptionHandler
        get state(): Internal.Thread$State
        get defaultUncaughtExceptionHandler(): Internal.Thread$UncaughtExceptionHandler
        get stackTrace(): Internal.StackTraceElement[]
        set daemon(arg0: boolean)
        set priority(arg0: number)
        get priority(): number
        static readonly MAX_PRIORITY: 10;
        static readonly NORM_PRIORITY: 5;
        static readonly MIN_PRIORITY: 1;
    }
    type Thread_ = Thread;
    interface Serializer <T> {
        abstract serialize(arg0: Internal.JsonObject_, arg1: T, arg2: Internal.JsonSerializationContext_): void;
        abstract deserialize(arg0: Internal.JsonObject_, arg1: Internal.JsonDeserializationContext_): T;
    }
    type Serializer_<T> = Serializer<T>;
    class SkullBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        static setup(arg0: Internal.Services_, arg1: Internal.Executor_): void;
        getAnimation(arg0: number): number;
        getOwnerProfile(): Internal.GameProfile;
        deserializeNBT(arg0: Internal.Tag_): void;
        getNoteBlockSound(): ResourceLocation;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        static animation(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.SkullBlockEntity_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static updateGameprofile(arg0: Internal.GameProfile_, arg1: Internal.Consumer_<Internal.GameProfile>): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getUpdatePacket(): Internal.Packet<any>;
        getModelData(): Internal.ModelData;
        static clear(): void;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        setOwner(arg0: Internal.GameProfile_): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        get ownerProfile(): Internal.GameProfile
        get noteBlockSound(): ResourceLocation
        get updatePacket(): Internal.Packet<any>
        get modelData(): Internal.ModelData
        set owner(arg0: Internal.GameProfile_)
        get renderBoundingBox(): Internal.AABB
        static readonly TAG_NOTE_BLOCK_SOUND: "note_block_sound";
        static readonly TAG_SKULL_OWNER: "SkullOwner";
    }
    type SkullBlockEntity_ = SkullBlockEntity;
    interface ItemBuilder$UseCallback {
        abstract use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): boolean;
        (arg0: Internal.Level, arg1: Internal.Player, arg2: Internal.InteractionHand): boolean;
    }
    type ItemBuilder$UseCallback_ = ItemBuilder$UseCallback;
    abstract class RenderLivingEvent <T extends Internal.LivingEntity, M extends Internal.EntityModel<T>> extends Internal.Event {
        constructor()
        getPoseStack(): Internal.PoseStack;
        getPartialTick(): number;
        getEntity(): Internal.LivingEntity;
        getRenderer(): Internal.LivingEntityRenderer<T, M>;
        getPackedLight(): number;
        getMultiBufferSource(): Internal.MultiBufferSource;
        get poseStack(): Internal.PoseStack
        get partialTick(): number
        get entity(): Internal.LivingEntity
        get renderer(): Internal.LivingEntityRenderer<T, M>
        get packedLight(): number
        get multiBufferSource(): Internal.MultiBufferSource
    }
    type RenderLivingEvent_<T extends Internal.LivingEntity, M extends Internal.EntityModel<T>> = RenderLivingEvent<T, M>;
    abstract class Projectile extends Internal.Entity implements Internal.TraceableEntity {
        setMotionY(y: number): void;
        getEffectSource(): Internal.Entity;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        setOwner(arg0: Internal.Entity_): void;
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
        getOwner(): Internal.Entity;
        shootFromRotation(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        shoot(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
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
        get effectSource(): Internal.Entity
        get peacefulCreature(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        set owner(arg0: Internal.Entity_)
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
        get owner(): Internal.Entity
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
        hasBeenShot: boolean;
    }
    type Projectile_ = Projectile;
    class EntityRenderDispatcher implements Internal.ResourceManagerReloadListener {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.TextureManager_, arg2: Internal.ItemRenderer_, arg3: Internal.BlockRenderDispatcher_, arg4: Internal.Font_, arg5: Internal.Options_, arg6: Internal.EntityModelSet_)
        render<E extends Internal.Entity>(arg0: E, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.PoseStack_, arg7: Internal.MultiBufferSource_, arg8: number): void;
        distanceToSqr(arg0: Internal.Entity_): number;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        setLevel(arg0: Internal.Level_): void;
        getPackedLightCoords<E extends Internal.Entity>(arg0: E, arg1: number): number;
        overrideCameraOrientation(arg0: Quaternionf_): void;
        getRenderer<T extends Internal.Entity>(arg0: T): Internal.EntityRenderer<T>;
        shouldRenderHitBoxes(): boolean;
        getItemInHandRenderer(): Internal.ItemInHandRenderer;
        setRenderHitBoxes(arg0: boolean): void;
        cameraOrientation(): Quaternionf;
        setRenderShadow(arg0: boolean): void;
        getName(): string;
        prepare(arg0: Internal.Level_, arg1: Internal.Camera_, arg2: Internal.Entity_): void;
        shouldRender<E extends Internal.Entity>(arg0: E, arg1: Internal.Frustum_, arg2: number, arg3: number, arg4: number): boolean;
        distanceToSqr(arg0: number, arg1: number, arg2: number): number;
        getSkinMap(): Internal.Map<string, Internal.EntityRenderer<Internal.Player>>;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        set level(arg0: Internal.Level_)
        get itemInHandRenderer(): Internal.ItemInHandRenderer
        set renderHitBoxes(arg0: boolean)
        set renderShadow(arg0: boolean)
        get name(): string
        get skinMap(): Internal.Map<string, Internal.EntityRenderer<Internal.Player>>
        crosshairPickEntity: Internal.Entity;
        camera: Internal.Camera;
        readonly textureManager: Internal.TextureManager;
        readonly options: Internal.Options;
        renderers: Internal.Map<Internal.EntityType<any>, Internal.EntityRenderer<any>>;
    }
    type EntityRenderDispatcher_ = EntityRenderDispatcher;
    class AshLayerBlock extends Internal.FallingBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        static tryConvertToAsh(event: Internal.IFireConsumeBlockEvent_): void;
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
        static applyBonemeal(stack: Internal.ItemStack_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_): boolean;
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
        static updateBasaltBelow(selfPos: BlockPos_, level: Internal.Level_): boolean;
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
        static readonly RECURSION_HACK: Internal.ThreadLocal<boolean>;
        static readonly LAYERS: Internal.IntegerProperty;
        static readonly GRASS_SPREAD_WIDTH: 3;
    }
    type AshLayerBlock_ = AshLayerBlock;
    class ItemOverride {
        constructor(arg0: ResourceLocation_, arg1: Internal.List_<Internal.ItemOverride$Predicate>)
        getModel(): ResourceLocation;
        getPredicates(): Internal.Stream<Internal.ItemOverride$Predicate>;
        get model(): ResourceLocation
        get predicates(): Internal.Stream<Internal.ItemOverride$Predicate>
    }
    type ItemOverride_ = ItemOverride;
    abstract class SyncedBlockEntity extends Internal.BlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        containedChunk(): Internal.LevelChunk;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        notifyUpdate(): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        readClient(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getUpdatePacket(): Internal.Packet<any>;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        sendData(): void;
        getRenderBoundingBox(): Internal.AABB;
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get updatePacket(): Internal.Packet<any>
        get modelData(): Internal.ModelData
        get renderBoundingBox(): Internal.AABB
    }
    type SyncedBlockEntity_ = SyncedBlockEntity;
    interface EventHandlerImplCommon$LevelEventAttachment {
        abstract architectury$getAttachedLevel(): Internal.LevelAccessor;
        abstract architectury$attachLevel(arg0: Internal.LevelAccessor_): void;
    }
    type EventHandlerImplCommon$LevelEventAttachment_ = EventHandlerImplCommon$LevelEventAttachment;
    class RodBlock extends Internal.DirectionalBlock {
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
    type RodBlock_ = RodBlock;
    class CeilingHangingSignBlock extends Internal.SignBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.WoodType_)
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
        static readonly ROTATION: Internal.IntegerProperty;
        static readonly ATTACHED: Internal.BooleanProperty;
    }
    type CeilingHangingSignBlock_ = CeilingHangingSignBlock;
}
