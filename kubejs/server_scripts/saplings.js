ServerEvents.recipes(event => {

    event.custom({
        "type": "thermal:insolator",
        "ingredient": {
            "item": "minecraft:dirt"
        },
        "result": [
            {
                "item": "minecraft:dirt",
                "chance": 0.9
            },
            {
                "item": "minecraft:oak_sapling",
                "chance": 0.1
            },
            {
                "item": "minecraft:spruce_sapling",
                "chance": 0.1
            },
            {
                "item": "minecraft:birch_sapling",
                "chance": 0.1
            }
        ],
        "experience": 0.15
        })

    event.custom({
        "type": "thermal:insolator",
        "ingredient": {
            "item": "minecraft:mud"
        },
        "result": [
            {
                "item": "minecraft:mud",
                "chance": 0.9
            },
            {
                "item": "minecraft:jungle_sapling",
                "chance": 0.1
            },
            {
                "item": "minecraft:acacia_sapling",
                "chance": 0.1
            },
            {
                "item": "minecraft:cherry_sapling",
                "chance": 0.1
            }
        ],
        "experience": 0.15
        })

    event.recipes.create.splashing([
        Item.of('minecraft:beetroot_seeds').withChance(0.01),
        Item.of('farmersdelight:cabbage_seeds').withChance(0.01),
        Item.of('minecraft:wheat_seeds').withChance(0.01),
        Item.of('minecraft:pumpkin_seeds').withChance(0.01),
        Item.of('minecraft:melon_seeds').withChance(0.01)
    ],
        'minecraft:dirt')


})

