#!/usr/bin/bash

if [ -f "./out/assets.rbxlx.lock" ]; then
    echo "[ERROR] The asset file is currently being edited in Studio. Please close the asset.rbxlx file before compiling new assets."
    exit 1
fi

rm -rf ./out
mkdir out

rojo build --output 'out/assets.rbxlx'