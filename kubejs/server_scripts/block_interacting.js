ServerEvents.recipes(event => {

	event.custom({
		"type": "lychee:block_interacting",
		"item_in": {
			"tag": "forge:tools/axes"
		},
		"block_in": "kubejs:wallpaper1",
		"post": [
			{
				"type": "execute",
				"command": "playsound minecraft:item.axe.strip master @a ~ ~ ~ 1 1"
			},
			{
				"type": "execute",
				"command": "give @a[limit=1,sort=nearest] kubejs:wallpaper"
			},
			{
				"type": "place",
				"block": "kubejs:stripped_wallpaper"
			},
			{
				"type": "damage_item"
			}
		]
})

	event.custom({
		"type": "lychee:block_interacting",
		"item_in": {
			"item": "minecraft:brush"
		},
		"block_in": "kubejs:carpet",
		"post": [
			{
				"type": "damage_item"
			},
			{
				"type": "add_item_cooldown",
				"s": 0.1
			},
			{
				"type": "execute",
				"command": "particle minecraft:campfire_signal_smoke ~ ~0.3 ~ 1 0.1 1 0.001 2 force"
			},
			{
				"type": "execute",
				"command": "playsound minecraft:item.brush.brushing.generic master @a ~ ~ ~ 1 1"
			},
			{
				"type": "execute",
						"command": "summon item ~ ~ ~ {Motion:[0.2,0.3,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
					"contextual": {
					"type": "chance",
					"chance": 0.10
				}
			},
			{
				"type": "execute",
						"command": "summon item ~ ~ ~ {Motion:[-0.3,0.4,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
					"contextual": {
					"type": "chance",
					"chance": 0.10
				}
			},
			{
				"type": "execute",
						"command": "summon item ~ ~ ~ {Motion:[0.0,0.2,-0.3],Item:{id:'kubejs:carpet_dust',Count:1b}}",
					"contextual": {
					"type": "chance",
					"chance": 0.10
				}
			},
			{
				"type": "execute",
						"command": "summon item ~ ~ ~ {Motion:[0.4,0.2,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
					"contextual": {
					"type": "chance",
					"chance": 0.10
				}
			},
			{
				"type": "execute",
						"command": "summon item ~ ~ ~ {Motion:[-0.3,0.3,-0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
					"contextual": {
					"type": "chance",
					"chance": 0.10
				}
			},
			{
				"type": "execute",
				"command": "summon silverfish ~ ~ ~ {Motion:[0.0,0.4,0.0]}",
					"contextual": {
					"type": "chance",
					"chance": 0.05
				}
			}
		]
})

event.custom({
	"type": "lychee:block_interacting",
	"item_in": {
		"item": "kubejs:diamond_brush"
	},
	"block_in": "kubejs:carpet",
	"post": [
		{
			"type": "prevent_default"
		},
		{
			"type": "add_item_cooldown",
			"s": 0.1
		},
		{
			"type": "execute",
			"command": "particle minecraft:campfire_signal_smoke ~ ~0.3 ~ 1 0.1 1 0.001 2 force"
		},
		{
			"type": "execute",
			"command": "playsound minecraft:item.brush.brushing.generic master @a ~ ~ ~ 1 1"
		},
		{
			"type": "execute",
					"command": "summon item ~ ~ ~ {Motion:[0.2,0.3,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
				"contextual": {
				"type": "chance",
				"chance": 0.10
			}
		},
		{
			"type": "execute",
					"command": "summon item ~ ~ ~ {Motion:[-0.3,0.4,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
				"contextual": {
				"type": "chance",
				"chance": 0.10
			}
		},
		{
			"type": "execute",
					"command": "summon item ~ ~ ~ {Motion:[0.0,0.2,-0.3],Item:{id:'kubejs:carpet_dust',Count:1b}}",
				"contextual": {
				"type": "chance",
				"chance": 0.10
			}
		},
		{
			"type": "execute",
					"command": "summon item ~ ~ ~ {Motion:[0.4,0.2,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
				"contextual": {
				"type": "chance",
				"chance": 0.10
			}
		},
		{
			"type": "execute",
					"command": "summon item ~ ~ ~ {Motion:[-0.3,0.3,-0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
				"contextual": {
				"type": "chance",
				"chance": 0.10
			}
		}
	]
})

	event.custom({
		"type": "lychee:block_interacting",
		"item_in": {
			"item": "kubejs:hot_steel"
		},
		"block_in": "minecraft:water_cauldron",
		"post": [
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
						"chance": 0.80
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

	event.custom({
		"type": "lychee:block_interacting",
		"item_in": {
			"item": "minecraft:sponge"
		},
		"block_in": "kubejs:soggy_carpet",
		"post": [
			{
				"type": "execute",
				"command": "particle minecraft:cloud ~ ~0.2 ~ 0.5 0.1 0.5 0.001 5 force"
			},
			{
				"type": "execute",
				"command": "playsound minecraft:block.coral_block.place master @a ~ ~ ~ 1 0"
			},
			{
				"type": "place",
				"block": "kubejs:carpet"
			},
			{
				"type": "execute",
				"command": "give @a[limit=1,sort=nearest] wet_sponge"
			}
		]
})
/*
	event.custom({
		"type": "lychee:block_interacting",
		"item_in": {
			"item": "kubejs:carpet_dust"
		},
		"block_in": "kubejs:soggy_carpet",
		"post": [
			{
				"type": "execute",
				"command": "particle minecraft:cloud ~ ~0.2 ~ 0.5 0.1 0.5 0.001 5 force"
			},
			{
				"type": "execute",
				"command": "playsound minecraft:block.coral_block.place master @a ~ ~ ~ 1 0"
			},
			{
				"type": "execute",
				"command": "give @a[limit=1,sort=nearest] clay_ball"
			}
		]
})
*/
	event.custom({
		"type": "lychee:block_interacting",
		"item_in": {
			"item": "kubejs:cut_carpet"
		},
		"block_in": "kubejs:floor_tiles",
		"post": [
			{
				"type": "execute",
				"command": "playsound minecraft:block.wool.place master @a ~ ~ ~ 1 1"
			},
			{
				"type": "execute",
				"command": "execute as @a[distance=..0.7] at @s run tp @s ~ ~0.1 ~"
			},
			{
				"type": "place",
				"block": "kubejs:carpet"
			}
		]
})

event.custom({
	"type": "lychee:block_interacting",
	"item_in": {
		"item": "minecraft:wet_sponge"
	},
	"block_in": "kubejs:carpet",
	"post": [
		{
			"type": "execute",
			"command": "playsound minecraft:block.coral_block.place master @a ~ ~ ~ 1 0"
		},
		{
			"type": "execute",
			"command": "fill ~1 ~ ~ ~-1 ~ ~ kubejs:soggy_carpet replace kubejs:carpet"
		},
		{
			"type": "execute",
			"command": "fill ~ ~ ~1 ~ ~ ~-1 kubejs:soggy_carpet replace kubejs:carpet"
		},
		{
			"type": "execute",
			"command": "particle minecraft:falling_water ~ ~0.1 ~ 1 0 1 0 100 force"
		},
		{
			"type": "execute",
			"command": "give @a[limit=1,sort=nearest] sponge"
		}
	]
})

	event.custom({
		"type": "lychee:block_clicking",
		"item_in": {
			"tag": "forge:tools/knives"
		},
		"block_in": "kubejs:carpet",
		"post": [
			{
				"type": "execute",
				"command": "execute if block ~ ~1 ~ minecraft:air run give @a[limit=1,sort=nearest] kubejs:cut_carpet"
			},
			{
				"type": "execute",
				"command": "execute if block ~ ~1 ~ minecraft:air run playsound minecraft:block.wool.break master @a ~ ~ ~ 1 1.5"
			},
			{
				"type": "execute",
				"command": "execute if block ~ ~1 ~ minecraft:air run setblock ~ ~ ~ kubejs:floor_tiles"
			},
			{
				"type": "damage_item"
			}
		]
})

	event.custom({
		"type": "lychee:block_clicking",
		"item_in": {
			"tag": "forge:tools/pickaxes"
		},
		"block_in": "kubejs:floor_tiles",
		"post": [
			{
				"type": "damage_item"
			},
			{
				"type": "add_item_cooldown",
				"s": 0.1
			},
			{
				"type": "execute",
				"command": "particle block kubejs:floor_tiles ~ ~0.5 ~ 0 0 0 0.1 10 normal"
			},
			{
				"type": "execute",
				"command": "playsound minecraft:block.deepslate.place master @a ~ ~ ~ 1 0"
			},
			{
				"type": "execute",
				"command": "summon item ~ ~0.5 ~ {Motion:[0.1,0.2,0.0],Item:{id:'kubejs:concrete_piece',Count:1b}}",
				"contextual": {
				"type": "chance",
				"chance": 0.10
				}
			},
			{
				"type": "execute",
				"command": "summon item ~ ~0.5 ~ {Motion:[-0.1,0.2,0.1],Item:{id:'kubejs:concrete_piece',Count:1b}}",
				"contextual": {
				"type": "chance",
				"chance": 0.10
				}
			},
			{
				"type": "execute",
				"command": "summon item ~ ~0.5 ~ {Motion:[0.1,0.2,-0.1],Item:{id:'kubejs:concrete_piece',Count:1b}}",
				"contextual": {
				"type": "chance",
				"chance": 0.10
				}
			}
		]
})

	event.custom({
		"type": "lychee:block_interacting",
		"item_in": {
			"item": "kubejs:cut_carpet"
		},
		"block_in": "kubejs:floor_tiles",
		"post": [
			{
				"type": "execute",
				"command": "playsound minecraft:block.wool.place master @a ~ ~ ~ 1 1"
			},
			{
				"type": "execute",
				"command": "execute as @a[distance=..1] at @s run tp ~ ~0.1 ~"
			},
			{
				"type": "place",
				"block": "kubejs:carpet"
			}
		]
})

})