'use-strict';

'use-strict';

module.exports.Abilities = class {
    constructor(params) {
        
    }
}

module.exports.Character = class {
    constructor(params) { 
        this.name = params.name ?? '';
        this.origin = params.origin ?? '';
        this.background = params.background ?? '';
        this.socialClass = params.socialClass ?? '';
        this.profession = params.profession ?? '';
        this.drive = params.drive ?? '';
        this.accuracy = params.accuracy ?? 0;
        this.communication = params.communication ?? 0;
        this.constitution = params.constitution ?? 0;
        this.dexterity = params.dexterity ?? 0;
        this.fighting = params.fighting ?? 0;
        this.intelligence = params.intelligence ?? 0;
        this.perception = params.perception ?? 0;
        this.strength = params.strength ?? 0;
        this.willpower = params.willpower ?? 0;
        
        this.speed = params.speed ?? 0;
        this.defense = params.defense ?? 0;
        this.toughness = params.toughness ?? 0;
        this.armor = params.armor ?? 0;
        this.penalty = params.penalty ?? 0;

        this.equipment = params.equipment ?? [];
        this.experience = params.experience ?? 0;
        this.income = params.income ?? 0;
        this.physicalAppearance = params.physicalAppearance ?? 0;
        this.move = params.move ?? 0;
        this.run = params.run ?? 0;

        this.level = params.level ?? 0;
    }
}