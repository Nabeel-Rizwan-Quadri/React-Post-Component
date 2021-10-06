const CustomPost = ({info}) => {

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
        {
          info.image.map((item, index) =>  {
            return <img className="images" src={item[index]} alt="avatar"/>
          })
        }
        

      </div>
      
      <div className="footer">
        <button>Like</button>
        <button>comment</button>
        <button>share</button>
      </div>

    </div>
  );
};

export default CustomPost;
