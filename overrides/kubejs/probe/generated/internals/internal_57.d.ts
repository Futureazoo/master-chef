/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class ScreenBlockItem extends Internal.BlockItem {
        constructor(block: Internal.Block_, size: any_)
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
        static getSize(stack: Internal.ItemStack_): number;
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
    type ScreenBlockItem_ = ScreenBlockItem;
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
    abstract class Definition {
        constructor(arg0: any_<any, Internal.Definition>)
        commentToString(): string;
        getTranslatedComment(arg0: Internal.Function_<string, string>): Internal.List<string>;
        setParent(arg0: Internal.SectionDefinition_): void;
        getTranslatedDisplayName(arg0: Internal.Function_<string, string>): string;
        commentToArray(): string[];
        set parent(arg0: Internal.SectionDefinition_)
        readonly name: string;
        readonly lowercaseName: string;
        readonly comment: Internal.List<string>;
        readonly englishDisplayName: string;
        parent: Internal.SectionDefinition;
        readonly hint: any;
        path: Internal.List<string>;
    }
    type Definition_ = Definition;
    class TCoreItems$1 extends Internal.EnergyContainerItem {
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
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getScaledEnergyStored(arg0: Internal.ItemStack_, arg1: number): number;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isActive(arg0: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        extractEnergy(arg0: Internal.ItemStack_, arg1: number, arg2: boolean): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        hasActiveTag(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        receiveEnergy(arg0: Internal.ItemStack_, arg1: number, arg2: boolean): number;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getEnergyStored(arg0: Internal.ItemStack_): number;
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
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        isCreative(arg0: Internal.ItemStack_, arg1: Internal.ContainerType_): boolean;
        addModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        setActive(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getOrCreateEnergyTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
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
        getSpace(arg0: Internal.ItemStack_): number;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        setEnergyStored(arg0: Internal.ItemStack_, arg1: number): void;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        addEnergyTooltip(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_, arg4: number, arg5: number, arg6: boolean): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
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
    type TCoreItems$1_ = TCoreItems$1;
    class ScreenEvent$CharacterTyped$Pre extends Internal.ScreenEvent$CharacterTyped {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: string, arg2: number)
    }
    type ScreenEvent$CharacterTyped$Pre_ = ScreenEvent$CharacterTyped$Pre;
    class LocalPlayer extends Internal.AbstractClientPlayer implements Internal.IQuiverEntity {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.ClientLevel_, arg2: Internal.ClientPacketListener_, arg3: Internal.StatsCounter_, arg4: Internal.ClientRecipeBook_, arg5: boolean, arg6: boolean)
        resetPos(): void;
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        getStats(): Internal.PlayerStatsJS;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isMovingSlowly(): boolean;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        setServerBrand(arg0: string): void;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        removeRecipeHighlight(arg0: Internal.Recipe_<any>): void;
        getEntityReach(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        handler$zbm000$ia$sendOpenInventory(ci: Internal.CallbackInfo_): void;
        setSelectedSlot(index: number): void;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getTotalMovementSpeed(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        getStatsCounter(): Internal.StatsCounter;
        damageHeldItem(): void;
        setMotionZ(z: number): void;
        handler$cfa000$create$noSwimmingWithHeavyBootsOn(arg0: Internal.CallbackInfoReturnable_<any>): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFoodLevel(): number;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        supplementaries$getQuiver(): Internal.ItemStack;
        setSaturation(saturation: number): void;
        setMainHandItem(item: Internal.ItemStack_): void;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        getXp(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        isMiningBlock(): boolean;
        updateSyncFields(arg0: Internal.LocalPlayer_): void;
        isUndead(): boolean;
        isAmbientCreature(): boolean;
        getStepHeight(): number;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        clientSideCloseContainer(): void;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        getName(): net.minecraft.network.chat.Component;
        boostElytraFlight(): void;
        getServerBrand(): string;
        setMouseItem(item: Internal.ItemStack_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getWaterVision(): number;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        give(item: Internal.ItemStack_): void;
        isAutoJumpEnabled(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        setShowDeathScreen(arg0: boolean): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        spawn(): void;
        getMainHandItem(): Internal.ItemStack;
        sinkInFluid(arg0: Internal.FluidType_): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        hurtTo(arg0: number): void;
        getScriptType(): Internal.ScriptType;
        setPermissionLevel(arg0: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        isSelf(): boolean;
        getParts(): Internal.PartEntity<any>[];
        localvar$bhf000$caelus$affixEmptyStack(arg0: Internal.ItemStack_): Internal.ItemStack;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        canReach(arg0: Vec3d_, arg1: number): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        handler$bhf000$caelus$checkFlight(arg0: Internal.CallbackInfo_): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        supplementaries$setQuiver(quiver: Internal.ItemStack_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getSaturation(): number;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        isFake(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        addFood(f: number, m: number): void;
        swing(): void;
        canStartSwimming(): boolean;
        getXpLevel(): number;
        canReach(arg0: BlockPos_, arg1: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        getCurrentMood(): number;
        paint(tag: Internal.CompoundTag_): void;
        getBlockReach(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        getRecipeBook(): Internal.ClientRecipeBook;
        setPosition(block: Internal.BlockContainerJS_): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        jumpableVehicle(): Internal.PlayerRideableJumping;
        notify(title: net.minecraft.network.chat.Component_, text: net.minecraft.network.chat.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setXpLevel(l: number): void;
        setFoodLevel(foodLevel: number): void;
        addXPLevels(l: number): void;
        shouldRiderSit(): boolean;
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
        getSelectedSlot(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getOpenInventory(): Internal.AbstractContainerMenu;
        isFrame(): boolean;
        shouldShowDeathScreen(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        setXp(xp: number): void;
        self(): Internal.LivingEntity;
        handler$zbm000$ia$isCrouching(cir: Internal.CallbackInfoReturnable_<any>): void;
        drop(arg0: boolean): boolean;
        getDefaultMovementSpeed(): number;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        setRotation(yaw: number, pitch: number): void;
        notify(notification: Notification_): void;
        isMonster(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getMotionY(): number;
        addExhaustion(exhaustion: number): void;
        getPassengers(): Internal.EntityArrayList;
        giveInHand(item: Internal.ItemStack_): void;
        addXP(xp: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        getFeetArmorItem(): Internal.ItemStack;
        getServer(): Internal.MinecraftServer;
        setExperienceValues(arg0: number, arg1: number, arg2: number): void;
        setMotionX(x: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        onGameModeChanged(arg0: Internal.GameType_): void;
        setMovementSpeedAddition(speed: number): void;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        sendInventoryUpdate(): void;
        getChestArmorItem(): Internal.ItemStack;
        getPermissionLevel(): number;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        getJumpRidingScale(): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        getMouseItem(): Internal.ItemStack;
        setZ(z: number): void;
        getDistanceSq(pos: BlockPos_): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        serverAiStep(): void;
        runCommand(command: string): number;
        addItemCooldown(item: Internal.Item_, ticks: number): void;
        get stats(): Internal.PlayerStatsJS
        set defaultMovementSpeedMultiplier(speed: number)
        get movingSlowly(): boolean
        get offHandItem(): Internal.ItemStack
        set serverBrand(arg0: string)
        get entityReach(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        set selectedSlot(index: number)
        get totalMovementSpeed(): number
        get statsCounter(): Internal.StatsCounter
        set motionZ(z: number)
        get foodLevel(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set saturation(saturation: number)
        set mainHandItem(item: Internal.ItemStack_)
        get item(): Internal.ItemStack
        set x(x: number)
        get xp(): number
        get miningBlock(): boolean
        get undead(): boolean
        get ambientCreature(): boolean
        get stepHeight(): number
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get name(): net.minecraft.network.chat.Component
        get serverBrand(): string
        set mouseItem(item: Internal.ItemStack_)
        set totalMovementSpeedMultiplier(speed: number)
        get waterVision(): number
        get autoJumpEnabled(): boolean
        set showDeathScreen(arg0: boolean)
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get scriptType(): Internal.ScriptType
        set permissionLevel(arg0: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get self(): boolean
        get parts(): Internal.PartEntity<any>[]
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get saturation(): number
        get fake(): boolean
        get xpLevel(): number
        get living(): boolean
        get currentMood(): number
        get blockReach(): number
        get displayName(): net.minecraft.network.chat.Component
        get recipeBook(): Internal.ClientRecipeBook
        set position(block: Internal.BlockContainerJS_)
        get teamId(): string
        set xpLevel(l: number)
        set foodLevel(foodLevel: number)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get handsBusy(): boolean
        get selectedSlot(): number
        get potionEffects(): Internal.EntityPotionEffectsJS
        get openInventory(): Internal.AbstractContainerMenu
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set xp(xp: number)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get motionY(): number
        get passengers(): Internal.EntityArrayList
        get feetArmorItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        set movementSpeedAddition(speed: number)
        get chestArmorItem(): Internal.ItemStack
        get permissionLevel(): number
        get motionZ(): number
        get jumpRidingScale(): number
        get mouseItem(): Internal.ItemStack
        set z(z: number)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        xRotLast: number;
        oSpinningEffectIntensity: number;
        input: Internal.Input;
        xBobO: number;
        yRotLast: number;
        readonly connection: Internal.ClientPacketListener;
        xBob: number;
        yBob: number;
        yBobO: number;
        static readonly LOGGER: Internal.Log4jLogger;
        spinningEffectIntensity: number;
    }
    type LocalPlayer_ = LocalPlayer;
    class StorageCellBlock extends Internal.EntityBlock4Way {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: typeof any, arg2: Internal.Supplier_<Internal.BlockEntityType<any>>)
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
        dismantleBlock(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.HitResult_, arg4: Internal.Player_, arg5: boolean): void;
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        canWrench(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): boolean;
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
        wrenchBlock(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.HitResult_, arg4: Internal.Player_): void;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
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
    type StorageCellBlock_ = StorageCellBlock;
    class CraftingUpgradeItem extends Internal.UpgradeItemBase<Internal.CraftingUpgradeWrapper> {
        constructor(arg0: any_)
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
        getCleanedUpgradeStack(arg0: Internal.ItemStack_): Internal.ItemStack;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getType(): Internal.UpgradeType<Internal.CraftingUpgradeWrapper>;
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
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get type(): Internal.UpgradeType<Internal.CraftingUpgradeWrapper>
        get inventoryColumnsTaken(): number
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
    }
    type CraftingUpgradeItem_ = CraftingUpgradeItem;
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
        unwrapKey(): Internal.Optional<Internal.ResourceKey<T>>;
        is(arg0: Internal.Predicate_<Internal.ResourceKey<T>>): boolean;
        unwrap(): Internal.Either<Internal.ResourceKey<T>, T>;
        canSerializeIn(arg0: Internal.HolderOwner_<T>): boolean;
        static createStandAlone<T>(arg0: Internal.HolderOwner_<T>, arg1: Internal.ResourceKey_<T>): Internal.Holder$Reference<T>;
        bindValue(arg0: T): void;
        getTagKeys(): Internal.Stream<Internal.TagKey<T>>;
        /**
         * @deprecated
        */
        static createIntrusive<T>(arg0: Internal.HolderOwner_<T>, arg1: T): Internal.Holder$Reference<T>;
        is(arg0: Internal.ResourceKey_<T>): boolean;
        kind(): Internal.Holder$Kind;
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
        static isSand(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
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
    abstract class CARecipeSerializer <R extends Internal.Recipe<any>> implements Internal.RecipeSerializer<R> {
        constructor()
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): R;
        abstract fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): R;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        abstract toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: R): void;
        abstract readFromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): R;
        abstract getIcon(): Internal.ItemStack;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): R;
        get icon(): Internal.ItemStack
    }
    type CARecipeSerializer_<R extends Internal.Recipe<any>> = CARecipeSerializer<R>;
    class WorldCreationUiState$WorldTypeEntry extends Internal.Record {
        constructor(preset: Internal.Holder_<Internal.WorldPreset>)
        preset(): Internal.Holder<Internal.WorldPreset>;
        isAmplified(): boolean;
        describePreset(): net.minecraft.network.chat.Component;
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
    interface Button$CreateNarration {
        abstract createNarrationMessage(arg0: Internal.Supplier_<Internal.MutableComponent>): Internal.MutableComponent;
        (arg0: Internal.Supplier<Internal.MutableComponent>): Internal.MutableComponent_;
    }
    type Button$CreateNarration_ = Button$CreateNarration;
    class ScreenEvent$MouseButtonPressed$Post extends Internal.ScreenEvent$MouseButtonPressed {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: boolean)
        wasHandled(): boolean;
    }
    type ScreenEvent$MouseButtonPressed$Post_ = ScreenEvent$MouseButtonPressed$Post;
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
        setConsumer(arg0: Internal.ResultConsumer_<S>): void;
        findAmbiguities(arg0: Internal.AmbiguityConsumer_<S>): void;
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
    class InventoryOrder extends Internal.Enum<Internal.InventoryOrder> implements Internal.StringRepresentable {
        next(): this;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.InventoryOrder[];
        static fromName(arg0: string): Internal.InventoryOrder;
        static valueOf(arg0: string): Internal.InventoryOrder;
        get serializedName(): string
        static readonly MAIN_FIRST: Internal.InventoryOrder;
        static readonly INCEPTED_FIRST: Internal.InventoryOrder;
    }
    type InventoryOrder_ = "incepted_first" | InventoryOrder | "main_first";
    interface Entity$MoveFunction {
        abstract accept(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number): void;
        (arg0: Internal.Entity, arg1: number, arg2: number, arg3: number): void;
    }
    type Entity$MoveFunction_ = Entity$MoveFunction;
    class SunHints$LCDContrastKey extends Internal.SunHints$Key {
        constructor(arg0: number, arg1: string)
    }
    type SunHints$LCDContrastKey_ = SunHints$LCDContrastKey;
    interface IForgeItemMixin {
    }
    type IForgeItemMixin_ = IForgeItemMixin;
    class VariantLadderBlock extends Internal.LadderBlock implements Internal.IZetaBlockExtensions, Internal.IForgeBlock, Internal.IZetaBlock {
        constructor(arg0: string, arg1: Internal.ZetaModule_, arg2: Internal.BlockBehaviour$Properties_, arg3: boolean)
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
        setCondition(arg0: Internal.BooleanSupplier_): this;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        static isEnabled(arg0: Internal.Block_): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isLadderZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
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
    type VariantLadderBlock_ = VariantLadderBlock;
    class ZRegister implements Internal.IZetaLoadEvent {
        constructor(arg0: Internal.Zeta_)
        getRegistry(): Internal.ZetaRegistry;
        getRenderLayerRegistry(): Internal.RenderLayerRegistry;
        getBrewingRegistry(): Internal.BrewingRegistry;
        getVariantRegistry(): Internal.VariantRegistry;
        getCraftingExtensionsRegistry(): Internal.CraftingExtensionsRegistry;
        getAdvancementModifierRegistry(): Internal.AdvancementModifierRegistry;
        get registry(): Internal.ZetaRegistry
        get renderLayerRegistry(): Internal.RenderLayerRegistry
        get brewingRegistry(): Internal.BrewingRegistry
        get variantRegistry(): Internal.VariantRegistry
        get craftingExtensionsRegistry(): Internal.CraftingExtensionsRegistry
        get advancementModifierRegistry(): Internal.AdvancementModifierRegistry
        readonly zeta: Internal.Zeta;
    }
    type ZRegister_ = ZRegister;
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
        static hasBeenEatenBefore(player: Internal.Player_, level: Internal.Level_): boolean;
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
        static readonly SOAP_FOOD: Internal.FoodProperties;
    }
    type SoapItem_ = SoapItem;
    class TugRouteScreenDataAccessor extends Internal.DataAccessor {
        constructor(arg0: Internal.ContainerData_)
        isOffHand(): boolean;
        get offHand(): boolean
    }
    type TugRouteScreenDataAccessor_ = TugRouteScreenDataAccessor;
    interface AccessorMultiBufferSource {
        abstract getFixedBuffers(): Internal.Map<Internal.RenderType, Internal.BufferBuilder>;
        abstract getFallbackBuffer(): Internal.BufferBuilder;
        get fixedBuffers(): Internal.Map<Internal.RenderType, Internal.BufferBuilder>
        get fallbackBuffer(): Internal.BufferBuilder
    }
    type AccessorMultiBufferSource_ = AccessorMultiBufferSource;
    class DeliveryAgreementItem$AgreementError extends Internal.Enum<Internal.DeliveryAgreementItem$AgreementError> {
        static valueOf(arg0: string): Internal.DeliveryAgreementItem$AgreementError;
        static values(): Internal.DeliveryAgreementItem$AgreementError[];
        static readonly DAMAGED: Internal.DeliveryAgreementItem$AgreementError;
        static readonly NO_TAG: Internal.DeliveryAgreementItem$AgreementError;
        static readonly EMPTY: Internal.DeliveryAgreementItem$AgreementError;
    }
    type DeliveryAgreementItem$AgreementError_ = "no_tag" | "empty" | DeliveryAgreementItem$AgreementError | "damaged";
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
    type UncontainableBlockItem_ = UncontainableBlockItem;
    class PoweredBlock extends Internal.Block {
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
    type PoweredBlock_ = PoweredBlock;
    class TrackBlock extends Internal.Block implements Internal.ISpecialBlockItemRequirement, Internal.ProperWaterloggedBlock, Internal.ITrackBlock, com.simibubi.create.content.equipment.wrench.IWrenchable, Internal.IBE<Internal.TrackBlockEntity> {
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
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
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
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
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
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getMaterial(): Internal.TrackMaterial;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
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
        getNearestTrackAxis(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Vec3d_): com.simibubi.create.foundation.utility.Pair<Vec3d, Internal.Direction$AxisDirection>;
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
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.TrackBlockEntity, InteractionResult>): InteractionResult;
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
    class BeetrootBlock extends Internal.CropBlock {
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
    type CraftingTableBlock_ = CraftingTableBlock;
    class PoseStack$Pose {
        normal(): Matrix3f;
        pose(): Matrix4f;
    }
    type PoseStack$Pose_ = PoseStack$Pose;
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
    class CanisterBlockEntity extends Internal.SmartBlockEntity implements Internal.IHaveGoggleInformation {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        getEnchantmentTag(): Internal.ListTag;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        setEnchantmentTag(arg0: Internal.ListTag_): void;
        setCapacityEnchantLevel(arg0: number): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        addToGoggleTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean): boolean;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getCustomName(): net.minecraft.network.chat.Component;
        get enchantmentTag(): Internal.ListTag
        set customName(arg0: net.minecraft.network.chat.Component_)
        set enchantmentTag(arg0: Internal.ListTag_)
        set capacityEnchantLevel(arg0: number)
        get modelData(): Internal.ModelData
        get customName(): net.minecraft.network.chat.Component
    }
    type CanisterBlockEntity_ = CanisterBlockEntity;
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
    }
    type IronWindChimeBlock_ = IronWindChimeBlock;
    interface FilterInfo {
        abstract pop(): void;
        abstract push(): void;
        abstract add(arg0: net.minecraft.network.chat.Component_): void;
    }
    type FilterInfo_ = FilterInfo;
    interface IGridConnection {
        abstract getDirection(arg0: Internal.IGridNode_): Internal.Direction;
        abstract getUsedChannels(): number;
        abstract getOtherSide(arg0: Internal.IGridNode_): Internal.IGridNode;
        abstract isInWorld(): boolean;
        abstract destroy(): void;
        abstract a(): Internal.IGridNode;
        abstract b(): Internal.IGridNode;
        get usedChannels(): number
        get inWorld(): boolean
    }
    type IGridConnection_ = IGridConnection;
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
    class SingleItemStackHandler implements Internal.IItemHandler, Internal.IItemHandlerModifiable, Internal.INBTSerializable<Internal.CompoundTag> {
        constructor()
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        serializeItemAmount(arg0: Internal.CompoundTag_): void;
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        deserializeItemAmount(arg0: Internal.CompoundTag_): number;
        find(): number;
        getMaxAmount(): number;
        getStack(): Internal.ItemStack;
        getSlots(): number;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        kjs$self(): Internal.IItemHandler;
        setStack(arg0: Internal.ItemStack_): void;
        getAmount(): number;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        isFull(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        extractItem(arg0: number, arg1: boolean): Internal.ItemStack;
        insertItem(arg0: Internal.ItemStack_, arg1: boolean): Internal.ItemStack;
        serializeNBT(): Internal.CompoundTag;
        setAmount(arg0: number): void;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isItemValid(arg0: Internal.ItemStack_): boolean;
        isMutable(): boolean;
        clear(): void;
        getItem(): Internal.Item;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        get empty(): boolean
        get maxAmount(): number
        get stack(): Internal.ItemStack
        get slots(): number
        set stack(arg0: Internal.ItemStack_)
        get amount(): number
        get height(): number
        get full(): boolean
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        set amount(arg0: number)
        get mutable(): boolean
        get item(): Internal.Item
        static readonly ITEM_TAG: "Item";
    }
    type SingleItemStackHandler_ = SingleItemStackHandler;
    interface CanvasSign {
        abstract getBackgroundColor(): Internal.DyeColor;
        isDarkBackground(): boolean;
        get backgroundColor(): Internal.DyeColor
        get darkBackground(): boolean
        (): Internal.DyeColor_;
    }
    type CanvasSign_ = CanvasSign;
    class CreativeModeTab implements Internal.CreativeModeTabKJS {
        getDisplayName(): net.minecraft.network.chat.Component;
        getType(): Internal.CreativeModeTab$Type;
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
        kjs$setDisplayName(component: net.minecraft.network.chat.Component_): void;
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
        get displayName(): net.minecraft.network.chat.Component
        get type(): Internal.CreativeModeTab$Type
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
    interface IPlacementItem {
        abstract onBlockPlacement(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): boolean;
        (arg0: Internal.ItemStack, arg1: Internal.UseOnContext): boolean;
    }
    type IPlacementItem_ = IPlacementItem;
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
    class ToolSwapMode extends Internal.Enum<Internal.ToolSwapMode> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.ToolSwapMode[];
        getSerializedName(): string;
        static fromName(arg0: string): Internal.ToolSwapMode;
        static valueOf(arg0: string): Internal.ToolSwapMode;
        next(): this;
        get serializedName(): string
        static readonly ANY: Internal.ToolSwapMode;
        static readonly NO_SWAP: Internal.ToolSwapMode;
        static readonly ONLY_TOOLS: Internal.ToolSwapMode;
    }
    type ToolSwapMode_ = "any" | "no_swap" | "only_tools" | ToolSwapMode;
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
    class CustomConditionEventJS extends Internal.EventJS {
        constructor(arg0: string, arg1: Internal.CustomCondition_)
        readonly data: Internal.Map<any, any>;
        readonly id: string;
        readonly condition: Internal.CustomCondition;
    }
    type CustomConditionEventJS_ = CustomConditionEventJS;
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
    class Endermite extends Internal.Monster {
        constructor(arg0: Internal.EntityType_<Internal.Endermite>, arg1: Internal.Level_)
        static checkEndermiteSpawnRules(arg0: Internal.EntityType_<Internal.Endermite>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
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
    type Endermite_ = Endermite;
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
    interface IOrientationStrategy {
        get(arg0: Internal.BlockState_): this;
        getStateForPlacement(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        getSide(arg0: Internal.BlockState_, arg1: Internal.RelativeSide_): Internal.Direction;
        setOrientation(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: number): Internal.BlockState;
        getAllStates(arg0: Internal.BlockState_): Internal.Stream<Internal.BlockState>;
        setOrientation(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.Direction_): Internal.BlockState;
        allowsPlayerRotation(): boolean;
        getSpin(arg0: Internal.BlockState_): number;
        setSpin(arg0: Internal.BlockState_, arg1: number): Internal.BlockState;
        abstract getProperties(): Internal.Collection<Internal.Property<any>>;
        getFacing(arg0: Internal.BlockState_): Internal.Direction;
        setFacing(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        setUp(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        get properties(): Internal.Collection<Internal.Property<any>>
        (): Internal.Collection_<Internal.Property<any>>;
        readonly SPIN: Internal.IntegerProperty;
    }
    type IOrientationStrategy_ = IOrientationStrategy;
    abstract class ConductorCapItem extends Internal.ArmorItem {
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
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
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
        static create(props: Internal.Item$Properties_, color: Internal.DyeColor_): Internal.ConductorCapItem;
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
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
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
        readonly textureStr: string;
        readonly textureId: ResourceLocation;
        readonly color: Internal.DyeColor;
    }
    type ConductorCapItem_ = ConductorCapItem;
    class PumpUpgradeWrapper extends Internal.UpgradeWrapperBase<Internal.PumpUpgradeWrapper, Internal.PumpUpgradeItem> implements Internal.ITickableUpgrade {
        getAdjustedStackMultiplier(arg0: Internal.IStorageWrapper_): number;
        shouldInteractWithHand(): boolean;
        setIsInput(arg0: boolean): void;
        tick(arg0: Internal.LivingEntity_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getFluidFilterLogic(): Internal.FluidFilterLogic;
        shouldInteractWithWorld(): boolean;
        setInteractWithHand(arg0: boolean): void;
        setInteractWithWorld(arg0: boolean): void;
        canBeDisabled(): boolean;
        isInput(): boolean;
        hideSettingsTab(): boolean;
        onAdded(): void;
        onBeforeRemoved(): void;
        set isInput(arg0: boolean)
        get fluidFilterLogic(): Internal.FluidFilterLogic
        set interactWithHand(arg0: boolean)
        set interactWithWorld(arg0: boolean)
        get input(): boolean
    }
    type PumpUpgradeWrapper_ = PumpUpgradeWrapper;
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
    class UseItemOnBlockEvent$UsePhase extends Internal.Enum<Internal.UseItemOnBlockEvent$UsePhase> {
        static values(): Internal.UseItemOnBlockEvent$UsePhase[];
        static valueOf(arg0: string): Internal.UseItemOnBlockEvent$UsePhase;
        static readonly BLOCK: Internal.UseItemOnBlockEvent$UsePhase;
        static readonly PRE_BLOCK: Internal.UseItemOnBlockEvent$UsePhase;
        static readonly POST_BLOCK: Internal.UseItemOnBlockEvent$UsePhase;
    }
    type UseItemOnBlockEvent$UsePhase_ = "pre_block" | "block" | "post_block" | UseItemOnBlockEvent$UsePhase;
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
    class GlowLichenGrowthBlock extends Internal.ZetaBushBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.ZetaModule_)
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
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.ItemLike_, arg2: boolean): Internal.Block;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
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
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getBlock(): Internal.Block;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        isConduitFrameZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
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
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
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
        get enabled(): boolean
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type GlowLichenGrowthBlock_ = GlowLichenGrowthBlock;
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
        static readonly USE_DURATION: 1200;
        static readonly ZOOM_FOV_MODIFIER: 0.1;
    }
    type SpyglassItem_ = SpyglassItem;
    abstract class FontMetrics implements Internal.Serializable {
        charsWidth(arg0: string[], arg1: number, arg2: number): number;
        getStringBounds(arg0: Internal.CharacterIterator_, arg1: number, arg2: number, arg3: Internal.Graphics_): Internal.Rectangle2D;
        getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: Internal.Graphics_): Internal.LineMetrics;
        getLineMetrics(arg0: string, arg1: Internal.Graphics_): Internal.LineMetrics;
        getFont(): Internal.Font;
        getAscent(): number;
        getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: Internal.Graphics_): Internal.Rectangle2D;
        getMaxAscent(): number;
        getHeight(): number;
        getLeading(): number;
        stringWidth(arg0: string): number;
        getWidths(): number[];
        getLineMetrics(arg0: Internal.CharacterIterator_, arg1: number, arg2: number, arg3: Internal.Graphics_): Internal.LineMetrics;
        charWidth(arg0: number): number;
        getFontRenderContext(): Internal.FontRenderContext;
        getMaxCharBounds(arg0: Internal.Graphics_): Internal.Rectangle2D;
        getMaxAdvance(): number;
        bytesWidth(arg0: number[], arg1: number, arg2: number): number;
        hasUniformLineMetrics(): boolean;
        getStringBounds(arg0: string, arg1: number, arg2: number, arg3: Internal.Graphics_): Internal.Rectangle2D;
        getMaxDescent(): number;
        charWidth(arg0: string): number;
        getStringBounds(arg0: string, arg1: Internal.Graphics_): Internal.Rectangle2D;
        getDescent(): number;
        getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: Internal.Graphics_): Internal.LineMetrics;
        /**
         * @deprecated
        */
        getMaxDecent(): number;
        get font(): Internal.Font
        get ascent(): number
        get maxAscent(): number
        get height(): number
        get leading(): number
        get widths(): number[]
        get fontRenderContext(): Internal.FontRenderContext
        get maxAdvance(): number
        get maxDescent(): number
        get descent(): number
        /**
         * @deprecated
        */
        get maxDecent(): number
    }
    type FontMetrics_ = FontMetrics;
    /**
     * @deprecated
    */
    interface RecvByteBufAllocator$Handle {
        abstract reset(arg0: Internal.ChannelConfig_): void;
        abstract attemptedBytesRead(arg0: number): void;
        abstract incMessagesRead(arg0: number): void;
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
    /**
     * @deprecated
    */
    class AdrenalineEffect extends Internal.StatusEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        addAttackDamageModifier(arg0: string, arg1: number, arg2: number, arg3: Internal.AttributeModifier$Operation_): this;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
    }
    type AdrenalineEffect_ = AdrenalineEffect;
    class BarrierBlock extends Internal.Block {
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
    type BarrierBlock_ = BarrierBlock;
    class DragonSittingAttackingPhase extends Internal.AbstractDragonSittingPhase {
        constructor(arg0: Internal.EnderDragon_)
        getPhase(): Internal.EnderDragonPhase<Internal.DragonSittingAttackingPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonSittingAttackingPhase>
    }
    type DragonSittingAttackingPhase_ = DragonSittingAttackingPhase;
    class QuartzFixtureBlock extends Internal.AEBaseBlock implements Internal.SimpleWaterloggedBlock {
        constructor()
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
        getOrientation(arg0: Internal.BlockState_): Internal.BlockOrientation;
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
        static readonly ODD: Internal.BooleanProperty;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type QuartzFixtureBlock_ = QuartzFixtureBlock;
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
    class SkullBlock extends Internal.AbstractSkullBlock {
        constructor(arg0: Internal.SkullBlock$Type_, arg1: Internal.BlockBehaviour$Properties_)
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
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
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
    interface IntPredicate {
        and(arg0: Internal.IntPredicate_): this;
        or(arg0: Internal.IntPredicate_): this;
        negate(): this;
        abstract test(arg0: number): boolean;
        (arg0: number): boolean;
    }
    type IntPredicate_ = IntPredicate;
    class EntityBlock4Way extends Internal.EntityBlockCoFH implements Internal.IWrenchable {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: typeof any, arg2: Internal.Supplier_<Internal.BlockEntityType<any>>)
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
        dismantleBlock(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.HitResult_, arg4: Internal.Player_, arg5: boolean): void;
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        canWrench(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): boolean;
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
        wrenchBlock(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.HitResult_, arg4: Internal.Player_): void;
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
    type EntityBlock4Way_ = EntityBlock4Way;
    class NixieTubeBlock extends Internal.DoubleFaceAttachedBlock implements Internal.ISpecialBlockItemRequirement, com.simibubi.create.content.equipment.wrench.IWrenchable, Internal.IBE<Internal.NixieTubeBlockEntity>, Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.DyeColor_)
        getBlockEntityClass(): typeof Internal.NixieTubeBlockEntity;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.NixieTubeBlockEntity, InteractionResult>): InteractionResult;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRequiredItems(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.ItemRequirement;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        static areNixieBlocksEqual(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
    class CopycatPanelBlock extends Internal.WaterloggedCopycatBlock implements Internal.ICTCopycatBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        static isOccluded(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.CopycatBlockEntity>;
        allowCTAppearance(state: Internal.BlockState_, level: Internal.BlockAndTintGetter_, pos: BlockPos_, side: Internal.Direction_, queryState: Internal.BlockState_, queryPos: BlockPos_): boolean;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.CopycatBlockEntity, InteractionResult>): InteractionResult;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        abstract getBlockEntityType(): Internal.BlockEntityType<Internal.CopycatBlockEntity>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        handler$ben000$use(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, ray: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.CopycatBlockEntity>): void;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        toggleCT(pState: Internal.BlockState_, pLevel: Internal.Level_, pPos: BlockPos_, pPlayer: Internal.Player_, pHand: Internal.InteractionHand_, pHit: Internal.BlockHitResult_): InteractionResult;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        abstract getBlockEntityClass(): typeof Internal.CopycatBlockEntity;
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
        get blockEntityType(): Internal.BlockEntityType<Internal.CopycatBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityClass(): typeof Internal.CopycatBlockEntity
        get mod(): string
        static readonly FACING: Internal.DirectionProperty;
    }
    type CopycatPanelBlock_ = CopycatPanelBlock;
    class DisplayTargetStats extends Internal.Record {
        constructor(maxRows: number, maxColumns: number, type: Internal.DisplayTarget_)
        maxColumns(): number;
        maxRows(): number;
        type(): Internal.DisplayTarget;
    }
    type DisplayTargetStats_ = DisplayTargetStats;
    interface IShapedRecipe <T extends net.minecraft.world.Container> extends Internal.Recipe<T> {
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
    type IShapedRecipe_<T extends net.minecraft.world.Container> = IShapedRecipe<T>;
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
    class DeployerBlock extends Internal.DirectionalAxisKineticBlock implements Internal.IBE<Internal.DeployerBlockEntity> {
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
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.DeployerBlockEntity>;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.DeployerBlockEntity, InteractionResult>): InteractionResult;
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
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.DeployerBlockEntity>): void;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.DeployerBlockEntity;
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
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getBlockEntityClass(): typeof Internal.DeployerBlockEntity;
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
    interface IItemHandlerInteractionUpgrade {
        abstract onHandlerInteract(arg0: Internal.IItemHandler_, arg1: Internal.Player_): void;
        (arg0: Internal.IItemHandler, arg1: Internal.Player): void;
    }
    type IItemHandlerInteractionUpgrade_ = IItemHandlerInteractionUpgrade;
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
        title: net.minecraft.network.chat.Component;
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
    abstract class AttributeValue {
    }
    type AttributeValue_ = AttributeValue;
    interface WeatheringCopper extends Internal.ChangeOverTimeBlock<Internal.WeatheringCopper$WeatherState>, Internal.WeatheringCopperMixin {
        applyChangeOverTime(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getPrevious(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        getNext(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        abstract getAge(): Internal.WeatheringCopper$WeatherState;
        getPrevious(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        onRandomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFirst(arg0: Internal.Block_): Internal.Block;
        getNext(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        getFirst(arg0: Internal.BlockState_): Internal.BlockState;
        getChanceModifier(): number;
        get age(): Internal.WeatheringCopper$WeatherState
        get chanceModifier(): number
        (): Internal.WeatheringCopper$WeatherState_;
        readonly PREVIOUS_BY_BLOCK: Internal.Supplier<Internal.BiMap<Internal.Block, Internal.Block>>;
        readonly NEXT_BY_BLOCK: Internal.Supplier<Internal.BiMap<Internal.Block, Internal.Block>>;
    }
    type WeatheringCopper_ = WeatheringCopper;
    class DragonHoldingPatternPhase extends Internal.AbstractDragonPhaseInstance {
        constructor(arg0: Internal.EnderDragon_)
        getPhase(): Internal.EnderDragonPhase<Internal.DragonHoldingPatternPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonHoldingPatternPhase>
    }
    type DragonHoldingPatternPhase_ = DragonHoldingPatternPhase;
    class ClientboundSetPlayerTeamPacket$Parameters {
        constructor(arg0: Internal.PlayerTeam_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        getDisplayName(): net.minecraft.network.chat.Component;
        getNametagVisibility(): string;
        getCollisionRule(): string;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getPlayerPrefix(): net.minecraft.network.chat.Component;
        getColor(): Internal.ChatFormatting;
        getPlayerSuffix(): net.minecraft.network.chat.Component;
        getOptions(): number;
        get displayName(): net.minecraft.network.chat.Component
        get nametagVisibility(): string
        get collisionRule(): string
        get playerPrefix(): net.minecraft.network.chat.Component
        get color(): Internal.ChatFormatting
        get playerSuffix(): net.minecraft.network.chat.Component
        get options(): number
    }
    type ClientboundSetPlayerTeamPacket$Parameters_ = ClientboundSetPlayerTeamPacket$Parameters;
    /**
     * Invoked when an entity is about to be added to the world.
     * 
     * This event also fires for existing entities when they are loaded from a save.
    */
    class EntitySpawnedEventJS extends Internal.EntityEventJS {
        constructor(entity: Internal.Entity_, level: Internal.Level_)
    }
    type EntitySpawnedEventJS_ = EntitySpawnedEventJS;
    class StrSubstitutor implements Internal.ConfigurationAware {
        constructor()
        constructor(variableResolver: Internal.StrLookup_, prefixMatcher: Internal.StrMatcher_, suffixMatcher: Internal.StrMatcher_, escape: string, valueDelimiterMatcher: Internal.StrMatcher_)
        constructor(variableResolver: Internal.StrLookup_, prefix: string, suffix: string, escape: string, valueDelimiter: string)
        constructor(variableResolver: Internal.StrLookup_, prefixMatcher: Internal.StrMatcher_, suffixMatcher: Internal.StrMatcher_, escape: string, valueDelimiterMatcher: Internal.StrMatcher_, valueEscapeMatcher: Internal.StrMatcher_)
        constructor(variableResolver: Internal.StrLookup_, prefixMatcher: Internal.StrMatcher_, suffixMatcher: Internal.StrMatcher_, escape: string)
        constructor(variableResolver: Internal.StrLookup_, prefix: string, suffix: string, escape: string)
        constructor(valueMap: Internal.Map_<string, string>)
        constructor(variableResolver: Internal.StrLookup_)
        constructor(valueMap: Internal.Map_<string, string>, prefix: string, suffix: string, escape: string)
        constructor(valueMap: Internal.Map_<string, string>, prefix: string, suffix: string, escape: string, valueDelimiter: string)
        constructor(valueMap: Internal.Map_<string, string>, prefix: string, suffix: string)
        constructor(properties: Internal.Properties_)
        replaceIn(event: Internal.LogEvent_, source: Internal.StringBuilder_, offset: number, length: number): boolean;
        appendWithSeparators(sb: Internal.StringBuilder_, iterable: Internal.Iterable_<any>, separator: string): void;
        setValueDelimiter(valueDelimiter: string): this;
        setEnableSubstitutionInVariables(enableSubstitutionInVariables: boolean): void;
        replace(source: Internal.StringBuffer_): string;
        getVariablePrefixMatcher(): Internal.StrMatcher;
        setVariablePrefix(prefix: string): this;
        static replace(source: any, valueMap: Internal.Map_<string, string>): string;
        replace(event: Internal.LogEvent_, source: any): string;
        setVariablePrefix(prefix: string): this;
        setVariableSuffixMatcher(suffixMatcher: Internal.StrMatcher_): this;
        setVariableSuffix(suffix: string): this;
        replaceIn(source: Internal.StringBuilder_, offset: number, length: number): boolean;
        replace(event: Internal.LogEvent_, source: string[]): string;
        replace(event: Internal.LogEvent_, source: string, offset: number, length: number): string;
        replace(source: string, offset: number, length: number): string;
        replaceIn(source: Internal.StringBuffer_, offset: number, length: number): boolean;
        replaceIn(source: Internal.StringBuilder_): boolean;
        setVariableSuffix(suffix: string): this;
        getVariableSuffixMatcher(): Internal.StrMatcher;
        replace(event: Internal.LogEvent_, source: Internal.StringBuilder_): string;
        setValueDelimiter(valueDelimiter: string): this;
        replaceIn(event: Internal.LogEvent_, source: Internal.StringBuilder_): boolean;
        replace(event: Internal.LogEvent_, source: string): string;
        getValueDelimiterMatcher(): Internal.StrMatcher;
        setVariableResolver(variableResolver: Internal.StrLookup_): void;
        static replace(source: any, valueMap: Internal.Map_<string, string>, prefix: string, suffix: string): string;
        replaceIn(source: Internal.StringBuffer_): boolean;
        replaceIn(event: Internal.LogEvent_, source: Internal.StringBuffer_, offset: number, length: number): boolean;
        replace(event: Internal.LogEvent_, source: Internal.StringBuffer_): string;
        setValueDelimiterMatcher(valueDelimiterMatcher: Internal.StrMatcher_): this;
        replace(event: Internal.LogEvent_, source: string[], offset: number, length: number): string;
        setEscapeChar(escapeCharacter: string): void;
        static replace(source: any, valueProperties: Internal.Properties_): string;
        replace(source: string[], offset: number, length: number): string;
        replace(source: Internal.StringBuilder_): string;
        replace(source: Internal.StringBuffer_, offset: number, length: number): string;
        setConfiguration(configuration: org.apache.logging.log4j.core.config.Configuration_): void;
        getVariableResolver(): Internal.StrLookup;
        replace(source: string): string;
        replace(source: any): string;
        replace(source: string[]): string;
        replace(event: Internal.LogEvent_, source: Internal.StringBuilder_, offset: number, length: number): string;
        setVariablePrefixMatcher(prefixMatcher: Internal.StrMatcher_): this;
        replace(event: Internal.LogEvent_, source: Internal.StringBuffer_, offset: number, length: number): string;
        replace(source: Internal.StringBuilder_, offset: number, length: number): string;
        getEscapeChar(): string;
        isEnableSubstitutionInVariables(): boolean;
        set valueDelimiter(valueDelimiter: string)
        set enableSubstitutionInVariables(enableSubstitutionInVariables: boolean)
        get variablePrefixMatcher(): Internal.StrMatcher
        set variablePrefix(prefix: string)
        set variablePrefix(prefix: string)
        set variableSuffixMatcher(suffixMatcher: Internal.StrMatcher_)
        set variableSuffix(suffix: string)
        set variableSuffix(suffix: string)
        get variableSuffixMatcher(): Internal.StrMatcher
        set valueDelimiter(valueDelimiter: string)
        get valueDelimiterMatcher(): Internal.StrMatcher
        set variableResolver(variableResolver: Internal.StrLookup_)
        set valueDelimiterMatcher(valueDelimiterMatcher: Internal.StrMatcher_)
        set escapeChar(escapeCharacter: string)
        set configuration(configuration: org.apache.logging.log4j.core.config.Configuration_)
        get variableResolver(): Internal.StrLookup
        set variablePrefixMatcher(prefixMatcher: Internal.StrMatcher_)
        get escapeChar(): string
        get enableSubstitutionInVariables(): boolean
        static readonly DEFAULT_SUFFIX: Internal.StrMatcher$StringMatcher;
        static readonly DEFAULT_VALUE_ESCAPE_DELIMITER: Internal.StrMatcher$StringMatcher;
        static readonly ESCAPE_DELIMITER_STRING: ":\\-";
        static readonly DEFAULT_VALUE_DELIMITER: Internal.StrMatcher$StringMatcher;
        static readonly DEFAULT_ESCAPE: "$";
        static readonly DEFAULT_PREFIX: Internal.StrMatcher$StringMatcher;
        static readonly DEFAULT_VALUE_DELIMITER_STRING: ":-";
    }
    type StrSubstitutor_ = StrSubstitutor;
    class ClientboundAwardStatsPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Object2IntMap_<Internal.Stat<any>>)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getStats(): Internal.Map<Internal.Stat<any>, number>;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get stats(): Internal.Map<Internal.Stat<any>, number>
        get skippable(): boolean
    }
    type ClientboundAwardStatsPacket_ = ClientboundAwardStatsPacket;
    class RegisterEntitySpectatorShadersEvent extends net.minecraftforge.eventbus.api.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<Internal.EntityType<any>, ResourceLocation>)
        register(arg0: Internal.EntityType_<any>, arg1: ResourceLocation_): void;
    }
    type RegisterEntitySpectatorShadersEvent_ = RegisterEntitySpectatorShadersEvent;
    interface Control {
    }
    type Control_ = Control;
    interface RecipeManagerAccessor {
        abstract getContext(): Internal.ICondition$IContext;
        get context(): Internal.ICondition$IContext
        (): Internal.ICondition$IContext_;
    }
    type RecipeManagerAccessor_ = RecipeManagerAccessor;
    interface OpenEndedPipe$IEffectHandler {
        abstract applyEffects(arg0: Internal.OpenEndedPipe_, arg1: Internal.FluidStack_): void;
        abstract canApplyEffects(arg0: Internal.OpenEndedPipe_, arg1: Internal.FluidStack_): boolean;
    }
    type OpenEndedPipe$IEffectHandler_ = OpenEndedPipe$IEffectHandler;
    class HugeGlowShroomBlock extends Internal.HugeMushroomBlock implements Internal.IZetaBlockExtensions, Internal.IForgeBlock, Internal.IZetaBlock {
        constructor(arg0: string, arg1: Internal.ZetaModule_, arg2: boolean)
        static isEnabled(arg0: Internal.Item_): boolean;
        canStickToZeta(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        isScaffoldingZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        static place(arg0: Internal.LevelAccessor_, arg1: Internal.RandomSource_, arg2: BlockPos_): boolean;
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
    type HugeGlowShroomBlock_ = HugeGlowShroomBlock;
    interface ParticleRenderType {
        abstract begin(arg0: Internal.BufferBuilder_, arg1: Internal.TextureManager_): void;
        abstract end(arg0: Internal.Tesselator_): void;
        readonly TERRAIN_SHEET: Internal.ParticleRenderType;
        readonly CUSTOM: Internal.ParticleRenderType;
        readonly PARTICLE_SHEET_OPAQUE: Internal.ParticleRenderType;
        readonly PARTICLE_SHEET_LIT: Internal.ParticleRenderType;
        readonly NO_RENDER: Internal.ParticleRenderType;
        readonly PARTICLE_SHEET_TRANSLUCENT: Internal.ParticleRenderType;
    }
    type ParticleRenderType_ = ParticleRenderType;
    class LevelEvent$Unload extends Internal.LevelEvent {
        constructor()
        constructor(arg0: Internal.LevelAccessor_)
    }
    type LevelEvent$Unload_ = LevelEvent$Unload;
    class FrogspawnBlock extends Internal.Block {
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
        static setDefaultHatchDelay(): void;
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
        static setHatchDelay(arg0: number, arg1: number): void;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type FrogspawnBlock_ = FrogspawnBlock;
    class ThresholdSwitchBlock extends Internal.DirectedDirectionalBlock implements Internal.IBE<Internal.ThresholdSwitchBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        getBlockEntityClass(): typeof Internal.ThresholdSwitchBlockEntity;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.ThresholdSwitchBlockEntity>): void;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ThresholdSwitchBlockEntity;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.ThresholdSwitchBlockEntity, InteractionResult>): InteractionResult;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getBlockEntityType(): Internal.BlockEntityType<Internal.ThresholdSwitchBlockEntity>;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.ThresholdSwitchBlockEntity>;
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
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get blockEntityClass(): typeof Internal.ThresholdSwitchBlockEntity
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.ThresholdSwitchBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly LEVEL: Internal.IntegerProperty;
    }
    type ThresholdSwitchBlock_ = ThresholdSwitchBlock;
    class WildCropFeature extends Internal.Feature<any> {
        constructor(arg0: Internal.Codec_<any>)
    }
    type WildCropFeature_ = WildCropFeature;
    class BiomeModificationsImpl$BiomeModifierImpl implements Internal.BiomeModifier {
        codec(): Internal.Codec<Internal.BiomeModifier>;
        modify(arg: Internal.Holder_<Internal.Biome>, phase: Internal.BiomeModifier$Phase_, builder: Internal.ModifiableBiomeInfo$BiomeInfo$Builder_): void;
    }
    type BiomeModificationsImpl$BiomeModifierImpl_ = BiomeModificationsImpl$BiomeModifierImpl;
    class Brain$Provider <E extends Internal.LivingEntity> {
        makeBrain(arg0: Internal.Dynamic_<any>): Internal.Brain<E>;
    }
    type Brain$Provider_<E extends Internal.LivingEntity> = Brain$Provider<E>;
    class Tooltip implements Internal.TooltipAccessor, Internal.NarrationSupplier {
        toCharSequence(arg0: Internal.Minecraft_): Internal.List<Internal.FormattedCharSequence>;
        static splitTooltip(arg0: Internal.Minecraft_, arg1: net.minecraft.network.chat.Component_): Internal.List<Internal.FormattedCharSequence>;
        updateNarration(arg0: Internal.NarrationElementOutput_): void;
        static create(arg0: net.minecraft.network.chat.Component_, arg1: net.minecraft.network.chat.Component_): Internal.Tooltip;
        static create(arg0: net.minecraft.network.chat.Component_): Internal.Tooltip;
        puzzleslib$setCachedTooltip(arg0: Internal.List_<any>): void;
    }
    type Tooltip_ = Tooltip;
    class ClientboundInitializeBorderPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.WorldBorder_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getLerpTime(): number;
        getOldSize(): number;
        getWarningBlocks(): number;
        getNewSize(): number;
        getNewCenterX(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getNewCenterZ(): number;
        getWarningTime(): number;
        getNewAbsoluteMaxSize(): number;
        isSkippable(): boolean;
        get lerpTime(): number
        get oldSize(): number
        get warningBlocks(): number
        get newSize(): number
        get newCenterX(): number
        get newCenterZ(): number
        get warningTime(): number
        get newAbsoluteMaxSize(): number
        get skippable(): boolean
    }
    type ClientboundInitializeBorderPacket_ = ClientboundInitializeBorderPacket;
    abstract class ConfigFromString <T> extends Internal.ConfigValue<T> {
        constructor()
        scrollValue(forward: boolean): boolean;
        abstract parse(arg0: Internal.Consumer_<T>, arg1: string): boolean;
        getStringFromValue(v: T): string;
    }
    type ConfigFromString_<T> = ConfigFromString<T>;
    abstract class BlockEntityDrawers extends Internal.BaseBlockEntity implements Internal.IDrawerGroup {
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        getDrawerAttributes(): Internal.IDrawerAttributes;
        abstract getGroup(): Internal.IDrawerGroup;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getAccessibleDrawerSlots(): number[];
        interactPutItemsIntoSlot(arg0: number, arg1: Internal.Player_): number;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        putItemsIntoSlot(arg0: number, arg1: Internal.ItemStack_, arg2: number): number;
        isRedstone(): boolean;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        isGroupValid(): boolean;
        upgrades(): com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.UpgradeData;
        deserializeNBT(arg0: Internal.Tag_): void;
        getRedstoneLevel(): number;
        getEffectiveDrawerCapacity(): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        clientUpdateCount(arg0: number, arg1: number): void;
        takeItemsFromSlot(arg0: number, arg1: number): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDrawerCapacity(): number;
        /**
         * @deprecated
        */
        getDrawerCount(): number;
        interactPutCurrentInventoryIntoSlot(arg0: number, arg1: Internal.Player_): number;
        interactPutCurrentItemIntoSlot(arg0: number, arg1: Internal.Player_): number;
        /**
         * @deprecated
        */
        getDrawer(arg0: number): Internal.IDrawer;
        getRenderBoundingBox(): Internal.AABB;
        get drawerAttributes(): Internal.IDrawerAttributes
        get group(): Internal.IDrawerGroup
        /**
         * @deprecated
        */
        get accessibleDrawerSlots(): number[]
        get redstone(): boolean
        get groupValid(): boolean
        get redstoneLevel(): number
        get effectiveDrawerCapacity(): number
        get drawerCapacity(): number
        /**
         * @deprecated
        */
        get drawerCount(): number
        get renderBoundingBox(): Internal.AABB
        static readonly ATTRIBUTES: Internal.ModelProperty<Internal.IDrawerAttributes>;
        static DRAWER_GROUP_CAPABILITY: Internal.Capability<Internal.IDrawerGroup>;
    }
    type BlockEntityDrawers_ = BlockEntityDrawers;
    class LootDataManager implements Internal.LootDataResolver, Internal.PreparableReloadListener, Internal.LootTablesKJS {
        constructor()
        getLootTable(arg0: ResourceLocation_): Internal.LootTable;
        getElement<T>(arg0: Internal.LootDataType_<T>, arg1: ResourceLocation_): T;
        getKeys(arg0: Internal.LootDataType_<any>): Internal.Collection<ResourceLocation>;
        handler$bbo000$apply(parsedMap: Internal.Map_<any, any>, ci: Internal.CallbackInfo_): void;
        static kjs$postLootEvents(map: Internal.Map_<ResourceLocation, Internal.JsonElement>): void;
        getElementOptional<T>(arg0: Internal.LootDataType_<T>, arg1: ResourceLocation_): Internal.Optional<T>;
        getElement<T>(arg0: Internal.LootDataId_<T>): T;
        static createComposite(arg0: Internal.LootItemCondition_[]): Internal.LootItemCondition;
        getName(): string;
        getElementOptional<T>(arg0: Internal.LootDataId_<T>): Internal.Optional<T>;
        kjs$completeReload(parsedMap: Internal.Map_<Internal.LootDataType<any>, Internal.Map<ResourceLocation, any>>, elements: Internal.Map_<Internal.LootDataId<any>, any>): void;
        static createComposite(arg0: Internal.LootItemFunction_[]): Internal.LootItemFunction;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get name(): string
        static readonly EMPTY_LOOT_TABLE_KEY: Internal.LootDataId<Internal.LootTable>;
    }
    type LootDataManager_ = LootDataManager;
    interface BlockEntityEventCallback {
        abstract accept(arg0: Internal.BlockEntityJS_, arg1: number): void;
        (arg0: Internal.BlockEntityJS, arg1: number): void;
    }
    type BlockEntityEventCallback_ = BlockEntityEventCallback;
    class ItemAttributeModifierEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Multimap_<Internal.Attribute, Internal.AttributeModifier>)
        getOriginalModifiers(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        removeAttribute(arg0: Internal.Attribute_): Internal.Collection<Internal.AttributeModifier>;
        removeModifier(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_): boolean;
        clearModifiers(): void;
        getModifiers(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getSlotType(): Internal.EquipmentSlot;
        addModifier(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_): boolean;
        getItemStack(): Internal.ItemStack;
        get originalModifiers(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>
        get modifiers(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>
        get slotType(): Internal.EquipmentSlot
        get itemStack(): Internal.ItemStack
    }
    type ItemAttributeModifierEvent_ = ItemAttributeModifierEvent;
    class BoatItem extends Internal.Item {
        constructor(arg0: boolean, arg1: Internal.Boat$Type_, arg2: Internal.Item$Properties_)
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
    type BoatItem_ = BoatItem;
    class ArrayOrSelf <T> {
    }
    type ArrayOrSelf_<T> = T | T[];
    class IntegerProperty extends Internal.Property<number> implements Internal.IntegerPropertyAccessor {
        getPossibleValues(): Internal.Collection<number>;
        getName(arg0: number): string;
        static create(arg0: string, arg1: number, arg2: number): Internal.IntegerProperty;
        getValue(arg0: string): Internal.Optional<number>;
        biomancy$getMax(): number;
        biomancy$getMin(): number;
        get possibleValues(): Internal.Collection<number>
    }
    type IntegerProperty_ = IntegerProperty;
    interface Closeable extends Internal.AutoCloseable {
        abstract close(): void;
        (): void;
    }
    type Closeable_ = Closeable;
    class Event$Result extends Internal.Enum<Internal.Event$Result> {
        static values(): Internal.Event$Result[];
        static valueOf(arg0: string): Internal.Event$Result;
        static readonly ALLOW: Internal.Event$Result;
        static readonly DEFAULT: Internal.Event$Result;
        static readonly DENY: Internal.Event$Result;
    }
    type Event$Result_ = "deny" | "allow" | "default" | Event$Result;
    class HugeBrownMushroomFeature extends Internal.AbstractHugeMushroomFeature {
        constructor(arg0: Internal.Codec_<Internal.HugeMushroomFeatureConfiguration>)
        wrapWithCondition$bmn000$isValidRepairItem(arg0: Internal.HugeBrownMushroomFeature_, arg1: Internal.LevelWriter_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
    }
    type HugeBrownMushroomFeature_ = HugeBrownMushroomFeature;
    interface MobEffectBuilder$EffectTickCallback {
        abstract applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        (arg0: Internal.LivingEntity, arg1: number): void;
    }
    type MobEffectBuilder$EffectTickCallback_ = MobEffectBuilder$EffectTickCallback;
    class Mule extends Internal.AbstractChestedHorse {
        constructor(arg0: Internal.EntityType_<Internal.Mule>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
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
    type Mule_ = Mule;
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
    type FuelBlockItem_ = FuelBlockItem;
}
declare namespace net.darkhax.bookshelf.mixin.accessors.entity {
    interface AccessorLivingEntity {
        abstract bookshelf$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        abstract bookshelf$getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        abstract bookshelf$makePoofParticles(): void;
        abstract bookshelf$getDeathSound(): Internal.SoundEvent;
        abstract bookshelf$getFallDamageSound(arg0: number): Internal.SoundEvent;
    }
    type AccessorLivingEntity_ = AccessorLivingEntity;
}
declare namespace org.slf4j.spi {
    interface LocationAwareLogger extends org.slf4j.Logger {
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
        abstract log(arg0: org.slf4j.Marker_, arg1: string, arg2: number, arg3: string, arg4: any[], arg5: Internal.Throwable_): void;
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
        readonly INFO_INT: 20;
        readonly TRACE_INT: 0;
        readonly DEBUG_INT: 10;
        readonly ERROR_INT: 40;
        readonly WARN_INT: 30;
    }
    type LocationAwareLogger_ = LocationAwareLogger;
}
