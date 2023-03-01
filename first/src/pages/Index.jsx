const Index = () => {
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
        <tr>
          <td>Product one</td>
          <td>2000</td>
          <td>
            <button className="edit">Edit</button>
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>Product tow</td>
          <td>2000</td>
          <td>
            <button className="edit">Edit</button>
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Index;
