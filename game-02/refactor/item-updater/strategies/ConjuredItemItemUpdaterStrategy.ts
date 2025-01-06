import { ItemUpdaterStrategy } from './ItemUpdaterStrategy';

export class ConjuredItemItemUpdaterStrategy extends ItemUpdaterStrategy {
  update(): void {
    this.item.sellIn--;

    this.decreaseQuality(2)

    if (this.item.sellIn < 0) {
      this.decreaseQuality(2)
    }
  }
}
