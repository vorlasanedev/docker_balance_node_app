# docker_balance_node_app
docker load balance with nginx reverse proxy under docker

1. create nodejs
- initoalize nodejs
```
npm init -y
npm install
```
- install express package
```
npm install express
```
- create app.js
2. run server
```
node app.js
```
<p><img src="screenshort\project-herachy.png"></p>


3. Add project node to docker
- ctrl + p
```
>add dockerfile
```
- select: nodejs
- select: package.json
- select port: 3000
- select: yes
<p><img src="screenshort\add docker.png"></p>
- dockerFile
<p><img src="screenshort\dockerfile.png"></p>
## 4. run project nodejs using docker env
- run docker desktop and run command
```
docker compose up
```
Help
```
docker ps -a
docker compose down
docker imgs
```
# scale up docker load balancer
- docker compose up --scale <service name>
```
docker compose up --scale dockerbalancenodeapp=3
```

- run docker compose in background and build
```
docker compose up --scale dockerbalancenodeapp=3 -d --build
```
<p><img src="screenshort\Docker Load Balancer.png"></p>