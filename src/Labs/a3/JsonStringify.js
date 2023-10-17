
function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  console.log(squares);
  return (
    <div>
      <h4>Json Stringify</h4>
      squares = {JSON.stringify(squares)}
      <br />
    </div>
  );


}

export default JsonStringify;