/**
 * ContentService — CMS-Ready Adapter Pattern
 *
 * Swap the provider without touching any component.
 * To enable: set process.env.CMS_PROVIDER = 'sanity' | 'strapi'
 */

import { STATS, LD_FEATURES } from '@/constants/content'
import { SITE } from '@/constants/site'

export interface ContentProvider {
  getStats(): Promise<typeof STATS>
  getLDFeatures(): Promise<typeof LD_FEATURES>
  getSiteInfo(): Promise<typeof SITE>
}

class LocalProvider implements ContentProvider {
  async getStats() { return STATS }
  async getLDFeatures() { return LD_FEATURES }
  async getSiteInfo() { return SITE }
}

// Future: class SanityProvider implements ContentProvider { ... }
// Future: class StrapiProvider implements ContentProvider { ... }

const provider: ContentProvider = new LocalProvider()

export const contentService = {
  getStats:     () => provider.getStats(),
  getLDFeatures:() => provider.getLDFeatures(),
  getSiteInfo:  () => provider.getSiteInfo(),
}
