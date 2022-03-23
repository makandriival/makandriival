

       import React from 'react';
       import {useState} from 'react';
       import './about.css';
       
       
       
       
       
       
       const AboutTxt = () => {
         
         
         const SText = () => {
           return (
             <p>
            <p>
            ...working online and building my House in parallel.
            I'm studying JavaScript becoz i love to work remotely, and I am fascinated by the range of possible outcomes of 
            mixing HTML, CSS, and JS. Also the speed of development of new technologies is enormous. It gives me that sense of security that if I keep learning I will always be in the trend.
Thx for reading my story.  
</p>
<p>
Now you can go ahead and click the ‘React’ Icon in the Navigation bar it will take you to my portfolio, even tho i never worked as a developer I already did a couple of projects. Check them out pls!
</p>
<a href='#about' onClick={()=>{extTxt('b')}}>Read more...</a>
            </p>
           )
          };
          
          const BText = () => {
            return (
              <p className='big__text'>
 <a href='#about' onClick={()=>{extTxt('s')}}>Read less...</a>
            <br />
              <p> Hi there! My name is Andrii Makarov, i'm a beginner JavaScript developer from Ukraine. I was born in the mid 90's, in a tiny town of Okhtyrka, Symy Region. If you’ve been following recent events you have probably heard about it. 
In the university I was studying engineering, to be honest I was not the best student. What I really wanted is to explore the world. 
</p>
<p>After my second year of school I went for an internship to Europe and spent almost half a year in the south of Deutschland. Most beautiful mountains are there (I have never seen Himalayans, but so far Alps are the most beautiful for me).
Next summer I wanted to go a little further so Scandinavia was my next choice. Sweden it was. I saw the North sea, and even swimmed for a couple minutes. Nature is a lot like Ukraine except much colder and the wind from the sea was killing me. 
The most important knowledge was, of course, the Swedish take on living life not harder than you need. I'm pretty sure that you have heard something about “Lagom”. If not, I suggest you dive in because it is a life changing philosophy. 
</p>
<p>
Next logical step was to go to another continent. I wanted to go to Australia and see all those crazy creatures they have there, unfortunately I had limited resources since i paid for everything from my own pocket. So USA it was!
Here you go, I have 700$ in reserve and I am on blessed land. My personal American dream story starts there. I’ve met a lot of good people and eventually was so in love with the country that I decided to stay there. 
First I moved to NewYork, lived in Brooklyn. After Couple years I got bored and tired of the city life and moved to South Florida, Hallandale Beach, in the north suburbs of Miami. After a while it got too crowded for me, I needed to recharge my batteries. So I found a job in the mountains of North California, near mount Shasta. For almost a year I lived on a mountain, and there it was decided, that it's time for me to grow up and think seriously about myself and my future!
</p>
<p> So here is my long story short! Now I'm back in Ukraine, working online and building my House in parallel.
I'm studying JavaScript becoz i love to work remotely, and I am fascinated by the range of possible outcomes of mixing HTML, CSS, and JS. Also the speed of development of new technologies is enormous. It gives me that sense of security that if I keep learning I will always be in the trend.
Thx for reading my story.  
</p>
<p>
Now you can go ahead and click the ‘React’ Icon in the Navigation bar it will take you to my portfolio, even tho i never worked as a developer I already did a couple of projects. Check them out pls!
</p>           
            </p>
            )
          };
          const [abText, extTxt]= useState('s');
          return (
            
            <div>
          <section className='aboutTxt'>
            {abText==='s'?<SText/>:<BText/>}
            
          </section>


        </div>

           
         )
       }
       
       export default AboutTxt

