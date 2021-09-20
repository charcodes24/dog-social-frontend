import React from 'react'

function NewPostForm() {


    return (
        <>
        <h3 className="ui header">New Post</h3>
        <form className="ui form">
            <div className="field">
                <label htmlFor="picture">Choose a picture to upload:</label>
                <input type="file" accept="image/png, image/jpeg"/>
            </div>
            <div className="field">
                <label>Description</label>
                <textarea rows="2"></textarea>
            </div>
        </form>
        </>
    )
}

export default NewPostForm
