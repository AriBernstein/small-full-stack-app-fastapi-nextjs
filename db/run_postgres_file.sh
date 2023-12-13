docker exec -it ${CONTAINER_NAME} mkdir -p /tmp
docker cp $1 ${CONTAINER_NAME}:/tmp/statement.sql
docker exec -it ${CONTAINER_NAME} psql -U postgres -f /tmp/statement.sql
docker  exec -it ${CONTAINER_NAME} rm /tmp/statement.sql