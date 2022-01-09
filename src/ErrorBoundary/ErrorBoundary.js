import React, { Component } from 'react'
import FallBackUI from '../components/FallBackUI.js';


export default class ErrorBoundary extends Component {
  
   state={
       hasError:false,
   };
   static getDerivedStateFromError(error){
       //update the state to show the fallback UI
       console.log('getDerivedStateFromError');
      // console.log('error',error);
       return{hasError:true};
   }

   componentDidCatch(error,info){
       //you can log the error to an error reporting service
       console.log('componentDidCatch');
    //    console.log(error);
        console.log(info);
   }
    render() {
        if(this.state.hasError){
            return <FallBackUI/>;
        }
        else{
            //display the person component
           return this.props.children ;
        }
        
    }
}

