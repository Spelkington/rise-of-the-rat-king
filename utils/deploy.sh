# Assumes that all projects have been built

while getopts 'k:e:f' flag; do
    case "${flag}" in
        k) api_key=$OPTARG ;;
        e) project_environment=$OPTARG ;;
        f) force_deploy='true' ;;
    esac
done

if [ -z ${api_key+x} ]; then
    if [ -f .env ]; then
        source .env
        api_key=$EXPERIENCE_API_KEY
    else
        echo "[ERROR] An API key must be provided."
        exit 1
    fi
fi

if [ "$project_environment" != "prod" ]; then
    project_environment="dev"
else
    if [ "$force_deploy" != 'true' ]; then
        echo "[WARN] You are about to deploy to the PRODUCTION version of the experience."
        echo "[WARN] If this is what you meant to do, please type \"I know what I'm doing\" to continue."
        read -p "Enter: " response
        if [ "$response" != "I know what I'm doing" ]; then
            echo "You clearly don't know what you're doing."
            exit 1
        fi
    fi
fi

# Get places for deployment
package_file='package.json'
project_domains=( $(cat "$package_file" | jq -r ".deployments.$project_environment.places | keys[]") )

set -e
for project_domain in "${project_domains[@]}"; do

    echo "[DEPLOY] Deploying $project_domain to Roblox in $project_environment environment..."

    place_id=$(jq -r ".deployments.$project_environment.places.$project_domain" $package_file)
    universe_id=$(jq -r ".deployments.$project_environment.universe" $package_file)
    
    rbxcloud experience publish \
        --filename ./workspaces/places/$project_domain/builds/$project_domain.rbxlx \
        --place-id $place_id \
        --universe-id $universe_id \
        --version-type "published" \
        --api-key $api_key

    echo "[SUCCESS] Deployed $project_domain to Roblox $project_environment environment!"

done