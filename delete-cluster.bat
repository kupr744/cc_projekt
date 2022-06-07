@echo off
kubectl delete -f ingress.yaml
cd "web_application/backend"
kubectl delete -f service.yaml
kubectl delete -f deployment.yaml
cd ".."
cd "prime-api"
kubectl delete -f service.yaml
kubectl delete -f deployment.yaml
kubectl delete all --all -n ingress-nginx