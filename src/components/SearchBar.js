import React,{useState} from 'react';

const SearchBar = (props) => {
  const[term,setTerm] = useState('')

  const onInputChange = e => {
    setTerm(e.target.value);
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    props.onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form 
         className="ui form"
         onSubmit = {onSubmitHandler}>
        <div className="feild">
          <label>Video Serach</label>
          <input 
            type = "text"
            value = {term}
            onChange = {onInputChange}/>
        </div>
      </form>
    </div>
  );
}
export default SearchBar;
