import "./SearchApp.css";

import React, { Component } from "react";

import List from "../../shared/List/List";
import ListItem from "../../shared/List/ListItem/ListItem";
import SearchInput from "../../shared/SearchInput/SearchInput";
import brandsStub from "./brandsStub";

class SearchApp extends Component {
  state = {
    searchKeyword: "",
    brands: brandsStub,
    searchedBrands: brandsStub
  };

  onKeywordChange = event => {
    this.setState({ searchKeyword: event.target.value });

    this.setState({
      searchedBrands: this.getSearchedBrands(event.target.value)
    });
  };

  getSearchedBrands = keyword => {
    return this.state.brands.filter(
      brand => brand.name.includes(keyword) || !keyword
    );
  };

  render() {
    return (
      <div className="search-app">
        <h2>Search App</h2>

        <form onSubmit={this.submit}>
          <SearchInput
            onChange={this.onKeywordChange}
            placeholder="Search brand..."
          />
        </form>
        <List>
          {this.state.searchedBrands.map((brand, index) => (
            <ListItem key={index}>
              <div>{brand.name}</div>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default SearchApp;
