import React from 'react';
import Header from './components/header';
import HeadLine from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './action';

import './app.scss';

const tempArray = [
  {
    fName: 'Ben',
    lName: 'Lee',
    email: 'giadieuly@gmail.com',
    age: 32,
    onlineStatus: true,
  },
];

class App extends React.Component {
  state = { hideBtn: false, count: 0 };
  fetch = () => {
    this.props.fetchPosts();
    this.hide();
  };

  hide = () => {
    this.setState({ hideBtn: !this.state.hideBtn });
  };

  exampleUpdate_methodValue = (number) => {
    return number + 1;
  };

  render() {
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch,
    };

    const { posts } = this.props;
    return (
      <div data-test="appComponent">
        <Header />
        <section className="main">
          <HeadLine
            header="Posts"
            desc="Click the button the render the posts"
            tempArr={tempArray}
          />

          {!this.state.hideBtn && <SharedButton {...configButton} />}

          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return (
                  <ListItem key={`${post.id}${title}`} {...configListItem} />
                );
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
