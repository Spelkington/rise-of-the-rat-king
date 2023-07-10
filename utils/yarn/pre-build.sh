#!/usr/bin/bash

# Copy master tsconfig to all place directories
tee ./workspaces/places/*/tsconfig.json < ./tsconfig.master.json > /dev/null