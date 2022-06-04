@echo off
cd "web_application/backend"
kubectl create -f service.yaml
kubectl create -f deployment.yaml
cd ".."
cd "prime-api"
kubectl create -f service.yaml
kubectl create -f deployment.yaml