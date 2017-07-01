import React from 'react';
//in JSX need to close tag it it does not have a closing tag
class StorePicker extends React.Component {
  render(){
    return (
      <form action="" className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"/>
        <button type="submit"> Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
