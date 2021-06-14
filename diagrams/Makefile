structurizr-Liberator-Container.png: structurizr-Liberator-Container.puml
	cat structurizr-Liberator-Container.puml |  docker run --rm -i think/plantuml -tpng > structurizr-Liberator-Container.png

structurizr-Liberator-Container.puml: structurizr/liberator-import.dsl
	docker run --rm -v $${PWD}:/home gilbertotcc/structurizr:latest export -w ./structurizr/liberator-import.dsl -o . -f plantuml/c4plantuml
