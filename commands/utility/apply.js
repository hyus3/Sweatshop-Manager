const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('apply')
        .setDescription('Contribute to the economy!'),

    async execute(interaction) {

        await interaction.member.roles.add("1302979888487071805");
        await interaction.member.roles.remove("1304518454107177081");
        console.log("Roles updated for: " + interaction.user.username);
    },
};
