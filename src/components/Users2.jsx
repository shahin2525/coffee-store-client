import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Users2 = () => {
  const {
    error,
    data: users,
    isPending,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/users");

      return response.json();
    },
  });
  if (isPending) {
    return <p>pending</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  //   const [users2, setUsers] = useState(users);
  //   console.log(users2);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              //   const remainingUser = users.filter((user) => user._id !== id);
              //   setUsers(remainingUser);
            }
          });
      }
    });
  };
  return (
    <div>
      <h1>suers info from db {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button onClick={() => handleDelete(user._id)}>X</button>
                </td>
              </tr>
            ))}

            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users2;
