# pull the official docker image
FROM python:3.9

# set work directory
WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "uvicorn", "main:app", "--reload", "--host", "0.0.0.0" ]
