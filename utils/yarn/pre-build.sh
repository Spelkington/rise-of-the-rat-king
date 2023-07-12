#!/usr/bin/bash

# Copy master tsconfig to all place directories
find ./workspaces/places/* -maxdepth 0 -type d -exec cp tsconfig.master.json {}/tsconfig.json \;