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

local function SaveAssetToFilesystem(Path, Asset)
    for _,Instance in pairs(Asset:GetChildren()) do
		if Instance.ClassName ~= "Folder" then
			remodel.writeModelFile(Path.."/"..Instance.Name..".rbxmx", Instance)
		else
			remodel.createDirAll(Path.."/"..Instance.Name)
			SaveAssetToFilesystem(Path.."/"..Instance.Name, Instance)
        end
    end
end

-- TODO: Pass in filesystem paths as arguments
local Datamodel = remodel.readPlaceFile("./rbx/places/assets.rbxlx")
local Pullfrom = GetInstanceFromDatamodel(Datamodel,"Workspace.Assets")
local Saveto = "./rbx/assets"

SaveAssetToFilesystem(Saveto,Pullfrom)