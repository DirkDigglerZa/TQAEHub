const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
let Loot = require('./models/loot');
const TQDB = require('./models/tqdb');
const EquipmentTypes = require("./models/tqenums");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  fs.readFile('tqdata.json', 'utf8', function (err, data) {
    if (err)  {
      console.log(err);
    }

    var obj = JSON.parse(data);

    var prefixes = obj.affixes.prefixes;
    var suffixes = obj.affixes.suffixes;
    var creatures = obj.creatures;
    var equipment = obj.equipment;
    var arms = obj.equipment.ArmorProtective_Forearm;
    var heads = obj.equipment.ArmorProtective_Head;
    var legs = obj.equipment.ArmorProtective_LowerBody;
    var torso = obj.equipment.ArmorProtective_UpperBody;
    var scrolls = obj.equipment.OneShot_Scroll;
    var staff = obj.equipment.WeaponMagical_Staff;
    var axes = obj.equipment.WeaponMelee_Axe;
    var maces = obj.equipment.WeaponMelee_Mace;
    var swords = obj.equipment.WeaponMelee_Sword;
    var quests = obj.quests;
    var sets = obj.sets;
    var skills = obj.skills;

    const db = new TQDB('./TQADatabase');

    // Set Property
    // for (const key in sets) {
    //   let setId = 0;
    //   db.get(`SELECT * From Sets WHERE Tag = "${key}"`).then(sk => {
    //     setId = sk.Id; 
    //     for (var k in sets[key].properties) {
    //       for (var q in sets[key].properties[k]) {
    //         let name = q;
    //         let value = sets[key].properties[k][q];
    //         if (sets[key].properties[k][q].name != null) {
    //           name = sets[key].properties[k][q].tag;
    //           value = sets[key].properties[k][q].name;
    //         }
    //         db.run(`INSERT INTO SetProperty (SetId, Name, Value) values ("${setId}", "${name}", "${value}")`).then(res => {
    //         });
    //       }
    //     }
    //   });  
    // }

    // Skill Property
    // for (const key in skills) {
    //   let skillId = 0;
    //   db.get(`SELECT * From Skills WHERE Tag = "${key}"`).then(sk => {
    //     skillId = sk.Id; 
    //     for (var k in skills[key].properties) {
    //       for (var q in skills[key].properties[k]) {
    //         let name = q;
    //         let value = skills[key].properties[k][q];
    //         if (skills[key].properties[k][q].name != null) {
    //           name = skills[key].properties[k][q].tag;
    //           value = skills[key].properties[k][q].name;
    //         }
    //         db.run(`INSERT INTO SkillProperty (SkillId, Name, Value) values ("${skillId}", "${name}", "${value}")`).then(res => {
    //         });
    //       }
    //     }
    //   });  
    // }
 
    // Prefixes
    // for (const key in obj.affixes.prefixes) {
    //   let name = obj.affixes.prefixes[key].name.replace(/'/," " );
    //   let lvlReq = obj.affixes.prefixes[key].levelRequirement;
    //   let items = obj.affixes.prefixes[key].equipment;
    //   let tag = key;
    //   db.run(`INSERT INTO Affixes (Type, Name, Items, LevelRequirement,Tag) values ` +
    //         `("Prefix", "${name}", "${items}", "${lvlReq}", "${tag}")`);
    // }

    // Suffixes
    // for (const key in obj.affixes.suffixes) {
    //   let name = obj.affixes.suffixes[key].name.replace(/'/," " );
    //   let lvlReq = obj.affixes.suffixes[key].levelRequirement;
    //   let items = obj.affixes.suffixes[key].equipment;
    //   let tag = key;
    //   db.run(`INSERT INTO Affixes (Type, Name, Items, LevelRequirement,Tag) values ` +
    //         `("Suffix", "${name}", "${items}", "${lvlReq}", "${tag}")`);
    // }

    // Suffix Prefix Property
    // for (const key in suffixes) {
    //   let affixId = 0;
    //   db.get(`SELECT * From Affixes WHERE Tag = "${key}"`).then(aff => {
    //     affixId = aff.Id;
    //     for (var k in suffixes[key].properties) {
    //       for (var q in suffixes[key].properties[k]) {
    //         let name = q;
    //         let value = suffixes[key].properties[k][q];
    //         if (suffixes[key].properties[k][q].name != null) {
    //           name = suffixes[key].properties[k][q].tag;
    //           value = suffixes[key].properties[k][q].name;
    //         }
    //         if (name == "petBonus") {
    //           value = JSON.stringify(suffixes[key].properties[k][q]);
    //           value = value.replace(/'/,"");
    //           db.run(`INSERT INTO AffixProperty (AffixId, Name, Value) values ("${affixId}", "${name}", '${value}')`).then(res => {
    //           });
    //         }
    //         db.run(`INSERT INTO AffixProperty (AffixId, Name, Value) values ("${affixId}", "${name}", "${value}")`).then(res => {
    //         });
    //       }
    //       }     
    //   });  
    // }

    // Affix Prefix Property
    // for (const key in obj.affixes.prefixes) {
    //   let affixId = 0;
    //   db.get(`SELECT * From Affixes WHERE Tag = "${key}"`).then(aff => {
    //     affixId = aff.Id;
    //     for (var k in obj.affixes.prefixes[key].properties) {
    //       for (var q in obj.affixes.prefixes[key].properties[k]) {
    //         let name = q;
    //         let value = obj.affixes.prefixes[key].properties[k][q];
    //         if (obj.affixes.prefixes[key].properties[k][q].name != null) {
    //           name = obj.affixes.prefixes[key].properties[k][q].tag;
    //           value = obj.affixes.prefixes[key].properties[k][q].name;
    //         }
    //         if (name == "petBonus") {
    //           value = JSON.stringify(obj.affixes.prefixes[key].properties[k][q]);
    //           value = value.replace(/'/,"");
    //           db.run(`INSERT INTO AffixProperty (AffixId, Name, Value) values ("${affixId}", "${name}", '${value}')`).then(res => {
    //           });
    //         }
    //         db.run(`INSERT INTO AffixProperty (AffixId, Name, Value) values ("${affixId}", "${name}", "${value}")`).then(res => {
    //         });
    //       }
    //       }     
    //   });  
    // }

    // Creature Loot
    // for (const key in obj.creatures) {
    //   for (var k in obj.creatures[key].loot) {
    //     let creatureId = 0;
    //     db.get(`SELECT * From Creatures WHERE Tag = "${obj.creatures[key].tag}"`).then(data => {
    //       creatureId = data.Id;
    //       for (var t in obj.creatures[key].loot[k]) {
    //         const abilityValue = obj.creatures[key].loot[k][t];
    //         db.get(`SELECT * From Skills WHERE Tag = "${t}"`).then(skill => {
    //           if (skill != undefined) {
    //             db.run(`INSERT INTO CreatureLoot (SkillId, CreatureId, Chance) values ("${skill.Id}", "${creatureId}", "${abilityValue}")`);
    //           }
    //         });     
    //       }
    //     });
    //   }   
    // }

    // Equipment Sets
    // for (const key in obj.sets) {
    //   let setId = 0;
    //   db.get(`SELECT * From Sets WHERE Tag = "${obj.sets[key].tag}"`).then(data => {
    //     if (data != undefined) {        
    //       setId = data.Id;
    //       for (const item in obj.sets[key].items) {
    //         db.get(`SELECT * From Equipment WHERE Tag = "${obj.sets[key].items[item]}"`).then(equip => {
    //           if (equip != undefined) {
    //             db.run(`INSERT INTO SetEquipment (EquipmentId, SetId) values ("${equip.Id}", "${setId}")`)
    //           }
    //         });
    //       }
    //     }
    //   });
    // }

    // for(var s in legs) {
    //   const classification = legs[s].classification.replace(/'/,"");
    //   const levelRequirement = legs[s].levelRequirement != undefined ? legs[s].levelRequirement : 0;
    //   const itemLevel = legs[s].itemLevel != undefined ? legs[s].itemLevel : 0;
    //   const dropsIn = legs[s].dropsIn != undefined ? legs[s].dropsIn : 'All';
    //   const name = legs[s].name.replace(/'/,"");
    //   const strengthRequirement = legs[s].strengthRequirement != undefined ? legs[s].strengthRequirement : 0;
    //   const dexterityRequirement = legs[s].dexterityRequirement != undefined ? legs[s].dexterityRequirement : 0;
    //   const intelligenceRequirement = legs[s].intelligenceRequirement != undefined ? legs[s].intelligenceRequirement : 0;
    //   const tag = legs[s].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, LevelRequirement, Level, DropsIn, StrengthRequirement, DexterityRequirement, IntelligenceRequirement) values 
    //         (${EquipmentTypes.Leg}, '${classification}', "${name}", '${tag}', ${levelRequirement}, ${itemLevel}, '${dropsIn}', ${strengthRequirement}, ${dexterityRequirement}, ${intelligenceRequirement})`);
    // }

    // for (const key in obj.quests) {
    //   let questId = 0; 
    //   db.get(`SELECT * From Quests WHERE Name = "${obj.quests[key].name}"`).then(data => {
    //     if (data != undefined) {
    //       questId = data.Id;
    //     }
    //   });
    //   for (var k in obj.quests[key].rewards) {
    //     for (var t in obj.quests[key].rewards[k]) {
    //       const rewardValue = obj.quests[key].rewards[k][t];
    //       db.get(`SELECT * From Equipment WHERE Tag = "${t}"`).then(data => {
    //         if (data != undefined) {
    //           db.run(`INSERT INTO Rewards (EquipmentId, Value) values ("${data.Id}", "${rewardValue}")`).then(res => {
    //             db.run(`INSERT INTO QuestReward (QuestId, RewardId) values ("${questId}", "${res.id}")`);
    //           });
    //         }
    //       });     
    //     }
    //   }     
    // }

    // for (const key in obj.creatures) {
    //   const name = obj.creatures[key].name != undefined ? obj.creatures[key].name.replace(/'/,"") : "";
    //   const classification = obj.creatures[key].classification != undefined ? obj.creatures[key].classification : "";
    //   const race = obj.creatures[key].race != undefined ? obj.creatures[key].race : "";
    //   const tag = obj.creatures[key].tag != undefined ? obj.creatures[key].tag : "";
    //   db.run(`INSERT INTO Creatures (Name, Classification, Race, Tag) values ("${name}","${classification}", "${race}", "${tag}")`);
    // }

    // for (const key in obj.skills) {  
    //   const name =  obj.skills[key].name != undefined ? obj.skills[key].name.replace(/'/,"") : "";
    //   const description = obj.skills[key].description != undefined ? obj.skills[key].description.replace(/'/,"") : "";
    //   const tag = obj.skills[key].tag;
    //   db.run(`INSERT INTO Skills (Name, Description, Tag) values ("${name}","${description}", "${tag}")`);
    // }

    // db.all("SELECT * FROM Affixes").then((d) => console.log(d.length));
    // db.all("SELECT * FROM Abilities").then((d) => console.log(d.length));
    // db.all("SELECT * FROM Creatures").then((d) => console.log(d.length));
    // db.all("SELECT * FROM Equipment").then((d) => console.log(d.length));
    // db.all("SELECT * FROM Loot").then((d) => console.log(d.length));
    // db.all("SELECT * FROM Quests").then((d) => console.log(d.length));
    // db.all("SELECT * FROM Rewards").then((d) => console.log(d.length));
    // db.all("SELECT * FROM Sets").then((d) => console.log(d.length));
    // db.all("SELECT * FROM Skills").then((d) => console.log(d.length));

    // for(var suffix in suffixes){
    //   console.log("Name: " + suffixes[suffix].name);
    //   console.log("Level Requirement: " + suffixes[suffix].levelRequirement);
    //   console.log("Items: " + suffixes[suffix].equipment);
    //   console.log("Number of Properties: " + suffixes[suffix].properties.length);
    //   db.run(`INSERT INTO Affixes (Type, Name, Items, LevelRequirement, PropertyCount) values ` +
    //   `("Suffix", "` + suffixes[suffix].name.replace(/'/," " ) + `"` +
    //   `,"` + suffixes[suffix].equipment + `"` +
    //   `,"` + suffixes[suffix].levelRequirement + `"` +
    //   `,"` + suffixes[suffix].properties.length + `")`);
    // }

    // for(var quest in quests) {
    //   const name = quests[quest].name.replace(/'/,"");
    //   db.run(`INSERT INTO Quests (Name) values ('${name}')`);
    // }

    // for(var set in sets) {
    //   const name = sets[set].name.replace(/'/,"");
    //   const tag = sets[set].tag.replace(/'/,"");
    //   const numItems = sets[set].items != undefined ? sets[set].items.length : 0;
    //   db.run(`INSERT INTO Sets (Name, Tag, NumberOfItems) values ('${name}','${tag}', ${numItems})`);
    // }

    // for(var reward in rewards) {
    //   const name = sets[set].name.replace(/'/,"");
    //   const value = sets[set].value; 
    //   db.run(`INSERT INTO Rewards (Name, Value) values ('${name}','${value}'`);
    // }

    // for(var amulet in amulets) {
    //   const classification = amulets[amulet].classification.replace(/'/,"");
    //   const itemLevel = amulets[amulet].itemLevel;
    //   const levelRequirement = amulets[amulet].levelRequirement;
    //   const name = amulets[amulet].name.replace(/'/,"");
    //   const tag = amulets[amulet].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Level, LevelRequirement, Name, Tag) values 
    //         (6, '${classification}', ${itemLevel}, ${levelRequirement}, '${name}','${tag}')`);
    // }

    // for(var ring in rings) {
    //   const classification = rings[ring].classification.replace(/'/,"");
    //   const itemLevel = rings[ring].itemLevel;
    //   const levelRequirement = rings[ring].levelRequirement;
    //   const name = rings[ring].name.replace(/'/,"");
    //   const tag = rings[ring].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Level, LevelRequirement, Name, Tag) values 
    //         (5, '${classification}', ${itemLevel}, ${levelRequirement}, '${name}','${tag}')`);
    // }

    // for(var a in artifacts) {
    //   const classification = artifacts[a].classification.replace(/'/,"");
    //   const dropsIn = artifacts[a].dropsIn;
    //   const levelRequirement = artifacts[a].levelRequirement;
    //   const name = artifacts[a].name.replace(/'/,"");
    //   const tag = artifacts[a].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, LevelRequirement, Name, Tag,) values 
    //         (9, '${classification}', ${levelRequirement}, '${name}','${tag}', '${dropsIn}')`);
    // }

    // for(var f in formula) {
    //   const classification = formula[f].classification.replace(/'/,"");
    //   const name = formula[f].name.replace(/'/,"");
    //   const reagent1 = formula[f].reagent1 != undefined ? formula[f].reagent1.replace(/'/,"") : "";
    //   const reagent2 = formula[f].reagent2 != undefined ? formula[f].reagent2.replace(/'/,"") : "";
    //   const reagent3 = formula[f].reagent3 != undefined ? formula[f].reagent3.replace(/'/,"") : "";
    //   const tag = formula[f].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Reagant1, Reagant2, Reagant3, Tag) values 
    //         (${EquipmentTypes.Formula}, '${classification}', '${name}', '${reagent1}', '${reagent2}', '${reagent3}','${tag}')`);
    // }

    // for(var c in charms) {
    //   const act = charms[c].act; 
    //   const description = charms[c].description.replace(/'/,"");
    //   const classification = charms[c].classification.replace(/'/,"");
    //   const levelRequirement = charms[c].levelRequirement;
    //   const name = charms[c].name.replace(/'/,"");
    //   const tag = charms[c].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, Act, Description, LevelRequirement) values 
    //         (${EquipmentTypes.Charm}, '${classification}', '${name}', '${tag}', '${act}', '${description}', ${levelRequirement})`);
    // }

    // for(var r in relics) {
    //   const act = relics[r].act; 
    //   const description = relics[r].description.replace(/'/,"");
    //   const classification = relics[r].classification.replace(/'/,"");
    //   const levelRequirement = relics[r].levelRequirement;
    //   const name = relics[r].name.replace(/'/,"");
    //   const tag = relics[r].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, Act, Description, LevelRequirement) values 
    //         (${EquipmentTypes.Relic}, '${classification}', '${name}', '${tag}', '${act}', '${description}', ${levelRequirement})`);
    // }

    // for(var r in relics) {
    //   const act = relics[r].act; 
    //   const description = relics[r].description.replace(/'/,"");
    //   const classification = relics[r].classification.replace(/'/,"");
    //   const levelRequirement = relics[r].levelRequirement;
    //   const name = relics[r].name.replace(/'/,"");
    //   const tag = relics[r].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, Act, Description, LevelRequirement) values 
    //         (${EquipmentTypes.Relic}, '${classification}', '${name}', '${tag}', '${act}', '${description}', ${levelRequirement})`);
    // }

    // for(var s in scrolls) {
    //   const description = scrolls[s].description.replace(/'/,"");
    //   const classification = scrolls[s].classification.replace(/'/,"");
    //   const levelRequirement = scrolls[s].levelRequirement;
    //   const name = scrolls[s].name.replace(/'/,"");
    //   const tag = scrolls[s].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, Description, LevelRequirement) values 
    //         (${EquipmentTypes.Scroll}, '${classification}', '${name}', '${tag}', '${description}', ${levelRequirement})`);
    // }

    // for(var s in shields) {
    //   const classification = shields[s].classification.replace(/'/,"");
    //   const levelRequirement = shields[s].levelRequirement != undefined ? shields[s].levelRequirement : 0;
    //   const itemLevel = shields[s].itemLevel != undefined ? shields[s].itemLevel : 0;
    //   const dropsIn = shields[s].dropsIn != undefined ? shields[s].dropsIn : 'All';
    //   const name = shields[s].name.replace(/'/,"");
    //   const strengthRequirement = shields[s].strengthRequirement != undefined ? shields[s].strengthRequirement : 0;
    //   const dexterityRequirement = shields[s].dexterityRequirement != undefined ? shields[s].dexterityRequirement : 0;
    //   const intelligenceRequirement = shields[s].intelligenceRequirement != undefined ? shields[s].intelligenceRequirement : 0;
    //   const tag = shields[s].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, LevelRequirement, Level, DropsIn, StrengthRequirement, DexterityRequirement, IntelligenceRequirement) values 
    //         (${EquipmentTypes.Shield}, '${classification}', '${name}', '${tag}', ${levelRequirement}, ${itemLevel}, '${dropsIn}', ${strengthRequirement}, ${dexterityRequirement}, ${intelligenceRequirement})`);
    // }

    // for(var s in bows) {
    //   const classification = bows[s].classification.replace(/'/,"");
    //   const levelRequirement = bows[s].levelRequirement != undefined ? bows[s].levelRequirement : 0;
    //   const itemLevel = bows[s].itemLevel != undefined ? bows[s].itemLevel : 0;
    //   const dropsIn = bows[s].dropsIn != undefined ? bows[s].dropsIn : 'All';
    //   const name = bows[s].name.replace(/'/,"");
    //   const strengthRequirement = bows[s].strengthRequirement != undefined ? bows[s].strengthRequirement : 0;
    //   const dexterityRequirement = bows[s].dexterityRequirement != undefined ? bows[s].dexterityRequirement : 0;
    //   const intelligenceRequirement = bows[s].intelligenceRequirement != undefined ? bows[s].intelligenceRequirement : 0;
    //   const tag = bows[s].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, LevelRequirement, Level, DropsIn, StrengthRequirement, DexterityRequirement, IntelligenceRequirement) values 
    //         (${EquipmentTypes.Bow}, '${classification}', '${name}', '${tag}', ${levelRequirement}, ${itemLevel}, '${dropsIn}', ${strengthRequirement}, ${dexterityRequirement}, ${intelligenceRequirement})`);
    // }

    // for(var s in thrown) {
    //   const classification = thrown[s].classification.replace(/'/,"");
    //   const levelRequirement = thrown[s].levelRequirement != undefined ? thrown[s].levelRequirement : 0;
    //   const itemLevel = thrown[s].itemLevel != undefined ? thrown[s].itemLevel : 0;
    //   const dropsIn = thrown[s].dropsIn != undefined ? thrown[s].dropsIn : 'All';
    //   const name = thrown[s].name.replace(/'/,"");
    //   const strengthRequirement = thrown[s].strengthRequirement != undefined ? thrown[s].strengthRequirement : 0;
    //   const dexterityRequirement = thrown[s].dexterityRequirement != undefined ? thrown[s].dexterityRequirement : 0;
    //   const intelligenceRequirement = thrown[s].intelligenceRequirement != undefined ? thrown[s].intelligenceRequirement : 0;
    //   const tag = thrown[s].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, LevelRequirement, Level, DropsIn, StrengthRequirement, DexterityRequirement, IntelligenceRequirement) values 
    //         (${EquipmentTypes.Throwing}, '${classification}', '${name}', '${tag}', ${levelRequirement}, ${itemLevel}, '${dropsIn}', ${strengthRequirement}, ${dexterityRequirement}, ${intelligenceRequirement})`);
    // }

    // for(var s in spears) {
    //   const classification = spears[s].classification.replace(/'/,"");
    //   const levelRequirement = spears[s].levelRequirement != undefined ? spears[s].levelRequirement : 0;
    //   const itemLevel = spears[s].itemLevel != undefined ? spears[s].itemLevel : 0;
    //   const dropsIn = spears[s].dropsIn != undefined ? spears[s].dropsIn : 'All';
    //   const name = spears[s].name.replace(/'/,"");
    //   const strengthRequirement = spears[s].strengthRequirement != undefined ? spears[s].strengthRequirement : 0;
    //   const dexterityRequirement = spears[s].dexterityRequirement != undefined ? spears[s].dexterityRequirement : 0;
    //   const intelligenceRequirement = spears[s].intelligenceRequirement != undefined ? spears[s].intelligenceRequirement : 0;
    //   const tag = spears[s].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, LevelRequirement, Level, DropsIn, StrengthRequirement, DexterityRequirement, IntelligenceRequirement) values 
    //         (${EquipmentTypes.Spear}, '${classification}', '${name}', '${tag}', ${levelRequirement}, ${itemLevel}, '${dropsIn}', ${strengthRequirement}, ${dexterityRequirement}, ${intelligenceRequirement})`);
    // }

    // for(var s in staff) {
    //   const classification = staff[s].classification.replace(/'/,"");
    //   const levelRequirement = staff[s].levelRequirement != undefined ? staff[s].levelRequirement : 0;
    //   const itemLevel = staff[s].itemLevel != undefined ? staff[s].itemLevel : 0;
    //   const dropsIn = staff[s].dropsIn != undefined ? staff[s].dropsIn : 'All';
    //   const name = staff[s].name.replace(/'/,"");
    //   const strengthRequirement = staff[s].strengthRequirement != undefined ? staff[s].strengthRequirement : 0;
    //   const dexterityRequirement = staff[s].dexterityRequirement != undefined ? staff[s].dexterityRequirement : 0;
    //   const intelligenceRequirement = staff[s].intelligenceRequirement != undefined ? staff[s].intelligenceRequirement : 0;
    //   const tag = staff[s].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, LevelRequirement, Level, DropsIn, StrengthRequirement, DexterityRequirement, IntelligenceRequirement) values 
    //         (${EquipmentTypes.Staff}, '${classification}', '${name}', '${tag}', ${levelRequirement}, ${itemLevel}, '${dropsIn}', ${strengthRequirement}, ${dexterityRequirement}, ${intelligenceRequirement})`);
    // }

    // for(var s in axes) {
    //   const classification = axes[s].classification.replace(/'/,"");
    //   const levelRequirement = axes[s].levelRequirement != undefined ? axes[s].levelRequirement : 0;
    //   const itemLevel = axes[s].itemLevel != undefined ? axes[s].itemLevel : 0;
    //   const dropsIn = axes[s].dropsIn != undefined ? axes[s].dropsIn : 'All';
    //   const name = axes[s].name.replace(/'/,"");
    //   const strengthRequirement = axes[s].strengthRequirement != undefined ? axes[s].strengthRequirement : 0;
    //   const dexterityRequirement = axes[s].dexterityRequirement != undefined ? axes[s].dexterityRequirement : 0;
    //   const intelligenceRequirement = axes[s].intelligenceRequirement != undefined ? axes[s].intelligenceRequirement : 0;
    //   const tag = axes[s].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, LevelRequirement, Level, DropsIn, StrengthRequirement, DexterityRequirement, IntelligenceRequirement) values 
    //         (${EquipmentTypes.Axe}, '${classification}', '${name}', '${tag}', ${levelRequirement}, ${itemLevel}, '${dropsIn}', ${strengthRequirement}, ${dexterityRequirement}, ${intelligenceRequirement})`);
    // }

    // for(var s in maces) {
    //   const classification = maces[s].classification.replace(/'/,"");
    //   const levelRequirement = maces[s].levelRequirement != undefined ? maces[s].levelRequirement : 0;
    //   const itemLevel = maces[s].itemLevel != undefined ? maces[s].itemLevel : 0;
    //   const dropsIn = maces[s].dropsIn != undefined ? maces[s].dropsIn : 'All';
    //   const name = maces[s].name.replace(/'/,"");
    //   const strengthRequirement = maces[s].strengthRequirement != undefined ? maces[s].strengthRequirement : 0;
    //   const dexterityRequirement = maces[s].dexterityRequirement != undefined ? maces[s].dexterityRequirement : 0;
    //   const intelligenceRequirement = maces[s].intelligenceRequirement != undefined ? maces[s].intelligenceRequirement : 0;
    //   const tag = maces[s].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, LevelRequirement, Level, DropsIn, StrengthRequirement, DexterityRequirement, IntelligenceRequirement) values 
    //         (${EquipmentTypes.Club}, '${classification}', '${name}', '${tag}', ${levelRequirement}, ${itemLevel}, '${dropsIn}', ${strengthRequirement}, ${dexterityRequirement}, ${intelligenceRequirement})`);
    // }

    // for(var s in swords) {
    //   const classification = swords[s].classification.replace(/'/,"");
    //   const levelRequirement = swords[s].levelRequirement != undefined ? swords[s].levelRequirement : 0;
    //   const itemLevel = swords[s].itemLevel != undefined ? swords[s].itemLevel : 0;
    //   const dropsIn = swords[s].dropsIn != undefined ? swords[s].dropsIn : 'All';
    //   const name = swords[s].name.replace(/'/,"");
    //   const strengthRequirement = swords[s].strengthRequirement != undefined ? swords[s].strengthRequirement : 0;
    //   const dexterityRequirement = swords[s].dexterityRequirement != undefined ? swords[s].dexterityRequirement : 0;
    //   const intelligenceRequirement = swords[s].intelligenceRequirement != undefined ? swords[s].intelligenceRequirement : 0;
    //   const tag = swords[s].tag; 
    //   db.run(`INSERT INTO Equipment (EquipmentTypeId, Classification, Name, Tag, LevelRequirement, Level, DropsIn, StrengthRequirement, DexterityRequirement, IntelligenceRequirement) values 
    //         (${EquipmentTypes.Sword}, '${classification}', '${name}', '${tag}', ${levelRequirement}, ${itemLevel}, '${dropsIn}', ${strengthRequirement}, ${dexterityRequirement}, ${intelligenceRequirement})`);
    // }

    // for(var c in creatures){
    //   console.log("Classification: " + creatures[c].classification);
    //   console.log("Name: " + creatures[c].name);
    //   console.log("Race: " + creatures[c].race);
    //   console.log("Tag: " + creatures[c].tag);
    //   console.log("No of Properties: " + creatures[c].properties.length);
    //   console.log("No of Abilities: " + creatures[c].abilities.length);

    //   for(var a in creatures[c].properties) {
    //     console.log(creatures[c].properties[a]);
    //   }

    //   for(var l in creatures[c].loot) {
    //     console.log(creatures[c].loot[l]);
    //   }
    //}
  });
});

