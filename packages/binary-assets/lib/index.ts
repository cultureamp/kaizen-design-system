const ORIGIN_BASE_URL = "https://kaizen-assets.s3-us-west-2.amazonaws.com"

/**
 * Returns the full URL of the asset at `path` managed by the
 * `kaizen-design-system-assets` service.
 *
 * @example
 * assetUrl("some/blob.png") -> "https://<origin>/some/blob.png"
 *
 * @see https://github.com/cultureamp/kaizen-design-system-assets/
 */
export const assetUrl = (path: string) => [ORIGIN_BASE_URL, path].join("/")
