FROM node:12.4.0
WORKDIR /var/code/
ADD . /var/code/
RUN npm install --quiet
CMD [ "bash" ]
