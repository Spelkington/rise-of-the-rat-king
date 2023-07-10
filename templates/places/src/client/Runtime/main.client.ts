import { KnitClient as Knit } from "@rbxts/knit";

const PointsService = Knit.GetService("PointsService");

function PointsChanged(points: number) {
  print("My points:", points);
}

// Get points and listen for changes:
const initialPoints = PointsService.GetPoints();
PointsChanged(initialPoints);
PointsService.PointsChanged.Connect(PointsChanged);

// Ask server to give points randomly:
PointsService.GiveMePoints.Fire();

// Grab MostPoints value:
let mostPoints = PointsService.MostPoints.Get();

// Keep MostPoints value updated:
PointsService.MostPoints.Changed.Connect((newMostPoints) => {
  mostPoints = newMostPoints;
});

// Advanced example, using promises to get points:
PointsService.GetPointsPromise().then((points) => {
  print("Got points:", points);
});
