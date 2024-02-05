/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class BeaconBlockEntity$BeaconBeamSection {
        constructor(arg0: number[])
        getColor(): number[];
        getHeight(): number;
        get color(): number[]
        get height(): number
    }
    type BeaconBlockEntity$BeaconBeamSection_ = BeaconBlockEntity$BeaconBeamSection;
    abstract class BaseRailBlock extends Internal.Block implements Internal.IForgeBaseRailBlock, Internal.SimpleWaterloggedBlock {
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
        onMinecartPass(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): void;
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
        isFlexibleRail(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
        /**
         * @deprecated
        */
        abstract getShapeProperty(): Internal.Property<Internal.RailShape>;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isRail(arg0: Internal.BlockState_): boolean;
        static isRail(arg0: Internal.Level_, arg1: BlockPos_): boolean;
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
        isStraight(): boolean;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        isValidRailShape(arg0: Internal.RailShape_): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getRailDirection(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): Internal.RailShape;
        canMakeSlopes(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getRailMaxSpeed(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        /**
         * @deprecated
        */
        get shapeProperty(): Internal.Property<Internal.RailShape>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get straight(): boolean
        get mod(): string
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type BaseRailBlock_ = BaseRailBlock;
    class ExtraModelDataImpl extends Internal.Record implements Internal.ExtraModelData {
        constructor(data: Internal.ModelData_)
        static builder(): Internal.ExtraModelData$Builder;
        data(): Internal.ModelData;
        isEmpty(): boolean;
        get<T>(key: Internal.ModelDataKey_<T>): T;
        get empty(): boolean
    }
    type ExtraModelDataImpl_ = ExtraModelDataImpl;
    interface IJeiRuntime {
        abstract getEditModeConfig(): Internal.IEditModeConfig;
        abstract getIngredientVisibility(): Internal.IIngredientVisibility;
        abstract getJeiHelpers(): Internal.IJeiHelpers;
        abstract getKeyMappings(): Internal.IJeiKeyMappings;
        abstract getIngredientManager(): Internal.IIngredientManager;
        abstract getRecipesGui(): Internal.IRecipesGui;
        abstract getConfigManager(): Internal.IJeiConfigManager;
        abstract getIngredientListOverlay(): Internal.IIngredientListOverlay;
        abstract getIngredientFilter(): Internal.IIngredientFilter;
        abstract getRecipeTransferManager(): Internal.IRecipeTransferManager;
        abstract getBookmarkOverlay(): Internal.IBookmarkOverlay;
        abstract getRecipeManager(): Internal.IRecipeManager;
        abstract getScreenHelper(): Internal.IScreenHelper;
        get editModeConfig(): Internal.IEditModeConfig
        get ingredientVisibility(): Internal.IIngredientVisibility
        get jeiHelpers(): Internal.IJeiHelpers
        get keyMappings(): Internal.IJeiKeyMappings
        get ingredientManager(): Internal.IIngredientManager
        get recipesGui(): Internal.IRecipesGui
        get configManager(): Internal.IJeiConfigManager
        get ingredientListOverlay(): Internal.IIngredientListOverlay
        get ingredientFilter(): Internal.IIngredientFilter
        get recipeTransferManager(): Internal.IRecipeTransferManager
        get bookmarkOverlay(): Internal.IBookmarkOverlay
        get recipeManager(): Internal.IRecipeManager
        get screenHelper(): Internal.IScreenHelper
    }
    type IJeiRuntime_ = IJeiRuntime;
    interface IForgeItem {
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        abstract isRepairable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
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
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        (arg0: Internal.ItemStack): boolean;
    }
    type IForgeItem_ = IForgeItem;
    class DiskFeature extends Internal.Feature<Internal.DiskConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.DiskConfiguration>)
    }
    type DiskFeature_ = DiskFeature;
    class BargainDialog extends Internal.Record {
        constructor(initialDialog: Internal.List_<Internal.BargainDialog$Dialog>, initialDialogFallback: Internal.BargainDialog$Dialog_, successDialog: Internal.List_<Internal.BargainDialog$Dialog>, successDialogFallback: Internal.BargainDialog$Dialog_, failDialog: Internal.List_<Internal.BargainDialog$Dialog>, failDialogFallback: Internal.BargainDialog$Dialog_)
        randomInitialDialog(random: Internal.Random_): Internal.Component;
        successDialogFallback(): Internal.BargainDialog$Dialog;
        initialDialogFallback(): Internal.BargainDialog$Dialog;
        successDialog(): Internal.List<Internal.BargainDialog$Dialog>;
        failDialogFallback(): Internal.BargainDialog$Dialog;
        initialDialog(): Internal.List<Internal.BargainDialog$Dialog>;
        randomSuccessDialog(random: Internal.Random_, tags: Internal.Set_<string>): Internal.Component;
        failDialog(): Internal.List<Internal.BargainDialog$Dialog>;
        randomFailDialog(random: Internal.Random_, tags: Internal.Set_<string>, failReasons: Internal.Set_<string>): Internal.Component;
        static readonly EMPTY: Internal.BargainDialog;
        static readonly CODEC: Internal.Codec<Internal.BargainDialog>;
    }
    type BargainDialog_ = BargainDialog;
    class BrushableBlock extends Internal.BaseEntityBlock implements Internal.Fallable {
        constructor(arg0: Internal.Block_, arg1: Internal.BlockBehaviour$Properties_, arg2: Internal.SoundEvent_, arg3: Internal.SoundEvent_)
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
        getBrushSound(): Internal.SoundEvent;
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
        getBrushCompletedSound(): Internal.SoundEvent;
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
        getTurnsInto(): Internal.Block;
        getFallDamageSource(arg0: Internal.Entity_): DamageSource;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get brushSound(): Internal.SoundEvent
        get blockStates(): Internal.List<Internal.BlockState>
        get brushCompletedSound(): Internal.SoundEvent
        set requiresTool(v: boolean)
        get mod(): string
        get turnsInto(): Internal.Block
        static readonly TICK_DELAY: 2;
    }
    type BrushableBlock_ = BrushableBlock;
    interface LightChunkGetter {
        abstract getLevel(): Internal.BlockGetter;
        abstract getChunkForLighting(arg0: number, arg1: number): Internal.LightChunk;
        onLightUpdate(arg0: Internal.LightLayer_, arg1: Internal.SectionPos_): void;
        get level(): Internal.BlockGetter
    }
    type LightChunkGetter_ = LightChunkGetter;
    class StairsShape extends Internal.Enum<Internal.StairsShape> implements Internal.StringRepresentable {
        static values(): Internal.StairsShape[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.StairsShape;
        getSerializedName(): string;
        get serializedName(): string
        static readonly OUTER_LEFT: Internal.StairsShape;
        static readonly INNER_RIGHT: Internal.StairsShape;
        static readonly STRAIGHT: Internal.StairsShape;
        static readonly OUTER_RIGHT: Internal.StairsShape;
        static readonly INNER_LEFT: Internal.StairsShape;
    }
    type StairsShape_ = "inner_left" | "outer_left" | StairsShape | "outer_right" | "inner_right" | "straight";
    class RenderStateShard$TexturingStateShard extends Internal.RenderStateShard {
        constructor(arg0: string, arg1: Internal.Runnable_, arg2: Internal.Runnable_)
    }
    type RenderStateShard$TexturingStateShard_ = RenderStateShard$TexturingStateShard;
    class SpecialRecipeSerializerManager extends Internal.EventJS {
        constructor()
        isSpecial(recipe: Internal.Recipe_<any>): boolean;
        ignoreSpecialMod(modid: string): void;
        ignoreSpecialFlag(id: ResourceLocation_): void;
        addSpecialMod(modid: string): void;
        reset(): void;
        addSpecialFlag(id: ResourceLocation_): void;
        static readonly INSTANCE: Internal.SpecialRecipeSerializerManager;
        static readonly EVENT: dev.architectury.event.Event<Internal.Runnable>;
    }
    type SpecialRecipeSerializerManager_ = SpecialRecipeSerializerManager;
    class ServerboundSetBeaconPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.Optional_<Internal.MobEffect>, arg1: Internal.Optional_<Internal.MobEffect>)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getSecondary(): Internal.Optional<Internal.MobEffect>;
        getPrimary(): Internal.Optional<Internal.MobEffect>;
        isSkippable(): boolean;
        get secondary(): Internal.Optional<Internal.MobEffect>
        get primary(): Internal.Optional<Internal.MobEffect>
        get skippable(): boolean
    }
    type ServerboundSetBeaconPacket_ = ServerboundSetBeaconPacket;
    interface Vector3ic {
        abstract maxComponent(): number;
        abstract z(): number;
        abstract y(): number;
        abstract x(): number;
        abstract min(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract div(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract mul(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract sub(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): Internal.Vector3i;
        abstract negate(arg0: Internal.Vector3i_): Internal.Vector3i;
        abstract add(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): Internal.Vector3i;
        abstract mul(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract distanceSquared(arg0: Internal.Vector3ic_): number;
        abstract get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        abstract absolute(arg0: Internal.Vector3i_): Internal.Vector3i;
        abstract max(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract distance(arg0: number, arg1: number, arg2: number): number;
        abstract div(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract distanceSquared(arg0: number, arg1: number, arg2: number): number;
        abstract gridDistance(arg0: Internal.Vector3ic_): number;
        abstract sub(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract getToAddress(arg0: number): this;
        abstract lengthSquared(): number;
        abstract equals(arg0: number, arg1: number, arg2: number): boolean;
        abstract distance(arg0: Internal.Vector3ic_): number;
        abstract length(): number;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: number): number;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): Internal.Vector3i;
        abstract gridDistance(arg0: number, arg1: number, arg2: number): number;
        abstract minComponent(): number;
    }
    type Vector3ic_ = Vector3ic;
    interface ArmorMaterial {
        abstract getDefenseForType(arg0: Internal.ArmorItem$Type_): number;
        abstract getDurabilityForType(arg0: Internal.ArmorItem$Type_): number;
        abstract getRepairIngredient(): Internal.Ingredient;
        abstract getEnchantmentValue(): number;
        abstract getName(): string;
        abstract getToughness(): number;
        abstract getKnockbackResistance(): number;
        abstract getEquipSound(): Internal.SoundEvent;
        get repairIngredient(): Internal.Ingredient
        get enchantmentValue(): number
        get name(): string
        get toughness(): number
        get knockbackResistance(): number
        get equipSound(): Internal.SoundEvent
    }
    type ArmorMaterial_ = string | ArmorMaterial;
    class Minecraft extends Internal.ReentrantBlockableEventLoop<Internal.Runnable> implements Internal.WindowEventHandler, Internal.IForgeMinecraft, Internal.MinecraftClientKJS, Internal.AccessorMinecraft, Internal.PausedPartialTickAccessor {
        constructor(arg0: any_)
        getReportingContext(): Internal.ReportingContext;
        getResourcePackDirectory(): Internal.Path;
        debugFpsMeterKeyPress(arg0: number): void;
        destroy(): void;
        delayCrashRaw(arg0: Internal.CrashReport_): void;
        renderOnThread(): boolean;
        showOnlyReducedInfo(): boolean;
        clearLevel(arg0: Internal.Screen_): void;
        getGpuUtilization(): number;
        flywheel$getPausePartialTick(): number;
        getCurrentServer(): Internal.ServerData;
        getFps(): number;
        getProxy(): Internal.Proxy;
        getResourceManager(): Internal.ResourceManager;
        getOverlay(): Internal.Overlay;
        shouldEntityAppearGlowing(arg0: Internal.Entity_): boolean;
        getToasts(): Internal.ToastComponent;
        pushGuiLayer(arg0: Internal.Screen_): void;
        getSoundManager(): Internal.SoundManager;
        static useShaderTransparency(): boolean;
        getSplashManager(): Internal.SplashManager;
        scheduleInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        handler$zbk000$joinWorld(arg0: Internal.ClientLevel_, arg1: Internal.CallbackInfo_): void;
        runCommandSilent(command: string): number;
        scheduleRepeatingInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        setConnectedToRealms(arg0: boolean): void;
        quickPlayLog(): Internal.QuickPlayLog;
        getFrameTimer(): Internal.FrameTimer;
        getResourcePackRepository(): Internal.PackRepository;
        debugClientMetricsStart(arg0: Internal.Consumer_<Internal.Component>): boolean;
        getBlockEntityRenderDispatcher(): Internal.BlockEntityRenderDispatcher;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, Internal.Runnable>): Internal.CompletableFuture<Source>;
        getLevelSource(): Internal.LevelStorageSource;
        getMainRenderTarget(): Internal.RenderTarget;
        getBlockRenderer(): Internal.BlockRenderDispatcher;
        setTitle(t: string): void;
        grabPanoramixScreenshot(arg0: Internal.File_, arg1: number, arg2: number): Internal.Component;
        getFrameTimeNs(): number;
        getSkinManager(): Internal.SkinManager;
        allowsRealms(): boolean;
        getVersionType(): string;
        getGpuWarnlistManager(): Internal.GpuWarnlistManager;
        forceSetScreen(arg0: Internal.Screen_): void;
        is64Bit(): boolean;
        populateSearchTree<T>(arg0: Internal.SearchRegistry$Key_<T>, arg1: Internal.List_<T>): void;
        getTextureManager(): Internal.TextureManager;
        getRealms32BitWarningStatus(): Internal.Realms32BitWarningStatus;
        getDisplayName(): Internal.Component;
        getPartialTick(): number;
        isSingleplayer(): boolean;
        getHotbarManager(): Internal.HotbarManager;
        run(): void;
        static fillReport(arg0: Internal.Minecraft_, arg1: Internal.LanguageManager_, arg2: string, arg3: Internal.Options_, arg4: Internal.CrashReport_): void;
        resizeDisplay(): void;
        setOverlay(arg0: Internal.Overlay_): void;
        static useAmbientOcclusion(): boolean;
        isAltDown(): boolean;
        isLocalServer(): boolean;
        hasSingleplayerServer(): boolean;
        getTutorial(): Internal.Tutorial;
        getEntityModels(): Internal.EntityModelSet;
        getDeltaFrameTime(): number;
        clearLevel(): void;
        getSearchTree<T>(arg0: Internal.SearchRegistry$Key_<T>): Internal.SearchTree<T>;
        setLastInputType(arg0: Internal.InputType_): void;
        setWindowActive(arg0: boolean): void;
        clearResourcePacksOnError(arg0: Internal.Throwable_, arg1: Internal.Component_): void;
        static useFancyGraphics(): boolean;
        getMusicManager(): Internal.MusicManager;
        delayTextureReload(): Internal.CompletableFuture<void>;
        getTextureAtlas(arg0: ResourceLocation_): Internal.Function<ResourceLocation, Internal.TextureAtlasSprite>;
        getScheduledEvents(): Internal.ScheduledEvents;
        doWorldLoad(arg0: string, arg1: Internal.LevelStorageSource$LevelStorageAccess_, arg2: Internal.PackRepository_, arg3: Internal.WorldStem_, arg4: boolean): void;
        static crash(arg0: Internal.CrashReport_): void;
        getMobEffectTextures(): Internal.MobEffectTextureManager;
        getMinecraftSessionService(): Internal.MinecraftSessionService;
        getLastInputType(): Internal.InputType;
        allowsTelemetry(): boolean;
        getFrameTime(): number;
        multiplayerBan(): Internal.BanDetails;
        extraTelemetryAvailable(): boolean;
        getPaintingTextures(): Internal.PaintingTextureManager;
        reloadResourcePacks(): Internal.CompletableFuture<void>;
        getDownloadedPackSource(): Internal.DownloadedPackSource;
        realmsDataFetcher(): Internal.RealmsDataFetcher;
        getLanguageManager(): Internal.LanguageManager;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, Internal.Runnable>): Internal.CompletableFuture<Source>;
        setCurrentScreen(gui: Internal.Screen_): void;
        getItemColors(): Internal.ItemColors;
        getWindow(): Internal.Window;
        allowsMultiplayer(): boolean;
        getNarrator(): Internal.GameNarrator;
        getCurrentWorldName(): string;
        isCtrlDown(): boolean;
        prepareForMultiplayer(): void;
        schedule(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        setCameraEntity(arg0: Internal.Entity_): void;
        getChatStatus(): Internal.Minecraft$ChatStatus;
        getProfileProperties(): Internal.PropertyMap;
        pauseGame(arg0: boolean): void;
        getEntityRenderDispatcher(): Internal.EntityRenderDispatcher;
        isEnforceUnicode(): boolean;
        telemetryOptInExtra(): boolean;
        setLevel(arg0: Internal.ClientLevel_): void;
        updateTitle(): void;
        getVanillaPackResources(): Internal.VanillaPackResources;
        isRunning(): boolean;
        getName(): Internal.Component;
        isShiftDown(): boolean;
        getSituationalMusic(): Internal.Music;
        getSearchTreeManager(): Internal.SearchRegistry;
        tick(): void;
        getProgressListener(): Internal.StoringChunkProgressListener;
        updateMaxMipLevel(arg0: number): void;
        getLocale(): Internal.Locale;
        delayCrash(arg0: Internal.CrashReport_): void;
        stop(): void;
        isTextFilteringEnabled(): boolean;
        getTelemetryManager(): Internal.ClientTelemetryManager;
        isPaused(): boolean;
        getItemRenderer(): Internal.ItemRenderer;
        getUser(): Internal.User;
        static getInstance(): Internal.Minecraft;
        getChatListener(): Internal.ChatListener;
        self(): this;
        getSingleplayerServer(): Internal.IntegratedServer;
        static checkModStatus(): Internal.ModCheck;
        getProfiler(): Internal.ProfilerFiller;
        scheduleRepeating(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        isConnectedToRealms(): boolean;
        fillReport(arg0: Internal.CrashReport_): Internal.CrashReport;
        getProfileKeyPairManager(): Internal.ProfileKeyPairManager;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        createSearchTrees(): void;
        isKeyDown(key: number): boolean;
        isDemo(): boolean;
        emergencySave(): void;
        setScreen(arg0: Internal.Screen_): void;
        popGuiLayer(): void;
        getPlayerSocialManager(): Internal.PlayerSocialManager;
        isBlocked(arg0: Internal.UUID_): boolean;
        getModelManager(): Internal.ModelManager;
        renderBuffers(): Internal.RenderBuffers;
        getCurrentScreen(): Internal.Screen;
        tell(message: Internal.Component_): void;
        bookshelf$getFontManager(): Internal.FontManager;
        getProfileKeySignatureValidator(): Internal.SignatureValidator;
        getConnection(): Internal.ClientPacketListener;
        shouldShowBanNotice(): boolean;
        setStatusMessage(message: Internal.Component_): void;
        updateReportEnvironment(arg0: Internal.ReportEnvironment_): void;
        isWindowActive(): boolean;
        static renderNames(): boolean;
        getLaunchedVersion(): string;
        getFixerUpper(): Internal.DataFixer;
        cursorEntered(): void;
        createWorldOpenFlows(): Internal.WorldOpenFlows;
        runCommand(command: string): number;
        getCameraEntity(): Internal.Entity;
        getBlockColors(): Internal.BlockColors;
        get reportingContext(): Internal.ReportingContext
        get resourcePackDirectory(): Internal.Path
        get gpuUtilization(): number
        get currentServer(): Internal.ServerData
        get fps(): number
        get proxy(): Internal.Proxy
        get resourceManager(): Internal.ResourceManager
        get overlay(): Internal.Overlay
        get toasts(): Internal.ToastComponent
        get soundManager(): Internal.SoundManager
        get splashManager(): Internal.SplashManager
        set connectedToRealms(arg0: boolean)
        get frameTimer(): Internal.FrameTimer
        get resourcePackRepository(): Internal.PackRepository
        get blockEntityRenderDispatcher(): Internal.BlockEntityRenderDispatcher
        get levelSource(): Internal.LevelStorageSource
        get mainRenderTarget(): Internal.RenderTarget
        get blockRenderer(): Internal.BlockRenderDispatcher
        set title(t: string)
        get frameTimeNs(): number
        get skinManager(): Internal.SkinManager
        get versionType(): string
        get gpuWarnlistManager(): Internal.GpuWarnlistManager
        get textureManager(): Internal.TextureManager
        get realms32BitWarningStatus(): Internal.Realms32BitWarningStatus
        get displayName(): Internal.Component
        get partialTick(): number
        get singleplayer(): boolean
        get hotbarManager(): Internal.HotbarManager
        set overlay(arg0: Internal.Overlay_)
        get altDown(): boolean
        get localServer(): boolean
        get tutorial(): Internal.Tutorial
        get entityModels(): Internal.EntityModelSet
        get deltaFrameTime(): number
        set lastInputType(arg0: Internal.InputType_)
        set windowActive(arg0: boolean)
        get musicManager(): Internal.MusicManager
        get scheduledEvents(): Internal.ScheduledEvents
        get mobEffectTextures(): Internal.MobEffectTextureManager
        get minecraftSessionService(): Internal.MinecraftSessionService
        get lastInputType(): Internal.InputType
        get frameTime(): number
        get paintingTextures(): Internal.PaintingTextureManager
        get downloadedPackSource(): Internal.DownloadedPackSource
        get languageManager(): Internal.LanguageManager
        set currentScreen(gui: Internal.Screen_)
        get itemColors(): Internal.ItemColors
        get window(): Internal.Window
        get narrator(): Internal.GameNarrator
        get currentWorldName(): string
        get ctrlDown(): boolean
        set cameraEntity(arg0: Internal.Entity_)
        get chatStatus(): Internal.Minecraft$ChatStatus
        get profileProperties(): Internal.PropertyMap
        get entityRenderDispatcher(): Internal.EntityRenderDispatcher
        get enforceUnicode(): boolean
        set level(arg0: Internal.ClientLevel_)
        get vanillaPackResources(): Internal.VanillaPackResources
        get running(): boolean
        get name(): Internal.Component
        get shiftDown(): boolean
        get situationalMusic(): Internal.Music
        get searchTreeManager(): Internal.SearchRegistry
        get progressListener(): Internal.StoringChunkProgressListener
        get locale(): Internal.Locale
        get textFilteringEnabled(): boolean
        get telemetryManager(): Internal.ClientTelemetryManager
        get paused(): boolean
        get itemRenderer(): Internal.ItemRenderer
        get user(): Internal.User
        get instance(): Internal.Minecraft
        get chatListener(): Internal.ChatListener
        get singleplayerServer(): Internal.IntegratedServer
        get profiler(): Internal.ProfilerFiller
        get connectedToRealms(): boolean
        get profileKeyPairManager(): Internal.ProfileKeyPairManager
        get demo(): boolean
        set screen(arg0: Internal.Screen_)
        get playerSocialManager(): Internal.PlayerSocialManager
        get modelManager(): Internal.ModelManager
        get currentScreen(): Internal.Screen
        get profileKeySignatureValidator(): Internal.SignatureValidator
        get connection(): Internal.ClientPacketListener
        set statusMessage(message: Internal.Component_)
        get windowActive(): boolean
        get launchedVersion(): string
        get fixerUpper(): Internal.DataFixer
        get cameraEntity(): Internal.Entity
        get blockColors(): Internal.BlockColors
        level: Internal.ClientLevel;
        static readonly UNIFORM_FONT: ResourceLocation;
        readonly frameTimer: Internal.FrameTimer;
        pausePartialTick: number;
        fpsString: string;
        static readonly DEFAULT_FONT: ResourceLocation;
        readonly options: Internal.Options;
        chunkPath: boolean;
        noRender: boolean;
        cameraEntity: Internal.Entity;
        readonly fontFilterFishy: Internal.Font;
        hitResult: Internal.HitResult;
        static readonly ON_OSX: true;
        readonly textureManager: Internal.TextureManager;
        readonly debugRenderer: Internal.DebugRenderer;
        readonly gameDirectory: Internal.File;
        chunkVisibility: boolean;
        readonly particleEngine: Internal.ParticleEngine;
        screen: Internal.Screen;
        gameMode: Internal.MultiPlayerGameMode;
        readonly gameRenderer: Internal.GameRenderer;
        static readonly UPDATE_DRIVERS_ADVICE: "Please make sure you have up-to-date drivers (see aka.ms/mcdriver for instructions).";
        readonly mouseHandler: Internal.MouseHandler;
        smartCull: boolean;
        readonly font: Internal.Font;
        static readonly ALT_FONT: ResourceLocation;
        readonly gui: Internal.Gui;
        wireframe: boolean;
        crosshairPickEntity: Internal.Entity;
        readonly keyboardHandler: Internal.KeyboardHandler;
        readonly levelRenderer: Internal.LevelRenderer;
        player: Internal.LocalPlayer;
    }
    type Minecraft_ = Minecraft;
    abstract class MultipartShapedBlockBuilder extends Internal.ShapedBlockBuilder {
        constructor(i: ResourceLocation_, ...suffixes: string[])
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
    }
    type MultipartShapedBlockBuilder_ = MultipartShapedBlockBuilder;
    class ExtraCodecs$TagOrElementLocation extends Internal.Record {
        constructor(arg0: ResourceLocation_, arg1: boolean)
        tag(): boolean;
        id(): ResourceLocation;
        decoratedId(): string;
    }
    type ExtraCodecs$TagOrElementLocation_ = ExtraCodecs$TagOrElementLocation;
    class DataResult$PartialResult <R> {
        constructor(arg0: Internal.Supplier_<string>, arg1: Internal.Optional_<R>)
        message(): string;
        map<R2>(arg0: Internal.Function_<R, R2>): Internal.DataResult$PartialResult<R2>;
        flatMap<R2>(arg0: Internal.Function_<R, Internal.DataResult$PartialResult<R2>>): Internal.DataResult$PartialResult<R2>;
    }
    type DataResult$PartialResult_<R> = DataResult$PartialResult<R>;
    class TelemetryEventType$Builder {
        optIn(): this;
        defineAll(arg0: Internal.List_<Internal.TelemetryProperty<any>>): this;
        register(): Internal.TelemetryEventType;
        define<T>(arg0: Internal.TelemetryProperty_<T>): this;
    }
    type TelemetryEventType$Builder_ = TelemetryEventType$Builder;
    class WeatheringCopperStairBlock extends Internal.StairBlock implements Internal.WeatheringCopper {
        constructor(arg0: Internal.WeatheringCopper$WeatherState_, arg1: Internal.BlockState_, arg2: Internal.BlockBehaviour$Properties_)
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
        applyChangeOverTime(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static getPrevious(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
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
        static getFirst(arg0: Internal.Block_): Internal.Block;
        static getNext(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
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
        getAge(): Internal.WeatheringCopper$WeatherState;
        getNext(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        onRandomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
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
        static getPrevious(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        static getFirst(arg0: Internal.BlockState_): Internal.BlockState;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getChanceModifier(): number;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        get age(): Internal.WeatheringCopper$WeatherState
        set requiresTool(v: boolean)
        get mod(): string
        get chanceModifier(): number
    }
    type WeatheringCopperStairBlock_ = WeatheringCopperStairBlock;
    interface ICondition$IContext {
        abstract getAllTags<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Map<ResourceLocation, Internal.Collection<Internal.Holder<T>>>;
        getTag<T>(arg0: Internal.TagKey_<T>): Internal.Collection<Internal.Holder<T>>;
        (arg0: Internal.ResourceKey<Internal.Registry<T>>): Internal.Map_<ResourceLocation, Internal.Collection<Internal.Holder<T>>>;
        readonly EMPTY: Internal.ICondition$IContext;
        readonly TAGS_INVALID: Internal.ICondition$IContext;
    }
    type ICondition$IContext_ = ICondition$IContext;
    class Painter implements Internal.UnitVariables {
        constructor(id: string)
        inGameScreenDraw(graphics: Internal.GuiGraphics_, delta: number): void;
        registerBuiltinObjects(): void;
        unitOf(cx: Internal.Context_, o: any): Internal.Unit;
        getObject(key: string): Internal.PainterObject;
        clear(): void;
        make(type: string): Internal.PainterObject;
        getVariables(): Internal.VariableSet;
        paint(root: Internal.CompoundTag_): void;
        unitOf(console: Internal.ConsoleJS_, o: any): Internal.Unit;
        guiScreenDraw(screen: Internal.Screen_, graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, delta: number): void;
        setVariable(key: string, variable: Internal.Unit_): void;
        get variables(): Internal.VariableSet
        readonly mouseXUnit: Internal.MutableNumberUnit;
        readonly screenHeightUnit: Internal.MutableNumberUnit;
        readonly defaultLineSizeUnit: Internal.MutableNumberUnit;
        readonly id: string;
        static readonly INSTANCE: Internal.Painter;
        readonly screenWidthUnit: Internal.MutableNumberUnit;
        readonly deltaUnit: Internal.MutableNumberUnit;
        readonly unitContext: Internal.UnitContext;
        readonly mouseYUnit: Internal.MutableNumberUnit;
    }
    type Painter_ = Painter;
    class WeightedListInt extends Internal.IntProvider {
        constructor(arg0: Internal.SimpleWeightedRandomList_<Internal.IntProvider>)
        static readonly CODEC: Internal.Codec<Internal.WeightedListInt>;
    }
    type WeightedListInt_ = WeightedListInt;
    interface IOnePlayerGui extends Internal.IScreenProvider {
        abstract setPlayerWhoMayEdit(arg0: Internal.UUID_): void;
        shouldUseContainerMenu(): boolean;
        sendOpenGuiPacket(level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hitFace: Internal.Direction_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract openScreen(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        sendOpenGuiPacket(level: Internal.Level_, pos: BlockPos_, player: Internal.Player_): void;
        openScreen(level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, direction: Internal.Direction_): void;
        validatePlayerWhoMayEdit(level: Internal.Level_, pos: BlockPos_): void;
        playerIsTooFarAwayToEdit(level: Internal.Level_, pos: BlockPos_, uUID: Internal.UUID_): boolean;
        abstract getPlayerWhoMayEdit(): Internal.UUID;
        tryOpeningEditGui(player: Internal.ServerPlayer_, pos: BlockPos_): boolean;
        isOtherPlayerEditing(player: Internal.Player_): boolean;
        set playerWhoMayEdit(arg0: Internal.UUID_)
        get playerWhoMayEdit(): Internal.UUID
    }
    type IOnePlayerGui_ = IOnePlayerGui;
    class SchematicTableBlock extends Internal.HorizontalDirectionalBlock implements Internal.IBE<Internal.SchematicTableBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.SchematicTableBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getBlockEntityClass(): typeof Internal.SchematicTableBlockEntity;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.SchematicTableBlockEntity>;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getBlockEntityType(): Internal.BlockEntityType<Internal.SchematicTableBlockEntity>;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.SchematicTableBlockEntity>): void;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.SchematicTableBlockEntity;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get blockEntityClass(): typeof Internal.SchematicTableBlockEntity
        set lightEmission(v: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.SchematicTableBlockEntity>
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type SchematicTableBlock_ = SchematicTableBlock;
    interface IModIdHelper {
        abstract addModNameToIngredientTooltip<T>(arg0: Internal.List_<Internal.Component>, arg1: T, arg2: Internal.IIngredientHelper_<T>): Internal.List<Internal.Component>;
        abstract addModNameToIngredientTooltip<T>(arg0: Internal.List_<Internal.Component>, arg1: Internal.ITypedIngredient_<T>): Internal.List<Internal.Component>;
        abstract isDisplayingModNameEnabled(): boolean;
        abstract getModNameForModId(arg0: string): string;
        abstract getFormattedModNameForModId(arg0: string): string;
        get displayingModNameEnabled(): boolean
    }
    type IModIdHelper_ = IModIdHelper;
    /**
     * Invoked before a living entity dies.
     * 
     * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
    */
    class LivingEntityDeathEventJS extends Internal.LivingEntityEventJS {
        constructor(entity: Internal.LivingEntity_, source: DamageSource_)
        /**
         * The entity that dies.
        */
        getEntity(): Internal.Entity;
        /**
         * The damage source that triggers the death.
        */
        getSource(): DamageSource;
        /**
         * The entity that dies.
        */
        get entity(): Internal.Entity
        /**
         * The damage source that triggers the death.
        */
        get source(): DamageSource
    }
    type LivingEntityDeathEventJS_ = LivingEntityDeathEventJS;
    class ElytraItem extends Internal.Item implements Internal.Equipable {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
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
        static isFlyEnabled(arg0: Internal.ItemStack_): boolean;
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
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get equipSound(): Internal.SoundEvent
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        get equipmentSlot(): Internal.EquipmentSlot
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type ElytraItem_ = ElytraItem;
    interface IRecipeSlotTooltipCallback {
        abstract onTooltip(arg0: Internal.IRecipeSlotView_, arg1: Internal.List_<Internal.Component>): void;
        (arg0: Internal.IRecipeSlotView, arg1: Internal.List<Internal.Component>): void;
    }
    type IRecipeSlotTooltipCallback_ = IRecipeSlotTooltipCallback;
    interface FireBlockInvoker {
        abstract invokeSetFlammable(arg0: Internal.Block_, arg1: number, arg2: number): void;
        (arg0: Internal.Block, arg1: number, arg2: number): void;
    }
    type FireBlockInvoker_ = FireBlockInvoker;
    class SequencedAssemblyRecipeSerializer implements Internal.RecipeSerializer<Internal.SequencedAssemblyRecipe> {
        constructor()
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.SequencedAssemblyRecipe;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.SequencedAssemblyRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.SequencedAssemblyRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.SequencedAssemblyRecipe_): void;
        write(arg0: Internal.JsonObject_, arg1: Internal.SequencedAssemblyRecipe_): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type SequencedAssemblyRecipeSerializer_ = SequencedAssemblyRecipeSerializer;
    class Tutorial {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.Options_)
        setStep(arg0: Internal.TutorialSteps_): void;
        onMouse(arg0: number, arg1: number): void;
        getMinecraft(): Internal.Minecraft;
        addTimedToast(arg0: Internal.TutorialToast_, arg1: number): void;
        isSurvival(): boolean;
        onInventoryAction(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ClickAction_): void;
        onOpenInventory(): void;
        static key(arg0: string): Internal.Component;
        tick(): void;
        removeTimedToast(arg0: Internal.TutorialToast_): void;
        start(): void;
        onLookAt(arg0: Internal.ClientLevel_, arg1: Internal.HitResult_): void;
        onDestroyBlock(arg0: Internal.ClientLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: number): void;
        stop(): void;
        onInput(arg0: Internal.Input_): void;
        onGetItem(arg0: Internal.ItemStack_): void;
        set step(arg0: Internal.TutorialSteps_)
        get minecraft(): Internal.Minecraft
        get survival(): boolean
    }
    type Tutorial_ = Tutorial;
    abstract class BasicData extends Internal.InstanceData implements Internal.FlatLit<Internal.BasicData> {
        constructor()
        setColor(arg0: number, arg1: number, arg2: number): this;
        updateLight(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_): this;
        setColor(arg0: number, arg1: number, arg2: number): this;
        setColor(arg0: com.jozufozu.flywheel.util.Color_): this;
        setSkyLight(arg0: number): this;
        getPackedLight(): number;
        setBlockLight(arg0: number): Internal.InstanceData;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setColor(arg0: number): this;
        setColor(arg0: number, arg1: boolean): this;
        set color(arg0: com.jozufozu.flywheel.util.Color_)
        set skyLight(arg0: number)
        get packedLight(): number
        set blockLight(arg0: number)
        set color(arg0: number)
        blockLight: number;
        skyLight: number;
        r: number;
        b: number;
        a: number;
        g: number;
    }
    type BasicData_ = BasicData;
    /**
     * Invoked when a player opens or closes a container.
    */
    class InventoryEventJS extends Internal.PlayerEventJS {
        constructor(player: Internal.Player_, menu: Internal.AbstractContainerMenu_)
        /**
         * Gets the player that opened or closed the container.
        */
        getEntity(): Internal.Entity;
        /**
         * Gets the container that was opened or closed.
        */
        getInventoryContainer(): Internal.AbstractContainerMenu;
        /**
         * Gets the player that opened or closed the container.
        */
        get entity(): Internal.Entity
        /**
         * Gets the container that was opened or closed.
        */
        get inventoryContainer(): Internal.AbstractContainerMenu
    }
    type InventoryEventJS_ = InventoryEventJS;
    class SliceMapItem extends Internal.EmptyMapItem {
        constructor(properties: Internal.Item$Properties_)
        static getRangeMultiplier(): number;
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
        static getMapHeight(data: Internal.MapItemSavedData_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        static canPlayerSee(targetY: number, entity: Internal.Entity_): boolean;
        static getCutoffColor(pos: BlockPos_, level: Internal.BlockGetter_): Internal.MapColor;
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
        static init(): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setArmorToughness(armorToughness: number): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        static createSliced(level: Internal.Level_, x: number, z: number, scale: number, trackingPosition: boolean, unlimitedTracking: boolean, slice: number): Internal.ItemStack;
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
        get rangeMultiplier(): number
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
        static readonly DEPTH_DATA_KEY: Internal.CustomMapData$Type<Internal.SliceMapItem$DepthMapData>;
    }
    type SliceMapItem_ = SliceMapItem;
    class GirderBlock extends Internal.Block implements Internal.IWrenchable, Internal.SimpleWaterloggedBlock {
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
        static isZGirder(arg0: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static isXGirder(arg0: Internal.BlockState_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        static isFacingBracket(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
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
        static updateState(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): Internal.BlockState;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static updateVerticalProperty(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Property_<boolean>, arg4: Internal.BlockState_, arg5: Internal.Direction_): Internal.BlockState;
        static isGirder(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static isConnected(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly TOP: Internal.BooleanProperty;
        static readonly AXIS: Internal.EnumProperty<Internal.Direction$Axis>;
        static readonly Z: Internal.BooleanProperty;
        static readonly BOTTOM: Internal.BooleanProperty;
        static readonly X: Internal.BooleanProperty;
    }
    type GirderBlock_ = GirderBlock;
    class RedstoneContactBlock extends Internal.WrenchableDirectionalBlock {
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
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        static hasValidContact(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
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
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly POWERED: Internal.BooleanProperty;
    }
    type RedstoneContactBlock_ = RedstoneContactBlock;
    abstract class AbstractBellBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        ring(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        getModelData(): Internal.ModelData;
        abstract getBellModel(): Internal.PartialModel;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get modelData(): Internal.ModelData
        get bellModel(): Internal.PartialModel
        ringingTicks: number;
        ringDirection: Internal.Direction;
        static readonly RING_DURATION: 74;
        isRinging: boolean;
    }
    type AbstractBellBlockEntity_ = AbstractBellBlockEntity;
    interface IModFile {
        abstract getScanResult(): Internal.ModFileScanData;
        abstract getSecureJar(): Internal.SecureJar;
        abstract getModInfos(): Internal.List<Internal.IModInfo>;
        abstract getFilePath(): Internal.Path;
        abstract getModFileInfo(): Internal.IModFileInfo;
        abstract getFileName(): string;
        abstract getLoaders(): Internal.List<Internal.IModLanguageProvider>;
        abstract getType(): Internal.IModFile$Type;
        abstract setSecurityStatus(arg0: Internal.SecureJar$Status_): void;
        abstract getProvider(): Internal.IModProvider;
        abstract findResource(...arg0: string[]): Internal.Path;
        abstract getSubstitutionMap(): Internal.Supplier<Internal.Map<string, any>>;
        get scanResult(): Internal.ModFileScanData
        get secureJar(): Internal.SecureJar
        get modInfos(): Internal.List<Internal.IModInfo>
        get filePath(): Internal.Path
        get modFileInfo(): Internal.IModFileInfo
        get fileName(): string
        get loaders(): Internal.List<Internal.IModLanguageProvider>
        get type(): Internal.IModFile$Type
        set securityStatus(arg0: Internal.SecureJar$Status_)
        get provider(): Internal.IModProvider
        get substitutionMap(): Internal.Supplier<Internal.Map<string, any>>
    }
    type IModFile_ = IModFile;
    interface Object2CharFunction <K> extends it.unimi.dsi.fastutil.Function<K, string>, Internal.ToIntFunction<K> {
        put(arg0: K, arg1: string): string;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2CharFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Object2ShortFunction<K>;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        removeChar(arg0: any): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Object2IntFunction<K>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, string>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2CharFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        containsKey(arg0: any): boolean;
        abstract getChar(arg0: any): string;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2CharFunction;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2CharFunction<T>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: string): string;
        defaultReturnValue(arg0: string): void;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        apply(arg0: K): string;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Object2ByteFunction<K>;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Object2LongFunction<K>;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2CharFunction<T>;
        applyAsInt(arg0: K): number;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2CharFunction;
        size(): number;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2CharFunction;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        clear(): void;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Object2FloatFunction<K>;
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<K, T>;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        identity<T>(): Internal.Function<T, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2CharFunction;
        (arg0: any): string;
    }
    type Object2CharFunction_<K> = Object2CharFunction<K>;
}
declare namespace com.mojang.blaze3d.audio {
    class Channel {
        unpause(): void;
        setSelfPosition(arg0: Vec3d_): void;
        destroy(): void;
        disableAttenuation(): void;
        attachBufferStream(arg0: Internal.AudioStream_): void;
        updateStream(): void;
        playing(): boolean;
        attachStaticBuffer(arg0: Internal.SoundBuffer_): void;
        play(): void;
        linearAttenuation(arg0: number): void;
        setLooping(arg0: boolean): void;
        setRelative(arg0: boolean): void;
        setPitch(arg0: number): void;
        stop(): void;
        pause(): void;
        setVolume(arg0: number): void;
        stopped(): boolean;
        set selfPosition(arg0: Vec3d_)
        set looping(arg0: boolean)
        set relative(arg0: boolean)
        set pitch(arg0: number)
        set volume(arg0: number)
        static readonly BUFFER_DURATION_SECONDS: 1;
    }
    type Channel_ = Channel;
}
