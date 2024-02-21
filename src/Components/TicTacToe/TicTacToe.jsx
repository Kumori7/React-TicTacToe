
import React, { useState,useRef } from "react";

import circle_icon from '../Assets/circle.png';

import cross_icon from '../Assets/cross.jpg';

import "./TicTacToe.css";

// empty array to store values of gameboard
let data = ["","","","","","","","",""]; 

const TicTacToe = () =>{

    // useState variable 
    let [count,setCount] = useState(0);
    let[lock, setLock] = useState(false); 
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    // store values in box array 

    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];







  
    // arrow functions for our boxes  
    const toggle = (e,num) =>{
        // whenever a user wins or make move we 
        // set lock to true 
        if(lock) {
            // if lock true we will return zero 
            // whenever a user wins we lock to true 
             
            return 0;

        }// end of if 

        // if our count is even num return 0
        if(count%2===0){

            // in element we will insert image
            e.target.innerHTML = `<img src ='${cross_icon}' >`;
            // now update data array with character X
            data[num]= "x";
            setCount(++count);
        } // end of if 

        // count variable is odd 
        else {

            e.target.innerHTML = `<img src ='${circle_icon}' >`;
            // now update data array with character y
            data[num]= "o";
            setCount(++count);

        }

        checkWin();
        
    } // end of toggle  

    const checkWin = () => {

        // horizontal check checks 
        if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
            // we will call this function when ever a player wins 
             won(data[2]);
        }

        else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
            won(data[5]);
        }

        else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
            won(data[8]);
        }

        // vertical check 
        if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
            won(data[6]);
        }

        else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
            won(data);
        }

        else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
            won(data[8]);
        }


        else if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
            won(data[2]);
        }

        // 

        else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
            won(data[6]);
        }

        // diagonal check 
    } // end of check win 

    const reset = () => {
         setLock(false);
         // reset game board values 
         let data = ["","","","","","","","",""]; 
         titleRef.current.innerHTML = 'Tic Tac Toe In <span>React</span>';

         box_array.map((e)=>{
             e.current.innerHTML = "";
         })
    }

    const won = (winner) => {
        setLock(true); 
        // so data cant be modified once player select tile on board 
        if(winner=== "x"){
             titleRef.current.innerHTML = `congratulations: <img src=${cross_icon}>`;
        }
       else if(winner=== "o"){
            titleRef.current.innerHTML = `congratulations: <img src=${circle_icon}>`;
       }
    }


    return(<div className="container">
        <h1 className="title" ref={titleRef}>Tic Tac Toe Game in <span>React</span></h1>
        <div className="board">

            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e) => {toggle(e,0)}} ></div>
                <div className="boxes" ref={box2} onClick={(e) => {toggle(e,1)}} ></div>
                <div className="boxes" ref={box3} onClick={(e) => {toggle(e,2)}} ></div> 
            </div>

            <div className="row2">
                <div className="boxes"ref={box4} onClick={(e) => {toggle(e,3)}} ></div>
                <div className="boxes"ref={box5} onClick={(e) => {toggle(e,4)}} ></div>
                <div className="boxes" ref={box6} onClick={(e) => {toggle(e,5)}} ></div>
            </div>

            <div className="row3">
                <div className="boxes" ref={box7} onClick={(e) => {toggle(e,6)}} ></div>
                <div className="boxes" ref={box8} onClick={(e) => {toggle(e,7)}} ></div>
                <div className="boxes" ref={box9} onClick={(e) => {toggle(e,8 )}} ></div>
            </div>

        </div>
        <button className="reset" onClick={() => {reset()}}>Reset</button>
    </div>);
}

export default TicTacToe;