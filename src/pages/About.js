

function Information() {

    return (
        
        <form method="POST" action="https://mariage-carineetpierre.herokuapp.com/items" encType="multipart/form-data">
            <input type="file" name="test"></input>
            <input type="submit"></input>
        </form>
        
    )
}

export default Information
