export const call = ['stop'];

export async function exec(serverProperties) {

	try {

		if (serverProperties.dispatcher) {

			await serverProperties.dispatcher.end();

			if (serverProperties.voiceChannel) {

				await serverProperties.voiceChannel.disconnect();

				resetProperties(serverProperties);

			} else {

				resetProperties(serverProperties);

			}

		} else {

			resetProperties(serverProperties);
			
		}

	} catch(err) {

		resetProperties(serverProperties);
		
	}

}

export function stopBot(serverProperties) {
	exec(serverProperties);
}

function resetProperties(serverProperties) {
	serverProperties = {
		userQueue: [],
		playlistQueue: [],
		playing: null,
		voiceChannel: null,
		dispatcher: null,
		lastMessage: null
	}
}