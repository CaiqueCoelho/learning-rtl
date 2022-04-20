import { rest } from 'msw'

export const handlers = [
    rest.get(`${process.env.REACT_APP_URL}/find-friends`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([{username: 'Friend1'}, {username: 'Friend2'}])
        )
    }),
    rest.post(`${process.env.REACT_APP_URL}/VanHalen/add-friend`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({added: "friend added"})
        )
    })
]