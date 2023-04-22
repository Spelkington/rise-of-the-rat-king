# Clear any existing builds
rm -rf builds
mkdir builds

# Exit on fail
set -e

for project_file in ./*.project.json; do
    echo "[PROJECT] Processing $project_file..."
    
    # Capture domain (domain.project.json) from filename
    project_domain=$( echo $project_file | sed 's/^\.\/\([^.]*\).*/\1/' )

    # Compile rbxtsc
    echo "\t[COMPILING] places/$project_domain/src => out/$project_domain..."
    rbxtsc --rojo $project_file --project places/$project_domain/

    # Create build directories with rblx file + project file
    echo "\t[BUILDING] out/$project_domain => builds/$project_domain/$project_domain.rblx ..."
    rojo build --output builds/$project_domain.rbxl $project_file
done