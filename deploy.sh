#!/usr/bin/env/ sh
set -e
npm run build
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:CarlosMarquez10/Prueba_de_Medidor.git main:gh-pages

cd -