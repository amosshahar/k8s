# run web locally
git clone git@github.com:amosshahar/k8s.git
npm install 
npm start
http://127.0.0.1:8080

# build the 
docker image build --tag amosshahar/simpleweb:1.0 .
docker image ls | grep simpleweb

# push to dockerHub
docker login
docker image push amosshahar/simpleweb:1.0

# run web with Docker  (in the background)
docker run -d -p 8080:8080 --name simpleweb -it amosshahar/simpleweb:1.0
docker ps 
docker stop simpleweb 
docker start simpleweb

# run with docker compose
docker-compose up -d
docker-compose up -d --build # to re-build docker 
docker-compose down

# start k8s cluster in GCP - 
gcloud config set project amos-playground
gcloud config list 

gcloud container clusters create my-k8s-cluster --num-nodes=3
gcloud container clusters list
gcloud container clusters get-credentials my-k8s-cluster
kubectl get nodes

# create deployment
kubectl apply -f k8sFiles/deployment.yml
kubectl get pods
kubectl get deploy

# create service - nodePort
kubectl apply -f k8sFiles/serviceNodePort
kubectl get service              
kubectl get nodes -o yaml | grep ExternalIP -C 1   # get the node ips


# create service - loadbalancer
kubectl apply -f k8sFiles/serviceLoadBalancer
kubectl get service
http://<loadbalncer-EXTERNAL-IP>:80


