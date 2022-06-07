@echo off
@REM kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
@REM echo "!! wait for nginx to be ready"
@REM timeout /T 15 /nobreak
kubectl create -f ingress.yaml
cd "web_application/backend"
kubectl create -f service.yaml
kubectl create -f deployment.yaml
cd ".."
cd "prime-api"
kubectl create -f service.yaml
kubectl create -f deployment.yaml
@REM kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80
@REM echo "!! port-forwading localhost 8080 to k8s cluster"

@REM if creating ingress fails
@REM kubectl get ValidatingWebhookConfigurations
@REM kubectl delete ValidatingWebhookConfigurations ingress-nginx-admission
