ServerEvents.recipes(event => {

    event.remove({output: 'farmersdelight:organic_compost'})
    event.custom(
      {
        "type": "immersiveengineering:fermenter",
        "energy": 6400,
        "fluid": {
          "amount": 250,
          "id": "immersiveengineering:ethanol"
        },
        "input": {
          "item": "minecraft:stone"
        },
        "result": {
          "item": "minecraft:glass_bottle"
        }
      })

    event.custom({
            "type": "immersiveengineering:squeezer",
            "energy": 19200,
            "input": {
              "basePredicate": {
                "tag": "forge:dusts/coal_coke"
              },
              "count": 8
            },
            "result": {
              "tag": "forge:dusts/hop_graphite"
            }
          })

		event.recipes.farmersdelight.cutting(
			"kubejs:carpet_dust",
			"minecraft:brush",
        [
              Item.of("minecraft:wheat_seeds").withChance(0.1),
              Item.of("minecraft:beetroot_seeds").withChance(0.1),
              Item.of("minecraft:melon_seeds").withChance(0.1),
              Item.of("minecraft:pumpkin_seeds").withChance(0.1)
        ],
			"minecraft:item.brush.brushing.generic");

		event.recipes.farmersdelight.cutting(
			"minecraft:dirt",
			"minecraft:brush",
        [
              Item.of("farmersdelight:cabbage_seeds").withChance(0.5),
              Item.of("farmersdelight:tomato_seeds").withChance(0.5),
              Item.of("immersiveengineering:seed").withChance(0.5),
              Item.of("supplementaries:flax_seeds").withChance(0.5)
        ],
			"minecraft:item.brush.brushing.generic");

})