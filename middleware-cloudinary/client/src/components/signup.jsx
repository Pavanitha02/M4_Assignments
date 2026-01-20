import { useState } from "react"


const signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        image: null
    });
    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target
        setFormData((prev) => ({ ...prev,[name]: value }))

    }
    const handleImageChange=(e)=>{
        const file=e.target.files[0];
        if(file){
            alert("please upload an image");
            return
        }
        setFormData((prev)=>({...prev,image:file}))
    }
    return (
        <div>
            <div>
                <h2>Create Account</h2>

                <form action="">
                    <div>
                        <input type="text" name="name" placeholder="enter full name" value={ }
                            onChange={ handleChange} />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="enter your email" value={ }
                            on onChange={ handleChange} />
                    </div>
                    <div>
                        <input type="file" accept="image/" onChange={handleChange}/>
                    </div>
                    <button type="submit">
                        sign up
                    </button>
                </form>
            </div>
        </div>
    )
}
export default signup