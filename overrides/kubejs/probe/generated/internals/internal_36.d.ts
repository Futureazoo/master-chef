/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    abstract class AbstractPiglin extends Internal.Monster {
        constructor(arg0: Internal.EntityType_<Internal.AbstractPiglin>, arg1: Internal.Level_)
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
        isConverting(): boolean;
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
        abstract getArmPose(): Internal.PiglinArmPose;
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
        isAdult(): boolean;
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
        setImmuneToZombification(arg0: boolean): void;
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
        get converting(): boolean
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
        get armPose(): Internal.PiglinArmPose
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
        get adult(): boolean
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
        set immuneToZombification(arg0: boolean)
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
    type AbstractPiglin_ = AbstractPiglin;
    class OptionalLong {
        static of(arg0: number): Internal.OptionalLong;
        ifPresentOrElse(arg0: Internal.LongConsumer_, arg1: Internal.Runnable_): void;
        getAsLong(): number;
        static empty(): Internal.OptionalLong;
        orElseThrow<X extends Internal.Throwable>(arg0: Internal.Supplier_<X>): number;
        orElseThrow(): number;
        orElseGet(arg0: Internal.LongSupplier_): number;
        isPresent(): boolean;
        orElse(arg0: number): number;
        isEmpty(): boolean;
        ifPresent(arg0: Internal.LongConsumer_): void;
        stream(): Internal.LongStream;
        get asLong(): number
        get present(): boolean
        get empty(): boolean
    }
    type OptionalLong_ = OptionalLong;
    class BuddingAmethystBlock extends Internal.AmethystBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        static canClusterGrowAtState(arg0: Internal.BlockState_): boolean;
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
        static readonly GROWTH_CHANCE: 5;
    }
    type BuddingAmethystBlock_ = BuddingAmethystBlock;
    class ToolAction {
        name(): string;
        static get(arg0: string): Internal.ToolAction;
        static getActions(): Internal.Collection<Internal.ToolAction>;
        get actions(): Internal.Collection<Internal.ToolAction>
    }
    type ToolAction_ = ToolAction;
    class ModularGuiLineBuilder {
        constructor(arg0: Internal.Font_, arg1: any_, arg2: number, arg3: number)
        customArea(arg0: number, arg1: number): this;
        speechBubble(): this;
        addIntegerTextInput(arg0: number, arg1: number, arg2: Internal.BiConsumer_<Internal.EditBox, Internal.TooltipArea>, arg3: string): this;
        addTextInput(arg0: number, arg1: number, arg2: Internal.BiConsumer_<Internal.EditBox, Internal.TooltipArea>, arg3: string): this;
        addSelectionScrollInput(arg0: number, arg1: number, arg2: Internal.BiConsumer_<Internal.SelectionScrollInput, Internal.Label>, arg3: string): this;
        addScrollInput(arg0: number, arg1: number, arg2: Internal.BiConsumer_<Internal.ScrollInput, Internal.Label>, arg3: string): this;
    }
    type ModularGuiLineBuilder_ = ModularGuiLineBuilder;
    abstract class Buffer {
        capacity(): number;
        reset(): this;
        remaining(): number;
        abstract isDirect(): boolean;
        limit(): number;
        position(): number;
        rewind(): this;
        abstract array(): any;
        abstract arrayOffset(): number;
        mark(): this;
        limit(arg0: number): this;
        clear(): this;
        flip(): this;
        position(arg0: number): this;
        abstract slice(): this;
        hasRemaining(): boolean;
        abstract isReadOnly(): boolean;
        abstract slice(arg0: number, arg1: number): this;
        abstract hasArray(): boolean;
        abstract duplicate(): this;
        get direct(): boolean
        get readOnly(): boolean
    }
    type Buffer_ = Buffer;
    class CoralPlantBlock extends Internal.BaseCoralPlantTypeBlock {
        constructor(arg0: Internal.Block_, arg1: Internal.BlockBehaviour$Properties_)
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
    }
    type CoralPlantBlock_ = CoralPlantBlock;
    class GravityProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.Heightmap$Types_, arg1: number)
        static readonly CODEC: Internal.Codec<Internal.GravityProcessor>;
    }
    type GravityProcessor_ = GravityProcessor;
    /**
     * @deprecated
    */
    class LazyLoadedValue <T> {
        constructor(arg0: Internal.Supplier_<T>)
        get(): T;
    }
    type LazyLoadedValue_<T> = LazyLoadedValue<T>;
    class PanicNecklaceItem extends Internal.WearableArtifactItem {
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
    type PanicNecklaceItem_ = PanicNecklaceItem;
    interface NonNullPredicate <T> {
        abstract test(arg0: T): boolean;
        (arg0: T): boolean;
    }
    type NonNullPredicate_<T> = NonNullPredicate<T>;
    class ClientboundSetEntityLinkPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Entity_, arg1: Internal.Entity_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getSourceId(): number;
        getDestId(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get sourceId(): number
        get destId(): number
        get skippable(): boolean
    }
    type ClientboundSetEntityLinkPacket_ = ClientboundSetEntityLinkPacket;
    interface NarrationElementOutput {
        add(arg0: Internal.NarratedElementType_, ...arg1: Internal.Component_[]): void;
        add(arg0: Internal.NarratedElementType_, arg1: Internal.Component_): void;
        add(arg0: Internal.NarratedElementType_, arg1: string): void;
        abstract nest(): this;
        abstract add(arg0: Internal.NarratedElementType_, arg1: Internal.NarrationThunk_<any>): void;
    }
    type NarrationElementOutput_ = NarrationElementOutput;
    class Goal$Flag extends Internal.Enum<Internal.Goal$Flag> {
        static values(): Internal.Goal$Flag[];
        static valueOf(arg0: string): Internal.Goal$Flag;
        static readonly TARGET: Internal.Goal$Flag;
        static readonly JUMP: Internal.Goal$Flag;
        static readonly MOVE: Internal.Goal$Flag;
        static readonly LOOK: Internal.Goal$Flag;
    }
    type Goal$Flag_ = "jump" | "move" | "target" | "look" | Goal$Flag;
    class LongArgumentType implements Internal.ArgumentType<number> {
        getMinimum(): number;
        getExamples(): Internal.Collection<string>;
        static getLong(arg0: Internal.CommandContext_<any>, arg1: string): number;
        getMaximum(): number;
        static longArg(): Internal.LongArgumentType;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        static longArg(arg0: number): Internal.LongArgumentType;
        parse(arg0: Internal.StringReader_): any;
        static longArg(arg0: number, arg1: number): Internal.LongArgumentType;
        get minimum(): number
        get examples(): Internal.Collection<string>
        get maximum(): number
    }
    type LongArgumentType_ = LongArgumentType;
    interface PlayerRideableJumping extends Internal.PlayerRideable {
        abstract handleStopJump(): void;
        abstract onPlayerJump(arg0: number): void;
        getJumpCooldown(): number;
        abstract handleStartJump(arg0: number): void;
        abstract canJump(): boolean;
        get jumpCooldown(): number
    }
    type PlayerRideableJumping_ = PlayerRideableJumping;
    class ClientboundGameEventPacket$Type {
        constructor(arg0: number)
    }
    type ClientboundGameEventPacket$Type_ = ClientboundGameEventPacket$Type;
    class VegetationPatchFeature extends Internal.Feature<Internal.VegetationPatchConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.VegetationPatchConfiguration>)
    }
    type VegetationPatchFeature_ = VegetationPatchFeature;
    class LivingEntityDropsEventJS extends Internal.LivingEntityEventJS {
        constructor(e: Internal.LivingDropsEvent_)
        getEntity(): Internal.Entity;
        addDrop(stack: Internal.ItemStack_, chance: number): Internal.ItemEntity;
        addDrop(stack: Internal.ItemStack_): Internal.ItemEntity;
        getSource(): DamageSource;
        getDrops(): Internal.List<Internal.ItemEntity>;
        isRecentlyHit(): boolean;
        getLootingLevel(): number;
        get entity(): Internal.Entity
        get source(): DamageSource
        get drops(): Internal.List<Internal.ItemEntity>
        get recentlyHit(): boolean
        get lootingLevel(): number
        eventDrops: Internal.List<Internal.ItemEntity>;
    }
    type LivingEntityDropsEventJS_ = LivingEntityDropsEventJS;
    interface UserApiService {
        abstract isBlockedPlayer(arg0: Internal.UUID_): boolean;
        abstract reportAbuse(arg0: Internal.AbuseReportRequest_): void;
        abstract canSendReports(): boolean;
        abstract getAbuseReportLimits(): Internal.AbuseReportLimits;
        abstract properties(): Internal.UserApiService$UserProperties;
        abstract newTelemetrySession(arg0: Internal.Executor_): Internal.TelemetrySession;
        abstract getKeyPair(): Internal.KeyPairResponse;
        abstract refreshBlockList(): void;
        get abuseReportLimits(): Internal.AbuseReportLimits
        get keyPair(): Internal.KeyPairResponse
        readonly OFFLINE: Internal.UserApiService;
        readonly OFFLINE_PROPERTIES: Internal.UserApiService$UserProperties;
    }
    type UserApiService_ = UserApiService;
    class LargeDripstoneConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: Internal.IntProvider_, arg2: Internal.FloatProvider_, arg3: number, arg4: Internal.FloatProvider_, arg5: Internal.FloatProvider_, arg6: Internal.FloatProvider_, arg7: number, arg8: number)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly floorToCeilingSearchRange: number;
        readonly columnRadius: Internal.IntProvider;
        readonly stalactiteBluntness: Internal.FloatProvider;
        readonly minBluntnessForWind: number;
        static readonly CODEC: Internal.Codec<Internal.LargeDripstoneConfiguration>;
        readonly minRadiusForWind: number;
        readonly heightScale: Internal.FloatProvider;
        readonly windSpeed: Internal.FloatProvider;
        readonly maxColumnRadiusToCaveHeightRatio: number;
        readonly stalagmiteBluntness: Internal.FloatProvider;
    }
    type LargeDripstoneConfiguration_ = LargeDripstoneConfiguration;
    class BossEvent$BossBarOverlay extends Internal.Enum<Internal.BossEvent$BossBarOverlay> {
        static valueOf(arg0: string): Internal.BossEvent$BossBarOverlay;
        getName(): string;
        static values(): Internal.BossEvent$BossBarOverlay[];
        static byName(arg0: string): Internal.BossEvent$BossBarOverlay;
        get name(): string
        static readonly NOTCHED_12: Internal.BossEvent$BossBarOverlay;
        static readonly NOTCHED_10: Internal.BossEvent$BossBarOverlay;
        static readonly PROGRESS: Internal.BossEvent$BossBarOverlay;
        static readonly NOTCHED_6: Internal.BossEvent$BossBarOverlay;
        static readonly NOTCHED_20: Internal.BossEvent$BossBarOverlay;
    }
    type BossEvent$BossBarOverlay_ = "notched_20" | "notched_10" | "progress" | "notched_6" | "notched_12" | BossEvent$BossBarOverlay;
    class ChuteBlock$Shape extends Internal.Enum<Internal.ChuteBlock$Shape> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.ChuteBlock$Shape[];
        static valueOf(arg0: string): Internal.ChuteBlock$Shape;
        get serializedName(): string
        static readonly WINDOW: Internal.ChuteBlock$Shape;
        static readonly ENCASED: Internal.ChuteBlock$Shape;
        static readonly INTERSECTION: Internal.ChuteBlock$Shape;
        static readonly NORMAL: Internal.ChuteBlock$Shape;
    }
    type ChuteBlock$Shape_ = "normal" | "window" | ChuteBlock$Shape | "intersection" | "encased";
    class AnimalTameEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.Animal_, arg1: Internal.Player_)
        getTamer(): Internal.Player;
        getAnimal(): Internal.Animal;
        get tamer(): Internal.Player
        get animal(): Internal.Animal
    }
    type AnimalTameEvent_ = AnimalTameEvent;
    interface Matrix4x3dc {
        abstract get4x4(arg0: number[]): number[];
        abstract mapnYXnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapXZnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapZnYnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract m20(): number;
        abstract mapnZXY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract origin(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract negateY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract fma(arg0: Internal.Matrix4x3dc_, arg1: number, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract translateLocal(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transformDirection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnZnYnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract normal(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXZY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m31(): number;
        abstract getTranslation(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract normal(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYXnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYnXnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract normalize3x3(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mulTranslation(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract normalize3x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateX(arg0: number, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: number[], arg1: number): number[];
        abstract scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract negateZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnYnXnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapZXY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m30(): number;
        abstract reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformAab(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): Internal.Matrix4x3d;
        abstract mapnXnZY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: number[]): number[];
        abstract orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYnXZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract cofactor3x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transpose3x3(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract isFinite(): boolean;
        abstract mapXnZY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapXnZnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateY(arg0: number, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getToAddress(arg0: number): this;
        abstract add(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYZX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lerp(arg0: Internal.Matrix4x3dc_, arg1: number, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnYZnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXnZnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapnZYX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapZnXY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXZnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnYXZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: number[], arg1: number): number[];
        abstract rotateTranslation(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract negateX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m02(): number;
        abstract rotateZ(arg0: number, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract invertOrtho(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transformPosition(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract mapZYnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract get4x4(arg0: number[], arg1: number): number[];
        abstract mapXZY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract sub(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4x3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXYnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYnZnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnZnYX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXnYnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract scale(arg0: number, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnYnZnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapnYnZX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m01(): number;
        abstract mapnZnXY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapZXnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3dc_, arg5: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: number[]): number[];
        abstract mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapXnYnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYZnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnZXnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m12(): number;
        abstract get(arg0: number[], arg1: number): number[];
        abstract rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract m00(): number;
        abstract mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract equals(arg0: Internal.Matrix4x3dc_, arg1: number): boolean;
        abstract rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: number[]): number[];
        abstract determinant(): number;
        abstract properties(): number;
        abstract invert(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract getTransposed(arg0: number[], arg1: number): number[];
        abstract rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract transformDirection(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract m11(): number;
        abstract translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract mulOrtho(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposed(arg0: number[]): number[];
        abstract cofactor3x3(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnYZX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Vector3d_, arg7: Internal.Vector3d_): Internal.Matrix4x3d;
        abstract getRow(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract transpose3x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mulTranslation(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract m22(): number;
        abstract rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYXZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract mapZnXnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract mulComponentWise(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract sub(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m10(): number;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract translate(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract mapnYnXZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYnZX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m21(): number;
        abstract frustumPlane(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mapZnYX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract add(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract mapnZYnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXnYZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformPosition(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m32(): number;
        abstract positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract fma(arg0: Internal.Matrix4x3fc_, arg1: number, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapZYX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnZnXnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        get finite(): boolean
        readonly PLANE_PX: 1;
        readonly PLANE_NY: 2;
        readonly PLANE_NZ: 4;
        readonly PLANE_PY: 3;
        readonly PLANE_NX: 0;
        readonly PLANE_PZ: 5;
        readonly PROPERTY_TRANSLATION: 8;
        readonly PROPERTY_IDENTITY: 4;
        readonly PROPERTY_ORTHONORMAL: 16;
    }
    type Matrix4x3dc_ = Matrix4x3dc;
    class BeltFunnelBlock$Shape extends Internal.Enum<Internal.BeltFunnelBlock$Shape> implements Internal.StringRepresentable {
        static values(): Internal.BeltFunnelBlock$Shape[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.BeltFunnelBlock$Shape;
        get serializedName(): string
        static readonly EXTENDED: Internal.BeltFunnelBlock$Shape;
        static readonly PUSHING: Internal.BeltFunnelBlock$Shape;
        static readonly RETRACTED: Internal.BeltFunnelBlock$Shape;
        static readonly PULLING: Internal.BeltFunnelBlock$Shape;
    }
    type BeltFunnelBlock$Shape_ = "extended" | "pulling" | "retracted" | "pushing" | BeltFunnelBlock$Shape;
    class KeyCompressor <T> {
        constructor(arg0: Internal.DynamicOps_<T>, arg1: Internal.Stream_<T>)
        compress(arg0: T): number;
        size(): number;
        decompress(arg0: number): T;
        compress(arg0: string): number;
    }
    type KeyCompressor_<T> = KeyCompressor<T>;
    class WallBlockBuilder extends Internal.MultipartShapedBlockBuilder {
        constructor(i: ResourceLocation_)
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        createObject(): any;
    }
    type WallBlockBuilder_ = WallBlockBuilder;
    class WorldGenerationContext {
        constructor(arg0: Internal.ChunkGenerator_, arg1: Internal.LevelHeightAccessor_)
        getMinGenY(): number;
        getGenDepth(): number;
        get minGenY(): number
        get genDepth(): number
    }
    type WorldGenerationContext_ = WorldGenerationContext;
    class TutorialSteps extends Internal.Enum<Internal.TutorialSteps> {
        static getByName(arg0: string): Internal.TutorialSteps;
        create(arg0: Internal.Tutorial_): Internal.TutorialStepInstance;
        getName(): string;
        static valueOf(arg0: string): Internal.TutorialSteps;
        static values(): Internal.TutorialSteps[];
        get name(): string
        static readonly OPEN_INVENTORY: Internal.TutorialSteps;
        static readonly CRAFT_PLANKS: Internal.TutorialSteps;
        static readonly NONE: Internal.TutorialSteps;
        static readonly FIND_TREE: Internal.TutorialSteps;
        static readonly MOVEMENT: Internal.TutorialSteps;
        static readonly PUNCH_TREE: Internal.TutorialSteps;
    }
    type TutorialSteps_ = TutorialSteps | "craft_planks" | "find_tree" | "open_inventory" | "punch_tree" | "none" | "movement";
    class VibrationSelector {
        constructor()
        constructor(arg0: Internal.Optional_<Internal.VibrationInfo>, arg1: number)
        chosenCandidate(arg0: number): Internal.Optional<Internal.VibrationInfo>;
        startOver(): void;
        addCandidate(arg0: Internal.VibrationInfo_, arg1: number): void;
        static readonly CODEC: Internal.Codec<Internal.VibrationSelector>;
    }
    type VibrationSelector_ = VibrationSelector;
    class ExplosionJS {
        constructor(l: Internal.LevelAccessor_, _x: number, _y: number, _z: number)
        explosionMode(mode: Internal.Level$ExplosionInteraction_): this;
        explode(): void;
        causesFire(b: boolean): this;
        exploder(entity: Internal.Entity_): this;
        strength(f: number): this;
        readonly z: number;
        explosionMode: Internal.Level$ExplosionInteraction;
        causesFire: boolean;
        readonly x: number;
        readonly y: number;
        exploder: Internal.Entity;
        strength: number;
    }
    type ExplosionJS_ = ExplosionJS;
    class ClientboundGameEventPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.ClientboundGameEventPacket$Type_, arg1: number)
        handle(arg0: Internal.PacketListener_): void;
        getParam(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        getEvent(): Internal.ClientboundGameEventPacket$Type;
        get param(): number
        get skippable(): boolean
        get event(): Internal.ClientboundGameEventPacket$Type
        static readonly DEMO_EVENT: Internal.ClientboundGameEventPacket$Type;
        static readonly START_RAINING: Internal.ClientboundGameEventPacket$Type;
        static readonly THUNDER_LEVEL_CHANGE: Internal.ClientboundGameEventPacket$Type;
        static readonly PUFFER_FISH_STING: Internal.ClientboundGameEventPacket$Type;
        static readonly IMMEDIATE_RESPAWN: Internal.ClientboundGameEventPacket$Type;
        static readonly DEMO_PARAM_HINT_1: 101;
        static readonly DEMO_PARAM_HINT_4: 104;
        static readonly DEMO_PARAM_HINT_3: 103;
        static readonly DEMO_PARAM_HINT_2: 102;
        static readonly CHANGE_GAME_MODE: Internal.ClientboundGameEventPacket$Type;
        static readonly RAIN_LEVEL_CHANGE: Internal.ClientboundGameEventPacket$Type;
        static readonly STOP_RAINING: Internal.ClientboundGameEventPacket$Type;
        static readonly WIN_GAME: Internal.ClientboundGameEventPacket$Type;
        static readonly NO_RESPAWN_BLOCK_AVAILABLE: Internal.ClientboundGameEventPacket$Type;
        static readonly ARROW_HIT_PLAYER: Internal.ClientboundGameEventPacket$Type;
        static readonly GUARDIAN_ELDER_EFFECT: Internal.ClientboundGameEventPacket$Type;
        static readonly DEMO_PARAM_INTRO: 0;
    }
    type ClientboundGameEventPacket_ = ClientboundGameEventPacket;
    interface LevelRendererAccessor {
        abstract flywheel$getDestructionProgress(): Internal.Long2ObjectMap<Internal.SortedSet<Internal.BlockDestructionProgress>>;
        (): Internal.Long2ObjectMap_<Internal.SortedSet<Internal.BlockDestructionProgress>>;
    }
    type LevelRendererAccessor_ = LevelRendererAccessor;
    interface SortedSet <E> extends Internal.Set<E> {
        abstract subSet(arg0: E, arg1: E): this;
        abstract add(arg0: E): boolean;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract comparator(): Internal.Comparator<E>;
        of<E>(arg0: E, arg1: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        abstract contains(arg0: any): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        abstract last(): E;
        abstract tailSet(arg0: E): this;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract headSet(arg0: E): this;
        abstract remove(arg0: any): boolean;
        abstract toArray(): any[];
        abstract iterator(): Internal.Iterator<E>;
        abstract hashCode(): number;
        abstract size(): number;
        of<E>(arg0: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        of<E>(...arg0: E[]): Internal.Set<E>;
        of<E>(): Internal.Set<E>;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract first(): E;
        abstract clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        spliterator(): Internal.Spliterator<E>;
        abstract equals(arg0: any): boolean;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        get empty(): boolean
    }
    type SortedSet_<E> = SortedSet<E>;
    class RecordCodecBuilder$Instance <O> implements Internal.Applicative<Internal.RecordCodecBuilder$Mu<O>, any> {
        constructor()
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>): Internal.Products$P14<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        apply2<A, B, R>(arg0: Internal.BiFunction_<A, B, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, A>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, B>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>): Internal.Products$P10<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>): Internal.Products$P2<Internal.RecordCodecBuilder$Mu<O>, T1, T2>;
        lift8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>): Internal.Function8<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T5>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T6>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T7>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T8>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        ap4<T1, T2, T3, T4, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function4<T1, T2, T3, T4, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        lift9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): Internal.Function9<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T5>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T6>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T7>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T8>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T9>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        ap3<T1, T2, T3, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function3<T1, T2, T3, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        lift2<A, B, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.BiFunction<A, B, R>>): Internal.BiFunction<Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, B>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>, arg14: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T15>): Internal.Products$P15<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        apply4<T1, T2, T3, T4, R>(arg0: Internal.Function4_<T1, T2, T3, T4, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>): Internal.Products$P11<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        apply8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function5<T1, T2, T3, T4, T5, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        apply9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        lift6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>): Internal.Function6<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T5>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T6>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        ap16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg14: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>, arg15: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T15>, arg16: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T16>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>): Internal.Products$P3<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3>;
        static unbox<F extends Internal.K1, Mu extends Internal.Applicative$Mu>(arg0: Internal.App_<Mu, F>): Internal.Applicative<F, Mu>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>): Internal.Products$P9<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        ap9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        apply5<T1, T2, T3, T4, T5, R>(arg0: Internal.Function5_<T1, T2, T3, T4, T5, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>): Internal.Products$P7<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7>;
        ap13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg14: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        point<A>(arg0: A): Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>): Internal.Products$P13<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        group<T1, T2, T3, T4, T5>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>): Internal.Products$P5<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5>;
        lift1<A, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function<A, R>>): Internal.Function<Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        apply3<T1, T2, T3, R>(arg0: Internal.Function3_<T1, T2, T3, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>): Internal.Products$P4<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4>;
        deprecated<A>(arg0: A, arg1: number): Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>, arg14: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T15>, arg15: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T16>): Internal.Products$P16<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        ap7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        stable<A>(arg0: A): Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>;
        ap8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap<A, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function<A, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, A>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        lift4<T1, T2, T3, T4, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function4<T1, T2, T3, T4, R>>): Internal.Function4<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        point<A>(arg0: A, arg1: Internal.Lifecycle_): Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>;
        ap15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg14: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>, arg15: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T15>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>): Internal.Products$P12<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        ap<A, R>(arg0: Internal.Function_<A, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, A>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>): Internal.Products$P8<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8>;
        lift5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function5<T1, T2, T3, T4, T5, R>>): Internal.Function5<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T5>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        lift7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>): Internal.Function7<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T5>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T6>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T7>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        ap10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        map<T, R>(arg0: Internal.Function_<T, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        apply7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.Function7_<T1, T2, T3, T4, T5, T6, T7, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        lift3<T1, T2, T3, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function3<T1, T2, T3, R>>): Internal.Function3<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        group<T1, T2, T3, T4, T5, T6>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>): Internal.Products$P6<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6>;
        apply6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.Function6_<T1, T2, T3, T4, T5, T6, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap2<A, B, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.BiFunction<A, B, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, A>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, B>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>): Internal.Products$P1<Internal.RecordCodecBuilder$Mu<O>, T1>;
    }
    type RecordCodecBuilder$Instance_<O> = RecordCodecBuilder$Instance<O>;
    class MetricSampler$SamplerResult {
        constructor(arg0: number, arg1: number, arg2: any_)
        valueAtTick(arg0: number): number;
        getFirstTick(): number;
        getLastTick(): number;
        get firstTick(): number
        get lastTick(): number
    }
    type MetricSampler$SamplerResult_ = MetricSampler$SamplerResult;
    class MountedStorageManager {
        constructor()
        updateContainedFluid(arg0: BlockPos_, arg1: Internal.FluidStack_): void;
        addStorageToWorld(arg0: Internal.StructureTemplate$StructureBlockInfo_, arg1: Internal.BlockEntity_): void;
        getItems(): Internal.IItemHandlerModifiable;
        bindTanks(arg0: Internal.Map_<BlockPos, Internal.BlockEntity>): void;
        removeStorageFromWorld(): void;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        handlePlayerStorageInteraction(arg0: Internal.Contraption_, arg1: Internal.Player_, arg2: BlockPos_): boolean;
        getFuelItems(): Internal.IItemHandlerModifiable;
        read(arg0: Internal.CompoundTag_, arg1: Internal.Map_<BlockPos, Internal.BlockEntity>, arg2: boolean): void;
        addBlock(arg0: BlockPos_, arg1: Internal.BlockEntity_): void;
        entityTick(arg0: Internal.AbstractContraptionEntity_): void;
        clear(): void;
        attachExternal(arg0: Internal.IItemHandlerModifiable_): void;
        getFluids(): Internal.IFluidHandler;
        createHandlers(): void;
        get items(): Internal.IItemHandlerModifiable
        get fuelItems(): Internal.IItemHandlerModifiable
        get fluids(): Internal.IFluidHandler
    }
    type MountedStorageManager_ = MountedStorageManager;
    class WildCropBlock extends Internal.FlowerBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.MobEffect_, arg1: number, arg2: Internal.BlockBehaviour$Properties_)
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
        static tryGet(arg0: Internal.ItemLike_): Internal.SuspiciousEffectHolder;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        static getAllEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get allEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>
    }
    type WildCropBlock_ = WildCropBlock;
    interface CommandExceptionType {
    }
    type CommandExceptionType_ = CommandExceptionType;
    class LootBuilderPool implements Internal.FunctionContainer, Internal.ConditionContainer {
        constructor()
        setUniformRolls(min: number, max: number): void;
        addFunction(arg0: Internal.JsonObject_): Internal.FunctionContainer;
        randomChanceWithLooting(chance: number, multiplier: number): Internal.ConditionContainer;
        name(name: Internal.Component_, entity: Internal.LootContext$EntityTarget_): Internal.FunctionContainer;
        toJson(): Internal.JsonObject;
        damage(damage: Internal.NumberProvider_): Internal.FunctionContainer;
        count(count: Internal.NumberProvider_): Internal.FunctionContainer;
        survivesExplosion(): Internal.ConditionContainer;
        addTag(tag: string, expand: boolean): Internal.LootTableEntry;
        addItem(item: Internal.ItemStack_, weight: number, count: Internal.NumberProvider_): Internal.LootTableEntry;
        copyName(source: Internal.CopyNameFunction$NameSource_): Internal.FunctionContainer;
        addCondition(arg0: Internal.JsonObject_): Internal.ConditionContainer;
        lootTable(table: ResourceLocation_, seed: number): Internal.FunctionContainer;
        addItem(item: Internal.ItemStack_): Internal.LootTableEntry;
        enchantWithLevels(levels: Internal.NumberProvider_, treasure: boolean): Internal.FunctionContainer;
        enchantRandomly(enchantments: ResourceLocation_[]): Internal.FunctionContainer;
        addEntry(json: Internal.JsonObject_): Internal.LootTableEntry;
        furnaceSmelt(): Internal.FunctionContainer;
        entityProperties(entity: Internal.LootContext$EntityTarget_, properties: Internal.JsonObject_): Internal.ConditionContainer;
        lootingEnchant(count: Internal.NumberProvider_, limit: number): Internal.FunctionContainer;
        addEmpty(weight: number): Internal.LootTableEntry;
        addConditionalFunction(func: Internal.Consumer_<Internal.ConditionalFunction>): Internal.FunctionContainer;
        randomChance(chance: number): Internal.ConditionContainer;
        addLootTable(table: ResourceLocation_): Internal.LootTableEntry;
        setBinomialRolls(n: number, p: number): void;
        killedByPlayer(): Internal.ConditionContainer;
        nbt(tag: Internal.CompoundTag_): Internal.FunctionContainer;
        entityScores(entity: Internal.LootContext$EntityTarget_, scores: Internal.Map_<string, any>): Internal.ConditionContainer;
        addItem(item: Internal.ItemStack_, weight: number): Internal.LootTableEntry;
        name(name: Internal.Component_): Internal.FunctionContainer;
        rolls: Internal.NumberProvider;
        readonly entries: Internal.JsonArray;
        readonly conditions: Internal.JsonArray;
        bonusRolls: Internal.NumberProvider;
        readonly functions: Internal.JsonArray;
    }
    type LootBuilderPool_ = LootBuilderPool;
    interface PreparableReloadListener$PreparationBarrier {
        abstract wait<T>(arg0: T): Internal.CompletableFuture<T>;
        (arg0: T): Internal.CompletableFuture_<T>;
    }
    type PreparableReloadListener$PreparationBarrier_ = PreparableReloadListener$PreparationBarrier;
    interface ITagManager <V> extends Internal.Iterable<Internal.ITag<V>> {
        abstract getTagNames(): Internal.Stream<Internal.TagKey<V>>;
        abstract getReverseTag(arg0: V): Internal.Optional<Internal.IReverseTag<V>>;
        spliterator(): Internal.Spliterator<Internal.ITag<V>>;
        abstract addOptionalTagDefaults(arg0: Internal.TagKey_<V>, arg1: Internal.Set_<Internal.Supplier<V>>): void;
        abstract iterator(): Internal.Iterator<Internal.ITag<V>>;
        abstract createOptionalTagKey(arg0: ResourceLocation_, arg1: Internal.Set_<Internal.Supplier<V>>): Internal.TagKey<V>;
        forEach(arg0: Internal.Consumer_<Internal.ITag<V>>): void;
        abstract getTag(arg0: Internal.TagKey_<V>): Internal.ITag<V>;
        abstract isKnownTagName(arg0: Internal.TagKey_<V>): boolean;
        abstract createTagKey(arg0: ResourceLocation_): Internal.TagKey<V>;
        abstract stream(): Internal.Stream<Internal.ITag<V>>;
        get tagNames(): Internal.Stream<Internal.TagKey<V>>
    }
    type ITagManager_<V> = ITagManager<V>;
    class PiecesContainer extends Internal.Record {
        constructor(arg0: Internal.List_<Internal.StructurePiece>)
        pieces(): Internal.List<Internal.StructurePiece>;
        isInsidePiece(arg0: BlockPos_): boolean;
        static load(arg0: Internal.ListTag_, arg1: Internal.StructurePieceSerializationContext_): Internal.PiecesContainer;
        save(arg0: Internal.StructurePieceSerializationContext_): Internal.Tag;
        calculateBoundingBox(): Internal.BoundingBox;
        isEmpty(): boolean;
        get empty(): boolean
    }
    type PiecesContainer_ = PiecesContainer;
    class CallbackInfoReturnable <R> extends Internal.CallbackInfo {
        constructor(arg0: string, arg1: boolean, arg2: string)
        constructor(arg0: string, arg1: boolean, arg2: number)
        constructor(arg0: string, arg1: boolean, arg2: number)
        constructor(arg0: string, arg1: boolean, arg2: R)
        constructor(arg0: string, arg1: boolean, arg2: number)
        constructor(arg0: string, arg1: boolean)
        constructor(arg0: string, arg1: boolean, arg2: number)
        constructor(arg0: string, arg1: boolean, arg2: boolean)
        constructor(arg0: string, arg1: boolean, arg2: number)
        constructor(arg0: string, arg1: boolean, arg2: number)
        getReturnValueS(): number;
        setReturnValue(arg0: R): void;
        getReturnValueC(): string;
        getReturnValueZ(): boolean;
        getReturnValueB(): number;
        getReturnValueD(): number;
        getReturnValueJ(): number;
        getReturnValueI(): number;
        getReturnValue(): R;
        getReturnValueF(): number;
        get returnValueS(): number
        set returnValue(arg0: R)
        get returnValueC(): string
        get returnValueZ(): boolean
        get returnValueB(): number
        get returnValueD(): number
        get returnValueJ(): number
        get returnValueI(): number
        get returnValue(): R
        get returnValueF(): number
    }
    type CallbackInfoReturnable_<R> = CallbackInfoReturnable<R>;
    class WorldCreationUiState {
        constructor(arg0: Internal.Path_, arg1: Internal.WorldCreationContext_, arg2: Internal.Optional_<Internal.ResourceKey<Internal.WorldPreset>>, arg3: Internal.OptionalLong_)
        setWorldType(arg0: Internal.WorldCreationUiState$WorldTypeEntry_): void;
        setAllowCheats(arg0: boolean): void;
        setGameMode(arg0: Internal.WorldCreationUiState$SelectedGameMode_): void;
        getSettings(): Internal.WorldCreationContext;
        setSettings(arg0: Internal.WorldCreationContext_): void;
        addListener(arg0: Internal.Consumer_<Internal.WorldCreationUiState>): void;
        setSeed(arg0: string): void;
        getGameRules(): Internal.GameRules;
        setGenerateStructures(arg0: boolean): void;
        isBonusChest(): boolean;
        setName(arg0: string): void;
        getName(): string;
        isAllowCheats(): boolean;
        isHardcore(): boolean;
        onChanged(): void;
        getGameMode(): Internal.WorldCreationUiState$SelectedGameMode;
        getDifficulty(): Internal.Difficulty;
        getPresetEditor(): Internal.PresetEditor;
        getAltPresetList(): Internal.List<Internal.WorldCreationUiState$WorldTypeEntry>;
        getTargetFolder(): string;
        getWorldType(): Internal.WorldCreationUiState$WorldTypeEntry;
        getNormalPresetList(): Internal.List<Internal.WorldCreationUiState$WorldTypeEntry>;
        setDifficulty(arg0: Internal.Difficulty_): void;
        setGameRules(arg0: Internal.GameRules_): void;
        updateDimensions(arg0: Internal.WorldCreationContext$DimensionsUpdater_): void;
        isGenerateStructures(): boolean;
        getSeed(): string;
        setBonusChest(arg0: boolean): void;
        isDebug(): boolean;
        set worldType(arg0: Internal.WorldCreationUiState$WorldTypeEntry_)
        set allowCheats(arg0: boolean)
        set gameMode(arg0: Internal.WorldCreationUiState$SelectedGameMode_)
        get settings(): Internal.WorldCreationContext
        set settings(arg0: Internal.WorldCreationContext_)
        set seed(arg0: string)
        get gameRules(): Internal.GameRules
        set generateStructures(arg0: boolean)
        get bonusChest(): boolean
        set name(arg0: string)
        get name(): string
        get allowCheats(): boolean
        get hardcore(): boolean
        get gameMode(): Internal.WorldCreationUiState$SelectedGameMode
        get difficulty(): Internal.Difficulty
        get presetEditor(): Internal.PresetEditor
        get altPresetList(): Internal.List<Internal.WorldCreationUiState$WorldTypeEntry>
        get targetFolder(): string
        get worldType(): Internal.WorldCreationUiState$WorldTypeEntry
        get normalPresetList(): Internal.List<Internal.WorldCreationUiState$WorldTypeEntry>
        set difficulty(arg0: Internal.Difficulty_)
        set gameRules(arg0: Internal.GameRules_)
        get generateStructures(): boolean
        get seed(): string
        set bonusChest(arg0: boolean)
        get debug(): boolean
    }
    type WorldCreationUiState_ = WorldCreationUiState;
    class StrongholdStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly CODEC: Internal.Codec<Internal.StrongholdStructure>;
    }
    type StrongholdStructure_ = StrongholdStructure;
    class DragonChargePlayerPhase extends Internal.AbstractDragonPhaseInstance {
        constructor(arg0: Internal.EnderDragon_)
        getPhase(): Internal.EnderDragonPhase<Internal.DragonChargePlayerPhase>;
        setTarget(arg0: Vec3d_): void;
        get phase(): Internal.EnderDragonPhase<Internal.DragonChargePlayerPhase>
        set target(arg0: Vec3d_)
    }
    type DragonChargePlayerPhase_ = DragonChargePlayerPhase;
    interface DispenserBlockEntityAccessor {
        abstract getItems(): Internal.NonNullList<Internal.ItemStack>;
        get items(): Internal.NonNullList<Internal.ItemStack>
        (): Internal.NonNullList_<Internal.ItemStack>;
    }
    type DispenserBlockEntityAccessor_ = DispenserBlockEntityAccessor;
    class MinecartSpawner extends Internal.AbstractMinecart {
        constructor(arg0: Internal.EntityType_<Internal.MinecartSpawner>, arg1: Internal.Level_)
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
        getSpawner(): Internal.BaseSpawner;
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
        get spawner(): Internal.BaseSpawner
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
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
    }
    type MinecartSpawner_ = MinecartSpawner;
    class SpeakerBlock extends Internal.Block implements Internal.EntityBlock {
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
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly ANTIQUE: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
        static readonly POWERED: Internal.BooleanProperty;
    }
    type SpeakerBlock_ = SpeakerBlock;
    class AxeItemBuilder extends Internal.HandheldItemBuilder {
        constructor(i: ResourceLocation_)
        createObject(): Internal.Item;
    }
    type AxeItemBuilder_ = AxeItemBuilder;
    class Object2IntOpenHashMap <K> extends Internal.AbstractObject2IntMap<K> implements Internal.Cloneable, Internal.Hash, Internal.Serializable {
        constructor(arg0: K[], arg1: number[], arg2: number)
        constructor()
        constructor(arg0: Internal.Object2IntMap_<K>, arg1: number)
        constructor(arg0: Internal.Map_<K, number>, arg1: number)
        constructor(arg0: K[], arg1: number[])
        constructor(arg0: Internal.Object2IntMap_<K>)
        constructor(arg0: number)
        constructor(arg0: Internal.Map_<K, number>)
        constructor(arg0: number, arg1: number)
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        object2IntEntrySet(): Internal.ObjectSet<any>;
        /**
         * @deprecated
        */
        mergeInt(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        trim(arg0: number): boolean;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
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
        trim(): boolean;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Object2IntFunction<K>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        replaceAll(arg0: Internal.BiFunction_<K, number, number>): void;
        applyAsInt(arg0: K): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        static identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        clone(): any;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        addTo(arg0: K, arg1: number): number;
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
        mergeInt(arg0: K, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
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
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        keySet(): Internal.ObjectSet<K>;
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
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
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
    }
    type Object2IntOpenHashMap_<K> = Object2IntOpenHashMap<K>;
    interface ToLongFunction <T> {
        abstract applyAsLong(arg0: T): number;
        (arg0: T): number;
    }
    type ToLongFunction_<T> = ToLongFunction<T>;
    class ImmutableSetMultimap <K, V> extends Internal.ImmutableMultimap<K, V> implements Internal.SetMultimap<K, V> {
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.ImmutableSetMultimap<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.ImmutableSetMultimap<K, V>;
        /**
         * @deprecated
        */
        removeAll(arg0: any): Internal.Collection<any>;
        static copyOf<K, V>(arg0: Internal.Iterable_<Internal.Map$Entry<K, V>>): Internal.ImmutableSetMultimap<K, V>;
        static builder<K, V>(): Internal.ImmutableSetMultimap$Builder<K, V>;
        static flatteningToImmutableSetMultimap<T, K, V>(arg0: Internal.Function_<T, K>, arg1: Internal.Function_<T, Internal.Stream<V>>): Internal.Collector<T, any, Internal.ImmutableSetMultimap<K, V>>;
        entries(): Internal.Collection<any>;
        inverse(): Internal.ImmutableMultimap<any, any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.ImmutableSetMultimap<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.ImmutableSetMultimap<K, V>;
        static toImmutableSetMultimap<T, K, V>(arg0: Internal.Function_<T, K>, arg1: Internal.Function_<T, V>): Internal.Collector<T, any, Internal.ImmutableSetMultimap<K, V>>;
        /**
         * @deprecated
        */
        replaceValues(arg0: any, arg1: Internal.Iterable_<any>): Internal.Set<any>;
        get(arg0: any): Internal.Collection<any>;
        keySet(): Internal.Set<any>;
        static of<K, V>(arg0: K, arg1: V): Internal.ImmutableSetMultimap<K, V>;
        static copyOf<K, V>(arg0: Internal.Multimap_<K, V>): Internal.ImmutableSetMultimap<K, V>;
        abstract asMap(): Internal.Map<K, Internal.Collection<V>>;
        static of<K, V>(): Internal.ImmutableSetMultimap<K, V>;
    }
    type ImmutableSetMultimap_<K, V> = ImmutableSetMultimap<K, V>;
    class SequencedAssemblyRecipe implements Internal.Recipe<Internal.RecipeWrapper> {
        constructor(arg0: ResourceLocation_, arg1: Internal.SequencedAssemblyRecipeSerializer_)
        static getRecipe<C extends Internal.Container, R extends Internal.ProcessingRecipe<C>>(arg0: Internal.Level_, arg1: C, arg2: Internal.RecipeType_<R>, arg3: R, arg4: Internal.Predicate_<R>): Internal.Optional<R>;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        matches(arg0: Internal.RecipeWrapper_, arg1: Internal.Level_): boolean;
        getOutputChance(): number;
        getLoops(): number;
        getTransitionalItem(): Internal.ItemStack;
        assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        static getRecipe<C extends Internal.Container, R extends Internal.ProcessingRecipe<C>>(arg0: Internal.Level_, arg1: C, arg2: Internal.RecipeType_<R>, arg3: R): Internal.Optional<R>;
        getSequence(): Internal.List<Internal.SequencedRecipe<any>>;
        static getRecipe<R extends Internal.ProcessingRecipe<any>>(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: Internal.RecipeType_<R>, arg3: R): Internal.Optional<R>;
        getIngredient(): Internal.Ingredient;
        matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        assemble(arg0: Internal.RecipeWrapper_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        static addToTooltip(arg0: Internal.ItemTooltipEvent_): void;
        getMod(): string;
        addAdditionalIngredientsAndMachines(arg0: Internal.List_<Internal.Ingredient>): void;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        addAdditionalFluidIngredients(arg0: Internal.List_<Internal.FluidIngredient>): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        static getRecipes<R extends Internal.ProcessingRecipe<any>>(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: Internal.RecipeType_<R>, arg3: R): Internal.Stream<R>;
        getRemainingItems(arg0: Internal.RecipeWrapper_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get outputChance(): number
        get loops(): number
        get transitionalItem(): Internal.ItemStack
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get sequence(): Internal.List<Internal.SequencedRecipe<any>>
        get ingredient(): Internal.Ingredient
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        readonly resultPool: Internal.List<Internal.ProcessingOutput>;
    }
    type SequencedAssemblyRecipe_ = SequencedAssemblyRecipe;
    class FeatureFlag {
    }
    type FeatureFlag_ = FeatureFlag;
    abstract class ModularSeatBlock extends Internal.HorizontalDirectionalBlock implements Internal.SittableBlock, Internal.SimpleWaterloggedBlock {
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
        canTakeShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, face: Internal.Direction_): boolean;
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
        getShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_): Internal.ModularSeatProperty;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        abstract getSeatSize(arg0: Internal.BlockState_): Internal.AABB;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SHAPE: Internal.EnumProperty<Internal.ModularSeatProperty>;
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type ModularSeatBlock_ = ModularSeatBlock;
    class AirCurrent {
        constructor(arg0: Internal.IAirCurrentSource_)
        getTypeAt(arg0: number): Internal.FanProcessingType;
        tickAffectedHandlers(): void;
        findAffectedHandlers(): void;
        rebuild(): void;
        static tickClientPlayerSounds(): void;
        findEntities(): void;
        static getFlowLimit(arg0: Internal.Level_, arg1: BlockPos_, arg2: number, arg3: Internal.Direction_): number;
        static isPlayerCreativeFlying(arg0: Internal.Entity_): boolean;
        tick(): void;
        pushing: boolean;
        direction: Internal.Direction;
        bounds: Internal.AABB;
        maxDistance: number;
        segments: Internal.List<Internal.AirCurrent$AirCurrentSegment>;
        readonly source: Internal.IAirCurrentSource;
    }
    type AirCurrent_ = AirCurrent;
    class BlockFaceUV {
        constructor(arg0: number[], arg1: number)
        getReverseIndex(arg0: number): number;
        getV(arg0: number): number;
        getU(arg0: number): number;
        setMissingUv(arg0: number[]): void;
        set missingUv(arg0: number[])
        readonly rotation: number;
        uvs: number[];
    }
    type BlockFaceUV_ = BlockFaceUV;
    interface GameRules$GameRuleTypeVisitor {
        visit<T extends Internal.GameRules$Value<T>>(arg0: Internal.GameRules$Key_<T>, arg1: Internal.GameRules$Type_<T>): void;
        visitBoolean(arg0: Internal.GameRules$Key_<Internal.GameRules$BooleanValue>, arg1: Internal.GameRules$Type_<Internal.GameRules$BooleanValue>): void;
        visitInteger(arg0: Internal.GameRules$Key_<Internal.GameRules$IntegerValue>, arg1: Internal.GameRules$Type_<Internal.GameRules$IntegerValue>): void;
    }
    type GameRules$GameRuleTypeVisitor_ = GameRules$GameRuleTypeVisitor;
    class Entity$RemovalReason extends Internal.Enum<Internal.Entity$RemovalReason> {
        static values(): Internal.Entity$RemovalReason[];
        shouldSave(): boolean;
        shouldDestroy(): boolean;
        static valueOf(arg0: string): Internal.Entity$RemovalReason;
        static readonly CHANGED_DIMENSION: Internal.Entity$RemovalReason;
        static readonly UNLOADED_TO_CHUNK: Internal.Entity$RemovalReason;
        static readonly UNLOADED_WITH_PLAYER: Internal.Entity$RemovalReason;
        static readonly KILLED: Internal.Entity$RemovalReason;
        static readonly DISCARDED: Internal.Entity$RemovalReason;
    }
    type Entity$RemovalReason_ = "changed_dimension" | Entity$RemovalReason | "killed" | "discarded" | "unloaded_with_player" | "unloaded_to_chunk";
    class TridentItem extends Internal.Item implements Internal.Vanishable, Internal.ModifiableItemKJS {
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
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getDamage(arg0: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
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
        static readonly BASE_DAMAGE: 8.0;
        static readonly THROW_THRESHOLD_TIME: 10;
        static readonly SHOOT_POWER: 2.5;
        defaultModifiers: Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
    }
    type TridentItem_ = TridentItem;
    class CommandEventJS extends Internal.ServerEventJS {
        constructor(e: any_)
        getException(): Internal.Throwable;
        getInput(): string;
        setException(exception: Internal.Throwable_): void;
        setParseResults(parse: Internal.ParseResults_<Internal.CommandSourceStack>): void;
        getCommandName(): string;
        getParseResults(): Internal.ParseResults<Internal.CommandSourceStack>;
        get exception(): Internal.Throwable
        get input(): string
        set exception(exception: Internal.Throwable_)
        set parseResults(parse: Internal.ParseResults_<Internal.CommandSourceStack>)
        get commandName(): string
        get parseResults(): Internal.ParseResults<Internal.CommandSourceStack>
    }
    type CommandEventJS_ = CommandEventJS;
    class ServerboundSelectTradePacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getItem(): number;
        isSkippable(): boolean;
        get item(): number
        get skippable(): boolean
    }
    type ServerboundSelectTradePacket_ = ServerboundSelectTradePacket;
    interface WindowKJS {
        kjs$loadIcons(original: Internal.List_<Internal.IoSupplier<Internal.InputStream>>): Internal.List<Internal.IoSupplier<Internal.InputStream>>;
    }
    type WindowKJS_ = WindowKJS;
    class Hoglin extends Internal.Animal implements Internal.Enemy, Internal.HoglinBase {
        constructor(arg0: Internal.EntityType_<Internal.Hoglin>, arg1: Internal.Level_)
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
        isConverting(): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        static throwTarget(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): void;
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
        static checkHoglinSpawnRules(arg0: Internal.EntityType_<Internal.Hoglin>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
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
        static hurtAndThrowTarget(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
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
        isAdult(): boolean;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        getBrain(): Internal.Brain<Internal.Hoglin>;
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
        setImmuneToZombification(arg0: boolean): void;
        canBeHunted(): boolean;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getAttackAnimationRemainingTicks(): number;
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
        get converting(): boolean
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
        get adult(): boolean
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        get brain(): Internal.Brain<Internal.Hoglin>
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set immuneToZombification(arg0: boolean)
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get attackAnimationRemainingTicks(): number
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type Hoglin_ = Hoglin;
    abstract class Provider extends Internal.Properties {
        getService(arg0: string, arg1: string): Internal.Provider$Service;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        getInfo(): string;
        static of<K, V>(): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        isConfigured(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        getServices(): Internal.Set<Internal.Provider$Service>;
        configure(arg0: string): this;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        getVersion(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        getName(): string;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        getVersionStr(): string;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        get info(): string
        get configured(): boolean
        get services(): Internal.Set<Internal.Provider$Service>
        /**
         * @deprecated
        */
        get version(): number
        get name(): string
        get versionStr(): string
    }
    type Provider_ = Provider;
    class TableProperty extends Internal.Enum<Internal.TableProperty> implements Internal.StringRepresentable {
        static valueOf(name: string): Internal.TableProperty;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.TableProperty[];
        get serializedName(): string
        static readonly NORTH_WEST_CORNER: Internal.TableProperty;
        static readonly WEST_CENTER: Internal.TableProperty;
        static readonly NORTH_SOUTH_CENTER: Internal.TableProperty;
        static readonly SINGLE: Internal.TableProperty;
        static readonly NORTH_EAST_CORNER: Internal.TableProperty;
        static readonly NORTH_SIDE: Internal.TableProperty;
        static readonly SOUTH_EAST_CORNER: Internal.TableProperty;
        static readonly CENTER: Internal.TableProperty;
        static readonly WEST_SIDE: Internal.TableProperty;
        static readonly EAST_CENTER: Internal.TableProperty;
        static readonly EAST_WEST_CENTER: Internal.TableProperty;
        static readonly SOUTH_WEST_CORNER: Internal.TableProperty;
        static readonly EAST_SIDE: Internal.TableProperty;
        static readonly NORTH_CENTER: Internal.TableProperty;
        static readonly SOUTH_CENTER: Internal.TableProperty;
        static readonly SOUTH_SIDE: Internal.TableProperty;
    }
    type TableProperty_ = "west_side" | "east_west_center" | "south_east_corner" | "center" | "north_west_corner" | "single" | "east_side" | "north_south_center" | "north_east_corner" | "north_side" | "south_side" | "west_center" | "east_center" | "south_west_corner" | "north_center" | TableProperty | "south_center";
    class MutableNumberUnit extends Internal.Unit {
        constructor(value: number)
        set(value: number): void;
        value: number;
    }
    type MutableNumberUnit_ = MutableNumberUnit;
    class SplashManager extends Internal.SimplePreparableReloadListener<Internal.List<string>> {
        constructor(arg0: Internal.User_)
        getName(): string;
        getSplash(): Internal.SplashRenderer;
        get name(): string
        get splash(): Internal.SplashRenderer
    }
    type SplashManager_ = SplashManager;
    class LootrInventoryBlock extends Internal.ChestBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Supplier_<Internal.BlockEntityType<Internal.ChestBlockEntity>>)
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
    type LootrInventoryBlock_ = LootrInventoryBlock;
    class PartPose {
        static rotation(arg0: number, arg1: number, arg2: number): Internal.PartPose;
        static offsetAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.PartPose;
        static offset(arg0: number, arg1: number, arg2: number): Internal.PartPose;
        readonly zRot: number;
        static readonly ZERO: Internal.PartPose;
        readonly z: number;
        readonly y: number;
        readonly x: number;
        readonly yRot: number;
        readonly xRot: number;
    }
    type PartPose_ = PartPose;
    class DirectedDirectionalBlock extends Internal.HorizontalDirectionalBlock implements Internal.IWrenchable, Internal.ITransformableBlock {
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
        transform(arg0: Internal.BlockState_, arg1: Internal.StructureTransform_): Internal.BlockState;
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
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        static getTargetDirection(arg0: Internal.BlockState_): Internal.Direction;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly TARGET: Internal.EnumProperty<Internal.AttachFace>;
    }
    type DirectedDirectionalBlock_ = DirectedDirectionalBlock;
    class ItemStackHandler implements Internal.IItemHandler, Internal.IItemHandlerModifiable, Internal.INBTSerializable<Internal.CompoundTag> {
        constructor()
        constructor(arg0: number)
        constructor(arg0: Internal.NonNullList_<Internal.ItemStack>)
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        getSlots(): number;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        kjs$self(): Internal.IItemHandler;
        serializeNBT(): Internal.Tag;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        setSize(arg0: number): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get height(): number
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        set size(arg0: number)
    }
    type ItemStackHandler_ = ItemStackHandler;
    class BambooSaplingBlock extends Internal.Block implements Internal.BonemealableBlock {
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
    type BambooSaplingBlock_ = BambooSaplingBlock;
    class PressurePlateBlockBuilder extends Internal.ShapedBlockBuilder {
        constructor(i: ResourceLocation_)
        behaviour(wt: string): this;
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        behaviour(wt: Internal.BlockSetType_): this;
        createObject(): Internal.Block;
    }
    type PressurePlateBlockBuilder_ = PressurePlateBlockBuilder;
    class ParsedArgument <S, T> {
        constructor(arg0: number, arg1: number, arg2: T)
        getResult(): T;
        getRange(): Internal.StringRange;
        get result(): T
        get range(): Internal.StringRange
    }
    type ParsedArgument_<S, T> = ParsedArgument<S, T>;
    class TimeComponent extends Internal.Record implements Internal.RecipeComponent<number> {
        constructor(name: string, scale: number)
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<number>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<number>;
        isOutput(recipe: Internal.RecipeJS_, value: number, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<number>;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, map: Internal.Map_<any, any>): void;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<number>;
        checkEmpty(key: Internal.RecipeKey_<number>, value: number): string;
        replaceInput(recipe: Internal.RecipeJS_, original: number, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): number;
        write(recipe: Internal.RecipeJS_, value: number): Internal.JsonElement;
        orSelf(): Internal.RecipeComponent<number>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        key(name: string): Internal.RecipeKey<number>;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<number, O>;
        componentType(): string;
        asArray(): Internal.ArrayRecipeComponent<number>;
        isInput(recipe: Internal.RecipeJS_, value: number, match: Internal.ReplacementMatch_): boolean;
        static builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<number>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, number>>;
        name(): string;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, number>>;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, json: Internal.JsonObject_): void;
        scale(): number;
        checkValueHasChanged(oldValue: number, newValue: number): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<number, O>;
        replaceOutput(recipe: Internal.RecipeJS_, original: number, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): number;
        static readonly SECONDS: Internal.TimeComponent;
        static readonly TICKS: Internal.TimeComponent;
        static readonly DYNAMIC: Internal.DynamicRecipeComponent;
        static readonly MINUTES: Internal.TimeComponent;
    }
    type TimeComponent_ = TimeComponent;
    class LevelEvent$Save extends Internal.LevelEvent {
        constructor()
        constructor(arg0: Internal.LevelAccessor_)
    }
    type LevelEvent$Save_ = LevelEvent$Save;
    class FishingSpeedEnchantment extends Internal.Enchantment {
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type FishingSpeedEnchantment_ = FishingSpeedEnchantment;
    interface CrashReportDetail <V> extends Internal.Callable<V> {
        abstract call(): V;
        (): V;
    }
    type CrashReportDetail_<V> = CrashReportDetail<V>;
    class NoneFeatureConfiguration implements Internal.FeatureConfiguration {
        constructor()
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.NoneFeatureConfiguration>;
        static readonly INSTANCE: Internal.NoneFeatureConfiguration;
    }
    type NoneFeatureConfiguration_ = NoneFeatureConfiguration;
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
    interface WorldlyContainer extends Internal.Container {
        stopOpen(arg0: Internal.Player_): void;
        count(ingredient: Internal.Ingredient_): number;
        tryClear(arg0: any): void;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        abstract isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        abstract canPlaceItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        setChanged(): void;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        abstract getContainerSize(): number;
        abstract getSlotsForFace(arg0: Internal.Direction_): number[];
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        abstract removeItemNoUpdate(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract stillValid(arg0: Internal.Player_): boolean;
        isMutable(): boolean;
        clear(): void;
        abstract getItem(arg0: number): Internal.ItemStack;
        find(ingredient: Internal.Ingredient_): number;
        abstract canTakeItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        abstract clearContent(): void;
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
    type WorldlyContainer_ = WorldlyContainer;
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
    class FoodOnAStickItem <T extends Internal.Entity & Internal.ItemSteerable> extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.EntityType_<T>, arg2: number)
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
    type FoodOnAStickItem_<T extends Internal.Entity & Internal.ItemSteerable> = FoodOnAStickItem<T>;
    class BeltMovementHandler$TransportedEntityInfo {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        getTicksSinceLastCollision(): number;
        tick(): this;
        refresh(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        get ticksSinceLastCollision(): number
    }
    type BeltMovementHandler$TransportedEntityInfo_ = BeltMovementHandler$TransportedEntityInfo;
    class ServerLevel extends Internal.Level implements Internal.ServerLevelKJS, com.simibubi.create.foundation.mixin.accessor.ServerLevelAccessor, Internal.WorldGenLevel, Internal.ILevelEventRedirect {
        constructor(arg0: Internal.MinecraftServer_, arg1: Internal.Executor_, arg2: Internal.LevelStorageSource$LevelStorageAccess_, arg3: Internal.ServerLevelData_, arg4: Internal.ResourceKey_<Internal.Level>, arg5: Internal.LevelStem_, arg6: Internal.ChunkProgressListener_, arg7: boolean, arg8: number, arg9: Internal.List_<any>, arg10: boolean, arg11: Internal.RandomSequences_)
        spawnLightning(x: number, y: number, z: number, effectOnly: boolean, player: Internal.ServerPlayer_): void;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        dayTime(): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        resetEmptyTime(): void;
        getMaxSection(): number;
        setDefaultSpawnPos(arg0: BlockPos_, arg1: number): void;
        setRedirected(redirected: boolean, id: Vec3d_): void;
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
        getName(): Internal.Component;
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
        setStatusMessage(message: Internal.Component_): void;
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
        getDisplayName(): Internal.Component;
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
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        getWatchdogStats(): string;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        findClosestBiome3d(arg0: Internal.Predicate_<Internal.Holder<Internal.Biome>>, arg1: BlockPos_, arg2: number, arg3: number, arg4: number): com.mojang.datafixers.util.Pair<BlockPos, Internal.Holder<Internal.Biome>>;
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
        getBlockTicks(): Internal.LevelTicks<Internal.Block>;
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
        tell(message: Internal.Component_): void;
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
        isFlat(): boolean;
        getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.Predicate_<T>): Internal.List<T>;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        get maxSection(): number
        get dataStorage(): Internal.DimensionDataStorage
        get height(): number
        get persistentData(): Internal.CompoundTag
        get randomSequences(): Internal.RandomSequences
        set time(time: number)
        get portalForcer(): Internal.PortalForcer
        get name(): Internal.Component
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
        set statusMessage(message: Internal.Component_)
        get maxLightLevel(): number
        get seed(): number
        get allEntities(): Internal.Iterable<Internal.Entity>
        set dayTime(arg0: number)
        get minBuildHeight(): number
        get displayName(): Internal.Component
        get maxBuildHeight(): number
        get watchdogStats(): string
        get minSection(): number
        get handlingTick(): boolean
        get blockTicks(): Internal.LevelTicks<Internal.Block>
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
    }
    type ServerLevel_ = ServerLevel;
    abstract class SavedData {
        constructor()
        isDirty(): boolean;
        setDirty(arg0: boolean): void;
        abstract save(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        save(arg0: Internal.File_): void;
        setDirty(): void;
        get dirty(): boolean
        set dirty(arg0: boolean)
    }
    type SavedData_ = SavedData;
    interface SpecialSpoutHandlerEvent$SpoutHandler {
        abstract fillBlock(arg0: Internal.BlockContainerJS_, arg1: Internal.FluidStackJS_, arg2: boolean): number;
        (arg0: Internal.BlockContainerJS, arg1: Internal.FluidStackJS, arg2: boolean): number;
    }
    type SpecialSpoutHandlerEvent$SpoutHandler_ = SpecialSpoutHandlerEvent$SpoutHandler;
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
    class MechanicalCrafterBlockEntity$Inventory extends Internal.SmartInventory {
        constructor(arg0: Internal.MechanicalCrafterBlockEntity_)
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        static tryClear(arg0: any): void;
        countItem(arg0: Internal.Item_): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        extractItem(i: number, i1: number, b: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        kjs$self(): Internal.IItemHandler;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(i: number): Internal.ItemStack;
        getHeight(): number;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        getWidth(): number;
        getSlotLimit(i: number): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(i: number, itemStack: Internal.ItemStack_, b: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(i: number, itemStack: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get height(): number
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type MechanicalCrafterBlockEntity$Inventory_ = MechanicalCrafterBlockEntity$Inventory;
    class AddPackFindersEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.PackType_, arg1: Internal.Consumer_<Internal.RepositorySource>)
        getPackType(): Internal.PackType;
        addRepositorySource(arg0: Internal.RepositorySource_): void;
        get packType(): Internal.PackType
    }
    type AddPackFindersEvent_ = AddPackFindersEvent;
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
    interface CustomMapData <H extends Internal.CustomMapData$DirtyCounter> {
        abstract loadUpdateTag(arg0: Internal.CompoundTag_): void;
        onItemTooltip(data: Internal.MapItemSavedData_, stack: Internal.ItemStack_): Internal.Component;
        onItemUpdate(data: Internal.MapItemSavedData_, entity: Internal.Entity_): boolean;
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
    class RemoteChatSession extends Internal.Record {
        constructor(arg0: Internal.UUID_, arg1: Internal.ProfilePublicKey_)
        asData(): Internal.RemoteChatSession$Data;
        profilePublicKey(): Internal.ProfilePublicKey;
        createMessageDecoder(arg0: Internal.UUID_): Internal.SignedMessageChain$Decoder;
        hasExpired(): boolean;
        createMessageValidator(): Internal.SignedMessageValidator;
        sessionId(): Internal.UUID;
    }
    type RemoteChatSession_ = RemoteChatSession;
    interface NonNullConsumer <T> {
        abstract accept(arg0: T): void;
        (arg0: T): void;
    }
    type NonNullConsumer_<T> = NonNullConsumer<T>;
    interface EnchantmentBuilder$DamageProtectionFunction {
        abstract getDamageProtection(arg0: number, arg1: DamageSource_): number;
        (arg0: number, arg1: DamageSource): number;
    }
    type EnchantmentBuilder$DamageProtectionFunction_ = EnchantmentBuilder$DamageProtectionFunction;
    class NoOpFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type NoOpFeature_ = NoOpFeature;
    abstract class LavaFluid extends Internal.FlowingFluid {
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
        randomTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        getDropOff(arg0: Internal.LevelReader_): number;
        getSpreadDelay(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.FluidState_): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        createLegacyBlock(arg0: Internal.FluidState_): Internal.BlockState;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        arch$registryName(): ResourceLocation;
        get dripParticle(): Internal.ParticleOptions
        static readonly MIN_LEVEL_CUTOFF: 0.44444445;
    }
    type LavaFluid_ = LavaFluid;
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
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
    }
    type GearboxBlockEntity_ = GearboxBlockEntity;
    class GenerationStep$Decoration extends Internal.Enum<Internal.GenerationStep$Decoration> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.GenerationStep$Decoration;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        getName(): string;
        static values(): Internal.GenerationStep$Decoration[];
        get serializedName(): string
        get name(): string
        static readonly UNDERGROUND_STRUCTURES: Internal.GenerationStep$Decoration;
        static readonly RAW_GENERATION: Internal.GenerationStep$Decoration;
        static readonly UNDERGROUND_ORES: Internal.GenerationStep$Decoration;
        static readonly STRONGHOLDS: Internal.GenerationStep$Decoration;
        static readonly SURFACE_STRUCTURES: Internal.GenerationStep$Decoration;
        static readonly LOCAL_MODIFICATIONS: Internal.GenerationStep$Decoration;
        static readonly CODEC: Internal.Codec<Internal.GenerationStep$Decoration>;
        static readonly VEGETAL_DECORATION: Internal.GenerationStep$Decoration;
        static readonly TOP_LAYER_MODIFICATION: Internal.GenerationStep$Decoration;
        static readonly LAKES: Internal.GenerationStep$Decoration;
        static readonly FLUID_SPRINGS: Internal.GenerationStep$Decoration;
        static readonly UNDERGROUND_DECORATION: Internal.GenerationStep$Decoration;
    }
    type GenerationStep$Decoration_ = "underground_ores" | "top_layer_modification" | "fluid_springs" | GenerationStep$Decoration | "strongholds" | "lakes" | "local_modifications" | "surface_structures" | "underground_structures" | "underground_decoration" | "raw_generation" | "vegetal_decoration";
    interface Applicative <F extends Internal.K1, Mu extends Internal.Applicative$Mu> extends Internal.Functor<F, Mu> {
        group<T1, T2, T3, T4, T5, T6>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        apply7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.Function7_<T1, T2, T3, T4, T5, T6, T7, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>): Internal.App<F, R>;
        lift2<A, B, R>(arg0: Internal.App_<F, Internal.BiFunction<A, B, R>>): Internal.BiFunction<Internal.App<F, A>, Internal.App<F, B>, Internal.App<F, R>>;
        apply3<T1, T2, T3, R>(arg0: Internal.Function3_<T1, T2, T3, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>): Internal.App<F, R>;
        ap4<T1, T2, T3, T4, R>(arg0: Internal.App_<F, Internal.Function4<T1, T2, T3, T4, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>): Internal.Products$P13<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        lift6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<F, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>): Internal.Function6<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, T5>, Internal.App<F, T6>, Internal.App<F, R>>;
        ap6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<F, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>): Internal.App<F, R>;
        apply9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>): Internal.App<F, R>;
        lift3<T1, T2, T3, R>(arg0: Internal.App_<F, Internal.Function3<T1, T2, T3, R>>): Internal.Function3<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, R>>;
        ap13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: Internal.App_<F, Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>, arg12: Internal.App_<F, T12>, arg13: Internal.App_<F, T13>): Internal.App<F, R>;
        group<T1, T2, T3>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>): Internal.Products$P3<F, T1, T2, T3>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>): Internal.Products$P10<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        ap11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: Internal.App_<F, Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>): Internal.App<F, R>;
        lift5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<F, Internal.Function5<T1, T2, T3, T4, T5, R>>): Internal.Function5<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, T5>, Internal.App<F, R>>;
        unbox<F extends Internal.K1, Mu extends Internal.Applicative$Mu>(arg0: Internal.App_<Mu, F>): this;
        lift4<T1, T2, T3, T4, R>(arg0: Internal.App_<F, Internal.Function4<T1, T2, T3, T4, R>>): Internal.Function4<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, R>>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>): Internal.Products$P14<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        abstract lift1<A, R>(arg0: Internal.App_<F, Internal.Function<A, R>>): Internal.Function<Internal.App<F, A>, Internal.App<F, R>>;
        ap<A, R>(arg0: Internal.App_<F, Internal.Function<A, R>>, arg1: Internal.App_<F, A>): Internal.App<F, R>;
        ap<A, R>(arg0: Internal.Function_<A, R>, arg1: Internal.App_<F, A>): Internal.App<F, R>;
        ap9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<F, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>): Internal.App<F, R>;
        lift9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<F, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): Internal.Function9<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, T5>, Internal.App<F, T6>, Internal.App<F, T7>, Internal.App<F, T8>, Internal.App<F, T9>, Internal.App<F, R>>;
        ap2<A, B, R>(arg0: Internal.App_<F, Internal.BiFunction<A, B, R>>, arg1: Internal.App_<F, A>, arg2: Internal.App_<F, B>): Internal.App<F, R>;
        apply5<T1, T2, T3, T4, T5, R>(arg0: Internal.Function5_<T1, T2, T3, T4, T5, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>): Internal.Products$P11<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        ap10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: Internal.App_<F, Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>): Internal.Products$P15<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        lift7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<F, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>): Internal.Function7<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, T5>, Internal.App<F, T6>, Internal.App<F, T7>, Internal.App<F, R>>;
        abstract map<T, R>(arg0: Internal.Function_<T, R>, arg1: Internal.App_<F, T>): Internal.App<F, R>;
        group<T1, T2>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>): Internal.Products$P2<F, T1, T2>;
        ap14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: Internal.App_<F, Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>, arg12: Internal.App_<F, T12>, arg13: Internal.App_<F, T13>, arg14: Internal.App_<F, T14>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>): Internal.Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        group<T1, T2, T3, T4>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        group<T1, T2, T3, T4, T5>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        ap5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<F, Internal.Function5<T1, T2, T3, T4, T5, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>): Internal.App<F, R>;
        group<T1>(arg0: Internal.App_<F, T1>): Internal.Products$P1<F, T1>;
        ap7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<F, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>): Internal.Products$P12<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        ap3<T1, T2, T3, R>(arg0: Internal.App_<F, Internal.Function3<T1, T2, T3, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>): Internal.App<F, R>;
        ap15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: Internal.App_<F, Internal.Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>, arg12: Internal.App_<F, T12>, arg13: Internal.App_<F, T13>, arg14: Internal.App_<F, T14>, arg15: Internal.App_<F, T15>): Internal.App<F, R>;
        ap8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<F, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>): Internal.App<F, R>;
        apply8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>): Internal.App<F, R>;
        abstract point<A>(arg0: A): Internal.App<F, A>;
        lift8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<F, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>): Internal.Function8<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, T5>, Internal.App<F, T6>, Internal.App<F, T7>, Internal.App<F, T8>, Internal.App<F, R>>;
        apply2<A, B, R>(arg0: Internal.BiFunction_<A, B, R>, arg1: Internal.App_<F, A>, arg2: Internal.App_<F, B>): Internal.App<F, R>;
        apply6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.Function6_<T1, T2, T3, T4, T5, T6, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>): Internal.App<F, R>;
        apply4<T1, T2, T3, T4, R>(arg0: Internal.Function4_<T1, T2, T3, T4, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>): Internal.App<F, R>;
        ap12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: Internal.App_<F, Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>, arg12: Internal.App_<F, T12>): Internal.App<F, R>;
        ap16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: Internal.App_<F, Internal.Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>, arg12: Internal.App_<F, T12>, arg13: Internal.App_<F, T13>, arg14: Internal.App_<F, T14>, arg15: Internal.App_<F, T15>, arg16: Internal.App_<F, T16>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>, arg15: Internal.App_<F, T16>): Internal.Products$P16<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
    }
    type Applicative_<F extends Internal.K1, Mu extends Internal.Applicative$Mu> = Applicative<F, Mu>;
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
        getDataTag(arg0: Internal.DynamicOps_<Internal.Tag>, arg1: Internal.WorldDataConfiguration_, arg2: Internal.Registry_<Internal.LevelStem>, arg3: Internal.Lifecycle_): com.mojang.datafixers.util.Pair<Internal.WorldData, Internal.WorldDimensions$Complete>;
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
    class ModelDataManager {
        constructor(arg0: Internal.Level_)
        requestRefresh(arg0: Internal.BlockEntity_): void;
        getAt(arg0: BlockPos_): Internal.ModelData;
        getAt(arg0: Internal.ChunkPos_): Internal.Map<BlockPos, Internal.ModelData>;
        static onChunkUnload(arg0: Internal.ChunkEvent$Unload_): void;
    }
    type ModelDataManager_ = ModelDataManager;
    class ScreenEvent$CharacterTyped$Pre extends Internal.ScreenEvent$CharacterTyped {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: string, arg2: number)
    }
    type ScreenEvent$CharacterTyped$Pre_ = ScreenEvent$CharacterTyped$Pre;
    abstract class MultifaceBlock extends Internal.Block {
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
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        static canAttachTo(arg0: Internal.BlockGetter_, arg1: Internal.Direction_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        static hasFace(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
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
        static pack(arg0: Internal.Collection_<Internal.Direction>): number;
        getBlockStates(): Internal.List<Internal.BlockState>;
        static availableFaces(arg0: Internal.BlockState_): Internal.Set<Internal.Direction>;
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
        abstract getSpreader(): Internal.MultifaceSpreader;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
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
    class LocalPlayer extends Internal.AbstractClientPlayer implements Internal.IQuiverEntity {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.ClientLevel_, arg2: Internal.ClientPacketListener_, arg3: Internal.StatsCounter_, arg4: Internal.ClientRecipeBook_, arg5: boolean, arg6: boolean)
        resetPos(): void;
        getDistance(pos: BlockPos_): number;
        isFake(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        getStats(): Internal.PlayerStatsJS;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isMovingSlowly(): boolean;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        setServerBrand(arg0: string): void;
        addFood(f: number, m: number): void;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        removeRecipeHighlight(arg0: Internal.Recipe_<any>): void;
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
        getCurrentMood(): number;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        paint(tag: Internal.CompoundTag_): void;
        getStatsCounter(): Internal.StatsCounter;
        getBlockReach(): number;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        getRecipeBook(): Internal.ClientRecipeBook;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        handler$zbi000$caelus$checkFlight(arg0: Internal.CallbackInfo_): void;
        jumpableVehicle(): Internal.PlayerRideableJumping;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFoodLevel(): number;
        notify(title: Internal.Component_, text: Internal.Component_): void;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        setXpLevel(l: number): void;
        supplementaries$getQuiver(): Internal.ItemStack;
        setFoodLevel(foodLevel: number): void;
        setSaturation(saturation: number): void;
        addXPLevels(l: number): void;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        sendOpenInventory(): void;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        supplementaries$hasQuiver(): boolean;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        canReach(arg0: Internal.Entity_, arg1: number): boolean;
        getReachDistance(): number;
        getMotionX(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        isWaterCreature(): boolean;
        isHandsBusy(): boolean;
        sendData(channel: string): void;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        getSelectedSlot(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getOpenInventory(): Internal.AbstractContainerMenu;
        getXp(): number;
        isFrame(): boolean;
        shouldShowDeathScreen(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        setXp(xp: number): void;
        drop(arg0: boolean): boolean;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        isMiningBlock(): boolean;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        updateSyncFields(arg0: Internal.LocalPlayer_): void;
        localvar$zbi000$caelus$affixEmptyStack(arg0: Internal.ItemStack_): Internal.ItemStack;
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
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        clientSideCloseContainer(): void;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        getName(): Internal.Component;
        handler$zop000$create$noSwimmingWithHeavyBootsOn(arg0: Internal.CallbackInfoReturnable_<any>): void;
        boostElytraFlight(): void;
        addExhaustion(exhaustion: number): void;
        getPassengers(): Internal.EntityArrayList;
        getServerBrand(): string;
        giveInHand(item: Internal.ItemStack_): void;
        setMouseItem(item: Internal.ItemStack_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getWaterVision(): number;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        addXP(xp: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        give(item: Internal.ItemStack_): void;
        isAutoJumpEnabled(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setShowDeathScreen(arg0: boolean): void;
        setDefaultMovementSpeed(speed: number): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        getMainHandItem(): Internal.ItemStack;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getServer(): Internal.MinecraftServer;
        setExperienceValues(arg0: number, arg1: number, arg2: number): void;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        hurtTo(arg0: number): void;
        getScriptType(): Internal.ScriptType;
        setPermissionLevel(arg0: number): void;
        onGameModeChanged(arg0: Internal.GameType_): void;
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
        getPermissionLevel(): number;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        getJumpRidingScale(): number;
        tell(message: Internal.Component_): void;
        getMouseItem(): Internal.ItemStack;
        setZ(z: number): void;
        serializeNBT(): Internal.CompoundTag;
        setStatusMessage(message: Internal.Component_): void;
        supplementaries$setQuiver(quiver: Internal.ItemStack_): void;
        getDistanceSq(pos: BlockPos_): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        getSaturation(): number;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        serverAiStep(): void;
        runCommand(command: string): number;
        addItemCooldown(item: Internal.Item_, ticks: number): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        get fake(): boolean
        get stats(): Internal.PlayerStatsJS
        set defaultMovementSpeedMultiplier(speed: number)
        get movingSlowly(): boolean
        get offHandItem(): Internal.ItemStack
        set serverBrand(arg0: string)
        get entityReach(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get xpLevel(): number
        set selectedSlot(index: number)
        get living(): boolean
        get currentMood(): number
        get totalMovementSpeed(): number
        get statsCounter(): Internal.StatsCounter
        get blockReach(): number
        get displayName(): Internal.Component
        get recipeBook(): Internal.ClientRecipeBook
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
        get handsBusy(): boolean
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
        get stepHeight(): number
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get serverBrand(): string
        set mouseItem(item: Internal.ItemStack_)
        set totalMovementSpeedMultiplier(speed: number)
        get waterVision(): number
        get autoJumpEnabled(): boolean
        get feetArmorItem(): Internal.ItemStack
        set showDeathScreen(arg0: boolean)
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set permissionLevel(arg0: number)
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get self(): boolean
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get permissionLevel(): number
        get motionZ(): number
        get jumpRidingScale(): number
        get mouseItem(): Internal.ItemStack
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        get saturation(): number
        set headArmorItem(item: Internal.ItemStack_)
        oSpinningEffectIntensity: number;
        input: Internal.Input;
        xBobO: number;
        readonly connection: Internal.ClientPacketListener;
        xBob: number;
        yBob: number;
        yBobO: number;
        static readonly LOGGER: Internal.Log4jLogger;
        spinningEffectIntensity: number;
    }
    type LocalPlayer_ = LocalPlayer;
    class ScreenEvent$CharacterTyped extends Internal.ScreenEvent {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: string, arg2: number)
        getModifiers(): number;
        getCodePoint(): string;
        get modifiers(): number
        get codePoint(): string
    }
    type ScreenEvent$CharacterTyped_ = ScreenEvent$CharacterTyped;
    interface ItemForgeAccessor {
        abstract puzzleslib$setRenderProperties(arg0: any): void;
        abstract puzzleslib$getRenderProperties(): any;
    }
    type ItemForgeAccessor_ = ItemForgeAccessor;
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
        static addBlockDrops(arg0: Internal.ObjectArrayList_<com.mojang.datafixers.util.Pair<Internal.ItemStack, BlockPos>>, arg1: Internal.ItemStack_, arg2: BlockPos_): void;
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
    interface LongConsumer {
        andThen(arg0: Internal.LongConsumer_): this;
        abstract accept(arg0: number): void;
        (arg0: number): void;
    }
    type LongConsumer_ = LongConsumer;
    class Holder$Reference <T> implements Internal.Holder<T> {
        bindTags(arg0: Internal.Collection_<Internal.TagKey<T>>): void;
        containsTag(arg0: Internal.TagKey_<T>): boolean;
        bindKey(arg0: Internal.ResourceKey_<T>): void;
        isBound(): boolean;
        is(arg0: ResourceLocation_): boolean;
        getType(): Internal.Holder$Reference$Type;
        static direct<T>(arg0: T): Internal.Holder<T>;
        value(): T;
        key(): Internal.ResourceKey<T>;
        unwrap(): Internal.Either<Internal.ResourceKey<T>, T>;
        is(arg0: Internal.Predicate_<Internal.ResourceKey<T>>): boolean;
        unwrapKey(): Internal.Optional<Internal.ResourceKey<T>>;
        canSerializeIn(arg0: Internal.HolderOwner_<T>): boolean;
        static createStandAlone<T>(arg0: Internal.HolderOwner_<T>, arg1: Internal.ResourceKey_<T>): Internal.Holder$Reference<T>;
        bindValue(arg0: T): void;
        getTagKeys(): Internal.Stream<Internal.TagKey<T>>;
        kind(): Internal.Holder$Kind;
        is(arg0: Internal.ResourceKey_<T>): boolean;
        /**
         * @deprecated
        */
        static createIntrusive<T>(arg0: Internal.HolderOwner_<T>, arg1: T): Internal.Holder$Reference<T>;
        tags(): Internal.Stream<Internal.TagKey<T>>;
        get(): T;
        containsTag(arg0: Internal.ITag_<T>): boolean;
        is(arg0: Internal.TagKey_<T>): boolean;
        get bound(): boolean
        get type(): Internal.Holder$Reference$Type
        get tagKeys(): Internal.Stream<Internal.TagKey<T>>
    }
    type Holder$Reference_<T> = Holder$Reference<T>;
    class GlobalPos {
        dimension(): Internal.ResourceKey<Internal.Level>;
        pos(): BlockPos;
        static of(arg0: Internal.ResourceKey_<Internal.Level>, arg1: BlockPos_): Internal.GlobalPos;
        static readonly CODEC: Internal.Codec<Internal.GlobalPos>;
    }
    type GlobalPos_ = GlobalPos;
    class TurtleEggBlock extends Internal.Block {
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
        static isSand(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
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
        static onSand(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly MAX_HATCH_LEVEL: 2;
        static readonly HATCH: Internal.IntegerProperty;
        static readonly MAX_EGGS: 4;
        static readonly MIN_EGGS: 1;
        static readonly EGGS: Internal.IntegerProperty;
    }
    type TurtleEggBlock_ = TurtleEggBlock;
    abstract class Model {
        constructor(arg0: Internal.Function_<ResourceLocation, Internal.RenderType>)
        renderType(arg0: ResourceLocation_): Internal.RenderType;
        abstract renderToBuffer(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    }
    type Model_ = Model;
    class IJetpack$Context {
        constructor(arg0: Internal.IJetpack_, arg1: Internal.LivingEntity_, arg2: Internal.Level_, arg3: Internal.FlyingPose_, arg4: Internal.ISource_)
        component2(): Internal.LivingEntity;
        getSource(): Internal.ISource;
        getWorld(): Internal.Level;
        copy(arg0: Internal.IJetpack_, arg1: Internal.LivingEntity_, arg2: Internal.Level_, arg3: Internal.FlyingPose_, arg4: Internal.ISource_): this;
        getPose(): Internal.FlyingPose;
        component1(): Internal.IJetpack;
        getEntity(): Internal.LivingEntity;
        component5(): Internal.ISource;
        static copy$default(arg0: Internal.IJetpack$Context_, arg1: Internal.IJetpack_, arg2: Internal.LivingEntity_, arg3: Internal.Level_, arg4: Internal.FlyingPose_, arg5: Internal.ISource_, arg6: number, arg7: any): Internal.IJetpack$Context;
        component3(): Internal.Level;
        component4(): Internal.FlyingPose;
        getJetpack(): Internal.IJetpack;
        get source(): Internal.ISource
        get world(): Internal.Level
        get pose(): Internal.FlyingPose
        get entity(): Internal.LivingEntity
        get jetpack(): Internal.IJetpack
        static readonly Companion: Internal.IJetpack$Context$Companion;
    }
    type IJetpack$Context_ = IJetpack$Context;
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
    class WorldCreationUiState$WorldTypeEntry extends Internal.Record {
        constructor(preset: Internal.Holder_<Internal.WorldPreset>)
        preset(): Internal.Holder<Internal.WorldPreset>;
        describePreset(): Internal.Component;
        isAmplified(): boolean;
        get amplified(): boolean
    }
    type WorldCreationUiState$WorldTypeEntry_ = WorldCreationUiState$WorldTypeEntry;
    class IntSummaryStatistics implements Internal.IntConsumer {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getSum(): number;
        getCount(): number;
        getAverage(): number;
        getMax(): number;
        accept(arg0: number): void;
        combine(arg0: Internal.IntSummaryStatistics_): void;
        getMin(): number;
        andThen(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        get sum(): number
        get count(): number
        get average(): number
        get max(): number
        get min(): number
    }
    type IntSummaryStatistics_ = IntSummaryStatistics;
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
    class RegistryObject <T> implements Internal.Supplier<T> {
        static create<T, U extends T>(arg0: ResourceLocation_, arg1: Internal.IForgeRegistry_<T>): Internal.RegistryObject<U>;
        stream(): Internal.Stream<T>;
        filter(arg0: Internal.Predicate_<T>): this;
        getKey(): Internal.ResourceKey<T>;
        static createOptional<T, U extends T>(arg0: ResourceLocation_, arg1: ResourceLocation_, arg2: string): Internal.RegistryObject<U>;
        static createOptional<T, U extends T>(arg0: ResourceLocation_, arg1: Internal.ResourceKey_<Internal.Registry<T>>, arg2: string): Internal.RegistryObject<U>;
        ifPresent(arg0: Internal.Consumer_<T>): void;
        orElseGet(arg0: Internal.Supplier_<T>): T;
        flatMap<U>(arg0: Internal.Function_<T, Internal.Optional<U>>): Internal.Optional<U>;
        lazyMap<U>(arg0: Internal.Function_<T, U>): Internal.Supplier<U>;
        static create<T, U extends T>(arg0: ResourceLocation_, arg1: ResourceLocation_, arg2: string): Internal.RegistryObject<U>;
        orElse(arg0: T): T;
        isPresent(): boolean;
        getId(): ResourceLocation;
        map<U>(arg0: Internal.Function_<T, U>): Internal.Optional<U>;
        getHolder(): Internal.Optional<Internal.Holder<T>>;
        orElseThrow<X extends Internal.Throwable>(arg0: Internal.Supplier_<X>): T;
        get(): T;
        static create<T, U extends T>(arg0: ResourceLocation_, arg1: Internal.ResourceKey_<Internal.Registry<T>>, arg2: string): Internal.RegistryObject<U>;
        get key(): Internal.ResourceKey<T>
        get present(): boolean
        get id(): ResourceLocation
        get holder(): Internal.Optional<Internal.Holder<T>>
    }
    type RegistryObject_<T> = RegistryObject<T>;
}
