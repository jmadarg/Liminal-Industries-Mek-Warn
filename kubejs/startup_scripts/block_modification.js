BlockEvents.modification(event => {
	event.modify('minecraft:sculk', block => {
		block.explosionResistance = 10000.0
		block.destroySpeed = -1.0
	})

	event.modify('supplementaries:book_pile', block => {
		block.destroySpeed = 0.0
	})

	event.modify('supplementaries:book_pile_horizontal', block => {
		block.destroySpeed = 0.0
	})

	event.modify('immersiveengineering:fluid_placer', block => {
		block.explosionResistance = 10000.0
		block.destroySpeed = -1.0
	})

	event.modify('minecraft:wet_sponge', block => {
		block.hasCollision = false
	})

	event.modify(Ingredient.of(/\bantiblock\b/).itemIds, block => {
		block.destroySpeed = -1.0
		block.explosionResistance = 10000.0
		block.destroySpeed = -1.0
	})

  })

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed", event => global.breakSpeed(event))
/**
 * 
 * @param {Internal.PlayerEvent$BreakSpeed} event 
 */
global.breakSpeed = event => {
    try {
        if (event.entity.level.getBlock(event.getPosition().get()).hasTag('kubejs:unbreakable'))
            event.setNewSpeed(0)
    } catch (error) {
        console.log(error)
    }
}