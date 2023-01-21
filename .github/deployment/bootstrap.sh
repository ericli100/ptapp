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
sed -i "s|DOCKER_ENV_PT_API|$PT_API|g" /usr/share/nginx/html/config.js
sed -i "s|DOCKER_ENV_OAUTH_DOMAIN|$OAUTH_DOMAIN|g" /usr/share/nginx/html/config.js
sed -i "s|DOCKER_ENV_OAUTH_CLIENTID|$OAUTH_CLIENTID|g" /usr/share/nginx/html/config.js
sed -i "s|DOCKER_ENV_OAUTH_AUDIENCE|$OAUTH_AUDIENCE|g" /usr/share/nginx/html/config.js
sed -i "s|DOCKER_ENV_OAUTH_CONNECTION|$OAUTH_CONNECTION|g" /usr/share/nginx/html/config.js

##### START NGINX
nginx -g "daemon off;"
