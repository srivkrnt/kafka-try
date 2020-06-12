const {Kafka} = require('kafkajs')

run();
async function run(){
    try{
        const kafka = new Kafka({
            "clientId" : "myApp",
            "brokers" : ["192.168.43.178:9092"]
        });

        const consumer = kafka.consumer({"groupId" : "test"});
        console.log("connecting .....")
        consumer.connect()
        console.log("connected !.")

        consumer.subscribe({
            "topic" : "Users",
            "fromBeginning" : true 
        })

        await consumer.run({
            eachMessage : async result => {
                console.log(`Recieved message => ${result.message.value} on partition => ${result.partition}`)
            }
        })
    }  
    catch(err){
        console.log("error happened", err)
    }
}