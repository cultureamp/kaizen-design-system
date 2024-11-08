const ORIGIN_BASE_URL = "https://d1e7r7b0lb8p4d.cloudfront.net"

/**
 * Returns the full URL of the asset at `path` managed by the
 * `kaizen-design-system-assets` service.
 *
 * @example
 * assetUrl("some/blob.png") -> "https://<origin>/some/blob.png"
 *
 * @see https://github.com/cultureamp/kaizen-design-system-assets/
 */
export const assetUrl = (path: string): string => [ORIGIN_BASE_URL, path].join("/")
