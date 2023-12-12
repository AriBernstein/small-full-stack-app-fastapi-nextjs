export CONTAINER_NAME=local_psql
docker exec -it ${CONTAINER_NAME} psql -U postgres -c $"$1"