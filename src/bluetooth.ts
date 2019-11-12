const serviceUUID = "42230200-2342-2342-2342-234223422342";
const bottomLeftRGBUUID = "42230211-2342-2342-2342-234223422342";
const vibraUUID = "4223020f-2342-2342-2342-234223422342";

export async function connect() {
	if (!navigator.bluetooth)
		throw new Error(
			`Browser doesn't support web Bluetooth, try the latest Chrome build`
		);

	console.log("Requesting Bluetooth Device...");
	const device = await navigator.bluetooth.requestDevice({
		filters: [{ services: [serviceUUID] }, { namePrefix: "card10" }],
		optionalServices: [serviceUUID, "battery_service"]
	});

	console.log("Connected to:" + device.name);

	console.log("Connecting to GATT Server...");
	const server = await device.gatt.connect();

	console.log("Getting Service...");
	const service = await server.getPrimaryService(serviceUUID);
	console.log("Available Characteristics", await service.getCharacteristics());

	console.log("Getting Characteristic...");
	const characteristic = await service.getCharacteristic(vibraUUID);
	const bottomLeft = await service.getCharacteristic(bottomLeftRGBUUID);
	console.log("Characteristic connected");

	console.log("Got char" + (await bottomLeft.readValue()));
	const view = new Uint8Array(3);
	view[0] = 255;
	view[1] = 0;
	view[2] = 255;

	await bottomLeft.writeValue(view);

	const s1 = new Uint16Array(1);
	s1[0] = 100;
	await characteristic.writeValue(s1);

	console.log("Characteristic written");
}
