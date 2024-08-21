
export default function HobbyLinks() {


    const hobbyLinks = ["https://www.youtube.com/watch?v=bTIE-jgpy8I", "https://www.youtube.com/watch?v=Vmtkc7FOWLw"];

    return (
    <>
        
          <h3>My Hobbies:</h3>
                         
        <div>
            <a href={hobbyLinks[0]}> DIY Harry Potter Ornaments </a>
            <br/>
            <a href={hobbyLinks[1]}> DIY Dream Catchers </a>
        </div>
    </>
    );
};