/// <reference path="./internal_*.d.ts" />
declare namespace com.google.common.base {
    abstract class Optional <T> implements Internal.Serializable {
        abstract or(arg0: com.google.common.base.Optional_<T>): this;
        abstract transform<V>(arg0: com.google.common.base.Function_<T, V>): com.google.common.base.Optional<V>;
        static absent<T>(): com.google.common.base.Optional<T>;
        abstract or(arg0: com.google.common.base.Supplier_<T>): T;
        abstract or(arg0: T): T;
        abstract isPresent(): boolean;
        static toJavaUtil<T>(arg0: com.google.common.base.Optional_<T>): Internal.Optional<T>;
        abstract asSet(): Internal.Set<T>;
        toJavaUtil(): Internal.Optional<T>;
        abstract get(): T;
        static of<T>(arg0: T): com.google.common.base.Optional<T>;
        abstract orNull(): T;
        static presentInstances<T>(arg0: Internal.Iterable_<com.google.common.base.Optional<T>>): Internal.Iterable<T>;
        static fromNullable<T>(arg0: T): com.google.common.base.Optional<T>;
        static fromJavaUtil<T>(arg0: Internal.Optional_<T>): com.google.common.base.Optional<T>;
        get present(): boolean
    }
    type Optional_<T> = Optional<T>;
}
declare namespace Internal {
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
        handleProcessingOnAllItems(arg0: Internal.Function_<Internal.TransportedItemStack, Internal.TransportedItemStackHandlerBehaviour$TransportedResult>): void;
        handleCenteredProcessingOnAllItems(arg0: number, arg1: Internal.Function_<Internal.TransportedItemStack, Internal.TransportedItemStackHandlerBehaviour$TransportedResult>): void;
        getWorldPositionOf(arg0: Internal.TransportedItemStack_): Vec3d;
        static readonly TYPE: Internal.BehaviourType<Internal.TransportedItemStackHandlerBehaviour>;
    }
    type TransportedItemStackHandlerBehaviour_ = TransportedItemStackHandlerBehaviour;
    class TooltipFlag$Default extends Internal.Record implements Internal.TooltipFlag {
        constructor(arg0: boolean, arg1: boolean)
        creative(): boolean;
        isAdvanced(): boolean;
        isCreative(): boolean;
        asCreative(): this;
        advanced(): boolean;
        get advanced(): boolean
        get creative(): boolean
    }
    type TooltipFlag$Default_ = TooltipFlag$Default;
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
        abstract isController(): boolean;
        abstract setController(arg0: BlockPos_): void;
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
        get controller(): boolean
        set controller(arg0: BlockPos_)
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
    interface IFocus <V> {
        abstract getTypedValue(): Internal.ITypedIngredient<V>;
        abstract checkedCast<T>(arg0: Internal.IIngredientType_<T>): Internal.Optional<Internal.IFocus<T>>;
        abstract getRole(): Internal.RecipeIngredientRole;
        get typedValue(): Internal.ITypedIngredient<V>
        get role(): Internal.RecipeIngredientRole
    }
    type IFocus_<V> = IFocus<V>;
    interface Drawable {
        draw3D(graphics: Internal.GuiGraphics_): void;
        drawStatic(graphics: Internal.GuiGraphics_, x: number, y: number, w: number, h: number): void;
        abstract draw(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        (arg0: Internal.GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    type Drawable_ = Drawable;
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
    abstract class AbstractFish extends Internal.WaterAnimal implements Internal.Bucketable {
        constructor(arg0: Internal.EntityType_<Internal.AbstractFish>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setFromBucket(arg0: boolean): void;
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
        /**
         * @deprecated
        */
        static loadDefaultDataFromBucketTag(arg0: Internal.Mob_, arg1: Internal.CompoundTag_): void;
        fromBucket(): boolean;
        damageHeldItem(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
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
        /**
         * @deprecated
        */
        static saveDefaultDataToBucketTag(arg0: Internal.Mob_, arg1: Internal.ItemStack_): void;
        getScriptType(): Internal.ScriptType;
        static bucketMobPickup<T extends Internal.LivingEntity & Internal.Bucketable>(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: T): Internal.Optional<InteractionResult>;
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
        get bucketItemStack(): Internal.ItemStack
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
        get pickupSound(): Internal.SoundEvent
    }
    type AbstractFish_ = AbstractFish;
    class PolarBear extends Internal.Animal implements Internal.NeutralMob {
        constructor(arg0: Internal.EntityType_<Internal.PolarBear>, arg1: Internal.Level_)
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
        readPersistentAngerSaveData(arg0: Internal.Level_, arg1: Internal.CompoundTag_): void;
        stopBeingAngry(): void;
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
        getName(): net.minecraft.network.chat.Component;
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
        tell(message: net.minecraft.network.chat.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
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
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        set persistentAngerTarget(arg0: Internal.UUID_)
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
        get remainingPersistentAngerTime(): number
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        get standing(): boolean
    }
    type PolarBear_ = PolarBear;
    class MinecraftServer$ServerResourcePackInfo extends Internal.Record {
        constructor(url: string, hash: string, isRequired: boolean, prompt: net.minecraft.network.chat.Component_)
        hash(): string;
        url(): string;
        isRequired(): boolean;
        prompt(): net.minecraft.network.chat.Component;
        get required(): boolean
    }
    type MinecraftServer$ServerResourcePackInfo_ = MinecraftServer$ServerResourcePackInfo;
    class CustomBossEvents {
        constructor()
        onPlayerConnect(arg0: Internal.ServerPlayer_): void;
        save(): Internal.CompoundTag;
        getIds(): Internal.Collection<ResourceLocation>;
        load(arg0: Internal.CompoundTag_): void;
        getEvents(): Internal.Collection<Internal.CustomBossEvent>;
        get(arg0: ResourceLocation_): Internal.CustomBossEvent;
        remove(arg0: Internal.CustomBossEvent_): void;
        create(arg0: ResourceLocation_, arg1: net.minecraft.network.chat.Component_): Internal.CustomBossEvent;
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
    class RopeUpgradeItem extends Internal.BaseUpgradeItem {
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
    type RopeUpgradeItem_ = RopeUpgradeItem;
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
    class FluidIngredient$FluidStackIngredient extends Internal.FluidIngredient {
        constructor()
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        negate(): Internal.Predicate<Internal.FluidStack>;
        and(arg0: Internal.Predicate_<Internal.FluidStack>): Internal.Predicate<Internal.FluidStack>;
        or(arg0: Internal.Predicate_<Internal.FluidStack>): Internal.Predicate<Internal.FluidStack>;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
    }
    type FluidIngredient$FluidStackIngredient_ = FluidIngredient$FluidStackIngredient;
    interface IOctoConfig {
        abstract getPath(): Internal.Path;
        setup<T extends Internal.IOctoConfig>(): T;
        get path(): Internal.Path
        (): Internal.Path_;
    }
    type IOctoConfig_ = IOctoConfig;
    class PoweredEngineShaftBlock extends Internal.PoweredShaftBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.KineticBlockEntity;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.KineticBlockEntity>): void;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
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
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.KineticBlockEntity>;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
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
        hideStressImpact(): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        static withWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.BlockState;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.KineticBlockEntity, InteractionResult>): InteractionResult;
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
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        showCapacityWithAnnotation(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type PoweredEngineShaftBlock_ = PoweredEngineShaftBlock;
    class ObfuscatedTooltipBlockItem extends Internal.BlockItem implements Internal.ItemTooltipStyleProvider {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getTooltipText(arg0: Internal.ItemStack_): Internal.MutableComponent;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        getTooltipKey(arg0: Internal.ItemStack_): string;
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
        getTooltipColorWithAlpha(arg0: Internal.ItemStack_): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        getTooltipStyle(): Internal.ColorStyles$ITooltipStyle;
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
        getTooltipColor(arg0: Internal.ItemStack_): number;
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
        get tooltipStyle(): Internal.ColorStyles$ITooltipStyle
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type ObfuscatedTooltipBlockItem_ = ObfuscatedTooltipBlockItem;
    class IOPortBlock extends Internal.AEBaseEntityBlock<any> {
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
        static readonly POWERED: Internal.BooleanProperty;
    }
    type IOPortBlock_ = IOPortBlock;
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
    class Component$BaselineResizeBehavior extends Internal.Enum<Internal.Component$BaselineResizeBehavior> {
        static values(): Internal.Component$BaselineResizeBehavior[];
        static valueOf(arg0: string): Internal.Component$BaselineResizeBehavior;
        static readonly CONSTANT_DESCENT: Internal.Component$BaselineResizeBehavior;
        static readonly OTHER: Internal.Component$BaselineResizeBehavior;
        static readonly CENTER_OFFSET: Internal.Component$BaselineResizeBehavior;
        static readonly CONSTANT_ASCENT: Internal.Component$BaselineResizeBehavior;
    }
    type Component$BaselineResizeBehavior_ = "other" | "constant_descent" | "constant_ascent" | Component$BaselineResizeBehavior | "center_offset";
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
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
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
        static spawnExtinguishSmoke(arg0: Internal.LevelAccessor_, arg1: BlockPos_): void;
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
    type BonfireBlock_ = BonfireBlock;
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
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
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
        getTotalMovementSpeed(): number;
        rayTrace(): Internal.RayTraceResultJS;
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
        getDisplayName(): net.minecraft.network.chat.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        loadFromBucketTag(arg0: Internal.CompoundTag_): void;
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
        static bucketMobPickup<T extends Internal.LivingEntity & Internal.Bucketable>(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: T): Internal.Optional<InteractionResult>;
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
        setVariant(arg0: Internal.Axolotl$Variant_): void;
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
        get displayName(): net.minecraft.network.chat.Component
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
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
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
        set statusMessage(message: net.minecraft.network.chat.Component_)
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
    class NearestLivingEntitySensor <T extends Internal.LivingEntity> extends Internal.Sensor<T> {
        constructor()
    }
    type NearestLivingEntitySensor_<T extends Internal.LivingEntity> = NearestLivingEntitySensor<T>;
    class PalettedContainer$Data <T> extends Internal.Record {
        configuration(): Internal.PalettedContainer$Configuration<T>;
        write(arg0: Internal.FriendlyByteBuf_): void;
        palette(): Internal.Palette<T>;
        getSerializedSize(): number;
        copy(): this;
        copyFrom(arg0: Internal.Palette_<T>, arg1: Internal.BitStorage_): void;
        storage(): Internal.BitStorage;
        get serializedSize(): number
    }
    type PalettedContainer$Data_<T> = PalettedContainer$Data<T>;
    class BioForgeTab {
        constructor(arg0: number, arg1: Internal.Item_)
        constructor(arg0: Internal.Item_)
        enumId(): string;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.BioForgeTab;
        translationKey(): string;
        toJson(arg0: Internal.JsonObject_): void;
        getIcon(): Internal.ItemStack;
        static enumIdFrom(arg0: ResourceLocation_): string;
        static fromJson(arg0: Internal.JsonObject_): Internal.BioForgeTab;
        sortPriority(): number;
        toNetwork(arg0: Internal.FriendlyByteBuf_): void;
        get icon(): Internal.ItemStack
    }
    type BioForgeTab_ = BioForgeTab;
    class MobSpawnSettingsBuilder extends Internal.MobSpawnSettings$Builder {
        constructor(arg0: Internal.MobSpawnSettings_)
        disablePlayerSpawn(): this;
        getProbability(): number;
        getEntityTypes(): Internal.Set<Internal.EntityType<any>>;
        getSpawner(arg0: Internal.MobCategory_): Internal.List<Internal.MobSpawnSettings$SpawnerData>;
        getCost(arg0: Internal.EntityType_<any>): Internal.MobSpawnSettings$MobSpawnCost;
        getSpawnerTypes(): Internal.Set<Internal.MobCategory>;
        get probability(): number
        get entityTypes(): Internal.Set<Internal.EntityType<any>>
        get spawnerTypes(): Internal.Set<Internal.MobCategory>
    }
    type MobSpawnSettingsBuilder_ = MobSpawnSettingsBuilder;
    interface CreativeModeTab$DisplayItemsGenerator {
        abstract accept(arg0: Internal.CreativeModeTab$ItemDisplayParameters_, arg1: Internal.CreativeModeTab$Output_): void;
        (arg0: Internal.CreativeModeTab$ItemDisplayParameters, arg1: Internal.CreativeModeTab$Output): void;
    }
    type CreativeModeTab$DisplayItemsGenerator_ = CreativeModeTab$DisplayItemsGenerator;
    interface RewardType$GuiProvider {
        abstract openCreationGui(arg0: Internal.Runnable_, arg1: Internal.Quest_, arg2: Internal.Consumer_<Internal.Reward>): void;
        (arg0: Internal.Runnable, arg1: Internal.Quest, arg2: Internal.Consumer<Internal.Reward>): void;
    }
    type RewardType$GuiProvider_ = RewardType$GuiProvider;
    class NozzleBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        setRange(arg0: number): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        set range(arg0: number)
        get modelData(): Internal.ModelData
    }
    type NozzleBlockEntity_ = NozzleBlockEntity;
    class TelemetryEventInstance extends Internal.Record {
        constructor(arg0: Internal.TelemetryEventType_, arg1: Internal.TelemetryPropertyMap_)
        type(): Internal.TelemetryEventType;
        export(arg0: Internal.TelemetrySession_): Internal.TelemetryEvent;
        properties(): Internal.TelemetryPropertyMap;
        static readonly CODEC: Internal.Codec<Internal.TelemetryEventInstance>;
    }
    type TelemetryEventInstance_ = TelemetryEventInstance;
    class RedprintItem extends Internal.ItemCoFH implements Internal.IPlacementItem {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        onBlockPlacement(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
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
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
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
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type RedprintItem_ = RedprintItem;
    interface IGuiHelper {
        abstract drawableBuilder(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): Internal.IDrawableBuilder;
        abstract createAnimatedDrawable(arg0: Internal.IDrawableStatic_, arg1: number, arg2: Internal.IDrawableAnimated$StartDirection_, arg3: boolean): Internal.IDrawableAnimated;
        abstract createCraftingGridHelper(): Internal.ICraftingGridHelper;
        createDrawable(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): Internal.IDrawableStatic;
        abstract getSlotDrawable(): Internal.IDrawableStatic;
        createDrawableItemStack(arg0: Internal.ItemStack_): Internal.IDrawable;
        abstract createTickTimer(arg0: number, arg1: number, arg2: boolean): Internal.ITickTimer;
        abstract createBlankDrawable(arg0: number, arg1: number): Internal.IDrawableStatic;
        abstract createDrawableIngredient<V>(arg0: Internal.IIngredientType_<V>, arg1: V): Internal.IDrawable;
        get slotDrawable(): Internal.IDrawableStatic
    }
    type IGuiHelper_ = IGuiHelper;
    class MobType {
        constructor()
        static readonly ILLAGER: Internal.MobType;
        static readonly WATER: Internal.MobType;
        static readonly UNDEFINED: Internal.MobType;
        static readonly UNDEAD: Internal.MobType;
        static readonly ARTHROPOD: Internal.MobType;
    }
    type MobType_ = MobType;
    class InventoryContainerItem extends Internal.ItemCoFH implements Internal.IInventoryContainerItem {
        constructor(arg0: Internal.Item$Properties_, arg1: number)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        getSlotLimit(arg0: Internal.ItemStack_, arg1: number): number;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        getContainerInventory(arg0: Internal.ItemStack_): Internal.SimpleItemInv;
        getSpace(arg0: Internal.ItemStack_, arg1: number): number;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        insertItem(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.ItemStack_, arg3: boolean): Internal.ItemStack;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isActive(arg0: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getContainerSlots(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        hasActiveTag(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onContainerInventoryChanged(arg0: Internal.ItemStack_): void;
        getOrCreateInvTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        isItemValid(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.ItemStack_): boolean;
        setActive(arg0: Internal.ItemStack_, arg1: boolean): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        getStackInSlot(arg0: Internal.ItemStack_, arg1: number): Internal.ItemStack;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getScaledItemsStored(arg0: Internal.ItemStack_, arg1: number, arg2: number): number;
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
        extractItem(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): Internal.ItemStack;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getItemAmount(arg0: Internal.ItemStack_, arg1: number): number;
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
    type InventoryContainerItem_ = InventoryContainerItem;
    interface ConfigWriter {
        writeToString(arg0: Internal.UnmodifiableConfig_): string;
        write(arg0: Internal.UnmodifiableConfig_, arg1: Internal.File_, arg2: Internal.WritingMode_, arg3: Internal.Charset_): void;
        write(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Path_, arg2: Internal.WritingMode_): void;
        write(arg0: Internal.UnmodifiableConfig_, arg1: Internal.File_, arg2: Internal.WritingMode_): void;
        write(arg0: Internal.UnmodifiableConfig_, arg1: Internal.URL_): void;
        abstract write(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Writer_): void;
        write(arg0: Internal.UnmodifiableConfig_, arg1: Internal.OutputStream_): void;
        write(arg0: Internal.UnmodifiableConfig_, arg1: Internal.OutputStream_, arg2: Internal.Charset_): void;
        write(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Path_, arg2: Internal.WritingMode_, arg3: Internal.Charset_): void;
        (arg0: Internal.UnmodifiableConfig, arg1: Internal.Writer): void;
    }
    type ConfigWriter_ = ConfigWriter;
    interface ForwardingItemHandler extends Internal.IItemHandler, Internal.Forwarding<Internal.IItemHandler> {
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        getSlots(): number;
        abstract inner(): Internal.IItemHandler;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        kjs$self(): Internal.IItemHandler;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
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
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        (): Internal.IItemHandler_;
    }
    type ForwardingItemHandler_ = ForwardingItemHandler;
    abstract class ChunkSource implements Internal.AutoCloseable, Internal.LightChunkGetter {
        constructor()
        abstract gatherStats(): string;
        abstract getLoadedChunksCount(): number;
        updateChunkForced(arg0: Internal.ChunkPos_, arg1: boolean): void;
        abstract getLevel(): Internal.BlockGetter;
        abstract tick(arg0: Internal.BooleanSupplier_, arg1: boolean): void;
        abstract getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_, arg3: boolean): Internal.ChunkAccess;
        hasChunk(arg0: number, arg1: number): boolean;
        setSpawnSettings(arg0: boolean, arg1: boolean): void;
        getChunk(arg0: number, arg1: number, arg2: boolean): Internal.LevelChunk;
        getChunkNow(arg0: number, arg1: number): Internal.LevelChunk;
        onLightUpdate(arg0: Internal.LightLayer_, arg1: Internal.SectionPos_): void;
        getChunkForLighting(arg0: number, arg1: number): Internal.LightChunk;
        close(): void;
        abstract getLightEngine(): Internal.LevelLightEngine;
        get loadedChunksCount(): number
        get level(): Internal.BlockGetter
        get lightEngine(): Internal.LevelLightEngine
    }
    type ChunkSource_ = ChunkSource;
    abstract class AbstractSkeleton extends Internal.Monster implements Internal.RangedAttackMob {
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
        isShaking(): boolean;
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
        handler$zkm000$consumeQuiverArrow(target: Internal.LivingEntity_, velocity: number, ci: Internal.CallbackInfo_, arrow: Internal.ItemStack_): void;
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
        handler$zkm000$finalizeSpawn(level: Internal.ServerLevelAccessor_, difficulty: Internal.DifficultyInstance_, reason: Internal.MobSpawnType_, spawnData: Internal.SpawnGroupData_, dataTag: Internal.CompoundTag_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        reassessWeaponGoal(): void;
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
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
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
        get shaking(): boolean
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
    type AbstractSkeleton_ = AbstractSkeleton;
    class GlazedTerracottaBlock extends Internal.HorizontalDirectionalBlock {
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
    type GlazedTerracottaBlock_ = GlazedTerracottaBlock;
    interface LongToIntFunction {
        abstract applyAsInt(arg0: number): number;
        (arg0: number): number;
    }
    type LongToIntFunction_ = LongToIntFunction;
    class AirCurrent$AirCurrentSegment {
    }
    type AirCurrent$AirCurrentSegment_ = AirCurrent$AirCurrentSegment;
    class VoidStartPlatformFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type VoidStartPlatformFeature_ = VoidStartPlatformFeature;
    class BiomeGenerationSettings {
        getCarvingStages(): Internal.Set<Internal.GenerationStep$Carving>;
        getFlowerFeatures(): Internal.List<Internal.ConfiguredFeature<any, any>>;
        features(): Internal.List<Internal.HolderSet<Internal.PlacedFeature>>;
        hasFeature(arg0: Internal.PlacedFeature_): boolean;
        getCarvers(arg0: Internal.GenerationStep$Carving_): Internal.Iterable<Internal.Holder<Internal.ConfiguredWorldCarver<any>>>;
        get carvingStages(): Internal.Set<Internal.GenerationStep$Carving>
        get flowerFeatures(): Internal.List<Internal.ConfiguredFeature<any, any>>
        static readonly EMPTY: Internal.BiomeGenerationSettings;
        static readonly CODEC: Internal.MapCodec<Internal.BiomeGenerationSettings>;
    }
    type BiomeGenerationSettings_ = BiomeGenerationSettings;
    class CarriageSounds {
        constructor(arg0: Internal.CarriageContraptionEntity_)
        stop(): void;
        tick(arg0: Internal.Carriage$DimensionalCarriageEntity_): void;
        finalizeSharedVolume(arg0: number): void;
        submitSharedSoundVolume(arg0: Vec3d_, arg1: number): void;
    }
    type CarriageSounds_ = CarriageSounds;
    class ControllerBlock$ControllerBlockState extends Internal.Enum<Internal.ControllerBlock$ControllerBlockState> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.ControllerBlock$ControllerBlockState[];
        static valueOf(arg0: string): Internal.ControllerBlock$ControllerBlockState;
        get serializedName(): string
        static readonly online: Internal.ControllerBlock$ControllerBlockState;
        static readonly offline: Internal.ControllerBlock$ControllerBlockState;
        static readonly conflicted: Internal.ControllerBlock$ControllerBlockState;
    }
    type ControllerBlock$ControllerBlockState_ = "offline" | "conflicted" | ControllerBlock$ControllerBlockState | "online";
    class AbilityData {
        getRequiredPoints(): number;
        setRequiredPoints(arg0: number): void;
        getRequiredLevel(): number;
        getStats(): Internal.Map<string, Internal.StatData>;
        getMaxLevel(): number;
        setMaxLevel(arg0: number): void;
        setStats(arg0: Internal.Map_<string, Internal.StatData>): void;
        static builder(arg0: string): Internal.AbilityData$AbilityDataBuilder;
        getId(): string;
        setCastData(arg0: org.apache.commons.lang3.tuple.Pair_<Internal.CastType, Internal.CastPredicate>): void;
        setRequiredLevel(arg0: number): void;
        getCastData(): org.apache.commons.lang3.tuple.Pair<Internal.CastType, Internal.CastPredicate>;
        get requiredPoints(): number
        set requiredPoints(arg0: number)
        get requiredLevel(): number
        get stats(): Internal.Map<string, Internal.StatData>
        get maxLevel(): number
        set maxLevel(arg0: number)
        set stats(arg0: Internal.Map_<string, Internal.StatData>)
        get id(): string
        set castData(arg0: org.apache.commons.lang3.tuple.Pair_<Internal.CastType, Internal.CastPredicate>)
        set requiredLevel(arg0: number)
        get castData(): org.apache.commons.lang3.tuple.Pair<Internal.CastType, Internal.CastPredicate>
    }
    type AbilityData_ = AbilityData;
    interface Spliterator$OfPrimitive <T, T_CONS, T_SPLITR extends Internal.Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> extends Internal.Spliterator<T> {
        trySplit(): Internal.Spliterator<any>;
        forEachRemaining(arg0: T_CONS): void;
        getExactSizeIfKnown(): number;
        forEachRemaining(arg0: Internal.Consumer_<T>): void;
        hasCharacteristics(arg0: number): boolean;
        abstract tryAdvance(arg0: T_CONS): boolean;
        abstract tryAdvance(arg0: Internal.Consumer_<T>): boolean;
        getComparator(): Internal.Comparator<T>;
        abstract characteristics(): number;
        abstract estimateSize(): number;
        get exactSizeIfKnown(): number
        get comparator(): Internal.Comparator<T>
    }
    type Spliterator$OfPrimitive_<T, T_CONS, T_SPLITR extends Internal.Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> = Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>;
    class ServerboundSeenAdvancementsPacket$Action extends Internal.Enum<Internal.ServerboundSeenAdvancementsPacket$Action> {
        static values(): Internal.ServerboundSeenAdvancementsPacket$Action[];
        static valueOf(arg0: string): Internal.ServerboundSeenAdvancementsPacket$Action;
        static readonly OPENED_TAB: Internal.ServerboundSeenAdvancementsPacket$Action;
        static readonly CLOSED_SCREEN: Internal.ServerboundSeenAdvancementsPacket$Action;
    }
    type ServerboundSeenAdvancementsPacket$Action_ = "closed_screen" | ServerboundSeenAdvancementsPacket$Action | "opened_tab";
    class ChatTypeDecoration extends Internal.Record {
        constructor(arg0: string, arg1: Internal.List_<Internal.ChatTypeDecoration$Parameter>, arg2: Internal.Style_)
        static outgoingDirectMessage(arg0: string): Internal.ChatTypeDecoration;
        translationKey(): string;
        parameters(): Internal.List<Internal.ChatTypeDecoration$Parameter>;
        style(): Internal.Style;
        static withSender(arg0: string): Internal.ChatTypeDecoration;
        static incomingDirectMessage(arg0: string): Internal.ChatTypeDecoration;
        static teamMessage(arg0: string): Internal.ChatTypeDecoration;
        decorate(arg0: net.minecraft.network.chat.Component_, arg1: Internal.ChatType$Bound_): net.minecraft.network.chat.Component;
        static readonly CODEC: Internal.Codec<Internal.ChatTypeDecoration>;
    }
    type ChatTypeDecoration_ = ChatTypeDecoration;
    class WallSide extends Internal.Enum<Internal.WallSide> implements Internal.StringRepresentable {
        static values(): Internal.WallSide[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.WallSide;
        get serializedName(): string
        static readonly LOW: Internal.WallSide;
        static readonly TALL: Internal.WallSide;
        static readonly NONE: Internal.WallSide;
    }
    type WallSide_ = "low" | WallSide | "tall" | "none";
    class WrappedPressurePlate$Stone extends Internal.PressurePlateBlock {
        constructor(pSensitivity: any_, pProperties: Internal.BlockBehaviour$Properties_, pType: Internal.BlockSetType_)
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
    type WrappedPressurePlate$Stone_ = WrappedPressurePlate$Stone;
    class LivingToolState extends Internal.Enum<Internal.LivingToolState> {
        serialize(arg0: Internal.CompoundTag_): void;
        static deserialize(arg0: Internal.CompoundTag_): Internal.LivingToolState;
        cycle(): this;
        serialize(): number;
        static deserialize(arg0: number): Internal.LivingToolState;
        getTranslationKey(): string;
        static valueOf(arg0: string): Internal.LivingToolState;
        getDisplayName(): Internal.MutableComponent;
        static getTooltipTranslationKey(): string;
        getTooltip(): Internal.MutableComponent;
        static values(): Internal.LivingToolState[];
        get translationKey(): string
        get displayName(): Internal.MutableComponent
        get tooltipTranslationKey(): string
        get tooltip(): Internal.MutableComponent
        static readonly DORMANT: Internal.LivingToolState;
        static readonly STATE_KEY: "LivingToolState";
        static readonly BROKEN: Internal.LivingToolState;
        static readonly AWAKENED: Internal.LivingToolState;
    }
    type LivingToolState_ = "dormant" | "awakened" | "broken" | LivingToolState;
    interface MessageSenderKJS {
        getDisplayName(): net.minecraft.network.chat.Component;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getName(): net.minecraft.network.chat.Component;
        runCommandSilent(command: string): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        runCommand(command: string): number;
        get displayName(): net.minecraft.network.chat.Component
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get name(): net.minecraft.network.chat.Component
    }
    type MessageSenderKJS_ = MessageSenderKJS;
    class ZetaCeilingHangingSignBlock extends Internal.CeilingHangingSignBlock implements Internal.IZetaBlockExtensions, Internal.IForgeBlock, Internal.IZetaBlock {
        constructor(arg0: string, arg1: Internal.ZetaModule_, arg2: Internal.WoodType_, arg3: Internal.BlockBehaviour$Properties_)
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
        getModule(): Internal.ZetaModule;
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
        doesConditionApply(): boolean;
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
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isLadderZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        setCondition(arg0: Internal.BooleanSupplier_): this;
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
        makesOpenTrapdoorAboveClimbableZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        collisionExtendsVerticallyZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isFlammableZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getToolModifiedStateZeta(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: string, arg3: boolean): Internal.BlockState;
        canSustainPlantZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: string): boolean;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get module(): Internal.ZetaModule
        set lightEmission(v: number)
        set creativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>)
        set destroySpeed(v: number)
        set condition(arg0: Internal.BooleanSupplier_)
        get block(): Internal.Block
        get enabled(): boolean
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type ZetaCeilingHangingSignBlock_ = ZetaCeilingHangingSignBlock;
    interface KeyListener extends Internal.EventListener {
        abstract keyPressed(arg0: Internal.KeyEvent_): void;
        abstract keyReleased(arg0: Internal.KeyEvent_): void;
        abstract keyTyped(arg0: Internal.KeyEvent_): void;
    }
    type KeyListener_ = KeyListener;
    class RoadSignFeature extends Internal.Feature<Internal.RoadSignFeature$Config> {
        constructor(codec: Internal.Codec_<Internal.RoadSignFeature$Config>)
        static applyPostProcess(c: Internal.RoadSignFeature$Config_, level: Internal.ServerLevel_, generatorPos: BlockPos_, foundVillages: Internal.List_<Internal.StructureLocator$LocatedStruct>): void;
        static isNotSolid(world: Internal.LevelAccessor_, pos: BlockPos_): boolean;
    }
    type RoadSignFeature_ = RoadSignFeature;
    class BlockPileFeature extends Internal.Feature<Internal.BlockPileConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.BlockPileConfiguration>)
    }
    type BlockPileFeature_ = BlockPileFeature;
    abstract class ScreenEvent$MouseButtonPressed extends Internal.ScreenEvent$MouseInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
        getButton(): number;
        get button(): number
    }
    type ScreenEvent$MouseButtonPressed_ = ScreenEvent$MouseButtonPressed;
    class ServerOpList extends Internal.StoredUserList<Internal.GameProfile, any> {
        constructor(arg0: Internal.File_)
        canBypassPlayerLimit(arg0: Internal.GameProfile_): boolean;
    }
    type ServerOpList_ = ServerOpList;
    class ClassInfo {
        getFieldInfo(): Internal.List<Internal.FieldInfo>;
        getClazzRaw(): typeof any;
        getAnnotations(): Internal.List<Internal.Annotation>;
        isAbstract(): boolean;
        static getOrCache(clazz: typeof any): Internal.ClassInfo;
        isInterface(): boolean;
        getInterfaceTypes(): Internal.List<Internal.ITypeInfo>;
        getSuperClassType(): Internal.ITypeInfo;
        getInterfaces(): Internal.List<Internal.ClassInfo>;
        getSuperClass(): this;
        getParameters(): Internal.List<Internal.ITypeInfo>;
        getName(): string;
        isEnum(): boolean;
        getConstructorInfo(): Internal.List<Internal.ConstructorInfo>;
        getMethodInfo(): Internal.List<Internal.MethodInfo>;
        get fieldInfo(): Internal.List<Internal.FieldInfo>
        get clazzRaw(): typeof any
        get annotations(): Internal.List<Internal.Annotation>
        get "abstract"(): boolean
        get "interface"(): boolean
        get interfaceTypes(): Internal.List<Internal.ITypeInfo>
        get superClassType(): Internal.ITypeInfo
        get interfaces(): Internal.List<Internal.ClassInfo>
        get superClass(): Internal.ClassInfo
        get parameters(): Internal.List<Internal.ITypeInfo>
        get name(): string
        get enum(): boolean
        get constructorInfo(): Internal.List<Internal.ConstructorInfo>
        get methodInfo(): Internal.List<Internal.MethodInfo>
        static readonly CLASS_CACHE: {[key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo, [key: typeof any]: Internal.ClassInfo};
    }
    type ClassInfo_ = ClassInfo;
    class EnderChestBlock extends Internal.AbstractChestBlock<Internal.EnderChestBlockEntity> implements Internal.SimpleWaterloggedBlock {
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
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
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
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type EnderChestBlock_ = EnderChestBlock;
    class ForgeSoundType extends SoundType {
        constructor(arg0: number, arg1: number, arg2: Internal.Supplier_<Internal.SoundEvent>, arg3: Internal.Supplier_<Internal.SoundEvent>, arg4: Internal.Supplier_<Internal.SoundEvent>, arg5: Internal.Supplier_<Internal.SoundEvent>, arg6: Internal.Supplier_<Internal.SoundEvent>)
    }
    type ForgeSoundType_ = ForgeSoundType;
    class LightningArcParticleData implements Internal.ParticleOptions {
        constructor(arg0: Vec3d_)
        writeToString(): string;
        getType(): Internal.ParticleType<any>;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        get type(): Internal.ParticleType<any>
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.LightningArcParticleData>;
        readonly target: Vec3d;
    }
    type LightningArcParticleData_ = LightningArcParticleData;
    abstract class URLConnection {
        setIfModifiedSince(arg0: number): void;
        getHeaderFieldLong(arg0: string, arg1: number): number;
        getContentLengthLong(): number;
        /**
         * @deprecated
        */
        static getDefaultRequestProperty(arg0: string): string;
        getConnectTimeout(): number;
        static setFileNameMap(arg0: Internal.FileNameMap_): void;
        getRequestProperty(arg0: string): string;
        setDoInput(arg0: boolean): void;
        setUseCaches(arg0: boolean): void;
        setDoOutput(arg0: boolean): void;
        getContentLength(): number;
        static setDefaultAllowUserInteraction(arg0: boolean): void;
        getContent(arg0: typeof any[]): any;
        getUseCaches(): boolean;
        getIfModifiedSince(): number;
        getHeaderField(arg0: string): string;
        getContent(): any;
        getURL(): Internal.URL;
        getDoOutput(): boolean;
        static getDefaultUseCaches(arg0: string): boolean;
        setConnectTimeout(arg0: number): void;
        getDoInput(): boolean;
        abstract connect(): void;
        getReadTimeout(): number;
        getRequestProperties(): Internal.Map<string, Internal.List<string>>;
        getHeaderField(arg0: number): string;
        getContentEncoding(): string;
        /**
         * @deprecated
        */
        static setDefaultRequestProperty(arg0: string, arg1: string): void;
        setAllowUserInteraction(arg0: boolean): void;
        getInputStream(): Internal.InputStream;
        getDate(): number;
        static guessContentTypeFromStream(arg0: Internal.InputStream_): string;
        setReadTimeout(arg0: number): void;
        static getDefaultAllowUserInteraction(): boolean;
        getOutputStream(): Internal.OutputStream;
        getHeaderFieldInt(arg0: string, arg1: number): number;
        getPermission(): Internal.Permission;
        getLastModified(): number;
        static getFileNameMap(): Internal.FileNameMap;
        getAllowUserInteraction(): boolean;
        getDefaultUseCaches(): boolean;
        addRequestProperty(arg0: string, arg1: string): void;
        getHeaderFields(): Internal.Map<string, Internal.List<string>>;
        getHeaderFieldKey(arg0: number): string;
        static setContentHandlerFactory(arg0: Internal.ContentHandlerFactory_): void;
        getExpiration(): number;
        setRequestProperty(arg0: string, arg1: string): void;
        setDefaultUseCaches(arg0: boolean): void;
        getHeaderFieldDate(arg0: string, arg1: number): number;
        static setDefaultUseCaches(arg0: string, arg1: boolean): void;
        static guessContentTypeFromName(arg0: string): string;
        getContentType(): string;
        set ifModifiedSince(arg0: number)
        get contentLengthLong(): number
        get connectTimeout(): number
        set fileNameMap(arg0: Internal.FileNameMap_)
        set doInput(arg0: boolean)
        set useCaches(arg0: boolean)
        set doOutput(arg0: boolean)
        get contentLength(): number
        set defaultAllowUserInteraction(arg0: boolean)
        get useCaches(): boolean
        get ifModifiedSince(): number
        get content(): any
        get URL(): Internal.URL
        get doOutput(): boolean
        set connectTimeout(arg0: number)
        get doInput(): boolean
        get readTimeout(): number
        get requestProperties(): Internal.Map<string, Internal.List<string>>
        get contentEncoding(): string
        set allowUserInteraction(arg0: boolean)
        get inputStream(): Internal.InputStream
        get date(): number
        set readTimeout(arg0: number)
        get defaultAllowUserInteraction(): boolean
        get outputStream(): Internal.OutputStream
        get permission(): Internal.Permission
        get lastModified(): number
        get fileNameMap(): Internal.FileNameMap
        get allowUserInteraction(): boolean
        get defaultUseCaches(): boolean
        get headerFields(): Internal.Map<string, Internal.List<string>>
        set contentHandlerFactory(arg0: Internal.ContentHandlerFactory_)
        get expiration(): number
        set defaultUseCaches(arg0: boolean)
        get contentType(): string
    }
    type URLConnection_ = URLConnection;
    interface IJeiConfigCategory {
        abstract getName(): string;
        abstract getConfigValues(): Internal.Collection<Internal.IJeiConfigValue<any>>;
        get name(): string
        get configValues(): Internal.Collection<Internal.IJeiConfigValue<any>>
    }
    type IJeiConfigCategory_ = IJeiConfigCategory;
    class ArrowKnockbackEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type ArrowKnockbackEnchantment_ = ArrowKnockbackEnchantment;
    class LycheeRecipeType <C extends Internal.LycheeContext, T extends Internal.LycheeRecipe<C>> implements Internal.RecipeType<T> {
        constructor(arg0: string, arg1: T, arg2: Internal.LootContextParamSet_)
        inViewerRecipes(): Internal.List<T>;
        updateEmptyState(): void;
        getPreventDefaultDescription(arg0: Internal.LycheeRecipe_<any>): net.minecraft.network.chat.Component;
        recipes(): Internal.List<T>;
        buildCache(): void;
        tryMatch<D extends net.minecraft.world.Container>(arg0: Internal.Recipe_<D>, arg1: Internal.Level_, arg2: D): Internal.Optional<T>;
        static simple<T extends Internal.Recipe<any>>(arg0: ResourceLocation_): Internal.RecipeType<T>;
        isEmpty(): boolean;
        static register<T extends Internal.Recipe<any>>(arg0: string): Internal.RecipeType<T>;
        findFirst(arg0: C, arg1: Internal.Level_): Internal.Optional<T>;
        get empty(): boolean
        hasStandaloneCategory: boolean;
        static readonly DEFAULT_PREVENT_TIP: Internal.MutableComponent;
        categoryId: ResourceLocation;
        readonly clazz: T;
        canPreventConsumeInputs: boolean;
        readonly contextParamSet: Internal.LootContextParamSet;
        requiresClient: boolean;
        readonly id: ResourceLocation;
        compactInputs: boolean;
    }
    type LycheeRecipeType_<C extends Internal.LycheeContext, T extends Internal.LycheeRecipe<C>> = LycheeRecipeType<C, T>;
    class FarmersDelightCompatImpl$TomatoStickBlock extends Internal.FarmersDelightCompatImpl$TomatoLoggedBlock {
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
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
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
        static readonly AXIS_Z: Internal.BooleanProperty;
        static readonly AXIS_X: Internal.BooleanProperty;
    }
    type FarmersDelightCompatImpl$TomatoStickBlock_ = FarmersDelightCompatImpl$TomatoStickBlock;
    interface InputFluid extends Internal.InputReplacement, Internal.FluidLike {
        replaceInput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, original: Internal.InputReplacement_): any;
        abstract getAmount(): number;
        matches(other: Internal.FluidLike_): boolean;
        of(o: any): Internal.InputReplacement;
        transform(transformer: Internal.InputReplacementTransformer_): Internal.InputReplacementTransformer$Replacement;
        isEmpty(): boolean;
        copy(amount: number): Internal.FluidLike;
        get amount(): number
        get empty(): boolean
        (): number;
    }
    type InputFluid_ = InputFluid | Internal.FluidStackJS_;
    class BlockEvent$EntityPlaceEvent extends Internal.BlockEvent {
        constructor()
        constructor(arg0: Internal.BlockSnapshot_, arg1: Internal.BlockState_, arg2: Internal.Entity_)
        getEntity(): Internal.Entity;
        getBlockSnapshot(): Internal.BlockSnapshot;
        getPlacedAgainst(): Internal.BlockState;
        getPlacedBlock(): Internal.BlockState;
        get entity(): Internal.Entity
        get blockSnapshot(): Internal.BlockSnapshot
        get placedAgainst(): Internal.BlockState
        get placedBlock(): Internal.BlockState
    }
    type BlockEvent$EntityPlaceEvent_ = BlockEvent$EntityPlaceEvent;
    class ModuleDescriptor$Opens$Modifier extends Internal.Enum<Internal.ModuleDescriptor$Opens$Modifier> {
        static valueOf(arg0: string): Internal.ModuleDescriptor$Opens$Modifier;
        static values(): Internal.ModuleDescriptor$Opens$Modifier[];
        static readonly MANDATED: Internal.ModuleDescriptor$Opens$Modifier;
        static readonly SYNTHETIC: Internal.ModuleDescriptor$Opens$Modifier;
    }
    type ModuleDescriptor$Opens$Modifier_ = "mandated" | ModuleDescriptor$Opens$Modifier | "synthetic";
    class ModuleLayer$Controller {
        addExports(arg0: Internal.Module_, arg1: string, arg2: Internal.Module_): this;
        layer(): Internal.ModuleLayer;
        addOpens(arg0: Internal.Module_, arg1: string, arg2: Internal.Module_): this;
        addReads(arg0: Internal.Module_, arg1: Internal.Module_): this;
    }
    type ModuleLayer$Controller_ = ModuleLayer$Controller;
    abstract class SinglePieceStructure extends Internal.Structure {
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
    }
    type SinglePieceStructure_ = SinglePieceStructure;
    class SequencedGearshiftBlockEntity$SequenceContext extends Internal.Record {
        constructor(instruction: Internal.SequencerInstructions_, relativeValue: number)
        instruction(): Internal.SequencerInstructions;
        static fromGearshift(arg0: Internal.SequencerInstructions_, arg1: number, arg2: number): Internal.SequencedGearshiftBlockEntity$SequenceContext;
        static fromNBT(arg0: Internal.CompoundTag_): Internal.SequencedGearshiftBlockEntity$SequenceContext;
        getEffectiveValue(arg0: number): number;
        serializeNBT(): Internal.CompoundTag;
        relativeValue(): number;
    }
    type SequencedGearshiftBlockEntity$SequenceContext_ = SequencedGearshiftBlockEntity$SequenceContext;
    abstract class BlockBehaviour$BlockStateBase extends Internal.StateHolder<Internal.Block, Internal.BlockState> implements Internal.BlockStateKJS {
        randomTick(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        canOcclude(): boolean;
        updateNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number): void;
        getShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.CollisionContext_): Internal.VoxelShape;
        tick(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        getLightBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        getSignal(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        /**
         * @deprecated
        */
        getLightEmission(): number;
        updateNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number, arg3: number): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getInteractionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        is(arg0: Internal.TagKey_<Internal.Block>): boolean;
        initCache(): void;
        useShapeForLightOcclusion(): boolean;
        setLightEmission(arg0: number): void;
        shouldSpawnParticlesOnBreak(): boolean;
        isRandomlyTicking(): boolean;
        isSolidRender(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isPathfindable(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.PathComputationType_): boolean;
        getVisualShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.CollisionContext_): Internal.VoxelShape;
        ignitedByLava(): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.Rotation_): Internal.BlockState;
        canSurvive(arg0: Internal.LevelReader_, arg1: BlockPos_): boolean;
        setDestroySpeed(arg0: number): void;
        is(arg0: Internal.HolderSet_<Internal.Block>): boolean;
        onRemove(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
        getSeed(arg0: BlockPos_): number;
        isFaceSturdy(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getMenuProvider(arg0: Internal.Level_, arg1: BlockPos_): Internal.MenuProvider;
        getBlockSupportShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        spawnAfterBreak(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: boolean): void;
        onPlace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
        getBlock(): Internal.Block;
        getCollisionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.CollisionContext_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        liquid(): boolean;
        getOcclusionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        is(arg0: Internal.Block_): boolean;
        isViewBlocking(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getFluidState(): Internal.FluidState;
        getShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        emissiveRendering(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        handler$zmo000$getOffset(level: Internal.BlockGetter_, pos: BlockPos_, offsetFunction: Internal.BlockBehaviour$OffsetFunction_, cir: Internal.CallbackInfoReturnable_<any>): void;
        mirror(arg0: Internal.Mirror_): Internal.BlockState;
        getTags(): Internal.Stream<Internal.TagKey<Internal.Block>>;
        instrument(): Internal.NoteBlockInstrument;
        isAir(): boolean;
        getDestroySpeed(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        getDirectSignal(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        /**
         * @deprecated
        */
        blocksMotion(): boolean;
        hasBlockEntity(): boolean;
        isValidSpawn(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.EntityType_<any>): boolean;
        hasAnalogOutputSignal(): boolean;
        hasOffsetFunction(): boolean;
        setRequiresTool(arg0: boolean): void;
        hasLargeCollisionShape(): boolean;
        getDestroyProgress(arg0: Internal.Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getRenderShape(): Internal.RenderShape;
        updateShape(arg0: Internal.Direction_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: BlockPos_): Internal.BlockState;
        getPistonPushReaction(): Internal.PushReaction;
        isSuffocating(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        getDrops(arg0: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        isFaceSturdy(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.SupportType_): boolean;
        is(arg0: Internal.TagKey_<Internal.Block>, arg1: Internal.Predicate_<Internal.BlockBehaviour$BlockStateBase>): boolean;
        hasPostProcess(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        /**
         * @deprecated
        */
        isSolid(): boolean;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Block_, arg3: BlockPos_, arg4: boolean): void;
        getFaceOcclusionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): Internal.VoxelShape;
        updateIndirectNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number, arg3: number): void;
        getShadeBrightness(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        entityInside(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Entity_): void;
        isRedstoneConductor(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getAnalogOutputSignal(arg0: Internal.Level_, arg1: BlockPos_): number;
        updateIndirectNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number): void;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.BlockHitResult_): InteractionResult;
        getMapColor(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.MapColor;
        entityCanStandOn(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        getBlockHolder(): Internal.Holder<Internal.Block>;
        canBeReplaced(): boolean;
        propagatesSkylightDown(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        getCollisionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        isCollisionShapeFullBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getOffset(arg0: Internal.BlockGetter_, arg1: BlockPos_): Vec3d;
        getSoundType(): SoundType;
        entityCanStandOnFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_, arg3: Internal.Direction_): boolean;
        canBeReplaced(arg0: Internal.Fluid_): boolean;
        requiresCorrectToolForDrops(): boolean;
        triggerEvent(arg0: Internal.Level_, arg1: BlockPos_, arg2: number, arg3: number): boolean;
        canBeReplaced(arg0: Internal.BlockPlaceContext_): boolean;
        isSignalSource(): boolean;
        attack(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_): void;
        /**
         * @deprecated
        */
        get lightEmission(): number
        set lightEmission(arg0: number)
        get randomlyTicking(): boolean
        set destroySpeed(arg0: number)
        get block(): Internal.Block
        get fluidState(): Internal.FluidState
        get tags(): Internal.Stream<Internal.TagKey<Internal.Block>>
        get air(): boolean
        set requiresTool(arg0: boolean)
        get renderShape(): Internal.RenderShape
        get pistonPushReaction(): Internal.PushReaction
        /**
         * @deprecated
        */
        get solid(): boolean
        get blockHolder(): Internal.Holder<Internal.Block>
        get soundType(): SoundType
        get signalSource(): boolean
        readonly mapColor: Internal.MapColor;
    }
    type BlockBehaviour$BlockStateBase_ = BlockBehaviour$BlockStateBase;
    class ArrayVoxelShape extends Internal.VoxelShape {
    }
    type ArrayVoxelShape_ = ArrayVoxelShape;
    class RuntimeException extends Internal.Exception {
        constructor()
        constructor(arg0: string, arg1: Internal.Throwable_)
        constructor(arg0: Internal.Throwable_)
        constructor(arg0: string)
    }
    type RuntimeException_ = RuntimeException;
    class MultipartBlockStateGenerator {
        constructor()
        part(when: string, model: string): void;
        part(when: string, consumer: Internal.Consumer_<Internal.MultipartBlockStateGenerator$Part>): void;
        toJson(): Internal.JsonObject;
    }
    type MultipartBlockStateGenerator_ = MultipartBlockStateGenerator;
    class TallStoolBlock extends com.starfish_studios.another_furniture.block.SeatBlock implements Internal.SimpleWaterloggedBlock {
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
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
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
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type TallStoolBlock_ = TallStoolBlock;
    class DocumentField extends Internal.AbstractDocument<Internal.DocumentField> {
        constructor()
        isFinal(): boolean;
        merge(arg0: Internal.AbstractDocumentBase_<any>): Internal.AbstractDocumentBase<any>;
        getType(): Internal.PropertyType<any>;
        copy(): Internal.AbstractDocumentBase<any>;
        static fromJava(info: Internal.FieldInfo_): Internal.DocumentField;
        applyProperties(): Internal.AbstractDocumentBase<any>;
        setFinal(aFinal: boolean): void;
        setStatic(aStatic: boolean): void;
        isShouldGSON(): boolean;
        merge(other: Internal.DocumentField_): this;
        getValue(): Internal.PropertyValue<any, any>;
        setName(name: string): void;
        getName(): string;
        isStatic(): boolean;
        get "final"(): boolean
        get type(): Internal.PropertyType<any>
        set "final"(aFinal: boolean)
        set "static"(aStatic: boolean)
        get shouldGSON(): boolean
        get value(): Internal.PropertyValue<any, any>
        set name(name: string)
        get name(): string
        get "static"(): boolean
    }
    type DocumentField_ = DocumentField;
    class ModelGenerator$Face {
        constructor()
        tintindex(i: number): this;
        uv(u0: number, v0: number, u1: number, v1: number): this;
        cull(d: Internal.Direction_): this;
        cull(): this;
        toJson(): Internal.JsonObject;
        tex(t: string): this;
    }
    type ModelGenerator$Face_ = ModelGenerator$Face;
    class WireSpoolItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.TagKey_<Internal.Block>)
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
        static breakPendingConnection(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Entity_, arg3: Internal.Level_): void;
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
        shouldRemoveConnection(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Entity_): boolean;
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
        static readonly LAST_POST_POS: "last_post_pos";
    }
    type WireSpoolItem_ = WireSpoolItem;
    class ThreeLayersFeatureSize extends Internal.FeatureSize {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.OptionalInt_)
        static readonly CODEC: Internal.Codec<Internal.ThreeLayersFeatureSize>;
    }
    type ThreeLayersFeatureSize_ = ThreeLayersFeatureSize;
    class RecipeJS implements Internal.CustomJavaToJsWrapper, Internal.RecipeKJS {
        constructor()
        /**
         * @deprecated
        */
        getGroup(): string;
        convertJavaToJs(cx: Internal.Context_, scope: Internal.Scriptable_, staticType: typeof any): Internal.Scriptable;
        getSerializationTypeFunction(): Internal.RecipeTypeFunction;
        inputValues(): Internal.RecipeComponentValue<any>[];
        /**
         * **NOTE**: Only valid via calling `recipes.kubejs.shaped` or `recipes.kubejs.shapeless`
         * 
        */
        replaceIngredient(filter: Internal.IngredientActionFilter_, item: Internal.ItemStack_): this;
        /**
         * **NOTE**: Only valid via calling `recipes.kubejs.shaped` or `recipes.kubejs.shapeless`
         * 
        */
        customIngredientAction(filter: Internal.IngredientActionFilter_, id: string): this;
        remove(): void;
        writeOutputFluid(value: Internal.OutputFluid_): Internal.JsonElement;
        stage(s: string): this;
        readOutputFluid(from: any): Internal.OutputFluid;
        inputItemHasPriority(from: any): boolean;
        getOriginalRecipe(): Internal.Recipe<any>;
        group(g: string): this;
        hasChanged(): boolean;
        initValues(created: boolean): void;
        createRecipe(): Internal.Recipe<any>;
        readInputItem(from: any): InputItem;
        /**
         * **NOTE**: Only valid via calling `recipes.kubejs.shaped` or `recipes.kubejs.shapeless`
         * 
        */
        modifyResult(callback: Internal.ModifyRecipeResultCallback_): this;
        get(key: string): any;
        outputItemHasPriority(from: any): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        id(_id: ResourceLocation_): this;
        /**
         * @deprecated
        */
        getType(): ResourceLocation;
        getOriginalRecipeResult(): Internal.ItemStack;
        inputFluidHasPriority(from: any): boolean;
        setValue<T>(key: Internal.RecipeKey_<T>, value: T): this;
        readInputFluid(from: any): Internal.InputFluid;
        set(key: string, value: any): this;
        getAllValueMap(): Internal.Map<string, Internal.RecipeComponentValue<any>>;
        getFromToString(): string;
        outputFluidHasPriority(from: any): boolean;
        writeInputItem(value: InputItem_): Internal.JsonElement;
        outputValues(): Internal.RecipeComponentValue<any>[];
        /**
         * @deprecated
        */
        getSchema(): Internal.RecipeSchema;
        deserialize(merge: boolean): void;
        writeOutputItem(value: OutputItem_): Internal.JsonElement;
        getValue<T>(key: Internal.RecipeKey_<T>): T;
        ingredientAction(filter: Internal.IngredientActionFilter_, action: Internal.IngredientAction_): this;
        serialize(): void;
        getPath(): string;
        /**
         * **NOTE**: Only valid via calling `recipes.kubejs.shaped` or `recipes.kubejs.shapeless`
         * 
        */
        keepIngredient(filter: Internal.IngredientActionFilter_): this;
        getMod(): string;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        writeInputFluid(value: Internal.InputFluid_): Internal.JsonElement;
        /**
         * **NOTE**: Only valid via calling `recipes.kubejs.shaped` or `recipes.kubejs.shapeless`
         * 
        */
        damageIngredient(filter: Internal.IngredientActionFilter_): this;
        getId(): string;
        save(): void;
        afterLoaded(): void;
        /**
         * @deprecated
        */
        setGroup(group: string): void;
        merge(j: Internal.JsonObject_): this;
        /**
         * @deprecated
        */
        getOrCreateId(): ResourceLocation;
        damageIngredient(filter: Internal.IngredientActionFilter_, damage: number): this;
        readOutputItem(from: any): OutputItem;
        getOriginalRecipeIngredients(): Internal.List<Internal.Ingredient>;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        /**
         * @deprecated
        */
        get group(): string
        get serializationTypeFunction(): Internal.RecipeTypeFunction
        get originalRecipe(): Internal.Recipe<any>
        /**
         * @deprecated
        */
        get type(): ResourceLocation
        get originalRecipeResult(): Internal.ItemStack
        get allValueMap(): Internal.Map<string, Internal.RecipeComponentValue<any>>
        get fromToString(): string
        /**
         * @deprecated
        */
        get schema(): Internal.RecipeSchema
        get path(): string
        get mod(): string
        get id(): string
        /**
         * @deprecated
        */
        set group(group: string)
        /**
         * @deprecated
        */
        get orCreateId(): ResourceLocation
        get originalRecipeIngredients(): Internal.List<Internal.Ingredient>
        type: Internal.RecipeTypeFunction;
        removed: boolean;
        originalJson: Internal.JsonObject;
        json: Internal.JsonObject;
        newRecipe: boolean;
        changed: boolean;
        static itemErrors: false;
        id: ResourceLocation;
        modifyResult: Internal.ModifyRecipeResultCallback;
    }
    type RecipeJS_ = RecipeJS;
    class TeamArgument$Info implements Internal.ArgumentTypeInfo<Internal.TeamArgument, Internal.TeamArgument$Info$Template> {
        constructor()
        unpack(argumentType: Internal.TeamArgument_): Internal.TeamArgument$Info$Template;
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        serializeToNetwork(template: Internal.TeamArgument$Info$Template_, friendlyByteBuf: Internal.FriendlyByteBuf_): void;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToJson(template: Internal.TeamArgument$Info$Template_, jsonObject: Internal.JsonObject_): void;
        deserializeFromNetwork(friendlyByteBuf: Internal.FriendlyByteBuf_): Internal.TeamArgument$Info$Template;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
    }
    type TeamArgument$Info_ = TeamArgument$Info;
    class SimpleItem extends Internal.Item implements Internal.ItemTooltipStyleProvider {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getTooltipText(arg0: Internal.ItemStack_): Internal.MutableComponent;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        getTooltipKey(arg0: Internal.ItemStack_): string;
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
        getTooltipColorWithAlpha(arg0: Internal.ItemStack_): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        getTooltipStyle(): Internal.ColorStyles$ITooltipStyle;
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
        getTooltipColor(arg0: Internal.ItemStack_): number;
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
        get tooltipStyle(): Internal.ColorStyles$ITooltipStyle
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type SimpleItem_ = SimpleItem;
    class TrappedChestBlockEntity extends Internal.ChestBlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        count(ingredient: Internal.Ingredient_): number;
        static tryClear(arg0: any): void;
        count(): number;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        countItem(arg0: Internal.Item_): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        setChanged(): void;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        kjs$self(): net.minecraft.world.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        hasCustomName(): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        get empty(): boolean
        get slots(): number
        get height(): number
        get width(): number
        get maxStackSize(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get modelData(): Internal.ModelData
        get mutable(): boolean
        get renderBoundingBox(): Internal.AABB
    }
    type TrappedChestBlockEntity_ = TrappedChestBlockEntity;
    class KnockbackEnchantment extends Internal.Enchantment {
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type KnockbackEnchantment_ = KnockbackEnchantment;
    interface IUpgradeableItem extends Internal.ItemLike {
        getUpgrades(arg0: Internal.ItemStack_): Internal.IUpgradeInventory;
        abstract asItem(): Internal.Item;
        (): Internal.Item_;
    }
    type IUpgradeableItem_ = IUpgradeableItem;
    abstract class RenderingHints$Key {
        abstract isCompatibleValue(arg0: any): boolean;
    }
    type RenderingHints$Key_ = RenderingHints$Key;
    class TextureAtlas extends Internal.AbstractTexture implements Internal.SpriteFinderImpl$SpriteFinderAccess, Internal.Tickable, Internal.Dumpable {
        constructor(arg0: ResourceLocation_)
        upload(arg0: Internal.SpriteLoader$Preparations_): void;
        getSprite(arg0: ResourceLocation_): Internal.TextureAtlasSprite;
        dumpContents(arg0: ResourceLocation_, arg1: Internal.Path_): void;
        getWidth(): number;
        getTextureLocations(): Internal.Set<ResourceLocation>;
        cycleAnimationFrames(): void;
        fabric_spriteFinder(): Internal.SpriteFinderImpl;
        tick(): void;
        clearTextureData(): void;
        maxSupportedTextureSize(): number;
        location(): ResourceLocation;
        updateFilter(arg0: Internal.SpriteLoader$Preparations_): void;
        getHeight(): number;
        get width(): number
        get textureLocations(): Internal.Set<ResourceLocation>
        get height(): number
        sprites: Internal.List<Internal.SpriteContents>;
        /**
         * @deprecated
        */
        static readonly LOCATION_BLOCKS: ResourceLocation;
        texturesByName: Internal.Map<ResourceLocation, Internal.TextureAtlasSprite>;
        /**
         * @deprecated
        */
        static readonly LOCATION_PARTICLES: ResourceLocation;
    }
    type TextureAtlas_ = TextureAtlas;
    class TreeExtractorMapping extends Internal.SerializableRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.Block_, arg2: Internal.Block_, arg3: Internal.FluidStack_)
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        getFluid(): Internal.FluidStack;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        getLeaves(): Internal.Block;
        setGroup(group: string): void;
        getTrunk(): Internal.Block;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getRemainingItems(arg0: Internal.FalseIInventory_): Internal.NonNullList<Internal.ItemStack>;
        getMod(): string;
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get fluid(): Internal.FluidStack
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        get leaves(): Internal.Block
        set group(group: string)
        get trunk(): Internal.Block
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type TreeExtractorMapping_ = TreeExtractorMapping;
    class TimberFrameItem extends net.mehvahdjukaar.moonlight.api.item.FuelBlockItem {
        constructor(block: Internal.Block_, properties: Internal.Item$Properties_)
        constructor(block: Internal.Block_, properties: Internal.Item$Properties_, burnTicks: number)
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
    type TimberFrameItem_ = TimberFrameItem;
    class HideJEIEventJS <T> extends Internal.EventJS {
        constructor(r: Internal.IJeiRuntime_, t: Internal.IIngredientType_<T>, f: Internal.Function_<any, Internal.Predicate<T>>, i: Internal.Predicate_<T>)
        getAllIngredients(): Internal.Collection<T>;
        hide(o: any): void;
        hideAll(): void;
        get allIngredients(): Internal.Collection<T>
    }
    type HideJEIEventJS_<T> = HideJEIEventJS<T>;
    class ScreenPosition extends Internal.Record {
        constructor(arg0: number, arg1: number)
        step(arg0: Internal.ScreenDirection_): this;
        y(): number;
        x(): number;
        static of(arg0: Internal.ScreenAxis_, arg1: number, arg2: number): Internal.ScreenPosition;
        getCoordinate(arg0: Internal.ScreenAxis_): number;
    }
    type ScreenPosition_ = ScreenPosition;
    interface PacketSendListener {
        onSuccess(): void;
        onFailure(): Internal.Packet<any>;
        thenRun(arg0: Internal.Runnable_): this;
        exceptionallySend(arg0: Internal.Supplier_<Internal.Packet<any>>): this;
    }
    type PacketSendListener_ = PacketSendListener;
    class MendingEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type MendingEnchantment_ = MendingEnchantment;
    class CrafterBlock extends Internal.ZetaBlock implements Internal.EntityBlock {
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
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
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
        static readonly POWER: Internal.EnumProperty<Internal.CrafterBlock$PowerState>;
        static readonly FACING: Internal.DirectionProperty;
    }
    type CrafterBlock_ = CrafterBlock;
    abstract class PortableStorageInterfaceBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        onContentTransferred(): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        startTransferringTo(arg0: Internal.Contraption_, arg1: number): void;
        neighbourChanged(): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        canTransfer(): boolean;
        startConnecting(): void;
        isTransferring(): boolean;
        isPowered(): boolean;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
        get transferring(): boolean
        get powered(): boolean
        keepAlive: number;
        static readonly ANIMATION: 4;
    }
    type PortableStorageInterfaceBlockEntity_ = PortableStorageInterfaceBlockEntity;
    interface DeferredSupplier <T> extends Internal.OptionalSupplier<T> {
        getKey(): Internal.ResourceKey<T>;
        stream(): Internal.Stream<T>;
        ifPresent(action: Internal.Consumer_<T>): void;
        orElseGet(supplier: Internal.Supplier_<T>): T;
        ifPresentOrElse(action: Internal.Consumer_<T>, emptyAction: Internal.Runnable_): void;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<T>>;
        getOrNull(): T;
        orElse(other: T): T;
        abstract getId(): ResourceLocation;
        abstract isPresent(): boolean;
        abstract getRegistryId(): ResourceLocation;
        abstract get(): T;
        toOptional(): Internal.Optional<T>;
        get key(): Internal.ResourceKey<T>
        get registryKey(): Internal.ResourceKey<Internal.Registry<T>>
        get orNull(): T
        get id(): ResourceLocation
        get present(): boolean
        get registryId(): ResourceLocation
    }
    type DeferredSupplier_<T> = DeferredSupplier<T>;
    interface Object2FloatFunction <K> extends it.unimi.dsi.fastutil.Function<K, number>, Internal.ToDoubleFunction<K> {
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Object2CharFunction<K>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2FloatFunction;
        removeFloat(arg0: any): number;
        defaultReturnValue(arg0: number): void;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Object2ShortFunction<K>;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        getOrDefault(arg0: any, arg1: number): number;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Object2ByteFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2FloatFunction<T>;
        apply(arg0: K): number;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        containsKey(arg0: any): boolean;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2FloatFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        applyAsDouble(arg0: K): number;
        put(arg0: K, arg1: number): number;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2FloatFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2FloatFunction;
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
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2FloatFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2FloatFunction;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2FloatFunction;
        size(): number;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2FloatFunction;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Object2LongFunction<K>;
        clear(): void;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        identity<T>(): Internal.Function<T, T>;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Object2IntFunction<K>;
        (arg0: any): number;
    }
    type Object2FloatFunction_<K> = Object2FloatFunction<K>;
    class SpawnPlacementRegisterEvent extends net.minecraftforge.eventbus.api.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<Internal.EntityType<any>, any>)
        register<T extends Internal.Entity>(arg0: Internal.EntityType_<T>, arg1: Internal.SpawnPlacements$Type_, arg2: Internal.Heightmap$Types_, arg3: Internal.SpawnPlacements$SpawnPredicate_<T>, arg4: Internal.SpawnPlacementRegisterEvent$Operation_): void;
        register<T extends Internal.Entity>(arg0: Internal.EntityType_<T>, arg1: Internal.SpawnPlacements$SpawnPredicate_<T>): void;
        register<T extends Internal.Entity>(arg0: Internal.EntityType_<T>, arg1: Internal.SpawnPlacements$SpawnPredicate_<T>, arg2: Internal.SpawnPlacementRegisterEvent$Operation_): void;
    }
    type SpawnPlacementRegisterEvent_ = SpawnPlacementRegisterEvent;
    class MultifaceGrowthConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.MultifaceBlock_, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: Internal.HolderSet_<Internal.Block>)
        getShuffledDirectionsExcept(arg0: Internal.RandomSource_, arg1: Internal.Direction_): Internal.List<Internal.Direction>;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        getShuffledDirections(arg0: Internal.RandomSource_): Internal.List<Internal.Direction>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly searchRange: number;
        readonly canBePlacedOn: Internal.HolderSet<Internal.Block>;
        static readonly CODEC: Internal.Codec<Internal.MultifaceGrowthConfiguration>;
        readonly placeBlock: Internal.MultifaceBlock;
        readonly canPlaceOnCeiling: boolean;
        readonly canPlaceOnFloor: boolean;
        readonly canPlaceOnWall: boolean;
        readonly chanceOfSpreading: number;
    }
    type MultifaceGrowthConfiguration_ = MultifaceGrowthConfiguration;
    class PropelplantBerryCaneBlock extends Internal.PropelplantBlock {
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
    type PropelplantBerryCaneBlock_ = PropelplantBerryCaneBlock;
    abstract class AbstractCookingRecipe implements Internal.Recipe<net.minecraft.world.Container> {
        constructor(arg0: Internal.RecipeType_<any>, arg1: ResourceLocation_, arg2: string, arg3: Internal.CookingBookCategory_, arg4: Internal.Ingredient_, arg5: Internal.ItemStack_, arg6: number, arg7: number)
        category(): Internal.CookingBookCategory;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        getExperience(): number;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getCookingTime(): number;
        getType(): ResourceLocation;
        setGroup(group: string): void;
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
        get experience(): number
        get special(): boolean
        get cookingTime(): number
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        readonly result: Internal.ItemStack;
    }
    type AbstractCookingRecipe_ = AbstractCookingRecipe;
    class IFluidHandler$FluidAction extends Internal.Enum<Internal.IFluidHandler$FluidAction> {
        simulate(): boolean;
        static valueOf(arg0: string): Internal.IFluidHandler$FluidAction;
        static values(): Internal.IFluidHandler$FluidAction[];
        execute(): boolean;
        static readonly SIMULATE: Internal.IFluidHandler$FluidAction;
        static readonly EXECUTE: Internal.IFluidHandler$FluidAction;
    }
    type IFluidHandler$FluidAction_ = "execute" | "simulate" | IFluidHandler$FluidAction;
    class ItemRequirement$StackRequirement {
        constructor(arg0: Internal.ItemStack_, arg1: Internal.ItemRequirement$ItemUseType_)
        matches(arg0: Internal.ItemStack_): boolean;
        readonly stack: Internal.ItemStack;
        readonly usage: Internal.ItemRequirement$ItemUseType;
    }
    type ItemRequirement$StackRequirement_ = ItemRequirement$StackRequirement;
    interface WriterSupplier {
        abstract get(): Internal.Writer;
        (): Internal.Writer_;
    }
    type WriterSupplier_ = WriterSupplier;
    interface ILimited {
        abstract isLimitEnabled(): boolean;
        abstract setLimitEnabled(arg0: boolean): void;
        makeLimitEnabledPacket(pos: BlockPos_, limitEnabled: boolean): Internal.StationEditPacket;
        get limitEnabled(): boolean
        set limitEnabled(arg0: boolean)
    }
    type ILimited_ = ILimited;
    class MatchingBlockTagPredicate extends Internal.StateTestingPredicate {
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static readonly CODEC: Internal.Codec<Internal.MatchingBlockTagPredicate>;
    }
    type MatchingBlockTagPredicate_ = MatchingBlockTagPredicate;
    interface ServicesKeySet {
        lazy(arg0: Internal.Supplier_<Internal.ServicesKeySet>): this;
        abstract keys(arg0: Internal.ServicesKeyType_): Internal.Collection<Internal.ServicesKeyInfo>;
        (arg0: Internal.ServicesKeyType): Internal.Collection_<Internal.ServicesKeyInfo>;
        readonly EMPTY: Internal.ServicesKeySet;
    }
    type ServicesKeySet_ = ServicesKeySet;
    class RenderCapeEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_)
        getEntity(): Internal.LivingEntity;
        get entity(): Internal.LivingEntity
    }
    type RenderCapeEvent_ = RenderCapeEvent;
    class GuiGraphics implements Internal.DrawContextExtensions, Internal.IForgeGuiGraphics {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.MultiBufferSource$BufferSource_)
        constructor(arg0: Internal.Minecraft_, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource$BufferSource_)
        blitRepeating(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        setMouseX(mouseX: number): void;
        hLine(arg0: Internal.RenderType_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        blitNineSlicedSized(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number): void;
        getColorFromFormattingCharacter(arg0: string, arg1: boolean): number;
        renderComponentTooltip(arg0: net.minecraft.client.gui.Font_, arg1: Internal.List_<Internal.FormattedText>, arg2: number, arg3: number, arg4: Internal.ItemStack_): void;
        renderItemDecorations(arg0: net.minecraft.client.gui.Font_, arg1: Internal.ItemStack_, arg2: number, arg3: number): void;
        setTooltipBottomYPosition(bottomY: number): void;
        renderTooltip(arg0: net.minecraft.client.gui.Font_, arg1: Internal.List_<net.minecraft.network.chat.Component>, arg2: Internal.Optional_<Internal.TooltipComponent>, arg3: number, arg4: number): void;
        fillGradient(arg0: Internal.RenderType_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        vLine(arg0: Internal.RenderType_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        drawString(arg0: net.minecraft.client.gui.Font_, arg1: net.minecraft.network.chat.Component_, arg2: number, arg3: number, arg4: number): number;
        renderItem(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        renderItem(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: number, arg3: number, arg4: number): void;
        renderTooltipInternal(arg0: net.minecraft.client.gui.Font_, arg1: Internal.List_<Internal.ClientTooltipComponent>, arg2: number, arg3: number, arg4: Internal.ClientTooltipPositioner_): void;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        drawString(arg0: net.minecraft.client.gui.Font_, arg1: Internal.FormattedCharSequence_, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: net.minecraft.client.gui.Font_, arg1: Internal.FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        blitNineSlicedSized(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        renderOutline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        guiHeight(): number;
        drawString(arg0: net.minecraft.client.gui.Font_, arg1: Internal.FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        vLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        blitWithBorder(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        renderComponentHoverEffect(arg0: net.minecraft.client.gui.Font_, arg1: Internal.Style_, arg2: number, arg3: number): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        hLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        fill(arg0: Internal.RenderType_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        renderTooltip(arg0: net.minecraft.client.gui.Font_, arg1: net.minecraft.network.chat.Component_, arg2: number, arg3: number): void;
        blit(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getMouseX(): number;
        blitNineSliced(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        blitWithBorder(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        renderTooltip(arg0: net.minecraft.client.gui.Font_, arg1: Internal.List_<Internal.FormattedCharSequence>, arg2: Internal.ClientTooltipPositioner_, arg3: number, arg4: number): void;
        drawString(arg0: net.minecraft.client.gui.Font_, arg1: net.minecraft.network.chat.Component_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        blitNineSlicedSized(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        drawCenteredString(arg0: net.minecraft.client.gui.Font_, arg1: string, arg2: number, arg3: number, arg4: number): void;
        drawString(arg0: net.minecraft.client.gui.Font_, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        getTooltipTopYPosition(): number;
        getTooltipBottomYPosition(): number;
        blit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.TextureAtlasSprite_, arg6: number, arg7: number, arg8: number, arg9: number): void;
        renderTooltip(arg0: net.minecraft.client.gui.Font_, arg1: Internal.List_<net.minecraft.network.chat.Component>, arg2: Internal.Optional_<Internal.TooltipComponent>, arg3: Internal.ItemStack_, arg4: number, arg5: number): void;
        renderTooltip(arg0: net.minecraft.client.gui.Font_, arg1: Internal.ItemStack_, arg2: number, arg3: number): void;
        blit(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        bufferSource(): Internal.MultiBufferSource$BufferSource;
        guiWidth(): number;
        renderItem(arg0: Internal.ItemStack_, arg1: number, arg2: number): void;
        setMouseY(mouseY: number): void;
        fillGradient(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        fill(arg0: Internal.RenderType_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        drawWordWrap(arg0: net.minecraft.client.gui.Font_, arg1: Internal.FormattedText_, arg2: number, arg3: number, arg4: number, arg5: number): void;
        pose(): Internal.PoseStack;
        flush(): void;
        renderItemDecorations(arg0: net.minecraft.client.gui.Font_, arg1: Internal.ItemStack_, arg2: number, arg3: number, arg4: string): void;
        blitRepeating(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        drawCenteredString(arg0: net.minecraft.client.gui.Font_, arg1: Internal.FormattedCharSequence_, arg2: number, arg3: number, arg4: number): void;
        setTooltipTopYPosition(topY: number): void;
        drawCenteredString(arg0: net.minecraft.client.gui.Font_, arg1: net.minecraft.network.chat.Component_, arg2: number, arg3: number, arg4: number): void;
        renderItem(arg0: Internal.LivingEntity_, arg1: Internal.Level_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number): void;
        disableScissor(): void;
        fillGradient(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        renderTooltip(arg0: net.minecraft.client.gui.Font_, arg1: Internal.List_<Internal.FormattedCharSequence>, arg2: number, arg3: number): void;
        renderComponentTooltip(arg0: net.minecraft.client.gui.Font_, arg1: Internal.List_<net.minecraft.network.chat.Component>, arg2: number, arg3: number): void;
        getMouseY(): number;
        /**
         * @deprecated
        */
        drawManaged(arg0: Internal.Runnable_): void;
        blit(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        blitNineSliced(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        blit(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        blitInscribed(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        renderItem(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        blit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.TextureAtlasSprite_): void;
        drawString(arg0: net.minecraft.client.gui.Font_, arg1: string, arg2: number, arg3: number, arg4: number): number;
        blitNineSliced(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        renderFakeItem(arg0: Internal.ItemStack_, arg1: number, arg2: number): void;
        drawString(arg0: net.minecraft.client.gui.Font_, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        blitInscribed(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        set mouseX(mouseX: number)
        set tooltipBottomYPosition(bottomY: number)
        get mouseX(): number
        get tooltipTopYPosition(): number
        get tooltipBottomYPosition(): number
        set mouseY(mouseY: number)
        set tooltipTopYPosition(topY: number)
        get mouseY(): number
        static readonly MAX_GUI_Z: 10000.0;
        static readonly MIN_GUI_Z: -10000.0;
    }
    type GuiGraphics_ = GuiGraphics;
}
declare namespace net.mehvahdjukaar.moonlight.api.set.wood {
    class WoodType extends Internal.BlockType {
        constructor(id: ResourceLocation_, baseBlock: Internal.Block_, logBlock: Internal.Block_)
        initializeChildrenBlocks(): void;
        initializeChildrenItems(): void;
        toVanilla(): Internal.WoodType;
        toVanillaOrOak(): Internal.WoodType;
        getColor(): Internal.MapColor;
        canBurn(): boolean;
        getTexturePath(): string;
        copyProperties(): Internal.BlockBehaviour$Properties;
        get color(): Internal.MapColor
        get texturePath(): string
        readonly log: Internal.Block;
        static readonly CODEC: Internal.Codec<net.mehvahdjukaar.moonlight.api.set.wood.WoodType>;
        readonly planks: Internal.Block;
    }
    type WoodType_ = WoodType;
}
declare namespace org.apache.logging.log4j {
    class Level implements Internal.Comparable<org.apache.logging.log4j.Level>, Internal.Serializable {
        static valueOf<T extends Internal.Enum<T>>(enumType: T, name: string): T;
        isInRange(minLevel: org.apache.logging.log4j.Level_, maxLevel: org.apache.logging.log4j.Level_): boolean;
        static toLevel(level: string): org.apache.logging.log4j.Level;
        isMoreSpecificThan(level: org.apache.logging.log4j.Level_): boolean;
        clone(): this;
        static forName(name: string, intValue: number): org.apache.logging.log4j.Level;
        static toLevel(name: string, defaultLevel: org.apache.logging.log4j.Level_): org.apache.logging.log4j.Level;
        getDeclaringClass(): typeof org.apache.logging.log4j.Level;
        compareTo(other: org.apache.logging.log4j.Level_): number;
        static valueOf(name: string): org.apache.logging.log4j.Level;
        compareTo(other: any): number;
        name(): string;
        intLevel(): number;
        static getLevel(name: string): org.apache.logging.log4j.Level;
        isLessSpecificThan(level: org.apache.logging.log4j.Level_): boolean;
        static values(): org.apache.logging.log4j.Level[];
        getStandardLevel(): Internal.StandardLevel;
        get declaringClass(): typeof org.apache.logging.log4j.Level
        get standardLevel(): Internal.StandardLevel
        static readonly FATAL: org.apache.logging.log4j.Level;
        static readonly INFO: org.apache.logging.log4j.Level;
        static readonly ERROR: org.apache.logging.log4j.Level;
        static readonly OFF: org.apache.logging.log4j.Level;
        static readonly ALL: org.apache.logging.log4j.Level;
        static readonly CATEGORY: "Level";
        static readonly TRACE: org.apache.logging.log4j.Level;
        static readonly WARN: org.apache.logging.log4j.Level;
        static readonly DEBUG: org.apache.logging.log4j.Level;
    }
    type Level_ = Level;
}
declare namespace com.jozufozu.flywheel.util {
    class Color {
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number, arg1: boolean)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        setRed(arg0: number): this;
        getAlphaAsFloat(): number;
        setBlue(arg0: number): this;
        getAlpha(): number;
        getBlueAsFloat(): number;
        setGreen(arg0: number): this;
        setBlue(arg0: number): this;
        asVectorF(): Vec3f;
        setGreen(arg0: number): this;
        getGreenAsFloat(): number;
        static rainbowColor(arg0: number): com.jozufozu.flywheel.util.Color;
        static mixColors(arg0: com.jozufozu.flywheel.util.Color_, arg1: com.jozufozu.flywheel.util.Color_, arg2: number): com.jozufozu.flywheel.util.Color;
        static mixColors(arg0: number, arg1: number, arg2: number): number;
        getBlue(): number;
        getGreen(): number;
        getRGB(): number;
        darker(): this;
        scaleAlpha(arg0: number): this;
        getRedAsFloat(): number;
        getRed(): number;
        setRed(arg0: number): this;
        copy(): this;
        mixWith(arg0: com.jozufozu.flywheel.util.Color_, arg1: number): this;
        setAlpha(arg0: number): this;
        asVector(): Vec3d;
        modifyValue(arg0: Internal.UnaryOperator_<number>): this;
        setImmutable(): this;
        static generateFromLong(arg0: number): com.jozufozu.flywheel.util.Color;
        brighter(): this;
        copy(arg0: boolean): this;
        setAlpha(arg0: number): this;
        setValue(arg0: number): this;
        set red(arg0: number)
        get alphaAsFloat(): number
        set blue(arg0: number)
        get alpha(): number
        get blueAsFloat(): number
        set green(arg0: number)
        set blue(arg0: number)
        set green(arg0: number)
        get greenAsFloat(): number
        get blue(): number
        get green(): number
        get RGB(): number
        get redAsFloat(): number
        get red(): number
        set red(arg0: number)
        set alpha(arg0: number)
        set alpha(arg0: number)
        set value(arg0: number)
        static readonly SPRING_GREEN: com.jozufozu.flywheel.util.Color;
        static readonly GREEN: com.jozufozu.flywheel.util.Color;
        static readonly TRANSPARENT_BLACK: com.jozufozu.flywheel.util.Color;
        static readonly WHITE: com.jozufozu.flywheel.util.Color;
        static readonly RED: com.jozufozu.flywheel.util.Color;
        static readonly BLACK: com.jozufozu.flywheel.util.Color;
    }
    type Color_ = Color;
}