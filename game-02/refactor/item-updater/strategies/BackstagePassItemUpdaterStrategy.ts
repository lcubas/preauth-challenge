import { ItemUpdaterStrategy } from "./ItemUpdaterStrategy";

export class BackstagePassItemUpdaterStrategy extends ItemUpdaterStrategy {
  update(): void {
    this.item.sellIn--;

    this.increaseQuality();

    if (this.item.sellIn > 0 && this.item.sellIn < 11) {
      this.increaseQuality();
    }

    if (this.item.sellIn > 0 && this.item.sellIn < 6) {
      this.increaseQuality();
    }

    if (this.item.sellIn < 0) {
      this.item.quality = 0;
    }
  }
}
