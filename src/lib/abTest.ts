/**
 * A/B Testing hooks
 * Simple client-side variant assignment for testing
 * Can be extended with server-side assignment later
 */

type Variant = 'A' | 'B' | 'C';

interface TestConfig {
  name: string;
  variants: Variant[];
  defaultVariant: Variant;
}

// Store assignments in localStorage for consistency
const STORAGE_KEY_PREFIX = 'ab_test_';

function getStoredVariant(testName: string): Variant | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(`${STORAGE_KEY_PREFIX}${testName}`);
  return stored as Variant | null;
}

function storeVariant(testName: string, variant: Variant): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`${STORAGE_KEY_PREFIX}${testName}`, variant);
}

function assignVariant(variants: Variant[]): Variant {
  const random = Math.random();
  const index = Math.floor(random * variants.length);
  return variants[index];
}

/**
 * Get or assign A/B test variant
 */
export function useABTest(config: TestConfig): Variant {
  const stored = getStoredVariant(config.name);
  
  if (stored && config.variants.includes(stored)) {
    return stored;
  }
  
  const variant = assignVariant(config.variants);
  storeVariant(config.name, variant);
  return variant;
}

/**
 * Get variant for hero copy test
 */
export function getHeroCopyVariant(): Variant {
  return useABTest({
    name: 'hero_copy',
    variants: ['A', 'B'],
    defaultVariant: 'A',
  });
}

/**
 * Get variant for CTA text test
 */
export function getCTAVariant(): Variant {
  return useABTest({
    name: 'cta_text',
    variants: ['A', 'B', 'C'],
    defaultVariant: 'A',
  });
}

/**
 * Get variant for modal layout test
 */
export function getModalLayoutVariant(): Variant {
  return useABTest({
    name: 'modal_layout',
    variants: ['A', 'B'],
    defaultVariant: 'A',
  });
}

