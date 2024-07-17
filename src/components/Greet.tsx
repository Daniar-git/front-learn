type GreetProps = {
	name: string,
	messageCount: number,
	isLoggedIn: boolean
}

export const Greet = ({name, messageCount, isLoggedIn}: GreetProps) => {
	return (
		<div>
			{
				isLoggedIn ? `${name}, ${messageCount}` : 'Login'
			}
			{/* <h2>{props.name}, {props.messageCount}, is logged in: {props.isLoggedIn}</h2> */}
		</div>
	)
}