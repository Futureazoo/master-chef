/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class LockBlock extends Internal.Block implements Internal.EntityBlock {
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
        newBlockEntity(pPos: BlockPos_, pState: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        activate(state: Internal.BlockState_, worldIn: Internal.Level_, pos: BlockPos_, player: Internal.Player_): void;
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
    type LockBlock_ = LockBlock;
    interface EvaluationListener$FoundResult {
        abstract index(): number;
        abstract result(): any;
        abstract path(): string;
    }
    type EvaluationListener$FoundResult_ = EvaluationListener$FoundResult;
    interface ScriptTypeHolder {
        abstract kjs$getScriptType(): Internal.ScriptType;
        (): Internal.ScriptType_;
    }
    type ScriptTypeHolder_ = ScriptTypeHolder;
    interface FanProcessingType$AirFlowParticleAccess {
        abstract spawnExtraParticle(arg0: Internal.ParticleOptions_, arg1: number): void;
        abstract setColor(arg0: number): void;
        abstract setAlpha(arg0: number): void;
        set color(arg0: number)
        set alpha(arg0: number)
    }
    type FanProcessingType$AirFlowParticleAccess_ = FanProcessingType$AirFlowParticleAccess;
    class GlowstoneFluid$1 extends Internal.FluidType {
    }
    type GlowstoneFluid$1_ = GlowstoneFluid$1;
    abstract class BanListEntry <T> extends Internal.StoredUserEntry<T> {
        constructor(arg0: T, arg1: Internal.Date_, arg2: string, arg3: Internal.Date_, arg4: string)
        abstract getDisplayName(): net.minecraft.network.chat.Component;
        getExpires(): Internal.Date;
        getSource(): string;
        getCreated(): Internal.Date;
        getReason(): string;
        get displayName(): net.minecraft.network.chat.Component
        get expires(): Internal.Date
        get source(): string
        get created(): Internal.Date
        get reason(): string
        static readonly EXPIRES_NEVER: "forever";
        static readonly DATE_FORMAT: Internal.SimpleDateFormat;
    }
    type BanListEntry_<T> = BanListEntry<T>;
    class DecoBlocksCompatImpl$RopeChandelierBlock extends Internal.ChandelierBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_, chandelier: Internal.Supplier_<Internal.Block>, particleData: Internal.Supplier_<T>)
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
    type DecoBlocksCompatImpl$RopeChandelierBlock_ = DecoBlocksCompatImpl$RopeChandelierBlock;
    abstract class ScreenEvent$KeyReleased extends Internal.ScreenEvent$KeyInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
    }
    type ScreenEvent$KeyReleased_ = ScreenEvent$KeyReleased;
    interface IWrenchableWithBracket extends com.simibubi.create.content.equipment.wrench.IWrenchable {
        abstract removeBracket(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: boolean): Internal.Optional<Internal.ItemStack>;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        tryRemoveBracket(arg0: Internal.UseOnContext_): boolean;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        (arg0: Internal.BlockGetter, arg1: BlockPos, arg2: boolean): Internal.Optional_<Internal.ItemStack>;
    }
    type IWrenchableWithBracket_ = IWrenchableWithBracket;
    class DoubleBlockHalf extends Internal.Enum<Internal.DoubleBlockHalf> implements Internal.StringRepresentable {
        static values(): Internal.DoubleBlockHalf[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.DoubleBlockHalf;
        getSerializedName(): string;
        get serializedName(): string
        static readonly UPPER: Internal.DoubleBlockHalf;
        static readonly LOWER: Internal.DoubleBlockHalf;
    }
    type DoubleBlockHalf_ = "lower" | DoubleBlockHalf | "upper";
    class PlayerTabOverlay {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.Gui_)
        setFooter(arg0: net.minecraft.network.chat.Component_): void;
        setHeader(arg0: net.minecraft.network.chat.Component_): void;
        getNameForDisplay(arg0: Internal.PlayerInfo_): net.minecraft.network.chat.Component;
        reset(): void;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: Internal.Scoreboard_, arg3: Internal.Objective_): void;
        setVisible(arg0: boolean): void;
        set footer(arg0: net.minecraft.network.chat.Component_)
        set header(arg0: net.minecraft.network.chat.Component_)
        set visible(arg0: boolean)
        static readonly HEART_GOLDEN_FULL: 160;
        static readonly HEART_EMPTY_CONTAINER: 16;
        static readonly HEART_GHOST_HALF_FULL: 79;
        static readonly MAX_ROWS_PER_COL: 20;
        static readonly HEART_GHOST_FULL: 70;
        static readonly HEART_GOLDEN_HALF_FULL: 169;
        static readonly HEART_EMPTY_CONTAINER_BLINKING: 25;
        static readonly HEART_HALF_FULL: 61;
        static readonly HEART_FULL: 52;
    }
    type PlayerTabOverlay_ = PlayerTabOverlay;
    class GolemSensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
        constructor(arg0: number)
        static golemDetected(arg0: Internal.LivingEntity_): void;
        static checkForNearbyGolem(arg0: Internal.LivingEntity_): void;
    }
    type GolemSensor_ = GolemSensor;
    class AnvilCraftingRecipe$Serializer extends Internal.LycheeRecipe$Serializer<Internal.AnvilCraftingRecipe> {
        constructor()
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.AnvilCraftingRecipe;
        fromNetwork(arg0: Internal.AnvilCraftingRecipe_, arg1: Internal.FriendlyByteBuf_): void;
        toNetwork0(arg0: Internal.FriendlyByteBuf_, arg1: Internal.AnvilCraftingRecipe_): void;
        fromJson(arg0: Internal.AnvilCraftingRecipe_, arg1: Internal.JsonObject_): void;
    }
    type AnvilCraftingRecipe$Serializer_ = AnvilCraftingRecipe$Serializer;
    abstract class Permission implements Internal.Guard, Internal.Serializable {
        constructor(arg0: string)
        getName(): string;
        abstract getActions(): string;
        abstract implies(arg0: Internal.Permission_): boolean;
        newPermissionCollection(): Internal.PermissionCollection;
        checkGuard(arg0: any): void;
        get name(): string
        get actions(): string
    }
    type Permission_ = Permission;
    class ItemTooltipEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_)
        getFlags(): Internal.TooltipFlag;
        getToolTip(): Internal.List<net.minecraft.network.chat.Component>;
        getItemStack(): Internal.ItemStack;
        get flags(): Internal.TooltipFlag
        get toolTip(): Internal.List<net.minecraft.network.chat.Component>
        get itemStack(): Internal.ItemStack
    }
    type ItemTooltipEvent_ = ItemTooltipEvent;
    interface EntityInLevelCallback {
        abstract onMove(): void;
        abstract onRemove(arg0: Internal.Entity$RemovalReason_): void;
        readonly NULL: Internal.EntityInLevelCallback;
    }
    type EntityInLevelCallback_ = EntityInLevelCallback;
    interface Packet <T extends Internal.PacketListener> {
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        isSkippable(): boolean;
        abstract handle(arg0: T): void;
        get skippable(): boolean
    }
    type Packet_<T extends Internal.PacketListener> = Packet<T>;
    class ClientboundLevelChunkWithLightPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.LevelChunk_, arg1: Internal.LevelLightEngine_, arg2: Internal.BitSet_, arg3: Internal.BitSet_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getX(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getZ(): number;
        getChunkData(): Internal.ClientboundLevelChunkPacketData;
        getLightData(): Internal.ClientboundLightUpdatePacketData;
        isSkippable(): boolean;
        get x(): number
        get z(): number
        get chunkData(): Internal.ClientboundLevelChunkPacketData
        get lightData(): Internal.ClientboundLightUpdatePacketData
        get skippable(): boolean
    }
    type ClientboundLevelChunkWithLightPacket_ = ClientboundLevelChunkWithLightPacket;
    abstract class BaseCommandBlock implements Internal.CommandSource {
        constructor()
        getCommand(): string;
        isTrackOutput(): boolean;
        abstract isValid(): boolean;
        abstract getPosition(): Vec3d;
        abstract getLevel(): Internal.ServerLevel;
        getName(): net.minecraft.network.chat.Component;
        usedBy(arg0: Internal.Player_): InteractionResult;
        abstract createCommandSourceStack(): Internal.CommandSourceStack;
        save(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getLastOutput(): net.minecraft.network.chat.Component;
        shouldInformAdmins(): boolean;
        acceptsFailure(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        alwaysAccepts(): boolean;
        setName(arg0: net.minecraft.network.chat.Component_): void;
        setCommand(arg0: string): void;
        setSuccessCount(arg0: number): void;
        setLastOutput(arg0: net.minecraft.network.chat.Component_): void;
        setTrackOutput(arg0: boolean): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        getSuccessCount(): number;
        abstract onUpdated(): void;
        performCommand(arg0: Internal.Level_): boolean;
        get command(): string
        get trackOutput(): boolean
        get valid(): boolean
        get position(): Vec3d
        get level(): Internal.ServerLevel
        get name(): net.minecraft.network.chat.Component
        get lastOutput(): net.minecraft.network.chat.Component
        set name(arg0: net.minecraft.network.chat.Component_)
        set command(arg0: string)
        set successCount(arg0: number)
        set lastOutput(arg0: net.minecraft.network.chat.Component_)
        set trackOutput(arg0: boolean)
        get successCount(): number
    }
    type BaseCommandBlock_ = BaseCommandBlock;
    class ModConfigEvent$Reloading extends Internal.ModConfigEvent {
        constructor()
        constructor(arg0: Internal.ModConfig_)
        static unloading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        self<T extends net.minecraftforge.eventbus.api.Event & Internal.IConfigEvent>(): T;
        static loading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        static reloading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
    }
    type ModConfigEvent$Reloading_ = ModConfigEvent$Reloading;
    interface Byte2IntFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntUnaryOperator {
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        abstract get(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): number;
        apply(arg0: number): number;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2IntFunction;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2IntFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2IntFunction<T>;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2IntFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Byte2ShortFunction;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Byte2DoubleFunction;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Byte2LongFunction;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Byte2FloatFunction;
        remove(arg0: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2IntFunction<T>;
        defaultReturnValue(arg0: number): void;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2IntFunction;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Byte2ByteFunction;
        clear(): void;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2IntFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Byte2CharFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2IntFunction;
        (arg0: number): number;
    }
    type Byte2IntFunction_ = Byte2IntFunction;
    class AnvilCraftingRecipe extends Internal.LycheeRecipe<Internal.AnvilContext> implements Internal.Comparable<Internal.AnvilCraftingRecipe> {
        constructor(arg0: ResourceLocation_)
        matches(arg0: Internal.AnvilContext_, arg1: Internal.Level_): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        showingActionsCount(): number;
        getSchema(): Internal.RecipeSchema;
        getBlockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>;
        compareTo(arg0: any): number;
        getMaterialCost(): number;
        assemble(arg0: Internal.AnvilContext_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getResultItem(): Internal.ItemStack;
        getRemainingItems(arg0: Internal.AnvilContext_): Internal.NonNullList<Internal.ItemStack>;
        getMod(): string;
        compareTo(arg0: Internal.AnvilCraftingRecipe_): number;
        isSpecial(): boolean;
        addAssemblingAction(arg0: Internal.PostAction_): void;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        static filterHidden(arg0: Internal.Stream_<Internal.PostAction>): Internal.Stream<Internal.PostAction>;
        static processActionGroup(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonPointer_, arg2: Internal.List_<Internal.PostAction>, arg3: Internal.JsonObject_): Internal.JsonElement;
        lychee$getId(): ResourceLocation;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getLeft(): Internal.Ingredient;
        getRight(): Internal.Ingredient;
        getType(): ResourceLocation;
        applyPostActions(arg0: Internal.LycheeContext_, arg1: number): void;
        static processActions(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonObject_): void;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        getBlockInputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getItemIndexes(arg0: LycheeReference_): Internal.IntList;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get blockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>
        get materialCost(): number
        get resultItem(): Internal.ItemStack
        get mod(): string
        get special(): boolean
        get left(): Internal.Ingredient
        get right(): Internal.Ingredient
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get blockInputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>
        get incomplete(): boolean
    }
    type AnvilCraftingRecipe_ = AnvilCraftingRecipe;
    class FodderBlock extends Internal.WaterBlock {
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
        static readonly LAYERS: Internal.IntegerProperty;
    }
    type FodderBlock_ = FodderBlock;
    class ServerboundSetCarriedItemPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getSlot(): number;
        isSkippable(): boolean;
        get slot(): number
        get skippable(): boolean
    }
    type ServerboundSetCarriedItemPacket_ = ServerboundSetCarriedItemPacket;
    interface StreamTagVisitor {
        abstract visitEntry(arg0: Internal.TagType_<any>, arg1: string): Internal.StreamTagVisitor$EntryResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: string): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitContainerEnd(): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitElement(arg0: Internal.TagType_<any>, arg1: number): Internal.StreamTagVisitor$EntryResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visitEnd(): Internal.StreamTagVisitor$ValueResult;
        abstract visitRootEntry(arg0: Internal.TagType_<any>): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visitList(arg0: Internal.TagType_<any>, arg1: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitEntry(arg0: Internal.TagType_<any>): Internal.StreamTagVisitor$EntryResult;
    }
    type StreamTagVisitor_ = StreamTagVisitor;
    abstract class CombiningPredicate implements net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate {
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        abstract test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        abstract type(): Internal.BlockPredicateType<any>;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static codec<T extends Internal.CombiningPredicate>(arg0: Internal.Function_<Internal.List<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>, T>): Internal.Codec<T>;
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
    }
    type CombiningPredicate_ = CombiningPredicate;
    class MonoBogeyBlock extends Internal.AbstractMonoBogeyBlock<Internal.MonoBogeyBlockEntity> {
        constructor(pProperties: Internal.BlockBehaviour$Properties_)
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
        getBlockEntityClass(): typeof Internal.MonoBogeyBlockEntity;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.MonoBogeyBlockEntity;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.MonoBogeyBlockEntity>): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.MonoBogeyBlockEntity>;
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
        getBlockStates(): Internal.List<Internal.BlockState>;
        getBlockEntityType(): Internal.BlockEntityType<Internal.MonoBogeyBlockEntity>;
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.MonoBogeyBlockEntity, InteractionResult>): InteractionResult;
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
        get blockEntityClass(): typeof Internal.MonoBogeyBlockEntity
        get blockStates(): Internal.List<Internal.BlockState>
        get blockEntityType(): Internal.BlockEntityType<Internal.MonoBogeyBlockEntity>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type MonoBogeyBlock_ = MonoBogeyBlock;
    class ChuteBlock extends Internal.AbstractChuteBlock implements Internal.ProperWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ChuteBlockEntity;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.ChuteBlockEntity, InteractionResult>): InteractionResult;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.ChuteBlockEntity>): void;
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
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.ChuteBlockEntity>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
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
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
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
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBlockEntityType(): Internal.BlockEntityType<Internal.ChuteBlockEntity>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get blockEntityType(): Internal.BlockEntityType<Internal.ChuteBlockEntity>
        static readonly SHAPE: Internal.Property<Internal.ChuteBlock$Shape>;
        static readonly FACING: Internal.DirectionProperty;
    }
    type ChuteBlock_ = ChuteBlock;
    class SimpleMapCodec <K, V> extends Internal.MapCodec<Internal.Map<K, V>> implements Internal.BaseMapCodec<K, V> {
        constructor(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_)
        withLifecycle(arg0: Internal.Lifecycle_): Internal.MapEncoder<any>;
        keyCodec(): Internal.Codec<K>;
        map<B>(arg0: Internal.Function_<Internal.Map<K, V>, B>): Internal.MapDecoder<B>;
        keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        encode(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: Internal.RecordBuilder_<any>): Internal.RecordBuilder<any>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.MapLike_<T>): Internal.DataResult<Internal.Map<K, V>>;
        comap<B>(arg0: Internal.Function_<B, Internal.Map<K, V>>): Internal.MapEncoder<B>;
        static forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
        flatMap<B>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<B>>): Internal.MapDecoder<B>;
        abstract compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<Internal.Map<K, V>>>): Internal.MapEncoder<B>;
        elementCodec(): Internal.Codec<V>;
        encode<T>(arg0: Internal.Map_<K, V>, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        decoder(): Internal.Decoder<Internal.Map<K, V>>;
        compressedBuilder<T>(arg0: Internal.DynamicOps_<T>): Internal.RecordBuilder<T>;
        ap<E>(arg0: Internal.MapDecoder_<Internal.Function<Internal.Map<K, V>, E>>): Internal.MapDecoder<E>;
        encoder(): Internal.Encoder<Internal.Map<K, V>>;
        static makeCompressedBuilder<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.KeyCompressor_<T>): Internal.RecordBuilder<T>;
        compressedDecode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<Internal.Map<K, V>>;
    }
    type SimpleMapCodec_<K, V> = SimpleMapCodec<K, V>;
    class CompassItem extends Internal.Item implements Internal.Vanishable {
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
        static getLodestoneDimension(arg0: Internal.CompoundTag_): Internal.Optional<Internal.ResourceKey<Internal.Level>>;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static getLodestonePosition(arg0: Internal.CompoundTag_): Internal.GlobalPos;
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
        static getSpawnPosition(arg0: Internal.Level_): Internal.GlobalPos;
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
        static isLodestoneCompass(arg0: Internal.ItemStack_): boolean;
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
        static readonly TAG_LODESTONE_TRACKED: "LodestoneTracked";
        static readonly TAG_LODESTONE_POS: "LodestonePos";
        static readonly TAG_LODESTONE_DIMENSION: "LodestoneDimension";
    }
    type CompassItem_ = CompassItem;
    interface Blender$DistanceGetter {
        abstract getDistance(arg0: number, arg1: number, arg2: number): number;
        (arg0: number, arg1: number, arg2: number): number;
    }
    type Blender$DistanceGetter_ = Blender$DistanceGetter;
    class ConnectedGlassBlock extends Internal.GlassBlock {
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
    type ConnectedGlassBlock_ = ConnectedGlassBlock;
    class RecursiveTypeFamily implements Internal.TypeFamily {
        constructor(arg0: string, arg1: Internal.TypeTemplate_)
        name(): string;
        fold(arg0: Internal.Algebra_, arg1: Internal.RecursiveTypeFamily_): Internal.IntFunction<Internal.RewriteResult<any, any>>;
        size(): number;
        everywhere(arg0: number, arg1: Internal.TypeRewriteRule_, arg2: Internal.PointFreeRule_): Internal.Optional<Internal.RewriteResult<any, any>>;
        buildMuType<A>(arg0: com.mojang.datafixers.types.Type_<A>, arg1: Internal.RecursiveTypeFamily_): Internal.RecursivePoint$RecursivePointType<A>;
        findType<A, B>(arg0: number, arg1: com.mojang.datafixers.types.Type_<A>, arg2: com.mojang.datafixers.types.Type_<B>, arg3: Internal.Type$TypeMatcher_<A, B>, arg4: boolean): Internal.Either<Internal.TypedOptic<any, any, A, B>, Internal.Type$FieldNotFoundException>;
        static familyOptic<A, B>(arg0: Internal.IntFunction_<Internal.TypedOptic<any, any, A, B>>): Internal.FamilyOptic<A, B>;
        apply(arg0: number): com.mojang.datafixers.types.Type<any>;
        template(): Internal.TypeTemplate;
    }
    type RecursiveTypeFamily_ = RecursiveTypeFamily;
    class RandomizerPowerState extends Internal.Enum<Internal.RandomizerPowerState> implements Internal.StringRepresentable {
        static values(): Internal.RandomizerPowerState[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.RandomizerPowerState;
        get serializedName(): string
        static readonly LEFT: Internal.RandomizerPowerState;
        static readonly OFF: Internal.RandomizerPowerState;
        static readonly RIGHT: Internal.RandomizerPowerState;
    }
    type RandomizerPowerState_ = "off" | "right" | RandomizerPowerState | "left";
    interface DirectMethodHandleDesc extends Internal.MethodHandleDesc {
        abstract isOwnerInterface(): boolean;
        of(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: string): this;
        abstract invocationType(): Internal.MethodTypeDesc;
        abstract methodName(): string;
        abstract resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): any;
        abstract kind(): Internal.DirectMethodHandleDesc$Kind;
        abstract owner(): Internal.ClassDesc;
        ofField(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: Internal.ClassDesc_): this;
        ofMethod(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: Internal.MethodTypeDesc_): this;
        asType(arg0: Internal.MethodTypeDesc_): Internal.MethodHandleDesc;
        abstract lookupDescriptor(): string;
        abstract refKind(): number;
        ofConstructor(arg0: Internal.ClassDesc_, ...arg1: Internal.ClassDesc_[]): this;
        abstract equals(arg0: any): boolean;
        get ownerInterface(): boolean
    }
    type DirectMethodHandleDesc_ = DirectMethodHandleDesc;
    class BambooSpikesTippedItem extends Internal.WoodBasedBlockItem implements Internal.SimpleWaterloggedBlock {
        constructor(blockIn: Internal.Block_, builder: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
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
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        static isPotionValid(potion: Internal.Potion_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        static makeSpikeItem(potion: Internal.Potion_): Internal.ItemStack;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
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
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
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
    type BambooSpikesTippedItem_ = BambooSpikesTippedItem;
    class UnmodifiableCommentedConfig$CommentNode {
        constructor(arg0: string, arg1: Internal.Map_<string, Internal.UnmodifiableCommentedConfig$CommentNode>)
        getComment(): string;
        getChildren(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>;
        get comment(): string
        get children(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>
    }
    type UnmodifiableCommentedConfig$CommentNode_ = UnmodifiableCommentedConfig$CommentNode;
    class Transformation implements Internal.IForgeTransformation {
        constructor(arg0: Matrix4f_)
        constructor(arg0: Vec3f_, arg1: Quaternionf_, arg2: Vec3f_, arg3: Quaternionf_)
        inverse(): this;
        getScale(): Vec3f;
        compose(arg0: Internal.Transformation_): this;
        getTranslation(): Vec3f;
        getMatrix(): Matrix4f;
        blockCenterToCorner(): this;
        static identity(): Internal.Transformation;
        transformNormal(arg0: Vec3f_): void;
        rotateTransform(arg0: Internal.Direction_): Internal.Direction;
        getRightRotation(): Quaternionf;
        slerp(arg0: Internal.Transformation_, arg1: number): this;
        blockCornerToCenter(): this;
        transformPosition(arg0: Vec4f_): void;
        getLeftRotation(): Quaternionf;
        applyOrigin(arg0: Vec3f_): this;
        isIdentity(): boolean;
        getNormalMatrix(): Matrix3f;
        get scale(): Vec3f
        get translation(): Vec3f
        get matrix(): Matrix4f
        get rightRotation(): Quaternionf
        get leftRotation(): Quaternionf
        get identity(): boolean
        get normalMatrix(): Matrix3f
        static readonly EXTENDED_CODEC: Internal.Codec<Internal.Transformation>;
        static readonly CODEC: Internal.Codec<Internal.Transformation>;
    }
    type Transformation_ = Transformation;
    class BoneAnimationQueue extends Internal.Record {
        constructor(bone: Internal.CoreGeoBone_, rotationXQueue: Internal.AnimationPointQueue_, rotationYQueue: Internal.AnimationPointQueue_, rotationZQueue: Internal.AnimationPointQueue_, positionXQueue: Internal.AnimationPointQueue_, positionYQueue: Internal.AnimationPointQueue_, positionZQueue: Internal.AnimationPointQueue_, scaleXQueue: Internal.AnimationPointQueue_, scaleYQueue: Internal.AnimationPointQueue_, scaleZQueue: Internal.AnimationPointQueue_)
        constructor(arg0: Internal.CoreGeoBone_)
        addPosYPoint(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosZPoint(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosXPoint(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationYPoint(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationXPoint(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationZPoint(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotations(arg0: Internal.AnimationPoint_, arg1: Internal.AnimationPoint_, arg2: Internal.AnimationPoint_): void;
        addScaleXPoint(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleYPoint(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addNextScale(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: Internal.BoneSnapshot_, arg4: Internal.AnimationPoint_, arg5: Internal.AnimationPoint_, arg6: Internal.AnimationPoint_): void;
        scaleYQueue(): Internal.AnimationPointQueue;
        scaleXQueue(): Internal.AnimationPointQueue;
        scaleZQueue(): Internal.AnimationPointQueue;
        addNextPosition(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: Internal.BoneSnapshot_, arg4: Internal.AnimationPoint_, arg5: Internal.AnimationPoint_, arg6: Internal.AnimationPoint_): void;
        rotationXQueue(): Internal.AnimationPointQueue;
        positionZQueue(): Internal.AnimationPointQueue;
        addScales(arg0: Internal.AnimationPoint_, arg1: Internal.AnimationPoint_, arg2: Internal.AnimationPoint_): void;
        positionXQueue(): Internal.AnimationPointQueue;
        rotationYQueue(): Internal.AnimationPointQueue;
        rotationZQueue(): Internal.AnimationPointQueue;
        positionYQueue(): Internal.AnimationPointQueue;
        addScaleZPoint(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addNextRotation(arg0: Internal.Keyframe_<any>, arg1: number, arg2: number, arg3: Internal.BoneSnapshot_, arg4: Internal.BoneSnapshot_, arg5: Internal.AnimationPoint_, arg6: Internal.AnimationPoint_, arg7: Internal.AnimationPoint_): void;
        bone(): Internal.CoreGeoBone;
        addPositions(arg0: Internal.AnimationPoint_, arg1: Internal.AnimationPoint_, arg2: Internal.AnimationPoint_): void;
    }
    type BoneAnimationQueue_ = BoneAnimationQueue;
    class ItemInsideRecipe$Serializer extends Internal.ItemShapelessRecipe$Serializer<Internal.ItemInsideRecipe> {
        constructor()
        fromJson(arg0: Internal.ItemInsideRecipe_, arg1: Internal.JsonObject_): void;
        fromNetwork(arg0: Internal.ItemInsideRecipe_, arg1: Internal.FriendlyByteBuf_): void;
        toNetwork0(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ItemInsideRecipe_): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ItemInsideRecipe;
    }
    type ItemInsideRecipe$Serializer_ = ItemInsideRecipe$Serializer;
    abstract class WorldCarver <C extends Internal.CarverConfiguration> {
        constructor(arg0: Internal.Codec_<C>)
        configured(arg0: C): Internal.ConfiguredWorldCarver<C>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredWorldCarver<C>>;
        abstract isStartChunk(arg0: C, arg1: Internal.RandomSource_): boolean;
        getRange(): number;
        abstract carve(arg0: Internal.CarvingContext_, arg1: C, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.RandomSource_, arg5: Internal.Aquifer_, arg6: Internal.ChunkPos_, arg7: Internal.CarvingMask_): boolean;
        get range(): number
        static readonly CANYON: Internal.CanyonWorldCarver;
        static readonly NETHER_CAVE: Internal.NetherWorldCarver;
        static readonly CAVE: Internal.CaveWorldCarver;
    }
    type WorldCarver_<C extends Internal.CarverConfiguration> = WorldCarver<C> | Special.Carver;
    interface AccessibleTable {
        abstract setAccessibleRowHeader(arg0: Internal.AccessibleTable_): void;
        abstract getAccessibleSummary(): Internal.Accessible;
        abstract getAccessibleColumnCount(): number;
        abstract getAccessibleColumnExtentAt(arg0: number, arg1: number): number;
        abstract getAccessibleAt(arg0: number, arg1: number): Internal.Accessible;
        abstract getAccessibleRowCount(): number;
        abstract setAccessibleCaption(arg0: Internal.Accessible_): void;
        abstract getSelectedAccessibleColumns(): number[];
        abstract getAccessibleRowExtentAt(arg0: number, arg1: number): number;
        abstract getAccessibleRowHeader(): this;
        abstract getAccessibleRowDescription(arg0: number): Internal.Accessible;
        abstract isAccessibleSelected(arg0: number, arg1: number): boolean;
        abstract getAccessibleColumnHeader(): this;
        abstract getAccessibleCaption(): Internal.Accessible;
        abstract isAccessibleColumnSelected(arg0: number): boolean;
        abstract isAccessibleRowSelected(arg0: number): boolean;
        abstract setAccessibleColumnDescription(arg0: number, arg1: Internal.Accessible_): void;
        abstract setAccessibleColumnHeader(arg0: Internal.AccessibleTable_): void;
        abstract setAccessibleRowDescription(arg0: number, arg1: Internal.Accessible_): void;
        abstract getSelectedAccessibleRows(): number[];
        abstract setAccessibleSummary(arg0: Internal.Accessible_): void;
        abstract getAccessibleColumnDescription(arg0: number): Internal.Accessible;
        set accessibleRowHeader(arg0: Internal.AccessibleTable_)
        get accessibleSummary(): Internal.Accessible
        get accessibleColumnCount(): number
        get accessibleRowCount(): number
        set accessibleCaption(arg0: Internal.Accessible_)
        get selectedAccessibleColumns(): number[]
        get accessibleRowHeader(): Internal.AccessibleTable
        get accessibleColumnHeader(): Internal.AccessibleTable
        get accessibleCaption(): Internal.Accessible
        set accessibleColumnHeader(arg0: Internal.AccessibleTable_)
        get selectedAccessibleRows(): number[]
        set accessibleSummary(arg0: Internal.Accessible_)
    }
    type AccessibleTable_ = AccessibleTable;
    class DoubleAxleBogeyBlock extends Internal.CRBogeyBlock {
        constructor(props: Internal.BlockBehaviour$Properties_)
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
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.CRBogeyBlockEntity;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.CRBogeyBlockEntity>): void;
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.CRBogeyBlockEntity, InteractionResult>): InteractionResult;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.CRBogeyBlockEntity>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type DoubleAxleBogeyBlock_ = DoubleAxleBogeyBlock;
    abstract class Sensor <E extends Internal.LivingEntity> {
        constructor()
        constructor(arg0: number)
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        abstract requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        tick(arg0: Internal.ServerLevel_, arg1: E): void;
    }
    type Sensor_<E extends Internal.LivingEntity> = Sensor<E>;
    class TransformRecipeSerializer implements Internal.RecipeSerializer<Internal.TransformRecipe> {
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.TransformRecipe_): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.TransformRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.TransformRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.TransformRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        static readonly INSTANCE: Internal.TransformRecipeSerializer;
    }
    type TransformRecipeSerializer_ = TransformRecipeSerializer;
    class ArrowNockEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.InteractionHand_, arg3: Internal.Level_, arg4: boolean)
        getLevel(): Internal.Level;
        setAction(arg0: Internal.InteractionResultHolder_<Internal.ItemStack>): void;
        getBow(): Internal.ItemStack;
        getEntity(): Internal.LivingEntity;
        getHand(): Internal.InteractionHand;
        hasAmmo(): boolean;
        getAction(): Internal.InteractionResultHolder<Internal.ItemStack>;
        get level(): Internal.Level
        set action(arg0: Internal.InteractionResultHolder_<Internal.ItemStack>)
        get bow(): Internal.ItemStack
        get entity(): Internal.LivingEntity
        get hand(): Internal.InteractionHand
        get action(): Internal.InteractionResultHolder<Internal.ItemStack>
    }
    type ArrowNockEvent_ = ArrowNockEvent;
    class ServerboundPongPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        isSkippable(): boolean;
        getId(): number;
        get skippable(): boolean
        get id(): number
    }
    type ServerboundPongPacket_ = ServerboundPongPacket;
    class Options {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.File_)
        panoramaSpeed(): Internal.OptionInstance<number>;
        backgroundForChatOnly(): Internal.OptionInstance<boolean>;
        entityShadows(): Internal.OptionInstance<boolean>;
        damageTiltStrength(): Internal.OptionInstance<number>;
        touchscreen(): Internal.OptionInstance<boolean>;
        mouseWheelSensitivity(): Internal.OptionInstance<number>;
        biomeBlendRadius(): Internal.OptionInstance<number>;
        handler$zcp000$loadSelectedResourcePacks(arg0: Internal.PackRepository_, arg1: Internal.CallbackInfo_): void;
        cloudStatus(): Internal.OptionInstance<Internal.CloudStatus>;
        guiScale(): Internal.OptionInstance<number>;
        telemetryOptInExtra(): Internal.OptionInstance<boolean>;
        chatOpacity(): Internal.OptionInstance<number>;
        hideLightningFlash(): Internal.OptionInstance<boolean>;
        attackIndicator(): Internal.OptionInstance<Internal.AttackIndicatorStatus>;
        framerateLimit(): Internal.OptionInstance<number>;
        chatColors(): Internal.OptionInstance<boolean>;
        notificationDisplayTime(): Internal.OptionInstance<number>;
        glintSpeed(): Internal.OptionInstance<number>;
        chatScale(): Internal.OptionInstance<number>;
        darknessEffectScale(): Internal.OptionInstance<number>;
        setServerRenderDistance(arg0: number): void;
        highContrast(): Internal.OptionInstance<boolean>;
        ambientOcclusion(): Internal.OptionInstance<boolean>;
        broadcastOptions(): void;
        mainHand(): Internal.OptionInstance<Internal.HumanoidArm>;
        chatWidth(): Internal.OptionInstance<number>;
        simulationDistance(): Internal.OptionInstance<number>;
        chatDelay(): Internal.OptionInstance<number>;
        particles(): Internal.OptionInstance<Internal.ParticleStatus>;
        static genericValueLabel(arg0: net.minecraft.network.chat.Component_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        chatLinks(): Internal.OptionInstance<boolean>;
        onlyShowSecureChat(): Internal.OptionInstance<boolean>;
        soundDevice(): Internal.OptionInstance<string>;
        realmsNotifications(): Internal.OptionInstance<boolean>;
        getCloudsType(): Internal.CloudStatus;
        getSoundSourceVolume(arg0: Internal.SoundSource_): number;
        getFile(): Internal.File;
        prioritizeChunkUpdates(): Internal.OptionInstance<Internal.PrioritizeChunkUpdates>;
        getBackgroundColor(arg0: number): number;
        loadSelectedResourcePacks(arg0: Internal.PackRepository_): void;
        autoSuggestions(): Internal.OptionInstance<boolean>;
        entityDistanceScaling(): Internal.OptionInstance<number>;
        gamma(): Internal.OptionInstance<number>;
        toggleSprint(): Internal.OptionInstance<boolean>;
        screenEffectScale(): Internal.OptionInstance<number>;
        textBackgroundOpacity(): Internal.OptionInstance<number>;
        enableVsync(): Internal.OptionInstance<boolean>;
        fullscreen(): Internal.OptionInstance<boolean>;
        showAutosaveIndicator(): Internal.OptionInstance<boolean>;
        setCameraType(arg0: Internal.CameraType_): void;
        autoJump(): Internal.OptionInstance<boolean>;
        showSubtitles(): Internal.OptionInstance<boolean>;
        discreteMouseScroll(): Internal.OptionInstance<boolean>;
        reducedDebugInfo(): Internal.OptionInstance<boolean>;
        isModelPartEnabled(arg0: Internal.PlayerModelPart_): boolean;
        load(arg0: boolean): void;
        narrator(): Internal.OptionInstance<Internal.NarratorStatus>;
        useNativeTransport(): boolean;
        static genericValueLabel(arg0: net.minecraft.network.chat.Component_, arg1: number): net.minecraft.network.chat.Component;
        bobView(): Internal.OptionInstance<boolean>;
        chatLineSpacing(): Internal.OptionInstance<number>;
        forceUnicodeFont(): Internal.OptionInstance<boolean>;
        renderDistance(): Internal.OptionInstance<number>;
        allowServerListing(): Internal.OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        directionalAudio(): Internal.OptionInstance<boolean>;
        operatorItemsTab(): Internal.OptionInstance<boolean>;
        chatHeightFocused(): Internal.OptionInstance<number>;
        load(): void;
        glintStrength(): Internal.OptionInstance<number>;
        toggleCrouch(): Internal.OptionInstance<boolean>;
        setKey(arg0: Internal.KeyMapping_, arg1: Internal.InputConstants$Key_): void;
        hideMatchedNames(): Internal.OptionInstance<boolean>;
        getBackgroundOpacity(arg0: number): number;
        fov(): Internal.OptionInstance<number>;
        toggleModelPart(arg0: Internal.PlayerModelPart_, arg1: boolean): void;
        getSoundSourceOptionInstance(arg0: Internal.SoundSource_): Internal.OptionInstance<number>;
        mipmapLevels(): Internal.OptionInstance<number>;
        chatHeightUnfocused(): Internal.OptionInstance<number>;
        updateResourcePacks(arg0: Internal.PackRepository_): void;
        save(): void;
        getCameraType(): Internal.CameraType;
        chatVisibility(): Internal.OptionInstance<Internal.ChatVisiblity>;
        sensitivity(): Internal.OptionInstance<number>;
        rawMouseInput(): Internal.OptionInstance<boolean>;
        graphicsMode(): Internal.OptionInstance<Internal.GraphicsStatus>;
        fovEffectScale(): Internal.OptionInstance<number>;
        invertYMouse(): Internal.OptionInstance<boolean>;
        getBackgroundColor(arg0: number): number;
        chatLinksPrompt(): Internal.OptionInstance<boolean>;
        darkMojangStudiosBackground(): Internal.OptionInstance<boolean>;
        dumpOptionsForReport(): string;
        set serverRenderDistance(arg0: number)
        get cloudsType(): Internal.CloudStatus
        get file(): Internal.File
        set cameraType(arg0: Internal.CameraType_)
        get effectiveRenderDistance(): number
        get cameraType(): Internal.CameraType
        readonly keySwapOffhand: Internal.KeyMapping;
        readonly keyDown: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_NORMAL: 8;
        static readonly RENDER_DISTANCE_FAR: 12;
        hideBundleTutorial: boolean;
        readonly keyUp: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_EXTREME: 32;
        skipMultiplayerWarning: boolean;
        readonly keyShift: Internal.KeyMapping;
        hideGui: boolean;
        readonly keyScreenshot: Internal.KeyMapping;
        pauseOnLostFocus: boolean;
        languageCode: string;
        readonly keyPlayerList: Internal.KeyMapping;
        static readonly AUTO_GUI_SCALE: 0;
        readonly keyRight: Internal.KeyMapping;
        smoothCamera: boolean;
        readonly keyCommand: Internal.KeyMapping;
        readonly keyAttack: Internal.KeyMapping;
        renderFpsChart: boolean;
        readonly keyChat: Internal.KeyMapping;
        readonly keyPickItem: Internal.KeyMapping;
        joinedFirstServer: boolean;
        static readonly RENDER_DISTANCE_TINY: 2;
        incompatibleResourcePacks: Internal.List<string>;
        readonly keyFullscreen: Internal.KeyMapping;
        skipRealms32bitWarning: boolean;
        fullscreenVideoModeString: string;
        useNativeTransport: boolean;
        glDebugVerbosity: number;
        readonly keyTogglePerspective: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_REALLY_FAR: 16;
        readonly keySmoothCamera: Internal.KeyMapping;
        static readonly UNLIMITED_FRAMERATE_CUTOFF: 260;
        overrideWidth: number;
        readonly keySaveHotbarActivator: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_SHORT: 4;
        overrideHeight: number;
        renderDebug: boolean;
        lastMpIp: string;
        readonly keyAdvancements: Internal.KeyMapping;
        readonly keyLeft: Internal.KeyMapping;
        readonly keyJump: Internal.KeyMapping;
        readonly keyUse: Internal.KeyMapping;
        readonly keyDrop: Internal.KeyMapping;
        onboardAccessibility: boolean;
        resourcePacks: Internal.List<string>;
        readonly keySocialInteractions: Internal.KeyMapping;
        readonly keySpectatorOutlines: Internal.KeyMapping;
        readonly keySprint: Internal.KeyMapping;
        readonly keyInventory: Internal.KeyMapping;
        readonly keyLoadHotbarActivator: Internal.KeyMapping;
        advancedItemTooltips: boolean;
        renderDebugCharts: boolean;
        syncWrites: boolean;
        readonly keyHotbarSlots: Internal.KeyMapping[];
        hideServerAddress: boolean;
        tutorialStep: Internal.TutorialSteps;
        keyMappings: Internal.KeyMapping[];
        static readonly DEFAULT_SOUND_DEVICE: "";
    }
    type Options_ = Options;
    interface Weighted <T> {
        abstract getSound(arg0: Internal.RandomSource_): T;
        abstract getWeight(): number;
        abstract preloadIfRequired(arg0: Internal.SoundEngine_): void;
        get weight(): number
    }
    type Weighted_<T> = Weighted<T>;
    class CustomCommandEventJS extends Internal.EntityEventJS {
        constructor(l: Internal.Level_, e: Internal.Entity_, p: BlockPos_, i: string)
        getId(): string;
        getBlock(): Internal.BlockContainerJS;
        get id(): string
        get block(): Internal.BlockContainerJS
    }
    type CustomCommandEventJS_ = CustomCommandEventJS;
    class Heightmap {
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.Heightmap$Types_)
        getHighestTaken(arg0: number, arg1: number): number;
        static primeHeightmaps(arg0: Internal.ChunkAccess_, arg1: Internal.Set_<Internal.Heightmap$Types>): void;
        getFirstAvailable(arg0: number, arg1: number): number;
        getRawData(): number[];
        update(arg0: number, arg1: number, arg2: number, arg3: Internal.BlockState_): boolean;
        setRawData(arg0: Internal.ChunkAccess_, arg1: Internal.Heightmap$Types_, arg2: number[]): void;
        get rawData(): number[]
    }
    type Heightmap_ = Heightmap;
    interface RepeatedDelayStrategy {
        abstract delayCyclesAfterSuccess(): number;
        exponentialBackoff(arg0: number): this;
        abstract delayCyclesAfterFailure(): number;
        readonly CONSTANT: Internal.RepeatedDelayStrategy;
    }
    type RepeatedDelayStrategy_ = RepeatedDelayStrategy;
    abstract class AbstractWidget implements Internal.LayoutElement, Internal.NarratableEntry, Internal.GuiEventListener, Internal.IAbstractWidgetExtension, Internal.Renderable {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: net.minecraft.network.chat.Component_)
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        onRelease(arg0: number, arg1: number): void;
        getX(): number;
        getY(): number;
        setFocused(arg0: boolean): void;
        isActive(): boolean;
        getTabOrderGroup(): number;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        getTooltip(): Internal.Tooltip;
        setTooltipDelay(arg0: number): void;
        getMessage(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        onClick(arg0: number, arg1: number): void;
        setTooltip(arg0: Internal.Tooltip_): void;
        setY(arg0: number): void;
        clearFGColor(): void;
        setX(arg0: number): void;
        setAlpha(arg0: number): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        setWidth(arg0: number): void;
        getHeight(): number;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        setTabOrderGroup(arg0: number): void;
        getFGColor(): number;
        isHovered(): boolean;
        getWidth(): number;
        narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        renderTexture(arg0: Internal.GuiGraphics_, arg1: ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        setPosition(arg0: number, arg1: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        visitWidgets(arg0: Internal.Consumer_<Internal.AbstractWidget>): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        playDownSound(arg0: Internal.SoundManager_): void;
        onClick(arg0: number, arg1: number, arg2: number): void;
        static wrapDefaultNarrationMessage(arg0: net.minecraft.network.chat.Component_): Internal.MutableComponent;
        getCurrentFocusPath(): Internal.ComponentPath;
        setFGColor(arg0: number): void;
        updateNarration(arg0: Internal.NarrationElementOutput_): void;
        isHoveredOrFocused(): boolean;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        setHeight(arg0: number): void;
        setMessage(arg0: net.minecraft.network.chat.Component_): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        get focused(): boolean
        get x(): number
        get y(): number
        set focused(arg0: boolean)
        get active(): boolean
        get tabOrderGroup(): number
        get tooltip(): Internal.Tooltip
        set tooltipDelay(arg0: number)
        get message(): net.minecraft.network.chat.Component
        set tooltip(arg0: Internal.Tooltip_)
        set y(arg0: number)
        set x(arg0: number)
        set alpha(arg0: number)
        set width(arg0: number)
        get height(): number
        get rectangle(): Internal.ScreenRectangle
        set tabOrderGroup(arg0: number)
        get FGColor(): number
        get hovered(): boolean
        get width(): number
        get currentFocusPath(): Internal.ComponentPath
        set FGColor(arg0: number)
        get hoveredOrFocused(): boolean
        set height(arg0: number)
        set message(arg0: net.minecraft.network.chat.Component_)
        visible: boolean;
        static readonly WIDGETS_LOCATION: ResourceLocation;
        height: number;
        static readonly ACCESSIBILITY_TEXTURE: ResourceLocation;
        static readonly UNSET_FG_COLOR: -1;
        active: boolean;
    }
    type AbstractWidget_ = AbstractWidget;
    class SpringItem$State extends Internal.Enum<Internal.SpringItem$State> {
        static values(): Internal.SpringItem$State[];
        static valueOf(arg0: string): Internal.SpringItem$State;
        static readonly WAITING_NEXT: Internal.SpringItem$State;
        static readonly READY: Internal.SpringItem$State;
    }
    type SpringItem$State_ = "waiting_next" | SpringItem$State | "ready";
    class EntityEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: Internal.Entity_)
        getEntity(): Internal.Entity;
        get entity(): Internal.Entity
    }
    type EntityEvent_ = EntityEvent;
    abstract class VentBlock extends Internal.CopycatBlock implements com.simibubi.create.content.equipment.wrench.IWrenchable {
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.CopycatBlockEntity>;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        teleportConductor(level: Internal.Level_, pos: BlockPos_, entity: Internal.Entity_, direction: Internal.Direction_): void;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.CopycatBlockEntity, InteractionResult>): InteractionResult;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        static create(properties: Internal.BlockBehaviour$Properties_): Internal.VentBlock;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
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
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.CopycatBlockEntity>): void;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.CopycatBlockEntity;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly COLLISION_SHAPE: Internal.ArrayVoxelShape;
        static readonly CONDUCTOR_VISIBLE: Internal.BooleanProperty;
        static readonly OUTLINE_SHAPE: Internal.CubeVoxelShape;
    }
    type VentBlock_ = VentBlock;
    class Realms32BitWarningStatus {
        constructor(arg0: Internal.Minecraft_)
        showRealms32BitWarningIfNeeded(arg0: Internal.Screen_): void;
    }
    type Realms32BitWarningStatus_ = Realms32BitWarningStatus;
    class ZetaBlockItem extends Internal.BlockItem implements Internal.IForgeItem, Internal.IZetaItemExtensions {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getArmorTextureZeta(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        shouldCauseReequipAnimationZeta(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getMaxDamageZeta(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        isRepairableZeta(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        canElytraFlyZeta(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onEntityItemUpdateZeta(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        isBookEnchantableZeta(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        onItemUseFirstZeta(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<any, any>;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        canApplyAtEnchantingTableZeta(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getAllEnchantmentsZeta(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        isEnderMaskZeta(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getBurnTimeZeta(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        getEnchantmentLevelZeta(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        canEquipZeta(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        damageItemZeta<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        setArmorToughness(armorToughness: number): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        getEnchantmentValueZeta(arg0: Internal.ItemStack_): number;
        canShearZeta(arg0: Internal.ItemStack_): boolean;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getDefaultTooltipHideFlagsZeta(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        doesSneakBypassUseZeta(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
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
    type ZetaBlockItem_ = ZetaBlockItem;
    class InteractionResultHolder <T> {
        constructor(arg0: InteractionResult_, arg1: T)
        getResult(): InteractionResult;
        static fail<T>(arg0: T): Internal.InteractionResultHolder<T>;
        static consume<T>(arg0: T): Internal.InteractionResultHolder<T>;
        getObject(): T;
        static success<T>(arg0: T): Internal.InteractionResultHolder<T>;
        static sidedSuccess<T>(arg0: T, arg1: boolean): Internal.InteractionResultHolder<T>;
        static pass<T>(arg0: T): Internal.InteractionResultHolder<T>;
        get result(): InteractionResult
        get object(): T
    }
    type InteractionResultHolder_<T> = InteractionResultHolder<T>;
    class PrivacyMode extends Internal.Enum<Internal.PrivacyMode> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.PrivacyMode[];
        getSerializedName(): string;
        static valueOf(name: string): Internal.PrivacyMode;
        get serializedName(): string
        readonly name: string;
        static readonly ALLIES: Internal.PrivacyMode;
        static readonly PUBLIC: Internal.PrivacyMode;
        static readonly NAME_MAP: Internal.NameMap<Internal.PrivacyMode>;
        static readonly PRIVATE: Internal.PrivacyMode;
        static readonly VALUES: Internal.PrivacyMode[];
    }
    type PrivacyMode_ = "public" | "allies" | PrivacyMode | "private";
    class StoringChunkProgressListener implements Internal.ChunkProgressListener {
        constructor(arg0: number)
        getProgress(): number;
        getFullDiameter(): number;
        start(): void;
        getStatus(arg0: number, arg1: number): Internal.ChunkStatus;
        getDiameter(): number;
        stop(): void;
        onStatusChange(arg0: Internal.ChunkPos_, arg1: Internal.ChunkStatus_): void;
        updateSpawnPos(arg0: Internal.ChunkPos_): void;
        get progress(): number
        get fullDiameter(): number
        get diameter(): number
    }
    type StoringChunkProgressListener_ = StoringChunkProgressListener;
    class BuilderType <T> extends Internal.Record {
        constructor(type: string, builderClass: Internal.BuilderBase<T>, factory: Internal.BuilderFactory_)
        factory(): Internal.BuilderFactory;
        type(): string;
        builderClass(): Internal.BuilderBase<T>;
    }
    type BuilderType_<T> = BuilderType<T>;
    class CopycatTrapdoorBlock extends Internal.WaterloggedCopycatWrappedBlock<Internal.WrappedTrapdoorBlock> {
        constructor(properties: Internal.BlockBehaviour$Properties_)
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
        static unwrap<B extends Internal.Block>(block: B): Internal.Block;
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
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
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
        getWrappedBlock(): Internal.Block;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.CopycatBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityClass(): typeof Internal.CopycatBlockEntity
        get mod(): string
        get wrappedBlock(): Internal.Block
        static trapdoor: Internal.WrappedTrapdoorBlock;
    }
    type CopycatTrapdoorBlock_ = CopycatTrapdoorBlock;
    class BlockContainerJS implements Internal.SpecialEquality {
        constructor(blockEntity: Internal.BlockEntity_)
        constructor(w: Internal.Level_, p: BlockPos_)
        getTags(): Internal.Collection<ResourceLocation>;
        getWest(): this;
        getY(): number;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getNorth(): this;
        getBlockLight(): number;
        spawnLightning(): void;
        spawnFireworks(fireworks: Internal.FireworksJS_): void;
        getPos(): BlockPos;
        getDown(): this;
        getLight(): number;
        getDrops(): Internal.List<Internal.ItemStack>;
        getSouth(): this;
        getSkyLight(): number;
        mergeEntityData(tag: Internal.CompoundTag_): void;
        getCanSeeSky(): boolean;
        getDimension(): ResourceLocation;
        getBlockState(): Internal.BlockState;
        specialEquals(o: any, shallow: boolean): boolean;
        hasTag(tag: ResourceLocation_): boolean;
        getTypeData(): Internal.CompoundTag;
        getInventory(): Internal.InventoryKJS;
        offset(x: number, y: number, z: number): this;
        offset(f: Internal.Direction_): this;
        offset(f: Internal.Direction_, d: number): this;
        getEntityId(): string;
        spawnLightning(effectOnly: boolean, player: Internal.ServerPlayer_): void;
        getEast(): this;
        getX(): number;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        getDrops(entity: Internal.Entity_, heldItem: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        set(id: Special.Block, properties: Internal.Map_<any, any>): void;
        popItem(item: Internal.ItemStack_): void;
        set(id: Special.Block, properties: Internal.Map_<any, any>, flags: number): void;
        getLevel(): Internal.Level;
        setBlockState(state: Internal.BlockState_, flags: number): void;
        popItemFromFace(item: Internal.ItemStack_, dir: Internal.Direction_): void;
        getEntity(): Internal.BlockEntity;
        getPlayersInRadius(radius: number): Internal.EntityArrayList;
        clearCache(): void;
        getUp(): this;
        getZ(): number;
        getEntityData(): Internal.CompoundTag;
        spawnLightning(effectOnly: boolean): void;
        getItem(): Internal.ItemStack;
        getInventory(facing: Internal.Direction_): Internal.InventoryKJS;
        getId(): Special.Block&`${string}:${string}`;
        canSeeSkyFromBelowWater(): boolean;
        getProperties(): Internal.Map<string, string>;
        createExplosion(): Internal.ExplosionJS;
        setEntityData(tag: Internal.CompoundTag_): void;
        set(id: Special.Block): void;
        getPlayersInRadius(): Internal.EntityArrayList;
        getBiomeId(): ResourceLocation;
        get tags(): Internal.Collection<ResourceLocation>
        get west(): Internal.BlockContainerJS
        get y(): number
        get north(): Internal.BlockContainerJS
        get blockLight(): number
        get pos(): BlockPos
        get down(): Internal.BlockContainerJS
        get light(): number
        get drops(): Internal.List<Internal.ItemStack>
        get south(): Internal.BlockContainerJS
        get skyLight(): number
        get canSeeSky(): boolean
        get dimension(): ResourceLocation
        get blockState(): Internal.BlockState
        get typeData(): Internal.CompoundTag
        get inventory(): Internal.InventoryKJS
        get entityId(): string
        get east(): Internal.BlockContainerJS
        get x(): number
        get level(): Internal.Level
        get entity(): Internal.BlockEntity
        get up(): Internal.BlockContainerJS
        get z(): number
        get entityData(): Internal.CompoundTag
        get item(): Internal.ItemStack
        get id(): Special.Block&`${string}:${string}`
        get properties(): Internal.Map<string, string>
        set entityData(tag: Internal.CompoundTag_)
        get playersInRadius(): Internal.EntityArrayList
        get biomeId(): ResourceLocation
        readonly minecraftLevel: Internal.Level;
    }
    type BlockContainerJS_ = BlockContainerJS;
    interface IStashStorageItem {
        abstract stash(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): Internal.ItemStack;
        abstract getItemStashable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): Internal.IStashStorageItem$StashResult;
        abstract getInventoryTooltip(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
    }
    type IStashStorageItem_ = IStashStorageItem;
    class EnderDragon extends Internal.Mob implements Internal.Enemy {
        constructor(arg0: Internal.EntityType_<Internal.EnderDragon>, arg1: Internal.Level_)
        getHeadLookVector(arg0: number): Vec3d;
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getLatencyPos(arg0: number, arg1: number): number[];
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        hurt(arg0: Internal.EnderDragonPart_, arg1: DamageSource_, arg2: number): boolean;
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
        getSubEntities(): Internal.EnderDragonPart[];
        findClosestNode(): number;
        damageHeldItem(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFightOrigin(): BlockPos;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        onCrystalDestroyed(arg0: Internal.EndCrystal_, arg1: BlockPos_, arg2: DamageSource_): void;
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
        findClosestNode(arg0: number, arg1: number, arg2: number): number;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        onFlap(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        setFightOrigin(arg0: BlockPos_): void;
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
        isFlapping(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getHeadPartYOffset(arg0: number, arg1: number[], arg2: number[]): number;
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
        setDragonFight(arg0: Internal.EndDragonFight_): void;
        setMovementSpeedAddition(speed: number): void;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        findPath(arg0: number, arg1: number, arg2: Internal.Node_): net.minecraft.world.level.pathfinder.Path;
        getPhaseManager(): Internal.EnderDragonPhaseManager;
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
        getDragonFight(): Internal.EndDragonFight;
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
        get subEntities(): Internal.EnderDragonPart[]
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get fightOrigin(): BlockPos
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
        set fightOrigin(arg0: BlockPos_)
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get flapping(): boolean
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set dragonFight(arg0: Internal.EndDragonFight_)
        set movementSpeedAddition(speed: number)
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get phaseManager(): Internal.EnderDragonPhaseManager
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get dragonFight(): Internal.EndDragonFight
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        oFlapTime: number;
        nearestCrystal: Internal.EndCrystal;
        flapTime: number;
        static readonly DATA_PHASE: Internal.EntityDataAccessor<number>;
        yRotA: number;
        readonly head: Internal.EnderDragonPart;
        dragonDeathTime: number;
        readonly positions: number[][];
        posPointer: number;
        inWall: boolean;
    }
    type EnderDragon_ = EnderDragon;
    class TrackCouplerBlockEntity$ClientInfo {
        constructor(tag: Internal.CompoundTag_)
        write(): Internal.CompoundTag;
        static readonly FALLBACK: Internal.TrackCouplerBlockEntity$ClientInfo;
        edgePointsOk: boolean;
        mode: Internal.TrackCouplerBlockEntity$OperationMode;
        trainName2: string;
        trainName1: string;
        error2: Internal.MutableComponent;
        error: Internal.MutableComponent;
    }
    type TrackCouplerBlockEntity$ClientInfo_ = TrackCouplerBlockEntity$ClientInfo;
    abstract class KeyFrameData {
        constructor(arg0: number)
        getStartTick(): number;
        get startTick(): number
    }
    type KeyFrameData_ = KeyFrameData;
    interface Delayed extends Internal.Comparable<Internal.Delayed> {
        abstract getDelay(arg0: Internal.TimeUnit_): number;
        abstract compareTo(arg0: Internal.Delayed_): number;
    }
    type Delayed_ = Delayed;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    interface DomainCombiner {
        abstract combine(arg0: Internal.ProtectionDomain_[], arg1: Internal.ProtectionDomain_[]): Internal.ProtectionDomain[];
        (arg0: Internal.ProtectionDomain[], arg1: Internal.ProtectionDomain[]): Internal.ProtectionDomain_[];
    }
    type DomainCombiner_ = DomainCombiner;
    class FilterMask {
        constructor(arg0: number)
        apply(arg0: string): string;
        static read(arg0: Internal.FriendlyByteBuf_): Internal.FilterMask;
        applyWithFormatting(arg0: string): net.minecraft.network.chat.Component;
        isEmpty(): boolean;
        setFiltered(arg0: number): void;
        isFullyFiltered(): boolean;
        static write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.FilterMask_): void;
        get empty(): boolean
        set filtered(arg0: number)
        get fullyFiltered(): boolean
        static readonly CODEC: Internal.Codec<Internal.FilterMask>;
        static readonly FILTERED_STYLE: Internal.Style;
        static readonly PASS_THROUGH: Internal.FilterMask;
        static readonly FULLY_FILTERED: Internal.FilterMask;
    }
    type FilterMask_ = FilterMask;
    class LavaFluid$Flowing extends Internal.LavaFluid {
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
    type LavaFluid$Flowing_ = LavaFluid$Flowing;
    class GameRules implements Internal.GameRulesKJS {
        constructor()
        constructor(arg0: Internal.DynamicLike_<any>)
        set(rule: string, value: string): void;
        kjs$getBoolean(rule: string): boolean;
        createTag(): Internal.CompoundTag;
        kjs$getInt(rule: string): number;
        getRule<T extends Internal.GameRules$Value<T>>(arg0: Internal.GameRules$Key_<T>): T;
        static register<T extends Internal.GameRules$Value<T>>(arg0: string, arg1: Internal.GameRules$Category_, arg2: Internal.GameRules$Type_<T>): Internal.GameRules$Key<T>;
        get(rule: string): Internal.GameRules$Value<any>;
        static visitGameRuleTypes(arg0: Internal.GameRules$GameRuleTypeVisitor_): void;
        getBoolean(arg0: Internal.GameRules$Key_<Internal.GameRules$BooleanValue>): boolean;
        assignFrom(arg0: Internal.GameRules_, arg1: Internal.MinecraftServer_): void;
        kjs$getString(rule: string): string;
        getInt(arg0: Internal.GameRules$Key_<Internal.GameRules$IntegerValue>): number;
        copy(): this;
        static readonly RULE_DO_WARDEN_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MAX_COMMAND_CHAIN_LENGTH: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_MOBGRIEFING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DISABLE_ELYTRA_MOVEMENT_CHECK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FREEZE_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOINSOMNIA: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_COMMAND_MODIFICATION_BLOCK_LIMIT: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_DAYLIGHT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_TRADER_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_REDUCEDDEBUGINFO: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_IMMEDIATE_RESPAWN: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOMOBSPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOBLOCKDROPS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_COMMANDBLOCKOUTPUT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_TNT_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_WEATHER_CYCLE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_NATURAL_REGENERATION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FIRE_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FORGIVE_DEAD_PLAYERS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SHOWDEATHMESSAGES: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_PLAYERS_SLEEPING_PERCENTAGE: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_WATER_SOURCE_CONVERSION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FALL_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MOB_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DISABLE_RAIDS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_BLOCK_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LOGADMINCOMMANDS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SPAWN_RADIUS: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_SENDCOMMANDFEEDBACK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SNOW_ACCUMULATION_HEIGHT: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_ANNOUNCE_ADVANCEMENTS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOENTITYDROPS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LAVA_SOURCE_CONVERSION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_PATROL_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_VINES_SPREAD: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly DEFAULT_RANDOM_TICK_SPEED: 3;
        static readonly RULE_DOFIRETICK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LIMITED_CRAFTING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SPECTATORSGENERATECHUNKS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MAX_ENTITY_CRAMMING: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_DROWNING_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_UNIVERSAL_ANGER: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_GLOBAL_SOUND_EVENTS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_KEEPINVENTORY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOMOBLOOT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_RANDOMTICKING: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
    }
    type GameRules_ = GameRules;
    interface CraftingContainerKJS {
        getMenu(): Internal.AbstractContainerMenu;
        get menu(): Internal.AbstractContainerMenu
    }
    type CraftingContainerKJS_ = CraftingContainerKJS;
    class Instant implements Internal.Comparable<Internal.Instant>, Internal.Temporal, Internal.TemporalAdjuster, Internal.Serializable {
        minusSeconds(arg0: number): this;
        plus(arg0: number, arg1: Internal.TemporalUnit_): this;
        static parse(arg0: Internal.CharSequence_): Internal.Instant;
        isBefore(arg0: Internal.Instant_): boolean;
        compareTo(arg0: any): number;
        static ofEpochSecond(arg0: number, arg1: number): Internal.Instant;
        static ofEpochSecond(arg0: number): Internal.Instant;
        plusSeconds(arg0: number): this;
        minus(arg0: Internal.TemporalAmount_): this;
        getLong(arg0: Internal.TemporalField_): number;
        static now(): Internal.Instant;
        isSupported(arg0: Internal.TemporalField_): boolean;
        static from(arg0: Internal.TemporalAccessor_): Internal.Instant;
        "with"(arg0: Internal.TemporalField_, arg1: number): this;
        minusNanos(arg0: number): this;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        static now(arg0: Internal.Clock_): Internal.Instant;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        "with"(arg0: Internal.TemporalAdjuster_): this;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        atOffset(arg0: Internal.ZoneOffset_): Internal.OffsetDateTime;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        getNano(): number;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        getEpochSecond(): number;
        plus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        plusMillis(arg0: number): this;
        isAfter(arg0: Internal.Instant_): boolean;
        toEpochMilli(): number;
        get(arg0: Internal.TemporalField_): number;
        atZone(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        compareTo(arg0: Internal.Instant_): number;
        plusNanos(arg0: number): this;
        static ofEpochMilli(arg0: number): Internal.Instant;
        minusMillis(arg0: number): this;
        get nano(): number
        get epochSecond(): number
        static readonly EPOCH: Internal.Instant;
        static readonly MAX: Internal.Instant;
        static readonly MIN: Internal.Instant;
    }
    type Instant_ = Instant;
    interface ImmutableStringReader {
        abstract getTotalLength(): number;
        abstract peek(): string;
        abstract getCursor(): number;
        abstract getRead(): string;
        abstract canRead(): boolean;
        abstract getRemainingLength(): number;
        abstract getRemaining(): string;
        abstract canRead(arg0: number): boolean;
        abstract peek(arg0: number): string;
        abstract getString(): string;
        get totalLength(): number
        get cursor(): number
        get read(): string
        get remainingLength(): number
        get remaining(): string
        get string(): string
    }
    type ImmutableStringReader_ = ImmutableStringReader;
    class GridFlags extends Internal.Enum<Internal.GridFlags> {
        static valueOf(arg0: string): Internal.GridFlags;
        static values(): Internal.GridFlags[];
        static readonly REQUIRE_CHANNEL: Internal.GridFlags;
        static readonly COMPRESSED_CHANNEL: Internal.GridFlags;
        static readonly DENSE_CAPACITY: Internal.GridFlags;
        static readonly PREFERRED: Internal.GridFlags;
        static readonly MULTIBLOCK: Internal.GridFlags;
        static readonly CANNOT_CARRY: Internal.GridFlags;
        static readonly CANNOT_CARRY_COMPRESSED: Internal.GridFlags;
    }
    type GridFlags_ = "compressed_channel" | GridFlags | "preferred" | "multiblock" | "cannot_carry_compressed" | "cannot_carry" | "dense_capacity" | "require_channel";
    interface SerumInjector extends Internal.ItemLike {
        canInteractWithLivingTarget(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_): boolean;
        abstract asItem(): Internal.Item;
        canInteractWithPlayerSelf(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        abstract getSerum(arg0: Internal.ItemStack_): Internal.Serum;
    }
    type SerumInjector_ = SerumInjector;
    class WideGaugeComicallyLargeBogeyBlock extends Internal.WideGaugeBogeyBlock {
        constructor(props: Internal.BlockBehaviour$Properties_)
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
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.CRBogeyBlockEntity;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.CRBogeyBlockEntity>): void;
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.CRBogeyBlockEntity, InteractionResult>): InteractionResult;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.CRBogeyBlockEntity>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type WideGaugeComicallyLargeBogeyBlock_ = WideGaugeComicallyLargeBogeyBlock;
    abstract class AbstractTexture implements Internal.AutoCloseable {
        constructor()
        setBlurMipmap(arg0: boolean, arg1: boolean): void;
        bind(): void;
        restoreLastBlurMipmap(): void;
        abstract load(arg0: Internal.ResourceManager_): void;
        close(): void;
        setFilter(arg0: boolean, arg1: boolean): void;
        releaseId(): void;
        reset(arg0: Internal.TextureManager_, arg1: Internal.ResourceManager_, arg2: ResourceLocation_, arg3: Internal.Executor_): void;
        getId(): number;
        get id(): number
        static readonly NOT_ASSIGNED: -1;
    }
    type AbstractTexture_ = AbstractTexture;
    class TotemWingBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        static readonly FACING: Internal.DirectionProperty;
    }
    type TotemWingBlock_ = TotemWingBlock;
    abstract class GrowingPlantHeadBlock extends Internal.GrowingPlantBlock implements Internal.BonemealableBlock {
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
        getMaxAgeState(arg0: Internal.BlockState_): Internal.BlockState;
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
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        isMaxAge(arg0: Internal.BlockState_): boolean;
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
        static readonly MAX_AGE: 25;
    }
    type GrowingPlantHeadBlock_ = GrowingPlantHeadBlock;
    class ModifiableBiomeInfo$BiomeInfo$Builder {
        getClimateSettings(): Internal.ClimateSettingsBuilder;
        getMobSpawnSettings(): Internal.MobSpawnSettingsBuilder;
        static copyOf(arg0: Internal.ModifiableBiomeInfo$BiomeInfo_): Internal.ModifiableBiomeInfo$BiomeInfo$Builder;
        getGenerationSettings(): Internal.BiomeGenerationSettingsBuilder;
        getSpecialEffects(): Internal.BiomeSpecialEffectsBuilder;
        build(): Internal.ModifiableBiomeInfo$BiomeInfo;
        get climateSettings(): Internal.ClimateSettingsBuilder
        get mobSpawnSettings(): Internal.MobSpawnSettingsBuilder
        get generationSettings(): Internal.BiomeGenerationSettingsBuilder
        get specialEffects(): Internal.BiomeSpecialEffectsBuilder
    }
    type ModifiableBiomeInfo$BiomeInfo$Builder_ = ModifiableBiomeInfo$BiomeInfo$Builder;
    class IRecipeTransferError$Type extends Internal.Enum<Internal.IRecipeTransferError$Type> {
        static valueOf(arg0: string): Internal.IRecipeTransferError$Type;
        static values(): Internal.IRecipeTransferError$Type[];
        static readonly INTERNAL: Internal.IRecipeTransferError$Type;
        static readonly COSMETIC: Internal.IRecipeTransferError$Type;
        static readonly USER_FACING: Internal.IRecipeTransferError$Type;
        readonly allowsTransfer: boolean;
    }
    type IRecipeTransferError$Type_ = IRecipeTransferError$Type | "internal" | "user_facing" | "cosmetic";
    class RealmsNotification {
        static parseList(arg0: string): Internal.List<Internal.RealmsNotification>;
        dismissable(): boolean;
        seen(): boolean;
        uuid(): Internal.UUID;
    }
    type RealmsNotification_ = RealmsNotification;
    interface IDrawable {
        abstract draw(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        abstract getWidth(): number;
        abstract getHeight(): number;
        draw(arg0: Internal.GuiGraphics_): void;
        get width(): number
        get height(): number
    }
    type IDrawable_ = IDrawable;
    interface BucketPickup extends Internal.IForgeBucketPickup {
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        abstract pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        /**
         * @deprecated
        */
        abstract getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
    }
    type BucketPickup_ = BucketPickup;
    class ExclusionRecipe$Serializer implements Internal.RecipeSerializer<Internal.ExclusionRecipe> {
        constructor()
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ExclusionRecipe_): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.ExclusionRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ExclusionRecipe;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ExclusionRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type ExclusionRecipe$Serializer_ = ExclusionRecipe$Serializer;
    class EnumGetMethod extends Internal.Enum<Internal.EnumGetMethod> {
        static values(): Internal.EnumGetMethod[];
        isCaseSensitive(): boolean;
        static valueOf(arg0: string): Internal.EnumGetMethod;
        isOrdinalOk(): boolean;
        validate<T extends Internal.Enum<T>>(arg0: any, arg1: T): boolean;
        get<T extends Internal.Enum<T>>(arg0: any, arg1: T): T;
        get caseSensitive(): boolean
        get ordinalOk(): boolean
        static readonly ORDINAL_OR_NAME: Internal.EnumGetMethod;
        static readonly NAME: Internal.EnumGetMethod;
        static readonly NAME_IGNORECASE: Internal.EnumGetMethod;
        static readonly ORDINAL_OR_NAME_IGNORECASE: Internal.EnumGetMethod;
    }
    type EnumGetMethod_ = "name" | "ordinal_or_name" | EnumGetMethod | "ordinal_or_name_ignorecase" | "name_ignorecase";
    class GirderEncasedShaftBlock extends Internal.HorizontalAxisKineticBlock implements Internal.ISpecialBlockItemRequirement, Internal.IBE<Internal.KineticBlockEntity>, com.simibubi.create.content.equipment.wrench.IWrenchable, Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.KineticBlockEntity;
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
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.KineticBlockEntity>): void;
        getBlockEntityClass(): typeof Internal.KineticBlockEntity;
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
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockEntityType(): Internal.BlockEntityType<Internal.KineticBlockEntity>;
        hideStressImpact(): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.KineticBlockEntity, InteractionResult>): InteractionResult;
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
        showCapacityWithAnnotation(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get blockEntityClass(): typeof Internal.KineticBlockEntity
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockEntityType(): Internal.BlockEntityType<Internal.KineticBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly TOP: Internal.BooleanProperty;
        static readonly BOTTOM: Internal.BooleanProperty;
    }
    type GirderEncasedShaftBlock_ = GirderEncasedShaftBlock;
    interface IEventBus {
        abstract unregister(arg0: any): void;
        abstract addListener<T extends net.minecraftforge.eventbus.api.Event>(arg0: Internal.EventPriority_, arg1: boolean, arg2: Internal.Consumer_<T>): void;
        abstract post(arg0: net.minecraftforge.eventbus.api.Event_): boolean;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: Internal.Consumer_<T>): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.Consumer_<T>): void;
        abstract post(arg0: net.minecraftforge.eventbus.api.Event_, arg1: Internal.IEventBusInvokeDispatcher_): boolean;
        abstract register(arg0: any): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: boolean, arg3: Internal.Consumer_<T>): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: boolean, arg3: T, arg4: Internal.Consumer_<T>): void;
        abstract shutdown(): void;
        abstract start(): void;
        abstract addListener<T extends net.minecraftforge.eventbus.api.Event>(arg0: Internal.EventPriority_, arg1: Internal.Consumer_<T>): void;
        abstract addListener<T extends net.minecraftforge.eventbus.api.Event>(arg0: Internal.EventPriority_, arg1: boolean, arg2: T, arg3: Internal.Consumer_<T>): void;
        abstract addListener<T extends net.minecraftforge.eventbus.api.Event>(arg0: Internal.Consumer_<T>): void;
    }
    type IEventBus_ = IEventBus;
    class CAFluids$NoColorFluidAttributes extends Internal.AllFluids$TintedFluidType {
        constructor(arg0: Internal.FluidType$Properties_, arg1: ResourceLocation_, arg2: ResourceLocation_)
        getTintColor(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
    }
    type CAFluids$NoColorFluidAttributes_ = CAFluids$NoColorFluidAttributes;
    class FrameBlock extends Internal.MimicBlock implements Internal.EntityBlock, Internal.IFrameBlock {
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
        registerFilledBlock(inserted: Internal.Block_, filled: Internal.Block_): void;
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
        getFilledBlock(inserted: Internal.Block_): Internal.Block;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(pPos: BlockPos_, pState: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
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
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly OCCLUSION_SHAPE: Internal.ArrayVoxelShape;
        static readonly FRAMED_BLOCKS: [Internal.FrameBlock, Internal.FrameBraceBlock, Internal.FrameBlock];
        static readonly HAS_BLOCK: Internal.BooleanProperty;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly LIGHT_LEVEL: Internal.IntegerProperty;
    }
    type FrameBlock_ = FrameBlock;
    class SeatEntity extends Internal.Entity {
        constructor(level: Internal.Level_)
        constructor(level: Internal.Level_, pos: BlockPos_)
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
        static getEntitySeatOffset(entity: Internal.Entity_): number;
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
    type SeatEntity_ = SeatEntity;
    class Proxy$Type extends Internal.Enum<Internal.Proxy$Type> {
        static valueOf(arg0: string): Internal.Proxy$Type;
        static values(): Internal.Proxy$Type[];
        static readonly SOCKS: Internal.Proxy$Type;
        static readonly HTTP: Internal.Proxy$Type;
        static readonly DIRECT: Internal.Proxy$Type;
    }
    type Proxy$Type_ = Proxy$Type | "http" | "socks" | "direct";
    class EntityAttributeCreationEvent extends net.minecraftforge.eventbus.api.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<Internal.EntityType<Internal.LivingEntity>, Internal.AttributeSupplier>)
        put(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.AttributeSupplier_): void;
    }
    type EntityAttributeCreationEvent_ = EntityAttributeCreationEvent;
    class HatStandItem extends Internal.Item {
        constructor(properties: Internal.Item$Properties_)
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
    type HatStandItem_ = HatStandItem;
    class BaseFunction extends Internal.IdScriptableObject implements dev.latvian.mods.rhino.Function {
        constructor()
        constructor(scope: Internal.Scriptable_, prototype: Internal.Scriptable_)
        constructor(isGenerator: boolean)
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        getArity(): number;
        getFunctionName(): string;
        call(cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        setImmunePrototypeProperty(value: any): void;
        createObject(cx: Internal.Context_, scope: Internal.Scriptable_): Internal.Scriptable;
        getAllIds(cx: Internal.Context_): any[];
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        construct(cx: Internal.Context_, scope: Internal.Scriptable_, args: any[]): Internal.Scriptable;
        getLength(): number;
        get arity(): number
        get functionName(): string
        set immunePrototypeProperty(value: any)
        get length(): number
    }
    type BaseFunction_ = BaseFunction;
    class HolyLocketItem extends Internal.RelicItem implements Internal.IRenderableCurio {
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
    type HolyLocketItem_ = HolyLocketItem;
    class HierarchyEvent extends Internal.AWTEvent {
        constructor(arg0: Internal.Component_, arg1: number, arg2: Internal.Component_, arg3: Internal.Container_, arg4: number)
        constructor(arg0: Internal.Component_, arg1: number, arg2: Internal.Component_, arg3: Internal.Container_)
        getChangedParent(): Internal.Container;
        getChanged(): Internal.Component;
        getComponent(): Internal.Component;
        getChangeFlags(): number;
        get changedParent(): Internal.Container
        get changed(): Internal.Component
        get component(): Internal.Component
        get changeFlags(): number
        static readonly ANCESTOR_RESIZED: 1402;
        static readonly PARENT_CHANGED: 1;
        static readonly ANCESTOR_MOVED: 1401;
        static readonly HIERARCHY_LAST: 1402;
        static readonly HIERARCHY_FIRST: 1400;
        static readonly HIERARCHY_CHANGED: 1400;
        static readonly DISPLAYABILITY_CHANGED: 2;
        static readonly SHOWING_CHANGED: 4;
    }
    type HierarchyEvent_ = HierarchyEvent;
    class ArmBlockEntity extends Internal.KineticBlockEntity implements Internal.ITransformableBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        writeInteractionPoints(arg0: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        static getRange(): number;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        redstoneUpdate(): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        transform(arg0: Internal.StructureTransform_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        get range(): number
        get modelData(): Internal.ModelData
    }
    type ArmBlockEntity_ = ArmBlockEntity;
    class SconceBlock extends Internal.LightUpWaterBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_, lightLevel: number, particleData: Internal.Supplier_<T>)
        constructor(properties: Internal.BlockBehaviour$Properties_, particleData: Internal.Supplier_<T>)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        playExtinguishSound(world: Internal.LevelAccessor_, pos: BlockPos_): void;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        isLitUp(state: Internal.BlockState_, level: Internal.LevelAccessor_, pos: BlockPos_): boolean;
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
        extinguish(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): boolean;
        setLitUp(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, lit: boolean): void;
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
        interactWithPlayer(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_): InteractionResult;
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
        playLightUpSound(world: Internal.LevelAccessor_, pos: BlockPos_, type: Internal.ILightable$FireSourceType_): void;
        spawnSmokeParticles(state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): void;
        interactWithProjectile(level: Internal.Level_, state: Internal.BlockState_, projectile: Internal.Projectile_, pos: BlockPos_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeExtinguishedBy(item: Internal.ItemStack_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type SconceBlock_ = SconceBlock;
    interface Appendable {
        abstract append(arg0: Internal.CharSequence_): this;
        abstract append(arg0: Internal.CharSequence_, arg1: number, arg2: number): this;
        abstract append(arg0: string): this;
    }
    type Appendable_ = Appendable;
    interface AccessEditBox {
        abstract searchables$getFilter(): Internal.Predicate<string>;
        abstract searchables$getResponder(): Internal.Consumer<string>;
    }
    type AccessEditBox_ = AccessEditBox;
    class PlayerEvent$ItemCraftedEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: net.minecraft.world.Container_)
        getInventory(): net.minecraft.world.Container;
        getCrafting(): Internal.ItemStack;
        getEntity(): Internal.LivingEntity;
        get inventory(): net.minecraft.world.Container
        get crafting(): Internal.ItemStack
        get entity(): Internal.LivingEntity
    }
    type PlayerEvent$ItemCraftedEvent_ = PlayerEvent$ItemCraftedEvent;
    class ModBlockProperties$RakeDirection extends Internal.Enum<Internal.ModBlockProperties$RakeDirection> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(name: string): Internal.ModBlockProperties$RakeDirection;
        getSerializedName(): string;
        static fromDirections(directions: Internal.List_<Internal.Direction>): Internal.ModBlockProperties$RakeDirection;
        static values(): Internal.ModBlockProperties$RakeDirection[];
        getDirections(): Internal.List<Internal.Direction>;
        get serializedName(): string
        get directions(): Internal.List<Internal.Direction>
        static readonly NORTH_SOUTH: Internal.ModBlockProperties$RakeDirection;
        static readonly NORTH_WEST: Internal.ModBlockProperties$RakeDirection;
        static readonly NORTH_EAST: Internal.ModBlockProperties$RakeDirection;
        static readonly SOUTH_EAST: Internal.ModBlockProperties$RakeDirection;
        static readonly SOUTH_WEST: Internal.ModBlockProperties$RakeDirection;
        static readonly EAST_WEST: Internal.ModBlockProperties$RakeDirection;
    }
    type ModBlockProperties$RakeDirection_ = ModBlockProperties$RakeDirection | "north_west" | "north_east" | "south_west" | "north_south" | "east_west" | "south_east";
    class StreamTagVisitor$EntryResult extends Internal.Enum<Internal.StreamTagVisitor$EntryResult> {
        static valueOf(arg0: string): Internal.StreamTagVisitor$EntryResult;
        static values(): Internal.StreamTagVisitor$EntryResult[];
        static readonly BREAK: Internal.StreamTagVisitor$EntryResult;
        static readonly SKIP: Internal.StreamTagVisitor$EntryResult;
        static readonly ENTER: Internal.StreamTagVisitor$EntryResult;
        static readonly HALT: Internal.StreamTagVisitor$EntryResult;
    }
    type StreamTagVisitor$EntryResult_ = StreamTagVisitor$EntryResult | "break" | "halt" | "skip" | "enter";
    class DispenserBlock extends Internal.BaseEntityBlock implements com.simibubi.create.foundation.mixin.accessor.DispenserBlockAccessor, Internal.DispenserBlockAccessor {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        static registerBehavior(arg0: Internal.ItemLike_, arg1: Internal.DispenseItemBehavior_): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getDispenseMethod(arg0: Internal.ItemStack_): Internal.DispenseItemBehavior;
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
        handler$zoj000$onCuttingBoardDispenseFromInject(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.CallbackInfo_, arg3: Internal.BlockSourceImpl_, arg4: Internal.DispenserBlockEntity_, arg5: number, arg6: Internal.ItemStack_): void;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        create$callGetDispenseMethod(arg0: Internal.ItemStack_): Internal.DispenseItemBehavior;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        static getDispenserRegistry_$md$db668a$0(): Internal.Map<any, any>;
        static getDispensePosition(arg0: Internal.BlockSource_): Internal.Position;
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
        static getDispenserRegistry(): Internal.Map<Internal.Item, Internal.DispenseItemBehavior>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get dispenserRegistry_$md$db668a$0(): Internal.Map<any, any>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get dispenserRegistry(): Internal.Map<Internal.Item, Internal.DispenseItemBehavior>
        static DISPENSER_REGISTRY: {[key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.HoneycombItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SeatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgottenHatItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.FluidTankItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ScreenBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartContraptionItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DyeableHorseArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FleshChainBlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SupportItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.SemaphoreItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrShulkerBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemVaultItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.MinecartItemCoFH]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.HazmatArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.TrackCouplerBlockItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ModularAccumulatorBlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BioExtractorItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.StageBarrierBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.CraftingBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.TargetDummyItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FunnelItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.TrackTargetingBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BombItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ShearsItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.HoneyBottleItem]: any, [key: Internal.FlagItem]: any, [key: Internal.Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TimberFrameItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.FungusColonyItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ParrotEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FleshkinChestBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.QuarkBoatItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.ClipboardBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.CraftingBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FungusColonyItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrChestBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.CogwheelBlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ChuteItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ParrotEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.CookingPotItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.DigitalAdapterBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrainCarItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.Item]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.EggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.WoodBasedBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.FlorbItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DivingArmorItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SugarCubeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BeekeeperArmorItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.UnderwaterMinecartItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.CraftingBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.KeyItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ParrotEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ExperienceBottleItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.TinyPotatoBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.SignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartContraptionItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SoapItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BannerItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.BeltTunnelItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.WoodBasedBlockItem]: any, [key: Internal.MelonJuiceItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HazmatArmorItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SkilletItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BombItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.SupportItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MetalScaffoldingBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BubbleBlockItem]: any, [key: Internal.BucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.HotCocoaItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SupportItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ElytraItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DivingArmorItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StorageSacBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.TrainCarItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HorseArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaSignItem]: any, [key: Internal.PlayerHeadItem]: any, [key: Internal.HorseArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlackboardItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AssemblyOperatorBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FertilizerItem]: any, [key: Internal.GrenadeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.GameMasterBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SeatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BambooSpikesTippedItem]: any, [key: Internal.FluixAxeItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.GrenadeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ModItems$1]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.SupportItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrainCarItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.IceChargeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.RedstoneContactItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SeatItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BannerItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SeatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.BlockItem]: any, [key: Internal.GogglesItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaMobBucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.SeatItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.MinecartItemCoFH]: any, [key: Internal.AxeItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.FluidTankItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.SupportItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MushroomColonyItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SeatItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SuspiciousStewItem]: any, [key: Internal.MinecartItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BowlFoodItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.GameMasterBlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WoodBasedBlockItem]: any, [key: Internal.BacktankItem$BacktankBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.ZetaSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.DivingBootsItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.MilkBottleItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.Item]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FluidCellBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.QuarkBoatItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.CraftingBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FlintAndSteelItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.QuarkBoatItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.PresentItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ArrowItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AxeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BacktankItem$BacktankBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SafeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.FertilizerItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.TrainCarItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PlaceOnWaterBlockItem]: any, [key: Internal.HangingSignItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.CogwheelBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AssemblyOperatorBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.LootrChestBlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ScreenBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.GrenadeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.CartAssemblerBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.ZetaDoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AssemblyOperatorBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.BackpackItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.ItemDrawers]: any, [key: Internal.APBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.GrenadeItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.ZetaSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BowlFoodItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BiomassPelletBlock]: any, [key: Internal.TrackTargetingBlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.Item]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.Item]: any, [key: Internal.BombItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.SnowballItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.GameMasterBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WoodBasedBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DisplayLinkBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.GrenadeItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.FireChargeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BucketItem]: any, [key: Internal.BlockItemBase]: any, [key: Internal.Item]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackSwitchBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BeekeeperArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.QuarkBoatItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.GrenadeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.MushroomColonyItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.GrenadeItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FunnelItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.LongFallBoots]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.MetalScaffoldingBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlazeBurnerBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BottleItem]: any, [key: Internal.BlankSailBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TimberFrameItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.SignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.Items$1]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.DispenserMinecartItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BracketBlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SplashPotionItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.EnergyMinecartItem]: any, [key: Internal.ZetaHangingSignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BoatItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.ConductorWhistleItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.EnergyCellBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MilkBucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.ArmorItem]: any, [key: Internal.GrenadeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ColorApplicatorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BackpackItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaSpawnEggItem]: any, [key: Internal.MinecartItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AxeItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BannerItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SupportItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.MinecartItemCoFH]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.RopeArrowItem]: any, [key: Internal.BeltConnectorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BombItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: org.violetmoon.quark.addons.oddities.item.BackpackItem]: any, [key: Internal.HorseArmorItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrainCarItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.CageItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BuildersTeaItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BracketBlockItem]: any, [key: Internal.CraftingBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.ZetaSignItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.PresentItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ItemDrawers]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.AxeItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ScreenBlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PotionItem]: any, [key: Internal.RelicExperienceBottleItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.ArmorStandItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.CraftingBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AssemblyOperatorBlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.GrenadeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BowlFoodItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.SeatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.QuarkBoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.QuartzAxeItem]: any, [key: Internal.JarItem]: any, [key: Internal.BlockItem]: any, [key: Internal.QuestBarrierBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.HazmatArmorItem]: any, [key: Internal.BedItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.CraftingBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.DivingBootsItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.SeatItem]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaDoubleHighBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.GameMasterBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.LargeWaterWheelBlockItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.EntropyManipulatorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.TrainCarItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.SupportItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DivingHelmetItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SignItemCoFH]: any, [key: Internal.BombItem]: any, [key: Internal.EnderpearlItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.LingeringPotionItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.GrenadeItem]: any, [key: Internal.BedItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackTargetingBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.RollerBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.QuartzAxeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ScaffoldingBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.ParrotEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WoodBasedBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BeekeeperArmorItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BacktankItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ScreenBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SeatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaArrowItem$Impl]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.Items$1]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SackItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TippedArrowItem]: any, [key: Internal.RottenTomatoItem]: any, [key: Internal.BlockItem]: any, [key: Internal.EnergyCellBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaHangingSignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AssemblyOperatorBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.CardboardBoxItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.GameMasterBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.RiceItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FireworkRocketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.GrenadeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.MinecartItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.FlagItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoneMealItem]: any, [key: Internal.ZetaHangingSignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BeltTunnelItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.MatterCannonItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BacktankItem$Layered]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TimberFrameItem]: any, [key: Internal.ObfuscatedTooltipBlockItem]: any, [key: Internal.TrackSwitchBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DrinkableItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartItemCoFH]: any, [key: Internal.ItemDrawers]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.LootrChestBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BackpackItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BackpackItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.SaltItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.ItemNameBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.Item]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SolidBucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SeatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ShulkerShellItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.DivingHelmetItem]: any, [key: Internal.WindBellItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BlockItem]: any, [key: Internal.MultiBlockContainerBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SupportItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HazmatArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.CanisterBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpectralArrowItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SaddleItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SupportItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: cofh.thermal.core.common.item.EnergyCellBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BackpackItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ParrotEggItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: vectorwing.farmersdelight.common.item.RopeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AxeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BannerItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.AssemblyOperatorBlockItem]: any, [key: Internal.BedItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.RopeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DyeBottleItem]: any, [key: Internal.SupportItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.FuelBlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.PackageItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AxeItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SeatItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.EarthChargeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.QuarkBoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.DivingArmorItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ShieldItem]: any, [key: Internal.FluidMinecartItem]: any, [key: Internal.InjectorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.TrackBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.EndermanHeadItem]: any, [key: Internal.SpawnEggItemCoFH]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.FlagItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.Item]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartContraptionItem]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.EjectorItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BackpackItem]: any, [key: Internal.BlockItemAugmentable]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.BlockItem]: any, [key: Internal.RopeBlock$1]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.DoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BombItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WoodBasedBlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LightningChargeItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.SignItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaDoubleHighBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.LootrVariantChestBlock$Item]: any, [key: Internal.BlockItem]: any, [key: Internal.ConductorCapItemImpl]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MinecartItemCoFH]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BannerItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.SupportItem]: any, [key: Internal.ConsumableItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BEWLBlockItem]: any, [key: Internal.BeekeeperArmorItem]: any, [key: Internal.PresentItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HangingSignItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.UncontainableBlockItem]: any, [key: Internal.DivingArmorItem]: any, [key: Internal.ZetaSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.MetalScaffoldingBlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.WoodBasedBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.PresentItem]: any, [key: Internal.SimpleBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.PlaceOnWaterBlockItem]: any, [key: Internal.WireBlockItem]: any, [key: Internal.ItemDrawers]: any, [key: Internal.BlockItem]: any, [key: Internal.ZetaBlockItem]: any, [key: Internal.BlockItemCoFH]: any, [key: Internal.BlockItem]: any, [key: Internal.AEBaseBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any};
        static readonly TRIGGERED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type DispenserBlock_ = DispenserBlock;
    class FogShape extends Internal.Enum<Internal.FogShape> {
        static valueOf(arg0: string): Internal.FogShape;
        static values(): Internal.FogShape[];
        getIndex(): number;
        get index(): number
        static readonly CYLINDER: Internal.FogShape;
        static readonly SPHERE: Internal.FogShape;
    }
    type FogShape_ = FogShape | "cylinder" | "sphere";
    class SupportItem extends Internal.SwitchableBlockItem<Internal.BooleanProperty, boolean> {
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
        static readonly OVERRIDE_TAG: ResourceLocation;
    }
    type SupportItem_ = SupportItem;
    class GeodeLayerSettings {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        readonly innerLayer: number;
        readonly middleLayer: number;
        static readonly CODEC: Internal.Codec<Internal.GeodeLayerSettings>;
        readonly outerLayer: number;
        readonly filling: number;
    }
    type GeodeLayerSettings_ = GeodeLayerSettings;
    interface CompositeContext {
        abstract compose(arg0: Internal.Raster_, arg1: Internal.Raster_, arg2: Internal.WritableRaster_): void;
        abstract dispose(): void;
    }
    type CompositeContext_ = CompositeContext;
    interface RegistrySupplier <T> extends Internal.DeferredSupplier<T> {
        abstract getRegistrarManager(): Internal.RegistrarManager;
        getKey(): Internal.ResourceKey<T>;
        stream(): Internal.Stream<T>;
        ifPresent(action: Internal.Consumer_<T>): void;
        orElseGet(supplier: Internal.Supplier_<T>): T;
        ifPresentOrElse(action: Internal.Consumer_<T>, emptyAction: Internal.Runnable_): void;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<T>>;
        abstract getRegistrar(): Internal.Registrar<T>;
        getOrNull(): T;
        orElse(other: T): T;
        abstract getId(): ResourceLocation;
        abstract isPresent(): boolean;
        abstract getRegistryId(): ResourceLocation;
        abstract get(): T;
        listen(callback: Internal.Consumer_<T>): void;
        toOptional(): Internal.Optional<T>;
        get registrarManager(): Internal.RegistrarManager
        get key(): Internal.ResourceKey<T>
        get registryKey(): Internal.ResourceKey<Internal.Registry<T>>
        get registrar(): Internal.Registrar<T>
        get orNull(): T
        get id(): ResourceLocation
        get present(): boolean
        get registryId(): ResourceLocation
    }
    type RegistrySupplier_<T> = RegistrySupplier<T>;
    class MetricSampler$MetricSamplerBuilder <T> {
        constructor(arg0: string, arg1: Internal.MetricCategory_, arg2: Internal.ToDoubleFunction_<T>, arg3: T)
        withBeforeTick(arg0: Internal.Consumer_<T>): this;
        withThresholdAlert(arg0: Internal.MetricSampler$ThresholdTest_): this;
        build(): Internal.MetricSampler;
    }
    type MetricSampler$MetricSamplerBuilder_<T> = MetricSampler$MetricSamplerBuilder<T>;
    interface ResultConsumer <S> {
        abstract onCommandComplete(arg0: Internal.CommandContext_<S>, arg1: boolean, arg2: number): void;
        (arg0: Internal.CommandContext<S>, arg1: boolean, arg2: number): void;
    }
    type ResultConsumer_<S> = ResultConsumer<S>;
    class ImageCapabilities implements Internal.Cloneable {
        constructor(arg0: boolean)
        isAccelerated(): boolean;
        clone(): any;
        isTrueVolatile(): boolean;
        get accelerated(): boolean
        get trueVolatile(): boolean
    }
    type ImageCapabilities_ = ImageCapabilities;
    class TripWireBlock extends Internal.Block {
        constructor(arg0: Internal.TripWireHookBlock_, arg1: Internal.BlockBehaviour$Properties_)
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
        shouldConnectTo(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
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
        static readonly ATTACHED: Internal.BooleanProperty;
        static readonly NORTH: Internal.BooleanProperty;
        static readonly SOUTH: Internal.BooleanProperty;
        static readonly WEST: Internal.BooleanProperty;
        static readonly POWERED: Internal.BooleanProperty;
        static readonly DISARMED: Internal.BooleanProperty;
        static readonly EAST: Internal.BooleanProperty;
    }
    type TripWireBlock_ = TripWireBlock;
    class DecoratedPotRecipe extends Internal.CustomRecipe {
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
        static createDecoratedPotItem(arg0: Internal.DecoratedPotBlockEntity$Decorations_): Internal.ItemStack;
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
    type DecoratedPotRecipe_ = DecoratedPotRecipe;
    interface AccessibleSelection {
        abstract clearAccessibleSelection(): void;
        abstract getAccessibleSelection(arg0: number): Internal.Accessible;
        abstract addAccessibleSelection(arg0: number): void;
        abstract removeAccessibleSelection(arg0: number): void;
        abstract selectAllAccessibleSelection(): void;
        abstract isAccessibleChildSelected(arg0: number): boolean;
        abstract getAccessibleSelectionCount(): number;
        get accessibleSelectionCount(): number
    }
    type AccessibleSelection_ = AccessibleSelection;
    class ProjectileImpactEvent extends Internal.EntityEvent {
        constructor()
        constructor(arg0: Internal.Projectile_, arg1: Internal.HitResult_)
        getProjectile(): Internal.Projectile;
        getRayTraceResult(): Internal.HitResult;
        get projectile(): Internal.Projectile
        get rayTraceResult(): Internal.HitResult
    }
    type ProjectileImpactEvent_ = ProjectileImpactEvent;
    class ModuleDescriptor$Exports$Modifier extends Internal.Enum<Internal.ModuleDescriptor$Exports$Modifier> {
        static values(): Internal.ModuleDescriptor$Exports$Modifier[];
        static valueOf(arg0: string): Internal.ModuleDescriptor$Exports$Modifier;
        static readonly SYNTHETIC: Internal.ModuleDescriptor$Exports$Modifier;
        static readonly MANDATED: Internal.ModuleDescriptor$Exports$Modifier;
    }
    type ModuleDescriptor$Exports$Modifier_ = "mandated" | "synthetic" | ModuleDescriptor$Exports$Modifier;
    class DynamicRecipeComponent extends Internal.Record {
        constructor(desc: Internal.TypeDescJS_, factory: Internal.DynamicRecipeComponent$Factory_)
        desc(): Internal.TypeDescJS;
        factory(): Internal.DynamicRecipeComponent$Factory;
    }
    type DynamicRecipeComponent_ = DynamicRecipeComponent;
    class Item implements Internal.FeatureElement, Internal.ItemFTBL, Internal.ItemAccessor, Internal.ItemLike, Internal.IForgeItem, Internal.ItemKJS, Internal.AccessorItem, Internal.IZetaForgeItemStuff, Internal.IExtendedItem, Internal.InjectedItemExtension, Internal.ItemForgeAccessor {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): this;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        handler$bjn000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): this;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        static getPlayerPOVHitResult_$md$db668a$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        modifyReturnValue$bna000$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        getId(): Special.Item&`${string}:${string}`;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        handler$zde000$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$bna000$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        handler$zde001$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): this;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): Special.Item&`${string}:${string}`
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly BY_BLOCK: {[key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.JigsawBlock]: Internal.GameMasterBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WirePostPlateBlock]: Internal.BlockItem, [key: Internal.CanvasRugBlock]: Internal.FuelBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: Internal.SeatItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.HandCrankBlock]: Internal.BlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.MudBrickLatticeBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.SpatialIOPortBlock]: Internal.AEBaseBlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.StorageSacBlock]: Internal.StorageSacBlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BarPanelBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SmallConnectorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.NyliumBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.NubBlock$CopperNubBlock]: Internal.BlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.ControllerRailBlock]: Internal.BlockItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ShutterBlock]: Internal.BlockItem, [key: Internal.CaveVinesBlock]: Internal.ItemNameBlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.BuddingAmethystBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.JunctionRail]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.LinearChassisBlock]: Internal.BlockItem, [key: Internal.PistonExtensionPoleBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SmokeStackBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.BambooStalkBlock]: Internal.BlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.AbyssalineLampBlock]: Internal.BlockItem, [key: Internal.BlackstoneStoveBlock]: Internal.BlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.ZetaPressurePlateBlock]: Internal.ZetaBlockItem, [key: Internal.NixieTubeBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PillarBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.WindBellBlock]: Internal.WindBellItem, [key: Internal.GlassBlock]: Internal.BlockItem, [key: Internal.BarrierBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BundledCableRelayPlateBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.SimpleBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CabinetBlock]: Internal.BlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.ResearchingTableBlock]: Internal.BlockItemBase, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.AmethystBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.PancakeBlock]: Internal.PancakeItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FaucetBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.PrimordialCradleBlock]: Internal.BEWLBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.SculkSensorBlock]: Internal.BlockItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.ZetaWoodenButtonBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BlossomLeavesBlock]: Internal.ZetaBlockItem, [key: Internal.SconceWallBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.BracketBlock]: Internal.BracketBlockItem, [key: Internal.SugarCaneBlock]: Internal.BlockItem, [key: Internal.WildRiceBlock]: Internal.DoubleHighBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.DoublePlantBlock]: Internal.DoubleHighBlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.StickBlock]: Internal.Item, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.TotemBlock]: Internal.BlockItem, [key: Internal.RakedGravelBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SpatialAnchorBlock]: Internal.AEBaseBlockItem, [key: net.mehvahdjukaar.supplementaries.common.block.blocks.FlintBlock]: Internal.BlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaFenceGateBlock]: Internal.ZetaBlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.MechanicalPistonBlock]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.InterfaceBlock]: Internal.AEBaseBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.RedstoneRandomizerBlock]: Internal.ZetaBlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.LumiumBlock]: Internal.BlockItemCoFH, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: com.starfish_studios.another_furniture.block.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.CauldronBlock]: Internal.Items$1, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.ButtonBlock]: Internal.BlockItemCoFH, [key: Internal.BuddingCertusQuartzBlock]: Internal.AEBaseBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaFlammablePillarBlock]: Internal.ZetaBlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.PackageBlock]: Internal.PackageItem, [key: Internal.AbyssalineSlabBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.MimicarnationBlock]: Internal.BlockItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.SchematicannonBlock]: Internal.BlockItem, [key: Internal.CopperPipeBlock]: Internal.ZetaBlockItem, [key: Internal.AEDecorativeBlock]: Internal.AEBaseBlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PumpkinBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.APBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.TatamiMatBlock]: Internal.FuelBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BambooWindChimeBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.PoweredRailBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.ChiseledAbyssalineBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.EncasedFanBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.AbyssalineBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaCeilingHangingSignBlock]: Internal.ZetaHangingSignItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SaltClusterBlock]: Internal.BlockItem, [key: Internal.TntBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TwoInputBitwiseLogicPlateBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.FlaxBlock]: Internal.ItemNameBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.FluidTankBlock]: Internal.FluidTankItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ZetaWoodenButtonBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.LogicFunctionPlateBlock$1]: Internal.BlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.GravelBlock]: Internal.BlockItem, [key: Internal.TomatoVineBlock]: Internal.ModItems$1, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: Internal.SeatItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.TntBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PumpjackHoleBlock]: Internal.BlockItem, [key: Internal.ChainBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PropelplantCaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MushroomColonyBlock]: Internal.MushroomColonyItem, [key: Internal.NetherBrickSmokerBlock]: Internal.BlockItem, [key: Internal.FluidValveBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.BellBlock]: Internal.BlockItem, [key: Internal.BrassDiodeBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.SmartObserverBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FrameBlock]: Internal.TimberFrameItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.CarpetBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.LogicFunctionPlateBlock$1]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GantryShaftBlock]: Internal.BlockItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.AzaleaBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MetalLadderBlock]: Internal.BlockItem, [key: Internal.SmartFluidPipeBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ShepherdsPieBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.PatternProviderBlock]: Internal.AEBaseBlockItem, [key: Internal.ChainGearshiftBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.LogicFunctionPlateBlock$1]: Internal.BlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.BlockGrappleModifier]: Internal.BlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.BuddingCertusQuartzBlock]: Internal.AEBaseBlockItem, [key: Internal.GrowthAcceleratorBlock]: Internal.AEBaseBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.FenceBlock]: Internal.BlockItemCoFH, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.EntityBlockComposter]: Internal.BlockItemAugmentable, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.AbyssalineVerticalSlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.PeculiarBellBlock]: Internal.BlockItem, [key: Internal.DynamoBlock]: Internal.BlockItemAugmentable, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.BigBrickBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.RadialChassisBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CertusQuartzClusterBlock]: Internal.AEBaseBlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.RainbowLampBlock]: Internal.ZetaBlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.WaterWheelBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.HalfTransparentBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TntBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.PortableStorageInterfaceBlock]: Internal.BlockItem, [key: Internal.VariantFurnaceBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.ClockworkBearingBlock]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.GlobeBlock]: Internal.BlockItem, [key: Internal.TCoreBlocks$2]: Internal.BlockItemCoFH, [key: Internal.CopycatWallBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.DrippySlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.WitherWallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ZetaFenceBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.SchematicTableBlock]: Internal.BlockItem, [key: Internal.BasinLidBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CactusBlock]: Internal.BlockItem, [key: Internal.StemBlock]: Internal.ItemNameBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ShutterBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.MangroveLeavesBlock]: Internal.BlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.CorundumClusterBlock]: Internal.ZetaBlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.DispenserBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CraftingMonitorBlock]: Internal.CraftingBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BrushableBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EncasedCogwheelBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.StorageCellBlock]: cofh.thermal.core.common.item.EnergyCellBlockItem, [key: Internal.PhantomNodeBlock]: Internal.AEBaseBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.LinearChassisBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.LogicFunctionPlateBlock$1]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: com.starfish_studios.another_furniture.block.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.StoveBlock]: Internal.BlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.VibrationChamberBlock]: Internal.AEBaseBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.LootCrateOpenerBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PieBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockTrim]: Internal.BlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.ShutterBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.VesselChargerBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.AEDecorativeBlock]: Internal.AEBaseBlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.CakeBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FleshBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.MembraneBlock]: Internal.SimpleBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ChandelierBlock]: Internal.BlockItem, [key: Internal.DecomposerBlock]: Internal.SimpleBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.LocomotiveDockingRail]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SaltBlock]: Internal.BlockItem, [key: Internal.PedestalBlock]: Internal.BlockItem, [key: Internal.ZetaSaplingBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.GlassLikePillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.EncasedCogwheelBlock]: Internal.BlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CogWheelBlock]: Internal.CogwheelBlockItem, [key: Internal.CraftingUnitBlock]: Internal.CraftingBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.AbyssalineBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.BeehiveBlock]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaFlammableBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GantryCarriageBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.BioLabBlock]: Internal.SimpleBlockItem, [key: Internal.OilBarrelBlock]: Internal.MultiBlockContainerBlockItem, [key: Internal.PaintSplotchesBlock]: Internal.AEBaseBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.LatchBlock]: Internal.BlockItem, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BigBrickBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.MembranePaneBlock]: Internal.SimpleBlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlossomLeavesBlock]: Internal.ZetaBlockItem, [key: Internal.SandBlock]: Internal.BlockItemCoFH, [key: Internal.SlabBlock]: Internal.BlockItem, [key: org.violetmoon.quark.content.building.block.RopeBlock]: Internal.RopeBlock$1, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.CraftingUnitBlock]: Internal.CraftingBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CopycatHeavyWeightedPressurePlate]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TaskScreenBlock]: Internal.ScreenBlockItem, [key: com.starfish_studios.another_furniture.block.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.NetheriteTrapdoorBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.FluidPipeBlock]: Internal.BlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.BlossomLeavesBlock]: Internal.ZetaBlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWallHangingSignBlock]: Internal.ZetaHangingSignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.BlockTrim]: Internal.BlockItem, [key: Internal.BeetrootBlock]: Internal.ItemNameBlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.IronRodBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.LeverBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.RedstoneIlluminatorBlock]: Internal.BlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.FlintBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.PlayerWallHeadBlock]: Internal.PlayerHeadItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.DetectorBlock]: Internal.BlockItem, [key: Internal.CopycatSliceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.BigBrickBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.GobletBlock]: Internal.BlockItem, [key: Internal.CageLanternBlock]: Internal.BlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: net.mehvahdjukaar.supplementaries.common.block.blocks.GunpowderBlock]: Internal.Item, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.FullFleshDoorBlock]: Internal.SimpleBlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FarmersDelightCompat$PlanterRichBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.DetectorRailBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.WetSpongeBlock]: Internal.BlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SconceWallBlock]: Internal.StandingAndWallBlockItem, [key: Internal.TaskScreenBlock]: Internal.ScreenBlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.BlossomLeavesBlock]: Internal.ZetaBlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.NubBlock$CopperNubBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FleshLanternBlock]: Internal.SimpleBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.FleshSpikeBlock]: Internal.SimpleBlockItem, [key: Internal.PaperWallBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TCoreBlocks$6]: Internal.BlockItemCoFH, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.LecternBlock]: Internal.BlockItem, [key: Internal.LargeDieselGeneratorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.RainbowLampBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.SnifferEggBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.ConnectedGlassBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.SporeBlossomBlock]: Internal.BlockItem, [key: Internal.EnergyCellBlock]: Internal.EnergyCellBlockItem, [key: Internal.AbyssalineBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ModStairBlock]: Internal.BlockItem, [key: Internal.WebBlock]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.RainbowLampBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.BundledCableBlock]: Internal.WireBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RainbowLampBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaFenceGateBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SandBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.BrassTunnelBlock]: Internal.BeltTunnelItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SconceWallBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FleshChainBlock]: Internal.FleshChainBlockItem, [key: Internal.ShaftBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TurnTableBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.TripWireHookBlock]: Internal.BlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaCeilingHangingSignBlock]: Internal.ZetaHangingSignItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.AbyssalineBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.NubBlock$CopperNubBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.StrippableLogBlock]: Internal.BlockItem, [key: Internal.ZetaSaplingBlock]: Internal.ZetaBlockItem, [key: Internal.AEDecorativeBlock]: Internal.AEBaseBlockItem, [key: Internal.ClockBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.GaugeBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StrawBaleBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.ZetaSaplingBlock]: Internal.ZetaBlockItem, [key: Internal.BeltBlock]: Internal.BeltConnectorItem, [key: Internal.CreativeEnergyBlock]: Internal.BlockItem, [key: Internal.CorundumClusterBlock]: Internal.ZetaBlockItem, [key: Internal.TatamiHalfMatBlock]: Internal.FuelBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.MagmaBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.CableBusBlock]: Internal.AEBaseBlockItem, [key: Internal.AnvilBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.CopycatTrapdoorBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.SconceBlock]: Internal.StandingAndWallBlockItem, [key: Internal.PoweredRailBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GunpowderBlock]: Internal.BlockItemCoFH, [key: Internal.CraftingTableBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.ConductorWhistleFlagBlock]: Internal.ConductorWhistleItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItemCoFH, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FluidHopperBlock]: Internal.BlockItem, [key: Internal.AlternatorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.CookingPotBlock]: Internal.CookingPotItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.OwnablePressurePlateBlock]: Internal.SimpleBlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.RiceRollMedleyBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.MetalButtonBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWoodenButtonBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.KelpBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.DoorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.RollingMillBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.CertusQuartzClusterBlock]: Internal.AEBaseBlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.LanternBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.ZetaPressurePlateBlock]: Internal.ZetaBlockItem, [key: Internal.LogicFunctionPlateBlock$1]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.TntBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlossomLeavesBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TorchflowerCropBlock]: Internal.ItemNameBlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PlacardBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BiomassPelletBlock, [key: Internal.StuffedHoglinBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.ElectricMotorBlock]: Internal.BlockItem, [key: Internal.ShutterBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.MudBlock]: Internal.BlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.AbyssalinePillarBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SturdyStoneBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.SignalumGlassBlock]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.PaperLanternBlock]: Internal.ZetaBlockItem, [key: Internal.AbyssalineVerticalSlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.TinyPotatoBlock]: Internal.TinyPotatoBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.TintedGlassBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.JarBlock]: Internal.JarItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.PumpjackBearingBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RainbowLampBlock]: Internal.ZetaBlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.WeatheringCopperVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CertusQuartzClusterBlock]: Internal.AEBaseBlockItem, [key: Internal.CopycatBeamBlock]: Internal.BlockItem, [key: Internal.EndLampBlock]: Internal.BlockItem, [key: Internal.GrindstoneBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.AbyssalineBlock]: Internal.BlockItem, [key: Internal.RailingBlock]: Internal.BlockItem, [key: Internal.DeployerBlock]: Internal.AssemblyOperatorBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.TrainCarDockingRail]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.ZetaSaplingBlock]: Internal.ZetaBlockItem, [key: Internal.DriveBlock]: Internal.AEBaseBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.GaugeBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.EnderiumGlassBlock]: Internal.BlockItemCoFH, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.LanternBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SpatialPylonBlock]: Internal.AEBaseBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.MechanicalBearingBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.FrameBlock]: Internal.TimberFrameItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.WeatheringCopperVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.TCoreBlocks$5]: Internal.BlockItemCoFH, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TntBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.SmithingTableBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.GoddessStatueBlock]: Internal.BlockItem, [key: Internal.MetalScaffoldingBlock]: Internal.MetalScaffoldingBlockItem, [key: Internal.LootrShulkerBlock]: Internal.LootrShulkerBlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.CommandBlock]: Internal.GameMasterBlockItem, [key: Internal.StageBarrierBlock]: Internal.StageBarrierBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.BoilingWaterCauldronBlock]: Internal.Items$1, [key: Internal.HoglinMountBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SculkBlock]: Internal.BlockItem, [key: Internal.SmokeStackBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.AbyssalineVerticalSlabBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.GoddessStatueBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ChestBlock]: Internal.BlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.AEDecorativeBlock]: Internal.AEBaseBlockItem, [key: Internal.PoweredLatchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemCoFH, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.ChiseledAbyssalineBlock]: Internal.BlockItem, [key: Internal.AbyssalineSlabBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.MechanicalMixerBlock]: Internal.AssemblyOperatorBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BubbleBlock]: Internal.BubbleBlockItem, [key: Internal.CopycatHalfLayerBlock]: Internal.BlockItem, [key: Internal.CorundumClusterBlock]: Internal.ZetaBlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.FurnaceBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SkilletBlock]: Internal.SkilletItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BlockTrim]: Internal.BlockItem, [key: Internal.AEDecorativeBlock]: Internal.AEBaseBlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.CorundumClusterBlock]: Internal.ZetaBlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CreativeMotorBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.LightningRodBlock]: Internal.BlockItem, [key: Internal.JarBoatBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.CopycatVerticalSliceBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.MyaliteCrystalBlock]: Internal.ZetaBlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.MolecularAssemblerBlock]: Internal.AEBaseBlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlidingDoorBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.AEDecorativeBlock]: Internal.AEBaseBlockItem, [key: Internal.BigBrickBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.SoulCompostBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ChiseledBookShelfBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.HoneyGlazedHamBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.HugeMushroomBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.PlayerHeadBlock]: Internal.PlayerHeadItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.BlazeBurnerBlock]: Internal.BlazeBurnerBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SconceBlock]: Internal.StandingAndWallBlockItem, [key: Internal.NetherSproutsBlock]: Internal.BlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ChainDriveBlock]: Internal.BlockItem, [key: Internal.CarvedPumpkinBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.AbyssalineSlabBlock]: Internal.BlockItem, [key: Internal.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.CocoaBlock]: Internal.ItemNameBlockItem, [key: Internal.CopycatStepBlock]: Internal.BlockItem, [key: Internal.ZetaFlammableBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DigitalAdapterBlock]: Internal.DigitalAdapterBlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TurntableBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.TrappedChestBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.BlockTrim]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SeaPickleBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaFlammableBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.CopycatVerticalStepBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FungusBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MushroomBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.BlockTrim]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: appeng.block.storage.ChestBlock]: Internal.AEBaseBlockItem, [key: Internal.BambooMatCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaDoorBlock]: Internal.ZetaDoubleHighBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.AbyssalineBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GirderBlock]: Internal.BlockItem, [key: Internal.SemaphoreBlock]: Internal.SemaphoreItem, [key: Internal.CopycatHalfPanelBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.MillstoneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EncasedShaftBlock]: Internal.BlockItem, [key: Internal.CreativeEnergyCellBlock]: Internal.AEBaseBlockItem, [key: Internal.LoomBlock]: Internal.BlockItem, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CabbageBlock]: Internal.ItemNameBlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.EndermanSkullWallBlock]: Internal.EndermanHeadItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.PointedDripstoneBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.AbyssalineLampBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RedStoneOreBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.CrankBlock]: Internal.AEBaseBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.StonecutterBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SawBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.PieBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.CanisterBlock]: Internal.CanisterBlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.PistonBaseBlock]: Internal.BlockItem, [key: Internal.PistonBaseBlock]: Internal.BlockItem, [key: Internal.MembraneBlock]: Internal.SimpleBlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItemCoFH, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.EncasedCogwheelBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.FrogspawnBlock]: Internal.PlaceOnWaterBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaFlammablePillarBlock]: Internal.ZetaBlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.RichSoilFarmlandBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.DirectionalSlabBlock]: Internal.SimpleBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.VineBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.ZetaLeavesBlock]: Internal.ZetaBlockItem, [key: Internal.LogicFunctionPlateBlock$1]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.BuddingTomatoBlock]: Internal.ModItems$1, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.BasketBlock]: Internal.FuelBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.ZetaFlammablePillarBlock]: Internal.ZetaBlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.AxisSmokeStackBlock]: Internal.BlockItem, [key: Internal.LargeWaterWheelBlock]: Internal.LargeWaterWheelBlockItem, [key: Internal.ChorusFlowerBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.RedStoneWireBlock]: Internal.ItemNameBlockItem, [key: Internal.ChorusVegetationBlock]: Internal.ZetaBlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.ToggleLatchBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.SaltSandBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CampfireBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.SaltBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RedstoneLinkBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.RailingBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.DirectionalSlabBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.ZetaDoorBlock]: Internal.ZetaDoubleHighBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.PloughBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CageLanternBlock]: Internal.BlockItem, [key: Internal.GearshiftBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.ArmBlock]: Internal.ArmItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.BuddingCertusQuartzBlock]: Internal.AEBaseBlockItem, [key: Internal.BundledCablePostBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.PieBlock]: Internal.BlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.SkyChestBlock]: Internal.AEBaseBlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.MatrixFrameBlock]: Internal.AEBaseBlockItem, [key: Internal.NetheriteDoorBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.ZetaFlammableBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.RailingBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.HopperBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.NoCollisionCustomTrackBlock]: Internal.TrackBlockItem, [key: Internal.HornedStatueBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.RainbowLampBlock]: Internal.ZetaBlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.SlidingDoorBlock]: Internal.BlockItem, [key: Internal.ShutterBlock]: Internal.BlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeightedPressurePlateBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.IronGateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.OnionBlock]: Internal.ItemNameBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CageBlock]: Internal.CageItem, [key: Internal.HourGlassBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.BuddingCertusQuartzBlock]: Internal.AEBaseBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TCoreBlocks$1]: Internal.BlockItemCoFH, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.ConduitBlock]: Internal.BlockItem, [key: Internal.SpreadingMembraneBlock]: Internal.SimpleBlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.NoCollisionCustomTrackBlock]: Internal.TrackBlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItemCoFH, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.LadderBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.SimpleBlockItem, [key: Internal.DynamoBlock]: Internal.BlockItemAugmentable, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WildFlaxBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItemCoFH, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.ShutterBlock]: Internal.BlockItem, [key: Internal.TrackSwitchBlockImpl]: Internal.TrackSwitchBlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.HauntedBellBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.FleshBlock]: Internal.SimpleBlockItem, [key: Internal.AEDecorativeBlock]: Internal.AEBaseBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DisenchanterBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CopycatByteBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.HarvesterBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.DropperBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.WaterlilyBlock]: Internal.PlaceOnWaterBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.DynamoBlock]: Internal.BlockItemAugmentable, [key: Internal.IronGateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BrassFunnelBlock]: Internal.FunnelItem, [key: Internal.DoublePlantBlock]: Internal.DoubleHighBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.HugeMushroomBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.AEDecorativeBlock]: Internal.AEBaseBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.GrassBlock]: Internal.BlockItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.OilburnerSmokeStackBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.BacktankBlock]: Internal.BacktankItem$BacktankBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.SwitchRail]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.TCoreBlocks$4]: Internal.BlockItemCoFH, [key: Internal.BlackboardBlock]: Internal.BlackboardItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.SequencedGearshiftBlock]: Internal.BlockItem, [key: Internal.MatrixEnchantingTableBlock]: Internal.ZetaBlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.CraftingUnitBlock]: Internal.CraftingBlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem, [key: Internal.FungusColonyBlock]: Internal.FungusColonyItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.TorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.SnowLayerBlock]: Internal.BlockItem, [key: Internal.AbyssalinePillarBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: com.starfish_studios.another_furniture.block.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.StrippableLogBlock]: Internal.BlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.CubeGeneratorBlock]: Internal.AEBaseBlockItem, [key: Internal.QuartzGlassBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.MembranePaneBlock]: Internal.SimpleBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CogWheelBlock]: Internal.CogwheelBlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.GlassBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.CrossoverRailBlock]: Internal.BlockItemCoFH, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BioForgeBlock]: Internal.SimpleBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.EncasedCogwheelBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EnergyGeneratorBlock]: Internal.AEBaseBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ItemShelfBlock]: Internal.WoodBasedBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.GoddessStatueBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.DirectionalSlabBlock]: Internal.SimpleBlockItem, [key: Internal.SunstoneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ClutchBlock]: Internal.BlockItem, [key: Internal.FodderBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.MelonBlock]: Internal.BlockItem, [key: Internal.DynamoBlock]: Internal.BlockItemAugmentable, [key: Internal.AndesiteFunnelBlock]: Internal.FunnelItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.TntBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.LadderBlock]: Internal.SimpleBlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.ZetaStandingSignBlock]: Internal.ZetaSignItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.TeeJunctionRail]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.ZetaSaplingBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItemCoFH, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BeehiveBlock]: Internal.BlockItem, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.AbyssalineVerticalSlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.MangrovePropaguleBlock]: Internal.BlockItem, [key: Internal.EnergyCellBlock]: Internal.EnergyCellBlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.CopycatStonePressurePlate]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.OrganicCompostBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SmallSignBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WitherRoseBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.TntBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ClipboardBlock]: Internal.ClipboardBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FleshVeinsBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.SandyShrubBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.SwitchRail]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.NetherrackBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaPressurePlateBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.RedAlloyWireBlock]: Internal.WireBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.TLocBlocks$5]: Internal.BlockItemCoFH, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.MembranePaneBlock]: Internal.SimpleBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.WallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.DynamoBlock]: Internal.BlockItemAugmentable, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.TrophyBlock]: Internal.BlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.RedstoneRelayBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.GlowLichenGrowthBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaFlammablePillarBlock]: Internal.ZetaBlockItem, [key: Internal.BlockCompDrawers]: Internal.ItemDrawers, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.TorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.LogicFunctionPlateBlock$1]: Internal.BlockItem, [key: Internal.ObserverBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.CopycatWoodenButtonBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.AshLayerBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.StatueBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.NyliumBlock]: Internal.BlockItem, [key: Internal.DaylightDetectorBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.SlidingDoorBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.RainbowLampBlock]: Internal.ZetaBlockItem, [key: Internal.PaperWallBlock]: Internal.ZetaBlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.HugeGlowShroomBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BambooSpikesBlock]: Internal.BambooSpikesTippedItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WitherSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MechanicalPressBlock]: Internal.AssemblyOperatorBlockItem, [key: Internal.FlintBlock]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.MembranePaneBlock]: Internal.SimpleBlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BigDripleafBlock]: Internal.Items$1, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.TrackObserverBlock]: Internal.TrackTargetingBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.FleshFenceGateBlock]: Internal.SimpleBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RollerBlock]: Internal.RollerBlockItem, [key: Internal.WallBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.DirtPathBlock]: Internal.BlockItem, [key: Internal.CondenserBlock]: Internal.AEBaseBlockItem, [key: Internal.PortableEnergyInterfaceBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStandingSignBlock]: Internal.ZetaSignItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CarrotBlock]: Internal.ItemNameBlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.RainbowLampBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.SingleInputBitwiseLogicPlateBlock]: Internal.BlockItem, [key: Internal.ZetaFlammableBlock]: Internal.ZetaBlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.HugeDieselEngineBlock]: Internal.BlockItem, [key: Internal.TotemWingBlock]: Internal.BlockItem, [key: Internal.FleshBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.IOPortBlock]: Internal.AEBaseBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.BrewingStandBlock]: Internal.BlockItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WeepingVinesBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.FarmBlock]: Internal.BlockItem, [key: Internal.SaltBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: Internal.SeatItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FlippedBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.PortableStorageInterfaceBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.TwoInputBitwiseLogicPlateBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.PaperLanternBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.PoweredRailBlock]: Internal.BlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.WhistleBlock]: Internal.BlockItem, [key: Internal.BrazierBlock]: Internal.BlockItem, [key: Internal.QuantumLinkChamberBlock]: Internal.AEBaseBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.EjectorBlock]: Internal.EjectorItem, [key: Internal.RailingBlock]: Internal.BlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.MyaliteBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaPaneBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.CommandBlock]: Internal.GameMasterBlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.SoulFurnaceBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.QuartzLampBlock]: Internal.BlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.MushroomColonyBlock]: Internal.MushroomColonyItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.LavaCauldronBlock]: Internal.Items$1, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: Internal.SeatItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.RoseQuartzLampBlock]: Internal.BlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CustomWallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.PulseGateBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.AnvilBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ComparatorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.DepotBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.LargeConnectorBlock]: Internal.BlockItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.BlastFurnaceBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.TotemBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.CopycatLayerBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.AEDecorativeBlock]: Internal.AEBaseBlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.RedstoneTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.SolderingTableBlock]: Internal.BlockItem, [key: Internal.CrateBlock]: Internal.ZetaBlockItem, [key: Internal.TntBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ChorusPlantBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.RoastChickenBlock]: Internal.BlockItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.ObsidianPressurePlateBlock]: Internal.ZetaBlockItem, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ModStairBlock]: Internal.BlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.WindVaneBlock]: Internal.BlockItem, [key: Internal.SteamEngineBlock]: Internal.BlockItem, [key: Internal.TongueBlock]: Internal.SimpleBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.BacktankBlock]: Internal.BacktankItem$BacktankBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.MonorailTrackBlock]: Internal.TrackBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.PitcherCropBlock]: Internal.ItemNameBlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.FletchingTableBlock]: Internal.BlockItem, [key: Internal.HugeGlowShroomBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.FleshDoorBlock]: Internal.SimpleBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.TargetBlock]: Internal.BlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TrackCouplerBlockImpl]: Internal.TrackCouplerBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.StemBlock]: Internal.ItemNameBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaFenceGateBlock]: Internal.ZetaBlockItem, [key: Internal.MetalScaffoldingBlock]: Internal.MetalScaffoldingBlockItem, [key: Internal.PoweredRailBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.ZetaFlammableBlock]: Internal.ZetaBlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.StationBlock]: Internal.TrackTargetingBlockItem, [key: Internal.TLocBlocks$2]: Internal.BlockItemCoFH, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.CertusQuartzClusterBlock]: Internal.AEBaseBlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.ThresholdSwitchBlock]: Internal.BlockItem, [key: Internal.VesselDetectorBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.CopycatPanelBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.TrackSwitchBlockImpl]: Internal.TrackSwitchBlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WirelessAccessPointBlock]: Internal.AEBaseBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FleshkinChestBlock]: Internal.FleshkinChestBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ElevatorContactBlock]: Internal.BlockItem, [key: Internal.ZetaCeilingHangingSignBlock]: Internal.ZetaHangingSignItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TotemBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.ZetaFlammableBlock]: Internal.ZetaBlockItem, [key: Internal.DoorBlock]: Internal.BlockItemCoFH, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SaltClusterBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.RedstoneLampBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.RichSoulSoilBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: com.starfish_studios.another_furniture.block.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.CraftingUnitBlock]: Internal.AEBaseBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ChuteBlock]: Internal.ChuteItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.BlockTrim]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PlateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockSlave]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.ChorusVegetationBlock]: Internal.ZetaBlockItem, [key: Internal.NubBlock$CopperNubBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.SaltBlock]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.PaperWallBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.EncasedPipeBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ChandelierBlock]: Internal.BlockItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.SoapBlock]: Internal.BlockItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.ExperienceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EnchantmentTableBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.GlassLikePillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: com.starfish_studios.another_furniture.block.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.CampfireBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.MovingMagnetizedBlock]: Internal.ZetaBlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.DrippyVerticalSlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItemCoFH, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.CuckooClockBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.HexidecrubrometerBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.DrillBlock]: Internal.BlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.SconceWallBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WirePostBlock]: Internal.BlockItem, [key: Internal.FeedingTroughBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: org.violetmoon.quark.content.building.block.ThatchBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CloudBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.VentBlockImpl]: Internal.BlockItem, [key: Internal.BlackstoneFurnaceBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.MyceliumBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.PiglinWallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WallBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.WeightedPressurePlateBlock]: Internal.BlockItem, [key: Internal.CACakeBlock]: Internal.BlockItem, [key: Internal.MangroveRootsBlock]: Internal.BlockItem, [key: Internal.ModStairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.TugGuideRailBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.AbyssalineBlock]: Internal.BlockItem, [key: Internal.SandBlock]: Internal.BlockItemCoFH, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.LogicFunctionPlateBlock$1]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.ShutterBlock]: Internal.BlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.TugDockBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.GravisandBlock]: Internal.ZetaBlockItem, [key: Internal.ItemGenBlock]: Internal.AEBaseBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.ComposterBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CartAssemblerBlock]: Internal.CartAssemblerBlockItem, [key: Internal.SaplingBlock]: Internal.BlockItemCoFH, [key: Internal.RailBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ServiceBellBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.JukeboxBlock]: Internal.BlockItem, [key: Internal.SeagrassBlock]: Internal.BlockItem, [key: Internal.NubBlock$CopperNubBlock]: Internal.BlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.TallGrassBlock]: Internal.BlockItem, [key: Internal.SmallDripleafBlock]: Internal.DoubleHighBlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.WallLanternBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.SculkCatalystBlock]: Internal.BlockItem, [key: Internal.UrnBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ItemDrainBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CorundumClusterBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.CrossoverRailBlock]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.CogBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.ZetaFlammableBlock]: Internal.ZetaBlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SpeakerBlock]: Internal.WoodBasedBlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.AxisSmokeStackBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.CageLanternBlock]: Internal.BlockItem, [key: Internal.BlockTrim]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: Internal.SeatItem, [key: Internal.CornerGuideRailBlock]: Internal.BlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.WeatheringCopperVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.FungusBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.RockyDirtBlock]: Internal.BlockItem, [key: Internal.ElevatorPulleyBlock]: Internal.BlockItem, [key: Internal.GlassLikePillarBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.BarbedWireBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.RepeaterBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CutVineBlock]: Internal.ZetaBlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.PrinterBlock]: Internal.AssemblyOperatorBlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.RootedDirtBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.LogicFunctionPlateBlock$1]: Internal.BlockItem, [key: Internal.SingleInputBitwiseLogicPlateBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.GlowShroomRingBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CraftingUnitBlock]: Internal.CraftingBlockItem, [key: Internal.RailingBlock]: Internal.BlockItem, [key: Internal.DirectionalSlabBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.CartographyTableBlock]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.GlowLichenBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaTrapdoorBlock]: Internal.ZetaBlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaFenceBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.TatamiBlock]: Internal.FuelBlockItem, [key: Internal.CellWorkbenchBlock]: Internal.AEBaseBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: com.starfish_studios.another_furniture.block.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EncasedShaftBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RespawnAnchorBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DoormatBlock]: Internal.WoodBasedBlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.FleshLanternBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SculkShriekerBlock]: Internal.BlockItem, [key: Internal.TaskScreenBlock]: Internal.ScreenBlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.TLocBlocks$3]: Internal.BlockItemCoFH, [key: Internal.StandingSignBlock]: Internal.SignItemCoFH, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.LumiumGlassBlock]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RapidHopperBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.ZetaSaplingBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: com.starfish_studios.another_furniture.block.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RelayerBlock]: Internal.BlockItem, [key: Internal.ItemVaultBlock]: Internal.ItemVaultItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.NoticeBoardBlock]: Internal.WoodBasedBlockItem, [key: Internal.SafeBlock]: Internal.SafeItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.NetherWartBlock]: Internal.ItemNameBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.AzaleaBlock]: Internal.BlockItem, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: Internal.SeatItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.ZetaTrapdoorBlock]: Internal.ZetaBlockItem, [key: Internal.BlockTrim]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.SlidingDoorBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TallGrassBlock]: Internal.BlockItem, [key: Internal.RailBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PotatoBlock]: Internal.ItemNameBlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.InscriberBlock]: Internal.AEBaseBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.EndRodBlock]: Internal.BlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CopycatBlockBlock]: Internal.BlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.DirectionalFacingBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EntityBlockCoFH]: Internal.BlockItemAugmentable, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ZetaStandingSignBlock]: Internal.ZetaSignItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.LogicFunctionPlateBlock$1]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.SimpleBlockItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.EndermanSkullBlock]: Internal.EndermanHeadItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.AnalogLeverBlock]: Internal.BlockItem, [key: Internal.SnowyDirtBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: Internal.SeatItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.RailingBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.MetalScaffoldingBlock]: Internal.MetalScaffoldingBlockItem, [key: Internal.MyaliteBlock]: Internal.ZetaBlockItem, [key: Internal.WindmillBearingBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaFenceGateBlock]: Internal.ZetaBlockItem, [key: Internal.RootsBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.IrisDoorBlock]: Internal.SimpleBlockItem, [key: Internal.BookPileHorizontalBlock]: Internal.BookItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.CrafterBlock]: Internal.ZetaBlockItem, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.StructureBlock]: Internal.GameMasterBlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ShutterBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.SkyChestBlock]: Internal.AEBaseBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: Internal.GoldDoorBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.NubBlock$CopperNubBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.GrateBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemCoFH, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TwoInputBitwiseLogicPlateBlock]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.SugarBlock]: Internal.SugarCubeItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ZetaWallSignBlock]: Internal.ZetaSignItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.LatticeBlock]: Internal.BlockItem, [key: Internal.LightDetectorBlock]: Internal.AEBaseBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CACakeBlock]: Internal.BlockItem, [key: Internal.RailingBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.EntityBlockActive]: Internal.BlockItemAugmentable, [key: Internal.HoneyBlock]: Internal.BlockItem, [key: Internal.ZetaFlammableBlock]: Internal.ZetaBlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.PoweredBlock]: Internal.BlockItem, [key: Internal.StructureVoidBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.BigBrickBlock]: Internal.BlockItem, [key: Internal.BlockController]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: net.mehvahdjukaar.supplementaries.common.block.blocks.CrankBlock]: Internal.BlockItem, [key: Internal.CopycatSlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: org.violetmoon.quark.content.automation.block.ChuteBlock]: Internal.ZetaBlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.RiceBaleBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.LanternBlock]: Internal.BlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RootsBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.FlowerPotBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.CardboardBoxBlock]: Internal.CardboardBoxItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ControllerBlock]: Internal.AEBaseBlockItem, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.RedStoneOreBlock]: Internal.BlockItem, [key: Internal.CommandBlock]: Internal.GameMasterBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.BigBrickBlock]: Internal.BlockItem, [key: Internal.BigDripleafStemBlock]: Internal.Items$1, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.PresentBlock]: Internal.PresentItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ModStairBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.ShutterBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.FlaxBaleBlock]: Internal.BlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.RichSoilBlock]: Internal.BlockItem, [key: Internal.MechanicalCrafterBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SpeedControllerBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ModularAccumulatorBlock]: Internal.ModularAccumulatorBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.SimpleBlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.CopycatWoodenPressurePlate]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SconceBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: architectspalette.content.blocks.PipeBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EnderiumBlock]: Internal.BlockItemCoFH, [key: Internal.MyaliteBlock]: Internal.ZetaBlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.ControlsBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.LockBlock]: Internal.BlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ScaffoldingBlock]: Internal.ScaffoldingBlockItem, [key: net.mehvahdjukaar.supplementaries.common.block.blocks.RopeBlock]: Internal.RopeItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RiceBlock]: Internal.RiceItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BigBrickBlock]: Internal.BlockItem, [key: Internal.CorundumClusterBlock]: Internal.ZetaBlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.TntBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.ZetaFlammableBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.ShutterBlock]: Internal.BlockItem, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.MysteriousCubeBlock]: Internal.AEBaseBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.TCoreBlocks$3]: Internal.BlockItemCoFH, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.TaterInAJarBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CorundumClusterBlock]: Internal.ZetaBlockItem, [key: Internal.RailingBlock]: Internal.BlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SignalBlock]: Internal.TrackTargetingBlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.OrificeBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.TinyTNTBlock]: Internal.AEBaseBlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: Internal.SeatItem, [key: Internal.TntBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: lilypuree.decorative_blocks.blocks.ChainBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.RopeBlock]: vectorwing.farmersdelight.common.item.RopeItem, [key: Internal.CorundumClusterBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.SweetBerryBushBlock]: Internal.ItemNameBlockItem, [key: Internal.SpringLauncherBlock]: Internal.BlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.MossBlock]: Internal.BlockItem, [key: Internal.DisplayLinkBlock]: Internal.DisplayLinkBlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.BarrelBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: Internal.SeatItem, [key: Internal.FlywheelBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.SpawnerBlock]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SkyStoneTankBlock]: Internal.AEBaseBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BrazierBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.QuantumRingBlock]: Internal.AEBaseBlockItem, [key: Internal.SaltClusterBlock]: Internal.BlockItem, [key: Internal.AmethystWindChimeBlock]: Internal.BlockItem, [key: Internal.CopycatStairsBlock]: Internal.BlockItem, [key: Internal.WirePostPlateBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.ZetaWallSignBlock]: Internal.ZetaSignItem, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.SconceLeverBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.BreadBlock]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CustomTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SpongeBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.ToolboxBlock]: Internal.UncontainableBlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.LightBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.VialHolderBlock]: Internal.SimpleBlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.CrystalDisplayBlock]: Internal.BlockItem, [key: Internal.PumpjackCrankBlock]: Internal.BlockItem, [key: Internal.HugeMushroomBlock]: Internal.BlockItem, [key: Internal.BeltTunnelBlock]: Internal.BeltTunnelItem, [key: Internal.CuckooClockBlock]: Internal.BlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.TLocBlocks$4]: Internal.BlockItemCoFH, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.BookPileBlock]: Internal.EnchantedBookItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BrassDiodeBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SculkVeinBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.FlagBlock]: Internal.FlagItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.SunstoneBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.ChainBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.PalisadeBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.LootrInventoryBlock]: Internal.LootrChestBlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BrushableBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.EnderChestBlock]: Internal.BlockItem, [key: Internal.GlowShroomBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.SmokerBlock]: Internal.BlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.GlobeBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.TableBlock]: Internal.BlockItem, [key: Internal.CopycatLightWeightedPressurePlate]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.GoldTrapdoorBlock]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.TntBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.CreativeCrateBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.BloomBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.MyaliteBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.RotatedPillarBlock]: Internal.BlockItemCoFH, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.MetalLadderBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.BlackstoneBlastFurnaceBlock]: Internal.BlockItem, [key: Internal.FleshBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.HollowLogBlock]: Internal.ZetaBlockItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.PumpjackHeadBlock]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DigesterBlock]: Internal.SimpleBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DecoratedPotBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BeaconBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.FleshBlock]: Internal.ObfuscatedTooltipBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CopycatStoneButtonBlock]: Internal.BlockItem, [key: Internal.MetalLadderBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TLocBlocks$1]: Internal.BlockItemCoFH, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.MushroomBlock]: Internal.BlockItem, [key: Internal.CeilingBannerBlock]: Internal.BannerItem, [key: Internal.MyalitePillarBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.NubBlock$CopperNubBlock]: Internal.BlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.RubberBlock]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.CherryLeavesBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaWallHangingSignBlock]: Internal.ZetaHangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.PinkPetalsBlock]: Internal.BlockItem, [key: Internal.SackBlock]: Internal.SackItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.MembranePaneBlock]: Internal.SimpleBlockItem, [key: Internal.EquipableCarvedPumpkinBlock]: Internal.BlockItem, [key: Internal.LootrChestBlock]: Internal.LootrChestBlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.PowderSnowBlock]: Internal.SolidBucketItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DetectorRailBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.HardenedGlassBlock]: Internal.BlockItemCoFH, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.MembraneBlock]: Internal.SimpleBlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.DieselGeneratorBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SmokeStackBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MonsterBoxBlock]: Internal.ZetaBlockItem, [key: Internal.CraftingUnitBlock]: Internal.CraftingBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.NotSoMysteriousCubeBlock]: Internal.AEBaseBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.HosePulleyBlock]: Internal.BlockItem, [key: Internal.TrainTrapdoorBlock]: Internal.BlockItem, [key: Internal.DirtyGlassBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ChairBlock]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.HayBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.CopycatFenceBlock]: Internal.BlockItem, [key: Internal.EntityBlockActive4Way]: Internal.BlockItemAugmentable, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ContraptionControlsBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.FeatherBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.MawHopperBlock]: Internal.SimpleBlockItem, [key: Internal.RainbowLampBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.AbyssalineBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.AEDecorativeBlock]: Internal.AEBaseBlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.NoteBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.RedstoneWallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.AnvilBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.AbyssalineSlabBlock]: Internal.BlockItem, [key: Internal.NozzleBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.GoddessStatueBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.QuartzFixtureBlock]: Internal.AEBaseBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.IronWindChimeBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.BambooMatBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.FeastBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItemCoFH, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.CrushingWheelBlock]: Internal.BlockItem, [key: Internal.PulleyBlock]: Internal.WoodBasedBlockItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.CropBlock]: Internal.ItemNameBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaWallSignBlock]: Internal.ZetaSignItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.VariantLadderBlock]: Internal.ZetaBlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RailingBlock]: Internal.BlockItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItemCoFH, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RailingBlock]: Internal.BlockItem, [key: Internal.BargeAssemblerBlock]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.TeeJunctionRail]: Internal.BlockItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.LootrTrappedChestBlock]: Internal.LootrChestBlockItem, [key: Internal.CraftingUnitBlock]: Internal.CraftingBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.BracketBlock]: Internal.BracketBlockItem, [key: Internal.BenchBlock]: Internal.BlockItem, [key: Internal.FlintPillarBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.SconceBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.EndPortalFrameBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BeamBlock]: Internal.BlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BellowsBlock]: Internal.WoodBasedBlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.FlapDisplayBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CryingObsidianBlock]: Internal.BlockItem, [key: Internal.FleshLanternBlock]: Internal.SimpleBlockItem, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: Internal.SandBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.SafetyNetBlock]: Internal.FuelBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.SoulSandBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: com.starfish_studios.another_furniture.block.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ZetaGlassBlock]: Internal.ZetaBlockItem, [key: Internal.VariantBookshelfBlock]: Internal.ZetaBlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FleshBlock]: Internal.SimpleBlockItem, [key: Internal.MetalButtonBlock]: Internal.ZetaBlockItem, [key: Internal.HangingFlowerPotBlock]: Internal.BlockItem, [key: Internal.CasingBlock]: Internal.BlockItem, [key: Internal.InfestedRotatedPillarBlock]: Internal.BlockItem, [key: Internal.PumpBlock]: Internal.BlockItem, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.CandleHolderBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaDoorBlock]: Internal.ZetaDoubleHighBlockItem, [key: Internal.BigBrickBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlimeBlock]: Internal.BlockItem, [key: Internal.TeslaCoilBlock]: Internal.AssemblyOperatorBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.FleshFenceBlock]: Internal.SimpleBlockItem, [key: Internal.GearboxBlock]: Internal.BlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SofaBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.DieselSmokeStackBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CarvedBambooWindChimeBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VerticalSlabBlock]: Internal.BlockItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.ChunkLoaderBlock]: Internal.AEBaseBlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: com.simibubi.create.content.contraptions.pulley.PulleyBlock]: Internal.BlockItem, [key: Internal.WildCropBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.LootrVariantChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.LootrBarrelBlock]: Internal.BlockItem, [key: Internal.RedstoneContactBlock]: Internal.RedstoneContactItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.OreBlockCoFH]: Internal.BlockItemCoFH, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaTrapdoorBlock]: Internal.ZetaBlockItem, [key: Internal.CorundumClusterBlock]: Internal.ZetaBlockItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: Internal.ZetaFenceBlock]: Internal.ZetaBlockItem, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: Internal.SeatItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.WoodPostBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.HedgeBlock]: Internal.ZetaBlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DynamoBlock]: Internal.BlockItemAugmentable, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.ConnectedGlassPaneBlock]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.SignalumBlock]: Internal.BlockItemCoFH, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.ZetaWallHangingSignBlock]: Internal.ZetaHangingSignItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ShutterBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.MechanicalPistonBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.TurtleEggBlock]: Internal.BlockItem, [key: Internal.TwistingVinesBlock]: Internal.BlockItem, [key: Internal.CopycatFenceGateBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ZetaInheritedPaneBlock]: Internal.ZetaBlockItem, [key: Internal.FluidTankBlock]: Internal.FluidTankItem, [key: Internal.StandingCanvasSignBlock]: Internal.SignItem, [key: lilypuree.decorative_blocks.blocks.SeatBlock]: Internal.SeatItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.BlazeRodBlock]: Internal.Item, [key: Internal.DrawerBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.DeliveryTableBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.LeafCarpetBlock]: Internal.ZetaBlockItem, [key: Internal.StickerBlock]: Internal.BlockItem, [key: Internal.ChargerBlock]: Internal.AEBaseBlockItem, [key: Internal.ValveHandleBlock]: Internal.BlockItem, [key: Internal.WindowBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.MembraneBlock]: Internal.SimpleBlockItem, [key: Internal.SeatBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.MagnetBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.DoublePlantBlock]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.BasinBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FungusColonyBlock]: Internal.FungusColonyItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.ChimneyBlock]: Internal.BlockItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.CopycatBoardBlock]: Internal.BlockItem, [key: Internal.WideGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.SlidingDoorBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.QuestBarrierBlock]: Internal.QuestBarrierBlockItem, [key: Internal.TripWireBlock]: Internal.ItemNameBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SmartChuteBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.LootrVariantTrappedChestBlock]: Internal.LootrVariantChestBlock$Item, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.NubBlock$CopperNubBlock]: Internal.BlockItem, [key: Internal.NarrowGaugeTrackBlock]: Internal.TrackBlockItem, [key: Internal.EnergyAcceptorBlock]: Internal.AEBaseBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.WallCanvasSignBlock]: Internal.SignItem, [key: Internal.RubberBlock]: Internal.BlockItemCoFH, [key: Internal.Block]: Internal.BlockItem, [key: Internal.IceBlock]: Internal.BlockItem, [key: Internal.SmallLightConnectorBlock]: Internal.BlockItem, [key: Internal.CuttingBoardBlock]: Internal.FuelBlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.TwoInputBitwiseLogicPlateBlock]: Internal.BlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.BargeDockBlock]: Internal.BlockItem, [key: Internal.CopperWindChimeBlock]: Internal.BlockItem, [key: Internal.VariantChestBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TrainTrapdoorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SailBlock]: Internal.BlankSailBlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.FrameBraceBlock]: Internal.TimberFrameItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.CalibratedSculkSensorBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BlockStandardDrawers]: Internal.ItemDrawers, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.GlassPaneBlock]: Internal.BlockItem, [key: Internal.TallStoolBlock]: Internal.BlockItem, [key: com.starfish_studios.another_furniture.block.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.LampBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.WallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SaltClusterBlock]: Internal.BlockItem, [key: Internal.ConnectedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemCoFH, [key: Internal.StoolBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.PieBlock]: Internal.ItemNameBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ZetaWallBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: com.starfish_studios.another_furniture.block.FlowerBoxBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.DeadBushBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SpoutBlock]: Internal.AssemblyOperatorBlockItem, [key: Internal.StorageCellBlock]: Internal.FluidCellBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.EnderWatcherBlock]: Internal.ZetaBlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.CorundumBlock]: Internal.ZetaBlockItem, [key: Internal.ShelfBlock]: Internal.BlockItem, [key: Internal.LogicFunctionPlateBlock$1]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.TrappedPresentBlock]: Internal.PresentItem, [key: org.violetmoon.quark.content.building.block.StoolBlock]: Internal.ZetaBlockItem, [key: Internal.QuarkVerticalSlabBlock]: Internal.ZetaBlockItem, [key: Internal.ZetaPillarBlock]: Internal.ZetaBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SupportBlock]: Internal.SupportItem, [key: Internal.VariantTrappedChestBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CabinetBlock]: Internal.FuelBlockItem, [key: Internal.DragonEggBlock]: Internal.BlockItem, [key: Internal.ZetaFlammableBlock]: Internal.ZetaBlockItem, [key: Internal.DrippyBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.ZetaBlock]: Internal.ZetaBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TrackBlock]: Internal.TrackBlockItem, [key: Internal.ZetaSlabBlock]: Internal.ZetaBlockItem, [key: Internal.DynamoBlock]: Internal.BlockItemAugmentable, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PowderSnowCauldronBlock]: Internal.Items$1, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.TotemBlock]: Internal.BlockItem, [key: Internal.ZetaStairsBlock]: Internal.ZetaBlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.TaskScreenBlock]: Internal.ScreenBlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.HangingRootsBlock]: Internal.BlockItem, [key: Internal.CurtainBlock]: Internal.BlockItem, [key: Internal.NubBlock]: Internal.BlockItem, [key: Internal.ColoredCableBlock]: Internal.WireBlockItem, [key: Internal.CeilingHangingCanvasSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem};
        static readonly EAT_DURATION: 32;
        static readonly BASE_ATTACK_DAMAGE_UUID: Internal.UUID;
        static readonly MAX_STACK_SIZE: 64;
        static readonly MAX_BAR_WIDTH: 13;
        descriptionId: string;
        craftingRemainingItem: Internal.Item;
    }
    type Item_ = Item | Special.Item;
    class RedstoneLinkBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        setSignal(arg0: number): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        requestModelDataUpdate(): void;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        getReceivedSignal(): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        transmit(arg0: number): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getModelData(): Internal.ModelData;
        onLoad(): void;
        serializeNBT(): Internal.Tag;
        getSignal(): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        set signal(arg0: number)
        get receivedSignal(): number
        get modelData(): Internal.ModelData
        get signal(): number
    }
    type RedstoneLinkBlockEntity_ = RedstoneLinkBlockEntity;
    abstract class BitwiseLogicPlateBlock extends Internal.PlateBlock implements Internal.EntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        abstract canConnectToAdjacentCable(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.BlockState_, arg5: Internal.Direction_, arg6: Internal.Direction_): boolean;
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
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
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
        static readonly TICK_DELAY: 1;
        static readonly NO_POWER_SUPPLIER: Internal.ChanneledPowerSupplier;
        static readonly DOUBLE_PLATE_SHAPES_BY_DIRECTION: Internal.VoxelShape[];
    }
    type BitwiseLogicPlateBlock_ = BitwiseLogicPlateBlock;
    interface ITrackedContentsItemHandler extends Internal.IItemHandlerSimpleInserter {
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        abstract setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        isEmpty(): boolean;
        abstract unregisterStackKeyListeners(): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        abstract getSlots(): number;
        abstract extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        kjs$self(): Internal.IItemHandler;
        abstract registerTrackingListeners(arg0: Internal.Consumer_<net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey>, arg1: Internal.Consumer_<net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey>, arg2: Internal.Runnable_, arg3: Internal.Runnable_): void;
        abstract getStackInSlot(arg0: number): Internal.ItemStack;
        abstract hasEmptySlots(): boolean;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        getWidth(): number;
        abstract getSlotLimit(arg0: number): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        abstract getTrackedStacks(): Internal.Set<net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey>;
        abstract getInternalSlotLimit(arg0: number): number;
        abstract insertItem(arg0: Internal.ItemStack_, arg1: boolean): Internal.ItemStack;
        insertItem(i: number, itemStack: Internal.ItemStack_, b: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        abstract isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get height(): number
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get trackedStacks(): Internal.Set<net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey>
        get mutable(): boolean
    }
    type ITrackedContentsItemHandler_ = ITrackedContentsItemHandler;
    interface ItemSupplier {
        abstract getItem(): Internal.ItemStack;
        get item(): Internal.ItemStack
        (): Internal.ItemStack_;
    }
    type ItemSupplier_ = ItemSupplier;
    class ConfusionEffect extends Internal.MobEffect {
        constructor()
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type ConfusionEffect_ = ConfusionEffect;
}
