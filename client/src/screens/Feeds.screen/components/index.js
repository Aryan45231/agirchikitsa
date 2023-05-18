import Component from "../../../components/index.js"
const  AddFeedModel = ({
    isOpen,
    handleClick,
    postFeed,
    isImgUrl    
})=>{
    return <Component.Model open={isOpen} width={400} height={300}>
    <Component.Row  >
      <button onClick={handleClick} >  Close </button>
    </Component.Row>
    <Component.Row>
          <h1> Add Feed </h1>
    </Component.Row>
    <Component.Row>
      {isImgUrl &&(
        <img src={isImgUrl} alt="not exist" />
      )
      }
       <textarea className="FeddDescriptionInput" col="10" row="20" placeHolder="type..." ></textarea>
    </Component.Row>
    <Component.Spacer position={"top"} size ={20} />
    <Component.Row justifyContent="Space-Between" alignItems="center"  >
      <Component.Column>
          <div>
            Icoms
          </div>
      </Component.Column>
      <Component.Column>
          <Component.Button title="Post" onClick={postFeed} >Add</Component.Button>
      </Component.Column>
    </Component.Row>
  </Component.Model> 
}