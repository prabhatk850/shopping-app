import React from 'react'
import Section from './Section'
import { useLocation } from 'react-router-dom';

function Index() {
  const {state} = useLocation();
  
  const {Gender,T1,T2,T3}= state
 
  return (

    <div>
        <Section  Gender={Gender} T1={T1} T2={T2} T3={T3}   />
    </div>
  )
}

export default Index