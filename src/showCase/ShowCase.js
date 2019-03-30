import React, { Component } from 'react';
import './showCase.css';
import ShowBox from './showcase-box/ShowBox';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';

export default class ShowCase extends Component {

    render() {
        const options = {
            items: 4,
            nav: true,
            rewind: false,
            autoplay: false
        };

        const events = {
            onDragged: function (event) { },
            onChanged: function (event) { }
        };
        const boxes = [

            {
                url_img: "../../assets/dead.jpg",
                title: "Site",
                subtitle: "RH Outdoor"

            }, {
                url_img: "../../assets/dead.jpg",
                title: "Aplicativo",
                subtitle: "Kook"
            }, {
                url_img: "../../assets/dead.jpg",
                title: "Aplicativo",
                subtitle: "Arte No Fazer"
            }, {
                url_img: "../../assets/dead.jpg",
                title: "Folder",
                subtitle: "Label design"
            }, {
                url_img: "../../assets/dead.jpg",
                title: "Aplicativo",
                subtitle: "Kook"
            }, {
                url_img: "../../assets/dead.jpg",
                title: "Aplicativo",
                subtitle: "Arte No Fazer"
            }, {
                url_img: "../../assets/dead.jpg",
                title: "Aplicativo",
                subtitle: "Arte No Fazer"
            }

        ]
        return (
            <div>
                <h2 className='last-works'>Últimos Trabalhos</h2>

                <OwlCarousel options={options} events={events} >
                    {boxes.map((box) => {
                        return <ShowBox url_img={box.url_img} title={box.title} subtitle={box.subtitle} ></ShowBox>
                    })}

                </OwlCarousel>
            </div>

        )

    }

}
