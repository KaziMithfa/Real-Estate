import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  useEffect(() => {
    document.title = "Update Profile";
  }, []);

  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.photoURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(name, image)
      .then(() => {
        const message = "The user has been successfully updated his profile";
        toast.success(message);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleNameChange = (e) => {
    const nametxt = e.target.value;
    setName(nametxt);
  };

  const handleImageChange = (e) => {
    const imagetxt = e.target.value;
    setImage(imagetxt);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card-body lg:w-1/2 md:w-3/4 mx-auto"
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
          value={email}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered"
          onChange={handleNameChange}
          value={name}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Image Link</span>
        </label>
        <input
          type="text"
          name="image"
          placeholder="image link"
          className="input input-bordered"
          onChange={handleImageChange}
          value={image}
          required
        />
      </div>

      <div className="form-control mt-6">
        <button className="btn btn-primary">Update</button>
      </div>
    </form>
  );
};

export default UpdateProfile;
