#!/usr/bin/bash
echo "[INFO] Running pre-build utilities..."

WORKSPACE_PLACE_DIR="./workspaces/places"
MASTER_CONFIG_DIR=".config"

# Copy master tsconfig to all place directories
echo "[INFO] Copying master tsconfig to all place directories..."
find $WORKSPACE_PLACE_DIR/* \
  -maxdepth 0 \
  -type d \
  -exec cp $MASTER_CONFIG_DIR/master.tsconfig.json {}/tsconfig.json \;

# Copy master eslint to all place directories
echo "[INFO] Copying master eslint to all place directories..."
find $WORKSPACE_PLACE_DIR/* \
  -maxdepth 0 \
  -type d \
  -exec cp $MASTER_CONFIG_DIR/master.eslintrc {}/.eslintrc \;

# Copy master prettierrc to all place directories
echo "[INFO] Copying master prettierrc to all place directories..."
find $WORKSPACE_PLACE_DIR/* \
  -maxdepth 0 \
  -type d \
  -exec cp $MASTER_CONFIG_DIR/master.prettierrc {}/.prettierrc \;

# Copy master prettierignore into all place directories
echo "[INFO] Copying master prettierignore to all place directories..."
find $WORKSPACE_PLACE_DIR/* \
  -maxdepth 0 \
  -type d \
  -exec cp $MASTER_CONFIG_DIR/master.prettierignore {}/.prettierignore \;

echo "[INFO] Pre-build utilities complete!"