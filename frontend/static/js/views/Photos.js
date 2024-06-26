//import the formatted
import AbstractView from "./AbstractView.js";

//extend the formatted to use for individual view
export default class extends AbstractView{
    //use to call the function below them
    constructor(){
        super();
        this.setTitle("Photos");
    }
    //async -> promise return value || the value is template html
    async getHtml(){
        return `
        <i class="fi fi-rr-add-image"></i>
        <div class="featured-photos" id="featured-photos">
            <img class="potrait" src="https://i.pinimg.com/474x/af/02/ef/af02ef78c64ce3e8c494c6a4a1d514d6.jpg">
            <img class="landscape" src="https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/leading-lines.jpg">
            <img class="potrait" src="https://www.worldphoto.org/sites/default/files/default-media/5_Japan%20-%20Mt%20Fuji.jpg">
            <img class="square" src="https://d1hjkbq40fs2x4.cloudfront.net/2020-04-06/files/INTERESTING-COMPOSITION-TECHNIQUES_LADNSCAPE-B_LR.jpg">
            <img class="square" src="https://travelr2.s3-ap-southeast-1.amazonaws.com/article/1595837311/original/20200727-9d9133e0-5c63-4c4a-b752-7803502e3ef0.png">
            <img class="square" src="https://i.pinimg.com/736x/18/b5/9c/18b59c7fd9e25f8c4da3ca277b8170ba.jpg">
            <img class="hidden square" src="https://favim.com/pd/p/orig/2018/08/21/aesthetic-photography-chic-Favim.com-6200138.jpg">
            <img class="hidden square" src="https://images.unsplash.com/photo-1517315003714-a071486bd9ea?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D">
            <img class="hidden square" src="https://img.wattpad.com/fbceadadb68d8408c0d1a9f892632f1c7afebc9a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f644a6a6649304e356e52706a42413d3d2d3538323438323738362e313533336331316232333634316537613734303334393935363838342e6a7067?s=fit&w=720&h=720">
            <img class="hidden potrait" src="https://i.pinimg.com/736x/49/15/50/491550dc1457f479bebdf86e4e7fb10e.jpg"> 
        </div>
        `;
    }
}