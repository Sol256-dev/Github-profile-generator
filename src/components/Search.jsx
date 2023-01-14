import { Form } from "react-router-dom";

const SearchBox = (props) => {

  return (
    <div className="card">
      <div className="card-content">
        <Form
          method="get" 
          //   onSubmit={addValueToState}
          //   action="/"
          className="card-content-search"
        >
          <input
            type="search"
            name=""
            id="input"
            placeholder="Type profile name here"
            autoFocus
            onChange={(e) => {
              props.setProf(e.target.value);
            }}
          />
          <button>
            <i className="fa fa-search fa-2x"></i>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SearchBox;
