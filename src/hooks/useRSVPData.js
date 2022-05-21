import {useInfiniteQuery, useMutation, useQuery} from 'react-query'
import {Client, request} from '../utils/axios-utils'
import {useSetRecoilState} from "recoil";
import {authSelector} from "../recoil/atomStore";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../utils/config";

const LoginRequest = data => {
    return Client({url: '/login', method: 'post', data: data})
}

const SignupRequest = data => {
    return Client({url: '/register', method: 'post', data: data})
}

const AddSongRequest = data => {
    return request({url: '/song/', method: 'post', data: data})
}

const RsvpRequest = rsvpData => {
    return Client({url: '/rsvp', method: 'post', data: rsvpData})
}

const FetchRsvpRequest = () => {
    return Client({url: '/rsvp'})
}

const FetchCalcRequest = () => {
    return Client({url: '/rating/rating_calc'})
}

const FetchSongsListRequest = (pageParam) => {
    return request({url: `${pageParam}`})
}

const CheckTokenRequest = data => {
    return request({url: '/check_token', method: 'post', data: data})
}

const AddRatingRequest = data => {
    return request({url: '/rating/', method: 'post', data: data})
}

// ###################################################################################################### \\
export const useRsvpData = (onSuccess) => {
    return (
        useMutation('useRsvpPost', RsvpRequest,
            {
                onSuccess,
            }
        )
    )
}

export const useRsvpGetData = () => {
    return (
        useQuery('useRsvpGet', FetchRsvpRequest,
            {

            }
        )
    )
}

export const useCalcData = () => {
    return (
        useQuery('useCalc', FetchCalcRequest,
            {

            }
        )
    )
}


export const useLoginData = () => {
    const setAuth = useSetRecoilState(authSelector)
    const navigate = useNavigate()
    return (
        useMutation('uselogin', LoginRequest,
            {
                onSuccess: ({data}) => {
                    window.localStorage.setItem('token', data.token)
                    setAuth(data)
                    navigate('/rating')
                }
            }
        )
    )
}

export const useCheckTokenData = (onSuccess, onError) => {
    return (
        useMutation('useCheckToken', CheckTokenRequest,
            {
                onSuccess,
                onError
            }
        )
    )
}

export const useSignupData = (onSuccess) => {
    return (
        useMutation('useSignup', SignupRequest,
            {
                onSuccess
            }
        )
    )
}

export const useAddSongData = (onSuccess) => {
    return (
        useMutation('useAddSong', AddSongRequest,
            {
                onSuccess,
            }
        )
    )
}

export const useGetSongsListData = (getNextPageParam) => {
    return (
        useInfiniteQuery(['useGetSongsList'], ({ pageParam = `${BASE_URL}/song/`}) =>
        FetchSongsListRequest(pageParam),
            {
                keepPreviousData: true,
                getNextPageParam
            }
        )
    )
}

export const useAddRatingData = (onSettled) => {
    return (
        useMutation('useAddRating', AddRatingRequest,
            {
                onSettled,
            }
        )
    )
}
