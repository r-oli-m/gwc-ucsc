import React from 'react';
import PhotoSlider from './PhotoSlider';
import "../styles/Welcome.css";

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1 className="title">&lt;\Girls Who Code @ UCSC&gt;</h1>
      <h3 className="welcome-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.
      </h3>

      <table>
        <tbody> {/* Add tbody here */}
          <tr>
            <td> {/* Wrap each PhotoSlider in a td */}
              <PhotoSlider 
                name='img1' 
                image='https://media.licdn.com/dms/image/C4D1BAQExt2gb7chXPQ/company-background_10000/0/1583295048993/girlswhocode_cover?e=2147483647&v=beta&t=AIZD0J-1rK4wQk5X1DLlBS4cUPPh3WRvlNRIVbyRRCk'
              />
            </td>
            <td>
              <PhotoSlider 
                name='img2' 
                image='https://i.ytimg.com/vi/pB-oMx00mg4/maxresdefault.jpg' 
              />
            </td>
            <td>
              <PhotoSlider 
                name='img3' 
                image='https://gwc.soe.ucsc.edu/sites/default/files/content-sections/2020-08/looker%20tour%20gwc%20.jpg' 
              />
            </td>
            <td>
              <PhotoSlider 
                name='img4' 
                image='https://www.collegetransitions.com/wp-content/uploads/2024/01/GWCODE.jpg' 
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Welcome;
