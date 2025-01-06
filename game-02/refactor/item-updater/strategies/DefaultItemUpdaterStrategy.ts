import { ItemUpdaterStrategy } from "./ItemUpdaterStrategy";

export class DefaultItemUpdaterStrategy extends ItemUpdaterStrategy {
  update(): void {
    this.item.sellIn--;

    this.decreaseQuality();

    if (this.item.sellIn < 0) {
      this.decreaseQuality();
    }
  }
}
