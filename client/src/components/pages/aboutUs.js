import React from "react";
import { Helmet } from "react-helmet";
import "../../styles/pages.css";

function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="paragraphContainer">
        <h1> About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
          dui ante. Mauris augue nisl, volutpat at purus in, posuere pretium
          odio. Etiam laoreet, justo ac vehicula vulputate, mauris nibh
          fringilla leo, in feugiat risus orci commodo sem. In sed imperdiet
          est. Mauris erat justo, molestie id metus tristique, semper pretium
          ex. Vivamus varius sodales sapien ultrices fringilla. Sed et vulputate
          elit. Vivamus id odio sed tellus hendrerit aliquam. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Mauris venenatis egestas sagittis. Pellentesque arcu
          ligula, congue posuere mattis posuere, lobortis eget elit. Phasellus
          rutrum arcu et eros finibus elementum ut eget sapien. Nam dignissim
          orci non enim maximus, quis posuere metus bibendum. Aenean finibus
          nibh lectus, id eleifend orci scelerisque in. Aliquam erat volutpat.
          Morbi hendrerit ac felis id fringilla.
        </p>
        <p>
          Vivamus id lacinia nisi. Nulla interdum lectus mi, nec blandit ante
          pulvinar ut. In iaculis, libero a elementum viverra, sem libero
          maximus orci, nec dapibus sapien urna id risus. Nam ultrices maximus
          lectus, quis elementum tellus consectetur in. Ut cursus hendrerit
          efficitur. Maecenas eleifend, arcu vitae ultricies tempus, odio nunc
          dapibus nibh, ut volutpat urna odio ac felis. In elementum luctus orci
          id pretium. Mauris commodo ac mi vel ornare. Suspendisse tincidunt
          risus posuere pharetra posuere. Ut vestibulum dapibus risus,
          vestibulum dictum eros tempus eu. Fusce lacinia enim sit amet nisl
          placerat, eget pellentesque quam rutrum. Sed non ipsum ut lacus
          elementum mattis. Donec dictum tristique placerat. Nam tempor erat
          vitae ante maximus venenatis. Pellentesque pulvinar tortor et quam
          vulputate tristique.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
