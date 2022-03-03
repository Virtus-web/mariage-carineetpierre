

function Information() {

    return (

        <form action="/items" method="post" encType="multipart/form-data">
            <input type="file" name="test"></input>
            <input type="submit"></input>
        </form>
        
    )
}

export default Information
