import React from 'react'
import { Input} from 'semantic-ui-react'


const Search = ({searchField, updateSearch, submitForm}) => {
  return(
    <form onSubmit={submitForm}>
      <h2>Enter City:</h2>
      <Input type="text" value={searchField} onChange={updateSearch} placeholder="Enter City..."/>
    </form>
  )
}

export default Search
