ServerEvents.recipes(event => {

	event.custom({
		"type": "lychee:block_interacting",
		"item_in": {
			"item": "kubejs:hot_steel"
		},
		"block_in": "minecraft:water_cauldron",
		"post": [
			{
				"type": "execute",
				"command": "function backrooms:cauldron_empty"
			},
			{
				"type": "execute",
				"command": "particle minecraft:cloud ~ ~0.5 ~ 0.3 0.3 0.3 0.001 10 force"
			},
			{
				"type": "execute",
				"command": "playsound minecraft:block.fire.extinguish master @a ~ ~ ~ 0.15 2"
			},
			{
				"type": "execute",
				"command": "playsound minecraft:block.bubble_column.upwards_inside master @a ~ ~ ~ 1 2"
			},
			{
				"type": "if",
				"contextual": [
					{
						"type": "chance",
						"chance": 0.90
					}
				],
				"then": [
					{
						"type": "execute",
						"command": "give @a[limit=1,sort=nearest] immersiveengineering:ingot_steel"
					}
				],
				"else": [
					{
						"type": "execute",
						"command": "give @a[limit=1,sort=nearest] kubejs:cracked_steel"
					}
				]
			}
		]
})

})