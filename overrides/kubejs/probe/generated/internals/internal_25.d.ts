/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    abstract class AbstractHorse extends Internal.Animal implements Internal.HasCustomInventoryScreen, Internal.Saddleable, Internal.OwnableEntity, net.minecraft.world.ContainerListener, Internal.PlayerRideableJumping {
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        isBred(): boolean;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getOwner(): Internal.LivingEntity;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        canJump(): boolean;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        isArmor(arg0: Internal.ItemStack_): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        getMaxTemper(): number;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        fedFood(arg0: Internal.Player_, arg1: Internal.ItemStack_): Internal.InteractionResult;
        setTemper(arg0: number): void;
        damageHeldItem(): void;
        getSaddleSoundEvent(): Internal.SoundEvent;
        getDisplayName(): Internal.Component;
        isWearingArmor(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        getTemper(): number;
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
        tameWithName(arg0: Internal.Player_): boolean;
        canWearArmor(): boolean;
        getItem(): Internal.ItemStack;
        hasInventoryChanged(arg0: Internal.Container_): boolean;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        setOwnerUUID(arg0: Internal.UUID_): void;
        getAmbientStandSound(): Internal.SoundEvent;
        isFrame(): boolean;
        setStanding(arg0: boolean): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        handleStartJump(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        getOwnerUUID(): Internal.UUID;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        static createBaseHorseAttributes(): Internal.AttributeSupplier$Builder;
        isEating(): boolean;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        handleStopJump(): void;
        getEatAnim(arg0: number): number;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMouthAnim(arg0: number): number;
        getType(): string;
        makeMad(): void;
        setBred(arg0: boolean): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        handler$zdg000$addSugarCube(ci: Internal.CallbackInfo_): void;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        isSaddled(): boolean;
        isImmobile(): boolean;
        setTotalMovementSpeedMultiplier(speed: number): void;
        standIfPossible(): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAmbientStandInterval(): number;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setDefaultMovementSpeed(speed: number): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        isSaddleable(): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        canEatGrass(): boolean;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        openCustomInventoryScreen(arg0: Internal.Player_): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        equipSaddle(arg0: Internal.SoundSource_): void;
        getCustomJump(): number;
        isJumping(): boolean;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equipArmor(arg0: Internal.Player_, arg1: Internal.ItemStack_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        setEating(arg0: boolean): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        onPlayerJump(arg0: number): void;
        tell(message: Internal.Component_): void;
        modifyTemper(arg0: number): number;
        serializeNBT(): Internal.CompoundTag;
        setZ(z: number): void;
        isTamed(): boolean;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDistanceSq(pos: BlockPos_): number;
        getStandAnim(arg0: number): number;
        setIsJumping(arg0: boolean): void;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        setTamed(arg0: boolean): void;
        containerChanged(arg0: Internal.Container_): void;
        handler$zdg000$eatSugarCube(player: Internal.Player_, stack: Internal.ItemStack_, cir: Internal.CallbackInfoReturnable_<any>): void;
        runCommand(command: string): number;
        isStanding(): boolean;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        get bred(): boolean
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get owner(): Internal.LivingEntity
        get player(): boolean
        get animal(): boolean
        get maxTemper(): number
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        set temper(arg0: number)
        get saddleSoundEvent(): Internal.SoundEvent
        get displayName(): Internal.Component
        get wearingArmor(): boolean
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get temper(): number
        get jumpCooldown(): number
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        set ownerUUID(arg0: Internal.UUID_)
        get ambientStandSound(): Internal.SoundEvent
        get frame(): boolean
        set standing(arg0: boolean)
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get ownerUUID(): Internal.UUID
        get undead(): boolean
        get eating(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        set bred(arg0: boolean)
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get saddled(): boolean
        get immobile(): boolean
        set totalMovementSpeedMultiplier(speed: number)
        get ambientStandInterval(): number
        get feetArmorItem(): Internal.ItemStack
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get saddleable(): boolean
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get customJump(): number
        get jumping(): boolean
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        set eating(arg0: boolean)
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        get tamed(): boolean
        set statusMessage(message: Internal.Component_)
        set isJumping(arg0: boolean)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        set tamed(arg0: boolean)
        get standing(): boolean
        sprintCounter: number;
        static readonly BREEDING_CROSS_FACTOR: 0.15;
        static FOOD_ITEMS: Internal.Ingredient;
        static readonly CHEST_SLOT_OFFSET: 499;
        static readonly INVENTORY_SLOT_OFFSET: 500;
        tailCounter: number;
        static readonly INV_BASE_COUNT: 2;
        static readonly INV_SLOT_SADDLE: 0;
        static readonly EQUIPMENT_SLOT_OFFSET: 400;
        static readonly INV_SLOT_ARMOR: 1;
    }
    type AbstractHorse_ = AbstractHorse;
    interface AccessorStructureTemplatePool {
        abstract bookshelf$setRawTemplates(arg0: Internal.List_<com.mojang.datafixers.util.Pair<Internal.StructurePoolElement, number>>): void;
        abstract bookshelf$setTemplates(arg0: Internal.ObjectArrayList_<Internal.StructurePoolElement>): void;
        abstract bookshelf$getTemplates(): Internal.ObjectArrayList<Internal.StructurePoolElement>;
        abstract bookshelf$getRawTemplates(): Internal.List<com.mojang.datafixers.util.Pair<Internal.StructurePoolElement, number>>;
    }
    type AccessorStructureTemplatePool_ = AccessorStructureTemplatePool;
    abstract class ChunkRenderDispatcher$RenderChunk$ChunkCompileTask implements Internal.Comparable<Internal.ChunkRenderDispatcher$RenderChunk$ChunkCompileTask> {
        constructor(arg0: Internal.ChunkRenderDispatcher$RenderChunk_, arg1: Internal.ChunkPos_, arg2: number, arg3: boolean)
        constructor(arg0: Internal.ChunkRenderDispatcher$RenderChunk_, arg1: number, arg2: boolean)
        getModelData(arg0: BlockPos_): Internal.ModelData;
        compareTo(arg0: Internal.ChunkRenderDispatcher$RenderChunk$ChunkCompileTask_): number;
        abstract cancel(): void;
        abstract doTask(arg0: Internal.ChunkBufferBuilderPack_): Internal.CompletableFuture<Internal.ChunkRenderDispatcher$ChunkTaskResult>;
        compareTo(arg0: any): number;
    }
    type ChunkRenderDispatcher$RenderChunk$ChunkCompileTask_ = ChunkRenderDispatcher$RenderChunk$ChunkCompileTask;
    class TrackGraphBounds {
        constructor(arg0: Internal.TrackGraph_, arg1: Internal.ResourceKey_<Internal.Level>)
        beziers: Internal.List<Internal.BezierConnection>;
        box: Internal.AABB;
    }
    type TrackGraphBounds_ = TrackGraphBounds;
    class RealmsDataFetcher {
        constructor(arg0: any_)
        readonly newsManager: Internal.RealmsNewsManager;
        readonly serverListUpdateTask: Internal.DataFetcher$Task<Internal.List<Internal.RealmsServer>>;
        readonly notificationsTask: Internal.DataFetcher$Task<Internal.List<Internal.RealmsNotification>>;
        readonly newsTask: Internal.DataFetcher$Task<Internal.RealmsNews>;
        readonly dataFetcher: Internal.DataFetcher;
        readonly liveStatsTask: Internal.DataFetcher$Task<Internal.RealmsServerPlayerLists>;
        readonly trialAvailabilityTask: Internal.DataFetcher$Task<boolean>;
        readonly pendingInvitesTask: Internal.DataFetcher$Task<number>;
    }
    type RealmsDataFetcher_ = RealmsDataFetcher;
    class MissingMappingsEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.ResourceKey_<Internal.Registry<any>>, arg1: Internal.IForgeRegistry_<any>, arg2: Internal.Collection_<Internal.MissingMappingsEvent$Mapping<any>>)
        getRegistry(): Internal.IForgeRegistry<any>;
        getAllMappings<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.List<Internal.MissingMappingsEvent$Mapping<T>>;
        getKey(): Internal.ResourceKey<Internal.Registry<any>>;
        getMappings<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: string): Internal.List<Internal.MissingMappingsEvent$Mapping<T>>;
        get registry(): Internal.IForgeRegistry<any>
        get key(): Internal.ResourceKey<Internal.Registry<any>>
    }
    type MissingMappingsEvent_ = MissingMappingsEvent;
    class Pillager extends Internal.AbstractIllager implements Internal.InventoryCarrier, Internal.CrossbowAttackMob {
        constructor(arg0: Internal.EntityType_<Internal.Pillager>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getInventory(): Internal.SimpleContainer;
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
        setChargingCrossbow(arg0: boolean): void;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isChargingCrossbow(): boolean;
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
        getProjectileShotVector(arg0: Internal.LivingEntity_, arg1: Vec3d_, arg2: number): Vec3f;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        static pickUpItem(arg0: Internal.Mob_, arg1: Internal.InventoryCarrier_, arg2: Internal.ItemEntity_): void;
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
        readInventoryFromTag(arg0: Internal.CompoundTag_): void;
        self(): Internal.LivingEntity;
        writeInventoryToTag(arg0: Internal.CompoundTag_): void;
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
        shootCrossbowProjectile(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: Internal.Projectile_, arg3: number): void;
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
        shootCrossbowProjectile(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_, arg2: Internal.Projectile_, arg3: number, arg4: number): void;
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
        performCrossbowAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        onCrossbowAttackPerformed(): void;
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
        get inventory(): Internal.SimpleContainer
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set chargingCrossbow(arg0: boolean)
        set y(y: number)
        get living(): boolean
        get chargingCrossbow(): boolean
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
    type Pillager_ = Pillager;
    interface ExtraModelData$Builder {
        abstract build(): Internal.ExtraModelData;
        abstract "with"<A>(arg0: Internal.ModelDataKey_<A>, arg1: A): this;
    }
    type ExtraModelData$Builder_ = ExtraModelData$Builder;
    class TagsUpdatedEvent$UpdateCause extends Internal.Enum<Internal.TagsUpdatedEvent$UpdateCause> {
        static values(): Internal.TagsUpdatedEvent$UpdateCause[];
        static valueOf(arg0: string): Internal.TagsUpdatedEvent$UpdateCause;
        static readonly CLIENT_PACKET_RECEIVED: Internal.TagsUpdatedEvent$UpdateCause;
        static readonly SERVER_DATA_LOAD: Internal.TagsUpdatedEvent$UpdateCause;
    }
    type TagsUpdatedEvent$UpdateCause_ = "client_packet_received" | TagsUpdatedEvent$UpdateCause | "server_data_load";
    class MessageSignatureCache {
        constructor(arg0: number)
        static createDefault(): Internal.MessageSignatureCache;
        unpack(arg0: number): Internal.MessageSignature;
        pack(arg0: Internal.MessageSignature_): number;
        push(arg0: Internal.PlayerChatMessage_): void;
        static readonly NOT_FOUND: -1;
    }
    type MessageSignatureCache_ = MessageSignatureCache;
    class TinyMap <K, V> extends Internal.Record {
        constructor(map: Internal.TinyMap_<K, V>)
        constructor(entries: any_<K, V>[])
        constructor(collection: Internal.Collection_<any>)
        entries(): any[];
        isEmpty(): boolean;
        static ofMap<K, V>(map: Internal.Map_<K, V>): Internal.TinyMap<K, V>;
        get empty(): boolean
    }
    type TinyMap_<K, V> = TinyMap<K, V>;
    interface GameRendererAccessor {
        abstract create$callGetFov(arg0: Internal.Camera_, arg1: number, arg2: boolean): number;
        (arg0: Internal.Camera, arg1: number, arg2: boolean): number;
    }
    type GameRendererAccessor_ = GameRendererAccessor;
    class Direction$AxisDirection extends Internal.Enum<Internal.Direction$AxisDirection> {
        opposite(): this;
        static values(): Internal.Direction$AxisDirection[];
        getStep(): number;
        getName(): string;
        static valueOf(arg0: string): Internal.Direction$AxisDirection;
        get step(): number
        get name(): string
        static readonly POSITIVE: Internal.Direction$AxisDirection;
        static readonly NEGATIVE: Internal.Direction$AxisDirection;
    }
    type Direction$AxisDirection_ = "negative" | "positive" | Direction$AxisDirection;
    interface ToNumberStrategy {
        abstract readNumber(arg0: Internal.JsonReader_): number;
        (arg0: Internal.JsonReader): number;
    }
    type ToNumberStrategy_ = ToNumberStrategy;
    class Of2 <A, B> {
    }
    type Of2_<A, B> = [A, B] | [B, A];
    interface OutputReplacement {
        replaceOutput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, original: Internal.OutputReplacement_): any;
        transform(transformer: Internal.OutputReplacementTransformer_): Internal.OutputReplacementTransformer$Replacement;
        of(o: any): this;
    }
    type OutputReplacement_ = OutputItem_ | OutputReplacement;
    class FlowerBlock extends Internal.BushBlock implements Internal.SuspiciousEffectHolder {
        constructor(arg0: Internal.MobEffect_, arg1: number, arg2: Internal.BlockBehaviour$Properties_)
        constructor(arg0: Internal.Supplier_<Internal.MobEffect>, arg1: number, arg2: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getSuspiciousEffect(): Internal.MobEffect;
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
        getEffectDuration(): number;
        static getAllEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get suspiciousEffect(): Internal.MobEffect
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get effectDuration(): number
        get allEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>
    }
    type FlowerBlock_ = FlowerBlock;
    class AllOfCondition$Builder extends Internal.CompositeLootItemCondition$Builder {
        constructor(...arg0: Internal.LootItemCondition$Builder_[])
        invert(): Internal.LootItemCondition$Builder;
        or(arg0: Internal.LootItemCondition$Builder_): Internal.AnyOfCondition$Builder;
    }
    type AllOfCondition$Builder_ = AllOfCondition$Builder;
    class ShulkerBullet extends Internal.Projectile {
        constructor(arg0: Internal.EntityType_<Internal.ShulkerBullet>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.Entity_, arg3: Internal.Direction$Axis_)
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
    type ShulkerBullet_ = ShulkerBullet;
    abstract class SimpleJsonResourceReloadListener extends Internal.SimplePreparableReloadListener<Internal.Map<ResourceLocation, Internal.JsonElement>> {
        constructor(arg0: Internal.Gson_, arg1: string)
        static scanDirectory(arg0: Internal.ResourceManager_, arg1: string, arg2: Internal.Gson_, arg3: Internal.Map_<ResourceLocation, Internal.JsonElement>): void;
        getName(): string;
        get name(): string
    }
    type SimpleJsonResourceReloadListener_ = SimpleJsonResourceReloadListener;
    class IEditModeConfig$HideMode extends Internal.Enum<Internal.IEditModeConfig$HideMode> {
        static values(): Internal.IEditModeConfig$HideMode[];
        static valueOf(arg0: string): Internal.IEditModeConfig$HideMode;
        static readonly SINGLE: Internal.IEditModeConfig$HideMode;
        static readonly WILDCARD: Internal.IEditModeConfig$HideMode;
    }
    type IEditModeConfig$HideMode_ = "wildcard" | IEditModeConfig$HideMode | "single";
    abstract class DisplaySource extends Internal.DisplayBehaviour {
        constructor()
        onSignalReset(arg0: Internal.DisplayLinkContext_): void;
        getName(): Internal.Component;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_): void;
        initConfigurationWidgets(arg0: Internal.DisplayLinkContext_, arg1: Internal.ModularGuiLineBuilder_, arg2: boolean): void;
        shouldPassiveReset(): boolean;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_, arg3: number): void;
        abstract provideText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.MutableComponent>;
        getPassiveRefreshTicks(): number;
        provideFlapDisplayText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.List<Internal.MutableComponent>>;
        populateData(arg0: Internal.DisplayLinkContext_): void;
        transferData(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTarget_, arg2: number): void;
        get name(): Internal.Component
        get passiveRefreshTicks(): number
        static readonly EMPTY: [Internal.MutableComponent];
        static readonly EMPTY_LINE: Internal.MutableComponent;
        static readonly WHITESPACE: Internal.MutableComponent;
    }
    type DisplaySource_ = DisplaySource;
    class LangBuilder {
        constructor(arg0: string)
        text(arg0: string): this;
        json(): string;
        forGoggles(arg0: Internal.List_<Internal.MutableComponent>, arg1: number): void;
        component(): Internal.MutableComponent;
        addTo(arg0: Internal.List_<Internal.MutableComponent>): void;
        add(arg0: Internal.MutableComponent_): this;
        string(): string;
        sendStatus(arg0: Internal.Player_): void;
        add(arg0: Internal.LangBuilder_): this;
        sendChat(arg0: Internal.Player_): void;
        text(arg0: number, arg1: string): this;
        forGoggles(arg0: Internal.List_<Internal.MutableComponent>): void;
        text(arg0: Internal.ChatFormatting_, arg1: string): this;
        space(): this;
        style(arg0: Internal.ChatFormatting_): this;
        newLine(): this;
        translate(arg0: string, ...arg1: any[]): this;
        color(arg0: number): this;
    }
    type LangBuilder_ = LangBuilder;
    class EmptyFluid extends Internal.Fluid {
        constructor()
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        canBeReplacedWith(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Fluid_, arg4: Internal.Direction_): boolean;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        arch$registryName(): ResourceLocation;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
    }
    type EmptyFluid_ = EmptyFluid;
    class EdgePointType <T extends Internal.TrackEdgePoint> {
        constructor(arg0: ResourceLocation_, arg1: Internal.Supplier_<T>)
        getId(): ResourceLocation;
        static register<T extends Internal.TrackEdgePoint>(arg0: ResourceLocation_, arg1: Internal.Supplier_<T>): Internal.EdgePointType<T>;
        create(): T;
        static read(arg0: Internal.FriendlyByteBuf_, arg1: Internal.DimensionPalette_): Internal.TrackEdgePoint;
        get id(): ResourceLocation
        static readonly OBSERVER: Internal.EdgePointType<Internal.TrackObserver>;
        static readonly TYPES: {[key: ResourceLocation]: Internal.EdgePointType<any>, [key: ResourceLocation]: Internal.EdgePointType<any>, [key: ResourceLocation]: Internal.EdgePointType<any>};
        static readonly STATION: Internal.EdgePointType<Internal.GlobalStation>;
        static readonly SIGNAL: Internal.EdgePointType<Internal.SignalBoundary>;
    }
    type EdgePointType_<T extends Internal.TrackEdgePoint> = EdgePointType<T>;
    class CombatTracker {
        constructor(arg0: Internal.LivingEntity_)
        getDeathMessage(): Internal.Component;
        getMostSignificantFall(): Internal.CombatEntry;
        recordDamage(arg0: DamageSource_, arg1: number): void;
        recheckStatus(): void;
        getCombatDuration(): number;
        getFallMessage(arg0: Internal.CombatEntry_, arg1: Internal.Entity_): Internal.Component;
        get deathMessage(): Internal.Component
        get mostSignificantFall(): Internal.CombatEntry
        get combatDuration(): number
        readonly entries: Internal.List<Internal.CombatEntry>;
        static readonly RESET_COMBAT_STATUS_TIME: 300;
        lastDamageTime: number;
        inCombat: boolean;
        static readonly INTENTIONAL_GAME_DESIGN_STYLE: Internal.Style;
        static readonly RESET_DAMAGE_STATUS_TIME: 100;
    }
    type CombatTracker_ = CombatTracker;
    class DeferredWorkQueue {
        constructor(arg0: Internal.ModLoadingStage_)
        enqueueWork(arg0: Internal.ModContainer_, arg1: Internal.Runnable_): Internal.CompletableFuture<void>;
        runTasks(): void;
        static lookup(arg0: Internal.Optional_<Internal.ModLoadingStage>): Internal.Optional<Internal.DeferredWorkQueue>;
        enqueueWork<T>(arg0: Internal.ModContainer_, arg1: Internal.Supplier_<T>): Internal.CompletableFuture<T>;
    }
    type DeferredWorkQueue_ = DeferredWorkQueue;
    class ComfortEffect extends Internal.MobEffect {
        constructor()
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type ComfortEffect_ = ComfortEffect;
    interface Merchant {
        abstract notifyTradeUpdated(arg0: Internal.ItemStack_): void;
        abstract notifyTrade(arg0: Internal.MerchantOffer_): void;
        abstract setTradingPlayer(arg0: Internal.Player_): void;
        abstract isClientSide(): boolean;
        abstract getTradingPlayer(): Internal.Player;
        canRestock(): boolean;
        abstract getOffers(): Internal.MerchantOffers;
        openTradingScreen(arg0: Internal.Player_, arg1: Internal.Component_, arg2: number): void;
        abstract getNotifyTradeSound(): Internal.SoundEvent;
        abstract overrideOffers(arg0: Internal.MerchantOffers_): void;
        abstract overrideXp(arg0: number): void;
        abstract showProgressBar(): boolean;
        abstract getVillagerXp(): number;
        set tradingPlayer(arg0: Internal.Player_)
        get clientSide(): boolean
        get tradingPlayer(): Internal.Player
        get offers(): Internal.MerchantOffers
        get notifyTradeSound(): Internal.SoundEvent
        get villagerXp(): number
    }
    type Merchant_ = Merchant;
    interface Function1 <P1, R> extends kotlin.Function<R> {
        abstract invoke(arg0: P1): R;
        (arg0: P1): R;
    }
    type Function1_<P1, R> = Function1<P1, R>;
    class WardenEntitySensor extends Internal.NearestLivingEntitySensor<Internal.Warden> {
        constructor()
    }
    type WardenEntitySensor_ = WardenEntitySensor;
    class MemoryStatus extends Internal.Enum<Internal.MemoryStatus> {
        static valueOf(arg0: string): Internal.MemoryStatus;
        static values(): Internal.MemoryStatus[];
        static readonly VALUE_PRESENT: Internal.MemoryStatus;
        static readonly VALUE_ABSENT: Internal.MemoryStatus;
        static readonly REGISTERED: Internal.MemoryStatus;
    }
    type MemoryStatus_ = "value_present" | MemoryStatus | "value_absent" | "registered";
    abstract class ItemStackRenderer extends Internal.BlockEntityWithoutLevelRenderer {
        getName(): string;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get name(): string
    }
    type ItemStackRenderer_ = ItemStackRenderer;
    interface TraceableEntity {
        abstract getOwner(): Internal.Entity;
        get owner(): Internal.Entity
        (): Internal.Entity_;
    }
    type TraceableEntity_ = TraceableEntity;
    class IdMapper <T> implements Internal.IdMap<T> {
        constructor()
        constructor(arg0: number)
        byId(arg0: number): T;
        forEach(arg0: Internal.Consumer_<T>): void;
        size(): number;
        spliterator(): Internal.Spliterator<T>;
        contains(arg0: number): boolean;
        byIdOrThrow(arg0: number): T;
        iterator(): Internal.Iterator<T>;
        addMapping(arg0: T, arg1: number): void;
        add(arg0: T): void;
        getId(arg0: T): number;
    }
    type IdMapper_<T> = IdMapper<T>;
    class WorldOptions {
        constructor(arg0: number, arg1: boolean, arg2: boolean)
        static defaultWithRandomSeed(): Internal.WorldOptions;
        withStructures(arg0: boolean): this;
        generateBonusChest(): boolean;
        static parseSeed(arg0: string): Internal.OptionalLong;
        seed(): number;
        static randomSeed(): number;
        withSeed(arg0: Internal.OptionalLong_): this;
        withBonusChest(arg0: boolean): this;
        isOldCustomizedWorld(): boolean;
        generateStructures(): boolean;
        get oldCustomizedWorld(): boolean
        static readonly CODEC: Internal.MapCodec<Internal.WorldOptions>;
        static readonly DEMO_OPTIONS: Internal.WorldOptions;
    }
    type WorldOptions_ = WorldOptions;
    class ServerboundSetCreativeModeSlotPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: Internal.ItemStack_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getItem(): Internal.ItemStack;
        getSlotNum(): number;
        isSkippable(): boolean;
        get item(): Internal.ItemStack
        get slotNum(): number
        get skippable(): boolean
    }
    type ServerboundSetCreativeModeSlotPacket_ = ServerboundSetCreativeModeSlotPacket;
    class FluidState extends Internal.StateHolder<Internal.Fluid, Internal.FluidState> implements Internal.IForgeFluidState {
        constructor(arg0: Internal.Fluid_, arg1: Internal.ImmutableMap_<Internal.Property<any>, Internal.Comparable<any>>, arg2: Internal.MapCodec_<Internal.FluidState>)
        getType(): Internal.Fluid;
        isSource(): boolean;
        getShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        move(arg0: Internal.LivingEntity_, arg1: Vec3d_, arg2: number): boolean;
        canConvertToSource(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: boolean): Internal.BlockPathTypes;
        getHeight(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        isEmpty(): boolean;
        getFluidType(): Internal.FluidType;
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_): Vec3d;
        createLegacyBlock(): Internal.BlockState;
        holder(): Internal.Holder<Internal.Fluid>;
        getTags(): Internal.Stream<Internal.TagKey<Internal.Fluid>>;
        isSourceOfType(arg0: Internal.Fluid_): boolean;
        getAmount(): number;
        getOwnHeight(): number;
        isRandomlyTicking(): boolean;
        tick(arg0: Internal.Level_, arg1: BlockPos_): void;
        is(arg0: Internal.HolderSet_<Internal.Fluid>): boolean;
        getDripParticle(): Internal.ParticleOptions;
        canExtinguish(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        shouldRenderBackwardUpFace(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        is(arg0: Internal.Fluid_): boolean;
        canBeReplacedWith(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Fluid_, arg3: Internal.Direction_): boolean;
        canHydrate(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: BlockPos_): boolean;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        randomTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        animateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        get type(): Internal.Fluid
        get source(): boolean
        get empty(): boolean
        get fluidType(): Internal.FluidType
        get tags(): Internal.Stream<Internal.TagKey<Internal.Fluid>>
        get amount(): number
        get ownHeight(): number
        get randomlyTicking(): boolean
        get dripParticle(): Internal.ParticleOptions
        /**
         * @deprecated
        */
        get explosionResistance(): number
        static readonly AMOUNT_FULL: 8;
        static readonly AMOUNT_MAX: 9;
        static readonly CODEC: Internal.Codec<Internal.FluidState>;
    }
    type FluidState_ = FluidState;
    class RegisterCapabilitiesEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        register<T>(arg0: T): void;
    }
    type RegisterCapabilitiesEvent_ = RegisterCapabilitiesEvent;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    class WallCandleSkullBlock extends Internal.AbstractCandleSkullBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        constructor(properties: Internal.BlockBehaviour$Properties_, particle: Internal.Supplier_<Internal.ParticleType<Internal.ParticleOptions>>)
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        extinguish(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): boolean;
        lightUp(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_, fireSourceType: Internal.ILightable$FireSourceType_): boolean;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        interactWithPlayer(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_): Internal.InteractionResult;
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
        playLightUpSound(world: Internal.LevelAccessor_, pos: BlockPos_, type: Internal.ILightable$FireSourceType_): void;
        interactWithProjectile(level: Internal.Level_, state: Internal.BlockState_, projectile: Internal.Projectile_, pos: BlockPos_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly FACING: Internal.DirectionProperty;
    }
    type WallCandleSkullBlock_ = WallCandleSkullBlock;
    class Creeper extends Internal.Monster implements Internal.PowerableMob {
        constructor(arg0: Internal.EntityType_<Internal.Creeper>, arg1: Internal.Level_)
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
        isIgnited(): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        getSwelling(arg0: number): number;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        canDropMobsSkull(): boolean;
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
        increaseDroppedSkulls(): void;
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
        setSwellDir(arg0: number): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        isPowered(): boolean;
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
        getSwellDir(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        ignite(): void;
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
        get ignited(): boolean
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
        set swellDir(arg0: number)
        set chestArmorItem(item: Internal.ItemStack_)
        get powered(): boolean
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
        get swellDir(): number
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
    type Creeper_ = Creeper;
    class ChunkAccess$TicksToSave extends Internal.Record {
        constructor(blocks: Internal.SerializableTickContainer_<Internal.Block>, fluids: Internal.SerializableTickContainer_<Internal.Fluid>)
        fluids(): Internal.SerializableTickContainer<Internal.Fluid>;
        blocks(): Internal.SerializableTickContainer<Internal.Block>;
    }
    type ChunkAccess$TicksToSave_ = ChunkAccess$TicksToSave;
    class RopeKnotBlock extends Internal.AbstractRopeKnotBlock implements Internal.IRopeConnection {
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
        static canConnectDown(downState: Internal.BlockState_): boolean;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        static isSupportingCeiling(upState: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelReader_): boolean;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        canSideAcceptConnection(state: Internal.BlockState_, direction: Internal.Direction_): boolean;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
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
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        rotateOverAxis(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rotation: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): Internal.Optional<Internal.Direction>;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static isSupportingCeiling(pos: BlockPos_, world: Internal.LevelReader_): boolean;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SIDE_SHAPE: Internal.ArrayVoxelShape;
    }
    type RopeKnotBlock_ = RopeKnotBlock;
    abstract class GeneratingKineticBlockEntity extends Internal.KineticBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        updateGeneratedRotation(): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        applyNewSpeed(arg0: number, arg1: number): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        createNetworkId(): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
        reActivateSource: boolean;
    }
    type GeneratingKineticBlockEntity_ = GeneratingKineticBlockEntity;
    interface Int2CharFunction extends it.unimi.dsi.fastutil.Function<number, string>, Internal.IntUnaryOperator {
        remove(arg0: number): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        defaultReturnValue(): string;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2CharFunction;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Int2ShortFunction;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2CharFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2CharFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Int2ObjectFunction<T>;
        getOrDefault(arg0: number, arg1: string): string;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        applyAsInt(arg0: number): number;
        defaultReturnValue(arg0: string): void;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Int2FloatFunction;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        apply(arg0: number): string;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Int2ReferenceFunction<T>;
        composeInt(arg0: Internal.Int2IntFunction_): this;
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2CharFunction;
        abstract get(arg0: number): string;
        put(arg0: number, arg1: string): string;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2CharFunction<T>;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Int2ByteFunction;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Int2DoubleFunction;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2CharFunction;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2CharFunction;
        size(): number;
        clear(): void;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Int2LongFunction;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2CharFunction<T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        (arg0: number): string;
    }
    type Int2CharFunction_ = Int2CharFunction;
    abstract class Enchantment implements Internal.IForgeEnchantment {
        getFullname(arg0: number): Internal.Component;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        getRarity(): Internal.Enchantment$Rarity;
        isTradeable(): boolean;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        getMaxLevel(): number;
        isTreasureOnly(): boolean;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        getMinLevel(): number;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        isCurse(): boolean;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        getDescriptionId(): string;
        isAllowedOnBooks(): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get maxLevel(): number
        get treasureOnly(): boolean
        get minLevel(): number
        get curse(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get allowedOnBooks(): boolean
        readonly category: Internal.EnchantmentCategory;
    }
    type Enchantment_ = Special.Enchantment | Enchantment;
    class SoundSource extends Internal.Enum<Internal.SoundSource> {
        static valueOf(arg0: string): Internal.SoundSource;
        static values(): Internal.SoundSource[];
        getName(): string;
        get name(): string
        static readonly HOSTILE: Internal.SoundSource;
        static readonly MUSIC: Internal.SoundSource;
        static readonly RECORDS: Internal.SoundSource;
        static readonly NEUTRAL: Internal.SoundSource;
        static readonly MASTER: Internal.SoundSource;
        static readonly BLOCKS: Internal.SoundSource;
        static readonly PLAYERS: Internal.SoundSource;
        static readonly WEATHER: Internal.SoundSource;
        static readonly AMBIENT: Internal.SoundSource;
        static readonly VOICE: Internal.SoundSource;
    }
    type SoundSource_ = SoundSource | "records" | "weather" | "neutral" | "music" | "players" | "blocks" | "ambient" | "master" | "voice" | "hostile";
    class BlockEntityBotanyPot extends Internal.WorldlyInventoryBlockEntity<any> {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        static tickPot(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockEntityBotanyPot_): void;
        static tryClear(arg0: any): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        getSlots(): number;
        setChanged(): void;
        onLoad(): void;
        isHopper(): boolean;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        resetGrowth(): void;
        kjs$self(): Internal.Container;
        refreshRandom(): void;
        getCrop(): Internal.Crop;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        isGrowing(): boolean;
        addGrowth(arg0: number): void;
        hasCustomName(): boolean;
        getComparatorLevel(): number;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        isCropHarvestable(): boolean;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        isEmpty(): boolean;
        areGrowthConditionsMet(): boolean;
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
        getSoil(): Internal.Soil;
        getLightLevel(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        isValidSoil(arg0: Internal.ItemStack_): boolean;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isValidSeed(arg0: Internal.ItemStack_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        attemptAutoHarvest(): boolean;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        getGrowthTime(): number;
        m_6555_(arg0: number, arg1: Internal.Inventory_): Internal.AbstractContainerMenu;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        createInventory(): Internal.Container;
        get slots(): number
        get hopper(): boolean
        get crop(): Internal.Crop
        get width(): number
        get growing(): boolean
        get comparatorLevel(): number
        get renderBoundingBox(): Internal.AABB
        get cropHarvestable(): boolean
        get empty(): boolean
        get height(): number
        get soil(): Internal.Soil
        get lightLevel(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get modelData(): Internal.ModelData
        get mutable(): boolean
        get growthTime(): number
        static readonly POT_TYPE: Internal.CachedSupplier<Internal.BlockEntityType<Internal.BlockEntityBotanyPot>>;
    }
    type BlockEntityBotanyPot_ = BlockEntityBotanyPot;
    class Frustum {
        constructor(arg0: Internal.Frustum_)
        constructor(arg0: Matrix4f_, arg1: Matrix4f_)
        prepare(arg0: number, arg1: number, arg2: number): void;
        isVisible(arg0: Internal.AABB_): boolean;
        offsetToFullyIncludeCameraCube(arg0: number): this;
        static readonly OFFSET_STEP: 4;
    }
    type Frustum_ = Frustum;
    class DiscoveredPath {
        constructor(arg0: number, arg1: number, arg2: Internal.List_<Internal.Couple<Internal.TrackNode>>, arg3: Internal.GlobalStation_)
        path: Internal.List<Internal.Couple<Internal.TrackNode>>;
        destination: Internal.GlobalStation;
        cost: number;
        distance: number;
    }
    type DiscoveredPath_ = DiscoveredPath;
    class TargetDummyItem extends Internal.Item {
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
    type TargetDummyItem_ = TargetDummyItem;
    class ChunkDataEvent extends Internal.ChunkEvent {
        constructor()
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.CompoundTag_)
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.LevelAccessor_, arg2: Internal.CompoundTag_)
        getData(): Internal.CompoundTag;
        get data(): Internal.CompoundTag
    }
    type ChunkDataEvent_ = ChunkDataEvent;
    class GrassBlock extends Internal.SpreadingSnowyDirtBlock implements Internal.BonemealableBlock {
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
    type GrassBlock_ = GrassBlock;
    abstract class AgeableMob extends Internal.PathfinderMob {
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
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
        getAge(): number;
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
        ageUp(arg0: number, arg1: boolean): void;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        setAge(arg0: number): void;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        abstract getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): this;
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
        canBreed(): boolean;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        ageUp(arg0: number): void;
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
        get age(): number
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        set age(arg0: number)
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
        static readonly BABY_START_AGE: -24000;
    }
    type AgeableMob_ = AgeableMob;
    class ClientLevel extends Internal.Level implements Internal.ClientLevelKJS, Internal.ClientLevelExtension {
        constructor(arg0: Internal.ClientPacketListener_, arg1: Internal.ClientLevel$ClientLevelData_, arg2: Internal.ResourceKey_<Internal.Level>, arg3: Internal.Holder_<Internal.DimensionType>, arg4: number, arg5: number, arg6: Internal.Supplier_<Internal.ProfilerFiller>, arg7: Internal.LevelRenderer_, arg8: boolean, arg9: number)
        tickNonPassenger(arg0: Internal.Entity_): void;
        effects(): Internal.DimensionSpecialEffects;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        dayTime(): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getMaxSection(): number;
        setDefaultSpawnPos(arg0: BlockPos_, arg1: number): void;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        unload(arg0: Internal.LevelChunk_): void;
        getSectionYFromSectionIndex(arg0: number): number;
        tick(arg0: Internal.BooleanSupplier_): void;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        isEmptyBlock(arg0: BlockPos_): boolean;
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
        runCommandSilent(command: string): number;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_): Internal.List<T>;
        getEntityCount(): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        setDayTime(arg0: number): void;
        handleBlockChangedAck(arg0: number): void;
        getMinBuildHeight(): number;
        clearTintCaches(): void;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        setGameTime(arg0: number): void;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        queueLightUpdate(arg0: Internal.Runnable_): void;
        calculateBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getDisplayName(): Internal.Component;
        getLevelData(): Internal.ClientLevel$ClientLevelData;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
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
        putNonPlayerEntity(arg0: number, arg1: Internal.Entity_): void;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getSkyFlashTime(): number;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        entitiesForRendering(): Internal.Iterable<Internal.Entity>;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        getHeight(): number;
        animateTick(arg0: number, arg1: number, arg2: number): void;
        getSkyDarken(arg0: number): number;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
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
        tickEntities(): void;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Internal.Player;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getMinSection(): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        flywheel$getAllLoadedEntities(): Internal.Iterable<any>;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Internal.Player;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        setScoreboard(arg0: Internal.Scoreboard_): void;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getDimension(): ResourceLocation;
        getName(): Internal.Component;
        getDifficulty(): Internal.Difficulty;
        canSeeSky(arg0: BlockPos_): boolean;
        getCloudColor(arg0: number): Vec3d;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        getPlayerByUUID(arg0: Internal.UUID_): Internal.Player;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        getSectionsCount(): number;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Internal.Player>;
        getSectionIndexFromSectionY(arg0: number): number;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        self(): Internal.Level;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        getBestNeighborSignal(arg0: BlockPos_): number;
        doAnimateTick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.RandomSource_, arg5: Internal.Block_, arg6: Internal.BlockPos$MutableBlockPos_): void;
        static cast(arg0: Internal.ClientLevel_): Internal.ClientLevelExtension;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        getSkyColor(arg0: Vec3d_, arg1: number): Vec3d;
        getMoonBrightness(): number;
        noCollision(arg0: Internal.AABB_): boolean;
        setServerSimulationDistance(arg0: number): void;
        isWaterAt(arg0: BlockPos_): boolean;
        isLightUpdateQueueEmpty(): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        getSide(): Internal.ScriptType;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        removeEntity(arg0: number, arg1: Internal.Entity$RemovalReason_): void;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        isOutsideBuildHeight(arg0: number): boolean;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        overrideMapData(arg0: string, arg1: Internal.MapItemSavedData_): void;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        tell(message: Internal.Component_): void;
        setServerVerifiedBlockState(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number): void;
        pollLightUpdates(): void;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        getServerSimulationDistance(): number;
        onChunkLoaded(arg0: Internal.ChunkPos_): void;
        addPlayer(arg0: number, arg1: Internal.AbstractClientPlayer_): void;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        setStatusMessage(message: Internal.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: BlockPos_): void;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        syncBlockState(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Vec3d_): void;
        getMaxLightLevel(): number;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        isOverworld(): boolean;
        runCommand(command: string): number;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        getStarBrightness(arg0: number): number;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get maxSection(): number
        get entityCount(): number
        set dayTime(arg0: number)
        get minBuildHeight(): number
        set gameTime(arg0: number)
        get displayName(): Internal.Component
        get levelData(): Internal.ClientLevel$ClientLevelData
        get maxBuildHeight(): number
        get skyFlashTime(): number
        get height(): number
        get minSection(): number
        set scoreboard(arg0: Internal.Scoreboard_)
        get dimension(): ResourceLocation
        get name(): Internal.Component
        get difficulty(): Internal.Difficulty
        get moonPhase(): number
        get sectionsCount(): number
        get moonBrightness(): number
        set serverSimulationDistance(arg0: number)
        get lightUpdateQueueEmpty(): boolean
        get side(): Internal.ScriptType
        get entities(): Internal.EntityArrayList
        get serverSimulationDistance(): number
        set statusMessage(message: Internal.Component_)
        get players(): Internal.EntityArrayList
        get maxLightLevel(): number
        get overworld(): boolean
    }
    type ClientLevel_ = ClientLevel;
    interface Instance {
        abstract getWorldPosition(): BlockPos;
        get worldPosition(): BlockPos
        (): BlockPos_;
    }
    type Instance_ = Instance;
    class BrewingStandBlock extends Internal.BaseEntityBlock {
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
        static readonly HAS_BOTTLE: Internal.BooleanProperty[];
    }
    type BrewingStandBlock_ = BrewingStandBlock;
    class PermissionNode <T> {
        constructor(arg0: ResourceLocation_, arg1: Internal.PermissionType_<T>, arg2: Internal.PermissionNode$PermissionResolver_<T>, ...arg3: any_<any>[])
        constructor(arg0: string, arg1: string, arg2: Internal.PermissionType_<T>, arg3: Internal.PermissionNode$PermissionResolver_<T>, ...arg4: any_<any>[])
        getDefaultResolver(): Internal.PermissionNode$PermissionResolver<T>;
        setInformation(arg0: Internal.Component_, arg1: Internal.Component_): Internal.PermissionNode<any>;
        getReadableName(): Internal.Component;
        getType(): Internal.PermissionType<T>;
        getDynamics(): any[];
        getNodeName(): string;
        getDescription(): Internal.Component;
        get defaultResolver(): Internal.PermissionNode$PermissionResolver<T>
        get readableName(): Internal.Component
        get type(): Internal.PermissionType<T>
        get dynamics(): any[]
        get nodeName(): string
        get description(): Internal.Component
    }
    type PermissionNode_<T> = PermissionNode<T>;
    abstract class RuleTest {
        constructor()
        abstract test(arg0: Internal.BlockState_, arg1: Internal.RandomSource_): boolean;
        static readonly CODEC: Internal.Codec<Internal.RuleTest>;
    }
    type RuleTest_ = Internal.CompoundTag_ | RuleTest | BlockStatePredicate_;
    class DeserializationContext {
        constructor(arg0: ResourceLocation_, arg1: Internal.LootDataManager_)
        deserializeConditions(arg0: Internal.JsonArray_, arg1: string, arg2: Internal.LootContextParamSet_): Internal.LootItemCondition[];
        getAdvancementId(): ResourceLocation;
        get advancementId(): ResourceLocation
    }
    type DeserializationContext_ = DeserializationContext;
    interface JarMetadata {
        abstract name(): string;
        abstract version(): string;
        from(arg0: Internal.SecureJar_, ...arg1: Internal.Path_[]): this;
        abstract descriptor(): Internal.ModuleDescriptor;
        fromFileName(arg0: Internal.Path_, arg1: Internal.Set_<string>, arg2: Internal.List_<Internal.SecureJar$Provider>): Internal.SimpleJarMetadata;
        readonly LEADING_DOTS: Internal.Pattern;
        readonly NUMBERLIKE_PARTS: Internal.Pattern;
        readonly MODULE_VERSION: Internal.Pattern;
        readonly KEYWORD_PARTS: Internal.Pattern;
        readonly TRAILING_DOTS: Internal.Pattern;
        readonly ILLEGAL_KEYWORDS: ["abstract", "continue", "for", "new", "switch", "assert", "default", "goto", "package", "synchronized", "boolean", "do", "if", "private", "this", "break", "double", "implements", "protected", "throw", "byte", "else", "import", "public", "throws", "case", "enum", "instanceof", "return", "transient", "catch", "extends", "int", "short", "try", "char", "final", "interface", "static", "void", "class", "finally", "long", "strictfp", "volatile", "const", "float", "native", "super", "while"];
        readonly DASH_VERSION: Internal.Pattern;
        readonly NON_ALPHANUM: Internal.Pattern;
        readonly REPEATING_DOTS: Internal.Pattern;
    }
    type JarMetadata_ = JarMetadata;
    class ClientChatEvent extends Internal.Event {
        constructor()
        constructor(arg0: string)
        getMessage(): string;
        setMessage(arg0: string): void;
        getOriginalMessage(): string;
        get message(): string
        set message(arg0: string)
        get originalMessage(): string
    }
    type ClientChatEvent_ = ClientChatEvent;
    class ForbiddenSymlinkInfo extends Internal.Record {
        constructor(arg0: Internal.Path_, arg1: Internal.Path_)
        link(): Internal.Path;
        target(): Internal.Path;
    }
    type ForbiddenSymlinkInfo_ = ForbiddenSymlinkInfo;
    class CreativeCrateBlockEntity extends Internal.CrateBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        createFilter(): Internal.FilteringBehaviour;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
    }
    type CreativeCrateBlockEntity_ = CreativeCrateBlockEntity;
    class LivingEntityUseItemEvent$Finish extends Internal.LivingEntityUseItemEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: number, arg3: Internal.ItemStack_)
        setResultStack(arg0: Internal.ItemStack_): void;
        getResultStack(): Internal.ItemStack;
        set resultStack(arg0: Internal.ItemStack_)
        get resultStack(): Internal.ItemStack
    }
    type LivingEntityUseItemEvent$Finish_ = LivingEntityUseItemEvent$Finish;
    interface ParticleProvider$Sprite <T extends Internal.ParticleOptions> {
        abstract createParticle(arg0: T, arg1: Internal.ClientLevel_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): Internal.TextureSheetParticle;
        (arg0: T, arg1: Internal.ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): Internal.TextureSheetParticle_;
    }
    type ParticleProvider$Sprite_<T extends Internal.ParticleOptions> = ParticleProvider$Sprite<T>;
    class Attributes$Name {
        constructor(arg0: string)
        /**
         * @deprecated
        */
        static readonly IMPLEMENTATION_VENDOR_ID: Internal.Attributes$Name;
        static readonly IMPLEMENTATION_VERSION: Internal.Attributes$Name;
        static readonly SPECIFICATION_VERSION: Internal.Attributes$Name;
        /**
         * @deprecated
        */
        static readonly IMPLEMENTATION_URL: Internal.Attributes$Name;
        static readonly EXTENSION_LIST: Internal.Attributes$Name;
        static readonly SIGNATURE_VERSION: Internal.Attributes$Name;
        static readonly IMPLEMENTATION_TITLE: Internal.Attributes$Name;
        static readonly SPECIFICATION_VENDOR: Internal.Attributes$Name;
        static readonly MAIN_CLASS: Internal.Attributes$Name;
        static readonly IMPLEMENTATION_VENDOR: Internal.Attributes$Name;
        static readonly CLASS_PATH: Internal.Attributes$Name;
        static readonly SPECIFICATION_TITLE: Internal.Attributes$Name;
        static readonly MANIFEST_VERSION: Internal.Attributes$Name;
        static readonly CONTENT_TYPE: Internal.Attributes$Name;
        /**
         * @deprecated
        */
        static readonly EXTENSION_INSTALLATION: Internal.Attributes$Name;
        static readonly EXTENSION_NAME: Internal.Attributes$Name;
        static readonly SEALED: Internal.Attributes$Name;
        static readonly MULTI_RELEASE: Internal.Attributes$Name;
    }
    type Attributes$Name_ = Attributes$Name;
    interface AccessorItem {
        abstract bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        (arg0: Internal.Item): void;
    }
    type AccessorItem_ = AccessorItem;
    interface SmithingRecipe extends Internal.Recipe<Internal.Container> {
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        abstract isBaseIngredient(arg0: Internal.ItemStack_): boolean;
        abstract assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        abstract getId(): ResourceLocation;
        abstract matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        abstract getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        abstract isTemplateIngredient(arg0: Internal.ItemStack_): boolean;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        abstract isAdditionIngredient(arg0: Internal.ItemStack_): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type SmithingRecipe_ = SmithingRecipe;
    class Sniffer extends Internal.Animal {
        constructor(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getBrain(): Internal.Brain<Internal.Sniffer>;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        onDiggingComplete(arg0: boolean): this;
        isTempted(): boolean;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        transitionTo(arg0: Internal.Sniffer$State_): this;
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
        canSniff(): boolean;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        canPlayDiggingSound(): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        isPanicking(): boolean;
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
        isSearching(): boolean;
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
        get brain(): Internal.Brain<Internal.Sniffer>
        set defaultMovementSpeedMultiplier(speed: number)
        get tempted(): boolean
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
        get panicking(): boolean
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
        get searching(): boolean
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
        readonly diggingAnimationState: Internal.AnimationState;
        readonly risingAnimationState: Internal.AnimationState;
        readonly scentingAnimationState: Internal.AnimationState;
        readonly feelingHappyAnimationState: Internal.AnimationState;
        readonly sniffingAnimationState: Internal.AnimationState;
    }
    type Sniffer_ = Sniffer;
    class MapItemSavedData$HoldingPlayer implements Internal.IHoldingPlayerExtension {
        moonlight$setCustomDataDirty(type: Internal.CustomMapData$Type_<any>, dirtySetter: Internal.Consumer_<any>): void;
        handler$zij000$checkLocked(mapId: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$zij000$lockData(x: number, z: number, ci: Internal.CallbackInfo_): void;
        moonlight$setCustomMarkersDirty(): void;
        modifyReturnValue$zij000$addExtraPacketData(packet: Internal.Packet_<any>, mapId: number): Internal.Packet<any>;
        handler$zij000$sanityCheck(x: number, z: number, ci: Internal.CallbackInfo_): void;
        handler$zij000$initializeDirty(mapItemSavedData: Internal.MapItemSavedData_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        readonly player: Internal.Player;
        step: number;
    }
    type MapItemSavedData$HoldingPlayer_ = MapItemSavedData$HoldingPlayer;
    interface PositionSource {
        abstract getType(): Internal.PositionSourceType<any>;
        abstract getPosition(arg0: Internal.Level_): Internal.Optional<Vec3d>;
        get type(): Internal.PositionSourceType<any>
        readonly CODEC: Internal.Codec<Internal.PositionSource>;
    }
    type PositionSource_ = PositionSource;
    interface OwnableEntity {
        abstract level(): Internal.EntityGetter;
        abstract getOwnerUUID(): Internal.UUID;
        getOwner(): Internal.LivingEntity;
        get ownerUUID(): Internal.UUID
        get owner(): Internal.LivingEntity
    }
    type OwnableEntity_ = OwnableEntity;
    abstract class BlockBehaviour implements Internal.BlockKJS, Internal.FeatureElement {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        setDestroySpeed(v: number): void;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        abstract asItem(): Internal.Item;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        getMaxVerticalOffset(): number;
        setIsRandomlyTicking(arg0: boolean): void;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        defaultMapColor(): Internal.MapColor;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setNameKey(key: string): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        setRequiresTool(v: boolean): void;
        setSpeedFactor(arg0: number): void;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getMod(): string;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        setExplosionResistance(arg0: number): void;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        requiredFeatures(): Internal.FeatureFlagSet;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setHasCollision(arg0: boolean): void;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set destroySpeed(v: number)
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get maxHorizontalOffset(): number
        get maxVerticalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set blockBuilder(b: Internal.BlockBuilder_)
        set nameKey(key: string)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set speedFactor(arg0: number)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get mod(): string
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        set soundType(arg0: SoundType_)
        set hasCollision(arg0: boolean)
        readonly properties: Internal.BlockBehaviour$Properties;
    }
    type BlockBehaviour_ = BlockBehaviour;
    abstract class VarHandle implements Internal.Constable {
        getAndBitwiseAnd(...arg0: any[]): any;
        weakCompareAndSet(...arg0: any[]): boolean;
        getAndBitwiseXor(...arg0: any[]): any;
        set(...arg0: any[]): void;
        accessModeType(arg0: Internal.VarHandle$AccessMode_): Internal.MethodType;
        compareAndSet(...arg0: any[]): boolean;
        compareAndExchangeAcquire(...arg0: any[]): any;
        getAndSet(...arg0: any[]): any;
        getAndBitwiseAndRelease(...arg0: any[]): any;
        hasInvokeExactBehavior(): boolean;
        weakCompareAndSetPlain(...arg0: any[]): boolean;
        getAndBitwiseXorAcquire(...arg0: any[]): any;
        getAndBitwiseXorRelease(...arg0: any[]): any;
        setVolatile(...arg0: any[]): void;
        getAndAddAcquire(...arg0: any[]): any;
        getAndAdd(...arg0: any[]): any;
        getAndAddRelease(...arg0: any[]): any;
        getAndBitwiseOr(...arg0: any[]): any;
        getAndBitwiseOrRelease(...arg0: any[]): any;
        getAndBitwiseOrAcquire(...arg0: any[]): any;
        static releaseFence(): void;
        static fullFence(): void;
        coordinateTypes(): Internal.List<typeof any>;
        static storeStoreFence(): void;
        getAcquire(...arg0: any[]): any;
        getOpaque(...arg0: any[]): any;
        toMethodHandle(arg0: Internal.VarHandle$AccessMode_): Internal.MethodHandle;
        setOpaque(...arg0: any[]): void;
        compareAndExchange(...arg0: any[]): any;
        compareAndExchangeRelease(...arg0: any[]): any;
        getVolatile(...arg0: any[]): any;
        getAndBitwiseAndAcquire(...arg0: any[]): any;
        varType(): typeof any;
        get(...arg0: any[]): any;
        abstract withInvokeBehavior(): this;
        getAndSetAcquire(...arg0: any[]): any;
        describeConstable(): Internal.Optional<Internal.VarHandle$VarHandleDesc>;
        static acquireFence(): void;
        getAndSetRelease(...arg0: any[]): any;
        weakCompareAndSetAcquire(...arg0: any[]): boolean;
        weakCompareAndSetRelease(...arg0: any[]): boolean;
        abstract withInvokeExactBehavior(): this;
        isAccessModeSupported(arg0: Internal.VarHandle$AccessMode_): boolean;
        static loadLoadFence(): void;
        setRelease(...arg0: any[]): void;
        set "volatile"(...arg0: any[])
        set opaque(...arg0: any[])
        set release(...arg0: any[])
    }
    type VarHandle_ = VarHandle;
    class VillagerProfessionBuilder extends Internal.BuilderBase<Internal.VillagerProfession> {
        constructor(i: ResourceLocation_)
        workSound(t: Internal.SoundEvent_): this;
        poiTypeTag(t: ResourceLocation_): this;
        poiType(t: ResourceLocation_): this;
        createObject(): any;
        requestedItems(t: Internal.Item_[]): this;
        secondaryPoi(t: Internal.Block_[]): this;
    }
    type VillagerProfessionBuilder_ = VillagerProfessionBuilder;
    interface DoubleStream$DoubleMapMultiConsumer {
        abstract accept(arg0: number, arg1: Internal.DoubleConsumer_): void;
        (arg0: number, arg1: Internal.DoubleConsumer): void;
    }
    type DoubleStream$DoubleMapMultiConsumer_ = DoubleStream$DoubleMapMultiConsumer;
    class CopperWindChimeBlock extends Internal.WindChimeTyableBlock {
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
    type CopperWindChimeBlock_ = CopperWindChimeBlock;
    abstract class AbstractGolem extends Internal.PathfinderMob {
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
    type AbstractGolem_ = AbstractGolem;
    class EntityAnchorArgument$Anchor extends Internal.Enum<Internal.EntityAnchorArgument$Anchor> {
        static getByName(arg0: string): Internal.EntityAnchorArgument$Anchor;
        static values(): Internal.EntityAnchorArgument$Anchor[];
        apply(arg0: Internal.CommandSourceStack_): Vec3d;
        apply(arg0: Internal.Entity_): Vec3d;
        static valueOf(arg0: string): Internal.EntityAnchorArgument$Anchor;
        static readonly FEET: Internal.EntityAnchorArgument$Anchor;
        static readonly EYES: Internal.EntityAnchorArgument$Anchor;
    }
    type EntityAnchorArgument$Anchor_ = "eyes" | "feet" | EntityAnchorArgument$Anchor;
    class Tadpole extends Internal.AbstractFish {
        constructor(arg0: Internal.EntityType_<Internal.AbstractFish>, arg1: Internal.Level_)
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
        /**
         * @deprecated
        */
        static loadDefaultDataFromBucketTag(arg0: Internal.Mob_, arg1: Internal.CompoundTag_): void;
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
        getBrain(): Internal.Brain<Internal.Tadpole>;
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
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
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
        get brain(): Internal.Brain<Internal.Tadpole>
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
        static HITBOX_WIDTH: 0.4;
        static ticksToBeFrog: 24000;
        static HITBOX_HEIGHT: 0.3;
    }
    type Tadpole_ = Tadpole;
    class QuickPlayLog$Type extends Internal.Enum<Internal.QuickPlayLog$Type> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.QuickPlayLog$Type;
        getSerializedName(): string;
        static values(): Internal.QuickPlayLog$Type[];
        get serializedName(): string
        static readonly MULTIPLAYER: Internal.QuickPlayLog$Type;
        static readonly SINGLEPLAYER: Internal.QuickPlayLog$Type;
        static readonly REALMS: Internal.QuickPlayLog$Type;
    }
    type QuickPlayLog$Type_ = QuickPlayLog$Type | "multiplayer" | "realms" | "singleplayer";
    class ForgeEventWrapper extends Internal.Record {
        constructor(name: string, eventBus: Internal.IEventBus_)
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$EntityPlaceEvent", handler: (event: Internal.BlockEvent$EntityPlaceEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterParticleProvidersEvent", handler: (event: Internal.RegisterParticleProvidersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton$Post", handler: (event: Internal.InputEvent$MouseButton$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled", handler: (event: Internal.ScreenEvent$MouseScrolled) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Save", handler: (event: Internal.LevelEvent$Save) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render$Post", handler: (event: Internal.ScreenEvent$Render$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Close", handler: (event: Internal.PlayerContainerEvent$Close) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$InteractionKeyMappingTriggered", handler: (event: Internal.InputEvent$InteractionKeyMappingTriggered) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.InterModProcessEvent", handler: (event: Internal.InterModProcessEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent", handler: (event: Internal.FMLClientSetupEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkEvent$Load", handler: (event: Internal.ChunkEvent$Load) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent", handler: (event: Internal.PlayerEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.AnimalTameEvent", handler: (event: Internal.AnimalTameEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific", handler: (event: Internal.PlayerInteractEvent$EntityInteractSpecific) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickItem", handler: (event: Internal.PlayerInteractEvent$RightClickItem) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled$Pre", handler: (event: Internal.ScreenEvent$MouseScrolled$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged", handler: (event: Internal.ScreenEvent$MouseDragged) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.jozufozu.flywheel.event.GatherContextEvent", handler: (event: Internal.GatherContextEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$ClientTickEvent", handler: (event: Internal.TickEvent$ClientTickEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.NoteBlockEvent$Play", handler: (event: Internal.NoteBlockEvent$Play) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingFallEvent", handler: (event: Internal.LivingFallEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent", handler: (event: Internal.LivingEquipmentChangeEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AdvancementEvent", handler: (event: Internal.AdvancementEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent", handler: (event: Internal.BlockEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderPlayerEvent", handler: (event: Internal.RenderPlayerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent", handler: (event: Internal.ModConfigEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyInput", handler: (event: Internal.ScreenEvent$KeyInput) => void): any;
        eventBus(): Internal.IEventBus;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent", handler: (event: Internal.ParallelDispatchEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent$ComputeCameraAngles", handler: (event: Internal.ViewportEvent$ComputeCameraAngles) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$GatherLoginPayloadsEvent", handler: (event: Internal.NetworkEvent$GatherLoginPayloadsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.server.permission.events.PermissionGatherEvent", handler: (event: Internal.PermissionGatherEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$RegisterAdditional", handler: (event: Internal.ModelEvent$RegisterAdditional) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$BakingCompleted", handler: (event: Internal.ModelEvent$BakingCompleted) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$CreateSkullModels", handler: (event: Internal.EntityRenderersEvent$CreateSkullModels) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.NewRegistryEvent", handler: (event: Internal.NewRegistryEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$RegisterGeometryLoaders", handler: (event: Internal.ModelEvent$RegisterGeometryLoaders) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$HarvestCheck", handler: (event: Internal.PlayerEvent$HarvestCheck) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TagsUpdatedEvent", handler: (event: Internal.TagsUpdatedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init$Pre", handler: (event: Internal.ScreenEvent$Init$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.EntityItemPickupEvent", handler: (event: Internal.EntityItemPickupEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.PlayLevelSoundEvent", handler: (event: Internal.PlayLevelSoundEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggingOut", handler: (event: Internal.ClientPlayerNetworkEvent$LoggingOut) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStoppedEvent", handler: (event: Internal.ServerStoppedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.simibubi.create.api.event.PipeCollisionEvent$Flow", handler: (event: Internal.PipeCollisionEvent$Flow) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStartingEvent", handler: (event: Internal.ServerStartingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerXpEvent", handler: (event: Internal.PlayerXpEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent", handler: (event: Internal.RenderGuiOverlayEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientChatReceivedEvent", handler: (event: Internal.ClientChatReceivedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggingIn", handler: (event: Internal.ClientPlayerNetworkEvent$LoggingIn) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped", handler: (event: Internal.ScreenEvent$CharacterTyped) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed$Pre", handler: (event: Internal.ScreenEvent$KeyPressed$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$BreakEvent", handler: (event: Internal.BlockEvent$BreakEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged$Post", handler: (event: Internal.ScreenEvent$MouseDragged$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobSpawnEvent$FinalizeSpawn", handler: (event: Internal.MobSpawnEvent$FinalizeSpawn) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.jozufozu.flywheel.event.BeginFrameEvent", handler: (event: Internal.BeginFrameEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$Color", handler: (event: Internal.RenderTooltipEvent$Color) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickEmpty", handler: (event: Internal.PlayerInteractEvent$LeftClickEmpty) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$ClientCustomPayloadEvent", handler: (event: Internal.NetworkEvent$ClientCustomPayloadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemPickupEvent", handler: (event: Internal.PlayerEvent$ItemPickupEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderArmEvent", handler: (event: Internal.RenderArmEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped$Post", handler: (event: Internal.ScreenEvent$CharacterTyped$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.sound.SoundEvent$SoundSourceEvent", handler: (event: Internal.SoundEvent$SoundSourceEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased", handler: (event: Internal.ScreenEvent$MouseButtonReleased) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed", handler: (event: Internal.ScreenEvent$KeyPressed) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.MovementInputUpdateEvent", handler: (event: Internal.MovementInputUpdateEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.village.WandererTradesEvent", handler: (event: Internal.WandererTradesEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingHurtEvent", handler: (event: Internal.LivingHurtEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$Key", handler: (event: Internal.InputEvent$Key) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.SpawnPlacementRegisterEvent", handler: (event: Internal.SpawnPlacementRegisterEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseScrollingEvent", handler: (event: Internal.InputEvent$MouseScrollingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent$Detonate", handler: (event: Internal.ExplosionEvent$Detonate) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", handler: (event: Internal.PlayerEvent$PlayerChangedDimensionEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent", handler: (event: Internal.InputEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientReloadListenersEvent", handler: (event: Internal.RegisterClientReloadListenersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.village.VillagerTradesEvent", handler: (event: Internal.VillagerTradesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderLevelStageEvent", handler: (event: Internal.RenderLevelStageEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent$Pre", handler: (event: Internal.RenderGuiOverlayEvent$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLConstructModEvent", handler: (event: Internal.FMLConstructModEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingAttackEvent", handler: (event: Internal.LivingAttackEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientTooltipComponentFactoriesEvent", handler: (event: Internal.RegisterClientTooltipComponentFactoriesEvent) => void): any;
        name(): string;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render$Background", handler: (event: Internal.ContainerScreenEvent$Render$Background) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityJoinLevelEvent", handler: (event: Internal.EntityJoinLevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent$Item", handler: (event: Internal.RegisterColorHandlersEvent$Item) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteract", handler: (event: Internal.PlayerInteractEvent$EntityInteract) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerDestroyItemEvent", handler: (event: Internal.PlayerDestroyItemEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkWatchEvent$Watch", handler: (event: Internal.ChunkWatchEvent$Watch) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemSmeltedEvent", handler: (event: Internal.PlayerEvent$ItemSmeltedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$RenderInventoryMobEffects", handler: (event: Internal.ScreenEvent$RenderInventoryMobEffects) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent", handler: (event: Internal.LivingEvent$LivingTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$RegisterRenderers", handler: (event: Internal.EntityRenderersEvent$RegisterRenderers) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobSpawnEvent", handler: (event: Internal.MobSpawnEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.data.event.GatherDataEvent", handler: (event: Internal.GatherDataEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$Pre", handler: (event: Internal.RenderTooltipEvent$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent$Post", handler: (event: Internal.RenderGuiOverlayEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientCommandsEvent", handler: (event: Internal.RegisterClientCommandsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Open", handler: (event: Internal.PlayerContainerEvent$Open) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent$Load", handler: (event: Internal.ChunkDataEvent$Load) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent", handler: (event: Internal.ModelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$ServerTickEvent", handler: (event: Internal.TickEvent$ServerTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render$Foreground", handler: (event: Internal.ContainerScreenEvent$Render$Foreground) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingKnockBackEvent", handler: (event: Internal.LivingKnockBackEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent", handler: (event: Internal.RenderTooltipEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Unload", handler: (event: Internal.LevelEvent$Unload) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLLoadCompleteEvent", handler: (event: Internal.FMLLoadCompleteEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Nodes", handler: (event: Internal.PermissionGatherEvent$Nodes) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent", handler: (event: Internal.EntityRenderersEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDamageEvent", handler: (event: Internal.LivingDamageEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent", handler: (event: Internal.RegisterColorHandlersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RecipesUpdatedEvent", handler: (event: Internal.RecipesUpdatedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.item.ItemEvent", handler: (event: Internal.ItemEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkEvent$Unload", handler: (event: Internal.ChunkEvent$Unload) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.ItemTooltipEvent", handler: (event: Internal.ItemTooltipEvent) => void): any;
        onGenericEvent(eventClass: any, genericClass: any, consumer: Internal.GenericForgeEventConsumer_): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Opening", handler: (event: Internal.ScreenEvent$Opening) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent$Block", handler: (event: Internal.RegisterColorHandlersEvent$Block) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.TextureStitchEvent", handler: (event: Internal.TextureStitchEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.mehvahdjukaar.moonlight.api.events.forge.VillagerBrainEvent", handler: (event: Internal.VillagerBrainEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged$Pre", handler: (event: Internal.ScreenEvent$MouseDragged$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.OnDatapackSyncEvent", handler: (event: Internal.OnDatapackSyncEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityEvent", handler: (event: Internal.EntityEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkWatchEvent", handler: (event: Internal.ChunkWatchEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.common.capabilities.RegisterCapabilitiesEvent", handler: (event: Internal.RegisterCapabilitiesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent", handler: (event: Internal.AdvancementEvent$AdvancementEarnEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$PlayerTickEvent", handler: (event: Internal.TickEvent$PlayerTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render", handler: (event: Internal.ContainerScreenEvent$Render) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent$Start", handler: (event: Internal.ExplosionEvent$Start) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.ProjectileImpactEvent", handler: (event: Internal.ProjectileImpactEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiEvent$Post", handler: (event: Internal.RenderGuiEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerLifecycleEvent", handler: (event: Internal.ServerLifecycleEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityAttributeCreationEvent", handler: (event: Internal.EntityAttributeCreationEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterGuiOverlaysEvent", handler: (event: Internal.RegisterGuiOverlaysEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterNamedRenderTypesEvent", handler: (event: Internal.RegisterNamedRenderTypesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$Clone", handler: (event: Internal.ClientPlayerNetworkEvent$Clone) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init$Post", handler: (event: Internal.ScreenEvent$Init$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent$ComputeFogColor", handler: (event: Internal.ViewportEvent$ComputeFogColor) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$ModifyBakingResult", handler: (event: Internal.ModelEvent$ModifyBakingResult) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Start", handler: (event: Internal.LivingEntityUseItemEvent$Start) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.InterModEnqueueEvent", handler: (event: Internal.InterModEnqueueEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped$Pre", handler: (event: Internal.ScreenEvent$CharacterTyped$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased", handler: (event: Internal.ScreenEvent$KeyReleased) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.RegisterGameTestsEvent", handler: (event: Internal.RegisterGameTestsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent", handler: (event: Internal.ContainerScreenEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.simibubi.create.api.event.PipeCollisionEvent", handler: (event: Internal.PipeCollisionEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render", handler: (event: Internal.ScreenEvent$Render) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.jozufozu.flywheel.event.RenderLayerEvent", handler: (event: Internal.RenderLayerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "be.florens.expandability.api.forge.LivingFluidCollisionEvent", handler: (event: Internal.LivingFluidCollisionEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickEmpty", handler: (event: Internal.PlayerInteractEvent$RightClickEmpty) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.MissingMappingsEvent", handler: (event: Internal.MissingMappingsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterShadersEvent", handler: (event: Internal.RegisterShadersEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityMountEvent", handler: (event: Internal.EntityMountEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent", handler: (event: Internal.LevelEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.CommandEvent", handler: (event: Internal.CommandEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterKeyMappingsEvent", handler: (event: Internal.RegisterKeyMappingsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed$Post", handler: (event: Internal.ScreenEvent$MouseButtonPressed$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.item.ItemTossEvent", handler: (event: Internal.ItemTossEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased$Pre", handler: (event: Internal.ScreenEvent$MouseButtonReleased$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderHighlightEvent", handler: (event: Internal.RenderHighlightEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementProgressEvent", handler: (event: Internal.AdvancementEvent$AdvancementProgressEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent", handler: (event: Internal.ChunkDataEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.IdMappingEvent", handler: (event: Internal.IdMappingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEvent", handler: (event: Internal.LivingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.DataPackRegistryEvent$NewRegistry", handler: (event: Internal.DataPackRegistryEvent$NewRegistry) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingExperienceDropEvent", handler: (event: Internal.LivingExperienceDropEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed", handler: (event: Internal.ScreenEvent$MouseButtonPressed) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$RenderTickEvent", handler: (event: Internal.TickEvent$RenderTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.client.event.RenderLivingEvent", generic: Special.JavaClass, handler: (event: Internal.RenderLivingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent$Reloading", handler: (event: Internal.ModConfigEvent$Reloading) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerRespawnEvent", handler: (event: Internal.PlayerEvent$PlayerRespawnEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiEvent", handler: (event: Internal.RenderGuiEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerAboutToStartEvent", handler: (event: Internal.ServerAboutToStartEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent", handler: (event: Internal.CustomizeGuiOverlayEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init", handler: (event: Internal.ScreenEvent$Init) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDeathEvent", handler: (event: Internal.LivingDeathEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkEvent", handler: (event: Internal.ChunkEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityEvent$EnteringSection", handler: (event: Internal.EntityEvent$EnteringSection) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterEntitySpectatorShadersEvent", handler: (event: Internal.RegisterEntitySpectatorShadersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.eventbus.api.GenericEvent", generic: Special.JavaClass, handler: (event: Internal.GenericEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render$Pre", handler: (event: Internal.ScreenEvent$Render$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent", handler: (event: Internal.LivingEntityUseItemEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$StartTracking", handler: (event: Internal.PlayerEvent$StartTracking) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AttackEntityEvent", handler: (event: Internal.AttackEntityEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased$Post", handler: (event: Internal.ScreenEvent$KeyReleased$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderHighlightEvent$Block", handler: (event: Internal.RenderHighlightEvent$Block) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Tick", handler: (event: Internal.LivingEntityUseItemEvent$Tick) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.FillBucketEvent", handler: (event: Internal.FillBucketEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.BuildCreativeModeTabContentsEvent", handler: (event: Internal.BuildCreativeModeTabContentsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemCraftedEvent", handler: (event: Internal.PlayerEvent$ItemCraftedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton", handler: (event: Internal.InputEvent$MouseButton) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.mehvahdjukaar.moonlight.api.events.forge.FireConsumeBlockEvent", handler: (event: Internal.FireConsumeBlockEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.TextureStitchEvent$Post", handler: (event: Internal.TextureStitchEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterRecipeBookCategoriesEvent", handler: (event: Internal.RegisterRecipeBookCategoriesEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerXpEvent$PickupXp", handler: (event: Internal.PlayerXpEvent$PickupXp) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent", handler: (event: Internal.ScreenEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$LevelTickEvent", handler: (event: Internal.TickEvent$LevelTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent", handler: (event: Internal.ExplosionEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent$RenderFog", handler: (event: Internal.ViewportEvent$RenderFog) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed$Post", handler: (event: Internal.ScreenEvent$KeyPressed$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.RegisterCommandsEvent", handler: (event: Internal.RegisterCommandsEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingChangeTargetEvent", handler: (event: Internal.LivingChangeTargetEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedInEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent$Loading", handler: (event: Internal.ModConfigEvent$Loading) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled$Post", handler: (event: Internal.ScreenEvent$MouseScrolled$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$GatherComponents", handler: (event: Internal.RenderTooltipEvent$GatherComponents) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$AddLayers", handler: (event: Internal.EntityRenderersEvent$AddLayers) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.AddPackFindersEvent", handler: (event: Internal.AddPackFindersEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$NeighborNotifyEvent", handler: (event: Internal.BlockEvent$NeighborNotifyEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.sound.SoundEvent", handler: (event: net.minecraftforge.client.event.sound.SoundEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityLeaveLevelEvent", handler: (event: Internal.EntityLeaveLevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.event.AttachCapabilitiesEvent", generic: Special.JavaClass, handler: (event: Internal.AttachCapabilitiesEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton$Pre", handler: (event: Internal.InputEvent$MouseButton$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent$Chat", handler: (event: Internal.CustomizeGuiOverlayEvent$Chat) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$ServerCustomPayloadEvent", handler: (event: Internal.NetworkEvent$ServerCustomPayloadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.CriticalHitEvent", handler: (event: Internal.CriticalHitEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$RegisterLayerDefinitions", handler: (event: Internal.EntityRenderersEvent$RegisterLayerDefinitions) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderPlayerEvent$Pre", handler: (event: Internal.RenderPlayerEvent$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.NoteBlockEvent", handler: (event: Internal.NoteBlockEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStoppingEvent", handler: (event: Internal.ServerStoppingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish", handler: (event: Internal.LivingEntityUseItemEvent$Finish) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased$Pre", handler: (event: Internal.ScreenEvent$KeyReleased$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Load", handler: (event: Internal.LevelEvent$Load) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "top.theillusivec4.caelus.api.RenderCapeEvent", handler: (event: Internal.RenderCapeEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDropsEvent", handler: (event: Internal.LivingDropsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LootingLevelEvent", handler: (event: Internal.LootingLevelEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientChatEvent", handler: (event: Internal.ClientChatEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.simibubi.create.api.event.PipeCollisionEvent$Spill", handler: (event: Internal.PipeCollisionEvent$Spill) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "plus.dragons.createdragonlib.init.FillCreateItemGroupEvent", handler: (event: Internal.FillCreateItemGroupEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.client.event.RenderLivingEvent$Pre", generic: Special.JavaClass, handler: (event: Internal.RenderLivingEvent$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.ItemAttributeModifierEvent", handler: (event: Internal.ItemAttributeModifierEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent", handler: (event: Internal.ClientPlayerNetworkEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$BlockToolModificationEvent", handler: (event: Internal.BlockEvent$BlockToolModificationEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent$DebugText", handler: (event: Internal.CustomizeGuiOverlayEvent$DebugText) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.AddReloadListenerEvent", handler: (event: Internal.AddReloadListenerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent", handler: (event: Internal.TickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStartedEvent", handler: (event: Internal.ServerStartedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased$Post", handler: (event: Internal.ScreenEvent$MouseButtonReleased$Post) => void): any;
        onEvent(eventClass: any, consumer: Internal.ForgeEventConsumer_): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerWakeUpEvent", handler: (event: Internal.PlayerWakeUpEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$Clone", handler: (event: Internal.PlayerEvent$Clone) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent", handler: (event: Internal.NetworkEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityAttributeModificationEvent", handler: (event: Internal.EntityAttributeModificationEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseInput", handler: (event: Internal.ScreenEvent$MouseInput) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.DataPackRegistryEvent", handler: (event: Internal.DataPackRegistryEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent", handler: (event: Internal.ModLifecycleEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "be.florens.expandability.api.forge.PlayerSwimEvent", handler: (event: Internal.PlayerSwimEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent", handler: (event: Internal.PlayerContainerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityEvent$Size", handler: (event: Internal.EntityEvent$Size) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$FarmlandTrampleEvent", handler: (event: Internal.BlockEvent$FarmlandTrampleEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterItemDecorationsEvent", handler: (event: Internal.RegisterItemDecorationsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent", handler: (event: Internal.ViewportEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.jozufozu.flywheel.event.ReloadRenderersEvent", handler: (event: Internal.ReloadRenderersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.RegisterEvent", handler: (event: Internal.RegisterEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.LootTableLoadEvent", handler: (event: Internal.LootTableLoadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent$Save", handler: (event: Internal.ChunkDataEvent$Save) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickBlock", handler: (event: Internal.PlayerInteractEvent$RightClickBlock) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedOutEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedOutEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.ServerChatEvent", handler: (event: Internal.ServerChatEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.EnderManAngerEvent", handler: (event: Internal.EnderManAngerEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderHandEvent", handler: (event: Internal.RenderHandEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$BackgroundRendered", handler: (event: Internal.ScreenEvent$BackgroundRendered) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent", handler: (event: Internal.PlayerInteractEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed$Pre", handler: (event: Internal.ScreenEvent$MouseButtonPressed$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent", handler: (event: Internal.FMLCommonSetupEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed", handler: (event: Internal.PlayerEvent$BreakSpeed) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickBlock", handler: (event: Internal.PlayerInteractEvent$LeftClickBlock) => void): any;
    }
    type ForgeEventWrapper_ = ForgeEventWrapper;
    interface IForgePackResources {
        isHidden(): boolean;
        getChildren(): Internal.Collection<Internal.PackResources>;
        get hidden(): boolean
        get children(): Internal.Collection<Internal.PackResources>
    }
    type IForgePackResources_ = IForgePackResources;
    interface GuiEventListener extends Internal.TabOrderedElement {
        charTyped(arg0: string, arg1: number): boolean;
        abstract isFocused(): boolean;
        abstract setFocused(arg0: boolean): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        getTabOrderGroup(): number;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getCurrentFocusPath(): Internal.ComponentPath;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        isMouseOver(arg0: number, arg1: number): boolean;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        get focused(): boolean
        set focused(arg0: boolean)
        get tabOrderGroup(): number
        get currentFocusPath(): Internal.ComponentPath
        get rectangle(): Internal.ScreenRectangle
        readonly DOUBLE_CLICK_THRESHOLD_MS: 250;
    }
    type GuiEventListener_ = GuiEventListener;
    interface ChestMenuClickCallback {
        abstract onClick(arg0: Internal.ChestMenuClickEvent_): void;
        (arg0: Internal.ChestMenuClickEvent): void;
    }
    type ChestMenuClickCallback_ = ChestMenuClickCallback;
    class CaveVinesBlock extends Internal.GrowingPlantHeadBlock implements Internal.CaveVines, Internal.BonemealableBlock {
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
        static emission(arg0: number): Internal.ToIntFunction<Internal.BlockState>;
        static use(arg0: Internal.Entity_, arg1: Internal.BlockState_, arg2: Internal.Level_, arg3: BlockPos_): Internal.InteractionResult;
        static hasGlowBerries(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type CaveVinesBlock_ = CaveVinesBlock;
    interface DoubleToLongFunction {
        abstract applyAsLong(arg0: number): number;
        (arg0: number): number;
    }
    type DoubleToLongFunction_ = DoubleToLongFunction;
    class SnowyDirtBlock extends Internal.Block {
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
        static readonly SNOWY: Internal.BooleanProperty;
    }
    type SnowyDirtBlock_ = SnowyDirtBlock;
    class TrophyBlock extends Internal.Block {
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
    type TrophyBlock_ = TrophyBlock;
    class ChimneyBlock$Type extends Internal.Enum<Internal.ChimneyBlock$Type> {
        static values(): Internal.ChimneyBlock$Type[];
        static valueOf(arg0: string): Internal.ChimneyBlock$Type;
        static readonly DIRTY: Internal.ChimneyBlock$Type;
        static readonly CLEAN: Internal.ChimneyBlock$Type;
    }
    type ChimneyBlock$Type_ = "dirty" | ChimneyBlock$Type | "clean";
    class PoweredLatchBlock extends Internal.ToggleLatchBlock {
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
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static POWERED_SIDE: Internal.BooleanProperty;
    }
    type PoweredLatchBlock_ = PoweredLatchBlock;
    interface StationMapData {
        abstract addStationMarker(arg0: Internal.StationMarker_): void;
        abstract toggleStation(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.StationBlockEntity_): boolean;
    }
    type StationMapData_ = StationMapData;
    class SchematicannonBlock extends Internal.Block implements Internal.IBE<Internal.SchematicannonBlockEntity> {
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
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.SchematicannonBlockEntity;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        getBlockEntityClass(): typeof Internal.SchematicannonBlockEntity;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.SchematicannonBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
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
        getBlockEntityType(): Internal.BlockEntityType<Internal.SchematicannonBlockEntity>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
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
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.SchematicannonBlockEntity>;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.SchematicannonBlockEntity>): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockEntityClass(): typeof Internal.SchematicannonBlockEntity
        get blockEntityType(): Internal.BlockEntityType<Internal.SchematicannonBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type SchematicannonBlock_ = SchematicannonBlock;
    class RuleBasedBlockStateProvider$Rule extends Internal.Record {
        constructor(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: Internal.BlockStateProvider_)
        ifTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        then(): Internal.BlockStateProvider;
        static readonly CODEC: Internal.Codec<Internal.RuleBasedBlockStateProvider$Rule>;
    }
    type RuleBasedBlockStateProvider$Rule_ = RuleBasedBlockStateProvider$Rule;
    class Display$ItemDisplay$ItemRenderState extends Internal.Record {
        constructor(arg0: Internal.ItemStack_, arg1: Internal.ItemDisplayContext_)
        itemTransform(): Internal.ItemDisplayContext;
        itemStack(): Internal.ItemStack;
    }
    type Display$ItemDisplay$ItemRenderState_ = Display$ItemDisplay$ItemRenderState;
    interface LevelTimeAccess extends Internal.LevelReader {
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        abstract dayTime(): number;
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
        getTimeOfDay(arg0: number): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        canSeeSky(arg0: BlockPos_): boolean;
        abstract isClientSide(): boolean;
        abstract enabledFeatures(): Internal.FeatureFlagSet;
        getMoonPhase(): number;
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
        getMoonBrightness(): number;
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
        get moonPhase(): number
        get skyDarken(): number
        get minBuildHeight(): number
        get sectionsCount(): number
        /**
         * @deprecated
        */
        get seaLevel(): number
        get maxBuildHeight(): number
        get moonBrightness(): number
        get lightEngine(): Internal.LevelLightEngine
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get worldBorder(): Internal.WorldBorder
        get maxLightLevel(): number
    }
    type LevelTimeAccess_ = LevelTimeAccess;
    class AttackEntityEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.Entity_)
        getTarget(): Internal.Entity;
        getEntity(): Internal.LivingEntity;
        get target(): Internal.Entity
        get entity(): Internal.LivingEntity
    }
    type AttackEntityEvent_ = AttackEntityEvent;
    class SimpleKineticBlockEntity extends Internal.KineticBlockEntity {
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
    type SimpleKineticBlockEntity_ = SimpleKineticBlockEntity;
    class IRotate$SpeedLevel extends Internal.Enum<Internal.IRotate$SpeedLevel> {
        static getFormattedSpeedText(arg0: number, arg1: boolean): Internal.LangBuilder;
        getColor(): number;
        getTextColor(): Internal.ChatFormatting;
        static of(arg0: number): Internal.IRotate$SpeedLevel;
        static valueOf(arg0: string): Internal.IRotate$SpeedLevel;
        getParticleSpeed(): number;
        static values(): Internal.IRotate$SpeedLevel[];
        getSpeedValue(): number;
        get color(): number
        get textColor(): Internal.ChatFormatting
        get particleSpeed(): number
        get speedValue(): number
        static readonly MEDIUM: Internal.IRotate$SpeedLevel;
        static readonly NONE: Internal.IRotate$SpeedLevel;
        static readonly SLOW: Internal.IRotate$SpeedLevel;
        static readonly FAST: Internal.IRotate$SpeedLevel;
    }
    type IRotate$SpeedLevel_ = "medium" | "slow" | IRotate$SpeedLevel | "fast" | "none";
    interface RenderLayerParent <T extends Internal.Entity, M extends Internal.EntityModel<T>> {
        abstract getModel(): M;
        abstract getTextureLocation(arg0: T): ResourceLocation;
        get model(): M
    }
    type RenderLayerParent_<T extends Internal.Entity, M extends Internal.EntityModel<T>> = RenderLayerParent<T, M>;
    class FluidComponents$1 implements Internal.RecipeComponent<Internal.InputFluid> {
        isInput(recipe: Internal.RecipeJS_, value: Internal.InputFluid_, match: Internal.ReplacementMatch_): boolean;
        write(recipe: Internal.RecipeJS_, value: Internal.InputFluid_): Internal.JsonElement;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<Internal.InputFluid, O>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, Internal.InputFluid>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        replaceInput(recipe: Internal.RecipeJS_, original: Internal.InputFluid_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): Internal.InputFluid;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.InputFluid>, json: Internal.JsonObject_): void;
        role(): Internal.ComponentRole;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.InputFluid>;
        componentClass(): typeof any;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, Internal.InputFluid>>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        read(recipe: Internal.RecipeJS_, from: any): Internal.InputFluid;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        checkEmpty(key: Internal.RecipeKey_<Internal.InputFluid>, value: Internal.InputFluid_): string;
        static builder(): Internal.RecipeComponentBuilder;
        orSelf(): Internal.RecipeComponent<Internal.InputFluid>;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<Internal.InputFluid>;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<Internal.InputFluid, O>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        checkValueHasChanged(oldValue: Internal.InputFluid_, newValue: Internal.InputFluid_): boolean;
        isOutput(recipe: Internal.RecipeJS_, value: Internal.InputFluid_, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.InputFluid>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<Internal.InputFluid>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<Internal.InputFluid>;
        replaceOutput(recipe: Internal.RecipeJS_, original: Internal.InputFluid_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): Internal.InputFluid;
        asArray(): Internal.ArrayRecipeComponent<Internal.InputFluid>;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.InputFluid>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.InputFluid>, map: Internal.Map_<any, any>): void;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<Internal.InputFluid>;
    }
    type FluidComponents$1_ = FluidComponents$1;
    class DecimalFormatSymbols implements Internal.Cloneable, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Locale_)
        clone(): any;
        getDecimalSeparator(): string;
        setDecimalSeparator(arg0: string): void;
        setInternationalCurrencySymbol(arg0: string): void;
        getInternationalCurrencySymbol(): string;
        static getAvailableLocales(): Internal.Locale[];
        getNaN(): string;
        getMinusSign(): string;
        getMonetaryDecimalSeparator(): string;
        getCurrency(): Internal.Currency;
        setCurrency(arg0: Internal.Currency_): void;
        getPercent(): string;
        getPerMill(): string;
        setPerMill(arg0: string): void;
        setPercent(arg0: string): void;
        getDigit(): string;
        setMonetaryDecimalSeparator(arg0: string): void;
        setMonetaryGroupingSeparator(arg0: string): void;
        static getInstance(): Internal.DecimalFormatSymbols;
        setMinusSign(arg0: string): void;
        getGroupingSeparator(): string;
        static getInstance(arg0: Internal.Locale_): Internal.DecimalFormatSymbols;
        getCurrencySymbol(): string;
        getPatternSeparator(): string;
        getZeroDigit(): string;
        setNaN(arg0: string): void;
        getExponentSeparator(): string;
        setCurrencySymbol(arg0: string): void;
        setGroupingSeparator(arg0: string): void;
        setZeroDigit(arg0: string): void;
        setDigit(arg0: string): void;
        setPatternSeparator(arg0: string): void;
        setExponentSeparator(arg0: string): void;
        getMonetaryGroupingSeparator(): string;
        getInfinity(): string;
        setInfinity(arg0: string): void;
        get decimalSeparator(): string
        set decimalSeparator(arg0: string)
        set internationalCurrencySymbol(arg0: string)
        get internationalCurrencySymbol(): string
        get availableLocales(): Internal.Locale[]
        get naN(): string
        get minusSign(): string
        get monetaryDecimalSeparator(): string
        get currency(): Internal.Currency
        set currency(arg0: Internal.Currency_)
        get percent(): string
        get perMill(): string
        set perMill(arg0: string)
        set percent(arg0: string)
        get digit(): string
        set monetaryDecimalSeparator(arg0: string)
        set monetaryGroupingSeparator(arg0: string)
        get instance(): Internal.DecimalFormatSymbols
        set minusSign(arg0: string)
        get groupingSeparator(): string
        get currencySymbol(): string
        get patternSeparator(): string
        get zeroDigit(): string
        set naN(arg0: string)
        get exponentSeparator(): string
        set currencySymbol(arg0: string)
        set groupingSeparator(arg0: string)
        set zeroDigit(arg0: string)
        set digit(arg0: string)
        set patternSeparator(arg0: string)
        set exponentSeparator(arg0: string)
        get monetaryGroupingSeparator(): string
        get infinity(): string
        set infinity(arg0: string)
    }
    type DecimalFormatSymbols_ = DecimalFormatSymbols;
    class LlamaSpit extends Internal.Projectile {
        constructor(arg0: Internal.EntityType_<Internal.LlamaSpit>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: Internal.Llama_)
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
    type LlamaSpit_ = LlamaSpit;
    interface EntityTypeTest <B, T extends B> {
        abstract tryCast(arg0: B): T;
        abstract getBaseClass(): B;
        forClass<B, T extends B>(arg0: T): this;
        get baseClass(): B
    }
    type EntityTypeTest_<B, T extends B> = EntityTypeTest<B, T>;
    class InSquarePlacement extends Internal.PlacementModifier {
        constructor()
        static spread(): Internal.InSquarePlacement;
        static readonly CODEC: Internal.Codec<Internal.InSquarePlacement>;
    }
    type InSquarePlacement_ = InSquarePlacement;
    interface PoolSubpageMetric {
        abstract elementSize(): number;
        abstract numAvailable(): number;
        abstract pageSize(): number;
        abstract maxNumElements(): number;
    }
    type PoolSubpageMetric_ = PoolSubpageMetric;
    interface Boolean2LongFunction extends it.unimi.dsi.fastutil.Function<boolean, number> {
        getOrDefault(arg0: boolean, arg1: number): number;
        composeInt(arg0: Internal.Int2BooleanFunction_): Internal.Int2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<boolean, T>;
        abstract get(arg0: boolean): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Boolean2CharFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, boolean>): Internal.Function<T, number>;
        composeLong(arg0: Internal.Long2BooleanFunction_): Internal.Long2LongFunction;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Boolean2ByteFunction;
        composeChar(arg0: Internal.Char2BooleanFunction_): Internal.Char2LongFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Boolean2DoubleFunction;
        composeFloat(arg0: Internal.Float2BooleanFunction_): Internal.Float2LongFunction;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Boolean2ReferenceFunction<T>;
        defaultReturnValue(): number;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Boolean2FloatFunction;
        composeObject<T>(arg0: Internal.Object2BooleanFunction_<T>): Internal.Object2LongFunction<T>;
        composeDouble(arg0: Internal.Double2BooleanFunction_): Internal.Double2LongFunction;
        remove(arg0: boolean): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeByte(arg0: Internal.Byte2BooleanFunction_): Internal.Byte2LongFunction;
        containsKey(arg0: boolean): boolean;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Boolean2IntFunction;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Boolean2ShortFunction;
        size(): number;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Boolean2ObjectFunction<T>;
        composeShort(arg0: Internal.Short2BooleanFunction_): Internal.Short2LongFunction;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        clear(): void;
        apply(arg0: boolean): number;
        put(arg0: boolean, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2BooleanFunction_<T>): Internal.Reference2LongFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: boolean, arg1: number): number;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: number): void;
        (arg0: boolean): number;
    }
    type Boolean2LongFunction_ = Boolean2LongFunction;
    class ScaffoldingBlockItem extends Internal.BlockItem {
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
    type ScaffoldingBlockItem_ = ScaffoldingBlockItem;
    class MenuType <T extends Internal.AbstractContainerMenu> implements Internal.FeatureElement, Internal.IForgeMenuType<T> {
        constructor(arg0: Internal.MenuType$MenuSupplier_<T>, arg1: Internal.FeatureFlagSet_)
        create(arg0: number, arg1: Internal.Inventory_, arg2: Internal.FriendlyByteBuf_): any;
        requiredFeatures(): Internal.FeatureFlagSet;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        create(arg0: number, arg1: Internal.Inventory_): T;
        static create<T extends Internal.AbstractContainerMenu>(arg0: Internal.IContainerFactory_<T>): Internal.MenuType<T>;
        static readonly MERCHANT: Internal.MenuType<Internal.MerchantMenu>;
        static readonly CARTOGRAPHY_TABLE: Internal.MenuType<Internal.CartographyTableMenu>;
        static readonly SMOKER: Internal.MenuType<Internal.SmokerMenu>;
        static readonly GENERIC_9x6: Internal.MenuType<Internal.ChestMenu>;
        static readonly ANVIL: Internal.MenuType<Internal.AnvilMenu>;
        static readonly GENERIC_9x4: Internal.MenuType<Internal.ChestMenu>;
        static readonly BEACON: Internal.MenuType<Internal.BeaconMenu>;
        static readonly LOOM: Internal.MenuType<Internal.LoomMenu>;
        static readonly STONECUTTER: Internal.MenuType<Internal.StonecutterMenu>;
        static readonly GENERIC_9x5: Internal.MenuType<Internal.ChestMenu>;
        static readonly LECTERN: Internal.MenuType<Internal.LecternMenu>;
        static readonly SHULKER_BOX: Internal.MenuType<Internal.ShulkerBoxMenu>;
        static readonly CRAFTING: Internal.MenuType<Internal.CraftingMenu>;
        static readonly SMITHING: Internal.MenuType<Internal.SmithingMenu>;
        static readonly ENCHANTMENT: Internal.MenuType<Internal.EnchantmentMenu>;
        static readonly GENERIC_9x2: Internal.MenuType<Internal.ChestMenu>;
        static readonly GENERIC_3x3: Internal.MenuType<Internal.DispenserMenu>;
        static readonly FURNACE: Internal.MenuType<Internal.FurnaceMenu>;
        static readonly GENERIC_9x3: Internal.MenuType<Internal.ChestMenu>;
        static readonly GRINDSTONE: Internal.MenuType<Internal.GrindstoneMenu>;
        static readonly GENERIC_9x1: Internal.MenuType<Internal.ChestMenu>;
        static readonly BREWING_STAND: Internal.MenuType<Internal.BrewingStandMenu>;
        static readonly HOPPER: Internal.MenuType<Internal.HopperMenu>;
        static readonly BLAST_FURNACE: Internal.MenuType<Internal.BlastFurnaceMenu>;
    }
    type MenuType_<T extends Internal.AbstractContainerMenu> = Special.Menu | MenuType<T>;
    class LivingEntity$Fallsounds extends Internal.Record {
        constructor(small: Internal.SoundEvent_, big: Internal.SoundEvent_)
        small(): Internal.SoundEvent;
        big(): Internal.SoundEvent;
    }
    type LivingEntity$Fallsounds_ = LivingEntity$Fallsounds;
    interface Reference2FloatFunction <K> extends it.unimi.dsi.fastutil.Function<K, number>, Internal.ToDoubleFunction<K> {
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2FloatFunction;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Reference2CharFunction<K>;
        removeFloat(arg0: any): number;
        defaultReturnValue(arg0: number): void;
        getOrDefault(arg0: any, arg1: number): number;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2FloatFunction;
        apply(arg0: K): number;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2FloatFunction;
        containsKey(arg0: any): boolean;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2FloatFunction<T>;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2FloatFunction;
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2FloatFunction;
        applyAsDouble(arg0: K): number;
        put(arg0: K, arg1: number): number;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        abstract getFloat(arg0: any): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Reference2IntFunction<K>;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Reference2LongFunction<K>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        size(): number;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2FloatFunction<T>;
        clear(): void;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Reference2ByteFunction<K>;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2FloatFunction;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Reference2ShortFunction<K>;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2FloatFunction;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        identity<T>(): Internal.Function<T, T>;
        (arg0: any): number;
    }
    type Reference2FloatFunction_<K> = Reference2FloatFunction<K>;
    class ModularSeatProperty extends Internal.Enum<Internal.ModularSeatProperty> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(name: string): Internal.ModularSeatProperty;
        getSerializedName(): string;
        getLocation(): string;
        static values(): Internal.ModularSeatProperty[];
        get serializedName(): string
        get location(): string
        static readonly OUTER_LEFT: Internal.ModularSeatProperty;
        static readonly LEFT: Internal.ModularSeatProperty;
        static readonly MIDDLE: Internal.ModularSeatProperty;
        static readonly RIGHT: Internal.ModularSeatProperty;
        static readonly OUTER_RIGHT: Internal.ModularSeatProperty;
        static readonly INNER_RIGHT: Internal.ModularSeatProperty;
        static readonly SINGLE: Internal.ModularSeatProperty;
        static readonly INNER_LEFT: Internal.ModularSeatProperty;
    }
    type ModularSeatProperty_ = "inner_left" | "single" | "middle" | "outer_left" | "outer_right" | "inner_right" | "right" | ModularSeatProperty | "left";
    class DragonSittingFlamingPhase extends Internal.AbstractDragonSittingPhase {
        constructor(arg0: Internal.EnderDragon_)
        resetFlameCount(): void;
        getPhase(): Internal.EnderDragonPhase<Internal.DragonSittingFlamingPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonSittingFlamingPhase>
    }
    type DragonSittingFlamingPhase_ = DragonSittingFlamingPhase;
    class GrindstoneBlock extends Internal.FaceAttachedHorizontalDirectionalBlock {
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
        static readonly WALL_EAST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_RIGHT_POST: Internal.ArrayVoxelShape;
    }
    type GrindstoneBlock_ = GrindstoneBlock;
    class WaterFluid$Flowing extends Internal.WaterFluid {
        constructor()
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        arch$registryName(): ResourceLocation;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
    }
    type WaterFluid$Flowing_ = WaterFluid$Flowing;
    interface Function10 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function3<T8, T9, T10, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function8<T3, T4, T5, T6, T7, T8, T9, T10, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function<T10, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function5<T6, T7, T8, T9, T10, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.BiFunction<T9, T10, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function7<T4, T5, T6, T7, T8, T9, T10, R>>;
        curry(): Internal.Function<T1, Internal.Function9<T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function6<T5, T6, T7, T8, T9, T10, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function4<T7, T8, T9, T10, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R;
    }
    type Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>;
    class VillageSectionsDebugRenderer implements Internal.DebugRenderer$SimpleDebugRenderer {
        setNotVillageSection(arg0: Internal.SectionPos_): void;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        setVillageSection(arg0: Internal.SectionPos_): void;
        clear(): void;
        set notVillageSection(arg0: Internal.SectionPos_)
        set villageSection(arg0: Internal.SectionPos_)
    }
    type VillageSectionsDebugRenderer_ = VillageSectionsDebugRenderer;
    class VillagerTypeBuilder extends Internal.BuilderBase<Internal.VillagerType> {
        constructor(i: ResourceLocation_)
        createObject(): any;
    }
    type VillagerTypeBuilder_ = VillagerTypeBuilder;
    class LockCode {
        constructor(arg0: string)
        static fromTag(arg0: Internal.CompoundTag_): Internal.LockCode;
        unlocksWith(arg0: Internal.ItemStack_): boolean;
        addToTag(arg0: Internal.CompoundTag_): void;
        static readonly NO_LOCK: Internal.LockCode;
        static readonly TAG_LOCK: "Lock";
    }
    type LockCode_ = LockCode;
    class PieBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Supplier_<Internal.Item>)
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
        getMaxBites(): number;
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
        getPieSliceItem(): Internal.ItemStack;
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
        get maxBites(): number
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get pieSliceItem(): Internal.ItemStack
        get mod(): string
        static readonly BITES: Internal.IntegerProperty;
        readonly pieSlice: Internal.Supplier<Internal.Item>;
        static readonly FACING: Internal.DirectionProperty;
    }
    type PieBlock_ = PieBlock;
    class BaseCoralPlantBlock extends Internal.BaseCoralPlantTypeBlock {
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
    }
    type BaseCoralPlantBlock_ = BaseCoralPlantBlock;
    class SmithingTransformRecipe implements Internal.SmithingRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.Ingredient_, arg2: Internal.Ingredient_, arg3: Internal.Ingredient_, arg4: Internal.ItemStack_)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        isBaseIngredient(arg0: Internal.ItemStack_): boolean;
        assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        isTemplateIngredient(arg0: Internal.ItemStack_): boolean;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        isAdditionIngredient(arg0: Internal.ItemStack_): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        readonly addition: Internal.Ingredient;
        readonly template: Internal.Ingredient;
        readonly base: Internal.Ingredient;
    }
    type SmithingTransformRecipe_ = SmithingTransformRecipe;
    class HorizontalDirectionalBlockBuilder extends Internal.BlockBuilder {
        constructor(i: ResourceLocation_)
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        createObject(): Internal.Block;
        textureAll(tex: string): this;
    }
    type HorizontalDirectionalBlockBuilder_ = HorizontalDirectionalBlockBuilder;
    interface AccessorWeightedRandomList <E> {
        abstract bookshelf$getEntries(): Internal.ImmutableList<E>;
        abstract bookshelf$getTotalWeight(): number;
    }
    type AccessorWeightedRandomList_<E> = AccessorWeightedRandomList<E>;
}
declare namespace net.mehvahdjukaar.supplementaries.common.items {
    abstract class InstrumentItem extends Internal.Item {
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        spawnNoteParticle(level: Internal.Level_, entity: Internal.LivingEntity_, note: number): void;
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
        getVolume(): number;
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
        getSound(): Internal.SoundEvent;
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
        getPitch(note: number): number;
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
        get volume(): number
        set armorKnockbackResistance(knockbackResistance: number)
        get sound(): Internal.SoundEvent
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type InstrumentItem_ = InstrumentItem;
}
declare namespace it.unimi.dsi.fastutil.longs {
    interface LongPredicate extends Internal.Predicate<number>, Internal.LongPredicate {
        /**
         * @deprecated
        */
        test(arg0: any): boolean;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        or(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): this;
        negate(): Internal.LongPredicate;
        and(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): this;
        abstract test(arg0: number): boolean;
        /**
         * @deprecated
        */
        and(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        or(arg0: Internal.LongPredicate_): this;
        /**
         * @deprecated
        */
        or(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        and(arg0: Internal.LongPredicate_): Internal.LongPredicate;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        (arg0: number): boolean;
    }
    type LongPredicate_ = LongPredicate;
}
declare namespace com.mojang.realmsclient.dto {
    class PlayerInfo extends Internal.ValueObject implements Internal.ReflectionBasedSerialization {
        constructor()
        setOnline(arg0: boolean): void;
        setAccepted(arg0: boolean): void;
        setOperator(arg0: boolean): void;
        getOnline(): boolean;
        getAccepted(): boolean;
        setName(arg0: string): void;
        getName(): string;
        setUuid(arg0: string): void;
        isOperator(): boolean;
        getUuid(): string;
        set online(arg0: boolean)
        set accepted(arg0: boolean)
        set operator(arg0: boolean)
        get online(): boolean
        get accepted(): boolean
        set name(arg0: string)
        get name(): string
        set uuid(arg0: string)
        get operator(): boolean
        get uuid(): string
    }
    type PlayerInfo_ = PlayerInfo;
}
