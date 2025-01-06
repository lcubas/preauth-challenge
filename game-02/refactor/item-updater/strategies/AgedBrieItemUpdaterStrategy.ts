import { ItemUpdaterStrategy } from "./ItemUpdaterStrategy";

export class AgedBrieItemUpdaterStrategy extends ItemUpdaterStrategy {
  update(): void {
    this.item.sellIn--;
    this.increaseQuality();
  }
}
