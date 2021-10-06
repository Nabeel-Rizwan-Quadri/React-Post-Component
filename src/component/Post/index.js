const CustomPost = ({info}) => {

  const butn = () => {
      alert("Button per kiun click kia bhai woh assignmnet ka part nh tha")
  }

  return (
    <div className="card">

      <div className="header">

        <img className="profilePicture" src={info.avatars} alt="avatar"/>
        
        {info.createdBy}
        <br></br>

        created on: {info.createdAt}
      </div>

      <div className="text">
        {info.description}
      </div>

      <div className="photos">
        {/* calling grid image component here */}
        {<img className="images" src={info.image[0]} alt="avatar"/>}
        {<img className="images" src={info.image[1]} alt="avatar"/>}
        {<img className="images" src={info.image[2]} alt="avatar"/>}
        {<img className="images" src={info.image[3]} alt="avatar"/>}
   
        {/* {
          info.image.map((item, index) =>  {
            return <img className="images" src={item[index]} alt="avatar"/>
          })
        } */}
      </div>
      
      <div className="footer">
        <button onClick={butn}>Like</button>
        <button onClick={butn}>comment</button>
        <button onClick={butn}>share</button>
      </div>

    </div>
  );
};

export default CustomPost;
