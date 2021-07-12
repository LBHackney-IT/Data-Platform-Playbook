structurizr-Liberator-Container.png: structurizr-Liberator-Container.puml
	plantuml structurizr-Liberator-Container.puml

structurizr-Liberator-Container.puml: structurizr/liberator-import.dsl
	docker run -it --rm -v $${PWD}:/usr/local/structurizr structurizr/cli export -w ./structurizr/liberator-import.dsl -o . -f plantuml/c4plantuml
