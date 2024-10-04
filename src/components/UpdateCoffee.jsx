import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  // const { _id, name, quantity, supplier, taste, photo } = coffee;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const data = { name, quantity, supplier, taste, category, details, photo };
    //

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${coffee._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.matchedCount > 0) {
              Swal.fire({
                title: "Update!",
                text: "Your file has been update.",
                icon: "success",
              });
            }
          });
      }
    });

    form.reset();
  };
  return (
    <div className="bg-slate-100 p-20">
      <h1>Add a Coffee</h1>
      <form onSubmit={handleUpdate}>
        <div className="md:flex gap-4 mb-3">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Coffee Name</span>
            </div>
            <input
              name="name"
              type="text"
              placeholder={coffee.name}
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Available Quantity</span>
            </div>
            <input
              name="quantity"
              type="number"
              placeholder={coffee.quantity}
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
        </div>
        <div className="md:flex gap-4 mb-3">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Supplier Name</span>
            </div>
            <input
              name="supplier"
              type="text"
              placeholder={coffee.supplier}
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              name="taste"
              type="text"
              placeholder={coffee.supplier}
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
        </div>
        <div className="md:flex gap-4 mb-3">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              name="category"
              type="text"
              placeholder={coffee.category}
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              name="details"
              type="text"
              placeholder={coffee.details}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className=" mb-3">
          <label className="form-control md:w-full">
            <div className="label">
              <span className="label-text">Photo-URL</span>
            </div>
            <input
              name="photo"
              type="text"
              placeholder={coffee.photo}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          className="btn btn-block bg-green-300"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
