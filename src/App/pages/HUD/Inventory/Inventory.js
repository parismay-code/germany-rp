// eslint-disable-next-line no-unused-vars
/* global alt */

import InventoryClothes from "../../../components/InventoryClothes";
import InventoryMain from "../../../components/InventoryMain";
import InventoryBag from "../../../components/InventoryBag";

import clothesSlots from "../../../store/inventory/clothesSlots";
import mainSlots from "../../../store/inventory/mainSlots";
import bagSlots from "../../../store/inventory/bagSlots";

import './inventory.scss';

const Inventory = () => {

    let inventoryWeight = 0,
        inventoryCount = 0,
        bagWeight = 0,
        bagCount = 0,
        weaponWeight = 0,
        weaponCount = 0;

    mainSlots.inventory.map((el) => {
        inventoryWeight += el.weight;
        if (el.item !== undefined) inventoryCount++;
    });
    mainSlots.weapons.map((el) => {
        weaponWeight += el.weight;
        if (el.item !== undefined) weaponCount++;
    });
    bagSlots.map((el) => {
        bagWeight += el.weight;
        if (el.item !== undefined) bagCount++;
    });

    if (clothesSlots[8].item !== undefined) {
        return (
            <div className='inventory'>
                <InventoryClothes clothesSlots={clothesSlots}/>
                <InventoryMain
                    mainSlots={mainSlots}
                    inventoryWeight={inventoryWeight}
                    weaponWeight={weaponWeight}
                    inventoryCount={inventoryCount}
                    weaponCount={weaponCount}
                />
            </div>
        )
    } else {
        return (
            <div className='inventory'>
                <InventoryClothes clothesSlots={clothesSlots}/>
                <InventoryMain
                    mainSlots={mainSlots}
                    inventoryWeight={inventoryWeight}
                    weaponWeight={weaponWeight}
                    inventoryCount={inventoryCount}
                    weaponCount={weaponCount}
                />
                <InventoryBag
                    bagSlots={bagSlots}
                    bagWeight={bagWeight}
                    bagCount={bagCount}
                />
            </div>
        )
    }
}

export default Inventory;