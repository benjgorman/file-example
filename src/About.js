import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import surfvan from './images/surf_van.jpeg';


export function About() {
  return (
      <Col>

        <article>
        <Image src={surfvan} alt="Surf Van" fluid width="800px" className="rounded-bottom mx-auto d-block"/>

        <h1>Our Story!</h1>
          <p>
            French press percolator qui, crema latte sweet as froth cinnamon medium white. Strong sit medium roast, arabica shop sweet et percolator. Trifecta lungo, sweet mocha sweet doppio caffeine. Skinny decaffeinated french press beans iced cup, ut mocha extra grounds redeye. Cinnamon a est single origin saucer aromatic shop whipped cappuccino.
          </p>
          <p>
            Single shot, siphon java plunger pot, barista white mug aftertaste ristretto fair trade. Turkish spoon, galão, carajillo, cinnamon organic foam decaffeinated café au lait. Redeye coffee spoon barista blue mountain, frappuccino extraction chicory qui beans organic. Pumpkin spice, seasonal plunger pot variety fair trade dark sugar chicory turkish. Coffee robusta aromatic, coffee, aftertaste frappuccino et, cinnamon at macchiato seasonal acerbic.
          </p>
          <p>
            Steamed, saucer single shot, whipped saucer coffee instant and black. Viennese doppio kopi-luwak flavour robust carajillo sugar in mazagran café au lait. Coffee et variety robust carajillo shop brewed strong. Affogato, galão cortado, acerbic ristretto caffeine half and half acerbic siphon body. Cup, dark froth white mocha medium mazagran eu black medium.
          </p>
          <p>
            Latte, aftertaste, robusta, latte, lungo bar froth aromatic cinnamon. Filter breve steamed, sit arabica saucer ristretto breve dripper mocha kopi-luwak half and half. Trifecta shop redeye cultivar redeye americano, steamed seasonal caramelization galão foam. Con panna, instant single shot id cappuccino et wings. Cinnamon sugar flavour, cup a dark in chicory single shot plunger pot.
          </p>
          <p>
            Strong ut mocha, galão robusta cappuccino spoon crema cinnamon. Cup cultivar frappuccino, body extra, sugar foam trifecta cappuccino cup cinnamon barista. Sweet lungo, cup, instant saucer cinnamon arabica affogato. Aged strong carajillo cup saucer coffee half and half. As french press spoon et in steamed lungo.
          </p>
        </article>
      </Col>
  );
}
