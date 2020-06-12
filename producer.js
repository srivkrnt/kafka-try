const {Kafka} = require('kafkajs')

const msg = process.argv[2];

run();
async function run(){
    try{
        const kafka = new Kafka({
            "clientId" : "myApp",
            "brokers" : ["192.168.43.178:9092"]
        });

        const producer = kafka.producer();
        console.log("connecting .....")
        producer.connect()
        console.log("connected !.")

        const partition = msg[0] < "N" ? 0 : 1;

        const result = await producer.send({
            "topic" : "Users",
            "messages" : [
                {
                    "value" : msg,
                    "partition" : partition
                }
            ]
        })
        console.log(`published succesfully !!!! ${JSON.stringify(result)}`)
        await producer.disconnect();
    }  
    catch(err){
        console.log("error happened", err)
    }
    finally{
        process.exit(0);
    }
}