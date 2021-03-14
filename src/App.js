import './App.css';

// const words = [
//   'spray',
//   'limit',
//   'elite',
//   'exuberant',
//   'destruction',
//   'present'
// ];
// const filteredWords = words.filter(function(word) {
//   return word.length > 6;
//   })
// console.log(filteredWords)

  const App = () => {
    const stories = [
      {
        title: 'React',
        url:'https://react.js.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: 'Redux',
        url:'https://redux.js.org/',
        author:'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
      },
    ];
  
    // const List = ({list}) => 
    // list.map(item => <Item key={item.objectID} item={item} />);
    // const Item = ({item}) => (
    //   <div>
    //     <span>
    //       <a href={item.url}>{item.title}</a>
    //     </span>
    //     <span>{item.author}</span>
    //     <span>{item.num_comments}</span>
    //     <span>{item.points}</span>
    //   </div>
    // )
   
    // const handleSearch = event => {
    //  console.log(event.target.value)
    // }
    
    const handleFetchStories = React.useCallback(() => {
      if (!searchTerm) return;

      dispatchStories({ type : 'STORIES_FETCH_INIT' });

      fetch(`${API_ENDPOINT}${SEARCHTERM}`)
      .then(response => response.json())
      .then(result => {
        dispatchStories({
          type: 'STORIES_FETCH_SUCCESS',
          payload: result.hits,
        }),
      }),
      .catch(() =>
      dispatchStories({type: 'STORIES_FETCH_FAILURE'});
      );
    }, [searchTerm]);
  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);
};
  // const Search = props => (
  //   <div> 
  //    <label htmlFor="search">Search: </label>
  //    <input id='search' type='text' onChange={props.onSearch}/>
  //   </div>
  // )
  
  export default App;
