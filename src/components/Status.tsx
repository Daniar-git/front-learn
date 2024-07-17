type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let massage
    if(props.status === 'loading'){
        massage = 'loading'
    }else if(props.status === 'success'){
        massage = 'success'
    }else if(props.status === 'error'){
        massage = 'error'
    }

    return(
        <h2>
            Status - {massage}
        </h2>
    )
}