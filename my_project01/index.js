const express  = require('express');
const app = express();

const users = require('./MOCK_DATA.json');
const fs = require('fs');
const { error } = require('console');
const PORT = 8000;


// Middleware - here saying pluggins
app.use(express.urlencoded({extended: false}))


// for POST

app.post('/api/users', (req, res) => {
    //  TODO: create new user
    const body = req.body;
    users.push({...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (error,data) => {

        return res.json({status: 'success', id: users.length});
    })
    // console.log("Body", body);
    
    
    })
    
   
// for html return 
app.get('/users', (req,res)=> {
    const html = `
    <ul>
    ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html);
})


// REST API
app.get('/api/users', (req, res) => {
    return res.json(users)
 })


// //dynamic id
// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//    return res.json(user)
// })


// // for PATCH(or update)
// app.patch('/api/users/:id', (req, res) => {
// //  TODO: EDIT the user with ID
//    return res.json({status: 'pending'});
// })


// // for DALETE
// app.delete('/api/users/:id', (req, res) => {
// //  TODO: DELETE the user with ID
//    return res.json({status: 'pending'});
// })
// Note- merging similar type of code in one function

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
   return res.json(user)
})
.put((req,res) => {
    const id = Number(req.params.id);
        let user = users.find((user) => user.id === id);
        
        if (!user) {
            return res.status(404).json({ status: 'User not found' });
        }

        // Update user with new data from request body

        console.log("first user data is:", user);
        user = { ...user, ...req.body };
        console.log("user data is:", user);
        
        
        // Update users array with modified user
        const updatedUsers = users.map((u) => (u.id === id ? user : u));
console.log("updated user: ",updatedUsers);

        // Save updated users array to MOCK_DATA.json
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(updatedUsers), (err) => {
            if (err) {
                return res.status(500).json({ status: 'Error updating user' });
            }
            return res.json({ status: 'success', user });
            console.log("user is:", user);
            
        });
    
})
.delete( (req, res) => {
    const id = Number(req.params.id); // Get ID from request
    console.log("Attempting to delete user with ID:", id);
    
    // Step 1: Read the file to get the current data
    fs.readFile('./MOCK_DATA.json', 'utf8', (err, data) => {
        console.log("data",data);

            // Step 2: Parse the JSON data
            const users = JSON.parse(data);

            // Step 3: Find and remove the user with the given ID
            const updatedUsers = users.filter((user) => user.id !== id);
            
          
            // Step 4: Write the updated data back to the file
            // fs.writeFile('./MOCK_DATA.json', JSON.stringify(updatedUsers, null, 2), (err) => {
                console.log("data type is:",typeof(updatedUsers));
                //writing and converting into JSON string
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(updatedUsers), (err) => {
              

                // Return a success response
                console.log("User deleted successfully");
                return res.json({ status: 'User deleted' });
            });

        
    });
});


app.listen(PORT, ()=> console.log(`Server started at Port: ${PORT}`)
)
