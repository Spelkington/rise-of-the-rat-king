import { Workspace, ServerStorage } from "@rbxts/services"

const lobbyModel = ServerStorage
    .FindFirstChild("Assets")!
    .FindFirstChild("Maps")!
    .FindFirstChild("Lobbies")!
    .FindFirstChild("Lobby")
;

const newLobbyModel = lobbyModel?.Clone();
newLobbyModel!.Parent = Workspace;