#!/usr/bin/bash

mkdir -p tmp

echo "[INFO] Installing aftman..."
curl -L https://github.com/LPGhatguy/aftman/releases/download/v0.2.7/aftman-0.2.7-linux-x86_64.zip --output ./tmp/aftman.zip

# Unzip aftman
unzip tmp/aftman.zip -d tmp

# Self-install aftman
./tmp/aftman self-install

# Add to path in zsh
echo "[INFO] Adding aftman to PATH..."
echo '. "$HOME/.aftman/env"' >> ~/.zshrc

echo "[INFO] Installing packages via aftman..."
./tmp/aftman install --no-trust-check

echo "[INFO] Enabling execution on all aftman packages..."
chmod +x ~/.aftman/bin/*

rm -rf "tmp"