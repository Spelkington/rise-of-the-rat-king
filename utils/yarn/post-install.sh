#!/usr/bin/bash

echo "[INFO] Running post install steps..."

echo "[INFO] Installing yarn plugins..."
yarn plugin import workspace-tools

echo "[INFO] Installing husky..."
yarn husky install .config/husky 