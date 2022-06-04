# cc_projekt

> Docker Repo:
 - kupr744/prime-api:tagname
 - kupr744/backend:tagname 

# start web app

### 1. Start Kubernetes Cluster
### 2. Apply backend deployment.yaml and service.yaml
### 3. Apply primeservice deployment.yaml and service.yaml

### 4. Enter localhost:30005/ 


### Propleme:
await fetch("http://primeservice-clusterip-service/prime/" + to + '/' + from , ... 
Funktioniert nicht, vermutlich da er den primeservice-clusterip-service nicht findet, richtig konfiguriert sollte er aber sein. 
