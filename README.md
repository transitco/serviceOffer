#Start

docker build . -t serviceoffer
docker run -p 4000:4000 serviceoffer

#Test

http://localhost:4000/graphql
