rm -R -f ./migrations &&
pipenv run init &&
dropdb -h localhost -U postgres force || true &&
createdb -h localhost -U postgres force || true &&
psql -h localhost force -U postgres -c 'CREATE EXTENSION unaccent;' || true &&
pipenv run migrate &&
pipenv run upgrade
