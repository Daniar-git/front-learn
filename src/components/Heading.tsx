type HeadinProps = {
	children: string
}

export const Heading = (props: HeadinProps) => {
	return <h2>{props.children}</h2>
}