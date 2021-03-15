/* global alt */

const context = [
    {
        forType: ['hat', 'top', 'armour', 'watch', 'gloves', 'shoes', 'glasses', 'tShirt', 'bag', 'accessory', 'pants'],
        options: {
            drop: {
                name: 'Drop',
                event: (id, position) => {
                    if ('alt' in window) {
                        alt.emit('cef::inventory:dropItem', JSON.stringify({id, position}))
                    }
                }
            },
            putOn: {
                name: 'Put on',
                event: (id, position) => {
                    if ('alt' in window) {
                        alt.emit('cef::inventory:putOnItem', JSON.stringify({id, position}))
                    }
                }
            }
        }
    },
    {
        forType: ['weapon'],
        options: {
            drop: {
                name: 'Drop',
                event: (id, position) => {
                    if ('alt' in window) {
                        alt.emit('cef::inventory:dropItem', JSON.stringify({id, position}))
                    }
                }
            },
            toQuickSlot: {
                name: 'Put it quick slot',
                event: (id, position) => {
                    if ('alt' in window) {
                        alt.emit('cef::inventory:putItemToQuickSlot', JSON.stringify({id, position}))
                    }
                }
            }
        }
    },
    {
        forType: ['quick'],
        options: {
            remove: {
                name: 'Remove from quick slot'
            }
        }
    }
]

export default context;