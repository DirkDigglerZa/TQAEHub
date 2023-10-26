const Loot = class {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    print() {
        return this.name + " " + this.value;
    }
}

module.exports = Loot;