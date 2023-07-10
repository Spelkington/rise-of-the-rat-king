#!/usr/bin/bash

TEMPORARY_DIRECTORY="./temp"
OUTPUT_LOCATION="./workspaces"
template_name=""
template_type=""

while getopts 't:n:' flag; do
    case "${flag}" in
        t) template_type=$OPTARG ;;
        n) template_name=$OPTARG
    esac
done

mkdir -p $TEMPORARY_DIRECTORY
rm -rf $TEMPORARY_DIRECTORY/*
node ./utils/create-template.js --name $template_name --input ./templates/$template_type --output $TEMPORARY_DIRECTORY >> /dev/null
mv $TEMPORARY_DIRECTORY/$template_name $OUTPUT_LOCATION/$template_type
rm -rf $TEMPORARY_DIRECTORY