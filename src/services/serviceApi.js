import * as request from '~/utils/httpRequest';

export const suggested = async (page, perPage) => {
    let except = 8
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                except,
                'per_page': perPage,
            },
        })
        return res.data
    }
    catch (error) {

    }
}

export const getVideo = async (type, page) => {
    try {
        const res = await request.get('videos', {
            params: {
                type,
                page,
            },
        })
        return res.data
    }
    catch (error) {

    }
}