import { KnitServer as Knit, Component } from "@rbxts/knit";
import { Workspace, ServerStorage, ServerScriptService, Players } from "@rbxts/services";

import { makeHello } from "Shared/HelloWorldModule";

Knit.AddServices(ServerScriptService.Services);
Knit.Start();
Component.Auto(ServerScriptService.Components);

// Spawn the lobby.
const lobbyModel = ServerStorage.Assets.Maps.Lobbies.FindFirstChildOfClass("Model");
const newLobby = lobbyModel!.Clone();
newLobby.Parent = Workspace;

print(makeHello("main.server.ts"));
