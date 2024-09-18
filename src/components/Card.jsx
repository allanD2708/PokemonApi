import '../sass/Card.scss'



// const Card = ({ name, img, name2, img2 }) => {
//   return (
//     <div className="card">
//       <div >
//       <div className="card__circle"></div>
//         <p className="card__name">{name}</p>
//         <img className="card__img" src={img} alt="pokemon img" />
//       </div>
       
//        <div className='card2'>
//        <div className=""></div>
//         <p className="">{name2}</p>
//         <img className="" src={img2} alt="pokemon img" />
//        </div>


//     </div>
  
//   )
// }

const Card = ({ name, img, name2, img2 }) => {
  return (
    <div className="card">
      <div className="card__circle"></div>
      <p className="card__name">{name}</p>
      <img className="card__img" src={img} alt="pokemon img" />
    </div>
  );
};

export { Card };
