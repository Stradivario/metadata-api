#!/bin/sh
cd ${SRC_PKG}
npm install
# npx ncc build ./src/main.ts --external rxjs --external rxjs/operators --external @gapi/core -o .
cp -r ${SRC_PKG} ${DEPLOY_PKG}

echo SUCCESS