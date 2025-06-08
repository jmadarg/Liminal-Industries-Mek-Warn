ServerEvents.recipes(event => {

	let breaking = (output, input) => {
		event.shapeless(output, [input])
	}
	breaking('2x minecraft:oak_planks', '#backrooms:oak_furniture')
	breaking('2x minecraft:spruce_planks', '#backrooms:spruce_furniture')
	breaking('2x minecraft:birch_planks', '#backrooms:birch_furniture')
	breaking('2x minecraft:jungle_planks', '#backrooms:jungle_furniture')
	breaking('2x minecraft:acacia_planks', '#backrooms:acacia_furniture')
	breaking('2x minecraft:dark_oak_planks', '#backrooms:dark_oak_furniture')
	breaking('2x minecraft:mangrove_planks', '#backrooms:mangrove_furniture')
	breaking('2x minecraft:cherry_planks', '#backrooms:cherry_furniture')
	breaking('2x minecraft:bamboo_planks', '#backrooms:bamboo_furniture')
	breaking('2x minecraft:warped_planks', '#backrooms:warped_furniture')
	breaking('2x minecraft:crimson_planks', '#backrooms:crimson_furniture')



	let chopping = (output, input) => {
		event.recipes.farmersdelight.cutting(
			input,
			"#forge:tools/axes",
			[
				output,
				Item.of("minecraft:stick")
                .withChance(0.5)
			],
			"minecraft:block.wood.break");
	}
	chopping('4x minecraft:oak_planks', '#backrooms:oak_furniture')
	chopping('4x minecraft:spruce_planks', '#backrooms:spruce_furniture')
	chopping('4x minecraft:birch_planks', '#backrooms:birch_furniture')
	chopping('4x minecraft:jungle_planks', '#backrooms:jungle_furniture')
	chopping('4x minecraft:acacia_planks', '#backrooms:acacia_furniture')
	chopping('4x minecraft:dark_oak_planks', '#backrooms:dark_oak_furniture')
	chopping('4x minecraft:mangrove_planks', '#backrooms:mangrove_furniture')
	chopping('4x minecraft:cherry_planks', '#backrooms:cherry_furniture')
	chopping('4x minecraft:bamboo_planks', '#backrooms:bamboo_furniture')
	chopping('4x minecraft:warped_planks', '#backrooms:warped_furniture')
	chopping('4x minecraft:crimson_planks', '#backrooms:crimson_furniture')

	let cutting = (output, input) => {
		event.recipes.create.cutting(
			[
				output,
				Item.of("mekanism:sawdust")
				.withChance(0.2)
			],
		input
	)}
	cutting('8x minecraft:oak_planks', '#backrooms:oak_furniture')
	cutting('8x minecraft:spruce_planks', '#backrooms:spruce_furniture')
	cutting('8x minecraft:birch_planks', '#backrooms:birch_furniture')
	cutting('8x minecraft:jungle_planks', '#backrooms:jungle_furniture')
	cutting('8x minecraft:acacia_planks', '#backrooms:acacia_furniture')
	cutting('8x minecraft:dark_oak_planks', '#backrooms:dark_oak_furniture')
	cutting('8x minecraft:mangrove_planks', '#backrooms:mangrove_furniture')
	cutting('8x minecraft:cherry_planks', '#backrooms:cherry_furniture')
	cutting('8x minecraft:bamboo_planks', '#backrooms:bamboo_furniture')
	cutting('8x minecraft:warped_planks', '#backrooms:warped_furniture')
	cutting('8x minecraft:crimson_planks', '#backrooms:crimson_furniture')

})