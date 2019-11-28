export function post(res, req, next){
    console.log(req.body);
    function insertUser(first, last){
        try {
            const insertString = `
                INSERT INTO user
                (firstName, lastName)
                VALUES (?,?)
            `;
            await db.run(insertString,
                first,
                last"
            );
        } catch (error) {
            throw Error('Could not insert new user');
        }
    }
}    

