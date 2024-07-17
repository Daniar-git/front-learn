import {Person} from "./Person.types";

type PersonListProps = {
    persons: Person[]
    // persons: {
    //     first_name: string,
    //     second_name: string
    // }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.persons.map(person => {
                return(
                    <h2>
                        {person.first_name} and {person.second_name}
                    </h2>
                )
            })}
        </div>
    )
}