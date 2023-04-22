# Check to make sure project domain was provided
if [ -z "${1+x}" ]; then
    echo "[ERROR] Project domain required."
    exit 1
fi

project_domain=$1

# Get project dependencies
project_file="./$project_domain.project.json"
project_dir="./places/$project_domain"

# Check if rojo file exists
if [ ! -f $project_file ]; then
    echo "[ERROR] $project_file Rojo file not found."
    exit 1
fi

# Check to see if source files exist
if [ ! -d $project_dir ]; then
    echo "[ERROR] $project_dir did not exist."
    exit 1
fi

set -e
rbxtsc --rojo $project_file --project places/$project_domain/ -w