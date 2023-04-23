import { Service, OnInit } from "@flamework/core";
import { Players, ServerStorage } from "@rbxts/services"

@Service()
export class LobbyMapService implements OnInit {
    onInit(): void {
        print("LobbyMapService initialized!")
    }

    LoadMap(mapName: string): void {
        
    }
}