ServerEvents.recipes(event => {

	event.remove({output: 'actuallyadditions:teleport_staff'})
	event.remove({output: 'immersiveengineering:fluid_placer'})
	event.remove({output: 'botania:dirt_rod'})
	event.remove({output: 'botania:skydirt_rod'})
	event.remove({output: 'botania:fire_rod'})

	event.remove({output: '#forge:dusts/ender_pearl'})

	event.remove({id: 'botania:elven_trade/ender_pearl_return'})
	event.remove({id: 'enderio:sag_milling/ender_pearl'})
	event.remove({ input: 'minecraft:ender_eye', type: 'tconstruct:melting' })
	event.remove({ input: 'minecraft:ender_chest', type: 'tconstruct:melting' })
	event.remove({ input: 'minecraft:end_crystal', type: 'tconstruct:melting' })

	event.remove({ output: 'minecraft:ender_eye'})
	event.shapeless('minecraft:ender_eye', [
		'minecraft:ender_pearl',
		'minecraft:blaze_powder'
	])

	event.remove({output: 'tempad:tempad'})
	event.shaped('tempad:tempad', [
		'   ', 
		'ABA',
		'CDE'  
		],{
		A: 'enderio:dark_steel_ingot',
		B: 'minecraft:tinted_glass',
		C: 'tiab:time_in_a_bottle',
		D: 'mekanism:teleportation_core',
		E: 'enderio:ender_resonator'
})

	event.remove({mod: 'snad'})
	event.recipes.createPressing('snad:snad', 'minecraft:sand')

	event.replaceInput({input: 'minecraft:ender_pearl'}, 'minecraft:ender_pearl', 'minecraft:echo_shard')
	event.replaceInput({input: 'minecraft:ender_eye'}, 'minecraft:ender_eye', 'minecraft:echo_shard')
	event.replaceInput({id: 'thermal:machines/crucible/crucible_ender_pearl'}, 'minecraft:echo_shard', 'ae2:ender_dust')

	event.remove({ output: 'musketmod:cartridge'})
	event.shapeless('8x musketmod:cartridge', [
		'thermal:lead_nugget',
		'minecraft:gunpowder',
		'minecraft:paper'
	])

})