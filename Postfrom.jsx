import { useState } from "react";
import axios from "axios";
export default function Postfrom() {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [image, setImage] = useState("helo bitch");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstname,
      lastname,
      image,
    };

    try {
    //   console.log(data);
      const res = await axios.post("/mypost", data);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleOnChange = e => {
 
  const file = e.target.files[0]
  const reader = new FileReader();
    
 reader.onload = function(){
     setImage(reader.result)
     console.log(reader.result);
     console.log(image);
 }

 reader.readAsDataURL(file);
 
  };

  return (
    <>
      <div className="bg-dark text-white">
        <div class="container  mt-4 col-4 col-offset-6">
          <h1 class="display-3">POST form</h1>
          <form method="POST" onSubmit={handleSubmit} encType="application/x-www-form-urlencoded">
            <div class="mb-3">
              <label for="firstname" class="form-label">
                firstname
              </label>
              <input
                type="text"
                name="firstname"
                class="form-control"
                id="firstname"
                aria-describedby="emailHelp"
                value={firstname}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="lastname" class="form-label">
                lastname
              </label>
              <input
                type="text"
                name="lastname"
                class="form-control"
                id="lastname"
                value={lastname}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <div class="mb-3">
              <label 
               for="file">
              Choose a file
              </label>

              <input
                type="file"
                id="file"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div>{image}</div>
      </div>
    </>
  );
}
