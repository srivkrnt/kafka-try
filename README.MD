STARTING ZOOKEPER 

docker run --name zookeeper -p 2181:2181 zookeeper

STARTING KAFKA

docker run --name kafka -p 9082:9082
    -e KAFKA_ZOOKEEPER_CONNECT=<IP>:2181
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<IP>:9092
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1