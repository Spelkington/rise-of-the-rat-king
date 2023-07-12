#!/usr/bin/bash

# Check if out/assets.rbxlx already exists. If so, this existing build is considered the source of truth
# If out/assets.rbxlx doesn't already exist, generate a new one from the current assets
if [ ! -f "./out/assets.rbxlx" ]; then
    echo "[ASSETS] Packing assets into new assets.rbxlx..."
    bash ./utils/pack-assets.sh
fi

# Compile a new assets folder from assets.rbxlx
echo "[ASSETS] Unpacking assets into /assets..."
bash ./utils/unpack-assets.sh