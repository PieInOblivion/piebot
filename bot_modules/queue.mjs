import { MessageEmbed } from 'discord.js';

export const call = ['queue'];

export function exec(serverProperties) {
	if (!serverProperties.dispatcher) {
		serverProperties.lastMessage.channel.send(
			new MessageEmbed().setColor(0xff9900).addField('Nice.', `I'm not currently playing anything`)
		);
		return;
	}

	serverProperties.lastMessage.channel.send(
		new MessageEmbed()
			.setTitle(`Queue Stats`)
			.addField(`User Queue Length:`, serverProperties.userQueue.length, true)
			.addField(`Playlist Queue Length:`, serverProperties.playlistQueue.length, true)
			.setColor(0x00ffff)
	);
}
