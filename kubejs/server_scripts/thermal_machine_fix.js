ServerEvents.recipes(event => {

	event.replaceInput({input: 'thermal:copper_gear'}, 'thermal:copper_gear', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'thermal:machine_smelter'}, '#forge:gears', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'thermal:machine_bottler'}, '#forge:gears', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'thermal:flux_saw'}, '#forge:gears', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'thermal:flux_drill'}, '#forge:gears', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'thermal:flux_drill'}, '#forge:gears', 'immersiveengineering:component_electronic')

    event.replaceInput({input: '#forge:gears'}, '#kubejs:ender_gear', 'actuallyadditions:empowered_void_crystal')
    event.replaceInput({input: '#forge:gears'}, '#forge:gears', 'immersiveengineering:component_electronic_adv')

})