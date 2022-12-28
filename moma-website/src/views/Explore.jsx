import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import ExploreCard from '../components/Explore/ExploreCard';
import SearchImg from "../assets/icons/search.svg";
import Filters from '../components/Explore/Filters';
import axios from 'axios';

class Explore extends Component {

  constructor(props) {
      super(props);
      this.state = {
        hide: true,
        activityClass: "tennis",
        data: [],
        filters: {}, //available options
        selectedFilters: {
          activity: "",
          subActivity: "",
          actor: "",
          object: "",
          atomicAction: "",
          relationship: ""
        },
        all_unions: new Set()
      }
  }

  componentWillMount() {
    document.body.style.overflow = "hidden";
  }

  componentDidMount = () => {
    this.getFilters({});
    this.getData({});
  }

  getData = (filters) => {
    const url = 'http://localhost:8000/api/explore/videos/';
    axios.get(url, { params: { filters: filters } })
      .then(res => {
        // console.log(res);
        this.setState({
          data:res.data
        })
      },
      error => console.log('An error occurred.', error),
    );
  }

  getFilters = (filters) => {
    const url = 'http://localhost:8000/api/explore/filters/';
    // filters = JSON.stringify(filters);
    axios.get(url, { params: {filters: filters }})
      .then(res => {
        this.setState({
          filters: res.data
        })
      },
      error => console.log('An error occurred.', error),
    );
  }

  filterHandler = (filter, value) => {
    // console.log(value);
    var { selectedFilters } = this.state;
    selectedFilters[filter] = value;
    this.setState({
      selectedFilters: selectedFilters
    })
    // this.getData();
    this.filter(selectedFilters);
    // this.getFilters(selectedFilters);
    this.getModifiedFilters();
  }

  getModifiedFilters = () => {
    const { data, all_unions } = this.state;
    const url = 'http://localhost:8000/api/explore/filters/';
    // filters = JSON.stringify(filters);
    console.log(all_unions);
    axios.get(url)
      .then(res => {
        var modifiedFilters = {}
        var filters = res.data;
        if (all_unions.size == 0) {
          this.setState({
            filters: filters
          })
        } else {
          for (var filter in filters) {
            modifiedFilters[filter] = []
            filters[filter].forEach((item, i) => {

              if (all_unions.has(item.name)) {

                modifiedFilters[filter].push(item)
              }
            });
          }

          this.setState({
            filters: modifiedFilters
          })
        }

      },
      error => console.log('An error occurred.', error),
    );
  }

  filter = (filters) => {
    const url = 'http://localhost:8000/api/explore/videos/';
    axios.get(url)
      .then(res => {
        var data = res.data;
        var filterResult = [];
        var empty = true;
        for (var key in filters) {
          if (filters[key]) {
            empty = false;
            break;
          }
        }
        var all_unions = new Set();
        if (empty) {
          this.setState({
            data: data,
            all_unions: all_unions
          })
        }
        else {

          data.forEach((video, i) => {
            var unions = new Set();
            unions.add(video.activity);
            video.images.forEach((image, i) => {
              unions.add(image.sub_activity);
              image.entities.forEach((entity, i) => {
                unions.add(entity.text)
              });
              image.attributes.forEach((attribute, i) => {
                unions.add(attribute.text)
              });
              image.relationships.forEach((relationship, i) => {
                unions.add(relationship.text)
              });
            });

            var show = true;
            for (var key in filters) {
              if (filters[key] && !unions.has(filters[key])) {
                show = false;
                break;
              }
            }
            if (show) {
              filterResult.push(video);
              unions.forEach((ele, i) => {
                all_unions.add(ele)
              });
            }
          });
          this.setState({
            data:filterResult,
            all_unions: all_unions
          })
        }
        this.getModifiedFilters();
      },
      error => console.log('An error occurred.', error),
    );

  }

  buildFilters = () => {
    const { filters } = this.state;
    // console.log(filters);
    var filterMap = {};

    const activityOptions = filters.activity ? filters.activity.map(act => {
      return {
        value: act.id,
        label: act.name,
      }
    }) : [];
    filterMap["activity"] = activityOptions;

    const subActivityOptions = filters.sub_activity ? filters.sub_activity.map(act => {
      return {
        value: act.id,
        label: act.name,
      }
    }) : [];
    filterMap["subActivity"] = subActivityOptions;

    const actorOptions = filters.actor ? filters.actor.map(act => {
      return {
        value: act.id,
        label: act.name,
      }
    }) : [];
    filterMap["actor"] = actorOptions;

    const objectOptions = filters.object ? filters.object.map(act => {
      return {
        value: act.id,
        label: act.name,
      }
    }) : [];
    filterMap["object"] = objectOptions;

    const atomicActionOptions = filters.atomic_action ? filters.atomic_action.map(act => {
      return {
        value: act.id,
        label: act.name,
      }
    }) : [];
    filterMap["atomicAction"] = atomicActionOptions;

    const relationshipOptions = filters.relationship ? filters.relationship.map(act => {
      return {
        value: act.id,
        label: act.name,
      }
    }) : [];
    filterMap["relationship"] = relationshipOptions;

    return filterMap;

  }

  render() {
    const { data, hide } = this.state;
    // console.log(data);
    console.log(hide);
    return (
      <div className="explore">
        {hide ?
          <Container>
            <Row>
              <h1 className="explore-title"> Explore </h1>
            </Row>
            <Row>
              <h6 className="explore-text"> The explore page is coming soon... </h6>
            </Row>
          </Container>
        :
        <Container className="explore-contianer">
          <Row className="explore-filter">
            <Filters filters={this.buildFilters()} filterHandler={this.filterHandler}/>
          </Row>
          {data.map(video => (
            <Row >
              <Col md={{span: 10}}>
                <ExploreCard video={video}/>
              </Col>
            </Row>
          ))}
        </Container>}
      </div>

    )

  }
}

export default Explore;
