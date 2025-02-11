#!/bin/bash

cd apartamento || exit 1
ng build || exit 1
cd .. || exit 1
rm -rf mh-torremolinos/*
cp -r apartamento/dist/apartamento/browser/* mh-torremolinos/.
./fix_assets.sh || exit 1
