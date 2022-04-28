// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
import {MQTT_Front_Publish} from "./MQTT_Front_Publish.js"


// END EXTRA CODE

/**
 * Send a message over MQTT containing a keyword to stop the client
 * @param {string} mqttServerURL - Example : "ws://192.168.222.129:9001"
 * @param {string} toTopic
 * @param {string} mqttClientUID - The listening client with the matching MqttClientUID will close.
You can also use the keyword "All"
 * @returns {Promise.<void>}
 */
export async function MQTT_Front_UnsubscribeOverMessage(mqttServerURL, toTopic, mqttClientUID) {
	// BEGIN USER CODE

		try {
			await MQTT_Front_Publish(mqttServerURL, toTopic, 'MqttClientEnd|'+mqttClientUID)

		} catch (e){
			throw new Error("MqttFront : Unsubscribe_OneClient failed " + toTopic + ' Client : '+ mqttClientUID );
		}	

	
	// END USER CODE
}