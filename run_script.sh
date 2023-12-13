# Environemnt Variables:
export CONTAINER_NAME=local_psql
export VOLUME_NAME=local_psql_data
export VOLUME_STORAGE_LOC=/var/lib/postgresql/data
export PORT_BIND=54320
export PORT_FORWARD=5432
export POSTGRES_TAG=14
export POSTGRES_USER=postgres
export POSTGRES_PASS=abc123
export DB_NAME=sample_db
export TABLE_NAME=biological_sample_data
export DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASS}@host.docker.internal:${PORT_FORWARD}/${DB_NAME}

echo "DATABASE_URL=${DATABASE_URL}">backend/.env

# Setup a postgres test environment in Docker with sample databases and data
sh db/demo/setup_demo.sh
db/run_postgres_file.sh db/table_ddl.sql
db/run_postgres_file.sh db/demo/insert_sample_data.sql

# Run the backend and frontend
docker compose up