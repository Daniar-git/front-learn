import {PersonProps} from "./Person.types";


export const Person = (props: PersonProps) => {
	return (
		<div>
			<h2>{props.person.first_name}</h2>
			<h2>Yes</h2>
			<h2>{props.person.second_name}</h2>
		</div>
	)
}