// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import unityIcon from "./images/unity.svg"
import cSharpIcon from "./images/csharp.svg"
import webGlIcon from "./images/webgl.svg"
import androidIcon from "./images/android.svg"
import iOSIcon from "./images/ios.svg"
import ps4Icon from "./images/ps4.svg"
import windowsIcon from "./images/windows.svg"
import switchIcon from "./images/switch.svg"
import xboxIcon from "./images/xbox.svg"

//Work Images
import workImage1 from "./images/boddle.png"
import workImage2 from "./images/realms.png"
import workImage3 from "./images/protosphere.png"
import workImage4 from "./images/eboh.jpg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import linkdedInIcon from "./images/linkedin.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Ammar",
  headerTagline: [
    //Line 1 For Header
    "Adding Game",
    //Line 2 For Header
    "to Everyone's Life!",
    " "
  ],
  //   Header Paragraph
  headerParagraph:
    "Professional Unity Game Developer. Believes in creating an immersive game for the user which they can enjoy playing again and again!",

  //Contact Email
  contactEmail: "ammarfast123@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Boddle - Fill Up on Learning", //Project Title - Add Your Project Title Here
      para:
        "Boddle is an educational game that delivers learning materials through interactive 3D gameplay; keeping students engaged & motivated to practice and review! ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      workImage1,
      //"https://media.bizj.us/view/img/11100150/medium-boddle-port*1200xx1549-871-0-48.png",
      //"/images/work/boddle.png",
        //"https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://www.boddlelearning.com/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Realms of Light", //Project Title - Add Your Project Title Here
      para:
        "Realms of Light is a Massive Multiplayer Online Real Time Strategy game revolving around the creation, development, control, and conquest of player controlled villages and contested locations.A blockchain based MMO Real Time Strategy Kingdom Builder using Light to reward winning players with a regular real-world income stream.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      workImage2,
      //"/images/work/realms.png",
      //"http://realmsoflight.wpengine.com/wp-content/uploads/2019/04/logo-1.png",
        //"https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://www.youtube.com/watch?v=BvgXl5wt088",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Protosphere", //Project Title - Add Your Project Title Here
      para:
        "ProtoSphere is business collaboration software that allows your organization to quickly create a 3D immersive environment optimized for business applications such as e-learning, virtual meetings and virtual conference events, scientific research and development, and sales and manufacturing collaborations involving rich data visualization. ProtoSphere allows global organizations to effectively bring together their best people and relevant information to make optimal business decisions, from anywhere, at anytime.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      workImage3,
      //"/images/work/protosphere.png",
      //"https://static.wixstatic.com/media/f93f36_21baaacbf75c46cd9bffcba951dba367.jpg/v1/fill/w_253,h_130,al_c,lg_1,q_80,usm_1.20_1.00_0.01/f93f36_21baaacbf75c46cd9bffcba951dba367.webp",
        //"https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://www.protonmedia.com/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Epic Battles of History", //Project Title - Add Your Project Title Here
      para:
        "Epic Battles of History is a free-to-play online digital collectible card game where players face off against each other while harnessing the powers of legendary historical figures and fictional characters.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      workImage4,
      //"/images/work/eboh.jpg",
       // "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://store.steampowered.com/app/718750/Epic_Battles_of_History/",
    },
    /*{
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Project Five", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },*/

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Professional Unity Game Developer. Believes in creating an immersive game for the user which he can enjoy playing again and again! Hardcore gamer by the core, always scrutinizing game dynamics to discover core game-play mechanics and designs.",
  aboutParaTwo:
  "",
    //"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
  "",
    //"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //aboutImage:
  //  "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: unityIcon,
      para:
      "",
        //"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 2,
      img: cSharpIcon,
      para:
      "",
        //"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 3,
      img: webGlIcon,
      para:
      "",
      //  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 4,
      img: androidIcon,
      para:
      "",
        //"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 5,
      img: iOSIcon,
      para:
      "",
        //"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 6,
      img: ps4Icon,
      para:
      "",
      //  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 7,
      img: windowsIcon,
      para:
      "",
        //"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 8,
      img: switchIcon,
      para:
      "",
        //"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 9,
      img: xboxIcon,
      para:
      "",
        //"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: linkdedInIcon, url: "https://www.linkedin.com/in/muhammad-ammar-aslam-7100aa172/" },
    {
      img: githubIcon,
      url: "https://github.com/Ammar-Aslam",
    },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],
  
  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com


