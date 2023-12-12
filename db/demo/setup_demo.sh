chmod a+x db/*
./db/start_postgres_docker.sh
./db/run_postgres_cmd.sh "DROP DATABASE IF EXISTS sample_db;"
./db/run_postgres_cmd.sh "CREATE DATABASE sample_db;"
./db/run_postgres_file.sh db/table_ddl.sql
./db/run_postgres_file.sh db/demo/insert_sample_data.sql