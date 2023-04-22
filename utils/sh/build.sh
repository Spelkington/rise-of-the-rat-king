# Compile rbxtsc
rbxtsc

# Clear all existing builds
rm -rf builds
mkdir builds

for project_file in ./*.project.json; do
    # Capture domain (domain.project.json) from filename
    project_name=$(jq -r ".name" $project_file)

    # Create build directories with rblx file + project file
    echo "Building $project_name.rblx into builds/$project_name..."
    mkdir builds/$project_name
    rojo build --output builds/$project_name/$project_name.rbxl $project_file >> /dev/null
    cp $project_file builds/$project_name/
done