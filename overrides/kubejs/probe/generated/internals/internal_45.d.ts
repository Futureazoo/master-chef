/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    interface LongSpliterator extends Internal.Spliterator$OfLong {
        forEachRemaining(arg0: any): void;
        getComparator(): Internal.Comparator<any>;
        hasCharacteristics(arg0: number): boolean;
        abstract tryAdvance(arg0: Internal.LongConsumer_): boolean;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        skip(arg0: number): number;
        abstract estimateSize(): number;
        trySplit(): Internal.Spliterator<any>;
        tryAdvance(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): boolean;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        getExactSizeIfKnown(): number;
        tryAdvance(arg0: any): boolean;
        abstract characteristics(): number;
        /**
         * @deprecated
        */
        tryAdvance(arg0: Internal.Consumer_<number>): boolean;
        forEachRemaining(arg0: Internal.LongConsumer_): void;
        get comparator(): Internal.Comparator<any>
        get exactSizeIfKnown(): number
    }
    type LongSpliterator_ = LongSpliterator;
    class FileToIdConverter {
        constructor(arg0: string, arg1: string)
        static json(arg0: string): Internal.FileToIdConverter;
        idToFile(arg0: ResourceLocation_): ResourceLocation;
        fileToId(arg0: ResourceLocation_): ResourceLocation;
        listMatchingResources(arg0: Internal.ResourceManager_): Internal.Map<ResourceLocation, Internal.Resource>;
        listMatchingResourceStacks(arg0: Internal.ResourceManager_): Internal.Map<ResourceLocation, Internal.List<Internal.Resource>>;
    }
    type FileToIdConverter_ = FileToIdConverter;
    class LongArrayTag extends Internal.CollectionTag<Internal.LongTag> {
        constructor(arg0: Internal.LongSet_)
        constructor(arg0: number[])
        constructor(arg0: Internal.List_<number>)
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        remove(arg0: number): any;
        spliterator(): Internal.Spliterator<Internal.LongTag>;
        forEach(arg0: Internal.Consumer_<Internal.LongTag>): void;
        set(arg0: number, arg1: Internal.Tag_): Internal.Tag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        set(arg0: number, arg1: Internal.LongTag_): Internal.LongTag;
        add(arg0: number, arg1: Internal.LongTag_): void;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        removeIf(arg0: Internal.Predicate_<Internal.LongTag>): boolean;
        getAsLongArray(): number[];
        getType(): Internal.TagType<Internal.LongArrayTag>;
        parallelStream(): Internal.Stream<Internal.LongTag>;
        stream(): Internal.Stream<Internal.LongTag>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        abstract toArray<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        get(arg0: number): any;
        sort(arg0: Internal.Comparator_<Internal.LongTag>): void;
        getAsString(): string;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<Internal.LongTag>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        get asLongArray(): number[]
        get type(): Internal.TagType<Internal.LongArrayTag>
        get asString(): string
        static readonly TYPE: Internal.TagType<Internal.LongArrayTag>;
    }
    type LongArrayTag_ = LongArrayTag;
    class TerrainBrushes extends Internal.Enum<Internal.TerrainBrushes> {
        static valueOf(arg0: string): Internal.TerrainBrushes;
        static values(): Internal.TerrainBrushes[];
        get(): Internal.Brush;
        static readonly Cuboid: Internal.TerrainBrushes;
        static readonly Surface: Internal.TerrainBrushes;
        static readonly Cluster: Internal.TerrainBrushes;
        static readonly Sphere: Internal.TerrainBrushes;
        static readonly Cylinder: Internal.TerrainBrushes;
    }
    type TerrainBrushes_ = "cuboid" | "cluster" | TerrainBrushes | "cylinder" | "surface" | "sphere";
    abstract class Either <L, R> implements Internal.App<Internal.Either$Mu<R>, L> {
        abstract right(): Internal.Optional<R>;
        abstract ifRight(arg0: Internal.Consumer_<R>): this;
        abstract mapBoth<C, D>(arg0: Internal.Function_<L, C>, arg1: Internal.Function_<R, D>): Internal.Either<C, D>;
        flatMap<L2>(arg0: Internal.Function_<L, Internal.Either<L2, R>>): Internal.Either<L2, R>;
        swap(): Internal.Either<R, L>;
        abstract ifLeft(arg0: Internal.Consumer_<L>): this;
        abstract map<T>(arg0: Internal.Function_<L, T>, arg1: Internal.Function_<R, T>): T;
        mapRight<T>(arg0: Internal.Function_<R, T>): Internal.Either<L, T>;
        static right<L, R>(arg0: R): Internal.Either<L, R>;
        static unbox<L, R>(arg0: Internal.App_<Internal.Either$Mu<R>, L>): Internal.Either<L, R>;
        mapLeft<T>(arg0: Internal.Function_<L, T>): Internal.Either<T, R>;
        orThrow(): L;
        abstract left(): Internal.Optional<L>;
        static left<L, R>(arg0: L): Internal.Either<L, R>;
    }
    type Either_<L, R> = Either<L, R>;
    class FlatLevelGeneratorSettings {
        constructor(arg0: Internal.Optional_<Internal.HolderSet<Internal.StructureSet>>, arg1: Internal.Holder_<Internal.Biome>, arg2: Internal.List_<Internal.Holder<Internal.PlacedFeature>>)
        adjustGenerationSettings(arg0: Internal.Holder_<Internal.Biome>): Internal.BiomeGenerationSettings;
        getLayersInfo(): Internal.List<Internal.FlatLayerInfo>;
        setAddLakes(): void;
        structureOverrides(): Internal.Optional<Internal.HolderSet<Internal.StructureSet>>;
        static createLakesList(arg0: Internal.HolderGetter_<Internal.PlacedFeature>): Internal.List<Internal.Holder<Internal.PlacedFeature>>;
        setDecoration(): void;
        static getDefault(arg0: Internal.HolderGetter_<Internal.Biome>, arg1: Internal.HolderGetter_<Internal.StructureSet>, arg2: Internal.HolderGetter_<Internal.PlacedFeature>): Internal.FlatLevelGeneratorSettings;
        withBiomeAndLayers(arg0: Internal.List_<Internal.FlatLayerInfo>, arg1: Internal.Optional_<Internal.HolderSet<Internal.StructureSet>>, arg2: Internal.Holder_<Internal.Biome>): this;
        updateLayers(): void;
        getBiome(): Internal.Holder<Internal.Biome>;
        getLayers(): Internal.List<Internal.BlockState>;
        static getDefaultBiome(arg0: Internal.HolderGetter_<Internal.Biome>): Internal.Holder<Internal.Biome>;
        get layersInfo(): Internal.List<Internal.FlatLayerInfo>
        get biome(): Internal.Holder<Internal.Biome>
        get layers(): Internal.List<Internal.BlockState>
        static readonly CODEC: Internal.Codec<Internal.FlatLevelGeneratorSettings>;
    }
    type FlatLevelGeneratorSettings_ = FlatLevelGeneratorSettings;
    class CabbageBlock extends Internal.CropBlock {
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
    }
    type CabbageBlock_ = CabbageBlock;
    interface Struct$StructValidation {
        abstract validate(arg0: number): void;
        (arg0: number): void;
    }
    type Struct$StructValidation_ = Struct$StructValidation;
    class IntegerArgumentInfo$Template implements Internal.ArgumentTypeInfo$Template<Internal.IntegerArgumentType> {
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        type(): Internal.ArgumentTypeInfo<Internal.IntegerArgumentType, any>;
    }
    type IntegerArgumentInfo$Template_ = IntegerArgumentInfo$Template;
    class TelemetryPropertyMap {
        get<T>(arg0: Internal.TelemetryProperty_<T>): T;
        static createCodec(arg0: Internal.List_<Internal.TelemetryProperty<any>>): Internal.Codec<Internal.TelemetryPropertyMap>;
        propertySet(): Internal.Set<Internal.TelemetryProperty<any>>;
        static builder(): Internal.TelemetryPropertyMap$Builder;
    }
    type TelemetryPropertyMap_ = TelemetryPropertyMap;
    class ServerboundAcceptTeleportationPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
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
    type ServerboundAcceptTeleportationPacket_ = ServerboundAcceptTeleportationPacket;
    class AdvancementEvent$AdvancementEarnEvent extends Internal.AdvancementEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.Advancement_)
        getEntity(): Internal.LivingEntity;
        get entity(): Internal.LivingEntity
    }
    type AdvancementEvent$AdvancementEarnEvent_ = AdvancementEvent$AdvancementEarnEvent;
    interface BundlerInfo$Bundler {
        abstract addPacket(arg0: Internal.Packet_<any>): Internal.Packet<any>;
        (arg0: Internal.Packet<any>): Internal.Packet_<any>;
    }
    type BundlerInfo$Bundler_ = BundlerInfo$Bundler;
    class StructureProcessorList {
        constructor(arg0: Internal.List_<Internal.StructureProcessor>)
        list(): Internal.List<Internal.StructureProcessor>;
    }
    type StructureProcessorList_ = Special.ProcessorList | StructureProcessorList;
    class OptionalColorProperty extends Internal.Enum<Internal.OptionalColorProperty> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        toCushion(): Internal.ItemStack;
        static values(): Internal.OptionalColorProperty[];
        getSerializedName(): string;
        static fromCushion(cushion: Internal.Item_): Internal.OptionalColorProperty;
        static fromSheet(sheet: Internal.Item_): Internal.OptionalColorProperty;
        toSheet(): Internal.ItemStack;
        static valueOf(name: string): Internal.OptionalColorProperty;
        get serializedName(): string
        static readonly GREEN: Internal.OptionalColorProperty;
        static readonly GRAY: Internal.OptionalColorProperty;
        static readonly BLACK: Internal.OptionalColorProperty;
        static readonly LIGHT_BLUE: Internal.OptionalColorProperty;
        static readonly MAGENTA: Internal.OptionalColorProperty;
        static readonly NONE: Internal.OptionalColorProperty;
        static readonly LIGHT_GRAY: Internal.OptionalColorProperty;
        static readonly RED: Internal.OptionalColorProperty;
        static readonly LIME: Internal.OptionalColorProperty;
        static readonly CYAN: Internal.OptionalColorProperty;
        static readonly ORANGE: Internal.OptionalColorProperty;
        static readonly BLUE: Internal.OptionalColorProperty;
        static readonly BROWN: Internal.OptionalColorProperty;
        static readonly PINK: Internal.OptionalColorProperty;
        static readonly PURPLE: Internal.OptionalColorProperty;
        static readonly WHITE: Internal.OptionalColorProperty;
        static readonly YELLOW: Internal.OptionalColorProperty;
    }
    type OptionalColorProperty_ = "light_blue" | "magenta" | OptionalColorProperty | "lime" | "brown" | "red" | "purple" | "pink" | "black" | "green" | "cyan" | "none" | "light_gray" | "yellow" | "white" | "gray" | "blue" | "orange";
    class SmithingTemplateItemBuilder extends Internal.ItemBuilder {
        constructor(i: ResourceLocation_)
        /**
         * Adds the specified texture location to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
        */
        addIngredientsSlotIcon(location: ResourceLocation_): this;
        /**
         * Adds a shovel to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
        */
        shovelIcon(): this;
        createObject(): any;
        /**
         * Adds leggings to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
        */
        leggingsIcon(): this;
        /**
         * Adds a quartz to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
        */
        quartzIcon(): this;
        /**
         * Sets the description text that shows in the item tooltip to describe what it can be applied to.
         * Using 'Armor' or 'Diamond Equipment' will use the vanilla language keys so it is translated into other languages automatically.
         * THIS IS PURELY VISUAL
         * 
         * If you wish to apply non standard formatting (like change the colour) set the `ingredientsText` field.
        */
        appliesTo(text: string): this;
        /**
         * Adds an emerald to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
        */
        emeraldIcon(): this;
        /**
         * Adds an amethyst shard to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
        */
        shardIcon(): this;
        /**
         * Adds all armor and basic tool icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in
        */
        equipmentIcons(): this;
        /**
         * Adds a lapis lazuli to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
        */
        lapisIcon(): this;
        /**
         * Adds boots to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
        */
        bootsIcon(): this;
        /**
         * Sets the description text that shows when you hover over the ingredient slot when this item is put in smithing table as a template.
         * Using 'Add ingot or crystal' or 'Add Netherite Ingot' will use the vanilla language keys so it is translated into other languages automatically.
         * 
         * If you wish to apply non standard formatting (like change the colour) set the `ingredientSlotDescriptionText` field.
        */
        ingredientsSlotDescription(text: string): this;
        /**
         * Adds a dust, diamond, emerald, quartz, lapis lazuli and amethyst shard icons to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
        */
        crystalIcons(): this;
        /**
         * Adds all armor icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in
        */
        armorIcons(): this;
        /**
         * Adds a hoe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
        */
        hoeIcon(): this;
        /**
         * Adds an ingot, dust, diamond, emerald, quartz, lapis lazuli and amethyst shard icons to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
        */
        ingotAndCrystalIcons(): this;
        /**
         * Adds a chestplate to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
        */
        chestplateIcon(): this;
        /**
         * Adds an ingot to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
        */
        ingotIcon(): this;
        /**
         * Adds the specified texture location to the list of base slot icons that the smithing table cycles through when this smithing template is put in.
        */
        addAppliesToSlotIcon(location: ResourceLocation_): this;
        /**
         * Adds a sword to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
        */
        swordIcon(): this;
        /**
         * Adds a axe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
        */
        axeIcon(): this;
        /**
         * Adds all basic tool icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in
        */
        toolIcons(): this;
        /**
         * Adds a helmet to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
        */
        helmetIcon(): this;
        /**
         * Sets the name for this smithing template.
         * Note that the normal display name for all smithing templates is the same and cannot be changed, this instead sets the name in the tooltip (see vanilla smithing templates for what this looks like).
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(arg0: Internal.Component_): Internal.BuilderBase<any>;
        /**
         * Adds a dust to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
        */
        dustIcon(): this;
        /**
         * Adds a pickaxe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
        */
        pickaxeIcon(): this;
        /**
         * Sets the description text that shows when you hover over the base item slot when this item is put in smithing table as a template.
         * Using 'Add a piece of armor' or 'Add diamond armor, weapon, or tool' will use the vanilla language keys so it is translated into other languages automatically.
         * 
         * If you wish to apply non standard formatting (like change the colour) set the `appliesToSlotDescriptionText` field.
        */
        appliesToSlotDescription(text: string): this;
        /**
         * Sets the description text that shows in the item tooltip to describe what ingredients can be added.
         * Using 'Ingots & Crystals' or 'Netherite Ingot' will use the vanilla language keys so it is translated into other languages automatically.
         * THIS IS PURELY VISUAL
         * 
         * If you wish to apply non standard formatting (like change the colour) set the `ingredientsText` field.
        */
        ingredients(text: string): this;
        /**
         * Adds a diamond to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
        */
        diamondIcon(): this;
        ingredientsText: Internal.Component;
        ingredientSlotDescriptionText: Internal.Component;
        readonly ingredientsSlotEmptyIcons: Internal.List<ResourceLocation>;
        appliesToSlotDescriptionText: Internal.Component;
        readonly appliesToEmptyIcons: Internal.List<ResourceLocation>;
        appliesToText: Internal.Component;
    }
    type SmithingTemplateItemBuilder_ = SmithingTemplateItemBuilder;
    interface HolderOwner <T> {
        canSerializeIn(arg0: Internal.HolderOwner_<T>): boolean;
    }
    type HolderOwner_<T> = HolderOwner<T>;
    class AirItem extends Internal.Item {
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
    type AirItem_ = AirItem;
    abstract class StateHolder <O, S> {
        hasProperty<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): boolean;
        getProperties(): Internal.Collection<Internal.Property<any>>;
        cycle<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): S;
        getValues(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>;
        populateNeighbours(arg0: Internal.Map_<Internal.Map<Internal.Property<any>, Internal.Comparable<any>>, S>): void;
        setValue<T extends Internal.Comparable<T>, V extends T>(arg0: Internal.Property_<T>, arg1: V): S;
        trySetValue<T extends Internal.Comparable<T>, V extends T>(arg0: Internal.Property_<T>, arg1: V): S;
        getOptionalValue<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): Internal.Optional<T>;
        getValue<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): T;
        get properties(): Internal.Collection<Internal.Property<any>>
        get values(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>
        static readonly PROPERTIES_TAG: "Properties";
        static readonly NAME_TAG: "Name";
    }
    type StateHolder_<O, S> = StateHolder<O, S>;
    class BlockInWorld {
        constructor(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: boolean)
        static hasState(arg0: Internal.Predicate_<Internal.BlockState>): Internal.Predicate<Internal.BlockInWorld>;
        getLevel(): Internal.LevelReader;
        getPos(): BlockPos;
        getEntity(): Internal.BlockEntity;
        getState(): Internal.BlockState;
        get level(): Internal.LevelReader
        get pos(): BlockPos
        get entity(): Internal.BlockEntity
        get state(): Internal.BlockState
    }
    type BlockInWorld_ = BlockInWorld;
    class GoldenHookItem extends Internal.WearableArtifactItem {
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
        static getExperienceBonus(originalXP: number, entity: Internal.LivingEntity_, attacker: Internal.Player_): number;
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
    type GoldenHookItem_ = GoldenHookItem;
    class SailBlock extends Internal.WrenchableDirectionalBlock {
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
        getColor(): Internal.DyeColor;
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
        applyDye(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Vec3d_, arg4: Internal.DyeColor_): void;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
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
        static frame(arg0: Internal.BlockBehaviour$Properties_): Internal.SailBlock;
        static withCanvas(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.DyeColor_): Internal.SailBlock;
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
        isFrame(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        get color(): Internal.DyeColor
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get frame(): boolean
    }
    type SailBlock_ = SailBlock;
    class ShapedKubeJSRecipe$SerializerKJS implements Internal.RecipeSerializer<Internal.ShapedKubeJSRecipe> {
        constructor()
        fromNetwork(id: ResourceLocation_, buf: Internal.FriendlyByteBuf_): Internal.ShapedKubeJSRecipe;
        fromJson(id: ResourceLocation_, json: Internal.JsonObject_): Internal.ShapedKubeJSRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        toNetwork(buf: Internal.FriendlyByteBuf_, r: Internal.ShapedKubeJSRecipe_): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ShapedKubeJSRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type ShapedKubeJSRecipe$SerializerKJS_ = ShapedKubeJSRecipe$SerializerKJS;
    class BannerPatternItem extends Internal.Item {
        constructor(arg0: Internal.TagKey_<Internal.BannerPattern>, arg1: Internal.Item$Properties_)
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
        getDisplayName(): Internal.MutableComponent;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getBannerPattern(): Internal.TagKey<Internal.BannerPattern>;
        getTooltipImage(stack: Internal.ItemStack_): Internal.Optional<any>;
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
        get displayName(): Internal.MutableComponent
        get bannerPattern(): Internal.TagKey<Internal.BannerPattern>
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type BannerPatternItem_ = BannerPatternItem;
    class StringReader implements Internal.ImmutableStringReader {
        constructor(arg0: Internal.StringReader_)
        constructor(arg0: string)
        getTotalLength(): number;
        peek(): string;
        skipWhitespace(): void;
        setCursor(arg0: number): void;
        static isAllowedInUnquotedString(arg0: string): boolean;
        getRemainingLength(): number;
        readDouble(): number;
        canRead(arg0: number): boolean;
        readFloat(): number;
        getRead(): string;
        static isQuotedStringStart(arg0: string): boolean;
        peek(arg0: number): string;
        getString(): string;
        readStringUntil(arg0: string): string;
        expect(arg0: string): void;
        getCursor(): number;
        readLong(): number;
        readQuotedString(): string;
        readInt(): number;
        static isAllowedNumber(arg0: string): boolean;
        readBoolean(): boolean;
        readString(): string;
        canRead(): boolean;
        readUnquotedString(): string;
        skip(): void;
        getRemaining(): string;
        read(): string;
        get totalLength(): number
        set cursor(arg0: number)
        get remainingLength(): number
        get read(): string
        get string(): string
        get cursor(): number
        get remaining(): string
    }
    type StringReader_ = StringReader;
    interface IntComparator extends Internal.Comparator<number> {
        thenComparing(arg0: Internal.Comparator_<number>): Internal.Comparator<number>;
        comparing<T, U extends Internal.Comparable<any>>(arg0: Internal.Function_<T, U>): Internal.Comparator<T>;
        reverseOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        /**
         * @deprecated
        */
        compare(arg0: number, arg1: number): number;
        abstract compare(arg0: number, arg1: number): number;
        naturalOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        thenComparing(arg0: Internal.IntComparator_): this;
        thenComparingInt(arg0: Internal.ToIntFunction_<number>): Internal.Comparator<number>;
        comparingInt<T>(arg0: Internal.ToIntFunction_<T>): Internal.Comparator<T>;
        thenComparingLong(arg0: Internal.ToLongFunction_<number>): Internal.Comparator<number>;
        nullsFirst<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        comparingLong<T>(arg0: Internal.ToLongFunction_<T>): Internal.Comparator<T>;
        thenComparingDouble(arg0: Internal.ToDoubleFunction_<number>): Internal.Comparator<number>;
        comparingDouble<T>(arg0: Internal.ToDoubleFunction_<T>): Internal.Comparator<T>;
        nullsLast<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        /**
         * @deprecated
        */
        compare(arg0: any, arg1: any): number;
        thenComparing<U>(arg0: Internal.Function_<number, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<number>;
        reversed(): this;
        abstract equals(arg0: any): boolean;
        comparing<T, U>(arg0: Internal.Function_<T, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<T>;
        thenComparing<U extends Internal.Comparable<any>>(arg0: Internal.Function_<number, U>): Internal.Comparator<number>;
    }
    type IntComparator_ = IntComparator;
    class DirectBeltInputBehaviour extends Internal.BlockEntityBehaviour {
        constructor(arg0: Internal.SmartBlockEntity_)
        allowingBeltFunnelsWhen(arg0: Internal.Supplier_<boolean>): this;
        handleInsertion(arg0: Internal.TransportedItemStack_, arg1: Internal.Direction_, arg2: boolean): Internal.ItemStack;
        considerOccupiedWhen(arg0: Internal.DirectBeltInputBehaviour$OccupiedPredicate_): this;
        canInsertFromSide(arg0: Internal.Direction_): boolean;
        onlyInsertWhen(arg0: Internal.DirectBeltInputBehaviour$AvailabilityPredicate_): this;
        isOccupied(arg0: Internal.Direction_): boolean;
        allowingBeltFunnels(): this;
        tryExportingToBeltFunnel(arg0: Internal.ItemStack_, arg1: Internal.Direction_, arg2: boolean): Internal.ItemStack;
        canSupportBeltFunnels(): boolean;
        setInsertionHandler(arg0: Internal.DirectBeltInputBehaviour$InsertionCallback_): this;
        handleInsertion(arg0: Internal.ItemStack_, arg1: Internal.Direction_, arg2: boolean): Internal.ItemStack;
        set insertionHandler(arg0: Internal.DirectBeltInputBehaviour$InsertionCallback_)
        static readonly TYPE: Internal.BehaviourType<Internal.DirectBeltInputBehaviour>;
    }
    type DirectBeltInputBehaviour_ = DirectBeltInputBehaviour;
    class BlazeEnchanterBlock$HeatLevel extends Internal.Enum<Internal.BlazeEnchanterBlock$HeatLevel> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.BlazeEnchanterBlock$HeatLevel;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static byIndex(arg0: number): Internal.BlazeEnchanterBlock$HeatLevel;
        isAtLeast(arg0: Internal.BlazeEnchanterBlock$HeatLevel_): boolean;
        getSerializedName(): string;
        nextActiveLevel(): this;
        static values(): Internal.BlazeEnchanterBlock$HeatLevel[];
        get serializedName(): string
        static readonly SMOULDERING: Internal.BlazeEnchanterBlock$HeatLevel;
        static readonly SEETHING: Internal.BlazeEnchanterBlock$HeatLevel;
        static readonly KINDLED: Internal.BlazeEnchanterBlock$HeatLevel;
    }
    type BlazeEnchanterBlock$HeatLevel_ = "smouldering" | "kindled" | BlazeEnchanterBlock$HeatLevel | "seething";
    /**
     * Invoked when an entity attempts to trample farmland.
    */
    class FarmlandTrampledEventJS extends Internal.EntityEventJS {
        constructor(l: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, d: number, e: Internal.Entity_)
        /**
         * The distance of the entity from the block.
        */
        getDistance(): number;
        /**
         * The farmland block.
        */
        getBlock(): Internal.BlockContainerJS;
        /**
         * The distance of the entity from the block.
        */
        get distance(): number
        /**
         * The farmland block.
        */
        get block(): Internal.BlockContainerJS
    }
    type FarmlandTrampledEventJS_ = FarmlandTrampledEventJS;
    interface WorldData {
        abstract setCustomBossEvents(arg0: Internal.CompoundTag_): void;
        abstract getLevelSettings(): Internal.LevelSettings;
        abstract setDataConfiguration(arg0: Internal.WorldDataConfiguration_): void;
        abstract endDragonFightData(): Internal.EndDragonFight$Data;
        abstract getLevelName(): string;
        abstract getKnownServerBrands(): Internal.Set<string>;
        abstract getGameRules(): Internal.GameRules;
        abstract isFlatWorld(): boolean;
        abstract isHardcore(): boolean;
        abstract worldGenSettingsLifecycle(): Internal.Lifecycle;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        abstract getLoadedPlayerTag(): Internal.CompoundTag;
        abstract worldGenOptions(): Internal.WorldOptions;
        abstract getAllowCommands(): boolean;
        getStorageVersionName(arg0: number): string;
        abstract setModdedInfo(arg0: string, arg1: boolean): void;
        abstract getDifficulty(): Internal.Difficulty;
        enabledFeatures(): Internal.FeatureFlagSet;
        abstract isDifficultyLocked(): boolean;
        abstract getDataConfiguration(): Internal.WorldDataConfiguration;
        abstract wasModded(): boolean;
        abstract setDifficulty(arg0: Internal.Difficulty_): void;
        abstract createTag(arg0: Internal.RegistryAccess_, arg1: Internal.CompoundTag_): Internal.CompoundTag;
        abstract getCustomBossEvents(): Internal.CompoundTag;
        abstract isDebugWorld(): boolean;
        abstract setDifficultyLocked(arg0: boolean): void;
        abstract overworldData(): Internal.ServerLevelData;
        abstract getRemovedFeatureFlags(): Internal.Set<string>;
        abstract setGameType(arg0: Internal.GameType_): void;
        abstract getGameType(): Internal.GameType;
        abstract getVersion(): number;
        abstract setEndDragonFightData(arg0: Internal.EndDragonFight$Data_): void;
        set customBossEvents(arg0: Internal.CompoundTag_)
        get levelSettings(): Internal.LevelSettings
        set dataConfiguration(arg0: Internal.WorldDataConfiguration_)
        get levelName(): string
        get knownServerBrands(): Internal.Set<string>
        get gameRules(): Internal.GameRules
        get flatWorld(): boolean
        get hardcore(): boolean
        get loadedPlayerTag(): Internal.CompoundTag
        get allowCommands(): boolean
        get difficulty(): Internal.Difficulty
        get difficultyLocked(): boolean
        get dataConfiguration(): Internal.WorldDataConfiguration
        set difficulty(arg0: Internal.Difficulty_)
        get customBossEvents(): Internal.CompoundTag
        get debugWorld(): boolean
        set difficultyLocked(arg0: boolean)
        get removedFeatureFlags(): Internal.Set<string>
        set gameType(arg0: Internal.GameType_)
        get gameType(): Internal.GameType
        get version(): number
        set endDragonFightData(arg0: Internal.EndDragonFight$Data_)
        readonly MCREGION_VERSION_ID: 19132;
        readonly ANVIL_VERSION_ID: 19133;
    }
    type WorldData_ = WorldData;
    class SplashRenderer {
        constructor(arg0: string)
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: Internal.Font_, arg3: number): void;
        static readonly HALLOWEEN: Internal.SplashRenderer;
        static readonly NEW_YEAR: Internal.SplashRenderer;
        static readonly CHRISTMAS: Internal.SplashRenderer;
    }
    type SplashRenderer_ = SplashRenderer;
    class Pig extends Internal.Animal implements Internal.ItemSteerable, Internal.Saddleable {
        constructor(arg0: Internal.EntityType_<Internal.Pig>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        boost(): boolean;
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
        getSaddleSoundEvent(): Internal.SoundEvent;
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
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): this;
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
        isSaddled(): boolean;
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
        isSaddleable(): boolean;
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
        equipSaddle(arg0: Internal.SoundSource_): void;
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
        get saddleSoundEvent(): Internal.SoundEvent
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
        get saddled(): boolean
        set totalMovementSpeedMultiplier(speed: number)
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
        static FOOD_ITEMS: Internal.Ingredient;
    }
    type Pig_ = Pig;
    abstract class ContainerScreenEvent$Render extends Internal.ContainerScreenEvent {
        constructor()
        getGuiGraphics(): Internal.GuiGraphics;
        getMouseY(): number;
        getMouseX(): number;
        get guiGraphics(): Internal.GuiGraphics
        get mouseY(): number
        get mouseX(): number
    }
    type ContainerScreenEvent$Render_ = ContainerScreenEvent$Render;
    interface ObjectSpliterator <K> extends Internal.Spliterator<K> {
        getComparator(): Internal.Comparator<K>;
        trySplit(): Internal.Spliterator<any>;
        getExactSizeIfKnown(): number;
        abstract tryAdvance(arg0: Internal.Consumer_<K>): boolean;
        hasCharacteristics(arg0: number): boolean;
        skip(arg0: number): number;
        forEachRemaining(arg0: Internal.Consumer_<K>): void;
        abstract characteristics(): number;
        abstract estimateSize(): number;
        get comparator(): Internal.Comparator<K>
        get exactSizeIfKnown(): number
    }
    type ObjectSpliterator_<K> = ObjectSpliterator<K>;
    abstract class TimeZone implements Internal.Cloneable, Internal.Serializable {
        constructor()
        clone(): any;
        getDisplayName(arg0: boolean, arg1: number): string;
        static getDefault(): Internal.TimeZone;
        setID(arg0: string): void;
        getDisplayName(arg0: Internal.Locale_): string;
        static getTimeZone(arg0: Internal.ZoneId_): Internal.TimeZone;
        getDisplayName(arg0: boolean, arg1: number, arg2: Internal.Locale_): string;
        static getAvailableIDs(arg0: number): string[];
        getID(): string;
        abstract inDaylightTime(arg0: Internal.Date_): boolean;
        abstract useDaylightTime(): boolean;
        getOffset(arg0: number): number;
        abstract getRawOffset(): number;
        toZoneId(): Internal.ZoneId;
        hasSameRules(arg0: Internal.TimeZone_): boolean;
        abstract getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        getDSTSavings(): number;
        abstract setRawOffset(arg0: number): void;
        getDisplayName(): string;
        static getAvailableIDs(): string[];
        observesDaylightTime(): boolean;
        static setDefault(arg0: Internal.TimeZone_): void;
        static getTimeZone(arg0: string): Internal.TimeZone;
        get "default"(): Internal.TimeZone
        set ID(arg0: string)
        get ID(): string
        get rawOffset(): number
        get DSTSavings(): number
        set rawOffset(arg0: number)
        get displayName(): string
        get availableIDs(): string[]
        set "default"(arg0: Internal.TimeZone_)
        static readonly LONG: 1;
        static readonly SHORT: 0;
    }
    type TimeZone_ = TimeZone;
    class BeltPart extends Internal.Enum<Internal.BeltPart> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.BeltPart[];
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.BeltPart;
        get serializedName(): string
        static readonly MIDDLE: Internal.BeltPart;
        static readonly START: Internal.BeltPart;
        static readonly END: Internal.BeltPart;
        static readonly PULLEY: Internal.BeltPart;
    }
    type BeltPart_ = "start" | "middle" | "end" | BeltPart | "pulley";
    interface Collection <E> extends Internal.Iterable<E> {
        abstract add(arg0: E): boolean;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        abstract toArray(): any[];
        abstract iterator(): Internal.Iterator<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract hashCode(): number;
        abstract size(): number;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        spliterator(): Internal.Spliterator<E>;
        abstract equals(arg0: any): boolean;
        abstract contains(arg0: any): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        get empty(): boolean
    }
    type Collection_<E> = Collection<E>;
    class EntityRenderersEvent$AddLayers extends Internal.EntityRenderersEvent {
        constructor()
        constructor(arg0: Internal.Map_<Internal.EntityType<any>, Internal.EntityRenderer<any>>, arg1: Internal.Map_<string, Internal.EntityRenderer<Internal.Player>>, arg2: Internal.EntityRendererProvider$Context_)
        getRenderer<T extends Internal.LivingEntity, R extends Internal.LivingEntityRenderer<T, Internal.EntityModel<T>>>(arg0: Internal.EntityType_<T>): R;
        getContext(): Internal.EntityRendererProvider$Context;
        getSkin<R extends Internal.LivingEntityRenderer<Internal.Player, Internal.EntityModel<Internal.Player>>>(arg0: string): R;
        getEntityModels(): Internal.EntityModelSet;
        getSkins(): Internal.Set<string>;
        get context(): Internal.EntityRendererProvider$Context
        get entityModels(): Internal.EntityModelSet
        get skins(): Internal.Set<string>
    }
    type EntityRenderersEvent$AddLayers_ = EntityRenderersEvent$AddLayers;
    interface LazyComponentKJS extends Internal.Supplier<Internal.Component> {
        abstract get(): Internal.Component;
        (): Internal.Component_;
    }
    type LazyComponentKJS_ = LazyComponentKJS;
    class ServerboundSetCommandBlockPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: BlockPos_, arg1: string, arg2: Internal.CommandBlockEntity$Mode_, arg3: boolean, arg4: boolean, arg5: boolean)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getCommand(): string;
        isTrackOutput(): boolean;
        getPos(): BlockPos;
        isConditional(): boolean;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getMode(): Internal.CommandBlockEntity$Mode;
        isAutomatic(): boolean;
        isSkippable(): boolean;
        get command(): string
        get trackOutput(): boolean
        get pos(): BlockPos
        get conditional(): boolean
        get mode(): Internal.CommandBlockEntity$Mode
        get automatic(): boolean
        get skippable(): boolean
    }
    type ServerboundSetCommandBlockPacket_ = ServerboundSetCommandBlockPacket;
    class MessageSignature extends Internal.Record {
        constructor(arg0: number[])
        bytes(): number[];
        asByteBuffer(): Internal.ByteBuffer;
        pack(arg0: Internal.MessageSignatureCache_): Internal.MessageSignature$Packed;
        static read(arg0: Internal.FriendlyByteBuf_): Internal.MessageSignature;
        static write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.MessageSignature_): void;
        verify(arg0: Internal.SignatureValidator_, arg1: Internal.SignatureUpdater_): boolean;
        static readonly BYTES: 256;
        static readonly CODEC: Internal.Codec<Internal.MessageSignature>;
    }
    type MessageSignature_ = MessageSignature;
    interface Long2DoubleFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.LongToDoubleFunction {
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2DoubleFunction;
        andThenDouble(arg0: Internal.Double2DoubleFunction_): this;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        getOrDefault(arg0: number, arg1: number): number;
        andThenInt(arg0: Internal.Double2IntFunction_): Internal.Long2IntFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenFloat(arg0: Internal.Double2FloatFunction_): Internal.Long2FloatFunction;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2DoubleFunction;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2DoubleFunction;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2DoubleFunction<T>;
        abstract get(arg0: number): number;
        remove(arg0: number): number;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: Internal.Double2ByteFunction_): Internal.Long2ByteFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        composeLong(arg0: Internal.Long2LongFunction_): this;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenReference<T>(arg0: Internal.Double2ReferenceFunction_<T>): Internal.Long2ReferenceFunction<T>;
        andThenShort(arg0: Internal.Double2ShortFunction_): Internal.Long2ShortFunction;
        put(arg0: number, arg1: number): number;
        andThenLong(arg0: Internal.Double2LongFunction_): Internal.Long2LongFunction;
        containsKey(arg0: number): boolean;
        applyAsDouble(arg0: number): number;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2DoubleFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        defaultReturnValue(): number;
        andThenObject<T>(arg0: Internal.Double2ObjectFunction_<T>): Internal.Long2ObjectFunction<T>;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2DoubleFunction;
        size(): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        andThenChar(arg0: Internal.Double2CharFunction_): Internal.Long2CharFunction;
        clear(): void;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2DoubleFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        apply(arg0: number): number;
        identity<T>(): Internal.Function<T, T>;
        (arg0: number): number;
    }
    type Long2DoubleFunction_ = Long2DoubleFunction;
    interface PoolArenaMetric extends Internal.SizeClassesMetric {
        abstract smallSubpages(): Internal.List<Internal.PoolSubpageMetric>;
        abstract pageIdx2size(arg0: number): number;
        abstract sizeIdx2sizeCompute(arg0: number): number;
        abstract numDeallocations(): number;
        abstract numThreadCaches(): number;
        abstract numNormalDeallocations(): number;
        abstract numHugeAllocations(): number;
        abstract normalizeSize(arg0: number): number;
        abstract numSmallAllocations(): number;
        abstract size2SizeIdx(arg0: number): number;
        abstract numActiveAllocations(): number;
        abstract pages2pageIdxFloor(arg0: number): number;
        abstract numActiveNormalAllocations(): number;
        abstract numActiveBytes(): number;
        abstract numSmallDeallocations(): number;
        /**
         * @deprecated
        */
        abstract tinySubpages(): Internal.List<Internal.PoolSubpageMetric>;
        abstract numNormalAllocations(): number;
        abstract numChunkLists(): number;
        abstract numSmallSubpages(): number;
        /**
         * @deprecated
        */
        abstract numTinyAllocations(): number;
        abstract pages2pageIdx(arg0: number): number;
        abstract numActiveHugeAllocations(): number;
        /**
         * @deprecated
        */
        abstract numTinyDeallocations(): number;
        /**
         * @deprecated
        */
        abstract numActiveTinyAllocations(): number;
        abstract numHugeDeallocations(): number;
        /**
         * @deprecated
        */
        abstract numTinySubpages(): number;
        abstract chunkLists(): Internal.List<Internal.PoolChunkListMetric>;
        abstract pageIdx2sizeCompute(arg0: number): number;
        abstract sizeIdx2size(arg0: number): number;
        abstract numActiveSmallAllocations(): number;
        abstract numAllocations(): number;
    }
    type PoolArenaMetric_ = PoolArenaMetric;
    class NioEventLoopGroup extends Internal.MultithreadEventLoopGroup {
        constructor()
        constructor(arg0: number, arg1: any_, arg2: any_)
        constructor(arg0: number, arg1: Internal.Executor_, arg2: any_, arg3: any_, arg4: any_, arg5: any_, arg6: any_, arg7: any_)
        constructor(arg0: number, arg1: Internal.Executor_, arg2: any_, arg3: any_, arg4: any_, arg5: any_, arg6: any_)
        constructor(arg0: number)
        constructor(arg0: any_)
        constructor(arg0: number, arg1: Internal.Executor_, arg2: any_, arg3: any_, arg4: any_, arg5: any_)
        constructor(arg0: number, arg1: Internal.Executor_, arg2: any_, arg3: any_)
        constructor(arg0: number, arg1: Internal.Executor_, arg2: any_)
        constructor(arg0: number, arg1: any_, arg2: any_, arg3: any_)
        constructor(arg0: number, arg1: Internal.Executor_)
        constructor(arg0: number, arg1: any_)
        constructor(arg0: number, arg1: Internal.Executor_, arg2: any_, arg3: any_, arg4: any_)
        abstract schedule<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        abstract submit<T>(arg0: Internal.Runnable_, arg1: T): io.netty.util.concurrent.Future<T>;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        abstract submit<T>(arg0: Internal.Callable_<T>): io.netty.util.concurrent.Future<T>;
        rebuildSelectors(): void;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        setIoRatio(arg0: number): void;
        set ioRatio(arg0: number)
    }
    type NioEventLoopGroup_ = NioEventLoopGroup;
    interface BinaryOperator <T> extends Internal.BiFunction<T, T, T> {
        andThen<V>(arg0: Internal.Function_<T, V>): Internal.BiFunction<T, T, V>;
        abstract apply(arg0: T, arg1: T): T;
        maxBy<T>(arg0: Internal.Comparator_<T>): this;
        minBy<T>(arg0: Internal.Comparator_<T>): this;
        (arg0: T, arg1: T): T;
    }
    type BinaryOperator_<T> = BinaryOperator<T>;
    abstract class Player extends Internal.LivingEntity implements Internal.PlayerKJS, Internal.IForgePlayer {
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: number, arg3: Internal.GameProfile_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        getStats(): Internal.PlayerStatsJS;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        interactOn(arg0: Internal.Entity_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        getScore(): number;
        isOnScoreboardTeam(teamId: string): boolean;
        onUpdateAbilities(): void;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        getFoodData(): Internal.FoodData;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        sendMerchantOffers(arg0: number, arg1: Internal.MerchantOffers_, arg2: number, arg3: number, arg4: boolean, arg5: boolean): void;
        resetRecipes(arg0: Internal.Collection_<Internal.Recipe<any>>): number;
        getEntityReach(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        playNotifySound(arg0: Internal.SoundEvent_, arg1: Internal.SoundSource_, arg2: number, arg3: number): void;
        setY(y: number): void;
        setSelectedSlot(index: number): void;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getWardenSpawnTracker(): Internal.Optional<Internal.WardenSpawnTracker>;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        startFallFlying(): void;
        crit(arg0: Internal.Entity_): void;
        damageHeldItem(): void;
        setMotionZ(z: number): void;
        awardStat(arg0: ResourceLocation_, arg1: number): void;
        sweepAttack(): void;
        canEat(arg0: boolean): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFoodLevel(): number;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        tryToStartFallFlying(): boolean;
        getCraftingGrid(): Internal.InventoryKJS;
        getShoulderEntityLeft(): Internal.CompoundTag;
        abstract isCreative(): boolean;
        setSaturation(saturation: number): void;
        attack(arg0: Internal.Entity_): void;
        stopFallFlying(): void;
        openJigsawBlock(arg0: Internal.JigsawBlockEntity_): void;
        setMainHandItem(item: Internal.ItemStack_): void;
        getItem(): Internal.ItemStack;
        setForcedPose(arg0: Internal.Pose_): void;
        setX(x: number): void;
        hasContainerOpen(): boolean;
        getXp(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        isMiningBlock(): boolean;
        isUndead(): boolean;
        isAmbientCreature(): boolean;
        getStepHeight(): number;
        getInventoryChangeListener(): Internal.KubeJSInventoryListener;
        setMainArm(arg0: Internal.HumanoidArm_): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getSuffixes(): Internal.Collection<Internal.MutableComponent>;
        closeMenu(): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        getStages(): Internal.Stages;
        getName(): Internal.Component;
        boostElytraFlight(): void;
        setMouseItem(item: Internal.ItemStack_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        getLuck(): number;
        handler$zcp000$onGetFlyingSpeed(info: Internal.CallbackInfoReturnable_<any>): void;
        getInventory(): Internal.InventoryKJS;
        give(item: Internal.ItemStack_): void;
        awardStat(arg0: ResourceLocation_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getDigSpeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        setDefaultMovementSpeed(speed: number): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        getMainHandItem(): Internal.ItemStack;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        setScore(arg0: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        openMinecartCommandBlock(arg0: Internal.BaseCommandBlock_): void;
        openStructureBlock(arg0: Internal.StructureBlockEntity_): void;
        updateTutorialInventoryAction(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ClickAction_): void;
        drop(arg0: Internal.ItemStack_, arg1: boolean): Internal.ItemEntity;
        getScriptType(): Internal.ScriptType;
        isMultipartEntity(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        checkMovementStatistics(arg0: number, arg1: number, arg2: number): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        canReach(arg0: Vec3d_, arg1: number): boolean;
        getXpNeededForNextLevel(): number;
        deserializeNBT(arg0: Internal.Tag_): void;
        resetAttackStrengthTicker(): void;
        blockActionRestricted(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.GameType_): boolean;
        refreshDisplayName(): void;
        serializeNBT(): Internal.CompoundTag;
        getScoreboard(): Internal.Scoreboard;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getSaturation(): number;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        isHurt(): boolean;
        disableShield(arg0: boolean): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        openCommandBlock(arg0: Internal.CommandBlockEntity_): void;
        jumpFromGround(): void;
        isFake(): boolean;
        mayUseItemAt(arg0: BlockPos_, arg1: Internal.Direction_, arg2: Internal.ItemStack_): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isAffectedByFluids(): boolean;
        giveExperiencePoints(arg0: number): void;
        addFood(f: number, m: number): void;
        swing(): void;
        getForcedPose(): Internal.Pose;
        canStartSwimming(): boolean;
        resetStat(arg0: Internal.Stat_<any>): void;
        canReach(arg0: BlockPos_, arg1: number): boolean;
        getXpLevel(): number;
        getAbilities(): Internal.Abilities;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getEnchantmentSeed(): number;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        addItem(arg0: Internal.ItemStack_): boolean;
        openItemGui(arg0: Internal.ItemStack_, arg1: Internal.InteractionHand_): void;
        awardRecipesByKey(arg0: ResourceLocation_[]): void;
        paint(renderer: Internal.CompoundTag_): void;
        getBlockReach(): number;
        getDisplayName(): Internal.Component;
        displayClientMessage(arg0: Internal.Component_, arg1: boolean): void;
        setReducedDebugInfo(arg0: boolean): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        getLastDeathLocation(): Internal.Optional<Internal.GlobalPos>;
        awardStat(arg0: Internal.Stat_<any>, arg1: number): void;
        notify(title: Internal.Component_, text: Internal.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        drop(arg0: Internal.ItemStack_, arg1: boolean, arg2: boolean): Internal.ItemEntity;
        causeFoodExhaustion(arg0: number): void;
        setXpLevel(l: number): void;
        setEntityOnShoulder(arg0: Internal.CompoundTag_): boolean;
        isScoping(): boolean;
        setFoodLevel(foodLevel: number): void;
        giveExperienceLevels(arg0: number): void;
        addXPLevels(l: number): void;
        shouldRiderSit(): boolean;
        setLastDeathLocation(arg0: Internal.Optional_<Internal.GlobalPos>): void;
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
        getSelectedSlot(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getShoulderEntityRight(): Internal.CompoundTag;
        openMenu(arg0: Internal.MenuProvider_): Internal.OptionalInt;
        canHarmPlayer(arg0: Internal.Player_): boolean;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getOpenInventory(): Internal.AbstractContainerMenu;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        startAutoSpinAttack(arg0: number): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        setXp(xp: number): void;
        self(): Internal.LivingEntity;
        getDefaultMovementSpeed(): number;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        onEnchantmentPerformed(arg0: Internal.ItemStack_, arg1: number): void;
        setRotation(yaw: number, pitch: number): void;
        getInventory(): Internal.Inventory;
        isLocalPlayer(): boolean;
        notify(builder: Notification_): void;
        isMonster(): boolean;
        awardStat(arg0: Internal.Stat_<any>): void;
        getSleepTimer(): number;
        awardRecipes(arg0: Internal.Collection_<Internal.Recipe<any>>): number;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getMotionY(): number;
        getCurrentItemAttackStrengthDelay(): number;
        addExhaustion(exhaustion: number): void;
        getPassengers(): Internal.EntityArrayList;
        getEnderChestInventory(): Internal.PlayerEnderChestContainer;
        giveInHand(item: Internal.ItemStack_): void;
        magicCrit(arg0: Internal.Entity_): void;
        addXP(xp: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        /**
         * @deprecated
        */
        getDestroySpeed(arg0: Internal.BlockState_): number;
        canUseGameMasterBlocks(): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        stopSleepInBed(arg0: boolean, arg1: boolean): void;
        increaseScore(arg0: number): void;
        isSleepingLongEnough(): boolean;
        isTextFilteringEnabled(): boolean;
        isReducedDebugInfo(): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        getGameProfile(): Internal.GameProfile;
        triggerRecipeCrafted(arg0: Internal.Recipe_<any>, arg1: Internal.List_<Internal.ItemStack>): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        isSecondaryUseActive(): boolean;
        setMovementSpeedAddition(speed: number): void;
        getPrefixes(): Internal.Collection<Internal.MutableComponent>;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getCooldowns(): Internal.ItemCooldowns;
        hasCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        getData(): Internal.AttachedData<any>;
        static findRespawnPositionAndUseSpawnBlock(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number, arg3: boolean, arg4: boolean): Internal.Optional<Vec3d>;
        sendInventoryUpdate(): void;
        getChestArmorItem(): Internal.ItemStack;
        openHorseInventory(arg0: Internal.AbstractHorse_, arg1: Internal.Container_): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        isModelPartShown(arg0: Internal.PlayerModelPart_): boolean;
        tell(message: Internal.Component_): void;
        getMouseItem(): Internal.ItemStack;
        setZ(z: number): void;
        getAttackStrengthScale(arg0: number): number;
        getDistanceSq(pos: BlockPos_): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        openTextEdit(arg0: Internal.SignBlockEntity_, arg1: boolean): void;
        mayBuild(): boolean;
        respawn(): void;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        startSleepInBed(arg0: BlockPos_): Internal.Either<Internal.Player$BedSleepingProblem, net.minecraft.util.Unit>;
        addItemCooldown(item: Internal.Item_, ticks: number): void;
        get stats(): Internal.PlayerStatsJS
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get score(): number
        get foodData(): Internal.FoodData
        get entityReach(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        set selectedSlot(index: number)
        get wardenSpawnTracker(): Internal.Optional<Internal.WardenSpawnTracker>
        get totalMovementSpeed(): number
        set motionZ(z: number)
        get foodLevel(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get craftingGrid(): Internal.InventoryKJS
        get shoulderEntityLeft(): Internal.CompoundTag
        get creative(): boolean
        set saturation(saturation: number)
        set mainHandItem(item: Internal.ItemStack_)
        get item(): Internal.ItemStack
        set forcedPose(arg0: Internal.Pose_)
        set x(x: number)
        get xp(): number
        get miningBlock(): boolean
        get undead(): boolean
        get ambientCreature(): boolean
        get stepHeight(): number
        get inventoryChangeListener(): Internal.KubeJSInventoryListener
        set mainArm(arg0: Internal.HumanoidArm_)
        get suffixes(): Internal.Collection<Internal.MutableComponent>
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get stages(): Internal.Stages
        get name(): Internal.Component
        set mouseItem(item: Internal.ItemStack_)
        set totalMovementSpeedMultiplier(speed: number)
        get luck(): number
        get inventory(): Internal.InventoryKJS
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        set score(arg0: number)
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get xpNeededForNextLevel(): number
        get scoreboard(): Internal.Scoreboard
        set statusMessage(message: Internal.Component_)
        get saturation(): number
        get hurt(): boolean
        get fake(): boolean
        get affectedByFluids(): boolean
        get forcedPose(): Internal.Pose
        get xpLevel(): number
        get abilities(): Internal.Abilities
        get enchantmentSeed(): number
        get living(): boolean
        get blockReach(): number
        get displayName(): Internal.Component
        set reducedDebugInfo(arg0: boolean)
        set position(block: Internal.BlockContainerJS_)
        get lastDeathLocation(): Internal.Optional<Internal.GlobalPos>
        get teamId(): string
        set xpLevel(l: number)
        set entityOnShoulder(arg0: Internal.CompoundTag_)
        get scoping(): boolean
        set foodLevel(foodLevel: number)
        set lastDeathLocation(arg0: Internal.Optional_<Internal.GlobalPos>)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get selectedSlot(): number
        get shoulderEntityRight(): Internal.CompoundTag
        get potionEffects(): Internal.EntityPotionEffectsJS
        get openInventory(): Internal.AbstractContainerMenu
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set xp(xp: number)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get inventory(): Internal.Inventory
        get localPlayer(): boolean
        get monster(): boolean
        get sleepTimer(): number
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get motionY(): number
        get currentItemAttackStrengthDelay(): number
        get passengers(): Internal.EntityArrayList
        get enderChestInventory(): Internal.PlayerEnderChestContainer
        get sleepingLongEnough(): boolean
        get textFilteringEnabled(): boolean
        get reducedDebugInfo(): boolean
        get feetArmorItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get gameProfile(): Internal.GameProfile
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get secondaryUseActive(): boolean
        set movementSpeedAddition(speed: number)
        get prefixes(): Internal.Collection<Internal.MutableComponent>
        get cooldowns(): Internal.ItemCooldowns
        get data(): Internal.AttachedData<any>
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get mouseItem(): Internal.ItemStack
        set z(z: number)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        static readonly MAX_HEALTH: 20;
        fishing: Internal.FishingHook;
        static readonly PERSISTED_NBT_TAG: "PlayerPersisted";
        zCloak: number;
        static readonly MAX_NAME_LENGTH: 16;
        static readonly WAKE_UP_DURATION: 10;
        bob: number;
        experienceLevel: number;
        static readonly CROUCH_BB_HEIGHT: 1.5;
        static readonly ENDER_SLOT_OFFSET: 200;
        static readonly SWIMMING_BB_HEIGHT: 0.6;
        static readonly SWIMMING_BB_WIDTH: 0.6;
        xCloakO: number;
        totalExperience: number;
        xCloak: number;
        yCloakO: number;
        zCloakO: number;
        static readonly DEFAULT_EYE_HEIGHT: 1.62;
        containerMenu: Internal.AbstractContainerMenu;
        takeXpDelay: number;
        readonly inventoryMenu: Internal.InventoryMenu;
        static readonly SLEEP_DURATION: 100;
        experienceProgress: number;
        oBob: number;
        yCloak: number;
        static readonly STANDING_DIMENSIONS: Internal.EntityDimensions;
    }
    type Player_ = Player;
    class RandomBooleanSelectorFeature extends Internal.Feature<Internal.RandomBooleanFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.RandomBooleanFeatureConfiguration>)
    }
    type RandomBooleanSelectorFeature_ = RandomBooleanSelectorFeature;
    interface Reference2ReferenceFunction <K, V> extends it.unimi.dsi.fastutil.Function<K, V> {
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Reference2ShortFunction<K>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Reference2ReferenceFunction<K, T>;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2ReferenceFunction<V>;
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Reference2LongFunction<K>;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2ReferenceFunction<V>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2ReferenceFunction<V>;
        containsKey(arg0: any): boolean;
        put(arg0: K, arg1: V): V;
        abstract get(arg0: any): V;
        remove(arg0: any): V;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2ReferenceFunction<V>;
        apply(arg0: K): V;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Reference2CharFunction<K>;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2ReferenceFunction<V>;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Reference2DoubleFunction<K>;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2ReferenceFunction<V>;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2ReferenceFunction<T, V>;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Reference2IntFunction<K>;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Reference2ObjectFunction<K, T>;
        size(): number;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Reference2FloatFunction<K>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2ReferenceFunction<V>;
        clear(): void;
        defaultReturnValue(): V;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Reference2ByteFunction<K>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2ReferenceFunction<T, V>;
        (arg0: any): V;
    }
    type Reference2ReferenceFunction_<K, V> = Reference2ReferenceFunction<K, V>;
    interface Reference2DoubleFunction <K> extends it.unimi.dsi.fastutil.Function<K, number>, Internal.ToDoubleFunction<K> {
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        put(arg0: K, arg1: number): number;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2DoubleFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenReference<T>(arg0: Internal.Double2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2DoubleFunction;
        andThenLong(arg0: Internal.Double2LongFunction_): Internal.Reference2LongFunction<K>;
        andThenChar(arg0: Internal.Double2CharFunction_): Internal.Reference2CharFunction<K>;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2DoubleFunction<T>;
        containsKey(arg0: any): boolean;
        andThenDouble(arg0: Internal.Double2DoubleFunction_): this;
        andThenByte(arg0: Internal.Double2ByteFunction_): Internal.Reference2ByteFunction<K>;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(arg0: number): void;
        applyAsDouble(arg0: K): number;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2DoubleFunction<T>;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2DoubleFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenShort(arg0: Internal.Double2ShortFunction_): Internal.Reference2ShortFunction<K>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2DoubleFunction;
        removeDouble(arg0: any): number;
        defaultReturnValue(): number;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2DoubleFunction;
        apply(arg0: K): number;
        size(): number;
        andThenFloat(arg0: Internal.Double2FloatFunction_): Internal.Reference2FloatFunction<K>;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2DoubleFunction;
        andThenInt(arg0: Internal.Double2IntFunction_): Internal.Reference2IntFunction<K>;
        clear(): void;
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        abstract getDouble(arg0: any): number;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        andThenObject<T>(arg0: Internal.Double2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        (arg0: any): number;
    }
    type Reference2DoubleFunction_<K> = Reference2DoubleFunction<K>;
    class PropelpearlItem extends Internal.Item {
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
    type PropelpearlItem_ = PropelpearlItem;
    class Commands$CommandSelection extends Internal.Enum<Internal.Commands$CommandSelection> {
        static values(): Internal.Commands$CommandSelection[];
        static valueOf(arg0: string): Internal.Commands$CommandSelection;
        static readonly DEDICATED: Internal.Commands$CommandSelection;
        readonly includeDedicated: boolean;
        static readonly INTEGRATED: Internal.Commands$CommandSelection;
        static readonly ALL: Internal.Commands$CommandSelection;
        readonly includeIntegrated: boolean;
    }
    type Commands$CommandSelection_ = "dedicated" | "integrated" | Commands$CommandSelection | "all";
    class RespawnAnchorBlock extends Internal.Block {
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
        static charge(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        static canSetSpawn(arg0: Internal.Level_): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        static findStandUpPosition(arg0: Internal.EntityType_<any>, arg1: Internal.CollisionGetter_, arg2: BlockPos_): Internal.Optional<Vec3d>;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static getScaledChargeLevel(arg0: Internal.BlockState_, arg1: number): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly MIN_CHARGES: 0;
        static readonly CHARGE: Internal.IntegerProperty;
        static readonly MAX_CHARGES: 4;
    }
    type RespawnAnchorBlock_ = RespawnAnchorBlock;
    interface Queue <E> extends Internal.Collection<E> {
        abstract add(arg0: E): boolean;
        abstract remove(): E;
        abstract element(): E;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        abstract poll(): E;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract contains(arg0: any): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        abstract peek(): E;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract offer(arg0: E): boolean;
        abstract remove(arg0: any): boolean;
        abstract toArray(): any[];
        abstract iterator(): Internal.Iterator<E>;
        abstract hashCode(): number;
        abstract size(): number;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        spliterator(): Internal.Spliterator<E>;
        abstract equals(arg0: any): boolean;
        get empty(): boolean
    }
    type Queue_<E> = Queue<E>;
    class RegistryLayer extends Internal.Enum<Internal.RegistryLayer> {
        static values(): Internal.RegistryLayer[];
        static createRegistryAccess(): Internal.LayeredRegistryAccess<Internal.RegistryLayer>;
        static valueOf(arg0: string): Internal.RegistryLayer;
        static readonly STATIC: Internal.RegistryLayer;
        static readonly WORLDGEN: Internal.RegistryLayer;
        static readonly RELOADABLE: Internal.RegistryLayer;
        static readonly DIMENSIONS: Internal.RegistryLayer;
    }
    type RegistryLayer_ = RegistryLayer | "static" | "worldgen" | "reloadable" | "dimensions";
    interface Temporal extends Internal.TemporalAccessor {
        abstract plus(arg0: number, arg1: Internal.TemporalUnit_): this;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        abstract until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        abstract isSupported(arg0: Internal.TemporalUnit_): boolean;
        plus(arg0: Internal.TemporalAmount_): this;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        get(arg0: Internal.TemporalField_): number;
        "with"(arg0: Internal.TemporalAdjuster_): this;
        abstract getLong(arg0: Internal.TemporalField_): number;
        abstract "with"(arg0: Internal.TemporalField_, arg1: number): this;
        minus(arg0: Internal.TemporalAmount_): this;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        abstract isSupported(arg0: Internal.TemporalField_): boolean;
    }
    type Temporal_ = Temporal;
    interface IRotatable {
        onRotated(newState: Internal.BlockState_, oldState: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rotation: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): void;
        abstract getRotatedState(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_, arg4: Internal.Direction_, arg5: Vec3d_): Internal.Optional<Internal.BlockState>;
        rotateOverAxis(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rotation: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): Internal.Optional<Internal.Direction>;
        (arg0: Internal.BlockState, arg1: Internal.LevelAccessor, arg2: BlockPos, arg3: Internal.Rotation, arg4: Internal.Direction, arg5: Vec3d): Internal.Optional_<Internal.BlockState>;
    }
    type IRotatable_ = IRotatable;
    class ThreadLocal$SuppliedThreadLocal <T> extends Internal.ThreadLocal<T> {
    }
    type ThreadLocal$SuppliedThreadLocal_<T> = ThreadLocal$SuppliedThreadLocal<T>;
    class TurntableBlock extends Internal.KineticBlock implements Internal.IBE<Internal.TurntableBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.TurntableBlockEntity>): void;
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.TurntableBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
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
        getBlockEntityClass(): typeof Internal.TurntableBlockEntity;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        getBlockEntityType(): Internal.BlockEntityType<Internal.TurntableBlockEntity>;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.TurntableBlockEntity>;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.TurntableBlockEntity;
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
        showCapacityWithAnnotation(): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockEntityClass(): typeof Internal.TurntableBlockEntity
        get blockEntityType(): Internal.BlockEntityType<Internal.TurntableBlockEntity>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type TurntableBlock_ = TurntableBlock;
    class SignedMessageBody$Packed extends Internal.Record {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: string, arg1: Internal.Instant_, arg2: number, arg3: Internal.LastSeenMessages$Packed_)
        content(): string;
        lastSeen(): Internal.LastSeenMessages$Packed;
        write(arg0: Internal.FriendlyByteBuf_): void;
        timeStamp(): Internal.Instant;
        salt(): number;
        unpack(arg0: Internal.MessageSignatureCache_): Internal.Optional<Internal.SignedMessageBody>;
    }
    type SignedMessageBody$Packed_ = SignedMessageBody$Packed;
    class TridentRiptideEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        checkCompatibility(arg0: Internal.Enchantment_): boolean;
    }
    type TridentRiptideEnchantment_ = TridentRiptideEnchantment;
    abstract class AbstractObject2FloatFunction <K> implements Internal.Object2FloatFunction<K>, Internal.Serializable {
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
        static identity<T>(): Internal.Function<T, T>;
        andThenFloat(arg0: Internal.Float2FloatFunction_): Internal.Object2FloatFunction<K>;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Object2IntFunction<K>;
    }
    type AbstractObject2FloatFunction_<K> = AbstractObject2FloatFunction<K>;
    interface Int2IntMap extends Internal.Int2IntFunction, Internal.Map<number, number> {
        computeIfAbsentNullable(arg0: number, arg1: Internal.IntFunction_<number>): number;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        abstract defaultReturnValue(): number;
        remove(arg0: number): number;
        putIfAbsent(arg0: number, arg1: number): number;
        abstract containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        replace(arg0: number, arg1: number, arg2: number): boolean;
        remove(arg0: number, arg1: number): boolean;
        keySet(): Internal.Set<any>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: number, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2IntFunction<T>;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        values(): Internal.Collection<any>;
        /**
         * @deprecated
        */
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Int2ObjectFunction<T>;
        /**
         * @deprecated
        */
        computeIfAbsent(arg0: any, arg1: Internal.Function_<any, any>): any;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        replaceAll(arg0: Internal.BiFunction_<number, number, number>): void;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Int2LongFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Int2ReferenceFunction<T>;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Int2ShortFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, number>): number;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2IntFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        compute(arg0: any, arg1: Internal.BiFunction_<any, any, any>): any;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Int2IntFunction_): number;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2IntFunction;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Int2FloatFunction;
        /**
         * @deprecated
        */
        compute(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2IntFunction;
        /**
         * @deprecated
        */
        merge(arg0: number, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        of<K, V>(): Internal.Map<K, V>;
        apply(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2IntFunction<T>;
        abstract isEmpty(): boolean;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        replace(arg0: number, arg1: number): number;
        abstract int2IntEntrySet(): Internal.ObjectSet<Internal.Int2IntMap$Entry>;
        computeIfAbsent(arg0: number, arg1: Internal.Int2IntFunction_): number;
        /**
         * @deprecated
        */
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        mergeInt(arg0: number, arg1: number, arg2: it.unimi.dsi.fastutil.ints.IntBinaryOperator_): number;
        abstract containsValue(arg0: number): boolean;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Int2ByteFunction;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2IntFunction;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Int2DoubleFunction;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<number, number>>;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2IntFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        abstract putAll(arg0: Internal.Map_<number, number>): void;
        merge(arg0: number, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        forEach(arg0: Internal.BiConsumer_<number, number>): void;
        composeInt(arg0: Internal.Int2IntFunction_): Internal.Int2IntFunction;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Int2IntFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Int2CharFunction;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        put(arg0: number, arg1: number): number;
        replace(arg0: number, arg1: number): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        abstract size(): number;
        computeIfAbsent(arg0: number, arg1: Internal.IntUnaryOperator_): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        abstract hashCode(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        abstract defaultReturnValue(arg0: number): void;
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2IntFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        abstract get(arg0: number): number;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        abstract equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        /**
         * @deprecated
        */
        computeIfPresent(arg0: any, arg1: Internal.BiFunction_<any, any, any>): any;
        mergeInt(arg0: number, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        identity(): Internal.Int2IntFunction;
        get empty(): boolean
    }
    type Int2IntMap_ = Int2IntMap;
    interface ByteBufConvertible {
        abstract asByteBuf(): Internal.ByteBuf;
        (): Internal.ByteBuf_;
    }
    type ByteBufConvertible_ = ByteBufConvertible;
    class SimpleRandomSelectorFeature extends Internal.Feature<Internal.SimpleRandomFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.SimpleRandomFeatureConfiguration>)
    }
    type SimpleRandomSelectorFeature_ = SimpleRandomSelectorFeature;
    class BufferBuilder$SortState {
    }
    type BufferBuilder$SortState_ = BufferBuilder$SortState;
    interface EntityGetter {
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        abstract getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.Entity>;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: number, arg2: number, arg3: number): Internal.Player;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        abstract getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_, arg2: Internal.Predicate_<Internal.Entity>): Internal.List<Internal.Entity>;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Internal.Player;
        getPlayerByUUID(arg0: Internal.UUID_): Internal.Player;
        abstract players(): Internal.List<Internal.Player>;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Internal.Player>;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Internal.Player;
    }
    type EntityGetter_ = EntityGetter;
    interface CommentedFileConfig extends Internal.CommentedConfig, Internal.FileConfig {
        abstract add(arg0: Internal.List_<string>, arg1: any): boolean;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        of(arg0: Internal.Supplier_<Internal.Map<string, any>>, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): Internal.CommentedConfig;
        of(arg0: Internal.File_): this;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        builder(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): Internal.CommentedFileConfigBuilder;
        getInt(arg0: Internal.List_<string>): number;
        getByteOrElse(arg0: string, arg1: number): number;
        getShortOrElse(arg0: string, arg1: number): number;
        abstract getComment(arg0: Internal.List_<string>): string;
        abstract commentMap(): Internal.Map<string, string>;
        getShortOrElse(arg0: Internal.List_<string>, arg1: number): number;
        abstract containsComment(arg0: Internal.List_<string>): boolean;
        getIntOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getOptionalComment(arg0: Internal.List_<string>): Internal.Optional<string>;
        abstract getRaw<T>(arg0: Internal.List_<string>): T;
        update(arg0: Internal.List_<string>, arg1: any): void;
        ofConcurrent(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        getOptionalLong(arg0: string): Internal.OptionalLong;
        remove<T>(arg0: string): T;
        putAll(arg0: Internal.UnmodifiableConfig_): void;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        ofConcurrent(arg0: string): this;
        add(arg0: string, arg1: any): boolean;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>): Internal.CommentedConfig;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.ConfigFormat_<any>): Internal.CommentedConfig;
        of(arg0: Internal.File_, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        abstract getNioPath(): Internal.Path;
        getComments(arg0: Internal.Map_<string, Internal.UnmodifiableCommentedConfig$CommentNode>): void;
        concurrentCopy(arg0: Internal.UnmodifiableConfig_): Internal.CommentedConfig;
        of(arg0: string): this;
        fake(arg0: Internal.Config_): Internal.CommentedConfig;
        copy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>, arg2: Internal.ConfigFormat_<Internal.CommentedConfig>): Internal.CommentedConfig;
        getOptionalLong(arg0: Internal.List_<string>): Internal.OptionalLong;
        get<T>(arg0: string): T;
        abstract contains(arg0: Internal.List_<string>): boolean;
        getLong(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        apply<T>(arg0: Internal.List_<string>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getInt(arg0: string): number;
        copy(arg0: Internal.UnmodifiableConfig_): Internal.CommentedConfig;
        getComment(arg0: string): string;
        containsComment(arg0: string): boolean;
        inMemoryUniversal(): Internal.Config;
        getRaw<T>(arg0: string): T;
        getIntOrElse(arg0: string, arg1: Internal.IntSupplier_): number;
        removeComment(arg0: string): string;
        abstract load(): void;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>, arg2: Internal.ConfigFormat_<any>): Internal.CommentedConfig;
        concurrentCopy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.ConfigFormat_<any>): Internal.CommentedConfig;
        isNull(arg0: string): boolean;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): Internal.Optional<T>;
        builder(arg0: Internal.Path_): Internal.CommentedFileConfigBuilder;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getLongOrElse(arg0: string, arg1: number): number;
        getByteOrElse(arg0: Internal.List_<string>, arg1: number): number;
        abstract setComment(arg0: Internal.List_<string>, arg1: string): string;
        getOptionalInt(arg0: string): Internal.OptionalInt;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        unmodifiable(): Internal.UnmodifiableConfig;
        getIntOrElse(arg0: string, arg1: number): number;
        abstract removeComment(arg0: Internal.List_<string>): string;
        copy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>): Internal.CommentedConfig;
        abstract save(): void;
        checked(): Internal.Config;
        getOptionalInt(arg0: Internal.List_<string>): Internal.OptionalInt;
        of(arg0: string, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        abstract createSubConfig(): Internal.CommentedConfig;
        update(arg0: string, arg1: any): void;
        abstract size(): number;
        copy(arg0: Internal.UnmodifiableCommentedConfig_): Internal.CommentedConfig;
        abstract clear(): void;
        abstract valueMap(): Internal.Map<string, any>;
        ofConcurrent(arg0: string, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        inMemoryConcurrent(): Internal.CommentedConfig;
        inMemory(): Internal.CommentedConfig;
        apply<T>(arg0: string): T;
        getOrElse<T>(arg0: string, arg1: T): T;
        getLong(arg0: string): number;
        builder(arg0: Internal.File_, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): Internal.CommentedFileConfigBuilder;
        get<T>(arg0: Internal.List_<string>): T;
        getCharOrElse(arg0: string, arg1: string): string;
        abstract set<T>(arg0: Internal.List_<string>, arg1: any): T;
        inMemoryUniversalConcurrent(): Internal.Config;
        contains(arg0: string): boolean;
        set<T>(arg0: string, arg1: any): T;
        getShort(arg0: Internal.List_<string>): number;
        isNull(arg0: Internal.List_<string>): boolean;
        removeAll(arg0: Internal.UnmodifiableConfig_): void;
        setInsertionOrderPreserved(arg0: boolean): void;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): Internal.Supplier<Internal.Map<string, T>>;
        getOptional<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        abstract remove<T>(arg0: Internal.List_<string>): T;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        isInsertionOrderPreserved(): boolean;
        getOptional<T>(arg0: string): Internal.Optional<T>;
        of(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        builder(arg0: Internal.File_): Internal.CommentedFileConfigBuilder;
        getShort(arg0: string): number;
        getOrElse<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        abstract getFile(): Internal.File;
        putAllComments(arg0: Internal.UnmodifiableCommentedConfig_): void;
        abstract clearComments(): void;
        builder(arg0: string): Internal.CommentedFileConfigBuilder;
        getComments(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>;
        addAll(arg0: Internal.UnmodifiableConfig_): void;
        getChar(arg0: string): string;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: T): T;
        concurrentCopy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.ConfigFormat_<any>): Internal.CommentedConfig;
        getChar(arg0: Internal.List_<string>): string;
        ofConcurrent(arg0: Internal.Path_): this;
        setComment(arg0: string, arg1: string): string;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: number): number;
        concurrentCopy(arg0: Internal.UnmodifiableCommentedConfig_): Internal.CommentedConfig;
        isEmpty(): boolean;
        builder(arg0: string, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): Internal.CommentedFileConfigBuilder;
        putAllComments(arg0: Internal.Map_<string, Internal.UnmodifiableCommentedConfig$CommentNode>): void;
        getIntOrElse(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
        fake(arg0: Internal.UnmodifiableConfig_): Internal.UnmodifiableCommentedConfig;
        ofConcurrent(arg0: Internal.File_, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        wrap(arg0: Internal.Map_<string, any>, arg1: Internal.ConfigFormat_<any>): Internal.CommentedConfig;
        getDefaultMapCreator<T>(arg0: boolean): Internal.Supplier<Internal.Map<string, T>>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract entrySet(): Internal.Set<Internal.CommentedConfig$Entry>;
        getOptionalComment(arg0: string): Internal.Optional<string>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        ofConcurrent(arg0: Internal.File_): this;
        getCharOrElse(arg0: Internal.List_<string>, arg1: string): string;
        getByte(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.Optional<T>;
        ofConcurrent(arg0: Internal.ConfigFormat_<Internal.CommentedConfig>): Internal.CommentedConfig;
        of(arg0: Internal.ConfigFormat_<Internal.CommentedConfig>): Internal.CommentedConfig;
        getLongOrElse(arg0: string, arg1: Internal.LongSupplier_): number;
        getByte(arg0: string): number;
        copy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.ConfigFormat_<any>): Internal.CommentedConfig;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract configFormat(): Internal.ConfigFormat<any>;
        abstract close(): void;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        of(arg0: Internal.Path_): this;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        get nioPath(): Internal.Path
        set insertionOrderPreserved(arg0: boolean)
        get insertionOrderPreserved(): boolean
        get file(): Internal.File
        get comments(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>
        get empty(): boolean
    }
    type CommentedFileConfig_ = CommentedFileConfig;
    class TreeFeature extends Internal.Feature<Internal.TreeConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.TreeConfiguration>)
        static validTreePos(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        static isAirOrLeaves(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
    }
    type TreeFeature_ = TreeFeature;
    class ClientboundResourcePackPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: string, arg1: string, arg2: boolean, arg3: Internal.Component_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getPrompt(): Internal.Component;
        write(arg0: Internal.FriendlyByteBuf_): void;
        isRequired(): boolean;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getUrl(): string;
        getHash(): string;
        isSkippable(): boolean;
        get prompt(): Internal.Component
        get required(): boolean
        get url(): string
        get hash(): string
        get skippable(): boolean
        static readonly MAX_HASH_LENGTH: 40;
    }
    type ClientboundResourcePackPacket_ = ClientboundResourcePackPacket;
    class CreativeModeTab$Builder {
        constructor(arg0: Internal.CreativeModeTab$Row_, arg1: number)
        withTabFactory(arg0: Internal.Function_<Internal.CreativeModeTab$Builder, Internal.CreativeModeTab>): this;
        hideTitle(): this;
        title(arg0: Internal.Component_): this;
        withSlotColor(arg0: number): this;
        withTabsBefore(...arg0: Internal.ResourceKey_<Internal.CreativeModeTab>[]): this;
        withTabsBefore(...arg0: ResourceLocation_[]): this;
        withSearchBar(): this;
        withBackgroundLocation(arg0: ResourceLocation_): this;
        withTabsImage(arg0: ResourceLocation_): this;
        withLabelColor(arg0: number): this;
        build(): Internal.CreativeModeTab;
        backgroundSuffix(arg0: string): this;
        withSearchBar(arg0: number): this;
        displayItems(arg0: Internal.CreativeModeTab$DisplayItemsGenerator_): this;
        alignedRight(): this;
        withTabsAfter(...arg0: ResourceLocation_[]): this;
        withTabsAfter(...arg0: Internal.ResourceKey_<Internal.CreativeModeTab>[]): this;
        icon(arg0: Internal.Supplier_<Internal.ItemStack>): this;
        noScrollBar(): this;
    }
    type CreativeModeTab$Builder_ = CreativeModeTab$Builder;
    class EndPortalFrameBlock extends Internal.Block {
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
        static getOrCreatePortalShape(): Internal.BlockPattern;
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
        get orCreatePortalShape(): Internal.BlockPattern
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly HAS_EYE: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type EndPortalFrameBlock_ = EndPortalFrameBlock;
    class Team$CollisionRule extends Internal.Enum<Internal.Team$CollisionRule> {
        getDisplayName(): Internal.Component;
        static byName(arg0: string): Internal.Team$CollisionRule;
        static values(): Internal.Team$CollisionRule[];
        static valueOf(arg0: string): Internal.Team$CollisionRule;
        get displayName(): Internal.Component
        static readonly PUSH_OTHER_TEAMS: Internal.Team$CollisionRule;
        readonly name: string;
        static readonly ALWAYS: Internal.Team$CollisionRule;
        readonly id: number;
        static readonly NEVER: Internal.Team$CollisionRule;
        static readonly PUSH_OWN_TEAM: Internal.Team$CollisionRule;
    }
    type Team$CollisionRule_ = "push_own_team" | Team$CollisionRule | "push_other_teams" | "never" | "always";
    class RecipeSchemaRegistryEventJS extends Internal.EventJS {
        constructor(namespaces: Internal.Map_<string, Internal.RecipeNamespace>, mappedRecipes: Internal.Map_<string, ResourceLocation>)
        register(id: Special.RecipeType, schema: Internal.RecipeSchema_): void;
        namespace(namespace: string): Internal.RecipeNamespace;
        mapRecipe(name: string, type: string): void;
        mapRecipe(name: string, type: ResourceLocation_): void;
        getComponents(): Special.RecipeComponentMap;
        get components(): Special.RecipeComponentMap
    }
    type RecipeSchemaRegistryEventJS_ = RecipeSchemaRegistryEventJS;
    class PushReaction extends Internal.Enum<Internal.PushReaction> {
        static values(): Internal.PushReaction[];
        static valueOf(arg0: string): Internal.PushReaction;
        static readonly BLOCK: Internal.PushReaction;
        static readonly NORMAL: Internal.PushReaction;
        static readonly PUSH_ONLY: Internal.PushReaction;
        static readonly DESTROY: Internal.PushReaction;
        static readonly IGNORE: Internal.PushReaction;
    }
    type PushReaction_ = "push_only" | "normal" | "block" | "ignore" | PushReaction | "destroy";
    class BufferLayout$Builder {
        constructor()
        build(): Internal.BufferLayout;
        addItems(...arg0: Internal.LayoutItem_[]): this;
    }
    type BufferLayout$Builder_ = BufferLayout$Builder;
    class PressingBehaviour extends Internal.BeltProcessingBehaviour {
        constructor(arg0: T)
        makeCompactingParticleEffect(arg0: Vec3d_, arg1: Internal.ItemStack_): void;
        getRunningTickSpeed(): number;
        start(arg0: Internal.PressingBehaviour$Mode_): void;
        makePressingParticleEffect(arg0: Vec3d_, arg1: Internal.ItemStack_, arg2: number): void;
        makePressingParticleEffect(arg0: Vec3d_, arg1: Internal.ItemStack_): void;
        inWorld(): boolean;
        getRenderedHeadOffset(arg0: number): number;
        onBasin(): boolean;
        get runningTickSpeed(): number
        prevRunningTicks: number;
        static readonly CYCLE: 240;
        running: boolean;
        runningTicks: number;
        particleItems: Internal.List<Internal.ItemStack>;
        mode: Internal.PressingBehaviour$Mode;
        finished: boolean;
        specifics: Internal.PressingBehaviour$PressingBehaviourSpecifics;
        static readonly ENTITY_SCAN: 10;
    }
    type PressingBehaviour_ = PressingBehaviour;
    class ArmorStand extends Internal.LivingEntity {
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.EntityType_<Internal.ArmorStand>, arg1: Internal.Level_)
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
        isNoBasePlate(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getRightArmPose(): Internal.Rotations;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        jumpInFluid(arg0: Internal.FluidType_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        getRightLegPose(): Internal.Rotations;
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
        setShowArms(arg0: boolean): void;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        setRightLegPose(arg0: Internal.Rotations_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getLeftArmPose(): Internal.Rotations;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        setHeadPose(arg0: Internal.Rotations_): void;
        self(): Internal.LivingEntity;
        getDefaultMovementSpeed(): number;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        swing(hand: Internal.InteractionHand_): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setLeftLegPose(arg0: Internal.Rotations_): void;
        isMarker(): boolean;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        setRightArmPose(arg0: Internal.Rotations_): void;
        getHeadPose(): Internal.Rotations;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        setNoBasePlate(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        setLeftArmPose(arg0: Internal.Rotations_): void;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        getLeftLegPose(): Internal.Rotations;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        setBodyPose(arg0: Internal.Rotations_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setDefaultMovementSpeed(speed: number): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        isSmall(): boolean;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getBodyPose(): Internal.Rotations;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        isShowArms(): boolean;
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
        get noBasePlate(): boolean
        set y(y: number)
        get rightArmPose(): Internal.Rotations
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        get rightLegPose(): Internal.Rotations
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
        set showArms(arg0: boolean)
        get item(): Internal.ItemStack
        set x(x: number)
        set rightLegPose(arg0: Internal.Rotations_)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get leftArmPose(): Internal.Rotations
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set headPose(arg0: Internal.Rotations_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        set leftLegPose(arg0: Internal.Rotations_)
        get marker(): boolean
        get peacefulCreature(): boolean
        set rightArmPose(arg0: Internal.Rotations_)
        get headPose(): Internal.Rotations
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        set noBasePlate(arg0: boolean)
        set leftArmPose(arg0: Internal.Rotations_)
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get leftLegPose(): Internal.Rotations
        set totalMovementSpeedMultiplier(speed: number)
        set bodyPose(arg0: Internal.Rotations_)
        get feetArmorItem(): Internal.ItemStack
        set defaultMovementSpeed(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        get small(): boolean
        set motionX(x: number)
        get bodyPose(): Internal.Rotations
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get showArms(): boolean
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        static readonly CLIENT_FLAG_NO_BASEPLATE: 8;
        static readonly DISABLE_PUTTING_OFFSET: 16;
        static readonly DATA_RIGHT_ARM_POSE: Internal.EntityDataAccessor<Internal.Rotations>;
        static readonly CLIENT_FLAG_SMALL: 1;
        static readonly DATA_LEFT_ARM_POSE: Internal.EntityDataAccessor<Internal.Rotations>;
        lastHit: number;
        static readonly DATA_HEAD_POSE: Internal.EntityDataAccessor<Internal.Rotations>;
        static readonly DATA_RIGHT_LEG_POSE: Internal.EntityDataAccessor<Internal.Rotations>;
        static readonly CLIENT_FLAG_MARKER: 16;
        static readonly DISABLE_TAKING_OFFSET: 8;
        static readonly CLIENT_FLAG_SHOW_ARMS: 4;
        static readonly DATA_CLIENT_FLAGS: Internal.EntityDataAccessor<number>;
        static readonly WOBBLE_TIME: 5;
        static readonly DATA_LEFT_LEG_POSE: Internal.EntityDataAccessor<Internal.Rotations>;
        static readonly DATA_BODY_POSE: Internal.EntityDataAccessor<Internal.Rotations>;
    }
    type ArmorStand_ = ArmorStand;
    class VillagerType {
        constructor(arg0: string)
        static byBiome(arg0: Internal.Holder_<Internal.Biome>): Internal.VillagerType;
        static readonly SNOW: Internal.VillagerType;
        static readonly SAVANNA: Internal.VillagerType;
        static readonly SWAMP: Internal.VillagerType;
        static readonly JUNGLE: Internal.VillagerType;
        static readonly TAIGA: Internal.VillagerType;
        static readonly PLAINS: Internal.VillagerType;
        static readonly DESERT: Internal.VillagerType;
    }
    type VillagerType_ = VillagerType | Special.VillagerType;
    class LootContextParamSet {
        getAllowed(): Internal.Set<Internal.LootContextParam<any>>;
        getRequired(): Internal.Set<Internal.LootContextParam<any>>;
        static builder(): Internal.LootContextParamSet$Builder;
        isAllowed(arg0: Internal.LootContextParam_<any>): boolean;
        validateUser(arg0: Internal.ValidationContext_, arg1: Internal.LootContextUser_): void;
        get allowed(): Internal.Set<Internal.LootContextParam<any>>
        get required(): Internal.Set<Internal.LootContextParam<any>>
    }
    type LootContextParamSet_ = LootContextParamSet;
    class LinkedList <E> extends Internal.AbstractSequentialList<E> implements Internal.Deque<E>, Internal.Cloneable, Internal.List<E>, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Collection_<E>)
        addLast(arg0: E): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        getLast(): E;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        remove(): E;
        sort(arg0: Internal.Comparator_<E>): void;
        poll(): E;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        descendingIterator(): Internal.Iterator<E>;
        peek(): E;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        abstract subList(arg0: number, arg1: number): Internal.List<E>;
        addFirst(arg0: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        toArray<T>(arg0: T[]): T[];
        offer(arg0: E): boolean;
        pop(): E;
        listIterator(arg0: number): Internal.ListIterator<E>;
        abstract iterator(): Internal.Iterator<E>;
        pollFirst(): E;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        stream(): Internal.Stream<E>;
        push(arg0: E): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        removeLast(): E;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        pollLast(): E;
        clone(): any;
        get(arg0: number): E;
        peekLast(): E;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        abstract listIterator(): Internal.ListIterator<E>;
        element(): E;
        removeFirst(): E;
        parallelStream(): Internal.Stream<E>;
        set(arg0: number, arg1: E): E;
        offerFirst(arg0: E): boolean;
        static of<E>(...arg0: E[]): Internal.List<E>;
        remove(arg0: number): E;
        removeFirstOccurrence(arg0: any): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        getFirst(): E;
        offerLast(arg0: E): boolean;
        peekFirst(): E;
        removeLastOccurrence(arg0: any): boolean;
        spliterator(): Internal.Spliterator<E>;
        get last(): E
        get first(): E
    }
    type LinkedList_<E> = LinkedList<E>;
    abstract class LevelEventJS extends Internal.EventJS {
        constructor()
        abstract getLevel(): Internal.Level;
        getServer(): Internal.MinecraftServer;
        get level(): Internal.Level
        get server(): Internal.MinecraftServer
    }
    type LevelEventJS_ = LevelEventJS;
    interface Long2ObjectMap$Entry <V> extends Internal.Map$Entry<number, V> {
        /**
         * @deprecated
        */
        getKey(): number;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract getLongKey(): number;
        abstract getValue(): V;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract equals(arg0: any): boolean;
        abstract setValue(arg0: V): V;
        /**
         * @deprecated
        */
        get key(): number
        get longKey(): number
        get value(): V
        set value(arg0: V)
    }
    type Long2ObjectMap$Entry_<V> = Long2ObjectMap$Entry<V>;
    class FrogVariant extends Internal.Record {
        constructor(arg0: ResourceLocation_)
        texture(): ResourceLocation;
        static readonly WARM: Internal.FrogVariant;
        static readonly COLD: Internal.FrogVariant;
        static readonly TEMPERATE: Internal.FrogVariant;
    }
    type FrogVariant_ = FrogVariant | Special.FrogVariant;
    interface ReadableByteChannel extends Internal.Channel {
        abstract read(arg0: Internal.ByteBuffer_): number;
        abstract isOpen(): boolean;
        abstract close(): void;
        get open(): boolean
    }
    type ReadableByteChannel_ = ReadableByteChannel;
    class PlantType {
        getName(): string;
        static get(arg0: string): Internal.PlantType;
        get name(): string
        static readonly NETHER: Internal.PlantType;
        static readonly BEACH: Internal.PlantType;
        static readonly CROP: Internal.PlantType;
        static readonly WATER: Internal.PlantType;
        static readonly PLAINS: Internal.PlantType;
        static readonly CAVE: Internal.PlantType;
        static readonly DESERT: Internal.PlantType;
    }
    type PlantType_ = PlantType;
    interface CraftingRecipe extends Internal.Recipe<Internal.CraftingContainer> {
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        abstract getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        abstract matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        abstract canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        abstract assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract category(): Internal.CraftingBookCategory;
        setGroup(group: string): void;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        abstract getId(): ResourceLocation;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
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
    type CraftingRecipe_ = CraftingRecipe;
    class DragonFireball extends Internal.AbstractHurtingProjectile {
        constructor(arg0: Internal.EntityType_<Internal.DragonFireball>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number)
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
        static readonly SPLASH_RANGE: 4.0;
    }
    type DragonFireball_ = DragonFireball;
    class BaseCoralWallFanBlock extends Internal.BaseCoralFanBlock {
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
        static readonly FACING: Internal.DirectionProperty;
    }
    type BaseCoralWallFanBlock_ = BaseCoralWallFanBlock;
    class Rect2i {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        intersect(arg0: Internal.Rect2i_): this;
        getX(): number;
        getY(): number;
        getWidth(): number;
        setY(arg0: number): void;
        contains(arg0: number, arg1: number): boolean;
        setX(arg0: number): void;
        setPosition(arg0: number, arg1: number): void;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getHeight(): number;
        get x(): number
        get y(): number
        get width(): number
        set y(arg0: number)
        set x(arg0: number)
        set width(arg0: number)
        set height(arg0: number)
        get height(): number
    }
    type Rect2i_ = Rect2i;
    class RegisterShadersEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.ResourceProvider_, arg1: Internal.List_<com.mojang.datafixers.util.Pair<Internal.ShaderInstance, Internal.Consumer<Internal.ShaderInstance>>>)
        getResourceProvider(): Internal.ResourceProvider;
        registerShader(arg0: Internal.ShaderInstance_, arg1: Internal.Consumer_<Internal.ShaderInstance>): void;
        get resourceProvider(): Internal.ResourceProvider
    }
    type RegisterShadersEvent_ = RegisterShadersEvent;
    abstract class DimensionSpecialEffects implements Internal.IForgeDimensionSpecialEffects {
        constructor(arg0: number, arg1: boolean, arg2: Internal.DimensionSpecialEffects$SkyType_, arg3: boolean, arg4: boolean)
        renderClouds(arg0: Internal.ClientLevel_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: number, arg5: number, arg6: number, arg7: Matrix4f_): boolean;
        forceBrightLightmap(): boolean;
        abstract isFoggyAt(arg0: number, arg1: number): boolean;
        static forType(arg0: Internal.DimensionType_): Internal.DimensionSpecialEffects;
        getCloudHeight(): number;
        renderSky(arg0: Internal.ClientLevel_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.Camera_, arg5: Matrix4f_, arg6: boolean, arg7: Internal.Runnable_): boolean;
        adjustLightmapColors(arg0: Internal.ClientLevel_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Vec3f_): void;
        skyType(): Internal.DimensionSpecialEffects$SkyType;
        renderSnowAndRain(arg0: Internal.ClientLevel_, arg1: number, arg2: number, arg3: Internal.LightTexture_, arg4: number, arg5: number, arg6: number): boolean;
        constantAmbientLight(): boolean;
        getSunriseColor(arg0: number, arg1: number): number[];
        hasGround(): boolean;
        abstract getBrightnessDependentFogColor(arg0: Vec3d_, arg1: number): Vec3d;
        tickRain(arg0: Internal.ClientLevel_, arg1: number, arg2: Internal.Camera_): boolean;
        get cloudHeight(): number
    }
    type DimensionSpecialEffects_ = DimensionSpecialEffects;
    class CandyItem extends Internal.Item {
        constructor(properties: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        static increaseSweetTooth(world: Internal.Level_, entity: Internal.LivingEntity_, amount: number): void;
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
        static checkSweetTooth(entity: Internal.Player_): void;
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
    type CandyItem_ = CandyItem;
    class PlayerEvent$PlayerChangedDimensionEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.ResourceKey_<Internal.Level>, arg2: Internal.ResourceKey_<Internal.Level>)
        getEntity(): Internal.LivingEntity;
        getFrom(): Internal.ResourceKey<Internal.Level>;
        getTo(): Internal.ResourceKey<Internal.Level>;
        get entity(): Internal.LivingEntity
        get from(): Internal.ResourceKey<Internal.Level>
        get to(): Internal.ResourceKey<Internal.Level>
    }
    type PlayerEvent$PlayerChangedDimensionEvent_ = PlayerEvent$PlayerChangedDimensionEvent;
    abstract class AbstractMap <K, V> implements Internal.Map<K, V> {
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        replace(arg0: K, arg1: V): V;
        containsValue(arg0: any): boolean;
        static of<K, V>(): Internal.Map<K, V>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        getOrDefault(arg0: any, arg1: V): V;
        isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        containsKey(arg0: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: K, arg1: V): V;
        get(arg0: any): V;
        remove(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        keySet(): Internal.Set<K>;
        putIfAbsent(arg0: K, arg1: V): V;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        values(): Internal.Collection<V>;
        abstract entrySet(): Internal.Set<Internal.Map$Entry<K, V>>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        putAll(arg0: Internal.Map_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        size(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        get empty(): boolean
    }
    type AbstractMap_<K, V> = AbstractMap<K, V>;
    abstract class OpeneableContainerBlockEntity extends Internal.RandomizableContainerBlockEntity implements Internal.WorldlyContainer {
        static tryClear(arg0: any): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        setChanged(): void;
        onLoad(): void;
        getSlotsForFace(side: Internal.Direction_): number[];
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getCapability(capability: Internal.Capability_<any>, facing: Internal.Direction_): Internal.LazyOptional<any>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        hasCustomName(): boolean;
        abstract canTakeItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        abstract canPlaceItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
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
        isUnused(): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        recheckOpen(): void;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get width(): number
        get maxStackSize(): number
        get renderBoundingBox(): Internal.AABB
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get unused(): boolean
        get modelData(): Internal.ModelData
        get mutable(): boolean
    }
    type OpeneableContainerBlockEntity_ = OpeneableContainerBlockEntity;
    abstract class ClientPlayerNetworkEvent extends Internal.Event {
        constructor()
        getMultiPlayerGameMode(): Internal.MultiPlayerGameMode;
        getConnection(): Internal.Connection;
        getPlayer(): Internal.LocalPlayer;
        get multiPlayerGameMode(): Internal.MultiPlayerGameMode
        get connection(): Internal.Connection
        get player(): Internal.LocalPlayer
    }
    type ClientPlayerNetworkEvent_ = ClientPlayerNetworkEvent;
    interface ValueUnwrapper {
        abstract unwrap(arg0: Internal.Context_, arg1: Internal.Scriptable_, arg2: any): any;
        (arg0: Internal.Context, arg1: Internal.Scriptable, arg2: any): any;
        readonly DEFAULT: Internal.ValueUnwrapper;
    }
    type ValueUnwrapper_ = ValueUnwrapper;
    class MinecartItem extends Internal.Item {
        constructor(arg0: Internal.AbstractMinecart$Type_, arg1: Internal.Item$Properties_)
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
    type MinecartItem_ = MinecartItem;
    class VersionRange {
        restrict(arg0: Internal.VersionRange_): this;
        getSelectedVersion(arg0: Internal.Artifact_): Internal.ArtifactVersion;
        /**
         * @deprecated
        */
        cloneOf(): this;
        matchVersion(arg0: Internal.List_<Internal.ArtifactVersion>): Internal.ArtifactVersion;
        static createFromVersionSpec(arg0: string): Internal.VersionRange;
        getRecommendedVersion(): Internal.ArtifactVersion;
        getRestrictions(): Internal.List<Internal.Restriction>;
        containsVersion(arg0: Internal.ArtifactVersion_): boolean;
        static createFromVersion(arg0: string): Internal.VersionRange;
        isSelectedVersionKnown(arg0: Internal.Artifact_): boolean;
        hasRestrictions(): boolean;
        get recommendedVersion(): Internal.ArtifactVersion
        get restrictions(): Internal.List<Internal.Restriction>
    }
    type VersionRange_ = VersionRange;
    interface Boolean2FloatFunction extends it.unimi.dsi.fastutil.Function<boolean, number> {
        composeShort(arg0: Internal.Short2BooleanFunction_): Internal.Short2FloatFunction;
        composeInt(arg0: Internal.Int2BooleanFunction_): Internal.Int2FloatFunction;
        apply(arg0: boolean): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeLong(arg0: Internal.Long2BooleanFunction_): Internal.Long2FloatFunction;
        put(arg0: boolean, arg1: number): number;
        defaultReturnValue(arg0: number): void;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Boolean2DoubleFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, boolean>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<boolean, T>;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Boolean2ReferenceFunction<T>;
        composeDouble(arg0: Internal.Double2BooleanFunction_): Internal.Double2FloatFunction;
        composeFloat(arg0: Internal.Float2BooleanFunction_): Internal.Float2FloatFunction;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Boolean2CharFunction;
        composeObject<T>(arg0: Internal.Object2BooleanFunction_<T>): Internal.Object2FloatFunction<T>;
        composeChar(arg0: Internal.Char2BooleanFunction_): Internal.Char2FloatFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Boolean2ObjectFunction<T>;
        remove(arg0: boolean): number;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Boolean2ByteFunction;
        composeByte(arg0: Internal.Byte2BooleanFunction_): Internal.Byte2FloatFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        containsKey(arg0: boolean): boolean;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2BooleanFunction_<T>): Internal.Reference2FloatFunction<T>;
        abstract get(arg0: boolean): number;
        clear(): void;
        getOrDefault(arg0: boolean, arg1: number): number;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Boolean2LongFunction;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Boolean2ShortFunction;
        identity<T>(): Internal.Function<T, T>;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Boolean2IntFunction;
        /**
         * @deprecated
        */
        put(arg0: boolean, arg1: number): number;
        (arg0: boolean): number;
    }
    type Boolean2FloatFunction_ = Boolean2FloatFunction;
    class MapRenderer implements Internal.AutoCloseable {
        constructor(arg0: Internal.TextureManager_)
        close(): void;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: Internal.MapItemSavedData_, arg4: boolean, arg5: number): void;
        resetData(): void;
        update(arg0: number, arg1: Internal.MapItemSavedData_): void;
    }
    type MapRenderer_ = MapRenderer;
    interface FunctionFactory$Arg3 extends Internal.FunctionFactory$FuncSupplier {
        create(args: Internal.Unit_[]): Internal.Unit;
        abstract createArg(arg0: Internal.Unit_, arg1: Internal.Unit_, arg2: Internal.Unit_): Internal.Unit;
        (arg0: Internal.Unit, arg1: Internal.Unit, arg2: Internal.Unit): Internal.Unit_;
    }
    type FunctionFactory$Arg3_ = FunctionFactory$Arg3;
    interface ParticleOptions {
        abstract getType(): Internal.ParticleType<any>;
        abstract writeToString(): string;
        abstract writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        get type(): Internal.ParticleType<any>
    }
    type ParticleOptions_ = ParticleOptions;
    class ClientAdvancements {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.WorldSessionTelemetryManager_)
        setSelectedTab(arg0: Internal.Advancement_, arg1: boolean): void;
        setListener(arg0: Internal.ClientAdvancements$Listener_): void;
        getAdvancements(): Internal.AdvancementList;
        update(arg0: Internal.ClientboundUpdateAdvancementsPacket_): void;
        set listener(arg0: Internal.ClientAdvancements$Listener_)
        get advancements(): Internal.AdvancementList
    }
    type ClientAdvancements_ = ClientAdvancements;
    class RandomOffsetPlacement extends Internal.PlacementModifier {
        static vertical(arg0: Internal.IntProvider_): Internal.RandomOffsetPlacement;
        static of(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_): Internal.RandomOffsetPlacement;
        static horizontal(arg0: Internal.IntProvider_): Internal.RandomOffsetPlacement;
        static readonly CODEC: Internal.Codec<Internal.RandomOffsetPlacement>;
    }
    type RandomOffsetPlacement_ = RandomOffsetPlacement;
    class ServerStatus$Favicon extends Internal.Record {
        constructor(iconBytes: number[])
        iconBytes(): number[];
        static readonly CODEC: Internal.Codec<Internal.ServerStatus$Favicon>;
    }
    type ServerStatus$Favicon_ = ServerStatus$Favicon;
    class VanishingCurseEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type VanishingCurseEnchantment_ = VanishingCurseEnchantment;
    class InetAddress implements Internal.Serializable {
        isMulticastAddress(): boolean;
        isReachable(arg0: number): boolean;
        isSiteLocalAddress(): boolean;
        isLinkLocalAddress(): boolean;
        isReachable(arg0: Internal.NetworkInterface_, arg1: number, arg2: number): boolean;
        isMCLinkLocal(): boolean;
        isLoopbackAddress(): boolean;
        static getLocalHost(): Internal.InetAddress;
        isAnyLocalAddress(): boolean;
        static getByAddress(arg0: string, arg1: number[]): Internal.InetAddress;
        isMCSiteLocal(): boolean;
        getHostAddress(): string;
        isMCGlobal(): boolean;
        isMCNodeLocal(): boolean;
        getCanonicalHostName(): string;
        static getAllByName(arg0: string): Internal.InetAddress[];
        getHostName(): string;
        isMCOrgLocal(): boolean;
        static getByName(arg0: string): Internal.InetAddress;
        static getLoopbackAddress(): Internal.InetAddress;
        static getByAddress(arg0: number[]): Internal.InetAddress;
        getAddress(): number[];
        get multicastAddress(): boolean
        get siteLocalAddress(): boolean
        get linkLocalAddress(): boolean
        get MCLinkLocal(): boolean
        get loopbackAddress(): boolean
        get localHost(): Internal.InetAddress
        get anyLocalAddress(): boolean
        get MCSiteLocal(): boolean
        get hostAddress(): string
        get MCGlobal(): boolean
        get MCNodeLocal(): boolean
        get canonicalHostName(): string
        get hostName(): string
        get MCOrgLocal(): boolean
        get loopbackAddress(): Internal.InetAddress
        get address(): number[]
    }
    type InetAddress_ = InetAddress;
    class ForgeFlowingFluid$Source extends Internal.ForgeFlowingFluid {
        constructor(arg0: any_)
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
    type ForgeFlowingFluid$Source_ = ForgeFlowingFluid$Source;
    class RegularImmutableList <E> extends Internal.ImmutableList<E> {
        static of<E>(...arg0: E[]): Internal.List<E>;
        get(arg0: number): E;
        subList(arg0: number, arg1: number): Internal.List<any>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        stream(): Internal.Stream<E>;
        iterator(): Internal.Iterator<any>;
        listIterator(arg0: number): Internal.UnmodifiableListIterator<E>;
        abstract toArray<T>(arg0: T[]): T[];
        spliterator(): Internal.Spliterator<E>;
        parallelStream(): Internal.Stream<E>;
        listIterator(): Internal.ListIterator<any>;
    }
    type RegularImmutableList_<E> = RegularImmutableList<E>;
    interface Short2BooleanFunction extends it.unimi.dsi.fastutil.Function<number, boolean>, Internal.IntPredicate {
        apply(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        remove(arg0: number): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        or(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        negate(): Internal.IntPredicate;
        andThenByte(arg0: Internal.Boolean2ByteFunction_): Internal.Short2ByteFunction;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2BooleanFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<boolean, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2BooleanFunction<T>;
        andThenObject<T>(arg0: Internal.Boolean2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        /**
         * @deprecated
        */
        get(arg0: any): boolean;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2BooleanFunction;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2BooleanFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenLong(arg0: Internal.Boolean2LongFunction_): Internal.Short2LongFunction;
        defaultReturnValue(): boolean;
        andThenDouble(arg0: Internal.Boolean2DoubleFunction_): Internal.Short2DoubleFunction;
        abstract get(arg0: number): boolean;
        and(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, boolean>;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2BooleanFunction<T>;
        containsKey(arg0: number): boolean;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2BooleanFunction;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        andThenShort(arg0: Internal.Boolean2ShortFunction_): Internal.Short2ShortFunction;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2BooleanFunction;
        put(arg0: number, arg1: boolean): boolean;
        size(): number;
        andThenReference<T>(arg0: Internal.Boolean2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        clear(): void;
        andThenFloat(arg0: Internal.Boolean2FloatFunction_): Internal.Short2FloatFunction;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2BooleanFunction;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        andThenInt(arg0: Internal.Boolean2IntFunction_): Internal.Short2IntFunction;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: boolean): void;
        andThenChar(arg0: Internal.Boolean2CharFunction_): Internal.Short2CharFunction;
        (arg0: number): boolean;
    }
    type Short2BooleanFunction_ = Short2BooleanFunction;
    interface IRecipeSlotsView {
        abstract findSlotByName(arg0: string): Internal.Optional<Internal.IRecipeSlotView>;
        abstract getSlotViews(): Internal.List<Internal.IRecipeSlotView>;
        abstract getSlotViews(arg0: Internal.RecipeIngredientRole_): Internal.List<Internal.IRecipeSlotView>;
        get slotViews(): Internal.List<Internal.IRecipeSlotView>
    }
    type IRecipeSlotsView_ = IRecipeSlotsView;
    class ServerboundPlayerCommandPacket$Action extends Internal.Enum<Internal.ServerboundPlayerCommandPacket$Action> {
        static values(): Internal.ServerboundPlayerCommandPacket$Action[];
        static valueOf(arg0: string): Internal.ServerboundPlayerCommandPacket$Action;
        static readonly START_SPRINTING: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly STOP_SPRINTING: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly START_RIDING_JUMP: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly PRESS_SHIFT_KEY: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly STOP_SLEEPING: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly STOP_RIDING_JUMP: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly OPEN_INVENTORY: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly START_FALL_FLYING: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly RELEASE_SHIFT_KEY: Internal.ServerboundPlayerCommandPacket$Action;
    }
    type ServerboundPlayerCommandPacket$Action_ = "press_shift_key" | "stop_sprinting" | "start_sprinting" | "start_fall_flying" | ServerboundPlayerCommandPacket$Action | "open_inventory" | "release_shift_key" | "start_riding_jump" | "stop_sleeping" | "stop_riding_jump";
    class WardenSpawnTracker {
        constructor(arg0: number, arg1: number, arg2: number)
        getWarningLevel(): number;
        setWarningLevel(arg0: number): void;
        reset(): void;
        tick(): void;
        static tryWarn(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ServerPlayer_): Internal.OptionalInt;
        get warningLevel(): number
        set warningLevel(arg0: number)
        static readonly CODEC: Internal.Codec<Internal.WardenSpawnTracker>;
        static readonly MAX_WARNING_LEVEL: 4;
    }
    type WardenSpawnTracker_ = WardenSpawnTracker;
    interface IConfigEvent {
        unloading(arg0: Internal.ModConfig_): this;
        self<T extends Internal.Event & Internal.IConfigEvent>(): T;
        loading(arg0: Internal.ModConfig_): this;
        abstract getConfig(): Internal.ModConfig;
        reloading(arg0: Internal.ModConfig_): this;
        get config(): Internal.ModConfig
        (): Internal.ModConfig_;
        readonly CONFIGCONFIG: Internal.IConfigEvent$ConfigConfig;
    }
    type IConfigEvent_ = IConfigEvent;
    class RedstoneContactItem extends Internal.BlockItem {
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
    type RedstoneContactItem_ = RedstoneContactItem;
    class MerchantOffer {
        constructor(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number)
        constructor(arg0: Internal.CompoundTag_)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: number, arg3: number, arg4: number)
        getSpecialPriceDiff(): number;
        needsRestock(): boolean;
        shouldRewardExp(): boolean;
        increaseUses(): void;
        resetSpecialPriceDiff(): void;
        getBaseCostA(): Internal.ItemStack;
        isOutOfStock(): boolean;
        getMaxUses(): number;
        getPriceMultiplier(): number;
        createTag(): Internal.CompoundTag;
        getUses(): number;
        resetUses(): void;
        updateDemand(): void;
        assemble(): Internal.ItemStack;
        take(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        addToSpecialPriceDiff(arg0: number): void;
        getResult(): Internal.ItemStack;
        getXp(): number;
        setToOutOfStock(): void;
        setSpecialPriceDiff(arg0: number): void;
        getCostB(): Internal.ItemStack;
        satisfiedBy(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getDemand(): number;
        getCostA(): Internal.ItemStack;
        get specialPriceDiff(): number
        get baseCostA(): Internal.ItemStack
        get outOfStock(): boolean
        get maxUses(): number
        get priceMultiplier(): number
        get uses(): number
        get result(): Internal.ItemStack
        get xp(): number
        set specialPriceDiff(arg0: number)
        get costB(): Internal.ItemStack
        get demand(): number
        get costA(): Internal.ItemStack
    }
    type MerchantOffer_ = MerchantOffer;
    interface FunctionFactory$Arg1 extends Internal.FunctionFactory$FuncSupplier {
        abstract createArg(arg0: Internal.Unit_): Internal.Unit;
        create(args: Internal.Unit_[]): Internal.Unit;
        (arg0: Internal.Unit): Internal.Unit_;
    }
    type FunctionFactory$Arg1_ = FunctionFactory$Arg1;
    class TutorialToast implements Internal.Toast {
        constructor(arg0: any_, arg1: Internal.Component_, arg2: Internal.Component_, arg3: boolean)
        slotCount(): number;
        render(arg0: Internal.GuiGraphics_, arg1: Internal.ToastComponent_, arg2: number): Internal.Toast$Visibility;
        getToken(): any;
        hide(): void;
        width(): number;
        height(): number;
        updateProgress(arg0: number): void;
        get token(): any
        static readonly PROGRESS_BAR_WIDTH: 154;
        static readonly PROGRESS_BAR_HEIGHT: 1;
        static readonly PROGRESS_BAR_Y: 28;
        static readonly PROGRESS_BAR_X: 3;
    }
    type TutorialToast_ = TutorialToast;
    interface FunctionFactory$Arg2 extends Internal.FunctionFactory$FuncSupplier {
        create(args: Internal.Unit_[]): Internal.Unit;
        abstract createArg(arg0: Internal.Unit_, arg1: Internal.Unit_): Internal.Unit;
        (arg0: Internal.Unit, arg1: Internal.Unit): Internal.Unit_;
    }
    type FunctionFactory$Arg2_ = FunctionFactory$Arg2;
    class SoftFluid$Builder {
        constructor(stillTexture: ResourceLocation_, flowingTexture: ResourceLocation_)
        constructor(fluid: Internal.Fluid_)
        addEqFluid(fluid: Internal.Fluid_): this;
        drink(item: Internal.Item_): this;
        containers(containerList: Internal.FluidContainerList_): this;
        tinted(): this;
        emptyHandContainerItem(filledItem: Internal.Item_, itemCapacity: number): this;
        copyTexturesFrom(fluidRes: ResourceLocation_): this;
        luminosity(luminosity: number): this;
        containerItem(filledItem: Internal.Item_, emptyItem: Internal.Item_, itemCapacity: number): this;
        textures(still: ResourceLocation_, flow: ResourceLocation_): this;
        containerItem(filledItem: Internal.Item_, emptyItem: Internal.Item_, itemCapacity: number, fillSound: Internal.SoundEvent_, emptySound: Internal.SoundEvent_): this;
        bottle(item: Internal.Item_): this;
        keepNBTFromItem(...NBTkey: string[]): this;
        food(foodProvider: Internal.FoodProvider_): this;
        stew(item: Internal.Item_): this;
        food(item: Internal.Item_): this;
        bucket(item: Internal.Item_): this;
        fromMod(s: string): this;
        copyTexturesFrom(fluidRes: string): this;
        food(item: Internal.Item_, foodDivider: number): this;
        onlyFlowingTinted(): this;
        tintMethod(tint: Internal.SoftFluid$TintMethod_): this;
        translationKey(translationKey: string): this;
        color(tintColor: number): this;
        build(): Internal.SoftFluid;
        noTint(): this;
        bowl(item: Internal.Item_): this;
    }
    type SoftFluid$Builder_ = SoftFluid$Builder;
    class CuttingBoardBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        static spawnCuttingParticles(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: number): void;
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
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type CuttingBoardBlock_ = CuttingBoardBlock;
    interface IIngredientAcceptor <THIS extends Internal.IIngredientAcceptor<THIS>> {
        abstract addIngredients<I>(arg0: Internal.IIngredientType_<I>, arg1: Internal.List_<I>): THIS;
        addIngredients(arg0: Internal.Ingredient_): THIS;
        abstract addIngredient<I>(arg0: Internal.IIngredientType_<I>, arg1: I): THIS;
        addItemStacks(arg0: Internal.List_<Internal.ItemStack>): THIS;
        abstract addFluidStack(arg0: Internal.Fluid_, arg1: number, arg2: Internal.CompoundTag_): THIS;
        addItemStack(arg0: Internal.ItemStack_): THIS;
        abstract addFluidStack(arg0: Internal.Fluid_, arg1: number): THIS;
        abstract addIngredientsUnsafe(arg0: Internal.List_<any>): THIS;
    }
    type IIngredientAcceptor_<THIS extends Internal.IIngredientAcceptor<THIS>> = IIngredientAcceptor<THIS>;
    interface SculkBehaviour {
        depositCharge(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        attemptSpreadVein(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Collection_<Internal.Direction>, arg4: boolean): boolean;
        abstract attemptUseCharge(arg0: Internal.SculkSpreader$ChargeCursor_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.SculkSpreader_, arg5: boolean): number;
        canChangeBlockStateOnSpread(): boolean;
        getSculkSpreadDelay(): number;
        onDischarged(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        updateDecayDelay(arg0: number): number;
        get sculkSpreadDelay(): number
        (arg0: Internal.SculkSpreader$ChargeCursor, arg1: Internal.LevelAccessor, arg2: BlockPos, arg3: Internal.RandomSource, arg4: Internal.SculkSpreader, arg5: boolean): number;
        readonly DEFAULT: Internal.SculkBehaviour;
    }
    type SculkBehaviour_ = SculkBehaviour;
    class BeaconMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Container_, arg2: any_, arg3: any_)
        constructor(arg0: number, arg1: Internal.Container_)
        updateEffects(arg0: Internal.Optional_<Internal.MobEffect>, arg1: Internal.Optional_<Internal.MobEffect>): void;
        hasPayment(): boolean;
        getPrimaryEffect(): Internal.MobEffect;
        getLevels(): number;
        getSecondaryEffect(): Internal.MobEffect;
        get primaryEffect(): Internal.MobEffect
        get levels(): number
        get secondaryEffect(): Internal.MobEffect
    }
    type BeaconMenu_ = BeaconMenu;
    class TatamiBlock extends Internal.Block {
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
        static readonly PAIRED: Internal.BooleanProperty;
    }
    type TatamiBlock_ = TatamiBlock;
}
declare namespace org.apache.maven.artifact.metadata {
    /**
     * @deprecated
    */
    interface ArtifactMetadata extends Internal.ArtifactMetadata {
        abstract merge(arg0: Internal.ArtifactMetadata_): void;
        abstract storedInArtifactVersionDirectory(): boolean;
        abstract storedInGroupDirectory(): boolean;
        abstract storeInLocalRepository(arg0: Internal.ArtifactRepository_, arg1: Internal.ArtifactRepository_): void;
        abstract getKey(): any;
        abstract getGroupId(): string;
        abstract getLocalFilename(arg0: Internal.ArtifactRepository_): string;
        abstract merge(arg0: org.apache.maven.artifact.metadata.ArtifactMetadata_): void;
        abstract getRemoteFilename(): string;
        abstract getBaseVersion(): string;
        abstract extendedToString(): string;
        abstract getArtifactId(): string;
        get key(): any
        get groupId(): string
        get remoteFilename(): string
        get baseVersion(): string
        get artifactId(): string
    }
    type ArtifactMetadata_ = ArtifactMetadata;
}
declare namespace net.darkhax.bookshelf.api.commands.args {
    class SingletonArgumentInfo$Template <T extends Internal.ArgumentType<any>> implements Internal.ArgumentTypeInfo$Template<T> {
        constructor(arg0: Internal.Supplier_<T>, arg1: Internal.ArgumentTypeInfo_<T, any>)
        type(): Internal.ArgumentTypeInfo<T, any>;
        instantiate(arg0: Internal.CommandBuildContext_): T;
    }
    type SingletonArgumentInfo$Template_<T extends Internal.ArgumentType<any>> = SingletonArgumentInfo$Template<T>;
}
