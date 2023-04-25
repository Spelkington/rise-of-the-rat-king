import { KnitServer as Knit, Signal, RemoteProperty, RemoteSignal } from "@rbxts/knit";
import { Players } from "@rbxts/services";

declare global {
	interface KnitServices {
		PointsService: typeof PointsService;
	}
}

const PointsService = Knit.CreateService({
	Name: "PointsService",

	// Server-exposed signals/fields:
	PointsPerPlayer: new Map<Player, number>(),
	PointsChanged: new Signal<(player: Player, points: number) => void>(),

	Client: {
		// Client exposed signals:
		PointsChanged: new RemoteSignal<(points: number) => void>(),
		GiveMePoints: new RemoteSignal<() => void>(),

		// Client exposed properties:
		MostPoints: new RemoteProperty(0),

		// Client exposed GetPoints method:
		GetPoints(player: Player) {
			return this.Server.GetPoints(player);
		},
	},

	// Add Points:
	AddPoints(player: Player, amount: number) {
		let points = this.GetPoints(player);
		points += amount;
		this.PointsPerPlayer.set(player, points);
		if (amount !== 0) {
			this.PointsChanged.Fire(player, points);
			this.Client.PointsChanged.Fire(player, points);
		}
		if (points > this.Client.MostPoints.Get()) {
			this.Client.MostPoints.Set(points);
		}
	},

	// Get Points:
	GetPoints(player: Player) {
		const points = this.PointsPerPlayer.get(player);
		return points ?? 0;
	},

	// Initialize
	KnitInit() {
		const rng = new Random();

		this.Client.GiveMePoints.Connect(player => {
			const points = rng.NextInteger(0, 10);
			this.AddPoints(player, points);
			print(`Gave ${player.Name} ${points} points`);
		});

		Players.PlayerRemoving.Connect(player => this.PointsPerPlayer.delete(player));
	},
});

export = PointsService;