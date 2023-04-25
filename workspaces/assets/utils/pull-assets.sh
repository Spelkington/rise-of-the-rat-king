rm -rf ../../assets
mkdir ../../assets
mkdir ../../assets/models
mkdir ../../assets/tags

# Pulls assets from Workspace/Assets into rbx/models
remodel run ./utils/pull-assets.lua