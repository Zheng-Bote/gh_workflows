#!/bin/bash

echo "para 1: $1"
echo "para 2: $2"
echo "para 3: $3"

git switch $1
git config user.name "$GITHUB_ACTOR"
git config user.email "$GITHUB_ACTOR@users.noreply.github.com"
git pull
cp -R $2 $3/.
git add $3/*
git commit -m "upload"
git push

