/// <reference path="./internal_*.d.ts" />
declare namespace net.minecraft.world.level.levelgen.blockpredicates {
    interface BlockPredicate extends Internal.BiPredicate<Internal.WorldGenLevel, BlockPos> {
        hasSturdyFace(arg0: Internal.Direction_): this;
        noFluid(arg0: Vec3i_): this;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): this;
        anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): this;
        noFluid(): this;
        anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): this;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        abstract test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        solid(arg0: Vec3i_): this;
        insideWorld(arg0: Vec3i_): this;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        matchesTag(arg0: Internal.TagKey_<Internal.Block>): this;
        solid(): this;
        alwaysTrue(): this;
        matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): this;
        abstract type(): Internal.BlockPredicateType<any>;
        matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): this;
        allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): this;
        replaceable(): this;
        wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): this;
        matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): this;
        not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): this;
        matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): this;
        allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): this;
        allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): this;
        anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): this;
        replaceable(arg0: Vec3i_): this;
        hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): this;
        matchesBlocks(...arg0: Internal.Block_[]): this;
        matchesBlocks(arg0: Internal.List_<Internal.Block>): this;
        matchesFluids(...arg0: Internal.Fluid_[]): this;
        readonly CODEC: Internal.Codec<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>;
        readonly ONLY_IN_AIR_PREDICATE: Internal.MatchingBlocksPredicate;
        readonly ONLY_IN_AIR_OR_WATER_PREDICATE: Internal.MatchingBlocksPredicate;
    }
    type BlockPredicate_ = BlockPredicate;
}
declare namespace Internal {
    class MechanicalPressBlock extends Internal.HorizontalKineticBlock implements Internal.IBE<Internal.MechanicalPressBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        getBlockEntityType(): Internal.BlockEntityType<Internal.MechanicalPressBlockEntity>;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.MechanicalPressBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.MechanicalPressBlockEntity>;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.MechanicalPressBlockEntity>): void;
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
        getBlockEntityClass(): typeof Internal.MechanicalPressBlockEntity;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.MechanicalPressBlockEntity;
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
        showCapacityWithAnnotation(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get blockEntityType(): Internal.BlockEntityType<Internal.MechanicalPressBlockEntity>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityClass(): typeof Internal.MechanicalPressBlockEntity
        get mod(): string
    }
    type MechanicalPressBlock_ = MechanicalPressBlock;
    class LevelVersion {
        snapshot(): boolean;
        static parse(arg0: Internal.Dynamic_<any>): Internal.LevelVersion;
        levelDataVersion(): number;
        lastPlayed(): number;
        minecraftVersionName(): string;
        minecraftVersion(): Internal.DataVersion;
    }
    type LevelVersion_ = LevelVersion;
    class SimpleJarMetadata extends Internal.Record implements Internal.JarMetadata {
        constructor(name: string, version: string, pkgs: Internal.Set_<string>, providers: Internal.List_<Internal.SecureJar$Provider>)
        name(): string;
        version(): string;
        static from(arg0: Internal.SecureJar_, ...arg1: Internal.Path_[]): Internal.JarMetadata;
        descriptor(): Internal.ModuleDescriptor;
        providers(): Internal.List<Internal.SecureJar$Provider>;
        static fromFileName(arg0: Internal.Path_, arg1: Internal.Set_<string>, arg2: Internal.List_<Internal.SecureJar$Provider>): Internal.SimpleJarMetadata;
        pkgs(): Internal.Set<string>;
    }
    type SimpleJarMetadata_ = SimpleJarMetadata;
    class ImmutableCollections$Set12 <E> extends Internal.ImmutableCollections$AbstractImmutableSet<E> implements Internal.Serializable {
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        forEach(arg0: Internal.Consumer_<E>): void;
        toArray<T>(arg0: T[]): T[];
        parallelStream(): Internal.Stream<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        iterator(): Internal.Iterator<E>;
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
    type ImmutableCollections$Set12_<E> = ImmutableCollections$Set12<E>;
    class ThrownEnderpearl extends Internal.ThrowableItemProjectile {
        constructor(arg0: Internal.EntityType_<Internal.ThrownEnderpearl>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_)
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
    type ThrownEnderpearl_ = ThrownEnderpearl;
    class Matrix3d {
        constructor()
        copy(): this;
        asXRotation(arg0: number): this;
        getAsMatrix4f(): Matrix4f;
        multiply(arg0: Internal.Matrix3d_): this;
        asZRotation(arg0: number): this;
        scale(arg0: number): this;
        transform(arg0: Vec3d_): Vec3d;
        asYRotation(arg0: number): this;
        transpose(): this;
        asIdentity(): this;
        add(arg0: Internal.Matrix3d_): this;
        get asMatrix4f(): Matrix4f
    }
    type Matrix3d_ = Matrix3d;
    class Parrot$Variant extends Internal.Enum<Internal.Parrot$Variant> implements Internal.StringRepresentable {
        static byId(arg0: number): Internal.Parrot$Variant;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.Parrot$Variant[];
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.Parrot$Variant;
        getId(): number;
        get serializedName(): string
        get id(): number
        static readonly GRAY: Internal.Parrot$Variant;
        static readonly BLUE: Internal.Parrot$Variant;
        static readonly CODEC: Internal.Codec<Internal.Parrot$Variant>;
        static readonly RED_BLUE: Internal.Parrot$Variant;
        static readonly YELLOW_BLUE: Internal.Parrot$Variant;
        static readonly GREEN: Internal.Parrot$Variant;
    }
    type Parrot$Variant_ = "yellow_blue" | Parrot$Variant | "gray" | "blue" | "red_blue" | "green";
    class ItemDestroyedEventJS extends Internal.PlayerEventJS {
        constructor(e: Internal.PlayerDestroyItemEvent_)
        getEntity(): Internal.LivingEntity;
        getItem(): Internal.ItemStack;
        getHand(): Internal.InteractionHand;
        get entity(): Internal.LivingEntity
        get item(): Internal.ItemStack
        get hand(): Internal.InteractionHand
    }
    type ItemDestroyedEventJS_ = ItemDestroyedEventJS;
    interface ContainerEntity extends Internal.Container, Internal.MenuProvider {
        stopOpen(arg0: Internal.Player_): void;
        tryClear(arg0: any): void;
        addChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        abstract setLootTableSeed(arg0: number): void;
        isChestVehicleEmpty(): boolean;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        abstract isRemoved(): boolean;
        setChanged(): void;
        isChestVehicleStillValid(arg0: Internal.Player_): boolean;
        abstract position(): Vec3d;
        abstract getContainerSize(): number;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        interactWithContainerVehicle(arg0: Internal.Player_): Internal.InteractionResult;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        clearChestVehicleContent(): void;
        abstract removeItemNoUpdate(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        abstract setLootTable(arg0: ResourceLocation_): void;
        abstract clearItemStacks(): void;
        abstract getItem(arg0: number): Internal.ItemStack;
        unpackChestVehicleLootTable(arg0: Internal.Player_): void;
        getChestVehicleSlot(arg0: number): Internal.SlotAccess;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        chestVehicleDestroyed(arg0: DamageSource_, arg1: Internal.Level_, arg2: Internal.Entity_): void;
        abstract getDisplayName(): Internal.Component;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        abstract getItemStacks(): Internal.NonNullList<Internal.ItemStack>;
        abstract createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        removeChestVehicleItem(arg0: number, arg1: number): Internal.ItemStack;
        getChestVehicleItem(arg0: number): Internal.ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        readChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        removeChestVehicleItemNoUpdate(arg0: number): Internal.ItemStack;
        abstract getLootTableSeed(): number;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract getLootTable(): ResourceLocation;
        setChestVehicleItem(arg0: number, arg1: Internal.ItemStack_): void;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract stillValid(arg0: Internal.Player_): boolean;
        abstract level(): Internal.Level;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        abstract clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        set lootTableSeed(arg0: number)
        get chestVehicleEmpty(): boolean
        get slots(): number
        get removed(): boolean
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        set lootTable(arg0: ResourceLocation_)
        get displayName(): Internal.Component
        get empty(): boolean
        get itemStacks(): Internal.NonNullList<Internal.ItemStack>
        get height(): number
        get lootTableSeed(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get lootTable(): ResourceLocation
        get mutable(): boolean
    }
    type ContainerEntity_ = ContainerEntity;
    class BlockIgnoreProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.List_<Internal.Block>)
        static readonly AIR: Internal.BlockIgnoreProcessor;
        static readonly STRUCTURE_BLOCK: Internal.BlockIgnoreProcessor;
        static readonly CODEC: Internal.Codec<Internal.BlockIgnoreProcessor>;
        static readonly STRUCTURE_AND_AIR: Internal.BlockIgnoreProcessor;
    }
    type BlockIgnoreProcessor_ = BlockIgnoreProcessor;
    class ForgeFaceData extends Internal.Record {
        constructor(color: number, blockLight: number, skyLight: number, ambientOcclusion: boolean)
        static read(arg0: Internal.JsonElement_, arg1: Internal.ForgeFaceData_): Internal.ForgeFaceData;
        ambientOcclusion(): boolean;
        color(): number;
        skyLight(): number;
        blockLight(): number;
        static readonly CODEC: Internal.Codec<Internal.ForgeFaceData>;
        static readonly DEFAULT: Internal.ForgeFaceData;
        static readonly COLOR: Internal.Codec<number>;
    }
    type ForgeFaceData_ = ForgeFaceData;
    interface BlockAccessor {
        abstract puzzleslib$setItem(arg0: Internal.Item_): void;
        (arg0: Internal.Item): void;
    }
    type BlockAccessor_ = BlockAccessor;
    class MapDecoration {
        constructor(arg0: Internal.MapDecoration$Type_, arg1: number, arg2: number, arg3: number, arg4: Internal.Component_)
        getX(): number;
        getRot(): number;
        getName(): Internal.Component;
        renderOnFrame(): boolean;
        getImage(): number;
        getType(): Internal.MapDecoration$Type;
        render(arg0: number): boolean;
        getY(): number;
        get x(): number
        get rot(): number
        get name(): Internal.Component
        get image(): number
        get type(): Internal.MapDecoration$Type
        get y(): number
    }
    type MapDecoration_ = MapDecoration;
    class ServerboundKeepAlivePacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getId(): number;
        isSkippable(): boolean;
        get id(): number
        get skippable(): boolean
    }
    type ServerboundKeepAlivePacket_ = ServerboundKeepAlivePacket;
    class PooledByteBufAllocator extends Internal.AbstractByteBufAllocator implements Internal.ByteBufAllocatorMetricProvider {
        constructor()
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number)
        constructor(arg0: boolean)
        pinnedDirectMemory(): number;
        /**
         * @deprecated
        */
        numDirectArenas(): number;
        static defaultNumDirectArena(): number;
        /**
         * @deprecated
        */
        freeThreadLocalCache(): void;
        /**
         * @deprecated
        */
        tinyCacheSize(): number;
        static defaultSmallCacheSize(): number;
        static defaultUseCacheForAllThreads(): boolean;
        /**
         * @deprecated
        */
        normalCacheSize(): number;
        static defaultPageSize(): number;
        static defaultMaxOrder(): number;
        /**
         * @deprecated
        */
        hasThreadLocalCache(): boolean;
        /**
         * @deprecated
        */
        directArenas(): Internal.List<Internal.PoolArenaMetric>;
        /**
         * @deprecated
        */
        numHeapArenas(): number;
        /**
         * @deprecated
        */
        smallCacheSize(): number;
        /**
         * @deprecated
        */
        static defaultTinyCacheSize(): number;
        static isDirectMemoryCacheAlignmentSupported(): boolean;
        /**
         * @deprecated
        */
        heapArenas(): Internal.List<Internal.PoolArenaMetric>;
        static defaultNumHeapArena(): number;
        static defaultPreferDirect(): boolean;
        pinnedHeapMemory(): number;
        /**
         * @deprecated
        */
        chunkSize(): number;
        static defaultNormalCacheSize(): number;
        trimCurrentThreadCache(): boolean;
        /**
         * @deprecated
        */
        numThreadLocalCaches(): number;
        metric(): Internal.PooledByteBufAllocatorMetric;
        dumpStats(): string;
        get directMemoryCacheAlignmentSupported(): boolean
        static readonly DEFAULT: Internal.PooledByteBufAllocator;
    }
    type PooledByteBufAllocator_ = PooledByteBufAllocator;
    class DimensionDataStorage {
        constructor(arg0: Internal.File_, arg1: Internal.DataFixer_)
        computeIfAbsent<T extends Internal.SavedData>(arg0: Internal.Function_<Internal.CompoundTag, T>, arg1: Internal.Supplier_<T>, arg2: string): T;
        get<T extends Internal.SavedData>(arg0: Internal.Function_<Internal.CompoundTag, T>, arg1: string): T;
        set(arg0: string, arg1: Internal.SavedData_): void;
        readTagFromDisk(arg0: string, arg1: number): Internal.CompoundTag;
        save(): void;
        readonly cache: Internal.Map<string, Internal.SavedData>;
    }
    type DimensionDataStorage_ = DimensionDataStorage;
    interface Int2LongFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntToLongFunction {
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2LongFunction;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2LongFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        getOrDefault(arg0: number, arg1: number): number;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Int2ReferenceFunction<T>;
        containsKey(arg0: number): boolean;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Int2FloatFunction;
        composeInt(arg0: Internal.Int2IntFunction_): this;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Int2DoubleFunction;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Int2ShortFunction;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2LongFunction;
        remove(arg0: number): number;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2LongFunction;
        defaultReturnValue(): number;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Int2CharFunction;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        size(): number;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2LongFunction;
        applyAsLong(arg0: number): number;
        clear(): void;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2LongFunction;
        abstract get(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2LongFunction<T>;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Int2ObjectFunction<T>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Int2ByteFunction;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2LongFunction;
        (arg0: number): number;
    }
    type Int2LongFunction_ = Int2LongFunction;
    class ViewportEvent$RenderFog extends Internal.ViewportEvent {
        constructor()
        constructor(arg0: Internal.FogRenderer$FogMode_, arg1: Internal.FogType_, arg2: Internal.Camera_, arg3: number, arg4: number, arg5: number, arg6: Internal.FogShape_)
        scaleFarPlaneDistance(arg0: number): void;
        getNearPlaneDistance(): number;
        getMode(): Internal.FogRenderer$FogMode;
        getType(): Internal.FogType;
        getFogShape(): Internal.FogShape;
        setFogShape(arg0: Internal.FogShape_): void;
        scaleNearPlaneDistance(arg0: number): void;
        setFarPlaneDistance(arg0: number): void;
        setNearPlaneDistance(arg0: number): void;
        getFarPlaneDistance(): number;
        get nearPlaneDistance(): number
        get mode(): Internal.FogRenderer$FogMode
        get type(): Internal.FogType
        get fogShape(): Internal.FogShape
        set fogShape(arg0: Internal.FogShape_)
        set farPlaneDistance(arg0: number)
        set nearPlaneDistance(arg0: number)
        get farPlaneDistance(): number
    }
    type ViewportEvent$RenderFog_ = ViewportEvent$RenderFog;
    class RecipesEventJS extends Internal.EventJS {
        constructor()
        findRecipes(filter: Internal.RecipeFilter_): Internal.Collection<Internal.RecipeJS>;
        printAllTypes(): void;
        customFilter(filter: Internal.Predicate_<Internal.RecipeKJS>): Internal.RecipeFilter;
        custom(json: Internal.JsonObject_): Internal.RecipeJS;
        static runInParallel<T>(callable: Internal.Callable_<T>): T;
        printExamples(type: string): void;
        addRecipe(r: Internal.RecipeJS_, json: boolean): Internal.RecipeJS;
        stage(filter: Internal.RecipeFilter_, stage: string): void;
        getRecipes(): Special.DocumentedRecipes;
        replaceOutput(filter: Internal.RecipeFilter_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): void;
        printTypes(): void;
        takeId(recipe: Internal.RecipeJS_, prefix: string, ids: string): ResourceLocation;
        remove(filter: Internal.RecipeFilter_): void;
        forEachRecipe(filter: Internal.RecipeFilter_, consumer: Internal.Consumer_<Internal.RecipeJS>): void;
        findRecipeIds(filter: Internal.RecipeFilter_): Internal.Collection<ResourceLocation>;
        getRecipes(): Special.DocumentedRecipes;
        countRecipes(filter: Internal.RecipeFilter_): number;
        getRecipeFunction(id: string): Internal.RecipeTypeFunction;
        recipeStream(filter: Internal.RecipeFilter_): Internal.Stream<Internal.RecipeJS>;
        containsRecipe(filter: Internal.RecipeFilter_): boolean;
        replaceInput(filter: Internal.RecipeFilter_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): void;
        setItemErrors(b: boolean): void;
        custom(o: {type: Special.RecipeSerializer}): Internal.RecipeJS;
        static runInParallel(runnable: Internal.Runnable_): void;
        get recipes(): Special.DocumentedRecipes
        get recipes(): Special.DocumentedRecipes
        set itemErrors(b: boolean)
        readonly smithing: Internal.RecipeTypeFunction;
        readonly addedRecipes: Internal.Collection<Internal.RecipeJS>;
        readonly shapeless: Internal.RecipeTypeFunction;
        readonly smithingTrim: Internal.RecipeTypeFunction;
        readonly smelting: Internal.RecipeTypeFunction;
        readonly blasting: Internal.RecipeTypeFunction;
        readonly stonecutting: Internal.RecipeTypeFunction;
        readonly smoking: Internal.RecipeTypeFunction;
        readonly campfireCooking: Internal.RecipeTypeFunction;
        static readonly SKIP_ERROR: Internal.Pattern;
        readonly failedCount: Internal.AtomicInteger;
        readonly takenIds: Internal.Map<ResourceLocation, Internal.RecipeJS>;
        readonly originalRecipes: Internal.Map<ResourceLocation, Internal.RecipeJS>;
        readonly shaped: Internal.RecipeTypeFunction;
    }
    type RecipesEventJS_ = RecipesEventJS;
    class DynamicCommandExceptionType implements Internal.CommandExceptionType {
        constructor(arg0: Internal.Function_<any, com.mojang.brigadier.Message>)
        createWithContext(arg0: Internal.ImmutableStringReader_, arg1: any): Internal.CommandSyntaxException;
        create(arg0: any): Internal.CommandSyntaxException;
    }
    type DynamicCommandExceptionType_ = DynamicCommandExceptionType;
    interface MenuRegistry$ScreenFactory <H extends Internal.AbstractContainerMenu, S extends Internal.Screen & Internal.MenuAccess<H>> {
        abstract create(arg0: H, arg1: Internal.Inventory_, arg2: Internal.Component_): S;
        (arg0: H, arg1: Internal.Inventory, arg2: Internal.Component): S;
    }
    type MenuRegistry$ScreenFactory_<H extends Internal.AbstractContainerMenu, S extends Internal.Screen & Internal.MenuAccess<H>> = MenuRegistry$ScreenFactory<H, S>;
    class StuffedHoglinBlock extends Internal.HorizontalDirectionalBlock {
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
        static getBlockType(arg0: Internal.BlockState_): Internal.DoubleBlockCombiner$BlockType;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
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
        static readonly PART: Internal.EnumProperty<Internal.BedPart>;
        static readonly SERVINGS: Internal.IntegerProperty;
    }
    type StuffedHoglinBlock_ = StuffedHoglinBlock;
    abstract class ClientboundMoveEntityPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        handle(arg0: Internal.PacketListener_): void;
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        getxRot(): number;
        getyRot(): number;
        getEntity(arg0: Internal.Level_): Internal.Entity;
        hasPosition(): boolean;
        isSkippable(): boolean;
        getXa(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getZa(): number;
        getYa(): number;
        hasRotation(): boolean;
        isOnGround(): boolean;
        get xRot(): number
        get yRot(): number
        get skippable(): boolean
        get xa(): number
        get za(): number
        get ya(): number
        get onGround(): boolean
    }
    type ClientboundMoveEntityPacket_ = ClientboundMoveEntityPacket;
    interface BlockStateKJS {
        setRequiresTool(v: boolean): void;
        setDestroySpeed(v: number): void;
        setLightEmission(v: number): void;
        set requiresTool(v: boolean)
        set destroySpeed(v: number)
        set lightEmission(v: number)
    }
    type BlockStateKJS_ = BlockStateKJS;
    class BlockEvent$BreakEvent extends Internal.BlockEvent {
        constructor()
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_)
        getExpToDrop(): number;
        getPlayer(): Internal.Player;
        setExpToDrop(arg0: number): void;
        get expToDrop(): number
        get player(): Internal.Player
        set expToDrop(arg0: number)
    }
    type BlockEvent$BreakEvent_ = BlockEvent$BreakEvent;
    class Heightmap$Types extends Internal.Enum<Internal.Heightmap$Types> implements Internal.StringRepresentable {
        static values(): Internal.Heightmap$Types[];
        isOpaque(): Internal.Predicate<Internal.BlockState>;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        keepAfterWorldgen(): boolean;
        getSerializedName(): string;
        getSerializationKey(): string;
        static valueOf(arg0: string): Internal.Heightmap$Types;
        sendToClient(): boolean;
        get serializedName(): string
        get serializationKey(): string
        static readonly OCEAN_FLOOR: Internal.Heightmap$Types;
        static readonly MOTION_BLOCKING_NO_LEAVES: Internal.Heightmap$Types;
        static readonly CODEC: Internal.Codec<Internal.Heightmap$Types>;
        static readonly MOTION_BLOCKING: Internal.Heightmap$Types;
        static readonly WORLD_SURFACE: Internal.Heightmap$Types;
        static readonly WORLD_SURFACE_WG: Internal.Heightmap$Types;
        static readonly OCEAN_FLOOR_WG: Internal.Heightmap$Types;
    }
    type Heightmap$Types_ = "motion_blocking_no_leaves" | "ocean_floor" | "motion_blocking" | "world_surface" | Heightmap$Types | "world_surface_wg" | "ocean_floor_wg";
    class GaugeShaper extends Internal.VoxelShaper {
        constructor()
        get(arg0: Internal.Direction_, arg1: boolean): Internal.VoxelShape;
    }
    type GaugeShaper_ = GaugeShaper;
    interface ServerFunctionManager$TraceCallbacks {
        abstract onCommand(arg0: number, arg1: string): void;
        abstract onReturn(arg0: number, arg1: string, arg2: number): void;
        abstract onCall(arg0: number, arg1: ResourceLocation_, arg2: number): void;
        abstract onError(arg0: number, arg1: string): void;
    }
    type ServerFunctionManager$TraceCallbacks_ = ServerFunctionManager$TraceCallbacks;
    interface TickablePacketListener extends Internal.PacketListener {
        abstract isAcceptingMessages(): boolean;
        abstract onDisconnect(arg0: Internal.Component_): void;
        abstract tick(): void;
        shouldPropagateHandlingExceptions(): boolean;
        get acceptingMessages(): boolean
    }
    type TickablePacketListener_ = TickablePacketListener;
    class LevelChunk extends Internal.ChunkAccess implements Internal.ICapabilityProviderImpl<Internal.LevelChunk> {
        constructor(arg0: Internal.Level_, arg1: Internal.ChunkPos_)
        constructor(arg0: Internal.ServerLevel_, arg1: Internal.ProtoChunk_, arg2: any_)
        constructor(arg0: Internal.Level_, arg1: Internal.ChunkPos_, arg2: Internal.UpgradeData_, arg3: Internal.LevelChunkTicks_<Internal.Block>, arg4: Internal.LevelChunkTicks_<Internal.Fluid>, arg5: number, arg6: Internal.LevelChunkSection_[], arg7: any_, arg8: Internal.BlendingData_)
        clearAllBlockEntities(): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.LevelChunk>): boolean;
        getMinSection(): number;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getMaxSection(): number;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        setLoaded(arg0: boolean): void;
        getSectionYFromSectionIndex(arg0: number): number;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getFluidState(arg0: number, arg1: number, arg2: number): Internal.FluidState;
        invalidateCaps(): void;
        addAndRegisterBlockEntity(arg0: Internal.BlockEntity_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        replaceWithPacketData(arg0: Internal.FriendlyByteBuf_, arg1: Internal.CompoundTag_, arg2: Internal.Consumer_<Internal.ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        unregisterTickContainerFromLevel(arg0: Internal.ServerLevel_): void;
        getSectionsCount(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        getBlockEntity(arg0: BlockPos_, arg1: Internal.LevelChunk$EntityCreationType_): Internal.BlockEntity;
        getSectionIndex(arg0: number): number;
        isEmpty(): boolean;
        getMaxBuildHeight(): number;
        getLevel(): Internal.Level;
        unpackTicks(arg0: number): void;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        runPostLoad(): void;
        postProcessGeneration(): void;
        /**
         * @deprecated
        */
        readCapsFromNBT(arg0: Internal.CompoundTag_): void;
        getModelDataManager(): Internal.ModelDataManager;
        getFullStatus(): Internal.FullChunkStatus;
        /**
         * @deprecated
        */
        writeCapsToNBT(): Internal.CompoundTag;
        isOutsideBuildHeight(arg0: number): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        getWorldForge(): Internal.Level;
        setFullStatus(arg0: Internal.Supplier_<Internal.FullChunkStatus>): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        registerTickContainerInLevel(arg0: Internal.ServerLevel_): void;
        replaceBiomes(arg0: Internal.FriendlyByteBuf_): void;
        getBlockEntities(): Internal.Map<BlockPos, Internal.BlockEntity>;
        getMaxLightLevel(): number;
        reviveCaps(): void;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        set loaded(arg0: boolean)
        get sectionsCount(): number
        get empty(): boolean
        get maxBuildHeight(): number
        get level(): Internal.Level
        get modelDataManager(): Internal.ModelDataManager
        get fullStatus(): Internal.FullChunkStatus
        get worldForge(): Internal.Level
        set fullStatus(arg0: Internal.Supplier_<Internal.FullChunkStatus>)
        get blockEntities(): Internal.Map<BlockPos, Internal.BlockEntity>
        get maxLightLevel(): number
    }
    type LevelChunk_ = LevelChunk;
    interface DensityFunctions$PureTransformer extends Internal.DensityFunction {
        abs(): Internal.DensityFunction;
        halfNegative(): Internal.DensityFunction;
        abstract maxValue(): number;
        abstract codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        abstract transform(arg0: number): number;
        square(): Internal.DensityFunction;
        abstract mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        cube(): Internal.DensityFunction;
        fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        abstract input(): Internal.DensityFunction;
        abstract minValue(): number;
    }
    type DensityFunctions$PureTransformer_ = DensityFunctions$PureTransformer;
    class SugarCubeItem extends Internal.BlockItem {
        constructor(block: Internal.Block_, properties: Internal.Item$Properties_)
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
    type SugarCubeItem_ = SugarCubeItem;
    class AnimationFrame {
        constructor(arg0: number, arg1: number)
        constructor(arg0: number)
        getTime(arg0: number): number;
        getIndex(): number;
        get index(): number
        static readonly UNKNOWN_FRAME_TIME: -1;
    }
    type AnimationFrame_ = AnimationFrame;
    class Direction$Plane extends Internal.Enum<Internal.Direction$Plane> implements Internal.Predicate<Internal.Direction>, Internal.Iterable<Internal.Direction> {
        stream(): Internal.Stream<Internal.Direction>;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        or(arg0: Internal.Predicate_<Internal.Direction>): Internal.Predicate<Internal.Direction>;
        spliterator(): Internal.Spliterator<Internal.Direction>;
        and(arg0: Internal.Predicate_<Internal.Direction>): Internal.Predicate<Internal.Direction>;
        getRandomAxis(arg0: Internal.RandomSource_): Internal.Direction$Axis;
        static values(): Internal.Direction$Plane[];
        iterator(): Internal.Iterator<Internal.Direction>;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        test(arg0: any): boolean;
        forEach(arg0: Internal.Consumer_<Internal.Direction>): void;
        getRandomDirection(arg0: Internal.RandomSource_): Internal.Direction;
        test(arg0: Internal.Direction_): boolean;
        static valueOf(arg0: string): Internal.Direction$Plane;
        shuffledCopy(arg0: Internal.RandomSource_): Internal.List<Internal.Direction>;
        negate(): Internal.Predicate<Internal.Direction>;
        static readonly HORIZONTAL: Internal.Direction$Plane;
        static readonly VERTICAL: Internal.Direction$Plane;
    }
    type Direction$Plane_ = Direction$Plane | "vertical" | "horizontal";
    class User$Type extends Internal.Enum<Internal.User$Type> {
        getName(): string;
        static valueOf(arg0: string): Internal.User$Type;
        static byName(arg0: string): Internal.User$Type;
        static values(): Internal.User$Type[];
        get name(): string
        static readonly LEGACY: Internal.User$Type;
        static readonly MSA: Internal.User$Type;
        static readonly MOJANG: Internal.User$Type;
    }
    type User$Type_ = User$Type | "mojang" | "msa" | "legacy";
    class MutableHashedLinkedMap <K, V> implements Internal.Iterable<Internal.Map$Entry<K, V>> {
        constructor(arg0: Internal.Hash$Strategy_<K>, arg1: any_<K, V>)
        constructor()
        constructor(arg0: Internal.Hash$Strategy_<K>)
        spliterator(): Internal.Spliterator<Internal.Map$Entry<K, V>>;
        put(arg0: K, arg1: V): V;
        putFirst(arg0: K, arg1: V): V;
        get(arg0: K): V;
        iterator(): Internal.Iterator<Internal.Map$Entry<K, V>>;
        contains(arg0: K): boolean;
        isEmpty(): boolean;
        putAfter(arg0: K, arg1: K, arg2: V): V;
        putBefore(arg0: K, arg1: K, arg2: V): V;
        forEach(arg0: Internal.Consumer_<Internal.Map$Entry<K, V>>): void;
        remove(arg0: K): V;
        get empty(): boolean
        static readonly IDENTITY: Internal.MutableHashedLinkedMap$IdentityStrategy;
        static readonly BASIC: Internal.MutableHashedLinkedMap$BasicStrategy;
    }
    type MutableHashedLinkedMap_<K, V> = MutableHashedLinkedMap<K, V>;
    class CookingPotRecipe$Serializer implements Internal.RecipeSerializer<Internal.CookingPotRecipe> {
        constructor()
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.CookingPotRecipe;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.CookingPotRecipe_): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.CookingPotRecipe;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.CookingPotRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type CookingPotRecipe$Serializer_ = CookingPotRecipe$Serializer;
    class EnchantmentTableBlockEntity extends Internal.BlockEntity implements Internal.Nameable {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        getDisplayName(): Internal.Component;
        getName(): Internal.Component;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        static bookAnimationTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.EnchantmentTableBlockEntity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getCustomName(): Internal.Component;
        getRenderBoundingBox(): Internal.AABB;
        get displayName(): Internal.Component
        get name(): Internal.Component
        set customName(arg0: Internal.Component_)
        get modelData(): Internal.ModelData
        get customName(): Internal.Component
        get renderBoundingBox(): Internal.AABB
        rot: number;
        tRot: number;
        open: number;
        flipT: number;
        oOpen: number;
        time: number;
        oFlip: number;
        oRot: number;
        flipA: number;
        flip: number;
    }
    type EnchantmentTableBlockEntity_ = EnchantmentTableBlockEntity;
    class Gui {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.ItemRenderer_)
        renderSelectedItemName(arg0: Internal.GuiGraphics_): void;
        renderVignette(arg0: Internal.GuiGraphics_, arg1: Internal.Entity_): void;
        setTimes(arg0: number, arg1: number, arg2: number): void;
        getBossOverlay(): Internal.BossHealthOverlay;
        handler$zod000$renderExperienceBar$1(arg0: Internal.GuiGraphics_, arg1: number, arg2: Internal.CallbackInfo_): void;
        handler$zod000$renderExperienceBar$0(arg0: Internal.GuiGraphics_, arg1: number, arg2: Internal.CallbackInfo_): void;
        renderHotbar(arg0: number, arg1: Internal.GuiGraphics_): void;
        setSubtitle(arg0: Internal.Component_): void;
        renderDemoOverlay(arg0: Internal.GuiGraphics_): void;
        setOverlayMessage(arg0: Internal.Component_, arg1: boolean): void;
        onDisconnected(): void;
        isShowingChatDisabledByPlayer(): boolean;
        getChat(): Internal.ChatComponent;
        clearCache(): void;
        renderSpyglassOverlay(arg0: Internal.GuiGraphics_, arg1: number): void;
        displayScoreboardSidebar(arg0: Internal.GuiGraphics_, arg1: Internal.Objective_): void;
        renderCrosshair(arg0: Internal.GuiGraphics_): void;
        renderExperienceBar(arg0: Internal.GuiGraphics_, arg1: number): void;
        render(arg0: Internal.GuiGraphics_, arg1: number): void;
        getSpectatorGui(): Internal.SpectatorGui;
        renderJumpMeter(arg0: Internal.PlayerRideableJumping_, arg1: Internal.GuiGraphics_, arg2: number): void;
        renderSelectedItemName(arg0: Internal.GuiGraphics_, arg1: number): void;
        getFont(): Internal.Font;
        getGuiTicks(): number;
        setNowPlaying(arg0: Internal.Component_): void;
        setTitle(arg0: Internal.Component_): void;
        clear(): void;
        tick(arg0: boolean): void;
        setChatDisabledByPlayerShown(arg0: boolean): void;
        resetTitleTimes(): void;
        getTabList(): Internal.PlayerTabOverlay;
        renderEffects(arg0: Internal.GuiGraphics_): void;
        get bossOverlay(): Internal.BossHealthOverlay
        set subtitle(arg0: Internal.Component_)
        get showingChatDisabledByPlayer(): boolean
        get chat(): Internal.ChatComponent
        get spectatorGui(): Internal.SpectatorGui
        get font(): Internal.Font
        get guiTicks(): number
        set nowPlaying(arg0: Internal.Component_)
        set title(arg0: Internal.Component_)
        set chatDisabledByPlayerShown(arg0: boolean)
        get tabList(): Internal.PlayerTabOverlay
        vignetteBrightness: number;
    }
    type Gui_ = Gui;
    interface UserPrincipal extends Internal.Principal {
        abstract hashCode(): number;
        abstract toString(): string;
        abstract getName(): string;
        abstract equals(arg0: any): boolean;
        implies(arg0: Internal.Subject_): boolean;
        get name(): string
    }
    type UserPrincipal_ = UserPrincipal;
    class RedstoneWallTorchBlock extends Internal.RedstoneTorchBlock {
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
        static readonly FACING: Internal.DirectionProperty;
        static readonly LIT: Internal.BooleanProperty;
    }
    type RedstoneWallTorchBlock_ = RedstoneWallTorchBlock;
    class DigDurabilityEnchantment extends Internal.Enchantment {
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        static shouldIgnoreDurabilityDrop(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.RandomSource_): boolean;
    }
    type DigDurabilityEnchantment_ = DigDurabilityEnchantment;
    interface LevelSimulatedReader {
        abstract getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        abstract isFluidAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.FluidState>): boolean;
        abstract isStateAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.BlockState>): boolean;
        abstract getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
    }
    type LevelSimulatedReader_ = LevelSimulatedReader;
    class ScreenEvent$MouseButtonReleased$Post extends Internal.ScreenEvent$MouseButtonReleased {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: boolean)
        wasHandled(): boolean;
    }
    type ScreenEvent$MouseButtonReleased$Post_ = ScreenEvent$MouseButtonReleased$Post;
    class Turtle extends Internal.Animal {
        constructor(arg0: Internal.EntityType_<Internal.Turtle>, arg1: Internal.Level_)
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
        isLayingEgg(): boolean;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        static checkTurtleSpawnRules(arg0: Internal.EntityType_<Internal.Turtle>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
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
        setHomePos(arg0: BlockPos_): void;
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
        hasEgg(): boolean;
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
        get layingEgg(): boolean
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
        set homePos(arg0: BlockPos_)
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
        static readonly BABY_ON_LAND_SELECTOR: Internal.Predicate<Internal.LivingEntity>;
        static readonly FOOD_ITEMS: Internal.Ingredient;
    }
    type Turtle_ = Turtle;
    class MetalLadderBlock extends Internal.LadderBlock implements Internal.IWrenchable {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
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
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type MetalLadderBlock_ = MetalLadderBlock;
    class ArrayRecipeComponent <T> extends Internal.Record implements Internal.RecipeComponent<T[]> {
        constructor(component: Internal.RecipeComponent_<T>, canWriteSelf: boolean, arrayClass: typeof any, emptyArray: T[])
        addAll(array: T[], ...values: T[]): T[];
        replaceOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.OutputReplacement_): any;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<T[]>;
        arrayClass(): typeof any;
        key(name: string): Internal.RecipeKey<T[]>;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T[]>, map: Internal.Map_<any, any>): void;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, T[]>>;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T[]>, json: Internal.JsonObject_): void;
        isInput(recipe: Internal.RecipeJS_, value: T[], match: Internal.ReplacementMatch_): boolean;
        orSelf(): Internal.RecipeComponent<T[]>;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        component(): Internal.RecipeComponent<T>;
        replaceOutput(recipe: Internal.RecipeJS_, original: T[], match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): T[];
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T[]>;
        add(array: T[], value: T): T[];
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        remove(array: T[], index: number): T[];
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, T[]>>;
        componentType(): string;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<T[], O>;
        newArray(length: number): T[];
        replaceInput(recipe: Internal.RecipeJS_, original: T[], match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): T[];
        static builder(): Internal.RecipeComponentBuilder;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<T[], O>;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        emptyArray(): T[];
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<T[]>;
        isOutput(recipe: Internal.RecipeJS_, value: T[], match: Internal.ReplacementMatch_): boolean;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<T[]>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T[]>, json: Internal.JsonObject_): void;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T[]>;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        replaceInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.InputReplacement_): any;
        checkEmpty(key: Internal.RecipeKey_<T[]>, value: T[]): string;
        checkValueHasChanged(oldValue: T[], newValue: T[]): boolean;
        write(recipe: Internal.RecipeJS_, value: T[]): Internal.JsonElement;
        canWriteSelf(): boolean;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        asArray(): Internal.ArrayRecipeComponent<T[]>;
    }
    type ArrayRecipeComponent_<T> = ArrayRecipeComponent<T>;
    interface SerializableTickContainer <T> {
        abstract save(arg0: number, arg1: Internal.Function_<T, string>): Internal.Tag;
        (arg0: number, arg1: Internal.Function<T, string>): Internal.Tag_;
    }
    type SerializableTickContainer_<T> = SerializableTickContainer<T>;
    class FlintBlock extends Internal.Block implements Internal.IPistonMotionReact {
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
        moveTick(movedState: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, aabb: Internal.AABB_, tile: Internal.PistonMovingBlockEntity_): void;
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
        static canBlockCreateSpark(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, face: Internal.Direction_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        ticksWhileMoved(): boolean;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        onMoved(movedState: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, direction: Internal.Direction_, extending: boolean, tile: Internal.PistonMovingBlockEntity_): void;
        onMagnetMoved(level: Internal.Level_, blockPos: BlockPos_, direction: Internal.Direction_, blockState: Internal.BlockState_, blockEntity: Internal.BlockEntity_): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type FlintBlock_ = FlintBlock;
    abstract class AbstractIntSet extends Internal.AbstractIntCollection implements Internal.Cloneable, Internal.IntSet {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        static of(arg0: number, arg1: number): Internal.IntSet;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        static of(): Internal.IntSet;
        forEach(arg0: Internal.IntConsumer_): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        static of(arg0: number, arg1: number, arg2: number): Internal.IntSet;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        intParallelStream(): Internal.IntStream;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        spliterator(): Internal.IntSpliterator;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        intIterator(): Internal.IntIterator;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        remove(arg0: number): boolean;
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
        static of(arg0: number): Internal.IntSet;
        intSpliterator(): Internal.IntSpliterator;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        static of(...arg0: number[]): Internal.IntSet;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
    }
    type AbstractIntSet_ = AbstractIntSet;
    class LargeFireball extends Internal.Fireball {
        constructor(arg0: Internal.EntityType_<Internal.LargeFireball>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number, arg5: number)
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
    type LargeFireball_ = LargeFireball;
    interface TStack <Self> {
        abstract pushPose(): Self;
        abstract popPose(): Self;
    }
    type TStack_<Self> = TStack<Self>;
    interface ShortList extends Internal.ShortCollection, Internal.List<number>, Internal.Comparable<Internal.List<number>> {
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        sort(arg0: Internal.ShortComparator_): void;
        abstract addAll(arg0: number, arg1: Internal.ShortCollection_): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        forEach(arg0: Internal.ShortConsumer_): void;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        /**
         * @deprecated
        */
        add(arg0: number, arg1: any): void;
        of<E>(arg0: E): Internal.List<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        intParallelStream(): Internal.IntStream;
        replaceAll(arg0: Internal.ShortUnaryOperator_): void;
        intIterator(): Internal.IntIterator;
        abstract set(arg0: number, arg1: number): number;
        listIterator(): Internal.ListIterator<any>;
        abstract add(arg0: number, arg1: number): void;
        abstract size(arg0: number): void;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        of(arg0: number, arg1: number, arg2: number): this;
        addAll(arg0: number, arg1: Internal.ShortList_): boolean;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        indexOf(arg0: any): number;
        spliterator(): Internal.ShortSpliterator;
        abstract toArray<T>(arg0: T[]): T[];
        of(arg0: number): this;
        abstract removeShort(arg0: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        abstract addAll(arg0: Internal.ShortCollection_): boolean;
        abstract retainAll(arg0: Internal.ShortCollection_): boolean;
        abstract getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        unstableSort(arg0: Internal.ShortComparator_): void;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        abstract addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        of<E>(arg0: E, arg1: E): Internal.List<E>;
        addAll(arg0: Internal.ShortList_): boolean;
        abstract indexOf(arg0: number): number;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract iterator(): Internal.ShortListIterator;
        abstract addElements(arg0: number, arg1: number[]): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        /**
         * @deprecated
        */
        set(arg0: number, arg1: any): any;
        /**
         * @deprecated
        */
        lastIndexOf(arg0: any): number;
        abstract containsAll(arg0: Internal.ShortCollection_): boolean;
        abstract removeElements(arg0: number, arg1: number): void;
        abstract add(arg0: number): boolean;
        /**
         * @deprecated
        */
        remove(arg0: number): any;
        abstract listIterator(arg0: number): Internal.ShortListIterator;
        setElements(arg0: number, arg1: number[]): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        abstract removeAll(arg0: Internal.ShortCollection_): boolean;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        abstract isEmpty(): boolean;
        abstract addAll(arg0: number, arg1: Internal.Collection_<number>): boolean;
        forEach(arg0: Internal.IntConsumer_): void;
        abstract getShort(arg0: number): number;
        setElements(arg0: number[]): void;
        of<E>(...arg0: E[]): Internal.List<E>;
        abstract lastIndexOf(arg0: number): number;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        add(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        of(arg0: number, arg1: number): this;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        /**
         * @deprecated
        */
        replaceAll(arg0: Internal.UnaryOperator_<number>): void;
        abstract compareTo(arg0: Internal.List_<number>): number;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        abstract contains(arg0: number): boolean;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        unstableSort(arg0: Internal.Comparator_<number>): void;
        of(...arg0: number[]): this;
        removeIf(arg0: Internal.ShortPredicate_): boolean;
        replaceAll(arg0: Internal.IntUnaryOperator_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        subList(arg0: number, arg1: number): Internal.List<any>;
        abstract hashCode(): number;
        abstract size(): number;
        abstract toShortArray(): number[];
        /**
         * @deprecated
        */
        toShortArray(arg0: number[]): number[];
        abstract clear(): void;
        /**
         * @deprecated
        */
        sort(arg0: Internal.Comparator_<number>): void;
        abstract toArray(arg0: number[]): number[];
        of(): this;
        /**
         * @deprecated
        */
        get(arg0: number): number;
        abstract rem(arg0: number): boolean;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        abstract equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set(arg0: number, arg1: number): number;
        get empty(): boolean
        set elements(arg0: number[])
    }
    type ShortList_ = ShortList;
    class LanguageManager implements Internal.ResourceManagerReloadListener {
        constructor(arg0: string)
        getLanguage(arg0: string): Internal.LanguageInfo;
        getSelected(): string;
        setSelected(arg0: string): void;
        getName(): string;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        getJavaLocale(): Internal.Locale;
        getLanguages(): Internal.SortedMap<string, Internal.LanguageInfo>;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get selected(): string
        set selected(arg0: string)
        get name(): string
        get javaLocale(): Internal.Locale
        get languages(): Internal.SortedMap<string, Internal.LanguageInfo>
        static readonly DEFAULT_LANGUAGE_CODE: "en_us";
    }
    type LanguageManager_ = LanguageManager;
    interface IControlContraption {
        abstract attach(arg0: Internal.ControlledContraptionEntity_): void;
        abstract isValid(): boolean;
        abstract onStall(): void;
        abstract getBlockPosition(): BlockPos;
        abstract isAttachedTo(arg0: Internal.AbstractContraptionEntity_): boolean;
        get valid(): boolean
        get blockPosition(): BlockPos
    }
    type IControlContraption_ = IControlContraption;
    class GiantTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        static readonly CODEC: Internal.Codec<Internal.GiantTrunkPlacer>;
    }
    type GiantTrunkPlacer_ = GiantTrunkPlacer;
    class PlacementPatterns extends Internal.Enum<Internal.PlacementPatterns> {
        static values(): Internal.PlacementPatterns[];
        static valueOf(arg0: string): Internal.PlacementPatterns;
        static applyPattern(arg0: Internal.List_<BlockPos>, arg1: Internal.ItemStack_): void;
        static readonly InverseCheckered: Internal.PlacementPatterns;
        static readonly Chance50: Internal.PlacementPatterns;
        static readonly Checkered: Internal.PlacementPatterns;
        readonly translationKey: string;
        static readonly Chance25: Internal.PlacementPatterns;
        readonly icon: Internal.AllIcons;
        static readonly Chance75: Internal.PlacementPatterns;
        static readonly Solid: Internal.PlacementPatterns;
    }
    type PlacementPatterns_ = "inversecheckered" | "chance50" | "solid" | "chance75" | "chance25" | PlacementPatterns | "checkered";
    interface IForgeAbstractMinecart {
        abstract setCanUseRail(arg0: boolean): void;
        isPoweredCart(): boolean;
        abstract setMaxSpeedAirLateral(arg0: number): void;
        getMaxCartSpeedOnRail(): number;
        getCurrentRailPosition(): BlockPos;
        abstract getDragAir(): number;
        abstract getMaxSpeedAirLateral(): number;
        abstract setCurrentCartSpeedCapOnRail(arg0: number): void;
        abstract getCurrentCartSpeedCapOnRail(): number;
        getSlopeAdjustment(): number;
        abstract setDragAir(arg0: number): void;
        abstract setMaxSpeedAirVertical(arg0: number): void;
        shouldDoRailFunctions(): boolean;
        abstract moveMinecartOnRail(arg0: BlockPos_): void;
        abstract getMaxSpeedAirVertical(): number;
        canBeRidden(): boolean;
        getComparatorLevel(): number;
        abstract getMaxSpeedWithRail(): number;
        abstract canUseRail(): boolean;
        set canUseRail(arg0: boolean)
        get poweredCart(): boolean
        set maxSpeedAirLateral(arg0: number)
        get maxCartSpeedOnRail(): number
        get currentRailPosition(): BlockPos
        get dragAir(): number
        get maxSpeedAirLateral(): number
        set currentCartSpeedCapOnRail(arg0: number)
        get currentCartSpeedCapOnRail(): number
        get slopeAdjustment(): number
        set dragAir(arg0: number)
        set maxSpeedAirVertical(arg0: number)
        get maxSpeedAirVertical(): number
        get comparatorLevel(): number
        get maxSpeedWithRail(): number
        readonly DEFAULT_MAX_SPEED_AIR_VERTICAL: -1.0;
        readonly DEFAULT_MAX_SPEED_AIR_LATERAL: 0.4;
        readonly DEFAULT_AIR_DRAG: 0.949999988079071;
    }
    type IForgeAbstractMinecart_ = IForgeAbstractMinecart;
    /**
     * Invoked when a player gets an advancement.
    */
    class PlayerAdvancementEventJS extends Internal.PlayerEventJS {
        constructor(player: Internal.ServerPlayer_, advancement: Internal.Advancement_)
        /**
         * Returns the advancement that was obtained.
        */
        getAdvancement(): Internal.AdvancementJS;
        /**
         * Returns the player that got the advancement.
        */
        getEntity(): Internal.LivingEntity;
        /**
         * Returns the advancement that was obtained.
        */
        get advancement(): Internal.AdvancementJS
        /**
         * Returns the player that got the advancement.
        */
        get entity(): Internal.LivingEntity
    }
    type PlayerAdvancementEventJS_ = PlayerAdvancementEventJS;
    class DimensionType$MonsterSettings extends Internal.Record {
        constructor(arg0: boolean, arg1: boolean, arg2: Internal.IntProvider_, arg3: number)
        hasRaids(): boolean;
        monsterSpawnBlockLightLimit(): number;
        piglinSafe(): boolean;
        monsterSpawnLightTest(): Internal.IntProvider;
        static readonly CODEC: Internal.MapCodec<Internal.DimensionType$MonsterSettings>;
    }
    type DimensionType$MonsterSettings_ = DimensionType$MonsterSettings;
    interface CachedOutput {
        abstract writeIfNeeded(arg0: Internal.Path_, arg1: number[], arg2: Internal.HashCode_): void;
        (arg0: Internal.Path, arg1: number[], arg2: Internal.HashCode): void;
        readonly NO_CACHE: Internal.CachedOutput;
    }
    type CachedOutput_ = CachedOutput;
    class Collector$Characteristics extends Internal.Enum<Internal.Collector$Characteristics> {
        static values(): Internal.Collector$Characteristics[];
        static valueOf(arg0: string): Internal.Collector$Characteristics;
        static readonly CONCURRENT: Internal.Collector$Characteristics;
        static readonly IDENTITY_FINISH: Internal.Collector$Characteristics;
        static readonly UNORDERED: Internal.Collector$Characteristics;
    }
    type Collector$Characteristics_ = Collector$Characteristics | "identity_finish" | "unordered" | "concurrent";
    class ChunkEvent$Load extends Internal.ChunkEvent {
        constructor()
        constructor(arg0: Internal.ChunkAccess_, arg1: boolean)
        isNewChunk(): boolean;
        get newChunk(): boolean
    }
    type ChunkEvent$Load_ = ChunkEvent$Load;
    interface IForgeShearable {
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
    }
    type IForgeShearable_ = IForgeShearable;
    interface Display$FloatInterpolator {
        abstract get(arg0: number): number;
        constant(arg0: number): this;
        (arg0: number): number;
    }
    type Display$FloatInterpolator_ = Display$FloatInterpolator;
    class NetherBrickSmokerBlock extends Internal.SmokerBlock {
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
    type NetherBrickSmokerBlock_ = NetherBrickSmokerBlock;
    interface ServerLevelKJS extends Internal.LevelKJS, Internal.WithPersistentData {
        getDisplayName(): Internal.Component;
        spawnLightning(x: number, y: number, z: number, effectOnly: boolean, player: Internal.ServerPlayer_): void;
        self(): Internal.Level;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        spawnLightning(x: number, y: number, z: number, effectOnly: boolean): void;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        getSide(): Internal.ScriptType;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        getDimension(): ResourceLocation;
        getPersistentData(): Internal.CompoundTag;
        getName(): Internal.Component;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        runCommandSilent(command: string): number;
        tell(message: Internal.Component_): void;
        abstract getData(): Internal.AttachedData<Internal.Level>;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        setStatusMessage(message: Internal.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        isOverworld(): boolean;
        runCommand(command: string): number;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        setTime(time: number): void;
        get displayName(): Internal.Component
        get side(): Internal.ScriptType
        get dimension(): ResourceLocation
        get persistentData(): Internal.CompoundTag
        get name(): Internal.Component
        get entities(): Internal.EntityArrayList
        get data(): Internal.AttachedData<Internal.Level>
        set statusMessage(message: Internal.Component_)
        get players(): Internal.EntityArrayList
        get overworld(): boolean
        set time(time: number)
        (): Internal.AttachedData_<Internal.Level>;
    }
    type ServerLevelKJS_ = ServerLevelKJS;
    class TooltipArea extends Internal.AbstractSimiWidget {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        charTyped(arg0: string, arg1: number): boolean;
        onClick(arg0: number, arg1: number, arg2: number): void;
        withTooltip(arg0: Internal.List_<Internal.Component>): this;
        getCurrentFocusPath(): Internal.ComponentPath;
        setPosition(arg0: number, arg1: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        get currentFocusPath(): Internal.ComponentPath
    }
    type TooltipArea_ = TooltipArea;
    class Provider$Service {
        constructor(arg0: Internal.Provider_, arg1: string, arg2: string, arg3: string, arg4: Internal.List_<string>, arg5: Internal.Map_<string, string>)
        getAlgorithm(): string;
        newInstance(arg0: any): any;
        getAttribute(arg0: string): string;
        getType(): string;
        getClassName(): string;
        supportsParameter(arg0: any): boolean;
        getProvider(): Internal.Provider;
        get algorithm(): string
        get type(): string
        get className(): string
        get provider(): Internal.Provider
    }
    type Provider$Service_ = Provider$Service;
    interface IThirdPersonAnimationProvider {
        abstract poseRightArm<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: Internal.HumanoidModel_<T>, arg2: T, arg3: Internal.HumanoidArm_): boolean;
        isTwoHanded(): boolean;
        attachToItem(target: Internal.Item_, object: Internal.IThirdPersonAnimationProvider_): void;
        get(target: Internal.Item_): this;
        abstract poseLeftArm<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: Internal.HumanoidModel_<T>, arg2: T, arg3: Internal.HumanoidArm_): boolean;
        get twoHanded(): boolean
    }
    type IThirdPersonAnimationProvider_ = IThirdPersonAnimationProvider;
    interface IScalingFunction {
        abstract scaleDamage(arg0: DamageSource_, arg1: Internal.Player_, arg2: number, arg3: Internal.Difficulty_): number;
        (arg0: DamageSource, arg1: Internal.Player, arg2: number, arg3: Internal.Difficulty): number;
        readonly DEFAULT: Internal.IScalingFunction;
    }
    type IScalingFunction_ = IScalingFunction;
    class MillstoneBlockEntity extends Internal.KineticBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        spawnParticles(): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getProcessingSpeed(): number;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
        get processingSpeed(): number
        inputInv: Internal.ItemStackHandler;
        timer: number;
        outputInv: Internal.ItemStackHandler;
        capability: Internal.LazyOptional<Internal.IItemHandler>;
    }
    type MillstoneBlockEntity_ = MillstoneBlockEntity;
    class JsonNull extends Internal.JsonElement {
        constructor()
        deepCopy(): this;
        static readonly INSTANCE: Internal.JsonNull;
    }
    type JsonNull_ = JsonNull;
    class NoiseSettings extends Internal.Record {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getCellHeight(): number;
        noiseSizeVertical(): number;
        clampToHeightAccessor(arg0: Internal.LevelHeightAccessor_): this;
        static create(arg0: number, arg1: number, arg2: number, arg3: number): Internal.NoiseSettings;
        height(): number;
        getCellWidth(): number;
        noiseSizeHorizontal(): number;
        minY(): number;
        get cellHeight(): number
        get cellWidth(): number
        static readonly CODEC: Internal.Codec<Internal.NoiseSettings>;
    }
    type NoiseSettings_ = NoiseSettings;
    class RepairItemRecipe extends Internal.CustomRecipe {
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
    type RepairItemRecipe_ = RepairItemRecipe;
    class MobContainer$MobNBTData$Entity extends Internal.MobContainer$MobNBTData {
        getScale(): number;
        get scale(): number
        readonly mobTag: Internal.CompoundTag;
    }
    type MobContainer$MobNBTData$Entity_ = MobContainer$MobNBTData$Entity;
    interface AudioStream extends Internal.Closeable {
        abstract read(arg0: number): Internal.ByteBuffer;
        abstract close(): void;
        abstract getFormat(): Internal.AudioFormat;
        get format(): Internal.AudioFormat
    }
    type AudioStream_ = AudioStream;
    class LevelResource {
        constructor(arg0: string)
        getId(): string;
        get id(): string
        static readonly PLAYER_OLD_DATA_DIR: Internal.LevelResource;
        static readonly OLD_LEVEL_DATA_FILE: Internal.LevelResource;
        static readonly PLAYER_STATS_DIR: Internal.LevelResource;
        static readonly ROOT: Internal.LevelResource;
        static readonly MAP_RESOURCE_FILE: Internal.LevelResource;
        static readonly GENERATED_DIR: Internal.LevelResource;
        static readonly LOCK_FILE: Internal.LevelResource;
        static readonly LEVEL_DATA_FILE: Internal.LevelResource;
        static readonly ICON_FILE: Internal.LevelResource;
        static readonly PLAYER_ADVANCEMENTS_DIR: Internal.LevelResource;
        static readonly PLAYER_DATA_DIR: Internal.LevelResource;
        static readonly DATAPACK_DIR: Internal.LevelResource;
    }
    type LevelResource_ = LevelResource;
    class FungusBlock extends Internal.BushBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.ResourceKey_<Internal.ConfiguredFeature<any, any>>, arg2: Internal.Block_)
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
    type FungusBlock_ = FungusBlock;
    class WoodlandMansionStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static readonly CODEC: Internal.Codec<Internal.WoodlandMansionStructure>;
    }
    type WoodlandMansionStructure_ = WoodlandMansionStructure;
    class GantryCarriageBlockEntity extends Internal.KineticBlockEntity implements Internal.IDisplayAssemblyExceptions {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        addExceptionToTooltip(arg0: Internal.List_<Internal.Component>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        queueAssembly(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        checkValidGantryShaft(): void;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getLastAssemblyException(): Internal.AssemblyException;
        static getGantryPinionModifier(arg0: Internal.Direction_, arg1: Internal.Direction_): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
        get lastAssemblyException(): Internal.AssemblyException
    }
    type GantryCarriageBlockEntity_ = GantryCarriageBlockEntity;
    interface IFocusFactory {
        abstract createFocus<V>(arg0: Internal.RecipeIngredientRole_, arg1: Internal.ITypedIngredient_<V>): Internal.IFocus<V>;
        abstract createFocusGroup(arg0: Internal.Collection_<Internal.IFocus<any>>): Internal.IFocusGroup;
        abstract getEmptyFocusGroup(): Internal.IFocusGroup;
        abstract createFocus<V>(arg0: Internal.RecipeIngredientRole_, arg1: Internal.IIngredientType_<V>, arg2: V): Internal.IFocus<V>;
        get emptyFocusGroup(): Internal.IFocusGroup
    }
    type IFocusFactory_ = IFocusFactory;
    class Shulker extends Internal.AbstractGolem implements Internal.Enemy, Internal.VariantHolder<Internal.Optional<Internal.DyeColor>> {
        constructor(arg0: Internal.EntityType_<Internal.Shulker>, arg1: Internal.Level_)
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
        getColor(): Internal.DyeColor;
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
        getRenderPosition(arg0: number): Internal.Optional<Vec3d>;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        static getProgressAabb(arg0: Internal.Direction_, arg1: number): Internal.AABB;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getVariant(): any;
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
        getClientPeekAmount(arg0: number): number;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        static getProgressDeltaAabb(arg0: Internal.Direction_, arg1: number, arg2: number): Internal.AABB;
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
        getAttachFace(): Internal.Direction;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setVariant(arg0: Internal.Optional_<Internal.DyeColor>): void;
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
        setVariant(arg0: any): void;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get color(): Internal.DyeColor
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get variant(): any
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
        get attachFace(): Internal.Direction
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        set variant(arg0: Internal.Optional_<Internal.DyeColor>)
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
        set variant(arg0: any)
    }
    type Shulker_ = Shulker;
    class Pointing extends Internal.Enum<Internal.Pointing> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.Pointing;
        getXRotation(): number;
        getCombinedDirection(arg0: Internal.Direction_): Internal.Direction;
        static values(): Internal.Pointing[];
        get serializedName(): string
        get XRotation(): number
        static readonly LEFT: Internal.Pointing;
        static readonly RIGHT: Internal.Pointing;
        static readonly UP: Internal.Pointing;
        static readonly DOWN: Internal.Pointing;
    }
    type Pointing_ = Pointing | "up" | "down" | "right" | "left";
    class SpikeConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: boolean, arg1: Internal.List_<Internal.SpikeFeature$EndSpike>, arg2: BlockPos_)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        getCrystalBeamTarget(): BlockPos;
        getSpikes(): Internal.List<Internal.SpikeFeature$EndSpike>;
        isCrystalInvulnerable(): boolean;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        get crystalBeamTarget(): BlockPos
        get spikes(): Internal.List<Internal.SpikeFeature$EndSpike>
        get crystalInvulnerable(): boolean
        static readonly CODEC: Internal.Codec<Internal.SpikeConfiguration>;
    }
    type SpikeConfiguration_ = SpikeConfiguration;
    class ExplosionEvent$Start extends Internal.ExplosionEvent {
        constructor()
        constructor(arg0: Internal.Level_, arg1: Internal.Explosion_)
    }
    type ExplosionEvent$Start_ = ExplosionEvent$Start;
    class BeltFunnelBlock extends Internal.AbstractHorizontalFunnelBlock implements Internal.ISpecialBlockItemRequirement {
        constructor(arg0: any_<Internal.FunnelBlock>, arg1: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.FunnelBlockEntity>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRequiredItems(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.ItemRequirement;
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
        isOfSameType(arg0: Internal.FunnelBlock_): boolean;
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
        static getShapeForPosition(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: boolean): Internal.BeltFunnelBlock$Shape;
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
        static isOnValidBelt(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.FunnelBlockEntity>;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SHAPE: Internal.EnumProperty<Internal.BeltFunnelBlock$Shape>;
    }
    type BeltFunnelBlock_ = BeltFunnelBlock;
    class ClientboundPlaceGhostRecipePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: Internal.Recipe_<any>)
        handle(arg0: Internal.PacketListener_): void;
        getRecipe(): ResourceLocation;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getContainerId(): number;
        isSkippable(): boolean;
        get recipe(): ResourceLocation
        get containerId(): number
        get skippable(): boolean
    }
    type ClientboundPlaceGhostRecipePacket_ = ClientboundPlaceGhostRecipePacket;
    class ThrownExperienceBottle extends Internal.ThrowableItemProjectile {
        constructor(arg0: Internal.EntityType_<Internal.ThrownExperienceBottle>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
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
    type ThrownExperienceBottle_ = ThrownExperienceBottle;
    class ItemDisplayContext extends Internal.Enum<Internal.ItemDisplayContext> implements Internal.IExtensibleEnum, Internal.StringRepresentable {
        firstPerson(): boolean;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        /**
         * @deprecated
        */
        init(): void;
        static create(arg0: string, arg1: ResourceLocation_, arg2: Internal.ItemDisplayContext_): Internal.ItemDisplayContext;
        getSerializedName(): string;
        isModded(): boolean;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.ItemDisplayContext;
        fallback(): this;
        getId(): number;
        static values(): Internal.ItemDisplayContext[];
        get serializedName(): string
        get modded(): boolean
        get id(): number
        static readonly HEAD: Internal.ItemDisplayContext;
        static readonly NONE: Internal.ItemDisplayContext;
        static readonly GUI: Internal.ItemDisplayContext;
        static readonly CODEC: Internal.Codec<Internal.ItemDisplayContext>;
        static readonly THIRD_PERSON_LEFT_HAND: Internal.ItemDisplayContext;
        static readonly FIXED: Internal.ItemDisplayContext;
        static readonly FIRST_PERSON_LEFT_HAND: Internal.ItemDisplayContext;
        static readonly FIRST_PERSON_RIGHT_HAND: Internal.ItemDisplayContext;
        static readonly THIRD_PERSON_RIGHT_HAND: Internal.ItemDisplayContext;
        static readonly GROUND: Internal.ItemDisplayContext;
        static readonly BY_ID: Internal.IntFunction<Internal.ItemDisplayContext>;
        static readonly ADD_CALLBACK: Internal.IForgeRegistry$AddCallback<Internal.ItemDisplayContext>;
    }
    type ItemDisplayContext_ = "fixed" | "first_person_right_hand" | ItemDisplayContext | "gui" | "third_person_left_hand" | "ground" | "head" | "none" | "third_person_right_hand" | "first_person_left_hand";
    class ArmorItem extends Internal.Item implements Internal.Equipable, Internal.ModifiableItemKJS {
        constructor(arg0: Internal.ArmorMaterial_, arg1: Internal.ArmorItem$Type_, arg2: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getType(): Internal.ArmorItem$Type;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getMaterial(): Internal.ArmorMaterial;
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
        getEquipSound(): Internal.SoundEvent;
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
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getDamage(arg0: Internal.ItemStack_): number;
        getDefense(): number;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getToughness(): number;
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
        getEquipmentSlot(): Internal.EquipmentSlot;
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
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        get type(): Internal.ArmorItem$Type
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get equipSound(): Internal.SoundEvent
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        get defense(): number
        get toughness(): number
        set attackDamage(attackDamage: number)
        get mod(): string
        get equipmentSlot(): Internal.EquipmentSlot
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        static readonly DISPENSE_ITEM_BEHAVIOR: Internal.DispenseItemBehavior;
        defaultModifiers: Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
    }
    type ArmorItem_ = ArmorItem;
    abstract class HatEntry$HatSeason extends Internal.Enum<Internal.HatEntry$HatSeason> {
        static getSeason(): Internal.HatEntry$HatSeason;
        static valueOf(arg0: string): Internal.HatEntry$HatSeason;
        static values(): Internal.HatEntry$HatSeason[];
        abstract compareDate(arg0: number): boolean;
        get season(): Internal.HatEntry$HatSeason
        static readonly FESTIVE: Internal.HatEntry$HatSeason;
        static readonly HALLOWEEN: Internal.HatEntry$HatSeason;
        static readonly EASTER: Internal.HatEntry$HatSeason;
        static readonly NONE: Internal.HatEntry$HatSeason;
        static readonly SUMMER: Internal.HatEntry$HatSeason;
    }
    type HatEntry$HatSeason_ = HatEntry$HatSeason | "easter" | "festive" | "halloween" | "none" | "summer";
    class BargainType extends Internal.Record {
        constructor(dialog: Internal.BargainDialog_)
        dialog(): Internal.BargainDialog;
        static readonly CODEC: Internal.Codec<Internal.BargainType>;
    }
    type BargainType_ = BargainType | Special.BargainTypes;
    interface AdvancementList$Listener {
        abstract onAddAdvancementRoot(arg0: Internal.Advancement_): void;
        abstract onRemoveAdvancementRoot(arg0: Internal.Advancement_): void;
        abstract onRemoveAdvancementTask(arg0: Internal.Advancement_): void;
        abstract onAddAdvancementTask(arg0: Internal.Advancement_): void;
        abstract onAdvancementsCleared(): void;
    }
    type AdvancementList$Listener_ = AdvancementList$Listener;
    class LivingExperienceDropEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.Player_, arg2: number)
        setDroppedExperience(arg0: number): void;
        getOriginalExperience(): number;
        getDroppedExperience(): number;
        getAttackingPlayer(): Internal.Player;
        set droppedExperience(arg0: number)
        get originalExperience(): number
        get droppedExperience(): number
        get attackingPlayer(): Internal.Player
    }
    type LivingExperienceDropEvent_ = LivingExperienceDropEvent;
    interface Tickable {
        abstract tick(): void;
        (): void;
    }
    type Tickable_ = Tickable;
    class PointedDripstoneFeature extends Internal.Feature<Internal.PointedDripstoneConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.PointedDripstoneConfiguration>)
    }
    type PointedDripstoneFeature_ = PointedDripstoneFeature;
    abstract class FarmersDelightCompatImpl$TomatoLoggedBlock extends Internal.TomatoVineBlock {
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
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
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
        abstract getInnerBlock(): Internal.Block;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get innerBlock(): Internal.Block
    }
    type FarmersDelightCompatImpl$TomatoLoggedBlock_ = FarmersDelightCompatImpl$TomatoLoggedBlock;
    class AtomicInteger extends number implements Internal.Serializable {
        constructor()
        constructor(arg0: number)
        decrementAndGet(): number;
        compareAndExchangeAcquire(arg0: number, arg1: number): number;
        set(arg0: number): void;
        getAndAccumulate(arg0: number, arg1: Internal.IntBinaryOperator_): number;
        /**
         * @deprecated
        */
        weakCompareAndSet(arg0: number, arg1: number): boolean;
        setRelease(arg0: number): void;
        updateAndGet(arg0: Internal.IntUnaryOperator_): number;
        getOpaque(): number;
        getAndSet(arg0: number): number;
        weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;
        accumulateAndGet(arg0: number, arg1: Internal.IntBinaryOperator_): number;
        getAndAdd(arg0: number): number;
        weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
        compareAndSet(arg0: number, arg1: number): boolean;
        lazySet(arg0: number): void;
        weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;
        getAcquire(): number;
        getAndDecrement(): number;
        compareAndExchange(arg0: number, arg1: number): number;
        compareAndExchangeRelease(arg0: number, arg1: number): number;
        setOpaque(arg0: number): void;
        incrementAndGet(): number;
        getAndUpdate(arg0: Internal.IntUnaryOperator_): number;
        getAndIncrement(): number;
        weakCompareAndSetPlain(arg0: number, arg1: number): boolean;
        setPlain(arg0: number): void;
        addAndGet(arg0: number): number;
        getPlain(): number;
        get(): number;
        set release(arg0: number)
        get opaque(): number
        get acquire(): number
        get andDecrement(): number
        set opaque(arg0: number)
        get andIncrement(): number
        set plain(arg0: number)
        get plain(): number
    }
    type AtomicInteger_ = AtomicInteger;
    interface VariantHolder <T> {
        abstract setVariant(arg0: T): void;
        abstract getVariant(): T;
        set variant(arg0: T)
        get variant(): T
    }
    type VariantHolder_<T> = VariantHolder<T>;
    class StationMarker {
        constructor(arg0: BlockPos_, arg1: BlockPos_, arg2: Internal.Component_)
        save(): Internal.CompoundTag;
        getSource(): BlockPos;
        static load(arg0: Internal.CompoundTag_): Internal.StationMarker;
        getName(): Internal.Component;
        static fromWorld(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.StationMarker;
        getId(): string;
        getTarget(): BlockPos;
        get source(): BlockPos
        get name(): Internal.Component
        get id(): string
        get target(): BlockPos
        static readonly TYPE: Internal.MapDecoration$Type;
    }
    type StationMarker_ = StationMarker;
    class ClientboundMoveVehiclePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_)
        handle(arg0: Internal.PacketListener_): void;
        getX(): number;
        getY(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getZ(): number;
        getYRot(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getXRot(): number;
        isSkippable(): boolean;
        get x(): number
        get y(): number
        get z(): number
        get YRot(): number
        get XRot(): number
        get skippable(): boolean
    }
    type ClientboundMoveVehiclePacket_ = ClientboundMoveVehiclePacket;
    class CanyonCarverConfiguration$CanyonShapeConfiguration {
        constructor(arg0: Internal.FloatProvider_, arg1: Internal.FloatProvider_, arg2: number, arg3: Internal.FloatProvider_, arg4: number, arg5: number)
        readonly verticalRadiusCenterFactor: number;
        readonly verticalRadiusDefaultFactor: number;
        readonly distanceFactor: Internal.FloatProvider;
        readonly widthSmoothness: number;
        static readonly CODEC: Internal.Codec<Internal.CanyonCarverConfiguration$CanyonShapeConfiguration>;
        readonly thickness: Internal.FloatProvider;
        readonly horizontalRadiusFactor: Internal.FloatProvider;
    }
    type CanyonCarverConfiguration$CanyonShapeConfiguration_ = CanyonCarverConfiguration$CanyonShapeConfiguration;
    class ClientboundSetPassengersPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getPassengers(): number[];
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getVehicle(): number;
        isSkippable(): boolean;
        get passengers(): number[]
        get vehicle(): number
        get skippable(): boolean
    }
    type ClientboundSetPassengersPacket_ = ClientboundSetPassengersPacket;
    class WritableBookItem extends Internal.Item {
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
        static makeSureTagIsValid(arg0: Internal.CompoundTag_): boolean;
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
    type WritableBookItem_ = WritableBookItem;
    interface BlockColor {
        abstract getColor(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: number): number;
        (arg0: Internal.BlockState, arg1: Internal.BlockAndTintGetter, arg2: BlockPos, arg3: number): number;
    }
    type BlockColor_ = BlockColor;
    class Stat <T> extends Internal.ObjectiveCriteria {
        getType(): Internal.StatType<T>;
        getValue(): T;
        static buildName<T>(arg0: Internal.StatType_<T>, arg1: T): string;
        format(arg0: number): string;
        get type(): Internal.StatType<T>
        get value(): T
    }
    type Stat_<T> = Stat<T>;
    class ConsoleLine$SourceLine extends Internal.Record {
        constructor(source: string, line: number)
        constructor(buf: Internal.FriendlyByteBuf_)
        static write(buf: Internal.FriendlyByteBuf_, sourceLine: Internal.ConsoleLine$SourceLine_): void;
        line(): number;
        source(): string;
    }
    type ConsoleLine$SourceLine_ = ConsoleLine$SourceLine;
    interface Byte2ObjectFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Byte2ShortFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        put(arg0: number, arg1: V): V;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2ObjectFunction<V>;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Byte2ObjectFunction<T>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Byte2ByteFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Byte2FloatFunction;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Byte2LongFunction;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2ObjectFunction<V>;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2ObjectFunction<V>;
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
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        containsKey(arg0: number): boolean;
        remove(arg0: number): V;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Byte2CharFunction;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        apply(arg0: number): V;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2ObjectFunction<V>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Byte2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2ObjectFunction<V>;
        size(): number;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        getOrDefault(arg0: number, arg1: V): V;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2ObjectFunction<V>;
        clear(): void;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Byte2IntFunction;
        defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        (arg0: number): V;
    }
    type Byte2ObjectFunction_<V> = Byte2ObjectFunction<V>;
    class ScreenEvent$CharacterTyped$Post extends Internal.ScreenEvent$CharacterTyped {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: string, arg2: number)
    }
    type ScreenEvent$CharacterTyped$Post_ = ScreenEvent$CharacterTyped$Post;
    interface ChunkProgressListener {
        abstract start(): void;
        abstract stop(): void;
        abstract onStatusChange(arg0: Internal.ChunkPos_, arg1: Internal.ChunkStatus_): void;
        abstract updateSpawnPos(arg0: Internal.ChunkPos_): void;
    }
    type ChunkProgressListener_ = ChunkProgressListener;
    abstract class AbstractObject2ObjectMap <K, V> extends Internal.AbstractObject2ObjectFunction<K, V> implements Internal.Object2ObjectMap<K, V>, Internal.Serializable {
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        containsValue(arg0: any): boolean;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2ObjectFunction<V>;
        keySet(): Internal.Set<any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        computeIfAbsent(arg0: K, arg1: Internal.Object2ObjectFunction_<K, V>): V;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Object2FloatFunction<K>;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2ObjectFunction<V>;
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<K, V>>;
        putIfAbsent(arg0: K, arg1: V): V;
        apply(arg0: K): V;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Object2ReferenceFunction<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2ObjectFunction<V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Object2DoubleFunction<K>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2ObjectFunction<V>;
        /**
         * @deprecated
        */
        computeObjectIfAbsentPartial(arg0: K, arg1: Internal.Object2ObjectFunction_<K, V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Object2CharFunction<K>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        abstract defaultReturnValue(): V;
        static identity<T>(): Internal.Function<T, T>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        replace(arg0: K, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        isEmpty(): boolean;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2ObjectFunction<V>;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        put(arg0: K, arg1: V): V;
        abstract object2ObjectEntrySet(): Internal.ObjectSet<Internal.Object2ObjectMap$Entry<K, V>>;
        remove(arg0: any): V;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Object2LongFunction<K>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Object2ShortFunction<K>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Object2IntFunction<K>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2ObjectFunction<T, V>;
        putAll(arg0: Internal.Map_<K, V>): void;
        values(): Internal.ObjectCollection<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Object2ByteFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2ObjectFunction<T, V>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Object2ObjectFunction<K, T>;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        get empty(): boolean
    }
    type AbstractObject2ObjectMap_<K, V> = AbstractObject2ObjectMap<K, V>;
    class StructureCheckResult extends Internal.Enum<Internal.StructureCheckResult> {
        static values(): Internal.StructureCheckResult[];
        static valueOf(arg0: string): Internal.StructureCheckResult;
        static readonly START_NOT_PRESENT: Internal.StructureCheckResult;
        static readonly CHUNK_LOAD_NEEDED: Internal.StructureCheckResult;
        static readonly START_PRESENT: Internal.StructureCheckResult;
    }
    type StructureCheckResult_ = "start_present" | "chunk_load_needed" | StructureCheckResult | "start_not_present";
    class ServerboundClientCommandPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.ServerboundClientCommandPacket$Action_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getAction(): Internal.ServerboundClientCommandPacket$Action;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        isSkippable(): boolean;
        get action(): Internal.ServerboundClientCommandPacket$Action
        get skippable(): boolean
    }
    type ServerboundClientCommandPacket_ = ServerboundClientCommandPacket;
    class WitherRoseBlock extends Internal.FlowerBlock {
        constructor(arg0: Internal.MobEffect_, arg1: Internal.BlockBehaviour$Properties_)
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
        static tryGet(arg0: Internal.ItemLike_): Internal.SuspiciousEffectHolder;
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
    type WitherRoseBlock_ = WitherRoseBlock;
    interface IJeiConfigManager {
        abstract getConfigFiles(): Internal.Collection<Internal.IJeiConfigFile>;
        get configFiles(): Internal.Collection<Internal.IJeiConfigFile>
        (): Internal.Collection_<Internal.IJeiConfigFile>;
    }
    type IJeiConfigManager_ = IJeiConfigManager;
    class CaveFilter$Type implements Internal.PlacementModifierType<Internal.CaveFilter> {
        constructor()
        codec(): Internal.Codec<Internal.CaveFilter>;
    }
    type CaveFilter$Type_ = CaveFilter$Type;
    interface Era extends Internal.TemporalAccessor, Internal.TemporalAdjuster {
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        get(arg0: Internal.TemporalField_): number;
        getLong(arg0: Internal.TemporalField_): number;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        abstract getValue(): number;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        isSupported(arg0: Internal.TemporalField_): boolean;
        get value(): number
        (): number;
    }
    type Era_ = Era;
    class BoneMealItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        static addGrowthParticles(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number): void;
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
        static applyBonemeal(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
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
        /**
         * @deprecated
        */
        static growCrop(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static growWaterPlant(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        static readonly GRASS_COUNT_MULTIPLIER: 3;
        static readonly GRASS_SPREAD_WIDTH: 3;
        static readonly GRASS_SPREAD_HEIGHT: 1;
    }
    type BoneMealItem_ = BoneMealItem;
    class ClientboundSetDefaultSpawnPositionPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: BlockPos_, arg1: number)
        handle(arg0: Internal.PacketListener_): void;
        getPos(): BlockPos;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getAngle(): number;
        isSkippable(): boolean;
        get pos(): BlockPos
        get angle(): number
        get skippable(): boolean
    }
    type ClientboundSetDefaultSpawnPositionPacket_ = ClientboundSetDefaultSpawnPositionPacket;
    interface Key extends Internal.Serializable {
        abstract getAlgorithm(): string;
        abstract getFormat(): string;
        abstract getEncoded(): number[];
        get algorithm(): string
        get format(): string
        get encoded(): number[]
        /**
         * @deprecated
        */
        readonly serialVersionUID: 6603384152749567654;
    }
    type Key_ = Key;
    class BasicSoilSerializer implements Internal.RecipeSerializer<Internal.BasicSoil> {
        constructor()
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BasicSoil_): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.BasicSoil;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.BasicSoil;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.BasicSoil;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        static SERIALIZER: Internal.BasicSoilSerializer;
    }
    type BasicSoilSerializer_ = BasicSoilSerializer;
    abstract class ForwardingSet <E> extends Internal.ForwardingCollection<E> implements Internal.Set<E> {
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
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
    }
    type ForwardingSet_<E> = ForwardingSet<E>;
    class PropelplantStemBlock extends Internal.PropelplantBlock {
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
    }
    type PropelplantStemBlock_ = PropelplantStemBlock;
    interface Palette <T> {
        abstract read(arg0: Internal.FriendlyByteBuf_): void;
        abstract maybeHas(arg0: Internal.Predicate_<T>): boolean;
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        abstract getSize(): number;
        abstract valueFor(arg0: number): T;
        abstract getSerializedSize(): number;
        abstract idFor(arg0: T): number;
        abstract copy(): this;
        get size(): number
        get serializedSize(): number
    }
    type Palette_<T> = Palette<T>;
    class PlayerStatsJS {
        constructor(p: Internal.Player_, s: Internal.StatsCounter_)
        getDeaths(): number;
        getAnimalsBred(): number;
        getPlayerKills(): number;
        getTimeSinceRest(): number;
        getWalkDistance(): number;
        getDamageDealt(): number;
        getItemsDropped(item: Internal.Item_): number;
        add(stat: Internal.Stat_<any>, value: number): void;
        set(stat: Internal.Stat_<any>, value: number): void;
        getSprintDistance(): number;
        getBlocksMined(block: Internal.Block_): number;
        getPlayTime(): number;
        getMobKills(): number;
        getCrouchDistance(): number;
        getTimeCrouchTime(): number;
        getJumps(): number;
        getItemsCrafted(item: Internal.Item_): number;
        getTimeSinceDeath(): number;
        getDamageAbsorbed(): number;
        getItemsUsed(item: Internal.Item_): number;
        getSwimDistance(): number;
        getDamageBlocked_by_shield(): number;
        getItemsPickedUp(item: Internal.Item_): number;
        getDamageResisted(): number;
        getItemsBroken(item: Internal.Item_): number;
        get(stat: Internal.Stat_<any>): number;
        getFishCaught(): number;
        getDamageTaken(): number;
        static statOf(o: any): Internal.Stat<any>;
        getDamageDealt_resisted(): number;
        getKilled(entity: Internal.EntityType_<any>): number;
        getDamageDealt_absorbed(): number;
        getKilledBy(entity: Internal.EntityType_<any>): number;
        get deaths(): number
        get animalsBred(): number
        get playerKills(): number
        get timeSinceRest(): number
        get walkDistance(): number
        get damageDealt(): number
        get sprintDistance(): number
        get playTime(): number
        get mobKills(): number
        get crouchDistance(): number
        get timeCrouchTime(): number
        get jumps(): number
        get timeSinceDeath(): number
        get damageAbsorbed(): number
        get swimDistance(): number
        get damageBlocked_by_shield(): number
        get damageResisted(): number
        get fishCaught(): number
        get damageTaken(): number
        get damageDealt_resisted(): number
        get damageDealt_absorbed(): number
        readonly player: Internal.Player;
    }
    type PlayerStatsJS_ = string | PlayerStatsJS;
    abstract class CollectionTag <T extends Internal.Tag> extends Internal.AbstractList<T> implements Internal.Tag {
        constructor()
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        remove(arg0: number): any;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        abstract addTag(arg0: number, arg1: Internal.Tag_): boolean;
        spliterator(): Internal.Spliterator<T>;
        abstract sizeInBytes(): number;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        forEach(arg0: Internal.Consumer_<T>): void;
        abstract setTag(arg0: number, arg1: Internal.Tag_): boolean;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract add(arg0: number, arg1: T): void;
        abstract write(arg0: Internal.DataOutput_): void;
        abstract getId(): number;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        removeIf(arg0: Internal.Predicate_<T>): boolean;
        stream(): Internal.Stream<T>;
        abstract toArray<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        abstract accept(arg0: Internal.TagVisitor_): void;
        abstract set(arg0: number, arg1: T): T;
        abstract getType(): Internal.TagType<any>;
        getAsString(): string;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<T>): void;
        abstract copy(): Internal.Tag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        parallelStream(): Internal.Stream<T>;
        abstract accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        sort(arg0: Internal.Comparator_<T>): void;
        set(arg0: number, arg1: any): any;
        abstract getElementType(): number;
        get id(): number
        get type(): Internal.TagType<any>
        get asString(): string
        get elementType(): number
    }
    type CollectionTag_<T extends Internal.Tag> = CollectionTag<T>;
}
