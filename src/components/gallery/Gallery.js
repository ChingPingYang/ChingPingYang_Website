import React, { Component, lazy, Suspense } from "react";
import { data } from "./data";
import Filter from "./filter/Filter";
// import Card from "./card/Card";
import Modal from "./modal/Modal";
const Card = lazy(() => import("./card/Card"));

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      filters: data.filters,
      works: data.works,
      currentFilter: "All",
      isIn: false,
      selectedCard: null,
      modalOpen: false,
      expand_gallery: false,
    };
  }

  changeCurrentFilter = (filter) => {
    this.setState({
      currentFilter: filter,
    });
  };

  resetIsIn = () => {
    this.setState({
      isIn: false,
    });
    setTimeout(() => {
      this.setState({
        isIn: true,
      });
    }, 250);
  };

  handleClickedCard = (card) => {
    this.setState(
      {
        selectedCard: card,
      },
      () => {
        this.setState({
          modalOpen: true,
        });
      }
    );
  };

  handleCloseModal = (e) => {
    if (
      e.target.className === "modal_container" ||
      e.target.className === "modal_cross_container" ||
      e.target.className === "modal_crossBody bottom" ||
      e.target.className === "modal_crossBody top"
    ) {
      this.setState({
        modalOpen: false,
      });
      e.target.scrollTop = 0;
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isIn: true,
      });
    }, 250);
  }

  render() {
    return (
      <section className="gallery_wrapper">
        <div
          id="gallery"
          className={
            this.state.expand_gallery
              ? "gallery_container expand"
              : "gallery_container"
          }
        >
          <Filter
            filters={this.state.filters}
            currentFilter={this.state.currentFilter}
            changeCurrentFilter={this.changeCurrentFilter}
            resetIsIn={this.resetIsIn}
          />
          <Suspense
            fallback={<div className="gallery_fallback">Loading...</div>}
          >
            <Card
              works={this.state.works}
              currentFilter={this.state.currentFilter}
              handleClickedCard={this.handleClickedCard}
              isIn={this.state.isIn}
            />
          </Suspense>
          <Modal
            selectedCard={this.state.selectedCard}
            modalOpen={this.state.modalOpen}
            handleCloseModal={this.handleCloseModal}
          />
        </div>
        <div
          className="expand_gallery"
          style={this.state.expand_gallery ? { display: "none" } : {}}
        >
          <div
            className="expandBtn"
            onClick={() => this.setState({ expand_gallery: true })}
          >
            Expand To See My Design Projects
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
