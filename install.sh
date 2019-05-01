#!/bin/sh
echo "making sure the directory exists"
mkdir -p /var/www/html/static/uccx/
echo "copying new web files"
cp -rf dist/* /var/www/html/static/uccx/
