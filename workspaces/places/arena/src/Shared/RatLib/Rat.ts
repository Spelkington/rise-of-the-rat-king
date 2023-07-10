import { Component, Janitor } from "@rbxts/knit";
import { ServerStorage, Workspace } from "@rbxts/services";

class Rat implements Component.ComponentClass {
  public static Tag = "Rat";
  public static RAT_MODEL = ServerStorage.Assets.BaseModels.BasePlayer;
  // public static RAT_AI_SCRIPT

  public Model: ServerStorage["Assets"]["BaseModels"]["BasePlayer"];

  private janitor = new Janitor();

  public static Spawn(position: CFrame): Rat {
    const clone = this.RAT_MODEL.Clone();
    clone.PivotTo(position);
    clone.Parent = Workspace;
    clone.WaitForChild("Instantiated");

    // TODO: There must be a better way to go about this
    return this as unknown as Rat;
  }

  constructor(instance: Instance) {
    // TODO: Assertion
    this.Model = instance as ServerStorage["Assets"]["BaseModels"]["BasePlayer"];

    const instantiatedFlag = new Instance("ObjectValue");
    instantiatedFlag.Name = "Instantiated";
    instantiatedFlag.Parent = this.Model;
  }

  public Destroy() {
    this.janitor.Destroy();
  }
}

export = Rat;
