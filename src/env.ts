/**
 * 環境変数が未設定かどうかを判別
 *
 * @template T
 * @param {T | undefined} val 判別する値
 * @returns {T} 判別した値
 * @throws Error
 */
function check<T>(val: T | undefined): T
{
	if (typeof val === "undefined") throw new Error("設定が必須な環境変数が設定されていません。環境変数の設定を見直してください。")
	return val
}

/**
 * "false"かどうか判別
 *
 * @param {string} str 判別する文字列
 * @returns {boolean} 合否
 */
function bool(str: string | undefined): boolean
{
	if (typeof str === "undefined") return false
	return str.toLowerCase() !== "false"
}

// NOTE 将来の追加を見込んで無効化
// eslint-disable-next-line import/prefer-default-export
export const backend = {
	https: bool(import.meta.env.VITE_BACKEND_USE_HTTPS),
	url: bool(import.meta.env.VITE_BACKEND_USE_HTTPS)
		? check(import.meta.env.VITE_BACKEND_URL_HTTPS)
		: check(import.meta.env.VITE_BACKEND_URL_HTTP),
}
