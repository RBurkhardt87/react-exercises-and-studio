export default function BookList() {
   let pageTitle = "My Reading List"
   let book1 = "When Women Were Dragons";
   let book2 = "Weyward";
   let book3 = "The Lost Apothecary";
   let book4 = "The Lost Bookshop";

   return (
      <div>
         <h3>{pageTitle}</h3>

         <img src={"https://m.media-amazon.com/images/I/914RoePuYvL._SY342_.jpg"} width="200" height="300" alt="When Women Were Dragons" />

         <img src={"https://m.media-amazon.com/images/I/91fiJmrOQaL._SY342_.jpg"} width="200" height="300" alt="Weyward" />

         <img src={"https://m.media-amazon.com/images/I/81jCAa020KL._SY425_.jpg"} width="200" height="300"  alt="The Lost Apothecary" />

         <img src={"https://m.media-amazon.com/images/I/91Kd+kTooAL._SY425_.jpg"} width="200" height="300"  alt="The Lost Bookshop" />
      </div>        
   );
}