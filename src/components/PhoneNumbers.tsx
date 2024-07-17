type PhoneNumbersProps = {
    numbers: {
        name: string,
        number: number
    }[]
}

export const PhoneNumbers = (props: PhoneNumbersProps) => {
    return (
        <div>
            {props.numbers.map(number => {
                return(
                    <h2>
                        {number.name} has number - {number.number}
                    </h2>
                )
            })}
        </div>
    )
}