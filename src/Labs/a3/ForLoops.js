function ForLoops(){
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];
    for (let i = 0;
         i < stringArray1.length;
         i++) {
      const string1 = stringArray1[i];
      stringArray2.push(
        string1.toUpperCase());
    }
    return(
        <div>
            <h4>Looping through Arrays</h4>
            stringArray1 = {stringArray1}
            <br />
            stringArray2= {stringArray2}
            <br />
        </div>
    );
  
}
export default ForLoops;