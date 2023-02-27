import * as request from '~/utils/httpRequest';

export const suggested = async (page, perPage) => {
    let except = 8
    try {
        const res = await request.get('users/suggested', {
            param: {
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