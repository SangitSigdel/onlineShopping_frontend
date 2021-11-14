FROM node:10.19.0
WORKDIR /usr/src/projects/front_end
COPY ./ ./
RUN npm install
RUN npm audit fix
CMD ["/bin/bash"]