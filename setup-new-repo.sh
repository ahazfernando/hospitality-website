#!/bin/bash

# Script to create a new GitHub repository and push this project

echo "Setting up new GitHub repository..."

# Check if GitHub CLI is authenticated
if ! gh auth status &>/dev/null; then
    echo "⚠️  Please authenticate with GitHub CLI first:"
    echo "   Run: gh auth login"
    exit 1
fi

# Get repository name (you can change this)
REPO_NAME="restaurant-template"
echo "Creating repository: $REPO_NAME"

# Create the repository on GitHub
gh repo create "$REPO_NAME" --public --source=. --remote=new-origin

# Remove the old remote if it exists
if git remote get-url origin &>/dev/null; then
    echo "Removing old remote 'origin'..."
    git remote remove origin
fi

# Rename new-origin to origin
git remote rename new-origin origin

# Push to the new repository
echo "Pushing to new repository..."
git push -u origin main

echo "✅ Successfully created and pushed to new repository: $REPO_NAME"
echo "Repository URL: https://github.com/$(gh api user --jq .login)/$REPO_NAME"

