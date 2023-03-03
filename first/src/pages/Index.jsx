import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../store/addSlice";

const Index = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const deleteHandel = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {state.length !== 0 ? (
          state.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button className="edit">Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteHandel(index)}>Delete</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>no data avilanle</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Index;
