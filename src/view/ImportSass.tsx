import type { JSXElement } from 'solid-js'

import.meta.glob('./**/*.scss', { eager: true })

/**
 * SassのGlob importを遅延させてバンドル順をdestyle.cssより後にするためだけに存在しているコンポーネント
 *
 * @returns {JSXElement} 空のフラグメント
 */
export const ImportSass = (): JSXElement => <></>
