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
sed -i "s|DOCKER_ENV_PT_API|$VITE_PT_API|g" /usr/share/nginx/html/config.js
sed -i "s|DOCKER_ENV_OAUTH_DOMAIN|$VITE_OAUTH_DOMAIN|g" /usr/share/nginx/html/config.js
sed -i "s|DOCKER_ENV_OAUTH_CLIENTID|$VITE_OAUTH_CLIENTID|g" /usr/share/nginx/html/config.js
sed -i "s|DOCKER_ENV_OAUTH_AUDIENCE|$VITE_OAUTH_AUDIENCE|g" /usr/share/nginx/html/config.js
sed -i "s|DOCKER_ENV_OAUTH_CONNECTION|$VITE_OAUTH_CONNECTION|g" /usr/share/nginx/html/config.js

##### START NGINX
nginx -g "daemon off;"
