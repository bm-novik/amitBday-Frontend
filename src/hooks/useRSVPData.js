import {useMutation} from 'react-query'
import {Client} from '../utils/axios-utils'

const RsvpRequest = rsvpData => {
    return Client({url: '/rsvp', method: 'post', data: rsvpData})
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
