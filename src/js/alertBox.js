//Custom AlertBox, created by following tutorial
//https://www.developphp.com/video/JavaScript/Custom-Alert-Box-Programming-Tutorial

import { drawOptions } from "./initializePanel.js";
import { ViewModel } from "../Model/ViewModel_Test.js";
import { drawConnections } from "./ViewConnections.js";
import { draw } from "./VM_to_View.js";
import { animateNode } from "./exampleAnimation.js";

let width = window.innerWidth;
let height = window.innerHeight;

let dialogOverlay = $("#dialogOverlay");
let introBox = $("#introBox");
let exampleBox = $("#example");
let introNext = $("#introNext");
let exampleNext = $("#exampleNext");


function initPanel() {

    this.render = function(){

        let position = String(width/2-700/2) + "px";

        dialogOverlay.css("display","block");
        dialogOverlay.css("height",height);
        introBox.css("top","50px");
        introBox.css("left", position);
        introBox.css("display", "block");

        drawOptions();
        introNext.html('<button form="profileData" type="submit" id="nextButton">Submit</button>');
    };

    this.next = function() {
        introBox.css("display", "none");
        let intro = new examplePanel();
        intro.render();
        $("#startButton").on("click", intro.next);
    }
}

function examplePanel() {

    this.render = function(){
        let position = String(width/2-700/2) + "px";
        exampleBox.css("top","50px");
        exampleBox.css("left", position);
        exampleBox.css("display", "block");
        //animateNode();
        exampleNext.html('<button type="submit" id="startButton">Start </button>');
    };

    this.next = function() {
        exampleBox.css("display", "none");
        dialogOverlay.css("display","none");

        draw(ViewModel);
        drawConnections(ViewModel.Connections);
    }
}

export { initPanel, examplePanel }