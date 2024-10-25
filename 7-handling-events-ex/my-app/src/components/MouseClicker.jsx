import reactImage from '../assets/react.svg';

const MouseClicker = () => {
  const handleClick = (event) => {
    console.log("Name: ", event.target.name);
    alert("Name: " + event.target.name);
  };

  const imageClick = (event) => {
    console.log("Image source: ", event.target.src);
    
    alert("Image source: " + event.target.src);
  };

  return (
    <>
      <button name="one" onClick={handleClick}>
        Click me!
      </button>
      <button name="two" onClick={imageClick}>
        <img src={reactImage} alt="React Logo" />
      </button>
    </>
  );
};

export default MouseClicker;

// Come è possibile evitare che l'attributo name del pulsante venga visualizzato sulla console quando si clicca sull'immagine?
// Rendendo l'attributo name dell'immagine uguale a null.
// Rendendo l'attributo name dell'immagine uguale a "".
// Rendendo l'attributo name dell'immagine uguale a undefined.
// Rendendo l'attributo name dell'immagine uguale a false.