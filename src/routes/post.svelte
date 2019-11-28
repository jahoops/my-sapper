<script>
function postSomething(){
    fetch('postapi', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({data:'yum'})
    })
}
</script>

<h1>Post here:</h1>
<button class="btn btn-sm btn-success" 
onclick={postSomething}>Post!</button>