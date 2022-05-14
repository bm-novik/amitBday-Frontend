import {useMutation, useQuery} from 'react-query'
import {Client} from '../utils/axios-utils'

const RsvpRequest = rsvpData => {
    return Client({url: '/rsvp', method: 'post', data: rsvpData})
}

const FetchRsvpRequest = rsvpData => {
    return Client({url: '/rsvp'})
}


export const useRsvpData = (onSuccess) => {
    return (
        useMutation('rsvp', RsvpRequest,
            {
                onSuccess,
            }
        )
    )
}

export const useRsvpGetData = () => {
    return (
        useQuery('useTopFive', FetchRsvpRequest,
            {
                enabled:false
            }
        )
    )
}
