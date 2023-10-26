const Equipment = class {
    constructor(name, tag, equipmentType, classification, level, levelRequirement) {
        this.name = name;
        this.tag = tag;
        this.equipmentType = equipmentType;
        this.classification = classification;
        this.level = level;
        this.levelRequirement = levelRequirement;
    }
}

module.exports = Equipment;