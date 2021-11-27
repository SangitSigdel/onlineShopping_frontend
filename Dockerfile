FROM node:10.19.0
WORKDIR /usr/src
COPY ./ ./
RUN npm install
RUN npm audit fix
CMD ["/bin/bash"]