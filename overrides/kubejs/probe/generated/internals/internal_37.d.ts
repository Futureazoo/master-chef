/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    interface AccessKeyMapping {
        abstract controlling$getKey(): Internal.InputConstants$Key;
        (): Internal.InputConstants$Key_;
    }
    type AccessKeyMapping_ = AccessKeyMapping;
    class ScreenEvent$MouseButtonPressed$Post extends Internal.ScreenEvent$MouseButtonPressed {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: boolean)
        wasHandled(): boolean;
    }
    type ScreenEvent$MouseButtonPressed$Post_ = ScreenEvent$MouseButtonPressed$Post;
    class HeightRangePlacement extends Internal.PlacementModifier {
        static uniform(arg0: Internal.VerticalAnchor_, arg1: Internal.VerticalAnchor_): Internal.HeightRangePlacement;
        static triangle(arg0: Internal.VerticalAnchor_, arg1: Internal.VerticalAnchor_): Internal.HeightRangePlacement;
        static of(arg0: Internal.HeightProvider_): Internal.HeightRangePlacement;
        static readonly CODEC: Internal.Codec<Internal.HeightRangePlacement>;
    }
    type HeightRangePlacement_ = HeightRangePlacement;
    class CommandDispatcher <S> {
        constructor()
        constructor(arg0: Internal.RootCommandNode_<S>)
        execute(arg0: Internal.ParseResults_<S>): number;
        getPath(arg0: Internal.CommandNode_<S>): Internal.Collection<string>;
        register(arg0: Internal.LiteralArgumentBuilder_<S>): Internal.LiteralCommandNode<S>;
        getRoot(): Internal.RootCommandNode<S>;
        parse(arg0: string, arg1: S): Internal.ParseResults<S>;
        getCompletionSuggestions(arg0: Internal.ParseResults_<S>, arg1: number): Internal.CompletableFuture<Internal.Suggestions>;
        getAllUsage(arg0: Internal.CommandNode_<S>, arg1: S, arg2: boolean): string[];
        execute(arg0: Internal.StringReader_, arg1: S): number;
        findNode(arg0: Internal.Collection_<string>): Internal.CommandNode<S>;
        parse(arg0: Internal.StringReader_, arg1: S): Internal.ParseResults<S>;
        getCompletionSuggestions(arg0: Internal.ParseResults_<S>): Internal.CompletableFuture<Internal.Suggestions>;
        getSmartUsage(arg0: Internal.CommandNode_<S>, arg1: S): Internal.Map<Internal.CommandNode<S>, string>;
        execute(arg0: string, arg1: S): number;
        findAmbiguities(arg0: Internal.AmbiguityConsumer_<S>): void;
        setConsumer(arg0: Internal.ResultConsumer_<S>): void;
        get root(): Internal.RootCommandNode<S>
        set consumer(arg0: Internal.ResultConsumer_<S>)
        static readonly ARGUMENT_SEPARATOR_CHAR: " ";
        static readonly ARGUMENT_SEPARATOR: " ";
    }
    type CommandDispatcher_<S> = CommandDispatcher<S>;
    /**
     * Invoked when an item is smelted by a player.
    */
    class ItemSmeltedEventJS extends Internal.PlayerEventJS {
        constructor(player: Internal.Player_, smelted: Internal.ItemStack_)
        /**
         * The player that smelted the item.
        */
        getEntity(): Internal.Entity;
        /**
         * The item that was smelted.
        */
        getItem(): Internal.ItemStack;
        /**
         * The player that smelted the item.
        */
        get entity(): Internal.Entity
        /**
         * The item that was smelted.
        */
        get item(): Internal.ItemStack
    }
    type ItemSmeltedEventJS_ = ItemSmeltedEventJS;
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
    type StructureVoidBlock_ = StructureVoidBlock;
    interface Shapes$DoubleLineConsumer {
        abstract consume(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    type Shapes$DoubleLineConsumer_ = Shapes$DoubleLineConsumer;
    interface Entity$MoveFunction {
        abstract accept(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number): void;
        (arg0: Internal.Entity, arg1: number, arg2: number, arg3: number): void;
    }
    type Entity$MoveFunction_ = Entity$MoveFunction;
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
        abstract getFormattedName(arg0: Internal.Component_): Internal.MutableComponent;
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
    abstract class ImmutableCollections$AbstractImmutableSet <E> extends Internal.ImmutableCollections$AbstractImmutableCollection<E> implements Internal.Set<E> {
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
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
    }
    type ImmutableCollections$AbstractImmutableSet_<E> = ImmutableCollections$AbstractImmutableSet<E>;
    class SoapItem extends Internal.Item {
        constructor(pProperties: Internal.Item$Properties_)
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
        static hasBeenEatenBefore(player: Internal.Player_, level: Internal.Level_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static interactWithEntity(stack: Internal.ItemStack_, player: Internal.Player_, entity: Internal.Entity_, hand: Internal.InteractionHand_): boolean;
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
        static readonly SOAP_FOOD: Internal.FoodProperties;
    }
    type SoapItem_ = SoapItem;
    interface FormattedText$ContentConsumer <T> {
        abstract accept(arg0: string): Internal.Optional<T>;
        (arg0: string): Internal.Optional_<T>;
    }
    type FormattedText$ContentConsumer_<T> = FormattedText$ContentConsumer<T>;
    interface AccessorEntity {
        abstract bookshelf$createHoverEvent(): Internal.HoverEvent;
        (): Internal.HoverEvent_;
    }
    type AccessorEntity_ = AccessorEntity;
    abstract class AbstractClientPlayer extends Internal.Player implements Internal.ClientPlayerKJS {
        constructor(arg0: Internal.ClientLevel_, arg1: Internal.GameProfile_)
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
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isSkinLoaded(): boolean;
        paint(tag: Internal.CompoundTag_): void;
        getBlockReach(): number;
        damageHeldItem(): void;
        getDeltaMovementLerped(arg0: number): Vec3d;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        isElytraLoaded(): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        static registerSkinTexture(arg0: ResourceLocation_, arg1: string): void;
        getFoodLevel(): number;
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
        self(): Internal.LivingEntity;
        setXp(xp: number): void;
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
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getFieldOfViewModifier(): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        getName(): Internal.Component;
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
        setDefaultMovementSpeed(speed: number): void;
        setOffHandItem(item: Internal.ItemStack_): void;
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
        tell(message: Internal.Component_): void;
        getMouseItem(): Internal.ItemStack;
        setZ(z: number): void;
        serializeNBT(): Internal.CompoundTag;
        getSkinTextureLocation(): ResourceLocation;
        getElytraTextureLocation(): ResourceLocation;
        setStatusMessage(message: Internal.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
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
        get displayName(): Internal.Component
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
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        get saturation(): number
        set headArmorItem(item: Internal.ItemStack_)
        elytraRotX: number;
        elytraRotY: number;
        elytraRotZ: number;
        readonly clientLevel: Internal.ClientLevel;
    }
    type AbstractClientPlayer_ = AbstractClientPlayer;
    interface BuilderFactory {
        abstract createBuilder(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        (arg0: ResourceLocation): Internal.BuilderBase_<any>;
    }
    type BuilderFactory_ = BuilderFactory;
    interface MetricSampler$ThresholdTest {
        abstract test(arg0: number): boolean;
        (arg0: number): boolean;
    }
    type MetricSampler$ThresholdTest_ = MetricSampler$ThresholdTest;
    class UncontainableBlockItem extends Internal.BlockItem {
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
    type UncontainableBlockItem_ = UncontainableBlockItem;
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
        getInventory(): Internal.Container;
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
        get inventory(): Internal.Container
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
    interface AccessorLivingEntity {
        abstract bookshelf$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        abstract bookshelf$getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        abstract bookshelf$makePoofParticles(): void;
        abstract bookshelf$getDeathSound(): Internal.SoundEvent;
        abstract bookshelf$getFallDamageSound(arg0: number): Internal.SoundEvent;
    }
    type AccessorLivingEntity_ = AccessorLivingEntity;
    class KineticBlockEntity extends Internal.SmartBlockEntity implements Internal.IHaveHoveringInformation, Internal.IHaveGoggleInformation {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getOrCreateNetwork(): Internal.KineticNetwork;
        clearKineticInformation(): void;
        isSource(): boolean;
        static switchToBlockState(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        detachKinetics(): void;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
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
        addToGoggleTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean): boolean;
        addPropagationLocations(arg0: Internal.IRotate_, arg1: Internal.BlockState_, arg2: Internal.List_<BlockPos>): Internal.List<BlockPos>;
        setNetwork(arg0: number): void;
        getRotationAngleOffset(arg0: Internal.Direction$Axis_): number;
        onSpeedChanged(arg0: number): void;
        addToTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean): boolean;
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
    class PowerGloveItem extends Internal.AttributeModifyingItem {
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
    type PowerGloveItem_ = PowerGloveItem;
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
    class PoweredBlock extends Internal.Block {
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
    type PoweredBlock_ = PoweredBlock;
    class Giant extends Internal.Monster {
        constructor(arg0: Internal.EntityType_<Internal.Giant>, arg1: Internal.Level_)
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
    type Giant_ = Giant;
    class TrackBlock extends Internal.Block implements Internal.ISpecialBlockItemRequirement, Internal.ProperWaterloggedBlock, Internal.ITrackBlock, Internal.IWrenchable, Internal.IBE<Internal.TrackBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.TrackMaterial_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static getMaterialSimple(arg0: Internal.BlockGetter_, arg1: Vec3d_, arg2: Internal.TrackMaterial_): Internal.TrackMaterial;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRequiredItems(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.ItemRequirement;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getUpNormal(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Vec3d;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getElevationAtCenter(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): number;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        trackEquals(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getConnected(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean, arg4: Internal.TrackNodeLocation_): Internal.Collection<Internal.TrackNodeLocation$DiscoveredLocation>;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        prepareTrackOverlay(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BezierTrackPointLocation_, arg4: Internal.Direction$AxisDirection_, arg5: Internal.PoseStack_, arg6: Internal.TrackTargetingBehaviour$RenderedTrackOverlayType_): Internal.PartialModel;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getYOffsetAt(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Vec3d_): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        prepareAssemblyOverlay(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: Internal.PoseStack_): Internal.PartialModel;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        overlay(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): Internal.BlockState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.TrackBlockEntity>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        static addToListIfConnected(arg0: Internal.TrackNodeLocation_, arg1: Internal.Collection_<Internal.TrackNodeLocation$DiscoveredLocation>, arg2: Internal.BiFunction_<number, boolean, Vec3d>, arg3: Internal.Function_<boolean, Vec3d>, arg4: Internal.Function_<boolean, Internal.ResourceKey<Internal.Level>>, arg5: Internal.Function_<Vec3d, number>, arg6: Vec3d_, arg7: Internal.BezierConnection_, arg8: Internal.BiFunction_<boolean, Vec3d, Internal.TrackMaterial>): void;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        getTrackAxes(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.List<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        getBogeyAnchor(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.BlockState;
        isSlope(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getMaterial(): Internal.TrackMaterial;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        setLightEmission(v: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.TrackBlockEntity>): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.TrackBlockEntity>;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.TrackBlockEntity;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Random_): void;
        static getMaterialSimple(arg0: Internal.BlockGetter_, arg1: Vec3d_): Internal.TrackMaterial;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        static walkConnectedTracks(arg0: Internal.BlockGetter_, arg1: Internal.TrackNodeLocation_, arg2: boolean): Internal.Collection<Internal.TrackNodeLocation$DiscoveredLocation>;
        getNearestTrackAxis(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Vec3d_): Internal.Pair<Vec3d, Internal.Direction$AxisDirection>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getCurveStart(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Vec3d_): Vec3d;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getBlockEntityClass(): typeof Internal.TrackBlockEntity;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        static withWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.BlockState;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.TrackBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityType(): Internal.BlockEntityType<Internal.TrackBlockEntity>
        get material(): Internal.TrackMaterial
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockEntityClass(): typeof Internal.TrackBlockEntity
        get mod(): string
        static readonly SHAPE: Internal.EnumProperty<Internal.TrackShape>;
        static readonly HAS_BE: Internal.BooleanProperty;
    }
    type TrackBlock_ = TrackBlock;
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
    class BeetrootBlock extends Internal.CropBlock {
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
    type BeetrootBlock_ = BeetrootBlock;
    class CraftingTableBlock extends Internal.Block {
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
    type CraftingTableBlock_ = CraftingTableBlock;
    class FluidContainerList {
        constructor()
        constructor(categoryList: Internal.List_<Internal.FluidContainerList$Category>)
        merge(other: Internal.FluidContainerList_): void;
        getCategoryFromFilled(filledContainer: Internal.Item_): Internal.Optional<Internal.FluidContainerList$Category>;
        getPossibleFilled(): Internal.Collection<Internal.Item>;
        getCategoryFromEmpty(emptyContainer: Internal.Item_): Internal.Optional<Internal.FluidContainerList$Category>;
        getCategories(): Internal.Collection<Internal.FluidContainerList$Category>;
        add(empty: Internal.Item_, filled: Internal.Item_, amount: number, fillSound: Internal.SoundEvent_, emptySound: Internal.SoundEvent_): void;
        getEmpty(filledContainer: Internal.Item_): Internal.Optional<Internal.Item>;
        getPossibleEmpty(): Internal.Collection<Internal.Item>;
        add(empty: Internal.Item_, filled: Internal.Item_, amount: number): void;
        getFilled(emptyContainer: Internal.Item_): Internal.Optional<Internal.Item>;
        encodeList(): Internal.Optional<Internal.List<Internal.FluidContainerList$Category>>;
        get possibleFilled(): Internal.Collection<Internal.Item>
        get categories(): Internal.Collection<Internal.FluidContainerList$Category>
        get possibleEmpty(): Internal.Collection<Internal.Item>
    }
    type FluidContainerList_ = FluidContainerList;
    class PoseStack$Pose {
        normal(): Matrix3f;
        pose(): Matrix4f;
    }
    type PoseStack$Pose_ = PoseStack$Pose;
    interface AccessorSignBlockEntity {
        abstract bookshelf$markUpdated(): void;
        (): void;
    }
    type AccessorSignBlockEntity_ = AccessorSignBlockEntity;
    abstract class SimpleBargainSerializer <T extends Internal.SimpleBargain> implements Internal.RecipeSerializer<T> {
        constructor()
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(recipeId: ResourceLocation_, json: Internal.JsonObject_): T;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromNetwork(recipeId: ResourceLocation_, buffer: Internal.FriendlyByteBuf_): T;
        toNetwork(buffer: Internal.FriendlyByteBuf_, recipe: T): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): T;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type SimpleBargainSerializer_<T extends Internal.SimpleBargain> = SimpleBargainSerializer<T>;
    class ConfigBase$ConfigBool extends Internal.ConfigBase$CValue<boolean, Internal.ForgeConfigSpec$BooleanValue> {
        constructor(arg0: Internal.ConfigBase_, arg1: string, arg2: boolean, ...arg3: string[])
    }
    type ConfigBase$ConfigBool_ = ConfigBase$ConfigBool;
    interface ObjLongConsumer <T> {
        abstract accept(arg0: T, arg1: number): void;
        (arg0: T, arg1: number): void;
    }
    type ObjLongConsumer_<T> = ObjLongConsumer<T>;
    class IronWindChimeBlock extends Internal.WindChimeTyableBlock {
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
    type IronWindChimeBlock_ = IronWindChimeBlock;
    class HornedStatueBlock extends Internal.HorizontalDirectionalBlock {
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
    type HornedStatueBlock_ = HornedStatueBlock;
    interface Float2DoubleFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.DoubleUnaryOperator {
        andThenFloat(arg0: Internal.Double2FloatFunction_): Internal.Float2FloatFunction;
        compose(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        andThenLong(arg0: Internal.Double2LongFunction_): Internal.Float2LongFunction;
        abstract get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2DoubleFunction;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2DoubleFunction;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2DoubleFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenByte(arg0: Internal.Double2ByteFunction_): Internal.Float2ByteFunction;
        defaultReturnValue(arg0: number): void;
        andThenInt(arg0: Internal.Double2IntFunction_): Internal.Float2IntFunction;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2DoubleFunction;
        andThenDouble(arg0: Internal.Double2DoubleFunction_): this;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2DoubleFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        andThenChar(arg0: Internal.Double2CharFunction_): Internal.Float2CharFunction;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        defaultReturnValue(): number;
        andThenShort(arg0: Internal.Double2ShortFunction_): Internal.Float2ShortFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        size(): number;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2DoubleFunction;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2DoubleFunction;
        andThen(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        andThenObject<T>(arg0: Internal.Double2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2DoubleFunction<T>;
        identity(): Internal.DoubleUnaryOperator;
        clear(): void;
        apply(arg0: number): number;
        andThenReference<T>(arg0: Internal.Double2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        (arg0: number): number;
    }
    type Float2DoubleFunction_ = Float2DoubleFunction;
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
    class ItemStack extends Internal.CapabilityProvider<Internal.ItemStack> implements Internal.ItemStackKJS, Internal.IForgeItemStack {
        constructor(arg0: Internal.Holder_<Internal.Item>)
        constructor(arg0: Internal.Holder_<Internal.Item>, arg1: number)
        constructor(arg0: Internal.ItemLike_)
        constructor(arg0: Internal.ItemLike_, arg1: number, arg2: Internal.CompoundTag_)
        constructor(arg0: Internal.ItemLike_, arg1: number)
        getTags(): Internal.Collection<ResourceLocation>;
        getDrinkingSound(): Internal.SoundEvent;
        self(): this;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getHoverName(): Internal.Component;
        onStopUsing(arg0: Internal.LivingEntity_, arg1: number): void;
        enchant(enchantment: Internal.Enchantment_, level: number): this;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_): boolean;
        getBaseRepairCost(): number;
        isItemEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        elytraFlightTick(arg0: Internal.LivingEntity_, arg1: number): boolean;
        toJson(): Internal.JsonElement;
        getFrame(): Internal.ItemFrame;
        getEnchantments(): Internal.Map<string, number>;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        static appendEnchantmentNames(arg0: Internal.List_<Internal.Component>, arg1: Internal.ListTag_): void;
        enchant(enchantments: Internal.Map_<any, any>): this;
        static matches(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        hasAdventureModeBreakTagForBlock(arg0: Internal.Registry_<Internal.Block>, arg1: Internal.BlockInWorld_): boolean;
        getPopTime(): number;
        makesPiglinsNeutral(arg0: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.LivingEntity_, arg1: Internal.Player_): void;
        getDescriptionId(): string;
        getRarity(): Internal.Rarity;
        areShareTagsEqual(arg0: Internal.ItemStack_): boolean;
        finishUsingItem(arg0: Internal.Level_, arg1: Internal.LivingEntity_): this;
        canWalkOnPowderedSnow(arg0: Internal.LivingEntity_): boolean;
        getHighlightTip(arg0: Internal.Component_): Internal.Component;
        getAllEnchantments(): Internal.Map<Internal.Enchantment, number>;
        canPerformAction(arg0: Internal.ToolAction_): boolean;
        getTypeData(): Internal.CompoundTag;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_, arg2: Internal.EquipmentSlot_): void;
        is(arg0: Internal.Predicate_<Internal.Holder<Internal.Item>>): boolean;
        hasAdventureModePlaceTagForBlock(arg0: Internal.Registry_<Internal.Block>, arg1: Internal.BlockInWorld_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
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
        getDisplayName(): Internal.Component;
        getCount(): number;
        onItemUseFirst(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        hasCustomHoverName(): boolean;
        onArmorTick(arg0: Internal.Level_, arg1: Internal.Player_): void;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
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
        setHoverName(arg0: Internal.Component_): this;
        getTags(): Internal.Stream<Internal.TagKey<Internal.Item>>;
        getBarWidth(): number;
        setEntityRepresentation(arg0: Internal.Entity_): void;
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
        withName(displayName: Internal.Component_): this;
        getCraftingRemainingItem(): this;
        isPiglinCurrency(): boolean;
        getFoodProperties(arg0: Internal.LivingEntity_): Internal.FoodProperties;
        is(arg0: Internal.Holder_<Internal.Item>): boolean;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_, arg4: Internal.SlotAccess_): boolean;
        getXpRepairRatio(): number;
        withLore(text: Internal.Component_[]): this;
        getNbt(): Internal.CompoundTag;
        isDamageableItem(): boolean;
        getTooltipLines(arg0: Internal.Player_, arg1: Internal.TooltipFlag_): Internal.List<Internal.Component>;
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
        getUseAnimation(): Internal.UseAnim;
        getEnchantmentTags(): Internal.ListTag;
        deserializeNBT(arg0: Internal.Tag_): void;
        toItemString(): string;
        withNBT(nbt: Internal.CompoundTag_): this;
        interactLivingEntity(arg0: Internal.Player_, arg1: Internal.LivingEntity_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
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
        get hoverName(): Internal.Component
        get baseRepairCost(): number
        get frame(): Internal.ItemFrame
        get enchantments(): Internal.Map<string, number>
        get popTime(): number
        get descriptionId(): string
        get rarity(): Internal.Rarity
        get allEnchantments(): Internal.Map<Internal.Enchantment, number>
        get typeData(): Internal.CompoundTag
        get item(): Internal.Item
        get maxDamage(): number
        get harvestSpeed(): number
        get displayName(): Internal.Component
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
        set hoverName(arg0: Internal.Component_)
        get tags(): Internal.Stream<Internal.TagKey<Internal.Item>>
        get barWidth(): number
        set entityRepresentation(arg0: Internal.Entity_)
        get itemHolder(): Internal.Holder<Internal.Item>
        set popTime(arg0: number)
        get block(): boolean
        get tooltipImage(): Internal.Optional<Internal.TooltipComponent>
        get craftingRemainingItem(): Internal.ItemStack
        get piglinCurrency(): boolean
        get xpRepairRatio(): number
        get nbt(): Internal.CompoundTag
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
        get useAnimation(): Internal.UseAnim
        get enchantmentTags(): Internal.ListTag
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
    interface TypeAdapterFactory {
        abstract create<T>(arg0: Internal.Gson_, arg1: com.google.gson.reflect.TypeToken_<T>): Internal.TypeAdapter<T>;
        (arg0: Internal.Gson, arg1: com.google.gson.reflect.TypeToken<T>): Internal.TypeAdapter_<T>;
    }
    type TypeAdapterFactory_ = TypeAdapterFactory;
    class ControlType extends Internal.Enum<Internal.ControlType> {
        static valueOf(arg0: string): Internal.ControlType;
        static getEntries(): Internal.EnumEntries<Internal.ControlType>;
        static values(): Internal.ControlType[];
        get entries(): Internal.EnumEntries<Internal.ControlType>
        static readonly NEVER: Internal.ControlType;
        static readonly TOGGLE: Internal.ControlType;
        static readonly ALWAYS: Internal.ControlType;
    }
    type ControlType_ = "never" | ControlType | "always" | "toggle";
    interface Byte2ByteFunction extends Internal.IntUnaryOperator, it.unimi.dsi.fastutil.Function<number, number> {
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        getOrDefault(arg0: number, arg1: number): number;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2ByteFunction<T>;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2ByteFunction<T>;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2ByteFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThenDouble(arg0: Internal.Byte2DoubleFunction_): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        defaultReturnValue(arg0: number): void;
        identity(): this;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2ByteFunction;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenByte(arg0: Internal.Byte2ByteFunction_): this;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        containsKey(arg0: number): boolean;
        defaultReturnValue(): number;
        andThenShort(arg0: Internal.Byte2ShortFunction_): Internal.Byte2ShortFunction;
        andThenFloat(arg0: Internal.Byte2FloatFunction_): Internal.Byte2FloatFunction;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2ByteFunction;
        andThenInt(arg0: Internal.Byte2IntFunction_): Internal.Byte2IntFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        andThenObject<T>(arg0: Internal.Byte2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        andThenChar(arg0: Internal.Byte2CharFunction_): Internal.Byte2CharFunction;
        andThenReference<T>(arg0: Internal.Byte2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        andThenLong(arg0: Internal.Byte2LongFunction_): Internal.Byte2LongFunction;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2ByteFunction;
        abstract get(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        size(): number;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2ByteFunction;
        clear(): void;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2ByteFunction;
        put(arg0: number, arg1: number): number;
        remove(arg0: number): number;
        apply(arg0: number): number;
        (arg0: number): number;
    }
    type Byte2ByteFunction_ = Byte2ByteFunction;
    interface ISource {
        abstract isDisabled(arg0: Internal.IJetpack$Context_): boolean;
        (arg0: Internal.IJetpack$Context): boolean;
    }
    type ISource_ = ISource;
    interface CanvasSign {
        abstract getBackgroundColor(): Internal.DyeColor;
        isDarkBackground(): boolean;
        get backgroundColor(): Internal.DyeColor
        get darkBackground(): boolean
        (): Internal.DyeColor_;
    }
    type CanvasSign_ = CanvasSign;
    class EndCityStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly CODEC: Internal.Codec<Internal.EndCityStructure>;
    }
    type EndCityStructure_ = EndCityStructure;
    class CreativeModeTab implements Internal.CreativeModeTabKJS {
        getType(): Internal.CreativeModeTab$Type;
        getDisplayName(): Internal.Component;
        /**
         * @deprecated
        */
        static builder(arg0: Internal.CreativeModeTab$Row_, arg1: number): Internal.CreativeModeTab$Builder;
        getSearchBarWidth(): number;
        hasAnyItems(): boolean;
        rebuildSearchTree(): void;
        getSlotColor(): number;
        getSearchTabDisplayItems(): Internal.Collection<Internal.ItemStack>;
        row(): Internal.CreativeModeTab$Row;
        setSearchTreeBuilder(arg0: Internal.Consumer_<Internal.List<Internal.ItemStack>>): void;
        getBackgroundLocation(): ResourceLocation;
        hasSearchBar(): boolean;
        isAlignedRight(): boolean;
        kjs$setDisplayName(component: Internal.Component_): void;
        /**
         * @deprecated
        */
        getBackgroundSuffix(): string;
        static builder(): Internal.CreativeModeTab$Builder;
        canScroll(): boolean;
        getLabelColor(): number;
        buildContents(arg0: Internal.CreativeModeTab$ItemDisplayParameters_): void;
        shouldDisplay(): boolean;
        getTabsImage(): ResourceLocation;
        kjs$setIcon(icon: Internal.ItemStack_): void;
        showTitle(): boolean;
        contains(arg0: Internal.ItemStack_): boolean;
        getDisplayItems(): Internal.Collection<Internal.ItemStack>;
        getIconItem(): Internal.ItemStack;
        column(): number;
        get type(): Internal.CreativeModeTab$Type
        get displayName(): Internal.Component
        get searchBarWidth(): number
        get slotColor(): number
        get searchTabDisplayItems(): Internal.Collection<Internal.ItemStack>
        set searchTreeBuilder(arg0: Internal.Consumer_<Internal.List<Internal.ItemStack>>)
        get backgroundLocation(): ResourceLocation
        get alignedRight(): boolean
        /**
         * @deprecated
        */
        get backgroundSuffix(): string
        get labelColor(): number
        get tabsImage(): ResourceLocation
        get displayItems(): Internal.Collection<Internal.ItemStack>
        get iconItem(): Internal.ItemStack
        readonly tabsBefore: Internal.List<ResourceLocation>;
        readonly tabsAfter: Internal.List<ResourceLocation>;
    }
    type CreativeModeTab_ = Special.CreativeModeTab | CreativeModeTab;
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
    class BombExplosion extends Internal.Explosion {
        constructor(world: Internal.Level_, entity: Internal.Entity_, context: Internal.ExplosionDamageCalculator_, x: number, y: number, z: number, radius: number, bombType: Internal.BombEntity$BombType_, interaction: Internal.Explosion$BlockInteraction_)
        getToBlow(): Internal.List<any>;
        doFinalizeExplosion(): void;
        getToBlow(): Internal.ObjectArrayList<BlockPos>;
        get toBlow(): Internal.List<any>
        get toBlow(): Internal.ObjectArrayList<BlockPos>
    }
    type BombExplosion_ = BombExplosion;
    class CustomMapData$SimpleDirtyCounter implements Internal.CustomMapData$DirtyCounter {
        constructor()
        markDirty(): void;
        clearDirty(): void;
        isDirty(): boolean;
        get dirty(): boolean
    }
    type CustomMapData$SimpleDirtyCounter_ = CustomMapData$SimpleDirtyCounter;
    abstract class SingleItemRecipe implements Internal.Recipe<Internal.Container> {
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
        assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        abstract matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<Internal.ItemStack>;
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
    interface LightListener {
        abstract getVolume(): Internal.ImmutableBox;
        onLightPacket(arg0: number, arg1: number): void;
        abstract onLightUpdate(arg0: Internal.LightLayer_, arg1: Internal.ImmutableBox_): void;
        abstract isListenerInvalid(): boolean;
        get volume(): Internal.ImmutableBox
        get listenerInvalid(): boolean
    }
    type LightListener_ = LightListener;
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
        getName(): Internal.Component;
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
        tell(message: Internal.Component_): void;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        getAnyChunkImmediately(arg0: number, arg1: number): Internal.ChunkAccess;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        setStatusMessage(message: Internal.Component_): void;
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
        get displayName(): Internal.Component
        set blockEntities(arg0: Internal.Collection_<Internal.BlockEntity>)
        get partEntities(): Internal.Collection<Internal.PartEntity<any>>
        get dimension(): ResourceLocation
        get difficulty(): Internal.Difficulty
        get name(): Internal.Component
        get moonPhase(): number
        get moonBrightness(): number
        get side(): Internal.ScriptType
        get modelDataManager(): Internal.ModelDataManager
        get entities(): Internal.EntityArrayList
        set statusMessage(message: Internal.Component_)
        get players(): Internal.EntityArrayList
        get maxLightLevel(): number
        get overworld(): boolean
    }
    type VirtualRenderWorld_ = VirtualRenderWorld;
    abstract class NumberFormat extends Internal.Format {
        abstract parse(arg0: string, arg1: Internal.ParsePosition_): number;
        static getCompactNumberInstance(): Internal.NumberFormat;
        format(arg0: number): string;
        setMaximumIntegerDigits(arg0: number): void;
        parse(arg0: string): number;
        static getAvailableLocales(): Internal.Locale[];
        setParseIntegerOnly(arg0: boolean): void;
        static getPercentInstance(): Internal.NumberFormat;
        setGroupingUsed(arg0: boolean): void;
        format(arg0: number): string;
        getMinimumIntegerDigits(): number;
        setMaximumFractionDigits(arg0: number): void;
        getCurrency(): Internal.Currency;
        static getInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        getMaximumFractionDigits(): number;
        setRoundingMode(arg0: Internal.RoundingMode_): void;
        static getInstance(): Internal.NumberFormat;
        setCurrency(arg0: Internal.Currency_): void;
        getMaximumIntegerDigits(): number;
        isGroupingUsed(): boolean;
        static getNumberInstance(): Internal.NumberFormat;
        static getPercentInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        static getCurrencyInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        isParseIntegerOnly(): boolean;
        setMinimumIntegerDigits(arg0: number): void;
        abstract format(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        static getCompactNumberInstance(arg0: Internal.Locale_, arg1: Internal.NumberFormat$Style_): Internal.NumberFormat;
        static getCurrencyInstance(): Internal.NumberFormat;
        static getNumberInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        getMinimumFractionDigits(): number;
        setMinimumFractionDigits(arg0: number): void;
        static getIntegerInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        abstract format(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        static getIntegerInstance(): Internal.NumberFormat;
        getRoundingMode(): Internal.RoundingMode;
        get compactNumberInstance(): Internal.NumberFormat
        set maximumIntegerDigits(arg0: number)
        get availableLocales(): Internal.Locale[]
        set parseIntegerOnly(arg0: boolean)
        get percentInstance(): Internal.NumberFormat
        set groupingUsed(arg0: boolean)
        get minimumIntegerDigits(): number
        set maximumFractionDigits(arg0: number)
        get currency(): Internal.Currency
        get maximumFractionDigits(): number
        set roundingMode(arg0: Internal.RoundingMode_)
        get instance(): Internal.NumberFormat
        set currency(arg0: Internal.Currency_)
        get maximumIntegerDigits(): number
        get groupingUsed(): boolean
        get numberInstance(): Internal.NumberFormat
        get parseIntegerOnly(): boolean
        set minimumIntegerDigits(arg0: number)
        get currencyInstance(): Internal.NumberFormat
        get minimumFractionDigits(): number
        set minimumFractionDigits(arg0: number)
        get integerInstance(): Internal.NumberFormat
        get roundingMode(): Internal.RoundingMode
        static readonly INTEGER_FIELD: 0;
        static readonly FRACTION_FIELD: 1;
    }
    type NumberFormat_ = NumberFormat;
    class Structure$GenerationContext extends Internal.Record {
        constructor(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: Internal.LevelHeightAccessor_, arg8: Internal.Predicate_<Internal.Holder<Internal.Biome>>)
        constructor(registryAccess: Internal.RegistryAccess_, chunkGenerator: Internal.ChunkGenerator_, biomeSource: Internal.BiomeSource_, randomState: Internal.RandomState_, structureTemplateManager: Internal.StructureTemplateManager_, random: Internal.WorldgenRandom_, seed: number, chunkPos: Internal.ChunkPos_, heightAccessor: Internal.LevelHeightAccessor_, validBiome: Internal.Predicate_<Internal.Holder<Internal.Biome>>)
        biomeSource(): Internal.BiomeSource;
        random(): Internal.WorldgenRandom;
        seed(): number;
        heightAccessor(): Internal.LevelHeightAccessor;
        validBiome(): Internal.Predicate<Internal.Holder<Internal.Biome>>;
        structureTemplateManager(): Internal.StructureTemplateManager;
        registryAccess(): Internal.RegistryAccess;
        chunkGenerator(): Internal.ChunkGenerator;
        randomState(): Internal.RandomState;
        chunkPos(): Internal.ChunkPos;
    }
    type Structure$GenerationContext_ = Structure$GenerationContext;
    class ClientboundAddExperienceOrbPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.ExperienceOrb_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getX(): number;
        getY(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getZ(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getValue(): number;
        isSkippable(): boolean;
        getId(): number;
        get x(): number
        get y(): number
        get z(): number
        get value(): number
        get skippable(): boolean
        get id(): number
    }
    type ClientboundAddExperienceOrbPacket_ = ClientboundAddExperienceOrbPacket;
    class Endermite extends Internal.Monster {
        constructor(arg0: Internal.EntityType_<Internal.Endermite>, arg1: Internal.Level_)
        static checkEndermiteSpawnRules(arg0: Internal.EntityType_<Internal.Endermite>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
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
    type Endermite_ = Endermite;
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
    class StructureTemplatePool implements Internal.AccessorStructureTemplatePool {
        constructor(arg0: Internal.Holder_<Internal.StructureTemplatePool>, arg1: Internal.List_<com.mojang.datafixers.util.Pair<Internal.StructurePoolElement, number>>)
        constructor(arg0: Internal.Holder_<Internal.StructureTemplatePool>, arg1: Internal.List_<com.mojang.datafixers.util.Pair<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>, number>>, arg2: Internal.StructureTemplatePool$Projection_)
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
        rawTemplates: Internal.List<com.mojang.datafixers.util.Pair<Internal.StructurePoolElement, number>>;
        templates: Internal.ObjectArrayList<Internal.StructurePoolElement>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.StructureTemplatePool>>;
    }
    type StructureTemplatePool_ = StructureTemplatePool | Special.TemplatePool;
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
    class DripstoneThickness extends Internal.Enum<Internal.DripstoneThickness> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.DripstoneThickness;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.DripstoneThickness[];
        get serializedName(): string
        static readonly BASE: Internal.DripstoneThickness;
        static readonly FRUSTUM: Internal.DripstoneThickness;
        static readonly TIP_MERGE: Internal.DripstoneThickness;
        static readonly MIDDLE: Internal.DripstoneThickness;
        static readonly TIP: Internal.DripstoneThickness;
    }
    type DripstoneThickness_ = "tip_merge" | DripstoneThickness | "frustum" | "middle" | "base" | "tip";
    class SurfaceWaterDepthFilter extends Internal.PlacementFilter {
        static forMaxDepth(arg0: number): Internal.SurfaceWaterDepthFilter;
        static readonly CODEC: Internal.Codec<Internal.SurfaceWaterDepthFilter>;
    }
    type SurfaceWaterDepthFilter_ = SurfaceWaterDepthFilter;
    class CustomMapDecoration {
        constructor(type: Internal.MapDecorationType_<any, any>, buffer: Internal.FriendlyByteBuf_)
        constructor(type: Internal.MapDecorationType_<any, any>, x: number, y: number, rot: number, displayName: Internal.Component_)
        getDisplayName(): Internal.Component;
        getX(): number;
        setDisplayName(displayName: Internal.Component_): void;
        getRot(): number;
        getType(): Internal.MapDecorationType<any, any>;
        setRot(rot: number): void;
        setX(x: number): void;
        saveToBuffer(buffer: Internal.FriendlyByteBuf_): void;
        setY(y: number): void;
        getY(): number;
        get displayName(): Internal.Component
        get x(): number
        set displayName(displayName: Internal.Component_)
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
    class ScheduledEvents$ScheduledEvent {
        constructor()
        reschedule(timer: number): this;
        reschedule(): this;
        clear(): void;
        repeating: boolean;
        id: number;
        timer: number;
        endTime: number;
        scheduledEvents: Internal.ScheduledEvents;
        ofTicks: boolean;
    }
    type ScheduledEvents$ScheduledEvent_ = ScheduledEvents$ScheduledEvent;
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
    class SpyglassItem extends Internal.Item {
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
        static readonly USE_DURATION: 1200;
        static readonly ZOOM_FOV_MODIFIER: 0.1;
    }
    type SpyglassItem_ = SpyglassItem;
    /**
     * @deprecated
    */
    interface RecvByteBufAllocator$Handle {
        abstract reset(arg0: Internal.ChannelConfig_): void;
        abstract incMessagesRead(arg0: number): void;
        abstract attemptedBytesRead(arg0: number): void;
        abstract readComplete(): void;
        abstract attemptedBytesRead(): number;
        abstract allocate(arg0: Internal.ByteBufAllocator_): Internal.ByteBuf;
        abstract guess(): number;
        abstract lastBytesRead(): number;
        abstract continueReading(): boolean;
        abstract lastBytesRead(arg0: number): void;
    }
    type RecvByteBufAllocator$Handle_ = RecvByteBufAllocator$Handle;
    class String$CaseInsensitiveComparator implements Internal.Comparator<string>, Internal.Serializable {
        thenComparingLong(arg0: Internal.ToLongFunction_<string>): Internal.Comparator<string>;
        thenComparingDouble(arg0: Internal.ToDoubleFunction_<string>): Internal.Comparator<string>;
        thenComparing<U>(arg0: Internal.Function_<string, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<string>;
        static comparing<T, U extends Internal.Comparable<any>>(arg0: Internal.Function_<T, U>): Internal.Comparator<T>;
        static reverseOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        reversed(): Internal.Comparator<string>;
        thenComparing<U extends Internal.Comparable<any>>(arg0: Internal.Function_<string, U>): Internal.Comparator<string>;
        thenComparing(arg0: Internal.Comparator_<string>): Internal.Comparator<string>;
        thenComparingInt(arg0: Internal.ToIntFunction_<string>): Internal.Comparator<string>;
        static naturalOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        compare(arg0: string, arg1: string): number;
        static comparingInt<T>(arg0: Internal.ToIntFunction_<T>): Internal.Comparator<T>;
        static nullsFirst<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        static comparingLong<T>(arg0: Internal.ToLongFunction_<T>): Internal.Comparator<T>;
        static comparingDouble<T>(arg0: Internal.ToDoubleFunction_<T>): Internal.Comparator<T>;
        static nullsLast<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        compare(arg0: any, arg1: any): number;
        static comparing<T, U>(arg0: Internal.Function_<T, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<T>;
    }
    type String$CaseInsensitiveComparator_ = String$CaseInsensitiveComparator;
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
        handler$zjd000$onFinishedShortPulse(ci: Internal.CallbackInfo_): void;
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
    class BarrierBlock extends Internal.Block {
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
    type BarrierBlock_ = BarrierBlock;
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
    type BookItem_ = BookItem;
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
    type LatticeBlock_ = LatticeBlock;
    class SimpleParticleType extends Internal.ParticleType<Internal.SimpleParticleType> implements Internal.ParticleOptions {
        constructor(arg0: boolean)
        writeToString(): string;
        getType(): this;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        codec(): Internal.Codec<Internal.SimpleParticleType>;
        get type(): Internal.SimpleParticleType
    }
    type SimpleParticleType_ = SimpleParticleType;
    class UnderwaterMagmaFeature extends Internal.Feature<Internal.UnderwaterMagmaConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.UnderwaterMagmaConfiguration>)
    }
    type UnderwaterMagmaFeature_ = UnderwaterMagmaFeature;
    class DragonSittingAttackingPhase extends Internal.AbstractDragonSittingPhase {
        constructor(arg0: Internal.EnderDragon_)
        getPhase(): Internal.EnderDragonPhase<Internal.DragonSittingAttackingPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonSittingAttackingPhase>
    }
    type DragonSittingAttackingPhase_ = DragonSittingAttackingPhase;
    interface Object2IntMap$Entry <K> extends Internal.Map$Entry<K, number> {
        abstract getKey(): K;
        /**
         * @deprecated
        */
        getValue(): number;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        /**
         * @deprecated
        */
        setValue(arg0: number): number;
        /**
         * @deprecated
        */
        setValue(arg0: any): any;
        abstract setValue(arg0: number): number;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract getIntValue(): number;
        abstract equals(arg0: any): boolean;
        get key(): K
        /**
         * @deprecated
        */
        get value(): number
        /**
         * @deprecated
        */
        set value(arg0: number)
        /**
         * @deprecated
        */
        set value(arg0: any)
        set value(arg0: number)
        get intValue(): number
    }
    type Object2IntMap$Entry_<K> = Object2IntMap$Entry<K>;
    /**
     * Invoked when a player drops an item.
    */
    class ItemDroppedEventJS extends Internal.PlayerEventJS {
        constructor(player: Internal.Player_, entity: Internal.ItemEntity_)
        /**
         * The item entity that was spawned when dropping.
        */
        getItemEntity(): Internal.ItemEntity;
        /**
         * The player that dropped the item.
        */
        getEntity(): Internal.LivingEntity;
        /**
         * The item that was dropped.
        */
        getItem(): Internal.ItemStack;
        /**
         * The item entity that was spawned when dropping.
        */
        get itemEntity(): Internal.ItemEntity
        /**
         * The player that dropped the item.
        */
        get entity(): Internal.LivingEntity
        /**
         * The item that was dropped.
        */
        get item(): Internal.ItemStack
    }
    type ItemDroppedEventJS_ = ItemDroppedEventJS;
    class DataGenerator$PackGenerator {
        addProvider<T extends Internal.DataProvider>(arg0: Internal.DataProvider$Factory_<T>): T;
    }
    type DataGenerator$PackGenerator_ = DataGenerator$PackGenerator;
    class BasicPotInteractionSerializer implements Internal.RecipeSerializer<Internal.BasicPotInteraction> {
        constructor()
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.BasicPotInteraction;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.BasicPotInteraction;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.BasicPotInteraction;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BasicPotInteraction_): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        static readonly SERIALIZER: Internal.BasicPotInteractionSerializer;
    }
    type BasicPotInteractionSerializer_ = BasicPotInteractionSerializer;
    class BogeyRenderer$BogeyModelData extends Internal.Record implements Internal.Transform<Internal.BogeyRenderer$BogeyModelData> {
        constructor(transform: Internal.Transform_<any>)
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
        mulPose(arg0: Matrix4f_): Internal.Transform<any>;
        setTransform(arg0: Internal.PoseStack_): this;
        multiplyRadians(arg0: Vec3f_, arg1: number): this;
        rotateCentered(arg0: Quaternionf_): this;
        setEmptyTransform(): this;
        translate(arg0: number, arg1: number, arg2: number): this;
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
        playerDied(arg0: Internal.Player_): void;
        abstract getTarget(): Internal.LivingEntity;
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
    class SkullBlock extends Internal.AbstractSkullBlock {
        constructor(arg0: Internal.SkullBlock$Type_, arg1: Internal.BlockBehaviour$Properties_)
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
        static readonly ROTATION: Internal.IntegerProperty;
        static readonly MAX: 15;
    }
    type SkullBlock_ = SkullBlock;
    interface IForgeDispensibleContainerItem {
        emptyContents(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockHitResult_, arg4: Internal.ItemStack_): boolean;
    }
    type IForgeDispensibleContainerItem_ = IForgeDispensibleContainerItem;
    interface IntPredicate {
        and(arg0: Internal.IntPredicate_): this;
        or(arg0: Internal.IntPredicate_): this;
        negate(): this;
        abstract test(arg0: number): boolean;
        (arg0: number): boolean;
    }
    type IntPredicate_ = IntPredicate;
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
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
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
        static allowedProperties: {[key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.SeatBlock]: any, [key: Internal.SeatBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RepeaterBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.SeatBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.HugeMushroomBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ModStairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.TrainTrapdoorBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.TrainTrapdoorBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.SeatBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.ModStairBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.GlassFluidPipeBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.HugeMushroomBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.SeatBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.GoldTrapdoorBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.SeatBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.SeatBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.SeatBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.DispenserBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: lilypuree.decorative_blocks.blocks.ChainBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RailBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.GlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.DetectorRailBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.NetheriteTrapdoorBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.PoweredRailBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.PoweredRailBlock]: any, [key: Internal.LinearChassisBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ObserverBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.LinearChassisBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ChainBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.SeatBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.LatticeBlock]: any, [key: Internal.StairBlock]: any, [key: net.mehvahdjukaar.supplementaries.common.block.blocks.PulleyBlock]: any, [key: Internal.WeatheringCopperStairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ComparatorBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.ControllerRailBlock]: any, [key: Internal.SupportBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.SeatBlock]: any, [key: Internal.HayBlock]: any, [key: Internal.SeatBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.BarPanelBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.DropperBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RopeBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.RedStoneWireBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.GlazedTerracottaBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.IronBarsBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.PalisadeBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.StrawBaleBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.FenceBlock]: any, [key: Internal.RadialChassisBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.WallBlock]: any, [key: Internal.TrapDoorBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ModStairBlock]: any, [key: Internal.HugeMushroomBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.ConnectedPillarBlock]: any, [key: Internal.RotatedPillarBlock]: any, [key: Internal.StainedGlassPaneBlock]: any, [key: Internal.BeamBlock]: any, [key: Internal.ModStairBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.ConnectedGlassPaneBlock]: any, [key: Internal.StairBlock]: any, [key: Internal.FenceBlock]: any};
    }
    type BlockstateCopyItem_ = BlockstateCopyItem;
    class NixieTubeBlock extends Internal.DoubleFaceAttachedBlock implements Internal.ISpecialBlockItemRequirement, Internal.IWrenchable, Internal.IBE<Internal.NixieTubeBlockEntity>, Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.DyeColor_)
        getBlockEntityClass(): typeof Internal.NixieTubeBlockEntity;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.NixieTubeBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRequiredItems(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.ItemRequirement;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getColor(): Internal.DyeColor;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        static colorOf(arg0: Internal.BlockState_): Internal.DyeColor;
        static withColor(arg0: Internal.BlockState_, arg1: Internal.DyeColor_): Internal.BlockState;
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
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.NixieTubeBlockEntity>;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        static walkNixies(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BiConsumer_<BlockPos, number>): void;
        getBlockStates(): Internal.List<Internal.BlockState>;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.NixieTubeBlockEntity>): void;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.NixieTubeBlockEntity>;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        static areNixieBlocksEqual(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.NixieTubeBlockEntity;
        static getFacing(arg0: Internal.BlockState_): Internal.Direction;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get blockEntityClass(): typeof Internal.NixieTubeBlockEntity
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        get color(): Internal.DyeColor
        set destroySpeed(v: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.NixieTubeBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type NixieTubeBlock_ = NixieTubeBlock;
    interface TriPredicate <T, U, V> {
        abstract test(arg0: T, arg1: U, arg2: V): boolean;
        negate(): this;
        or(arg0: Internal.TriPredicate_<T, U, V>): this;
        and(arg0: Internal.TriPredicate_<T, U, V>): this;
        (arg0: T, arg1: U, arg2: V): boolean;
    }
    type TriPredicate_<T, U, V> = TriPredicate<T, U, V>;
    class CopycatPanelBlock extends Internal.WaterloggedCopycatBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        static isOccluded(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.CopycatBlockEntity>;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.CopycatBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
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
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.CopycatBlockEntity>): void;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        static withWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.BlockState;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        getMod(): string;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.CopycatBlockEntity;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly FACING: Internal.DirectionProperty;
    }
    type CopycatPanelBlock_ = CopycatPanelBlock;
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
        abstract normalizedPositiveZ(arg0: Vec3f_): Vec3f;
        abstract invert(arg0: Matrix3f_): Matrix3f;
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
    class DisplayTargetStats extends Internal.Record {
        constructor(maxRows: number, maxColumns: number, type: Internal.DisplayTarget_)
        maxColumns(): number;
        maxRows(): number;
        type(): Internal.DisplayTarget;
    }
    type DisplayTargetStats_ = DisplayTargetStats;
    interface ArgumentTypeInfo <A extends Internal.ArgumentType<any>, T extends Internal.ArgumentTypeInfo$Template<A>> {
        abstract serializeToJson(arg0: T, arg1: Internal.JsonObject_): void;
        abstract deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): T;
        abstract serializeToNetwork(arg0: T, arg1: Internal.FriendlyByteBuf_): void;
        abstract unpack(arg0: A): T;
    }
    type ArgumentTypeInfo_<A extends Internal.ArgumentType<any>, T extends Internal.ArgumentTypeInfo$Template<A>> = ArgumentTypeInfo<A, T> | Special.CommandArgumentType;
    class DragonLandingApproachPhase extends Internal.AbstractDragonPhaseInstance {
        constructor(arg0: Internal.EnderDragon_)
        getPhase(): Internal.EnderDragonPhase<Internal.DragonLandingApproachPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonLandingApproachPhase>
    }
    type DragonLandingApproachPhase_ = DragonLandingApproachPhase;
    interface IShapedRecipe <T extends Internal.Container> extends Internal.Recipe<T> {
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        abstract matches(arg0: T, arg1: Internal.Level_): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        abstract getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        abstract getRecipeWidth(): number;
        abstract canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: T): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        abstract getRecipeHeight(): number;
        abstract getId(): ResourceLocation;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        abstract assemble(arg0: T, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get recipeWidth(): number
        get type(): ResourceLocation
        set group(group: string)
        get serializer(): Internal.RecipeSerializer<any>
        get recipeHeight(): number
        get id(): ResourceLocation
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type IShapedRecipe_<T extends Internal.Container> = IShapedRecipe<T>;
    class PropertyMap extends Internal.ForwardingMultimap<string, com.mojang.authlib.properties.Property> {
        constructor()
        forEach(arg0: Internal.BiConsumer_<string, com.mojang.authlib.properties.Property>): void;
    }
    type PropertyMap_ = PropertyMap;
    class DataResult$Instance extends Internal.Enum<Internal.DataResult$Instance> implements Internal.Applicative<Internal.DataResult$Mu, any> {
        apply8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>): Internal.App<Internal.DataResult$Mu, R>;
        map<T, R>(arg0: Internal.Function_<T, R>, arg1: Internal.App_<Internal.DataResult$Mu, T>): Internal.App<Internal.DataResult$Mu, R>;
        apply2<A, B, R>(arg0: Internal.BiFunction_<A, B, R>, arg1: Internal.App_<Internal.DataResult$Mu, A>, arg2: Internal.App_<Internal.DataResult$Mu, B>): Internal.App<Internal.DataResult$Mu, R>;
        lift4<T1, T2, T3, T4, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function4<T1, T2, T3, T4, R>>): Internal.Function4<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, R>>;
        ap14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>, arg12: Internal.App_<Internal.DataResult$Mu, T12>, arg13: Internal.App_<Internal.DataResult$Mu, T13>, arg14: Internal.App_<Internal.DataResult$Mu, T14>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>, arg11: Internal.App_<Internal.DataResult$Mu, T12>, arg12: Internal.App_<Internal.DataResult$Mu, T13>, arg13: Internal.App_<Internal.DataResult$Mu, T14>, arg14: Internal.App_<Internal.DataResult$Mu, T15>): Internal.Products$P15<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>): Internal.Products$P9<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        ap4<T1, T2, T3, T4, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function4<T1, T2, T3, T4, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>, arg11: Internal.App_<Internal.DataResult$Mu, T12>, arg12: Internal.App_<Internal.DataResult$Mu, T13>, arg13: Internal.App_<Internal.DataResult$Mu, T14>): Internal.Products$P14<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        group<T1>(arg0: Internal.App_<Internal.DataResult$Mu, T1>): Internal.Products$P1<Internal.DataResult$Mu, T1>;
        ap16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>, arg12: Internal.App_<Internal.DataResult$Mu, T12>, arg13: Internal.App_<Internal.DataResult$Mu, T13>, arg14: Internal.App_<Internal.DataResult$Mu, T14>, arg15: Internal.App_<Internal.DataResult$Mu, T15>, arg16: Internal.App_<Internal.DataResult$Mu, T16>): Internal.App<Internal.DataResult$Mu, R>;
        lift1<A, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function<A, R>>): Internal.Function<Internal.App<Internal.DataResult$Mu, A>, Internal.App<Internal.DataResult$Mu, R>>;
        ap7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>): Internal.App<Internal.DataResult$Mu, R>;
        lift5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function5<T1, T2, T3, T4, T5, R>>): Internal.Function5<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, T5>, Internal.App<Internal.DataResult$Mu, R>>;
        ap12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>, arg12: Internal.App_<Internal.DataResult$Mu, T12>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>): Internal.Products$P6<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6>;
        apply9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>, arg11: Internal.App_<Internal.DataResult$Mu, T12>): Internal.Products$P12<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        apply6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.Function6_<T1, T2, T3, T4, T5, T6, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>): Internal.Products$P3<Internal.DataResult$Mu, T1, T2, T3>;
        static unbox<F extends Internal.K1, Mu extends Internal.Applicative$Mu>(arg0: Internal.App_<Mu, F>): Internal.Applicative<F, Mu>;
        static values(): Internal.DataResult$Instance[];
        lift3<T1, T2, T3, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function3<T1, T2, T3, R>>): Internal.Function3<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, R>>;
        ap<A, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function<A, R>>, arg1: Internal.App_<Internal.DataResult$Mu, A>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>): Internal.Products$P10<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>, arg11: Internal.App_<Internal.DataResult$Mu, T12>, arg12: Internal.App_<Internal.DataResult$Mu, T13>): Internal.Products$P13<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        apply5<T1, T2, T3, T4, T5, R>(arg0: Internal.Function5_<T1, T2, T3, T4, T5, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>): Internal.Products$P5<Internal.DataResult$Mu, T1, T2, T3, T4, T5>;
        lift6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>): Internal.Function6<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, T5>, Internal.App<Internal.DataResult$Mu, T6>, Internal.App<Internal.DataResult$Mu, R>>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>): Internal.Products$P7<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>): Internal.Products$P2<Internal.DataResult$Mu, T1, T2>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>): Internal.Products$P8<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8>;
        ap3<T1, T2, T3, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function3<T1, T2, T3, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>): Internal.App<Internal.DataResult$Mu, R>;
        lift2<A, B, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.BiFunction<A, B, R>>): Internal.BiFunction<Internal.App<Internal.DataResult$Mu, A>, Internal.App<Internal.DataResult$Mu, B>, Internal.App<Internal.DataResult$Mu, R>>;
        apply3<T1, T2, T3, R>(arg0: Internal.Function3_<T1, T2, T3, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>): Internal.App<Internal.DataResult$Mu, R>;
        ap5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function5<T1, T2, T3, T4, T5, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>): Internal.App<Internal.DataResult$Mu, R>;
        ap10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>): Internal.App<Internal.DataResult$Mu, R>;
        ap9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>): Internal.App<Internal.DataResult$Mu, R>;
        lift7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>): Internal.Function7<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, T5>, Internal.App<Internal.DataResult$Mu, T6>, Internal.App<Internal.DataResult$Mu, T7>, Internal.App<Internal.DataResult$Mu, R>>;
        lift8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>): Internal.Function8<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, T5>, Internal.App<Internal.DataResult$Mu, T6>, Internal.App<Internal.DataResult$Mu, T7>, Internal.App<Internal.DataResult$Mu, T8>, Internal.App<Internal.DataResult$Mu, R>>;
        ap11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>): Internal.App<Internal.DataResult$Mu, R>;
        ap6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>): Internal.App<Internal.DataResult$Mu, R>;
        ap15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>, arg12: Internal.App_<Internal.DataResult$Mu, T12>, arg13: Internal.App_<Internal.DataResult$Mu, T13>, arg14: Internal.App_<Internal.DataResult$Mu, T14>, arg15: Internal.App_<Internal.DataResult$Mu, T15>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>): Internal.Products$P4<Internal.DataResult$Mu, T1, T2, T3, T4>;
        static valueOf(arg0: string): Internal.DataResult$Instance;
        ap2<A, B, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.BiFunction<A, B, R>>, arg1: Internal.App_<Internal.DataResult$Mu, A>, arg2: Internal.App_<Internal.DataResult$Mu, B>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>, arg11: Internal.App_<Internal.DataResult$Mu, T12>, arg12: Internal.App_<Internal.DataResult$Mu, T13>, arg13: Internal.App_<Internal.DataResult$Mu, T14>, arg14: Internal.App_<Internal.DataResult$Mu, T15>, arg15: Internal.App_<Internal.DataResult$Mu, T16>): Internal.Products$P16<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        lift9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): Internal.Function9<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, T5>, Internal.App<Internal.DataResult$Mu, T6>, Internal.App<Internal.DataResult$Mu, T7>, Internal.App<Internal.DataResult$Mu, T8>, Internal.App<Internal.DataResult$Mu, T9>, Internal.App<Internal.DataResult$Mu, R>>;
        ap8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>): Internal.Products$P11<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        apply7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.Function7_<T1, T2, T3, T4, T5, T6, T7, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>): Internal.App<Internal.DataResult$Mu, R>;
        ap<A, R>(arg0: Internal.Function_<A, R>, arg1: Internal.App_<Internal.DataResult$Mu, A>): Internal.App<Internal.DataResult$Mu, R>;
        point<A>(arg0: A): Internal.App<Internal.DataResult$Mu, A>;
        ap13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>, arg12: Internal.App_<Internal.DataResult$Mu, T12>, arg13: Internal.App_<Internal.DataResult$Mu, T13>): Internal.App<Internal.DataResult$Mu, R>;
        apply4<T1, T2, T3, T4, R>(arg0: Internal.Function4_<T1, T2, T3, T4, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>): Internal.App<Internal.DataResult$Mu, R>;
        static readonly INSTANCE: Internal.DataResult$Instance;
    }
    type DataResult$Instance_ = "instance" | DataResult$Instance;
    interface ICurioRenderer {
        followBodyRotations(arg0: Internal.LivingEntity_, ...arg1: Internal.HumanoidModel_<Internal.LivingEntity>[]): void;
        translateIfSneaking(arg0: Internal.PoseStack_, arg1: Internal.LivingEntity_): void;
        rotateIfSneaking(arg0: Internal.PoseStack_, arg1: Internal.LivingEntity_): void;
        abstract render<T extends Internal.LivingEntity, M extends Internal.EntityModel<T>>(arg0: Internal.ItemStack_, arg1: Internal.SlotContext_, arg2: Internal.PoseStack_, arg3: Internal.RenderLayerParent_<T, M>, arg4: Internal.MultiBufferSource_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        followHeadRotations(arg0: Internal.LivingEntity_, ...arg1: Internal.ModelPart_[]): void;
        (arg0: Internal.ItemStack, arg1: Internal.SlotContext, arg2: Internal.PoseStack, arg3: Internal.RenderLayerParent<T, M>, arg4: Internal.MultiBufferSource, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
    }
    type ICurioRenderer_ = ICurioRenderer;
    class WeightedListHeight extends Internal.HeightProvider {
        constructor(arg0: Internal.SimpleWeightedRandomList_<Internal.HeightProvider>)
        static readonly CODEC: Internal.Codec<Internal.WeightedListHeight>;
    }
    type WeightedListHeight_ = WeightedListHeight;
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
    class SteadfastSpikesItem extends Internal.AttributeModifyingItem {
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
    type SteadfastSpikesItem_ = SteadfastSpikesItem;
    class DeployerBlock extends Internal.DirectionalAxisKineticBlock implements Internal.IBE<Internal.DeployerBlockEntity> {
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
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.DeployerBlockEntity>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.DeployerBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.DeployerBlockEntity>): void;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.DeployerBlockEntity;
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
        getMod(): string;
        getBlockEntityClass(): typeof Internal.DeployerBlockEntity;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        showCapacityWithAnnotation(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.DeployerBlockEntity>;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityClass(): typeof Internal.DeployerBlockEntity
        get blockEntityType(): Internal.BlockEntityType<Internal.DeployerBlockEntity>
    }
    type DeployerBlock_ = DeployerBlock;
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
    class RoadSignFeature$RandomState extends Internal.Record {
        doubleLanternChance(): number;
        stoneLanternChance(): number;
        logChance(): number;
        doubleSignChance(): number;
        candleHolderChance(): number;
        trapdoorChance(): number;
        stoneChance(): number;
        wallLanternChance(): number;
        static readonly CODEC: Internal.Codec<Internal.RoadSignFeature$RandomState>;
    }
    type RoadSignFeature$RandomState_ = RoadSignFeature$RandomState;
    class RewriteResult <A, B> extends Internal.Record {
        constructor(view: Internal.View_<A, B>, recData: Internal.BitSet_)
        recData(): Internal.BitSet;
        static nop<A>(arg0: com.mojang.datafixers.types.Type_<A>): Internal.RewriteResult<A, A>;
        static create<A, B>(arg0: Internal.View_<A, B>, arg1: Internal.BitSet_): Internal.RewriteResult<A, B>;
        compose<C>(arg0: Internal.RewriteResult_<C, A>): Internal.RewriteResult<C, B>;
        view(): Internal.View<A, B>;
    }
    type RewriteResult_<A, B> = RewriteResult<A, B>;
    interface SchematicPrinter$EntityTargetHandler {
        abstract handle(arg0: BlockPos_, arg1: Internal.Entity_): void;
        (arg0: BlockPos, arg1: Internal.Entity): void;
    }
    type SchematicPrinter$EntityTargetHandler_ = SchematicPrinter$EntityTargetHandler;
    class KubeJSGUI {
        constructor()
        constructor(buf: Internal.FriendlyByteBuf_)
        write(buf: Internal.FriendlyByteBuf_): void;
        setInventory(inv: Internal.InventoryKJS_): void;
        set inventory(inv: Internal.InventoryKJS_)
        width: number;
        inventoryWidth: number;
        height: number;
        playerSlotsX: number;
        inventory: Internal.InventoryKJS;
        playerSlotsY: number;
        static readonly EMPTY_CONTAINER: Internal.SimpleContainer;
        title: Internal.Component;
        inventoryLabelX: number;
        inventoryLabelY: number;
        inventoryHeight: number;
    }
    type KubeJSGUI_ = KubeJSGUI;
    class ClientboundUpdateAttributesPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: Internal.Collection_<Internal.AttributeInstance>)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getEntityId(): number;
        getValues(): Internal.List<Internal.ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        isSkippable(): boolean;
        get entityId(): number
        get values(): Internal.List<Internal.ClientboundUpdateAttributesPacket$AttributeSnapshot>
        get skippable(): boolean
    }
    type ClientboundUpdateAttributesPacket_ = ClientboundUpdateAttributesPacket;
    interface Multiset$Entry <E> {
        abstract hashCode(): number;
        abstract getCount(): number;
        abstract toString(): string;
        abstract equals(arg0: any): boolean;
        abstract getElement(): E;
        get count(): number
        get element(): E
    }
    type Multiset$Entry_<E> = Multiset$Entry<E>;
    class Format$Field extends Internal.AttributedCharacterIterator$Attribute {
    }
    type Format$Field_ = Format$Field;
    class Display$TextDisplay$CachedInfo extends Internal.Record {
        constructor(arg0: Internal.List_<Internal.Display$TextDisplay$CachedLine>, arg1: number)
        lines(): Internal.List<Internal.Display$TextDisplay$CachedLine>;
        width(): number;
    }
    type Display$TextDisplay$CachedInfo_ = Display$TextDisplay$CachedInfo;
    interface Display$IntInterpolator {
        constant(arg0: number): this;
        abstract get(arg0: number): number;
        (arg0: number): number;
    }
    type Display$IntInterpolator_ = Display$IntInterpolator;
    class CrushingWheelControllerBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        hasEntity(): boolean;
        startCrushing(arg0: Internal.Entity_): void;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        findRecipe(): Internal.Optional<Internal.ProcessingRecipe<Internal.RecipeWrapper>>;
        tickAudio(): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isOccupied(): boolean;
        getModelData(): Internal.ModelData;
        clear(): void;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get occupied(): boolean
        get modelData(): Internal.ModelData
        crushingspeed: number;
        processingEntity: Internal.Entity;
        inventory: Internal.ProcessingInventory;
    }
    type CrushingWheelControllerBlockEntity_ = CrushingWheelControllerBlockEntity;
}
declare namespace net.mehvahdjukaar.moonlight.api.item {
    class FuelBlockItem extends Internal.BlockItem {
        constructor(pBlock: Internal.Block_, pProperties: Internal.Item$Properties_, burnTime: Internal.Supplier_<number>)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
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
    type FuelBlockItem_ = FuelBlockItem;
}
declare namespace com.simibubi.create.content.trains.schedule {
    class Schedule {
        constructor()
        static getTypeOptions<T>(arg0: Internal.List_<Internal.Pair<ResourceLocation, T>>): Internal.List<Internal.Component>;
        write(): Internal.CompoundTag;
        static fromTag(arg0: Internal.CompoundTag_): com.simibubi.create.content.trains.schedule.Schedule;
        savedProgress: number;
        entries: Internal.List<Internal.ScheduleEntry>;
        cyclic: boolean;
        static INSTRUCTION_TYPES: [Internal.Pair<any, any>, Internal.Pair<any, any>, Internal.Pair<any, any>];
        static CONDITION_TYPES: [Internal.Pair<any, any>, Internal.Pair<any, any>, Internal.Pair<any, any>, Internal.Pair<any, any>, Internal.Pair<any, any>, Internal.Pair<any, any>, Internal.Pair<any, any>, Internal.Pair<any, any>, Internal.Pair<any, any>];
    }
    type Schedule_ = Schedule;
}
