import './App.css';
import React from "react";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/AboutPages/AboutPage";


function App() {

    const about = {
        title : "im title",
        body:"lorem ipsum",

    }
    // const car = {
    //     name:"BMW",
    //     price:200,
    //     model:"525"
    // }
    return (
        <div className="App">
            <AboutPage info={about}/>

            <MainPage />

            {/*//   <AboutUs/>*/}
            {/*//   <Portfolio/>*/}
            {/*//     <Manipage title={"Hello World"}/>*/}
            {/*//     <User name={"Nur"} lastname={"Kydyrmyshov"} age={"16"}/>*/}
            {/*//     <Product name={"apple"} price={"200$"}/>*/}
            {/*//     <Product name={"samsung"} price={"100$"}/>*/}
            {/*//     <Product name={"Redmi"} price={"150$"}/>*/}
            {/*//     <Car info={car}/>*/}
        </div>
    );
}

// function Car ({info}) {
//     console.log(info)
//     return(
//         <>
//             <h1>name-{info.name}</h1>
//             <p>price-{info.price}</p>
//             <p>model-{info.model}</p>
//         </>
//     )
// }
// function Product(props) {
//     return(
//     <ul>
//         <li>name: {props.name}</li>
//         <li>price: {props.price}</li>
//     </ul>
//     )
// }
// function User (props) {
//     return(
//         <ul>
//             <li>name: {props.name}</li>
//             <li>lastname: {props.lastname}</li>
//             <li>age: {props.age}</li>
//         </ul>
//     )
//
// }
// function AboutUs() {
//   return(
//       <>
//     <h1>title</h1>
//     <p>text text</p>
//       </>
//     );
// }
// function Manipage (props) {
//
//     return(
//         <div>
//            <h1>{props.title}</h1>
//            <p>LOrem ipsum dolor sit amet</p>
//         </div>
//     )
// }
// function Portfolio () {
//   return(
//       <ul>
//         <li>test 1</li>
//         <li>test 2</li>
//         <li>test 3</li>
//         <li>test 4</li>
//       </ul>
//
//   )
// }
export default App;