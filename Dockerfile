# ---------------- STAGE 1: BUILD REACT APP ----------------

# Use official Node.js image
# 22       -> Node.js version
# alpine   -> lightweight Linux distribution
# AS build -> name this stage "build" for later reference
FROM node:22-alpine AS build

# Set working directory inside container
# All next commands run inside /app
WORKDIR /app

# Copy package.json and package-lock.json
# package*.json matches:
# - package.json
# - package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files from local machine to container
COPY . .

# Create production build
# Usually generates /app/dist in Vite apps
RUN npm run build



# ---------------- STAGE 2: SERVE WITH NGINX ----------------

# Use lightweight nginx image
FROM nginx:alpine

# Copy built files from "build" stage
# --from=build -> source stage name
# /app/dist    -> source folder in build container
# /usr/share/nginx/html -> default nginx static website folder
COPY --from=build /app/dist /usr/share/nginx/html

# Inform Docker that container listens on port 80
# NOTE: this does NOT publish the port automatically
EXPOSE 80

# Default command when container starts
CMD ["nginx", "-g", "daemon off;"]

# CMD explanation:
# nginx              -> start nginx server
# -g                 -> pass global config directive
# "daemon off;"      -> keep nginx in foreground
#
# Why needed?
# Containers stop when main process exits.
# By default nginx runs in background (daemon mode),
# so "daemon off;" keeps container alive.