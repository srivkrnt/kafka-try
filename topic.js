const {Kafka} = require('kafkajs')

run();
async function run(){
    try{
        const kafka = new Kafka({
            "clientId" : "myApp",
            "brokers" : ["192.168.43.178:9092"]
        });

        const admin = kafka.admin();
        console.log("connecting .....")
        admin.connect()
        console.log("connected !.")
        await admin.createTopics({
            "topics" : [{
                "topic" : "Users",
                "numPartitions" : 2
            }]
        })
        console.log("created succesfully !!!!")
        await admin.disconnect();
    }  
    catch(err){
        console.log("error happened")
    }
    finally{
        process.exit(0);
    }
}