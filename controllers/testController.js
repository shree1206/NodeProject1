export const testPostController = (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    res.status(201).send(`you are passing ${name} ${age}`)
}