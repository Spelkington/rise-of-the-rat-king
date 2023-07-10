-- Splits string paths based on separaters to navigate through RBX datamodel
function splitstring(inputstr, sep)
	if sep == nil then
			sep = "%s"
	end
	local t={}
	for str in string.gmatch(inputstr, "([^"..sep.."]+)") do
			table.insert(t, str)
	end
	return t
end

-- Gets the instance data from the game file datamodel
local function GetInstanceFromDatamodel(Datamodel,StringPath)
	local CurrentObjectReference = Datamodel

	for _, ObjectName in pairs(splitstring(StringPath,".")) do
		if CurrentObjectReference:FindFirstChild(ObjectName) ~= nil then
			CurrentObjectReference = CurrentObjectReference[ObjectName]
		else
			error(ObjectName.." was not found.")
			return nil
		end
	end

	return CurrentObjectReference
end

-- Recursively saves assets at the provided input path into the system filestore
local function SaveAssetToFilesystem(Path, Asset)
    for _,Instance in pairs(Asset:GetChildren()) do
		if Instance.ClassName ~= "Folder" then
			-- If the instance is not a folder, write the model as .rbxmx
			remodel.writeModelFile(Path.."/"..Instance.Name..".rbxmx", Instance)
		else
			-- Recurse into folder
			remodel.createDirAll(Path.."/"..Instance.Name)
			SaveAssetToFilesystem(Path.."/"..Instance.Name, Instance)
        end
    end
end

-- TODO: Pass in filesystem paths as arguments
local Datamodel = remodel.readPlaceFile("./out/assets.rbxlx")

-- Pull physical assets
local AssetImportLocation = GetInstanceFromDatamodel(Datamodel,"Workspace.Assets")
local AssetExportLocation = "../../assets/Assets"

SaveAssetToFilesystem(AssetExportLocation, AssetImportLocation)

-- Pull archived assets
local ArchiveImportLocation = GetInstanceFromDatamodel(Datamodel,"ServerStorage.Assets")
local ArchiveExportLocation = "../../assets/Assets"

SaveAssetToFilesystem(ArchiveExportLocation, ArchiveImportLocation)

-- Pull component tags
local TagImportLocation = GetInstanceFromDatamodel(Datamodel,"ServerStorage.TagList")
local TagExportLocation = "../../assets/TagList"

SaveAssetToFilesystem(TagExportLocation, TagImportLocation)