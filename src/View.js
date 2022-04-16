// import React, { useEffect, useState } from "react";
// // import ChartistGraph from "react-chartist";

// import {Card} from "react-bootstrap";
// // react-bootstrap components
// import {
//   Button,
//   Card,
//   Table,
//   Container,
//   Row,
//   Col,
//   Form,
// } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
//       result.json().then((resp) => {
//         setData(resp);
//       });
//     });
//   }, []);
//   return (
//     <>
//       <Container fluid>
//         <Row>
//           {/* <Col lg="3" sm="6"> */}
//           {/* <Card className="card-stats"> */}
//           {/* <Card.Body></Card.Body> */}
//           {/* <Card.Footer>
//                 <hr></hr>
//               </Card.Footer> */}
//           {/* </Card> */}
//           {/* </Col> */}
//           <Col lg="4" sm="5">
//             <Card className="card-stats">
//               <Card.Body>
//                 <h3>View Assignment</h3>{" "}
//                 <h5>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s
//                 </h5>
//                 <Row>
//                   <Col xs="0">
//                     <div className="icon-big text-center icon-warning">
//                       <i className="nc-icon nc-light-3 text-danger"></i>
//                     </div>
//                   </Col>
//                   <Col
//                     xs="10
//                   "
//                   >
//                     {/* <div className="numbers">
//                       <p className="card-category">Revenue</p>
//                       <Card.Title as="h4">$ 1,345</Card.Title>
//                     </div> */}
//                   </Col>
//                 </Row>
//               </Card.Body>
//               <Card.Footer>
//                 <hr></hr>
//                 <div className="stats">
//                   <i className="now-ui-icons loader_refresh spin"></i>
//                   Updated 3 minutes ago
//                 </div>
//               </Card.Footer>
//               <Link
//                 to="./Viewin"
//                 variant="outline-dark"
//                 size="sm"
//                 className="btn btn-primary"
//               >
//                 View
//               </Link>
//             </Card>
//           </Col>
//           <Col lg="4" sm="6">
//             <Card className="card-stats">
//               <Card.Body>
//                 <h3>View Assignment</h3>{" "}
//                 <h5>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s
//                 </h5>
//                 <Row>
//                   <Col xs="0">
//                     <div className="icon-big text-center icon-warning">
//                       <i className="nc-icon nc-light-3 text-danger"></i>
//                     </div>
//                   </Col>
//                   <Col
//                     xs="10
//                   "
//                   >
//                     {/* <div className="numbers">
//                       <p className="card-category">Revenue</p>
//                       <Card.Title as="h4">$ 1,345</Card.Title>
//                     </div> */}
//                   </Col>
//                 </Row>
//               </Card.Body>
//               <Card.Footer>
//                 <hr></hr>
//                 <div className="stats">
//                   <i className="now-ui-icons loader_refresh spin"></i>
//                   Updated 3 minutes ago
//                 </div>
//               </Card.Footer>
//               <Button variant="outline-dark" size="sm">
//                 View
//               </Button>
//             </Card>
//           </Col>

//           <Col lg="4" sm="6">
//             <Card className="card-stats">
//               <Card.Body>
//                 <h3>View Assignment</h3>{" "}
//                 <h5>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s
//                 </h5>
//                 <Row>
//                   <Col xs="0">
//                     <div className="icon-big text-center icon-warning">
//                       <i className="nc-icon nc-light-3 text-danger"></i>
//                     </div>
//                   </Col>
//                   <Col
//                     xs="10
//                   "
//                   >
//                     {/* <div className="numbers">
//                       <p className="card-category">Revenue</p>
//                       <Card.Title as="h4">$ 1,345</Card.Title>
//                     </div> */}
//                   </Col>
//                 </Row>
//               </Card.Body>
//               <Card.Footer>
//                 <hr></hr>
//                 <div className="stats">
//                   <i className="now-ui-icons loader_refresh spin"></i>
//                   Updated 3 minutes ago
//                 </div>
//               </Card.Footer>
//               <Button variant="outline-dark" size="sm">
//                 View
//               </Button>
//             </Card>
//           </Col>

//           <Col md="12">
//             <Card className="card-tasks">
//               <Card.Header>
//                 <Card.Title as="h4">Note:</Card.Title>
//               </Card.Header>
//               <Card.Body>
//                 <div className="table-full-width">
//                   <Table>
//                     <tbody>
//                       <tr>
//                         <td>
//                           <Form.Check className="mb-1 pl-5">1.</Form.Check>
//                         </td>
//                         <td>Submit your Task , on Given Time</td>
//                       </tr>

//                       <tr>
//                         <td>
//                           <Form.Check className="mb-1 pl-5">2.</Form.Check>
//                         </td>
//                         <td>
//                           On late Submit task will be consider minus marking
//                         </td>
//                         {/* <td className="td-actions text-right">
//                           <OverlayTrigger
//                             overlay={
//                               <Tooltip id="tooltip-422471719">
//                                 Edit Task..
//                               </Tooltip>
//                             }
//                           >
//                             <Button
//                               className="btn-simple btn-link p-1"
//                               type="button"
//                               variant="info"
//                             >
//                               <i className="fas fa-edit"></i>
//                             </Button>
//                           </OverlayTrigger>
//                           <OverlayTrigger
//                             overlay={
//                               <Tooltip id="tooltip
//                               -829164576">Remove..</Tooltip>
//                             }
//                           >
//                             <Button
//                               className="btn-simple btn-link p-1"
//                               type="button"
//                               variant="danger"
//                             >
//                               <i className="fas fa-times"></i>
//                             </Button>
//                           </OverlayTrigger>
//                         </td> */}
//                       </tr>
//                       <tr>
//                         <td>
//                           <Form.Check className="mb-1 pl-5">3.</Form.Check>
//                         </td>
//                         <td>Read "Following makes Medium better"</td>
//                       </tr>
//                     </tbody>
//                   </Table>
//                 </div>
//               </Card.Body>
//               <Card.Footer></Card.Footer>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Dashboard;