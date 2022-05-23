#!/usr/env/bin bash
set -ex

echo $BASH_VERSION

yarn install

export NODE_ENV=production

yarn run format
sleep 1
npx docusaurus clear
NODE_ENV=production npx docusaurus build
echo "Finished Building Production"
exit 0