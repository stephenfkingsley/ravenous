import React from 'react';
import './SearchBar.css';

let sortByOptions = {      //values and keys should be strings
		'Best Match': 'best_match',
		'Highest Rated': 'rating',
		'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
 constructor(props) {
	 super(props);
	 this.state = {
		 term: '',
	   location: '',
	   sortBy: 'best_match'};
 }

 getSortByClass (sortByOption) {
	 if (this.state.sortBy === sortByOption) {
		 return 'active';
	 }  else {
		 return '';
	 }
 }

 renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
					const sortByOptionValue = sortByOptions[sortByOption];
					return <li className={getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
				});
	}

	handleSortByChange (sortByOption) {
		this.setState({
			sortBy: sortByOption });
	}

   render() {
	   return (
	<div className="SearchBar">
	   <div className="SearchBar-sort-options">
	    <ul>
        {this.renderSortByOptions()}
	    </ul>
	  </div>
	  <div className="SearchBar-fields">
	    <input placeholder="Search Businesses" />
	    <input placeholder="Where?" />
	  </div>
	  <div className="SearchBar-submit">
	    <a>Let's Go</a>
	  </div>
	</div>
	)
   }
}

export default SearchBar;
