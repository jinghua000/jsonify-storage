#!/bin/bash
# push to current branch
CURRENT_BRANCH=`git symbolic-ref --short -q HEAD`

git add . 
git commit -m 'update'
git status

git push origin $CURRENT_BRANCH