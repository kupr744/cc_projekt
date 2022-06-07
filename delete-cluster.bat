@echo off
cd "web_application/backend"
kubectl delete -f service.yaml
kubectl delete -f deployment.yaml
cd ".."
cd "prime-api"
kubectl delete -f service.yaml
kubectl delete -f deployment.yaml