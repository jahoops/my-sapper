
function createUserTable() {
    try {
        await db.run(`
			CREATE TABLE user
			(
                firstName Text,
                lastName Text
			)
    	`);	
    } catch (error) {
        throw Error('Could not create table')
    }
}