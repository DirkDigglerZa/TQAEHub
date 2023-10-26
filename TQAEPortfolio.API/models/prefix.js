const Prefix = class {
    constructor(name, type, items, levelRequirements, propertyCount) {
        this.name = name;
        this.type = type;
        this.items = items;
        this.levelRequirements = levelRequirements;
        this.propertyCount = propertyCount;
    }
}

module.exports = Prefix;