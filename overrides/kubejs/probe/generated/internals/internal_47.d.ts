/// <reference path="./internal_*.d.ts" />
declare namespace org.slf4j {
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
}
declare namespace Internal {
    class Cow extends Internal.Animal {
        constructor(arg0: Internal.EntityType_<Internal.Cow>, arg1: Internal.Level_)
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
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): this;
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
    type Cow_ = Cow;
    class SandPaperItem extends Internal.Item implements Internal.CustomUseEffectsItem {
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
        static spawnParticles(arg0: Vec3d_, arg1: Internal.ItemStack_, arg2: Internal.Level_): void;
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
        triggerUseEffects(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number, arg3: Internal.RandomSource_): boolean;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
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
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        shouldTriggerUseEffects(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
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
    type SandPaperItem_ = SandPaperItem;
    class RefillUpgradeWrapper$TargetSlot extends Internal.Enum<Internal.RefillUpgradeWrapper$TargetSlot> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        getAcronym(): net.minecraft.network.chat.Component;
        static valueOf(arg0: string): Internal.RefillUpgradeWrapper$TargetSlot;
        next(): this;
        previous(): this;
        static fromName(arg0: string): Internal.RefillUpgradeWrapper$TargetSlot;
        getDescription(): net.minecraft.network.chat.Component;
        static values(): Internal.RefillUpgradeWrapper$TargetSlot[];
        get serializedName(): string
        get acronym(): net.minecraft.network.chat.Component
        get description(): net.minecraft.network.chat.Component
        static readonly TOOLBAR_3: Internal.RefillUpgradeWrapper$TargetSlot;
        static readonly TOOLBAR_2: Internal.RefillUpgradeWrapper$TargetSlot;
        static readonly TOOLBAR_1: Internal.RefillUpgradeWrapper$TargetSlot;
        static readonly TOOLBAR_7: Internal.RefillUpgradeWrapper$TargetSlot;
        static readonly TOOLBAR_6: Internal.RefillUpgradeWrapper$TargetSlot;
        static readonly OFF_HAND: Internal.RefillUpgradeWrapper$TargetSlot;
        static readonly TOOLBAR_5: Internal.RefillUpgradeWrapper$TargetSlot;
        static readonly TOOLBAR_4: Internal.RefillUpgradeWrapper$TargetSlot;
        static readonly TOOLBAR_9: Internal.RefillUpgradeWrapper$TargetSlot;
        static readonly TOOLBAR_8: Internal.RefillUpgradeWrapper$TargetSlot;
        static readonly ANY: Internal.RefillUpgradeWrapper$TargetSlot;
        static readonly MAIN_HAND: Internal.RefillUpgradeWrapper$TargetSlot;
    }
    type RefillUpgradeWrapper$TargetSlot_ = "off_hand" | "toolbar_3" | RefillUpgradeWrapper$TargetSlot | "toolbar_4" | "toolbar_1" | "toolbar_2" | "toolbar_7" | "toolbar_8" | "toolbar_5" | "toolbar_6" | "main_hand" | "toolbar_9" | "any";
    class CreativeTabEvent extends Internal.EventJS {
        constructor(tab: Internal.CreativeModeTab_, showRestrictedItems: boolean, callback: any_)
        add(items: Internal.ItemStack_[]): void;
        setDisplayName(component: net.minecraft.network.chat.Component_): void;
        setIcon(icon: Internal.ItemStack_): void;
        addAfter(order: Internal.ItemStack_, items: Internal.ItemStack_[], visibility: Internal.CreativeModeTab$TabVisibility_): void;
        addAfter(order: Internal.ItemStack_, items: Internal.ItemStack_[]): void;
        remove(filter: Internal.Ingredient_): void;
        add(items: Internal.ItemStack_[], visibility: Internal.CreativeModeTab$TabVisibility_): void;
        removeDisplay(filter: Internal.Ingredient_): void;
        addBefore(order: Internal.ItemStack_, items: Internal.ItemStack_[]): void;
        removeSearch(filter: Internal.Ingredient_): void;
        addBefore(order: Internal.ItemStack_, items: Internal.ItemStack_[], visibility: Internal.CreativeModeTab$TabVisibility_): void;
        set displayName(component: net.minecraft.network.chat.Component_)
        set icon(icon: Internal.ItemStack_)
        readonly showRestrictedItems: boolean;
        readonly tab: Internal.CreativeModeTab;
    }
    type CreativeTabEvent_ = CreativeTabEvent;
    class Slot {
        constructor(arg0: net.minecraft.world.Container_, arg1: number, arg2: number, arg3: number)
        onTake(arg0: Internal.Player_, arg1: Internal.ItemStack_): void;
        allowModification(arg0: Internal.Player_): boolean;
        set(arg0: Internal.ItemStack_): void;
        isHighlightable(): boolean;
        safeInsert(arg0: Internal.ItemStack_): Internal.ItemStack;
        setByPlayer(arg0: Internal.ItemStack_): void;
        tryRemove(arg0: number, arg1: number, arg2: Internal.Player_): Internal.Optional<Internal.ItemStack>;
        isSameInventory(arg0: Internal.Slot_): boolean;
        getItem(): Internal.ItemStack;
        getMaxStackSize(): number;
        isActive(): boolean;
        mayPickup(arg0: Internal.Player_): boolean;
        remove(arg0: number): Internal.ItemStack;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        mayPlace(arg0: Internal.ItemStack_): boolean;
        setChanged(): void;
        getNoItemIcon(): Internal.Pair<ResourceLocation, ResourceLocation>;
        onQuickCraft(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): void;
        hasItem(): boolean;
        safeInsert(arg0: Internal.ItemStack_, arg1: number): Internal.ItemStack;
        safeTake(arg0: number, arg1: number, arg2: Internal.Player_): Internal.ItemStack;
        getSlotIndex(): number;
        getContainerSlot(): number;
        setBackground(arg0: ResourceLocation_, arg1: ResourceLocation_): this;
        get highlightable(): boolean
        set byPlayer(arg0: Internal.ItemStack_)
        get item(): Internal.ItemStack
        get maxStackSize(): number
        get active(): boolean
        get noItemIcon(): Internal.Pair<ResourceLocation, ResourceLocation>
        get slotIndex(): number
        get containerSlot(): number
        index: number;
        x: number;
        y: number;
        readonly slot: number;
        readonly container: net.minecraft.world.Container;
    }
    type Slot_ = Slot;
    class Blender {
        getBiomeResolver(arg0: Internal.BiomeResolver_): Internal.BiomeResolver;
        static generateBorderTicks(arg0: Internal.WorldGenRegion_, arg1: Internal.ChunkAccess_): void;
        blendOffsetAndFactor(arg0: number, arg1: number): Internal.Blender$BlendingOutput;
        blendDensity(arg0: Internal.DensityFunction$FunctionContext_, arg1: number): number;
        static empty(): Internal.Blender;
        static makeOldChunkDistanceGetter(arg0: Internal.BlendingData_, arg1: Internal.Map_<Internal.Direction8, Internal.BlendingData>): Internal.Blender$DistanceGetter;
        static addAroundOldChunksCarvingMaskFilter(arg0: Internal.WorldGenLevel_, arg1: Internal.ProtoChunk_): void;
        static of(arg0: Internal.WorldGenRegion_): Internal.Blender;
    }
    type Blender_ = Blender;
    class BlendedNoise implements Internal.DensityFunction$SimpleFunction {
        constructor(arg0: Internal.RandomSource_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        abs(): Internal.DensityFunction;
        halfNegative(): Internal.DensityFunction;
        withNewRandom(arg0: Internal.RandomSource_): this;
        maxValue(): number;
        codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        static createUnseeded(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.BlendedNoise;
        square(): Internal.DensityFunction;
        parityConfigString(arg0: Internal.StringBuilder_): void;
        mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        cube(): Internal.DensityFunction;
        fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        minValue(): number;
        static readonly CODEC: Internal.KeyDispatchDataCodec<Internal.BlendedNoise>;
    }
    type BlendedNoise_ = BlendedNoise;
    class Cod extends Internal.AbstractSchoolingFish {
        constructor(arg0: Internal.EntityType_<Internal.Cod>, arg1: Internal.Level_)
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
        /**
         * @deprecated
        */
        static loadDefaultDataFromBucketTag(arg0: Internal.Mob_, arg1: Internal.CompoundTag_): void;
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
    type Cod_ = Cod;
    class BoundingBox {
        constructor(arg0: BlockPos_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        forAllCorners(arg0: Internal.Consumer_<BlockPos>): void;
        static encapsulatingPositions(arg0: Internal.Iterable_<BlockPos>): Internal.Optional<Internal.BoundingBox>;
        getXSpan(): number;
        maxY(): number;
        maxX(): number;
        static fromCorners(arg0: Vec3i_, arg1: Vec3i_): Internal.BoundingBox;
        getCenter(): BlockPos;
        maxZ(): number;
        isInside(arg0: number, arg1: number, arg2: number): boolean;
        isInside(arg0: Vec3i_): boolean;
        static encapsulatingBoxes(arg0: Internal.Iterable_<Internal.BoundingBox>): Internal.Optional<Internal.BoundingBox>;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getYSpan(): number;
        intersects(arg0: Internal.BoundingBox_): boolean;
        /**
         * @deprecated
        */
        encapsulate(arg0: BlockPos_): this;
        moved(arg0: number, arg1: number, arg2: number): this;
        static orientBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Direction_): Internal.BoundingBox;
        getLength(): Vec3i;
        minZ(): number;
        minY(): number;
        minX(): number;
        static infinite(): Internal.BoundingBox;
        /**
         * @deprecated
        */
        move(arg0: number, arg1: number, arg2: number): this;
        inflatedBy(arg0: number): this;
        getZSpan(): number;
        /**
         * @deprecated
        */
        move(arg0: Vec3i_): this;
        /**
         * @deprecated
        */
        encapsulate(arg0: Internal.BoundingBox_): this;
        get XSpan(): number
        get center(): BlockPos
        get YSpan(): number
        get length(): Vec3i
        get ZSpan(): number
        static readonly CODEC: Internal.Codec<Internal.BoundingBox>;
    }
    type BoundingBox_ = BoundingBox;
    class PumpUpgradeItem extends Internal.UpgradeItemBase<Internal.PumpUpgradeWrapper> {
        constructor(arg0: boolean, arg1: boolean, arg2: Internal.PumpUpgradeConfig_, arg3: any_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        getType(): Internal.UpgradeType<Internal.PumpUpgradeWrapper>;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getInteractWithHandDefault(): boolean;
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
        getCleanedUpgradeStack(arg0: Internal.ItemStack_): Internal.ItemStack;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getInventoryColumnsTaken(): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canAddUpgradeTo(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: boolean, arg3: boolean): Internal.UpgradeSlotChangeResult;
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
        getInteractWithWorldDefault(): boolean;
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
        getPumpUpgradeConfig(): Internal.PumpUpgradeConfig;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getUpgradeGroup(): Internal.UpgradeGroup;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        canRemoveUpgradeFrom(arg0: Internal.IStorageWrapper_, arg1: boolean): Internal.UpgradeSlotChangeResult;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        canSwapUpgradeFor(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: boolean): Internal.UpgradeSlotChangeResult;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        get type(): Internal.UpgradeType<Internal.PumpUpgradeWrapper>
        get interactWithHandDefault(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get inventoryColumnsTaken(): number
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        get interactWithWorldDefault(): boolean
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get pumpUpgradeConfig(): Internal.PumpUpgradeConfig
        get upgradeGroup(): Internal.UpgradeGroup
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type PumpUpgradeItem_ = PumpUpgradeItem;
    class ServerboundRecipeBookChangeSettingsPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.RecipeBookType_, arg1: boolean, arg2: boolean)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getBookType(): Internal.RecipeBookType;
        isOpen(): boolean;
        isFiltering(): boolean;
        isSkippable(): boolean;
        get bookType(): Internal.RecipeBookType
        get open(): boolean
        get filtering(): boolean
        get skippable(): boolean
    }
    type ServerboundRecipeBookChangeSettingsPacket_ = ServerboundRecipeBookChangeSettingsPacket;
    class WorldCreationUiState$SelectedGameMode extends Internal.Enum<Internal.WorldCreationUiState$SelectedGameMode> {
        static valueOf(arg0: string): Internal.WorldCreationUiState$SelectedGameMode;
        getInfo(): net.minecraft.network.chat.Component;
        static values(): Internal.WorldCreationUiState$SelectedGameMode[];
        get info(): net.minecraft.network.chat.Component
        readonly displayName: net.minecraft.network.chat.Component;
        static readonly SURVIVAL: Internal.WorldCreationUiState$SelectedGameMode;
        static readonly DEBUG: Internal.WorldCreationUiState$SelectedGameMode;
        readonly gameType: Internal.GameType;
        static readonly CREATIVE: Internal.WorldCreationUiState$SelectedGameMode;
        static readonly HARDCORE: Internal.WorldCreationUiState$SelectedGameMode;
    }
    type WorldCreationUiState$SelectedGameMode_ = "hardcore" | "debug" | WorldCreationUiState$SelectedGameMode | "survival" | "creative";
    class ParalysisEffect extends Internal.MobEffect {
        constructor()
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type ParalysisEffect_ = ParalysisEffect;
    class GossipType extends Internal.Enum<Internal.GossipType> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.GossipType;
        getSerializedName(): string;
        static values(): Internal.GossipType[];
        get serializedName(): string
        readonly decayPerDay: number;
        static readonly MINOR_POSITIVE: Internal.GossipType;
        static readonly REPUTATION_CHANGE_PER_EVENT: 25;
        readonly weight: number;
        static readonly TRADING: Internal.GossipType;
        static readonly REPUTATION_CHANGE_PER_EVERLASTING_MEMORY: 20;
        static readonly MINOR_NEGATIVE: Internal.GossipType;
        static readonly MAJOR_NEGATIVE: Internal.GossipType;
        static readonly REPUTATION_CHANGE_PER_TRADE: 2;
        readonly id: string;
        readonly decayPerTransfer: number;
        static readonly MAJOR_POSITIVE: Internal.GossipType;
        static readonly CODEC: Internal.Codec<Internal.GossipType>;
        readonly max: number;
    }
    type GossipType_ = GossipType | "major_positive" | "minor_negative" | "major_negative" | "trading" | "minor_positive";
    class SoundKeyframeEvent <T extends Internal.GeoAnimatable> extends Internal.KeyFrameEvent<T, Internal.SoundKeyframeData> {
        constructor(arg0: T, arg1: number, arg2: Internal.AnimationController_<T>, arg3: Internal.SoundKeyframeData_)
        getKeyframeData(): Internal.SoundKeyframeData;
        get keyframeData(): Internal.SoundKeyframeData
    }
    type SoundKeyframeEvent_<T extends Internal.GeoAnimatable> = SoundKeyframeEvent<T>;
    class CookingPotRecipe implements Internal.Recipe<Internal.RecipeWrapper> {
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.CookingPotRecipeBookTab_, arg3: Internal.NonNullList_<Internal.Ingredient>, arg4: Internal.ItemStack_, arg5: Internal.ItemStack_, arg6: number, arg7: number)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        matches(arg0: Internal.RecipeWrapper_, arg1: Internal.Level_): boolean;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        assemble(arg0: Internal.RecipeWrapper_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        getExperience(): number;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: Internal.RecipeWrapper_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getCookTime(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        getRecipeBookTab(): Internal.CookingPotRecipeBookTab;
        getOutputContainer(): Internal.ItemStack;
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
        get type(): ResourceLocation
        set group(group: string)
        get cookTime(): number
        get orCreateId(): ResourceLocation
        get recipeBookTab(): Internal.CookingPotRecipeBookTab
        get outputContainer(): Internal.ItemStack
        get incomplete(): boolean
        static readonly INPUT_SLOTS: 6;
    }
    type CookingPotRecipe_ = CookingPotRecipe;
    class DistillationTankBlockEntity extends Internal.SmartBlockEntity implements Internal.IMultiBlockEntityContainer$Fluid, Internal.IHaveGoggleInformation {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        setTankSize(arg0: number, arg1: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        removeController(arg0: boolean): void;
        getControllerBE(): Internal.BlockEntity;
        isController(): boolean;
        setController(arg0: BlockPos_): void;
        setExtraData(arg0: any): void;
        requestModelDataUpdate(): void;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        getLastKnownPos(): BlockPos;
        updateVerticalMulti(): void;
        getTotalTankSize(): number;
        applyFluidTankSize(arg0: number): void;
        preventConnectivityUpdate(): void;
        notifyMultiUpdated(): void;
        getExtraData(): any;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getFluidLevel(): Internal.LerpedFloat;
        isBottom(): boolean;
        setWidth(arg0: number): void;
        static getCapacityMultiplier(): number;
        getHeight(): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getMaxLength(arg0: Internal.Direction$Axis_, arg1: number): number;
        hasTank(): boolean;
        getMainAxisOf(arg0: Internal.BlockEntity_): Internal.Direction$Axis;
        getMaxWidth(): number;
        updateConnectivity(): void;
        getTank(arg0: number): Internal.IFluidTank;
        getFluid(arg0: number): Internal.FluidStack;
        deserializeNBT(arg0: Internal.Tag_): void;
        getWidth(): number;
        modifyExtraData(arg0: any): any;
        getTankSize(arg0: number): number;
        getController(): BlockPos;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        setWindows(arg0: boolean): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getFillState(): number;
        getModelData(): Internal.ModelData;
        toggleWindows(): void;
        addToGoggleTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean): boolean;
        getTemperature(): number;
        getMainConnectionAxis(): Internal.Direction$Axis;
        updateTemperature(): void;
        setHeight(arg0: number): void;
        get controllerBE(): Internal.BlockEntity
        get controller(): boolean
        set controller(arg0: BlockPos_)
        set extraData(arg0: any)
        get lastKnownPos(): BlockPos
        get totalTankSize(): number
        get extraData(): any
        get fluidLevel(): Internal.LerpedFloat
        get bottom(): boolean
        set width(arg0: number)
        get capacityMultiplier(): number
        get height(): number
        get maxWidth(): number
        get width(): number
        get controller(): BlockPos
        set windows(arg0: boolean)
        get fillState(): number
        get modelData(): Internal.ModelData
        get temperature(): number
        get mainConnectionAxis(): Internal.Direction$Axis
        set height(arg0: number)
        hasDistillationC: boolean;
        window: boolean;
        heat: number;
        progress: number;
        tankInventory: Internal.FluidTank;
    }
    type DistillationTankBlockEntity_ = DistillationTankBlockEntity;
    interface Int2ObjectMap$Entry <V> extends Internal.Map$Entry<number, V> {
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract getIntKey(): number;
        abstract getValue(): V;
        /**
         * @deprecated
        */
        getKey(): number;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract equals(arg0: any): boolean;
        abstract setValue(arg0: V): V;
        get intKey(): number
        get value(): V
        /**
         * @deprecated
        */
        get key(): number
        set value(arg0: V)
    }
    type Int2ObjectMap$Entry_<V> = Int2ObjectMap$Entry<V>;
    class BufferBuilder extends Internal.DefaultedVertexConsumer implements Internal.BufferBuilderExtension, Internal.BufferVertexConsumer {
        constructor(arg0: number)
        uv2(arg0: number): Internal.VertexConsumer;
        color(arg0: number): Internal.VertexConsumer;
        flywheel$getVertices(): number;
        end(): Internal.BufferBuilder$RenderedBuffer;
        static normalIntValue(arg0: number): number;
        isCurrentBatchEmpty(): boolean;
        normal(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        misc(arg0: Internal.VertexFormatElement_, ...arg1: number[]): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        flywheel$injectForRender(arg0: Internal.ByteBuffer_, arg1: Internal.VertexFormat_, arg2: number): void;
        restoreSortState(arg0: Internal.BufferBuilder$SortState_): void;
        begin(arg0: Internal.VertexFormat$Mode_, arg1: Internal.VertexFormat_): void;
        overlayCoords(arg0: number): Internal.VertexConsumer;
        endOrDiscardIfEmpty(): Internal.BufferBuilder$RenderedBuffer;
        vertex(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        setQuadSorting(arg0: Internal.VertexSorting_): void;
        getSortState(): Internal.BufferBuilder$SortState;
        color(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number[], arg7: number, arg8: boolean): void;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        currentElement(): Internal.VertexFormatElement;
        overlayCoords(arg0: number, arg1: number): Internal.VertexConsumer;
        applyBakedLighting(arg0: number, arg1: Internal.ByteBuffer_): number;
        nextElement(): void;
        building(): boolean;
        putBulkData(arg0: Internal.ByteBuffer_): void;
        uvShort(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        putShort(arg0: number, arg1: number): void;
        putByte(arg0: number, arg1: number): void;
        uv2(arg0: number, arg1: number): Internal.VertexConsumer;
        normal(arg0: Matrix3f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        putFloat(arg0: number, arg1: number): void;
        flywheel$appendBufferUnsafe(arg0: Internal.ByteBuffer_): void;
        applyBakedNormals(arg0: Vec3f_, arg1: Internal.ByteBuffer_, arg2: Matrix3f_): void;
        clear(): void;
        discard(): void;
        flywheel$freeBuffer(): void;
        vertex(arg0: Matrix4f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        uv(arg0: number, arg1: number): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        get currentBatchEmpty(): boolean
        set quadSorting(arg0: Internal.VertexSorting_)
        get sortState(): Internal.BufferBuilder$SortState
    }
    type BufferBuilder_ = BufferBuilder;
    class KelpFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type KelpFeature_ = KelpFeature;
    class CompletableFuture <T> implements Internal.Future<T>, Internal.CompletionStage<T> {
        constructor()
        thenAcceptAsync(arg0: Internal.Consumer_<any>, arg1: Internal.Executor_): Internal.CompletionStage<any>;
        getNow(arg0: T): T;
        static delayedExecutor(arg0: number, arg1: Internal.TimeUnit_): Internal.Executor;
        exceptionallyAsync(arg0: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        applyToEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Function_<any, any>, arg2: Internal.Executor_): Internal.CompletionStage<any>;
        thenAcceptAsync(arg0: Internal.Consumer_<any>): Internal.CompletionStage<any>;
        exceptionallyAsync(arg0: Internal.Function_<any, any>, arg1: Internal.Executor_): Internal.CompletionStage<any>;
        thenApplyAsync<U>(arg0: Internal.Function_<T, U>): Internal.CompletableFuture<U>;
        completeAsync(arg0: Internal.Supplier_<T>): this;
        complete(arg0: T): boolean;
        handleAsync<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>): Internal.CompletableFuture<U>;
        get(): T;
        thenCompose(arg0: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        runAfterEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_, arg2: Internal.Executor_): Internal.CompletionStage<any>;
        acceptEitherAsync(arg0: Internal.CompletionStage_<T>, arg1: Internal.Consumer_<T>, arg2: Internal.Executor_): Internal.CompletableFuture<void>;
        isCancelled(): boolean;
        thenRunAsync(arg0: Internal.Runnable_, arg1: Internal.Executor_): Internal.CompletionStage<any>;
        runAfterEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<any>;
        exceptionally(arg0: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        thenAccept(arg0: Internal.Consumer_<any>): Internal.CompletionStage<any>;
        static delayedExecutor(arg0: number, arg1: Internal.TimeUnit_, arg2: Internal.Executor_): Internal.Executor;
        static failedFuture<U>(arg0: Internal.Throwable_): Internal.CompletableFuture<U>;
        thenAcceptBoth<U>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiConsumer_<T, U>): Internal.CompletableFuture<void>;
        static runAsync(arg0: Internal.Runnable_, arg1: Internal.Executor_): Internal.CompletableFuture<void>;
        thenComposeAsync<U>(arg0: Internal.Function_<T, Internal.CompletionStage<U>>, arg1: Internal.Executor_): Internal.CompletableFuture<U>;
        cancel(arg0: boolean): boolean;
        static runAsync(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        whenCompleteAsync(arg0: Internal.BiConsumer_<T, Internal.Throwable>, arg1: Internal.Executor_): this;
        exceptionallyComposeAsync(arg0: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        runAfterBoth(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<any>;
        thenApplyAsync<U>(arg0: Internal.Function_<T, U>, arg1: Internal.Executor_): Internal.CompletableFuture<U>;
        join(): T;
        orTimeout(arg0: number, arg1: Internal.TimeUnit_): this;
        thenAcceptBothAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.BiConsumer_<any, any>): Internal.CompletionStage<any>;
        minimalCompletionStage(): Internal.CompletionStage<T>;
        static supplyAsync<U>(arg0: Internal.Supplier_<U>, arg1: Internal.Executor_): Internal.CompletableFuture<U>;
        get(arg0: number, arg1: Internal.TimeUnit_): T;
        thenCombineAsync<U, V>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiFunction_<T, U, V>, arg2: Internal.Executor_): Internal.CompletableFuture<V>;
        thenApply<U>(arg0: Internal.Function_<T, U>): Internal.CompletableFuture<U>;
        runAfterEither(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletableFuture<void>;
        thenCombine(arg0: Internal.CompletionStage_<any>, arg1: Internal.BiFunction_<any, any, any>): Internal.CompletionStage<any>;
        exceptionallyComposeAsync(arg0: Internal.Function_<any, any>, arg1: Internal.Executor_): Internal.CompletionStage<any>;
        acceptEitherAsync(arg0: Internal.CompletionStage_<T>, arg1: Internal.Consumer_<T>): Internal.CompletableFuture<void>;
        isCompletedExceptionally(): boolean;
        handleAsync<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>, arg1: Internal.Executor_): Internal.CompletableFuture<U>;
        thenCombineAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.BiFunction_<any, any, any>): Internal.CompletionStage<any>;
        static supplyAsync<U>(arg0: Internal.Supplier_<U>): Internal.CompletableFuture<U>;
        copy(): this;
        thenRunAsync(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        static completedFuture<U>(arg0: U): Internal.CompletableFuture<U>;
        handle<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>): Internal.CompletableFuture<U>;
        completeExceptionally(arg0: Internal.Throwable_): boolean;
        thenComposeAsync(arg0: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        obtrudeException(arg0: Internal.Throwable_): void;
        applyToEither(arg0: Internal.CompletionStage_<any>, arg1: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        static completedStage<U>(arg0: U): Internal.CompletionStage<U>;
        runAfterBothAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_, arg2: Internal.Executor_): Internal.CompletionStage<any>;
        thenAcceptBothAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.BiConsumer_<any, any>, arg2: Internal.Executor_): Internal.CompletionStage<any>;
        static anyOf(...arg0: Internal.CompletableFuture_<any>[]): Internal.CompletableFuture<any>;
        completeOnTimeout(arg0: T, arg1: number, arg2: Internal.TimeUnit_): this;
        newIncompleteFuture<U>(): Internal.CompletableFuture<U>;
        runAfterBothAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<any>;
        static failedStage<U>(arg0: Internal.Throwable_): Internal.CompletionStage<U>;
        defaultExecutor(): Internal.Executor;
        obtrudeValue(arg0: T): void;
        thenRun(arg0: Internal.Runnable_): Internal.CompletionStage<any>;
        getNumberOfDependents(): number;
        isDone(): boolean;
        whenComplete(arg0: Internal.BiConsumer_<any, any>): Internal.CompletionStage<any>;
        static allOf(...arg0: Internal.CompletableFuture_<any>[]): Internal.CompletableFuture<void>;
        toCompletableFuture(): this;
        whenCompleteAsync(arg0: Internal.BiConsumer_<T, Internal.Throwable>): this;
        acceptEither(arg0: Internal.CompletionStage_<any>, arg1: Internal.Consumer_<any>): Internal.CompletionStage<any>;
        applyToEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        completeAsync(arg0: Internal.Supplier_<T>, arg1: Internal.Executor_): this;
        exceptionallyCompose(arg0: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        get cancelled(): boolean
        get completedExceptionally(): boolean
        get numberOfDependents(): number
        get done(): boolean
    }
    type CompletableFuture_<T> = CompletableFuture<T>;
    abstract class AbstractIngredient extends Internal.Ingredient {
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        getDisplayStacks(): Internal.ItemStackSet;
        getItemIds(): Internal.Set<string>;
        asStack(): InputItem;
        withCount(count: number): InputItem;
        toJson(): Internal.JsonElement;
        or(ingredient: Internal.Ingredient_): Internal.Ingredient;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        getStacks(): Internal.ItemStackSet;
        isWildcard(): boolean;
        canBeUsedForMatching(): boolean;
        getItemTypes(): Internal.Set<Internal.Item>;
        or(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        and(ingredient: Internal.Ingredient_): Internal.Ingredient;
        getFirst(): Internal.ItemStack;
        negate(): Internal.Predicate<Internal.ItemStack>;
        subtract(subtracted: Internal.Ingredient_): Internal.Ingredient;
        asIngredient(): Internal.Ingredient;
        testItem(item: Internal.Item_): boolean;
        and(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        get displayStacks(): Internal.ItemStackSet
        get itemIds(): Internal.Set<string>
        get stacks(): Internal.ItemStackSet
        get wildcard(): boolean
        get itemTypes(): Internal.Set<Internal.Item>
        get first(): Internal.ItemStack
    }
    type AbstractIngredient_ = AbstractIngredient;
    class PotionItem extends Internal.Item {
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
        wrapOperation$bdl000$getDescriptionId$mixinextras$bridge$10(potion: Internal.Potion_, prefix: string, op: Internal.Operation_<any>, stack: Internal.LocalRef_<any>): string;
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
        wrapOperation$bdl000$getDescriptionId(potion: Internal.Potion_, prefix: string, op: Internal.Operation_<any>, stack: Internal.ItemStack_): string;
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
    type PotionItem_ = PotionItem;
    class Cipher {
        wrap(arg0: Internal.Key_): number[];
        update(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;
        doFinal(arg0: number[], arg1: number): number;
        doFinal(): number[];
        doFinal(arg0: number[]): number[];
        doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;
        update(arg0: number[]): number[];
        getParameters(): Internal.AlgorithmParameters;
        doFinal(arg0: number[], arg1: number, arg2: number): number[];
        getAlgorithm(): string;
        init(arg0: number, arg1: Internal.Key_): void;
        init(arg0: number, arg1: Internal.Certificate_, arg2: Internal.SecureRandom_): void;
        getExemptionMechanism(): Internal.ExemptionMechanism;
        updateAAD(arg0: Internal.ByteBuffer_): void;
        static getInstance(arg0: string): Internal.Cipher;
        update(arg0: number[], arg1: number, arg2: number): number[];
        init(arg0: number, arg1: Internal.Key_, arg2: Internal.SecureRandom_): void;
        updateAAD(arg0: number[]): void;
        static getInstance(arg0: string, arg1: Internal.Provider_): Internal.Cipher;
        doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
        getIV(): number[];
        doFinal(arg0: Internal.ByteBuffer_, arg1: Internal.ByteBuffer_): number;
        update(arg0: Internal.ByteBuffer_, arg1: Internal.ByteBuffer_): number;
        init(arg0: number, arg1: Internal.Certificate_): void;
        update(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
        static getInstance(arg0: string, arg1: string): Internal.Cipher;
        getProvider(): Internal.Provider;
        getOutputSize(arg0: number): number;
        static getMaxAllowedParameterSpec(arg0: string): Internal.AlgorithmParameterSpec;
        init(arg0: number, arg1: Internal.Key_, arg2: Internal.AlgorithmParameters_, arg3: Internal.SecureRandom_): void;
        init(arg0: number, arg1: Internal.Key_, arg2: Internal.AlgorithmParameters_): void;
        init(arg0: number, arg1: Internal.Key_, arg2: Internal.AlgorithmParameterSpec_, arg3: Internal.SecureRandom_): void;
        updateAAD(arg0: number[], arg1: number, arg2: number): void;
        static getMaxAllowedKeyLength(arg0: string): number;
        getBlockSize(): number;
        init(arg0: number, arg1: Internal.Key_, arg2: Internal.AlgorithmParameterSpec_): void;
        unwrap(arg0: number[], arg1: string, arg2: number): Internal.Key;
        get parameters(): Internal.AlgorithmParameters
        get algorithm(): string
        get exemptionMechanism(): Internal.ExemptionMechanism
        get IV(): number[]
        get provider(): Internal.Provider
        get blockSize(): number
        static readonly SECRET_KEY: 3;
        static readonly ENCRYPT_MODE: 1;
        static readonly PUBLIC_KEY: 1;
        static readonly PRIVATE_KEY: 2;
        static readonly WRAP_MODE: 3;
        static readonly UNWRAP_MODE: 4;
        static readonly DECRYPT_MODE: 2;
    }
    type Cipher_ = Cipher;
    class ZetaFenceGateBlock extends Internal.FenceGateBlock implements Internal.IZetaBlockExtensions, Internal.IForgeBlock, Internal.IZetaBlock {
        constructor(arg0: string, arg1: Internal.ZetaModule_, arg2: Internal.BlockBehaviour$Properties_)
        constructor(arg0: string, arg1: Internal.ZetaModule_, arg2: Internal.SoundEvent_, arg3: Internal.SoundEvent_, arg4: Internal.BlockBehaviour$Properties_)
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
        get module(): Internal.ZetaModule
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
    type ZetaFenceGateBlock_ = ZetaFenceGateBlock;
    class GrappleConfig$Config$GrapplingHook$Custom$DoubleCustomizationOption {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        min_upgraded: number;
        min: number;
        default_value: number;
        max: number;
        enabled: number;
        max_upgraded: number;
    }
    type GrappleConfig$Config$GrapplingHook$Custom$DoubleCustomizationOption_ = GrappleConfig$Config$GrapplingHook$Custom$DoubleCustomizationOption;
    class FillLayerFeature extends Internal.Feature<Internal.LayerConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.LayerConfiguration>)
    }
    type FillLayerFeature_ = FillLayerFeature;
    class RecipeModHelper$Components extends Internal.Enum<Internal.RecipeModHelper$Components> {
        static valueOf(name: string): Internal.RecipeModHelper$Components;
        static values(): Internal.RecipeModHelper$Components[];
        static readonly QUESTS: Internal.RecipeModHelper$Components;
        static readonly LOOT_CRATES: Internal.RecipeModHelper$Components;
    }
    type RecipeModHelper$Components_ = RecipeModHelper$Components | "loot_crates" | "quests";
    class ClientboundServerDataPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: net.minecraft.network.chat.Component_, arg1: Internal.Optional_<number[]>, arg2: boolean)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getIconBytes(): Internal.Optional<number[]>;
        enforcesSecureChat(): boolean;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getMotd(): net.minecraft.network.chat.Component;
        isSkippable(): boolean;
        get iconBytes(): Internal.Optional<number[]>
        get motd(): net.minecraft.network.chat.Component
        get skippable(): boolean
    }
    type ClientboundServerDataPacket_ = ClientboundServerDataPacket;
    class EyeOfEnder extends Internal.Entity implements Internal.ItemSupplier {
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.EntityType_<Internal.EyeOfEnder>, arg1: Internal.Level_)
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
        setItem(arg0: Internal.ItemStack_): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): net.minecraft.network.chat.Component;
        signalTo(arg0: BlockPos_): void;
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
        getDisplayName(): net.minecraft.network.chat.Component;
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
        serializeNBT(): Internal.Tag;
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
        tell(message: net.minecraft.network.chat.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
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
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
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
    }
    type EyeOfEnder_ = EyeOfEnder;
    class PathNavigationRegion implements Internal.CollisionGetter, Internal.BlockGetter {
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: BlockPos_)
        noCollision(arg0: Internal.Entity_): boolean;
        getMinSection(): number;
        getBlockState(arg0: BlockPos_): Internal.BlockState;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getMaxBuildHeight(): number;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getProfiler(): Internal.ProfilerFiller;
        getSectionYFromSectionIndex(arg0: number): number;
        noCollision(arg0: Internal.AABB_): boolean;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getHeight(): number;
        getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getWorldBorder(): Internal.WorldBorder;
        isOutsideBuildHeight(arg0: number): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getFluidState(arg0: BlockPos_): Internal.FluidState;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getMinBuildHeight(): number;
        getSectionsCount(): number;
        getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        getMaxLightLevel(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get maxBuildHeight(): number
        get profiler(): Internal.ProfilerFiller
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get worldBorder(): Internal.WorldBorder
        get minBuildHeight(): number
        get sectionsCount(): number
        get maxLightLevel(): number
    }
    type PathNavigationRegion_ = PathNavigationRegion;
    class GatherContextEvent extends net.minecraftforge.eventbus.api.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: boolean)
        isFirstLoad(): boolean;
        get firstLoad(): boolean
    }
    type GatherContextEvent_ = GatherContextEvent;
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
    interface MobEntityAccessor {
        abstract biomancy$getAmbientSound(): Internal.SoundEvent;
        abstract biomancy$setJumpControl(arg0: Internal.JumpControl_): void;
        abstract biomancy$setMoveControl(arg0: Internal.MoveControl_): void;
    }
    type MobEntityAccessor_ = MobEntityAccessor;
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
        getName(): net.minecraft.network.chat.Component;
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
        getDisplayName(): net.minecraft.network.chat.Component;
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
        serializeNBT(): Internal.Tag;
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
        tell(message: net.minecraft.network.chat.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
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
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
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
        get parent(): T
    }
    type PartEntity_<T extends Internal.Entity> = PartEntity<T>;
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
    class ArrowQuiverItem extends Internal.RelicItem implements Internal.IRenderableCurio {
        constructor()
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setExperience(arg0: Internal.ItemStack_, arg1: number): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canSync(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setAbilitiesTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getStatData(arg0: string, arg1: string): Internal.StatData;
        getAbilityQuality(arg0: Internal.ItemStack_, arg1: string): number;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canUseAbility(arg0: Internal.ItemStack_, arg1: string): boolean;
        getRelicQuality(arg0: Internal.ItemStack_): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canUnequip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): void;
        getExperienceLeftForLevel(arg0: Internal.ItemStack_, arg1: number): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setLevel(arg0: Internal.ItemStack_, arg1: number): void;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getSlotModifiers(arg0: Internal.ItemStack_): Internal.RelicSlotModifier;
        curioTick(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getLevelFromExperience(arg0: Internal.ItemStack_, arg1: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getLootingBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAbilityPoints(arg0: Internal.ItemStack_, arg1: string): number;
        getItem(): Internal.Item;
        addAbilityPoints(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        showAttributesTooltip(arg0: string, arg1: Internal.ItemStack_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setAbilityTicking(arg0: Internal.ItemStack_, arg1: string, arg2: boolean): void;
        addExperience(arg0: Internal.ItemStack_, arg1: number): boolean;
        onEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        canUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        testAbilityCastPredicates(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        writeSyncData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        readSyncData(arg0: Internal.CompoundTag_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canSync(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): boolean;
        setAbilityPoints(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        setPoints(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFortuneBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        getExperienceBetweenLevels(arg0: Internal.ItemStack_, arg1: number, arg2: number): number;
        mayUpgrade(arg0: Internal.ItemStack_, arg1: string): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        mayPlayerReroll(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onEquip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getRelicData(): Internal.RelicData;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isAbilityTicking(arg0: Internal.ItemStack_, arg1: string): boolean;
        static takeArrow(arg0: Internal.ItemStack_): void;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        static getArrows(arg0: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        getExchanges(arg0: Internal.ItemStack_): number;
        getSlotsAmount(arg0: Internal.ItemStack_): number;
        setDigSpeed(speed: number): void;
        constructLayerDefinition(): Internal.LayerDefinition;
        isAbilityMaxLevel(arg0: Internal.ItemStack_, arg1: string): boolean;
        setAttackSpeed(attackSpeed: number): void;
        isEnderMask(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getLevel(arg0: Internal.ItemStack_): number;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getStatQuality(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getEquipSound(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.ICurio$SoundInfo;
        canPlayerUseActiveAbility(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bodyParts(): Internal.List<string>;
        setRelicData(arg0: Internal.RelicData_): void;
        getAbilityCastPredicates(arg0: string): Internal.CastPredicate;
        isMaxLevel(arg0: Internal.ItemStack_): boolean;
        addExchanges(arg0: Internal.ItemStack_, arg1: number): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        curioBreak(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        addAbilityCooldown(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        addPoints(arg0: Internal.ItemStack_, arg1: number): void;
        getStatByQuality(arg0: string, arg1: string, arg2: number): number;
        mayPlayerUpgrade(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        getRerollRequiredExperience(arg0: string): number;
        arch$registryName(): ResourceLocation;
        getAbilitiesTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        getDropRule(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: number, arg3: boolean, arg4: Internal.ItemStack_): Internal.ICurio$DropRule;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        randomizeStat(arg0: Internal.ItemStack_, arg1: string, arg2: string): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAbilityCooldown(arg0: Internal.ItemStack_, arg1: string): number;
        getMaxQuality(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onUnequip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        insertStack(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        setAbilityTag(arg0: Internal.ItemStack_, arg1: string, arg2: Internal.CompoundTag_): void;
        getExperience(arg0: Internal.ItemStack_): number;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDropRule(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): Internal.ICurio$DropRule;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        playRightClickEquipSound(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): void;
        setAbilityTempTag(arg0: Internal.ItemStack_, arg1: string, arg2: Internal.CompoundTag_): void;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        hasCurioCapability(arg0: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getModel(arg0: Internal.ItemStack_): Internal.CurioModel;
        getLevelingTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        isExchangeAvailable(arg0: Internal.Player_, arg1: Internal.ItemStack_): boolean;
        getAttributeModifiers(arg0: Internal.ItemStack_): Internal.RelicAttributeModifier;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getAbilityCooldownCap(arg0: Internal.ItemStack_, arg1: string): number;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        testAbilityCastPredicate(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string, arg3: string): boolean;
        mayPlayerReset(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        mayReroll(arg0: Internal.ItemStack_, arg1: string): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        getAbilityCastPredicate(arg0: string, arg1: string): Internal.PredicateEntry;
        getAbilityData(arg0: string): Internal.AbilityData;
        setAbilityCooldownCap(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getAbilityTempTag(arg0: Internal.ItemStack_, arg1: string): Internal.CompoundTag;
        getExchangeCost(arg0: Internal.ItemStack_): number;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLootData(): Internal.LootData;
        getPoints(arg0: Internal.ItemStack_): number;
        appendConfig(arg0: Internal.ConfigContext_): void;
        isItemResearched(arg0: Internal.Player_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioBreak(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getResetRequiredExperience(arg0: Internal.ItemStack_, arg1: string): number;
        setArmorToughness(armorToughness: number): void;
        setItemResearched(arg0: Internal.Player_, arg1: boolean): void;
        headParts(): Internal.List<string>;
        setAbilityCooldown(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getUpgradeRequiredExperience(arg0: Internal.ItemStack_, arg1: string): number;
        dropAllocableExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAbilityInitialValues(arg0: Internal.ItemStack_, arg1: string): Internal.Map<string, number>;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getAbilityInitialValue(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioAnimate(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getConfig(): Internal.OctoConfig;
        readSyncData(arg0: Internal.SlotContext_, arg1: Internal.CompoundTag_, arg2: Internal.ItemStack_): void;
        writeSyncData(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.CompoundTag;
        getLootingLevel(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.ItemStack_): number;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        dropExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: number): void;
        dropAllocableExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number, arg4: number): void;
        getTexture(arg0: Internal.ItemStack_): ResourceLocation;
        getFortuneLevel(arg0: Internal.SlotContext_, arg1: Internal.LootContext_, arg2: Internal.ItemStack_): number;
        getAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        dropExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number): void;
        render<T extends Internal.LivingEntity, M extends Internal.EntityModel<T>>(arg0: Internal.ItemStack_, arg1: Internal.SlotContext_, arg2: Internal.PoseStack_, arg3: Internal.RenderLayerParent_<T, M>, arg4: Internal.MultiBufferSource_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        addExperience(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: number): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        onUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        addAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): void;
        addLevel(arg0: Internal.ItemStack_, arg1: number): void;
        setLevelingTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getDamage(arg0: Internal.ItemStack_): number;
        getSlotsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        randomizeStats(arg0: Internal.ItemStack_, arg1: string): void;
        getLevelingData(): Internal.LevelingData;
        setExchanges(arg0: Internal.ItemStack_, arg1: number): void;
        getMod(): string;
        makesPiglinsNeutral(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getTotalExperienceForLevel(arg0: Internal.ItemStack_, arg1: number): number;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static takeStack(arg0: Internal.ItemStack_): Internal.Optional<Internal.ItemStack>;
        mayReset(arg0: Internal.ItemStack_, arg1: string): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributeModifiers(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getAbilityTag(arg0: Internal.ItemStack_, arg1: string): Internal.CompoundTag;
        isAbilityOnCooldown(arg0: Internal.ItemStack_, arg1: string): boolean;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get item(): Internal.Item
        get relicData(): Internal.RelicData
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set relicData(arg0: Internal.RelicData_)
        set armorKnockbackResistance(knockbackResistance: number)
        get maxQuality(): number
        get creativeTab(): string
        get lootData(): Internal.LootData
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get config(): Internal.OctoConfig
        get levelingData(): Internal.LevelingData
        get mod(): string
        set armorProtection(armorProtection: number)
    }
    type ArrowQuiverItem_ = ArrowQuiverItem;
    class ChandelierBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: boolean)
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
    type ChandelierBlock_ = ChandelierBlock;
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
    class AnvilBlock extends Internal.FallingBlock {
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
        static damage(arg0: Internal.BlockState_): Internal.BlockState;
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
        static readonly FACING: Internal.DirectionProperty;
    }
    type AnvilBlock_ = AnvilBlock;
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
    class MemoryCardMessages extends Internal.Enum<Internal.MemoryCardMessages> {
        static values(): Internal.MemoryCardMessages[];
        static valueOf(arg0: string): Internal.MemoryCardMessages;
        static readonly SETTINGS_LOADED: Internal.MemoryCardMessages;
        static readonly INVALID_MACHINE: Internal.MemoryCardMessages;
        static readonly SETTINGS_RESET: Internal.MemoryCardMessages;
        static readonly SETTINGS_SAVED: Internal.MemoryCardMessages;
        static readonly SETTINGS_CLEARED: Internal.MemoryCardMessages;
    }
    type MemoryCardMessages_ = "settings_saved" | "settings_loaded" | "invalid_machine" | MemoryCardMessages | "settings_reset" | "settings_cleared";
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
    class PlayState extends Internal.Enum<Internal.PlayState> {
        static valueOf(arg0: string): Internal.PlayState;
        static values(): Internal.PlayState[];
        static readonly STOP: Internal.PlayState;
        static readonly CONTINUE: Internal.PlayState;
    }
    type PlayState_ = "stop" | "continue" | PlayState;
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
    interface INetworked {
    }
    type INetworked_ = INetworked;
    class ThermalRecipeJS extends Internal.RecipeJS {
        constructor()
        getMod(): string;
        get mod(): string
    }
    type ThermalRecipeJS_ = ThermalRecipeJS;
    class MultiBufferSource$BufferSource implements Internal.AccessorMultiBufferSource, Internal.MultiBufferSource {
        endBatch(arg0: Internal.RenderType_): void;
        endBatch(): void;
        endLastBatch(): void;
        getFallbackBuffer(): Internal.BufferBuilder;
        static immediate(arg0: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        getBuffer(arg0: Internal.RenderType_): Internal.VertexConsumer;
        getFixedBuffers(): Internal.Map<any, any>;
        static immediateWithBuffers(arg0: Internal.Map_<Internal.RenderType, Internal.BufferBuilder>, arg1: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        get fallbackBuffer(): Internal.BufferBuilder
        get fixedBuffers(): Internal.Map<any, any>
    }
    type MultiBufferSource$BufferSource_ = MultiBufferSource$BufferSource;
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
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
    }
    type IExtendedItem_ = IExtendedItem;
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
    class HandCrankBlockEntity extends Internal.GeneratingKineticBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        deserializeNBT(arg0: Internal.Tag_): void;
        getIndependentAngle(arg0: number): number;
        turn(arg0: boolean): void;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
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
    interface WithAttachedData <T> extends Internal.MessageSenderKJS {
        getDisplayName(): net.minecraft.network.chat.Component;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getName(): net.minecraft.network.chat.Component;
        runCommandSilent(command: string): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        abstract getData(): Internal.AttachedData<T>;
        runCommand(command: string): number;
        get displayName(): net.minecraft.network.chat.Component
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get name(): net.minecraft.network.chat.Component
        get data(): Internal.AttachedData<T>
        (): Internal.AttachedData_<T>;
    }
    type WithAttachedData_<T> = WithAttachedData<T>;
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
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
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
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
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
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
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
    type TallGrassBlock_ = TallGrassBlock;
    class FlintPillarBlock extends Internal.DirectionalFacingBlock {
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
    type FlintPillarBlock_ = FlintPillarBlock;
    interface StackingStatusEffect {
        computeAmplifierFrom(arg0: Internal.StackingStatusEffect_, arg1: number, arg2: number): number;
        abstract getMaxEffectStack(): number;
        get maxEffectStack(): number
        (): number;
    }
    type StackingStatusEffect_ = StackingStatusEffect;
    class AEColor extends Internal.Enum<Internal.AEColor> {
        static values(): Internal.AEColor[];
        static fromDye(arg0: Internal.DyeColor_): Internal.AEColor;
        getVariantByTintIndex(arg0: number): number;
        static valueOf(arg0: string): Internal.AEColor;
        getEnglishName(): string;
        get englishName(): string
        readonly dye: Internal.DyeColor;
        static readonly MAGENTA: Internal.AEColor;
        static readonly LIGHT_BLUE: Internal.AEColor;
        static readonly BLACK: Internal.AEColor;
        static readonly RED: Internal.AEColor;
        static readonly PINK: Internal.AEColor;
        static readonly TINTINDEX_MEDIUM_BRIGHT: 4;
        static readonly LIME: Internal.AEColor;
        static readonly PURPLE: Internal.AEColor;
        static readonly BLUE: Internal.AEColor;
        static readonly TRANSPARENT: Internal.AEColor;
        readonly mediumVariant: number;
        static readonly YELLOW: Internal.AEColor;
        readonly registryPrefix: string;
        readonly contrastTextColor: number;
        static readonly WHITE: Internal.AEColor;
        static readonly TINTINDEX_MEDIUM: 2;
        static readonly GRAY: Internal.AEColor;
        static readonly VALID_COLORS: [Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor, Internal.AEColor];
        static readonly CYAN: Internal.AEColor;
        static readonly TINTINDEX_BRIGHT: 3;
        readonly blackVariant: number;
        static readonly BROWN: Internal.AEColor;
        static readonly LIGHT_GRAY: Internal.AEColor;
        readonly translationKey: string;
        readonly englishName: string;
        static readonly TINTINDEX_DARK: 1;
        static readonly GREEN: Internal.AEColor;
        readonly whiteVariant: number;
        static readonly ORANGE: Internal.AEColor;
    }
    type AEColor_ = "light_blue" | "magenta" | "lime" | "transparent" | "brown" | "red" | "purple" | AEColor | "pink" | "black" | "green" | "cyan" | "light_gray" | "yellow" | "white" | "gray" | "blue" | "orange";
    class RelicAttributeModifier$RelicAttributeModifierBuilder {
        attribute(arg0: Internal.RelicAttributeModifier$Modifier_): this;
        attributes(arg0: Internal.Collection_<Internal.RelicAttributeModifier$Modifier>): this;
        build(): Internal.RelicAttributeModifier;
        clearAttributes(): this;
    }
    type RelicAttributeModifier$RelicAttributeModifierBuilder_ = RelicAttributeModifier$RelicAttributeModifierBuilder;
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
    class LevelRenderer implements Internal.ResourceManagerReloadListener, Internal.AutoCloseable, Internal.LevelRendererAccessor {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.EntityRenderDispatcher_, arg2: Internal.BlockEntityRenderDispatcher_, arg3: Internal.RenderBuffers_)
        needsUpdate(): void;
        getItemEntityTarget(): Internal.RenderTarget;
        getFrustum(): Internal.Frustum;
        entityTarget(): Internal.RenderTarget;
        updateGlobalBlockEntities(arg0: Internal.Collection_<Internal.BlockEntity>, arg1: Internal.Collection_<Internal.BlockEntity>): void;
        getCloudsTarget(): Internal.RenderTarget;
        static renderLineBox(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number): void;
        killFrustum(): void;
        handler$bpm000$playStreamingMusic(arg0: Internal.SoundEvent_, arg1: BlockPos_, arg2: Internal.RecordItem_, arg3: Internal.CallbackInfo_): void;
        getTranslucentTarget(): Internal.RenderTarget;
        prepareCullFrustum(arg0: Internal.PoseStack_, arg1: Vec3d_, arg2: Matrix4f_): void;
        static renderVoxelShape(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: Internal.VoxelShape_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean): void;
        addRecentlyCompiledChunk(arg0: Internal.ChunkRenderDispatcher$RenderChunk_): void;
        countRenderedChunks(): number;
        hasRenderedAllChunks(): boolean;
        tickRain(arg0: Internal.Camera_): void;
        setLevel(arg0: Internal.ClientLevel_): void;
        setBlocksDirty(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static getLightColor(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BlockState_, arg2: BlockPos_): number;
        addParticle(arg0: Internal.ParticleOptions_, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        renderClouds(arg0: Internal.PoseStack_, arg1: Matrix4f_, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTotalChunks(): number;
        tick(): void;
        static renderLineBox(arg0: Internal.VertexConsumer_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        doEntityOutline(): void;
        handler$zpo000$onRender(arg0: Internal.PoseStack_, arg1: number, arg2: number, arg3: boolean, arg4: Internal.Camera_, arg5: Internal.GameRenderer_, arg6: Internal.LightTexture_, arg7: Matrix4f_, arg8: Internal.CallbackInfo_): void;
        getEntityStatistics(): string;
        getTicks(): number;
        resize(arg0: number, arg1: number): void;
        addParticleInternal(arg0: Internal.ParticleOptions_, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): Internal.Particle;
        /**
         * @deprecated
        */
        playStreamingMusic(arg0: Internal.SoundEvent_, arg1: BlockPos_): void;
        getChunkStatistics(): string;
        initOutline(): void;
        static addChainedFilledBoxVertices(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        static renderShape(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: Internal.VoxelShape_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        setSectionDirty(arg0: number, arg1: number, arg2: number): void;
        isChunkCompiled(arg0: BlockPos_): boolean;
        static addChainedFilledBoxVertices(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        destroyBlockProgress(arg0: number, arg1: BlockPos_, arg2: number): void;
        static renderLineBox(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        addParticle(arg0: Internal.ParticleOptions_, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        captureFrustum(): void;
        renderSky(arg0: Internal.PoseStack_, arg1: Matrix4f_, arg2: number, arg3: Internal.Camera_, arg4: boolean, arg5: Internal.Runnable_): void;
        getName(): string;
        addParticleInternal(arg0: Internal.ParticleOptions_, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): Internal.Particle;
        renderHitOutline(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: Internal.Entity_, arg3: number, arg4: number, arg5: number, arg6: BlockPos_, arg7: Internal.BlockState_): void;
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
        get itemEntityTarget(): Internal.RenderTarget
        get frustum(): Internal.Frustum
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
        readonly playingRecords: Internal.Map<BlockPos, Internal.SoundInstance>;
        static readonly DIRECTIONS: Internal.Direction[];
        readonly frustumPos: Internal.Vector3d;
        capturedFrustum: Internal.Frustum;
    }
    type LevelRenderer_ = LevelRenderer;
    class BlockEvent$NeighborNotifyEvent extends Internal.BlockEvent {
        constructor()
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.EnumSet_<Internal.Direction>, arg4: boolean)
        getForceRedstoneUpdate(): boolean;
        getNotifiedSides(): Internal.EnumSet<Internal.Direction>;
        get forceRedstoneUpdate(): boolean
        get notifiedSides(): Internal.EnumSet<Internal.Direction>
    }
    type BlockEvent$NeighborNotifyEvent_ = BlockEvent$NeighborNotifyEvent;
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
    class ZombieHorse extends Internal.AbstractHorse implements Internal.IConvertableHorse {
        constructor(arg0: Internal.EntityType_<Internal.ZombieHorse>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        handler$zmn000$interact(pPlayer: Internal.Player_, pHand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
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
        getTotalMovementSpeed(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getSaddleSoundEvent(): Internal.SoundEvent;
        getDisplayName(): net.minecraft.network.chat.Component;
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
        getName(): net.minecraft.network.chat.Component;
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
        get owner(): Internal.LivingEntity
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get saddleSoundEvent(): Internal.SoundEvent
        get displayName(): net.minecraft.network.chat.Component
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
        getName(): net.minecraft.network.chat.Component;
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
        getDisplayName(): net.minecraft.network.chat.Component;
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
        serializeNBT(): Internal.Tag;
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
        tell(message: net.minecraft.network.chat.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
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
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get server(): Internal.MinecraftServer
        get displayName(): net.minecraft.network.chat.Component
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
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
        static readonly ATTACK_DURATION: 20;
        static readonly LIFE_OFFSET: 2;
        static readonly ATTACK_TRIGGER_TICKS: 14;
    }
    type EvokerFangs_ = EvokerFangs;
    class EntryDisplayState extends Internal.Enum<Internal.EntryDisplayState> {
        static valueOf(arg0: string): Internal.EntryDisplayState;
        static values(): Internal.EntryDisplayState[];
        static fromOrdinal(arg0: number): Internal.EntryDisplayState;
        static readonly UNREAD: Internal.EntryDisplayState;
        static readonly PENDING: Internal.EntryDisplayState;
        readonly hasAnimation: boolean;
        static readonly NEUTRAL: Internal.EntryDisplayState;
        readonly hasIcon: boolean;
        readonly showInInventory: boolean;
        readonly u: number;
        static readonly COMPLETED: Internal.EntryDisplayState;
        static readonly DEFAULT_TYPE: Internal.EntryDisplayState;
    }
    type EntryDisplayState_ = "neutral" | "completed" | "unread" | "pending" | EntryDisplayState;
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
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
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
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
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
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
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
    class RequestedItem {
        constructor(arg0: Internal.TagKey_<Internal.Item>, arg1: number)
        constructor(arg0: Internal.Either_<Internal.TagKey<Internal.Item>, Internal.Item>, arg1: number, arg2: Internal.CompoundTag_, arg3: Internal.CompoundTagCompareBehavior_)
        constructor(arg0: Internal.ItemStack_)
        constructor(arg0: Internal.Either_<Internal.TagKey<Internal.Item>, Internal.Item>, arg1: number, arg2: Internal.CompoundTag_)
        constructor(arg0: Internal.Item_, arg1: number)
        matchesWithCount(arg0: Internal.ItemStack_): boolean;
        getCount(): number;
        getTagOrItem(): Internal.Either<Internal.TagKey<Internal.Item>, Internal.Item>;
        tagMatches(arg0: Internal.ItemStack_): boolean;
        matches(arg0: Internal.ItemStack_): boolean;
        getTag(): Internal.CompoundTag;
        getStacks(): Internal.List<Internal.ItemStack>;
        isEmpty(): boolean;
        getTagCompareBehavior(): Internal.CompoundTagCompareBehavior;
        get count(): number
        get tagOrItem(): Internal.Either<Internal.TagKey<Internal.Item>, Internal.Item>
        get tag(): Internal.CompoundTag
        get stacks(): Internal.List<Internal.ItemStack>
        get empty(): boolean
        get tagCompareBehavior(): Internal.CompoundTagCompareBehavior
        static readonly CODEC: Internal.Codec<Internal.RequestedItem>;
        static readonly EMPTY: Internal.RequestedItem;
    }
    type RequestedItem_ = RequestedItem;
    interface Hash$Strategy <K> {
        abstract equals(arg0: K, arg1: K): boolean;
        abstract hashCode(arg0: K): number;
    }
    type Hash$Strategy_<K> = Hash$Strategy<K>;
    class XpCrystalItem extends Internal.XpContainerItem implements Internal.IMultiModeItem {
        constructor(arg0: Internal.Item$Properties_, arg1: number)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getOrCreateTankTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
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
        getSpaceXp(arg0: Internal.ItemStack_): number;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        onModeChange(arg0: Internal.Player_, arg1: Internal.ItemStack_): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isActive(arg0: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getScaledFluidStored(arg0: Internal.ItemStack_, arg1: number): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        hasActiveTag(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        modifyXp(arg0: Internal.ItemStack_, arg1: number): number;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getMaxStored(arg0: Internal.ItemStack_, arg1: number): number;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        setActive(arg0: Internal.ItemStack_, arg1: boolean): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        setMode(arg0: Internal.ItemStack_, arg1: number): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static storeXpOrb(arg0: Internal.Player_, arg1: Internal.ExperienceOrb_, arg2: Internal.ItemStack_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        isCreative(arg0: Internal.ItemStack_, arg1: Internal.ContainerType_): boolean;
        addModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        setActive(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getOrCreateModeTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getMode(arg0: Internal.ItemStack_): number;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        addIncrementModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
        arch$registryName(): ResourceLocation;
        decrMode(arg0: Internal.ItemStack_): boolean;
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
        incrMode(arg0: Internal.ItemStack_): boolean;
        setArmorToughness(armorToughness: number): void;
        getSpace(arg0: Internal.ItemStack_): number;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        getNumModes(arg0: Internal.ItemStack_): number;
        getFluidAmount(arg0: Internal.ItemStack_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        addEnergyTooltip(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_, arg4: number, arg5: number, arg6: boolean): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getStoredXp(arg0: Internal.ItemStack_): number;
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
    type XpCrystalItem_ = XpCrystalItem;
    class EnumArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.EnumArgument<T>> {
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.EnumArgument<T>;
        type(): Internal.ArgumentTypeInfo<Internal.EnumArgument<T>, any>;
    }
    type EnumArgument$Info$Template_ = EnumArgument$Info$Template;
    class RainbowLampBlock extends Internal.ZetaGlassBlock {
        constructor(arg0: string, arg1: number, arg2: Internal.ZetaModule_, arg3: Internal.MapColor_)
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
        readonly colorComponents: number[];
        static readonly LIT: Internal.BooleanProperty;
    }
    type RainbowLampBlock_ = RainbowLampBlock;
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
    class HorseFluteItem extends Internal.RelicItem {
        constructor()
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setExperience(arg0: Internal.ItemStack_, arg1: number): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canSync(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setAbilitiesTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        catchHorse(arg0: Internal.AbstractHorse_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): void;
        getStatData(arg0: string, arg1: string): Internal.StatData;
        getAbilityQuality(arg0: Internal.ItemStack_, arg1: string): number;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canUseAbility(arg0: Internal.ItemStack_, arg1: string): boolean;
        getRelicQuality(arg0: Internal.ItemStack_): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canUnequip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): void;
        getExperienceLeftForLevel(arg0: Internal.ItemStack_, arg1: number): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setLevel(arg0: Internal.ItemStack_, arg1: number): void;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getSlotModifiers(arg0: Internal.ItemStack_): Internal.RelicSlotModifier;
        curioTick(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getLevelFromExperience(arg0: Internal.ItemStack_, arg1: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getLootingBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        tickActiveAbilitySelection(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: string): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAbilityPoints(arg0: Internal.ItemStack_, arg1: string): number;
        getItem(): Internal.Item;
        addAbilityPoints(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        showAttributesTooltip(arg0: string, arg1: Internal.ItemStack_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setAbilityTicking(arg0: Internal.ItemStack_, arg1: string, arg2: boolean): void;
        addExperience(arg0: Internal.ItemStack_, arg1: number): boolean;
        onEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        canUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        testAbilityCastPredicates(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        writeSyncData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        readSyncData(arg0: Internal.CompoundTag_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canSync(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): boolean;
        setAbilityPoints(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        setPoints(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFortuneBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        getExperienceBetweenLevels(arg0: Internal.ItemStack_, arg1: number, arg2: number): number;
        mayUpgrade(arg0: Internal.ItemStack_, arg1: string): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        mayPlayerReroll(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onEquip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getRelicData(): Internal.RelicData;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isAbilityTicking(arg0: Internal.ItemStack_, arg1: string): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioTick(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getExchanges(arg0: Internal.ItemStack_): number;
        setDigSpeed(speed: number): void;
        isAbilityMaxLevel(arg0: Internal.ItemStack_, arg1: string): boolean;
        setAttackSpeed(attackSpeed: number): void;
        isEnderMask(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getLevel(arg0: Internal.ItemStack_): number;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getStatQuality(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getEquipSound(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.ICurio$SoundInfo;
        canPlayerUseActiveAbility(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        setRelicData(arg0: Internal.RelicData_): void;
        getAbilityCastPredicates(arg0: string): Internal.CastPredicate;
        isMaxLevel(arg0: Internal.ItemStack_): boolean;
        addExchanges(arg0: Internal.ItemStack_, arg1: number): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        curioBreak(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        addAbilityCooldown(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        addPoints(arg0: Internal.ItemStack_, arg1: number): void;
        getStatByQuality(arg0: string, arg1: string, arg2: number): number;
        mayPlayerUpgrade(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        getRerollRequiredExperience(arg0: string): number;
        arch$registryName(): ResourceLocation;
        getAbilitiesTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        getDropRule(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: number, arg3: boolean, arg4: Internal.ItemStack_): Internal.ICurio$DropRule;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        randomizeStat(arg0: Internal.ItemStack_, arg1: string, arg2: string): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAbilityCooldown(arg0: Internal.ItemStack_, arg1: string): number;
        getMaxQuality(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onUnequip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        setAbilityTag(arg0: Internal.ItemStack_, arg1: string, arg2: Internal.CompoundTag_): void;
        getExperience(arg0: Internal.ItemStack_): number;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDropRule(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): Internal.ICurio$DropRule;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        playRightClickEquipSound(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): void;
        setAbilityTempTag(arg0: Internal.ItemStack_, arg1: string, arg2: Internal.CompoundTag_): void;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        hasCurioCapability(arg0: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getLevelingTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        isExchangeAvailable(arg0: Internal.Player_, arg1: Internal.ItemStack_): boolean;
        getAttributeModifiers(arg0: Internal.ItemStack_): Internal.RelicAttributeModifier;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getAbilityCooldownCap(arg0: Internal.ItemStack_, arg1: string): number;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        testAbilityCastPredicate(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string, arg3: string): boolean;
        mayPlayerReset(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        mayReroll(arg0: Internal.ItemStack_, arg1: string): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        getAbilityCastPredicate(arg0: string, arg1: string): Internal.PredicateEntry;
        getAbilityData(arg0: string): Internal.AbilityData;
        setAbilityCooldownCap(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getAbilityTempTag(arg0: Internal.ItemStack_, arg1: string): Internal.CompoundTag;
        getExchangeCost(arg0: Internal.ItemStack_): number;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLootData(): Internal.LootData;
        getPoints(arg0: Internal.ItemStack_): number;
        appendConfig(arg0: Internal.ConfigContext_): void;
        isItemResearched(arg0: Internal.Player_): boolean;
        setAttackDamage(attackDamage: number): void;
        castActiveAbility(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: string, arg3: Internal.CastType_, arg4: Internal.CastStage_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioBreak(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getResetRequiredExperience(arg0: Internal.ItemStack_, arg1: string): number;
        setArmorToughness(armorToughness: number): void;
        setItemResearched(arg0: Internal.Player_, arg1: boolean): void;
        setAbilityCooldown(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getUpgradeRequiredExperience(arg0: Internal.ItemStack_, arg1: string): number;
        dropAllocableExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAbilityInitialValues(arg0: Internal.ItemStack_, arg1: string): Internal.Map<string, number>;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getAbilityInitialValue(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioAnimate(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getConfig(): Internal.OctoConfig;
        readSyncData(arg0: Internal.SlotContext_, arg1: Internal.CompoundTag_, arg2: Internal.ItemStack_): void;
        writeSyncData(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.CompoundTag;
        getLootingLevel(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.ItemStack_): number;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        dropExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: number): void;
        dropAllocableExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number, arg4: number): void;
        getFortuneLevel(arg0: Internal.SlotContext_, arg1: Internal.LootContext_, arg2: Internal.ItemStack_): number;
        getAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        dropExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: Internal.ItemStack_, arg3: number): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        addExperience(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: number): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        onUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        addAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): void;
        addLevel(arg0: Internal.ItemStack_, arg1: number): void;
        setLevelingTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getDamage(arg0: Internal.ItemStack_): number;
        getSlotsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        randomizeStats(arg0: Internal.ItemStack_, arg1: string): void;
        getLevelingData(): Internal.LevelingData;
        releaseHorse(arg0: Internal.ItemStack_, arg1: Internal.Entity_): void;
        setExchanges(arg0: Internal.ItemStack_, arg1: number): void;
        getMod(): string;
        makesPiglinsNeutral(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getTotalExperienceForLevel(arg0: Internal.ItemStack_, arg1: number): number;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        mayReset(arg0: Internal.ItemStack_, arg1: string): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributeModifiers(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getAbilityTag(arg0: Internal.ItemStack_, arg1: string): Internal.CompoundTag;
        isAbilityOnCooldown(arg0: Internal.ItemStack_, arg1: string): boolean;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get item(): Internal.Item
        get relicData(): Internal.RelicData
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set relicData(arg0: Internal.RelicData_)
        set armorKnockbackResistance(knockbackResistance: number)
        get maxQuality(): number
        get creativeTab(): string
        get lootData(): Internal.LootData
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get config(): Internal.OctoConfig
        get levelingData(): Internal.LevelingData
        get mod(): string
        set armorProtection(armorProtection: number)
        static readonly TAG_ENTITY: "entity";
    }
    type HorseFluteItem_ = HorseFluteItem;
    abstract class AbstractMonoBogeyBlock <T extends Internal.MonoBogeyBlockEntity> extends Internal.AbstractBogeyBlock<T> implements Internal.ProperWaterloggedBlock, Internal.ISpecialBlockItemRequirement, Internal.IBE<T> {
        constructor(pProperties: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): T;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<T>): void;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<T>;
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
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        getConnectorAnchorOffset(): Vec3d;
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<T, InteractionResult>): InteractionResult;
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
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get connectorAnchorOffset(): Vec3d
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly UPSIDE_DOWN: Internal.BooleanProperty;
    }
    type AbstractMonoBogeyBlock_<T extends Internal.MonoBogeyBlockEntity> = AbstractMonoBogeyBlock<T>;
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
    class BasicColoredParticle$Constructor$ConstructorBuilder {
        blended(source: number, dest: number): this;
        color(r: number, g: number, b: number): this;
        roll(roll: number): this;
        color(r: number, g: number, b: number): this;
        color(color: number): this;
        build(): Internal.BasicColoredParticle$Constructor;
        color(r: number, g: number, b: number, a: number): this;
        physical(physical: boolean): this;
        lifetime(lifetime: number): this;
        blurred(blurred: boolean): this;
        blended(blended: boolean): this;
        scaleModifier(scaleModifier: number): this;
        depthTest(depthTest: boolean): this;
        diameter(diameter: number): this;
        color(r: number, g: number, b: number, a: number): this;
    }
    type BasicColoredParticle$Constructor$ConstructorBuilder_ = BasicColoredParticle$Constructor$ConstructorBuilder;
    class LootrBarrelBlock extends Internal.BarrelBlock {
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
        static readonly OPENED: Internal.ModelProperty<boolean>;
    }
    type LootrBarrelBlock_ = LootrBarrelBlock;
    class ScriptManager implements Internal.FileWatcher {
        constructor(configuration: org.apache.logging.log4j.core.config.Configuration_, watchManager: Internal.WatchManager_, scriptLanguages: string)
        getScript(name: string): Internal.AbstractScript;
        fileModified(file: Internal.File_): void;
        getAllowedLanguages(): Internal.Set<string>;
        createBindings(script: Internal.AbstractScript_): Internal.Bindings;
        execute(name: string, bindings: Internal.Bindings_): any;
        addScript(script: Internal.AbstractScript_): boolean;
        get allowedLanguages(): Internal.Set<string>
    }
    type ScriptManager_ = ScriptManager;
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
    interface IModFileInfo {
        abstract getMods(): Internal.List<Internal.IModInfo>;
        abstract getConfig(): Internal.IConfigurable;
        abstract getLicense(): string;
        abstract moduleName(): string;
        abstract showAsResourcePack(): boolean;
        abstract usesServices(): Internal.List<string>;
        abstract versionString(): string;
        abstract getFile(): Internal.IModFile;
        abstract requiredLanguageLoaders(): Internal.List<Internal.IModFileInfo$LanguageSpec>;
        abstract getFileProperties(): Internal.Map<string, any>;
        get mods(): Internal.List<Internal.IModInfo>
        get config(): Internal.IConfigurable
        get license(): string
        get file(): Internal.IModFile
        get fileProperties(): Internal.Map<string, any>
    }
    type IModFileInfo_ = IModFileInfo;
    class TankUpgradeItem extends Internal.UpgradeItemBase<Internal.TankUpgradeWrapper> {
        constructor(arg0: Internal.TankUpgradeConfig_, arg1: any_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getTankUpgradeConfig(): Internal.TankUpgradeConfig;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getType(): Internal.UpgradeType<Internal.TankUpgradeWrapper>;
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
        getCleanedUpgradeStack(arg0: Internal.ItemStack_): Internal.ItemStack;
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
        getBaseCapacity(arg0: Internal.IStorageWrapper_): number;
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
        getAdjustedStackMultiplier(arg0: Internal.IStorageWrapper_): number;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setArmorToughness(armorToughness: number): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getTankCapacity(arg0: Internal.IStorageWrapper_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getUpgradeGroup(): Internal.UpgradeGroup;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        canRemoveUpgradeFrom(arg0: Internal.IStorageWrapper_, arg1: boolean): Internal.UpgradeSlotChangeResult;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        canSwapUpgradeFor(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: boolean): Internal.UpgradeSlotChangeResult;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        get tankUpgradeConfig(): Internal.TankUpgradeConfig
        get type(): Internal.UpgradeType<Internal.TankUpgradeWrapper>
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get upgradeGroup(): Internal.UpgradeGroup
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        static readonly TYPE: Internal.UpgradeType<Internal.TankUpgradeWrapper>;
    }
    type TankUpgradeItem_ = TankUpgradeItem;
    class FilterLogicBase {
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.ItemStack>, arg2: string)
        setMatchDurability(arg0: boolean): void;
        setPrimaryMatch(arg0: Internal.PrimaryMatch_): void;
        shouldMatchDurability(): boolean;
        isAllowList(): boolean;
        addTag(arg0: Internal.TagKey_<Internal.Item>): void;
        setMatchNbt(arg0: boolean): void;
        setAllowByDefault(arg0: boolean): void;
        setAllowList(arg0: boolean): void;
        setMatchAnyTag(arg0: boolean): void;
        shouldMatchNbt(): boolean;
        getTagKeys(): Internal.Set<Internal.TagKey<Internal.Item>>;
        removeTagName(arg0: Internal.TagKey_<Internal.Item>): void;
        shouldMatchAnyTag(): boolean;
        getParentTagKey(): string;
        getPrimaryMatch(): Internal.PrimaryMatch;
        stackMatchesFilter(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        set matchDurability(arg0: boolean)
        set primaryMatch(arg0: Internal.PrimaryMatch_)
        get allowList(): boolean
        set matchNbt(arg0: boolean)
        set allowByDefault(arg0: boolean)
        set allowList(arg0: boolean)
        set matchAnyTag(arg0: boolean)
        get tagKeys(): Internal.Set<Internal.TagKey<Internal.Item>>
        get parentTagKey(): string
        get primaryMatch(): Internal.PrimaryMatch
    }
    type FilterLogicBase_ = FilterLogicBase;
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
    class PlayerInteractEvent$LeftClickEmpty extends Internal.PlayerInteractEvent {
        constructor()
        constructor(arg0: Internal.Player_)
        getEntity(): Internal.LivingEntity;
        get entity(): Internal.LivingEntity
    }
    type PlayerInteractEvent$LeftClickEmpty_ = PlayerInteractEvent$LeftClickEmpty;
    interface MouseMotionListener extends Internal.EventListener {
        abstract mouseMoved(arg0: Internal.MouseEvent_): void;
        abstract mouseDragged(arg0: Internal.MouseEvent_): void;
    }
    type MouseMotionListener_ = MouseMotionListener;
    class PersistentEntitySectionManager <T extends Internal.EntityAccess> implements Internal.AutoCloseable {
        constructor(arg0: T, arg1: any_<T>, arg2: Internal.EntityPersistentStorage_<T>)
        addNewEntityWithoutEvent(arg0: T): boolean;
        canPositionTick(arg0: Internal.ChunkPos_): boolean;
        gatherStats(): string;
        autoSave(): void;
        addLegacyChunkEntities(arg0: Internal.Stream_<T>): void;
        addNewEntity(arg0: T): boolean;
        addWorldGenChunkEntities(arg0: Internal.Stream_<T>): void;
        isLoaded(arg0: Internal.UUID_): boolean;
        updateChunkStatus(arg0: Internal.ChunkPos_, arg1: Internal.FullChunkStatus_): void;
        tick(): void;
        areEntitiesLoaded(arg0: number): boolean;
        saveAll(): void;
        getEntityGetter(): Internal.LevelEntityGetter<T>;
        close(): void;
        canPositionTick(arg0: BlockPos_): boolean;
        updateChunkStatus(arg0: Internal.ChunkPos_, arg1: Internal.Visibility_): void;
        dumpSections(arg0: Internal.Writer_): void;
        get entityGetter(): Internal.LevelEntityGetter<T>
        readonly permanentStorage: Internal.EntityPersistentStorage<T>;
        readonly chunkVisibility: Internal.Long2ObjectMap<Internal.Visibility>;
    }
    type PersistentEntitySectionManager_<T extends Internal.EntityAccess> = PersistentEntitySectionManager<T>;
    class RedAlloyWireBlock extends Internal.PoweredWireBlock {
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
        static readonly NODE_SHAPES_DUNSWE: Internal.VoxelShape[];
        static readonly SHAPES_BY_STATE_INDEX: Internal.VoxelShape[];
        static readonly RAYTRACE_BACKBOARDS: Internal.VoxelShape[];
        static readonly VOXEL_CACHE: Internal.LoadingCache<number, Internal.VoxelShape>;
        static readonly LINE_SHAPES: Internal.VoxelShape[];
    }
    type RedAlloyWireBlock_ = RedAlloyWireBlock;
    class PipeBlock$PipeBlockPart extends Internal.Enum<Internal.PipeBlock$PipeBlockPart> implements Internal.StringRepresentable {
        static values(): Internal.PipeBlock$PipeBlockPart[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.PipeBlock$PipeBlockPart;
        getSerializedName(): string;
        get serializedName(): string
        static readonly MIDDLE: Internal.PipeBlock$PipeBlockPart;
        static readonly TOP: Internal.PipeBlock$PipeBlockPart;
        static readonly BOTTOM: Internal.PipeBlock$PipeBlockPart;
    }
    type PipeBlock$PipeBlockPart_ = "middle" | "bottom" | PipeBlock$PipeBlockPart | "top";
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
    class WidgetLayout$Vertical extends Internal.WidgetLayout$_Simple {
        constructor(_pre: number, _spacing: number, _post: number)
    }
    type WidgetLayout$Vertical_ = WidgetLayout$Vertical;
    class QuestObjectType extends Internal.Enum<Internal.QuestObjectType> implements Internal.Predicate<Internal.QuestObjectBase> {
        static values(): Internal.QuestObjectType[];
        test(arg0: any): boolean;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        or(arg0: Internal.Predicate_<Internal.QuestObjectBase>): Internal.Predicate<Internal.QuestObjectBase>;
        getCompletedMessage(): net.minecraft.network.chat.Component;
        getColor(): Internal.ChatFormatting;
        static valueOf(name: string): Internal.QuestObjectType;
        test(object: Internal.QuestObjectBase_): boolean;
        getId(): string;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        negate(): Internal.Predicate<Internal.QuestObjectBase>;
        and(arg0: Internal.Predicate_<Internal.QuestObjectBase>): Internal.Predicate<Internal.QuestObjectBase>;
        get completedMessage(): net.minecraft.network.chat.Component
        get color(): Internal.ChatFormatting
        get id(): string
        static readonly REWARD: Internal.QuestObjectType;
        static readonly ALL_PROGRESSING: Internal.Predicate<Internal.QuestObjectBase>;
        static readonly TASK: Internal.QuestObjectType;
        static readonly NAME_MAP: Internal.NameMap<Internal.QuestObjectType>;
        static readonly CHAPTER_GROUP: Internal.QuestObjectType;
        static readonly FILE: Internal.QuestObjectType;
        static readonly QUEST: Internal.QuestObjectType;
        static readonly QUEST_LINK: Internal.QuestObjectType;
        static readonly REWARD_TABLE: Internal.QuestObjectType;
        static readonly ALL_PROGRESSING_OR_NULL: Internal.Predicate<Internal.QuestObjectBase>;
        static readonly NULL: Internal.QuestObjectType;
        static readonly CHAPTER: Internal.QuestObjectType;
    }
    type QuestObjectType_ = "null" | "reward" | "quest" | "file" | QuestObjectType | "chapter_group" | "quest_link" | "chapter" | "task" | "reward_table";
    interface SampledFloat {
        abstract sample(arg0: Internal.RandomSource_): number;
        (arg0: Internal.RandomSource): number;
    }
    type SampledFloat_ = SampledFloat;
    class CoFHParticleOptions implements Internal.ParticleOptions {
        constructor(arg0: Internal.ParticleType_<Internal.CoFHParticleOptions>, arg1: number, arg2: number)
        constructor(arg0: Internal.ParticleType_<Internal.CoFHParticleOptions>, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.ParticleType_<Internal.ColorParticleOptions>)
        writeToString(): string;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        getType(): Internal.ParticleType<Internal.CoFHParticleOptions>;
        get type(): Internal.ParticleType<Internal.CoFHParticleOptions>
        readonly type: Internal.ParticleType<Internal.CoFHParticleOptions>;
        readonly size: number;
        readonly duration: number;
        readonly delay: number;
    }
    type CoFHParticleOptions_ = CoFHParticleOptions;
    class TrackSwitchBlock$SwitchState extends Internal.Enum<Internal.TrackSwitchBlock$SwitchState> implements Internal.StringRepresentable {
        static values(): Internal.TrackSwitchBlock$SwitchState[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static fromSteerDirection(direction: Internal.TravellingPoint$SteerDirection_, forward: boolean): Internal.TrackSwitchBlock$SwitchState;
        getSerializedName(): string;
        nextStateFor(sw: Internal.TrackSwitch_, constraint: Internal.TrackSwitchBlock$SwitchConstraint_): this;
        nextStateForPonder(constraint: Internal.TrackSwitchBlock$SwitchConstraint_): this;
        canSwitchTo(next: Internal.TrackSwitchBlock$SwitchState_, constraint: Internal.TrackSwitchBlock$SwitchConstraint_): boolean;
        static valueOf(name: string): Internal.TrackSwitchBlock$SwitchState;
        get serializedName(): string
        static readonly REVERSE_LEFT: Internal.TrackSwitchBlock$SwitchState;
        static readonly REVERSE_RIGHT: Internal.TrackSwitchBlock$SwitchState;
        static readonly NORMAL: Internal.TrackSwitchBlock$SwitchState;
    }
    type TrackSwitchBlock$SwitchState_ = "normal" | "reverse_left" | "reverse_right" | TrackSwitchBlock$SwitchState;
    interface OptionInstance$CycleableValueSet$ValueSetter <T> {
        abstract set(arg0: Internal.OptionInstance_<T>, arg1: T): void;
        (arg0: Internal.OptionInstance<T>, arg1: T): void;
    }
    type OptionInstance$CycleableValueSet$ValueSetter_<T> = OptionInstance$CycleableValueSet$ValueSetter<T>;
    class GameRules$IntegerValue extends Internal.GameRules$Value<Internal.GameRules$IntegerValue> {
        constructor(arg0: Internal.GameRules$Type_<Internal.GameRules$IntegerValue>, arg1: number)
        set(arg0: number, arg1: Internal.MinecraftServer_): void;
        setFrom(arg0: Internal.GameRules$IntegerValue_, arg1: Internal.MinecraftServer_): void;
        tryDeserialize(arg0: string): boolean;
        static create(arg0: number): Internal.GameRules$Type<Internal.GameRules$IntegerValue>;
        static create(arg0: number, arg1: Internal.BiConsumer_<Internal.MinecraftServer, Internal.GameRules$IntegerValue>): Internal.GameRules$Type<Internal.GameRules$IntegerValue>;
        get(): number;
    }
    type GameRules$IntegerValue_ = GameRules$IntegerValue;
    class SerializableRecipeType <T extends Internal.SerializableRecipe> implements Internal.RecipeType<T> {
        constructor(arg0: ResourceLocation_)
        constructor(arg0: string, arg1: string)
        static simple<T extends Internal.Recipe<any>>(arg0: ResourceLocation_): Internal.RecipeType<T>;
        static register<T extends Internal.Recipe<any>>(arg0: string): Internal.RecipeType<T>;
    }
    type SerializableRecipeType_<T extends Internal.SerializableRecipe> = SerializableRecipeType<T>;
    interface AccessorLivingEntityRenderer <T extends Internal.LivingEntity> {
        abstract callSetupRotations(arg0: T, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number): void;
        (arg0: T, arg1: Internal.PoseStack, arg2: number, arg3: number, arg4: number): void;
    }
    type AccessorLivingEntityRenderer_<T extends Internal.LivingEntity> = AccessorLivingEntityRenderer<T>;
    abstract class ModCauldronBlock extends Internal.AbstractCauldronBlock implements Internal.EntityBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        doCraftItem(level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, te: Internal.LiquidCauldronBlockTile_, fluid: Internal.SoftFluidStack_, itemStack: Internal.ItemStack_, crafted: Internal.ItemStack_, layerPerItem: number, itemCountMultiplier: number): void;
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
        abstract getLevelProperty(): Internal.IntegerProperty;
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
        static playSplashAnimation(level: Internal.Level_, pos: BlockPos_, e: Internal.Entity_, waterLevel: number, color: number, light: number): void;
        newBlockEntity(pos: BlockPos_, state: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        static addSurfaceParticles(type: Internal.ParticleOptions_, level: Internal.Level_, pos: BlockPos_, count: number, surface: number, rand: Internal.RandomSource_, r: number, g: number, b: number): void;
        getBlockStates(): Internal.List<Internal.BlockState>;
        abstract updateStateOnFluidChange(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.SoftFluidStack_): Internal.BlockState;
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
        static playExtinguishSound(level: Internal.Level_, pos: BlockPos_, entity: Internal.Entity_): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get levelProperty(): Internal.IntegerProperty
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type ModCauldronBlock_ = ModCauldronBlock;
    class CubeGeneratorBlock extends Internal.AEBaseEntityBlock<any> {
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
    type CubeGeneratorBlock_ = CubeGeneratorBlock;
    class AndRecipeComponent <A, B> extends Internal.Record implements Internal.RecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>> {
        constructor(a: Internal.RecipeComponent_<A>, b: Internal.RecipeComponent_<B>)
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, org.apache.commons.lang3.tuple.Pair<A, B>>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        replaceInput(recipe: Internal.RecipeJS_, original: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): org.apache.commons.lang3.tuple.Pair<A, B>;
        checkEmpty(key: Internal.RecipeKey_<org.apache.commons.lang3.tuple.Pair<A, B>>, value: org.apache.commons.lang3.tuple.Pair_<A, B>): string;
        b(): Internal.RecipeComponent<B>;
        role(): Internal.ComponentRole;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<org.apache.commons.lang3.tuple.Pair<A, B>>, json: Internal.JsonObject_): void;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        componentClass(): typeof any;
        write(recipe: Internal.RecipeJS_, value: org.apache.commons.lang3.tuple.Pair_<A, B>): Internal.JsonArray;
        key(name: string): Internal.RecipeKey<org.apache.commons.lang3.tuple.Pair<A, B>>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, org.apache.commons.lang3.tuple.Pair<A, B>>>;
        orSelf(): Internal.RecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<org.apache.commons.lang3.tuple.Pair<A, B>>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<org.apache.commons.lang3.tuple.Pair<A, B>>, map: Internal.Map_<any, any>): void;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>, O>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        a(): Internal.RecipeComponent<A>;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        asArray(): Internal.ArrayRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        replaceOutput(recipe: Internal.RecipeJS_, original: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): org.apache.commons.lang3.tuple.Pair<A, B>;
        isInput(recipe: Internal.RecipeJS_, value: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_): boolean;
        checkValueHasChanged(oldValue: org.apache.commons.lang3.tuple.Pair_<A, B>, newValue: org.apache.commons.lang3.tuple.Pair_<A, B>): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>, O>;
        isOutput(recipe: Internal.RecipeJS_, value: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_): boolean;
    }
    type AndRecipeComponent_<A, B> = AndRecipeComponent<A, B>;
    class MonsterRoomFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type MonsterRoomFeature_ = MonsterRoomFeature;
    class PeculiarBellBlockEntity extends Internal.AbstractBellBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
    }
    type PeculiarBellBlockEntity_ = PeculiarBellBlockEntity;
    interface Effect extends Internal.Shader {
        abstract getFragmentProgram(): Internal.Program;
        abstract markDirty(): void;
        abstract attachToProgram(): void;
        abstract getVertexProgram(): Internal.Program;
        abstract getId(): number;
        get fragmentProgram(): Internal.Program
        get vertexProgram(): Internal.Program
        get id(): number
    }
    type Effect_ = Effect;
    class BiomeSpecialEffects$Builder implements Internal.BiomeSpecialEffectsBuilderForgeAccessor {
        constructor()
        ambientAdditionsSound(arg0: Internal.AmbientAdditionsSettings_): this;
        grassColorOverride(arg0: number): this;
        fogColor(arg0: number): this;
        ambientLoopSound(arg0: Internal.Holder_<Internal.SoundEvent>): this;
        backgroundMusic(arg0: Internal.Music_): this;
        puzzleslib$setAmbientAdditionsSettings(arg0: Internal.Optional_<any>): void;
        waterColor(arg0: number): this;
        ambientMoodSound(arg0: Internal.AmbientMoodSettings_): this;
        ambientParticle(arg0: Internal.AmbientParticleSettings_): this;
        puzzleslib$setFoliageColorOverride(arg0: Internal.Optional_<any>): void;
        build(): Internal.BiomeSpecialEffects;
        waterFogColor(arg0: number): this;
        foliageColorOverride(arg0: number): this;
        puzzleslib$setAmbientMoodSettings(arg0: Internal.Optional_<any>): void;
        puzzleslib$setBackgroundMusic(arg0: Internal.Optional_<any>): void;
        puzzleslib$setGrassColorOverride(arg0: Internal.Optional_<any>): void;
        puzzleslib$setAmbientParticle(arg0: Internal.Optional_<any>): void;
        skyColor(arg0: number): this;
        puzzleslib$setAmbientLoopSoundEvent(arg0: Internal.Optional_<any>): void;
        grassColorModifier(arg0: Internal.BiomeSpecialEffects$GrassColorModifier_): this;
        grassColorOverride: Internal.Optional<number>;
        ambientParticle: Internal.Optional<Internal.AmbientParticleSettings>;
        ambientMoodSettings: Internal.Optional<Internal.AmbientMoodSettings>;
        fogColor: Internal.OptionalInt;
        ambientLoopSoundEvent: Internal.Optional<Internal.Holder<Internal.SoundEvent>>;
        grassColorModifier: Internal.BiomeSpecialEffects$GrassColorModifier;
        ambientAdditionsSettings: Internal.Optional<Internal.AmbientAdditionsSettings>;
        waterColor: Internal.OptionalInt;
        skyColor: Internal.OptionalInt;
        foliageColorOverride: Internal.Optional<number>;
        waterFogColor: Internal.OptionalInt;
        backgroundMusic: Internal.Optional<Internal.Music>;
    }
    type BiomeSpecialEffects$Builder_ = BiomeSpecialEffects$Builder;
    abstract class CustomBuffer <SELF extends Internal.CustomBuffer<SELF>> extends Internal.Pointer$Default {
        compact(): SELF;
        capacity(): number;
        remaining(): number;
        mark(): SELF;
        limit(): number;
        free(): void;
        position(): number;
        address(arg0: number): number;
        put(arg0: SELF): SELF;
        rewind(): SELF;
        abstract sizeof(): number;
        clear(): SELF;
        position(arg0: number): SELF;
        limit(arg0: number): SELF;
        flip(): SELF;
        slice(): SELF;
        reset(): SELF;
        address0(): number;
        hasRemaining(): boolean;
        slice(arg0: number, arg1: number): SELF;
        duplicate(): SELF;
    }
    type CustomBuffer_<SELF extends Internal.CustomBuffer<SELF>> = CustomBuffer<SELF>;
    class TrackSwitchBlockItem extends Internal.TrackTargetingBlockItem {
        constructor(block: Internal.Block_, properties: Internal.Item$Properties_, type: Internal.EdgePointType_<any>)
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
        static ofType<T extends Internal.Block>(type: Internal.EdgePointType_<any>): Internal.NonNullBiFunction<T, Internal.Item$Properties, Internal.TrackTargetingBlockItem>;
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
    type TrackSwitchBlockItem_ = TrackSwitchBlockItem;
    interface IAdvancementModifier {
        abstract getTargets(): Internal.Set<ResourceLocation>;
        setCondition(arg0: Internal.BooleanSupplier_): this;
        abstract apply(arg0: ResourceLocation_, arg1: Internal.IMutableAdvancement_): boolean;
        isActive(): boolean;
        get targets(): Internal.Set<ResourceLocation>
        set condition(arg0: Internal.BooleanSupplier_)
        get active(): boolean
    }
    type IAdvancementModifier_ = IAdvancementModifier;
    interface UserAuthentication {
        abstract getSelectedProfile(): Internal.GameProfile;
        abstract loadFromStorage(arg0: Internal.Map_<string, any>): void;
        abstract logOut(): void;
        abstract setPassword(arg0: string): void;
        abstract logIn(): void;
        abstract getAuthenticatedToken(): string;
        abstract getUserProperties(): Internal.PropertyMap;
        abstract getUserID(): string;
        abstract isLoggedIn(): boolean;
        abstract canPlayOnline(): boolean;
        abstract getAvailableProfiles(): Internal.GameProfile[];
        abstract getUserType(): Internal.UserType;
        abstract setUsername(arg0: string): void;
        abstract saveForStorage(): Internal.Map<string, any>;
        abstract selectGameProfile(arg0: Internal.GameProfile_): void;
        abstract canLogIn(): boolean;
        get selectedProfile(): Internal.GameProfile
        set password(arg0: string)
        get authenticatedToken(): string
        get userProperties(): Internal.PropertyMap
        get userID(): string
        get loggedIn(): boolean
        get availableProfiles(): Internal.GameProfile[]
        get userType(): Internal.UserType
        set username(arg0: string)
    }
    type UserAuthentication_ = UserAuthentication;
    class TrackTargetingBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_, arg2: Internal.EdgePointType_<any>)
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
        static withGraphLocation(arg0: Internal.Level_, arg1: BlockPos_, arg2: boolean, arg3: Internal.BezierTrackPointLocation_, arg4: Internal.EdgePointType_<any>, arg5: Internal.BiConsumer_<Internal.TrackTargetingBlockItem$OverlapResult, Internal.TrackGraphLocation>): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        useOnCurve(arg0: Internal.TrackBlockOutline$BezierPointSelection_, arg1: Internal.ItemStack_): boolean;
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
        static ofType<T extends Internal.Block>(arg0: Internal.EdgePointType_<any>): Internal.NonNullBiFunction<T, Internal.Item$Properties, Internal.TrackTargetingBlockItem>;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getType(arg0: Internal.ItemStack_): Internal.EdgePointType<any>;
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
    type TrackTargetingBlockItem_ = TrackTargetingBlockItem;
    class ForgeMod$3 extends Internal.FluidType {
    }
    type ForgeMod$3_ = ForgeMod$3;
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
        static canConnectDown(downState: Internal.BlockState_): boolean;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static hasMiddleKnot(state: Internal.BlockState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        static isSupportingCeiling(upState: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelReader_): boolean;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        shouldConnectToDir(thisState: Internal.BlockState_, currentPos: BlockPos_, world: Internal.LevelReader_, dir: Internal.Direction_): boolean;
        canSideAcceptConnection(state: Internal.BlockState_, direction: Internal.Direction_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        shouldConnectToFace(thisState: Internal.BlockState_, facingState: Internal.BlockState_, facingPos: BlockPos_, dir: Internal.Direction_, world: Internal.LevelReader_): boolean;
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
        static isSupportingCeiling(pos: BlockPos_, world: Internal.LevelReader_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
declare namespace net.minecraft.network.chat {
    interface Component extends com.mojang.brigadier.Message, Internal.FormattedText {
        abstract getVisualOrderText(): Internal.FormattedCharSequence;
        toFlatList(): Internal.List<net.minecraft.network.chat.Component>;
        translatable(arg0: string): Internal.MutableComponent;
        empty(): Internal.MutableComponent;
        translatable(arg0: string, ...arg1: any[]): Internal.MutableComponent;
        visit<T>(arg0: Internal.FormattedText$ContentConsumer_<T>): Internal.Optional<T>;
        abstract getStyle(): Internal.Style;
        visit<T>(arg0: Internal.FormattedText$StyledContentConsumer_<T>, arg1: Internal.Style_): Internal.Optional<T>;
        getString(arg0: number): string;
        abstract getSiblings(): Internal.List<net.minecraft.network.chat.Component>;
        getString(): string;
        nbt(arg0: string, arg1: boolean, arg2: Internal.Optional_<net.minecraft.network.chat.Component>, arg3: Internal.DataSource_): Internal.MutableComponent;
        nullToEmpty(arg0: string): this;
        translatableWithFallback(arg0: string, arg1: string, ...arg2: any[]): Internal.MutableComponent;
        of(arg0: string, arg1: Internal.Style_): Internal.FormattedText;
        plainCopy(): Internal.MutableComponent;
        keybind(arg0: string): Internal.MutableComponent;
        translatableWithFallback(arg0: string, arg1: string): Internal.MutableComponent;
        contains(arg0: net.minecraft.network.chat.Component_): boolean;
        score(arg0: string, arg1: string): Internal.MutableComponent;
        composite(...arg0: Internal.FormattedText_[]): Internal.FormattedText;
        of(arg0: string): Internal.FormattedText;
        composite(arg0: Internal.List_<Internal.FormattedText>): Internal.FormattedText;
        abstract getContents(): Internal.ComponentContents;
        toFlatList(arg0: Internal.Style_): Internal.List<net.minecraft.network.chat.Component>;
        selector(arg0: string, arg1: Internal.Optional_<net.minecraft.network.chat.Component>): Internal.MutableComponent;
        copy(): Internal.MutableComponent;
        literal(arg0: string): Internal.MutableComponent;
        get visualOrderText(): Internal.FormattedCharSequence
        get style(): Internal.Style
        get siblings(): Internal.List<net.minecraft.network.chat.Component>
        get string(): string
        get contents(): Internal.ComponentContents
    }
    type Component_ = Component;
}
