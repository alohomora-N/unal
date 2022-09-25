import React from "react";
import { FiEdit, FiPlay, FiTarget } from "react-icons/fi";
import "./Card.css";

export default class Card extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      content: props.cardContent,
      id: props.cardId,
    };
  }

  render() {
    return (
      <div className="card">
        <p className="content">{this.state.content}</p>
        <div className="btnList">
          <FiEdit
            onClick={() => {
              console.log(this.state);
            }}
          />
          <FiPlay />
        </div>
      </div>
    );
  }
}
