import { Component, Janitor } from "@rbxts/knit";

class Lava implements Component.ComponentClass {
  public static Tag = "Lava";

  private janitor = new Janitor();

  constructor(instance: Instance) {
    assert(instance.IsA("BasePart"));
    this.janitor.Add(
      instance.Touched.Connect((otherPart) => otherPart.Parent?.FindFirstChildOfClass("Humanoid")?.TakeDamage(100)),
    );
  }

  public Destroy() {
    this.janitor.Destroy();
  }
}

export = Lava;
