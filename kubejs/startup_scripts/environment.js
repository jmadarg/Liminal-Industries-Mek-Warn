BlockEvents.modification(event => {
	event.modify('minecraft:sculk', block => {
		block.explosionResistance = 10000.0
		block.destroySpeed = 0.0
	})

	event.modify(/.*(bright|dirt|log).*/, block => {
		block.explosionResistance = 10000.0
		block.destroySpeed = 0.0
	})

  })