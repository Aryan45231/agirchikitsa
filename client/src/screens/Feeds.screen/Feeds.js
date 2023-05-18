import React, { useState } from 'react';
import  Component from "../../components/index"
import './Feeds.css'; // Create a CSS file to style the component
import FeedViewModel from './feedsViewModel';

const Feed = () => {
  const {
        isOpen,
        handleClick,
        postFeed,
        isImgUrl,
  } = FeedViewModel()
  
    return (
      <div className='container' >
        <Component.Button title="Add Feed" onClick={handleClick}>Open Model</Component.Button>
        {isOpen && (
          <Component.Model open={isOpen} width={Component.deviceWidth-32} height={Component.deviceHeight-32}>
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
        )}
      </div>
    );
  };

export default Feed;