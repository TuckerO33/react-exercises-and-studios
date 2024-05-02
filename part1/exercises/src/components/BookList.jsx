export default function BookList() {
   let pageTitle = "I Also Read and Am Smart";
   let book1 = "https://m.media-amazon.com/images/I/610F7lDZdbL._SL1491_.jpg";
   let book2 = "https://cdn11.bigcommerce.com/s-aqhrs1x7/images/stencil/1280x1280/products/3484/8823/BK0264400_selfcare_1__94505.1691004222.jpg?c=2";
   let book3 = "https://m.media-amazon.com/images/I/81L8M-OlSIL._SL1500_.jpg";

   return (
      <div class= "similarComponents">
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Dumb pop book 1" />
         <img src={book2} alt="heartwarming whatever book" />
         <img src={book3} alt="another heartwarmer, my heart is getting too warm" />
      </div>      
   );
}