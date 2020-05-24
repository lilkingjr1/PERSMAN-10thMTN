const mongoose = require("mongoose"),
    config = require("../default-settings.json");

const SettingsSchema = new mongoose.Schema({
    websiteName: {type: String, default: config.websiteName},
    websiteSubtitle: {type: String, default: config.websiteSubtitle},
    landingText: {type: String, default: config.landingText},
    faq: {type: String, default: config.faq},
    resourceLinks: {type: Array, default: config.resourceLinks},
    resourceTitles: {type: Array, default: config.resourceTitles},
    mailerEmail: {type: String, default: config.mailerEmail},
    mailerPassword: {type: String, default: config.mailerPassword},
    websiteLogo: {type: String, default: config.websiteLogo},
    carouselImages: {type: Array, default: config.carouselImages},
    carouselTitles: {type: Array, default: config.carouselTitles},
    modlistURL: {type: String, default: config.modlistURL},
    a3unitsURL: {type: String, default: config.a3unitsURL},
    steamgroupURL: {type: String, default: config.steamgroupURL},
    donateURL: {type: String, default: config.donateURL},
    ts3URL: {type: String, default: config.ts3URL},
    discordURL: {type: String, default: config.discordURL},
    youtubeURL: {type: String, default: config.youtubeURL},
    instagramURL: {type: String, default: config.instagramURL},
    enableApplication: {type: String, default: config.enableApplication},
    enableCallToAction: {type: String, default: config.enableCallToAction},
    enableRetiredMembers: {type: String, default: config.enableRetiredMembers},
    companies: {type: Array, default: config.companies},
    platoons: {type: Array, default: config.platoons},
    squads: {type: Array, default: config.squads},
    teams: {type: Array, default: config.teams},
    sShops: {type: Array, default: config.sShops},
    ranks: {type: Array, default: config.ranks},
    roles: {type: Array, default: config.roles},
    tabs: {type: Array, default: config.tabs},
    tabDesc: {type: Array, default: config.tabDesc},
    certifications: {type: Array, default: config.certifications},
    awards: {type: Array, default: config.awards},
    awardDesc: {type: Array, default: config.awardDesc},
    userGroups: {type: Array, default: config.userGroups},
    enableVisibility: {type: String, default: config.enableVisibility}
});

module.exports = mongoose.model("Settings", SettingsSchema);