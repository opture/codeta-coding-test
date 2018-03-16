import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from "./Card";

class Dashboard extends React.Component {
  render() {
    let { games = [] } = this.props.games;

    return (
      <div className="row">
        {games.map((game, index) => (
          <Card
            className="col-3"
            key={index}
            name={game.name}
            imageUrl={game.thumbnail}
          />
        ))}
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators({}, dispatch)
)(Dashboard);
