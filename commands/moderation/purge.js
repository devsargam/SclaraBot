const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('purge')
    .setDescription('purge certain number of messages in a channel')
    .addIntegerOption(option => option.setName('number').setDescription('Number of messages to pure').setRequired(true)),

  async execute(interaction) {
    const number = interaction.options.getInteger('number');
    if (number <= 0) {
      await interaction.reply(`Please enter vaid number`);
    } else {
      await interaction.channel.bulkDelete(number);
      await interaction.reply(`Successfully deleted ${number} of messages.`);
    }
  }
}
