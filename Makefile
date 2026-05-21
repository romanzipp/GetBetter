IMAGE := get-better
TAG   := latest
PORT  := 8080

.PHONY: build run stop clean

build:
	docker build -t $(IMAGE):$(TAG) .

run:
	docker run --rm -d --name $(IMAGE) -p $(PORT):80 $(IMAGE):$(TAG)
	@echo "Serving on http://localhost:$(PORT)"

stop:
	docker stop $(IMAGE) || true

clean: stop
	docker rmi $(IMAGE):$(TAG) || true
