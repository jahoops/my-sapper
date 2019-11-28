<script>
    import axios from 'axios'
    let newText = 'nada';
    async function getUsers(){
        let response = await axios.get('getapi',{port: 3000});
        let data = await response.data;
        return data;
    }
    getUsers().then(data => newText = data); 
</script>

<h1>Get Users:</h1>
<button id="mybutton" class="btn btn-sm btn-success" 
onclick="getElementById('mybutton').innerHTML = '{newText}'">Get!</button>