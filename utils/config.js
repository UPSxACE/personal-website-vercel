export const $profilePicture = "./me128.png";
export const $aboutMePicture = "/about_me_artic.png";

// In Pixels:
export const $padding1 = 32; // Front-page arrows,
export const $margin1 = 24; // On top of the name on the frontpage, below frontpage social media icons

// In Rems (scales with custom user configuration):

//color config consts will later become arrays, in order to represent the alternative themes(dark and modern)
export const $backgroundColor = ["#21252a", "#21252a", "#303134"]; //"#fff"
export const $borderColorImproved = [
  "1px solid rgba(0, 0, 0, 0.07)",
  "1px solid rgba(0, 0, 0, 0.07)",
  "1px solid rgba(0, 0, 0, 0.07)",
];
export const $borderColorImproved3px = [
  "3px solid rgba(0, 0, 0, 0.07)",
  "3px solid rgba(0, 0, 0, 0.07)",
  "3px solid #52452e",
];
export const $borderColor = [
  "rgba(191,191,191,0.58)",
  "rgba(191,191,191,0.58)",
  "rgba(191,191,191,0.58)",
];
export const $borderColor2 = [
  "rgba(191,191,191,0.58)",
  "rgba(191,191,191,0.58)",
  //"#52452e",
  "rgba(191,191,191,0.58)",
];

export const $borderColorLighter = ["#eee", "#eee", "#52452e"];
export const $borderColorSolid = ["#ced4da", "#ced4da", "#ced4da"]; //not used yet
export const $boxShadow1 = [
  "rgb(95 95 95 / 28%)",
  "rgb(0 0 0 / 28%)",
  "rgb(0 0 0 / 28%)",
];
export const $boxShadow2 = [
  "rgb(255 76 96 / 50%)",
  "rgb(255 76 96 / 50%)",
  "rgb(82 69 46 / 50%)",
];
export const $color0 = ["#f8f9fa", "#f9f9ff", "#f9f9ff"]; //#303134, #021622"
export const $color1 = ["#fff", "#353356", "#52452e"]; //old main color: #f9f9ff
export const $color2 = ["#FF4C60", "#FF4C60", "#52452e"];
export const $color2Alt = ["#FF4C60", "#FF4C60", "#ffb100"];
export const $color3 = ["#e0e0e5", "#e0e0e5", "#e0e0e5"]; //"#ececec"
export const $color4 = ["#FF4C60", "#FF4C60", "#fff"];
export const $color5 = ["#FF4C60", "#FF4C60", "#ffb100"]; // 52452e
export const $color6 = ["#21252a", "#21252a", "#21252a"]; //#021622, #303134, #21252a
export const $color7 = ["#fff", "#fff", "#fff"];
//2 and 4
export const $componentBackground = ["#fff", "#fff", "#fff"];
export const $textColor0 = ["#21252a", "#fff", "#fff"];
export const $textColor1 = ["#21252a", "#21252a", "#21252a"];
export const $textColor1Alt = ["#353353", "#353353", "#353353"];
export const $textColor2 = ["#ffffff", "#fff", "#fff"];
export const $textColor2Alt = ["#ffffff", "#ffffff", "#ffffff"];
export const $textColor2Lighter = ["#dee3e4", "#dee3e4", "#dee3e4"];
export const $textColor3 = ["#3a3a3a", "#3a3a3a", "#3a3a3a"];

// Font families:
export const $fontFamily1 = "'Poppins', sans-serif";
export const $fontFamily2 = "'Nunito Sans', sans-serif";
export const $fontFamily3 = "'Montserrat', sans-serif";

// EmailJS Config
export const $emjs_endpoint =
  "https://api.emailjs.com/api/v1.0/email/send-form";
export const $emjs_service_id = "INSER_EMAIL_JS_SERVICE_ID";
export const $emjs_template_id = "INSER_EMAIL_JS_TEMPLATE_ID";
export const $emjs_user_id = "INSER_EMAIL_JS_USER_ID";

// Misc
export const $mapLocation =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.00302705745!2d-6.757794067689142!3d41.806695211428085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3a49fc3e4f4915%3A0xe96f35f2dfacc35!2sLargo%20Cel.%20Albino%20Lopo%2023%2C%205300-111%20Bragan%C3%A7a!5e0!3m2!1spt-PT!2spt!4v1657979060419!5m2!1spt-PT!2spt";
