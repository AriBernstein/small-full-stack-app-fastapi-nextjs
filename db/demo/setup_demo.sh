# Run series of scripts to:
# 1. Create, build, and run postgres in Docker
# 2. Delete database `sample_db` if it exists
# 3. Create new user for service
# 4. Create database `sample_db`

chmod a+x db/*
chmod a+x db/demo/*
docker run --rm -P -p 127.0.0.1:${PORT_FORWARD}:${PORT_FORWARD} -e POSTGRES_PASSWORD=${POSTGRES_PASS} --name ${CONTAINER_NAME} -d postgres:${POSTGRES_TAG}
sleep 2
./db/run_postgres_cmd.sh "DROP DATABASE IF EXISTS ${DB_NAME};"
sleep 2
./db/run_postgres_cmd.sh "CREATE DATABASE ${DB_NAME};"
sleep 2