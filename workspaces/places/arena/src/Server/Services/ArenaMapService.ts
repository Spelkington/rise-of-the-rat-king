import { KnitServer as Knit, Signal, RemoteProperty, RemoteSignal } from "@rbxts/knit";
import { Workspace, Players, ServerStorage } from "@rbxts/services";

const ARENA_MAP_STORAGE: Folder = ServerStorage.Assets.Maps.Arenas;

// TODO: Make this service configurable (dependency injection with a ConfigurationService?)
// so that it can be used without copypasta between Arena and Lobby

declare global {
  interface KnitServices {
    ArenaMapService: typeof ArenaMapService;
  }
}

const ArenaMapService = Knit.CreateService({
  Name: "ArenaMapService",

  Client: {
    IsMapLoaded: new RemoteProperty(false),
  },

  ChooseMap(mapStorage: Folder) {
    const mapList = mapStorage.GetChildren();

    assert(mapList.size() > 0, `No maps found in ${mapStorage.Name}.`);

    const mapChoiceIndex = math.random() * mapList.size();
    const mapChoice = mapList[math.floor(mapChoiceIndex)];

    // TODO: Pre-assert that storage contains only models.
    assert(mapChoice.IsA("Model"), `Chosen Map {} was not of type Model.`);

    return mapChoice;
  },

  LoadMap(mapStorage: Folder) {
    const mapChoice = this.ChooseMap(mapStorage);
    const mapModel: Model = mapChoice.Clone();

    // Move new map model to center of workspace
    mapModel.PivotTo(new CFrame());
    mapModel.Parent = Workspace;
  },

  // Initialize
  KnitInit() {
    // Load map, enabling spawning and signalling clients once done
    this.LoadMap(ARENA_MAP_STORAGE);
    this.Client.IsMapLoaded.Set(true);
    Players.CharacterAutoLoads = true;
  },
});

export default ArenaMapService;
