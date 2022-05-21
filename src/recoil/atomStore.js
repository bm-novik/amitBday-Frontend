import {atom, selector} from "recoil";

const authAtom = atom({
    key: 'auth',
    default: {
        firstName: '',
        lastName: '',
        staff: false,
        superUser: false,
        token:''
    },
});

export const authSelector = selector({
    key: 'authSelector',
    get: ({get}) => {
        return get(authAtom);
    },
    set: ({get, set}, data) => {
        let authState = get(authAtom)

        set(authAtom, {
            firstName: data.user.first_name,
            lastName: data.user.last_name,
            staff: data.user.is_staff,
            superUser: data.user.is_superuser,
            token: window.localStorage.getItem('token') || data.token
        })
    },
});