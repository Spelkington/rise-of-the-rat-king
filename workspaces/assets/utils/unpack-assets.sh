#!/usr/bin/bash

# Backup assets
echo "[INFO] Backing up assets..."
mv ../../assets ../../assets_backup

{
  echo "[INFO] Unpacking assets..."
  # Create fresh assets folder
  mkdir ../../assets
  mkdir ../../assets/Assets
  mkdir ../../assets/TagList

  # Unpack assets.rbxlx into assets folder 
  remodel run ./utils/unpack-assets.lua
  
  # Delete backup if new assets were exported correctly
  rm -rf ../../assets_backup
  
  echo "[INFO] Assets unpacked successfully!"
} || {
  # Restore assets
  echo "[WARNING] Error unpacking assets. Restoring backup..."

  rm -rf ../../assets
  mv -r ../../assets_backup ../../assets
}