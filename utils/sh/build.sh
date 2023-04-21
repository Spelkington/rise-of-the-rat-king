# Compile rbxtsc
rbxtsc

# Clear all existing builds
rm -rf builds
mkdir builds

for project_file in ./*.project.json; do
    # Capture domain (domain.project.json) from filename
    project_domain=$( echo $project_file | sed 's/^\.\/\([^.]*\).*/\1/' )

    # Create build directories with rblx file + project file
    echo "Building $project_domain.rblx into /$project_domain..."
    mkdir builds/$project_domain
    rojo build --output builds/$project_domain/$project_domain.rbxl $project_file
    cp $project_file builds/$project_domain/
done