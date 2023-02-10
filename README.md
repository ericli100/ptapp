# Provider Trust App

## How to Run

### Prerequisites

- DevContainer and Docker. This project uses [DevContainer](https://code.visualstudio.com/docs/devcontainers/containers) to set up the development environment, therefore, Docker is required.
- IDE with devContainer support. Initially, the project was created with Visual Studio Code

## FontAwesome 

In order to build PTApp fontawesome update .npmrc in root of PTApp
```
legacy-peer-deps=true

@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=<TOKEN AQUIRED FROM One Password Developers Token>
```
Link to secret: https://start.1password.com/open/i?a=UZTM57T6CFBQJHPJYWCWW6GVTQ&v=4nqbnzvcapsaigqnkouayh23ry&i=edml3bwunf4nhlu6gn2hh3wafi&h=team-providertrust.1password.com
<br>
Secret is saved as a repo secret on PTApp: https://github.com/ProviderTrust/ptapp secret is saved as FONTAWESOME_TOKEN<br>

DONT COMMIT TO GITHUB

### Running the project in VS Code

- Open the project in VSCode.
- VS Code should prompt: "Folder contains a Dev Container configuration file. Reopen folder to develop in a container ". Follow the prompt to reopen the project in Container.
- If you missed the prompt, "Dev Container: Rebuild and Reopen in Container"

For non dev environment variables update `.env.development.local`

Once you are in the container, run `npm install`, then `npm run dev`

### Running the project in Docker container

Can use --no-cache to fresh build. <br>
Can use to further help builds by `docker builder prune -a`. <br>
If you need to build a image for a specific env use ex. `--platform linux/amd64`

To build: `docker build --no-cache -t providertrust/ptapp:0.1.0-beta.1 .`

Locally update `.env.development.local` to run with specific environments.

To run: `docker run --env-file .env.development.local -p 8080:80 -it providertrust/ptapp:0.1.0-beta.1`

### How docker build in the cloud work

Uses github actions and github repo secrets to build container with necessary secrets. Uses /.github/deployment/.npmrc

## Environment Variables

- Update `.github/deployment/bootstrap.sh` with new environment variables.
- Update `public/config.js` with new env variables.
- Update `src/services/envValues.ts` with new env variables.
- Update `src/global.d.ts` with new env variables.

How to use environment variables:

```
import envConfiguration from './services/envValues';
..then..
const { oAuthDomain, oAuthClientId, oAuthConnection } = envConfiguration;
```

### Running Storybook

Once you are in the container, run `./runsb.sh`
