#!/bin/ash

# CHECK ALL THE ENV VARS

# declare -a allEnvVariables=(
#     "INTERESTING_TEXT"
# )

# for envVar in ${allEnvVariables[@]}; do
#     if [[ -z "${!envVar}" ]]; then
#         echo "ERROR: environment variable $envVar is undefined"
#         exit 1
#     fi
# done

# /usr/share/nginx/html/config.js
sed -i "s|DOCKER_ENV_INTERESTING_TEXT|$INTERESTING_TEXT|g" /usr/share/nginx/html/config.js

##### START NGINX
nginx -g "daemon off;"
