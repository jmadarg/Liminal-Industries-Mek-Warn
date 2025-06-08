ServerEvents.recipes(event => {

    event.remove({id: 'ae2:transform/certus_quartz_crystals'})
    event.remove({id: 'ae2:transform/fluix_crystals'})
    event.remove({id: 'ae2:transform/fluix_crystal'})

    event.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
          {
            "fluid": "minecraft:water",
            "amount": 2000
          },
          {
            "item": "ae2:certus_quartz_dust"
          }
        ],
        "result": [
          {
            "item": "ae2:certus_quartz_crystal"
          }
        ],
          "energy": 500
    })

    event.remove({output: 'ae2:fluix_crystal'})
    event.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
          {
            "fluid": "minecraft:water",
            "amount": 2000
          },
          {
            "item": "ae2:charged_certus_quartz_crystal"
          },
          {
            "item": "ae2:sky_dust"
          }
        ],
        "result": [
          {
            "item": "ae2:fluix_crystal"
          }
        ],
        "energy": 500
    })

    event.remove({output: 'ae2:crafting_terminal'})
    event.shaped('ae2:crafting_terminal', [
        ' C ', 
        ' A ',
        ' F '  
        ],{
          A: 'enderio:skeletal_contractor', 
          C: 'ae2:terminal',
          F: 'create:crafting_blueprint'
    })

	  event.replaceInput({output: 'ae2:annihilation_core'}, 'ae2:logic_processor', 'immersiveengineering:component_electronic')
  	event.replaceInput({output: 'ae2:formation_core'}, 'ae2:logic_processor', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'ae2:terminal'}, 'ae2:logic_processor', 'immersiveengineering:component_electronic')
  	event.replaceInput({output: 'ae2:cell_component_1k'}, 'ae2:logic_processor', 'immersiveengineering:component_electronic')

  	event.replaceInput({output: 'ae2:cell_component_4k'}, 'ae2:calculation_processor', 'create:electron_tube')
  	event.replaceInput({output: 'ae2:cell_component_16k'}, 'ae2:calculation_processor', 'immersiveengineering:component_electronic_adv')
    event.replaceInput({output: 'ae2:cell_component_256k'}, 'ae2:calculation_processor', 'ae2:engineering_processor')

    event.remove({output: 'ae2:storage_bus'})

})