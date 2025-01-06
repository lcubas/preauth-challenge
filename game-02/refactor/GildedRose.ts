import { Item } from '../app/gilded-rose';
import { ItemUpdaterStrategy } from './item-updater/strategies/ItemUpdaterStrategy';
import { AgedBrieItemUpdaterStrategy } from './item-updater/strategies/AgedBrieItemUpdaterStrategy';
import { BackstagePassItemUpdaterStrategy } from './item-updater/strategies/BackstagePassItemUpdaterStrategy';
import { ConjuredItemItemUpdaterStrategy } from './item-updater/strategies/ConjuredItemItemUpdaterStrategy';
import { DefaultItemUpdaterStrategy } from './item-updater/strategies/DefaultItemUpdaterStrategy';
import { SulfurasItemUpdaterStrategy } from './item-updater/strategies/SulfurasItemUpdaterStrategy';

export class GildedRose {
  constructor(public items: Item[]) {}

  updateQuality(): Item[] {
    for (const item of this.items) {
      const updater = this.getItemUpdaterStrategy(item);
      updater.update();
    }

    return this.items;
  }

  private getItemUpdaterStrategy(item: Item): ItemUpdaterStrategy {
    if (item.name === 'Aged Brie')
      return new AgedBrieItemUpdaterStrategy(item);
    
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert')
      return new BackstagePassItemUpdaterStrategy(item);

    if (item.name === 'Sulfuras, Hand of Ragnaros')
      return new SulfurasItemUpdaterStrategy(item);

    if (item.name.startsWith('Conjured'))
      return new ConjuredItemItemUpdaterStrategy(item);

    return new DefaultItemUpdaterStrategy(item);
  }
}
