import { KnitServer as Knit, Signal, RemoteProperty, RemoteSignal } from "@rbxts/knit";
import { Workspace, Players, ServerStorage } from "@rbxts/services";
import Rat from "../../Shared/RatLib/Rat";

declare global {
  interface KnitServices {
    RatService: typeof RatService;
  }
}

const RatService = Knit.CreateService({
  Name: "RatService",

  Rats: new Map<Player, Array<Rat>>(),

  Client: {},

  SpawnRats(player: Player, amount: number) {
    const character = player.Character;
    assert(character);

    for (let i = 0; i <= amount; i++) {
      const newRat = Rat.Spawn(player.Character!.GetPivot()!);
      this.Rats.get(player)!.push(newRat);
    }
  },

  GetPlayerRats(player: Player) {},

  GetRatFromModel(player: Player, model: Model): Rat | undefined {
    return undefined;
  },

  OnPlayerSpawned(player: Player) {
    this.Rats.set(player, new Array<Rat>());
    player.CharacterAdded.Connect(() => {
      this.SpawnRats(player, 5);
    });
  },

  // Initialize
  KnitInit() {
    Players.PlayerAdded.Connect((player) => this.OnPlayerSpawned(player));
  },
});

export default RatService;
