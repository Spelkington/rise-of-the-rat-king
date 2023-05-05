interface ServerStorage extends Instance {
  TagList: Folder;
  Assets: Folder & {
    Maps: Folder & {
      Lobbies: Folder;
      Arenas: Folder;
    };
  };
}
