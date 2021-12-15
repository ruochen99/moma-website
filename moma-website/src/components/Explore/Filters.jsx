import React, { Component } from 'react';
import Select from 'react-select';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';


export class Filters extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { filters, filterHandler } = this.props;
    // console.log(filters);
    // const activity = "chocolate";

    return (
        <div className="filter">
          <Container>
            <Row>
              <Col>
                <div className="filter-select">
                  <p className="filter-title">Activity</p>
                  <Select
                    isClearable
                    options={filters['activity']}
                    onChange={(item) => (item ? filterHandler("activity", item.label) : filterHandler("activity", ""))}
                    // value={activity}
                    placeholder="Choose an activity..."
                    components={{
                      // IndicatorSeparator: () => null
                    }}
                  />
                </div>
              </Col>
              <Col>
                <div className="filter-select">
                  <p className="filter-title">Sub-Activity</p>
                  <Select
                    isClearable
                    options={filters['subActivity']}
                    onChange={(item) => (item ? filterHandler("subActivity", item.label) : filterHandler("subActivity", ""))}
                    // value={activity}
                    placeholder="Choose a sub-activity..."
                    components={{
                      // IndicatorSeparator: () => null
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="filter-select">
                  <p className="filter-title">Actor</p>
                  <Select
                    isClearable
                    options={filters['actor']}
                    onChange={(item) => (item ? filterHandler("actor", item.label) : filterHandler("actor", ""))}
                    // value={activity}
                    placeholder="Choose an actor..."
                    components={{
                      // IndicatorSeparator: () => null
                    }}
                  />
                </div>
              </Col>
              <Col>
                <div className="filter-select">
                  <p className="filter-title">Object</p>
                  <Select
                    isClearable
                    options={filters['object']}
                    onChange={(item) => (item ? filterHandler("object", item.label) : filterHandler("object", ""))}
                    // value={activity}
                    placeholder="Choose an object..."
                    components={{
                      // IndicatorSeparator: () => null
                    }}
                  />
                </div>
              </Col>
              <Col>
                <div className="filter-select">
                  <p className="filter-title">Atomic Action</p>
                  <Select
                    isClearable
                    options={filters['atomicAction']}
                    onChange={(item) => (item ? filterHandler("atomicAction", item.label) : filterHandler("atomicAction", ""))}
                    // value={activity}
                    placeholder="Choose an atomic action..."
                    components={{
                      // IndicatorSeparator: () => null
                    }}
                  />
                </div>
              </Col>
              <Col>
                <div className="filter-select">
                  <p className="filter-title">Relationship</p>
                  <Select
                    isClearable
                    options={filters['relationship']}
                    onChange={(item) => (item ? filterHandler("relationship", item.label) : filterHandler("relationship", ""))}
                    // value={activity}
                    placeholder="Choose a relationship..."
                    components={{
                      // IndicatorSeparator: () => null
                    }}
                  />
                </div>
              </Col>
            </Row>

          </Container>
        </div>

    )
  }
}

export default Filters;
