export async function get (req, res) {
  try {
    res.end('hi')
  } catch (err) {
    res.statusCode = err.status
    res.end(JSON.stringify(err))
  }
}
    /*function filterUsers(search){
        try {
            let allRows = 
            await db.all(`SELECT firstName, lastName 
                FROM user 
                WHERE firstName LIKE ?`,
                "%{search}%", ` OR lastName LIKE ?`, "%{search}%", 
                function(err, data){
                    if(err != null){
                        allRows = err;
                    } else {
                        allRows = data;
                    }
                });
            let html = '';
            allRows.forEach(row => {
                html+=`<p>hello ${row.firstName} ${row.lastName}</p>`;
            });
            res.end(html); 
        } catch (error) {
            throw Error('Could not filter users');
        }
    }*/
    //filterusers('Mi');
