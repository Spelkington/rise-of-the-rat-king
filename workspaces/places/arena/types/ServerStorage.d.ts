interface ServerStorage extends Instance {
  TagList: Folder & {
    Lava: Configuration;
    Rat: Configuration;
  };
  Assets: Folder & {
    PropCat: MeshPart;
    SewerBaseplate: Part & {
      Texture: Texture;
    };
    Maps: Folder & {
      Lobbies: Folder & {
        Lobby: Model & {
          Union: UnionOperation;
          Platforms: Model;
          ["Throne Heap"]: Model & {
            BumperCar2: Model;
            Pile: UnionOperation;
            Minivan: Model & {
              Antenna: Part & {
                Mesh: SpecialMesh;
                Weld: Weld;
              };
              Fill: Part & {
                Mesh: BlockMesh;
                Hole: Hole;
              };
            };
            FlamingBus: Model & {
              DS: Part;
              BASE: Part;
              Door1: Part;
              Door2: Part;
            };
            Sign: Model & {
              Planet: Part;
              PlanetRing: Part & {
                Mesh: SpecialMesh;
              };
              Post: Part;
            };
            P2: Part & {
              Mesh: SpecialMesh;
            };
            ThronePile: Model;
          };
          SpawnLocation: SpawnLocation & {
            Decal: Decal;
          };
          Walls: Model;
        };
      };
      Arenas: Folder & {
        TestArena: Model & {
          LockedHillBricks: Model;
          Trees: Model;
          BlackRock: Model & {
            SecretPassage: Model;
          };
          BlackrockCastle: Model & {
            Grill: Model;
            SecretStair: Model;
            SecretWall: Model;
            ["TeamBeacon Red"]: Model & {
              Top: Part & {
                Weld: Weld;
              };
              Center: Part & {
                BodyVelocity: BodyVelocity;
                BodyPosition: BodyPosition;
              };
              Bottom: Part;
              Front: Part;
              Right: Part & {
                Weld: Weld;
              };
              Left: Part;
              Back: Part;
            };
          };
          Tower: Model & {
            ["TeamBeacon Black"]: Model & {
              Top: Part & {
                Weld: Weld;
              };
              Center: Part & {
                BodyVelocity: BodyVelocity;
                Weld: Weld;
                BodyPosition: BodyPosition;
              };
              Bottom: Part & {
                Weld: Weld;
              };
              Front: Part & {
                Weld: Weld;
              };
              Right: Part;
              Left: Part & {
                Weld: Weld;
              };
              Back: Part & {
                Weld: Weld;
              };
            };
            PL3Trampoline: Model & {
              Bouncer: Model;
            };
          };
          Room: Model & {
            ["Tower Platform"]: Part;
            ["Brickyard Base"]: Part;
            Floor: Part;
            ["Front back path"]: Part;
            ["Front Wall"]: Part & {
              Weld: Weld;
            };
            ["Left path"]: Part;
            ["Back Wall"]: Part;
            ["Left Wall"]: Part;
            ["Right Wall"]: Part;
            ["Castle Platform"]: Part;
            ["Back Ledge"]: Part;
            ["House Platform"]: Part & {
              Weld: Weld;
            };
            ["Right path"]: Part & {
              Snap: Snap;
            };
          };
          Hideout: Model & {
            ArchBridge: Model;
            BattleArmorStand: Model & {
              BattleArmor: Part;
            };
            ["TeamBeacon Green"]: Model & {
              Top: Part & {
                Weld: Weld;
              };
              Center: Part & {
                BodyVelocity: BodyVelocity;
                BodyPosition: BodyPosition;
              };
              Bottom: Part & {
                Weld: Weld;
              };
              Front: Part & {
                Weld: Weld;
              };
              Right: Part & {
                Weld: Weld;
              };
              Left: Part & {
                Weld: Weld;
              };
              Back: Part & {
                Weld: Weld;
              };
            };
          };
          SpawnLocation: SpawnLocation & {
            Decal: Decal;
          };
          LostTemple: Model & {
            Ruins: Model & {
              Model: Model & {
                Column: Model;
              };
            };
            ["TeamBeacon Blue"]: Model & {
              Top: Part;
              Center: Part & {
                BodyVelocity: BodyVelocity;
                BodyPosition: BodyPosition;
              };
              Bottom: Part;
              Front: Part;
              Right: Part;
              Left: Part;
              Back: Part;
            };
          };
          MudHill: Model & {
            RuinRock: Model;
          };
          ["Overhead Ramp"]: Model & {
            ["Climb Ramp"]: Model & {
              Block: Part & {
                Rotate: Rotate;
              };
            };
          };
        };
      };
    };
    PlayerDummy: Model & {
      RightArm: Part;
      RightLeg: Part;
      Head: Part;
      Torso: Part;
      LeftArm: Part;
      LeftLeg: Part;
    };
    Consumables: Folder & {
      CheeseWheel: Model & {
        CheeseWheel: MeshPart;
      };
    };
    LobbyPlayerCount: Model;
    Baseplate: Model & {
      Baseplate: Part & {
        Texture: Texture;
      };
    };
    Lava: Part;
    ArenaPlayerCount: Model;
    BaseModels: Folder & {
      BaseRat: Actor & {
        Humanoid: Humanoid & {
          Animator: Animator;
        };
        LeftFoot: MeshPart & {
          LeftAnkleRigAttachment: Attachment;
          OriginalSize: Vector3Value;
          LeftAnkle: Motor6D;
        };
        RightHand: MeshPart & {
          RightWristRigAttachment: Attachment;
          RightWrist: Motor6D;
          RightGripAttachment: Attachment;
          OriginalSize: Vector3Value;
        };
        HumanoidRootPart: Part & {
          RootRigAttachment: Attachment;
          OriginalSize: Vector3Value;
        };
        RightLowerLeg: MeshPart & {
          RightKneeRigAttachment: Attachment;
          RightAnkleRigAttachment: Attachment;
          OriginalSize: Vector3Value;
          RightKnee: Motor6D;
        };
        LeftUpperLeg: MeshPart & {
          LeftHip: Motor6D;
          OriginalSize: Vector3Value;
          LeftHipRigAttachment: Attachment;
          LeftKneeRigAttachment: Attachment;
        };
        LeftLowerLeg: MeshPart & {
          OriginalSize: Vector3Value;
          LeftKnee: Motor6D;
          LeftAnkleRigAttachment: Attachment;
          LeftKneeRigAttachment: Attachment;
        };
        LowerTorso: MeshPart & {
          WaistCenterAttachment: Attachment;
          LeftHipRigAttachment: Attachment;
          Root: Motor6D;
          RootRigAttachment: Attachment;
          RightHipRigAttachment: Attachment;
          OriginalSize: Vector3Value;
          WaistRigAttachment: Attachment;
          WaistBackAttachment: Attachment;
          WaistFrontAttachment: Attachment;
        };
        Head: Part & {
          HatAttachment: Attachment;
          OriginalSize: Vector3Value;
          NeckRigAttachment: Attachment;
          FaceFrontAttachment: Attachment;
          HairAttachment: Attachment;
          Neck: Motor6D;
          FaceCenterAttachment: Attachment;
        };
        UpperTorso: MeshPart & {
          RightCollarAttachment: Attachment;
          BodyBackAttachment: Attachment;
          NeckRigAttachment: Attachment;
          LeftCollarAttachment: Attachment;
          Waist: Motor6D;
          OriginalSize: Vector3Value;
          RightShoulderRigAttachment: Attachment;
          BodyFrontAttachment: Attachment;
          WaistRigAttachment: Attachment;
          LeftShoulderRigAttachment: Attachment;
          NeckAttachment: Attachment;
        };
        LeftUpperArm: MeshPart & {
          LeftShoulderRigAttachment: Attachment;
          OriginalSize: Vector3Value;
          LeftShoulderAttachment: Attachment;
          LeftElbowRigAttachment: Attachment;
          LeftShoulder: Motor6D;
        };
        RightLowerArm: MeshPart & {
          RightWristRigAttachment: Attachment;
          RightElbow: Motor6D;
          OriginalSize: Vector3Value;
          RightElbowRigAttachment: Attachment;
        };
        LeftHand: MeshPart & {
          LeftWrist: Motor6D;
          LeftGripAttachment: Attachment;
          OriginalSize: Vector3Value;
          LeftWristRigAttachment: Attachment;
        };
        LeftLowerArm: MeshPart & {
          LeftElbowRigAttachment: Attachment;
          LeftElbow: Motor6D;
          OriginalSize: Vector3Value;
          LeftWristRigAttachment: Attachment;
        };
        RightUpperArm: MeshPart & {
          OriginalSize: Vector3Value;
          RightElbowRigAttachment: Attachment;
          RightShoulderRigAttachment: Attachment;
          RightShoulderAttachment: Attachment;
          RightShoulder: Motor6D;
        };
        RightUpperLeg: MeshPart & {
          RightKneeRigAttachment: Attachment;
          RightHip: Motor6D;
          OriginalSize: Vector3Value;
          RightHipRigAttachment: Attachment;
        };
        RightFoot: MeshPart & {
          RightAnkleRigAttachment: Attachment;
          OriginalSize: Vector3Value;
          RightAnkle: Motor6D;
        };
      };
      BasePlayer: Actor & {
        Humanoid: Humanoid & {
          Animator: Animator;
        };
        LeftFoot: MeshPart & {
          LeftAnkleRigAttachment: Attachment;
          OriginalSize: Vector3Value;
          LeftAnkle: Motor6D;
        };
        RightHand: MeshPart & {
          RightWristRigAttachment: Attachment;
          RightWrist: Motor6D;
          RightGripAttachment: Attachment;
          OriginalSize: Vector3Value;
        };
        HumanoidRootPart: Part & {
          RootRigAttachment: Attachment;
          OriginalSize: Vector3Value;
        };
        RightLowerLeg: MeshPart & {
          RightKneeRigAttachment: Attachment;
          RightAnkleRigAttachment: Attachment;
          OriginalSize: Vector3Value;
          RightKnee: Motor6D;
        };
        LeftUpperLeg: MeshPart & {
          LeftHip: Motor6D;
          OriginalSize: Vector3Value;
          LeftHipRigAttachment: Attachment;
          LeftKneeRigAttachment: Attachment;
        };
        LeftLowerLeg: MeshPart & {
          OriginalSize: Vector3Value;
          LeftKnee: Motor6D;
          LeftAnkleRigAttachment: Attachment;
          LeftKneeRigAttachment: Attachment;
        };
        LowerTorso: MeshPart & {
          WaistCenterAttachment: Attachment;
          LeftHipRigAttachment: Attachment;
          Root: Motor6D;
          RootRigAttachment: Attachment;
          RightHipRigAttachment: Attachment;
          OriginalSize: Vector3Value;
          WaistRigAttachment: Attachment;
          WaistBackAttachment: Attachment;
          WaistFrontAttachment: Attachment;
        };
        Head: Part & {
          HatAttachment: Attachment;
          OriginalSize: Vector3Value;
          NeckRigAttachment: Attachment;
          FaceFrontAttachment: Attachment;
          face: Decal;
          HairAttachment: Attachment;
          Neck: Motor6D;
          Mesh: SpecialMesh;
          FaceCenterAttachment: Attachment;
        };
        UpperTorso: MeshPart & {
          RightCollarAttachment: Attachment;
          BodyBackAttachment: Attachment;
          NeckRigAttachment: Attachment;
          LeftCollarAttachment: Attachment;
          Waist: Motor6D;
          OriginalSize: Vector3Value;
          RightShoulderRigAttachment: Attachment;
          BodyFrontAttachment: Attachment;
          WaistRigAttachment: Attachment;
          LeftShoulderRigAttachment: Attachment;
          NeckAttachment: Attachment;
        };
        LeftUpperArm: MeshPart & {
          LeftShoulderRigAttachment: Attachment;
          OriginalSize: Vector3Value;
          LeftShoulderAttachment: Attachment;
          LeftElbowRigAttachment: Attachment;
          LeftShoulder: Motor6D;
        };
        RightLowerArm: MeshPart & {
          RightWristRigAttachment: Attachment;
          RightElbow: Motor6D;
          OriginalSize: Vector3Value;
          RightElbowRigAttachment: Attachment;
        };
        LeftHand: MeshPart & {
          LeftWrist: Motor6D;
          LeftGripAttachment: Attachment;
          OriginalSize: Vector3Value;
          LeftWristRigAttachment: Attachment;
        };
        LeftLowerArm: MeshPart & {
          LeftElbowRigAttachment: Attachment;
          LeftElbow: Motor6D;
          OriginalSize: Vector3Value;
          LeftWristRigAttachment: Attachment;
        };
        RightUpperArm: MeshPart & {
          OriginalSize: Vector3Value;
          RightElbowRigAttachment: Attachment;
          RightShoulderRigAttachment: Attachment;
          RightShoulderAttachment: Attachment;
          RightShoulder: Motor6D;
        };
        RightUpperLeg: MeshPart & {
          RightKneeRigAttachment: Attachment;
          RightHip: Motor6D;
          OriginalSize: Vector3Value;
          RightHipRigAttachment: Attachment;
        };
        RightFoot: MeshPart & {
          RightAnkleRigAttachment: Attachment;
          OriginalSize: Vector3Value;
          RightAnkle: Motor6D;
        };
      };
    };
    PalmTree: Model & {
      Trunk: MeshPart & {
        SurfaceAppearance: SurfaceAppearance & {
          Weld: Weld;
        };
        Weld: Weld & {
          Angle2: IntValue;
          Angle1: IntValue;
          WeldConstraint: WeldConstraint;
        };
      };
      Leafs: MeshPart & {
        SurfaceAppearance: SurfaceAppearance & {
          Weld: Weld;
        };
      };
    };
  };
}
