# Provider Trust App

## How to Run

### Prerequisites

- DevContainer and Docker. This project uses [DevContainer](https://code.visualstudio.com/docs/devcontainers/containers) to set up the development environment, therefore, Docker is required.
- IDE with devContainer support. Initially, the project was created with Visual Studio Code

### Running the project in VS Code

- Open the project in VSCode.
- VS Code should prompt: "Folder contains a Dev Container configuration file. Reopen folder to develop in a container ". Follow the prompt to reopen the project in Container.
- If you missed the prompt, "Dev Container: Rebuild and Reopen in Container"

Once you are in the container, run `npm install`, then `npm run dev`

//TODO PROD-117 update readme for local running of the app.

### Running the project in Docker container
Can use --no-cache to fresh build. <br>
Can use to further help builds by `docker builder prune -a`. <br>
If you need to build a image for a specific env use ex. `--platform linux/amd64` 

To build: `docker build --no-cache -t providertrust/ptapp:0.1.0-beta.1 .`

Locally update `.env.development.local` to run with specific environments.

To run: `docker run --env-file .env.development.local -p 8080:80 -it providertrust/ptapp:0.1.0-beta.1`

## Environment Variables

- Update `.github/deployment/bootstrap.sh` with new environment variables.
- Update `public/config/js` with new env variables.

Can use environment variables with `window.`

### Running Storybook

Once you are in the container, run `./runsb.sh`
