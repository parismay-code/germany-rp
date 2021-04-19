import {
    action,
    makeObservable,
    observable,
    runInAction
} from "mobx";

import {images} from "@store/images";

import {Meta} from '@utils/meta';

export default class InventoryStore {
    meta = Meta.initial;

    inventoryData = [
        {
            type: 'clothes',
            data: {
                item: 'pants',
                name: 'Test Pants',
                count: 1,
                weight: 1,
                isInQuick: false,
                isPutOn: true
            },
            visual: {
                thumb: images.itemPants
            }
        }, // slot #1
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #2
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #3
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #4
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #5
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #6
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #7
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #8
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #9
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #10
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #11
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #12
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #13
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #14
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #15
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #16
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #17
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #18
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #19
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #20
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #21
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #22
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #23
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #24
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #25
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #26
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #27
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #28
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #29
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #30
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #31
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #32
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #33
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #34
        {
            type: null,
            data: {
                item: null,
                name: null,
                count: 0,
                weight: 0,
                isInQuick: false,
                isPutOn: false
            },
            visual: {
                thumb: null
            }
        }, // slot #35
    ]

    constructor() {
        makeObservable(this, {
            meta: observable,

            inventoryData: observable,
        })
    }

    async fetchInventoryData(event) {
        this.meta = Meta.loading;
        this.inventoryData = {};

        const {isError, data} = await event;
        if (isError) {
            return this.meta = Meta.error;
        }

        runInAction(() => {
            this.inventoryData = data;
            this.meta = Meta.success;
        })
    }

    destroy() {
    }
}