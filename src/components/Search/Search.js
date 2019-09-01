import React from 'react';
import {connect} from "react-redux";

function Search({setSearchQuery}) {

    function filterBySearchQuery(event) {
        const searchText = event.target.value.toLowerCase();
        setSearchQuery(searchText);
    }

    return (
        <div className={"right-block-search"}>

            <input type="text"
                   onChange={filterBySearchQuery}

            />
        </div>
    )
}

const mapDispatchProps = (dispatch) => {
    return {
        setSearchQuery: (searchQuery) => dispatch({
            type: "SET_SEARCH_QUERY",
            searchQuery: searchQuery
        }),
    }
};

export default connect(null, mapDispatchProps)(Search);