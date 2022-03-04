// import Form2 from '../components/Form2'

function Information() {

    return (

        // <Form2 />

        <form action="/files" method="post" encType="multipart/form-data">
            <input type="file" name="file"></input>
            <input type="submit"></input>
        </form>
        
    )
}

export default Information
