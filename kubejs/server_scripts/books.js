ServerEvents.recipes(event => {

	event.shapeless('minecraft:book', [
		'3x kubejs:wallpaper'
	])

	event.shapeless('ftbquests:book', [
		'kubejs:wallpaper'
	])

	let books = (input, output) => {
		event.shapeless(output, [
			input
		])
	}

	books('minecraft:book', 'botania:lexicon')
	books('botania:lexicon', 'immersiveengineering:manual')
	books('immersiveengineering:manual', 'eidolon:codex')
	books('eidolon:codex', 'ae2:guide')
	books('ae2:guide', 'actuallyadditions:booklet')
	books('actuallyadditions:booklet', Item.of('patchouli:guide_book', '{"patchouli:book":"enderio:guide"}'))
	books(Item.of('patchouli:guide_book', '{"patchouli:book":"enderio:guide"}').strongNBT(), Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:summoning"}'))
	books(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:summoning"}').strongNBT(), Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:reality_frame"}'))

	books(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:reality_frame"}').strongNBT(), 'tconstruct:materials_and_you')
	books('tconstruct:materials_and_you', 'tconstruct:tinkers_gadgetry')
	books('tconstruct:tinkers_gadgetry', 'tconstruct:puny_smelting')
	books('tconstruct:puny_smelting', 'tconstruct:mighty_smelting')
	books('tconstruct:mighty_smelting', 'tconstruct:fantastic_foundry')
	books('tconstruct:fantastic_foundry', 'tconstruct:encyclopedia')
	books('tconstruct:encyclopedia', 'minecraft:book')

	

})