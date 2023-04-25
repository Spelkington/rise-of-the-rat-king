import { KnitServer as Knit, Component } from "@rbxts/knit";
import { ServerScriptService } from "@rbxts/services";
import { makeHello } from "Shared/HelloWorldModule";

Knit.AddServices(ServerScriptService.Services);
Knit.Start();
Component.Auto(ServerScriptService.Components);

print(makeHello("main.server.ts"));
