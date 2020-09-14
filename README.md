# Docker Test

This repo is for playing around with Docker. 

## Components
`/part1` and `/part2` build 'backend' docker images that can be used by the image that can be built from `/spider`.

These 3 images are supposed to be put into a docker network, so that *spider* can adress the backend containers by *part1* and *part2* respectively. Mapping only the port of *spider* would then allow someone to call *spider*, but not any of the backend containers.

## Setup
```bash
docker build part1/ -t joppek/part1
docker build part2/ -t joppek/part2
docker build spider/ -t joppek/spider
docker network create my-net
docker run -d --name part1 --network my-net joppek/part1
docker run -d --name part2 --network my-net joppek/part2
docker run -d --name spider --network my-net -p 80:8080 joppek/spider
```

## Docker compose
The setup can probably be achieved much easier with `docker compose`, but the point is to get to grips with low level docker commands first.

## Commands to remember
### Build 
`docker build <path to dockerfile> -t <container id>`
`docker build . -t joppek/spider`

### Simple run
`docker run <container id>`

### Create network
`docker network create <network id>`

### Add container to network
`docker network connect <network id> <container id>`

### Connect to a running container
`docker attach <container id>`

### Run options
* `-d`                : detached
* `-it <TTY>`         : Add interactive terminal, i.e. bash (TTY must be provided at the end), prefix with `winpty` on git bash
* `--network <name>`  : Add container to network
* `-p <ext>:<int>`    : Forward port
* `--name <name>`     : An alias for the container instance to be used in lieu of its id.  

### Samples

#### Map internal port 8080 to 4444 
`docker run -d --name part2 --network my-net -p 4444:8080 joppek/part2`

#### Don't use the CMD, but run bash
`docker run -dit --name spider --network my-net joppek/spider bash`

#### Don't use the CMD, but run bash (from git bash)
`winpty docker run -dit --name spider --network my-net joppek/spider bash`