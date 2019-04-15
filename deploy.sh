#!/bin/bash

git checkout dev &&
rm -rf /tmp/dist &&
cp -r dist /tmp/dist &&
git checkout master &&
cp -rf /tmp/dist/* . &&
git add --all && 
git commit -m "New release" &&
git push origin master &&
git checkout dev


