export CONTAINER_NAME=local_psql
export VOLUME_NAME=local_psql_data
export VOLUME_STORAGE_LOC=/var/lib/postgresql/data
export PORT_BIND=54320
export POSTGRES_TAG=latest
export POSTGRES_PASS="abc123"

docker run --name ${CONTAINER_NAME} -v ${VOLUME_NAME}:${VOLUME_STORAGE_LOC} -p ${PORT_BIND}:5432 -e POSTGRES_PASSWORD=${POSTGRES_PASS} -d postgres:${POSTGRES_TAG}