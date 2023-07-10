#!/usr/bin/bash

# Check if out/assets.rbxlx already exists. If so, this existing build is considered the source of truth
# If out/assets.rbxlx doesn't already exist, generate a new one from the current assets
if [ ! -f "./out/assets.rbxlx" ]; then
    echo "[ASSETS] Creating new assets.rbxlx..."
    bash ./utils/compile-assets.sh
fi

# Compile a new assets folder from assets.rbxlx
echo "[ASSETS] Pulling assets into /assets..."
bash ./utils/pull-assets.sh