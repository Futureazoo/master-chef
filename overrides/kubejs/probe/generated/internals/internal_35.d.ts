/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class Climate$Parameter extends Internal.Record {
        constructor(arg0: number, arg1: number)
        span(arg0: Internal.Climate$Parameter_): this;
        distance(arg0: number): number;
        distance(arg0: Internal.Climate$Parameter_): number;
        static point(arg0: number): Internal.Climate$Parameter;
        static span(arg0: Internal.Climate$Parameter_, arg1: Internal.Climate$Parameter_): Internal.Climate$Parameter;
        max(): number;
        static span(arg0: number, arg1: number): Internal.Climate$Parameter;
        min(): number;
        static readonly CODEC: Internal.Codec<Internal.Climate$Parameter>;
    }
    type Climate$Parameter_ = Climate$Parameter;
    interface ShortCollection extends Internal.ShortIterable, Internal.Collection<number> {
        abstract add(arg0: number): boolean;
        abstract removeAll(arg0: Internal.ShortCollection_): boolean;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        abstract isEmpty(): boolean;
        forEach(arg0: Internal.ShortConsumer_): void;
        abstract iterator(): Internal.ShortIterator;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        forEach(arg0: Internal.IntConsumer_): void;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        intParallelStream(): Internal.IntStream;
        intIterator(): Internal.IntIterator;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        abstract contains(arg0: number): boolean;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        abstract toArray<T>(arg0: T[]): T[];
        removeIf(arg0: Internal.ShortPredicate_): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        abstract toArray(): any[];
        abstract addAll(arg0: Internal.ShortCollection_): boolean;
        abstract retainAll(arg0: Internal.ShortCollection_): boolean;
        intSpliterator(): Internal.IntSpliterator;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        abstract toShortArray(): number[];
        abstract hashCode(): number;
        abstract size(): number;
        /**
         * @deprecated
        */
        toShortArray(arg0: number[]): number[];
        spliterator(): Internal.Spliterator<any>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract clear(): void;
        abstract toArray(arg0: number[]): number[];
        abstract rem(arg0: number): boolean;
        abstract equals(arg0: any): boolean;
        abstract containsAll(arg0: Internal.ShortCollection_): boolean;
        get empty(): boolean
    }
    type ShortCollection_ = ShortCollection;
    class TapeItem extends Internal.Item {
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
    type TapeItem_ = TapeItem;
    interface OptionInstance$ValueSet <T> {
        abstract validateValue(arg0: T): Internal.Optional<T>;
        abstract codec(): Internal.Codec<T>;
        abstract createButton(arg0: Internal.OptionInstance$TooltipSupplier_<T>, arg1: Internal.Options_, arg2: number, arg3: number, arg4: number, arg5: Internal.Consumer_<T>): Internal.Function<Internal.OptionInstance<T>, Internal.AbstractWidget>;
    }
    type OptionInstance$ValueSet_<T> = OptionInstance$ValueSet<T>;
    class DimensionSpecialEffects$SkyType extends Internal.Enum<Internal.DimensionSpecialEffects$SkyType> {
        static values(): Internal.DimensionSpecialEffects$SkyType[];
        static valueOf(arg0: string): Internal.DimensionSpecialEffects$SkyType;
        static readonly NORMAL: Internal.DimensionSpecialEffects$SkyType;
        static readonly END: Internal.DimensionSpecialEffects$SkyType;
        static readonly NONE: Internal.DimensionSpecialEffects$SkyType;
    }
    type DimensionSpecialEffects$SkyType_ = "normal" | DimensionSpecialEffects$SkyType | "end" | "none";
    interface ExtraModelData {
        builder(): Internal.ExtraModelData$Builder;
        isEmpty(): boolean;
        abstract get<T>(arg0: Internal.ModelDataKey_<T>): T;
        get empty(): boolean
        (arg0: Internal.ModelDataKey<T>): T;
        readonly EMPTY: Internal.ExtraModelDataImpl;
    }
    type ExtraModelData_ = ExtraModelData;
    class AnimationState {
        constructor()
        animateWhen(arg0: boolean, arg1: number): void;
        stop(): void;
        getAccumulatedTime(): number;
        isStarted(): boolean;
        start(arg0: number): void;
        updateTime(arg0: number, arg1: number): void;
        ifStarted(arg0: Internal.Consumer_<Internal.AnimationState>): void;
        startIfStopped(arg0: number): void;
        get accumulatedTime(): number
        get started(): boolean
    }
    type AnimationState_ = AnimationState;
    class ShieldDecorationRecipe extends Internal.CustomRecipe {
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
    type ShieldDecorationRecipe_ = ShieldDecorationRecipe;
    class Pack {
        open(): Internal.PackResources;
        isFixedPosition(): boolean;
        getPackSource(): Internal.PackSource;
        isHidden(): boolean;
        getId(): string;
        static create(arg0: string, arg1: Internal.Component_, arg2: boolean, arg3: Internal.Pack$ResourcesSupplier_, arg4: Internal.Pack$Info_, arg5: Internal.PackType_, arg6: Internal.Pack$Position_, arg7: boolean, arg8: Internal.PackSource_): Internal.Pack;
        getChatLink(arg0: boolean): Internal.Component;
        static readPackInfo(arg0: string, arg1: Internal.Pack$ResourcesSupplier_): Internal.Pack$Info;
        static readMetaAndCreate(arg0: string, arg1: Internal.Component_, arg2: boolean, arg3: Internal.Pack$ResourcesSupplier_, arg4: Internal.PackType_, arg5: Internal.Pack$Position_, arg6: Internal.PackSource_): Internal.Pack;
        isRequired(): boolean;
        getTitle(): Internal.Component;
        getRequestedFeatures(): Internal.FeatureFlagSet;
        getDefaultPosition(): Internal.Pack$Position;
        getDescription(): Internal.Component;
        getCompatibility(): Internal.PackCompatibility;
        get fixedPosition(): boolean
        get packSource(): Internal.PackSource
        get hidden(): boolean
        get id(): string
        get required(): boolean
        get title(): Internal.Component
        get requestedFeatures(): Internal.FeatureFlagSet
        get defaultPosition(): Internal.Pack$Position
        get description(): Internal.Component
        get compatibility(): Internal.PackCompatibility
    }
    type Pack_ = Pack;
    class SpawnPlacements$Type extends Internal.Enum<Internal.SpawnPlacements$Type> implements Internal.IExtensibleEnum {
        static values(): Internal.SpawnPlacements$Type[];
        static create(arg0: string, arg1: Internal.TriPredicate_<Internal.LevelReader, BlockPos, Internal.EntityType<Internal.Mob>>): Internal.SpawnPlacements$Type;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        /**
         * @deprecated
        */
        init(): void;
        static valueOf(arg0: string): Internal.SpawnPlacements$Type;
        canSpawnAt(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.EntityType_<any>): boolean;
        static readonly ON_GROUND: Internal.SpawnPlacements$Type;
        static readonly NO_RESTRICTIONS: Internal.SpawnPlacements$Type;
        static readonly IN_WATER: Internal.SpawnPlacements$Type;
        static readonly IN_LAVA: Internal.SpawnPlacements$Type;
    }
    type SpawnPlacements$Type_ = "in_lava" | "on_ground" | "in_water" | "no_restrictions" | SpawnPlacements$Type;
    class RenderStateShard$LayeringStateShard extends Internal.RenderStateShard {
        constructor(arg0: string, arg1: Internal.Runnable_, arg2: Internal.Runnable_)
    }
    type RenderStateShard$LayeringStateShard_ = RenderStateShard$LayeringStateShard;
    abstract class AbstractHugeMushroomFeature extends Internal.Feature<Internal.HugeMushroomFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.HugeMushroomFeatureConfiguration>)
    }
    type AbstractHugeMushroomFeature_ = AbstractHugeMushroomFeature;
    class JavaMembers$MethodInfo {
        constructor(m: Internal.Method_)
        name: string;
        method: Internal.Method;
        hidden: boolean;
    }
    type JavaMembers$MethodInfo_ = JavaMembers$MethodInfo;
    class GenericDescJS extends Internal.Record implements Internal.TypeDescJS {
        constructor(type: Internal.TypeDescJS_, ...types: Internal.TypeDescJS_[])
        or(type: Internal.TypeDescJS_): Internal.TypeDescJS;
        types(): Internal.TypeDescJS[];
        static object(init: number): Internal.ObjectDescJS;
        static fixedArray(...types: Internal.TypeDescJS_[]): Internal.TypeDescJS;
        build(): string;
        type(): Internal.TypeDescJS;
        build(builder: Internal.StringBuilder_): void;
        static object(): Internal.ObjectDescJS;
        asMap(): Internal.TypeDescJS;
        asArray(): Internal.TypeDescJS;
        static any(...types: Internal.TypeDescJS_[]): Internal.TypeDescJS;
        withGenerics(...types: Internal.TypeDescJS_[]): Internal.TypeDescJS;
        asMap(key: Internal.TypeDescJS_): Internal.TypeDescJS;
    }
    type GenericDescJS_ = GenericDescJS;
    abstract class DustParticleOptionsBase implements Internal.ParticleOptions {
        constructor(arg0: Vec3f_, arg1: number)
        static readVector3f(arg0: Internal.StringReader_): Vec3f;
        static readVector3f(arg0: Internal.FriendlyByteBuf_): Vec3f;
        getColor(): Vec3f;
        writeToString(): string;
        abstract getType(): Internal.ParticleType<any>;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        getScale(): number;
        get color(): Vec3f
        get type(): Internal.ParticleType<any>
        get scale(): number
        static readonly MAX_SCALE: 4.0;
        static readonly MIN_SCALE: 0.01;
    }
    type DustParticleOptionsBase_ = DustParticleOptionsBase;
    class TargetingConditions {
        range(arg0: number): this;
        static forCombat(): Internal.TargetingConditions;
        copy(): this;
        static forNonCombat(): Internal.TargetingConditions;
        test(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        selector(arg0: Internal.Predicate_<Internal.LivingEntity>): this;
        ignoreLineOfSight(): this;
        ignoreInvisibilityTesting(): this;
        static readonly DEFAULT: Internal.TargetingConditions;
    }
    type TargetingConditions_ = TargetingConditions;
    class TurntableBlockEntity extends Internal.KineticBlockEntity {
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
    type TurntableBlockEntity_ = TurntableBlockEntity;
    class SimpleLevelEventJS extends Internal.LevelEventJS {
        constructor(l: Internal.Level_)
    }
    type SimpleLevelEventJS_ = SimpleLevelEventJS;
    interface Translate <Self> {
        translateAll(arg0: number): Self;
        abstract translate(arg0: number, arg1: number, arg2: number): Self;
        translateBack(arg0: number, arg1: number, arg2: number): Self;
        nudge(arg0: number): Self;
        unCentre(): Self;
        translate(arg0: Vec3f_): Self;
        translateBack(arg0: Vec3d_): Self;
        translate(arg0: Vec3i_): Self;
        translate(arg0: Vec3d_): Self;
        translateY(arg0: number): Self;
        translateX(arg0: number): Self;
        translateZ(arg0: number): Self;
        centre(): Self;
        translateBack(arg0: Vec3i_): Self;
        (arg0: number, arg1: number, arg2: number): Self;
    }
    type Translate_<Self> = Translate<Self>;
    abstract class Unit {
        constructor()
        lerp(a: Internal.Unit_, b: Internal.Unit_): this;
        log10(): this;
        boolNot(): this;
        add(value: number): this;
        or(other: Internal.Unit_): this;
        modSet(unit: Internal.Unit_): this;
        deg(): this;
        lte(other: Internal.Unit_): this;
        tan(): this;
        clamp(a: Internal.Unit_, b: Internal.Unit_): this;
        add(other: Internal.Unit_): this;
        pow(other: Internal.Unit_): this;
        set(unit: Internal.Unit_): this;
        bitOr(other: Internal.Unit_): this;
        lt(other: Internal.Unit_): this;
        lsh(other: Internal.Unit_): this;
        getFloat(variables: Internal.UnitVariables_): number;
        mod(value: number): this;
        sin(): this;
        floor(): this;
        rsh(other: Internal.Unit_): this;
        bitNot(): this;
        mul(other: Internal.Unit_): this;
        abs(): this;
        smoothstep(): this;
        mulSet(unit: Internal.Unit_): this;
        and(other: Internal.Unit_): this;
        isFixed(): boolean;
        positive(): this;
        toString(builder: Internal.StringBuilder_): void;
        bool(): this;
        max(other: Internal.Unit_): this;
        ceil(): this;
        log1p(): this;
        negate(): this;
        log(): this;
        subSet(unit: Internal.Unit_): this;
        withAlpha(a: Internal.Unit_): this;
        bitAnd(other: Internal.Unit_): this;
        div(other: Internal.Unit_): this;
        min(other: Internal.Unit_): this;
        cos(): this;
        div(value: number): this;
        addSet(unit: Internal.Unit_): this;
        mul(value: number): this;
        sq(): this;
        gte(other: Internal.Unit_): this;
        sqrt(): this;
        getInt(variables: Internal.UnitVariables_): number;
        mod(other: Internal.Unit_): this;
        sub(value: number): this;
        xor(other: Internal.Unit_): this;
        abstract get(arg0: Internal.UnitVariables_): number;
        neq(other: Internal.Unit_): this;
        gt(other: Internal.Unit_): this;
        getBoolean(variables: Internal.UnitVariables_): boolean;
        rad(): this;
        eq(other: Internal.Unit_): this;
        sub(other: Internal.Unit_): this;
        atan2(other: Internal.Unit_): this;
        atan(): this;
        divSet(unit: Internal.Unit_): this;
        get fixed(): boolean
        static EMPTY_ARRAY: Internal.Unit[];
    }
    type Unit_ = Unit;
    class WallBannerBlock extends Internal.AbstractBannerBlock {
        constructor(arg0: Internal.DyeColor_, arg1: Internal.BlockBehaviour$Properties_)
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
    }
    type WallBannerBlock_ = WallBannerBlock;
    class ZombieVillager extends Internal.Zombie implements Internal.VillagerDataHolder {
        constructor(arg0: Internal.EntityType_<Internal.ZombieVillager>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        getVillagerData(): Internal.VillagerData;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getDeathSound(): Internal.SoundEvent;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        getAmbientSound(): Internal.SoundEvent;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        isConverting(): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setTradeOffers(arg0: Internal.CompoundTag_): void;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setVariant(arg0: Internal.VillagerType_): void;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getVariant(): any;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        shouldRiderSit(): boolean;
        getVillagerXp(): number;
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
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        setGossips(arg0: Internal.Tag_): void;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        getStepSound(): Internal.SoundEvent;
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
        setVillagerData(arg0: Internal.VillagerData_): void;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setVillagerXp(arg0: number): void;
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
        getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        setVariant(arg0: any): void;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        get villagerData(): Internal.VillagerData
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get deathSound(): Internal.SoundEvent
        get ambientSound(): Internal.SoundEvent
        get converting(): boolean
        get player(): boolean
        get animal(): boolean
        set tradeOffers(arg0: Internal.CompoundTag_)
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        set variant(arg0: Internal.VillagerType_)
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get variant(): any
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get villagerXp(): number
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
        set gossips(arg0: Internal.Tag_)
        get undead(): boolean
        get stepSound(): Internal.SoundEvent
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
        set villagerData(arg0: Internal.VillagerData_)
        set motionX(x: number)
        set villagerXp(arg0: number)
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
    type ZombieVillager_ = ZombieVillager;
    interface AlgorithmParameterSpec {
    }
    type AlgorithmParameterSpec_ = AlgorithmParameterSpec;
    class CandleHolderBlock extends Internal.LightUpWaterBlock implements Internal.IColored {
        constructor(color: Internal.DyeColor_, properties: Internal.BlockBehaviour$Properties_)
        constructor(color: Internal.DyeColor_, properties: Internal.BlockBehaviour$Properties_, particle: Internal.Supplier_<Internal.ParticleType<Internal.ParticleOptions>>)
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
        getColor(): Internal.DyeColor;
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
        extinguish(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): boolean;
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
        interactWithPlayer(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_): Internal.InteractionResult;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        supportsBlankColor(): boolean;
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
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        changeItemColor(color: Internal.DyeColor_): Internal.Item;
        playLightUpSound(world: Internal.LevelAccessor_, pos: BlockPos_, type: Internal.ILightable$FireSourceType_): void;
        interactWithProjectile(level: Internal.Level_, state: Internal.BlockState_, projectile: Internal.Projectile_, pos: BlockPos_): boolean;
        static isSideSolidForDirection(reader: Internal.LevelReader_, pos: BlockPos_, direction: Internal.Direction_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        get color(): Internal.DyeColor
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly FACE: Internal.EnumProperty<Internal.AttachFace>;
        static readonly CANDLES: Internal.IntegerProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type CandleHolderBlock_ = CandleHolderBlock;
    class SectionPos extends Vec3i {
        static aroundChunk(arg0: Internal.ChunkPos_, arg1: number, arg2: number, arg3: number): Internal.Stream<Internal.SectionPos>;
        static of(arg0: number): Internal.SectionPos;
        static x(arg0: number): number;
        z(): number;
        static blockToSectionCoord(arg0: number): number;
        static z(arg0: number): number;
        x(): number;
        minBlockZ(): number;
        minBlockX(): number;
        static sectionRelative(arg0: number): number;
        static aroundAndAtBlockPos(arg0: BlockPos_, arg1: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        relativeToBlockY(arg0: number): number;
        static offset(arg0: number, arg1: number, arg2: number, arg3: number): number;
        asLong(): number;
        static getZeroNode(arg0: number): number;
        static sectionRelativeY(arg0: number): number;
        blocksInside(): Internal.Stream<BlockPos>;
        origin(): BlockPos;
        static of(arg0: Internal.ChunkPos_, arg1: number): Internal.SectionPos;
        static offset(arg0: number, arg1: Internal.Direction_): number;
        static of(arg0: Internal.Position_): Internal.SectionPos;
        static bottomOf(arg0: Internal.ChunkAccess_): Internal.SectionPos;
        maxBlockZ(): number;
        maxBlockX(): number;
        static y(arg0: number): number;
        y(): number;
        minBlockY(): number;
        static sectionToBlockCoord(arg0: number, arg1: number): number;
        static posToSectionCoord(arg0: number): number;
        static of(arg0: Internal.EntityAccess_): Internal.SectionPos;
        static cube(arg0: Internal.SectionPos_, arg1: number): Internal.Stream<Internal.SectionPos>;
        center(): BlockPos;
        static sectionToBlockCoord(arg0: number): number;
        relativeToBlockX(arg0: number): number;
        static sectionRelativePos(arg0: BlockPos_): number;
        static sectionRelativeZ(arg0: number): number;
        relativeToBlockZ(arg0: number): number;
        static getZeroNode(arg0: number, arg1: number): number;
        static sectionRelativeX(arg0: number): number;
        static betweenClosedStream(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.Stream<Internal.SectionPos>;
        relativeToBlockPos(arg0: number): BlockPos;
        static asLong(arg0: number, arg1: number, arg2: number): number;
        static of(arg0: BlockPos_): Internal.SectionPos;
        static blockToSection(arg0: number): number;
        static aroundAndAtBlockPos(arg0: number, arg1: number, arg2: number, arg3: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        static aroundAndAtBlockPos(arg0: number, arg1: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        static asLong(arg0: BlockPos_): number;
        static blockToSectionCoord(arg0: number): number;
        offset(arg0: number, arg1: number, arg2: number): this;
        static of(arg0: number, arg1: number, arg2: number): Internal.SectionPos;
        maxBlockY(): number;
        chunk(): Internal.ChunkPos;
        static readonly SECTION_BITS: 4;
        static readonly SECTION_MASK: 15;
        static readonly SECTION_HALF_SIZE: 8;
        static readonly SECTION_MAX_INDEX: 15;
        static readonly SECTION_SIZE: 16;
    }
    type SectionPos_ = SectionPos;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    class DirectionalCakeBlock extends Internal.CakeBlock implements Internal.SimpleWaterloggedBlock {
        constructor(type: Internal.CakeRegistry$CakeType_)
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
        static getHitDir(player: Internal.Player_, hit: Internal.BlockHitResult_): Internal.Direction;
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
        removeSlice(state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_, dir: Internal.Direction_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        eatSliceD(world: Internal.LevelAccessor_, pos: BlockPos_, state: Internal.BlockState_, player: Internal.Player_, dir: Internal.Direction_): Internal.InteractionResult;
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
        static readonly FACING: Internal.DirectionProperty;
        readonly type: Internal.CakeRegistry$CakeType;
    }
    type DirectionalCakeBlock_ = DirectionalCakeBlock;
    class EnderDragonPhase <T extends Internal.DragonPhaseInstance> {
        static getCount(): number;
        static getById(arg0: number): Internal.EnderDragonPhase<any>;
        createInstance(arg0: Internal.EnderDragon_): Internal.DragonPhaseInstance;
        getId(): number;
        get count(): number
        get id(): number
        static readonly DYING: Internal.EnderDragonPhase<Internal.DragonDeathPhase>;
        static readonly HOLDING_PATTERN: Internal.EnderDragonPhase<Internal.DragonHoldingPatternPhase>;
        static readonly LANDING: Internal.EnderDragonPhase<Internal.DragonLandingPhase>;
        static readonly TAKEOFF: Internal.EnderDragonPhase<Internal.DragonTakeoffPhase>;
        static readonly HOVERING: Internal.EnderDragonPhase<Internal.DragonHoverPhase>;
        static readonly SITTING_FLAMING: Internal.EnderDragonPhase<Internal.DragonSittingFlamingPhase>;
        static readonly SITTING_ATTACKING: Internal.EnderDragonPhase<Internal.DragonSittingAttackingPhase>;
        static readonly CHARGING_PLAYER: Internal.EnderDragonPhase<Internal.DragonChargePlayerPhase>;
        static readonly STRAFE_PLAYER: Internal.EnderDragonPhase<Internal.DragonStrafePlayerPhase>;
        static readonly SITTING_SCANNING: Internal.EnderDragonPhase<Internal.DragonSittingScanningPhase>;
        static readonly LANDING_APPROACH: Internal.EnderDragonPhase<Internal.DragonLandingApproachPhase>;
    }
    type EnderDragonPhase_<T extends Internal.DragonPhaseInstance> = EnderDragonPhase<T>;
    class Authentication {
        constructor(arg0: string, arg1: string)
        setPassphrase(arg0: string): void;
        getUsername(): string;
        getPassword(): string;
        setPassword(arg0: string): void;
        setUsername(arg0: string): void;
        setPrivateKey(arg0: string): void;
        getPrivateKey(): string;
        getPassphrase(): string;
        set passphrase(arg0: string)
        get username(): string
        get password(): string
        set password(arg0: string)
        set username(arg0: string)
        set privateKey(arg0: string)
        get privateKey(): string
        get passphrase(): string
    }
    type Authentication_ = Authentication;
    class PackOutput$Target extends Internal.Enum<Internal.PackOutput$Target> {
        static values(): Internal.PackOutput$Target[];
        static valueOf(arg0: string): Internal.PackOutput$Target;
        static readonly DATA_PACK: Internal.PackOutput$Target;
        static readonly REPORTS: Internal.PackOutput$Target;
        static readonly RESOURCE_PACK: Internal.PackOutput$Target;
    }
    type PackOutput$Target_ = "data_pack" | "resource_pack" | PackOutput$Target | "reports";
    /**
     * Invoked right before an explosion happens.
    */
    class ExplosionEventJS$Before extends Internal.ExplosionEventJS {
        constructor(level: Internal.Level_, explosion: Internal.Explosion_)
        /**
         * Returns the size of the explosion.
        */
        getSize(): number;
        /**
         * Sets the size of the explosion.
        */
        setSize(s: number): void;
        /**
         * Returns the size of the explosion.
        */
        get size(): number
        /**
         * Sets the size of the explosion.
        */
        set size(s: number)
    }
    type ExplosionEventJS$Before_ = ExplosionEventJS$Before;
    abstract class SymmetryMirror {
        constructor(arg0: Vec3d_)
        abstract process(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.Map<BlockPos, Internal.BlockState>;
        getPosition(): Vec3d;
        setPosition(arg0: Vec3d_): void;
        static fromNBT(arg0: Internal.CompoundTag_): Internal.SymmetryMirror;
        rotate(arg0: boolean): void;
        applyModelTransform(arg0: Internal.PoseStack_): void;
        getOrientation(): Internal.StringRepresentable;
        static getMirrors(): Internal.List<Internal.Component>;
        process(arg0: Internal.Map_<BlockPos, Internal.BlockState>): void;
        abstract getAlignToolTips(): Internal.List<Internal.Component>;
        abstract setOrientation(arg0: number): void;
        abstract getModel(): Internal.PartialModel;
        getOrientationIndex(): number;
        abstract typeName(): string;
        writeToNbt(): Internal.CompoundTag;
        get position(): Vec3d
        set position(arg0: Vec3d_)
        get orientation(): Internal.StringRepresentable
        get mirrors(): Internal.List<Internal.Component>
        get alignToolTips(): Internal.List<Internal.Component>
        set orientation(arg0: number)
        get model(): Internal.PartialModel
        get orientationIndex(): number
        static readonly CROSS_PLANE: "cross_plane";
        static readonly PLANE: "plane";
        static readonly EMPTY: "empty";
        static readonly TRIPLE_PLANE: "triple_plane";
        enable: boolean;
    }
    type SymmetryMirror_ = SymmetryMirror;
    interface InjectedBlockExtension extends Internal.InjectedRegistryEntryExtension<Internal.Block> {
        arch$holder(): Internal.Holder<Internal.Block>;
        arch$registryName(): ResourceLocation;
    }
    type InjectedBlockExtension_ = InjectedBlockExtension;
    class PlayerEvent$Clone extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.Player_, arg2: boolean)
        getOriginal(): Internal.Player;
        isWasDeath(): boolean;
        getEntity(): Internal.LivingEntity;
        get original(): Internal.Player
        get wasDeath(): boolean
        get entity(): Internal.LivingEntity
    }
    type PlayerEvent$Clone_ = PlayerEvent$Clone;
    interface Matrix4x3fc {
        abstract mapYXnZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract get4x4(arg0: number[]): number[];
        abstract mapnYnXZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapYnXnZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract getEulerAnglesXYZ(arg0: Vec3f_): Vec3f;
        abstract rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract transformPosition(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract lookAlong(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract negateZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract lookAt(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnYnXnZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m31(): number;
        abstract getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract mapXZY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract fma(arg0: Internal.Matrix4x3fc_, arg1: number, arg2: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract positiveZ(arg0: Vec3f_): Vec3f;
        abstract mapnZnYX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnXnZY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotateZ(arg0: number, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract cofactor3x3(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract cofactor3x3(arg0: Matrix3f_): Matrix3f;
        abstract lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnYZX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract arcball(arg0: number, arg1: Internal.Vector3fc_, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m20(): number;
        abstract obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3fc_, arg5: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract get(arg0: Matrix4f_): Matrix4f;
        abstract mapXnZY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract get4x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract transform(arg0: Vec4f_): Vec4f;
        abstract get4x4(arg0: number[], arg1: number): number[];
        abstract rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnYZnX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract reflect(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m32(): number;
        abstract getScale(arg0: Vec3f_): Vec3f;
        abstract rotateY(arg0: number, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract normal(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnXZY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract getTransposed(arg0: number[]): number[];
        abstract mulOrtho(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract normal(arg0: Matrix3f_): Matrix3f;
        abstract get(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract equals(arg0: Internal.Matrix4x3fc_, arg1: number): boolean;
        abstract mapnXZnY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract getRotation(arg0: Internal.AxisAngle4d_): Internal.AxisAngle4d;
        abstract mapnYXZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mulTranslation(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m21(): number;
        abstract normalize3x3(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract negateX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract isFinite(): boolean;
        abstract get3x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract reflect(arg0: Internal.Quaternionfc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract shadow(arg0: Internal.Vector4fc_, arg1: Internal.Matrix4x3fc_, arg2: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract invert(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m10(): number;
        abstract orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mulComponentWise(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract invertOrtho(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract transformPosition(arg0: Vec3f_): Vec3f;
        abstract scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract sub(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotateX(arg0: number, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract withLookAtUp(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract transformDirection(arg0: Vec3f_): Vec3f;
        abstract translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract lerp(arg0: Internal.Matrix4x3fc_, arg1: number, arg2: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapYnZnX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract get3x4(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract get(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract withLookAtUp(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapYnXZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract scale(arg0: number, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract transpose3x3(arg0: Matrix3f_): Matrix3f;
        abstract scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m22(): number;
        abstract getToAddress(arg0: number): this;
        abstract lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapXnZnY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnZXY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract negateY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m11(): number;
        abstract get4x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapYZX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnXnZnY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapXnYnZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract getTransposed(arg0: number[], arg1: number): number[];
        abstract getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract shadow(arg0: Internal.Vector4fc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m00(): number;
        abstract mapYnZX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract get3x4(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Vec3f_, arg7: Vec3f_): Internal.Matrix4x3f;
        abstract frustumPlane(arg0: number, arg1: Vec4f_): Vec4f;
        abstract mapnZYnX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m12(): number;
        abstract get3x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract normalizedPositiveX(arg0: Vec3f_): Vec3f;
        abstract get(arg0: number[]): number[];
        abstract transformDirection(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract mapZYnX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract getColumn(arg0: number, arg1: Vec3f_): Vec3f;
        abstract get4x4(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract rotateAround(arg0: Internal.Quaternionfc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract get(arg0: number[], arg1: number): number[];
        abstract mapnXYnZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapZYX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnXnYnZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m01(): number;
        abstract invert(arg0: Matrix4f_): Matrix4f;
        abstract getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        abstract mapnYnZnX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnYnZX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract getRow(arg0: number, arg1: Vec4f_): Vec4f;
        abstract getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapnZnXY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapZXnY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract scale(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract properties(): number;
        abstract normalizedPositiveY(arg0: Vec3f_): Vec3f;
        abstract mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract transform(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract lookAtLH(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapYZnX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnZXnY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnZYX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapZnXY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract normalize3x3(arg0: Matrix3f_): Matrix3f;
        abstract rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m02(): number;
        abstract get4x4(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapZnYX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract add(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnXnYZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract normalizedPositiveZ(arg0: Vec3f_): Vec3f;
        abstract mapZXY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract getEulerAnglesZYX(arg0: Vec3f_): Vec3f;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract positiveX(arg0: Vec3f_): Vec3f;
        abstract determinant(): number;
        abstract ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnZnXnY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotateTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapnYXnZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapXZnY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract transpose3x3(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapZnYnX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract mapYXZ(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract origin(arg0: Vec3f_): Vec3f;
        abstract getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapZnXnY(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract m30(): number;
        abstract mapnZnYnX(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract transformAab(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Vec3f_, arg3: Vec3f_): Internal.Matrix4x3f;
        abstract positiveY(arg0: Vec3f_): Vec3f;
        abstract getTranslation(arg0: Vec3f_): Vec3f;
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
    type Matrix4x3fc_ = Matrix4x3fc;
    class BasicPotInteraction extends Internal.PotInteraction {
        constructor(arg0: ResourceLocation_, arg1: Internal.Ingredient_, arg2: boolean, arg3: Internal.Ingredient_, arg4: Internal.Ingredient_, arg5: Internal.ItemStack_, arg6: Internal.ItemStack_, arg7: any_, arg8: Internal.List_<Internal.ItemStack>)
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<Internal.ItemStack>;
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type BasicPotInteraction_ = BasicPotInteraction;
    class SculkPatchConfiguration extends Internal.Record implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.IntProvider_, arg6: number)
        spreadRounds(): number;
        amountPerCharge(): number;
        growthRounds(): number;
        chargeCount(): number;
        catalystChance(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        extraRareGrowths(): Internal.IntProvider;
        spreadAttempts(): number;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.SculkPatchConfiguration>;
    }
    type SculkPatchConfiguration_ = SculkPatchConfiguration;
    class SeaPickleBlock extends Internal.BushBlock implements Internal.SimpleWaterloggedBlock, Internal.BonemealableBlock {
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
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
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
        static isDead(arg0: Internal.BlockState_): boolean;
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
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly MAX_PICKLES: 4;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly PICKLES: Internal.IntegerProperty;
    }
    type SeaPickleBlock_ = SeaPickleBlock;
    class BlazeBurnerBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        spawnParticleBurst(arg0: boolean): void;
        updateBlockState(): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        getHeatLevelFromBlock(): Internal.BlazeBurnerBlock$HeatLevel;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isValidBlockAbove(): boolean;
        isCreativeFuel(arg0: Internal.ItemStack_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isCreative(): boolean;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getActiveFuel(): Internal.BlazeBurnerBlockEntity$FuelType;
        getRemainingBurnTime(): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get heatLevelFromBlock(): Internal.BlazeBurnerBlock$HeatLevel
        get validBlockAbove(): boolean
        get creative(): boolean
        get modelData(): Internal.ModelData
        get activeFuel(): Internal.BlazeBurnerBlockEntity$FuelType
        get remainingBurnTime(): number
        static readonly MAX_HEAT_CAPACITY: 10000;
        static readonly INSERTION_THRESHOLD: 500;
    }
    type BlazeBurnerBlockEntity_ = BlazeBurnerBlockEntity;
    interface ITickTimer {
        abstract getMaxValue(): number;
        abstract getValue(): number;
        get maxValue(): number
        get value(): number
    }
    type ITickTimer_ = ITickTimer;
    interface IRecipesGui {
        abstract showTypes(arg0: Internal.List_<mezz.jei.api.recipe.RecipeType<any>>): void;
        abstract show(arg0: Internal.List_<Internal.IFocus<any>>): void;
        show<V>(arg0: Internal.IFocus_<V>): void;
        abstract getIngredientUnderMouse<T>(arg0: Internal.IIngredientType_<T>): Internal.Optional<T>;
    }
    type IRecipesGui_ = IRecipesGui;
    class HoneyBlock extends Internal.HalfTransparentBlock {
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
        static showSlideParticles(arg0: Internal.Entity_): void;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static showJumpParticles(arg0: Internal.Entity_): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type HoneyBlock_ = HoneyBlock;
    interface SizeClassesMetric {
        abstract normalizeSize(arg0: number): number;
        abstract size2SizeIdx(arg0: number): number;
        abstract pageIdx2size(arg0: number): number;
        abstract sizeIdx2sizeCompute(arg0: number): number;
        abstract pageIdx2sizeCompute(arg0: number): number;
        abstract sizeIdx2size(arg0: number): number;
        abstract pages2pageIdx(arg0: number): number;
        abstract pages2pageIdxFloor(arg0: number): number;
    }
    type SizeClassesMetric_ = SizeClassesMetric;
    class ItemOverride$Predicate {
        constructor(arg0: ResourceLocation_, arg1: number)
        getProperty(): ResourceLocation;
        getValue(): number;
        get property(): ResourceLocation
        get value(): number
    }
    type ItemOverride$Predicate_ = ItemOverride$Predicate;
    class TickEvent$ClientTickEvent extends Internal.TickEvent {
        constructor()
        constructor(arg0: Internal.TickEvent$Phase_)
    }
    type TickEvent$ClientTickEvent_ = TickEvent$ClientTickEvent;
    interface IExtraModelDataProvider extends Internal.IForgeBlockEntity {
        abstract getPersistentData(): Internal.CompoundTag;
        abstract getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        onChunkUnloaded(): void;
        requestModelReload(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        afterDataPacket(oldData: Internal.ExtraModelData_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        onDataPacket(net: Internal.Connection_, pkt: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        abstract getExtraModelData(): Internal.ExtraModelData;
        getRenderBoundingBox(): Internal.AABB;
        get persistentData(): Internal.CompoundTag
        get modelData(): Internal.ModelData
        get extraModelData(): Internal.ExtraModelData
        get renderBoundingBox(): Internal.AABB
    }
    type IExtraModelDataProvider_ = IExtraModelDataProvider;
    class CreativeMotorBlock extends Internal.DirectionalKineticBlock implements Internal.IBE<Internal.CreativeMotorBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.CreativeMotorBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.CreativeMotorBlockEntity>;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.CreativeMotorBlockEntity;
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        getBlockEntityType(): Internal.BlockEntityType<Internal.CreativeMotorBlockEntity>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.CreativeMotorBlockEntity>): void;
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
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockEntityClass(): typeof Internal.CreativeMotorBlockEntity;
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
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockEntityType(): Internal.BlockEntityType<Internal.CreativeMotorBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityClass(): typeof Internal.CreativeMotorBlockEntity
        get mod(): string
    }
    type CreativeMotorBlock_ = CreativeMotorBlock;
    class RegistryAccess$RegistryEntry <T> extends Internal.Record {
        constructor(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: Internal.Registry_<T>)
        key(): Internal.ResourceKey<Internal.Registry<T>>;
        value(): Internal.Registry<T>;
    }
    type RegistryAccess$RegistryEntry_<T> = RegistryAccess$RegistryEntry<T>;
    class WeepingVinesFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        static placeWeepingVinesColumn(arg0: Internal.LevelAccessor_, arg1: Internal.RandomSource_, arg2: Internal.BlockPos$MutableBlockPos_, arg3: number, arg4: number, arg5: number): void;
    }
    type WeepingVinesFeature_ = WeepingVinesFeature;
    class LevelStorageSource {
        constructor(arg0: Internal.Path_, arg1: Internal.Path_, arg2: Internal.DirectoryValidator_, arg3: Internal.DataFixer_)
        getBaseDir(): Internal.Path;
        findLevelCandidates(): Internal.LevelStorageSource$LevelCandidates;
        loadLevelSummaries(arg0: Internal.LevelStorageSource$LevelCandidates_): Internal.CompletableFuture<Internal.List<Internal.LevelSummary>>;
        getBackupPath(): Internal.Path;
        getName(): string;
        getWorldDirValidator(): Internal.DirectoryValidator;
        static createDefault(arg0: Internal.Path_): Internal.LevelStorageSource;
        createAccess(arg0: string): Internal.LevelStorageSource$LevelStorageAccess;
        validateAndCreateAccess(arg0: string): Internal.LevelStorageSource$LevelStorageAccess;
        isNewLevelIdAcceptable(arg0: string): boolean;
        levelExists(arg0: string): boolean;
        static parseValidator(arg0: Internal.Path_): Internal.DirectoryValidator;
        get baseDir(): Internal.Path
        get backupPath(): Internal.Path
        get name(): string
        get worldDirValidator(): Internal.DirectoryValidator
        static readonly ALLOWED_SYMLINKS_CONFIG_NAME: "allowed_symlinks.txt";
    }
    type LevelStorageSource_ = LevelStorageSource;
    class PopsicleItem extends Internal.ConsumableItem {
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
    type PopsicleItem_ = PopsicleItem;
    class EntityRenderersEvent$CreateSkullModels extends Internal.EntityRenderersEvent {
        constructor()
        constructor(arg0: Internal.ImmutableMap$Builder_<Internal.SkullBlock$Type, Internal.SkullModelBase>, arg1: Internal.EntityModelSet_)
        getEntityModelSet(): Internal.EntityModelSet;
        registerSkullModel(arg0: Internal.SkullBlock$Type_, arg1: Internal.SkullModelBase_): void;
        get entityModelSet(): Internal.EntityModelSet
    }
    type EntityRenderersEvent$CreateSkullModels_ = EntityRenderersEvent$CreateSkullModels;
    interface ConditionContainer {
        entityProperties(entity: Internal.LootContext$EntityTarget_, properties: Internal.JsonObject_): this;
        abstract addCondition(arg0: Internal.JsonObject_): this;
        randomChanceWithLooting(chance: number, multiplier: number): this;
        randomChance(chance: number): this;
        killedByPlayer(): this;
        entityScores(entity: Internal.LootContext$EntityTarget_, scores: Internal.Map_<string, any>): this;
        survivesExplosion(): this;
        (arg0: Internal.JsonObject): this;
    }
    type ConditionContainer_ = ConditionContainer;
    class SkeletonHorse extends Internal.AbstractHorse implements Internal.IConvertableHorse {
        constructor(arg0: Internal.EntityType_<Internal.SkeletonHorse>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isTrap(): boolean;
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
        setTrap(arg0: boolean): void;
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
        handler$zff002$addAdditionalSaveData(compoundNBT: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
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
        feedRottenFlesh(player: Internal.Player_, hand: Internal.InteractionHand_, stack: Internal.ItemStack_): void;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        handler$zff000$mobInteract(player: Internal.Player_, hand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
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
        handler$zff002$readAdditionalSaveData(compoundNBT: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
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
        get trap(): boolean
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
        set trap(arg0: boolean)
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
    type SkeletonHorse_ = SkeletonHorse;
    interface BlockBehaviour$StateArgumentPredicate <A> {
        abstract test(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: A): boolean;
        (arg0: Internal.BlockState, arg1: Internal.BlockGetter, arg2: BlockPos, arg3: A): boolean;
    }
    type BlockBehaviour$StateArgumentPredicate_<A> = BlockBehaviour$StateArgumentPredicate<A>;
    class OreFeature extends Internal.Feature<Internal.OreConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.OreConfiguration>)
        static canPlaceOre(arg0: Internal.BlockState_, arg1: Internal.Function_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: Internal.OreConfiguration_, arg4: Internal.OreConfiguration$TargetBlockState_, arg5: Internal.BlockPos$MutableBlockPos_): boolean;
    }
    type OreFeature_ = OreFeature;
    class TatamiMatBlock extends Internal.HorizontalDirectionalBlock {
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
        static readonly PART: Internal.EnumProperty<Internal.BedPart>;
    }
    type TatamiMatBlock_ = TatamiMatBlock;
    abstract class ScreenEvent$Render extends Internal.ScreenEvent {
        constructor()
        getGuiGraphics(): Internal.GuiGraphics;
        getPartialTick(): number;
        getMouseY(): number;
        getMouseX(): number;
        get guiGraphics(): Internal.GuiGraphics
        get partialTick(): number
        get mouseY(): number
        get mouseX(): number
    }
    type ScreenEvent$Render_ = ScreenEvent$Render;
    class ChestMenuSlot {
        constructor(gui: Internal.ChestMenuData_, index: number)
        resetClickHandlers(): void;
        setRightClicked(callback: Internal.ChestMenuClickCallback_): void;
        setDoubleClicked(callback: Internal.ChestMenuClickCallback_): void;
        setShiftRightClicked(callback: Internal.ChestMenuClickCallback_): void;
        clicked(type: Internal.ClickType_, button: number, callback: Internal.ChestMenuClickCallback_, autoHandle: boolean): void;
        setItem(stack: Internal.ItemStack_): void;
        getItem(): Internal.ItemStack;
        setLeftClicked(callback: Internal.ChestMenuClickCallback_): void;
        setMiddleClicked(callback: Internal.ChestMenuClickCallback_): void;
        setShiftLeftClicked(callback: Internal.ChestMenuClickCallback_): void;
        setSwapped(callback: Internal.ChestMenuClickCallback_): void;
        setThrown(callback: Internal.ChestMenuClickCallback_): void;
        set rightClicked(callback: Internal.ChestMenuClickCallback_)
        set doubleClicked(callback: Internal.ChestMenuClickCallback_)
        set shiftRightClicked(callback: Internal.ChestMenuClickCallback_)
        set item(stack: Internal.ItemStack_)
        get item(): Internal.ItemStack
        set leftClicked(callback: Internal.ChestMenuClickCallback_)
        set middleClicked(callback: Internal.ChestMenuClickCallback_)
        set shiftLeftClicked(callback: Internal.ChestMenuClickCallback_)
        set swapped(callback: Internal.ChestMenuClickCallback_)
        set thrown(callback: Internal.ChestMenuClickCallback_)
        clicked: number;
        readonly clickHandlers: Internal.List<Internal.ChestMenuClickHandler>;
        readonly index: number;
        readonly x: number;
        readonly y: number;
        inventory: Internal.InventoryKJS;
        readonly gui: Internal.ChestMenuData;
        inventorySlot: number;
        data: Internal.Map<string, any>;
    }
    type ChestMenuSlot_ = ChestMenuSlot;
    interface VertexSorting {
        abstract sort(arg0: Vec3f_[]): number[];
        byDistance(arg0: number, arg1: number, arg2: number): this;
        byDistance(arg0: Internal.VertexSorting$DistanceFunction_): this;
        byDistance(arg0: Vec3f_): this;
        (arg0: Vec3f[]): number[];
        readonly DISTANCE_TO_ORIGIN: Internal.VertexSorting;
        readonly ORTHOGRAPHIC_Z: Internal.VertexSorting;
    }
    type VertexSorting_ = VertexSorting;
    class Font$DisplayMode extends Internal.Enum<Internal.Font$DisplayMode> {
        static valueOf(arg0: string): Internal.Font$DisplayMode;
        static values(): Internal.Font$DisplayMode[];
        static readonly SEE_THROUGH: Internal.Font$DisplayMode;
        static readonly NORMAL: Internal.Font$DisplayMode;
        static readonly POLYGON_OFFSET: Internal.Font$DisplayMode;
    }
    type Font$DisplayMode_ = Font$DisplayMode | "normal" | "see_through" | "polygon_offset";
    interface ChannelInboundInvoker {
        abstract fireChannelWritabilityChanged(): this;
        abstract fireExceptionCaught(arg0: Internal.Throwable_): this;
        abstract fireChannelUnregistered(): this;
        abstract fireChannelRead(arg0: any): this;
        abstract fireChannelRegistered(): this;
        abstract fireChannelReadComplete(): this;
        abstract fireChannelActive(): this;
        abstract fireChannelInactive(): this;
        abstract fireUserEventTriggered(arg0: any): this;
    }
    type ChannelInboundInvoker_ = ChannelInboundInvoker;
    class RenderTooltipEvent$GatherComponents extends Internal.Event {
        constructor()
        constructor(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: Internal.List_<Internal.Either<Internal.FormattedText, Internal.TooltipComponent>>, arg4: number)
        getMaxWidth(): number;
        getScreenHeight(): number;
        getScreenWidth(): number;
        setMaxWidth(arg0: number): void;
        getTooltipElements(): Internal.List<Internal.Either<Internal.FormattedText, Internal.TooltipComponent>>;
        getItemStack(): Internal.ItemStack;
        get maxWidth(): number
        get screenHeight(): number
        get screenWidth(): number
        set maxWidth(arg0: number)
        get tooltipElements(): Internal.List<Internal.Either<Internal.FormattedText, Internal.TooltipComponent>>
        get itemStack(): Internal.ItemStack
    }
    type RenderTooltipEvent$GatherComponents_ = RenderTooltipEvent$GatherComponents;
    class Dynamic3CommandExceptionType implements Internal.CommandExceptionType {
        constructor(arg0: any_)
        create(arg0: any, arg1: any, arg2: any): Internal.CommandSyntaxException;
        createWithContext(arg0: Internal.ImmutableStringReader_, arg1: any, arg2: any, arg3: any): Internal.CommandSyntaxException;
    }
    type Dynamic3CommandExceptionType_ = Dynamic3CommandExceptionType;
    class Raids extends Internal.SavedData {
        constructor(arg0: Internal.ServerLevel_)
        static load(arg0: Internal.ServerLevel_, arg1: Internal.CompoundTag_): Internal.Raids;
        getNearbyRaid(arg0: BlockPos_, arg1: number): Internal.Raid;
        static getFileId(arg0: Internal.Holder_<Internal.DimensionType>): string;
        createOrExtendRaid(arg0: Internal.ServerPlayer_): Internal.Raid;
        get(arg0: number): Internal.Raid;
        static canJoinRaid(arg0: Internal.Raider_, arg1: Internal.Raid_): boolean;
        tick(): void;
    }
    type Raids_ = Raids;
    class StructureSet extends Internal.Record {
        constructor(arg0: Internal.Holder_<Internal.Structure>, arg1: Internal.StructurePlacement_)
        constructor(arg0: Internal.List_<Internal.StructureSet$StructureSelectionEntry>, arg1: Internal.StructurePlacement_)
        static entry(arg0: Internal.Holder_<Internal.Structure>, arg1: number): Internal.StructureSet$StructureSelectionEntry;
        static entry(arg0: Internal.Holder_<Internal.Structure>): Internal.StructureSet$StructureSelectionEntry;
        placement(): Internal.StructurePlacement;
        structures(): Internal.List<Internal.StructureSet$StructureSelectionEntry>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.StructureSet>>;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.StructureSet>;
    }
    type StructureSet_ = StructureSet | Special.StructureSet;
    class HosePulleyBlock extends Internal.HorizontalKineticBlock implements Internal.IBE<Internal.HosePulleyBlockEntity> {
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.HosePulleyBlockEntity;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.HosePulleyBlockEntity>): void;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        static hasPipeTowards(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
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
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.HosePulleyBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getBlockEntityClass(): typeof Internal.HosePulleyBlockEntity;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.HosePulleyBlockEntity>;
        getBlockEntityType(): Internal.BlockEntityType<Internal.HosePulleyBlockEntity>;
        showCapacityWithAnnotation(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityClass(): typeof Internal.HosePulleyBlockEntity
        get blockEntityType(): Internal.BlockEntityType<Internal.HosePulleyBlockEntity>
    }
    type HosePulleyBlock_ = HosePulleyBlock;
    class ShapelessKubeJSRecipe extends Internal.ShapelessRecipe implements Internal.KubeJSCraftingRecipe {
        constructor(original: Internal.ShapelessRecipe_, ingredientActions: Internal.List_<Internal.IngredientAction>, modifyResult: Internal.ModifyRecipeResultCallback_, stage: string)
        isSpecial(): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<any>;
        kjs$getStage(): string;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        kjs$getModifyResult(): Internal.ModifyRecipeResultCallback;
        getRemainingItems(container: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        kjs$getRemainingItems(container: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        kjs$assemble(container: Internal.CraftingContainer_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        getMod(): string;
        kjs$getIngredientActions(): Internal.List<Internal.IngredientAction>;
        get special(): boolean
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type ShapelessKubeJSRecipe_ = ShapelessKubeJSRecipe;
    class WindmillBearingBlockEntity extends Internal.MechanicalBearingBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        addExceptionToTooltip(arg0: Internal.List_<Internal.Component>): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getMovementModeSlot(): Internal.ValueBoxTransform;
        deserializeNBT(arg0: Internal.Tag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        disassembleForMovement(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get movementModeSlot(): Internal.ValueBoxTransform
        get modelData(): Internal.ModelData
    }
    type WindmillBearingBlockEntity_ = WindmillBearingBlockEntity;
    interface IKeyLockable {
        getKeyStatus(key: Internal.ItemStack_): Internal.IKeyLockable$KeyStatus;
        abstract getPassword(): string;
        abstract setPassword(arg0: string): void;
        shouldShowPassword(): boolean;
        abstract clearPassword(): void;
        onKeyAssigned(level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, newKey: string): void;
        testIfHasCorrectKey(player: Internal.Player_, lockPassword: string, feedbackMessage: boolean, translName: string): boolean;
        getKeyPassword(key: Internal.ItemStack_): string;
        getKeyStatus(key: Internal.ItemStack_, password: string): Internal.IKeyLockable$KeyStatus;
        onPasswordCleared(player: Internal.Player_, pos: BlockPos_): void;
        get password(): string
        set password(arg0: string)
        readonly MAX_ITEM_NAME_LEN: 50;
    }
    type IKeyLockable_ = IKeyLockable;
    class PrioritizeChunkUpdates extends Internal.Enum<Internal.PrioritizeChunkUpdates> implements Internal.OptionEnum {
        static valueOf(arg0: string): Internal.PrioritizeChunkUpdates;
        getKey(): string;
        static byId(arg0: number): Internal.PrioritizeChunkUpdates;
        static values(): Internal.PrioritizeChunkUpdates[];
        getCaption(): Internal.Component;
        getId(): number;
        get key(): string
        get caption(): Internal.Component
        get id(): number
        static readonly NEARBY: Internal.PrioritizeChunkUpdates;
        static readonly NONE: Internal.PrioritizeChunkUpdates;
        static readonly PLAYER_AFFECTED: Internal.PrioritizeChunkUpdates;
    }
    type PrioritizeChunkUpdates_ = "nearby" | PrioritizeChunkUpdates | "player_affected" | "none";
    interface ChannelHandler {
        abstract handlerAdded(arg0: Internal.ChannelHandlerContext_): void;
        /**
         * @deprecated
        */
        abstract exceptionCaught(arg0: Internal.ChannelHandlerContext_, arg1: Internal.Throwable_): void;
        abstract handlerRemoved(arg0: Internal.ChannelHandlerContext_): void;
    }
    type ChannelHandler_ = ChannelHandler;
    interface ShortConsumer extends Internal.Consumer<number>, Internal.IntConsumer {
        abstract accept(arg0: number): void;
        /**
         * @deprecated
        */
        andThen(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        andThen(arg0: Internal.ShortConsumer_): this;
        /**
         * @deprecated
        */
        accept(arg0: any): void;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        andThen(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        (arg0: number): void;
    }
    type ShortConsumer_ = ShortConsumer;
    interface StructurePieceType {
        abstract load(arg0: Internal.StructurePieceSerializationContext_, arg1: Internal.CompoundTag_): Internal.StructurePiece;
        (arg0: Internal.StructurePieceSerializationContext, arg1: Internal.CompoundTag): Internal.StructurePiece_;
        readonly STRONGHOLD_ROOM_CROSSING: Internal.StructurePieceType;
        readonly STRONGHOLD_FILLER_CORRIDOR: Internal.StructurePieceType;
        readonly STRONGHOLD_PORTAL_ROOM: Internal.StructurePieceType;
        readonly END_CITY_PIECE: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_BRIDGE_END_FILLER: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_CORRIDOR_STAIRS: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_SIMPLE_ROOM: Internal.StructurePieceType;
        readonly STRONGHOLD_LEFT_TURN: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_WING_ROOM: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_STALK_ROOM: Internal.StructurePieceType;
        readonly MINE_SHAFT_ROOM: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_CORRIDOR_T_BALCONY: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_SIMPLE_TOP_ROOM: Internal.StructurePieceType;
        readonly MINE_SHAFT_CORRIDOR: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_DOUBLE_Y_ROOM: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_BUILDING: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_PENTHOUSE: Internal.StructurePieceType;
        readonly JUNGLE_PYRAMID_PIECE: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_BRIDGE_CROSSING: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_MONSTER_THRONE: Internal.StructurePieceType;
        readonly JIGSAW: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_RIGHT_TURN: Internal.StructurePieceType;
        readonly STRONGHOLD_START: Internal.StructurePieceType;
        readonly STRONGHOLD_PRISON_HALL: Internal.StructurePieceType;
        readonly RUINED_PORTAL: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_START: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_DOUBLE_YZ_ROOM: Internal.StructurePieceType;
        readonly SHIPWRECK_PIECE: Internal.StructurePieceType;
        readonly SWAMPLAND_HUT: Internal.StructurePieceType;
        readonly STRONGHOLD_STRAIGHT: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_DOUBLE_X_ROOM: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_ENTRY_ROOM: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_CORE_ROOM: Internal.StructurePieceType;
        readonly STRONGHOLD_CHEST_CORRIDOR: Internal.StructurePieceType;
        readonly STRONGHOLD_LIBRARY: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_DOUBLE_XY_ROOM: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_DOUBLE_Z_ROOM: Internal.StructurePieceType;
        readonly WOODLAND_MANSION_PIECE: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_CROSSING: Internal.StructurePieceType;
        readonly OCEAN_RUIN: Internal.StructurePieceType;
        readonly MINE_SHAFT_CROSSING: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_STAIRS_ROOM: Internal.StructurePieceType;
        readonly STRONGHOLD_RIGHT_TURN: Internal.StructurePieceType;
        readonly STRONGHOLD_STAIRS_DOWN: Internal.StructurePieceType;
        readonly NETHER_FOSSIL: Internal.StructurePieceType;
        readonly STRONGHOLD_STRAIGHT_STAIRS_DOWN: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_ROOM_CROSSING: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_BRIDGE_STRAIGHT: Internal.StructurePieceType;
        readonly IGLOO: Internal.StructurePieceType;
        readonly STRONGHOLD_FIVE_CROSSING: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_ENTRANCE: Internal.StructurePieceType;
        readonly DESERT_PYRAMID_PIECE: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR: Internal.StructurePieceType;
        readonly MINE_SHAFT_STAIRS: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_LEFT_TURN: Internal.StructurePieceType;
        readonly BURIED_TREASURE_PIECE: Internal.StructurePieceType;
    }
    type StructurePieceType_ = Special.StructurePiece | StructurePieceType;
    class NetworkEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Supplier_<Internal.NetworkEvent$Context>)
        getLoginIndex(): number;
        getPayload(): Internal.FriendlyByteBuf;
        getSource(): Internal.Supplier<Internal.NetworkEvent$Context>;
        get loginIndex(): number
        get payload(): Internal.FriendlyByteBuf
        get source(): Internal.Supplier<Internal.NetworkEvent$Context>
    }
    type NetworkEvent_ = NetworkEvent;
    class EnderChestBlockEntity extends Internal.BlockEntity implements Internal.LidBlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Internal.Player_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getOpenNess(arg0: number): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static lidAnimateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.EnderChestBlockEntity_): void;
        startOpen(arg0: Internal.Player_): void;
        stillValid(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        recheckOpen(): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        get modelData(): Internal.ModelData
        get renderBoundingBox(): Internal.AABB
    }
    type EnderChestBlockEntity_ = EnderChestBlockEntity;
    class SpikeFeature extends Internal.Feature<Internal.SpikeConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.SpikeConfiguration>)
        static getSpikesForLevel(arg0: Internal.WorldGenLevel_): Internal.List<Internal.SpikeFeature$EndSpike>;
        static readonly NUMBER_OF_SPIKES: 10;
    }
    type SpikeFeature_ = SpikeFeature;
    class SupportFaceShape extends Internal.Enum<Internal.SupportFaceShape> implements Internal.StringRepresentable {
        static values(): Internal.SupportFaceShape[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSwitched(): this;
        getSerializedName(): string;
        isHidden(): boolean;
        static valueOf(arg0: string): Internal.SupportFaceShape;
        get switched(): Internal.SupportFaceShape
        get serializedName(): string
        get hidden(): boolean
        static readonly BIG: Internal.SupportFaceShape;
        static readonly SMALL: Internal.SupportFaceShape;
        static readonly HIDDEN: Internal.SupportFaceShape;
    }
    type SupportFaceShape_ = "small" | SupportFaceShape | "big" | "hidden";
    interface TypeRewriteRule {
        seq(arg0: Internal.List_<Internal.TypeRewriteRule>): this;
        everywhere(arg0: Internal.TypeRewriteRule_, arg1: Internal.PointFreeRule_, arg2: boolean, arg3: boolean): this;
        nop(): this;
        seq(arg0: Internal.TypeRewriteRule_, arg1: Internal.TypeRewriteRule_): this;
        seq(arg0: Internal.TypeRewriteRule_, ...arg1: Internal.TypeRewriteRule_[]): this;
        abstract rewrite<A>(arg0: com.mojang.datafixers.types.Type_<A>): Internal.Optional<Internal.RewriteResult<A, any>>;
        checkOnce(arg0: Internal.TypeRewriteRule_, arg1: Internal.Consumer_<com.mojang.datafixers.types.Type<any>>): this;
        orElse(arg0: Internal.TypeRewriteRule_, arg1: Internal.Supplier_<Internal.TypeRewriteRule>): this;
        all(arg0: Internal.TypeRewriteRule_, arg1: boolean, arg2: boolean): this;
        once(arg0: Internal.TypeRewriteRule_): this;
        orElse(arg0: Internal.TypeRewriteRule_, arg1: Internal.TypeRewriteRule_): this;
        ifSame<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: Internal.RewriteResult_<B, any>): this;
        one(arg0: Internal.TypeRewriteRule_): this;
        (arg0: com.mojang.datafixers.types.Type<A>): Internal.Optional_<Internal.RewriteResult<A, any>>;
    }
    type TypeRewriteRule_ = TypeRewriteRule;
    interface InjectedLiquidBlockExtension {
        arch$getFluid(): Internal.FlowingFluid;
    }
    type InjectedLiquidBlockExtension_ = InjectedLiquidBlockExtension;
    class FluidBucketItemBuilder extends Internal.ItemBuilder {
        constructor(b: Internal.FluidBuilder_)
        createObject(): Internal.BucketItem;
        readonly fluidBuilder: Internal.FluidBuilder;
    }
    type FluidBucketItemBuilder_ = FluidBucketItemBuilder;
    class SplashPotionItem extends Internal.ThrowablePotionItem {
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
    type SplashPotionItem_ = SplashPotionItem;
    interface CriterionTrigger <T extends Internal.CriterionTriggerInstance> {
        abstract getId(): ResourceLocation;
        abstract removePlayerListeners(arg0: Internal.PlayerAdvancements_): void;
        abstract createInstance(arg0: Internal.JsonObject_, arg1: Internal.DeserializationContext_): T;
        abstract addPlayerListener(arg0: Internal.PlayerAdvancements_, arg1: Internal.CriterionTrigger$Listener_<T>): void;
        abstract removePlayerListener(arg0: Internal.PlayerAdvancements_, arg1: Internal.CriterionTrigger$Listener_<T>): void;
        get id(): ResourceLocation
    }
    type CriterionTrigger_<T extends Internal.CriterionTriggerInstance> = CriterionTrigger<T>;
    class ItemOverrides {
        constructor(arg0: Internal.ModelBaker_, arg1: Internal.BlockModel_, arg2: Internal.List_<Internal.ItemOverride>)
        constructor(arg0: Internal.ModelBaker_, arg1: Internal.UnbakedModel_, arg2: Internal.List_<Internal.ItemOverride>, arg3: Internal.Function_<Internal.Material, Internal.TextureAtlasSprite>)
        getOverrides(): Internal.ImmutableList<Internal.ItemOverrides$BakedOverride>;
        resolve(arg0: Internal.BakedModel_, arg1: Internal.ItemStack_, arg2: Internal.ClientLevel_, arg3: Internal.LivingEntity_, arg4: number): Internal.BakedModel;
        get overrides(): Internal.ImmutableList<Internal.ItemOverrides$BakedOverride>
        static readonly EMPTY: Internal.ItemOverrides;
        static readonly NO_OVERRIDE: number;
    }
    type ItemOverrides_ = ItemOverrides;
    interface FunctionFactory$FuncSupplier {
        abstract create(arg0: Internal.Unit_[]): Internal.Unit;
        (arg0: Internal.Unit[]): Internal.Unit_;
    }
    type FunctionFactory$FuncSupplier_ = FunctionFactory$FuncSupplier;
    class DepotBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getHeldItem(): Internal.ItemStack;
        get modelData(): Internal.ModelData
        get heldItem(): Internal.ItemStack
    }
    type DepotBlockEntity_ = DepotBlockEntity;
    class MobSpawnSettings {
        getCreatureProbability(): number;
        getMobs(arg0: Internal.MobCategory_): Internal.WeightedRandomList<Internal.MobSpawnSettings$SpawnerData>;
        getEntityTypes(): Internal.Set<Internal.EntityType<any>>;
        getSpawnerTypes(): Internal.Set<Internal.MobCategory>;
        getMobSpawnCost(arg0: Internal.EntityType_<any>): Internal.MobSpawnSettings$MobSpawnCost;
        get creatureProbability(): number
        get entityTypes(): Internal.Set<Internal.EntityType<any>>
        get spawnerTypes(): Internal.Set<Internal.MobCategory>
        static readonly EMPTY_MOB_LIST: Internal.WeightedRandomList<Internal.MobSpawnSettings$SpawnerData>;
        static readonly EMPTY: Internal.MobSpawnSettings;
        static readonly CODEC: Internal.MapCodec<Internal.MobSpawnSettings>;
    }
    type MobSpawnSettings_ = MobSpawnSettings;
    class CakeRegistry$CakeType extends Internal.BlockType {
        constructor(name: ResourceLocation_, cake: Internal.Block_)
        readonly cake: Internal.Block;
    }
    type CakeRegistry$CakeType_ = CakeRegistry$CakeType;
    interface LevelWriter {
        abstract destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_, arg3: number): boolean;
        setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number): boolean;
        abstract setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number, arg3: number): boolean;
        addFreshEntity(arg0: Internal.Entity_): boolean;
        abstract removeBlock(arg0: BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean): boolean;
    }
    type LevelWriter_ = LevelWriter;
    class ResourceKeyArgument$Info <T> implements Internal.ArgumentTypeInfo<Internal.ResourceKeyArgument<T>, Internal.ResourceKeyArgument$Info$Template<>> {
        constructor()
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.ResourceKeyArgument_<T>): Internal.ResourceKeyArgument$Info$Template<>;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToJson(arg0: Internal.ResourceKeyArgument$Info$Template_<>, arg1: Internal.JsonObject_): void;
        serializeToNetwork(arg0: Internal.ResourceKeyArgument$Info$Template_<>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
    }
    type ResourceKeyArgument$Info_<T> = ResourceKeyArgument$Info<T>;
    interface RiderShieldingMount {
        abstract getRiderShieldingHeight(): number;
        get riderShieldingHeight(): number
        (): number;
    }
    type RiderShieldingMount_ = RiderShieldingMount;
    interface Channel extends Internal.Closeable {
        abstract isOpen(): boolean;
        abstract close(): void;
        get open(): boolean
    }
    type Channel_ = Channel;
    abstract class SimpleBlock extends Internal.HorizontalDirectionalBlock implements Internal.SimpleWaterloggedBlock {
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
    type SimpleBlock_ = SimpleBlock;
    class Context {
        static reportError(cx: Internal.Context_, message: string, lineno: number, lineSource: string, lineOffset: number, sourceName: string): void;
        setMaximumInterpreterStackDepth(max: number): void;
        getTypeWrappers(): Internal.TypeWrappers;
        setProperty(key: string, value: any): void;
        static javaToJS(cx: Internal.Context_, value: any, scope: Internal.Scriptable_): any;
        initSafeStandardObjects(scope: Internal.ScriptableObject_): Internal.Scriptable;
        static reportRuntimeError(cx: Internal.Context_, message: string, sourceName: string, lineno: number, lineSource: string, lineOffset: number): Internal.EvaluatorException;
        setApplicationClassLoader(loader: Internal.ClassLoader_): void;
        putThreadLocal(key: any, value: any): void;
        setGenerateObserverCount(generateObserverCount: boolean): void;
        static enter(): Internal.Context;
        static reportRuntimeError1(messageId: string, arg1: any, cx: Internal.Context_): Internal.EvaluatorException;
        getClassShutter(): Internal.ClassShutter;
        createClassLoader(parent: Internal.ClassLoader_): Internal.GeneratedClassLoader;
        evaluateReader(scope: Internal.Scriptable_, in_: Internal.Reader_, sourceName: string, lineno: number, securityDomain: any): any;
        newObject(scope: Internal.Scriptable_): Internal.Scriptable;
        static getSourcePositionFromStack(cx: Internal.Context_, linep: number[]): string;
        newObject(scope: Internal.Scriptable_, constructorName: string, args: any[]): Internal.Scriptable;
        getInstructionObserverThreshold(): number;
        getProperty(key: string): any;
        getThreadLocal(key: any): any;
        wrapCustomJavaToJs(javaObject: any): Internal.CustomJavaToJsWrapper;
        hasTypeWrappers(): boolean;
        getRegExp(): Internal.RegExp;
        storeScriptable(value: Internal.Scriptable_): void;
        newArray(scope: Internal.Scriptable_, elements: any[]): Internal.Scriptable;
        getErrorReporter(): Internal.ErrorReporter;
        initSafeStandardObjects(): Internal.ScriptableObject;
        addCustomJavaToJsWrapper<T>(predicate: Internal.Predicate_<T>, provider: Internal.CustomJavaToJsWrapperProvider_<T>): void;
        static reportRuntimeError4(messageId: string, arg1: any, arg2: any, arg3: any, arg4: any, cx: Internal.Context_): Internal.EvaluatorException;
        getImplementationVersion(): string;
        static throwAsScriptRuntimeEx(e: Internal.Throwable_, cx: Internal.Context_): Internal.RuntimeException;
        setWrapFactory(wrapFactory: Internal.WrapFactory_): void;
        getRemapper(): Internal.Remapper;
        initStandardObjects(scope: Internal.ScriptableObject_, sealed: boolean): Internal.ScriptableObject;
        initStandardObjects(): Internal.ScriptableObject;
        lastStoredScriptable(): Internal.Scriptable;
        initStandardObjects(scope: Internal.ScriptableObject_): Internal.Scriptable;
        setRemapper(remapper: Internal.Remapper_): void;
        compileString(source: string, sourceName: string, lineno: number, securityDomain: any): Internal.Script;
        doTopCall(scope: Internal.Scriptable_, callable: dev.latvian.mods.rhino.Callable_, thisObj: Internal.Scriptable_, args: any[], isTopLevelStrict: boolean): any;
        newClassSerialNumber(): number;
        callSync(callable: dev.latvian.mods.rhino.Callable_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        static reportRuntimeError(message: string, cx: Internal.Context_): Internal.EvaluatorException;
        initSafeStandardObjects(scope: Internal.ScriptableObject_, sealed: boolean): Internal.ScriptableObject;
        static reportError(cx: Internal.Context_, message: string): void;
        static reportWarning(cx: Internal.Context_, message: string, sourceName: string, lineno: number, lineSource: string, lineOffset: number): void;
        addToScope(scope: Internal.Scriptable_, name: string, value: any): void;
        static reportRuntimeError2(messageId: string, arg1: any, arg2: any, cx: Internal.Context_): Internal.EvaluatorException;
        getMaximumInterpreterStackDepth(): number;
        static reportRuntimeError0(messageId: string, cx: Internal.Context_): Internal.EvaluatorException;
        static getUndefinedValue(): any;
        newObject(scope: Internal.Scriptable_, constructorName: string): Internal.Scriptable;
        setTopCall(scope: Internal.Scriptable_): void;
        evaluateString(scope: Internal.Scriptable_, source: string, sourceName: string, lineno: number, securityDomain: any): any;
        getProperty<T>(key: string, def: T): T;
        setInstructionObserverThreshold(threshold: number): void;
        getTopCallOrThrow(): Internal.Scriptable;
        static reportRuntimeError3(messageId: string, arg1: any, arg2: any, arg3: any, cx: Internal.Context_): Internal.EvaluatorException;
        removeThreadLocal(key: any): void;
        isStrictMode(): boolean;
        static jsToJava(cx: Internal.Context_, value: any, desiredType: typeof any): any;
        getWrapFactory(): Internal.WrapFactory;
        compileReader(in_: Internal.Reader_, sourceName: string, lineno: number, securityDomain: any): Internal.Script;
        setClassShutter(shutter: Internal.ClassShutter_): void;
        static reportWarning(message: string, cx: Internal.Context_): void;
        hasTopCallScope(): boolean;
        getTopCallScope(): Internal.Scriptable;
        newArray(scope: Internal.Scriptable_, length: number): Internal.Scriptable;
        getApplicationClassLoader(): Internal.ClassLoader;
        addCustomJavaToJsWrapper<T>(type: T, provider: Internal.CustomJavaToJsWrapperProvider_<T>): void;
        set maximumInterpreterStackDepth(max: number)
        get typeWrappers(): Internal.TypeWrappers
        set applicationClassLoader(loader: Internal.ClassLoader_)
        set generateObserverCount(generateObserverCount: boolean)
        get classShutter(): Internal.ClassShutter
        get instructionObserverThreshold(): number
        get regExp(): Internal.RegExp
        get errorReporter(): Internal.ErrorReporter
        get implementationVersion(): string
        set wrapFactory(wrapFactory: Internal.WrapFactory_)
        get remapper(): Internal.Remapper
        set remapper(remapper: Internal.Remapper_)
        get maximumInterpreterStackDepth(): number
        get undefinedValue(): any
        set topCall(scope: Internal.Scriptable_)
        set instructionObserverThreshold(threshold: number)
        get topCallOrThrow(): Internal.Scriptable
        get strictMode(): boolean
        get wrapFactory(): Internal.WrapFactory
        set classShutter(shutter: Internal.ClassShutter_)
        get topCallScope(): Internal.Scriptable
        get applicationClassLoader(): Internal.ClassLoader
        readonly lock: any;
        generateObserverCount: boolean;
    }
    type Context_ = Context;
    class WaterWheelBlock extends Internal.DirectionalKineticBlock implements Internal.IBE<Internal.WaterWheelBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.WaterWheelBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
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
        static getSpeedRange(): Internal.Couple<number>;
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
        getBlockEntityType(): Internal.BlockEntityType<Internal.WaterWheelBlockEntity>;
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
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.WaterWheelBlockEntity>;
        getBlockEntityClass(): typeof Internal.WaterWheelBlockEntity;
        showCapacityWithAnnotation(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.WaterWheelBlockEntity;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.WaterWheelBlockEntity>): void;
        set lightEmission(v: number)
        get speedRange(): Internal.Couple<number>
        set destroySpeed(v: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.WaterWheelBlockEntity>
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityClass(): typeof Internal.WaterWheelBlockEntity
    }
    type WaterWheelBlock_ = WaterWheelBlock;
    abstract class LootEventJS extends Internal.EventJS {
        constructor(c: Internal.Map_<ResourceLocation, Internal.JsonElement>)
        removeAll(): void;
        modify(id: ResourceLocation_, b: Internal.Consumer_<Internal.LootBuilder>): void;
        addJson(id: ResourceLocation_, json: Internal.JsonObject_): void;
        abstract getType(): string;
        abstract getDirectory(): string;
        get type(): string
        get directory(): string
    }
    type LootEventJS_ = LootEventJS;
    interface BlockSource extends Internal.Position {
        abstract z(): number;
        abstract getPos(): BlockPos;
        abstract getLevel(): Internal.ServerLevel;
        abstract getEntity<T extends Internal.BlockEntity>(): T;
        abstract getBlockState(): Internal.BlockState;
        abstract y(): number;
        abstract x(): number;
        get pos(): BlockPos
        get level(): Internal.ServerLevel
        get entity(): T
        get blockState(): Internal.BlockState
    }
    type BlockSource_ = BlockSource;
    class BezierTrackPointLocation extends Internal.Record {
        constructor(curveTarget: BlockPos_, segment: number)
        curveTarget(): BlockPos;
        segment(): number;
    }
    type BezierTrackPointLocation_ = BezierTrackPointLocation;
    class MapColor$Brightness extends Internal.Enum<Internal.MapColor$Brightness> {
        static byId(arg0: number): Internal.MapColor$Brightness;
        static values(): Internal.MapColor$Brightness[];
        static valueOf(arg0: string): Internal.MapColor$Brightness;
        static readonly LOW: Internal.MapColor$Brightness;
        static readonly LOWEST: Internal.MapColor$Brightness;
        readonly id: number;
        readonly modifier: number;
        static readonly NORMAL: Internal.MapColor$Brightness;
        static readonly HIGH: Internal.MapColor$Brightness;
    }
    type MapColor$Brightness_ = "normal" | "high" | "low" | "lowest" | MapColor$Brightness;
    class MultipartBlockStateGenerator$Part {
        constructor()
        model(s: string): Internal.VariantBlockStateGenerator$Model;
        toJson(): Internal.JsonObject;
    }
    type MultipartBlockStateGenerator$Part_ = MultipartBlockStateGenerator$Part;
    class PoiType extends Internal.Record {
        constructor(arg0: Internal.Set_<Internal.BlockState>, arg1: number, arg2: number)
        maxTickets(): number;
        is(arg0: Internal.BlockState_): boolean;
        matchingStates(): Internal.Set<Internal.BlockState>;
        validRange(): number;
        static readonly NONE: Internal.Predicate<Internal.Holder<Internal.PoiType>>;
    }
    type PoiType_ = Special.PointOfInterestType | PoiType;
    interface SecureRandomParameters {
    }
    type SecureRandomParameters_ = SecureRandomParameters;
    class ThreadedLevelLightEngine extends Internal.LevelLightEngine implements Internal.AutoCloseable {
        constructor(arg0: Internal.LightChunkGetter_, arg1: any_, arg2: boolean, arg3: any_<Internal.Runnable>, arg4: Internal.ProcessorHandle_<any>)
        lightChunk(arg0: Internal.ChunkAccess_, arg1: boolean): Internal.CompletableFuture<Internal.ChunkAccess>;
        close(): void;
        initializeLight(arg0: Internal.ChunkAccess_, arg1: boolean): Internal.CompletableFuture<Internal.ChunkAccess>;
        updateSectionStatus(arg0: BlockPos_, arg1: boolean): void;
        tryScheduleUpdate(): void;
        static readonly DEFAULT_BATCH_SIZE: 1000;
    }
    type ThreadedLevelLightEngine_ = ThreadedLevelLightEngine;
    class Phantom extends Internal.FlyingMob implements Internal.Enemy {
        constructor(arg0: Internal.EntityType_<Internal.Phantom>, arg1: Internal.Level_)
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
        getPhantomSize(): number;
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
        setPhantomSize(arg0: number): void;
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
        isFlapping(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getUniqueFlapTickOffset(): number;
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
        get phantomSize(): number
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
        set phantomSize(arg0: number)
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get flapping(): boolean
        get uniqueFlapTickOffset(): number
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
        static readonly TICKS_PER_FLAP: 25;
        static readonly FLAP_DEGREES_PER_TICK: 7.448451;
    }
    type Phantom_ = Phantom;
    class DataFetcher$Task <T> {
        reset(): void;
    }
    type DataFetcher$Task_<T> = DataFetcher$Task<T>;
    interface DynamicRecipeComponent$Factory {
        abstract create(arg0: Internal.Context_, arg1: Internal.Scriptable_, arg2: Internal.Map_<string, any>): Internal.RecipeComponent<any>;
        (arg0: Internal.Context, arg1: Internal.Scriptable, arg2: Internal.Map<string, any>): Internal.RecipeComponent_<any>;
    }
    type DynamicRecipeComponent$Factory_ = DynamicRecipeComponent$Factory;
    interface IExtensibleEnum {
        createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        /**
         * @deprecated
        */
        init(): void;
    }
    type IExtensibleEnum_ = IExtensibleEnum;
    class WalkTarget {
        constructor(arg0: Internal.Entity_, arg1: number, arg2: number)
        constructor(arg0: Internal.PositionTracker_, arg1: number, arg2: number)
        constructor(arg0: BlockPos_, arg1: number, arg2: number)
        constructor(arg0: Vec3d_, arg1: number, arg2: number)
        getCloseEnoughDist(): number;
        getSpeedModifier(): number;
        getTarget(): Internal.PositionTracker;
        get closeEnoughDist(): number
        get speedModifier(): number
        get target(): Internal.PositionTracker
    }
    type WalkTarget_ = WalkTarget;
    interface CompletionStage <T> {
        abstract runAfterEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<void>;
        abstract thenCombineAsync<U, V>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiFunction_<T, U, V>): Internal.CompletionStage<V>;
        abstract whenCompleteAsync(arg0: Internal.BiConsumer_<T, Internal.Throwable>, arg1: Internal.Executor_): this;
        abstract thenAcceptBothAsync<U>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiConsumer_<T, U>, arg2: Internal.Executor_): Internal.CompletionStage<void>;
        abstract whenCompleteAsync(arg0: Internal.BiConsumer_<T, Internal.Throwable>): this;
        abstract thenAcceptBoth<U>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiConsumer_<T, U>): Internal.CompletionStage<void>;
        abstract thenComposeAsync<U>(arg0: Internal.Function_<T, Internal.CompletionStage<U>>): Internal.CompletionStage<U>;
        abstract thenRunAsync(arg0: Internal.Runnable_, arg1: Internal.Executor_): Internal.CompletionStage<void>;
        abstract handleAsync<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>, arg1: Internal.Executor_): Internal.CompletionStage<U>;
        abstract whenComplete(arg0: Internal.BiConsumer_<T, Internal.Throwable>): this;
        abstract applyToEitherAsync<U>(arg0: Internal.CompletionStage_<T>, arg1: Internal.Function_<T, U>, arg2: Internal.Executor_): Internal.CompletionStage<U>;
        abstract thenCombine<U, V>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiFunction_<T, U, V>): Internal.CompletionStage<V>;
        abstract runAfterBoth(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<void>;
        abstract thenCombineAsync<U, V>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiFunction_<T, U, V>, arg2: Internal.Executor_): Internal.CompletionStage<V>;
        abstract runAfterBothAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<void>;
        abstract thenApply<U>(arg0: Internal.Function_<T, U>): Internal.CompletionStage<U>;
        abstract applyToEitherAsync<U>(arg0: Internal.CompletionStage_<T>, arg1: Internal.Function_<T, U>): Internal.CompletionStage<U>;
        exceptionallyComposeAsync(arg0: Internal.Function_<Internal.Throwable, Internal.CompletionStage<T>>, arg1: Internal.Executor_): this;
        exceptionallyCompose(arg0: Internal.Function_<Internal.Throwable, Internal.CompletionStage<T>>): this;
        abstract thenApplyAsync<U>(arg0: Internal.Function_<T, U>, arg1: Internal.Executor_): Internal.CompletionStage<U>;
        abstract thenRunAsync(arg0: Internal.Runnable_): Internal.CompletionStage<void>;
        abstract acceptEitherAsync(arg0: Internal.CompletionStage_<T>, arg1: Internal.Consumer_<T>, arg2: Internal.Executor_): Internal.CompletionStage<void>;
        abstract runAfterEither(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<void>;
        exceptionallyComposeAsync(arg0: Internal.Function_<Internal.Throwable, Internal.CompletionStage<T>>): this;
        abstract runAfterEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_, arg2: Internal.Executor_): Internal.CompletionStage<void>;
        abstract acceptEitherAsync(arg0: Internal.CompletionStage_<T>, arg1: Internal.Consumer_<T>): Internal.CompletionStage<void>;
        abstract runAfterBothAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_, arg2: Internal.Executor_): Internal.CompletionStage<void>;
        abstract toCompletableFuture(): Internal.CompletableFuture<T>;
        abstract thenAcceptAsync(arg0: Internal.Consumer_<T>): Internal.CompletionStage<void>;
        abstract handleAsync<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>): Internal.CompletionStage<U>;
        abstract thenComposeAsync<U>(arg0: Internal.Function_<T, Internal.CompletionStage<U>>, arg1: Internal.Executor_): Internal.CompletionStage<U>;
        abstract thenRun(arg0: Internal.Runnable_): Internal.CompletionStage<void>;
        abstract thenAccept(arg0: Internal.Consumer_<T>): Internal.CompletionStage<void>;
        abstract thenCompose<U>(arg0: Internal.Function_<T, Internal.CompletionStage<U>>): Internal.CompletionStage<U>;
        abstract exceptionally(arg0: Internal.Function_<Internal.Throwable, T>): this;
        abstract thenApplyAsync<U>(arg0: Internal.Function_<T, U>): Internal.CompletionStage<U>;
        exceptionallyAsync(arg0: Internal.Function_<Internal.Throwable, T>): this;
        exceptionallyAsync(arg0: Internal.Function_<Internal.Throwable, T>, arg1: Internal.Executor_): this;
        abstract applyToEither<U>(arg0: Internal.CompletionStage_<T>, arg1: Internal.Function_<T, U>): Internal.CompletionStage<U>;
        abstract thenAcceptAsync(arg0: Internal.Consumer_<T>, arg1: Internal.Executor_): Internal.CompletionStage<void>;
        abstract handle<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>): Internal.CompletionStage<U>;
        abstract thenAcceptBothAsync<U>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiConsumer_<T, U>): Internal.CompletionStage<void>;
        abstract acceptEither(arg0: Internal.CompletionStage_<T>, arg1: Internal.Consumer_<T>): Internal.CompletionStage<void>;
    }
    type CompletionStage_<T> = CompletionStage<T>;
    class ChiseledBookShelfBlockEntity extends Internal.BlockEntity implements Internal.Container {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Internal.Player_): void;
        static tryClear(arg0: any): void;
        getLastInteractedSlot(): number;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        setChanged(): void;
        onLoad(): void;
        getContainerSize(): number;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        getItem(arg0: number): Internal.ItemStack;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        count(ingredient: Internal.Ingredient_): number;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        startOpen(arg0: Internal.Player_): void;
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
        stillValid(arg0: Internal.Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get lastInteractedSlot(): number
        get slots(): number
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        get renderBoundingBox(): Internal.AABB
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get modelData(): Internal.ModelData
        get mutable(): boolean
        static readonly MAX_BOOKS_IN_STORAGE: 6;
    }
    type ChiseledBookShelfBlockEntity_ = ChiseledBookShelfBlockEntity;
    abstract class InventoryBlock extends Internal.BaseEntityBlock {
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
    type InventoryBlock_ = InventoryBlock;
    /**
     * @deprecated
    */
    class SolidPredicate extends Internal.StateTestingPredicate {
        constructor(arg0: Vec3i_)
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
        static readonly CODEC: Internal.Codec<Internal.SolidPredicate>;
    }
    type SolidPredicate_ = SolidPredicate;
    class ConnectionProtocol extends Internal.Enum<Internal.ConnectionProtocol> implements Internal.BundlerInfo$Provider {
        static getProtocolForPacket(arg0: Internal.Packet_<any>): Internal.ConnectionProtocol;
        getBundlerInfo(arg0: Internal.PacketFlow_): Internal.BundlerInfo;
        static values(): Internal.ConnectionProtocol[];
        getPacketId(arg0: Internal.PacketFlow_, arg1: Internal.Packet_<any>): number;
        getPacketsByIds(arg0: Internal.PacketFlow_): Internal.Int2ObjectMap<Internal.Packet<any>>;
        static valueOf(arg0: string): Internal.ConnectionProtocol;
        createPacket(arg0: Internal.PacketFlow_, arg1: number, arg2: Internal.FriendlyByteBuf_): Internal.Packet<any>;
        getId(): number;
        static getById(arg0: number): Internal.ConnectionProtocol;
        get id(): number
        static readonly NOT_REGISTERED: -1;
        static readonly STATUS: Internal.ConnectionProtocol;
        static readonly HANDSHAKING: Internal.ConnectionProtocol;
        static readonly LOGIN: Internal.ConnectionProtocol;
        static readonly PLAY: Internal.ConnectionProtocol;
    }
    type ConnectionProtocol_ = "login" | ConnectionProtocol | "status" | "play" | "handshaking";
    class StructureTransform {
        constructor(arg0: BlockPos_, arg1: number, arg2: number, arg3: number)
        constructor(arg0: BlockPos_, arg1: Internal.Direction$Axis_, arg2: Internal.Rotation_, arg3: Internal.Mirror_)
        apply(arg0: BlockPos_): BlockPos;
        static fromBuffer(arg0: Internal.FriendlyByteBuf_): Internal.StructureTransform;
        apply(arg0: Internal.BlockState_): Internal.BlockState;
        apply(arg0: Vec3d_): Vec3d;
        applyWithoutOffset(arg0: BlockPos_): BlockPos;
        applyWithoutOffset(arg0: Vec3d_): Vec3d;
        rotateFacing(arg0: Internal.Direction_): Internal.Direction;
        writeToBuffer(arg0: Internal.FriendlyByteBuf_): void;
        mirrorFacing(arg0: Internal.Direction_): Internal.Direction;
        apply(arg0: Internal.BlockEntity_): void;
        applyWithoutOffsetUncentered(arg0: Vec3d_): Vec3d;
        rotateAxis(arg0: Internal.Direction$Axis_): Internal.Direction$Axis;
        rotationAxis: Internal.Direction$Axis;
        mirror: Internal.Mirror;
        offset: BlockPos;
        rotation: Internal.Rotation;
        angle: number;
    }
    type StructureTransform_ = StructureTransform;
    class SmithingTableBlock extends Internal.CraftingTableBlock {
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
    type SmithingTableBlock_ = SmithingTableBlock;
    class GobletBlock extends Internal.WaterBlock implements Internal.EntityBlock {
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
    }
    type GobletBlock_ = GobletBlock;
    class BlockIDPredicate$PropertyObject extends Internal.Record {
        constructor(property: Internal.Property_<any>, value: any)
        value(): any;
        property(): Internal.Property<any>;
    }
    type BlockIDPredicate$PropertyObject_ = BlockIDPredicate$PropertyObject;
    interface ExperienceOrbAccess {
        abstract clumps$getAge(): number;
        abstract clumps$setCount(arg0: number): void;
        abstract clumps$setAge(arg0: number): void;
    }
    type ExperienceOrbAccess_ = ExperienceOrbAccess;
    class EncasedFanBlock extends Internal.DirectionalKineticBlock implements Internal.IBE<Internal.EncasedFanBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.EncasedFanBlockEntity>;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.EncasedFanBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.EncasedFanBlockEntity>): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.EncasedFanBlockEntity>;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.EncasedFanBlockEntity;
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
        getBlockEntityClass(): typeof Internal.EncasedFanBlockEntity;
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
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        showCapacityWithAnnotation(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get blockEntityType(): Internal.BlockEntityType<Internal.EncasedFanBlockEntity>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockEntityClass(): typeof Internal.EncasedFanBlockEntity
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type EncasedFanBlock_ = EncasedFanBlock;
    class OverlayTexture implements Internal.AutoCloseable {
        constructor()
        static pack(arg0: number, arg1: number): number;
        static pack(arg0: number, arg1: boolean): number;
        close(): void;
        teardownOverlayColor(): void;
        static v(arg0: boolean): number;
        static u(arg0: number): number;
        setupOverlayColor(): void;
        static readonly NO_OVERLAY: 655360;
        static readonly WHITE_OVERLAY_V: 10;
        static readonly NO_WHITE_U: 0;
        static readonly RED_OVERLAY_V: 3;
    }
    type OverlayTexture_ = OverlayTexture;
    class FunctionFactory extends Internal.Record {
        constructor(name: string, minArgs: number, maxArgs: number, supplier: Internal.FunctionFactory$FuncSupplier_)
        name(): string;
        static of0(name: string, supplier: Internal.Supplier_<Internal.Unit>): Internal.FunctionFactory;
        create(args: Internal.Unit_[]): Internal.Unit;
        static of(name: string, args: number, supplier: Internal.FunctionFactory$FuncSupplier_): Internal.FunctionFactory;
        maxArgs(): number;
        static of(name: string, minArgs: number, maxArgs: number, supplier: Internal.FunctionFactory$FuncSupplier_): Internal.FunctionFactory;
        supplier(): Internal.FunctionFactory$FuncSupplier;
        minArgs(): number;
        static of3(name: string, supplier: Internal.FunctionFactory$Arg3_): Internal.FunctionFactory;
        static of1(name: string, supplier: Internal.FunctionFactory$Arg1_): Internal.FunctionFactory;
        static of2(name: string, supplier: Internal.FunctionFactory$Arg2_): Internal.FunctionFactory;
    }
    type FunctionFactory_ = FunctionFactory;
    interface NBTSerializable {
        abstract toNBT(): Internal.Tag;
        (): Internal.Tag_;
    }
    type NBTSerializable_ = NBTSerializable;
    class ProtectionEnchantment$Type extends Internal.Enum<Internal.ProtectionEnchantment$Type> {
        getLevelCost(): number;
        static values(): Internal.ProtectionEnchantment$Type[];
        getMinCost(): number;
        static valueOf(arg0: string): Internal.ProtectionEnchantment$Type;
        get levelCost(): number
        get minCost(): number
        static readonly FIRE: Internal.ProtectionEnchantment$Type;
        static readonly EXPLOSION: Internal.ProtectionEnchantment$Type;
        static readonly ALL: Internal.ProtectionEnchantment$Type;
        static readonly PROJECTILE: Internal.ProtectionEnchantment$Type;
        static readonly FALL: Internal.ProtectionEnchantment$Type;
    }
    type ProtectionEnchantment$Type_ = ProtectionEnchantment$Type | "fire" | "fall" | "projectile" | "explosion" | "all";
    interface Matrix3dc {
        abstract mapnYnZX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract scale(arg0: number, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapXZnY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotateLocalZ(arg0: number, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotate(arg0: Internal.Quaterniondc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnZXY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnYXnZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapnYnZnX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapnZnXY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract m01(): number;
        abstract mapZnYnX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract m20(): number;
        abstract mul(arg0: Internal.Matrix3fc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract negateY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract quadraticFormProduct(arg0: Internal.Vector3dc_): number;
        abstract mapZXnY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract lerp(arg0: Internal.Matrix3dc_, arg1: number, arg2: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapXnYnZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract scaleLocal(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract get(arg0: number[]): number[];
        abstract mapYZnX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract scale(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnZnYnX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract m12(): number;
        abstract mapnZXnY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number[], arg1: number): number[];
        abstract mapnXZY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract normal(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotateLocal(arg0: Internal.Quaterniondc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract equals(arg0: Internal.Matrix3dc_, arg1: number): boolean;
        abstract getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        abstract transformTranspose(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotate(arg0: Internal.Quaternionfc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapYXnZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract rotateX(arg0: number, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract scale(arg0: Internal.Vector3dc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mul(arg0: Internal.Matrix3dc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract m00(): number;
        abstract transpose(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapYnXnZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mulComponentWise(arg0: Internal.Matrix3dc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract negateZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract get(arg0: number[]): number[];
        abstract determinant(): number;
        abstract rotate(arg0: Internal.AxisAngle4d_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapZXY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract invert(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract transformTranspose(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnYnXnZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mulLocal(arg0: Internal.Matrix3dc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract obliqueZ(arg0: number, arg1: number, arg2: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract transform(arg0: Vec3f_): Vec3f;
        abstract lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract m11(): number;
        abstract positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract mapnXnZY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotateLocal(arg0: Internal.Quaternionfc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapYnXZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getRowColumn(arg0: number, arg1: number): number;
        abstract transformTranspose(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateLocalX(arg0: number, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract quadraticFormProduct(arg0: Internal.Vector3fc_): number;
        abstract isFinite(): boolean;
        abstract getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract m22(): number;
        abstract sub(arg0: Internal.Matrix3dc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapYXZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapXnZnY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotateY(arg0: number, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotateZYX(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnZYX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract mapZnXnY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapYZX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnYZnX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract cofactor(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mapXnZY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract mapnXnZnY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract m10(): number;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapZnXY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnYXZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract reflect(arg0: Internal.Quaterniondc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract add(arg0: Internal.Matrix3dc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract reflect(arg0: Internal.Vector3dc_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract mapnXZnY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapYnZX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract transform(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number[], arg1: number): number[];
        abstract rotateLocalY(arg0: number, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnYnXZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract m02(): number;
        abstract mapZnYX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract negateX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract m21(): number;
        abstract transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateZ(arg0: number, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract quadraticFormProduct(arg0: number, arg1: number, arg2: number): number;
        abstract mapnXnYZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapnZYnX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapZYnX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number, arg1: number): number;
        abstract getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract rotate(arg0: Internal.AxisAngle4f_, arg1: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract mapnXYnZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract mapnYZX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract getToAddress(arg0: number): this;
        abstract mapXZY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapYnZnX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnXnYnZ(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnZnYX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapZYX(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract mapnZnXnY(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        get finite(): boolean
    }
    type Matrix3dc_ = Matrix3dc;
    class EventResult$Type extends Internal.Enum<Internal.EventResult$Type> {
        static values(): Internal.EventResult$Type[];
        static valueOf(name: string): Internal.EventResult$Type;
        exit(value: any): Internal.EventExit;
        static readonly INTERRUPT_TRUE: Internal.EventResult$Type;
        static readonly PASS: Internal.EventResult$Type;
        readonly defaultResult: Internal.EventResult;
        readonly defaultExit: Internal.EventExit;
        static readonly ERROR: Internal.EventResult$Type;
        static readonly INTERRUPT_DEFAULT: Internal.EventResult$Type;
        readonly defaultArchResult: dev.architectury.event.EventResult;
        static readonly INTERRUPT_FALSE: Internal.EventResult$Type;
    }
    type EventResult$Type_ = "interrupt_default" | "pass" | "error" | "interrupt_true" | "interrupt_false" | EventResult$Type;
    class Constructor <T> extends Internal.Executable {
        getTypeParameters(): any[];
        newInstance(...arg0: any[]): T;
        getDeclaringClass(): T;
        getAnnotation<T extends Internal.Annotation>(arg0: T): T;
        get typeParameters(): any[]
        get declaringClass(): T
    }
    type Constructor_<T> = Constructor<T>;
    class WebBlock extends Internal.Block implements Internal.IForgeShearable {
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
    type WebBlock_ = WebBlock;
    class IdMappingEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Map_<ResourceLocation, Internal.Map<ResourceLocation, Internal.IdMappingEvent$IdRemapping>>, arg1: boolean)
        getRegistries(): Internal.ImmutableSet<ResourceLocation>;
        getRemaps(arg0: ResourceLocation_): Internal.ImmutableList<Internal.IdMappingEvent$ModRemapping>;
        isFrozen(): boolean;
        get registries(): Internal.ImmutableSet<ResourceLocation>
        get frozen(): boolean
    }
    type IdMappingEvent_ = IdMappingEvent;
}
declare namespace net.darkhax.bookshelf.api.commands.args {
    class SingletonArgumentInfo <T extends Internal.ArgumentType<any>> implements Internal.ArgumentTypeInfo<T, net.darkhax.bookshelf.api.commands.args.SingletonArgumentInfo$Template<T>> {
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        serializeToNetwork(arg0: net.darkhax.bookshelf.api.commands.args.SingletonArgumentInfo$Template_<T>, arg1: Internal.FriendlyByteBuf_): void;
        unpack(arg0: T): net.darkhax.bookshelf.api.commands.args.SingletonArgumentInfo$Template<T>;
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): net.darkhax.bookshelf.api.commands.args.SingletonArgumentInfo$Template<T>;
        serializeToJson(arg0: net.darkhax.bookshelf.api.commands.args.SingletonArgumentInfo$Template_<T>, arg1: Internal.JsonObject_): void;
        static of<T extends Internal.ArgumentType<any>>(arg0: Internal.Supplier_<T>): net.darkhax.bookshelf.api.commands.args.SingletonArgumentInfo<T>;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        static of<T extends Internal.ArgumentType<any>>(arg0: T): net.darkhax.bookshelf.api.commands.args.SingletonArgumentInfo<T>;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
    }
    type SingletonArgumentInfo_<T extends Internal.ArgumentType<any>> = SingletonArgumentInfo<T>;
}
