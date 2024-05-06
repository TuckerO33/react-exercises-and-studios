import './styles.css';

function Button() {
   const onLearnMore = () =>
      window.alert("Splish Splash");

   return ( 
         <button>
            Learn More
         </button>
   );
}

export default Button;