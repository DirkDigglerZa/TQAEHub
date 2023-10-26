const Creature = class {
    constructor(name, tag, abilities, classification, level, loot, race) {
        this.name = name;
        this.tag = tag;
        this.abilities = abilities;
        this.classification = classification;
        this.level = level;
        this.loot = loot;
        this.race = race;
    }
}

module.exports = Creature;