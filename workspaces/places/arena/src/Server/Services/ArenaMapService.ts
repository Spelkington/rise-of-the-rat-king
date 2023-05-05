import { KnitServer as Knit, Signal, RemoteProperty, RemoteSignal } from "@rbxts/knit";
import { Players } from "@rbxts/services";

declare global {
  interface KnitServices {
    ArenaMapService: typeof ArenaMapService;
  }
}

const ArenaMapService = Knit.CreateService({
  Name: "ArenaMapService",

  Client: {},

  // Initialize
  KnitInit() {
    print("Hello!");
  },
});

export default ArenaMapService;
