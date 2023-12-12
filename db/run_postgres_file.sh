export CONTAINER_NAME=local_psql
docker exec -it ${CONTAINER_NAME} mkdir -p /temp
docker cp $1 ${CONTAINER_NAME}:/temp/temp_create_table_statement.sql
docker exec -it ${CONTAINER_NAME} psql -U postgres -f /temp/temp_create_table_statement.sql
docker  exec -it ${CONTAINER_NAME} rm /temp/temp_create_table_statement.sql