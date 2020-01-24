import React from "react";
import Header from "../components/header";
import { Link } from "gatsby";
import db from "../firebase/firebase"


const addGames = async () => await db.collection("Games").add({
  first: "Alan",
  middle: "Mathison",
  last: "Turing",
  born: 1912
}).then(function(docRef) {
console.log("Document written with ID: ", docRef.id);
})

export default props => {


  return (
      <>
      <Header />
      <div>{props.children}</div>
      <br></br>
      <br></br>
      <footer>
        <div className="footer">
          +46 7213682726
          <br></br>
          <br></br>
          Boho5, 19 trimdon avenue, Acklam, Middlesbrough, England
          <br></br>
          <br></br>
          <Link style={{ marginRight: 10 }} to="/tsndcs">
            Terms and Conditions
          </Link>
          |
          <Link style={{ marginLeft: 10 }} to="/policy">
            Privicy Policy
          </Link>
          <br></br>
          <br></br>© 1997-2019 All rights reserved. Intechnic Corporation
        </div>
      </footer>
      </>
  );
};
