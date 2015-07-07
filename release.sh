#!/bin/bash
echo "* Demeteorizing application"
demeteorizer
echo "* Pushing to the live server"
cd .demeteorized
git init .
git add .
git commit -am "Release"
git remote add ec2 ec2-user@52.28.155.155:/var/git/ethdev.git
git push -f ec2 master
