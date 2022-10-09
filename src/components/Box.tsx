import {
	JSX, JSXElement, mergeProps, splitProps,
} from "solid-js"
import { Dynamic } from "solid-js/web"
import "./Box.scss"

interface BoxProps<T extends keyof HTMLElementTagNameMap> extends JSX.HTMLAttributes<T> {

  // NOTE 元の型定義がanyなので追従
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  component?: T;
}

const Box = <T extends keyof HTMLElementTagNameMap>(props: BoxProps<T>): JSXElement =>
{
	const [classList, other] = splitProps(props, ["classList"])
	const mergedOther = mergeProps({ component: "div" }, other)
	return (
		<Dynamic
			{...mergedOther}
			classList={{
				...classList.classList,
				"exd-component-box": true,
			}}
		/>
	)
}

export default Box
